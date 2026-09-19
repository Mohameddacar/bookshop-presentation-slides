// Premium 10-Slide Content restored for Light Theme
const SLIDES = [
    {
        eyebrow: "Slide 1: Capstone Defense 2026",
        title: "Bookshop Pro System",
        subtitle: "Seamless Automation from Bookshelves to Customer Doorstep. A comprehensive, premium Bookshop Sales and Inventory Management System.",
        html: `<div class="feature-grid" style="grid-template-columns: 1fr; text-align: center;">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue);">
                      <div class="feature-icon" style="transform: scale(1.2); margin-bottom: 2rem;">
                          <i data-lucide="book-open" style="width: 48px; height: 48px;"></i>
                      </div>
                      <h3 style="font-size: 2rem; margin-bottom: 1rem;">Welcome Panel Evaluators</h3>
                      <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Modernizing book retail, streamlining backend operations, and revolutionizing how readers discover books.</p>
                  </div>
               </div>`
    },
    {
        eyebrow: "Slide 2: The Core Problem",
        title: "The Bottleneck of Traditional Book Retail",
        subtitle: "Historically, managing a bookstore meant relying on manual, paper-based systems or disconnected software.",
        html: `<ul class="bullet-list">
                 <li><i data-lucide="x-octagon" style="color: #ef4444;"></i> <strong>Disjointed Systems:</strong> POS, Book Inventory, and Delivery functioning in silos.</li>
                 <li><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> <strong>Manual Tracking:</strong> High margin for human error in tracking titles, authors, and stock.</li>
                 <li><i data-lucide="wifi-off" style="color: #ef4444;"></i> <strong>Poor Customer Reach:</strong> Limited to physical walk-ins; lack of integrated online ordering.</li>
               </ul>`
    },
    {
        eyebrow: "Slide 3: The Need",
        title: "The Demand for Intelligent Automation",
        subtitle: "To survive in today's fast-paced market, a modern bookshop requires intelligent automation.",
        html: `<div class="feature-grid">
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="activity"></i></div><h3>Real-time Data</h3><p>Instant visibility into available titles and sales performance.</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="smartphone"></i></div><h3>Omnichannel</h3><p>Readers expect to buy books in-store and online interchangeably.</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="bar-chart-2"></i></div><h3>Data-Driven</h3><p>Management requires actionable insights to know which genres are trending.</p></div>
               </div>`
    },
    {
        eyebrow: "Slide 4: The Solution",
        title: "Our Unified Bookshop Platform",
        subtitle: "We have engineered a centralized hub that automates complex workflows.",
        html: `<div class="feature-grid">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue);"><div class="feature-icon"><i data-lucide="layers"></i></div><h3>Centralized Control</h3><p>One platform managing book inventory, POS, and the online bookstore.</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-gold);"><div class="feature-icon" style="color: var(--accent-gold); background: rgba(245, 158, 11, 0.1);"><i data-lucide="zap"></i></div><h3>Seamless Automation</h3><p>Automated stock deductions, order tracking, and low-stock alerts.</p></div>
                  <div class="feature-card" style="border-top: 4px solid var(--accent-green);"><div class="feature-icon" style="color: var(--accent-green); background: rgba(16, 185, 129, 0.1);"><i data-lucide="trending-up"></i></div><h3>Scalable Architecture</h3><p>Built to grow with the business and handle thousands of titles.</p></div>
               </div>`
    },
    {
        eyebrow: "Slide 5: Customer Journey",
        title: "Revolutionizing Online Book Delivery",
        subtitle: "The most drastic change is how readers interact with the bookshop. From blind waiting to real-time tracking.",
        html: `<div class="split-screen">
                  <div class="split-card before">
                      <h3><i data-lucide="frown"></i> The Legacy Way</h3>
                      <ul class="bullet-list" style="margin-top: 1rem; gap: 1rem; box-shadow: none;">
                          <li style="border: none; padding: 0; box-shadow: none;"><i data-lucide="phone-call" style="color: #ef4444;"></i> <strong>Phone Calls:</strong> High risk of miscommunication.</li>
                          <li style="border: none; padding: 0; box-shadow: none;"><i data-lucide="eye-off" style="color: #ef4444;"></i> <strong>Blind Delivery:</strong> Customers wait without knowing order status.</li>
                      </ul>
                  </div>
                  <div class="split-card after">
                      <h3><i data-lucide="smile"></i> The Unified Way</h3>
                      <ul class="bullet-list" style="margin-top: 1rem; gap: 1rem; box-shadow: none;">
                          <li style="border: none; padding: 0; box-shadow: none;"><i data-lucide="shopping-bag" style="color: #10b981;"></i> <strong>Self-Service:</strong> Beautiful online store for browsing.</li>
                          <li style="border: none; padding: 0; box-shadow: none;"><i data-lucide="truck" style="color: #10b981;"></i> <strong>Live Tracking:</strong> Real-time automated status updates.</li>
                      </ul>
                  </div>
               </div>`
    },
    {
        eyebrow: "Slide 6: Simulator",
        title: "An Elegant, Automated Workflow",
        subtitle: "Let's walk through the end-to-end automation from order placement to final delivery.",
        html: `
        <div class="workflow-track">
            <div class="workflow-line"></div>
            <div class="workflow-node" id="sim-step-1"><i data-lucide="shopping-cart"></i><span class="workflow-label">1. Order</span></div>
            <div class="workflow-node" id="sim-step-2"><i data-lucide="refresh-cw"></i><span class="workflow-label">2. Sync</span></div>
            <div class="workflow-node" id="sim-step-3"><i data-lucide="package"></i><span class="workflow-label">3. Fulfill</span></div>
            <div class="workflow-node" id="sim-step-4"><i data-lucide="check-circle"></i><span class="workflow-label">4. Complete</span></div>
        </div>
        <div style="text-align: center;">
            <button id="simulate-btn" class="sim-btn"><i data-lucide="play"></i> Simulate New Order</button>
        </div>
        `
    },
    {
        eyebrow: "Slide 7: Core Features",
        title: "A Feature-Rich Ecosystem",
        subtitle: "Four main modules built for cashiers, warehouse managers, readers, and administrators.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(2, 1fr);">
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="monitor"></i></div><h3>Advanced POS</h3><p>Lightning-fast in-store checkout for walk-in readers.</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="box"></i></div><h3>Inventory Control</h3><p>Smart adjustments, supplier management, and damaged book tracking.</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="pie-chart"></i></div><h3>Executive Dashboard</h3><p>High-level charts, sales reports, and top-selling books tracking.</p></div>
                  <div class="feature-card"><div class="feature-icon"><i data-lucide="globe"></i></div><h3>Integrated Online Store</h3><p>A beautiful storefront optimized for browsing books online.</p></div>
               </div>`
    },
    {
        eyebrow: "Slide 8: Architecture",
        title: "Built for Speed, Security, and Scale",
        subtitle: "For the technical panel: Quality, security, and response times were our top priorities.",
        html: `<ul class="bullet-list">
                 <li><i data-lucide="code"></i> <strong>Modern Web Technologies:</strong> React, Next.js, and Express ensuring a fast, responsive UI.</li>
                 <li><i data-lucide="database"></i> <strong>Secure API & Database:</strong> PostgreSQL protecting business data and customer information.</li>
                 <li><i data-lucide="shield-check"></i> <strong>Role-Based Access:</strong> Strict permissions ensuring staff only see what they are authorized to see.</li>
               </ul>`
    },
    {
        eyebrow: "Slide 9: Business Impact",
        title: "Driving Efficiency & Growth",
        subtitle: "The ultimate goal: eliminating human error, cutting processing time, and providing financial visibility.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(2, 1fr);">
                  <div class="metric-container" style="border-top: 4px solid var(--accent-gold);">
                      <div class="metric-value" style="color: var(--accent-gold);">30%</div>
                      <div class="metric-label">Time Saved Processing Orders</div>
                  </div>
                  <div class="metric-container" style="border-top: 4px solid var(--accent-green);">
                      <div class="metric-value" style="color: var(--accent-green);">0%</div>
                      <div class="metric-label">Manual Data Entry Errors</div>
                  </div>
               </div>`
    },
    {
        eyebrow: "Slide 10: Conclusion",
        title: "Ready for the Future of Book Retail",
        subtitle: "We haven't just digitized a process; we have built a premium foundation for bookshop success.",
        html: `<div style="text-align: center; margin-top: 5rem;">
                  <i data-lucide="award" style="width: 100px; height: 100px; color: var(--accent-gold); margin-bottom: 2rem;"></i>
                  <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-primary);">Thank You.</h2>
                  <p style="font-size: 1.2rem; color: var(--text-secondary); margin-top: 1rem;">We welcome your questions.</p>
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

  // Attach Simulator Logic if on Slide 6
  if (index === 5) {
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
