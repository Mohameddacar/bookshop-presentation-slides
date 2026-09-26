const fs = require('fs');

const SLIDES = `const SLIDES = [
    {
        eyebrow: "SLIDE 1 — INTRODUCTION",
        title: "ONLINE BOOKSHOP SYSTEM",
        subtitle: "A web-based platform for managing books, inventory, sales, online orders, payments, deliveries, and reports.",
        html: \\\`<div class="feature-grid" style="grid-template-columns: 1fr; text-align: center;">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue); padding: 3rem 2rem;">
                      <div style="margin-bottom: 1rem;">
                          <span style="display: inline-block; padding: 0.5rem 1.5rem; background: rgba(99,102,241,0.1); color: var(--accent-blue); border-radius: 20px; font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2rem;">Faculty of Computing and Informatics</span>
                      </div>
                      <div class="feature-icon" style="transform: scale(1.5); margin-bottom: 2rem; color: var(--accent-blue); background: rgba(99,102,241,0.1);">
                          <i data-lucide="book-open" style="width: 64px; height: 64px;"></i>
                      </div>
                      <h2 style="font-size: 3.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1.5rem; letter-spacing: -1px;">ONLINE BOOKSHOP SYSTEM</h2>
                      <p style="font-size: 1.25rem; max-width: 800px; margin: 0 auto 2.5rem auto; color: var(--text-secondary); line-height: 1.6;">Design and develop a web-based Online Bookshop System that improves inventory management, automates sales operations, and supports efficient business decision-making.</p>
                      <div style="display: inline-block; padding: 0.75rem 2rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 50px;">
                          <span style="color: var(--text-secondary); font-weight: 500; font-size: 1.1rem;">Case Study: </span>
                          <strong style="color: var(--accent-blue); font-size: 1.1rem;">Bright Multiservices and Tech Solutions</strong>
                      </div>
                  </div>
               </div>\\\`
    },
    {
        eyebrow: "SLIDE 2 — PROJECT TEAM",
        title: "Project Team",
        subtitle: "The research and development team for the Online Bookshop System.",
        html: \\\`<div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; align-items: stretch; width: 100%;">
            <!-- Left Side: Supervisor -->
            <div class="feature-card" style="border-top: 4px solid #f59e0b; text-align: center; padding: 3rem 2rem; background: var(--bg-primary); box-shadow: 0 10px 30px rgba(0,0,0,0.06); border-radius: 16px; display: flex; flex-direction: column; justify-content: center;">
                <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; font-size: 2.5rem; font-weight: 800; box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4); border: 5px solid var(--bg-primary);">AM</div>
                <h3 style="font-size: 1.8rem; color: var(--text-primary); margin-bottom: 0.5rem; font-weight: 800;">Eng. Abdirizack Mohamed</h3>
                <span style="display: inline-block; padding: 0.4rem 1.5rem; background: rgba(245,158,11,0.1); color: #d97706; border-radius: 20px; font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem;">Project Supervisor</span>
            </div>

            <!-- Right Side: Team Members -->
            <div class="feature-card" style="border-top: 4px solid var(--accent-blue); padding: 2rem; background: var(--bg-primary); box-shadow: 0 10px 30px rgba(0,0,0,0.06); border-radius: 16px;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 2rem; font-weight: 700; box-shadow: 0 6px 15px rgba(99, 102, 241, 0.3); border: 4px solid var(--bg-primary);">MM</div>
                    <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.25rem; font-weight: 800;">Mohamed Da’ar Muhumed</h3>
                    <span style="display: inline-block; padding: 0.3rem 1.2rem; background: rgba(99,102,241,0.1); color: var(--accent-blue); border-radius: 20px; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Group Leader</span>
                </div>
                
                <div class="feature-grid" style="grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 700;">RW</div>
                        <h4 style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600; line-height: 1.2;">Rayan Abdinasir<br>Warsame</h4>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 700;">IA</div>
                        <h4 style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600; line-height: 1.2;">Ilyaas Abdi<br>Ahmed</h4>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 700;">WM</div>
                        <h4 style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600; line-height: 1.2;">Wafaa Said<br>Mohamed</h4>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color);">
                        <div style="width: 50px; height: 50px; background: white; border: 2px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 700;">AS</div>
                        <h4 style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600; line-height: 1.2;">Abdirisack Abdi<br>Sheikhdon</h4>
                    </div>
                </div>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 3 — BACKGROUND AND PROBLEM STATEMENT",
        title: "Background and Problem Statement",
        subtitle: "Bright Multiservices and Tech Solutions distributes educational book series to schools, organizations, bookstores, and individual customers.",
        html: \\\`<div style="display: flex; flex-direction: column; gap: 2rem;">
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; text-align: center;">
                <p style="font-size: 1.1rem; color: var(--text-primary);">Before the project, the company used handwritten records and separate spreadsheets.</p>
            </div>
            <div class="feature-grid" style="grid-template-columns: repeat(4, 1fr);">
                <div class="feature-card" style="border-top: 3px solid #ef4444;">
                    <div class="feature-icon" style="color: #ef4444; background: rgba(239, 68, 68, 0.1);"><i data-lucide="package-x"></i></div>
                    <h3 style="font-size: 1.1rem;">Stock Monitoring</h3>
                    <p style="font-size: 0.95rem;">Stock levels and movements were difficult to monitor accurately.</p>
                </div>
                <div class="feature-card" style="border-top: 3px solid #ef4444;">
                    <div class="feature-icon" style="color: #ef4444; background: rgba(239, 68, 68, 0.1);"><i data-lucide="file-x"></i></div>
                    <h3 style="font-size: 1.1rem;">Disconnected Records</h3>
                    <p style="font-size: 0.95rem;">Customer, sales, and payment information was stored separately.</p>
                </div>
                <div class="feature-card" style="border-top: 3px solid #f59e0b;">
                    <div class="feature-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.1);"><i data-lucide="truck"></i></div>
                    <h3 style="font-size: 1.1rem;">Order Coordination</h3>
                    <p style="font-size: 0.95rem;">Online orders and deliveries lacked one tracking process.</p>
                </div>
                <div class="feature-card" style="border-top: 3px solid #f59e0b;">
                    <div class="feature-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.1);"><i data-lucide="clock"></i></div>
                    <h3 style="font-size: 1.1rem;">Delayed Reports</h3>
                    <p style="font-size: 0.95rem;">Reports required manual preparation and were often delayed.</p>
                </div>
            </div>
            <div style="background: rgba(99,102,241,0.05); border-left: 4px solid var(--accent-blue); padding: 1.5rem; border-radius: 0 8px 8px 0;">
                <h4 style="color: var(--accent-blue); font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 700;">Problem Statement</h4>
                <p style="font-size: 1.15rem; color: var(--text-primary); font-weight: 500;">The reliance on manual, disconnected processes results in operational inefficiencies, data loss, delayed reporting, and poor customer experience.</p>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 4 — PROJECT SOLUTION",
        title: "Project Solution",
        subtitle: "A unified, web-based platform to centralize and automate operations.",
        html: \\\`<div class="feature-grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div class="feature-card" style="border-top: 4px solid var(--accent-green); padding: 2.5rem;">
                <div class="feature-icon" style="color: var(--accent-green); background: rgba(16, 185, 129, 0.1); transform: scale(1.2); margin-bottom: 1.5rem;"><i data-lucide="globe"></i></div>
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800;">Web-Based Integration</h3>
                <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.6;">Replacing fragmented spreadsheets with a cloud-accessible portal that connects physical sales with online orders in real-time.</p>
            </div>
            <div class="feature-card" style="border-top: 4px solid var(--accent-blue); padding: 2.5rem;">
                <div class="feature-icon" style="color: var(--accent-blue); background: rgba(99, 102, 241, 0.1); transform: scale(1.2); margin-bottom: 1.5rem;"><i data-lucide="cpu"></i></div>
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800;">Automated Workflows</h3>
                <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.6;">Automating stock deductions, payment tracking, receipt generation, and business reporting to eliminate human error and save time.</p>
            </div>
            <div class="feature-card" style="border-top: 4px solid var(--accent-gold); padding: 2.5rem; grid-column: span 2; display: flex; align-items: center; gap: 2rem;">
                <div class="feature-icon" style="color: var(--accent-gold); background: rgba(245, 158, 11, 0.1); transform: scale(1.5); margin: 0;"><i data-lucide="bar-chart"></i></div>
                <div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 800;">Data-Driven Decisions</h3>
                    <p style="font-size: 1.1rem; color: var(--text-secondary);">Providing management with instantly updated analytics on revenue, popular books, and inventory shortages.</p>
                </div>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 5 — RESEARCH OBJECTIVES",
        title: "Research Objectives",
        subtitle: "General Objective: To design and develop a web-based Online Bookshop System that improves inventory management, automates sales operations, and supports business decision-making.",
        html: \\\`<div class="feature-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 2rem;">
            <div class="feature-card" style="border-top: 4px solid var(--accent-blue); padding: 2rem;">
                <div style="font-size: 3rem; font-weight: 800; color: rgba(99,102,241,0.2); margin-bottom: 1rem; line-height: 1;">01</div>
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary);">Implement Core Modules</h3>
                <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6;">Develop the core modules for inventory control, sales processing, online ordering, and role-based access.</p>
            </div>
            <div class="feature-card" style="border-top: 4px solid var(--accent-gold); padding: 2rem;">
                <div style="font-size: 3rem; font-weight: 800; color: rgba(245,158,11,0.2); margin-bottom: 1rem; line-height: 1;">02</div>
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary);">Validate the System</h3>
                <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6;">Validate the system’s functionality, usability, security, and performance.</p>
            </div>
            <div class="feature-card" style="border-top: 4px solid var(--accent-green); padding: 2rem;">
                <div style="font-size: 3rem; font-weight: 800; color: rgba(16,185,129,0.2); margin-bottom: 1rem; line-height: 1;">03</div>
                <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary);">Generate Reports</h3>
                <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6;">Generate updated reports for inventory, sales, customers, payments, deliveries, and business performance.</p>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 6 — SYSTEM SCOPE",
        title: "System Scope",
        subtitle: "The system provides a comprehensive cycle of integrated operations.",
        html: \\\`<div class="workflow-track" style="margin-bottom: 3rem;">
            <div class="workflow-line"></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="library" style="color: var(--accent-blue);"></i><span class="workflow-label">Catalog</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="archive" style="color: var(--accent-blue);"></i><span class="workflow-label">Inventory</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="shopping-cart" style="color: var(--accent-blue);"></i><span class="workflow-label">Sales</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="users" style="color: var(--accent-blue);"></i><span class="workflow-label">Customers</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="truck" style="color: var(--accent-blue);"></i><span class="workflow-label">Fulfilment</span></div>
            <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="pie-chart" style="color: var(--accent-blue);"></i><span class="workflow-label">Reports</span></div>
        </div>
        <div class="feature-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="feature-card" style="padding: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 0.5rem;"><i data-lucide="library" style="width: 18px; height: 18px; display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> Catalog Management</h3>
                <p style="font-size: 0.95rem;">Books, categories, brands, variants, and prices.</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 0.5rem;"><i data-lucide="archive" style="width: 18px; height: 18px; display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> Inventory Operations</h3>
                <p style="font-size: 0.95rem;">Warehouses, stock balances, movements, transfers, and adjustments.</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 0.5rem;"><i data-lucide="shopping-cart" style="width: 18px; height: 18px; display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> Sales and Orders</h3>
                <p style="font-size: 0.95rem;">Point of Sale, quotations, sales, online orders, and returns.</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 0.5rem;"><i data-lucide="users" style="width: 18px; height: 18px; display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> Customer Services</h3>
                <p style="font-size: 0.95rem;">Customers, sponsors, payment records, and order tracking.</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 0.5rem;"><i data-lucide="truck" style="width: 18px; height: 18px; display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> Order Fulfilment</h3>
                <p style="font-size: 0.95rem;">Store pickup, delivery assignments, delivery status, and notifications.</p>
            </div>
            <div class="feature-card" style="padding: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 0.5rem;"><i data-lucide="settings" style="width: 18px; height: 18px; display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> Administration & Reports</h3>
                <p style="font-size: 0.95rem;">Users, roles, permissions, dashboards, and business reports.</p>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 7 — METHODOLOGY AND TECH USED",
        title: "Methodology and Tech Used",
        subtitle: "Rapid Application Development (RAD) approach allowed for fast prototyping and iterative feedback.",
        html: \\\`<div style="display: flex; flex-direction: column; gap: 2rem;">
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; text-align: center;">
                <div class="workflow-track" style="margin-bottom: 0;">
                    <div class="workflow-line"></div>
                    <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="clipboard-list" style="color: var(--accent-blue);"></i><span class="workflow-label">Requirements Planning</span></div>
                    <div class="workflow-node active" style="border-color: var(--accent-gold);"><i data-lucide="pen-tool" style="color: var(--accent-gold);"></i><span class="workflow-label">User Design</span></div>
                    <div class="workflow-node active" style="border-color: var(--accent-green);"><i data-lucide="code" style="color: var(--accent-green);"></i><span class="workflow-label">Construction</span></div>
                    <div class="workflow-node active" style="border-color: #8b5cf6;"><i data-lucide="server" style="color: #8b5cf6;"></i><span class="workflow-label">Implementation</span></div>
                </div>
            </div>
            <div>
                <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 1rem; text-align: center;">Technology Stack Overview</h3>
                <div class="feature-grid" style="grid-template-columns: repeat(4, 1fr);">
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid var(--accent-blue);">
                        <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1);"><i data-lucide="layout"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Frontend</h4>
                        <p style="font-size: 0.95rem; color: var(--text-secondary);">Next.js, Tailwind CSS</p>
                    </div>
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid var(--accent-gold);">
                        <div class="feature-icon" style="color: var(--accent-gold); margin: 0 auto 1rem auto; background: rgba(245,158,11,0.1);"><i data-lucide="cpu"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Backend API</h4>
                        <p style="font-size: 0.95rem; color: var(--text-secondary);">Node.js, Express.js</p>
                    </div>
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid var(--accent-green);">
                        <div class="feature-icon" style="color: var(--accent-green); margin: 0 auto 1rem auto; background: rgba(16,185,129,0.1);"><i data-lucide="database"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Database</h4>
                        <p style="font-size: 0.95rem; color: var(--text-secondary);">PostgreSQL, Prisma ORM</p>
                    </div>
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid #8b5cf6;">
                        <div class="feature-icon" style="color: #8b5cf6; margin: 0 auto 1rem auto; background: rgba(139,92,246,0.1);"><i data-lucide="server"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Deployment</h4>
                        <p style="font-size: 0.95rem; color: var(--text-secondary);">Vercel & Railway App</p>
                    </div>
                </div>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 8 — SYSTEM ARCHITECTURE",
        title: "System Architecture",
        subtitle: "A modern multi-tier architecture ensuring scalability, security, and performance.",
        html: \\\`<div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
            
            <!-- Client Layer -->
            <div style="width: 100%; max-width: 800px; border: 2px dashed var(--accent-blue); padding: 1.5rem; border-radius: 12px; position: relative; background: rgba(99,102,241,0.03);">
                <div style="position: absolute; top: -14px; left: 20px; background: var(--bg-primary); padding: 0 10px; color: var(--accent-blue); font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">1. Client / Presentation Layer</div>
                <div style="display: flex; justify-content: space-around;">
                    <div style="text-align: center;"><i data-lucide="monitor" style="width: 40px; height: 40px; color: var(--text-primary); margin-bottom: 0.5rem;"></i><br><span style="font-weight: 600;">Admin Dashboard</span></div>
                    <div style="text-align: center;"><i data-lucide="smartphone" style="width: 40px; height: 40px; color: var(--text-primary); margin-bottom: 0.5rem;"></i><br><span style="font-weight: 600;">Customer Portal</span></div>
                    <div style="text-align: center;"><i data-lucide="shopping-bag" style="width: 40px; height: 40px; color: var(--text-primary); margin-bottom: 0.5rem;"></i><br><span style="font-weight: 600;">POS Terminal</span></div>
                </div>
            </div>

            <i data-lucide="arrow-down" style="color: var(--text-secondary);"></i>

            <!-- Application Layer -->
            <div style="width: 100%; max-width: 800px; border: 2px dashed var(--accent-gold); padding: 1.5rem; border-radius: 12px; position: relative; background: rgba(245,158,11,0.03);">
                <div style="position: absolute; top: -14px; left: 20px; background: var(--bg-primary); padding: 0 10px; color: var(--accent-gold); font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">2. Application / Business Logic Layer</div>
                <div style="display: flex; justify-content: space-around;">
                    <div style="text-align: center; background: white; padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);"><span style="font-weight: 600; color: #d97706;">Auth & Authz</span></div>
                    <div style="text-align: center; background: white; padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);"><span style="font-weight: 600; color: #d97706;">Inventory Engine</span></div>
                    <div style="text-align: center; background: white; padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);"><span style="font-weight: 600; color: #d97706;">Sales & Orders</span></div>
                    <div style="text-align: center; background: white; padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);"><span style="font-weight: 600; color: #d97706;">Reporting</span></div>
                </div>
            </div>

            <i data-lucide="arrow-down" style="color: var(--text-secondary);"></i>

            <!-- Data Layer -->
            <div style="width: 100%; max-width: 800px; border: 2px dashed var(--accent-green); padding: 1.5rem; border-radius: 12px; position: relative; background: rgba(16,185,129,0.03);">
                <div style="position: absolute; top: -14px; left: 20px; background: var(--bg-primary); padding: 0 10px; color: var(--accent-green); font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">3. Data Access Layer</div>
                <div style="display: flex; justify-content: center; gap: 3rem;">
                    <div style="text-align: center;"><i data-lucide="database" style="width: 48px; height: 48px; color: var(--accent-green); margin-bottom: 0.5rem;"></i><br><span style="font-weight: 600;">PostgreSQL Relational DB</span></div>
                    <div style="text-align: center;"><i data-lucide="image" style="width: 48px; height: 48px; color: var(--accent-green); margin-bottom: 0.5rem;"></i><br><span style="font-weight: 600;">Cloud Storage (Images)</span></div>
                </div>
            </div>

        </div>\\\`
    },
    {
        eyebrow: "SLIDE 9 — SYSTEM USERS",
        title: "System Users",
        subtitle: "Role-Based Access Control tailors the experience to specific actors.",
        html: \\\`<div class="feature-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 2rem;">
            <div class="feature-card" style="text-align: center; padding: 2rem 1.5rem; border-top: 4px solid var(--accent-blue);">
                <div class="feature-icon" style="color: var(--accent-blue); background: rgba(99,102,241,0.1); margin: 0 auto 1.5rem auto; transform: scale(1.2);"><i data-lucide="shield"></i></div>
                <h3 style="font-size: 1.3rem; margin-bottom: 1rem; font-weight: 800;">Administrator</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">Full access to manage users, settings, inventory, and view all executive reports.</p>
            </div>
            <div class="feature-card" style="text-align: center; padding: 2rem 1.5rem; border-top: 4px solid var(--accent-gold);">
                <div class="feature-icon" style="color: var(--accent-gold); background: rgba(245,158,11,0.1); margin: 0 auto 1.5rem auto; transform: scale(1.2);"><i data-lucide="briefcase"></i></div>
                <h3 style="font-size: 1.3rem; margin-bottom: 1rem; font-weight: 800;">Sales Staff</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">Access to POS, physical orders, online order fulfillment, and basic inventory checks.</p>
            </div>
            <div class="feature-card" style="text-align: center; padding: 2rem 1.5rem; border-top: 4px solid var(--accent-green);">
                <div class="feature-icon" style="color: var(--accent-green); background: rgba(16,185,129,0.1); margin: 0 auto 1.5rem auto; transform: scale(1.2);"><i data-lucide="truck"></i></div>
                <h3 style="font-size: 1.3rem; margin-bottom: 1rem; font-weight: 800;">Delivery Staff</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">Access restricted to viewing assigned orders and updating delivery statuses.</p>
            </div>
            <div class="feature-card" style="text-align: center; padding: 2rem 1.5rem; border-top: 4px solid #8b5cf6;">
                <div class="feature-icon" style="color: #8b5cf6; background: rgba(139,92,246,0.1); margin: 0 auto 1.5rem auto; transform: scale(1.2);"><i data-lucide="users"></i></div>
                <h3 style="font-size: 1.3rem; margin-bottom: 1rem; font-weight: 800;">Online Customer</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">Public storefront access to browse books, place orders, and track history.</p>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 10 — RESULT AND IMPLEMENTATIONS",
        title: "Result and Implementations",
        subtitle: "The system successfully connects all primary workflows into one seamless platform.",
        html: \\\`<div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; align-items: center;">
            <div style="background: #fff; border: 1px solid var(--border-color); border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden; display: flex; flex-direction: column;">
                <div style="background: var(--bg-secondary); padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.5rem;">
                    <div style="width: 12px; height: 12px; background: #ef4444; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 12px; background: #f59e0b; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 12px; background: #10b981; border-radius: 50%;"></div>
                    <div style="margin-left: 1rem; background: #fff; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.25rem 2rem; font-size: 0.7rem; color: var(--text-secondary);">system.brightmts.com/dashboard</div>
                </div>
                <div style="padding: 1.5rem; display: grid; grid-template-columns: 150px 1fr; gap: 1.5rem;">
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div style="height: 24px; background: rgba(99,102,241,0.1); border-radius: 4px; width: 100%;"></div>
                        <div style="height: 24px; background: var(--bg-secondary); border-radius: 4px; width: 80%;"></div>
                        <div style="height: 24px; background: var(--bg-secondary); border-radius: 4px; width: 90%;"></div>
                        <div style="height: 24px; background: var(--bg-secondary); border-radius: 4px; width: 75%;"></div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                            <div style="height: 60px; background: var(--bg-secondary); border-radius: 8px;"></div>
                            <div style="height: 60px; background: var(--bg-secondary); border-radius: 8px;"></div>
                            <div style="height: 60px; background: var(--bg-secondary); border-radius: 8px;"></div>
                        </div>
                        <div style="height: 120px; background: rgba(16,185,129,0.05); border: 1px dashed rgba(16,185,129,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--accent-green); font-weight: 500;">
                            <i data-lucide="bar-chart-2" style="margin-right: 0.5rem;"></i> Live Reports Overview
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div style="color: var(--accent-blue); background: rgba(99,102,241,0.1); padding: 0.5rem; border-radius: 8px;"><i data-lucide="layers" style="width: 20px; height: 20px;"></i></div>
                    <div>
                        <h3 style="font-size: 1.05rem; margin-bottom: 0.1rem; color: var(--accent-blue);">Integrated</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Modules were completed and connected centrally.</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div style="color: var(--accent-blue); background: rgba(99,102,241,0.1); padding: 0.5rem; border-radius: 8px;"><i data-lucide="git-merge" style="width: 20px; height: 20px;"></i></div>
                    <div>
                        <h3 style="font-size: 1.05rem; margin-bottom: 0.1rem; color: var(--accent-blue);">Connected</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Sales, orders, and inventory now share live information.</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div style="color: var(--accent-blue); background: rgba(99,102,241,0.1); padding: 0.5rem; border-radius: 8px;"><i data-lucide="check-circle" style="width: 20px; height: 20px;"></i></div>
                    <div>
                        <h3 style="font-size: 1.05rem; margin-bottom: 0.1rem; color: var(--accent-blue);">Validated</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Testing confirmed that main workflows produce expected results.</p>
                    </div>
                </div>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 11 — CONCLUSION",
        title: "Conclusion",
        subtitle: "The Online Bookshop System successfully transitions BrightMTS to a digital-first operation.",
        html: \\\`<div style="display: flex; flex-direction: column; gap: 2rem;">
            <div class="feature-grid" style="grid-template-columns: repeat(5, 1fr); margin-bottom: 1rem;">
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="folder"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Improved the organization of business information.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="package-check"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Supported live stock monitoring & transaction tracking.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="monitor-smartphone"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Connected physical sales with online ordering.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="refresh-cw"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Coordinated payments, fulfillment, and delivery.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="bar-chart-2"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Provided updated reports for management.</p>
                </div>
            </div>
            <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 1.5rem; text-align: center;">
                <p style="font-size: 1.3rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> The project achieved all its objectives within the defined scope.</p>
            </div>
        </div>\\\`
    },
    {
        eyebrow: "SLIDE 12 — ONE SCENARIO PRACTICAL",
        title: "Live System Demonstration",
        subtitle: "Experience the system workflow from registration to delivery and reporting.",
        html: \\\`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 3rem; text-align: center; padding: 2rem;">
            <div style="width: 120px; height: 120px; background: rgba(99, 102, 241, 0.1); color: var(--accent-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                <i data-lucide="play-circle" style="width: 64px; height: 64px;"></i>
            </div>
            <div>
                <h3 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">Let's see it in action</h3>
                <p style="font-size: 1.2rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto;">We will now demonstrate a practical scenario showing how a customer interacts with the system, and how the staff manages the operations in the background.</p>
            </div>
            <button onclick="document.querySelector('[data-target=\\\'overview\\\']').click()" class="primary-btn" style="font-size: 1.2rem; padding: 1rem 3rem; margin-top: 1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; background: var(--accent-blue); color: white; border: none; border-radius: 8px; font-weight: 600; box-shadow: 0 4px 15px rgba(99,102,241,0.4);">
                Start Practical Scenario <i data-lucide="arrow-right"></i>
            </button>
        </div>\\\`
    }
];`;

const scriptsPath = 'd:/graduation/presentation/csjs/scripts.js';
const updatePath = 'd:/graduation/presentation/update.py';

// Update scripts.js
let scriptsContent = fs.readFileSync(scriptsPath, 'utf8');
const appLogicIndex = scriptsContent.indexOf('// App Logic');
if (appLogicIndex !== -1) {
    scriptsContent = SLIDES + '\n\n' + scriptsContent.substring(appLogicIndex);
    fs.writeFileSync(scriptsPath, scriptsContent, 'utf8');
    console.log('Updated scripts.js');
}

// Update update.py
let updateContent = fs.readFileSync(updatePath, 'utf8');
const slidesContentIndex = updateContent.indexOf('const SLIDES = [');
const pyAppLogicIndex = updateContent.indexOf('// App Logic');
if (slidesContentIndex !== -1 && pyAppLogicIndex !== -1) {
    updateContent = updateContent.substring(0, slidesContentIndex) + SLIDES + '\\n"""\n    new_content = slides_content + content[app_logic_index:]' + updateContent.substring(updateContent.indexOf('    new_content = slides_content + content[app_logic_index:]') + 60);
    // Actually, writing python string escaping is hard via script. I will just run a python script to do it.
    console.log('Use python script for update.py instead, it is safer for escaping.');
}

