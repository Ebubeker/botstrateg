import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { WaitlistForm } from "@/components/waitlist-form";
import { Footer } from "@/components/footer";
import { ParallaxContainer } from "@/components/parallax-container";
import { AnimatedSection } from "@/components/animated-section";
import { Bot, TrendingUp, Shield, Zap, BarChart3, Brain, Star, Euro, Clock } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow animate-delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-float glow-primary">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
                Maximize Your Crypto Value with{" "}
                <span className="text-primary">AI-Powered Bot Planning</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                BotStrateg combines intelligent trading bots, advanced
                analytics, and AI-driven strategy recommendations to help you
                optimize your crypto portfolio performance.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="hover-lift glow-primary-hover"
                asChild
              >
                <Link href="#waitlist">Join Waitlist</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift bg-transparent"
                asChild
              >
                <Link href="/about" className="hover:text-primary">Learn More</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 pb-24 px-4 sm:px-6 lg:px-8 bg-card/50 relative">
        <ParallaxContainer speed="medium">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                  Powerful Features for Smart Trading
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to automate and optimize your crypto
                  trading strategy
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-primary">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">
                      Bot Oversee
                    </CardTitle>
                    <CardDescription>
                      Connect to multiple exchanges and oversee all your trading
                      bots from one unified dashboard
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-primary">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">
                      Advanced Analytics
                    </CardTitle>
                    <CardDescription>
                      Track performance with detailed charts, win rates, and
                      risk-adjusted returns analysis
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300}>
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-primary">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">
                      AI Recommendations
                    </CardTitle>
                    <CardDescription>
                      Get intelligent strategy suggestions and optimal capital
                      allocation based on your bot performance
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-primary">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">
                      Performance Ranking
                    </CardTitle>
                    <CardDescription>
                      Rank your bots by profitability, consistency, and
                      risk-adjusted returns for better decision making
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={500}>
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-primary">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">
                      Risk Management
                    </CardTitle>
                    <CardDescription>
                      Advanced risk controls and position sizing to protect your
                      capital and maximize returns
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={600}>
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-primary">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">
                      Real-time Updates
                    </CardTitle>
                    <CardDescription>
                      Live monitoring of all your bots with instant
                      notifications and real-time P&L tracking
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </ParallaxContainer>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start with our free trial and upgrade when you&apos;re ready
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto glow-primary">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Free Trial</CardTitle>
                  <div className="text-3xl font-bold mt-2">€0</div>
                  <CardDescription>7 days to test our platform</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="hover-lift text-center border-primary shadow-lg shadow-primary/20 scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto glow-primary">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Pro Monthly</CardTitle>
                  <div className="text-3xl font-bold mt-2">€30</div>
                  <CardDescription>per month</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto glow-primary">
                    <Euro className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Pro Yearly</CardTitle>
                  <div className="text-3xl font-bold mt-2">€270</div>
                  <CardDescription>per year (Save 25%)</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing" className="hover:text-primary">View Full Pricing Details</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Section with Waitlist */}
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
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        Connect Your Exchanges (on alpha)
                      </h3>
                      <p className="text-muted-foreground">
                        Securely link your Binance, Gate.io, and other exchange
                        accounts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-primary">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        Monitor & Optimize (on alpha)
                      </h3>
                      <p className="text-muted-foreground">
                        Track performance in real-time and continuously improve
                        your results
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-primary">
                      <span className="text-primary font-bold text-sm">3</span>
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

      <Footer />
    </div>
  );
}
