"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef(null)
  const infoRef = useRef(null)
  const formRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, threshold: 0.1 })
  const infoInView = useInView(infoRef, { once: true, threshold: 0.1 })
  const formInView = useInView(formRef, { once: true, threshold: 0.1 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Have questions or want to get involved? Reach out to us and we'll get back to you soon.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section ref={infoRef} className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <ContactCard
                icon={<Mail className="h-8 w-8 text-purple-400" />}
                title="Email"
                content="info@nitec.org"
                link="mailto:info@nitec.org"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactCard
                icon={<Phone className="h-8 w-8 text-blue-400" />}
                title="Phone"
                content="+84 123 456 789"
                link="tel:+84123456789"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactCard
                icon={<MapPin className="h-8 w-8 text-pink-400" />}
                title="Location"
                content="Nhan Chinh, Hanoi, Vietnam"
                link="https://maps.google.com"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-center font-heading"
            >
              Send Us a Message
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="tech-card border border-green-500/30 p-6 text-center"
              >
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Message Sent!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="glow-button">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 tech-card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button type="submit" className="w-full glow-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none h-16"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265584222285!2d105.79360731476343!3d21.028159785998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2sNhan%20Chinh%2C%20Thanh%20Xu%C3%A2n%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1617123456789!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="NITEC Location"
          className="filter grayscale"
        ></iframe>
      </section>
    </div>
  )
}

function ContactCard({ icon, title, content, link }) {
  return (
    <Card className="text-center hover:shadow-md transition-shadow tech-card h-full">
      <CardContent className="pt-6">
        <div className="inline-flex items-center justify-center p-3 bg-gray-800/50 rounded-full mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-white font-heading">{title}</h3>
        <a
          href={link}
          target={title === "Location" ? "_blank" : undefined}
          rel={title === "Location" ? "noopener noreferrer" : undefined}
          className="text-purple-400 hover:underline animated-underline"
        >
          {content}
        </a>
      </CardContent>
    </Card>
  )
}

