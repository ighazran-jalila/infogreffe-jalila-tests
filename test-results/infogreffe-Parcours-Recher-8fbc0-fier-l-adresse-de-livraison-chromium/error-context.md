# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: infogreffe.spec.ts >> Parcours Recherche Infogreffe >> Commander un Kbis directement, valider le panier et modifier l'adresse de livraison
- Location: tests\infogreffe.spec.ts:44:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByText('Adresse de livraison').locator('..').getByRole('link', { name: 'Modifier' })
  - operation was aborted: Test timeout of 60000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f147e2]:
  - generic [ref=f147e5]:
    - generic [ref=f147e9]:
      - link [ref=f147e10] [cursor=pointer]:
        - /url: /
        - img "Infogreffe - Registre du commerce et des sociétés - Greffe du tribunal de commerce" [ref=f147e11]
      - generic [ref=f147e18]:
        - button "search-button" [ref=f147e21] [cursor=pointer]
        - textbox "Rechercher..." [ref=f147e26]
      - generic [ref=f147e27]:
        - generic [ref=f147e28]:
          - link [ref=f147e31] [cursor=pointer]:
            - /url: /kbis-documents
            - button "Kbis & documents" [ref=f147e34]
          - link [ref=f147e37] [cursor=pointer]:
            - /url: /hub-entrepreneurs
            - button "Hub des entrepreneurs" [ref=f147e40]
          - generic [ref=f147e41]:
            - link [ref=f147e43] [cursor=pointer]:
              - /url: /services
              - button "Services" [ref=f147e46]
            - generic [ref=f147e50]:
              - link "Voir tous les services aux entreprises" [ref=f147e51] [cursor=pointer]:
                - /url: /services
              - generic [ref=f147e56]:
                - generic [ref=f147e57]:
                  - generic [ref=f147e58]: Gestion d'entreprise
                  - generic [ref=f147e59]:
                    - link [ref=f147e60] [cursor=pointer]:
                      - /url: /services/surveillance-d-entreprises
                      - button "Surveillance d'entreprises" [ref=f147e62]
                    - link [ref=f147e63] [cursor=pointer]:
                      - /url: /services/kyc-infogreffe
                      - button "KYC Infogreffe" [ref=f147e65]
                    - link [ref=f147e66] [cursor=pointer]:
                      - /url: /services/mesaidespubliques-infogreffe
                      - button "MesAidesPubliques Infogreffe" [ref=f147e68]
                    - link [ref=f147e69] [cursor=pointer]:
                      - /url: /services/mes-obligations-legales-infogreffe
                      - button "Mes obligations légales Infogreffe" [ref=f147e71]
                    - link [ref=f147e72] [cursor=pointer]:
                      - /url: /services/axiocap-avec-infogreffe
                      - button "Axiocap avec Infogreffe" [ref=f147e74]
                - generic [ref=f147e75]:
                  - generic [ref=f147e76]: Performance
                  - generic [ref=f147e77]:
                    - link [ref=f147e78] [cursor=pointer]:
                      - /url: /services/diagnostic-afdcc
                      - button "Diagnostic AFDCC" [ref=f147e80]
                    - link [ref=f147e81] [cursor=pointer]:
                      - /url: /services/diagnostic-nota-pme
                      - button "Diagnostic Nota-PME" [ref=f147e83]
                    - link [ref=f147e84] [cursor=pointer]:
                      - /url: /services/datainfogreffe
                      - button "DataInfogreffe" [ref=f147e86]
                - generic [ref=f147e87]:
                  - generic [ref=f147e88]: Confiance et sécurité
                  - generic [ref=f147e89]:
                    - link [ref=f147e90] [cursor=pointer]:
                      - /url: /services/monidenum
                      - button "MonIdenum" [ref=f147e92]
                    - link [ref=f147e93] [cursor=pointer]:
                      - /url: /services/certigreffe
                      - button "Certigreffe" [ref=f147e95]
                    - link [ref=f147e96] [cursor=pointer]:
                      - /url: /services/securigreffe
                      - button "Sécurigreffe" [ref=f147e98]
                    - link [ref=f147e99] [cursor=pointer]:
                      - /url: /services/prevention-infogreffe
                      - button "Prévention Infogreffe" [ref=f147e101]
                - generic [ref=f147e102]:
                  - generic [ref=f147e103]: Registres légaux economiques
                  - generic [ref=f147e104]:
                    - link [ref=f147e105] [cursor=pointer]:
                      - /url: /services/contentieux--recherche-d-affaires-et-commande-de-jugements
                      - 'button "Contentieux: recherche d''affaires et commande de jugements" [ref=f147e107]'
                    - link [ref=f147e108] [cursor=pointer]:
                      - /url: /services/portail-des-divergences
                      - button "Portail des divergences" [ref=f147e110]
                    - link [ref=f147e111] [cursor=pointer]:
                      - /url: /services/registre-des-entreprises-europeennes
                      - button "Registre des entreprises européennes" [ref=f147e113]
                    - link [ref=f147e114] [cursor=pointer]:
                      - /url: /services/acces-gratuit-pour-les-autorites-judiciaires
                      - button "Accès gratuit pour les autorités judiciaires" [ref=f147e116]
        - link "Aide":
          - /url: /aides-et-tutoriels
        - link "Mon panier" [ref=f147e121] [cursor=pointer]:
          - /url: /panier
        - button "user menu" [ref=f147e127] [cursor=pointer]:
          - generic [ref=f147e128]: ES
        - img "logo-les-greffiers-des-tribunaux" [ref=f147e132]
    - main [ref=f147e133]:
      - generic [ref=f147e134]:
        - heading "Finaliser ma commande" [level=1] [ref=f147e135]
        - generic [ref=f147e136]:
          - generic [ref=f147e138]:
            - generic [ref=f147e139] [cursor=pointer]
            - generic [ref=f147e142]: Panier
          - generic [ref=f147e144]: Informations
          - generic [ref=f147e153]: Paiement
        - generic [ref=f147e162]:
          - generic [ref=f147e165]:
            - paragraph [ref=f147e166]: Pour les documents au format électronique, vous trouverez le contenu de votre commande dans votre espace client, rubrique « Mes commandes ».
            - generic [ref=f147e167]:
              - generic [ref=f147e168]:
                - heading "Adresse de livraison" [level=2] [ref=f147e169]
                - paragraph
                - paragraph [ref=f147e170]: Eddine Salah
                - paragraph [ref=f147e171]: LOT N149 CASA
                - paragraph [ref=f147e172]: sa
                - paragraph [ref=f147e173]: 27184, Casablanca
                - paragraph [ref=f147e174]: Maroc
                - button [ref=f147e177] [cursor=pointer]:
                  - button "Modifier" [ref=f147e178]
              - generic [ref=f147e179]:
                - heading "Adresse de facturation" [level=2] [ref=f147e180]
                - paragraph
                - paragraph [ref=f147e181]: Eddine Salah
                - paragraph [ref=f147e182]: LOT N149 CASA
                - paragraph [ref=f147e183]: sa
                - paragraph [ref=f147e184]: 27184, Casablanca
                - paragraph [ref=f147e185]: Maroc
            - heading "Référence client" [level=2] [ref=f147e186]
            - paragraph [ref=f147e187]: Vous avez la possibilité de rajouter votre propre référence client. (10 caractères maximum)
            - textbox "Référence client" [ref=f147e192]
          - generic [ref=f147e193]:
            - generic [ref=f147e194]:
              - generic [ref=f147e196]:
                - generic [ref=f147e197]: Total HT
                - generic [ref=f147e198]: 3,85 €
              - generic [ref=f147e200]:
                - generic [ref=f147e201]: TVA 20%
                - generic [ref=f147e202]: 0,77 €
              - generic [ref=f147e204]:
                - generic [ref=f147e205]: Total TTC
                - generic [ref=f147e206]: 4,62 €
            - button "Suivant" [ref=f147e208] [cursor=pointer]
    - generic [ref=f147e211]:
      - generic [ref=f147e212]:
        - generic [ref=f147e213]:
          - heading "Informations" [level=3] [ref=f147e214]
          - generic [ref=f147e215]:
            - button "Creer un compte" [ref=f147e216] [cursor=pointer]
            - button "Qui sommes-nous ?" [ref=f147e217] [cursor=pointer]
            - button "Actualités" [ref=f147e218] [cursor=pointer]
            - button "Tarifs" [ref=f147e219] [cursor=pointer]
            - button "Aide et tutoriels" [ref=f147e220] [cursor=pointer]
            - button "FAQ" [ref=f147e221] [cursor=pointer]
            - button "Nous contacter" [ref=f147e222] [cursor=pointer]
        - generic [ref=f147e223]:
          - heading "Rechercher" [level=3] [ref=f147e224]
          - generic [ref=f147e225]:
            - button "Rechercher une entreprise, un dirigeant ou un débiteur" [ref=f147e226] [cursor=pointer]
            - button "Rechercher un greffe" [ref=f147e227] [cursor=pointer]
            - button "Rechercher par département" [ref=f147e228] [cursor=pointer]
        - generic [ref=f147e229]:
          - heading "Informations Légales" [level=3] [ref=f147e230]
          - generic [ref=f147e231]:
            - button "Plan du site" [ref=f147e232] [cursor=pointer]
            - button "Politique de confidentialité" [ref=f147e233] [cursor=pointer]
            - button "CGU-CGV" [ref=f147e234] [cursor=pointer]
            - button "Mentions Légales" [ref=f147e235] [cursor=pointer]
            - button "Répertoire des arnaques au Kbis" [ref=f147e236] [cursor=pointer]
      - button "footer-social" [ref=f147e238] [cursor=pointer]:
        - img "bloc2.jpg" [ref=f147e239]
  - generic [ref=f147e240]: Navigated to Finaliser ma commande
```

# Test source

```ts
  47  | 
  48  |   // --- Test 1: SCI SAINT PAUL ---
  49  |   async clickAndSearch(query: string): Promise<void> {
  50  |     await this.modal.searchInput.click();
  51  |     await this.modal.searchInput.fill(query);
  52  |     await this.modal.searchInput.press('Enter');
  53  |     await this.page.waitForLoadState('networkidle');
  54  |   }
  55  | 
  56  |   async selectSciSaintPaul(): Promise<void> {
  57  |     if (await this.modal.enterprisesTab.isVisible()) {
  58  |       await this.modal.enterprisesTab.click();
  59  |     }
  60  |     await this.modal.sciSaintPaulResult.waitFor({ state: 'visible', timeout: 15000 });
  61  |     await this.modal.sciSaintPaulResult.scrollIntoViewIfNeeded();
  62  |     await this.modal.sciSaintPaulResult.click({ force: true });
  63  |     await this.page.waitForLoadState('networkidle');
  64  |   }
  65  | 
  66  |   async scrollToActesEtStatuts(): Promise<void> {
  67  |     await this.modal.actesStatutsSection.scrollIntoViewIfNeeded();
  68  |     await expect(this.modal.actesStatutsSection).toBeVisible({ timeout: 10000 });
  69  |   }
  70  | 
  71  |   getEnterpriseTitleLocator(): Locator {
  72  |     return this.modal.enterpriseTitle;
  73  |   }
  74  | 
  75  |   getSirenLocator(): Locator {
  76  |     return this.modal.sirenNumber.first();
  77  |   }
  78  | 
  79  |   getActesEtStatutsSectionLocator(): Locator {
  80  |     return this.modal.actesStatutsSection;
  81  |   }
  82  | 
  83  |   // --- Test 2: KBIS Search for Carrefour ---
  84  |   async goToKbisDocuments() {
  85  |     await this.modal.kbisDocumentsMenu.click();
  86  |     await this.page.waitForLoadState('networkidle');
  87  |   }
  88  | 
  89  |   async clickOrderKbis() {
  90  |     await this.modal.orderKbisBtn.click();
  91  |     await this.page.waitForLoadState('networkidle');
  92  |   }
  93  | 
  94  |   async searchKbisEnterprise(query: string) {
  95  |     await this.modal.kbisSearchInput.fill(query);
  96  |     await this.modal.kbisSearchInput.press('Enter');
  97  |     await this.page.waitForLoadState('networkidle');
  98  |   }
  99  | 
  100 |   async selectCarrefourEnterprise() {
  101 |     await this.modal.carrefourResult.waitFor({ state: 'visible', timeout: 10000 });
  102 |     await this.modal.carrefourResult.click();
  103 |     await this.page.waitForLoadState('networkidle');
  104 |     await this.modal.kbisIncontournableSection.scrollIntoViewIfNeeded();
  105 |   }
  106 | 
  107 |   async scrollToBottomAndKbis(): Promise<void> {
  108 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  109 |     await this.page.waitForTimeout(5000);
  110 |     await this.modal.kbisIncontournableSection.scrollIntoViewIfNeeded();
  111 |     await this.page.waitForTimeout(5000);
  112 |   }
  113 | 
  114 |   getCarrefourTitleLocator() {
  115 |     return this.modal.enterpriseTitle;
  116 |   }
  117 | 
  118 |   getKbisSectionLocator() {
  119 |     return this.modal.kbisIncontournableSection;
  120 |   }
  121 | 
  122 |   // --- Test 3
  123 |   async searchOnHomeAndPressEnter(query: string): Promise<void> {
  124 |     await this.modal.homeSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  125 |     await this.modal.homeSearchInput.click();
  126 |     await this.modal.homeSearchInput.fill(query);
  127 |     await this.modal.homeSearchInput.press('Enter');
  128 |     await this.page.waitForLoadState('networkidle');
  129 |   }
  130 | 
  131 |   async orderKbisDirectly(): Promise<void> {
  132 |     await this.modal.orderKbisDirectBtn.waitFor({ state: 'visible', timeout: 15000 });
  133 |     await this.modal.orderKbisDirectBtn.click();
  134 |     await this.page.waitForLoadState('networkidle');}
  135 |   async goToCartAndClick(): Promise<void> {
  136 |   await this.modal.cartIcon.waitFor({ state: 'visible', timeout: 10000 });
  137 |   await this.modal.cartIcon.click();
  138 |   await this.page.waitForLoadState('networkidle');}
  139 | 
  140 |   async validateCart(): Promise<void> {
  141 |     await this.modal.validateCartBtn.waitFor({ state: 'visible' });
  142 |     await this.modal.validateCartBtn.click();
  143 |     await this.page.waitForLoadState('networkidle');
  144 |   }
  145 | 
  146 |   async updateDeliveryAddress(newName: string): Promise<void> {
> 147 |     await this.modal.editDeliveryAddressLink.click();
      |                                              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  148 |     await this.modal.nameInput.waitFor({ state: 'visible' });
  149 |     await this.modal.nameInput.fill(newName);
  150 |     await this.modal.saveAddressBtn.click();
  151 |     await this.page.waitForLoadState('networkidle');
  152 |   }
  153 | 
  154 |   getDeliveryAddressLocator(): Locator {
  155 |     return this.modal.updatedDeliveryAddress;
  156 |   }
  157 | }
```