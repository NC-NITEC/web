import Link from "next/link"
import { ArrowRight, Calendar, Users, Code, BookOpen, MessageSquare } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsShowcase from "@/components/projects-showcase"
import TeamSection from "@/components/team-section"
import JoinCTA from "@/components/join-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <AboutSection />

      <ProjectsShowcase />

      <TeamSection />

      <JoinCTA />
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <div className="tech-card p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="mb-4 p-3 bg-gray-800/50 rounded-full inline-flex">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      <Link href={link} className="text-purple-400 font-medium flex items-center group">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

