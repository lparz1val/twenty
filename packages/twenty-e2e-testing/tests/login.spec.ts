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
});
