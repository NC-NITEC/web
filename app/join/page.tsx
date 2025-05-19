"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Code, BookOpen, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"

const BenefitCard = ({ icon, title, description }) => (
  <Card className="h-full tech-card">
    <CardContent className="flex flex-col items-center justify-center p-6">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </CardContent>
  </Card>
)

const Testimonial = ({ quote, name, role }) => (
  <Card className="h-full tech-card">
    <CardContent className="p-6">
      <p className="text-gray-300 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function JoinPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    major: "",
    year: "",
    interests: [],
    experience: "",
    motivation: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const formRef = useRef(null)
  const testimonialsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, threshold: 0.1 })
  const benefitsInView = useInView(benefitsRef, { once: true, threshold: 0.1 })
  const formInView = useInView(formRef, { once: true, threshold: 0.1 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.1 })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestChange = (interest) => {
    setFormState((prev) => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const interests = [
    "Web Development",
    "Mobile Development",
    "AI/Machine Learning",
    "IoT/Embedded Systems",
    "Cybersecurity",
    "UI/UX Design",
    "Game Development",
    "Data Science",
    "Blockchain",
    "Cloud Computing",
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Join NITEC</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Become a part of our tech community and start your journey of learning, innovation, and growth.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center font-heading text-white"
          >
            Why Join NITEC?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <BenefitCard
                icon={
                  <div className="p-3 bg-gray-800/50 rounded-full">
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                }
                title="Community"
                description="Connect with like-minded tech enthusiasts and build your network."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <BenefitCard
                icon={
                  <div className="p-3 bg-gray-800/50 rounded-full">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                }
                title="Skill Development"
                description="Enhance your technical skills through hands-on projects and workshops."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <BenefitCard
                icon={
                  <div className="p-3 bg-gray-800/50 rounded-full">
                    <BookOpen className="h-8 w-8 text-pink-400" />
                  </div>
                }
                title="Learning Resources"
                description="Access exclusive tutorials, courses, and mentorship opportunities."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <BenefitCard
                icon={
                  <div className="p-3 bg-gray-800/50 rounded-full">
                    <Calendar className="h-8 w-8 text-cyan-400" />
                  </div>
                }
                title="Events"
                description="Participate in hackathons, tech talks, and networking events."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-center font-heading text-white"
            >
              Membership Application
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="tech-card border border-green-500/30 p-8 text-center"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Application Submitted!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for applying to join NITEC. We'll review your application and get back to you within 3-5
                  business days.
                </p>
                <p className="text-gray-300 mb-6">
                  In the meantime, feel free to check out our upcoming events and resources on our website.
                </p>
                <Button asChild className="glow-button">
                  <a href="/">Return to Homepage</a>
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
                <h3 className="text-xl font-semibold mb-4 text-white">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Full Name
                    </Label>
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
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address
                    </Label>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+84 123 456 789"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="major" className="text-gray-300">
                      Major/Field of Study
                    </Label>
                    <Input
                      id="major"
                      name="major"
                      value={formState.major}
                      onChange={handleChange}
                      required
                      placeholder="Computer Science"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="year" className="text-gray-300">
                    Year of Study
                  </Label>
                  <Select value={formState.year} onValueChange={(value) => handleSelectChange("year", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/20 text-white">
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
                      <SelectItem value="5">Fifth Year</SelectItem>
                      <SelectItem value="graduate">Graduate Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Areas of Interest</h3>
                  <p className="text-sm text-gray-400">Select all that apply</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formState.interests.includes(interest)}
                          onCheckedChange={() => handleInterestChange(interest)}
                          className="border-white/20 data-[state=checked]:bg-purple-600"
                        />
                        <Label htmlFor={interest} className="text-gray-300">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-gray-300">
                    Technical Experience
                  </Label>
                  <p className="text-sm text-gray-400 mb-2">Briefly describe your technical background and skills</p>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formState.experience}
                    onChange={handleChange}
                    placeholder="I have experience with..."
                    rows={3}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-gray-300">
                    Why do you want to join NITEC?
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formState.motivation}
                    onChange={handleChange}
                    required
                    placeholder="I want to join NITEC because..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formState.agreeToTerms}
                    onCheckedChange={(checked) => setFormState((prev) => ({ ...prev, agreeToTerms: checked === true }))}
                    required
                    className="border-white/20 data-[state=checked]:bg-purple-600"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                    I agree to the club's code of conduct and understand that membership requires active participation.
                  </Label>
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
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center font-heading text-white"
          >
            What Our Members Say
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="Joining NITEC was one of the best decisions I made in college. I've learned so much and made great connections."
                name="Minh Tran"
                role="Computer Science Student"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="The hands-on projects and mentorship at NITEC helped me secure my dream internship at a tech company."
                name="Linh Nguyen"
                role="Software Engineering Student"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Testimonial
                quote="NITEC provided me with opportunities to apply my skills to real-world problems and collaborate with talented peers."
                name="Tuan Pham"
                role="IT Student"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

