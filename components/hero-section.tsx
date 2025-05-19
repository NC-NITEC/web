"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Tech circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Chúng tôi đơn giản là {" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NITEC</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Câu lạc bộ lạc quan nhất trường N, và là thánh delay 🐧
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" asChild className="glow-button">
              <Link href="/join">
                Vào đi~ <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Tech particles */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>

      {/* Scrolling tech code lines */}
      <div className="absolute right-10 top-1/4 bottom-1/4 w-1/3 overflow-hidden opacity-20 hidden lg:block">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="text-xs text-green-400 font-mono whitespace-pre"
        >
          {`
function initTechCommunity() {
  const members = [];
  const projects = [];
  const events = [];
  
  class Member {
    constructor(name, skills) {
      this.name = name;
      this.skills = skills;
      this.projects = [];
    }
    
    joinProject(project) {
      this.projects.push(project);
      project.addMember(this);
    }
    
    learnSkill(skill) {
      this.skills.push(skill);
      console.log(\`\${this.name} learned \${skill}!\`);
    }
  }
  
  class Project {
    constructor(name, description, tech) {
      this.name = name;
      this.description = description;
      this.tech = tech;
      this.members = [];
      this.completed = false;
    }
    
    addMember(member) {
      this.members.push(member);
    }
    
    complete() {
      this.completed = true;
      console.log(\`Project \${this.name} completed!\`);
    }
  }
  
  class Event {
    constructor(name, date, type) {
      this.name = name;
      this.date = date;
      this.type = type;
      this.attendees = [];
    }
    
    addAttendee(member) {
      this.attendees.push(member);
    }
    
    start() {
      console.log(\`Event \${this.name} started!\`);
    }
  }
  
  function createMember(name, skills) {
    const member = new Member(name, skills);
    members.push(member);
    return member;
  }
  
  function createProject(name, description, tech) {
    const project = new Project(name, description, tech);
    projects.push(project);
    return project;
  }
  
  function createEvent(name, date, type) {
    const event = new Event(name, date, type);
    events.push(event);
    return event;
  }
  
  return {
    members,
    projects,
    events,
    createMember,
    createProject,
    createEvent
  };
}

const nitec = initTechCommunity();

// Create members
const alex = nitec.createMember("Alex", ["JavaScript", "React"]);
const linh = nitec.createMember("Linh", ["Python", "Machine Learning"]);
const minh = nitec.createMember("Minh", ["Java", "Android"]);

// Create projects
const webApp = nitec.createProject(
  "Campus Connect",
  "A web app to connect students on campus",
  ["React", "Node.js", "MongoDB"]
);

const mlModel = nitec.createProject(
  "Predictive Analysis",
  "ML model to predict student performance",
  ["Python", "TensorFlow", "Pandas"]
);

// Create events
const hackathon = nitec.createEvent(
  "Code for Good",
  "2025-05-15",
  "Hackathon"
);

const workshop = nitec.createEvent(
  "Intro to AI",
  "2025-04-10",
  "Workshop"
);

// Members join projects
alex.joinProject(webApp);
linh.joinProject(mlModel);
minh.joinProject(webApp);

// Members attend events
hackathon.addAttendee(alex);
hackathon.addAttendee(linh);
hackathon.addAttendee(minh);
workshop.addAttendee(linh);
workshop.addAttendee(minh);

// Start events
hackathon.start();
workshop.start();

// Complete projects
webApp.complete();
mlModel.complete();

console.log("NITEC community is thriving!");
          `}
        </motion.div>
      </div>
    </section>
  )
}

