import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.twenty.com/');
  await page.goto('https://demo.twenty.com/welcome');
  await page.getByRole('button', { name: 'Continue With Email' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').press('ControlOrMeta+a');
  await page.getByPlaceholder('Email').press('ControlOrMeta+c');
  await page.getByPlaceholder('Email').fill('tim@apple.dev');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByTestId('reveal-password-button').getByRole('img').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('ControlOrMeta+a');
  await page.getByPlaceholder('Password').press('ControlOrMeta+c');
  await page.getByPlaceholder('Password').fill('Applecar2025');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Workspace')).toBeVisible();
  await expect(page.getByRole('link', { name: 'People' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Companies' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Notes' })).toBeVisible();
  await expect(page.locator('.css-4b375e').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Producers' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Producer tasks' }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Oppurtunities' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'products' })).toBeVisible();
  await expect(
    page.getByTestId('top-bar-title').getByTestId('tooltip'),
  ).toBeVisible();
  await expect(page.getByText('All· 603 FilterSortOptions')).toBeVisible();
  await expect(page.getByTestId('add-button')).toBeVisible();
});
