// ---------- Pajama illustrations (drawn with SVG, no photos needed) ----------
// Replace these with real product photos once you have them.

function babydollSVG(colour, trim, ruffle) {
  const neck = ruffle
    ? `<path d="M54 58 Q100 112 146 58" fill="none" stroke="${trim}" stroke-width="12" stroke-linecap="round" stroke-dasharray="1 9"/>`
    : `<path d="M54 58 Q100 112 146 58" fill="none" stroke="${trim}" stroke-width="9" stroke-linecap="round"/>
       <path d="M58 64 Q100 118 142 64" fill="none" stroke="${trim}" stroke-width="3" opacity=".6"/>`;
  return `<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M45 200 L155 200 L165 240 L108 242 L100 226 L92 242 L35 240 Z" fill="${trim}"/>
    <path d="M62 22 L76 22 L80 58 L64 60 Z M124 22 L138 22 L136 60 L120 58 Z" fill="${colour}"/>
    <path d="M58 55 Q100 108 142 55 L150 64 Q170 150 190 218 Q168 230 145 219 Q122 231 100 220 Q78 231 55 219 Q32 230 10 218 Q30 150 50 64 Z" fill="${colour}"/>
    <path d="M85 100 Q78 160 60 215 M100 108 L100 218 M115 100 Q122 160 140 215" fill="none" stroke="#000" stroke-opacity=".06" stroke-width="3"/>
    <path d="M10 218 Q32 230 55 219 Q78 231 100 220 Q122 231 145 219 Q168 230 190 218" fill="none" stroke="${trim}" stroke-width="2.5"/>
    ${neck}
    <path d="M100 86 C86 70 78 84 100 87 M100 86 C114 70 122 84 100 87" fill="none" stroke="${trim}" stroke-width="2.5"/>
    <path d="M99 87 Q95 130 97 178 M101 87 Q105 120 104 152" fill="none" stroke="${trim}" stroke-width="2"/>
  </svg>`;
}

function setSVG(colour, trim) {
  return `<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M70 18 L72 62 M130 18 L128 62" stroke="${trim}" stroke-width="3"/>
    <path d="M62 60 Q100 88 138 60 L148 142 Q100 152 52 142 Z" fill="${colour}"/>
    <path d="M62 60 Q100 88 138 60" fill="none" stroke="${trim}" stroke-width="7" stroke-linecap="round" stroke-dasharray="1 7"/>
    <path d="M52 142 Q100 152 148 142" fill="none" stroke="${trim}" stroke-width="2"/>
    <path d="M100 75 C90 64 84 74 100 77 M100 75 C110 64 116 74 100 77 M99 77 L97 98 M101 77 L104 94" fill="none" stroke="${trim}" stroke-width="2"/>
    <path d="M56 160 L144 160 L158 232 Q132 240 106 233 L100 196 L94 233 Q68 240 42 232 Z" fill="${colour}"/>
    <path d="M56 160 L144 160" stroke="${trim}" stroke-width="7"/>
    <path d="M42 232 Q68 240 94 233 M106 233 Q132 240 158 232" fill="none" stroke="${trim}" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 6"/>
  </svg>`;
}

// ---------- Products: edit names, colours and prices here ----------
const products = [
  { id: 1, name: "La Rose",      colourName: "rose poudré",  type: "babydoll", ruffle: false, img: "images/rose-main.jpg", img2: "images/rose-2.jpg", colour: "#f2c6c6", trim: "#e3a3a6", bg: "#f7e4e1", price: 68, tag: "Bestseller" },
  { id: 2, name: "Blanche",      colourName: "ivoire",       type: "babydoll", ruffle: true,  img: "images/blanche.jpg", colour: "#fffaf3", trim: "#e9dccb", bg: "#efe6dc", price: 72 },
  { id: 3, name: "Céleste",      colourName: "bleu ciel",    type: "babydoll", ruffle: false, img: "images/celeste.jpg", colour: "#d3e2ef", trim: "#aec6dc", bg: "#e8eef2", price: 68 },
  { id: 9, name: "Vanille",      colourName: "jaune vanille", type: "babydoll", ruffle: false, img: "images/vanille.jpg", colour: "#f6ecc4", trim: "#e6d38f", bg: "#f6efdc", price: 68, tag: "New" },
  { id: 5, name: "Pêche",        colourName: "pêche",        type: "set",      colour: "#f6d2bd", trim: "#e8b294", bg: "#f8e6dc", price: 58 },
  { id: 6, name: "Crème Brûlée", colourName: "beurre",       type: "set",      colour: "#f5e6c4", trim: "#e2c992", bg: "#f6efdc", price: 58, tag: "New" },
  { id: 7, name: "Sauge",        colourName: "vert sauge",   type: "set",      colour: "#d3dcc8", trim: "#adbd9c", bg: "#e8ece1", price: 58 },
  { id: 8, name: "Cerise",       colourName: "cerise douce", type: "set",      colour: "#eaa9ad", trim: "#fff4f1", bg: "#f6e0e0", price: 62 },
];
const sizes = ["XS", "S", "M", "L", "XL"];

// Uses the product photo when there is one, otherwise the drawing
const art = (p, src = p.img) => src
  ? `<img src="${src}" alt="${p.name} pajamas in ${p.colourName}" loading="lazy">`
  : p.type === "set" ? setSVG(p.colour, p.trim) : babydollSVG(p.colour, p.trim, p.ruffle);

// ---------- Render collection ----------
const grid = document.getElementById("productGrid");

function renderProducts(filter = "all") {
  grid.innerHTML = products
    .filter(p => filter === "all" || p.type === filter)
    .map(p => `
      <article class="card">
        <div class="card-img${p.img ? " photo" : ""}${p.img2 ? " has-alt" : ""}" style="--card-bg:${p.bg}">
          ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
          ${art(p)}
          ${p.img2 ? art(p, p.img2).replace("<img", '<img class="alt"') : ""}
        </div>
        <h3>${p.name}</h3>
        <p class="colour">${p.colourName}</p>
        <p class="price">$${p.price}</p>
        <div class="card-actions">
          <select aria-label="Size for ${p.name}" id="size-${p.id}">
            ${sizes.map(s => `<option${s === "S" ? " selected" : ""}>${s}</option>`).join("")}
          </select>
          <button class="add" data-id="${p.id}">Add to bag</button>
        </div>
      </article>`)
    .join("");
}

document.getElementById("filters").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  document.querySelectorAll("#filters button").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderProducts(e.target.dataset.filter);
});

// Hero and story illustrations
document.getElementById("heroArt").innerHTML = art(products[0], products[0].img2 || products[0].img);
document.getElementById("storyArt").innerHTML =
  `<img src="images/friends.jpg" alt="Three friends laughing in blue, pink and yellow babydoll sets">`;

// ---------- Shopping bag ----------
let bag = [];
try { bag = JSON.parse(localStorage.getItem("md-bag")) || []; } catch { bag = []; }
bag = bag.filter(i => products.some(p => p.id === i.id)); // drop products that no longer exist

function saveBag() {
  try { localStorage.setItem("md-bag", JSON.stringify(bag)); } catch {}
}

function renderBag() {
  const items = document.getElementById("bagItems");
  const count = bag.reduce((n, i) => n + i.qty, 0);
  const total = bag.reduce((n, i) => n + i.qty * products.find(p => p.id === i.id).price, 0);
  document.getElementById("bagCount").textContent = count;
  document.getElementById("subtotal").textContent = "$" + total;

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
      <div>
        <div>$${p.price * i.qty}</div>
        <button class="remove" data-act="remove" data-idx="${idx}">Remove</button>
      </div>
    </div>`;
  }).join("");
}

grid.addEventListener("click", e => {
  if (!e.target.classList.contains("add")) return;
  const id = Number(e.target.dataset.id);
  const size = document.getElementById("size-" + id).value;
  const existing = bag.find(i => i.id === id && i.size === size);
  existing ? existing.qty++ : bag.push({ id, size, qty: 1 });
  saveBag();
  renderBag();
  showToast(`${products.find(p => p.id === id).name} added to your bag ♡`);
});

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

// ---------- Newsletter ----------
document.getElementById("newsForm").addEventListener("submit", e => {
  e.preventDefault();
  e.target.hidden = true;
  document.getElementById("newsMsg").hidden = false;
});

// ---------- Little pop-up message ----------
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

renderProducts();
renderBag();
