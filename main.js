/**
 * The Scent Aromatherapy - Main JavaScript
 * A modular, accessibility-first implementation with zero dependencies
 * @version 1.0.0
 */

// ==========================================================================
// APP MODULE
// ==========================================================================
const App = {
  init() {
    this.bindEvents();
    this.modules.forEach(module => {
      if (module.init && typeof module.init === 'function') {
        module.init();
      }
    });
    console.log('🌿 The Scent Aromatherapy initialized');
  },

  modules: [],

  bindEvents() {
    // Global debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        document.dispatchEvent(new CustomEvent('app:resized'));
      }, 250);
    });

    // Page load completion
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });
  },

  // Utility: Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Utility: Format currency
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
};

// ==========================================================================
// NAVIGATION MODULE
// ==========================================================================
const Navigation = {
  init() {
    this.header = document.getElementById('header');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.menuToggle = document.getElementById('menuToggle');
    this.navLinks = document.querySelectorAll('[data-nav-link]');
    this.mobileLinks = document.querySelectorAll('[data-mobile-link]');
    this.scrollProgress = document.getElementById('scrollProgress');
    
    this.bindEvents();
    this.handleScroll();
  },

  bindEvents() {
    // Mobile menu toggle
    this.menuToggle?.addEventListener('click', this.toggleMobileMenu.bind(this));
    
    // Smooth scroll for nav links
    [...this.navLinks, ...this.mobileLinks].forEach(link => {
      link.addEventListener('click', this.handleNavClick.bind(this));
    });

    // Scroll effects (debounced)
    window.addEventListener('scroll', this.handleScroll.bind(this));
  },

  toggleMobileMenu() {
    const isExpanded = this.menuToggle.getAttribute('aria-expanded') === 'true';
    
    this.menuToggle.setAttribute('aria-expanded', !isExpanded);
    this.mobileMenu.setAttribute('aria-hidden', isExpanded);
    
    // Lock body scroll
    document.body.style.overflow = isExpanded ? '' : 'hidden';
    
    // Focus management
    if (!isExpanded) {
      this.mobileMenu.querySelector('a')?.focus();
    }
  },

  handleNavClick(e) {
    const href = e.currentTarget.getAttribute('href');
    
    // Skip external links
    if (!href.startsWith('#')) return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (!target) return;
    
    // Calculate offset for sticky header
    const headerHeight = this.header.offsetHeight || 80;
    const targetPosition = target.offsetTop - headerHeight - 20;
    
    // Smooth scroll
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (this.menuToggle.getAttribute('aria-expanded') === 'true') {
      this.toggleMobileMenu();
    }
  },

  handleScroll() {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Header scroll effect
    if (scrolled > 50) {
      this.header.classList.add('header--scrolled');
    } else {
      this.header.classList.remove('header--scrolled');
    }
    
    // Scroll progress bar
    if (this.scrollProgress) {
      const progress = (scrolled / maxScroll) * 100;
      this.scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }
  }
};

App.modules.push(Navigation);

// ==========================================================================
// ANIMATIONS MODULE
// ==========================================================================
const Animations = {
  init() {
    this.observer = new IntersectionObserver(this.onIntersect.bind(this), {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    this.elements = document.querySelectorAll('[data-animate]');
    this.elements.forEach(el => this.observer.observe(el));
  },

  onIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        this.observer.unobserve(entry.target);
      }
    });
  }
};

App.modules.push(Animations);

// ==========================================================================
// CART MODULE
// ==========================================================================
const Cart = {
  init() {
    this.key = 'thescent_cart';
    this.count = document.getElementById('cartCount');
    this.toast = document.getElementById('toast');
    this.toastMessage = document.getElementById('toastMessage');
    
    this.load();
    this.bindEvents();
    this.updateUI();
  },

  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-add-cart]')) {
        e.preventDefault();
        const card = e.target.closest('.product-card');
        this.addItem(card);
      }
    });
  },

  getItemData(card) {
    return {
      id: card.dataset.category + '_' + Date.now(), // Simple unique ID
      name: card.querySelector('.product-card__title').textContent,
      price: parseFloat(card.dataset.price),
      category: card.dataset.category,
      image: card.querySelector('.product-card__image-bg').className
    };
  },

  addItem(card) {
    const item = this.getItemData(card);
    this.items.push(item);
    this.save();
    this.updateUI();
    this.showToast(`"${item.name}" added to cart`);
    
    // Visual feedback
    this.animateAddToCart(card);
  },

  animateAddToCart(card) {
    const button = card.querySelector('.product-card__add');
    const icon = button.querySelector('svg');
    
    button.classList.add('loading');
    icon.style.display = 'none';
    
    // Add spinner
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    button.appendChild(spinner);
    
    setTimeout(() => {
      button.classList.remove('loading');
      icon.style.display = 'block';
      spinner.remove();
    }, 800);
  },

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
    this.updateUI();
  },

  updateUI() {
    const count = this.items.length;
    this.count.textContent = count;
    this.count.setAttribute('aria-label', `${count} items in cart`);
    
    // Animation for cart count
    if (this.count.animate) {
      this.count.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(1.3)', opacity: 0.8 },
        { transform: 'scale(1)', opacity: 1 }
      ], {
        duration: 300,
        easing: 'ease'
      });
    }
  },

  showToast(message) {
    this.toastMessage.textContent = message;
    this.toast.setAttribute('aria-hidden', 'false');
    this.toast.classList.add('visible');
    
    setTimeout(() => {
      this.toast.classList.remove('visible');
      this.toast.setAttribute('aria-hidden', 'true');
    }, 3000);
  },

  save() {
    try {
      localStorage.setItem(this.key, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  },

  load() {
    try {
      const saved = localStorage.getItem(this.key);
      this.items = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Could not load cart from localStorage:', e);
      this.items = [];
    }
  }
};

App.modules.push(Cart);

// ==========================================================================
// PRODUCT FILTERS MODULE
// ==========================================================================
const ProductFilters = {
  init() {
    this.categoryFilter = document.getElementById('categoryFilter');
    this.sortFilter = document.getElementById('sortFilter');
    this.productGrid = document.getElementById('productGrid');
    this.products = [...this.productGrid.querySelectorAll('.product-card')];
    
    this.bindEvents();
  },

  bindEvents() {
    this.categoryFilter?.addEventListener('change', this.handleFilter.bind(this));
    this.sortFilter?.addEventListener('change', this.handleFilter.bind(this));
  },

  handleFilter() {
    const category = this.categoryFilter?.value || 'all';
    const sort = this.sortFilter?.value || 'featured';
    
    let filtered = this.products;
    
    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(card => card.dataset.category === category);
    }
    
    // Sort
    filtered = this.sortProducts(filtered, sort);
    
    // Animate out
    this.animateOut(() => {
      this.renderProducts(filtered);
      this.animateIn();
    });
  },

  sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.dataset.price - b.dataset.price);
      
      case 'price-desc':
        return sorted.sort((a, b) => b.dataset.price - a.dataset.price);
      
      case 'name':
        return sorted.sort((a, b) => {
          const aName = a.dataset.name.toLowerCase();
          const bName = b.dataset.name.toLowerCase();
          return aName.localeCompare(bName);
        });
      
      default: // featured
        return sorted;
    }
  },

  renderProducts(products) {
    this.productGrid.innerHTML = '';
    products.forEach((product, index) => {
      // Reset animation delay based on new order
      product.style.transitionDelay = `${index * 50}ms`;
      this.productGrid.appendChild(product);
    });
  },

  animateOut(callback) {
    this.products.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });
    
    setTimeout(callback, 200);
  },

  animateIn() {
    const visible = this.productGrid.querySelectorAll('.product-card');
    visible.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    });
  }
};

App.modules.push(ProductFilters);

// ==========================================================================
// UI COMPONENTS MODULE
// ==========================================================================
const UIComponents = {
  init() {
    this.backToTop = document.getElementById('backToTop');
    this.searchBtn = document.getElementById('searchBtn');
    
    this.bindEvents();
    this.handleScroll(); // Initial check
  },

  bindEvents() {
    this.backToTop?.addEventListener('click', this.scrollToTop.bind(this));
    this.searchBtn?.addEventListener('click', this.handleSearch.bind(this));
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm?.addEventListener('submit', this.handleNewsletter.bind(this));
    
    // Scroll visibility for back-to-top
    window.addEventListener('scroll', App.debounce(this.handleScroll.bind(this), 50));
  },

  handleScroll() {
    const scrolled = window.scrollY;
    
    // Back to top visibility
    if (scrolled > 500) {
      this.backToTop?.classList.add('visible');
    } else {
      this.backToTop?.classList.remove('visible');
    }
  },

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },

  handleSearch() {
    // Placeholder for search functionality
    const searchQuery = prompt('Search products:');
    if (searchQuery) {
      console.log('Searching for:', searchQuery);
      // Implement search logic here
    }
  },

  async handleNewsletter(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('#emailInput').value;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      form.reset();
      Cart.showToast('Subscribed! Check your email for confirmation.');
      
      // Track conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_signup', { email: email });
      }
      
    } catch (error) {
      Cart.showToast('Something went wrong. Please try again.');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }
};

App.modules.push(UIComponents);

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
