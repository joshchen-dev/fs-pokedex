const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be displayed', async ({ page }) => {
    await expect(page.getByText('pikachu')).toBeVisible()
    await page.getByText('pikachu').click()
    await expect(page.getByText('lightning rod')).toBeVisible()
  })
})