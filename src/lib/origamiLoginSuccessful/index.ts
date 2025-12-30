import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export interface LoginParams {
    username: string;
    password: string;
}

export async function run(page: Page, params: LoginParams): Promise<void> {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login(params.username, params.password);
    await loginPage.expectSuccessMessage();
    await loginPage.expectLoggedIn();
}