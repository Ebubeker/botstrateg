"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Free Trial",
    price: "0",
    period: "7 days",
    description: "Perfect for testing our platform",
    features: [
      "Access to basic trading strategies",
      "Real-time market data",
      "Basic portfolio tracking",
      "Email support",
      "Limited to 3 active bots",
    ],
    cta: "Start Free Trial",
    popular: false,
    badge: "Trial",
  },
  {
    name: "Pro Monthly",
    price: "30",
    period: "month",
    description: "Full access with monthly flexibility",
    features: [
      "All premium trading strategies",
      "Advanced analytics & insights",
      "Unlimited active bots",
      "Priority support",
      "Custom risk management",
      "API access",
      "Advanced backtesting",
    ],
    cta: "Get Started",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Pro Yearly",
    price: "270",
    period: "year",
    description: "Best value with 25% savings",
    features: [
      "All premium trading strategies",
      "Advanced analytics & insights",
      "Unlimited active bots",
      "Priority support",
      "Custom risk management",
      "API access",
      "Advanced backtesting",
      "Exclusive strategy updates",
      "Personal account manager",
    ],
    cta: "Save 25%",
    popular: false,
    badge: "Best Value",
    savings: "Save €90/year",
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our free trial and upgrade when you're ready to unlock the full potential of automated trading
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">{plan.badge}</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                  {plan.savings && <div className="text-sm text-primary font-medium mt-1">{plan.savings}</div>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
                  size="lg"
                  asChild
                >
                  <Link href="#waitlist">
                    {/* {plan.cta} */} Join Waitlist
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 24/7 customer support and a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
            <span>✓ EU VAT included</span>
          </div>
        </div>
      </div>
    </section>
  )
}
