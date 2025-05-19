"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Users, BookOpen, Award, Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [storyRef, storyInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="pt-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 text-white">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NITEC</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Nhan Chinh Information Technology & Electronics Club - Empowering students through technology and
            innovation.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 font-heading">Our Story</h2>
              <p className="text-gray-300 mb-4">
                NITEC was founded in 2020 by a group of passionate students who wanted to create a community where
                technology enthusiasts could learn, collaborate, and grow together.
              </p>
              <p className="text-gray-300 mb-4">
                What started as informal meetups in a classroom has grown into one of the most active student
                organizations on campus, with over 200 members and numerous successful projects and events.
              </p>
              <p className="text-gray-300">
                Today, NITEC continues to evolve, embracing new technologies and providing valuable opportunities for
                students to develop technical skills, leadership abilities, and professional networks.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative h-80 rounded-lg overflow-hidden tech-card">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="NITEC members collaborating"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 font-heading">Mission & Vision</h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="tech-card p-8">
              <div className="inline-flex items-center justify-center p-3 bg-purple-900/50 rounded-full mb-4">
                <Target className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-heading">Our Mission</h3>
              <p className="text-gray-300">
                To create an inclusive environment where students can explore technology, develop technical skills, and
                collaborate on innovative projects that solve real-world problems.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="tech-card p-8">
              <div className="inline-flex items-center justify-center p-3 bg-blue-900/50 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-heading">Our Vision</h3>
              <p className="text-gray-300">
                To be a leading student organization that empowers the next generation of technology leaders and
                innovators, fostering a community that embraces continuous learning and technological advancement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/10 to-gray-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 font-heading">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">These principles guide everything we do at NITEC.</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <ValueCard
              icon={<Code className="h-8 w-8 text-purple-400" />}
              title="Technical Excellence"
              description="We strive for mastery in programming, electronics, and emerging technologies."
              variants={itemVariants}
            />
            <ValueCard
              icon={<Users className="h-8 w-8 text-blue-400" />}
              title="Community"
              description="We foster a supportive environment where members learn and grow together."
              variants={itemVariants}
            />
            <ValueCard
              icon={<BookOpen className="h-8 w-8 text-pink-400" />}
              title="Continuous Learning"
              description="We embrace curiosity and the pursuit of knowledge in all forms."
              variants={itemVariants}
            />
            <ValueCard
              icon={<Lightbulb className="h-8 w-8 text-cyan-400" />}
              title="Innovation"
              description="We encourage creative thinking and novel approaches to solving problems."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section ref={ctaRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900"></div>
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-heading">Join Our Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Become a part of NITEC and start your journey in technology and innovation.
            </p>
            <Button size="lg" asChild className="glow-button">
              <Link href="/join" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ValueCard({ icon, title, description, variants }) {
  return (
    <motion.div
      variants={variants}
      className="tech-card p-6 rounded-lg text-center hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
    >
      <div className="inline-flex items-center justify-center p-3 bg-gray-800/50 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-heading">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

