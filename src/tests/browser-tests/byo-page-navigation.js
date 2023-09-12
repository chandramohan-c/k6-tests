import { browser } from 'k6/experimental/browser';
import { check, sleep } from 'k6';


export class BYOpage {

  constructor(pageLoad) {
    this.page = pageLoad;
  }

  async gotoBYOPageURL() {
   // page = pageLoad;
    await this.page.goto('https://web-testing.upstart.com/byo/bosak-kia/');
  }

  async navigateBYOPageSteps() {
    //page = pageLoad;

    sleep(7);
    check(this.page, {
      'header': p => p.locator('//h2[text()="Select a Model"]').textContent() == 'Select a Model',
    });

    this.page.locator('//*/div[@class="button-div BYOModelOptions"][2]').click();

    const submitButton = this.page.locator('//*/button[@type="submit"]');

    //page.locator('//*/button[@type="submit"]').click();

  

    await Promise.all([this.page.waitForNavigation(), submitButton.click()]);
    //this.page.screenshot({ path: '~/assets/byo_page_step2.png' });
    
    sleep(4);
    check(this.page, {
      'header': p => p.locator('//h2[text()="Select a Trim"]').textContent() == 'Select a Trim',
    });

    //const submitTrimButton = this.page.locator('//div[@class="BYOTrimsContainer"]/following-sibling::div/button[@type="submit"]');
    this.page.locator('//*/div[@class="BYOTrimsContainer"]/following-sibling::div/button[@type="submit"]').click();
    //await Promise.all([this.page.waitForNavigation(), submitTrimButton.click()]);
   // this.page.screenshot({ path: 'byo_page_step3.png' });
   
    check(this.page, {
      'header': p => p.locator('//div[@class="BYOColorsContainer"]/div[text()="Exterior Color"]').textContent() == 'Exterior Color',
    });


    //const submitColorButton = page.locator('//button[text()="Finish Build"]')
    //await Promise.all([page.waitForNavigation(), submitColorButton.click()]);

    this.page.locator('//button[text()="Finish Build"]').click();

    //this.page.screenshot({ path: './assets/byo_page_step4.png' });

    sleep(7);
  }


}