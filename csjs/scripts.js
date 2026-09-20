const SLIDES = [
    {
        eyebrow: "THESIS PRESENTATION",
        title: "Bookshop System",
        subtitle: "A centralized platform for BrightMTS operations. Case Study: Bright Multiservices and Tech Solutions. From operational problem to implemented and tested solution.",
        html: `<div class="feature-grid" style="grid-template-columns: 1fr; text-align: center;">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue);">
                      <div class="feature-icon" style="transform: scale(1.2); margin-bottom: 2rem;">
                          <i data-lucide="book-open" style="width: 48px; height: 48px;"></i>
                      </div>
                      <h3 style="font-size: 2rem; margin-bottom: 1rem;">Welcome Panel Evaluators</h3>
                      <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Case Study: Bright Multiservices and Tech Solutions</p>
                  </div>
               </div>`
    },
    {
        eyebrow: "01 / STUDY BACKGROUND",
        title: "BrightMTS needed one system for a growing operation",
        subtitle: "The company distributes Magic Pearls and Kokos AI learning series from Waberi District, Mogadishu. Serving schools, institutions, organizations, bookstores and individual customers.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(3, 1fr);">
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="trending-up"></i></div><h3>More Activity</h3><p>Products, customers and daily transactions continued to increase.</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="share-2"></i></div><h3>More Coordination</h3><p>Sales, inventory, payments and delivery needed shared information.</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue);"><div class="feature-icon" style="color: var(--accent-blue); background: rgba(99, 102, 241, 0.1);"><i data-lucide="target"></i></div><h3>Research Need</h3><p>A web-based system that integrates the company’s main business processes and supports accurate decisions.</p></div>
               </div>`
    },
    {
        eyebrow: "02 / PROBLEM STATEMENT",
        title: "Manual records created errors, delays and limited visibility",
        subtitle: "Information was distributed across handwritten records and separate Microsoft Office files.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(2, 1fr);">
                  <div class="feature-card"><div class="feature-icon" style="color: #ef4444; background: rgba(239, 68, 68, 0.1);"><i data-lucide="package-x"></i></div><h3>1. Inventory</h3><p>Stock levels and movements were difficult to monitor accurately.</p></div>
                  <div class="feature-card"><div class="feature-icon" style="color: #ef4444; background: rgba(239, 68, 68, 0.1);"><i data-lucide="file-x"></i></div><h3>2. Transactions</h3><p>Manual recording increased duplication and calculation errors.</p></div>
                  <div class="feature-card"><div class="feature-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.1);"><i data-lucide="users"></i></div><h3>3. Customer Service</h3><p>Physical and online orders were harder to process and follow.</p></div>
                  <div class="feature-card"><div class="feature-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.1);"><i data-lucide="pie-chart"></i></div><h3>4. Management</h3><p>Reports were delayed, limiting timely decision-making.</p></div>
               </div>`
    },
    {
        eyebrow: "03 / RESEARCH OBJECTIVES",
        title: "The study linked system development, validation and reporting",
        subtitle: "GENERAL OBJECTIVE: Design and develop a web-based Bookshop System that improves inventory management, automates sales operations and supports efficient business decision-making.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(3, 1fr);">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue);"><div class="feature-icon" style="color: var(--accent-blue);"><i data-lucide="code"></i></div><h3>1. Implement Core Modules</h3><p>Inventory control, sales processing, online ordering and role-based access control.</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-gold);"><div class="feature-icon" style="color: var(--accent-gold);"><i data-lucide="check-circle"></i></div><h3>2. Validate the System</h3><p>Evaluate functionality, usability, security and overall performance.</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green);"><i data-lucide="bar-chart"></i></div><h3>3. Generate Reports</h3><p>Report inventory, sales, customers, payments, deliveries and business performance.</p></div>
               </div>`
    },
    {
        eyebrow: "04 / CONTENT SCOPE",
        title: "The system covers the complete operating cycle",
        subtitle: "The project combined internal administration, customer ordering and management reporting.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(3, 1fr);">
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="library"></i></div><h3>Catalog</h3><p>Products, categories, brands and variants</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="archive"></i></div><h3>Stock</h3><p>Warehouses, inventory and stock movements</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="shopping-cart"></i></div><h3>Commerce</h3><p>POS, sales, online orders and payments</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="users"></i></div><h3>Relationships</h3><p>Customers and sponsors</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="truck"></i></div><h3>Fulfilment</h3><p>Delivery assignments, confirmations and incidents</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="shield"></i></div><h3>Control</h3><p>Users, roles, notifications, settings and reports</p></div>
               </div>`
    },
    {
        eyebrow: "05 / SIGNIFICANCE",
        title: "The system creates value for operations, customers and research",
        subtitle: "Each stakeholder benefits from the same centralized and current information.",
        html: `<ul class="bullet-list">
                 <li><i data-lucide="briefcase" style="color: var(--accent-blue);"></i> <strong>Company:</strong> Less manual work, improved inventory accuracy and reliable operational information.</li>
                 <li><i data-lucide="users" style="color: var(--accent-blue);"></i> <strong>Employees:</strong> Simpler daily tasks with fewer repeated entries and fewer avoidable errors.</li>
                 <li><i data-lucide="shopping-bag" style="color: var(--accent-blue);"></i> <strong>Customers:</strong> Clear product availability, online ordering and more organized fulfilment.</li>
                 <li><i data-lucide="pie-chart" style="color: var(--accent-blue);"></i> <strong>Management:</strong> Current dashboards and reports for monitoring and decisions.</li>
                 <li><i data-lucide="graduation-cap" style="color: var(--accent-blue);"></i> <strong>Students & Researchers:</strong> A practical reference for web systems and business process automation.</li>
               </ul>`
    },
    {
        eyebrow: "06 / DEVELOPMENT APPROACH",
        title: "Requirements became an implemented web application",
        subtitle: "Observation, interviews and document review grounded the design in the company’s real workflow.",
        html: `
        <div class="workflow-track" style="margin-bottom: 2rem;">
            <div class="workflow-line"></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="search" style="color: var(--accent-blue);"></i><span class="workflow-label">1. Analyze</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-gold);"><i data-lucide="pen-tool" style="color: var(--accent-gold);"></i><span class="workflow-label">2. Design</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-green);"><i data-lucide="code" style="color: var(--accent-green);"></i><span class="workflow-label">3. Develop</span></div>
            <div class="workflow-node active" style="border-color: #8b5cf6;"><i data-lucide="check-square" style="color: #8b5cf6;"></i><span class="workflow-label">4. Test</span></div>
        </div>
        <div class="feature-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="feature-card" style="padding: 1.5rem;"><h4 style="font-weight:700; margin-bottom: 0.5rem; color: var(--accent-blue);">Frontend</h4><p style="font-size: 0.9rem;">Next.js + TypeScript<br>Tailwind + shadcn/ui</p></div>
            <div class="feature-card" style="padding: 1.5rem;"><h4 style="font-weight:700; margin-bottom: 0.5rem; color: var(--accent-gold);">Backend</h4><p style="font-size: 0.9rem;">Node.js + Express</p></div>
            <div class="feature-card" style="padding: 1.5rem;"><h4 style="font-weight:700; margin-bottom: 0.5rem; color: var(--accent-green);">Database</h4><p style="font-size: 0.9rem;">PostgreSQL + Prisma</p></div>
            <div class="feature-card" style="padding: 1.5rem;"><h4 style="font-weight:700; margin-bottom: 0.5rem; color: #8b5cf6;">Design</h4><p style="font-size: 0.9rem;">Responsive UI</p></div>
        </div>`
    },
    {
        eyebrow: "07 / IMPLEMENTED WORKFLOW",
        title: "One transaction updates every related activity",
        subtitle: "The system supports both walk-in sales and online orders through a shared database.",
        html: `
        <div class="workflow-track">
            <div class="workflow-line"></div>
            <div class="workflow-node" id="sim-step-1"><i data-lucide="shopping-cart"></i><span class="workflow-label">1. Order</span></div>
            <div class="workflow-node" id="sim-step-2"><i data-lucide="credit-card"></i><span class="workflow-label">2. Payment</span></div>
            <div class="workflow-node" id="sim-step-3"><i data-lucide="package"></i><span class="workflow-label">3. Inventory</span></div>
            <div class="workflow-node" id="sim-step-4"><i data-lucide="truck"></i><span class="workflow-label">4. Delivery</span></div>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
            <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 1rem;">Every step automatically refreshes reports.</p>
            <button id="simulate-btn" class="sim-btn"><i data-lucide="play"></i> Simulate Workflow</button>
        </div>
        `
    },
    {
        eyebrow: "08 / IMPLEMENTATION RESULTS",
        title: "All planned modules were completed and integrated",
        subtitle: "Chapter Six confirms that the major functional modules operated successfully.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(2, 1fr);">
                  <div class="feature-card" style="border-left: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green); background: rgba(16,185,129,0.1);"><i data-lucide="shield-check"></i></div><h3>Auth & Users</h3><p>Completed and integrated with shared operational data.</p></div>
                  <div class="feature-card" style="border-left: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green); background: rgba(16,185,129,0.1);"><i data-lucide="database"></i></div><h3>Catalog & Inventory</h3><p>Completed and integrated with shared operational data.</p></div>
                  <div class="feature-card" style="border-left: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green); background: rgba(16,185,129,0.1);"><i data-lucide="shopping-cart"></i></div><h3>Sales, POS & Orders</h3><p>Completed and integrated with shared operational data.</p></div>
                  <div class="feature-card" style="border-left: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green); background: rgba(16,185,129,0.1);"><i data-lucide="truck"></i></div><h3>Delivery & Reports</h3><p>Completed and integrated with shared operational data.</p></div>
               </div>`
    },
    {
        eyebrow: "09 / EVALUATION RESULTS",
        title: "Testing confirmed performance, accuracy and security",
        subtitle: "The documented Chapter Six metrics met every defined target.",
        html: `<div style="overflow-x: auto; background: #fff; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                 <table style="width: 100%; text-align: left; border-collapse: collapse;">
                   <thead>
                     <tr style="background: rgba(99, 102, 241, 0.05); border-bottom: 1px solid var(--border-color);">
                       <th style="padding: 1rem; font-weight: 600; color: var(--text-primary);">Metric</th>
                       <th style="padding: 1rem; font-weight: 600; color: var(--text-primary);">Target</th>
                       <th style="padding: 1rem; font-weight: 600; color: var(--text-primary);">Result</th>
                       <th style="padding: 1rem; font-weight: 600; color: var(--text-primary);">Status</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">Login response</td><td style="padding: 1rem;">≤ 2 seconds</td><td style="padding: 1rem;">1.3 seconds</td><td style="padding: 1rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="width: 16px; height: 16px; display: inline; vertical-align: text-bottom;"></i> Achieved</td></tr>
                     <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">Dashboard loading</td><td style="padding: 1rem;">≤ 3 seconds</td><td style="padding: 1rem;">2.1 seconds</td><td style="padding: 1rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="width: 16px; height: 16px; display: inline; vertical-align: text-bottom;"></i> Achieved</td></tr>
                     <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">Inventory accuracy</td><td style="padding: 1rem;">100%</td><td style="padding: 1rem;">100%</td><td style="padding: 1rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="width: 16px; height: 16px; display: inline; vertical-align: text-bottom;"></i> Achieved</td></tr>
                     <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">Sales accuracy</td><td style="padding: 1rem;">100%</td><td style="padding: 1rem;">100%</td><td style="padding: 1rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="width: 16px; height: 16px; display: inline; vertical-align: text-bottom;"></i> Achieved</td></tr>
                     <tr><td style="padding: 1rem;">Report generation</td><td style="padding: 1rem;">≤ 5 seconds</td><td style="padding: 1rem;">2.8 seconds</td><td style="padding: 1rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="width: 16px; height: 16px; display: inline; vertical-align: text-bottom;"></i> Achieved</td></tr>
                   </tbody>
                 </table>
               </div>`
    },
    {
        eyebrow: "10 / PROBLEMS ADDRESSED",
        title: "Manual problems and implemented responses",
        subtitle: "Every major weakness identified in Chapter One received a corresponding system function.",
        html: `<ul class="bullet-list" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                 <li><i data-lucide="arrow-right-circle" style="color: var(--accent-blue);"></i> <strong>Manual Products:</strong> Centralized catalog database</li>
                 <li><i data-lucide="arrow-right-circle" style="color: var(--accent-blue);"></i> <strong>Manual Stock:</strong> Automatic inventory updates</li>
                 <li><i data-lucide="arrow-right-circle" style="color: var(--accent-blue);"></i> <strong>Paper Sales:</strong> POS & automated recording</li>
                 <li><i data-lucide="arrow-right-circle" style="color: var(--accent-blue);"></i> <strong>No Online:</strong> Customer-facing web store</li>
                 <li><i data-lucide="arrow-right-circle" style="color: var(--accent-blue);"></i> <strong>Delivery Follow-up:</strong> Assignment & status workflow</li>
                 <li><i data-lucide="arrow-right-circle" style="color: var(--accent-blue);"></i> <strong>Delayed Reports:</strong> Current operational dashboards</li>
               </ul>`
    },
    {
        eyebrow: "11 / CONCLUSION",
        title: "The project achieved its research purpose",
        subtitle: "BrightMTS now has a tested foundation for centralized digital operations.",
        html: `<div class="feature-grid">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue);"><div class="feature-icon" style="color: var(--accent-blue); background: rgba(99,102,241,0.1);"><i data-lucide="layers"></i></div><h3>Centralized</h3><p>Products, stock, customers, sales, orders, payments and delivery</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-gold);"><div class="feature-icon" style="color: var(--accent-gold); background: rgba(245,158,11,0.1);"><i data-lucide="zap"></i></div><h3>Automated</h3><p>Inventory updates, notifications and operational reporting</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green); background: rgba(16,185,129,0.1);"><i data-lucide="shield-check"></i></div><h3>Validated</h3><p>Unit, integration, system and user acceptance testing</p></div>
                  <div class="feature-card" style="border-top: 4px solid #8b5cf6;"><div class="feature-icon" style="color: #8b5cf6; background: rgba(139,92,246,0.1);"><i data-lucide="pie-chart"></i></div><h3>Decision Support</h3><p>Current dashboards and reports for authorized users</p></div>
               </div>
               <div style="text-align: center; margin-top: 3rem;">
                  <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-primary);">Thank You</h2>
                  <p style="font-size: 1.2rem; color: var(--text-secondary); margin-top: 0.5rem;">Questions and Discussion</p>
               </div>`
    }
];

// App Logic
let currentSlideIndex = 0;
const totalSlides = SLIDES.length;

const slideContainer = document.getElementById('slide-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSlideEl = document.getElementById('current-slide');
const totalSlidesEl = document.getElementById('total-slides');
const progressBar = document.getElementById('progress-bar');
const slideControls = document.getElementById('slide-controls');
const headerTitle = document.getElementById('header-title');

totalSlidesEl.textContent = totalSlides;

function renderSlide(index) {
  const slide = SLIDES[index];

  // Update Header
  headerTitle.textContent = slide.eyebrow.split(':')[0]; // e.g. "Slide 1"

  // Inject Slide Content
  slideContainer.innerHTML = `
        <div class="slide-content">
            <div class="slide-eyebrow">${slide.eyebrow}</div>
            <h1 class="slide-title">${slide.title}</h1>
            <p class="slide-subtitle">${slide.subtitle}</p>
            <div class="slide-html-content">${slide.html}</div>
        </div>
    `;

  // Update Icons
  lucide.createIcons();

  // Attach Simulator Logic if on Slide 8 (07 / IMPLEMENTED WORKFLOW)
  if (index === 7) {
    setupSimulator();
  }

  // Update Footer Controls
  currentSlideEl.textContent = index + 1;
  progressBar.style.width = `${((index + 1) / totalSlides) * 100}%`;

  prevBtn.disabled = index === 0;

  if (index === totalSlides - 1) {
    nextBtn.innerHTML = 'Finish <i data-lucide="check"></i>';
    nextBtn.classList.remove('primary-btn');
    nextBtn.style.background = 'var(--accent-green)';
    nextBtn.style.color = 'white';
    nextBtn.style.border = 'none';
  } else {
    nextBtn.innerHTML = 'Next <i data-lucide="chevron-right"></i>';
    nextBtn.classList.add('primary-btn');
    nextBtn.style.background = '';
  }
  lucide.createIcons();
}

// Event Listeners for Controls
prevBtn.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide(currentSlideIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    renderSlide(currentSlideIndex);
  }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('slides-view').classList.contains('active')) return;

  if (e.key === 'ArrowRight' || e.key === 'Space') {
    nextBtn.click();
  } else if (e.key === 'ArrowLeft') {
    prevBtn.click();
  }
});

// Sidebar Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view-section');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('data-target');

    // Update active nav state
    navItems.forEach(nav => nav.classList.remove('active'));
    e.currentTarget.classList.add('active');

    // Update view sections
    views.forEach(view => {
      view.classList.remove('active');
      view.style.display = 'none';
    });

    const activeView = document.getElementById(`${target}-view`);
    if (activeView) {
        activeView.style.display = 'block';
        // Force reflow for animation
        void activeView.offsetWidth;
        activeView.classList.add('active');
    }

    // Update Header Title and slide controls
    if (target === 'slides') {
      slideControls.style.display = 'flex';
      renderSlide(currentSlideIndex);
    } else {
      slideControls.style.display = 'none';
      headerTitle.textContent = target === 'overview' ? 'System Overview' : 'Premium Analytics Dashboard';
    }

    // Render chart if reports selected
    if (target === 'reports') renderChart();
  });
});

// Timer Logic
let seconds = 0;
setInterval(() => {
  seconds++;
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  const timerSpan = document.querySelector('#presentation-timer span');
  if (timerSpan) timerSpan.textContent = `${mins}:${secs}`;
}, 1000);

// Initialize First Slide on Load
renderSlide(0);

// Premium Dashboard Chart Rendering
let lineChart, doughnutChart;
function renderChart() {
  if (typeof Chart === 'undefined') return;

  Chart.defaults.color = '#64748b';
  Chart.defaults.font.family = 'Inter';
  Chart.defaults.plugins.tooltip.backgroundColor = '#1e293b';
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.borderColor = '#e2e8f0';
  Chart.defaults.plugins.tooltip.borderWidth = 1;

  const ctxLine = document.getElementById('salesLineChart')?.getContext('2d');
  const ctxDoughnut = document.getElementById('categoryDoughnutChart')?.getContext('2d');
  
  if (!ctxLine || !ctxDoughnut) return;

  if (lineChart) lineChart.destroy();
  if (doughnutChart) doughnutChart.destroy();

  // Line Chart
  lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Revenue',
          data: [12000, 19000, 15000, 22000, 28000, 34000],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#6366f1',
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: v => '$' + v / 1000 + 'k' } },
        x: { grid: { display: false } }
      },
      animation: { duration: 1500, easing: 'easeOutQuart' }
    }
  });

  // Doughnut Chart
  doughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
      labels: ['Fiction', 'Non-Fiction', 'Academic', 'Comics'],
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: ['#6366f1', '#14b8a6', '#f59e0b', '#8b5cf6'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true, pointStyle: 'circle' } }
      },
      cutout: '75%',
      animation: { animateScale: true, animateRotate: true, duration: 1500 }
    }
  });
}

// Filter Dropdown Animation
document.getElementById('report-filter')?.addEventListener('change', (e) => {
  if (lineChart) {
    lineChart.data.datasets[0].data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 40000) + 10000);
    lineChart.update();
  }
  const kpis = [
    { id: 'kpi-revenue', val: Math.floor(Math.random() * 200000) + 50000, format: v => '$' + v.toLocaleString() },
    { id: 'kpi-orders', val: Math.floor(Math.random() * 5000) + 1000, format: v => v.toLocaleString() },
    { id: 'kpi-customers', val: Math.floor(Math.random() * 2000) + 500, format: v => v.toLocaleString() }
  ];
  kpis.forEach(kpi => {
    const el = document.getElementById(kpi.id);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      setTimeout(() => {
        el.textContent = kpi.format(kpi.val);
        el.style.transition = 'all 0.5s';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300);
    }
  });
});

// Live Simulator Logic (Slide 6)
function setupSimulator() {
    const btn = document.getElementById('simulate-btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
        if (btn.classList.contains('loading')) return;
        
        btn.classList.add('loading');
        btn.innerHTML = '<i data-lucide="loader" class="lucide-spin"></i> Processing...';
        lucide.createIcons();
        
        // Reset all nodes
        for (let i = 1; i <= 4; i++) {
            const node = document.getElementById('sim-step-' + i);
            if(node) {
                node.classList.remove('active');
                node.style.borderColor = 'var(--border-color)';
            }
        }
        
        // Animate step by step
        const delays = [500, 1500, 2500, 3500];
        const colors = ['#f59e0b', '#6366f1', '#8b5cf6', '#14b8a6'];
        
        for (let i = 1; i <= 4; i++) {
            setTimeout(() => {
                const node = document.getElementById('sim-step-' + i);
                if(node) {
                    node.classList.add('active');
                    node.style.borderColor = colors[i-1];
                    node.style.boxShadow = `0 0 15px ${colors[i-1]}40`;
                    node.querySelector('i').style.color = colors[i-1];
                }
                
                // Finish
                if (i === 4) {
                    btn.classList.remove('loading');
                    btn.innerHTML = '<i data-lucide="check"></i> Completed';
                    btn.style.background = 'var(--accent-green)';
                    lucide.createIcons();
                    setTimeout(() => {
                        btn.innerHTML = '<i data-lucide="play"></i> Simulate New Order';
                        btn.style.background = '';
                        lucide.createIcons();
                    }, 3000);
                }
            }, delays[i-1]);
        }
    });
}
