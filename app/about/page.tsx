"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import {
  Brain,
  Target,
  BookOpen,
  ArrowLeft,
  Heart,
  Sparkles,
  GraduationCap,
  Lightbulb,
  Globe,
  Mail,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
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
                IZTIRAB
              </h1>
              <p className="text-xs text-emerald-600 font-medium animate-pulse">Empowering Learning</p>
            </div>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-6 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
          >
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600"></span>
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
            About Iztirab
          </Badge>
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-300% bg-size-200">
              Story & Vision
            </span>
          </h1>
          <p
            className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Discover the inspiration behind Iztirab and our mission to transform Pakistani education through
            AI-supported personalized learning and comprehensive teacher training.
          </p>
          <div
            className={`flex justify-center transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-emerald-50 bg-transparent group"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Poetry Section */}
      <AnimatedSection className="py-16 px-4" animation="scale-up">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-12 rounded-2xl border-2 border-emerald-200 shadow-xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Inspiration</h2>
              <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-6 leading-relaxed font-medium">
                "خدا تجھے کسی طوفان سے آشنا کر دے، کہ تیرے بحر کی موجوں میں اضطراب نہیں"
              </blockquote>
              <p className="text-lg md:text-xl text-gray-600 mb-6 italic">
                <em>"May God acquaint you with a storm, for there is no restlessness in your ocean's waves."</em>
              </p>
              <div className="bg-white/70 p-6 rounded-lg">
                <p className="text-base text-gray-700 leading-relaxed">
                  <strong className="text-emerald-700">— Allama Iqbal</strong>
                  <br />
                  <br />
                  At Iztirab, we recognize that deep, meaningful learning emerges from embracing challenges and
                  disruptions. The "storm" symbolizes necessary educational transformation, and the "restlessness"
                  (iztirab) embodies the curiosity and active pursuit of knowledge we aim to instill in every student.
                  <br />
                  <br />
                  Inspired by Allama Iqbal's philosophy, we aim to cultivate a generation of learners who proactively
                  seek knowledge and mastery, not passively wait for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Story */}
      <AnimatedSection className="py-20 px-4 bg-gray-50" animation="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from a vision to transform Pakistani education through innovative teaching methods and AI-powered
              personalized learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-emerald-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-emerald-600" />
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pakistani government schools have received significant infrastructure investments—Chromebooks, smart
                    classrooms, Khan Academy tools, and AI resources like KhanMigo. However, these tools often remain
                    underutilized due to traditional lecture-based teaching approaches.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-teal-600" />
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We focus on empowering and training teachers to transform from lecturers to learning coaches,
                    creating dynamic classrooms where technology serves personalized, mastery-based learning for every
                    student.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-rose-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-rose-500" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To create a replicable model that can scale across Pakistan, fostering a generation of curious,
                    confident learners who embrace challenges and pursue knowledge with the restless spirit of Iztirab.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="p-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-center">Our Core Belief</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed opacity-95 mb-6">
                    Education must ignite genuine curiosity and restless intellectual growth, fostering a resilient,
                    confident, and independently thinking generation ready to embrace and overcome future challenges.
                  </p>
                  <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-sm italic">
                      "True learning requires curiosity, action, and challenge—the very essence of Iztirab."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="py-20 px-4" animation="slide-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our approach to transforming Pakistani education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-left" delay={100}>
              <Card className="border-2 hover:border-emerald-200 transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="group-hover:text-emerald-600 transition-colors duration-300">
                    Teacher Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transforming teachers from lecturers to learning coaches through comprehensive training and ongoing
                    mentorship, empowering them to facilitate personalized learning experiences that meet each student's
                    unique needs.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-2 hover:border-teal-200 transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Target className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle className="group-hover:text-teal-600 transition-colors duration-300">
                    Mastery-Based Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Moving away from time-based progression to mastery-oriented learning where students advance only
                    after demonstrating complete understanding of foundational concepts, ensuring no child is left
                    behind.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={300}>
              <Card className="border-2 hover:border-rose-200 transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Brain className="w-6 h-6 text-rose-500 animate-pulse" />
                  </div>
                  <CardTitle className="group-hover:text-rose-500 transition-colors duration-300">
                    AI-Powered Personalization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Leveraging KhanMigo and Khan Academy tools to create personalized learning paths that adapt to each
                    student's pace, strengths, and areas for improvement, making learning truly individualized and
                    effective.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20 px-4 bg-gray-50" animation="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals driving educational transformation in Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="border-2 hover:border-emerald-200 transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <GraduationCap className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    Shayan Ahmad
                  </h3>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href="mailto:sa6097@nyu.edu">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/shayanahmad7/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-2 hover:border-teal-200 transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <Target className="w-12 h-12 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    Farzan Khan
                  </h3>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href="mailto:fak250@nyu.edu">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/farzan-ahmad-khan/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="border-2 hover:border-rose-200 transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <Brain className="w-12 h-12 text-rose-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-500 transition-colors duration-300">
                    Myra Rafiq
                  </h3>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href="mailto:mr7316@nyu.edu">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/myrarafiq/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden"
        animation="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 animate-gradient bg-300%"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join our mission</h2>
          <p className="text-xl mb-12 opacity-90">
            Be part of the educational transformation that will shape Pakistan's future. Together, we can ignite the
            restless pursuit of knowledge in every classroom.
          </p>

          <AnimatedSection animation="scale-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <Heart className="mr-2 w-4 h-4 group-hover:animate-pulse" />
                Partner With Us
              </Button>
              <Button
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/demo">
                  <BookOpen className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  See Our Demo
                </Link>
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
                  IZTIRAB
                </h3>
                <p className="text-sm text-gray-400">Empowering Restless Learning</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                © 2025 Iztirab. Transforming education through AI-supported personalized learning.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
