# Maison Douce: project context

## About the owner
- A complete beginner to coding. Explain every step in plain, beginner-friendly language (one short sentence per new term).
- Uses a Mac. git, node, npm, gh and Homebrew are installed. GitHub account: `xindixx` (logged in with `gh`).
- Has Shopify open in their browser and may move the store to Shopify later.

## The business
- An online store selling **pajamas / sleepwear**.
- Target customers: **women aged 20–35** who care about **looks and comfort** equally.
- Brand mood: **feminine, French, vintage-romantic**. Inspiration: chiffon babydoll sets with scooped double-layer necklines, satin ribbon bows, floaty A-line hems, vintage striped floral wallpaper, and soft warm film-like light.
- **"Maison Douce" is a placeholder name.** The owner hasn't confirmed a brand name yet; ask before treating it as final.
- The owner also wants help with design specs for a fashion designer/manufacturer ("tech packs") and an accounting/pricing sheet. Neither has been started yet.

## The website
- A plain static site: `index.html` (home), `collection.html` (one shared page for every collection), `style.css` (look), `script.js` (all products and collection text, the bag, filters, newsletter). No build step.
- `collection.html?c=midnight|dream|living&colour=<product id>` shows a photo gallery with thumbnails (every photo in the collection; clicking one switches colour), colour swatches, size buttons, Add to bag, a long description, and fold-out Details / Fabric & care / Shipping sections, with the other two collections at the bottom. Its content comes from the `story`, `details` and `care` fields in `collections` in `script.js`. Feature blocks, shop cards and the Shop menu all link here. Its header and footer are copies of `index.html`'s; when you change one, change both.
- Repo: https://github.com/xindixx/maison-douce (**public**), branch `main`.
- To preview: `open index.html`, or run `python3 -m http.server 8765` and visit http://localhost:8765.
- Playwright MCP is installed (user scope) for browser testing. Test at desktop width and at phone width (390px).

### Design (redesigned 2026-10-13: "luxury + French")
- Layout modelled on https://www.fromrooms.com: sticky header (menu left with a Shop dropdown, centred logo, bag right) → full-width hero photo (`images/hero.jpg`, a woman in a blush satin slip at a vanity) with the headline "For the woman who / dresses for herself" and a "Discover the collection" button, nothing else (owner's request) → intro line → one large feature block per collection → shop grid with filters and a "+" quick-add size picker → full-width editorial photo with a quote → La Maison story → fabric & care → dark footer with the newsletter ("Subscribe to our newsletter") and a large wordmark.
- Colours (`style.css` `:root`): ivory `#f8f4ee` background, paper `#f0e9df`, hairlines `#ddd2c4`, taupe `#8b7d70`, ink `#2a2321` (text, buttons, footer), bordeaux `#4b1e26` (italic accent words).
- Fonts: Cormorant Garamond (light headings, with italic accent words), Jost (body, plus small spaced-out capitals for labels). No script font and no rounded "cute" shapes; keep it minimal and editorial.

### Collections and products (`collections` and `products` in `script.js`)
| Collection | Piece | Colours | Price | Photos |
|---|---|---|---|---|
| Midnight Muse | satin pyjama set (piping, neck tie, crystals) | vert amande, blanc nacré | RM180 | `midnight-vert.jpg`, `midnight-blanc.jpg` |
| Dream Come True | pointelle bandeau & ruffle set | rose, jaune, bleu | RM120 | pink `dream-rose.jpg`; yellow/blue: none |
| Living the Dream | chiffon babydoll (double-layer scoop neck, ribbon tie) | rose, jaune, bleu | RM130 | `living-rose.jpg`, `living-jaune.jpg`, `living-bleu.jpg` (hover photos: `rose-2.jpg`, `vanille.jpg`, `celeste.jpg`) |

- Each product is one colour. A product without `img` shows a colour tile reading "photographie à venir".
- Prices are in **Malaysian ringgit (RM)** and were set by the owner. The free-shipping threshold in the announcement bar (RM250) is a placeholder Claude picked and needs the owner's confirmation.
- `friends.jpg` is the editorial photo. `rose-main.jpg` and `blanche.jpg` are no longer used.

### Image sources (important)
- `hero.jpg`, `midnight-vert.jpg`, `midnight-blanc.jpg`, `dream-rose.jpg`, `living-rose.jpg`, `living-jaune.jpg` and `living-bleu.jpg` were cropped from reference images the owner sent (they appear to be Pinterest images from other brands). `rose-2.jpg` is from Pinterest/SHEIN. `celeste.jpg`, `vanille.jpg` and `friends.jpg` are from a "Babe Doll" collage. **All of them are placeholders and must be replaced with the owner's own product photos before selling.** Remind the owner of this.
- The owner wants **photo-realistic images, not drawings**. Claude can't generate photos itself. The Higgsfield MCP is connected, but the account has **0 credits**. Alternatives: the owner makes images in ChatGPT, Gemini or Canva from prompts Claude writes.

### Testing without Playwright
- If the Playwright MCP fails, use headless Chrome: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --screenshot=… --window-size=1440,6600 file://…`. Headless Chrome can't go narrower than about 500px, so to check phone width (390px), load the page in a 390px iframe and measure `scrollWidth` with `--dump-dom`.

## Not done yet
**The ordered to-do list lives in `NEXT_STEPS.md`. Read it at the start of every session, work from the first unfinished step, and tick items off as they're done.**

## Working rules
- Commit and push to GitHub when the owner asks. End commit messages with the attribution line.
- Show the owner new images or design changes before publishing them.
