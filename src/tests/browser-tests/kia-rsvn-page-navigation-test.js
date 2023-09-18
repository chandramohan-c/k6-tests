import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";


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

 /*
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
   
*/
  //The ui_ramping_vus_scenario ramps up gradually based and stays with the x VUs for specific period of time, before ramping down.

  
    ui_ramping_vus_scenario: {
      executor: 'ramping-vus',
      gracefulStop: '10s',
      stages: [
        { target: 100, duration: '1m' }, // traffic ramp-up from 1 to n users over x minutes/seconds.
        { target: 100, duration: '10m' }, // stay at n users for x minutes
        { target: 0, duration: '1m' }, // ramp-down to 0 users
      ],
      gracefulRampDown: '10s',
      //exec: 'ui_ramping_vus_scenario',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
    
   
  },


  thresholds: {
    browser_web_vital_lcp: ["p(90) < 5000"],
    checks: ["rate==1.0"],
  },
};


export default async function () {

  const context = browser.newContext();
  const page = context.newPage();
  try {

    let executionId = Math.random().toString(36).slice(2);

    console.log(" ================================ start of test execution id : " +executionId + "  ================================== ");
    
    let randomId =  Math.floor(Math.random() * 10) + 1;

    let webURL= 'https://web-testing.upstart.com/byo/bosak-kia'+randomId+'?tool=kia-rsvn'
    console.log("web url to naviagte : "+webURL);

    await page.goto(webURL);

   
    check(page, {
      header: (p) =>
        p.locator('//h1[text()="Reserve your Kia EV9"]').textContent() ==
        "Reserve your Kia EV9",
    });

    check(page, {
      header: (p) =>
        p.locator('//h2[text()="Select a Trim"]').textContent() ==
        "Select a Trim",
    });


    await page.locator('(//div[@class="button-div BYOTrimOptions isKiaRSVN"])[1]').click();

    check(page, {
      header: (p) =>
        p.locator('//button[@type="submit"]').textContent() ==
        "Next: color options",
    });

    //await page.locator('//button[@type="submit"]').click();

    await page.locator('//button[text()="Next: color options"]').click();

    //const submitButton = page.locator('//*/button[@type="submit"]');
    //await Promise.all([page.waitForNavigation(), submitButton.click()]);

    check(page, {
      header: (p) =>
        p
          .locator(
            '(//div[@class="BYOColorsContainer isKiaRSVN"]/div)[1]'
          )
          .textContent() == "Exterior Color",
    });
    
    check(page, {
      header: (p) =>
        p
          .locator(
            '(//div[@class="BYOColorsContainer isKiaRSVN"]//div[@class="BYOColorsCategory"])[2]'
          )
          .textContent() == "Interior Color",
    });

    //console.log("page package text:" + page.locator('//button[text()="Next: packages"]').textContent() == "Next: packages");

    let nextPackagesAvailable = page.locator('(//button[@type="submit"])[2]').textContent();

    if (nextPackagesAvailable == "Next: packages")
    {
      await page.locator('//button[text()="Next: packages"]').click();

      check(page, {
        header: (p) =>
          p
            .locator(
              '//h2[text()="Select Optional Package"]'
            )
            .textContent() == "Select Optional Package",
      });

      await page.locator('(//div[@class="BYOPackageOptionAction"]//button)[1]').click();

      await page.locator('//button[text()="Continue to payment"]').click();


    }
    else{

    await page.locator('//button[text()="Continue to payment"]').click();
    }

    check(page, {
      header: (p) =>
        p
          .locator(
            '(//div[@class="kiaReservationPanel"]/div)[1]'
          )
          .textContent() == "Your EV9 Reservation Summary",
    });

    check(page, {
      header: (p) =>
        p
          .locator(
            '//h2[@class="PIIFormReservation-Title"]'
          )
          .textContent() == "Payment details",
    });

page.locator('//input[@id="firstName"]').type("testfirstName");
page.locator('//input[@id="lastName"]').type("testlastName");
page.locator('//input[@id="email"]').type("test-user@mail.com");
page.locator('//input[@id="confirmEmail"]').type("test-user@mail.com");
page.locator('//input[@id="phone"]').type("(669) 355-2893");
page.locator('//input[@id="zip"]').type("94087");

check(page, {
  header: (p) =>
    p
      .locator(
        '(//div[@class="PIIFormReservation-Category"])[2]'
      )
      .textContent() == "Payment info",
});

page.locator('//input[@data-test-id="card-holder-name-text-input"]').type("credit card user name");
page.locator('//div[@data-test-id="CheckBox"]').check();


//page.locator('//input[@data-elements-stable-field-name="cardNumber"]').type("4242424242424242");
//page.locator('//input[@name="exp-date"]').type("11 / 28");
//page.locator('//input[@name="cvc"]').type("345");

await page.locator('//button[text()="Submit Payment & Reserve"]').click();


console.log("============== end of test execution id :  " +executionId + "  ================ ");

  } finally {
    page.close();
    context.close();
  }

}



// generate test run metrics
export function handleSummary(data) {
  return {
      'KRSN-Load-Tests-Report.html': htmlReport(data, { debug: true })
  };
}

