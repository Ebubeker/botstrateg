import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { ParallaxContainer } from "@/components/parallax-container";

export const metadata: Metadata = {
  title: "Blog - BotStrateg | AI Trading Insights & Market Analysis",
  description:
    "Stay updated with the latest insights on AI trading, algorithmic strategies, and market analysis from BotStrateg. Expert perspectives on automated trading technology.",
  keywords:
    "AI trading blog, algorithmic trading insights, automated trading strategies, market analysis, trading bot technology, fintech news",
  openGraph: {
    title: "Blog - BotStrateg | AI Trading Insights & Market Analysis",
    description:
      "Stay updated with the latest insights on AI trading, algorithmic strategies, and market analysis from BotStrateg.",
    type: "website",
    url: "https://botstrateg.com/blog",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "BotStrateg Blog - AI Trading Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - BotStrateg | AI Trading Insights & Market Analysis",
    description:
      "Stay updated with the latest insights on AI trading, algorithmic strategies, and market analysis from BotStrateg.",
    images: ["/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://botstrateg.com/blog",
  },
};

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title:
      "The Future of Crypto Trading: How AI-Powered Bots Are Changing the Game",
    excerpt:
      "The cryptocurrency market operates 24/7, presenting both unprecedented opportunities and unique challenges for traders. Discover how BotStrateg is revolutionizing crypto trading through AI and automation.",
    content:
      "The cryptocurrency market operates 24/7, presenting both unprecedented opportunities and unique challenges for traders. While traditional markets close for the night and weekends, crypto never sleeps—and neither should your trading strategy. This is where BotStrateg enters the picture, revolutionizing how we approach cryptocurrency trading through artificial intelligence and automated systems...",
    author: "BotStrateg Team",
    publishedAt: "2024-08-16",
    readTime: "8 min read",
    category: "AI Trading",
    tags: ["AI", "Crypto", "Trading Bots", "Automation"],
    featured: true,
    slug: "future-crypto-trading-ai-bots",
  },
  {
    id: 2,
    title:
      "Breaking Down the Technology: How BotStrateg's AI Analyzes Your Trading Patterns",
    excerpt:
      "Understanding how artificial intelligence can improve your trading outcomes requires a deeper look at the technology behind BotStrateg's pattern recognition and strategy recommendations.",
    content:
      "Understanding how artificial intelligence can improve your trading outcomes requires a deeper look at the technology behind platforms like BotStrateg. While the user experience remains simple and intuitive, the underlying systems perform complex analyses that would be impossible for individual traders to execute manually...",
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
    slug: "botstrateg-ai-technology-analysis",
  },
  {
    id: 3,
    title:
      "Getting Started with Automated Crypto Trading: A Beginner's Guide to BotStrateg",
    excerpt:
      "The world of automated crypto trading can seem intimidating for newcomers, but BotStrateg is designed to make sophisticated trading strategies accessible to traders at all experience levels.",
    content:
      "The world of automated crypto trading can seem intimidating for newcomers, but platforms like BotStrateg are designed to make sophisticated trading strategies accessible to traders at all experience levels. Whether you're a seasoned investor looking to optimize your approach or a beginner seeking to enter the crypto market with professional-grade tools...",
    author: "BotStrateg Team",
    publishedAt: "2024-08-14",
    readTime: "12 min read",
    category: "Beginner Guide",
    tags: ["Beginner", "Crypto Trading", "Automation", "Getting Started"],
    featured: false,
    slug: "automated-crypto-trading-beginner-guide",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "BotStrateg Blog",
            description: "AI Trading Insights & Market Analysis",
            url: "https://botstrateg.com/blog",
            publisher: {
              "@type": "Organization",
              name: "BotStrateg",
              logo: {
                "@type": "ImageObject",
                url: "https://botstrateg.com/logo.png",
              },
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              author: {
                "@type": "Person",
                name: post.author,
              },
              datePublished: post.publishedAt,
              url: `https://botstrateg.com/blog/${post.id}`,
              keywords: post.tags.join(", "),
            })),
          }),
        }}
      />

      <main className="pt-24">
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trading <span className="text-teal-400">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Stay ahead of the market with expert analysis, AI trading
              strategies, and the latest developments in algorithmic trading
              technology.
            </p>
          </div>
        </AnimatedSection>

        {featuredPost && (
          <AnimatedSection className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Badge
                  variant="secondary"
                  className="bg-teal-400/10 text-teal-400 border-teal-400/20"
                >
                  Featured Article
                </Badge>
              </div>
              <Card className="bg-card/50 border-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img src={`/${featuredPost.slug}.jpg`} alt="" />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge
                        variant="outline"
                        className="border-teal-400/30 text-teal-400"
                      >
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(
                          featuredPost.publishedAt
                        ).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-400">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-teal-400 hover:bg-teal-500 text-slate-900">
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-card/50 border-card hover:border-teal-400/30 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="outline"
                        className="border-slate-700 text-slate-400 group-hover:border-teal-400/50 group-hover:text-teal-400"
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-800 text-slate-400 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="w-full mt-4 text-teal-400 hover:text-teal-300 hover:bg-teal-400/10"
                      >
                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

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
