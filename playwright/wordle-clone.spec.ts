import { test, expect } from '@playwright/test';

test.describe('Testing Wordle-Clone', async () => {
    test('should have the heading Wordle', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const heading = page.getByRole('heading');
        await page.waitForTimeout(1000);
        await expect(heading).toContainText('Wordle');
    });
    test('Win Wordle', async ({ page }) => {
        await page.goto('http://localhost:3000/?test=drink');

        const keysToPress = ['d', 'r', 'i', 'n', 'k'];
        for (const key of keysToPress) {
            await page.keyboard.press(key);
            await page.waitForTimeout(1000);
        }
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
        expect(await page.waitForSelector('.modal h1:has-text("You Win!")')).toBeTruthy();
    });
});
