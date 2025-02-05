import { expect } from '@playwright/test';

export class ProjectPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
    async navigateToSection(section) {
      await this.page.click(`text=${section}`);
    }
  
    async verifyTaskInColumn(task, column) {
      const columnElement = await this.page.locator(`text=${column}`);
      await expect(columnElement).toBeVisible();
      const taskElement = await columnElement.locator(`xpath=following-sibling::div/div/h3[.//text()='${task}']`);
      await expect(taskElement).toBeVisible();
    }
  
    async verifyTags(task, tags) {
      const taskElement = await this.page.locator(`text=${task}`);
      for (const tag of tags) {
        await expect(taskElement.locator(`xpath=following-sibling::div/span[.//text()='${tag}']`)).toBeVisible();
      }
    }
  }