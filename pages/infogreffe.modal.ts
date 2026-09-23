import { Page, Locator } from '@playwright/test';

export interface LoginCredentials {
  email: string;
  password: string;
}

export class InfogreffeModal {
  readonly page: Page;

  // Cookie Banner Locators
  readonly acceptCookiesBtn: Locator;

  // Login Page Locators
  readonly connectButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitLoginBtn: Locator;
  readonly rememberMeCheckbox: Locator;

  // Account Selection Locators
  readonly accountCards: Locator;

  // Search & Header Locators
  readonly searchInput: Locator;
  readonly searchBtn: Locator;

  // Search Results Locators
  readonly enterprisesTab: Locator;
  readonly sciSaintPaulResult: Locator;

  // Enterprise Details Page Locators
  readonly enterpriseTitle: Locator;
  readonly sirenNumber: Locator;
  readonly addressText: Locator;
   readonly actesStatutsSection: Locator;

  constructor(page: Page) {
    this.page = page;

    // Cookies Banner
    this.acceptCookiesBtn = page.getByRole('button', {
      name: 'Accepter & Fermer: Accepter',
    });

    // Login Header & Form
    this.connectButton = page.getByRole('button', { name: 'Se connecter' });
    this.emailInput = page.locator('input[type="email"], #email');
    this.passwordInput = page.locator('input[type="password"], #password');
    this.submitLoginBtn = page.getByRole('button', { name: /Se connecter/i });
    this.rememberMeCheckbox = page.locator('#checkbox');

    // Account Selection (Compte client)
    this.accountCards = page.locator('.compte-client, div:has-text("Compte client")');

    // Search Header
    this.searchInput = page.getByPlaceholder(/Rechercher/i);
    this.searchBtn = page.locator('button[type="submit"], form button, .search-button').first();
    // Search Results
    this.enterprisesTab = page.getByRole('tab', { name: /Entreprises/i });
    this.sciSaintPaulResult = page.getByRole('link', { name: /SCI SAINT PAUL/i }).first();
    // Details Page
    this.enterpriseTitle = page.locator('h1');
    this.sirenNumber = page.getByText(/478\s*702\s*897/);
    this.addressText = page.locator('text=/1650 ROUTE DES SERRES/i');
    this.actesStatutsSection = page.getByText('Actes et statuts', { exact: false });
  }
}
