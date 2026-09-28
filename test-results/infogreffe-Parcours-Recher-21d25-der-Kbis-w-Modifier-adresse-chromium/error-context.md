# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: infogreffe.spec.ts >> Parcours Recherche Infogreffe >> Recherche Carrefour f Home page, Commander Kbis w Modifier adresse
- Location: tests\infogreffe.spec.ts:44:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Panier/i }).or(locator('.cart-icon, #panier, a[href*="panier"]')).first() to be visible
    23 × locator resolved to hidden <a href="/panier" aria-label="Mon panier">…</a>

```

# Page snapshot

```yaml
- generic [ref=f114e2]:
  - generic [ref=f114e3]:
    - generic [ref=f114e5]:
      - generic [ref=f114e9]:
        - link [ref=f114e10] [cursor=pointer]:
          - /url: /
          - img "Infogreffe - Registre du commerce et des sociétés - Greffe du tribunal de commerce" [ref=f114e11]
        - generic [ref=f114e18]:
          - button "search-button" [ref=f114e21] [cursor=pointer]
          - generic [ref=f114e25]:
            - textbox "Rechercher..." [ref=f114e26]: carrefour
            - button "cross-button" [ref=f114e27]:
              - img [ref=f114e28] [cursor=pointer]
        - generic [ref=f114e30]:
          - generic [ref=f114e31]:
            - link [ref=f114e34] [cursor=pointer]:
              - /url: /kbis-documents
              - button "Kbis & documents" [ref=f114e37]
            - link [ref=f114e40] [cursor=pointer]:
              - /url: /hub-entrepreneurs
              - button "Hub des entrepreneurs" [ref=f114e43]
            - link [ref=f114e46] [cursor=pointer]:
              - /url: /services
              - button "Services" [ref=f114e49]
          - link "Aide":
            - /url: /aides-et-tutoriels
          - link "Mon panier" [ref=f114e54] [cursor=pointer]:
            - /url: /panier
          - button "user menu" [ref=f114e60] [cursor=pointer]:
            - generic [ref=f114e61]: ES
          - img "logo-les-greffiers-des-tribunaux" [ref=f114e65]
      - main [ref=f114e66]:
        - generic [ref=f114e70]:
          - button "Retour" [ref=f114e71] [cursor=pointer]
          - generic [ref=f114e75]:
            - link "Accueil" [ref=f114e77] [cursor=pointer]:
              - /url: /
            - generic "Résultats de recherche" [ref=f114e84]
        - generic [ref=f114e85]:
          - heading "Résultats de recherche « carrefour »" [level=1] [ref=f114e87]
          - generic [ref=f114e91]:
            - button "Entreprises (10)" [ref=f114e93]
            - button "Dirigeants (0)" [ref=f114e96]
            - button "Débiteurs" [ref=f114e99]
          - generic [ref=f114e101]:
            - generic [ref=f114e102]:
              - generic [ref=f114e103]:
                - generic [ref=f114e105]:
                  - generic [ref=f114e106]: Dénomination*
                  - textbox "Dénomination*" [ref=f114e109]
                - generic [ref=f114e111]:
                  - generic [ref=f114e112]: SIREN / SIRET*
                  - textbox "SIREN / SIRET*" [ref=f114e115]
                - generic [ref=f114e118]:
                  - generic [ref=f114e119]: Domaine d'activité
                  - button "Domaine d'activité" [ref=f114e122]
              - generic [ref=f114e127]:
                - generic [ref=f114e129]:
                  - generic [ref=f114e130]: Département, commune, code postal, ...
                  - textbox "Département, commune, code postal, ..." [ref=f114e133]
                - generic [ref=f114e136]:
                  - generic [ref=f114e137]: Trier par
                  - button "Trier par" [ref=f114e140]
                - generic [ref=f114e146]:
                  - generic [ref=f114e147]: Entreprises/Établissements
                  - button "Entreprises/Établissements" [ref=f114e150]
                - button "Rechercher" [disabled] [ref=f114e157] [cursor=pointer]
            - generic [ref=f114e159]:
              - generic [ref=f114e160]:
                - generic [ref=f114e161]:
                  - generic [ref=f114e162]:
                    - heading "1" [level=5] [ref=f114e164]
                    - link [ref=f114e165] [cursor=pointer]:
                      - /url: /entreprise/carrefour/652014051/f1aeb141-0f1a-4ed4-bca8-332a932563d0
                      - heading "CARREFOUR" [level=3] [ref=f114e166]
                    - link:
                      - /url: /entreprise/carrefour/652014051/f1aeb141-0f1a-4ed4-bca8-332a932563d0
                      - heading [level=3]
                  - generic [ref=f114e167]:
                    - heading "SIREN :" [level=4] [ref=f114e168]
                    - heading "652 014 051" [level=4] [ref=f114e169]
                  - heading "93 Avenue de Paris, 91300 Massy" [level=4] [ref=f114e171]
                  - heading "6420Z - Activités des sociétés holding" [level=3] [ref=f114e173]
                - generic [ref=f114e174]:
                  - button "Commander un Kbis" [ref=f114e177] [cursor=pointer]
                  - link "2 établissements" [ref=f114e180] [cursor=pointer]:
                    - /url: /entreprise/carrefour/652014051/f1aeb141-0f1a-4ed4-bca8-332a932563d0?ancre=etablissements
                  - button [ref=f114e182] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e185]
              - generic [ref=f114e186]:
                - generic [ref=f114e187]:
                  - generic [ref=f114e188]:
                    - heading "2" [level=5] [ref=f114e190]
                    - link [ref=f114e191] [cursor=pointer]:
                      - /url: /entreprise/sarl-du-carrefour/482850070/7d16865e-e3e2-497c-b4d6-3115852c4f02
                      - heading "SARL DU CARREFOUR" [level=3] [ref=f114e192]
                    - link:
                      - /url: /entreprise/sarl-du-carrefour/482850070/7d16865e-e3e2-497c-b4d6-3115852c4f02
                      - heading [level=3]
                  - generic [ref=f114e193]:
                    - heading "SIREN :" [level=4] [ref=f114e194]
                    - heading "482 850 070" [level=4] [ref=f114e195]
                  - heading "le Carrefour, 72600 Saint-Pierre-des-Ormes" [level=4] [ref=f114e197]
                  - heading "0146Z - Élevage de porcins" [level=3] [ref=f114e199]
                - generic [ref=f114e200]:
                  - button "Commander un Kbis" [ref=f114e203] [cursor=pointer]
                  - button [ref=f114e206] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e209]
              - generic [ref=f114e210]:
                - generic [ref=f114e211]:
                  - generic [ref=f114e212]:
                    - heading "3" [level=5] [ref=f114e214]
                    - link [ref=f114e215] [cursor=pointer]:
                      - /url: /entreprise/carrefour-de-l-auto/383650025/25b34090-6289-416b-b281-f59e68b4a84f
                      - heading "CARREFOUR DE L'AUTO" [level=3] [ref=f114e216]
                    - link:
                      - /url: /entreprise/carrefour-de-l-auto/383650025/25b34090-6289-416b-b281-f59e68b4a84f
                      - heading [level=3]
                  - generic [ref=f114e217]:
                    - heading "SIREN :" [level=4] [ref=f114e218]
                    - heading "383 650 025" [level=4] [ref=f114e219]
                  - heading "Route de la Baronne Quartier des Iscles, 06700 Saint-Laurent-du-Var" [level=4] [ref=f114e221]
                  - heading "4511Z - Commerce de voitures et de véhicules automobiles légers" [level=3] [ref=f114e223]
                - generic [ref=f114e224]:
                  - button "Commander un Kbis" [ref=f114e227] [cursor=pointer]
                  - link "1 établissement" [ref=f114e230] [cursor=pointer]:
                    - /url: /entreprise/carrefour-de-l-auto/383650025/25b34090-6289-416b-b281-f59e68b4a84f?ancre=etablissements
                  - button [ref=f114e232] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e235]
              - generic [ref=f114e236]:
                - generic [ref=f114e237]:
                  - generic [ref=f114e238]:
                    - heading "4" [level=5] [ref=f114e240]
                    - link [ref=f114e241] [cursor=pointer]:
                      - /url: /entreprise/carrefour-grill/429825110/b1e27b6a-8dbf-4f17-85c9-3e08f839f345
                      - heading "CARREFOUR GRILL" [level=3] [ref=f114e242]
                    - link:
                      - /url: /entreprise/carrefour-grill/429825110/b1e27b6a-8dbf-4f17-85c9-3e08f839f345
                      - heading [level=3]
                  - generic [ref=f114e243]:
                    - heading "SIREN :" [level=4] [ref=f114e244]
                    - heading "429 825 110" [level=4] [ref=f114e245]
                  - heading "Zone Artisanale ou Zone d'Activité DES PERES BLANCS, 97123 Baillif" [level=4] [ref=f114e247]
                  - heading "5610A - Restauration traditionnelle" [level=3] [ref=f114e249]
                - generic [ref=f114e250]:
                  - button "Commander un Kbis" [ref=f114e253] [cursor=pointer]
                  - link "2 établissements" [ref=f114e256] [cursor=pointer]:
                    - /url: /entreprise/carrefour-grill/429825110/b1e27b6a-8dbf-4f17-85c9-3e08f839f345?ancre=etablissements
                  - button [ref=f114e258] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e261]
              - generic [ref=f114e262]:
                - generic [ref=f114e263]:
                  - generic [ref=f114e264]:
                    - heading "5" [level=5] [ref=f114e266]
                    - link [ref=f114e267] [cursor=pointer]:
                      - /url: /entreprise/issoria-carrefour-issoire/348077546/f203159c-95ec-4079-a5ba-3d769fc40d00
                      - heading "ISSORIA - CARREFOUR ISSOIRE" [level=3] [ref=f114e268]
                    - link:
                      - /url: /entreprise/issoria-carrefour-issoire/348077546/f203159c-95ec-4079-a5ba-3d769fc40d00
                      - heading [level=3]
                  - generic [ref=f114e269]:
                    - heading "SIREN :" [level=4] [ref=f114e270]
                    - heading "348 077 546" [level=4] [ref=f114e271]
                  - heading "Zac des Prés Rue Jean Bigot, 63500 Issoire" [level=4] [ref=f114e273]
                  - heading "8299Z - Autres activités de soutien aux entreprises n.c.a." [level=3] [ref=f114e275]
                - generic [ref=f114e276]:
                  - button "Commander un Kbis" [ref=f114e279] [cursor=pointer]
                  - link "1 établissement" [ref=f114e282] [cursor=pointer]:
                    - /url: /entreprise/issoria-carrefour-issoire/348077546/f203159c-95ec-4079-a5ba-3d769fc40d00?ancre=etablissements
                  - button [ref=f114e284] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e287]
              - generic [ref=f114e288]:
                - generic [ref=f114e289]:
                  - generic [ref=f114e290]:
                    - heading "6" [level=5] [ref=f114e292]
                    - link [ref=f114e293] [cursor=pointer]:
                      - /url: /entreprise/le-carrefour/441024619/753705be-4251-4753-801c-fe47d9ae4286
                      - heading "LE CARREFOUR" [level=3] [ref=f114e294]
                    - link:
                      - /url: /entreprise/le-carrefour/441024619/753705be-4251-4753-801c-fe47d9ae4286
                      - heading [level=3]
                  - generic [ref=f114e295]:
                    - heading "SIREN :" [level=4] [ref=f114e296]
                    - heading "441 024 619" [level=4] [ref=f114e297]
                  - heading "184 Rue de Paris, 93130 Noisy-le-Sec" [level=4] [ref=f114e299]
                  - heading "6820B - Location de terrains et d'autres biens immobiliers" [level=3] [ref=f114e301]
                - generic [ref=f114e302]:
                  - button "Commander un Kbis" [ref=f114e305] [cursor=pointer]
                  - link "1 établissement" [ref=f114e308] [cursor=pointer]:
                    - /url: /entreprise/le-carrefour/441024619/753705be-4251-4753-801c-fe47d9ae4286?ancre=etablissements
                  - button [ref=f114e310] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e313]
              - generic [ref=f114e314]:
                - generic [ref=f114e315]:
                  - generic [ref=f114e316]:
                    - heading "7" [level=5] [ref=f114e318]
                    - link [ref=f114e319] [cursor=pointer]:
                      - /url: /entreprise/parfumerie-bertoni-carrefour-arue/81693aea-6081-4af3-b461-8a75fce1c291
                      - heading "PARFUMERIE BERTONI CARREFOUR ARUE" [level=3] [ref=f114e320]
                    - link:
                      - /url: /entreprise/parfumerie-bertoni-carrefour-arue/81693aea-6081-4af3-b461-8a75fce1c291
                      - heading [level=3]
                  - generic:
                    - heading [level=4]
                    - heading [level=4]
                  - heading "Galerie Marchande Du Centre Commercial Carrefour - Arue BP 13708, 98717 Punaauia" [level=4] [ref=f114e322]
                  - generic:
                    - heading [level=3]
                - button "Commander un Kbis" [ref=f114e326] [cursor=pointer]
              - generic [ref=f114e328]:
                - generic [ref=f114e329]:
                  - generic [ref=f114e330]:
                    - heading "8" [level=5] [ref=f114e332]
                    - link [ref=f114e333] [cursor=pointer]:
                      - /url: /entreprise/le-carrefour-des-connaissances/913757431/4f38cd5e-0d6f-425e-b53e-1241ac0c98e2
                      - heading "LE CARREFOUR DES CONNAISSANCES" [level=3] [ref=f114e334]
                    - link:
                      - /url: /entreprise/le-carrefour-des-connaissances/913757431/4f38cd5e-0d6f-425e-b53e-1241ac0c98e2
                      - heading [level=3]
                  - generic [ref=f114e335]:
                    - heading "SIREN :" [level=4] [ref=f114e336]
                    - heading "913 757 431" [level=4] [ref=f114e337]
                  - heading "131 Rue Rachel Carson, 77000 Melun" [level=4] [ref=f114e339]
                  - heading "8559A - Formation continue d'adultes" [level=3] [ref=f114e341]
                - generic [ref=f114e342]:
                  - button "Commander un Kbis" [ref=f114e345] [cursor=pointer]
                  - link "1 établissement" [ref=f114e348] [cursor=pointer]:
                    - /url: /entreprise/le-carrefour-des-connaissances/913757431/4f38cd5e-0d6f-425e-b53e-1241ac0c98e2?ancre=etablissements
                  - button [ref=f114e350] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e353]
              - generic [ref=f114e354]:
                - generic [ref=f114e355]:
                  - generic [ref=f114e356]:
                    - heading "9" [level=5] [ref=f114e358]
                    - link [ref=f114e359] [cursor=pointer]:
                      - /url: /entreprise/la-pizza-du-carrefour/1b73738d-6755-4d86-9024-bf2d73557779
                      - heading "LA PIZZA DU CARREFOUR" [level=3] [ref=f114e360]
                    - link:
                      - /url: /entreprise/la-pizza-du-carrefour/1b73738d-6755-4d86-9024-bf2d73557779
                      - heading [level=3]
                  - generic:
                    - heading [level=4]
                    - heading [level=4]
                  - heading "Lotissement Mirirapa Plateau Lot 103 - Toahotu, 98724 Hitiaa O Te Ra" [level=4] [ref=f114e362]
                  - generic:
                    - heading [level=3]
                - button "Commander un Kbis" [ref=f114e366] [cursor=pointer]
              - generic [ref=f114e368]:
                - generic [ref=f114e369]:
                  - generic [ref=f114e370]:
                    - heading "10" [level=5] [ref=f114e372]
                    - link [ref=f114e373] [cursor=pointer]:
                      - /url: /entreprise/selas-pharmacie-du-carrefour-saint-denis/520764986/700f1bb3-8404-483e-b0a9-9c9b702a06d8
                      - heading "SELAS PHARMACIE DU CARREFOUR SAINT DENIS" [level=3] [ref=f114e374]
                    - link:
                      - /url: /entreprise/selas-pharmacie-du-carrefour-saint-denis/520764986/700f1bb3-8404-483e-b0a9-9c9b702a06d8
                      - heading [level=3]
                  - generic [ref=f114e375]:
                    - heading "SIREN :" [level=4] [ref=f114e376]
                    - heading "520 764 986" [level=4] [ref=f114e377]
                  - heading "Centre Commercial Basilique 13 Passage du Saulger, 93200 Saint-Denis" [level=4] [ref=f114e379]
                  - heading "4773Z - Commerce de détail de produits pharmaceutiques en magasin spécialisé" [level=3] [ref=f114e381]
                - generic [ref=f114e382]:
                  - button "Commander un Kbis" [ref=f114e385] [cursor=pointer]
                  - link "1 établissement" [ref=f114e388] [cursor=pointer]:
                    - /url: /entreprise/selas-pharmacie-du-carrefour-saint-denis/520764986/700f1bb3-8404-483e-b0a9-9c9b702a06d8?ancre=etablissements
                  - button [ref=f114e390] [cursor=pointer]:
                    - heading "Poser une surveillance" [level=4] [ref=f114e393]
            - generic [ref=f114e396]:
              - generic [ref=f114e397]:
                - heading "Résultats par page" [level=6] [ref=f114e398]
                - combobox [ref=f114e399]:
                  - option "5"
                  - option "10" [selected]
                  - option "20"
                  - option "30"
                  - option "40"
                  - option "50"
                  - option "100"
              - list [ref=f114e401]:
                - listitem [ref=f114e402]:
                  - button "Précédent" [disabled] [ref=f114e403]
                - listitem [ref=f114e405]:
                  - button "1" [ref=f114e406] [cursor=pointer]
                - listitem [ref=f114e407]:
                  - button "Suivant" [disabled] [ref=f114e408]
      - generic [ref=f114e411]:
        - generic [ref=f114e412]:
          - generic [ref=f114e413]:
            - heading "Informations" [level=3] [ref=f114e414]
            - generic [ref=f114e415]:
              - button "Creer un compte" [ref=f114e416] [cursor=pointer]
              - button "Qui sommes-nous ?" [ref=f114e417] [cursor=pointer]
              - button "Actualités" [ref=f114e418] [cursor=pointer]
              - button "Tarifs" [ref=f114e419] [cursor=pointer]
              - button "Aide et tutoriels" [ref=f114e420] [cursor=pointer]
              - button "FAQ" [ref=f114e421] [cursor=pointer]
              - button "Nous contacter" [ref=f114e422] [cursor=pointer]
          - generic [ref=f114e423]:
            - heading "Rechercher" [level=3] [ref=f114e424]
            - generic [ref=f114e425]:
              - button "Rechercher une entreprise, un dirigeant ou un débiteur" [ref=f114e426] [cursor=pointer]
              - button "Rechercher un greffe" [ref=f114e427] [cursor=pointer]
              - button "Rechercher par département" [ref=f114e428] [cursor=pointer]
          - generic [ref=f114e429]:
            - heading "Informations Légales" [level=3] [ref=f114e430]
            - generic [ref=f114e431]:
              - button "Plan du site" [ref=f114e432] [cursor=pointer]
              - button "Politique de confidentialité" [ref=f114e433] [cursor=pointer]
              - button "CGU-CGV" [ref=f114e434] [cursor=pointer]
              - button "Mentions Légales" [ref=f114e435] [cursor=pointer]
              - button "Répertoire des arnaques au Kbis" [ref=f114e436] [cursor=pointer]
        - button "footer-social" [ref=f114e438] [cursor=pointer]:
          - img "bloc2.jpg" [ref=f114e439]
    - generic [ref=f114e442]:
      - generic [ref=f114e448]: Le KBIS a été ajouté au panier
      - button [ref=f114e449] [cursor=pointer]
  - generic [ref=f114e453]: Navigated to Résultats de recherche « carrefour »
```

# Test source

```ts
  36  |   }
  37  | 
  38  |   async selectAccountIfAppears(): Promise<void> {
  39  |     try {
  40  |       const account = this.modal.accountCards.first();
  41  |       if (await account.isVisible({ timeout: 4000 })) {
  42  |         await account.click();
  43  |         await this.page.waitForLoadState('networkidle');
  44  |       }
  45  |     } catch (e) {}
  46  |   }
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
> 136 |   await this.modal.cartIcon.waitFor({ state: 'visible', timeout: 10000 });
      |                             ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
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
  147 |     await this.modal.editDeliveryAddressLink.click();
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