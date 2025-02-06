# Page Object Model test automation framework using Playwright with Nodejs/JavaScript.

Sample project to demonstrate Web Data-driven tests written using [Playwright](https://playwright.dev/docs/intro) with [Node.js](https://nodejs.org/en/)

## Project Structure: The project was implemented using the Page Object Model.

- `ddt-data`: Contains test data for DDT tests.
- `pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `tests`: Contains the actual test files. You can organize your tests into subdirectories as needed.
- `testConfig.json`: Test configuration file 

#### General benefit from Page Object Model structure is: 
- Reusability of the same selectors/locator in different classes/tests
- Clear and more readable architecture
- Easy to fix failed **tests** by fixing locator/selector in one place

## Pre-requirements

To clone and run this project, you will need to install:

- [Git](https://git-scm.com/downloads)(I've used version `2.47.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v22.13.0` while writing this doc)

## Setup
To setup and run tests you can use any terminal
* Clone PlaywrightJsDemo repository using the following command:
```
git clone https://github.com/p229345/PlaywrightJsDemo.git
```
* Navigate to the Project Directory. Change your current directory to the cloned project folder:

```
cd PlaywrightJsDemo
```
* Install project dependencies:
```
npm install
```
* Install browsers:
```
npx playwright install
```
## Running tests

**Run all tests on all browsers in interactive mode:**
```
npx playwright test --ui
```

**Run tests on specific browser:**
```
npx playwright test  --project webkit
```
```
npx playwright test  --project chromium
```
```
npx playwright test  --project firefox
```
**Runs tests in debug mode:**
```
npx playwright test --debug
```

## Show Status Report

To see the status report, you can run the command:
```
npx playwright show-report
```
In case of test failure status report will have a screenshot attached. 
