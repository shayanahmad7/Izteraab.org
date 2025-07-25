"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import {
  Brain,
  Users,
  Target,
  BookOpen,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Heart,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-cloud-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-slate-gray/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-deep-navy/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-gray/20 bg-cloud-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className={`flex items-center space-x-2 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-sky-blue to-deep-navy rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:rotate-12">
              <Brain className="w-5 h-5 text-cloud-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-gray hover:text-sky-blue transition-colors duration-300">
                EDVANCE
              </h1>
              <p className="text-xs text-sky-blue font-medium animate-pulse">PAKISTAN</p>
            </div>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-6 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
          >
            <Link
              href="#about"
              className="text-slate-gray hover:text-sky-blue transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#solution"
              className="text-slate-gray hover:text-sky-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Solution
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/demo"
              className="text-slate-gray hover:text-sky-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#pilot"
              className="text-slate-gray hover:text-sky-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Pilot
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-slate-gray hover:text-sky-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button
            asChild
            className={`bg-sky-blue hover:bg-sky-blue/90 text-cloud-white hover:scale-105 transition-all duration-300 hover:shadow-lg ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"} delay-500`}
          >
            <Link href="#contact">Get Involved</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection className="py-20 px-4 relative" animation="fade-up">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge
            className={`mb-6 bg-sky-blue/10 text-slate-gray border-sky-blue/20 hover:bg-sky-blue/20 hover:scale-105 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Sparkles className="w-3 h-3 mr-1 animate-spin text-sky-blue" />
            Transforming Education in Pakistan
          </Badge>
          <h1
            className={`text-4xl md:text-6xl font-bold text-slate-gray mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Empowering{" "}
            <span className="bg-gradient-to-r from-sky-blue via-slate-gray to-deep-navy bg-clip-text text-transparent animate-gradient bg-300% bg-size-200">
              Personalized Learning
            </span>{" "}
            in Pakistan
          </h1>
          <p
            className={`text-xl text-slate-gray/80 mb-8 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Enabling personalized, mastery-based learning through AI and flipped classrooms. Helping every student
            unlock their true potential and develop a growth mindset.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-sky-blue hover:bg-sky-blue/90 text-cloud-white hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/demo">
                See Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-deep-navy hover:bg-deep-navy/90 text-cloud-white hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="#solution">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-gray text-slate-gray hover:bg-slate-gray hover:text-cloud-white hover:scale-105 hover:shadow-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="#contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Statement */}
      <AnimatedSection
        className="py-16 bg-gradient-to-r from-deep-navy via-slate-gray to-deep-navy text-cloud-white relative overflow-hidden"
        animation="scale-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 to-deep-navy/20 animate-gradient bg-300%"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR MISSION</h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            To enable personalized, mastery-based learning in Pakistan using AI; empowering both teachers and students
            to succeed in the classroom and beyond.
          </p>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 px-4" animation="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-gray mb-4">About EdVance Pakistan</h2>
            <p className="text-xl text-slate-gray/80 max-w-3xl mx-auto">
              Our NGO is focused on transforming education through AI and personalized learning, bridging learning gaps
              with innovative, student-centered approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-left" delay={100}>
              <Card className="border-2 border-sky-blue/20 hover:border-sky-blue/40 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full bg-cloud-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Target className="w-6 h-6 text-sky-blue" />
                  </div>
                  <CardTitle className="group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                    Student-Centered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-gray/80">
                    Bridging learning gaps with innovative approaches that put students at the center of their
                    educational journey.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-2 border-slate-gray/20 hover:border-slate-gray/40 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full bg-cloud-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Users className="w-6 h-6 text-sky-blue" />
                  </div>
                  <CardTitle className="group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                    Teacher Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-gray/80">
                    Supporting teachers as educational coaches, not just content deliverers, transforming their role in
                    the classroom.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={300}>
              <Card className="border-2 border-deep-navy/20 hover:border-deep-navy/40 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full bg-cloud-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Brain className="w-6 h-6 text-sky-blue animate-pulse" />
                  </div>
                  <CardTitle className="group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                    AI-Powered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-gray/80">
                    Leveraging artificial intelligence to create personalized learning experiences that adapt to each
                    student's needs.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection id="solution" className="py-20 px-4 bg-slate-gray/5 relative" animation="slide-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-gray mb-4">Our Solution</h2>
            <p className="text-xl text-slate-gray/80 max-w-3xl mx-auto">
              A comprehensive approach to personalized learning that transforms traditional education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-sky-blue/20">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <Target className="w-8 h-8 text-sky-blue group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  Mastery-Based Learning
                </h3>
                <p className="text-slate-gray/80 text-sm">
                  Student-centered learning model focused on mastery rather than time-based progression
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-slate-gray/20">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <Brain className="w-8 h-8 text-sky-blue group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  AI Tools
                </h3>
                <p className="text-slate-gray/80 text-sm">
                  KhanMigo and other AI tools for diagnostics, practice, and personalized feedback
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-deep-navy/20">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <Users className="w-8 h-8 text-sky-blue group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  Teacher Training
                </h3>
                <p className="text-slate-gray/80 text-sm">
                  Teachers trained to be coaches and facilitators, not just lecturers
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-sky-blue/20">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-sky-blue group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  Existing Infrastructure
                </h3>
                <p className="text-slate-gray/80 text-sm">
                  Leverages existing Chromebooks, LMS, and lab infrastructure
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-gray mb-4">How It Works</h2>
            <p className="text-xl text-slate-gray/80">
              A comprehensive framework for personalized learning implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-sky-blue/90 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-cloud-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                      AI-Based Diagnostics
                    </h3>
                    <p className="text-slate-gray/80">
                      Personalized learning paths based on individual student needs and learning styles
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-sky-blue/90 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-cloud-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                      Peer Tutoring & Teacher Support
                    </h3>
                    <p className="text-slate-gray/80">
                      Collaborative learning environment with personalized teacher guidance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-sky-blue/90 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-cloud-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                      Weekly KhanMigo Sessions
                    </h3>
                    <p className="text-slate-gray/80">
                      Regular AI-powered learning sessions combined with collaborative group work
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:bg-sky-blue/90 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-cloud-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                      Monthly Assessments
                    </h3>
                    <p className="text-slate-gray/80">
                      Regular progress tracking and growth measurement to ensure continuous improvement
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="p-8 bg-gradient-to-br from-sky-blue/5 to-deep-navy/5 border-2 border-sky-blue/20 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center text-slate-gray">
                    <Sparkles className="w-5 h-5 mr-2 text-sky-blue animate-spin" />
                    Teacher Enablement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <Lightbulb className="w-5 h-5 text-sky-blue group-hover:animate-bounce" />
                    <span className="text-slate-gray">Online training & ongoing mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-sky-blue group-hover:animate-bounce" />
                    <span className="text-slate-gray">Teachers selected based on tech-readiness & motivation</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-sky-blue group-hover:animate-bounce" />
                    <span className="text-slate-gray">Senior students trained as assistants to support class flow</span>
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
        className="py-20 px-4 bg-gradient-to-r from-sky-blue via-slate-gray to-deep-navy text-cloud-white relative overflow-hidden"
        animation="scale-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/80 to-deep-navy/80 animate-gradient bg-300%"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Pilot Project</h2>
          <p className="text-xl mb-12 opacity-90">
            We're launching our first pilot program to demonstrate the impact of personalized learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-cloud-white/10 backdrop-blur-sm border-cloud-white/20 text-cloud-white hover:bg-cloud-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">Government school in Islamabad or Gilgit-Baltistan (TBD)</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="bg-cloud-white/10 backdrop-blur-sm border-cloud-white/20 text-cloud-white hover:bg-cloud-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Grade Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold animate-pulse">4th Grade</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="bg-cloud-white/10 backdrop-blur-sm border-cloud-white/20 text-cloud-white hover:bg-cloud-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Class Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold animate-pulse">20-25 Students</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="bg-cloud-white/10 backdrop-blur-sm border-cloud-white/20 text-cloud-white hover:bg-cloud-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">
                    1 semester
                    <br />
                    (Sep-Dec 2025)
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4 bg-slate-gray/5" animation="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-gray mb-6">Let's Reimagine Learning</h2>
          <p className="text-xl text-slate-gray/80 mb-8">
            One classroom at a time. Contact us to partner, pilot, or support our mission.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatedSection animation="fade-left" delay={100}>
              <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-sky-blue/20">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-sky-blue group-hover:animate-bounce" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  Email
                </h3>
                <p className="text-slate-gray/80">hello@pitchform.co</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-slate-gray/20">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-sky-blue group-hover:animate-bounce" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  Phone
                </h3>
                <p className="text-slate-gray/80">983 457 7788</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={300}>
              <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full bg-cloud-white border-deep-navy/20">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                  <Globe className="w-6 h-6 text-sky-blue group-hover:animate-bounce" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-sky-blue transition-colors duration-300 text-slate-gray">
                  Website
                </h3>
                <p className="text-slate-gray/80">pitchform.co</p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-blue hover:bg-sky-blue/90 text-cloud-white hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <Mail className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-gray text-slate-gray hover:bg-slate-gray hover:text-cloud-white hover:scale-105 hover:shadow-lg transition-all duration-300 group bg-transparent"
              >
                <Heart className="mr-2 w-4 h-4 group-hover:animate-pulse text-red-500" />
                Support Our Mission
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection
        className="bg-deep-navy text-cloud-white py-12 px-4 relative overflow-hidden"
        animation="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy to-slate-gray animate-gradient bg-300%"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-blue to-deep-navy rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Brain className="w-5 h-5 text-cloud-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-sky-blue transition-colors duration-300">
                  EDVANCE PAKISTAN
                </h3>
                <p className="text-sm text-cloud-white/70">Empowering Personalized Learning</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-cloud-white/70 text-sm hover:text-cloud-white transition-colors duration-300">
                © 2025 EdVance Pakistan. Transforming education through AI.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
