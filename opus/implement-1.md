Re-imagined Aromatherapy Website: "The Scent"
Executive Summary
I will transform this template into a stunning, modern aromatherapy website with:

Elegant typography using Google Fonts (Cormorant Garamond + DM Sans)
Sophisticated color palette with warm earth tones and botanical accents
Modern UI patterns: glassmorphism, subtle parallax, micro-interactions
Enhanced accessibility and responsive design
Smooth animations using CSS and JavaScript
Detailed Execution Plan
Phase 1: Analysis & Architecture
 Analyze existing template structure
 Identify reusable components
 Plan modern design improvements
 Define color palette and typography
Phase 2: Implementation
 Create index.html with semantic HTML5 and Google Fonts
 Build styles.css with modern CSS techniques
 Develop main.js with smooth interactions
Phase 3: Enhancements
 Add scroll animations with Intersection Observer
 Implement mobile navigation
 Add hover effects and micro-interactions
 Ensure cross-browser compatibility
File 1: index.html
HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Premium aromatherapy essentials crafted with pure botanical ingredients for mindful daily rituals and natural well-being.">
  <meta name="keywords" content="aromatherapy, essential oils, natural wellness, botanical, self-care">
  <meta name="author" content="The Scent">
  
  <title>The Scent | Natural Aromatherapy for Mindful Living</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>">
</head>
<body>
  <!-- Skip to main content for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Announcement Bar -->
  <div class="announcement-bar" role="banner">
    <div class="announcement-bar__content">
      <span class="announcement-bar__icon">✦</span>
      <p>Complimentary shipping on orders over $75 | Use code <strong>RITUAL15</strong> for 15% off</p>
      <span class="announcement-bar__icon">✦</span>
    </div>
  </div>

  <!-- Header -->
  <header class="header" id="header">
    <div class="header__container">
      <!-- Logo -->
      <a href="#" class="header__logo" aria-label="The Scent - Home">
        <div class="header__logo-mark">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
            <path d="M20 8C20 8 14 14 14 20C14 26 20 32 20 32C20 32 26 26 26 20C26 14 20 8 20 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="3" fill="currentColor"/>
          </svg>
        </div>
        <span class="header__logo-text">The Scent</span>
      </a>

      <!-- Navigation -->
      <nav class="header__nav" id="mainNav" aria-label="Main navigation">
        <ul class="header__nav-list">
          <li><a href="#hero" class="header__nav-link active">Home</a></li>
          <li><a href="#about" class="header__nav-link">About</a></li>
          <li><a href="#products" class="header__nav-link">Shop</a></li>
          <li><a href="#testimonials" class="header__nav-link">Reviews</a></li>
          <li><a href="#contact" class="header__nav-link">Contact</a></li>
        </ul>
      </nav>

      <!-- Header Actions -->
      <div class="header__actions">
        <button class="header__search-btn" aria-label="Search products">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </button>
        
        <button class="header__cart-btn" id="cartBtn" aria-label="Shopping cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="header__cart-count" id="cartCount">0</span>
        </button>

        <!-- Mobile Menu Toggle -->
        <button class="header__menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
          <span class="header__menu-bar"></span>
          <span class="header__menu-bar"></span>
          <span class="header__menu-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Overlay -->
  <div class="mobile-nav" id="mobileNav" aria-hidden="true">
    <nav class="mobile-nav__content">
      <ul class="mobile-nav__list">
        <li><a href="#hero" class="mobile-nav__link">Home</a></li>
        <li><a href="#about" class="mobile-nav__link">About</a></li>
        <li><a href="#products" class="mobile-nav__link">Shop</a></li>
        <li><a href="#testimonials" class="mobile-nav__link">Reviews</a></li>
        <li><a href="#contact" class="mobile-nav__link">Contact</a></li>
      </ul>
    </nav>
  </div>

  <!-- Main Content -->
  <main id="main-content">
    
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero__container">
        <div class="hero__content" data-animate="fade-up">
          <span class="hero__badge">
            <span class="hero__badge-dot"></span>
            Artisan Crafted
          </span>
          
          <h1 class="hero__title">
            Botanical Aromatherapy for 
            <span class="hero__title-accent">Mindful Living</span>
          </h1>
          
          <p class="hero__description">
            Discover our curated collection of pure essential oils and botanical blends, 
            thoughtfully crafted to transform your daily rituals into moments of tranquility and renewal.
          </p>
          
          <div class="hero__cta">
            <a href="#products" class="btn btn--primary">
              <span>Explore Collection</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" class="btn btn--outline">
              Our Story
            </a>
          </div>
          
          <div class="hero__features">
            <div class="hero__feature">
              <span class="hero__feature-icon">🌿</span>
              <span>100% Natural</span>
            </div>
            <div class="hero__feature">
              <span class="hero__feature-icon">✧</span>
              <span>Small Batch</span>
            </div>
            <div class="hero__feature">
              <span class="hero__feature-icon">♡</span>
              <span>Cruelty Free</span>
            </div>
          </div>
        </div>

        <div class="hero__visual" data-animate="fade-left">
          <div class="hero__visual-wrapper">
            <!-- Decorative Elements -->
            <div class="hero__visual-ring hero__visual-ring--1"></div>
            <div class="hero__visual-ring hero__visual-ring--2"></div>
            
            <!-- Product Display -->
            <div class="hero__product-display">
              <div class="hero__bottle hero__bottle--main">
                <div class="hero__bottle-cap"></div>
                <div class="hero__bottle-neck"></div>
                <div class="hero__bottle-body">
                  <div class="hero__bottle-liquid"></div>
                  <div class="hero__bottle-label">
                    <span class="hero__bottle-brand">The Scent</span>
                    <span class="hero__bottle-name">Serenity Blend</span>
                    <span class="hero__bottle-notes">Lavender • Chamomile</span>
                  </div>
                </div>
              </div>
              
              <div class="hero__bottle hero__bottle--secondary">
                <div class="hero__bottle-cap"></div>
                <div class="hero__bottle-neck"></div>
                <div class="hero__bottle-body">
                  <div class="hero__bottle-liquid hero__bottle-liquid--alt"></div>
                  <div class="hero__bottle-label">
                    <span class="hero__bottle-brand">The Scent</span>
                    <span class="hero__bottle-name">Energy Boost</span>
                    <span class="hero__bottle-notes">Citrus • Mint</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="hero__floating-badge">
              <span class="hero__floating-badge-text">Best<br>Seller</span>
            </div>

            <!-- Botanical Decoration -->
            <div class="hero__botanical hero__botanical--1">
              <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 80V40M30 40C30 40 10 35 10 20C10 5 30 0 30 0C30 0 50 5 50 20C50 35 30 40 30 40Z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- About / Philosophy Section -->
    <section class="about" id="about">
      <div class="about__container">
        <div class="about__header" data-animate="fade-up">
          <span class="section-label">Our Philosophy</span>
          <h2 class="section-title">Crafted with Intention,<br>Designed for Ritual</h2>
          <p class="section-description">
            We believe in the transformative power of scent. Each blend is meticulously 
            composed using the finest botanical ingredients, creating sensory experiences 
            that nurture both body and spirit.
          </p>
        </div>

        <div class="about__grid">
          <article class="about__card" data-animate="fade-up" data-delay="100">
            <div class="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="1.5"/>
                <path d="M24 14v20M14 24h20" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <span class="about__card-label">Pure Ingredients</span>
            <h3 class="about__card-title">Nature's Finest</h3>
            <p class="about__card-text">
              Every ingredient is ethically sourced and rigorously tested. 
              We use only 100% pure essential oils with no synthetic additives.
            </p>
          </article>

          <article class="about__card" data-animate="fade-up" data-delay="200">
            <div class="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C24 4 8 12 8 24c0 12 16 20 16 20s16-8 16-20c0-12-16-20-16-20z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <span class="about__card-label">Artisan Crafted</span>
            <h3 class="about__card-title">Small Batch Mastery</h3>
            <p class="about__card-text">
              Each blend is handcrafted in small batches by our master aromatherapists, 
              ensuring exceptional quality and consistency.
            </p>
          </article>

          <article class="about__card" data-animate="fade-up" data-delay="300">
            <div class="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1.5"/>
                <path d="M24 8v4M24 36v4M8 24h4M36 24h4M12.8 12.8l2.8 2.8M32.4 32.4l2.8 2.8M12.8 35.2l2.8-2.8M32.4 15.6l2.8-2.8" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <span class="about__card-label">Wellness Focus</span>
            <h3 class="about__card-title">Holistic Benefits</h3>
            <p class="about__card-text">
              Our formulations are designed to support emotional balance, 
              mental clarity, and physical relaxation through aromatherapy.
            </p>
          </article>
        </div>

        <!-- Stats Bar -->
        <div class="about__stats" data-animate="fade-up">
          <div class="about__stat">
            <span class="about__stat-number" data-count="50">0</span>
            <span class="about__stat-suffix">+</span>
            <span class="about__stat-label">Essential Oils</span>
          </div>
          <div class="about__stat-divider"></div>
          <div class="about__stat">
            <span class="about__stat-number" data-count="10">0</span>
            <span class="about__stat-suffix">K+</span>
            <span class="about__stat-label">Happy Customers</span>
          </div>
          <div class="about__stat-divider"></div>
          <div class="about__stat">
            <span class="about__stat-number" data-count="8">0</span>
            <span class="about__stat-suffix"> Years</span>
            <span class="about__stat-label">Of Expertise</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products" id="products">
      <div class="products__container">
        <div class="products__header" data-animate="fade-up">
          <div class="products__header-text">
            <span class="section-label">Our Collection</span>
            <h2 class="section-title">Curated Aromatherapy Essentials</h2>
          </div>
          
          <div class="products__filters">
            <button class="products__filter-btn active" data-filter="all">All</button>
            <button class="products__filter-btn" data-filter="oils">Essential Oils</button>
            <button class="products__filter-btn" data-filter="blends">Blends</button>
            <button class="products__filter-btn" data-filter="soaps">Soaps</button>
          </div>
        </div>

        <div class="products__grid" id="productsGrid">
          
          <!-- Product Card 1 -->
          <article class="product-card" data-category="blends" data-price="38" data-animate="fade-up">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #E8D5B7 0%, #B8956C 100%)"></div>
              <span class="product-card__badge">Best Seller</span>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Signature Blend</span>
              <h3 class="product-card__title">Serenity Essential Oil Blend</h3>
              <p class="product-card__description">Lavender, chamomile & ylang-ylang</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$38.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Serenity Essential Oil Blend" data-price="38">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 2 -->
          <article class="product-card" data-category="oils" data-price="28" data-animate="fade-up" data-delay="100">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #D4E5D2 0%, #8FB58A 100%)"></div>
              <span class="product-card__badge product-card__badge--new">New</span>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Pure Essential Oil</span>
              <h3 class="product-card__title">Pure Eucalyptus Oil</h3>
              <p class="product-card__description">Refreshing & invigorating</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$28.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Pure Eucalyptus Oil" data-price="28">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 3 -->
          <article class="product-card" data-category="blends" data-price="42" data-animate="fade-up" data-delay="200">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #FFE4B5 0%, #F5A623 100%)"></div>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Energy Blend</span>
              <h3 class="product-card__title">Citrus Sunrise Blend</h3>
              <p class="product-card__description">Orange, lemon & grapefruit</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$42.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Citrus Sunrise Blend" data-price="42">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 4 -->
          <article class="product-card" data-category="soaps" data-price="16" data-animate="fade-up" data-delay="300">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #E8D8F0 0%, #B891C5 100%)"></div>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Artisan Soap</span>
              <h3 class="product-card__title">Lavender Dreams Soap</h3>
              <p class="product-card__description">Cold-processed with shea butter</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$16.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Lavender Dreams Soap" data-price="16">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 5 -->
          <article class="product-card" data-category="oils" data-price="32" data-animate="fade-up">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #D5E8E8 0%, #7ABFBF 100%)"></div>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Pure Essential Oil</span>
              <h3 class="product-card__title">Tea Tree Purify Oil</h3>
              <p class="product-card__description">Cleansing & antibacterial</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$32.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Tea Tree Purify Oil" data-price="32">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 6 -->
          <article class="product-card" data-category="soaps" data-price="18" data-animate="fade-up" data-delay="100">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #FFE5E5 0%, #E8A5A5 100%)"></div>
              <span class="product-card__badge product-card__badge--limited">Limited</span>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Artisan Soap</span>
              <h3 class="product-card__title">Rose Garden Soap Bar</h3>
              <p class="product-card__description">With rose petals & vitamin E</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$18.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Rose Garden Soap Bar" data-price="18">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 7 -->
          <article class="product-card" data-category="blends" data-price="45" data-animate="fade-up" data-delay="200">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #2D3436 0%, #636E72 100%)"></div>
              <span class="product-card__badge product-card__badge--premium">Premium</span>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Men's Collection</span>
              <h3 class="product-card__title">Sandalwood Beard Oil</h3>
              <p class="product-card__description">Nourishing & conditioning</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$45.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Sandalwood Beard Oil" data-price="45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

          <!-- Product Card 8 -->
          <article class="product-card" data-category="oils" data-price="35" data-animate="fade-up" data-delay="300">
            <div class="product-card__image">
              <div class="product-card__image-bg" style="--gradient: linear-gradient(135deg, #C9E4DE 0%, #6B9080 100%)"></div>
              <div class="product-card__actions">
                <button class="product-card__action" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__action" aria-label="Quick view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Pure Essential Oil</span>
              <h3 class="product-card__title">Peppermint Focus Oil</h3>
              <p class="product-card__description">Mental clarity & energy</p>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$35.00</span>
                </div>
                <button class="product-card__add-btn" data-product="Peppermint Focus Oil" data-price="35">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          </article>

        </div>

        <div class="products__cta" data-animate="fade-up">
          <a href="#" class="btn btn--outline btn--large">
            View All Products
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
          <span class="section-label">Customer Stories</span>
          <h2 class="section-title">Loved by Thousands</h2>
        </div>

        <div class="testimonials__slider" data-animate="fade-up">
          <div class="testimonials__track" id="testimonialsTrack">
            
            <!-- Testimonial 1 -->
            <article class="testimonial-card">
              <div class="testimonial-card__rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <blockquote class="testimonial-card__quote">
                "The Serenity Blend has completely transformed my evening routine. 
                I feel calmer, sleep better, and wake up refreshed. This is self-care at its finest."
              </blockquote>
              <div class="testimonial-card__author">
                <div class="testimonial-card__avatar">SR</div>
                <div class="testimonial-card__info">
                  <span class="testimonial-card__name">Sarah Richardson</span>
                  <span class="testimonial-card__title">Wellness Enthusiast</span>
                </div>
              </div>
            </article>

            <!-- Testimonial 2 -->
            <article class="testimonial-card">
              <div class="testimonial-card__rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <blockquote class="testimonial-card__quote">
                "As someone who's tried countless aromatherapy brands, The Scent stands out 
                for its purity and potency. The citrus blend is my morning essential."
              </blockquote>
              <div class="testimonial-card__author">
                <div class="testimonial-card__avatar">MK</div>
                <div class="testimonial-card__info">
                  <span class="testimonial-card__name">Michael Kim</span>
                  <span class="testimonial-card__title">Yoga Instructor</span>
                </div>
              </div>
            </article>

            <!-- Testimonial 3 -->
            <article class="testimonial-card">
              <div class="testimonial-card__rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <blockquote class="testimonial-card__quote">
                "I gifted the soap collection to my mother and she absolutely loves them. 
                The scents are sophisticated and the packaging is beautifully done."
              </blockquote>
              <div class="testimonial-card__author">
                <div class="testimonial-card__avatar">EL</div>
                <div class="testimonial-card__info">
                  <span class="testimonial-card__name">Emma Laurent</span>
                  <span class="testimonial-card__title">Verified Buyer</span>
                </div>
              </div>
            </article>

          </div>
          
          <div class="testimonials__nav">
            <button class="testimonials__nav-btn" id="prevTestimonial" aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div class="testimonials__dots" id="testimonialDots"></div>
            <button class="testimonials__nav-btn" id="nextTestimonial" aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter / CTA Section -->
    <section class="newsletter" id="contact">
      <div class="newsletter__container" data-animate="fade-up">
        <div class="newsletter__content">
          <span class="section-label section-label--light">Join Our Community</span>
          <h2 class="newsletter__title">Begin Your Aromatherapy Journey</h2>
          <p class="newsletter__description">
            Subscribe to receive exclusive offers, wellness tips, and be the first 
            to know about new product launches.
          </p>
          
          <form class="newsletter__form" id="newsletterForm">
            <div class="newsletter__input-group">
              <input 
                type="email" 
                class="newsletter__input" 
                placeholder="Enter your email address" 
                required
                aria-label="Email address"
              >
              <button type="submit" class="newsletter__submit">
                Subscribe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            <p class="newsletter__privacy">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </form>
        </div>
        
        <div class="newsletter__visual">
          <div class="newsletter__visual-circle"></div>
          <div class="newsletter__visual-icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10C40 10 20 20 20 40C20 60 40 70 40 70C40 70 60 60 60 40C60 20 40 10 40 10Z" stroke="currentColor" stroke-width="2"/>
              <circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M40 32V48M32 40H48" stroke="currentColor" stroke-width="2"/>
            </svg>
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
          <a href="#" class="footer__logo">
            <div class="footer__logo-mark">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20 8C20 8 14 14 14 20C14 26 20 32 20 32C20 32 26 26 26 20C26 14 20 8 20 8Z" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="20" cy="20" r="3" fill="currentColor"/>
              </svg>
            </div>
            <span>The Scent</span>
          </a>
          <p class="footer__tagline">
            Botanical aromatherapy crafted for mindful living. 
            Transform your daily rituals into moments of tranquility.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Follow us on Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Follow us on Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Follow us on Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6c-2.5 0-5 2-5 5 0 2 1 3.5 2.5 4.5-.5 2-1 4-1 4l3-2c.5.2 1 .5 1.5.5 2.5 0 5-2 5-5s-2.5-5-5-5z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Follow us on Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.4-6.4M20 4l-6.4 6.4"/>
              </svg>
            </a>
          </div>
        </div>

        <nav class="footer__nav">
          <div class="footer__nav-group">
            <h4 class="footer__nav-title">Shop</h4>
            <ul class="footer__nav-list">
              <li><a href="#">Essential Oils</a></li>
              <li><a href="#">Blends</a></li>
              <li><a href="#">Soaps</a></li>
              <li><a href="#">Gift Sets</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div class="footer__nav-group">
            <h4 class="footer__nav-title">Company</h4>
            <ul class="footer__nav-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div class="footer__nav-group">
            <h4 class="footer__nav-title">Support</h4>
            <ul class="footer__nav-list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
        </nav>

      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © 2025 The Scent. All rights reserved. Crafted with intention.
        </p>
        <div class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Toast Notification -->
  <div class="toast" id="toast" role="alert" aria-live="polite">
    <div class="toast__content">
      <svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22,4 12,14.01 9,11.01"/>
      </svg>
      <span class="toast__message" id="toastMessage">Item added to cart</span>
    </div>
  </div>

  <!-- JavaScript -->
  <script src="main.js"></script>
</body>
</html>
File 2: styles.css
CSS

/* ========================================
   THE SCENT - AROMATHERAPY WEBSITE
   Modern, Elegant CSS Styles
   ======================================== */

/* ----------------------------------------
   CSS Custom Properties (Design Tokens)
   ---------------------------------------- */
:root {
  /* Color Palette - Warm Earth Tones */
  --color-primary: #8B7355;
  --color-primary-light: #A69076;
  --color-primary-dark: #6B5844;
  --color-accent: #D4A574;
  --color-accent-light: #E8CDB5;
  
  /* Neutral Colors */
  --color-bg: #FAF8F5;
  --color-bg-alt: #F5F1EC;
  --color-bg-dark: #1A1612;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #FFFFFF;
  
  /* Text Colors */
  --color-text: #2C2416;
  --color-text-secondary: #6B5D4D;
  --color-text-muted: #9A8B7A;
  --color-text-inverse: #FAF8F5;
  
  /* Semantic Colors */
  --color-success: #4A7C59;
  --color-error: #C45B5B;
  --color-warning: #D4A574;
  
  /* Borders & Shadows */
  --color-border: #E8E2DA;
  --color-border-light: #F0EBE4;
  
  --shadow-sm: 0 1px 2px rgba(44, 36, 22, 0.04);
  --shadow-md: 0 4px 12px rgba(44, 36, 22, 0.08);
  --shadow-lg: 0 12px 40px rgba(44, 36, 22, 0.12);
  --shadow-xl: 0 24px 60px rgba(44, 36, 22, 0.16);
  
  /* Typography */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  
  /* Layout */
  --container-max: 1280px;
  --container-padding: 1.5rem;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Z-Index Scale */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal: 400;
  --z-toast: 500;
}

/* ----------------------------------------
   CSS Reset & Base Styles
   ---------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
  overflow-x: hidden;
}

img,
picture,
video,
svg {
  display: block;
  max-width: 100%;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

/* Skip Link for Accessibility */
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-text);
  color: var(--color-text-inverse);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  z-index: var(--z-toast);
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--space-4);
}

/* ----------------------------------------
   Utility Classes
   ---------------------------------------- */
.section-label {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.section-label--light {
  color: var(--color-accent-light);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 42rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-md), 0 0 0 0 var(--color-primary);
}

.btn--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), 0 0 0 4px rgba(139, 115, 85, 0.15);
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
}

.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(139, 115, 85, 0.04);
}

.btn--large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

/* ----------------------------------------
   Announcement Bar
   ---------------------------------------- */
.announcement-bar {
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: var(--space-3) var(--container-padding);
  text-align: center;
}

.announcement-bar__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
}

.announcement-bar__icon {
  color: var(--color-accent);
  font-size: var(--text-xs);
}

.announcement-bar__content strong {
  color: var(--color-accent);
}

/* ----------------------------------------
   Header
   ---------------------------------------- */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(250, 248, 245, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.header.scrolled {
  box-shadow: var(--shadow-sm);
}

.header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-4) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.header__logo-mark {
  width: 36px;
  height: 36px;
  color: var(--color-primary);
}

.header__logo-text {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* Navigation */
.header__nav {
  display: none;
}

@media (min-width: 1024px) {
  .header__nav {
    display: block;
  }
}

.header__nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.header__nav-link {
  position: relative;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: var(--space-2) 0;
  transition: color var(--transition-fast);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.header__nav-link:hover,
.header__nav-link.active {
  color: var(--color-text);
}

.header__nav-link:hover::after,
.header__nav-link.active::after {
  width: 100%;
}

/* Header Actions */
.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.header__search-btn,
.header__cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.header__search-btn:hover,
.header__cart-btn:hover {
  background: var(--color-bg-alt);
  color: var(--color-text);
}

.header__cart-count {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 18px;
  height: 18px;
  background: var(--color-accent);
  color: var(--color-text);
  font-size: 10px;
  font-weight: 600;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

/* Mobile Menu Toggle */
.header__menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 12px;
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.header__menu-toggle:hover {
  background: var(--color-bg-alt);
}

.header__menu-bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  transform-origin: center;
}

.header__menu-toggle.active .header__menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__menu-toggle.active .header__menu-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.header__menu-toggle.active .header__menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (min-width: 1024px) {
  .header__menu-toggle {
    display: none;
  }
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(250, 248, 245, 0.98);
  backdrop-filter: blur(20px);
  z-index: var(--z-fixed);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav__list {
  text-align: center;
}

.mobile-nav__link {
  display: block;
  font-family: var(--font-serif);
  font-size: var(--text-4xl);
  font-weight: 500;
  padding: var(--space-4);
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.mobile-nav__link:hover {
  color: var(--color-primary);
}

/* ----------------------------------------
   Hero Section
   ---------------------------------------- */
.hero {
  position: relative;
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: var(--space-16) 0;
}

.hero__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
  }
}

/* Hero Content */
.hero__content {
  max-width: 600px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  background: var(--color-surface);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  margin-bottom: var(--space-6);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: var(--radius-full);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: var(--space-6);
}

.hero__title-accent {
  display: block;
  color: var(--color-primary);
}

.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.hero__features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.hero__feature {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.hero__feature-icon {
  font-size: var(--text-base);
}

/* Hero Visual */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

@media (min-width: 1024px) {
  .hero__visual {
    min-height: 500px;
  }
}

.hero__visual-wrapper {
  position: relative;
  width: 100%;
  max-width: 450px;
}

.hero__visual-ring {
  position: absolute;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}

.hero__visual-ring--1 {
  width: 100%;
  padding-bottom: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ringRotate 30s linear infinite;
}

.hero__visual-ring--2 {
  width: 80%;
  padding-bottom: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ringRotate 25s linear infinite reverse;
}

@keyframes ringRotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Product Display */
.hero__product-display {
  position: relative;
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  z-index: 1;
}

.hero__bottle {
  position: relative;
  width: 100px;
  transition: transform var(--transition-slow);
}

.hero__bottle:hover {
  transform: translateY(-10px);
}

.hero__bottle--main {
  z-index: 2;
}

.hero__bottle--secondary {
  transform: translateY(20px) scale(0.9);
  opacity: 0.9;
}

.hero__bottle--secondary:hover {
  transform: translateY(10px) scale(0.9);
}

.hero__bottle-cap {
  width: 40%;
  height: 30px;
  margin: 0 auto;
  background: linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%);
  border-radius: 4px 4px 0 0;
  position: relative;
}

.hero__bottle-neck {
  width: 30%;
  height: 15px;
  margin: 0 auto;
  background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%);
  border: 1px solid var(--color-border);
}

.hero__bottle-body {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, 
    rgba(255,255,255,0.9) 0%, 
    rgba(255,255,255,0.7) 50%,
    rgba(255,255,255,0.9) 100%
  );
  border: 1px solid var(--color-border);
  border-radius: 8px 8px 24px 24px;
  overflow: hidden;
  box-shadow: 
    inset 0 0 30px rgba(255,255,255,0.5),
    var(--shadow-lg);
}

.hero__bottle-liquid {
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 60%;
  background: linear-gradient(180deg, #D4A574 0%, #8B7355 100%);
  border-radius: 0 0 20px 20px;
  opacity: 0.9;
}

.hero__bottle-liquid--alt {
  background: linear-gradient(180deg, #A8D5BA 0%, #6B9080 100%);
}

.hero__bottle-label {
  position: absolute;
  top: 35%;
  left: 10%;
  right: 10%;
  background: rgba(255,255,255,0.95);
  padding: var(--space-3);
  text-align: center;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

.hero__bottle-brand {
  display: block;
  font-family: var(--font-serif);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 2px;
}

.hero__bottle-name {
  display: block;
  font-family: var(--font-serif);
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2px;
}

.hero__bottle-notes {
  display: block;
  font-size: 7px;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

/* Floating Badge */
.hero__floating-badge {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 80px;
  height: 80px;
  background: var(--color-accent);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  animation: float 4s ease-in-out infinite;
  z-index: 3;
}

.hero__floating-badge-text {
  font-family: var(--font-serif);
  font-size: var(--text-xs);
  font-weight: 600;
  text-align: center;
  color: var(--color-text);
  line-height: 1.3;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Botanical Decoration */
.hero__botanical {
  position: absolute;
  color: var(--color-border);
  opacity: 0.6;
  z-index: 0;
}

.hero__botanical--1 {
  bottom: 5%;
  left: -5%;
  width: 60px;
}

/* Scroll Indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, var(--color-primary) 0%, transparent 100%);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% {
    transform: scaleY(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

/* ----------------------------------------
   About Section
   ---------------------------------------- */
.about {
  padding: var(--space-24) 0;
  background: var(--color-surface);
}

.about__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.about__header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-16);
}

.about__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-16);
}

.about__card {
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all var(--transition-base);
}

.about__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

.about__card-icon {
  width: 48px;
  height: 48px;
  color: var(--color-primary);
  margin-bottom: 
