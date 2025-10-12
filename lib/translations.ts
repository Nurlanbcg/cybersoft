export type Language = "en" | "az"

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "Trusted by innovative companies worldwide",
      title: "Building the Future of",
      titleHighlight: "Web & SaaS",
      description: "Cybersoft designs high-impact websites and scalable SaaS products that help businesses grow.",
      getStarted: "Get Started",
      seeServices: "See Services",
    },
    // Services
    services: {
      title: "Services That Drive",
      titleHighlight: "Results",
      description:
        "From pixel-perfect websites to production-ready SaaS, we ship what matters: speed, reliability, and results.",
      websiteDev: {
        title: "Website Development",
        description: "Next-gen frontends built for performance and growth",
        features: [
          "Modern React & Next.js architecture",
          "SEO optimization & Core Web Vitals",
          "Responsive design & accessibility",
          "Lightning-fast page loads",
        ],
      },
      saas: {
        title: "SaaS Platforms",
        description: "Production-ready platforms that scale with your business",
        features: [
          "Multi-tenant architecture",
          "Authentication & authorization",
          "Billing & subscription management",
          "Analytics & monitoring",
        ],
      },
      cloud: {
        title: "Cloud Integration",
        description: "Seamless integrations and robust infrastructure",
        features: [
          "RESTful & GraphQL APIs",
          "Microservices architecture",
          "Real-time observability",
          "Enterprise-grade security",
        ],
      },
      processTitle: "Our Process",
      process: [
        { step: "01", title: "Discover", description: "Understanding your vision" },
        { step: "02", title: "Design", description: "Crafting the experience" },
        { step: "03", title: "Build", description: "Engineering excellence" },
        { step: "04", title: "Launch", description: "Delivering results" },
      ],
    },
    // Contact
    contact: {
      title: "Let's Build Something",
      titleHighlight: "Amazing",
      description: "Tell us about your project—get a proposal within 24 hours.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        projectType: "Project Type",
        budget: "Budget",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        required: "*",
        send: "Send Message",
        selectType: "Select type",
        selectRange: "Select range",
        projectTypes: {
          website: "Website",
          saas: "SaaS Platform",
          integration: "Integration",
          other: "Other",
        },
        budgetRanges: {
          "10k-25k": "$10k - $25k",
          "25k-50k": "$25k - $50k",
          "50k-100k": "$50k - $100k",
          "100k+": "$100k+",
        },
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email address",
          projectTypeRequired: "Please select a project type",
          budgetRequired: "Please select a budget range",
          messageRequired: "Message is required",
        },
        success: {
          title: "Thanks! We'll reach out shortly.",
          description: "We typically respond within 24 hours.",
        },
      },
      info: {
        title: "Contact Info",
        email: "Email",
        location: "Location",
        locationValue: "San Francisco, CA",
      },
      faq: {
        title: "FAQ",
        questions: [
          {
            question: "What is your typical delivery time?",
            answer:
              "Project timelines vary based on scope and complexity. A typical website takes 4-6 weeks, while a full SaaS platform may take 3-6 months. We provide detailed timelines during the discovery phase.",
          },
          {
            question: "What technologies do you use?",
            answer:
              "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like Vercel and AWS. We choose the best stack for your specific needs.",
          },
          {
            question: "How does pricing work?",
            answer:
              "We offer both fixed-price projects and ongoing retainer arrangements. Pricing depends on project scope, complexity, and timeline. We provide transparent quotes after understanding your requirements.",
          },
        ],
      },
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      tagline: "We help businesses launch fast, scale reliably, and deliver delightful digital experiences.",
    },
  },
  az: {
    // Navbar
    nav: {
      home: "Ana Səhifə",
      services: "Xidmətlər",
      contact: "Əlaqə",
    },
    // Hero
    hero: {
      badge: "Dünya miqyasında innovativ şirkətlər tərəfindən etibar edilir",
      title: "Gələcəyi Qururuq",
      titleHighlight: "Veb & SaaS",
      description:
        "Cybersoft bizneslərin böyüməsinə kömək edən yüksək təsirli veb saytlar və miqyaslana bilən SaaS məhsulları dizayn edir.",
      getStarted: "Başlayın",
      seeServices: "Xidmətlərə Baxın",
    },
    // Services
    services: {
      title: "Nəticə Gətirən",
      titleHighlight: "Xidmətlər",
      description:
        "Piksel-mükəmməl veb saytlardan istehsala hazır SaaS-a qədər, əhəmiyyətli olanı təqdim edirik: sürət, etibarlılıq və nəticələr.",
      websiteDev: {
        title: "Veb Sayt İnkişafı",
        description: "Performans və böyümə üçün qurulmuş yeni nəsil interfeyslər",
        features: [
          "Müasir React və Next.js arxitekturası",
          "SEO optimallaşdırması və Core Web Vitals",
          "Responsiv dizayn və əlçatanlıq",
          "İldırım sürətli səhifə yükləmələri",
        ],
      },
      saas: {
        title: "SaaS Platformaları",
        description: "Biznesinizlə birlikdə böyüyən istehsala hazır platformalar",
        features: [
          "Çox kirayəçi arxitekturası",
          "Autentifikasiya və avtorizasiya",
          "Ödəniş və abunə idarəetməsi",
          "Analitika və monitorinq",
        ],
      },
      cloud: {
        title: "Bulud İnteqrasiyası",
        description: "Qüsursuz inteqrasiyalar və möhkəm infrastruktur",
        features: [
          "RESTful və GraphQL API-lar",
          "Mikroservis arxitekturası",
          "Real vaxt müşahidə",
          "Korporativ səviyyəli təhlükəsizlik",
        ],
      },
      processTitle: "Bizim Proses",
      process: [
        { step: "01", title: "Kəşf", description: "Vizyonunuzu başa düşmək" },
        { step: "02", title: "Dizayn", description: "Təcrübəni yaratmaq" },
        { step: "03", title: "Qurma", description: "Mühəndislik mükəmməlliyi" },
        { step: "04", title: "Buraxılış", description: "Nəticələri təqdim etmək" },
      ],
    },
    // Contact
    contact: {
      title: "Gəlin Birlikdə",
      titleHighlight: "Heyrətamiz Bir Şey Yaradaq",
      description: "Layihəniz haqqında bizə danışın—24 saat ərzində təklif alın.",
      form: {
        name: "Ad",
        email: "E-poçt",
        company: "Şirkət",
        projectType: "Layihə Növü",
        budget: "Büdcə",
        message: "Mesaj",
        messagePlaceholder: "Layihəniz haqqında bizə danışın...",
        required: "*",
        send: "Mesaj Göndər",
        selectType: "Növ seçin",
        selectRange: "Aralıq seçin",
        projectTypes: {
          website: "Veb Sayt",
          saas: "SaaS Platforması",
          integration: "İnteqrasiya",
          other: "Digər",
        },
        budgetRanges: {
          "10k-25k": "$10k - $25k",
          "25k-50k": "$25k - $50k",
          "50k-100k": "$50k - $100k",
          "100k+": "$100k+",
        },
        errors: {
          nameRequired: "Ad tələb olunur",
          emailRequired: "E-poçt tələb olunur",
          emailInvalid: "Yanlış e-poçt ünvanı",
          projectTypeRequired: "Zəhmət olmasa layihə növü seçin",
          budgetRequired: "Zəhmət olmasa büdcə aralığı seçin",
          messageRequired: "Mesaj tələb olunur",
        },
        success: {
          title: "Təşəkkürlər! Tezliklə sizinlə əlaqə saxlayacağıq.",
          description: "Biz adətən 24 saat ərzində cavab veririk.",
        },
      },
      info: {
        title: "Əlaqə Məlumatları",
        email: "E-poçt",
        location: "Yer",
        locationValue: "San Francisco, CA",
      },
      faq: {
        title: "Tez-tez Verilən Suallar",
        questions: [
          {
            question: "Tipik çatdırılma müddətiniz nə qədərdir?",
            answer:
              "Layihə müddətləri əhatə dairəsi və mürəkkəbliyə görə dəyişir. Tipik veb sayt 4-6 həftə çəkir, tam SaaS platforması isə 3-6 ay çəkə bilər. Kəşf mərhələsində ətraflı qrafiklər təqdim edirik.",
          },
          {
            question: "Hansı texnologiyalardan istifadə edirsiniz?",
            answer:
              "Biz React, Next.js, TypeScript, Node.js və Vercel və AWS kimi bulud platformaları daxil olmaqla müasir veb texnologiyalarında ixtisaslaşırıq. Sizin xüsusi ehtiyaclarınız üçün ən yaxşı texnologiya yığınını seçirik.",
          },
          {
            question: "Qiymətləndirmə necə işləyir?",
            answer:
              "Biz həm sabit qiymətli layihələr, həm də davamlı saxlama razılaşmaları təklif edirik. Qiymətləndirmə layihənin əhatə dairəsi, mürəkkəbliyi və müddətindən asılıdır. Tələblərinizi başa düşdükdən sonra şəffaf təkliflər təqdim edirik.",
          },
        ],
      },
    },
    // Footer
    footer: {
      rights: "Bütün hüquqlar qorunur.",
      tagline:
        "Biz bizneslərin sürətli başlamasına, etibarlı miqyaslanmasına və xoş rəqəmsal təcrübələr təqdim etməsinə kömək edirik.",
    },
  },
}
