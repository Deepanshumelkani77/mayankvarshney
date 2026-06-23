import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Mayank Varshney & Co.",
      services: "Our Services",
      contact: "Contact Us",
      home: "Home",
      about: "About",
      appointment: "Book Appointment",
      login: "Login",
      signup: "Sign Up",
      language: "Language",
      aboutHero: "Learn more about Mayank Varshney & Co.",
      aboutPara1: "Founded with a vision to simplify complex financial and legal processes, Mayank Varshney & Co. has grown into a trusted name in the industry. Our journey began with a simple mission: to provide professional, reliable, and affordable services to businesses of all sizes.",
      aboutPara2: "Over the years, we have helped hundreds of clients navigate the complexities of taxation, compliance, and business regulations. Our team of experienced professionals brings together expertise from various domains to offer comprehensive solutions under one roof.",
      aboutPara3: "Today, we continue to uphold our commitment to excellence, integrity, and client satisfaction. We believe in building long-term relationships with our clients by delivering consistent quality and personalized service.",
      ourMission: "Our Mission",
      missionText: "To make financial and legal expertise accessible to everyone, enabling individuals, startups, and businesses to make smarter decisions, stay compliant, and achieve long-term success and growth.",
      ourVision: "Our Vision",
      visionText: "To be the most trusted and preferred financial and legal services provider in India, known for our expertise, integrity, and commitment to client success.",
      trusted: "Trusted",
      clients: "500+ Clients",
      fast: "Fast",
      quickService: "Quick Service",
      header: {
        title: "Mayank Varshney & Co. — Financial & Legal Services",
        searchLabel: "Search services",
        searchPlaceholder: "Search services, e.g., GST, Accounting...",
        searchButton: "Search",
        upcomingDueDates: "Upcoming Due Dates",
        items: "{{count}} items",
        noDueDates: "No upcoming due dates for {{service}}.",
        detailsAvailable: "Details available on selection"
      },
      information: {
        image1Title: "Professional Team",
        image1Desc: "Expert professionals dedicated to your success",
        image2Title: "Modern Office",
        image2Desc: "State-of-the-art facilities for better service",
        image3Title: "Client Meeting",
        image3Desc: "Personalized consultations for your needs",
        team: "Team",
        quality: "Quality",
        aboutUs: "About Us",
        title: "Your Trusted Partner for Professional Services",
        description: "Mayank Varshney & Co. is dedicated to providing comprehensive accounting, taxation, and legal solutions to businesses and individuals across India. With years of experience and a team of expert professionals, we ensure compliance while helping you achieve your financial goals.",
        feature1Title: "Expert Guidance",
        feature1Desc: "Professional support from certified financial and legal experts",
        feature2Title: "Secure Platform",
        feature2Desc: "Bank-level security to protect your sensitive data",
        feature3Title: "Quick Setup",
        feature3Desc: "Get started in minutes with our streamlined onboarding",
        learnMore: "Learn More",
        ourServices: "Our Services"
      },
      footer: {
        description: "Your trusted partner for professional financial, taxation, and legal services worldwide. We help businesses and individuals navigate compliance with confidence and ease.",
        quickLinks: "Quick Links",
        home: "Home",
        aboutUs: "About Us",
        contact: "Contact",
        services: "Services",
        blog: "Blog",
        ourServices: "Our Services",
        accounting: "Accounting",
        gstServices: "GST Services",
        incomeTax: "Income Tax",
        mcaCompliance: "MCA Compliance",
        legalDrafting: "Legal Drafting",
        contactUs: "Contact Us",
        allRightsReserved: "All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        refundPolicy: "Refund Policy"
      }
    }
  },
  zh: {
    translation: {
      welcome: "欢迎来到 Mayank Varshney & Co.",
      services: "我们的服务",
      contact: "联系我们",
      home: "首页",
      about: "关于我们",
      appointment: "预约",
      login: "登录",
      signup: "注册",
      language: "语言",
      aboutHero: "了解更多关于 Mayank Varshney & Co. 的信息",
      aboutPara1: "怀着简化复杂财务和法律流程的愿景，Mayank Varshney & Co. 已发展成为行业中值得信赖的名字。我们的旅程始于一个简单的使命：为各种规模的企业提供专业、可靠且负担得起的服务。",
      aboutPara2: "多年来，我们帮助数百位客户应对税务、合规和商业法规的复杂性。我们经验丰富的专业团队汇集了各个领域的专业知识，在一个屋檐下提供全面的解决方案。",
      aboutPara3: "今天，我们继续坚守对卓越、诚信和客户满意的承诺。我们相信通过提供一致的质量和个性化服务，与客户建立长期关系。",
      ourMission: "我们的使命",
      missionText: "让每个人都能获得财务和法律专业知识，使个人、初创企业和企业能够做出更明智的决策，保持合规，并实现长期成功和增长。",
      ourVision: "我们的愿景",
      visionText: "成为印度最受信任和首选的财务和法律服务提供商，以我们的专业知识、诚信和对客户成功的承诺而闻名。",
      trusted: "值得信赖",
      clients: "500+ 客户",
      fast: "快速",
      quickService: "快速服务",
      header: {
        title: "Mayank Varshney & Co. — 财务与法律服务",
        searchLabel: "搜索服务",
        searchPlaceholder: "搜索服务，例如：GST、会计...",
        searchButton: "搜索",
        upcomingDueDates: "即将到期日期",
        items: "{{count}} 项目",
        noDueDates: "{{service}} 没有即将到期的日期。",
        detailsAvailable: "选择后可查看详细信息"
      },
      information: {
        image1Title: "专业团队",
        image1Desc: "致力于您成功的专家专业人士",
        image2Title: "现代办公室",
        image2Desc: "提供更好服务的最先进设施",
        image3Title: "客户会议",
        image3Desc: "满足您需求的个性化咨询",
        team: "团队",
        quality: "质量",
        aboutUs: "关于我们",
        title: "您值得信赖的专业服务合作伙伴",
        description: "Mayank Varshney & Co. 致力于为印度各地的企业和个人提供全面的会计、税务和法律解决方案。凭借多年的经验和专家团队，我们确保合规，同时帮助您实现财务目标。",
        feature1Title: "专家指导",
        feature1Desc: "来自认证财务和法律专家的专业支持",
        feature2Title: "安全平台",
        feature2Desc: "银行级安全保护您的敏感数据",
        feature3Title: "快速设置",
        feature3Desc: "通过我们简化的入职流程在几分钟内开始",
        learnMore: "了解更多",
        ourServices: "我们的服务"
      },
      footer: {
        description: "您值得信赖的专业财务、税务和法律服务全球合作伙伴。我们帮助企业和个人自信轻松地应对合规。",
        quickLinks: "快速链接",
        home: "首页",
        aboutUs: "关于我们",
        contact: "联系我们",
        services: "服务",
        blog: "博客",
        ourServices: "我们的服务",
        accounting: "会计",
        gstServices: "GST 服务",
        incomeTax: "所得税",
        mcaCompliance: "MCA 合规",
        legalDrafting: "法律起草",
        contactUs: "联系我们",
        allRightsReserved: "版权所有。",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        refundPolicy: "退款政策"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
