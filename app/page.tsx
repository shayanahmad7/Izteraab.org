"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Brain, Users, BookOpen, ArrowRight, Lightbulb, TrendingUp, Heart, Sparkles, Zap, Globe, UserCheck } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className={`flex items-center space-x-2 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:rotate-12">
              <Brain className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors duration-300">
                Izteraab
              </h1>
              <p className="text-xs text-emerald-600 font-medium">Empowering Learning</p>
            </div>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-6 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
          >
            <Link href="/" className="text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/demo"
              className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button
            asChild
            className={`bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-300 hover:shadow-lg ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"} delay-500`}
          >
            <Link href="#contact">Get Involved</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection className="py-20 px-4 relative" animation="fade-up">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge
            className={`mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 hover:scale-105 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Sparkles className="w-3 h-3 mr-1 animate-spin" />
            Transforming Pakistani Classrooms
          </Badge>
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Empowering{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-300% bg-size-200">
              Personalized Learning
            </span>{" "}
            in Pakistan
          </h1>
          <p
            className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Empowering teachers to transform from lecturers to learning coaches, creating personalized, mastery-based
            classrooms where every student actively pursues knowledge and embraces challenges.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/demo">
                See Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-emerald-50 bg-transparent"
              asChild
            >
              <Link href="#contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Statement */}
      <AnimatedSection
        className="py-16 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white relative overflow-hidden"
        animation="scale-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-teal-600/50 animate-gradient bg-300%"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            To transform Pakistani classrooms from passive, lecture-driven environments into dynamic, personalized
            spaces where every child masters foundational concepts through active learning and AI-powered technology
            integration.
          </p>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection id="solution" className="py-20 px-4 bg-gray-50 relative" animation="slide-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A holistic approach to educational transformation focusing on teacher training, classroom methodology, and
              sustainable scaling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-emerald-200 transition-all duration-300">
                  <UserCheck className="w-8 h-8 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  Teacher Training
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive training programs to transform teachers into learning coaches with ongoing mentorship
                  and peer networks
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-teal-200 transition-all duration-300">
                  <Brain className="w-8 h-8 text-teal-600 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  AI Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Effective utilization of KhanMigo and Khan Academy for personalized learning paths and real-time
                  progress tracking
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-rose-200 transition-all duration-300">
                  <Users className="w-8 h-8 text-rose-500 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-rose-500 transition-colors duration-300">
                  Classroom Support
                </h3>
                <p className="text-gray-600 text-sm">
                  In-person and remote support through trained assistants, educational interns, and peer tutoring
                  systems
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-emerald-200 transition-all duration-300">
                  <Globe className="w-8 h-8 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  Scalable Framework
                </h3>
                <p className="text-gray-600 text-sm">
                  Replicable model designed for sustainable scaling across government schools throughout Pakistan
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-20 px-4" animation="fade-left">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our 5-Session Weekly Structure</h2>
            <p className="text-xl text-gray-600">A comprehensive framework for personalized learning implementation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-emerald-700 transition-all duration-300">
                    <span className="text-white text-sm font-bold">3-4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      Personalized Learning Sessions
                    </h3>
                    <p className="text-gray-600">
                      Students follow individualized paths via Khan Academy & KhanMigo based on diagnostic assessments,
                      with teachers providing coaching and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-teal-700 transition-all duration-300">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-600 transition-colors duration-300">
                      Problem-Solving & Activities
                    </h3>
                    <p className="text-gray-600">
                      Interactive mathematical puzzles, games, and team competitions designed to build critical thinking
                      and problem-solving skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-rose-600 transition-all duration-300">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-rose-500 transition-colors duration-300">
                      Growth Mindset & Applications
                    </h3>
                    <p className="text-gray-600">
                      Interactive discussions, documentaries, and group reflections to build deeper conceptual
                      understanding and real-world connections
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-emerald-600 animate-spin" />
                    Teacher Support System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <Lightbulb className="w-5 h-5 text-emerald-600 group-hover:animate-bounce" />
                    <span className="text-gray-700">Virtual Teacher Assistant Program with weekly mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-teal-600 group-hover:animate-bounce" />
                    <span className="text-gray-700">In-person support through educational interns and peer tutors</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-rose-500 group-hover:animate-bounce" />
                    <span className="text-gray-700">International collaboration with experienced educators</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-emerald-600 group-hover:animate-bounce" />
                    <span className="text-gray-700">
                      Comprehensive training materials in Urdu and ongoing resources
                    </span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Pilot Project */}
      <AnimatedSection
        id="pilot"
        className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden"
        animation="scale-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 animate-gradient bg-300%"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Pilot Project</h2>
          <p className="text-xl mb-12 opacity-90">
            Launching our comprehensive pilot program to demonstrate the transformative impact of personalized learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">Government school in Islamabad or Gilgit-Baltistan</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Grade Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold animate-pulse">4th Grade</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Class Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold animate-pulse">20-25 Students</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">
                    Full Academic Year
                    <br />
                    (Sep/Oct - May/Jun)
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4 bg-gray-50" animation="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join the Educational Revolution</h2>
          <p className="text-xl text-gray-600 mb-12">
            Partner with us to transform Pakistani classrooms and ignite the restless pursuit of knowledge in every
            student.
          </p>

          <AnimatedSection animation="scale-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <Heart className="mr-2 w-4 h-4 group-hover:animate-pulse text-white" />
                Partner With Us
              </Button>
              <Button
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <BookOpen className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden" animation="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 animate-gradient bg-300%"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Brain className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors duration-300">
                  Izteraab
                </h3>
                <p className="text-sm text-gray-400">Empowering Restless Learning</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                © 2025 Izteraab. Transforming education through AI-supported personalized learning.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
