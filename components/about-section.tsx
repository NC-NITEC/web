"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Angry, Code, Users, Lightbulb, Award, Rabbit } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
    <section className="py-20 relative overflow-hidden bg-gray-900" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-900/20 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-900/20 translate-x-1/3 translate-y-1/3 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Về <span className="text-purple-400">NITEC</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-purple-600 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-gray-300">
            chim
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 text-white">
              Sứ mệnh
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              create a gay community
            </motion.p>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 text-white">
              Tầm nhìn
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300">
              ngắn hạn
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative h-80 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 z-10" />
            <Image
              src="/lamanh.png?height=600&width=800"
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ValueCard
            icon={<Rabbit className="h-10 w-10 text-purple-600" />}
            title="mlem"
            description="ở đây chúng tôi có rất nhiều wibu, NJC tuổi 🦋"
            variants={itemVariants}
          />
          <ValueCard
            icon={<Users className="h-10 w-10 text-purple-600" />}
            title="Cộng đồng"
            description="99.9% không toxic bằng lũ chơi FF 🔥🔥🔥"
            variants={itemVariants}
          />
          <ValueCard
            icon={<Angry className="h-10 w-10 text-purple-600" />}
            title="phẫn nội"
            description="cơm"
            variants={itemVariants}
          />
          <ValueCard
            icon={<Award className="h-10 w-10 text-purple-600" />}
            title="dẫn đầu xu thế"
            description="sự vô tri của chúng tôi là tuyệt đối :3"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  )
}

function ValueCard({ icon, title, description, variants }) {
  return (
    <motion.div
      variants={variants}
      className="bg-gray-800/50 p-6 rounded-lg text-center hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300 tech-card"
    >
      <div className="inline-flex items-center justify-center p-3 bg-gray-700/50 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

