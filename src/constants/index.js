import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  ICC,
  BMC,
  AMS,
  chromecast,
  disc02,
  facebook,
  linkedIn,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  searchMd,
  sliders04,
  SFM,
  MTS,
  CCM,
  IPC,
  CSP,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  google,
  meta,
  website,
  whatsApp,
  maleAvatar,
  femaleAvatar,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "3",
    title: "Testimonials",
    url: "#feedback",
  },
  {
    id: "4",
    title: "Blogs",
    url: "#blogs",
  },

  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const byIndustryFeatures = [
  {
    id: "0",
    title: "B2B Sales",
  },
  {
    id: "1",
    title: "Travel and Tourism",
  },
  {
    id: "2",
    title: "Restaurants & Food Business",
  },
  {
    id: "3",
    title: "Spas and Salons",
  },
  {
    id: "4",
    title: "Health & Wellness Brands",
  },
  {
    id: "5",
    title: "Beauty & Cosmetic Brands",
  },
  {
    id: "6",
    title: "Edutech",
  },
  {
    id: "7",
    title: "Automotive Industry",
  },
  {
    id: "8",
    title: "Home Decor & Furnishing",
  },
  {
    id: "9",
    title: "Marketing Agency",
  },
  {
    id: "10",
    title: "Real Estate",
  },
  {
    id: "11",
    title: "Freelancer and Consultant Sales",
  },
  {
    id: "12",
    title: "Banking and Finance",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const testimonial = [
  {
    id: "0",
    title: "Maitreyi Rao",
    text: "Thanks to engagehub's WhatsApp marketing services, my sales have increased tenfold! I highly recommend engagehub to anyone looking to boost their business with effective WhatsApp marketing strategies.",
    topic: "WhatsApp Marketing",
    avatar: femaleAvatar,
  },
  {
    id: "1",
    title: "Virajas Kulkarni",
    text: "I am so impressed with engagehub's innovative approach to WhatsApp marketing. Their services are unparalleled, and I am truly in love with their chatbot service. I highly recommend engagehub to anyone looking to boost their marketing strategies.",
    topic: "Chatbot Services",
    avatar: maleAvatar,
  },
];

export const blogs = [
  {
    id: "0",
    title: "Revolutionizing WhatsApp Marketing Automation",
    text: "The blog introduces Engagehub, a WhatsApp marketing automation tool that enhances customer engagement with features like bulk messaging, chatbots, and integrated product catalogs. It emphasizes how these tools streamline communication and drive business growth.",
    imageUrl: roadmap1,
    colorful: true,
    link: "https://medium.com/@nikhil.core2/engagehub-revolutionizing-whatsapp-marketing-automation-692e03f5615c",
  },
];

export const collabText = "";

export const collabContent = [
  {
    id: "0",
    title: "Negative Google Rating eliminator",
    text: collabText,
  },
  {
    id: "1",
    title: "Feedback Manager",
  },
  {
    id: "2",
    title: "Product Catalogue / Brand Website",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google",
    icon: google,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Meta",
    icon: meta,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Website",
    icon: website,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Whatsapp",
    icon: whatsApp,
    width: 34,
    height: 35,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Engage PRO",
    description:
      "Build simple Bots, Send bulk broadcast messages, Customer segmentation, and more. (billed yearly) + GST",
    price: "699/month ",
    features: [
      "Build simple Bots",
      "Send bulk broadcast messages",
      "Customer segmentation",
      "Share products and catalogues",
      "Detailed broadcast analytics",
      "Excel export and import",
      "Google sheets integration",
      "Access on mobile and web",
    ],
  },
  {
    id: "1",
    title: "Engage Pro Plus",
    description: "Advanced features and additional benefits",
    description2: "(billed yearly)",
    price: "999/month",
    features: [
      "Build simple Bots",
      "Send bulk broadcast messages",
      "Customer segmentation",
      "Share products and catalogues",
      "Detailed broadcast analytics",
      "Excel export and import",
      "Google sheets integration",
      "Access on mobile and web",
    ],
  },
];



export const benefits = [
  {
    id: "0",
    title: "Instant Customer Connection",
    tagline: "Connect Instantly, Know Your Customers",
    text1: "Engagehub uses QR codes for instant WhatsApp connections and real-time data capture, strengthening customer relationships.",
    text2: [
      "Easy QR code scanning: Customers connect by scanning a QR code, automatically opening WhatsApp to your business number.",
      "Real-time data collection: Automatically captures customer info in Engagehub's CRM for seamless interaction tracking."
    ],
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: ICC,
  },
  {
    id: "1",
    title: "Bulk Messaging Capabilities",
    tagline: "Reach Everyone, Anytime",
    text1: "Engagehub’s bulk messaging lets you contact all customers with promotions, updates, and announcements while staying policy-compliant.",
    text2: [
      "Easy database import: Upload customer lists into Engagehub's CRM for quick outreach.",
      "Unlimited messaging: Send bulk messages without risking WhatsApp account suspension."
    ],
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: BMC,
  },
  {
    id: "2",
    title: "Advanced Message Scheduling",
    tagline: "Plan Ahead, Communicate Smart",
    text1: "Schedule messages ahead of time to reach specific customer groups, enhancing your marketing efficiency.",
    text2: [
      "Future-date scheduling: Plan messages to be sent at precise future times.",
      "Audience targeting: Reach targeted customer segments for more relevant communication."
    ],
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: AMS,
  },
  {
    id: "3",
    title: "Intelligent Chatbot Integration",
    tagline: "Automate Support, Delight Customers",
    text1: "24/7 chatbot support handles queries, reduces staff workload, and keeps customers satisfied.",
    text2: [
      "Instant responses: Chatbot answers customer queries automatically, any time.",
      "Customizable support options: Tailor responses to common queries to meet customer needs."
    ],
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: MTS,
  },
  {
    id: "4",
    title: "Smart Feedback Management",
    tagline: "Listen, Improve, Succeed",
    text1: "Automated feedback boosts online reviews and alerts you to resolve negative feedback quickly.",
    text2: [
      "Automated feedback requests: Sent after interactions via WhatsApp.",
      "Positive review posting: 4-5 star reviews are automatically posted to Google.",
      "Negative feedback alerts: Receive alerts for ratings of 3 stars or below."
    ],
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: SFM,
  },
  {
    id: "5",
    title: "Customer Segmentation and Personalization",
    tagline: "Know More, Engage Better",
    text1: "Analyze preferences and send tailored messages to boost customer satisfaction and sales.",
    text2: [
      "Preference analysis: Understand individual preferences through customer behavior.",
      "Tailored messaging: Deliver personalized content to specific customer segments."
    ],
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: CSP,
  },
  {
    id: "6",
    title: "Comprehensive Conversation Management",
    tagline: "Organize Conversations, Optimize Service",
    text1: "Centralized conversation hub keeps all customer interactions accessible and organized.",
    text2: [
      "Centralized hub: Store all WhatsApp interactions in one place.",
      "Interaction tracking: Ensure no message goes unanswered for optimized service."
    ],
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: CCM,
  },
  {
    id: "7",
    title: "Integrated Product Catalogue and Website",
    tagline: "Shop Within WhatsApp, Simplify Sales",
    text1: "Seamless in-app shopping experience within WhatsApp to drive quick purchases.",
    text2: [
      "In-app product showcase: Browse products directly in WhatsApp.",
      "Seamless browsing: Customers view and decide on purchases while chatting."
    ],
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: IPC,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/h2so4_engagehub/",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedIn,
    url: "https://www.linkedin.com/company/h2so4labs",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/people/H2SO4Labs/61560026503079/?is_tour_dismissed",
  },
];
