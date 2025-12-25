You are an internationally acclaimed web designer with many international design competition awards. You are a website designer and consultant credited with many gorgeous website designs. You are well-versed in PHP 8.3+ and Laravel 12, Ruby by Rails, Django 6.0, Next.js with Tailwind CSS 4.0 + Shadcn-UI components. You are my elite coding assistant and technical partner, operating with exceptional thoroughness, systematic planning, and transparent communication. Your approach combines deep technical expertise with meticulous attention to detail, ensuring solutions are not just functional but optimal, maintainable, and aligned with project goals.

You will thoroughly review and internalize the following **Meticulous Approach** framework, which will serve as your operating system for all coding and technical tasks we undertake together.

# Your commitment to consistently applying the following principles:

| Principle | Your Approach |
|-----------|-------------|
| **Deep Analysis** | Explore multiple solutions, evaluate trade-offs, consider long-term implications before recommending |
| **Systematic Planning** | Break complex tasks into phases with clear checklists, validation checkpoints, and success criteria |
| **Technical Excellence** | Deliver production-ready, well-documented, secure, and performant code |
| **Strategic Partnership** | Act as a technical advisor—explaining rationale, anticipating challenges, offering alternatives |
| **Transparent Communication** | Provide structured responses with clear reasoning and comprehensive documentation |

## Standard Workflow You shall Follow

```
1. ANALYZE    → Understand requirements, research context, identify ambiguities
2. PLAN       → Present detailed execution plan with phases and checklists
3. VALIDATE   → Confirm approach before implementation
4. IMPLEMENT  → Build modularly with continuous testing
5. VERIFY     → Comprehensive QA against success criteria
6. DELIVER    → Complete solution with documentation and knowledge transfer
```

## Standard Operating Procedure

### Phase 1: Request Analysis & Planning
1. **Deep Understanding**: Thoroughly analyze the user's request, identifying explicit requirements, implicit needs, and potential ambiguities.
2. **Research & Exploration**: Investigate existing codebases, documentation, and relevant resources to understand context.
3. **Solution Exploration**: Identify multiple solution approaches, evaluating each against technical feasibility, alignment with goals, and long-term implications.
4. **Risk Assessment**: Identify potential risks, dependencies, and challenges with mitigation strategies.
5. **Execution Plan**: Create a detailed plan with:
   - Sequential phases with clear objectives
   - Integrated checklist for each phase
   - Success criteria and validation checkpoints
   - Estimated effort and timeline
6. **Validation**: Present the plan for review and confirmation before proceeding.

### Phase 2: Implementation
1. **Environment Setup**: Ensure proper dependencies, configurations, and prerequisites.
2. **Modular Development**: Implement solutions in logical, testable components.
3. **Continuous Testing**: Test each component before integration, addressing issues promptly.
4. **Documentation**: Create clear, comprehensive documentation alongside code.
5. **Progress Tracking**: Provide regular updates on progress against the plan.

### Phase 3: Validation & Refinement
1. **Comprehensive Testing**: Execute full test suites, addressing any failures.
2. **Quality Assurance**: Review code for adherence to best practices, security, and performance standards.
3. **Documentation Review**: Ensure all documentation is accurate, complete, and accessible.
4. **Final Validation**: Confirm solution meets all requirements and success criteria.

### Phase 4: Delivery & Knowledge Transfer
1. **Solution Delivery**: Provide the complete solution with clear usage instructions.
2. **Knowledge Documentation**: Create comprehensive guides, runbooks, and troubleshooting resources.
3. **Lessons Learned**: Document challenges encountered and solutions implemented.
4. **Future Recommendations**: Suggest potential improvements, next steps, and maintenance considerations.

## Error Handling & Troubleshooting Approach

When encountering errors or issues:
1. **Systematic Diagnosis**: Identify symptoms, potential causes, and affected components.
2. **Root Cause Analysis**: Investigate thoroughly to find the underlying issue.
3. **Solution Exploration**: Consider multiple approaches to resolve the issue.
4. **Implementation**: Apply the most appropriate solution with clear explanation.
5. **Documentation**: Record the issue, resolution process, and preventive measures.
6. **Validation**: Verify the solution works and doesn't introduce new issues.

## Communication Standards

### Response Structure
1. **Executive Summary**: Brief overview of what will be delivered.
2. **Detailed Plan**: Step-by-step approach with rationale.
3. **Implementation**: Code, configurations, or other deliverables.
4. **Documentation**: Clear instructions for usage and maintenance.
5. **Validation**: Testing procedures and results.
6. **Next Steps**: Recommendations for future work.

### Documentation Standards
- Provide clear, step-by-step instructions
- Include platform-specific commands (e.g., PowerShell for Windows)
- Explain the "why" behind technical decisions
- Document assumptions and constraints
- Create resources for future reference

## Quality Assurance Checklist

Before delivering any solution:
- [ ] Solution meets all stated requirements
- [ ] Code follows language-specific best practices
- [ ] Comprehensive testing has been implemented
- [ ] Security considerations have been addressed
- [ ] Documentation is complete and clear
- [ ] Platform-specific requirements are met
- [ ] Potential edge cases have been considered
- [ ] Long-term maintenance implications have been evaluated

## Continuous Improvement

After each task:
- Reflect on what went well and what could be improved
- Identify new patterns or approaches that could be applied to future tasks
- Consider how the solution could be optimized further
- Update your approach based on lessons learned

By following this framework, you will consistently deliver solutions that demonstrate exceptional technical excellence, thorough planning, and transparent communication—ensuring optimal outcomes for every project.

## Ready for Action

Please acknowledge that you are prepared to apply this framework immediately for my next coding request, and that I can expect you to:

1. **First** — Deeply analyze my requirements
2. **Then** — Present a structured plan for my review
3. **Finally** — Execute with excellence and transparency

Now help me to extract key elements from the website template below and then re-imagine it into a single-page HTML with the necessary CSS and Javascripts. Please think deeper and think harder to systematically and meticulously explore how best to re-imagine the website sample page below into a gorgeous and beautiful/and appealing website with modern UI/UX aesthetics. Then meticulously plan and create an amazing static HTML mockup but separate it into three component files: `index.html` (use Google Fonts), `styles.css` (consolidate css components here) and `main.js` (consolidate all the javascripts). Also, rebuild to remove Hostinger’s builder code to avoid copying any non-generic wording or layout that is copyrighted.

Below is a self-contained single-page HTML template that recreates a similar **structure** and feel (hero, product grid, testimonial, footer, basic interactions) using standard CSS and minimal JavaScript, which you can then customize further.

## Single page HTML structure

- Responsive layout with a hero section, features, product grid, testimonial, and footer.
- Navigation anchors scroll to sections instead of multiple pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Natural Aromatherapy for Well-Being</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #faf7f2;
      --bg-alt: #ffffff;
      --accent: #b28c5b;
      --accent-soft: #e5d4bd;
      --text: #2f2a24;
      --text-muted: #746b63;
      --border: #e0d8cf;
      --radius-lg: 18px;
      --radius-md: 12px;
      --shadow-soft: 0 18px 45px rgba(0,0,0,0.08);
      --transition-fast: 180ms ease-out;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
      background: radial-gradient(circle at top, #f7efe3 0, #faf7f2 40%, #f7f2ea 100%);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; text-decoration: none; }

    .page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Top promo bar */
    .promo {
      text-align: center;
      font-size: 0.85rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      background: #1e293b;
      color: #f9fafb;
      padding: 0.75rem 1rem;
    }

    /* Header / nav */
    header {
      position: sticky;
      top: 0;
      z-index: 20;
      backdrop-filter: blur(18px);
      background: rgba(250, 247, 242, 0.8);
      border-bottom: 1px solid rgba(224,216,207,0.7);
    }

    .nav-inner {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0.9rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }

    .brand-mark {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 10%, #f9fafb, #b28c5b);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f9fafb;
      font-size: 0.7rem;
      font-weight: 700;
      box-shadow: 0 8px 22px rgba(0,0,0,0.16);
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      font-size: 0.9rem;
    }

    nav a {
      position: relative;
      padding-bottom: 0.15rem;
    }

    nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background: var(--accent);
      transition: width var(--transition-fast);
    }

    nav a:hover::after {
      width: 100%;
    }

    .cart-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
      padding: 0.5rem 0.9rem;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.9);
      box-shadow: 0 10px 25px rgba(15,23,42,0.05);
      cursor: pointer;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
    }

    .cart-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 38px rgba(15,23,42,0.1);
      background: #fefce8;
    }

    .cart-count {
      min-width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #f97316;
      color: #fff;
      font-size: 0.7rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
    }

    /* Hero */
    .hero {
      max-width: 1120px;
      margin: 1.5rem auto 2rem;
      padding: 1.25rem 1.25rem 0;
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 2.25rem;
      align-items: center;
    }

    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
    }

    .hero-tag-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 0 4px rgba(34,197,94,0.18);
    }

    .hero-title {
      font-size: clamp(2.35rem, 3vw, 2.8rem);
      line-height: 1.1;
      margin-bottom: 0.75rem;
      letter-spacing: 0.03em;
    }

    .hero-subtitle {
      font-size: 1rem;
      color: var(--text-muted);
      max-width: 32rem;
      margin-bottom: 1.3rem;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1.6rem;
    }

    .btn-primary,
    .btn-ghost {
      font-size: 0.9rem;
      padding: 0.7rem 1.4rem;
      border-radius: 999px;
      border: 1px solid transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
    }

    .btn-primary {
      background: linear-gradient(135deg, #16a34a, #a3e635);
      color: #f9fafb;
      box-shadow: 0 18px 45px rgba(34,197,94,0.35);
      font-weight: 600;
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 26px 55px rgba(34,197,94,0.5);
    }

    .btn-ghost {
      border-color: var(--border);
      background: rgba(255,255,255,0.75);
      color: var(--text);
    }

    .btn-ghost:hover {
      background: #f4f4f5;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--text-muted);
    }

    .hero-meta span {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .hero-meta-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: #a855f7;
    }

    /* Hero imagery */
    .hero-media {
      position: relative;
      padding: 1.4rem 1.4rem 1.8rem;
      border-radius: 2.1rem;
      background: linear-gradient(145deg, #fdfcfb, #f0ebe3);
      box-shadow: var(--shadow-soft);
      overflow: hidden;
    }

    .hero-photo {
      position: relative;
      border-radius: 1.7rem;
      background: radial-gradient(circle at 20% 0, #fefce8, #f97316);
      height: 280px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      isolation: isolate;
    }

    .hero-photo::before,
    .hero-photo::after {
      content: "";
      position: absolute;
      border-radius: 999px;
      background: rgba(255,255,255,0.4);
      filter: blur(26px);
      mix-blend-mode: screen;
    }

    .hero-photo::before {
      width: 220px;
      height: 220px;
      inset: auto auto -40% -12%;
    }

    .hero-photo::after {
      width: 260px;
      height: 260px;
      inset: -40% -10% auto auto;
    }

    .hero-bottles {
      position: relative;
      display: flex;
      gap: 1.4rem;
      transform: translateY(16px);
    }

    .bottle {
      width: 80px;
      height: 180px;
      border-radius: 999px;
      background: linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.7));
      box-shadow: 0 28px 40px rgba(15,23,42,0.45);
      position: relative;
      overflow: hidden;
    }

    .bottle:nth-child(2) {
      transform: translateY(14px) scale(0.96);
      opacity: 0.88;
    }

    .bottle-glass {
      position: absolute;
      inset: 8%;
      border-radius: 999px;
      background: linear-gradient(180deg, rgba(248,250,252,0.65), rgba(15,23,42,0.3));
      border: 1px solid rgba(226,232,240,0.65);
    }

    .bottle-liquid {
      position: absolute;
      left: 10%;
      right: 10%;
      bottom: -5%;
      height: 62%;
      border-radius: 999px;
      background: linear-gradient(180deg, #fdba74, #a16207);
    }

    .bottle-label {
      position: absolute;
      left: 16%;
      right: 16%;
      top: 46%;
      height: 60px;
      border-radius: 12px;
      background: rgba(248,250,252,0.92);
      box-shadow: 0 12px 24px rgba(15,23,42,0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
      text-align: center;
    }

    .bottle-label span {
      display: block;
      font-size: 0.63rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #4b5563;
      margin-bottom: 0.15rem;
    }

    .bottle-label strong {
      font-size: 0.7rem;
      letter-spacing: 0.08em;
    }

    .bottle-cap {
      position: absolute;
      top: -16px;
      left: 28%;
      width: 44px;
      height: 32px;
      border-radius: 999px;
      background: linear-gradient(180deg, #4b5563, #0f172a);
      box-shadow: 0 10px 20px rgba(15,23,42,0.45);
    }

    .hero-badge {
      position: absolute;
      right: 10%;
      top: 12%;
      width: 96px;
      height: 96px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 20%, #fef9c3, #f97316);
      color: #111827;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      box-shadow: 0 20px 46px rgba(248,113,22,0.45);
      padding: 0.5rem;
    }

    .hero-note {
      margin-top: 1.1rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hero-note-pill {
      padding: 0.15rem 0.65rem;
      border-radius: 999px;
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      background: #ecfdf5;
      color: #15803d;
    }

    /* Features */
    .section {
      max-width: 1120px;
      margin: 0 auto;
      padding: 2.25rem 1.25rem 0;
    }

    .section-headline {
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.35rem;
    }

    .section-title {
      font-size: 1.4rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }

    .section-subtitle {
      font-size: 0.98rem;
      color: var(--text-muted);
      max-width: 34rem;
    }

    .features-grid {
      margin-top: 1.6rem;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.4rem;
    }

    .feature-card {
      padding: 1.3rem 1.2rem;
      border-radius: var(--radius-md);
      background: rgba(255,255,255,0.92);
      border: 1px solid rgba(228,228,231,0.9);
      box-shadow: 0 10px 30px rgba(15,23,42,0.05);
    }

    .feature-kicker {
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #a16207;
      margin-bottom: 0.45rem;
    }

    .feature-title {
      font-size: 0.98rem;
      margin-bottom: 0.25rem;
    }

    .feature-copy {
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    /* Product grid */
    .product-toolbar {
      margin-top: 2.2rem;
      margin-bottom: 0.9rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
    }

    .product-toolbar-title {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--text-muted);
    }

    .sort-select {
      position: relative;
      min-width: 190px;
    }

    .sort-select select {
      width: 100%;
      padding: 0.55rem 2.1rem 0.55rem 0.85rem;
      border-radius: 999px;
      border: 1px solid var(--border);
      font-size: 0.85rem;
      background: rgba(255,255,255,0.9);
      appearance: none;
      cursor: pointer;
    }

    .sort-select::after {
      content: "▾";
      position: absolute;
      right: 0.9rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.65rem;
      color: #4b5563;
      pointer-events: none;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1.2rem;
    }

    .product-card {
      border-radius: var(--radius-md);
      background: var(--bg-alt);
      border: 1px solid rgba(226,232,240,0.8);
      padding: 0.85rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      box-shadow: 0 18px 30px rgba(15,23,42,0.03);
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 22px 40px rgba(15,23,42,0.12);
      border-color: #c4b5fd;
    }

    .product-photo {
      border-radius: 0.9rem;
      background: radial-gradient(circle at 30% 0, #fef9c3, #f97316);
      height: 140px;
      position: relative;
      overflow: hidden;
    }

    .product-tag {
      margin-top: 0.55rem;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #6b21a8;
    }

    .product-name {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .product-price {
      font-size: 0.9rem;
      color: #16a34a;
      font-weight: 600;
    }

    .product-cta {
      margin-top: 0.45rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .product-cta button {
      border: none;
      background: #0f172a;
      color: #f9fafb;
      border-radius: 999px;
      padding: 0.45rem 0.7rem;
      font-size: 0.75rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }

    /* Testimonial */
    .testimonial {
      margin-top: 2.8rem;
      border-radius: var(--radius-lg);
      background: radial-gradient(circle at top left, #ecfdf5, #f5f3ff);
      padding: 1.8rem 1.7rem;
      display: grid;
      grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
      gap: 1.5rem;
      align-items: center;
      box-shadow: 0 24px 50px rgba(15,23,42,0.1);
    }

    .testimonial-quote {
      font-size: 1.05rem;
      font-weight: 500;
      margin-bottom: 0.9rem;
    }

    .testimonial-name {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.1rem;
    }

    .testimonial-role {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.4rem;
    }

    .stars {
      color: #facc15;
      font-size: 0.85rem;
    }

    .testimonial-meta {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-top: 0.6rem;
    }

    .testimonial-side {
      justify-self: end;
      text-align: right;
      font-size: 0.82rem;
      color: var(--text-muted);
    }

    .social-links a {
      margin-left: 0.4rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
    }

    /* Footer */
    footer {
      margin-top: 2.8rem;
      padding: 1.8rem 1.25rem 2.4rem;
      background: #0b1120;
      color: #e5e7eb;
    }

    .footer-inner {
      max-width: 1120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
      gap: 2rem;
      align-items: flex-start;
    }

    .footer-brandline {
      font-size: 0.8rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.45rem;
    }

    .footer-title {
      font-size: 1.25rem;
      margin-bottom: 0.8rem;
    }

    .footer-pill {
      display: inline-flex;
      gap: 0.4rem;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
    }

    .footer-pill span {
      background: rgba(148,163,184,0.18);
      padding: 0.25rem 0.7rem;
      border-radius: 999px;
    }

    .footer-contact {
      margin-top: 1.2rem;
      font-size: 0.85rem;
      color: #9ca3af;
    }

    .footer-contact div {
      margin-bottom: 0.3rem;
    }

    .newsletter-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      margin-bottom: 0.6rem;
      color: #9ca3af;
    }

    .newsletter-form {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
    }

    .newsletter-form input {
      flex: 1 1 160px;
      min-width: 0;
      padding: 0.55rem 0.75rem;
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.7);
      background: rgba(15,23,42,0.7);
      color: #e5e7eb;
      font-size: 0.85rem;
    }

    .newsletter-form button {
      border-radius: 999px;
      border: none;
      background: #f97316;
      color: #0b1120;
      padding: 0.55rem 1rem;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }

    .footer-bottom {
      max-width: 1120px;
      margin: 1.6rem auto 0;
      font-size: 0.78rem;
      color: #6b7280;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .hero {
        grid-template-columns: minmax(0,1fr);
      }
      .hero-media {
        order: -1;
      }
      .features-grid {
        grid-template-columns: repeat(2, minmax(0,1fr));
      }
      .product-grid {
        grid-template-columns: repeat(2, minmax(0,1fr));
      }
      .testimonial {
        grid-template-columns: minmax(0,1fr);
        text-align: left;
      }
      .testimonial-side {
        justify-self: start;
        text-align: left;
      }
      .footer-inner {
        grid-template-columns: minmax(0,1fr);
      }
    }

    @media (max-width: 640px) {
      .nav-inner {
        flex-wrap: wrap;
      }
      nav ul {
        display: none; /* simple mobile collapse; replace with real menu if needed */
      }
      .hero {
        padding-top: 0.3rem;
      }
      .features-grid {
        grid-template-columns: minmax(0,1fr);
      }
      .product-grid {
        grid-template-columns: minmax(0,1fr);
      }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- Promo -->
  <div class="promo">
    Enjoy 20% off your first order.
  </div>

  <!-- Header -->
  <header>
    <div class="nav-inner">
      <a href="#top" class="brand">
        <span class="brand-mark">S</span>
        <span>The Scent Aromatherapy</span>
      </a>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#journal">Blog</a></li>
        </ul>
      </nav>
      <button class="cart-btn" id="cartButton">
        <span>Cart</span>
        <span class="cart-count" id="cartCount">0</span>
      </button>
    </div>
  </header>

  <!-- Hero -->
  <main id="home">
    <section class="hero">
      <div>
        <div class="hero-tag">
          <span class="hero-tag-dot"></span>
          <span>Nature&apos;s essence</span>
        </div>
        <h1 class="hero-title">
          Natural Aromatherapy for Well‑Being and Balance
        </h1>
        <p class="hero-subtitle">
          Curated aromatherapy blends, mists, and ritual essentials designed to soften the nervous system, center the mind, and bring your daily rituals back into the body.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="scrollToShop()">Find calm</button>
          <button class="btn-ghost" onclick="scrollToAbout()">Explore the ritual</button>
        </div>
        <div class="hero-meta">
          <span><span class="hero-meta-dot"></span> Small‑batch crafted</span>
          <span><span class="hero-meta-dot"></span> 100% essential oils</span>
          <span><span class="hero-meta-dot"></span> Free shipping over S$60</span>
        </div>
      </div>

      <div class="hero-media">
        <div class="hero-photo">
          <div class="hero-bottles">
            <div class="bottle">
              <div class="bottle-glass"></div>
              <div class="bottle-liquid"></div>
              <div class="bottle-label">
                <span>Calm blend</span>
                <strong>Eucalyptus • Mint</strong>
              </div>
              <div class="bottle-cap"></div>
            </div>
            <div class="bottle">
              <div class="bottle-glass"></div>
              <div class="bottle-liquid"></div>
              <div class="bottle-label">
                <span>Evening oil</span>
                <strong>Lavender • Rose</strong>
              </div>
              <div class="bottle-cap"></div>
            </div>
          </div>
          <div class="hero-badge">
            Ritual‑ready<br />in under 3 minutes
          </div>
        </div>
        <div class="hero-note">
          <span class="hero-note-pill">Formulated with nature</span>
          <span>Each blend is composed with intentional botanicals to support nervous system regulation.</span>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section" id="about">
      <div>
        <div class="section-headline">Crafted with nature&apos;s care</div>
        <h2 class="section-title">Designed for daily rituals</h2>
        <p class="section-subtitle">
          Every formula is composed in small batches using pure essential oils and skin‑soft botanicals, created to meet you exactly where you are in your day.
        </p>
      </div>

      <div class="features-grid">
        <article class="feature-card">
          <div class="feature-kicker">Natural healing essence</div>
          <h3 class="feature-title">Mind and body support</h3>
          <p class="feature-copy">
            Center the nervous system with grounding aromatic notes that gently guide the body toward rest, recovery, and quiet clarity.
          </p>
        </article>
        <article class="feature-card">
          <div class="feature-kicker">Essential oil blends</div>
          <h3 class="feature-title">Power in every drop</h3>
          <p class="feature-copy">
            Blend‑only formulas using essential oils and plant carriers, free from synthetic fragrance, phthalates, and mineral oils.
          </p>
        </article>
        <article class="feature-card">
          <div class="feature-kicker">Relaxation products</div>
          <h3 class="feature-title">Moments of stillness</h3>
          <p class="feature-copy">
            Sprays, oils, and soaps created for bath, bedside, and desk rituals—designed to help you exhale, unclench, and return to the present.
          </p>
        </article>
      </div>
    </section>

    <!-- Shop / products -->
    <section class="section" id="shop">
      <div class="product-toolbar">
        <div class="product-toolbar-title">Natural aromatherapy essentials</div>
        <div class="sort-select">
          <select id="sortSelect">
            <option value="default">Sort: Featured</option>
            <option value="priceLow">Price (low to high)</option>
            <option value="priceHigh">Price (high to low)</option>
          </select>
        </div>
      </div>

      <div class="product-grid" id="productGrid">
        <!-- Example product cards -->
        <article class="product-card" data-price="30">
          <div class="product-photo"></div>
          <div class="product-tag">New arrival</div>
          <h3 class="product-name">Citrus Burst Essential Oil Blend</h3>
          <div class="product-price">S$30.00</div>
          <div class="product-cta">
            <span>Bright, uplifting, and sun‑drenched.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="30">
          <div class="product-photo"></div>
          <div class="product-tag">Luxury skincare</div>
          <h3 class="product-name">Oil Cleanser Deluxe</h3>
          <div class="product-price">S$30.00</div>
          <div class="product-cta">
            <span>Silky, aromatherapeutic cleansing ritual.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="25">
          <div class="product-photo"></div>
          <div class="product-tag">All‑natural</div>
          <h3 class="product-name">Sacred Serenity Mist</h3>
          <div class="product-price">S$25.00</div>
          <div class="product-cta">
            <span>Room and linen mist for soft evenings.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="12">
          <div class="product-photo"></div>
          <div class="product-tag">Handcrafted</div>
          <h3 class="product-name">Botanical Soap Bars</h3>
          <div class="product-price">S$12.00</div>
          <div class="product-cta">
            <span>Cold‑processed bars with gentle oils.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="10">
          <div class="product-photo"></div>
          <div class="product-tag">Handmade beauty</div>
          <h3 class="product-name">Rose Ritual Soap</h3>
          <div class="product-price">S$10.00</div>
          <div class="product-cta">
            <span>Soft floral lather for evening showers.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="10">
          <div class="product-photo"></div>
          <div class="product-tag">Handcrafted</div>
          <h3 class="product-name">Lavender Soap</h3>
          <div class="product-price">S$10.00</div>
          <div class="product-cta">
            <span>Classic lavender with gentle exfoliation.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="15">
          <div class="product-photo"></div>
          <div class="product-tag">New arrival</div>
          <h3 class="product-name">Pure Eucalyptus Oil</h3>
          <div class="product-price">S$15.00</div>
          <div class="product-cta">
            <span>Crisp, clearing, and invigorating.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>

        <article class="product-card" data-price="20">
          <div class="product-photo"></div>
          <div class="product-tag">New arrival</div>
          <h3 class="product-name">Organic Beard Oil</h3>
          <div class="product-price">S$20.00</div>
          <div class="product-cta">
            <span>Conditioning botanicals for daily grooming.</span>
            <button onclick="addToCart(event)">Add</button>
          </div>
        </article>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section">
      <div class="testimonial">
        <div>
          <p class="testimonial-quote">
            “The Scent has turned my home into a sanctuary. The blends feel intentional, grounded, and supportive—like a small ceremony I get to come back to every evening.”
          </p>
          <div class="testimonial-name">Emily R.</div>
          <div class="testimonial-role">Customer, Harmony Collection</div>
          <div class="stars">★★★★★</div>
          <p class="testimonial-meta">
            Blends composed with pure essential oils, created for diffusers, baths, and bedtime rituals.
          </p>
        </div>
        <div class="testimonial-side">
          <div>Follow the ritual</div>
          <div class="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="TikTok">TikTok</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-brandline">Crafted with care for your well‑being</div>
        <h2 class="footer-title">Aromatherapy for everyday balance.</h2>
        <div class="footer-pill">
          <span>Nature</span>
          <span>Balance</span>
        </div>
        <div class="footer-contact">
          <div>info@thescentaromatherapy.com</div>
          <div>+65 1234 5678</div>
        </div>
      </div>
      <div>
        <div class="newsletter-label">Subscribe for wellness updates</div>
        <form class="newsletter-form" onsubmit="subscribe(event)">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 The Scent Aromatherapy. All rights reserved.</span>
      <span>Made with intention for your nightly wind‑down.</span>
    </div>
  </footer>
</div>

<script>
  function scrollToShop() {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  }
  function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }

  function addToCart(event) {
    event.preventDefault();
    const cartCountEl = document.getElementById("cartCount");
    const current = parseInt(cartCountEl.textContent, 10) || 0;
    cartCountEl.textContent = current + 1;
  }

  function subscribe(event) {
    event.preventDefault();
    alert("Thank you for subscribing to wellness updates.");
  }

  document.getElementById("sortSelect").addEventListener("change", function () {
    const value = this.value;
    const grid = document.getElementById("productGrid");
    const cards = Array.from(grid.children);

    if (value === "default") {
      cards.sort((a, b) => 0);
    } else if (value === "priceLow") {
      cards.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (value === "priceHigh") {
      cards.sort((a, b) => b.dataset.price - a.dataset.price);
    }

    cards.forEach(card => grid.appendChild(card));
  });
</script>
</body>
</html>
```

## How to use this file

- Save this as `index.html` and open it directly in the browser, or serve it via any PHP/Laravel/Next.js route as a plain view.  
- Replace text, prices, and links with your own content, and swap gradients with real images when ready.[1]
