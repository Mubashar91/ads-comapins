import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "react-i18next";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPostsEN: BlogPost[] = [
  {
    id: 1,
    title: "Keyword Research Mastery: Find High-Value Keywords That Convert",
    excerpt: "A systematic approach to discovering profitable keywords with low competition and high search intent.",
    content: `
      <h2>Research Process</h2>
      <ul>
        <li>Seed keywords: Start with your core business terms</li>
        <li>Competitor analysis: Steal their best-performing keywords</li>
        <li>Long-tail discovery: Find specific, high-intent phrases</li>
        <li>Search intent mapping: Match keywords to user goals</li>
      </ul>
      <h3>Tools & Metrics</h3>
      <p>Use Ahrefs, SEMrush, and Google Keyword Planner. Focus on search volume, keyword difficulty, and CPC.</p>
      
      <h3>Advanced Techniques</h3>
      <p>Look for keyword gaps in competitor content, analyze SERP features for opportunities, and prioritize keywords based on business value rather than just search volume.</p>
      
      <h3>Implementation Strategy</h3>
      <p>Create content clusters around primary keywords, use long-tail variations naturally throughout your content, and track performance to refine your keyword strategy over time.</p>
      <h3>Additional Insights</h3>
      <p>Cluster topics by search intent (informational, transactional, navigational) and map them to funnel stages. Recheck opportunities monthly as SERPs evolve.</p>
      <h3>Quick Checklist</h3>
      <ul>
        <li>Segment by intent and value</li>
        <li>Validate keywords with SERP reality</li>
        <li>Group into clusters and interlink</li>
        <li>Set success metrics per cluster</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Keyword research compounds. Iterate with performance data and user feedback to keep your strategy aligned with market demand.</p>
    `,
    author: "SEO Team",
    date: "October 15, 2025",
    readTime: "8 min read",
    category: "Keyword Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "On-Page SEO Checklist: Optimize Every Element for Rankings",
    excerpt: "Complete guide to optimizing title tags, meta descriptions, headers, and content for maximum visibility.",
    content: `
      <h2>Essential Elements</h2>
      <ul>
        <li>Title tags: Include primary keyword within 60 characters</li>
        <li>Meta descriptions: Compelling copy with keywords in 155 characters</li>
        <li>Header structure: H1, H2, H3 hierarchy with keyword variations</li>
        <li>Internal linking: Connect related pages strategically</li>
      </ul>
      <p>Focus on user experience while maintaining keyword optimization throughout.</p>
      
      <h3>Content Optimization</h3>
      <p>Ensure your content thoroughly covers the topic, uses semantic keywords naturally, and provides clear value to readers. Include relevant images with optimized alt text.</p>
      
      <h3>Technical Elements</h3>
      <p>Optimize URL structure, implement schema markup, ensure fast loading times, and maintain mobile responsiveness for better search engine visibility.</p>
      <h3>Additional Insights</h3>
      <p>Use heatmaps and scroll-depth to validate on-page structure. Align headings with search intent and bring key value props above the fold.</p>
      <h3>Quick Checklist</h3>
      <ul>
        <li>One H1, logical H2/H3 hierarchy</li>
        <li>Descriptive, short URLs</li>
        <li>Alt text and lazy-loading for images</li>
        <li>Internal links to pillar pages</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Great on-page SEO is clarity plus intent matching—optimize for readers first, search engines second.</p>
    `,
    author: "Content Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "On-Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Technical SEO Audit: Fix Issues That Kill Your Rankings",
    excerpt: "Identify and resolve technical problems that prevent search engines from properly crawling and indexing your site.",
    content: `
      <h2>Critical Issues</h2>
      <ul>
        <li>Site speed: Optimize for Core Web Vitals</li>
        <li>Mobile responsiveness: Ensure perfect mobile experience</li>
        <li>Crawl errors: Fix 404s and redirect chains</li>
        <li>Schema markup: Implement structured data</li>
      </ul>
      <p>Use Google Search Console, PageSpeed Insights, and Screaming Frog for comprehensive audits.</p>
      
      <h3>Performance Optimization</h3>
      <p>Compress images, minify CSS/JS, leverage browser caching, and use a content delivery network (CDN) to improve site speed and user experience.</p>
      
      <h3>Crawlability & Indexing</h3>
      <p>Optimize your robots.txt file, create XML sitemaps, fix broken links, and ensure proper canonical tag implementation to help search engines understand your site structure.</p>
      <h3>Additional Insights</h3>
      <p>Set up monitoring for 4xx/5xx spikes, track CWV regressions, and automate sitemap refreshes on deploy. Review JS rendering for critical pages.</p>
      <h3>Quick Checklist</h3>
      <ul>
        <li>Consistent canonicalization</li>
        <li>No orphan pages</li>
        <li>Preload critical CSS</li>
        <li>Image formats (AVIF/WebP)</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Technical hygiene protects rankings—build guardrails and alerts to prevent regressions.</p>
    `,
    author: "Technical Team",
    date: "September 28, 2025",
    readTime: "10 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Content That Ranks: Writing for Users and Search Engines",
    excerpt: "Create compelling, SEO-optimized content that satisfies search intent and drives conversions.",
    content: `
      <h2>Content Strategy</h2>
      <ul>
        <li>Search intent analysis: Understand what users really want</li>
        <li>Content depth: Comprehensive coverage beats thin content</li>
        <li>Keyword integration: Natural placement throughout content</li>
        <li>User engagement: Structure for readability and interaction</li>
      </ul>
      <p>Balance keyword optimization with valuable, engaging content that keeps users on your site.</p>
      
      <h3>Content Structure</h3>
      <p>Use clear headings, bullet points, and short paragraphs. Include relevant examples, case studies, and actionable tips that provide real value to your audience.</p>
      
      <h3>Optimization Techniques</h3>
      <p>Research related keywords, optimize for featured snippets, include internal and external links, and regularly update content to maintain relevance and freshness.</p>
      <h3>Additional Insights</h3>
      <p>Write for skimmers and deep readers: add TL;DRs, anchor links, and expandable sections. Pair copy with visuals and data to increase dwell time.</p>
      <h3>Quick Checklist</h3>
      <ul>
        <li>Strong hook in first 100 words</li>
        <li>Snippet-ready lists/tables</li>
        <li>Evidence: stats, quotes, examples</li>
        <li>Clear next step CTA</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Content that ranks is content that helps—prioritize depth, structure, and actionability.</p>
    `,
    author: "Content Strategy",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Content SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Link Building That Works: Earn High-Quality Backlinks",
    excerpt: "Proven strategies to acquire authoritative backlinks that boost your domain authority and rankings.",
    content: `
      <h2>Link Building Tactics</h2>
      <ul>
        <li>Resource page outreach: Get listed on industry resource pages</li>
        <li>Broken link building: Replace dead links with your content</li>
        <li>Guest posting: Contribute to authoritative industry sites</li>
        <li>Digital PR: Create newsworthy content for media coverage</li>
      </ul>
      <p>Focus on quality over quantity. One high-authority link beats dozens of low-quality ones.</p>
      
      <h3>Outreach Strategy</h3>
      <p>Research target websites thoroughly, personalize your outreach emails, provide clear value propositions, and follow up professionally to build lasting relationships.</p>
      
      <h3>Content for Link Building</h3>
      <p>Create linkable assets like original research, comprehensive guides, infographics, and tools that naturally attract backlinks from other websites in your industry.</p>
      <h3>Additional Insights</h3>
      <p>Score prospects by relevance and authority. Personalize outreach with a value-first angle and provide ready-to-embed assets.</p>
      <h3>Quick Checklist</h3>
      <ul>
        <li>Prospect list with DR and topical fit</li>
        <li>Personalized email and follow-up plan</li>
        <li>Asset pack (images, quotes, embeds)</li>
        <li>Tracking for responses and links</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Build relationships, not just links—quality compounding beats volume bursts.</p>
    `,
    author: "Link Building Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Link Building",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "SEO Analytics: Track What Matters for Business Growth",
    excerpt: "Essential metrics and reporting strategies to measure SEO success and demonstrate ROI.",
    content: `
      <h2>Key Metrics</h2>
      <ul>
        <li>Organic traffic: Monitor growth and traffic quality</li>
        <li>Keyword rankings: Track target keyword positions</li>
        <li>Conversion rates: Measure organic traffic conversions</li>
        <li>Technical health: Monitor crawl errors and site speed</li>
      </ul>
      <p>Use Google Analytics 4, Search Console, and rank tracking tools for comprehensive reporting.</p>
      
      <h3>Advanced Analytics</h3>
      <p>Set up goal tracking, analyze user behavior patterns, monitor click-through rates from search results, and track the customer journey from search to conversion.</p>
      
      <h3>Reporting & Insights</h3>
      <p>Create automated reports, identify trends and opportunities, benchmark against competitors, and use data to inform your SEO strategy and content planning decisions.</p>
      <h3>Additional Insights</h3>
      <p>Segment performance by topic cluster and intent. Tie organic outcomes to revenue with assisted conversion models and post-view attribution.</p>
      <h3>Quick Checklist</h3>
      <ul>
        <li>Define north-star metrics</li>
        <li>Dashboard by channel and cluster</li>
        <li>Alerting on anomaly detection</li>
        <li>Monthly insights doc with actions</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Analytics should drive action—measure less, act more, iterate faster.</p>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "SEO Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const blogPostsDE: BlogPost[] = [
  {
    id: 1,
    title: "Keyword-Recherche meistern: Hochwertige Keywords, die konvertieren",
    excerpt: "Systematischer Ansatz zur Entdeckung profitabler Keywords mit niedriger Konkurrenz und klarer Suchintention.",
    content: `
      <h2>Forschungsprozess</h2>
      <ul>
        <li>Seed-Keywords: Beginnen Sie mit Ihren Kernbegriffen</li>
        <li>Wettbewerbsanalyse: Die bestperformenden Keywords identifizieren</li>
        <li>Long-Tail entdecken: Spezifische, intent-starke Phrasen finden</li>
        <li>Suchintention abbilden: Keywords Zielen der Nutzer zuordnen</li>
      </ul>
      <h3>Tools & Kennzahlen</h3>
      <p>Verwenden Sie Ahrefs, SEMrush und den Google Keyword Planner. Fokus: Suchvolumen, Keyword-Difficulty und CPC.</p>
      
      <h3>Fortgeschrittene Techniken</h3>
      <p>Suchen Sie nach Keyword-Gaps beim Wettbewerb, analysieren Sie SERP-Features und priorisieren Sie nach Business-Value statt nur nach Volumen.</p>
      
      <h3>Umsetzungsstrategie</h3>
      <p>Bilden Sie Content-Cluster um Primary-Keywords, nutzen Sie Long-Tail-Varianten natürlich im Text und messen Sie Performance zur laufenden Optimierung.</p>
      <h3>Zusätzliche Einblicke</h3>
      <p>Clustern Sie Themen nach Suchintention und Funnel-Stufe. Prüfen Sie Chancen monatlich, da sich SERPs verändern.</p>
      <h3>Schnelle Checkliste</h3>
      <ul>
        <li>Nach Intent und Business-Value segmentieren</li>
        <li>Keywords mit SERP-Realität validieren</li>
        <li>In Cluster gruppieren und intern verlinken</li>
        <li>Erfolgsmessung pro Cluster definieren</li>
      </ul>
      <h3>Fazit</h3>
      <p>Keyword-Recherche wirkt kumulativ. Mit Performance-Daten und Nutzerfeedback iterieren.</p>
    `,
    author: "SEO Team",
    date: "15. Oktober 2025",
    readTime: "8 Min.",
    category: "Keyword-Recherche",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "On-Page-SEO Checkliste: Jedes Element für Rankings optimieren",
    excerpt: "Vollständiger Leitfaden zur Optimierung von Title-Tags, Meta-Descriptions, Überschriften und Content für maximale Sichtbarkeit.",
    content: `
      <h2>Wesentliche Elemente</h2>
      <ul>
        <li>Title-Tags: Primäres Keyword innerhalb von 60 Zeichen integrieren</li>
        <li>Meta-Descriptions: Überzeugender Text mit Keywords in 155 Zeichen</li>
        <li>Überschriftenstruktur: H1/H2/H3-Hierarchie mit Keyword-Varianten</li>
        <li>Interne Verlinkung: Verwandte Seiten strategisch verbinden</li>
      </ul>
      <p>Fokus auf Nutzererlebnis, während die Keyword-Optimierung konsistent bleibt.</p>
      
      <h3>Content-Optimierung</h3>
      <p>Decken Sie das Thema umfassend ab, nutzen Sie semantische Keywords natürlich und liefern Sie klaren Mehrwert. Relevante Bilder mit optimiertem Alt-Text einbinden.</p>
      
      <h3>Technische Elemente</h3>
      <p>URL-Struktur optimieren, Schema-Markup implementieren, schnelle Ladezeiten sicherstellen und mobile Responsiveness gewährleisten.</p>
      <h3>Zusätzliche Einblicke</h3>
      <p>Nutzen Sie Heatmaps und Scroll-Tiefe, um die Seitenstruktur zu validieren. Überschriften an Intent ausrichten, Kernnutzen oberhalb der Falz.</p>
      <h3>Schnelle Checkliste</h3>
      <ul>
        <li>Ein H1, logische H2/H3-Hierarchie</li>
        <li>Kurz und beschreibende URLs</li>
        <li>Alt-Texte und Lazy-Loading</li>
        <li>Interne Links zu Pillar-Seiten</li>
      </ul>
      <h3>Fazit</h3>
      <p>Starkes On-Page-SEO ist Klarheit + Intent-Match—erst Leser, dann Suchmaschinen.</p>
    `,
    author: "Content Team",
    date: "8. Oktober 2025",
    readTime: "6 Min.",
    category: "On-Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Technisches SEO-Audit: Probleme beheben, die Rankings zerstören",
    excerpt: "Technische Probleme erkennen und lösen, die Crawling und Indexierung behindern.",
    content: `
      <h2>Kritische Probleme</h2>
      <ul>
        <li>Seitengeschwindigkeit: Für Core Web Vitals optimieren</li>
        <li>Mobile Responsiveness: Exzellentes Mobil-Erlebnis sicherstellen</li>
        <li>Crawl-Fehler: 404s und Redirect-Ketten beheben</li>
        <li>Schema-Markup: Strukturierte Daten implementieren</li>
      </ul>
      <p>Nutzen Sie Google Search Console, PageSpeed Insights und Screaming Frog für umfassende Audits.</p>
      
      <h3>Performance-Optimierung</h3>
      <p>Bilder komprimieren, CSS/JS minifizieren, Browser-Caching nutzen und ein CDN einsetzen, um Geschwindigkeit und UX zu verbessern.</p>
      
      <h3>Crawlability & Indexierung</h3>
      <p>robots.txt optimieren, XML-Sitemaps erstellen, Broken Links beheben und korrekte Canonicals sicherstellen.</p>
      <h3>Zusätzliche Einblicke</h3>
      <p>Monitoring für 4xx/5xx-Spitzen einrichten, CWV überwachen und Sitemap-Refreshes automatisieren. Rendering für kritische Seiten prüfen.</p>
      <h3>Schnelle Checkliste</h3>
      <ul>
        <li>Konsistente Canonicals</li>
        <li>Keine verwaisten Seiten</li>
        <li>Kritisches CSS vorladen</li>
        <li>Moderne Bildformate (AVIF/WebP)</li>
      </ul>
      <h3>Fazit</h3>
      <p>Technische Hygiene schützt Rankings—bauen Sie Leitplanken und Alerts gegen Regressionen.</p>
    `,
    author: "Technical Team",
    date: "28. September 2025",
    readTime: "10 Min.",
    category: "Technisches SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Content, der rankt: Für Nutzer und Suchmaschinen schreiben",
    excerpt: "Überzeugenden, SEO-optimierten Content erstellen, der Suchintention trifft und konvertiert.",
    content: `
      <h2>Content-Strategie</h2>
      <ul>
        <li>Suchintention analysieren: Verstehen, was Nutzer wirklich wollen</li>
        <li>Content-Tiefe: Umfassende Abdeckung statt dünnem Inhalt</li>
        <li>Keyword-Integration: Natürliche Platzierung im gesamten Text</li>
        <li>Engagement: Lesbarkeit und Interaktion fördern</li>
      </ul>
      <p>Keyword-Optimierung mit wertvollem, fesselndem Content ausbalancieren, der Nutzer auf der Seite hält.</p>
      
      <h3>Content-Struktur</h3>
      <p>Klare Überschriften, Aufzählungen und kurze Absätze verwenden. Relevante Beispiele, Case Studies und konkrete Tipps einbinden.</p>
      
      <h3>Optimierungstechniken</h3>
      <p>Verwandte Keywords recherchieren, für Featured Snippets optimieren, interne/externen Links setzen und Inhalte regelmäßig aktualisieren.</p>
      <h3>Zusätzliche Einblicke</h3>
      <p>Für Scanner und Tiefleser schreiben: TL;DRs, Ankerlinks und ausklappbare Abschnitte. Texte mit Visuals und Daten stützen.</p>
      <h3>Schnelle Checkliste</h3>
      <ul>
        <li>Starker Hook in den ersten 100 Wörtern</li>
        <li>Snippet-taugliche Listen/Tabellen</li>
        <li>Belege: Zahlen, Zitate, Beispiele</li>
        <li>Klarer Next-Step-CTA</li>
      </ul>
      <h3>Fazit</h3>
      <p>Rankender Content hilft—setzen Sie auf Tiefe, Struktur und Umsetzbarkeit.</p>
    `,
    author: "Content Strategy",
    date: "15. September 2025",
    readTime: "7 Min.",
    category: "Content-SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Linkaufbau, der wirkt: Hochwertige Backlinks gewinnen",
    excerpt: "Bewährte Strategien, um autoritative Backlinks zu erhalten und Autorität sowie Rankings zu steigern.",
    content: `
      <h2>Linkaufbau-Taktiken</h2>
      <ul>
        <li>Ressourcenseiten: Aufnahme auf relevanten Branchen-Seiten</li>
        <li>Broken Link Building: Tote Links durch Ihren Content ersetzen</li>
        <li>Gastbeiträge: Zu autoritativen Branchen-Seiten beitragen</li>
        <li>Digitale PR: Nachrichtenwürdige Inhalte für Medienberichterstattung</li>
      </ul>
      <p>Qualität vor Quantität: Ein hochwertiger Link ist mehr wert als Dutzende schwacher.</p>
      
      <h3>Outreach-Strategie</h3>
      <p>Zielseiten gründlich recherchieren, E-Mails personalisieren, klaren Mehrwert liefern und professionell nachfassen.</p>
      
      <h3>Content für Linkaufbau</h3>
      <p>Linkable Assets erstellen: Original-Research, umfassende Guides, Infografiken und Tools, die natürlich Backlinks anziehen.</p>
      <h3>Zusätzliche Einblicke</h3>
      <p>Prospects nach Relevanz und Autorität scoren. Outreach personalisieren und ein Embed-Paket bereitstellen.</p>
      <h3>Schnelle Checkliste</h3>
      <ul>
        <li>Prospect-Liste mit DR und Topic-Fit</li>
        <li>Personalisierte Mail + Follow-up-Plan</li>
        <li>Asset-Paket (Bilder, Zitate, Embeds)</li>
        <li>Tracking für Antworten und Links</li>
      </ul>
      <h3>Fazit</h3>
      <p>Beziehungen statt Links—Qualität schlägt Volumen.</p>
    `,
    author: "Link Building Team",
    date: "30. August 2025",
    readTime: "9 Min.",
    category: "Linkaufbau",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "SEO-Analytics: Die Kennzahlen, die Wachstum treiben",
    excerpt: "Wesentliche Metriken und Reporting-Strategien, um SEO-Erfolg zu messen und ROI zu belegen.",
    content: `
      <h2>Wichtige Kennzahlen</h2>
      <ul>
        <li>Organischer Traffic: Wachstum und Qualität überwachen</li>
        <li>Keyword-Rankings: Ziel-Keywords verfolgen</li>
        <li>Conversion-Raten: Conversions aus organischem Traffic messen</li>
        <li>Technischer Zustand: Crawl-Fehler und Geschwindigkeit monitoren</li>
      </ul>
      <p>Google Analytics 4, Search Console und Rank-Tracker für ganzheitliches Reporting einsetzen.</p>
      
      <h3>Erweiterte Analytics</h3>
      <p>Ziele einrichten, Nutzerverhalten analysieren, CTR aus Suchergebnissen beobachten und die Customer Journey bis zur Conversion tracken.</p>
      
      <h3>Reporting & Insights</h3>
      <p>Automatisierte Reports erstellen, Trends/Chancen erkennen, gegen Wettbewerber benchmarken und datengetriebene Entscheidungen für SEO & Content treffen.</p>
      <h3>Zusätzliche Einblicke</h3>
      <p>Performance nach Themencluster und Intent segmentieren. Organische Ergebnisse mit Umsatz verknüpfen (Assisted Conversions, Post-View).</p>
      <h3>Schnelle Checkliste</h3>
      <ul>
        <li>North-Star-Metriken festlegen</li>
        <li>Dashboard nach Kanal und Cluster</li>
        <li>Alerts für Anomalien</li>
        <li>Monatliches Insights-Dokument</li>
      </ul>
      <h3>Fazit</h3>
      <p>Analytics müssen Handlungen auslösen—weniger messen, mehr umsetzen, schneller iterieren.</p>
    `,
    author: "Analytics Team",
    date: "12. August 2025",
    readTime: "8 Min.",
    category: "SEO-Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const posts = i18n.language === "en" ? blogPostsEN : blogPostsDE;
  
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t("blog.notFound")}</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            {t("blog.backHome")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mt-11 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-gold/50 rounded-lg sm:rounded-xl text-foreground hover:text-gold transition-all duration-300 font-semibold group shadow-md hover:shadow-lg hover:shadow-gold/10 text-sm sm:text-base"
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{t("blog.backToHome")}</span>
          </motion.button>

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-gold/20">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-foreground prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-li:my-1 max-w-none mb-10 sm:mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  {t("blog.ctaTitle")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  {t("blog.ctaSubtitle")}
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">{t("blog.ctaPrimary")}</span>
                  <span className="sm:hidden">{t("blog.ctaPrimaryMobile")}</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">{t("blog.moreArticles")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
