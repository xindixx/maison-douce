# Maison Douce: next steps

This is the to-do list, in order. Future Claude sessions should read this first (along with `CLAUDE.md`), pick up the first unfinished step, and tick items off here as they get done.

Last updated: 2026-10-13

## Where things stand
- 2026-10-13: the site was redesigned to look "luxury + French", with a layout based on fromrooms.com and three collections: **Midnight Muse**, **Dream Come True** and **Living the Dream** (details in `CLAUDE.md`). The owner hasn't approved it or asked to push it yet.
- The site is **not live**; GitHub Pages isn't switched on.

## 0. Owner review of the redesign (do this first)
- [ ] The owner reviews the new design and lists any changes.
- [x] Prices set by owner (RM): Midnight Muse 180, Dream Come True 120, Living the Dream 130.
- [ ] Confirm the free-shipping threshold (placeholder: RM250).
- [ ] Review the collection page text that Claude wrote (`story`, `details`, `care` in `script.js`). The fabric descriptions, fit advice ("size down", etc.) and care instructions are guesses from the photos and need checking against the real garments.
- [ ] Confirm what each set includes (for example, does Midnight Muse come with trousers or shorts?) and the sizes (currently XS–XL).
- [ ] Commit and push once the owner approves.

## 1. Decide the brand name (decision for the owner)
- [ ] Choose a final name. "Maison Douce" is a placeholder.
- [ ] Before committing to it, check that the name is free: domain (.com), Instagram/TikTok handles, and a quick trademark search.
- [ ] Once chosen, replace the name everywhere: `index.html` (title, logo, footer wordmark, story text), the favicon "MD", `README.md` and `CLAUDE.md`.

## 2. Photos still missing
- [x] Midnight Muse in blanc nacré (white), Living the Dream in yellow and blue (added 2026-10-13)
- [ ] Dream Come True in jaune (yellow) and bleu (blue)
- Each of these shows a "photographie à venir" colour tile until it has a photo. Add `img: "images/<name>.jpg"` to that product in `script.js`.
- Options: Claude writes prompts for ChatGPT, Gemini or Canva; buy Higgsfield credits; or the owner sends reference photos.

## 3. Replace ALL placeholder photos before selling (required)
- [ ] Every photo in `images/` currently comes from other brands (Pinterest, SHEIN, the Babe Doll collage, and the owner's reference screenshots). Replace them all with the owner's own product photos before taking real orders.

## 4. Move to Shopify (decided 2026-10-13)
- The owner has a rough, unfinished Shopify store. **Plan: finish designing this static site first, then turn it into a Shopify theme.**
- How to do the move: install Shopify CLI (`brew trust shopify/shopify && brew install shopify-cli`, which the owner has to approve), log in, download the store's theme, rebuild this design in it, and preview with `shopify theme dev`.
- The look carries over. These parts get rebuilt the Shopify way: the `products` array becomes products added in the Shopify admin, the bag becomes Shopify's cart, the newsletter becomes Shopify's customer form, and footer pages become Shopify pages. Checkout is Shopify's own page, where only the logo, colours and fonts can be changed.
- While designing, keep looks in `style.css`/`index.html` and avoid building complex custom features in `script.js` that Shopify already provides.

## 5. Real checkout
- [ ] Shopify route: products and checkout live in Shopify.
- [ ] Static route: create a Stripe Payment Link per product/size, and make the Checkout button go to it (`script.js`, `checkoutBtn` handler).

## 6. Newsletter sign-ups
- [ ] The form at the bottom of the page shows "Merci!" but saves nothing.
- [ ] Connect it to Shopify Email, Mailchimp, Klaviyo or Buttondown (the form in `index.html`, the handler in `script.js`).

## 7. Take the site live
- [ ] Quick preview link: turn on GitHub Pages for the repo (free, at `xindixx.github.io/maison-douce`). Note that the repo is **public**.
- [ ] Later: buy the domain from step 1 and point it at the site (or at Shopify).

## 8. Fill in the placeholder pages
- [ ] The footer links (Shipping & Returns, Size Guide, Contact, Instagram, Pinterest, TikTok) all point to `#` and go nowhere.
- [ ] Write a real size guide with measurements, which will come from the tech packs (step 9).
- [ ] Decide the shipping and returns policy. The banner says "free shipping over $80"; confirm that's affordable once costs are known (step 10).

## 9. Tech packs for the manufacturer (not started)
A tech pack is a document that tells a factory exactly how to make a garment.
- [ ] One per style: babydoll set and cami & short set.
- Each one covers: flat sketches (front/back), measurements per size XS–XL, fabric (chiffon, double layer at the bust), trims (satin ribbon bows, ruffles), colours, stitching details, labels and packaging.

## 10. Cost & pricing spreadsheet (not started)
- [ ] Cost per piece: fabric, trims, labour, packaging, shipping to you, payment fees, platform fees.
- [ ] Check current prices ($58–72) leave a healthy margin, and that the free-shipping threshold works.
- [ ] Track orders, stock and expenses.

## Small fixes noticed along the way
- [x] `.DS_Store` is already in `.gitignore`.
