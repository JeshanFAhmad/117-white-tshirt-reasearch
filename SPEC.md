# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

**Related GitHub issue:** [PLAN-002: Add simulated checkout and SQLite persistence](PASTE-YOUR-NEW-ISSUE-URL-HERE)

## Current stage

- Stage: BRAND-001 storefront and style-guide implementation applied; learner review and Keep evidence remain pending.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Scope recorded in issue #1; branch `feature/brand-001-first-branded-storefront` exists. No BRAND-001 pull request exists yet.
- Next small decisions: Review the implemented identity and interactions in the browser, then collect the learner's actual impression, keyboard/mobile observations, and explanation of one check. No PR or merge exists.

## Product boundary

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales. The comfort/simplicity promise is learner-supplied; comfort has not been independently verified as a product fact.

## Audience hypotheses

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                                                                           | Secondary audience                                        |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Person in a concrete situation        | College students in need of a subtle shirt for lectures and around campus.                                 |
| Goal or meaning they seek             | Everyday wear, comfort, and simplicity (learner-stated promise; comfort is not verified as a product fact) | Individuality and visual expression (learner-stated need) |
| Concern before choosing               | Earlier learner-stated concern: standing out too much in public                                            | Not chosen yet                                            |
| What the page should help them decide | Not chosen yet                                                                                             | Not chosen yet                                            |
| Evidence or assumption                | Learner-provided hypothesis; earlier AI rationale adopted after a hint; both remain unvalidated            | Learner-provided contrast; not validated                  |

## Early brand brief

| Decision                                 | Agreement                                        |
| ---------------------------------------- | ------------------------------------------------ |
| Brand name                               | Everyday                                         |
| One-sentence promise                     | Comfortable, simple T-shirts for everyday wear.  |
| Brand expression                         | Minimalist — clean, simple, and straightforward. |
| Primary archetype: the brand's character | Explorer                                         |
| Three voice traits                       | Clear, Calm, Confident                           |
| One example line in this voice           | Not chosen yet                                   |
| Learner's predicted audience effect      | Not yet evidenced                                |

## Visual decision

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared headline / support / action                | Preview copy, not yet approved: “Everyday, made simple.” / learner's promise / “View the white T-shirt.” Identical in A and B.                                                                                                                                                                                                                |
| Modernist preview, reference, and annotations     | [Preview A](public/explorations/everyday-modernist.html): V&A's Christian Dell, _Dell-Lampe Type K_ (1929); grid, alignment, restrained palette. Intended to aid quick scanning; risk of a generic feel.                                                                                                                                      |
| Postmodernist preview, reference, and annotations | [Preview B](public/explorations/everyday-postmodernist.html): V&A's Martine Bedin, _Super lamp prototype_ (1981); layering, offset blocks, serif/sans contrast. Intended to support expression; risk of competing with the product or feeling less calm.                                                                                      |
| Chosen direction and reason                       | Learner initially preferred A; reason not yet evidenced after an AI example. Keep as a preference, not a final direction.                                                                                                                                                                                                                     |
| Original SVG logo                                 | Learner selected the Daily Fold concept; AI-created SVG proposal at [logo review](public/explorations/everyday-logo-review.html), learner review pending                                                                                                                                                                                      |
| Monochrome and small-size variants                | Same SVG proposed in one ink color; review page shows 175 × 32 px and 260 × 48 px presentations. AI browser inspection confirmed both images loaded; learner review pending.                                                                                                                                                                  |
| Logo review at actual use size                    | Proposal displayed at 175 × 32 px, matching the starter header image width; learner review pending                                                                                                                                                                                                                                            |
| Shared palette, typography, spacing, and assets   | The implementation now uses shared paper `#f7f7f3`, ink `#171a18`, muted `#56605a`, line `#c9cec6`, accent `#e2e8de`, and soft `#e8eae1` tokens; system sans and monospace; and the existing shared spacing scale. These code values follow the saved restrained preview and logo ink; learner review of the rendered system remains pending. |

## Ethical persuasion

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle                  | Approved proposal / implemented page element                                                                                                                                  | Visitor benefit / factual support                                                                                                                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reciprocity                | Free, ungated “A simple styling idea”: “Start with the plain white tee and pieces you already enjoy wearing.”                                                                 | Offers practical advice before asking for a size choice. The product image depicts a plain white T-shirt; the outfit wording is advice, not a product claim. The learner's explanation of this benefit remains not yet evidenced.                    |
| Commitment and consistency | Optional “Keep it understated” or “Add a little expression” buttons reveal a matching suggestion; the choice is not saved and does not change size selection or the demo bag. | Lets a visitor choose a direction, see a related idea, or change direction. The page reflects only the visible choice and white shirt; it infers no preference or product fact. The learner's explanation of this benefit remains not yet evidenced. |

Both proposals were approved by the learner on 2026-10-29 and are now implemented in `public/index.html` and `public/shop.js`. When asked how an element could help the intended visitor, the learner replied “unsure,” including after an AI example; implementation does not change that learning evidence.

## Current storefront and style-guide implementation

- `public/index.html` now uses the Everyday identity and Daily Fold SVG, retains the white T-shirt, size selector, fictional demo price, and temporary demo bag, and includes the two approved styling interactions.
- `public/styleguide.html` now presents the Everyday identity, logo variants, live shared color and spacing tokens, typography, components, voice, and the two implemented persuasion applications through `public/styles.css`.
- The Everyday preview pages and Daily Fold logo review page are isolated explorations. Neither is wired into the storefront or style guide.
- The previews and SVG proposal were drafted by AI. The storefront/style-guide implementation was performed by AI at the instructor's direction; no learner revision or review of the rendered implementation is recorded.

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                                                                                                                                                                                                                                                   | Issue / PR                                                                                                                              | Actual checks and observations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | [index.html](public/index.html), [shop.js](public/shop.js), [styles.css](public/styles.css), [styleguide.html](public/styleguide.html), [studio.spec.js](tests/browser/studio.spec.js), [Preview A](public/explorations/everyday-modernist.html), [Preview B](public/explorations/everyday-postmodernist.html), [Daily Fold SVG](public/assets/everyday-daily-fold.svg) | [#1](https://github.com/JeshanFAhmad/is117-my-brand-studio/issues/1); branch `feature/brand-001-first-branded-storefront`; no PR exists | `npm.cmd run check` stops at Prettier on seven files with pre-existing formatting issues: `LEARNING.md`, `SPEC.md`, and five existing exploration files (`everyday-logo-review.html`, `everyday-modernist.html`, `everyday-postmodernist.html`, `logo-review.css`, `preview.css`). `npm.cmd run lint` also stops because its single-quoted HTML glob is passed literally on Windows. Targeted Prettier on changed code files passed; `npm.cmd exec eslint -- .`, `npm.cmd exec html-validate -- "public/**/*.html"`, and `npm.cmd exec stylelint -- "public/**/*.css"` passed; `npm.cmd test` passed (7 tests); `npm.cmd run test:e2e` passed (12 tests), including the no-size and selected-size bag behavior, optional styling choice, shared guide logo/tokens, responsive layouts at 375 × 812, page links/images, and axe checks on all three pages. These are automated checks, not a learner observation or proof of brand fit. |

### Learner observations

- **Browser:** The available learner report says the neutral page and white shirt appeared; sizes were selectable; the learner selected XL, added it to the demo bag, saw the white shirt with XL there, and noticed no unexpected behavior. This is a report about the neutral baseline, not the branded storefront.
- **Keyboard:** No learner keyboard observation is recorded.
- **Narrow/mobile:** No learner narrow/mobile observation is recorded. Automated browser checks passed at 375 × 812 on the storefront, style guide, and studio overview; these are not learner observations.
- **Revisions:** No learner-made revision or reason is recorded.
- **Merged BRAND-001 PR:** None exists; GitHub's pull-request list for this repository was empty when checked. Add a link only after a PR is created and merged.

**Logo proposal (learner review pending):** [Daily Fold SVG](public/assets/everyday-daily-fold.svg), shown in the [isolated review page](public/explorations/everyday-logo-review.html) and now used in the storefront and guide. Automated tests confirm the guide uses that SVG; review of the logo at actual size remains pending.

## Next-Phase Plan: Everyday White T-Shirt Storefront

### Project Goal

The next phase of Everyday will improve the white T-shirt shopping experience by adding a more complete shopping process. The goal is to make it easy for visitors to understand the product, choose a size, review their bag, and complete a simulated checkout.

The next phase will also introduce a SQLite database to store order information. This is a planned feature and has not been implemented yet.

### Target Audience

The primary audience is everyday dressers who prefer simple, understated clothing. They want a straightforward shopping experience and may not want clothing that draws too much attention.

The secondary audience is people who like minimalist clothing but still want opportunities to express their personal style.

### Two Possible Website Approaches

**Approach A: Product-First Storefront**

This approach focuses on the white T-shirt itself. The page would prioritize the product image, price, available sizes, and important product information. Visitors could quickly select a size and add the shirt to their shopping bag.

**Approach B: Minimalist Lifestyle Storefront**

This approach presents the T-shirt as a simple everyday wardrobe item. It would use a clean layout, neutral colors, styling suggestions, and clear product information. Visitors could explore outfit ideas while still having easy access to the price and size selection.

**Preferred Approach: B**

Approach B is the preferred direction because it supports Everyday's minimalist brand identity while giving visitors more ways to interact with the product. Product details and shopping controls will remain easy to find. This preference is based on the existing brand direction and has not yet been tested with customers.

### User Stories

1. As a visitor, I want to view the white T-shirt and its price so I can understand what is being offered.
2. As a visitor, I want to select my preferred size so I can choose the version I want.
3. As a visitor, I want to add the shirt to my shopping bag so I can review my selection.
4. As a visitor, I want to see simple styling suggestions so I can consider how to wear the shirt.
5. As a visitor, I want to complete a simulated checkout and have my order saved so I can see that the shopping process worked.

### Essential Features and Observable Checks

| Feature             | What it should do                                                           | How it will be checked                                                             |
| ------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Product display     | Show the white T-shirt, price, and available information                    | Confirm the product and price appear correctly                                     |
| Size selection      | Let visitors choose a shirt size                                            | Select different sizes and confirm the selected size is shown                      |
| Shopping bag        | Let visitors add and review their selection                                 | Add the shirt and confirm the correct item and size appear                         |
| Styling suggestions | Display optional outfit suggestions                                         | Select a styling option and confirm its matching suggestion appears                |
| Simulated checkout  | Allow visitors to enter sample checkout information and submit a test order | Submit a test order and confirm a success message appears                          |
| SQLite database     | Save completed test orders                                                  | Confirm the order is stored and remains available after restarting the application |

### Brand Promise and Visual Choices

Everyday's brand promise is: "Comfortable, simple T-shirts for everyday wear."

The website will continue using a minimalist visual direction with a neutral color palette, simple typography, and an uncluttered layout. The current palette includes paper `#f7f7f3`, ink `#171a18`, muted `#56605a`, line `#c9cec6`, accent `#e2e8de`, and soft `#e8eae1`.

The Daily Fold logo concept and existing Everyday identity will be carried forward. The design should keep the product easy to understand without unnecessary visual distractions.

### Ethical Persuasion

The website will continue using two existing persuasion techniques:

**1. Reciprocity:** Provide a free styling suggestion before asking visitors to make a shopping decision. This gives visitors something useful without requiring a purchase.

**2. Commitment and Consistency:** Let visitors choose between keeping their outfit understated or adding more expression. The website will show a matching suggestion based on their choice.

Both techniques are optional and should help visitors explore the product without pressuring them.

### Simulated Checkout and SQLite Backend

The next phase will include a simulated checkout. Visitors will be able to review their shopping bag, enter sample checkout information, and submit a test order.

The checkout will not process real payments or collect real payment information.

A SQLite database will store the test order information. The planned database tables are:

- **Products:** Stores product information such as the shirt name and price.
- **Orders:** Stores each submitted test order and its order details.
- **Order Items:** Stores the products and quantities associated with each order.

The database will be checked by submitting a test order, restarting the application, and confirming that the order information remains saved.

### Verification Plan

The next phase will be considered successful when:

- Visitors can view the product and select a size.
- Visitors can add the product to their shopping bag.
- Styling suggestions respond to the visitor's choice.
- A simulated checkout can be completed.
- Test orders are saved in SQLite.
- Saved orders remain available after restarting the application.

These checks will be performed after the features are implemented.

### AI Assistance

ChatGPT was used to help organize and draft the next-phase plan, user stories, feature descriptions, and verification checks. The plan will be reviewed and edited by the student before submission.

## Later

No follow-up is selected. After keeping `BRAND-001`, choose one next cycle: perhaps a brand story, a supported fit guide, or richer demo-bag behavior. Agree its scope and add one new spec ID at that time.
