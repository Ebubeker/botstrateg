import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";
import Team from '@/assets/images/team.jpg'
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            About <span className="text-primary">BotStrateg</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're building the future of automated crypto trading with
            AI-powered insights and intelligent bot management.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Turn bot data into trading intelligence. BotStrateg monitors
                your automated trades across all exchanges, analyzes patterns,
                and delivers the insights you need to plan your next moves like
                a pro.
              </p>
              <p className="text-lg text-muted-foreground">
                Stop flying blind with your trading automation. See which
                strategies are actually working, identify market opportunities
                your bots might be missing, and make data-driven decisions about
                when to adjust, pause, or scale your automated trading. With
                BotStrateg's comprehensive analytics, you're always one step
                ahead of the market.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <Image 
                src={Team}
                alt="Team working on AI trading algorithms"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading">Precision</CardTitle>
                <CardDescription>
                  We build tools with meticulous attention to detail and
                  accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading">Community</CardTitle>
                <CardDescription>
                  Our users are at the heart of everything we create and improve
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading">Innovation</CardTitle>
                <CardDescription>
                  We constantly push the boundaries of what's possible in
                  trading technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading">Growth</CardTitle>
                <CardDescription>
                  We help our users achieve their financial goals through smart
                  automation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Our Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technology for reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  AI & Machine Learning
                </CardTitle>
                <CardDescription>
                  Advanced algorithms analyze market patterns and trading
                  performance to provide intelligent recommendations and
                  optimize your strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Real-time Processing
                </CardTitle>
                <CardDescription>
                  Our infrastructure handles millions of data points per second,
                  ensuring you never miss a trading opportunity or important
                  market movement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Enterprise Security
                </CardTitle>
                <CardDescription>
                  Bank-level security protocols protect your API keys and
                  trading data with end-to-end encryption and secure key
                  management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
            Development Status
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            BotStrateg is currently in active development. We're working hard to
            bring you the most comprehensive trading bot management platform
            available.
          </p>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-heading font-semibold text-xl mb-4">
              What's Coming
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-primary">
                  Phase 1
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Exchange API connections</li>
                  <li>• Bot management dashboard</li>
                  <li>• Performance analytics</li>
                  <li>• Bot ranking system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">
                  Phase 2 (Alpha)
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI strategy recommendations</li>
                  <li>• Advanced risk management</li>
                  <li>• Portfolio optimization</li>
                  <li>• Market analysis tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">
                  Phase 3 (Beta)
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced AI features</li>
                  <li>• Social trading features</li>
                  <li>• Upcoming features (under planning)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
