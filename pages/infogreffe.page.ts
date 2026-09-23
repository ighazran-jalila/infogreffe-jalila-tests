import { Locator, Page, expect } from '@playwright/test';
import { InfogreffeModal, LoginCredentials } from './infogreffe.modal';

export class InfogreffePage {
  readonly page: Page;
  readonly modal: InfogreffeModal;

  constructor(page: Page) {
    this.page = page;
    this.modal = new InfogreffeModal(page);}
    //test beforeEach methode
  async navigateTo(): Promise<void> {
    await this.page.goto('/');}
  async acceptCookies(): Promise<void> {
    await this.modal.acceptCookiesBtn.click();}
  async openLoginForm(): Promise<void> {
    await this.modal.connectButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.modal.connectButton.click(); }
  async login(email: string, password: string): Promise<void> {
    await this.modal.emailInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.modal.emailInput.fill(email);
    await this.modal.passwordInput.fill(password);
    if (await this.modal.rememberMeCheckbox.isVisible()) {
      await this.modal.rememberMeCheckbox.click();}
    await this.modal.submitLoginBtn.click();
    await this.page.waitForLoadState('networkidle');}
   //Search enterprise "PAUL"...
  async selectAccountIfAppears() {
    try {
      const account = this.modal.accountCards.first();
      if (await account.isVisible({ timeout: 4000 })) {
        await account.click();
        await this.page.waitForLoadState('networkidle');}
    } catch (e) {}}
  async clickAndSearch(query: string) {
    await this.modal.searchInput.click();
    await this.modal.searchInput.fill(query);
    await this.modal.searchInput.press('Enter');
    await this.page.waitForLoadState('networkidle');}
 async selectSciSaintPaul() {
  if (await this.modal.enterprisesTab.isVisible()) {
    await this.modal.enterprisesTab.click();}
  await this.modal.sciSaintPaulResult.waitFor({ state: 'visible', timeout: 15000 });
  await this.modal.sciSaintPaulResult.scrollIntoViewIfNeeded();
  await this.modal.sciSaintPaulResult.click({ force: true });
  await this.page.waitForLoadState('networkidle');}
async scrollToActesEtStatuts() {
  await this.modal.actesStatutsSection.scrollIntoViewIfNeeded();
  await expect(this.modal.actesStatutsSection).toBeVisible({ timeout: 10000 });}
  getEnterpriseTitleLocator(): Locator {
    return this.modal.enterpriseTitle;}
  getSirenLocator(): Locator {
    return this.modal.sirenNumber.first();}
  getActesEtStatutsSectionLocator(): Locator {
    return this.modal.actesStatutsSection;}
  // KBIS Search for Carrefour
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


}