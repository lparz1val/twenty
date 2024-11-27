import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.twenty.com/');
  await page.goto('https://demo.twenty.com/welcome');
  await page.getByRole('button', { name: 'Continue With Email' }).click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible();
  await page.getByRole('link', { name: 'Settings' }).click();
  await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
  await expect(page.getByText('PictureUploadRemoveWe support')).toBeVisible();
  await page.getByRole('link', { name: 'Experience' }).click();
  await expect(
    page.getByText(
      'ExperienceAppearanceAaLightAaDarkAaAaSystem settingsDate and timeConfigure how',
    ),
  ).toBeVisible();
  await expect(
    page.getByText('AppearanceAaLightAaDarkAaAaSystem settings'),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await expect(
    page.getByRole('heading', { name: 'Account', exact: true }),
  ).toBeVisible();
  await expect(page.locator('.css-4b375e')).toBeVisible();
  await page.getByRole('link', { name: 'Emails', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Emails' })).toBeVisible();
  await page.getByRole('link', { name: 'Calendars' }).click();
  await expect(page.getByRole('heading', { name: 'Calendars' })).toBeVisible();
  await page.getByRole('link', { name: 'General' }).click();
  await expect(page.getByRole('heading', { name: 'General' })).toBeVisible();
  await expect(page.getByText('GeneralPictureUploadRemoveWe')).toBeVisible();
  await page.getByRole('link', { name: 'Members' }).click();
  await expect(
    page.locator('h3').filter({ hasText: /^Members$/ }),
  ).toBeVisible();
  await expect(page.getByText('MembersInvite by linkShare')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Copy link' })).toBeVisible();
  await page.getByRole('link', { name: 'Data model' }).click();
  await expect(page.getByText('Data modelVisualizeExisting')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add object' })).toBeVisible();
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^Visualize$/ })
      .first(),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Integrations' }).click();
  await expect(page.getByText('IntegrationsWith ZapierSee')).toBeVisible();
  await page.getByRole('link', { name: 'Releases' }).click();
  await expect(page.getByRole('heading', { name: 'Releases' })).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
  await expect(page.getByText('Welcome to TwentyContinue')).toBeVisible();
});
