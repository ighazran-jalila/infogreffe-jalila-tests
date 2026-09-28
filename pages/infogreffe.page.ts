import { Locator, Page, expect } from '@playwright/test';
import { InfogreffeModal } from './infogreffe.modal';

export class InfogreffePage {
  readonly page: Page;
  readonly modal: InfogreffeModal;

  constructor(page: Page) {
    this.page = page;
    this.modal = new InfogreffeModal(page);
  }

  // --- BeforeEach Methods ---
  async navigateTo(): Promise<void> {
    await this.page.goto('/');
  }

  async acceptCookies(): Promise<void> {
    await this.modal.acceptCookiesBtn.click();
  }

  async openLoginForm(): Promise<void> {
    await this.modal.connectButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.modal.connectButton.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.modal.emailInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.modal.emailInput.fill(email);
    await this.modal.passwordInput.fill(password);
    if (await this.modal.rememberMeCheckbox.isVisible()) {
      await this.modal.rememberMeCheckbox.click();
    }
    await this.modal.submitLoginBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async selectAccountIfAppears(): Promise<void> {
    try {
      const account = this.modal.accountCards.first();
      if (await account.isVisible({ timeout: 4000 })) {
        await account.click();
        await this.page.waitForLoadState('networkidle');
      }
    } catch (e) {}
  }
  // Test 1: SCI SAINT PAUL 
  async clickAndSearch(query: string): Promise<void> {
    await this.modal.searchInput.click();
    await this.modal.searchInput.fill(query);
    await this.modal.searchInput.press('Enter');
    await this.page.waitForLoadState('networkidle');}
  async selectSciSaintPaul(): Promise<void> {
    if (await this.modal.enterprisesTab.isVisible()) {
      await this.modal.enterprisesTab.click();}
    await this.modal.sciSaintPaulResult.waitFor({ state: 'visible', timeout: 15000 });
    await this.modal.sciSaintPaulResult.scrollIntoViewIfNeeded();
    await this.modal.sciSaintPaulResult.click({ force: true });
    await this.page.waitForLoadState('networkidle');}
  async scrollToActesEtStatuts(): Promise<void> {
    await this.modal.actesStatutsSection.scrollIntoViewIfNeeded();
    await expect(this.modal.actesStatutsSection).toBeVisible({ timeout: 10000 });}
  getEnterpriseTitleLocator(): Locator {
    return this.modal.enterpriseTitle;}
  getSirenLocator(): Locator {
    return this.modal.sirenNumber.first();}
  getActesEtStatutsSectionLocator(): Locator {
    return this.modal.actesStatutsSection;}
  // Test 2: KBIS Search for Carrefour 
  async goToKbisDocuments() {
    await this.modal.kbisDocumentsMenu.click();
    await this.page.waitForLoadState('networkidle');}
  async clickOrderKbis() {
    await this.modal.orderKbisBtn.click();
    await this.page.waitForLoadState('networkidle');}
  async searchKbisEnterprise(query: string) {
    await this.modal.kbisSearchInput.fill(query);
    await this.modal.kbisSearchInput.press('Enter');
    await this.page.waitForLoadState('networkidle');}
  async selectCarrefourEnterprise() {
    await this.modal.carrefourResult.waitFor({ state: 'visible', timeout: 10000 });
    await this.modal.carrefourResult.click();
    await this.page.waitForLoadState('networkidle');
    await this.modal.kbisIncontournableSection.scrollIntoViewIfNeeded();}
  async scrollToBottomAndKbis(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(5000);
    await this.modal.kbisIncontournableSection.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(5000);}
  getCarrefourTitleLocator() {
    return this.modal.enterpriseTitle;}
  getKbisSectionLocator() {
    return this.modal.kbisIncontournableSection;}

  // Test 3
async searchOnHomeAndPressEnter(query: string): Promise<void> {
    await this.modal.homeSearchInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.modal.homeSearchInput.click();
    await this.modal.homeSearchInput.fill(query);
    await this.modal.homeSearchInput.press('Enter');
    await this.page.waitForLoadState('networkidle');}
  async orderKbisDirectly(): Promise<void> {
    await this.modal.orderKbisDirectBtn.waitFor({ state: 'visible', timeout: 15000 });
    await this.modal.orderKbisDirectBtn.click();
    await this.page.waitForLoadState('networkidle');}
  async goToCartAndClick(): Promise<void> {
    await this.modal.cartIcon.waitFor({ state: 'visible', timeout: 10000 });
    await this.modal.cartIcon.click();
    await this.page.waitForLoadState('networkidle');}
  async validateCart(): Promise<void> {
    await this.modal.validateCartBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.modal.validateCartBtn.click();
    await this.page.waitForLoadState('networkidle');}
  async fillDeliveryLabel(newLabel: string): Promise<void> {
    await this.modal.editDeliveryAddressLink.waitFor({ state: 'visible', timeout: 15000 });
    await this.modal.editDeliveryAddressLink.click();
    await this.modal.labelInput.waitFor({ state: 'visible', timeout: 10000 });
    const testId = await this.modal.labelInput.getAttribute('data-testid');
    expect(testId).not.toBe('input-text-search');
    await this.modal.labelInput.fill(newLabel);
    await expect(this.modal.labelInput).toHaveValue(newLabel);}
  async clickSave(): Promise<void> {
    await this.modal.saveAddressBtn.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.modal.saveAddressBtn).toBeEnabled();
    await this.modal.saveAddressBtn.click();
    await this.modal.saveAddressBtn.waitFor({ state: 'hidden', timeout: 10000 });
    await this.page.waitForLoadState('networkidle');}
  getDeliveryAddressLocator(): Locator {
    return this.modal.updatedDeliveryAddress;}
}  