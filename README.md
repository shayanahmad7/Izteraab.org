# Izteraab - Empowering Personalized Learning in Pakistan

A modern, responsive landing page for Izteraab, an educational NGO focused on transforming Pakistani classrooms from passive, lecture-driven environments into dynamic, personalized learning spaces through AI-powered technology integration.

## 🎯 Mission

To transform Pakistani classrooms by empowering teachers to become learning coaches and creating personalized, mastery-based environments where every student actively pursues knowledge and embraces challenges.

## ✨ Features

### 🏠 Home Page
- **Hero Section**: Compelling introduction with call-to-action buttons
- **Mission Statement**: Clear articulation of educational transformation goals
- **Solution Overview**: Four-pillar approach (Teacher Training, AI Integration, Classroom Support, Scalable Framework)
- **5-Session Weekly Structure**: Detailed breakdown of personalized learning implementation
- **Pilot Project Details**: Information about the government school pilot program
- **Contact Section**: Partnership and engagement opportunities

### 📖 About Page
- **Inspirational Poetry**: Features Allama Iqbal's vision for education
- **Detailed Mission**: Comprehensive explanation of educational philosophy
- **Team Section**: Meet the founders with direct contact information
  - Shayan Ahmad (Founder & CEO)
  - Farzan Khan (Co-Founder & CTO) 
  - Myra Rafiq (Co-Founder & Head of Operations)

### 🎮 Demo Page
- **Interactive Classroom Simulation**: Experience the transformation firsthand
- **Before/After Comparison**: Visual representation of learning outcomes
- **Engagement Metrics**: Real-time demonstration of student participation
- **Mastery-Based Progress**: Shows individualized learning paths

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with Framer Motion-like effects
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/izteraab-landing.git
   cd izteraab-landing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
izteraab-landing/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with team and mission
│   ├── demo/
│   │   └── page.tsx          # Interactive demo simulation
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── animated-section.tsx  # Custom animation component
├── hooks/
│   └── useScrollAnimation.ts # Scroll-based animations
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
└── styles/
    └── globals.css           # Additional global styles
\`\`\`

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Emerald and teal color scheme
- **Floating Animations**: Subtle background elements
- **Hover Effects**: Interactive cards and buttons
- **Responsive Design**: Mobile-first approach
- **Smooth Transitions**: Enhanced user experience

### Accessibility
- **Semantic HTML**: Proper heading structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color ratios

## 🌟 Key Components

### AnimatedSection
Custom component for scroll-triggered animations with multiple animation types:
- \`fade-up\`: Elements fade in from bottom
- \`fade-left\`: Elements slide in from right
- \`scale-up\`: Elements scale up on scroll
- \`slide-up\`: Elements slide up with bounce effect

### Interactive Demo
Real-time classroom simulation showing:
- Student engagement metrics
- Mastery-based progress tracking
- Before/after learning comparisons
- AI-powered personalization effects

## 🤝 Contributing

We welcome contributions to improve the Izteraab landing page!

### How to Contribute
1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Test across different browsers
- Maintain accessibility standards

## 📧 Contact

**Izteraab Team**
- **Shayan Ahmad** - Founder & CEO - [shayan@izteraab.org](mailto:shayan@izteraab.org) - [LinkedIn](https://linkedin.com/in/shayanahmad)
- **Farzan Khan** - Co-Founder & CTO - [farzan@izteraab.org](mailto:farzan@izteraab.org) - [LinkedIn](https://linkedin.com/in/farzankhan)
- **Myra Rafiq** - Co-Founder & Head of Operations - [myra@izteraab.org](mailto:myra@izteraab.org) - [LinkedIn](https://linkedin.com/in/myrarafiq)

**Project Links**
- Website: [https://izteraab.org](https://izteraab.org)
- GitHub: [https://github.com/izteraab/landing-page](https://github.com/izteraab/landing-page)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Khan Academy**: For inspiring our AI-powered learning approach
- **shadcn/ui**: For the beautiful component library
- **Vercel**: For seamless deployment and hosting
- **Allama Iqbal**: For the inspirational poetry that guides our mission

---

**"Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai"**

*"Elevate yourself to such heights that before every decree of fate, God Himself asks you: 'Tell me, what is your will?'"*

---

Made with ❤️ for the future of Pakistani education
