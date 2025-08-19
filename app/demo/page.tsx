"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedSection } from "@/components/animated-section"
import {
  Brain,
  Users,
  BookOpen,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Clock,
  Target,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  User,
  GraduationCap,
  MessageSquare,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function DemoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStudent, setCurrentStudent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const students = [
    { name: "Ahmed", level: "Grade 4 - Fractions", progress: 75, status: "On Track", color: "bg-emerald-500" },
    {
      name: "Fatima",
      level: "Grade 4 - Multiplication",
      progress: 45,
      status: "Needs Support",
      color: "bg-rose-400",
    },
    { name: "Hassan", level: "Grade 4 - Division", progress: 90, status: "Advanced", color: "bg-teal-500" },
    { name: "Aisha", level: "Grade 4 - Decimals", progress: 60, status: "Progressing", color: "bg-emerald-600" },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentStudent((current) => (current + 1) % students.length)
            return 0
          }
          return prev + 2
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, students.length])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentStudent(0)
  }

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
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/demo" className="text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              Demo
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600"></span>
            </Link>
          </nav>
          <Button
            asChild
            className={`bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-300 hover:shadow-lg ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"} delay-500`}
          >
            <Link href="/#contact">Get Involved</Link>
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
            Interactive Demo
          </Badge>
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Experience{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-300% bg-size-200">
              AI-Powered Learning
            </span>
          </h1>
          <p
            className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            See how Izteraab transforms traditional classrooms into personalized learning environments where every
            student thrives at their own pace.
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

      {/* Interactive Demo */}
      <AnimatedSection className="py-20 px-4 bg-gray-50" animation="scale-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Classroom Simulation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how AI-powered personalized learning adapts to each student's needs in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Student Dashboard */}
            <div className="lg:col-span-2">
              <Card className="p-6 hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-emerald-600" />
                      Student: {students[currentStudent].name}
                    </CardTitle>
                    <Badge className={`${students[currentStudent].color} text-white`}>
                      {students[currentStudent].status}
                    </Badge>
                  </div>
                  <CardDescription>{students[currentStudent].level}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Learning Progress</span>
                      <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-emerald-50 border-emerald-200">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium">Current Topic</span>
                      </div>
                      <p className="text-lg font-semibold text-emerald-800 mt-1">
                        {students[currentStudent].level.split(" - ")[1]}
                      </p>
                    </Card>

                    <Card className="p-4 bg-teal-50 border-teal-200">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-medium">Mastery Level</span>
                      </div>
                      <p className="text-lg font-semibold text-teal-800 mt-1">{students[currentStudent].progress}%</p>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-rose-500" />
                      AI Tutor Feedback
                    </h4>
                    <p className="text-sm text-gray-600">
                      {progress < 30
                        ? "Great start! Let's work through some practice problems together."
                        : progress < 70
                          ? "You're making good progress! Try this challenging problem to test your understanding."
                          : "Excellent work! You've mastered this concept. Ready for the next level?"}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={handlePlayPause}
                      className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isPlaying ? "Pause" : "Play"} Demo</span>
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="flex items-center space-x-2 bg-transparent"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Teacher Dashboard */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-teal-600" />
                    Teacher Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {students.map((student, index) => (
                      <div
                        key={student.name}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          index === currentStudent
                            ? "border-emerald-300 bg-emerald-50 shadow-md"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{student.name}</span>
                          <div className={`w-3 h-3 rounded-full ${student.color}`}></div>
                        </div>
                        <div className="mt-2">
                          <Progress value={student.progress} className="h-2" />
                          <span className="text-xs text-gray-500 mt-1">{student.progress}% Complete</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-rose-500" />
                    Class Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">67%</div>
                      <div className="text-xs text-gray-600">Avg Progress</div>
                    </div>
                    <div className="text-center p-3 bg-teal-50 rounded-lg">
                      <div className="text-2xl font-bold text-teal-600">4/4</div>
                      <div className="text-xs text-gray-600">Active Students</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Students on track</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Need support</span>
                      <span className="font-medium">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-20 px-4" animation="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Traditional vs. Izteraab Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic difference in learning outcomes and student engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-right" delay={200}>
              <Card className="p-8 border-2 border-red-200 hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl text-red-700 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Traditional Classroom
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">One-size-fits-all teaching approach</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Students move at same pace regardless of understanding</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Limited individual attention and feedback</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Teacher as primary source of information</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Passive learning environment</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">Lower mastery rate</div>
                      <div className="text-sm text-gray-600"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="p-8 border-2 border-emerald-200 hover:shadow-xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl text-emerald-700 flex items-center">
                    <Brain className="w-5 h-5 mr-2 animate-pulse" />
                    Izteraab Classroom
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Personalized learning paths for each student</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Mastery-based progression ensures understanding</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">AI-powered real-time feedback and support</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Teacher as learning coach and facilitator</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Active, engaging learning environment</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">Higher mastery rate</div>
                      <div className="text-sm text-gray-600"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Stack */}
      <AnimatedSection className="py-20 px-4 bg-gray-50" animation="slide-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on proven educational tools and enhanced with AI-powered personalization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-200 transition-all duration-300">
                  <Brain className="w-8 h-8 text-emerald-600 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  KhanMigo AI Tutor
                </h3>
                <p className="text-gray-600 mb-4">
                  Personalized AI tutoring that adapts to each student's learning style and pace, providing instant
                  feedback and guidance.
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">AI-Powered</Badge>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-teal-200 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  Khan Academy Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive curriculum with interactive exercises, instructional videos, and progress tracking for
                  mastery-based learning.
                </p>
                <Badge className="bg-teal-100 text-teal-800">Curriculum</Badge>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-rose-200 transition-all duration-300">
                  <Users className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-rose-500 transition-colors duration-300">
                  Teacher Training Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training resources and ongoing support to help teachers transition from lecturers to
                  learning coaches.
                </p>
                <Badge className="bg-rose-100 text-rose-800">Training</Badge>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection
        className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden"
        animation="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80 animate-gradient bg-300%"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Classroom?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join us in revolutionizing education through AI-supported personalized learning. Every student deserves to
            reach their full potential.
          </p>

          <AnimatedSection animation="scale-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/#contact">
                  <TrendingUp className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  Start Your Pilot Program
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/about">
                  <BookOpen className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  Learn More About Izteraab
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
