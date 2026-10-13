// ---------- Collections: edit names, descriptions and prices here ----------
const collections = [
  { id: "midnight", numeral: "I",   name: "Midnight Muse",    fr: "la muse de minuit",
    piece: "Satin pyjama set", price: 180, img: "images/midnight-vert.jpg",
    text: "Liquid satin with contrast piping, a tie at the throat and crystals scattered like stars. Made for the hours after dark.",
    story: "Midnight Muse is our love letter to the vintage pyjama. Fluid satin falls softly from a rounded collar edged in contrast piping, closing with a slim tie at the neckline and covered buttons. Wide sleeves move as you do, and hand-placed crystals catch the lamplight like stars on a late night.",
    details: ["Rounded notch collar with contrast piping", "Slim tie at the neckline", "Covered button front", "Wide, relaxed sleeves", "Patch pocket", "Hand-placed crystal embellishments", "Relaxed fit: take your usual size"],
    care: "Hand wash cold or use a delicate cycle in a mesh bag. Do not tumble dry; hang to dry. Iron on low heat on the reverse, avoiding the crystals." },
  { id: "dream",    numeral: "II",  name: "Dream Come True",  fr: "un rêve devenu réalité",
    piece: "Pointelle bandeau & ruffle set", price: 120, img: "images/dream-rose.jpg",
    text: "Soft pointelle knit, puffed cap sleeves and a tiny satin bow, finished with a double-tiered ruffle edged in picot.",
    story: "Dream Come True is sweetness itself. A soft pointelle knit, light enough to breathe through warm nights, shapes a square-neck bandeau with puffed cap sleeves and a tiny bow at the centre. It's paired with a double-tiered ruffle bottom, every edge finished in delicate picot trim.",
    details: ["Breathable pointelle knit", "Square neckline with a tiny bow", "Puffed cap sleeves", "Double-tiered ruffle bottom", "Picot trim on every edge", "Close, stretchy fit: take your usual size"],
    care: "Machine wash cold on a gentle cycle in a mesh bag. Lay flat to dry to keep the ruffles' shape. Do not tumble dry." },
  { id: "living",   numeral: "III", name: "Living the Dream", fr: "vivre le rêve",
    piece: "Chiffon babydoll", price: 130, img: "images/living-rose.jpg",
    text: "Floating chiffon with a double-layer scooped neckline and a satin ribbon tie. Light as a summer evening.",
    story: "Living the Dream is the babydoll you'll reach for on every warm evening. Airy chiffon swings out from a generous double-layer scooped neckline, gathered at the front by a single satin ribbon. The trapeze shape floats away from the body, so it feels like wearing nothing at all.",
    details: ["Sheer, airy chiffon", "Double-layer scooped neckline for coverage", "Satin ribbon tie at the centre front", "Swingy trapeze silhouette", "Wide shoulder straps", "Loose fit: size down for a closer look"],
    care: "Hand wash cold with a gentle detergent. Lay flat to dry. Cool iron only if needed." },
];

// ---------- Products: one per colour. Add `img: "images/…jpg"` when a photo is ready ----------
const products = [
  { id: 1, collection: "midnight", colourName: "vert amande",   swatch: "#cfcdaa", img: "images/midnight-vert.jpg" },
  { id: 2, collection: "midnight", colourName: "blanc nacré",   swatch: "#f3eee4", img: "images/midnight-blanc.jpg" },
  { id: 3, collection: "dream",    colourName: "rose poudré",   swatch: "#f0cfcd", img: "images/dream-rose.jpg" },
  { id: 4, collection: "dream",    colourName: "jaune beurre",  swatch: "#f3e6b8" },
  { id: 5, collection: "dream",    colourName: "bleu ciel",     swatch: "#cfdcea" },
  { id: 6, collection: "living",   colourName: "rose poudré",   swatch: "#f0cfcd", img: "images/living-rose.jpg", img2: "images/rose-2.jpg", tag: "Bestseller" },
  { id: 7, collection: "living",   colourName: "jaune vanille", swatch: "#f3e6b8", img: "images/living-jaune.jpg", img2: "images/vanille.jpg" },
  { id: 8, collection: "living",   colourName: "bleu ciel",     swatch: "#cfdcea", img: "images/living-bleu.jpg", img2: "images/celeste.jpg" },
];
const sizes = ["XS", "S", "M", "L", "XL"];

// Each product takes its name, piece and price from its collection
products.forEach(p => {
  const c = collections.find(c => c.id === p.collection);
  Object.assign(p, { name: c.name, piece: c.piece, price: p.price ?? c.price });
});

// Link to a collection's own page (optionally opened on one colour)
const pageUrl = (collectionId, productId) =>
  `collection.html?c=${collectionId}${productId ? `&colour=${productId}` : ""}`;

// Uses the product photo when there is one, otherwise a soft colour tile
const art = (p, src = p.img, cls = "") => src
  ? `<img${cls ? ` class="${cls}"` : ""} src="${src}" alt="${p.name} ${p.piece.toLowerCase()} in ${p.colourName}" loading="lazy">`
  : `<div class="pending" style="--swatch:${p.swatch}"><span>photographie<br>à venir</span></div>`;

// ======================================================================
// HOME PAGE (index.html)
// ======================================================================
const grid = document.getElementById("productGrid");

if (grid) {
  // The three collection features
  document.getElementById("collections").innerHTML = collections.map(c => {
    const colours = products.filter(p => p.collection === c.id);
    return `<article class="feature">
      <a href="${pageUrl(c.id)}" class="feature-img"><img src="${c.img}" alt="${c.name} ${c.piece.toLowerCase()}" loading="lazy"></a>
      <div class="feature-text">
        <p class="numeral">N° ${c.numeral}</p>
        <h2>${c.name}</h2>
        <p class="fr">${c.fr}</p>
        <p>${c.text}</p>
        <ul class="swatches">
          ${colours.map(p => `<li><span style="background:${p.swatch}"></span>${p.colourName}</li>`).join("")}
        </ul>
        <p class="from">${c.piece} · RM${c.price}</p>
        <a href="${pageUrl(c.id)}" class="link">Discover the collection</a>
      </div>
    </article>`;
  }).join("");

  // Shop grid: clicking a photo or name opens that collection's page on that colour
  function renderProducts(filter = "all") {
    grid.innerHTML = products
      .filter(p => filter === "all" || p.collection === filter)
      .map(p => `
        <article class="card">
          <div class="card-img${p.img2 ? " has-alt" : ""}">
            ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
            <a href="${pageUrl(p.collection, p.id)}" class="card-link" aria-label="View ${p.name} in ${p.colourName}">
              ${art(p)}
              ${p.img2 ? art(p, p.img2, "alt") : ""}
            </a>
            <button class="quick" data-id="${p.id}" aria-label="Choose a size for ${p.name} in ${p.colourName}">+</button>
            <div class="sizes" id="sizes-${p.id}">
              <p>Select size</p>
              <div>${sizes.map(s => `<button class="size" data-id="${p.id}" data-size="${s}">${s}</button>`).join("")}</div>
            </div>
          </div>
          <a href="${pageUrl(p.collection, p.id)}" class="card-info">
            <div>
              <h3>${p.name}</h3>
              <p class="colour">${p.colourName}</p>
            </div>
            <p class="price">RM${p.price}</p>
          </a>
        </article>`)
      .join("");
  }

  function setFilter(filter) {
    document.querySelectorAll("#filters button").forEach(b =>
      b.classList.toggle("active", b.dataset.filter === filter));
    renderProducts(filter);
  }

  document.getElementById("filters").addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") setFilter(e.target.dataset.filter);
  });

  // "Shop all" in the menu resets the filter
  document.addEventListener("click", e => {
    const link = e.target.closest("[data-goto]");
    if (link) { setFilter(link.dataset.goto); closeMenu(); }
  });

  // "+" opens the size picker; choosing a size adds to the bag
  grid.addEventListener("click", e => {
    if (e.target.classList.contains("quick")) {
      const panel = document.getElementById("sizes-" + e.target.dataset.id);
      const wasOpen = panel.classList.contains("open");
      document.querySelectorAll(".sizes.open").forEach(s => s.classList.remove("open"));
      panel.classList.toggle("open", !wasOpen);
      return;
    }
    if (!e.target.classList.contains("size")) return;
    e.target.closest(".sizes").classList.remove("open");
    addToBag(Number(e.target.dataset.id), e.target.dataset.size);
  });

  renderProducts();
}

// ======================================================================
// COLLECTION PAGE (collection.html?c=midnight&colour=2)
// ======================================================================
const pdp = document.getElementById("pdp");

if (pdp) {
  const params = new URLSearchParams(location.search);
  const c = collections.find(c => c.id === params.get("c")) || collections[0];
  const colours = products.filter(p => p.collection === c.id);
  let current = colours.find(p => p.id === Number(params.get("colour"))) || colours[0];
  let chosenSize = null;

  document.title = `${c.name} — ${c.piece} | Maison Douce`;

  // Every photo in this collection, labelled with its colour
  const photos = colours.flatMap(p => [p.img, p.img2].filter(Boolean).map(src => ({ src, p })));

  pdp.innerHTML = `
    <div class="gallery">
      <div class="gallery-main" id="mainPhoto"></div>
      <div class="thumbs" id="thumbs">
        ${photos.map((ph, i) => `<button class="thumb-btn" data-i="${i}" aria-label="Show ${ph.p.colourName} photo">
          <img src="${ph.src}" alt="" loading="lazy"></button>`).join("")}
      </div>
    </div>
    <div class="info">
      <p class="crumbs"><a href="index.html#collections">Collections</a> / N° ${c.numeral}</p>
      <h1>${c.name}</h1>
      <p class="fr">${c.fr}</p>
      <p class="pdp-piece">${c.piece}</p>
      <p class="pdp-price">RM${c.price}</p>

      <div class="choose">
        <p class="label">Colour — <span id="colourName"></span></p>
        <div class="colour-opts" id="colourOpts">
          ${colours.map(p => `<button class="colour-opt" data-id="${p.id}" style="--swatch:${p.swatch}" aria-label="${p.colourName}"></button>`).join("")}
        </div>
      </div>

      <div class="choose">
        <p class="label">Size <span id="sizeHint"></span></p>
        <div class="size-opts" id="sizeOpts">
          ${sizes.map(s => `<button class="size-opt" data-size="${s}">${s}</button>`).join("")}
        </div>
      </div>

      <button class="btn full" id="addBtn">Add to bag</button>

      <p class="pdp-story">${c.story}</p>

      <details open>
        <summary>Details</summary>
        <ul>${c.details.map(d => `<li>${d}</li>`).join("")}</ul>
      </details>
      <details>
        <summary>Fabric &amp; care</summary>
        <p>${c.care}</p>
      </details>
      <details>
        <summary>Shipping</summary>
        <p>Complimentary shipping on orders over RM250.</p>
      </details>
    </div>`;

  // Other collections at the bottom of the page
  document.getElementById("moreGrid").innerHTML = collections.filter(o => o.id !== c.id).map(o => `
    <a href="${pageUrl(o.id)}" class="more-card">
      <div class="more-img"><img src="${o.img}" alt="${o.name} ${o.piece.toLowerCase()}" loading="lazy"></div>
      <h3>${o.name}</h3>
      <p class="colour">${o.piece} · RM${o.price}</p>
    </a>`).join("");

  function showPhoto(src) {
    document.getElementById("mainPhoto").innerHTML = src
      ? `<img src="${src}" alt="${current.name} ${current.piece.toLowerCase()} in ${current.colourName}">`
      : art(current);
    document.querySelectorAll(".thumb-btn").forEach(b =>
      b.classList.toggle("active", photos[b.dataset.i].src === src));
  }

  function selectColour(p, src = p.img) {
    current = p;
    document.getElementById("colourName").textContent = p.colourName;
    document.querySelectorAll(".colour-opt").forEach(b =>
      b.classList.toggle("active", Number(b.dataset.id) === p.id));
    showPhoto(src);
    history.replaceState(null, "", pageUrl(c.id, p.id));
  }

  document.getElementById("colourOpts").addEventListener("click", e => {
    const b = e.target.closest(".colour-opt");
    if (b) selectColour(colours.find(p => p.id === Number(b.dataset.id)));
  });

  document.getElementById("thumbs").addEventListener("click", e => {
    const b = e.target.closest(".thumb-btn");
    if (b) { const ph = photos[b.dataset.i]; selectColour(ph.p, ph.src); }
  });

  document.getElementById("sizeOpts").addEventListener("click", e => {
    const b = e.target.closest(".size-opt");
    if (!b) return;
    chosenSize = b.dataset.size;
    document.querySelectorAll(".size-opt").forEach(o => o.classList.toggle("active", o === b));
    document.getElementById("sizeHint").textContent = "";
  });

  document.getElementById("addBtn").addEventListener("click", () => {
    if (!chosenSize) {
      document.getElementById("sizeHint").textContent = "— please choose a size";
      return;
    }
    addToBag(current.id, chosenSize);
    openBag();
  });

  selectColour(current);
}

// ======================================================================
// SHARED: menu, bag, newsletter, toast
// ======================================================================

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
function closeMenu() { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => { if (e.target.tagName === "A" && !e.target.dataset.goto) closeMenu(); });

// Shopping bag
let bag = [];
try { bag = JSON.parse(localStorage.getItem("md-bag-v2")) || []; } catch { bag = []; }
bag = bag.filter(i => products.some(p => p.id === i.id)); // drop products that no longer exist

function saveBag() {
  try { localStorage.setItem("md-bag-v2", JSON.stringify(bag)); } catch {}
}

function addToBag(id, size) {
  const existing = bag.find(i => i.id === id && i.size === size);
  existing ? existing.qty++ : bag.push({ id, size, qty: 1 });
  saveBag();
  renderBag();
  const p = products.find(p => p.id === id);
  showToast(`${p.name}, ${p.colourName}, size ${size} — added to your bag`);
}

function renderBag() {
  const items = document.getElementById("bagItems");
  const count = bag.reduce((n, i) => n + i.qty, 0);
  const total = bag.reduce((n, i) => n + i.qty * products.find(p => p.id === i.id).price, 0);
  document.getElementById("bagCount").textContent = count;
  document.getElementById("subtotal").textContent = "RM" + total;

  if (!bag.length) {
    items.innerHTML = `<p class="empty">Your bag is empty, chérie.</p>`;
    return;
  }
  items.innerHTML = bag.map((i, idx) => {
    const p = products.find(p => p.id === i.id);
    return `<div class="line">
      <div class="thumb">${art(p)}</div>
      <div>
        <h4>${p.name}</h4>
        <small>${p.colourName} · Size ${i.size}</small>
        <div class="qty">
          <button data-act="dec" data-idx="${idx}" aria-label="Decrease">−</button>
          <span>${i.qty}</span>
          <button data-act="inc" data-idx="${idx}" aria-label="Increase">+</button>
        </div>
      </div>
      <div class="line-end">
        <div>RM${p.price * i.qty}</div>
        <button class="remove" data-act="remove" data-idx="${idx}">Remove</button>
      </div>
    </div>`;
  }).join("");
}

document.getElementById("bagItems").addEventListener("click", e => {
  const idx = e.target.dataset.idx;
  if (idx === undefined) return;
  const act = e.target.dataset.act;
  if (act === "inc") bag[idx].qty++;
  if (act === "dec") bag[idx].qty--;
  if (act === "remove" || bag[idx].qty < 1) bag.splice(idx, 1);
  saveBag();
  renderBag();
});

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
function openBag()  { drawer.classList.add("open"); overlay.hidden = false; }
function closeBag() { drawer.classList.remove("open"); overlay.hidden = true; }
document.getElementById("bagBtn").addEventListener("click", openBag);
document.getElementById("closeBag").addEventListener("click", closeBag);
overlay.addEventListener("click", closeBag);
document.getElementById("checkoutBtn").addEventListener("click", () => {
  document.getElementById("checkoutNote").hidden = false;
});

// Newsletter
document.getElementById("newsForm").addEventListener("submit", e => {
  e.preventDefault();
  e.target.hidden = true;
  document.getElementById("newsMsg").hidden = false;
});

// Little pop-up message
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

renderBag();
