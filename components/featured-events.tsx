"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    description: "Learn modern web development techniques with React and Next.js.",
    date: "2025-04-15",
    time: "14:00 - 17:00",
    location: "Tech Lab, Building A",
    category: "Workshop",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Annual Hackathon",
    description: "A 24-hour coding competition to solve real-world problems.",
    date: "2025-05-20",
    time: "09:00 - 09:00 (next day)",
    location: "Main Hall",
    category: "Competition",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "AI & Machine Learning Talk",
    description: "Industry experts discuss the latest trends in AI and ML.",
    date: "2025-04-28",
    time: "18:00 - 20:00",
    location: "Auditorium",
    category: "Talk",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "IoT Project Showcase",
    description: "Members present their IoT projects and share insights.",
    date: "2025-05-05",
    time: "15:00 - 18:00",
    location: "Exhibition Hall",
    category: "Showcase",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function FeaturedEvents() {
  const [hoveredEvent, setHoveredEvent] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  const visibleEvents = events.slice(currentIndex, currentIndex + 3)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (events.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 3 : prev - 1))
  }

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white font-heading">Upcoming Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us for workshops, hackathons, and tech talks to enhance your skills and connect with fellow tech
            enthusiasts.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {visibleEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredEvent(event.id)}
                onHoverEnd={() => setHoveredEvent(null)}
              >
                <Card className="h-full flex flex-col overflow-hidden tech-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: hoveredEvent === event.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <Badge className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm">{event.category}</Badge>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full glow-button">
                      <Link href={`/events/${event.id}`}>Register Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              <Link href="/events" className="flex items-center">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

