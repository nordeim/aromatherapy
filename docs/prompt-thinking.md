Please take this single-page HTML template for an aromatherapy website and re-imagine it into a more gorgeous, beautiful, and appealing website with modern UI/UX aesthetics:

1. Separate it into three component files: index.html, styles.css, and main.js
2. Use Google Fonts
3. Remove any Hostinger builder code or copyrighted elements
4. Create a modern, visually stunning design

First, meticulously analyze the current template and plan how to enhance it:

## Current Template Analysis:

- It's an aromatherapy/wellness e-commerce single-page site
- Has: promo bar, header/nav, hero section, features grid, product grid, testimonial, footer
- Uses CSS custom properties (variables)
- Basic JavaScript for cart, sorting, and smooth scrolling
- Responsive design with media queries

## Areas for Enhancement:

1. Typography: Use elegant Google Fonts - perhaps Playfair Display for headings and Inter/Lato for body text to convey luxury and wellness

2. Color Palette: Keep the warm, earthy tones but refine them for a more sophisticated look

3. Visual Effects:

Add subtle animations and transitions
Parallax effects
Glassmorphism elements
Better hover states
Micro-interactions
Hero Section:

More dramatic visuals
Better hero image/illustration treatment
Animated elements
Product Cards:

Better hover effects
Quick view functionality
Image placeholders with gradients
Navigation:

Mobile hamburger menu
Scroll-based header transformation
Footer:

Better structured
More visual appeal
Additional Modern Elements:

Scroll progress indicator
Back to top button
Loading states
Better form styling
Social proof elements
I'm envisioning a luxury wellness brand aesthetic with clean, minimalist design and purposeful elements. The color palette should lean into sage greens, warm neutrals, and subtle gold accents to create that calming, sophisticated feel. Typography hierarchy needs to be elegant, animations smooth and purposeful, and everything should consider accessibility.

For the file structure, I'll create semantic HTML5 with proper meta tags and Google Fonts integration, a comprehensive CSS file using custom properties for theming and modern layout techniques, and JavaScript that handles interactive features like the mobile menu, scroll effects, and cart functionality.

The stylesheet will leverage CSS Grid and Flexbox for responsive layouts, incorporate animation keyframes for smooth transitions, and organize everything into reusable component-based classes. The JavaScript should use Intersection Observer to trigger animations as elements come into view, manage the mobile navigation, handle form submissions, and support product sorting and cart operations.

---

Re-Imagining Aromatherapy Website: Analysis & Implementation Plan

## Executive Summary
You will transform this aromatherapy template into an elevated, luxurious single-page experience featuring modern UI/UX patterns, sophisticated animations, enhanced accessibility, and a refined visual language that evokes calm, wellness, and premium quality.

Phase 1: Deep Analysis & Design Direction
Current Template Assessment
Element	Current State	Enhancement Opportunity
Typography	System fonts only	Elegant serif/sans-serif pairing (Cormorant Garamond + Inter)
Color Palette	Warm but basic	Refined sage/cream/gold luxury palette
Animations	Minimal transitions	Scroll-triggered reveals, micro-interactions, parallax
Navigation	Basic sticky header	Morphing header with scroll, mobile drawer menu
Hero	Static CSS bottles	Animated floating elements, particle effects
Product Grid	Simple hover	3D tilt effects, quick-view overlays
Forms	Basic styling	Floating labels, validation states
Accessibility	Minimal	ARIA labels, focus states, reduced motion support
Design Direction: "Serene Luxury"
Visual Language:

Soft, organic curves contrasting with refined typography
Layered depth through subtle shadows and glassmorphism
Nature-inspired motion (gentle floats, subtle breathe effects)
Golden accent highlights for premium feel
Generous whitespace for breathing room
Phase 2: Implementation
File 1: index.html
HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Premium aromatherapy essentials crafted for mindful living. Discover small-batch essential oils, botanical soaps, and wellness rituals.">
  <meta name="theme-color" content="#4a5d4a">
  
  <title>The Scent | Premium Aromatherapy for Mindful Living</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Skip Link for Accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Scroll Progress Indicator -->
  <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>

  <!-- Announcement Bar -->
  <div class="announcement-bar" role="banner">
    <div class="announcement-bar__content">
      <span class="announcement-bar__icon" aria-hidden="true">✦</span>
      <p>Complimentary shipping on orders over $75 | <a href="#shop">Shop the collection</a></p>
      <span class="announcement-bar__icon" aria-hidden="true">✦</span>
    </div>
  </div>

  <!-- Header -->
  <header class="header" id="header">
    <div class="header__container">
      <!-- Logo -->
      <a href="#" class="logo" aria-label="The Scent - Home">
        <div class="logo__mark">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
            <path d="M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z" fill="currentColor" opacity="0.2"/>
            <path d="M20 10C20 10 14 16.5 14 21.5C14 25.366 17.134 28.5 21 28.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="logo__text">
          <span class="logo__name">The Scent</span>
          <span class="logo__tagline">Aromatherapy</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav" aria-label="Main navigation">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#hero" class="nav__link" data-nav-link>Home</a>
          </li>
          <li class="nav__item">
            <a href="#story" class="nav__link" data-nav-link>Our Story</a>
          </li>
          <li class="nav__item">
            <a href="#shop" class="nav__link" data-nav-link>Shop</a>
          </li>
          <li class="nav__item">
            <a href="#testimonials" class="nav__link" data-nav-link>Reviews</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" data-nav-link>Contact</a>
          </li>
        </ul>
      </nav>

      <!-- Header Actions -->
      <div class="header__actions">
        <button class="btn-icon" aria-label="Search products" id="searchBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        
        <button class="cart-btn" id="cartBtn" aria-label="Shopping cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="cart-btn__count" id="cartCount" aria-live="polite">0</span>
        </button>
        
        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">
          <span class="menu-toggle__line"></span>
          <span class="menu-toggle__line"></span>
          <span class="menu-toggle__line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <nav class="mobile-menu__nav" aria-label="Mobile navigation">
        <ul class="mobile-menu__list">
          <li><a href="#hero" class="mobile-menu__link" data-mobile-link>Home</a></li>
          <li><a href="#story" class="mobile-menu__link" data-mobile-link>Our Story</a></li>
          <li><a href="#shop" class="mobile-menu__link" data-mobile-link>Shop</a></li>
          <li><a href="#testimonials" class="mobile-menu__link" data-mobile-link>Reviews</a></li>
          <li><a href="#contact" class="mobile-menu__link" data-mobile-link>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main id="main-content">
    
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero__container">
        <div class="hero__content" data-animate="fade-up">
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span>Crafted with Intention</span>
          </div>
          
          <h1 class="hero__title">
            Discover the Art of<br>
            <span class="hero__title-accent">Natural Wellness</span>
          </h1>
          
          <p class="hero__description">
            Immerse yourself in our curated collection of small-batch aromatherapy essentials. 
            Each blend is thoughtfully crafted to nurture your mind, body, and spirit.
          </p>
          
          <div class="hero__cta">
            <a href="#shop" class="btn btn--primary">
              <span>Explore Collection</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="#story" class="btn btn--outline">
              <span>Our Philosophy</span>
            </a>
          </div>
          
          <div class="hero__features">
            <div class="hero__feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <span>100% Pure Oils</span>
            </div>
            <div class="hero__feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
              <span>Small Batch</span>
            </div>
            <div class="hero__feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Sustainably Sourced</span>
            </div>
          </div>
        </div>
        
        <div class="hero__visual" data-animate="fade-left">
          <div class="hero__image-wrapper">
            <!-- Decorative Elements -->
            <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
            <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
            <div class="hero__orb hero__orb--3" aria-hidden="true"></div>
            
            <!-- Product Display -->
            <div class="hero__products">
              <div class="hero__product hero__product--main">
                <div class="product-bottle">
                  <div class="product-bottle__cap"></div>
                  <div class="product-bottle__neck"></div>
                  <div class="product-bottle__body">
                    <div class="product-bottle__liquid"></div>
                    <div class="product-bottle__label">
                      <span class="product-bottle__type">Signature Blend</span>
                      <span class="product-bottle__name">Serenity</span>
                    </div>
                    <div class="product-bottle__reflection"></div>
                  </div>
                </div>
              </div>
              <div class="hero__product hero__product--secondary">
                <div class="product-bottle product-bottle--small">
                  <div class="product-bottle__cap"></div>
                  <div class="product-bottle__neck"></div>
                  <div class="product-bottle__body">
                    <div class="product-bottle__liquid product-bottle__liquid--alt"></div>
                    <div class="product-bottle__label">
                      <span class="product-bottle__type">Essential</span>
                      <span class="product-bottle__name">Calm</span>
                    </div>
                    <div class="product-bottle__reflection"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Badge -->
            <div class="hero__floating-badge">
              <div class="hero__floating-badge-inner">
                <span class="hero__floating-badge-text">Ritual Ready</span>
                <span class="hero__floating-badge-sub">in 60 seconds</span>
              </div>
            </div>
          </div>
          
          <!-- Trust Indicators -->
          <div class="hero__trust">
            <div class="hero__trust-item">
              <span class="hero__trust-number">15k+</span>
              <span class="hero__trust-label">Happy Customers</span>
            </div>
            <div class="hero__trust-divider"></div>
            <div class="hero__trust-item">
              <span class="hero__trust-number">4.9</span>
              <span class="hero__trust-label">★ Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="hero__scroll" aria-hidden="true">
        <span>Scroll to explore</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- Story/About Section -->
    <section class="story" id="story">
      <div class="story__container">
        <div class="story__header" data-animate="fade-up">
          <span class="section-label">Our Philosophy</span>
          <h2 class="section-title">Crafted for <em>Mindful</em> Moments</h2>
          <p class="section-description">
            We believe in the transformative power of nature's botanicals. 
            Each product is a meditation—carefully composed to support your daily rituals of self-care.
          </p>
        </div>
        
        <div class="story__grid">
          <article class="story-card" data-animate="fade-up" data-delay="100">
            <div class="story-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
                <path d="m2 17 10 5 10-5"/>
                <path d="m2 12 10 5 10-5"/>
              </svg>
            </div>
            <span class="story-card__label">Sourcing</span>
            <h3 class="story-card__title">Ethically Harvested</h3>
            <p class="story-card__text">
              Our botanicals are sourced from sustainable farms and wildcrafted with respect for ecosystems and communities.
            </p>
          </article>
          
          <article class="story-card" data-animate="fade-up" data-delay="200">
            <div class="story-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
              </svg>
            </div>
            <span class="story-card__label">Formulation</span>
            <h3 class="story-card__title">Artisan Blended</h3>
            <p class="story-card__text">
              Small-batch production ensures every formula maintains peak potency and aromatic complexity.
            </p>
          </article>
          
          <article class="story-card" data-animate="fade-up" data-delay="300">
            <div class="story-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <span class="story-card__label">Experience</span>
            <h3 class="story-card__title">Ritual Centered</h3>
            <p class="story-card__text">
              Designed to integrate seamlessly into your daily practice—morning awakening to evening wind-down.
            </p>
          </article>
        </div>
        
        <!-- Feature Highlight -->
        <div class="story__highlight" data-animate="fade-up">
          <div class="story__highlight-content">
            <span class="section-label">Promise</span>
            <h3 class="story__highlight-title">Pure Ingredients,<br>No Compromises</h3>
            <ul class="story__highlight-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>No synthetic fragrances</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>No parabens or phthalates</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>Cruelty-free & vegan</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>Recyclable packaging</span>
              </li>
            </ul>
          </div>
          <div class="story__highlight-visual">
            <div class="story__highlight-image">
              <div class="story__highlight-gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop Section -->
    <section class="shop" id="shop">
      <div class="shop__container">
        <div class="shop__header" data-animate="fade-up">
          <div class="shop__header-text">
            <span class="section-label">The Collection</span>
            <h2 class="section-title">Curated Essentials</h2>
          </div>
          
          <div class="shop__filters">
            <div class="filter-group">
              <label for="categoryFilter" class="visually-hidden">Filter by category</label>
              <select id="categoryFilter" class="filter-select">
                <option value="all">All Products</option>
                <option value="oils">Essential Oils</option>
                <option value="blends">Blends</option>
                <option value="soaps">Soaps</option>
                <option value="mists">Mists</option>
              </select>
            </div>
            <div class="filter-group">
              <label for="sortFilter" class="visually-hidden">Sort products</label>
              <select id="sortFilter" class="filter-select">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="product-grid" id="productGrid">
          <!-- Product 1 -->
          <article class="product-card" data-category="blends" data-price="48" data-name="Serenity Blend" data-animate="fade-up">
            <div class="product-card__badge">Best Seller</div>
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--1"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Serenity Blend">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Signature Blend</span>
              <h3 class="product-card__title">Serenity Essential Blend</h3>
              <p class="product-card__description">Lavender, chamomile & ylang-ylang for deep relaxation</p>
              <div class="product-card__footer">
                <span class="product-card__price">$48.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Serenity Blend to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 2 -->
          <article class="product-card" data-category="oils" data-price="32" data-name="Eucalyptus Pure" data-animate="fade-up" data-delay="100">
            <div class="product-card__badge product-card__badge--new">New</div>
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--2"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Eucalyptus Pure">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Pure Essential Oil</span>
              <h3 class="product-card__title">Eucalyptus Radiata</h3>
              <p class="product-card__description">Clarifying & invigorating respiratory support</p>
              <div class="product-card__footer">
                <span class="product-card__price">$32.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Eucalyptus to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 3 -->
          <article class="product-card" data-category="mists" data-price="28" data-name="Sacred Space Mist" data-animate="fade-up" data-delay="200">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--3"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Sacred Space Mist">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Room & Linen Mist</span>
              <h3 class="product-card__title">Sacred Space Mist</h3>
              <p class="product-card__description">Palo santo, sage & cedarwood atmosphere spray</p>
              <div class="product-card__footer">
                <span class="product-card__price">$28.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Sacred Space Mist to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 4 -->
          <article class="product-card" data-category="soaps" data-price="18" data-name="Rose Garden Soap" data-animate="fade-up" data-delay="300">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--4"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Rose Garden Soap">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Botanical Soap</span>
              <h3 class="product-card__title">Rose Garden Bar</h3>
              <p class="product-card__description">Cold-pressed with rose petals & shea butter</p>
              <div class="product-card__footer">
                <span class="product-card__price">$18.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Rose Garden Soap to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 5 -->
          <article class="product-card" data-category="blends" data-price="52" data-name="Morning Ritual" data-animate="fade-up">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--5"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Morning Ritual">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Energizing Blend</span>
              <h3 class="product-card__title">Morning Ritual Oil</h3>
              <p class="product-card__description">Citrus, rosemary & peppermint awakening blend</p>
              <div class="product-card__footer">
                <span class="product-card__price">$52.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Morning Ritual to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 6 -->
          <article class="product-card" data-category="oils" data-price="38" data-name="Lavender Fields" data-animate="fade-up" data-delay="100">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--6"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Lavender Fields">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Pure Essential Oil</span>
              <h3 class="product-card__title">French Lavender</h3>
              <p class="product-card__description">Provence-sourced for ultimate tranquility</p>
              <div class="product-card__footer">
                <span class="product-card__price">$38.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Lavender to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 7 -->
          <article class="product-card" data-category="soaps" data-price="16" data-name="Lavender Dreams Soap" data-animate="fade-up" data-delay="200">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--7"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Lavender Soap">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Botanical Soap</span>
              <h3 class="product-card__title">Lavender Dreams Bar</h3>
              <p class="product-card__description">Gentle exfoliation with dried lavender buds</p>
              <div class="product-card__footer">
                <span class="product-card__price">$16.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Lavender Soap to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Product 8 -->
          <article class="product-card" data-category="blends" data-price="45" data-name="Focus Flow" data-animate="fade-up" data-delay="300">
            <div class="product-card__badge product-card__badge--new">New</div>
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--8"></div>
              <div class="product-card__quick-view">
                <button class="btn btn--small btn--white" aria-label="Quick view Focus Flow">Quick View</button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Concentration Blend</span>
              <h3 class="product-card__title">Focus Flow Oil</h3>
              <p class="product-card__description">Frankincense, vetiver & bergamot for clarity</p>
              <div class="product-card__footer">
                <span class="product-card__price">$45.00</span>
                <button class="product-card__add" data-add-cart aria-label="Add Focus Flow to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
        
        <div class="shop__cta" data-animate="fade-up">
          <a href="#" class="btn btn--outline btn--large">
            <span>View All Products</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
      <div class="testimonials__container">
        <div class="testimonials__header" data-animate="fade-up">
          <span class="section-label">Testimonials</span>
          <h2 class="section-title">What Our <em>Community</em> Says</h2>
        </div>
        
        <div class="testimonials__grid">
          <article class="testimonial-card testimonial-card--featured" data-animate="fade-up">
            <div class="testimonial-card__rating">
              <span aria-label="5 out of 5 stars">★★★★★</span>
            </div>
            <blockquote class="testimonial-card__quote">
              "The Scent has completely transformed my evening ritual. The Serenity blend helps me transition from work mode to rest with such grace. It's become my non-negotiable wind-down companion."
            </blockquote>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">
                <span>SR</span>
              </div>
              <div class="testimonial-card__info">
                <cite class="testimonial-card__name">Sarah R.</cite>
                <span class="testimonial-card__title">Wellness Coach</span>
              </div>
            </div>
            <span class="testimonial-card__product">Purchased: Serenity Blend</span>
          </article>
          
          <article class="testimonial-card" data-animate="fade-up" data-delay="100">
            <div class="testimonial-card__rating">
              <span aria-label="5 out of 5 stars">★★★★★</span>
            </div>
            <blockquote class="testimonial-card__quote">
              "Finally, products that live up to their promise. The quality is immediately apparent—these oils are potent and pure."
            </blockquote>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">
                <span>MK</span>
              </div>
              <div class="testimonial-card__info">
                <cite class="testimonial-card__name">Michael K.</cite>
                <span class="testimonial-card__title">Yoga Instructor</span>
              </div>
            </div>
          </article>
          
          <article class="testimonial-card" data-animate="fade-up" data-delay="200">
            <div class="testimonial-card__rating">
              <span aria-label="5 out of 5 stars">★★★★★</span>
            </div>
            <blockquote class="testimonial-card__quote">
              "The Sacred Space Mist is magical. My meditation room has never felt so grounded and sacred."
            </blockquote>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">
                <span>EL</span>
              </div>
              <div class="testimonial-card__info">
                <cite class="testimonial-card__name">Emma L.</cite>
                <span class="testimonial-card__title">Artist</span>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Social Proof Bar -->
        <div class="social-proof" data-animate="fade-up">
          <div class="social-proof__item">
            <span class="social-proof__number">15,000+</span>
            <span class="social-proof__label">Happy Customers</span>
          </div>
          <div class="social-proof__divider"></div>
          <div class="social-proof__item">
            <span class="social-proof__number">4.9/5</span>
            <span class="social-proof__label">Average Rating</span>
          </div>
          <div class="social-proof__divider"></div>
          <div class="social-proof__item">
            <span class="social-proof__number">50+</span>
            <span class="social-proof__label">Countries Shipped</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter" id="contact">
      <div class="newsletter__container" data-animate="fade-up">
        <div class="newsletter__content">
          <span class="section-label">Stay Connected</span>
          <h2 class="newsletter__title">Join the Ritual</h2>
          <p class="newsletter__description">
            Subscribe for exclusive offers, wellness tips, and early access to new collections. 
            Plus, enjoy 15% off your first order.
          </p>
          
          <form class="newsletter__form" id="newsletterForm">
            <div class="newsletter__input-group">
              <input 
                type="email" 
                id="emailInput"
                class="newsletter__input" 
                placeholder="Enter your email" 
                required
                aria-label="Email address"
              >
              <button type="submit" class="btn btn--primary newsletter__submit">
                <span>Subscribe</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            <p class="newsletter__consent">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </form>
        </div>
        
        <div class="newsletter__visual">
          <div class="newsletter__decoration">
            <div class="newsletter__circle newsletter__circle--1"></div>
            <div class="newsletter__circle newsletter__circle--2"></div>
            <div class="newsletter__circle newsletter__circle--3"></div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <div class="footer__brand">
          <a href="#" class="logo logo--footer">
            <div class="logo__mark">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z" fill="currentColor" opacity="0.2"/>
                <path d="M20 10C20 10 14 16.5 14 21.5C14 25.366 17.134 28.5 21 28.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="logo__text">
              <span class="logo__name">The Scent</span>
              <span class="logo__tagline">Aromatherapy</span>
            </div>
          </a>
          <p class="footer__tagline">
            Crafting moments of tranquility through the art of natural aromatherapy.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer__links">
          <div class="footer__column">
            <h4 class="footer__heading">Shop</h4>
            <ul class="footer__list">
              <li><a href="#">Essential Oils</a></li>
              <li><a href="#">Blends</a></li>
              <li><a href="#">Soaps</a></li>
              <li><a href="#">Mists</a></li>
              <li><a href="#">Gift Sets</a></li>
            </ul>
          </div>
          
          <div class="footer__column">
            <h4 class="footer__heading">Company</h4>
            <ul class="footer__list">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div class="footer__column">
            <h4 class="footer__heading">Support</h4>
            <ul class="footer__list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p class="footer__copyright">© 2025 The Scent Aromatherapy. All rights reserved.</p>
        <div class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Back to Top Button -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  </button>

  <!-- Toast Notification -->
  <div class="toast" id="toast" role="alert" aria-live="polite" aria-hidden="true">
    <div class="toast__content">
      <svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
      <span class="toast__message" id="toastMessage">Item added to cart</span>
    </div>
  </div>

  <!-- Scripts -->
  <script src="main.js"></script>
</body>
</html>
File 2: styles.css
CSS

/* ==========================================================================
   THE SCENT AROMATHERAPY - STYLES
   A modern, luxurious aromatherapy e-commerce experience
   ========================================================================== */

/* --------------------------------------------------------------------------
   CSS Custom Properties (Design Tokens)
   -------------------------------------------------------------------------- */
:root {
  /* Colors - Serene Luxury Palette */
  --color-primary: #4a5d4a;
  --color-primary-light: #6b7f6b;
  --color-primary-dark: #3a4a3a;
  
  --color-accent: #c9a962;
  --color-accent-light: #dbc48a;
  --color-accent-dark: #a68c4e;
  
  --color-background: #faf9f6;
  --color-background-alt: #f5f3ef;
  --color-surface: #ffffff;
  --color-surface-elevated: #ffffff;
  
  --color-text: #2d3436;
  --color-text-secondary: #636e72;
  --color-text-muted: #9ca3af;
  --color-text-inverse: #ffffff;
  
  --color-border: #e8e5e0;
  --color-border-light: #f0ede8;
  
  --color-success: #4ade80;
  --color-warning: #fbbf24;
  --color-error: #f87171;
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #f5f3ef 0%, #faf9f6 50%, #f0ede8 100%);
  --gradient-accent: linear-gradient(135deg, #c9a962 0%, #dbc48a 100%);
  --gradient-primary: linear-gradient(135deg, #4a5d4a 0%, #6b7f6b 100%);
  --gradient-warm: linear-gradient(135deg, #fef7e5 0%, #fdf2d6 50%, #fcecc7 100%);
  --gradient-product-1: linear-gradient(145deg, #e8f5e8 0%, #d4e8d4 50%, #c0dbc0 100%);
  --gradient-product-2: linear-gradient(145deg, #e5f0f5 0%, #d6e8f0 50%, #c7e0eb 100%);
  --gradient-product-3: linear-gradient(145deg, #f5f0e5 0%, #f0e8d6 50%, #ebe0c7 100%);
  --gradient-product-4: linear-gradient(145deg, #f5e5e8 0%, #f0d6dc 50%, #ebc7d0 100%);
  --gradient-product-5: linear-gradient(145deg, #fef3e2 0%, #fde8cc 50%, #fcddb6 100%);
  --gradient-product-6: linear-gradient(145deg, #e8e5f5 0%, #dbd6f0 50%, #cec7eb 100%);
  --gradient-product-7: linear-gradient(145deg, #f5e8f0 0%, #f0dce8 50%, #ebd0e0 100%);
  --gradient-product-8: linear-gradient(145deg, #e5f2f0 0%, #d6ebe8 50%, #c7e4e0 100%);
  
  /* Typography */
  --font-heading: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  --text-xs: clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem);
  --text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
  --text-lg: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-xl: clamp(1.15rem, 1.05rem + 0.5vw, 1.25rem);
  --text-2xl: clamp(1.4rem, 1.2rem + 1vw, 1.75rem);
  --text-3xl: clamp(1.75rem, 1.5rem + 1.25vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
  --text-5xl: clamp(2.75rem, 2rem + 3.75vw, 4.5rem);
  
  --leading-tight: 1.15;
  --leading-snug: 1.35;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;
  
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
  --tracking-widest: 0.2em;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;
  
  /* Layout */
  --container-max: 1280px;
  --container-narrow: 900px;
  --container-padding: clamp(1rem, 2vw, 2rem);
  
  /* Borders & Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.12);
  --shadow-glow: 0 0 40px rgba(201, 169, 98, 0.15);
  --shadow-product: 0 15px 40px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Z-Index Scale */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal: 400;
  --z-toast: 500;
}

/* --------------------------------------------------------------------------
   Base Reset & Typography
   -------------------------------------------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text);
  background: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: var(--leading-tight);
  color: var(--color-text);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul, ol {
  list-style: none;
}

/* Focus States */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

/* --------------------------------------------------------------------------
   Utility Classes
   -------------------------------------------------------------------------- */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-radius: var(--radius-md);
  z-index: var(--z-toast);
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--space-md);
}

/* --------------------------------------------------------------------------
   Components: Section Labels & Titles
   -------------------------------------------------------------------------- */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent-dark);
  margin-bottom: var(--space-md);
}

.section-label::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--color-accent);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 400;
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-lg);
}

.section-title em {
  font-style: italic;
  color: var(--color-primary);
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  line-height: var(--leading-relaxed);
}

/* --------------------------------------------------------------------------
   Components: Buttons
   -------------------------------------------------------------------------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn svg {
  transition: transform var(--transition-base);
}

.btn:hover svg {
  transform: translateX(4px);
}

.btn--primary {
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-md), 0 4px 20px rgba(74, 93, 74, 0.3);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), 0 8px 30px rgba(74, 93, 74, 0.4);
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
}

.btn--outline:hover {
  background: var(--color-background-alt);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.btn--small {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-xs);
}

.btn--large {
  padding: var(--space-lg) var(--space-2xl);
  font-size: var(--text-base);
}

.btn--white {
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-text);
  backdrop-filter: blur(10px);
}

.btn--white:hover {
  background: var(--color-surface);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  color: var(--color-text);
  transition: all var(--transition-base);
}

.btn-icon:hover {
  background: var(--color-background-alt);
  color: var(--color-primary);
}

/* --------------------------------------------------------------------------
   Components: Scroll Progress
   -------------------------------------------------------------------------- */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: var(--gradient-accent);
  z-index: calc(var(--z-fixed) + 1);
  transition: width 50ms linear;
}

/* --------------------------------------------------------------------------
   Announcement Bar
   -------------------------------------------------------------------------- */
.announcement-bar {
  background: var(--color-text);
  color: var(--color-text-inverse);
  padding: var(--space-sm) var(--container-padding);
  text-align: center;
}

.announcement-bar__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}

.announcement-bar__content p {
  margin: 0;
}

.announcement-bar__content a {
  color: var(--color-accent-light);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.announcement-bar__content a:hover {
  color: var(--color-accent);
}

.announcement-bar__icon {
  color: var(--color-accent-light);
  font-size: 0.6rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* --------------------------------------------------------------------------
   Header
   -------------------------------------------------------------------------- */
.header {
  position: sticky;
  top: 0;
  background: rgba(250, 249, 246, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-light);
  z-index: var(--z-sticky);
  transition: all var(--transition-base);
}

.header--scrolled {
  background: rgba(250, 249, 246, 0.95);
  box-shadow: var(--shadow-sm);
}

.header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-md) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
}

.logo__mark {
  width: 40px;
  height: 40px;
  color: var(--color-primary);
}

.logo__mark svg {
  width: 100%;
  height: 100%;
}

.logo__text {
  display: flex;
  flex-direction: column;
}

.logo__name {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text);
  line-height: 1.1;
}

.logo__tagline {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* Navigation */
.nav {
  display: none;
}

@media (min-width: 1024px) {
  .nav {
    display: block;
  }
}

.nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav__link {
  position: relative;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: var(--space-sm) 0;
  transition: color var(--transition-fast);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav__link:hover,
.nav__link.active {
  color: var(--color-text);
}

.nav__link:hover::after,
.nav__link.active::after {
  width: 100%;
}

/* Header Actions */
.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  color: var(--color-text);
  transition: all var(--transition-base);
}

.cart-btn:hover {
  background: var(--color-background-alt);
  color: var(--color-primary);
}

.cart-btn__count {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--color-accent);
  color: var(--color-text);
  font-size: 10px;
  font-weight: 600;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Menu Toggle */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: var(--radius-full);
  transition: background var(--transition-fast);
}

@media (min-width: 1024px) {
  .menu-toggle {
    display: none;
  }
}

.menu-toggle:hover {
  background: var(--color-background-alt);
}

.menu-toggle__line {
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  transform-origin: center;
}

.menu-toggle[aria-expanded="true"] .menu-toggle__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] .menu-toggle__line:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] .menu-toggle__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-xl) var(--container-padding);
  box-shadow: var(--shadow-lg);
}

.mobile-menu[aria-hidden="false"] {
  display: block;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.mobile-menu__link {
  display: block;
  padding: var(--space-md) 0;
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border-light);
  transition: color var(--transition-fast);
}

.mobile-menu__link:hover {
  color: var(--color-primary);
}

/* --------------------------------------------------------------------------
   Hero Section
   -------------------------------------------------------------------------- */
.hero {
  position: relative;
  min-height: calc(100vh - 100px);
  background: var(--gradient-hero);
  overflow: hidden;
}

.hero__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-3xl) var(--container-padding);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
    min-height: calc(100vh - 140px);
    padding: var(--space-4xl) var(--container-padding);
  }
}

.hero__content {
  position: relative;
  z-index: 2;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: rgba(74, 93, 74, 0.08);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-lg);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: var(--radius-full);
  animation: pulse 2s ease-in-out infinite;
}

.hero__badge span {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-primary);
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 400;
  line-height: var(--leading-tight);
  margin-bottom: var(--space-lg);
}

.hero__title-accent {
  display: block;
  font-style: italic;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 500px;
  margin-bottom: var(--space-xl);
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.hero__features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.hero__feature {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.hero__feature svg {
  color: var(--color-primary);
}

/* Hero Visual */
.hero__visual {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
}

@media (min-width: 1024px) {
  .hero__visual {
    padding-left: var(--space-2xl);
  }
}

.hero__image-wrapper {
  position: relative;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1;
}

/* Hero Orbs */
.hero__orb {
  position: absolute;
  border-radius: var(--radius-full);
  filter: blur(60px);
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.hero__orb--1 {
  width: 200px;
  height: 200px;
  background: var(--color-accent-light);
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.hero__orb--2 {
  width: 150px;
  height: 150px;
  background: var(--color-primary-light);
  bottom: 20%;
  right: 10%;
  animation-delay: -2s;
}

.hero__orb--3 {
  width: 100px;
  height: 100px;
  background: var(--color-success);
  top: 50%;
  right: 30%;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

/* Hero Products */
.hero__products {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__product {
  position: absolute;
  animation: floatProduct 4s ease-in-out infinite;
}

.hero__product--main {
  z-index: 2;
  animation-delay: 0s;
}

.hero__product--secondary {
  left: 20%;
  top: 55%;
  z-index: 1;
  animation-delay: -2s;
}

@keyframes floatProduct {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Product Bottle */
.product-bottle {
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-bottle--small {
  transform: scale(0.75);
}

.product-bottle__cap {
  width: 40px;
  height: 30px;
  background: linear-gradient(180deg, #5a5a5a 0%, #2a2a2a 100%);
  border-radius: 8px 8px 4px 4px;
  box-shadow: var(--shadow-md);
  position: relative;
  z-index: 2;
}

.product-bottle__neck {
  width: 24px;
  height: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
  margin-top: -4px;
}

.product-bottle__body {
  width: 80px;
  height: 160px;
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(220,220,220,0.8) 100%);
  border-radius: 12px 12px var(--radius-xl) var(--radius-xl);
  box-shadow: var(--shadow-product), inset 0 0 30px rgba(255,255,255,0.5);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.5);
}

.product-bottle__liquid {
  position: absolute;
  bottom: 0;
  left: 8%;
  right: 8%;
  height: 70%;
  background: linear-gradient(180deg, #c9a962 0%, #a68c4e 50%, #8a7340 100%);
  border-radius: 8px 8px var(--radius-lg) var(--radius-lg);
  opacity: 0.85;
}

.product-bottle__liquid--alt {
  background: linear-gradient(180deg, #7fb069 0%, #5a8a4a 50%, #4a7a3a 100%);
}

.product-bottle__label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65px;
  padding: var(--space-sm);
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
  text-align: center;
  z-index: 2;
}

.product-bottle__type {
  display: block;
  font-size: 6px;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 2px;
}

.product-bottle__name {
  display: block;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text);
}

.product-bottle__reflection {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 20px;
  height: 60%;
  background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%);
  border-radius: var(--radius-lg);
  opacity: 0.5;
}

/* Hero Floating Badge */
.hero__floating-badge {
  position: absolute;
  top: 15%;
  right: 5%;
  width: 100px;
  height: 100px;
  border-radius: var(--radius-full);
  background: var(--gradient-accent);
  box-shadow: var(--shadow-glow), var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatBadge 3s ease-in-out infinite;
  z-index: 3;
}

@keyframes floatBadge {
  0%, 100% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.hero__floating-badge-inner {
  text-align: center;
}

.hero__floating-badge-text {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.2;
}

.hero__floating-badge-sub {
  display: block;
  font-size: 9px;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: rgba(45, 52, 54, 0.7);
  margin-top: 2px;
}

/* Hero Trust */
.hero__trust {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-lg) var(--space-xl);
  background: rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}

.hero__trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__trust-number {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-primary);
}

.hero__trust-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.hero__trust-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
}

/* Hero Scroll Indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.hero__scroll span {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero__scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(180deg, var(--color-text-muted) 0%, transparent 100%);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  50.01% {
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

/* --------------------------------------------------------------------------
   Story Section
   -------------------------------------------------------------------------- */
.story {
  padding: var(--space-5xl) 0;
  background: var(--color-surface);
}

.story__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.story__header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-3xl);
}

.story__header .section-label::before,
.story__header .section-label::after {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--color-accent);
}

.story__header .section-description {
  margin: 0 auto;
}

/* Story Cards */
.story__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.story-card {
  padding: var(--space-xl);
  background: var(--color-background);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.story-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-accent);
}

.story-card__icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-warm);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-lg);
  color: var(--color-accent-dark);
}

.story-card__label {
  display: block;
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent-dark);
  margin-bottom: var(--space-sm);
}

.story-card__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-sm);
}

.story-card__text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

/* Story Highlight */
.story__highlight {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  padding: var(--space-2xl);
  background: var(--gradient-warm);
  border-radius: var(--radius-2xl);
}

@media (min-width: 768px) {
  .story__highlight {
    grid-template-columns: 1fr 1fr;
    padding: var(--space-3xl);
  }
}

.story__highlight-title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-xl);
}

.story__highlight-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.story__highlight-list li {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
}

.story__highlight-list svg {
  color: var(--color-primary);
  flex-shrink: 0;
}

.story__highlight-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.story__highlight-image {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  position: relative;
}

.story__highlight-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    var(--color-primary-light) 0%, 
    var(--color-primary) 50%, 
    var(--color-accent) 100%);
  opacity: 0.3;
}

/* --------------------------------------------------------------------------
   Shop Section
   -------------------------------------------------------------------------- */
.shop {
  padding: var(--space-5xl) 0;
  background: var(--color-background);
}

.shop__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.shop__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 768px) {
  .shop__header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.shop__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.filter-group {
  position: relative;
}

.filter-select {
  appearance: none;
  padding: var(--space-sm) var(--space-2xl) var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
  font-family: inherit;
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23636e72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

.filter-select:hover,
.filter-select:focus {
  border-color: var(--color-primary);
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

/* Product Card */
.product-card {
  position: relative;
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-light);
}

.product-card__badge {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  padding: var(--space-xs) var(--space-sm);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  background: var(--color-accent);
  color: var(--color-text);
  border-radius: var(--radius-full);
  z-index: 2;
}

.product-card__badge--new {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

.product-card__image {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.product-card__image-bg {
  position: absolute;
  inset: 0;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__image-bg {
  transform: scale(1.05);
}

.product-card__image-bg--1 { background: var(--gradient-product-1); }
.product-card__image-bg--2 { background: var(--gradient-product-2); }
.product-card__image-bg--3 { background: var(--gradient-product-3); }
.product-card__image-bg--4 { background: var(--gradient-product-4); }
.product-card__image-bg--5 { background: var(--gradient-product-5); }
.product-card__image-bg--6 { background: var(--gradient-product-6); }
.product-card__image-bg--7 { background: var(--gradient-product-7); }
.product-card__image-bg--8 { background: var(--gradient-product-8); }

.product-card__quick-view {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.product-card:hover .product-card__quick-view {
  opacity: 1;
}

.product-card__content {
  padding: var(--space-lg);
}

.product-card__category {
  display: block;
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-xs);
}

.product-card__title {
  font-size: var(--text-lg);
  font-weight: 500;
  margin-bottom: var(--space-xs);
  line-height: var(--leading-snug);
}

.product-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: var(--leading-normal);
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-card__price {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-primary);
}

.product-card__add {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-text);
  color: var(--color-text-inverse);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
}

.product-card__add:hover {
  background: var(--color-primary);
  transform: scale(1.1);
}

.shop__cta {
  text-align: center;
}

/* --------------------------------------------------------------------------
   Testimonials Section
   -------------------------------------------------------------------------- */
.testimonials {
  padding: var(--space-5xl) 0;
  background: var(--color-surface);
}

.testimonials__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.testimonials__header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.testimonials__header .section-label::before,
.testimonials__header .section-label::after {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--color-accent);
}

/* Testimonial Grid */
.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

@media (min-width: 768px) {
  .testimonials__grid {
    grid-template-columns: 1.5fr 1fr;
  }
}

@media (min-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: 1.5fr 1fr 1fr;
  }
}

/* Testimonial Card */
.testimonial-card {
  padding: var(--space-xl);
  background: var(--color-background);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border-light);
}

.testimonial-card--featured {
  background: var(--gradient-warm);
  border-color: var(--color-accent);
}

@media (min-width: 768px) {
  .testimonial-card--featured {
    grid-row: span 2;
    display: flex;
    flex-direction: column;
  }
}

.testimonial-card__rating {
  color: var(--color-accent);
  font-size: var(--text-lg);
  margin-bottom: var(--space-md);
  letter-spacing: 2px;
}

.testimonial-card__quote {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-style: italic;
  line-height: var(--leading-relaxed);
  color: 

