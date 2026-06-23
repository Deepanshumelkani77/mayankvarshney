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
      quickService: "Quick Service"
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
      quickService: "快速服务"
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
