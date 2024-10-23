import { test, expect } from '@playwright/test';

test.describe('Testing Wordle-Clone', () => {
    test('should have the heading Wordle', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const heading = page.getByRole('heading');
        expect(heading).toContainText('Wordle');
    });
    test('Win Wordle', async ({ page }) => {
        await page.goto('http://localhost:3000/?test=drink');

        const keysToPress = ['d', 'r', 'i', 'n', 'k'];
        for (const key of keysToPress) {
            await page.keyboard.press(key);
            await page.waitForTimeout(1000);
        }
        await page.keyboard.press('Enter');

        await expect(page.locator('.modal h1')).toHaveText('You Win!');
    });
});
