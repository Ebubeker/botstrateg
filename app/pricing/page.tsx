import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";
import { AnimatedSection } from "@/components/animated-section";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Shield, CreditCard } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Pricing - BotStrateg | Automated Trading Bot Platform",
  description:
    "Choose the perfect plan for your automated trading needs. Start with a 7-day free trial, then upgrade to Pro monthly (€30/month) or yearly (€270/year) for full access.",
  keywords:
    "trading bot pricing, automated trading subscription, crypto bot plans, algorithmic trading costs",
  openGraph: {
    title: "Pricing - BotStrateg | Automated Trading Bot Platform",
    description:
      "Choose the perfect plan for your automated trading needs. Start with a 7-day free trial, then upgrade to Pro monthly (€30/month) or yearly (€270/year) for full access.",
    type: "website",
    url: "https://botstrateg.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - BotStrateg | Automated Trading Bot Platform",
    description:
      "Choose the perfect plan for your automated trading needs. Start with a 7-day free trial, then upgrade to Pro monthly (€30/month) or yearly (€270/year) for full access.",
  },
};

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards. All payments are processed securely..",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.",
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer:
      "Yes! Our yearly plan offers a 25% discount compared to monthly billing, saving you €90 per year.",
  },
  {
    question: "Is VAT included in the prices?",
    answer:
      "Yes, all prices include EU VAT where applicable. The final price will be calculated based on your location during checkout.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your automated trading journey with our free trial. No hidden
            fees, no surprises.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      {/* <AnimatedSection className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders who trust BotStrateg for their automated
            trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </AnimatedSection> */}

      <section
        id="waitlist"
        className="py-16 pb-36 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Ready to Start Trading?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of traders who trust BotStrateg for their automated
            trading needs.
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
      </section>

      <Footer />
    </div>
  );
}
