const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:3000/';

test('can load the page and it contains a list of 100 phones', async ({ page }) => {
  await page.goto(URL);
  const title = await page.locator('h1').first().innerText();
  expect(title).toBe('OldMobiles.com');
  //TODO: check that the list has 100 items
  //   const list = page.getByTestId('data-testid=list-item-card');
  //   console.log(list);
  //   expect.soft(list).toHaveLength(100);
});

test('can search for a phone and it returns the correct result', async ({ page }) => {
  await page.goto(URL);
  const searchInput = page.locator('[data-cy="search-bar"]');
});
