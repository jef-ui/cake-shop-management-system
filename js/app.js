/* My Sweets by Jesha — Static Prototype
   Shared shell (banner, sidebar, topbar) + sample data + small page interactions.
   Everything here is fake/local — no network calls, nothing to break on deploy. */

(function () {
  "use strict";

  var ICONS = {
    home: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0L22.28 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>',
    tag: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/>',
    cube: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>',
    calculator: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm2.498-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm2.504-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM6 20.25h12A1.75 1.75 0 0019.75 18.5v-13A1.75 1.75 0 0018 3.75H6a1.75 1.75 0 00-1.75 1.75v13A1.75 1.75 0 006 20.25z"/>',
    receipt: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 8.25v10.5A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V8.25M2.25 8.25l1.5-4.5h16.5l1.5 4.5m-13.5 6h4.5"/>',
    clipboard: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4.5h6M8.25 4.5H6.375A1.125 1.125 0 005.25 5.625v13.5c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125v-13.5A1.125 1.125 0 0017.625 4.5H15.75M8.25 4.5A2.25 2.25 0 0110.5 2.25h3A2.25 2.25 0 0115.75 4.5M8.25 4.5a2.25 2.25 0 002.25 2.25h3A2.25 2.25 0 0015.75 4.5"/>',
    users: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>',
    banknotes: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.625c.621 0 1.125.504 1.125 1.125V6h-.75m-19.5 0a.75.75 0 01-.75-.75v-.375c0-.621.504-1.125 1.125-1.125H3.75m16.5 0h-16.5m16.5 0a.75.75 0 01.75.75v.75m-18 6a.75.75 0 000 1.5.75.75 0 000-1.5zm18 0a.75.75 0 000 1.5.75.75 0 000-1.5zM12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"/>',
    chart: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>',
    bell: '<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>',
    shield: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>',
    plus: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>',
    pencil: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>',
    trash: '<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>',
    eye: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
    scan: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 7.5V6A2.25 2.25 0 016 3.75h1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5M20.25 16.5V18A2.25 2.25 0 0118 20.25h-1.5M7.5 20.25H6A2.25 2.25 0 013.75 18v-1.5M3.75 12h16.5"/>',
    printer: '<path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0M6.72 13.829v3.746c0 .84.673 1.526 1.513 1.552.6.019 1.202.032 1.807.041m8.42-5.339c.24.03.48.062.72.096m-.72-.096v3.746c0 .84-.673 1.526-1.513 1.552-.6.019-1.202.032-1.807.041m-6.6 0a48.51 48.51 0 006.6 0m-6.6 0v-1.5c0-.621.504-1.125 1.125-1.125h4.35c.621 0 1.125.504 1.125 1.125v1.5m-6.6 0v-3M9 12V6.75c0-.621.504-1.125 1.125-1.125h3.75C14.496 5.625 15 6.129 15 6.75V12"/>',
    x: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>',
    menu: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>'
  };

  function icon(name, cls) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="' + (cls || '') + '">' + (ICONS[name] || '') + '</svg>';
  }
  window.PROTO_ICON = icon;

  var NAV = [
    { items: [{ label: "Dashboard", href: "dashboard.html", icon: "home" }] },
    { label: "Catalog", items: [
      { label: "Categories", href: "categories.html", icon: "tag" },
      { label: "Products", href: "products.html", icon: "cube" }
    ]},
    { label: "Sales", items: [
      { label: "POS", href: "pos.html", icon: "calculator" },
      { label: "Sales History", href: "sales.html", icon: "receipt" },
      { label: "Orders", href: "orders.html", icon: "clipboard" },
      { label: "Customers", href: "customers.html", icon: "users" },
      { label: "Payments", href: "payments.html", icon: "banknotes" }
    ]},
    { label: "Insights", items: [
      { label: "Reports", href: "reports.html", icon: "chart" },
      { label: "Notifications", href: "notifications.html", icon: "bell" }
    ]},
    { label: "Administration", items: [
      { label: "Users", href: "users.html", icon: "users" },
      { label: "Audit Logs", href: "audit-logs.html", icon: "shield" }
    ]}
  ];

  var CURRENT_USER = { name: "Jfree", role: "System Admin", initial: "J" };

  var NOTIFICATIONS = [
    { text: "Low stock: Chocolate Ganache (2 kg left)", time: "10 min ago" },
    { text: "Order ORD-00042 is due tomorrow", time: "1 hour ago" },
    { text: "New custom order from Maria Cruz", time: "3 hours ago" },
    { text: "Stock replenished: Vanilla Extract", time: "Yesterday" }
  ];

  function renderBanner() {
    var el = document.getElementById("proto-banner");
    if (!el) return;
    el.className = "proto-banner";
    el.innerHTML = '<strong>PROTOTYPE PREVIEW</strong> - No real backend, data, or login';
  }

  function renderSidebar(activeHref) {
    var mount = document.getElementById("sidebar-mount");
    if (!mount) return;
    var html = '<div class="sidebar" id="sidebar">';
    html += '<div class="sidebar-brand"><img src="images/mysweets.png" alt="My Sweets by Jesha"><span class="font-script">My Sweets</span></div>';
    html += '<nav class="sidebar-nav">';
    NAV.forEach(function (section) {
      html += '<div class="nav-section">';
      if (section.label) html += '<p class="nav-section-label">' + section.label + '</p>';
      section.items.forEach(function (item) {
        var active = item.href === activeHref ? " active" : "";
        html += '<a class="nav-link' + active + '" href="' + item.href + '">' + icon(item.icon) + '<span>' + item.label + '</span></a>';
      });
      html += '</div>';
    });
    html += '</nav>';
    html += '<div class="sidebar-user">';
    html += '<div class="avatar-badge">' + CURRENT_USER.initial + '</div>';
    html += '<div class="who"><p class="name">' + CURRENT_USER.name + '</p><p class="role">' + CURRENT_USER.role + '</p></div>';
    html += '<a class="logout" href="index.html">Log out</a>';
    html += '</div></div>';
    mount.innerHTML = html;
  }

  function renderTopbar(title) {
    var mount = document.getElementById("topbar-mount");
    if (!mount) return;
    var html = '<div class="topbar">';
    html += '<div style="display:flex;align-items:center;gap:0.75rem;">';
    html += '<button class="hamburger" id="hamburgerBtn" type="button" aria-label="Toggle menu">' + icon("menu") + '</button>';
    html += '<h1>' + title + '</h1>';
    html += '</div>';
    html += '<div class="topbar-actions">';
    html += '<div class="dropdown" id="notifDropdown">';
    html += '<button class="bell-btn" id="bellBtn" type="button" aria-label="Notifications">' + icon("bell") + '<span class="bell-dot"></span></button>';
    html += '<div class="dropdown-panel"><div class="head">Notifications</div>';
    NOTIFICATIONS.forEach(function (n) {
      html += '<div class="notif-item"><span class="notif-dot"></span><div><p class="t">' + n.text + '</p><p class="time">' + n.time + '</p></div></div>';
    });
    html += '<a href="notifications.html" style="display:block;text-align:center;padding:0.6rem;font-size:0.78rem;font-weight:600;color:var(--brand-600);border-top:1px solid var(--gray-100);">View all</a>';
    html += '</div></div>';
    html += '<div class="avatar-badge" title="' + CURRENT_USER.name + '">' + CURRENT_USER.initial + '</div>';
    html += '</div></div>';
    mount.innerHTML = html;

    var bellBtn = document.getElementById("bellBtn");
    var dropdown = document.getElementById("notifDropdown");
    if (bellBtn) {
      bellBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
      });
      document.addEventListener("click", function () { dropdown.classList.remove("open"); });
    }
    var hamburgerBtn = document.getElementById("hamburgerBtn");
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener("click", function () {
        var sb = document.getElementById("sidebar");
        if (sb) sb.classList.toggle("open");
      });
    }
  }

  function initShell(activeHref, title) {
    renderBanner();
    renderSidebar(activeHref);
    renderTopbar(title);
  }
  window.PROTO_INIT_SHELL = initShell;

  /* ---------- Login ---------- */
  function initLoginForm() {
    var form = document.getElementById("loginForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }
  window.PROTO_INIT_LOGIN = initLoginForm;

  /* ---------- Sample data (shared across pages) ----------
     Product photos below are the actual images uploaded in the real
     My Sweets by Jesha system (copied into images/products/). */
  window.PROTO_DATA = {
    products: [
      { name: "Chocolate Cake", sku: "CAK-0001", category: "Cakes", price: 850, stock: 17, type: "Recipe-based", img: "images/products/chocolate-cake.jpg" },
      { name: "Red Velvet Cake", sku: "CAK-0002", category: "Cakes", price: 900, stock: 8, type: "Recipe-based", img: "images/products/red-velvet-cake.avif" },
      { name: "Ube Cake", sku: "CAK-0003", category: "Cakes", price: 800, stock: 8, type: "Recipe-based", img: "images/products/ube-cake.jpg" },
      { name: "Mocha Cake", sku: "CAK-0004", category: "Cakes", price: 750, stock: 11, type: "Recipe-based", img: "images/products/mocha-cake.jpg" },
      { name: "Blueberry Cheesecake", sku: "CAK-0005", category: "Cakes", price: 950, stock: 4, type: "Recipe-based", img: "images/products/blueberry-cheesecake.jpg" },
      { name: "Carrot Cake", sku: "CAK-0006", category: "Cakes", price: 700, stock: 19, type: "Recipe-based", img: "images/products/carrot-cake.jpg" },
      { name: "3 Layered Cake (Vanilla Flavor)", sku: "CAK-0007", category: "Cakes", price: 3000, stock: 1, type: "Recipe-based", img: "images/products/3-layer-cake-vanilla.jpg" },
      { name: "Bouquet Cake (Ube Flavor)", sku: "CAK-0008", category: "Cakes", price: 1100, stock: 2, type: "Recipe-based", img: null },
      { name: "Customized Cake 3 Layer (Vanilla Flavor)", sku: "CAK-0009", category: "Cakes", price: 4550, stock: 0, type: "Recipe-based", img: "images/products/customized-cake-3-layer-vanilla.jpg" },
      { name: "Bouquet Cake (Chocolate Flavor)", sku: "CAK-0010", category: "Cakes", price: 1600, stock: 2, type: "Recipe-based", img: "images/products/bouquet-cake-chocolate.jpg" },
      { name: "Birthday Candle Set", sku: "ACC-0001", category: "Accessories", price: 45, stock: 28, type: "Direct stock", img: "images/products/birthday-candle-set.jpg" },
      { name: "Cake Topper Happy Birthday", sku: "ACC-0002", category: "Accessories", price: 60, stock: 21, type: "Direct stock", img: "images/products/cake-topper.jpg" },
      { name: "Ribbon Roll", sku: "ACC-0003", category: "Accessories", price: 35, stock: 17, type: "Direct stock", img: "images/products/ribbon-roll.webp" },
      { name: "Cake Box 8in", sku: "PKG-0001", category: "Packaging", price: 25, stock: 46, type: "Direct stock", img: "images/products/cake-box-8in.jpg" },
      { name: "Cake Box 10in", sku: "PKG-0002", category: "Packaging", price: 35, stock: 35, type: "Direct stock", img: "images/products/cake-box-10in.avif" },
      { name: "Whipping Cream", sku: "ING-0001", category: "Ingredients", price: 180, stock: 25, type: "Direct stock", img: "images/products/whipping-cream.png" },
      { name: "All-Purpose Flour", sku: "ING-0002", category: "Ingredients", price: 55, stock: 71, type: "Direct stock", img: "images/products/all-purpose-flour.jpg" },
      { name: "Cooking Oil", sku: "ING-0003", category: "Ingredients", price: 90, stock: 20, type: "Direct stock", img: "images/products/cooking-oil.png" }
    ],
    categories: [
      { name: "Cakes", code: "CAK", products: 10, active: true },
      { name: "Accessories", code: "ACC", products: 3, active: true },
      { name: "Packaging", code: "PKG", products: 2, active: true },
      { name: "Ingredients", code: "ING", products: 3, active: true }
    ],
    customers: [
      { name: "Maria Cruz", contact: "0917 123 4567", email: "maria.cruz@email.com", orders: 6 },
      { name: "Jose Reyes", contact: "0918 234 5678", email: "jose.reyes@email.com", orders: 2 },
      { name: "Anna Bautista", contact: "0919 345 6789", email: "anna.b@email.com", orders: 9 },
      { name: "Paolo Mendoza", contact: "0920 456 7890", email: "-", orders: 1 },
      { name: "Grace Villanueva", contact: "0921 567 8901", email: "grace.v@email.com", orders: 4 }
    ],
    orders: [
      { id: "ORD-00042", customer: "Maria Cruz", type: "Custom", due: "2026-08-25", status: "In Production", total: 1800 },
      { id: "ORD-00041", customer: "Anna Bautista", type: "Ready-made", due: "-", status: "Completed", total: 850 },
      { id: "ORD-00040", customer: "Jose Reyes", type: "Custom", due: "2026-08-28", status: "Confirmed", total: 2200 },
      { id: "ORD-00039", customer: "Grace Villanueva", type: "Ready-made", due: "-", status: "Ready", total: 360 },
      { id: "ORD-00038", customer: "Paolo Mendoza", type: "Custom", due: "2026-08-20", status: "Pending", total: 1500 },
      { id: "ORD-00037", customer: "Maria Cruz", type: "Ready-made", due: "-", status: "Cancelled", total: 620 }
    ],
    sales: [
      { id: "SALE-00118", cashier: "Cashier One", date: "2026-08-23 09:12 AM", items: 3, total: 1255, method: "Cash" },
      { id: "SALE-00117", cashier: "Cashier One", date: "2026-08-22 04:47 PM", items: 1, total: 850, method: "GCash" },
      { id: "SALE-00116", cashier: "Cashier Two", date: "2026-08-22 02:03 PM", items: 5, total: 690, method: "Cash" },
      { id: "SALE-00115", cashier: "Cashier One", date: "2026-08-21 11:30 AM", items: 2, total: 620, method: "Card" },
      { id: "SALE-00114", cashier: "Cashier Two", date: "2026-08-21 10:05 AM", items: 4, total: 980, method: "Cash" }
    ],
    payments: [
      { ref: "PMT-00201", for: "ORD-00042", type: "Downpayment", method: "GCash", amount: 900, date: "2026-08-18" },
      { ref: "PMT-00200", for: "SALE-00118", type: "Full", method: "Cash", amount: 1255, date: "2026-08-23" },
      { ref: "PMT-00199", for: "ORD-00040", type: "Downpayment", method: "Bank Transfer", amount: 1000, date: "2026-08-17" },
      { ref: "PMT-00198", for: "ORD-00038", type: "Balance", method: "Cash", amount: 1500, date: "2026-08-16" }
    ],
    users: [
      { name: "Jfree", email: "jfree@webdev", role: "System Admin", active: true },
      { name: "Marco dela Cruz", email: "manager@cakeshop.test", role: "Manager", active: true },
      { name: "Cashier One", email: "cashier@cakeshop.test", role: "Cashier", active: true },
      { name: "Baker Anne", email: "baker@cakeshop.test", role: "Baker", active: false }
    ],
    auditLogs: [
      { user: "Jfree", action: "Updated", target: "Product #14 — Red Velvet Cake", time: "2026-08-23 08:41 AM" },
      { user: "Marco dela Cruz", action: "Created", target: "Order ORD-00042", time: "2026-08-22 05:10 PM" },
      { user: "Cashier One", action: "Created", target: "Sale SALE-00118", time: "2026-08-23 09:12 AM" },
      { user: "Jfree", action: "Deleted", target: "Raw Material — Expired Whipping Cream batch", time: "2026-08-21 03:02 PM" },
      { user: "Marco dela Cruz", action: "Updated", target: "User — Baker Anne (deactivated)", time: "2026-08-20 09:30 AM" }
    ]
  };

  document.addEventListener("DOMContentLoaded", function () {
    initLoginForm();
  });
})();
