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
]

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white font-heading">Meet Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our dedicated team of student leaders works tirelessly to create valuable experiences for all club members.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              className="h-full"
            >
              <Card className="overflow-hidden h-full tech-card">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredMember === member.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                      hoveredMember === member.id ? "opacity-100" : "opacity-0"
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
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-300">
            Want to join our leadership team?{" "}
            <a href="/join" className="text-purple-400 hover:underline animated-underline">
              Apply here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
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

