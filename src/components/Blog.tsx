import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  seoTopics?: never;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "PMAX + Search: Structuring Google Ads for Scale",
    excerpt: "When to split Search vs PMAX, asset group strategy, and how to read signals for profitable expansion.",
    content: `
      <h2>Playbook</h2>
      <ul>
        <li>Search for proven intent; PMAX to expand</li>
        <li>Asset groups by theme and audience</li>
        <li>Feed hygiene and creative variants</li>
        <li>Budget guardrails and query control</li>
      </ul>
    `,
    author: "Growth Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Google Ads",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Meta Creative Testing: From Hook to Hold",
    excerpt: "A framework for testing angles, hooks, formats, and iterations to reduce CPA and raise ROAS.",
    content: `
      <h2>What to Test</h2>
      <ul>
        <li>Angles, hooks, formats, CTAs</li>
        <li>UGC vs polished creative</li>
        <li>Thumbstop and retention checkpoints</li>
        <li>Audience and placement mixes</li>
      </ul>
    `,
    author: "Paid Social",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "Meta Ads",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "TikTok Ads: Creative that Converts (Without Looking Like Ads)",
    excerpt: "Native-feel content, trend alignment, and the first 3 seconds that make or break performance.",
    content: `
      <h2>Guidelines</h2>
      <ul>
        <li>Native pacing and pattern interrupts</li>
        <li>Hook in 2s, payoff in 6–8s</li>
        <li>Product demo + social proof</li>
        <li>Iterate weekly from learnings</li>
      </ul>
    `,
    author: "Creative Lab",
    date: "September 28, 2025",
    readTime: "5 min read",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Attribution in 2025: GA4, Pixels, and Server‑Side GTM",
    excerpt: "How to reconcile platform numbers with GA4 and set up durable tracking that decision‑makers trust.",
    content: `
      <h2>Stack</h2>
      <ul>
        <li>GA4 events and conversions</li>
        <li>Pixel hygiene across platforms</li>
        <li>Server‑side GTM and deduplication</li>
        <li>Looker Studio ROAS dashboards</li>
      </ul>
    `,
    author: "Analytics",
    date: "September 15, 2025",
    readTime: "8 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "LinkedIn + X for B2B: Demand Capture and Creation",
    excerpt: "Account targeting, creative formats that click, and how to pair with Search to lower blended CAC.",
    content: `
      <h2>Combos</h2>
      <ul>
        <li>ABM audiences and exclusions</li>
        <li>Thought leadership vs direct response</li>
        <li>Retargeting and sequence design</li>
        <li>Sync with Search and CRO</li>
      </ul>
    `,
    author: "B2B Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "LinkedIn & X",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Snapchat and Emerging Channels: Finding Incremental ROAS",
    excerpt: "Where Snapchat fits, how to measure incrementality, and when to scale or pause.",
    content: `
      <h2>Checklist</h2>
      <ul>
        <li>Audience fit and creative style</li>
        <li>Event mapping and goals</li>
        <li>Holdout tests and lift studies</li>
        <li>Budget caps and kill rules</li>
      </ul>
    `,
    author: "Media Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Snapchat",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format&fit=crop&q=80"
  }
];

export const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const posts = (t("blogList.items", { returnObjects: true }) as BlogPost[]) || blogPosts;

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {t("blogList.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,11%)] dark:text-foreground">
            {t("blogList.headingPrefix")} <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">{t("blogList.headingEmphasis")}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {t("blogList.subtitle")}
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="group relative bg-card/80 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-2xl overflow-hidden hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer w-full flex flex-col hover:-translate-y-2"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5
                  }
                }}
              >
                {/* Hover glow border */}
                <div className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[hsl(var(--gold))]/20 via-transparent to-[hsl(var(--brand-blue))]/20" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(217,91%,65%)] to-transparent opacity-60" />
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle image gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 backdrop-blur-[2px] bg-card/90 dark:bg-[hsl(var(--gold))] text-[hsl(222,47%,20%)] dark:text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-[hsl(222,47%,20%)] dark:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[hsl(220,30%,50%)] dark:text-white mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[hsl(240,40%,92%)] dark:border-[hsl(240,30%,35%)]/50">
                    <span className="text-[10px] sm:text-xs text-[hsl(var(--brand-blue))] dark:text-[hsl(var(--brand-blue))] truncate">{t("blogList.by")} {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card dark:bg-white/10 text-[hsl(var(--gold))] dark:text-white border border-[hsl(var(--gold))]/30 dark:border-white/20 hover:bg-gradient-to-r hover:from-[hsl(var(--gold))] hover:to-[hsl(var(--brand-blue))] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                        <span className="hidden sm:inline">{t("blogList.read")}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
            </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
