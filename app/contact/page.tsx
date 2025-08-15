"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Clock, CheckCircle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Contact Form: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "BotStrateg Contact Form",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions about BotStrateg? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Live Chat</CardTitle>
                  <CardDescription>Chat with our team in real-time during business hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Coming soon</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Response Time</CardTitle>
                  <CardDescription>We typically respond to all inquiries within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Monday - Friday, 9AM - 6PM EST</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                      <h3 className="font-heading font-semibold text-2xl mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full cursor-pointer" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
