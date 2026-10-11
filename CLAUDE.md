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
- A plain static site: `index.html` (content), `style.css` (look), `script.js` (products, bag, filters, newsletter). No build step.
- Repo: https://github.com/xindixx/maison-douce (**public**), branch `main`.
- To preview: `open index.html`, or run `python3 -m http.server 8765` and visit http://localhost:8765.
- Playwright MCP is installed (user scope) for browser testing. Test at desktop width and at phone width (390px).

### Design system (`style.css` `:root`)
- Colours: cream `#fbf6f0`, blush `#f5e3df`, rose `#e8b9b8`, rose-deep `#c98a8d`, wine `#5b2d35` (buttons and headings), ink `#3e2a2c`.
- Fonts: Cormorant Garamond (headings), Pinyon Script (small French script accents), Jost (body).
- Arch-shaped image frames, pill-shaped buttons, small French phrases ("la collection", "notre histoire").

### Products (`products` array in `script.js`)
| Name | Type | Price | Image |
|---|---|---|---|
| La Rose (pink) | babydoll | $68 | `images/rose-main.jpg` + hover `rose-2.jpg` |
| Blanche (white ruffle) | babydoll | $72 | `images/blanche.jpg` |
| Céleste (blue) | babydoll | $68 | `images/celeste.jpg` |
| Vanille (yellow) | babydoll | $68 | `images/vanille.jpg` |
| Pêche, Crème Brûlée, Sauge, Cerise | cami & short set | $58–62 | **SVG drawings only, no photos yet** |

- A product with an `img` shows the photo; a product without one falls back to an SVG drawing.
- `images/friends.jpg` (three friends in blue/pink/yellow babydolls) is used in the "Notre histoire" section.
- Lilas (purple) was removed at the owner's request.

### Image sources (important)
- `rose-main.jpg`, `rose-2.jpg` and `blanche.jpg` were cropped from **Pinterest screenshots, and one is a SHEIN listing**. They belong to other brands. They're fine as placeholders, but they must be replaced with the owner's own product photos before selling. Remind the owner of this.
- `celeste.jpg`, `vanille.jpg` and `friends.jpg` were cropped from a "Babe Doll" collage the owner supplied.
- The owner wants **photo-realistic images, not drawings**. Claude can't generate photos itself. The Higgsfield MCP is connected but the account has **0 credits** (free plan, about 1.5 credits per high-quality image). Alternatives: the owner makes images in ChatGPT, Gemini or Canva using prompts Claude writes, or sends a collage like the Babe Doll one.

## Not done yet
- Photos for the 4 cami & short sets
- A final brand name
- Real checkout: the bag works, but Checkout only shows a "not connected yet" note (options: Shopify or Stripe)
- The newsletter form doesn't save emails yet
- Taking the site live (GitHub Pages was offered)
- Fashion design tech packs, and a cost/pricing spreadsheet

## Working rules
- Commit and push to GitHub when the owner asks. End commit messages with the attribution line.
- Show the owner new images or design changes before publishing them.
