/* ═══════════════════════════════════════════════
   MULTI STRETCH — SCRIPT
   ═══════════════════════════════════════════════ */

/* ─── PRODUCT DATA ─── */
const products = {
  pallet: {
    label: 'Product 01',
    title: 'Pallet Wrap',
    overviewTitle: 'Custom Stretch Film Solutions',

    desc1: 'Multi Stretch is your premier provider of custom pallet wrap solutions. We specialise in delivering high-quality pallet wrap that can be tailored in any size and colour, ensuring a perfect fit for your packaging requirements. Whether you are securing cargo, stabilising shipments, or protecting goods during transit — we have the capability and expertise to meet your needs.',

    desc2: 'Our pallet wrap uses advanced LLDPE Metallocene technology polymers for superior strength, puncture resistance, and compatibility with automatic wrap machines. We operate a zero-wastage manufacturing process to ensure both product quality and environmental responsibility.',

    specs: [
      ['Material',        'LLDPE / Metallocene'],
      ['Available Sizes', 'Extended, Standard & Machine'],
      ['Colours',         'All colours — custom'],
      ['Application',     'Manual & Auto machines'],
      ['Technology',      'Technology Polymers'],
      ['Lead Time',       'Quick turnaround'],
    ],

    customHTML: `
<div class="pallet-range-section">

  <!-- EXTENDED CORE -->
  <div class="range-block">
    <div class="range-image">
      <img src="extcore.jpg" alt="Extended Core Pallet Wrap">
    </div>

    <div class="range-content">
      <h2>Extended Core</h2>

      <div class="size-list">
        <div class="size-item">400x10x400</div>
        <div class="size-item">400x12x400</div>
        <div class="size-item">400x13x400</div>
        <div class="size-item">400x15x400</div>
        <div class="size-item">400x17x400</div>
        <div class="size-item">400x20x400</div>

        <div class="size-item">450x12x400</div>
        <div class="size-item">450x13x400</div>
        <div class="size-item">450x15x400</div>
        <div class="size-item">450x17x400</div>
        <div class="size-item">450x20x400</div>
        <div class="size-item">450x23x400</div>
        <div class="size-item">450x25x400</div>
        <div class="size-item">450x27x400</div>
        <div class="size-item">450x30x400</div>
      </div>
    </div>
  </div>

  <!-- STANDARD CORE -->
  <div class="range-block reverse">
    <div class="range-image">
      <img src="normalcore.jpg" alt="Standard Core Pallet Wrap">
    </div>

    <div class="range-content">
      <h2>Standard Core</h2>

      <div class="size-list">
        <div class="size-item">450x13x400</div>
        <div class="size-item">450x15x400</div>
        <div class="size-item">450x17x400</div>
        <div class="size-item">450x20x400</div>
      </div>
    </div>
  </div>

  <!-- MACHINE ROLLS -->
  <div class="range-block">
    <div class="range-image">
      <img src="pallete.jpg" alt="Machine Roll Pallet Wrap">
    </div>

    <div class="range-content">
      <h2>Machine Rolls</h2>

      <div class="size-list">
        <div class="size-item">1000x10x1000</div>
        <div class="size-item">1000x12x1000</div>
        <div class="size-item">1000x13x1000</div>
        <div class="size-item">1000x15x1000</div>
        <div class="size-item">1000x17x1000</div>
        <div class="size-item">1000x20x1000</div>
        <div class="size-item">1000x23x1000</div>
        <div class="size-item">1000x25x1000</div>
        <div class="size-item">1000x27x1000</div>
        <div class="size-item">1000x30x1000</div>

        <div class="size-item">500x13x1000</div>
        <div class="size-item">500x15x1000</div>
        <div class="size-item">500x17x1000</div>
        <div class="size-item">500x20x1000</div>
        <div class="size-item">500x23x1000</div>
        <div class="size-item">500x25x1000</div>
      </div>
    </div>
  </div>
  <!-- HAND ROLLS -->
  <div class="range-block reverse">
    <div class="range-image">
      <img src="handroll.jpg" alt="Hand Roll Pallet Wrap">
    </div>

    <div class="range-content">
      <h2>Hand Rolls</h2>

      <div class="size-list">
        <div class="size-item">100x15x150</div>
        <div class="size-item">100x15x200</div>
        <div class="size-item">Other — on request</div>
      </div>
    </div>
  </div>

  

</div>
`
  },

  bubble: {
    label: 'Product 02',
    title: 'Bubble Wrap',
    overviewTitle: 'Protective Cushioning Packaging',
    bubbleImage:'bubblewrap.webp',
    desc1: 'Our bubble wrap provides exceptional protection for fragile, sensitive, and high-value goods during storage and transit. Multi Stretch supplies high-quality bubble wrap in a range of roll sizes, widths and bubble diameters to suit every application.',
    desc2: 'Whether you need light protective wrapping for consumer goods or heavy-duty cushioning for industrial equipment, our bubble wrap range covers all bases. Available in bulk rolls for high-volume operations.',
    specs: [
      
      ['Sizes',         '1250x100'],
      ['Roll Lengths',   'Standard & bulk'],
      ['Application',    'General & industrial'],
      ['Colour',         'Clear standard'],
      ['Custom Options', 'Available on request'],
    ],
    features: [
      ['shield-check', 'Superior Protection', 'Multi-layer air cushioning absorbs shock and prevents damage.'],
      ['move-horizontal', 'Multiple Sizes', 'Range of bubble sizes and roll widths.'],
      ['package', 'Bulk Supply', 'High-volume roll options reduce cost per metre.'],
      ['scissors', 'Easy Handling', 'Lightweight and easy to cut and seal.'],
    ],
    customHTML: `
  <div class="bubble-section">
    <img src="bubblewrap.webp" class="bubble-image">
  </div>
  <div class="bubble-section">

  <div class="bubble-hero">
  </div>

</div>
`
  },

  refuse: {
    label: 'Product 03',
    title: 'Refuse Bags',
    overviewTitle: 'Heavy-Duty Industrial Bags',
    desc1: 'Multi Stretch supplies heavy-duty refuse bags designed for commercial and industrial environments.',
    desc2: 'Available in a range of sizes, thicknesses and colours to meet industry requirements.',
    specs: [
      ['Thickness', '30 or 40 microns'],
      ['Application', 'Commercial & industrial'],
    ],
    features: [
      ['dumbbell', 'High Strength', 'Resists tearing and leakage.'],
      ['palette', 'Multiple Colours', 'Colour-coded options.'],
      ['package', 'Bulk Quantities', 'Cost-effective bulk supply.'],
      ['settings', 'Custom Spec', 'Bespoke sizing available.'],
    ],
    customHTML: `
  <div class="bubble-section">
    <img src="refuse.webp" class="refuse-image">
  </div>
`
    
  },
  generalbags: {
  label: 'Product 04',
  title: 'Customized Bags',
  overviewTitle: 'Custom Packaging Bag Solutions',

  desc1: 'Multi Stretch supplies customized packaging bags tailored to your business requirements. Our bags are manufactured for durability, presentation, and reliable everyday use across commercial and industrial applications.',

  desc2: 'We offer custom sizing and specifications based on client requirements, ensuring the perfect solution for your packaging and delivery needs.',

  specs: [
    ['Sizes', 'Custom on delivery'],
    ['Application', 'Commercial & industrial'],
    ['Custom Options', 'Available on request'],
  ],

  features: [
    ['package', 'Custom Sizes', 'Manufactured according to your required dimensions.'],
    ['settings', 'Tailored Solutions', 'Designed for different packaging applications.'],
    ['truck', 'Delivery Ready', 'Supplied according to client delivery requirements.'],
    ['shield-check', 'Durable Material', 'Strong and reliable for everyday use.'],
  ],

  
  
},
tape: {
  label: 'Product 05',
  title: 'Adhesive Tape',
  overviewTitle: 'Industrial Packaging Tape Solutions',

  desc1: 'Multi Stretch supplies high-quality adhesive packaging tape designed for secure carton sealing and industrial packaging applications. Our tapes provide strong adhesion, durability, and reliable performance for warehouses, logistics, and commercial operations.',

  desc2: 'Available in buff, clear, and acrylic options with multiple roll lengths to suit both manual and high-volume packaging environments. Custom specifications are also available on request.',

  specs: [
    ['Colours', 'Buff, Clear & Acrylic'],
    ['Sizes', '48x50, 48x100, 48x1000'],
    ['Application', 'Industrial & commercial packaging'],
    ['Custom Options', 'Other sizes available on request'],
  ],

  features: [
    ['package', 'Strong Adhesion', 'Reliable sealing for cartons and packaging.'],
    ['layers', 'Multiple Options', 'Available in buff, clear and acrylic finishes.'],
    ['truck', 'Industrial Use', 'Suitable for warehouses and shipping operations.'],
    ['settings', 'Custom Sizes', 'Additional specifications available on request.'],
  ],

  customHTML: `
    <div class="bubble-section">
      <img src="tape.png" class="refuse-image">
    </div>
  `
},
consumables: {
  label: 'Product 06',
  title: 'Consumables',
  overviewTitle: 'Washroom & Industrial Consumables',

  desc1: 'Multi Stretch supplies quality consumable products for commercial, industrial, warehouse, and office environments. Our range includes toilet paper and garage rolls designed for reliable daily use and cost-effective bulk supply.',

  desc2: 'Available in virgin or recycled options with both 1 ply and 2 ply variations to suit different operational requirements. Additional specifications and quantities available on request.',

  specs: [
    ['Toilet Paper', 'Virgin or Recycled'],
    ['Ply Options', '1 Ply & 2 Ply'],
    ['Industrial Rolls', 'Garage Rolls Available'],
    ['Application', 'Commercial & industrial use'],
    ['Custom Options', 'Other products on request'],
  ],

  features: [
    ['package', 'Bulk Supply', 'Reliable stock availability for business operations.'],
    ['layers', 'Virgin or Recycled', 'Options available to suit your budget and requirements.'],
    ['shield-check', 'Quality Material', 'Strong and reliable tissue products for everyday use.'],
    ['truck', 'Industrial Ready', 'Suitable for offices, factories, warehouses and garages.'],
  ],

  customHTML: `
    <div class="bubble-section">
      <img src="toilet.jpg" class="refuse-image">
    </div>
  `
},
};

/* ─── PAGE NAVIGATION ─── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  const map = { home: 'nav-home', about: 'nav-about', contact: 'nav-contact' };
  if (map[name]) document.getElementById(map[name]).classList.add('active');
  if (name.startsWith('product')) document.getElementById('nav-products').classList.add('active');

  lucide.createIcons();
  closeMobileNav();
}

/* ─── PRODUCT DETAIL ─── */
function showProduct(key) {
  const p = products[key];
  if (!p) return;

  document.getElementById('prod-label').textContent = p.label;
  document.getElementById('prod-title').textContent = p.title;
  document.getElementById('prod-header').setAttribute('data-title', p.title.toUpperCase());
  document.getElementById('prod-overview-title').textContent = p.overviewTitle;
  document.getElementById('prod-desc-1').textContent = p.desc1;
  document.getElementById('prod-desc-2').textContent = p.desc2;

  document.getElementById('prod-specs').innerHTML =
    p.specs.map(([k, v]) => `
      <div class="spec-row">
        <span class="spec-key">${k}</span>
        <span class="spec-val">${v}</span>
      </div>
    `).join('');

  if (p.customHTML) {
    document.getElementById('prod-features').innerHTML = p.customHTML;
  } else {
    document.getElementById('prod-features').innerHTML =
      p.features.map(([icon, title, text]) => `
        <div class="feature-item">
          <div class="feature-bullet"><i data-lucide="${icon}"></i></div>
          <div>
            <h4>${title}</h4>
            <p>${text}</p>
          </div>
        </div>
      `).join('');
  }

  showPage('product-detail');
}

/* ─── MOBILE NAV ─── */
function openMobileNav() {
  document.getElementById('mobile-nav-overlay').classList.add('open');
  document.getElementById('hamburger-icon').setAttribute('data-lucide', 'x');
  lucide.createIcons();
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobile-nav-overlay').classList.remove('open');
  document.getElementById('hamburger-icon').setAttribute('data-lucide', 'menu');
  lucide.createIcons();
  document.body.style.overflow = '';
}

function toggleMobileNav() {
  const overlay = document.getElementById('mobile-nav-overlay');
  overlay.classList.contains('open') ? closeMobileNav() : openMobileNav();
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileNav);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileNav();
  });
});