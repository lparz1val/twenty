import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.twenty.com/');
  await page.goto('https://demo.twenty.com/welcome');
  await page.getByRole('button', { name: 'Continue With Email' }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'People' }).click();
  await page.getByTestId('add-button').click();
  await page.getByPlaceholder('F‌‌irst name').fill('New Person');
  await page.getByPlaceholder('F‌‌irst name').press('Tab');
  await page.getByPlaceholder('L‌‌ast name').fill('LastName');
  await page.getByPlaceholder('L‌‌ast name').press('Tab');
  await page
    .getByTestId('editable-cell-soft-focus-mode')
    .locator('div')
    .first()
    .click();
  await page.getByPlaceholder('Email').fill('email.email@email.com');
  await page.locator('td:nth-child(6) > .s1w973iz').first().click();
  await page.locator('td:nth-child(6) > .s1w973iz').first().click();
  await page.locator('td:nth-child(6) > .s1w973iz').first().click();
  await page
    .getByTestId('editable-cell-edit-mode-container')
    .getByText('Uber')
    .click();
  await page
    .getByTestId('row-id-91d76bad-44ac-4b04-b485-93904d084231')
    .locator('button')
    .click();
  await page.getByPlaceholder('Phone').fill('+1 233 453 45');
  await page.getByPlaceholder('Phone').press('Enter');
  await page.locator('tr:nth-child(4) > td:nth-child(7) > .s1w973iz').click();
});
