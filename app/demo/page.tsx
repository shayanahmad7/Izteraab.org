"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import {
  Brain,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  X,
  Clock,
  TrendingUp,
  Heart,
  Lightbulb,
  MessageCircle,
  Eye,
  Zap,
  Play,
  UserCheck,
  Monitor,
  PenTool,
  BarChart3,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
              <Brain className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                IZTIRAB
              </h1>
              <p className="text-xs text-blue-600 font-medium animate-pulse">Empowering Learning</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/demo" className="text-blue-600 font-medium relative group">
              Demo
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
            </Link>
          </nav>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            <Link href="/#contact">Get Involved</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection className="py-20 px-4 relative" animation="fade-up">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100 hover:scale-105 transition-all duration-500">
            <Sparkles className="w-3 h-3 mr-1 animate-spin" />
            Classroom Transformation Demo
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From <span className="text-red-600">Passive Learning</span> to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient bg-300% bg-size-200">
              Active Mastery
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            See how Iztirab transforms traditional classrooms into dynamic, personalized learning environments where
            every student thrives at their own pace through AI-supported coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="#comparison">
                See The Transformation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Before vs After Comparison */}
      <AnimatedSection id="comparison" className="py-20 px-4 bg-gray-50" animation="fade-up">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare traditional passive learning with our AI-supported personalized approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional Classroom */}
            <AnimatedSection animation="fade-right" delay={200}>
              <Card className="h-full border-2 border-red-200 hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <X className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-red-800">Traditional Classroom</CardTitle>
                      <p className="text-red-600 text-sm">One-size-fits-all approach</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Classroom Layout Visualization */}
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Classroom Setup
                    </h4>
                    <div className="space-y-3">
                      {/* Teacher at front */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-8 bg-red-300 rounded flex items-center justify-center text-xs font-medium text-red-800">
                          Teacher
                        </div>
                      </div>
                      {/* Students in rows */}
                      <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: 24 }, (_, i) => (
                          <div
                            key={i}
                            className="w-8 h-6 bg-red-200 rounded text-xs flex items-center justify-center text-red-700"
                          >
                            S
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Problems */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-800 flex items-center">
                      <X className="w-4 h-4 mr-2" />
                      Key Problems
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-red-800">Fixed Pace Learning</p>
                          <p className="text-red-600 text-sm">
                            All students must follow the same speed, regardless of their understanding
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <Users className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-red-800">Passive Listening</p>
                          <p className="text-red-600 text-sm">
                            Students sit quietly, absorbing information without active engagement
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <Eye className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-red-800">Limited Individual Attention</p>
                          <p className="text-red-600 text-sm">
                            Teacher cannot monitor or help each student's specific needs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-red-800">No Progress Tracking</p>
                          <p className="text-red-600 text-sm">
                            Difficult to identify learning gaps until it's too late
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Iztirab Classroom */}
            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="h-full border-2 border-green-200 hover:shadow-xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-green-800">Iztirab Classroom</CardTitle>
                      <p className="text-green-600 text-sm">AI-supported personalized learning</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Classroom Layout Visualization */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Collaborative Setup
                    </h4>
                    <div className="space-y-4">
                      {/* Groups in circles */}
                      <div className="grid grid-cols-2 gap-6">
                        {Array.from({ length: 4 }, (_, groupIndex) => (
                          <div key={groupIndex} className="relative">
                            <div className="w-20 h-20 border-2 border-green-300 rounded-full flex items-center justify-center relative">
                              <div className="text-xs font-medium text-green-800">Group {groupIndex + 1}</div>
                              {/* Students around circle */}
                              {Array.from({ length: 6 }, (_, studentIndex) => {
                                const angle = studentIndex * 60 * (Math.PI / 180)
                                const x = Math.cos(angle) * 35
                                const y = Math.sin(angle) * 35
                                return (
                                  <div
                                    key={studentIndex}
                                    className="absolute w-4 h-4 bg-green-200 rounded-full text-xs flex items-center justify-center text-green-700"
                                    style={{
                                      left: `calc(50% + ${x}px - 8px)`,
                                      top: `calc(50% + ${y}px - 8px)`,
                                    }}
                                  >
                                    S
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Teacher moving around */}
                      <div className="flex justify-center">
                        <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                          <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center text-xs font-medium text-blue-800">
                            T
                          </div>
                          <span className="text-xs text-blue-800">Coach moving between groups</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-800 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Key Advantages
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-green-800">Self-Paced Learning</p>
                          <p className="text-green-600 text-sm">
                            Students progress at their own speed, mastering concepts before moving forward
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-green-800">Active Collaboration</p>
                          <p className="text-green-600 text-sm">
                            Students work in groups, teaching and learning from each other
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <UserCheck className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-green-800">Personal Coaching</p>
                          <p className="text-green-600 text-sm">
                            Teacher acts as coach, providing individual guidance where needed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <Brain className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0 animate-pulse" />
                        <div>
                          <p className="font-medium text-green-800">AI-Powered Insights</p>
                          <p className="text-green-600 text-sm">
                            Real-time tracking of each student's progress and learning gaps through KhanMigo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Detailed Learning Experience */}
      <AnimatedSection className="py-20 px-4" animation="slide-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Day in the Iztirab Classroom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how AI-supported personalized learning transforms the educational journey for every student and
              teacher
            </p>
          </div>

          <div className="space-y-12">
            {/* Student Experience */}
            <AnimatedSection animation="fade-right" delay={200}>
              <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">For Students</h3>
                        <p className="text-blue-600">Personalized learning journey</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-5 h-5 text-purple-600 mt-1 animate-pulse" />
                        <div>
                          <h4 className="font-semibold text-gray-900">AI Diagnostic Assessment</h4>
                          <p className="text-gray-600 text-sm">
                            KhanMigo identifies your current level and creates a personalized learning path
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Play className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Interactive Video Lessons</h4>
                          <p className="text-gray-600 text-sm">
                            Watch Khan Academy videos in Urdu at your own pace, pause and replay as needed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <PenTool className="w-5 h-5 text-orange-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Practice & Mastery</h4>
                          <p className="text-gray-600 text-sm">
                            Complete exercises until you achieve mastery, with instant AI feedback
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Peer Learning</h4>
                          <p className="text-gray-600 text-sm">
                            Help classmates and get help when needed - learning together through collaboration
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Student Benefits</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">Learn at your own pace with AI support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">Fill knowledge gaps before moving forward</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">Advanced students can accelerate their learning</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">24/7 AI tutor support through KhanMigo</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">
                          Build confidence through mastery-based progression
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Teacher Experience */}
            <AnimatedSection animation="fade-left" delay={400}>
              <Card className="p-8 border-2 border-green-200 hover:shadow-xl transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Teacher Support Dashboard</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Monitor className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">
                          Real-time student progress tracking via AI analytics
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">Identify struggling students instantly</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-gray-700">AI-suggested interventions and coaching tips</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">Track mastery levels across mathematical concepts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-700">Virtual mentorship and peer teacher network</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <UserCheck className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">For Teachers</h3>
                        <p className="text-green-600">From lecturer to learning coach</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Eye className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Complete Visibility</h4>
                          <p className="text-gray-600 text-sm">
                            See exactly what each student is working on and where they're struggling through AI insights
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Heart className="w-5 h-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Personalized Coaching</h4>
                          <p className="text-gray-600 text-sm">
                            Move around the classroom, providing individual coaching and encouragement to each student
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Instant AI Interventions</h4>
                          <p className="text-gray-600 text-sm">
                            AI alerts you when students need help, enabling timely and targeted support
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Facilitate Collaboration</h4>
                          <p className="text-gray-600 text-sm">
                            Guide group work, peer tutoring, and collaborative problem-solving sessions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Stack */}
      <AnimatedSection className="py-20 px-4 bg-gray-50" animation="scale-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform integrates cutting-edge AI tools with proven educational resources and comprehensive teacher
              training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                  <Brain className="w-8 h-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  KhanMigo AI
                </h3>
                <p className="text-gray-600 text-sm">
                  Personal AI tutor providing instant feedback, explanations, and guidance for every student
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-300">
                  <Play className="w-8 h-8 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors duration-300">
                  Khan Academy
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive video library with Urdu translations and interactive exercises
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
                  <Monitor className="w-8 h-8 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Teacher Training Platform
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive training resources and ongoing mentorship for pedagogical transformation
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600 text-sm">
                  Real-time insights into student progress, engagement, and learning outcomes
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Metrics */}
      <AnimatedSection className="py-20 px-4" animation="fade-up">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expected Impact</h2>
            <p className="text-xl text-gray-600">
              Based on global research and pilot programs, here's what we expect to achieve through Iztirab
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="scale-up" delay={100}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <h3 className="font-semibold text-lg mb-2">Improved Engagement</h3>
                <p className="text-gray-600 text-sm">
                  Students actively participating in their personalized learning journey
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={200}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
                <h3 className="font-semibold text-lg mb-2">Faster Mastery</h3>
                <p className="text-gray-600 text-sm">
                  Reduction in time needed to achieve learning objectives through AI support
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={300}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <h3 className="font-semibold text-lg mb-2">Teacher Satisfaction</h3>
                <p className="text-gray-600 text-sm">
                  Teachers report higher job satisfaction as empowered learning coaches
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection
        className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white"
        animation="scale-up"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Education?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Iztirab in revolutionizing how students learn and teachers teach in Pakistan through AI-supported
            personalized learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/#contact">
                Partner With Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
