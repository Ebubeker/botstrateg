import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WaitlistForm } from "@/components/waitlist-form";
import { ParallaxContainer } from "@/components/parallax-container";

// Sample blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: "1",
    slug: "future-crypto-trading-ai-bots",
    title:
      "The Future of Crypto Trading: How AI-Powered Bots Are Changing the Game",
    excerpt:
      "The cryptocurrency market operates 24/7, presenting both unprecedented opportunities and unique challenges for traders. Discover how BotStrateg is revolutionizing crypto trading through AI and automation.",
    content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">The cryptocurrency market operates 24/7, presenting both unprecedented opportunities and unique challenges for traders. While traditional markets close for the night and weekends, crypto never sleeps—and neither should your trading strategy. This is where BotStrateg enters the picture, revolutionizing how we approach cryptocurrency trading through artificial intelligence and automated systems.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">The Problem with Manual Trading</h2>
          <p class="text-gray-300 leading-relaxed mb-4">Manual crypto trading, while potentially rewarding, comes with significant drawbacks. Human emotions like fear and greed often lead to poor decision-making, especially during volatile market conditions. Additionally, the round-the-clock nature of crypto markets means that profitable opportunities can arise at any hour, making it impossible for individual traders to capture every potential gain.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">Consider the trader who misses a crucial market movement because they were asleep, or the investor who panic-sells during a temporary dip only to watch prices recover hours later. These scenarios highlight the limitations of human-only trading approaches in the fast-paced world of cryptocurrency.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Enter AI-Powered Trading Solutions</h2>
          <p class="text-gray-300 leading-relaxed mb-4">BotStrateg addresses these challenges by combining intelligent trading bots with advanced analytics and AI-driven strategy recommendations. The platform analyzes vast amounts of market data, identifies patterns that human traders might miss, and executes trades based on predetermined strategies—all without the emotional baggage that can cloud human judgment.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">The AI component goes beyond simple automation. By analyzing your trading patterns and performance history, BotStrateg's system learns your preferences and risk tolerance, then recommends optimal strategies tailored specifically to your trading style. This personalized approach ensures that the AI works with your goals, not against them.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Key Features That Set BotStrateg Apart</h2>
          <div class="bg-card/50 border-card p-6 rounded-lg mb-6">
            <p class="text-gray-300 leading-relaxed mb-3"><span class="font-semibold text-blue-900">Seamless Exchange Integration</span>: The platform connects securely with major exchanges like Binance and Gate.io, allowing you to maintain control of your funds while leveraging automated trading capabilities.</p>
            
            <p class="text-gray-300 leading-relaxed mb-3"><span class="font-semibold text-blue-900">Real-Time Performance Tracking</span>: Monitor your bots' performance with detailed analytics and continuously optimize your strategies based on real results.</p>
            
            <p class="text-gray-300 leading-relaxed mb-3"><span class="font-semibold text-blue-900">Advanced Analytics</span>: Gain insights into market trends, your trading patterns, and opportunities for improvement through comprehensive data analysis.</p>
            
            <p class="text-gray-300 leading-relaxed"><span class="font-semibold text-blue-900">Continuous Learning</span>: The AI system evolves with market conditions and your trading behavior, becoming more effective over time.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Looking Ahead</h2>
          <p class="text-gray-300 leading-relaxed mb-4">As BotStrateg continues development, the platform promises to democratize access to sophisticated trading strategies that were once available only to institutional investors and hedge funds. By joining the waitlist, early adopters will gain access to cutting-edge technology that could fundamentally change their approach to cryptocurrency investing.</p>
          
          <p class="text-gray-300 leading-relaxed">The future of crypto trading isn't about replacing human judgment entirely—it's about augmenting human decision-making with AI-powered insights and automation. BotStrateg represents this evolution, offering a bridge between traditional trading methods and the technological possibilities of tomorrow.</p>
        </div>
      `,
    author: "BotStrateg Team",
    publishedAt: "2024-08-16",
    readTime: "8 min read",
    category: "AI Trading",
    tags: ["AI", "Crypto", "Trading Bots", "Automation"],
    featured: true,
  },
  {
    id: "2",
    slug: "botstrateg-ai-technology-analysis",
    title:
      "Breaking Down the Technology: How BotStrateg's AI Analyzes Your Trading Patterns",
    excerpt:
      "Understanding how artificial intelligence can improve your trading outcomes requires a deeper look at the technology behind BotStrateg's pattern recognition and strategy recommendations.",
    content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">Understanding how artificial intelligence can improve your trading outcomes requires a deeper look at the technology behind platforms like BotStrateg. While the user experience remains simple and intuitive, the underlying systems perform complex analyses that would be impossible for individual traders to execute manually.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">The Science of Pattern Recognition</h2>
          <p class="text-gray-300 leading-relaxed mb-4">At its core, BotStrateg's AI system excels at pattern recognition. By analyzing your historical trading data, the platform identifies recurring behaviors, successful strategies, and areas for improvement. This analysis goes far beyond simple win/loss ratios—it examines factors like entry and exit timing, position sizing, market conditions during successful trades, and emotional responses to various market scenarios.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">The AI doesn't just look at what you did; it analyzes why certain approaches worked in specific market conditions and how those insights can be applied to future opportunities. This level of analysis would take human traders countless hours to perform manually, and even then, the human brain isn't equipped to process the volume of data points that AI can handle simultaneously.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Adaptive Strategy Recommendations</h2>
          <p class="text-gray-300 leading-relaxed mb-4">One of BotStrateg's most powerful features is its ability to generate personalized strategy recommendations. Unlike generic trading advice, these recommendations are based on your specific trading history, risk tolerance, and market preferences. The system considers factors such as:</p>
          
          <div class="bg-card/50 border-card p-6 rounded-lg mb-6">
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Your typical holding periods</li>
              <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Preferred cryptocurrencies and market sectors</li>
              <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Historical performance during different market conditions</li>
              <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Risk management patterns</li>
              <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Response to volatility and market stress</li>
            </ul>
          </div>
          
          <p class="text-gray-300 leading-relaxed mb-6">By analyzing these elements, the AI can suggest adjustments to your trading approach that align with your proven strengths while addressing areas where improvements could enhance returns.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Real-Time Market Analysis</h2>
          <p class="text-gray-300 leading-relaxed mb-4">Beyond personal pattern recognition, BotStrateg's AI continuously monitors market conditions across multiple exchanges and cryptocurrency pairs. This real-time analysis enables the system to identify opportunities that match your trading profile and execute trades when conditions are optimal.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">The platform's ability to process market data from sources like Binance and Gate.io simultaneously provides a comprehensive view of liquidity, price movements, and trading volume across the crypto ecosystem. This multi-exchange perspective ensures that trading decisions are based on the most complete picture of market conditions available.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Continuous Learning and Optimization</h2>
          <p class="text-gray-300 leading-relaxed mb-4">Perhaps most importantly, BotStrateg's AI system learns from every trade and market movement. This continuous learning process means that the platform becomes more effective over time, adapting to changing market conditions and refining its understanding of your trading preferences.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">The system tracks the performance of its recommendations and adjusts future suggestions based on actual results. This feedback loop ensures that the AI's advice becomes increasingly tailored to your specific situation and market conditions.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">The Human-AI Partnership</h2>
          <p class="text-gray-300 leading-relaxed mb-4">While BotStrateg's technology is sophisticated, it's designed to enhance rather than replace human judgment. The platform provides insights and executes strategies, but users maintain control over their overall approach and can adjust parameters based on their evolving goals and risk tolerance.</p>
          
          <div class="bg-card/50 border-card pl-6 py-4 rounded-r-lg mb-6">
            <p class="text-gray-300 leading-relaxed italic">This partnership between human intuition and AI analysis represents the future of cryptocurrency trading—combining the emotional intelligence and strategic thinking that humans excel at with the data processing power and pattern recognition capabilities of artificial intelligence.</p>
          </div>
          
          <p class="text-gray-300 leading-relaxed">As BotStrateg prepares for launch, this technology promises to level the playing field for individual traders, providing access to institutional-grade analysis and execution capabilities that were previously out of reach.</p>
        </div>
      `,
    author: "BotStrateg Team",
    publishedAt: "2024-08-15",
    readTime: "10 min read",
    category: "Technology",
    tags: [
      "AI",
      "Machine Learning",
      "Pattern Recognition",
      "Trading Analytics",
    ],
    featured: false,
  },
  {
    id: "3",
    slug: "automated-crypto-trading-beginner-guide",
    title:
      "Getting Started with Automated Crypto Trading: A Beginner's Guide to BotStrateg",
    excerpt:
      "The world of automated crypto trading can seem intimidating for newcomers, but BotStrateg is designed to make sophisticated trading strategies accessible to traders at all experience levels.",
    content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">The world of automated crypto trading can seem intimidating for newcomers, but platforms like BotStrateg are designed to make sophisticated trading strategies accessible to traders at all experience levels. Whether you're a seasoned investor looking to optimize your approach or a beginner seeking to enter the crypto market with professional-grade tools, understanding how to leverage automated trading can significantly impact your investment outcomes.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Why Consider Automated Trading?</h2>
          <p class="text-gray-300 leading-relaxed mb-4">Automated trading addresses several challenges that manual traders face daily. The cryptocurrency market's 24/7 nature means that opportunities and risks can emerge at any time, often while you're sleeping, working, or simply living your life. Automated systems never need rest and can execute trades based on predetermined criteria without the emotional interference that often leads to poor decision-making.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">Additionally, automated trading allows for consistent strategy execution. While human traders might deviate from their planned approach due to fear, greed, or market excitement, automated systems stick to the strategy, providing more reliable long-term results.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Setting Up Your BotStrateg Account</h2>
          <div class="bg-card/50 border-card rounded-lg p-6 mb-6">
            <p class="text-gray-300 leading-relaxed mb-4">While BotStrateg is currently in development, understanding the setup process helps prepare for launch. The platform emphasizes security and ease of use, connecting to your existing exchange accounts rather than requiring you to transfer funds to a third-party platform.</p>
            
            <p class="text-gray-300 leading-relaxed">The integration process with exchanges like Binance and Gate.io uses secure API connections, allowing BotStrateg to execute trades on your behalf while keeping your funds safely in your existing exchange accounts. This approach provides the convenience of automated trading while maintaining the security of established exchange platforms.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Understanding AI-Driven Strategy Recommendations</h2>
          <p class="text-gray-300 leading-relaxed mb-4">One of BotStrateg's key differentiators is its personalized approach to strategy recommendations. Rather than applying generic trading rules, the platform analyzes your trading history and preferences to suggest strategies that align with your risk tolerance and investment goals.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">For beginners, this means you don't need to become an expert in technical analysis or market timing before benefiting from sophisticated trading strategies. The AI handles the complex analysis while providing clear recommendations that you can understand and approve.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Risk Management and Portfolio Optimization</h2>
          <p class="text-gray-300 leading-relaxed mb-4">Successful automated trading isn't just about maximizing profits—it's about managing risk and optimizing your overall portfolio performance. BotStrateg's approach includes built-in risk management features that help protect your investment while pursuing growth opportunities.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">The platform's real-time performance tracking allows you to monitor how your automated strategies are performing and make adjustments as needed. This transparency ensures that you remain in control of your investment approach while benefiting from AI-powered optimization.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Best Practices for Automated Trading Success</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-card/50 border-card rounded-lg p-4">
              <h3 class="font-semibold text-gray-100 mb-2">Start Conservative</h3>
              <p class="text-gray-300 text-sm">Begin with smaller position sizes and conservative strategies to understand how the platform works with your trading style.</p>
            </div>
            
            <div class="bg-card/50 border-card rounded-lg p-4">
              <h3 class="font-semibold text-gray-100 mb-2">Monitor Performance</h3>
              <p class="text-gray-300 text-sm">Regularly review your automated trading results and adjust strategies based on performance data.</p>
            </div>
            
            <div class="bg-card/50 border-card rounded-lg p-4">
              <h3 class="font-semibold text-gray-100 mb-2">Diversify Approaches</h3>
              <p class="text-gray-300 text-sm">Consider using multiple strategies across different cryptocurrencies to spread risk and capture various market opportunities.</p>
            </div>
            
            <div class="bg-card/50 border-card rounded-lg p-4">
              <h3 class="font-semibold text-gray-100 mb-2">Stay Informed</h3>
              <p class="text-gray-300 text-sm">While automated trading reduces daily management requirements, staying informed about major market developments helps you make better strategic decisions.</p>
            </div>
          </div>
          
          <div class="bg-card/50 border-card rounded-lg p-4 mb-6">
            <p class="text-gray-300"><span class="font-semibold text-gray-100">Set Clear Goals:</span> Define your investment objectives and risk tolerance to help guide the AI's strategy recommendations.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">Preparing for Launch</h2>
          <p class="text-gray-300 leading-relaxed mb-4">As BotStrateg continues development, joining the waitlist ensures you'll be among the first to access the platform when it launches. This early access provides the opportunity to begin optimizing your crypto trading approach with cutting-edge AI technology.</p>
          
          <p class="text-gray-300 leading-relaxed mb-6">The platform's development team is focused on creating a user-friendly experience that makes advanced trading strategies accessible to all investors, regardless of their technical background or trading experience.</p>
          
          <h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">The Future of Personal Crypto Trading</h2>
          <p class="text-gray-300 leading-relaxed mb-4">BotStrateg represents a significant step forward in democratizing access to institutional-quality trading tools. By combining AI analysis with user-friendly interfaces and robust security measures, the platform promises to make sophisticated crypto trading strategies available to individual investors worldwide.</p>
          
          <p class="text-gray-300 leading-relaxed">Whether you're looking to optimize existing trading approaches or entering the crypto market for the first time, automated trading platforms like BotStrateg offer a compelling path forward in the evolving world of cryptocurrency investment.</p>
        </div>
      `,
    author: "BotStrateg Team",
    publishedAt: "2024-08-14",
    readTime: "12 min read",
    category: "Beginner Guide",
    tags: ["Beginner", "Crypto Trading", "Automation", "Getting Started"],
    featured: false,
  },
];

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found - BotStrateg",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - BotStrateg Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://botstrateg.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `/og-blog-${post.id}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/og-blog-${post.id}.jpg`],
    },
    alternates: {
      canonical: `https://botstrateg.com/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;

  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            url: `https://botstrateg.com/blog/${post.slug}`,
            keywords: post.tags.join(", "),
            publisher: {
              "@type": "Organization",
              name: "BotStrateg",
              logo: {
                "@type": "ImageObject",
                url: "https://botstrateg.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://botstrateg.com/blog/${post.slug}`,
            },
            image: {
              "@type": "ImageObject",
              url: `/og-blog-${post.id}.jpg`,
              width: 1200,
              height: 630,
            },
          }),
        }}
      />

      <main className="pt-24">
        {/* Back to Blog */}
        <div className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button
                variant="ghost"
                className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <AnimatedSection className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge
                variant="outline"
                className="border-teal-400/30 text-teal-400 mb-4"
              >
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>{post.content.split(" ").length} words</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-slate-400">Share:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-slate-300 hover:border-teal-400 hover:text-teal-400 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-slate-300 hover:border-teal-400 hover:text-teal-400 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Article Content */}
        <AnimatedSection className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 border-card">
              <CardContent className="p-8 md:p-12">
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-teal-400
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-white prose-strong:font-semibold
                    prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
                    prose-code:text-teal-400 prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-blockquote:border-l-teal-400 prose-blockquote:bg-slate-800/50 prose-blockquote:p-4 prose-blockquote:rounded-r
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Tags */}
        <AnimatedSection className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-400 mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-slate-800 text-slate-400 hover:bg-teal-400/10 hover:text-teal-400"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <AnimatedSection className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-400/30 transition-all duration-300 group h-full">
                      <CardContent className="p-6">
                        <Badge
                          variant="outline"
                          className="border-slate-700 text-slate-400 group-hover:border-teal-400/50 group-hover:text-teal-400 mb-3"
                        >
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors mb-3 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-slate-500 text-xs">
                          <span>{relatedPost.author}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        <section
          id="waitlist"
          className="py-16 pb-36 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>

          <ParallaxContainer speed="medium">
            <div className="max-w-7xl mx-auto relative z-10">
              <AnimatedSection animation="fade-in-up">
                <div className="text-center mb-12">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                    Ready to Transform Your Trading?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    BotStrateg is currently in development. Join our waitlist to
                    be the first to access our AI-powered trading platform.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fade-in-left" delay={200}>
                  <div>
                    <WaitlistForm
                      title="Get Early Access"
                      description="Be among the first to experience the future of automated crypto trading"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-right" delay={400}>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-primary">
                        <span className="text-primary font-bold text-sm">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          Connect Your Exchanges (on alpha)
                        </h3>
                        <p className="text-muted-foreground">
                          Securely link your Binance, Gate.io, and other
                          exchange accounts
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-primary">
                        <span className="text-primary font-bold text-sm">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          Monitor & Optimize (on alpha)
                        </h3>
                        <p className="text-muted-foreground">
                          Track performance in real-time and continuously
                          improve your results
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-primary">
                        <span className="text-primary font-bold text-sm">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          Deploy AI Strategies (on beta)
                        </h3>
                        <p className="text-muted-foreground">
                          Let our AI analyze your trading patterns and recommend
                          optimal strategies
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </ParallaxContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}
