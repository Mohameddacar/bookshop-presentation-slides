import sys
import re

def modify_file():
    with open('d:/graduation/presentation/csjs/scripts.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    app_logic_index = content.find('// App Logic')
    
    if app_logic_index == -1:
        print('Could not find // App Logic')
        return
        
    slides_content = """const SLIDES = [
    {
        eyebrow: "SLIDE 1 — TITLE",
        title: "ONLINE BOOKSHOP SYSTEM",
        subtitle: "A web-based platform for managing books, inventory, sales, online orders, payments, deliveries, and reports.",
        html: `<div class="feature-grid" style="grid-template-columns: 1fr; text-align: center;">
                  <div class="feature-card" style="border-top: 4px solid var(--accent-blue); padding: 4rem 2rem;">
                      <div class="feature-icon" style="transform: scale(1.5); margin-bottom: 2rem; color: var(--accent-blue); background: rgba(99,102,241,0.1);">
                          <i data-lucide="book-open" style="width: 64px; height: 64px;"></i>
                      </div>
                      <h2 style="font-size: 3rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1.5rem; letter-spacing: -1px;">ONLINE BOOKSHOP SYSTEM</h2>
                      <p style="font-size: 1.25rem; max-width: 800px; margin: 0 auto 2.5rem auto; color: var(--text-secondary); line-height: 1.6;">A web-based platform for managing books, inventory, sales, online orders, payments, deliveries, and reports.</p>
                      <div style="display: inline-block; padding: 0.75rem 2rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 50px;">
                          <span style="color: var(--text-secondary); font-weight: 500; font-size: 1.1rem;">Case Study: </span>
                          <strong style="color: var(--accent-blue); font-size: 1.1rem;">Bright Multiservices and Tech Solutions</strong>
                      </div>
                  </div>
               </div>`
    },
    {
        eyebrow: "SLIDE 2 — PROJECT TEAM",
        title: "Project Team",
        subtitle: "The research and development team for the Online Bookshop System.",
        html: `<div style="display: flex; flex-direction: column; align-items: center; gap: 2rem;">
            <div class="feature-card" style="border-top: 4px solid var(--accent-blue); text-align: center; padding: 2rem; width: 100%; max-width: 400px; background: rgba(99,102,241,0.03);">
                <div style="width: 80px; height: 80px; background: var(--accent-blue); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 2rem; font-weight: 700;">MM</div>
                <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.25rem;">Mohamed Da’ar Muhumed</h3>
                <span style="display: inline-block; padding: 0.25rem 1rem; background: rgba(99,102,241,0.1); color: var(--accent-blue); border-radius: 20px; font-size: 0.9rem; font-weight: 600;">Team Leader</span>
            </div>
            <div class="feature-grid" style="grid-template-columns: repeat(4, 1fr); width: 100%; gap: 1.5rem;">
                <div class="feature-card" style="text-align: center; padding: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; font-weight: 600;">RW</div>
                    <h4 style="font-size: 1.1rem; color: var(--text-primary);">Rayan Abdinasir<br>Warsame</h4>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; font-weight: 600;">IA</div>
                    <h4 style="font-size: 1.1rem; color: var(--text-primary);">Ilyaas Abdi<br>Ahmed</h4>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; font-weight: 600;">WM</div>
                    <h4 style="font-size: 1.1rem; color: var(--text-primary);">Wafaa Said<br>Mohamed</h4>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; font-weight: 600;">AS</div>
                    <h4 style="font-size: 1.1rem; color: var(--text-primary);">Abdirisack Abdi<br>Sheikhdon</h4>
                </div>
            </div>
        </div>`
    },
    {
        eyebrow: "SLIDE 3 — BACKGROUND AND PROBLEM GAP",
        title: "Background and Problem Gap",
        subtitle: "Bright Multiservices and Tech Solutions distributes the Magic Pearls and Kokos AI educational book series to schools, organizations, bookstores, and individual customers.",
        html: `<div style="display: flex; flex-direction: column; gap: 2rem;">
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
                <h4 style="color: var(--accent-blue); font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 700;">Identified Gap</h4>
                <p style="font-size: 1.15rem; color: var(--text-primary); font-weight: 500;">The company needed one web-based system that connected its main business activities.</p>
            </div>
        </div>`
    },
    {
        eyebrow: "SLIDE 4 — RESEARCH OBJECTIVES",
        title: "Research Objectives",
        subtitle: "General Objective: To design and develop a web-based Online Bookshop System that improves inventory management, automates sales operations, and supports business decision-making.",
        html: `<div class="feature-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 2rem;">
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
        </div>`
    },
    {
        eyebrow: "SLIDE 5 — SYSTEM SCOPE",
        title: "System Scope",
        subtitle: "The system provides a comprehensive cycle of integrated operations.",
        html: `<div class="workflow-track" style="margin-bottom: 3rem;">
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
        </div>`
    },
    {
        eyebrow: "SLIDE 6 — DEVELOPMENT APPROACH AND TECHNOLOGY",
        title: "Development Approach and Technology",
        subtitle: "Requirement Collection: Interviews, observation, and document review.",
        html: `<div style="display: flex; flex-direction: column; gap: 2rem;">
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; text-align: center;">
                <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 1.5rem;">Development Method: <span style="color: var(--accent-blue);">Rapid Application Development</span></h3>
                <div class="workflow-track" style="margin-bottom: 0;">
                    <div class="workflow-line"></div>
                    <div class="workflow-node active" style="border-color: var(--accent-blue);"><i data-lucide="clipboard-list" style="color: var(--accent-blue);"></i><span class="workflow-label">Requirements Planning</span></div>
                    <div class="workflow-node active" style="border-color: var(--accent-gold);"><i data-lucide="pen-tool" style="color: var(--accent-gold);"></i><span class="workflow-label">User Design</span></div>
                    <div class="workflow-node active" style="border-color: var(--accent-green);"><i data-lucide="code" style="color: var(--accent-green);"></i><span class="workflow-label">Construction</span></div>
                    <div class="workflow-node active" style="border-color: #8b5cf6;"><i data-lucide="server" style="color: #8b5cf6;"></i><span class="workflow-label">Implementation</span></div>
                </div>
            </div>
            <div>
                <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 1rem; text-align: center;">Technology Stack Architecture</h3>
                <div class="feature-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid var(--accent-blue);">
                        <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1);"><i data-lucide="monitor"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Presentation Layer</h4>
                        <p style="font-size: 1rem; color: var(--text-secondary);">Next.js, TypeScript, Tailwind CSS, and shadcn/ui</p>
                    </div>
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid var(--accent-gold);">
                        <div class="feature-icon" style="color: var(--accent-gold); margin: 0 auto 1rem auto; background: rgba(245,158,11,0.1);"><i data-lucide="cpu"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Application Layer</h4>
                        <p style="font-size: 1rem; color: var(--text-secondary);">Node.js and Express.js</p>
                    </div>
                    <div class="feature-card" style="text-align: center; padding: 1.5rem; border-top: 4px solid var(--accent-green);">
                        <div class="feature-icon" style="color: var(--accent-green); margin: 0 auto 1rem auto; background: rgba(16,185,129,0.1);"><i data-lucide="database"></i></div>
                        <h4 style="font-weight:700; margin-bottom: 0.5rem;">Database Layer</h4>
                        <p style="font-size: 1rem; color: var(--text-secondary);">PostgreSQL and Prisma ORM</p>
                    </div>
                </div>
            </div>
        </div>`
    },
    {
        eyebrow: "SLIDE 7 — IMPLEMENTATION AND VALIDATION RESULTS",
        title: "Implementation and Validation Results",
        subtitle: "The system connects all primary workflows into one seamless platform.",
        html: `<div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; align-items: center;">
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
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">The planned modules were completed and connected through one centralized database.</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div style="color: var(--accent-blue); background: rgba(99,102,241,0.1); padding: 0.5rem; border-radius: 8px;"><i data-lucide="git-merge" style="width: 20px; height: 20px;"></i></div>
                    <div>
                        <h3 style="font-size: 1.05rem; margin-bottom: 0.1rem; color: var(--accent-blue);">Connected</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Sales, orders, payments, inventory, deliveries, and reports share information.</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div style="color: var(--accent-blue); background: rgba(99,102,241,0.1); padding: 0.5rem; border-radius: 8px;"><i data-lucide="shield-check" style="width: 20px; height: 20px;"></i></div>
                    <div>
                        <h3 style="font-size: 1.05rem; margin-bottom: 0.1rem; color: var(--accent-blue);">Controlled</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Authentication, validation, and Role-Based Access protect functions.</p>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div style="color: var(--accent-blue); background: rgba(99,102,241,0.1); padding: 0.5rem; border-radius: 8px;"><i data-lucide="check-circle" style="width: 20px; height: 20px;"></i></div>
                    <div>
                        <h3 style="font-size: 1.05rem; margin-bottom: 0.1rem; color: var(--accent-blue);">Validated</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Testing confirmed that main workflows produced expected results.</p>
                    </div>
                </div>
                <div style="background: rgba(16,185,129,0.05); border-left: 3px solid var(--accent-green); padding: 0.75rem 1rem;">
                    <p style="font-size: 0.9rem; color: var(--text-secondary);"><strong>Reporting:</strong> The system generates updated inventory, sales, customer, payment, order, and delivery reports.</p>
                </div>
            </div>
        </div>`
    },
    {
        eyebrow: "SLIDE 8 — CONCLUSION",
        title: "Conclusion",
        subtitle: "The Online Bookshop System replaced fragmented manual records with one integrated web-based platform.",
        html: `<div style="display: flex; flex-direction: column; gap: 2rem;">
            <div class="feature-grid" style="grid-template-columns: repeat(5, 1fr); margin-bottom: 1rem;">
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="folder"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Improved the organization of business information.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="package-check"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Supported stock monitoring and transaction recording.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="monitor-smartphone"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Connected physical sales with online ordering.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="refresh-cw"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Coordinated payment records, order fulfilment, and delivery.</p>
                </div>
                <div class="feature-card" style="text-align: center; padding: 1.25rem;">
                    <div class="feature-icon" style="color: var(--accent-blue); margin: 0 auto 1rem auto; background: rgba(99,102,241,0.1); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i data-lucide="bar-chart-2"></i></div>
                    <p style="font-size: 0.9rem; font-weight: 500;">Provided updated reports for management.</p>
                </div>
            </div>
            <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 1rem; text-align: center;">
                <p style="font-size: 1.1rem; color: var(--accent-green); font-weight: 600;"><i data-lucide="check-circle" style="display: inline; vertical-align: text-bottom; margin-right: 0.25rem;"></i> The project achieved its objectives within the defined study scope.</p>
            </div>
            <div style="text-align: center; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
                <h2 style="font-size: 2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Live System Demonstration</h2>
                <p style="font-size: 1.1rem; color: var(--text-secondary);">Registration, book search, online ordering, payment, delivery, and reports.</p>
            </div>
        </div>`
    }
];

"""
    new_content = slides_content + content[app_logic_index:]
    
    # Remove setupSimulator
    new_content = re.sub(r'\s*// Attach Simulator Logic if on Slide 8.*?if \(index === 7\) {\s*setupSimulator\(\);\s*}', '', new_content, flags=re.DOTALL)
    new_content = re.sub(r'// Live Simulator Logic.*?function setupSimulator\(\) \{.*$', '', new_content, flags=re.DOTALL)
    
    with open('d:/graduation/presentation/csjs/scripts.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
modify_file()
