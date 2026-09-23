import { test, expect } from '@playwright/test';
import { InfogreffePage } from '../pages/infogreffe.page';

test.beforeEach(async ({ page }) => {
  const infogreffePage = new InfogreffePage(page);
 // 1. ACT 
    await infogreffePage.navigateTo();
    await infogreffePage.acceptCookies();
    await infogreffePage.openLoginForm();
    const email = process.env.LOGIN_EMAIL_MEMBRE || '';
    const password = process.env.LOGIN_PASSWORD_MEMBRE || '';
    await infogreffePage.login(email, password);
    });
test.describe('Parcours Recherche Infogreffe', () => {

  test('Search enterprise "PAUL", open "SCI SAINT PAUL" and verify "Actes et statuts"', async ({ page }) => {
    const infogreffePage = new InfogreffePage(page);
    // 2. LOGIC 
    await infogreffePage.selectAccountIfAppears();
    await infogreffePage.clickAndSearch('PAUL');
    await infogreffePage.selectSciSaintPaul();
    await infogreffePage.scrollToActesEtStatuts();
    // 3. ASSERT 
    await expect(infogreffePage.getEnterpriseTitleLocator()).toContainText('SCI SAINT PAUL');
    await expect(infogreffePage.getSirenLocator()).toBeVisible()
    await expect(infogreffePage.getActesEtStatutsSectionLocator()).toBeVisible();
  });
  test('Commander Extrait Kbis pour "Carrefour"', async ({ page }) => {
        const infogreffePage = new InfogreffePage(page);
  // 1. LOGIC
      await infogreffePage.selectAccountIfAppears();
      await infogreffePage.goToKbisDocuments();
      await infogreffePage.clickOrderKbis();
      await infogreffePage.searchKbisEnterprise('Carrefour');
      await infogreffePage.selectCarrefourEnterprise();
      await infogreffePage.scrollToBottomAndKbis();
  // 2. ASSERT (Vérifications explicites)
      await expect(infogreffePage.getCarrefourTitleLocator()).toContainText('CARREFOUR');
      await expect(infogreffePage.getKbisSectionLocator()).toBeVisible();
});

});