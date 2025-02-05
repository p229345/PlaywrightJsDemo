export class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page ) {
      this.page = page;
      this.usernameSelector = '#username';
      this.passwordSelector = '#password';
      this.signinButtonSelector = 'button[type="submit"]';
    }
  
    async goto(url) {
      await this.page.goto(url);
    }
  
    async login(email, password) {
      await this.page.fill(this.usernameSelector, email);
      await this.page.fill(this.passwordSelector, password);
      await this.page.click(this.signinButtonSelector);
    }
  }