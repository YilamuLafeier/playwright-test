import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await expect(page.getByRole('cell', { name: 'Name' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Bicycle' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Basket' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Quantity' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '2' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '3' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Condition' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'poor' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'excellent' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Actions' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Edit' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Edit' }).nth(1)).toBeVisible();
  await expect(page.locator('tbody')).toContainText('2');
  await expect(page.locator('tbody')).toContainText('3');
  await expect(page.locator('tbody')).toContainText('poor');
  await expect(page.locator('tbody')).toContainText('excellent');
  await expect(page.getByRole('row', { name: 'Bicycle 2 poor Edit' }).getByRole('link')).toBeVisible();
  await expect(page.getByRole('row', { name: 'Basket 3 excellent Edit' }).getByRole('link')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Next.js Application Template' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Add Stuff' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'List Stuff' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'john@foo.com' })).toBeVisible();
  await expect(page.locator('#login-dropdown')).toContainText('john@foo.com');
});
