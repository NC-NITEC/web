"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    id: 1,
    name: "Alex Nguyen",
    role: "Club President",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Computer Science senior with a passion for AI and machine learning.",
    github: "https://github.com/alexnguyen",
    linkedin: "https://linkedin.com/in/alexnguyen",
    email: "alex@nitec.org",
  },
  {
    id: 2,
    name: "Linh Tran",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer specializing in React and Node.js ecosystems.",
    github: "https://github.com/linhtran",
    linkedin: "https://linkedin.com/in/linhtran",
    email: "linh@nitec.org",
  },
  {
    id: 3,
    name: "Minh Pham",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "IT enthusiast with strong organizational and communication skills.",
    github: "https://github.com/minhpham",
    linkedin: "https://linkedin.com/in/minhpham",
    email: "minh@nitec.org",
  },
  {
    id: 4,
    name: "Hoa Le",
    role: "IoT Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Electronics engineer with expertise in embedded systems and IoT.",
    github: "https://github.com/hoale",
    linkedin: "https://linkedin.com/in/hoale",
    email: "hoa@nitec.org",
  },
  {
    id: 5,
    name: "Tuan Nguyen",
    role: "AI Research Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Graduate student researching deep learning and computer vision.",
    github: "https://github.com/tuannguyen",
    linkedin: "https://linkedin.com/in/tuannguyen",
    email: "tuan@nitec.org",
  },
  {
    id: 6,
    name: "Mai Tran",
    role: "Design Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "UI/UX designer with a background in graphic design and web development.",
    github: "https://github.com/maitran",
    linkedin: "https://linkedin.com/in/maitran",
    email: "mai@nitec.org",
  },
  {
    id: 7,
    name: "Duc Le",
    role: "Cybersecurity Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Information security enthusiast with experience in penetration testing.",
    github: "https://github.com/ducle",
    linkedin: "https://linkedin.com/in/ducle",
    email: "duc@nitec.org",
  },
  {
    id: 8,
    name: "Lan Pham",
    role: "Content Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technical writer and social media manager with a knack for storytelling.",
    github: "https://github.com/lanpham",
    linkedin: "https://linkedin.com/in/lanpham",
    email: "lan@nitec.org",
  },
]

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState(null)

  const heroRef = useRef(null)
  const leadershipRef = useRef(null)
  const coreRef = useRef(null)
  const advisorsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, threshold: 0.1 })
  const leadershipInView = useInView(leadershipRef, { once: true, threshold: 0.1 })
  const coreInView = useInView(coreRef, { once: true, threshold: 0.1 })
  const advisorsInView = useInView(advisorsRef, { once: true, threshold: 0.1 })

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Meet the dedicated students who lead NITEC and make our community thrive.
          </p>
        </motion.div>
      </section>

      {/* Leadership Team */}
      <section ref={leadershipRef} className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center font-heading"
          >
            Leadership Team
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={leadershipInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.slice(0, 4).map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <TeamMemberCard member={member} hovered={hoveredMember === member.id} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section ref={coreRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={coreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center font-heading"
          >
            Core Team
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={coreInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.slice(4).map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <TeamMemberCard member={member} hovered={hoveredMember === member.id} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section ref={advisorsRef} className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={advisorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center font-heading"
          >
            Faculty Advisors
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={advisorsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <TeamMemberCard
                member={{
                  id: 101,
                  name: "Dr. Thanh Nguyen",
                  role: "Faculty Advisor",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Professor of Computer Science with research interests in distributed systems and cloud computing.",
                  github: "https://github.com/thanhnguyen",
                  linkedin: "https://linkedin.com/in/thanhnguyen",
                  email: "thanh.nguyen@university.edu",
                }}
              />
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <TeamMemberCard
                member={{
                  id: 102,
                  name: "Prof. Huong Tran",
                  role: "Faculty Advisor",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Associate Professor of Electrical Engineering specializing in embedded systems and IoT.",
                  github: "https://github.com/huongtran",
                  linkedin: "https://linkedin.com/in/huongtran",
                  email: "huong.tran@university.edu",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900"></div>
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 font-heading">Join Our Team</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Interested in taking on a leadership role at NITEC? We're always looking for passionate students to join
              our team.
            </p>
            <a
              href="/join"
              className="inline-block bg-white/10 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-md hover:bg-white/20 transition-colors border border-white/20"
            >
              Apply for a Position
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function TeamMemberCard({ member, hovered }) {
  return (
    <Card className="overflow-hidden h-full tech-card">
      <div className="relative overflow-hidden h-64">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-3">
            <SocialLink href={member.github} icon={<Github size={18} />} />
            <SocialLink href={member.linkedin} icon={<Linkedin size={18} />} />
            <SocialLink href={`mailto:${member.email}`} icon={<Mail size={18} />} />
          </div>
        </div>
      </div>
      <CardContent className="text-center p-4">
        <h3 className="font-semibold text-lg text-white">{member.name}</h3>
        <p className="text-purple-400 text-sm mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm">{member.bio}</p>
      </CardContent>
    </Card>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-purple-600 transition-colors"
    >
      {icon}
    </a>
  )
}

