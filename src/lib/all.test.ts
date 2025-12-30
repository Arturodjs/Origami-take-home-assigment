import { test, expect } from '@playwright/test';
import { run as origamiLoginSuccessful } from './origamiLoginSuccessful';
import { run as origamiLoginWrongUsername } from './origamiLoginWrongUsername';
import { run as origamiLoginWrongPassword } from './origamiLoginWrongPassword';
import { run as origamiLogoutSuccessful } from './origamiLogoutSuccessful';
import { TEST_CREDENTIALS } from './constants/testData';

const getValidCredentials = () => ({
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
});

test.describe('Origami Login Tests', () => {
    test('Successful login', async ({ page }) => {
        await origamiLoginSuccessful(page, getValidCredentials());
    });

    test('Login with invalid username', async ({ page }) => {
        await origamiLoginWrongUsername(page, {
            username: TEST_CREDENTIALS.WRONG_USERNAME,
            password: process.env.PASSWORD || '',
        });
    });

    test(': Login with invalid password', async ({ page }) => {
        await origamiLoginWrongPassword(page, {
            username: process.env.USERNAME || '',
            password: TEST_CREDENTIALS.WRONG_PASSWORD,
        });
    });

    test('Successful logout', async ({ page }) => {
        await origamiLogoutSuccessful(page, getValidCredentials());
    });
});