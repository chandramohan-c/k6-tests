import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
//import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js';
//import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js'

//import { BYOpage } from './byo-page-navigation.js';

export const options = {
  /*This script combines two scenarios, with sequencing:
The ui_shared_iter_scenario starts immediately. X VUs try to use n iterations as quickly as possible (some VUs may use more iterations than others).
The ui_per_vu_scenario starts after 10s. In this case, x VUs each run n iterations. 
*/

  scenarios: {
    /* ui_shared_iter_scenario: {
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

    /*
    ui_ramping_vus_scenario: {
      executor: 'ramping-vus',
      gracefulStop: '60s',
      stages: [
        { target: 1, duration: '1m' }, // traffic ramp-up from 1 to n users over x minutes.
        { target: 1, duration: '1m' }, // stay at n users for x minutes
        { target: 0, duration: '1m' }, // ramp-down to 0 users
      ],
      gracefulRampDown: '60s',
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
    browser_web_vital_lcp: ["p(90) < 20000"],
    checks: ["rate==1.0"],
  },
};

export default async function () {
  const context = browser.newContext();
  const page = context.newPage();

  try {
    // const byoPage = new BYOpage(pageLoad);
    // await byoPage.gotoBYOPageURL();
    // await byoPage.navigateBYOPageSteps();
    //page = pageLoad;

    await page.goto("https://web-testing.upstart.com/byo/bosak-kia/");
    sleep(7);
    check(page, {
      header: (p) =>
        p.locator('//h2[text()="Select a Model"]').textContent() ==
        "Select a Model",
    });

    page.locator('//div[@class="button-div BYOModelOptions"][1]').click();

    //const submitButton = page.locator('//*/button[@type="submit"]');

    page.locator('//button[@type="submit"]').click();

    //await Promise.all([page.waitForNavigation(), submitButton.click()]);
    page.screenshot({ path: "./assets/byo_page_step2.png" });
    //sleep(4);
    check(page, {
      header: (p) =>
        p.locator('//h2[text()="Select a Trim"]').textContent() ==
        "Select a Trim",
    });

    //const submitTrimButton = page.locator('//div[@class="BYOTrimsContainer"]/following-sibling::div/button[@type="submit"]');
    page
      .locator(
        '//div[@class="BYOTrimsContainer"]/following-sibling::div/button[@type="submit"]'
      )
      .click();
    //await Promise.all([page.waitForNavigation(), submitTrimButton.click()]);
    page.screenshot({ path: "./assets/byo_page_step3.png" });
    //sleep(4);
    check(page, {
      header: (p) =>
        p
          .locator(
            '//div[@class="BYOColorsContainer"]/div[text()="Exterior Color"]'
          )
          .textContent() == "Exterior Color",
    });

    //sleep(4);

    //const submitFinishButton = page.locator('//button[text()="Finish Build"]');
    //await Promise.all([page.waitForNavigation(), submitFinishButton.click()]);

    page.locator('//button[text()="Finish Build"]').click();

    page.screenshot({ path: "./assets/byo_page_step4.png" });

    //sleep(4);
  } finally {
    page.close();
    context.close();
  }
}