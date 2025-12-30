import { Page, expect } from '@playwright/test';
import { TEST_MESSAGES } from '../constants/testData';

/**
 * Page Object Model for the Login page.
 * Encapsulates all interactions and assertions related to the login page.
 */
export class LoginPage {
    constructor(private readonly page: Page) {}

    /**
     * Navigates to the login page.
     */
    async goto(): Promise<void> {
        const baseURL = process.env.TARGET_URL;
        if (!baseURL) {
            throw new Error('TARGET_URL environment variable is not set');
        }
        await this.page.goto(baseURL);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Fills in the username field.
     * @param username - The username to enter
     */
    async fillUsername(username: string): Promise<void> {
        const usernameInput = this.page.getByRole('textbox', { name: 'Username' });
        await usernameInput.fill(username);
    }

    /**
     * Fills in the password field.
     * @param password - The password to enter
     */
    async fillPassword(password: string): Promise<void> {
        const passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        await passwordInput.fill(password);
    }

    /**
     * Clicks the login button.
     */
    async clickLogin(): Promise<void> {
        const loginButton = this.page.getByRole('button', { name: 'Login' });
        await loginButton.click();
    }

    /**
     * Performs a complete login action.
     * @param username - The username to enter
     * @param password - The password to enter
     */
    async login(username: string, password: string): Promise<void> {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    /**
     * Asserts that the success message is visible.
     */
    async expectSuccessMessage(): Promise<void> {
        const successMessage = this.page.getByText(TEST_MESSAGES.SUCCESS);
        await expect(successMessage).toBeVisible();
    }

    /**
     * Asserts that the invalid username error message is visible.
     */
    async expectInvalidUsernameError(): Promise<void> {
        const errorMessage = this.page.getByText(TEST_MESSAGES.INVALID_USERNAME);
        await expect(errorMessage).toBeVisible();
    }

    /**
     * Asserts that the invalid password error message is visible.
     */
    async expectInvalidPasswordError(): Promise<void> {
        const errorMessage = this.page.getByText(TEST_MESSAGES.INVALID_PASSWORD);
        await expect(errorMessage).toBeVisible();
    }

    /**
     * Asserts that the user is on the secure page (logged in).
     */
    async expectLoggedIn(): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp('/secure'));
    }

    /**
     * Asserts that the user is not on the secure page (not logged in).
     */
    async expectNotLoggedIn(): Promise<void> {
        await expect(this.page).not.toHaveURL(new RegExp('/secure'));
    }

    async logout(): Promise<void> {
        const logoutButton = this.page.getByRole('link', { name: 'Logout' });
        await logoutButton.click();
    }

    async expectLoggedOut(): Promise<void> {
        const successMessage = this.page.getByText(TEST_MESSAGES.LOGOUT_SUCCESS);
        await expect(successMessage).toBeVisible();
    }
}

