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
      ['Available Sizes', 'All sizes — custom'],
      ['Colours',         'All colours — custom'],
      ['Application',     'Manual & Auto machines'],
      ['Technology',      'Technology Polymers'],
      ['Lead Time',       'Quick turnaround'],
    ],
    features: [
      ['shield',   'Superior Strength', 'Advanced LLDPE Metallocene formula delivers outstanding puncture resistance and cling performance.'],
      ['palette',  'Custom Colours',    'Any colour to match your corporate identity or colour-coded pallet system.'],
      ['ruler',    'Custom Sizing',     'Tailored widths and thicknesses to suit manual and automated stretch wrap machines.'],
      ['recycle',  'Zero Wastage',      'In-line scrap rework facility means every gram of material is accounted for.'],
    ]
  },
  bubble: {
    label: 'Product 02',
    title: 'Bubble Wrap',
    overviewTitle: 'Protective Cushioning Packaging',
    desc1: 'Our bubble wrap provides exceptional protection for fragile, sensitive, and high-value goods during storage and transit. Multi Stretch supplies high-quality bubble wrap in a range of roll sizes, widths and bubble diameters to suit every application.',
    desc2: 'Whether you need light protective wrapping for consumer goods or heavy-duty cushioning for industrial equipment, our bubble wrap range covers all bases. Available in bulk rolls for high-volume operations.',
    specs: [
      ['Bubble Types',   'Small, medium, large'],
      ['Widths',         'Multiple — custom'],
      ['Roll Lengths',   'Standard & bulk'],
      ['Application',    'General & industrial'],
      ['Colour',         'Clear standard'],
      ['Custom Options', 'Available on request'],
    ],
    features: [
      ['shield-check',     'Superior Protection', 'Multi-layer air cushioning absorbs shock and prevents damage to fragile items.'],
      ['move-horizontal',  'Multiple Sizes',      'Range of bubble sizes and roll widths to match any product type and packing process.'],
      ['package',          'Bulk Supply',         'High-volume roll options reduce cost per metre and downtime between roll changes.'],
      ['scissors',         'Easy Handling',       'Lightweight and easy to cut, wrap and seal — reducing packing time on the floor.'],
    ]
  },
  refuse: {
    label: 'Product 03',
    title: 'Refuse Bags',
    overviewTitle: 'Heavy-Duty Industrial Bags',
    desc1: 'Multi Stretch supplies heavy-duty refuse bags designed for commercial and industrial environments. Built for strength and reliability, our refuse bags handle demanding applications without failure.',
    desc2: 'Available in a range of sizes, thicknesses and colours to meet the requirements of various industries, municipalities and commercial facilities. Custom specifications available on request.',
    specs: [
      ['Capacity',    'Various — 20L to 240L'],
      ['Thickness',   'Light to heavy duty'],
      ['Colours',     'Black, clear, custom'],
      ['Closure',     'Open top & tie variants'],
      ['Application', 'Commercial & industrial'],
      ['MOQ',         'Contact for details'],
    ],
    features: [
      ['dumbbell', 'High Strength',    'Thick gauge material resists tearing, punctures and leakage in demanding environments.'],
      ['palette',  'Multiple Colours', 'Colour-coding for waste segregation systems or corporate requirements.'],
      ['package',  'Bulk Quantities',  'Available in high-volume packs for cost-effective procurement.'],
      ['settings', 'Custom Spec',      'Bespoke thickness, size, and gusset options available for specific applications.'],
    ]
  },
  general: {
    label: 'Product 04',
    title: 'General Purpose Bags',
    overviewTitle: 'Versatile Poly Packaging Bags',
    desc1: 'Our general purpose poly bags are designed for a wide range of industrial and commercial packaging applications. Versatile, strong, and available in a variety of sizes and thicknesses.',
    desc2: 'From parts packaging to agricultural use, storage to shipping — our general purpose bag range provides a flexible, cost-effective solution for virtually any bulk or unit packaging need.',
    specs: [
      ['Material',    'Polyethylene'],
      ['Sizes',       'Full range — custom'],
      ['Thickness',   'Various microns'],
      ['Closure',     'Open, sealed, zip'],
      ['Print',       'Custom print available'],
      ['Application', 'Industrial, commercial'],
    ],
    features: [
      ['refresh-cw',    'Multi-Purpose', 'Suitable for a huge variety of products across all industries and use cases.'],
      ['ruler',         'Any Size',      'From small parts bags to large liner bags — manufactured to your dimensions.'],
      ['printer',       'Custom Print',  'Add your logo or instructions for branded or compliant packaging.'],
      ['trending-down', 'Cost Effective','Competitive pricing on high volume runs with short lead times from our facility.'],
    ]
  },
  tape: {
    label: 'Product 05',
    title: 'Adhesive Tape',
    overviewTitle: 'Industrial Packaging Tape',
    desc1: 'Multi Stretch supplies industrial-grade adhesive tape for secure carton sealing, bundling and packaging. Our tape range ensures reliable adhesion across a variety of surfaces and temperature conditions.',
    desc2: 'Available in clear, brown and custom colour options, our tapes are suitable for manual application and automated tape machines. Custom colour options allow for corporate identity consistency across all packaging.',
    specs: [
      ['Types',          'Clear, brown, custom'],
      ['Widths',         '36mm, 48mm, 72mm+'],
      ['Lengths',        '100m+ per roll'],
      ['Application',    'Manual & machine'],
      ['Adhesive',       'Hot melt acrylic'],
      ['Custom Colours', 'Available'],
    ],
    features: [
      ['lock',    'Strong Adhesion',    'Hot melt formulation bonds securely to cardboard, plastic and mixed surfaces.'],
      ['palette', 'Custom Colours',     'Match your brand or create a colour-coded carton identification system.'],
      ['zap',     'Machine Compatible', 'Sized and wound for use with automated carton sealing machines.'],
      ['package', 'Bulk Supply',        'Carton quantities for high-throughput operations at competitive prices.'],
    ]
  },
  consumables: {
    label: 'Product 06',
    title: 'Consumables',
    overviewTitle: 'Supporting Packaging Products',
    desc1: 'Multi Stretch supplies a range of supporting packaging consumables designed to complement our core product lines and complete your packing workflow. One supplier, everything you need.',
    desc2: 'Our consumables range is curated to work seamlessly alongside our pallet wrap, tape and bag products, ensuring you have everything required for an efficient, professional packaging operation.',
    specs: [
      ['Range',        'Multiple categories'],
      ['Availability', 'Stocked locally'],
      ['Supply',       'Bulk & standard'],
      ['Delivery',     'Quick turnaround'],
      ['Custom',       'Available on request'],
      ['Support',      'Technical guidance'],
    ],
    features: [
      ['wrench',      'Complete Range', 'Everything you need to support a full packaging line in one place.'],
      ['package',     'In Stock',       'Extensive stock levels mean fast fulfilment without lead time delays.'],
      ['handshake',   'Expert Advice',  'Our team helps you identify the right consumable for your specific application.'],
      ['refresh-cw',  'Replenishment',  'Regular supply arrangements available for high-consumption operations.'],
    ]
  },
};

/* ─── PAGE NAVIGATION ─── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update nav active state
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  const map = { home: 'nav-home', about: 'nav-about', contact: 'nav-contact' };
  if (map[name]) document.getElementById(map[name]).classList.add('active');
  if (name.startsWith('product')) document.getElementById('nav-products').classList.add('active');

  // Re-render icons for dynamically shown content
  lucide.createIcons();

  // Close mobile nav if open
  closeMobileNav();
}

/* ─── PRODUCT DETAIL ─── */
function showProduct(key) {
  const p = products[key];
  if (!p) return;

  document.getElementById('prod-label').textContent         = p.label;
  document.getElementById('prod-title').textContent         = p.title;
  document.getElementById('prod-header').setAttribute('data-title', p.title.toUpperCase());
  document.getElementById('prod-overview-title').textContent = p.overviewTitle;
  document.getElementById('prod-desc-1').textContent        = p.desc1;
  document.getElementById('prod-desc-2').textContent        = p.desc2;

  // Specs
  document.getElementById('prod-specs').innerHTML = p.specs.map(([k, v]) => `
    <div class="spec-row">
      <span class="spec-key">${k}</span>
      <span class="spec-val">${v}</span>
    </div>
  `).join('');

  // Features
  document.getElementById('prod-features').innerHTML = p.features.map(([icon, title, text]) => `
    <div class="feature-item">
      <div class="feature-bullet"><i data-lucide="${icon}"></i></div>
      <div>
        <h4>${title}</h4>
        <p>${text}</p>
      </div>
    </div>
  `).join('');

  showPage('product-detail');
}

/* ─── HAMBURGER / MOBILE NAV ─── */
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
  if (overlay.classList.contains('open')) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
}

/* ─── FORMSPREE CONTACT FORM ─── */
async function handleFormSubmit(e) {
  e.preventDefault();

  const form     = e.target;
  const btn      = form.querySelector('.form-submit');
  const feedback = form.querySelector('.form-feedback');
  const data     = new FormData(form);

  // Loading state
  btn.disabled    = true;
  btn.textContent = 'Sending…';
  feedback.className = 'form-feedback';

  try {
    const response = await fetch('https://formspree.io/f/meenvawe', {
      method:  'POST',
      body:    data,
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      feedback.className   = 'form-feedback success';
      feedback.textContent = '✓ Message sent! We\'ll be in touch shortly.';
      form.reset();
    } else {
      const json = await response.json().catch(() => ({}));
      const msg  = (json.errors || []).map(err => err.message).join(', ')
                || 'Something went wrong. Please try again.';
      feedback.className   = 'form-feedback error';
      feedback.textContent = msg;
    }
  } catch {
    feedback.className   = 'form-feedback error';
    feedback.textContent = 'Network error. Please check your connection and try again.';
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Send Message →';
  }
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Render all Lucide icons
  lucide.createIcons();

  // Attach Formspree handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

  // Hamburger button
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileNav);

  // Close mobile nav when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileNav();
  });
});