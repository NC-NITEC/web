"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const projects = [
	{
		id: 1,
		title: "uoc j",
		description: "uoc j",
		category: "wishes",
		technologies: ["animejs"],
		image: "/dead.gif?height=200&width=400",
	},
]

export default function ProjectsShowcase() {
	const [hoveredProject, setHoveredProject] = useState(null)
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, threshold: 0.2 })

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
		<section ref={ref} className="py-20 relative overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900"></div>
			<div className="absolute inset-0 circuit-pattern opacity-5"></div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold mb-4 text-white font-heading">
						Dự án
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto">
						gay
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							whileHover={{ y: -5 }}
							onHoverStart={() => setHoveredProject(project.id)}
							onHoverEnd={() => setHoveredProject(null)}
							className="h-full"
						>
							<Card className="h-full flex flex-col overflow-hidden tech-card">
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500"
										style={{
											transform:
												hoveredProject === project.id
													? "scale(1.05)"
													: "scale(1)",
										}}
									/>
									<Badge className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm">
										{project.category}
									</Badge>
								</div>
								<CardHeader>
									<h3 className="text-xl font-semibold text-white">
										{project.title}
									</h3>
								</CardHeader>
								<CardContent className="flex-grow">
									<p className="text-gray-300 mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="outline"
												className="border-white/20 text-gray-300"
											>
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="flex justify-between">
									{project.github && (
										<Button
											variant="outline"
											size="sm"
											asChild
											className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
										>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center"
											>
												<Github className="mr-1 h-4 w-4" /> Code
											</a>
										</Button>
									)}
									{project.demo && (
										<Button
											variant="outline"
											size="sm"
											asChild
											className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
										>
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center"
											>
												<ExternalLink className="mr-1 h-4 w-4" /> Demo
											</a>
										</Button>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

