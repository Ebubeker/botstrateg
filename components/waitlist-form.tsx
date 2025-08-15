"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

interface WaitlistFormProps {
  title?: string
  description?: string
  className?: string
}

export function WaitlistForm({
  title = "Join the Waitlist",
  description = "Be the first to know when BotStrateg launches",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          subject: "New Waitlist Signup - BotStrateg",
          email: email,
          message: `New waitlist signup from: ${email}`,
          from_name: "BotStrateg Waitlist",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className={`max-w-md mx-auto ${className}`}>
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-2">You&apos;re on the list!</h3>
            <p className="text-muted-foreground">We&apos;ll notify you as soon as BotStrateg is ready to launch.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`max-w-md mx-auto ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="font-heading">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
