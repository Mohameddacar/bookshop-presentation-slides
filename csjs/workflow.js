const walkInSteps = [
    { id: 1, title: "Customer Arrives", description: "The customer visits the bookshop and requests one or more books. The sales staff opens a new POS transaction.", actor: "Walk-in Customer and Sales Staff", module: "Point of Sale", action: "Customer requests books; staff opens POS.", systemResponse: "A new unsaved sales transaction is prepared.", recordsAffected: ["Sale"], icon: "users", statusColour: "pending" },
    { id: 2, title: "Search for Books", description: "The sales staff searches by book title, ISBN, or barcode and checks the available stock.", actor: "Sales Staff", module: "Books and Inventory", action: "Search for books by title, ISBN, or barcode.", systemResponse: "The system displays matching books, prices, and available quantities.", recordsAffected: [], icon: "search", statusColour: "pending" },
    { id: 3, title: "Add Books to the Sale", description: "The selected books and quantities are added to the POS cart.", actor: "Sales Staff", module: "Point of Sale", action: "Add selected books to POS cart.", systemResponse: "The system calculates the transaction total and prevents quantities greater than available stock.", recordsAffected: ["Cart"], icon: "shopping-cart", statusColour: "pending" },
    { id: 4, title: "Select the Customer", description: "The staff selects an existing customer, registers a new customer when necessary, or continues as a walk-in customer.", actor: "Sales Staff", module: "Customers", action: "Select or register customer.", systemResponse: "The customer information is connected to the transaction where applicable.", recordsAffected: ["Customer"], icon: "user-check", statusColour: "pending" },
    { id: 5, title: "Record Payment", description: "The staff selects the accepted payment method and records the payment details.", actor: "Sales or Payment Staff", module: "Payments", action: "Record accepted payment details.", systemResponse: "The system validates the payment information before completing the sale.", recordsAffected: ["Payment"], icon: "credit-card", statusColour: "pending" },
    { id: 6, title: "Complete the Sale", description: "The staff confirms the completed transaction.", actor: "Sales Staff", module: "Sales and Inventory", action: "Confirm the transaction.", systemResponse: "The system saves the sale, records the payment, reduces the sold quantities, and creates the related stock-movement records.", recordsAffected: ["Sale", "Payment", "Inventory", "Stock Movement"], icon: "check-circle", statusColour: "success" },
    { id: 7, title: "Generate Receipt", description: "The completed sale is displayed and a receipt can be printed or reviewed.", actor: "Sales Staff", module: "Receipts", action: "Print or review receipt.", systemResponse: "The receipt contains the customer, books, quantities, payment, and transaction totals.", recordsAffected: ["Receipt"], icon: "receipt", statusColour: "success" },
    { id: 8, title: "Update Reports", description: "The completed transaction becomes available in the relevant reports.", actor: "Administrator and Management", module: "Reports", action: "View updated reports.", systemResponse: "The system updates the Sales, Products, Inventory, Customers, Payments, and Business Summary reports.", recordsAffected: ["Reports"], icon: "pie-chart", statusColour: "success" }
];

const onlineSteps = [
    { id: 1, title: "Customer Registration", description: "The customer creates an account or signs in using an existing account.", actor: "Online Customer", module: "Customer Portal", action: "Create account or sign in.", systemResponse: "The system validates the customer’s information and opens the customer portal.", recordsAffected: ["Customer"], icon: "user-plus", statusColour: "pending" },
    { id: 2, title: "Search and Browse Books", description: "The customer searches or filters the available books and opens a book to view its information.", actor: "Online Customer", module: "Book Catalogue", action: "Search, filter, and view book details.", systemResponse: "The system displays book details, price, and availability.", recordsAffected: [], icon: "search", statusColour: "pending" },
    { id: 3, title: "Add Books to Cart", description: "The customer adds the required books and quantities to the shopping cart.", actor: "Online Customer", module: "Shopping Cart", action: "Add books to cart.", systemResponse: "The system calculates the order total and validates the requested quantities.", recordsAffected: ["Cart"], icon: "shopping-cart", statusColour: "pending" },
    { id: 4, title: "Enter Delivery Information", description: "The customer confirms contact information, delivery address, and order details.", actor: "Online Customer", module: "Checkout", action: "Confirm delivery details.", systemResponse: "The system validates the required checkout information.", recordsAffected: [], icon: "map-pin", statusColour: "pending" },
    { id: 5, title: "Place the Order", description: "The customer confirms and submits the online order.", actor: "Online Customer", module: "Online Orders", action: "Submit order.", systemResponse: "The system creates the order with its initial status and displays an order reference.", recordsAffected: ["Order"], icon: "send", statusColour: "pending" },
    { id: 6, title: "Record Payment Information", description: "The customer provides the required payment reference or information. Authorized staff review and verify the payment where necessary.", actor: "Online Customer and Authorized Staff", module: "Payments", action: "Provide payment reference.", systemResponse: "The payment record is connected to the correct online order.", recordsAffected: ["Payment"], icon: "credit-card", statusColour: "pending" },
    { id: 7, title: "Confirm and Prepare the Order", description: "The sales staff reviews the order, confirms the books, and prepares the order for fulfilment.", actor: "Sales Staff", module: "Online Order Management", action: "Review and confirm order.", systemResponse: "The order status and related inventory records are updated according to the implemented business rules.", recordsAffected: ["Order", "Inventory", "Stock Movement"], icon: "package-check", statusColour: "success" },
    { id: 8, title: "Assign Delivery", description: "An available delivery staff member is assigned to the confirmed order.", actor: "Administrator or Authorized Staff", module: "Delivery Management", action: "Assign delivery staff.", systemResponse: "The system creates the delivery assignment and notifies the relevant user.", recordsAffected: ["Delivery", "Notification"], icon: "truck", statusColour: "pending" },
    { id: 9, title: "Update Delivery Status", description: "Delivery staff review the assignment and update its status from assigned to in transit and delivered. Any delivery incident can also be recorded.", actor: "Delivery Staff", module: "Delivery Portal", action: "Update delivery status.", systemResponse: "The customer and authorized staff can follow the current delivery status.", recordsAffected: ["Delivery"], icon: "map", statusColour: "success" },
    { id: 10, title: "Generate Reports", description: "The completed online transaction becomes available in the operational and management reports.", actor: "Administrator and Management", module: "Reports", action: "View reports.", systemResponse: "The system updates the Customers, Orders, Sales, Payments, Products, Inventory, Deliveries, and Business Summary reports.", recordsAffected: ["Reports"], icon: "bar-chart-2", statusColour: "success" }
];

class WorkflowApp {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.state = {
            journey: null, // 'walkIn' | 'online'
            currentStepIndex: 0,
            isPlaying: false,
            isCompleted: false
        };
        this.timer = null;
        this.handleKeyDown = this.handleKeyDown.bind(this);
        document.addEventListener('keydown', this.handleKeyDown);
        this.render();
    }

    getSteps() {
        return this.state.journey === 'walkIn' ? walkInSteps : onlineSteps;
    }

    getJourneyName() {
        return this.state.journey === 'walkIn' ? 'Walk-in Customer Workflow' : 'Online Customer Workflow';
    }

    setJourney(journey) {
        this.stopAutoPlay();
        this.state.journey = journey;
        this.state.currentStepIndex = 0;
        this.state.isCompleted = false;
        this.render();
    }

    nextStep() {
        const steps = this.getSteps();
        if (this.state.currentStepIndex < steps.length - 1) {
            this.state.currentStepIndex++;
            this.render();
        } else if (!this.state.isCompleted) {
            this.state.isCompleted = true;
            this.stopAutoPlay();
            this.render();
        }
    }

    prevStep() {
        if (this.state.isCompleted) {
            this.state.isCompleted = false;
            this.render();
        } else if (this.state.currentStepIndex > 0) {
            this.state.currentStepIndex--;
            this.render();
        }
    }

    toggleAutoPlay() {
        if (this.state.isPlaying) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
        this.render();
    }

    startAutoPlay() {
        if (this.state.isCompleted) return;
        this.state.isPlaying = true;
        this.timer = setInterval(() => {
            this.nextStep();
        }, 4000);
    }

    stopAutoPlay() {
        this.state.isPlaying = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    restart() {
        this.stopAutoPlay();
        this.state.currentStepIndex = 0;
        this.state.isCompleted = false;
        this.render();
    }

    handleKeyDown(e) {
        const overviewView = document.getElementById('overview-view');
        if (!overviewView || !overviewView.classList.contains('active')) return;
        if (!this.state.journey) return;
        
        if (e.key === 'ArrowRight') {
            this.stopAutoPlay();
            this.nextStep();
            this.render();
        } else if (e.key === 'ArrowLeft') {
            this.stopAutoPlay();
            this.prevStep();
            this.render();
        }
    }

    openReports() {
        const reportBtn = document.querySelector('[data-target="reports"]');
        if (reportBtn) reportBtn.click();
    }

    render() {
        if (!this.root) return;
        
        if (!this.state.journey) {
            this.root.innerHTML = this.renderJourneySelector();
        } else if (this.state.isCompleted) {
            this.root.innerHTML = this.renderWorkflowCompletion();
        } else {
            this.root.innerHTML = this.renderWorkflowPlayer();
        }
        
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Attach event listeners
        this.attachListeners();
    }

    renderJourneySelector() {
        return `
            <div class="workflow-container">
                <div class="wf-header">
                    <h2>How the Online Bookshop System Works</h2>
                    <p>Choose a customer journey to see how book selection, ordering, payment, inventory, delivery, and reporting are managed through one integrated system.</p>
                </div>
                <div class="journey-selector">
                    <div class="journey-card">
                        <div class="journey-icon"><i data-lucide="users"></i></div>
                        <h3>Walk-in Customer</h3>
                        <p>A customer visits the bookshop, selects books, completes payment through the Point of Sale, and receives a receipt.</p>
                        <button class="wf-btn" data-action="start-walkin">Start Walk-in Workflow</button>
                    </div>
                    <div class="journey-card">
                        <div class="journey-icon"><i data-lucide="globe"></i></div>
                        <h3>Online Customer</h3>
                        <p>A customer registers, searches for books, places an online order, records payment information, and tracks delivery.</p>
                        <button class="wf-btn" data-action="start-online">Start Online Workflow</button>
                    </div>
                </div>
            </div>
        `;
    }

    renderWorkflowPlayer() {
        const steps = this.getSteps();
        const currentStep = steps[this.state.currentStepIndex];
        const progressPercentage = ((this.state.currentStepIndex) / (steps.length - 1)) * 100;
        
        const isFirst = this.state.currentStepIndex === 0;
        
        return `
            <div class="workflow-container">
                <div class="wf-player">
                    <div class="wf-player-header">
                        <div class="wf-journey-title">${this.getJourneyName()}</div>
                        <div class="wf-step-counter">Step ${currentStep.id} of ${steps.length}</div>
                    </div>
                    
                    <div class="wf-progress-container">
                        <div class="wf-progress-bar" style="width: ${progressPercentage}%"></div>
                    </div>
                    
                    <div class="wf-step-content">
                        <div class="wf-step-main">
                            <h3><i data-lucide="${currentStep.icon}" class="wf-step-icon-large"></i> ${currentStep.title}</h3>
                            <p class="wf-step-desc">${currentStep.description}</p>
                            
                            <div class="wf-attributes">
                                <div class="wf-attr">
                                    <span class="wf-attr-label">Actor</span>
                                    <span class="wf-attr-value"><i data-lucide="user" style="width:16px;height:16px;"></i> ${currentStep.actor}</span>
                                </div>
                                <div class="wf-attr">
                                    <span class="wf-attr-label">Module</span>
                                    <span class="wf-attr-value"><i data-lucide="box" style="width:16px;height:16px;"></i> ${currentStep.module}</span>
                                </div>
                                <div class="wf-attr" style="grid-column: span 2;">
                                    <span class="wf-attr-label">User Action</span>
                                    <span class="wf-attr-value">${currentStep.action || currentStep.description}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="wf-step-side">
                            <div class="wf-status-box ${currentStep.statusColour}">
                                <div class="wf-status-title ${currentStep.statusColour}">
                                    <i data-lucide="${currentStep.statusColour === 'success' ? 'check-circle' : 'loader'}" style="width:18px;height:18px;"></i>
                                    System Response
                                </div>
                                <div class="wf-status-text">${currentStep.systemResponse}</div>
                            </div>
                            
                            ${currentStep.recordsAffected.length > 0 ? `
                            <div class="wf-records">
                                <h4>Records Affected</h4>
                                <div class="wf-record-tags">
                                    ${currentStep.recordsAffected.map(r => `<span class="wf-record-tag"><i data-lucide="database" style="width:14px;height:14px;"></i> ${r}</span>`).join('')}
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="wf-controls">
                        <div class="wf-controls-left">
                            <button class="wf-btn secondary" data-action="prev" ${isFirst ? 'disabled' : ''}>
                                <i data-lucide="arrow-left" style="width:18px;height:18px;"></i> Back
                            </button>
                            <button class="wf-btn" data-action="next">
                                Next Step <i data-lucide="arrow-right" style="width:18px;height:18px;"></i>
                            </button>
                        </div>
                        <div class="wf-controls-right">
                            <button class="wf-icon-btn ${this.state.isPlaying ? 'active' : ''}" data-action="toggle-play" title="Auto Play / Pause">
                                <i data-lucide="${this.state.isPlaying ? 'pause' : 'play'}"></i>
                            </button>
                            <button class="wf-icon-btn" data-action="restart" title="Restart">
                                <i data-lucide="rotate-ccw"></i>
                            </button>
                            <button class="wf-btn secondary" data-action="change-journey">Change Journey</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderWorkflowCompletion() {
        const isWalkIn = this.state.journey === 'walkIn';
        const title = isWalkIn ? 'Walk-in Workflow Completed' : 'Online Workflow Completed';
        const recordsStr = isWalkIn 
            ? 'Sale, Payment, Inventory, Stock Movement, Customer History, Receipt, and Reports.'
            : 'Customer, Cart, Order, Payment, Inventory, Stock Movement, Delivery, Notification, and Reports.';
            
        const modulesWalkIn = ['Customer', 'POS', 'Payment', 'Inventory', 'Receipt', 'Reports'];
        const modulesOnline = ['Customer Portal', 'Cart', 'Order', 'Payment', 'Inventory', 'Delivery', 'Reports'];
        const modules = isWalkIn ? modulesWalkIn : modulesOnline;
        
        const pathHtml = modules.map((m, i) => {
            let html = `<div class="wf-module-node">${m}</div>`;
            if (i < modules.length - 1) {
                html += `<div class="wf-module-arrow"><i data-lucide="arrow-right"></i></div>`;
            }
            return html;
        }).join('');

        return `
            <div class="workflow-container">
                <div class="wf-player wf-completion">
                    <div class="wf-completion-icon"><i data-lucide="check-circle" style="width:40px;height:40px;"></i></div>
                    <h3>${title}</h3>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto;">
                        Records updated: <strong>${recordsStr}</strong>
                    </p>
                    
                    <div class="wf-module-path">
                        ${pathHtml}
                    </div>
                    
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                        <button class="wf-btn secondary" data-action="restart"><i data-lucide="rotate-ccw" style="width:18px;height:18px;"></i> Replay This Journey</button>
                        <button class="wf-btn secondary" data-action="change-journey"><i data-lucide="git-branch" style="width:18px;height:18px;"></i> View Other Journey</button>
                        <button class="wf-btn" data-action="open-reports"><i data-lucide="bar-chart-2" style="width:18px;height:18px;"></i> Open Reports</button>
                    </div>
                </div>
            </div>
        `;
    }

    attachListeners() {
        const act = (selector, action) => {
            const el = this.root.querySelector(selector);
            if (el) {
                const newEl = el.cloneNode(true);
                el.parentNode.replaceChild(newEl, el);
                newEl.addEventListener('click', action);
            }
        };

        act('[data-action="start-walkin"]', () => this.setJourney('walkIn'));
        act('[data-action="start-online"]', () => this.setJourney('online'));
        act('[data-action="prev"]', () => this.prevStep());
        act('[data-action="next"]', () => this.nextStep());
        act('[data-action="toggle-play"]', () => this.toggleAutoPlay());
        act('[data-action="restart"]', () => this.restart());
        act('[data-action="change-journey"]', () => this.setJourney(null));
        act('[data-action="open-reports"]', () => this.openReports());
    }
}

function initWorkflow() {
    new WorkflowApp('workflow-prototype-root');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWorkflow);
} else {
    initWorkflow();
}
