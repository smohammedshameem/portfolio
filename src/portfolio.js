/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "S Mohammed Shameem",
  title: "Hi all, I'm Shameem",
  subTitle: emoji(
    "With 3+ years in mobile engineering, I specialize in creating high-performance apps using Swift, Kotlin and Flutter. I’m also a gamer and football enthusiast, bringing the same strategic thinking into building scalable, maintainable codebases."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/s-mohammed-shameem-b541a41b7/",
  gmail: "shameemmuhd1@gmail.com",
  // gitlab: "",
  facebook: "https://www.facebook.com/share/17iXhEsdKx/?mibextid=wwXIfr",
  whatsapp: "https://wa.me/917559975232",
  instagram: "https://www.instagram.com/_mohd__shameem_?igsh=MWk3ZG1raDNoMmZ0cg%3D%3D&utm_source=qr",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A MULTI-STACK MOBILE DEVELOPER ALWAYS LEARNING THE NEXT BIG THING",
  skills: [
    emoji("⚡ Build smooth, high-performance apps with Swift, Kotlin & Flutter"),
    emoji("⚡ Architect clean, scalable systems with MVVM, Clean Architecture & SOLID principles"),
    emoji("⚡ Real-time features using Firebase (RTDB, Firestore), Google APIs & Push Notifications"),
    emoji("⚡ Secure payment integrations with Stripe, Razorpay & Cashfree"),
    emoji("⚡ Advanced maps & location services using Google Maps, MapKit & Core Location"),
    emoji("⚡ Experience with CI/CD using Fastlane & GitHub Actions"),
    emoji("⚡ App Store & Play Store deployments with full release management"),
    emoji("⚡ Third-party SDK integrations: Mux, Firebase Analytics, Crashlytics & more"),
    emoji("⚡ Performance tuning for speed, low memory usage & minimizing crash rates"),
    emoji("⚡ Offline functionality, caching, and API reliability handling"),
    emoji("⚡ End-to-end ownership: development, testing, release & post-production support"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Swift/SwiftUI", fontAwesomeClassname: "fab fa-swift" },
    { skillName: "Kotlin", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Flutter", fontAwesomeClassname: "fab fa-flutter" },
    { skillName: "Dart", fontAwesomeClassname: "fas fa-code" },

    { skillName: "Xcode", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "Android Studio", fontAwesomeClassname: "fas fa-laptop-code" },

    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-link" },
    { skillName: "JSON", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Postman", fontAwesomeClassname: "fas fa-vial" }, // API testing

    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },

    { skillName: "Fastlane", fontAwesomeClassname: "fas fa-rocket" }, // CI/CD
    { skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "iOS Development (Swift / SwiftUI)",
      progressPercentage: "98%"
    },
    {
      Stack: "Android Development (Kotlin)",
      progressPercentage: "95%"
    },
    {
      Stack: "Cross-Platform Development (Flutter)",
      progressPercentage: "94%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "QWY Software",
      companylogo: require("./assets/images/qwy_logo.svg").default,
      date: "July 2022 – Present",
      desc: "Building and maintaining multi-platform mobile apps with clean architecture, strong performance, and reliable user experience.",
      descBullets: [
        "Developed iOS, Android & Flutter apps (Customer & Partner) for multiple regions",
        "Integrated payment gateways (Cashfree, Stripe) & implemented real-time tracking",
        "Improved app load time and crash stability through performance tuning",
        "Implemented MVVM & clean architecture for scalability across projects",
        "Handled Mux video tutorials, Firebase services & Google Maps / MapKit",
        "Managed App Store & Play Store releases and automated builds with Fastlane"
      ]
    }
    ,
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "COMPANIES I HAVE CONTRIBUTED TO BUILDING THEIR TECHNOLOGY",
  projects: [
    {
      image: require("./assets/images/logoQwqer.png"),
      projectName: "QWQER",
      projectDesc: "Developed and maintained QWQER’s Customer and Delivery Apps — iOS (Swift) and Android (Kotlin), ensuring stable releases, smooth performance, and continuous feature improvements.",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logoYoway.png"),
      projectName: "Yoway",
      projectDesc: "Developed and maintained Yoway’s Customer and Delivery Apps built in Flutter, ensuring smooth performance, stable releases, and continuous feature improvements.",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Some Cool Wins, Hard-Earned Certifications, and Things I’m Proud Of!",

  achievementsCards: [
    {
      title: "Bright Minds – 1st Place",
      subtitle:
        "Awarded 1st Place in the Bright Minds Competition at QWY Software",
      image: require("./assets/images/qwy_logo.svg").default,
      footerLink: [
      ]
    },

    {
      title: "Google Play Store Listing Certificate",
      subtitle:
        "Completed the Google Play Academy Store Listing Certification demonstrating Play Store optimization & publishing skills.",
      image: require("./assets/images/logo_google_academy.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/11K-gfXpXMGuNTLaV9gcvFdYbNnXABTTw/view?usp=sharing"
        }
      ]
    },

    {
      title: "SOLID Principles Certification",
      subtitle:
        "Certified in SOLID Principles of Object-Oriented Design & Architecture, ensuring clean, scalable code in all projects.",
      image: require("./assets/images/logoUdemy.svg").default,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-073a96ff-dd08-4bfa-a9e7-5f55fab94bd4/"
        }
      ]
    },


    {
      title: "Technology Gem Award",
      subtitle:
        "Recognized at QWY Software with the Technology Gem Award for outstanding performance and contributions.",
      image: require("./assets/images/qwy_logo.svg").default,
      footerLink: [
        {
          name: "Award Details",
          url: "https://drive.google.com/file/d/1u8xeKVojDMzAQ9hYtgDeV8hlZ43SMMBf/view?usp=sharing" // add if available
        }
      ]
    },

    {
      title: "Flutter Masterclass Certification",
      subtitle:
        "Completed Flutter Masterclass covering Dart, APIs, Firebase, and advanced Flutter development.",
      image: require("./assets/images/logoUdemy.svg").default,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-1450910c-55d1-4c70-bacd-f11dd6d13f1e/"
        }
      ]
    },

    {
      title: "Intermediate iOS Development",
      subtitle:
        "Completed Intermediate iOS course focusing on advanced iPhone app development concepts and architectures.",
      image: require("./assets/images/logoUdemy.svg").default,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-5ffbc279-cd96-4b36-ae88-1d51bedd21ba/"
        }
      ]
    },

    {
      title: "iOS Development Masterclass 2025",
      subtitle:
        "Completed iOS masterclass covering SwiftUI, SwiftData, and AI-driven iOS development techniques.",
      image: require("./assets/images/logoUdemy.svg").default,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-d68a12b9-5e8a-421c-b5a8-64cd5387c176/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7559975232",
  email_address: "shameemmuhd1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
