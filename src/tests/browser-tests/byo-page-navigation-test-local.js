import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
//import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js';
//import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";


//import { BYOpage } from './byo-page-navigation.js';

export const options = {

//This script combines three scenarios, and these scenarios are run in sequence. 


  scenarios: {


  //The ui_shared_iter_scenario starts immediately. X VUs try to use n iterations as quickly as possible (some VUs may use more iterations than others).

  /*
     ui_shared_iter_scenario: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1,
      startTime: "0s",
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },

    */


 //The ui_per_vu_scenario starts after 10s. In this case, x VUs each run n iterations. 

    ui_per_vu_scenario: {
      executor: "per-vu-iterations",
      vus: 1,
      iterations: 1,
      startTime: "2s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
   

  //The ui_ramping_vus_scenario ramps up gradually based and stays with the x VUs for specific period of time, before ramping down.

  /*
    ui_ramping_vus_scenario: {
      executor: 'ramping-vus',
      gracefulStop: '10s',
      stages: [
        { target: 50, duration: '50s' }, // traffic ramp-up from 1 to n users over x minutes/seconds.
        { target: 50, duration: '5m' }, // stay at n users for x minutes
        { target: 0, duration: '10s' }, // ramp-down to 0 users
      ],
      gracefulRampDown: '10s',
      //exec: 'ui_ramping_vus_scenario',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
    
    */
  },


  thresholds: {
    browser_web_vital_lcp: ["p(90) < 10000"],
    checks: ["rate==1.0"],
  },
};

export default async function () {

  const context = browser.newContext();
  const page = context.newPage();

  try {

    let executionId = Math.random().toString(36).slice(2);

    console.log(" ================================ start of test execution id : " +executionId + "  ================================== ");

    await page.goto("https://web-testing.upstart.com/byo/bosak-kia/");

    check(page, {
      header: (p) =>
        p.locator('//h2[text()="Select a Model"]').textContent() ==
        "Select a Model",
    });

    await page.locator('//div[@class="button-div BYOModelOptions"][1]').click();

    //const submitButton = page.locator('//*/button[@type="submit"]');

    await page.locator('//button[@type="submit"]').click();

    //await Promise.all([page.waitForNavigation(), submitButton.click()]);
    page.screenshot({ path: "./assets/byo_page_step2.png" });

    check(page, {
      header: (p) =>
        p.locator('//h2[text()="Select a Trim"]').textContent() ==
        "Select a Trim",
    });

    //const submitTrimButton = page.locator('//div[@class="BYOTrimsContainer"]/following-sibling::div/button[@type="submit"]');
    
    await page
      .locator(
        '//div[@class="BYOTrimsContainer"]/following-sibling::div/button[@type="submit"]'
      )
      .click();

    //await Promise.all([page.waitForNavigation(), submitTrimButton.click()]);
    page.screenshot({ path: "./assets/byo_page_step3.png" });

    check(page, {
      header: (p) =>
        p
          .locator(
            '//div[@class="BYOColorsContainer"]/div[text()="Exterior Color"]'
          )
          .textContent() == "Exterior Color",
    });

    
    //const submitFinishButton = page.locator('//button[text()="Finish Build"]');
    //await Promise.all([page.waitForNavigation(), submitFinishButton.click()]);
    
    await page.locator('//button[text()="Finish Build"]').click();


    //sleep(1);

    page.screenshot({ path: "./assets/byo_page_step4.png" });


    console.log(" ========================================== end of test execution id :  " +executionId + "  ============================================= ");

  } finally {
    page.close();
    context.close();
  }

}

// generate test run metrics
 export function handleSummary(data) {
    return {
        './dashboards/reports/BYOReport.html': htmlReport(data, { debug: true })
    };
  }

