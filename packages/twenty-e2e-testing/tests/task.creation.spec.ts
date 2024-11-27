import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.twenty.com/');
  await page.goto('https://demo.twenty.com/welcome');
  await page.getByRole('button', { name: 'Continue With Email' }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Demo')).toBeVisible();
  await expect(page.getByRole('link', { name: 'People' })).toBeVisible();
  await expect(page.locator('.css-4b375e').first()).toBeVisible();
  await expect(
    page.getByTestId('top-bar-title').getByTestId('tooltip'),
  ).toBeVisible();
  await page.getByRole('link', { name: 'D Digital' }).click();
  await page.getByTestId('tab-tasks').click();
  await page.getByRole('button', { name: 'New task' }).click();
  await page.getByText('Title', { exact: true }).click();
  await page.getByRole('textbox').fill('Test task 1');
  await page.locator('.css-112jqer > button:nth-child(3)').click();
  await page.getByRole('button', { name: 'Add task' }).click();
  await page.getByText('Title', { exact: true }).click();
  await page.getByText('Title', { exact: true }).click();
  await page.getByRole('textbox').fill('test task 2');
  await page.getByTestId('tab-fields').click();
  await page.getByTestId('tab-fields').click();
  await page.locator('header').filter({ hasText: 'Assignee' }).click();
  await page
    .locator('header')
    .filter({ hasText: 'Assignee' })
    .getByRole('button')
    .click();
  await page.getByText('Noah A').click();
  await page.getByRole('button', { name: 'Actions ⌘O' }).click();
  await page.getByText('Add to favorites').click();
  await page.locator('.css-112jqer > button:nth-child(3)').click();
});
