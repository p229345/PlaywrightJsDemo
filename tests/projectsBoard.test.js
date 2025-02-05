
import { test } from '@playwright/test';
import testData from '../ddt-data/taskBoardTestData.json';
import testConfig from '../testConfig.json';
import { LoginPage } from '../pages/LoginPage';
import { ProjectPage } from '../pages/ProjectPage';

test.describe('Project Board tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(testConfig.login.url);
    await loginPage.login(testConfig.login.email, testConfig.login.password);
  });

  testData.tests.forEach((testCase) => {
    test(testCase.name, async ({ page }) => {
      const projectPage = new ProjectPage(page);
      await projectPage.navigateToSection(testCase.projectNavigation);
      await projectPage.verifyTaskInColumn(testCase.task, testCase.column);
      await projectPage.verifyTags(testCase.task, testCase.tags);
    });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

