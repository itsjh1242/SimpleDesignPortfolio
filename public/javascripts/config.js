// function stringConvert(page) {
//   Object.entries(page).forEach(([key, value]) => {
//     document.getElementById(key).innerHTML = value.toString();
//   });
// }

// function IndexPageMenuConvert() {
//   const MenuCount = Object.keys(IndexPage.menu).length;
//   for (let i = 0; i < MenuCount; i++) {
//     document.getElementById("menu_title_" + i).innerHTML = IndexPage.menu[i][0];
//     document.getElementById("menu_content_" + i).innerHTML = IndexPage.menu[i][1];
//   }
// }

const IndexPage = {
  // Landing Page Profile banner
  profile_banner: "Personal Portfolio",
  // Your Name
  profile_name: "JunHyeon Kim",
  // Profile About Left Text
  profile_left_text: "Profile",
  // Profile About Right Text
  profile_right_text:
    "Adaptable and skilled Software Engineer with a Bachelor's Degree in Software Engineering. Enthusiastic and determined, embrace challenges and never give up. Quick to learn new languages and programming skills. Proficient in Python, JavaScript and Dart, demonstrated expertise in Figma, Adobe Photoshop and Adobe Illustrator. Experienced in web development, commanding HTML and Web Server Programming. Collaborative and adept with GitHub for version control. Proud recipient of the “Best of the Best” distinction at the 2022 Red dot Award in the Brands & Communication Design category. Open-minded and friendly, I thrive in team circumstances and am eager to contribute to innovative organizations.",
  // Portfolio Menu Contents
  menu: {
    0: ["Experiences", "Job Responsibilities, Achievements"],
    1: ["Works", "Personal or Team Project Works"],
    2: ["Skills & Certificates", "Key Skills, Certificates"],
    3: ["Activities", "Extracurricular Activities, Leadership Roles"],
  },
  // Portfolio Menu Read More Text
  menu_readmore: "Read More",
  profile_slide: {
    0: "KIM JUN HYEON",
    1: "Bachelor’s Degree in Software Enginnering",
    2: "Dongseo University, Busan, South Korea",
    3: "Mar.2018 – Feb.2024",
  },
};

const ExperiencePage = {
  experience: [
    {
      experience_title: "Researcher and developer in Mobile Application (Intern)",
      experience_period: "Jan 2023 - Nov 2023",
      experience_content: [
        "Manage and lead a team to make good teamwork",
        "Develop mobile application with Flutter",
        "Design user interface for mobile applications using Figma",
      ],
    },
    {
      experience_title: "Tutor in community of Python (Tutor)",
      experience_period: "Mar 2023 - Jun 2023",
      experience_content: [
        "Teach how to fine-tune the KoBERT model and utilize GPT-3 with Python",
        "Teach how to solve coding-test with complicated algorithm",
        "Guid students to have community well",
      ],
    },
    {
      experience_title: "Tutor in community of Node.js (Tutor)",
      experience_period: "Sep 2022 - Dec 2022",
      experience_content: [
        "Teach how to implement CRUD operations and create web-site using Node.js",
        "Teach how to design web-site with CSS",
        "Guide in connecting MySQL database with Node.js",
      ],
    },
    {
      experience_title: "Assistant Instructor (Assistant)",
      experience_period: "Sep 2022 - Dec 2022",
      experience_content: [
        "Assist main teacher to Scratch program",
        "Provide computer program guidance and teach the how to use and utilze program for student",
        "Help students troubleshoot programming issues and encourage their creativity",
      ],
    },
    {
      experience_title: "Tennis Matching Application Developer (Intern)",
      experience_period: "Jun 2022 - August 2022",
      experience_content: [
        "Assist to develop a tennis matching application using Flutter",
        "Provide and support to make implementation of database structures with Firebase",
        "Assist to conect the development of server and database communication functionalities",
      ],
    },
  ],
};

const WorksPage = {
  work: [
    {
      work_title: "Simple Design Portfolio Web Page",
      work_image: ["/images/works/simpledesignportfolio.png", "/images/works/simpledesignportfolio2.png", "/images/works/simpledesignportfolio3.png"],
      work_skills: ["github", "javascript", "html", "nodejs", "css"],
      work_role: "Main Developer and UI Designer",
      work_description: "설명",
    },
    {
      work_title: "Motion recognition-Based Double-Cipher Authenticatioin System",
      work_image: ["/images/commingsoon.png", "/images/commingsoon.png"],
      work_skills: ["github", "android", "nodejs", "mysql"],
      work_role: "Main Developer and UI Designer",
      work_description: "설명",
    },
    {
      work_title: "AI Chatbot-based Diary Writing System for Positive Emotion",
      work_image: [
        "/images/works/aichatbot.png",
        "/images/works/aichatbot2.png",
        "/images/works/aichatbot3.png",
        "/images/works/aichatbot4.png",
        "/images/works/aichatbot5.png",
      ],
      work_skills: ["python", "flask", "nodejs", "mysql", "html"],
      work_role: "Main developer, UI Designer and tester",
      work_description: "설명",
    },
    {
      work_title: "Finger recognition absenteeism management system using Arduino",
      work_image: [
        "/images/works/fingerrecognition0.png",
        "/images/works/fingerrecognition.png",
        "/images/works/fingerrecognition1.png",
        "/images/works/fingerrecognition2.png",
        "/images/works/fingerrecognition3.png",
        "/images/works/fingerrecognition4.png",
        "/images/works/fingerrecognition5.png",
        "/images/works/fingerrecognition6.png",
        "/images/works/fingerrecognition7.png",
        "/images/works/fingerrecognition8.png",
      ],
      work_skills: ["arduino", "nodejs", "html", "css", "mysql", "javascript"],
      work_role: "Main Developer, UI Designer and tester",
      work_description: "설명",
    },
    {
      work_title: "Online Book Store",
      work_image: ["/images/commingsoon.png", "/images/commingsoon.png", "/images/commingsoon.png"],
      work_skills: ["nodejs", "html", "css", "javascript", "mysql"],
      work_role: "Main developer, UI Designer and tester",
      work_description: "설명",
    },
    {
      work_title: "Tennis Matching Application",
      work_image: ["/images/commingsoon.png", "/images/commingsoon.png", "/images/commingsoon.png"],
      work_skills: ["flutter", "firebase"],
      work_role: "UI Design Assistant and tester",
      work_description: "설명",
    },
  ],
};

const SkillsPage = {
  Language: { Korean: "Native", English: "Fluent", Japaness: "Mid-level" },
  ComputerSkills: {
    Python: "Advance",
    Javascript: "Advance",
    "MS word": "Advance",
    Excel: "Intermediate",
    "Adobe Photoshop": "Advance",
    "Adobe Illustrator": "Advance",
  },
  License: ["Certificate of ITQ Excel, Word - Korea Productivity Center", "Certificate of Scuba diving - National Association of Underwater Instructor"],
  Awards: [
    {
      AwardAgency: "Red dot Award",
      AwardYear: "2022",
      AwardDetail: "Won the Best of the Best",
      AwardTitle: "Touchable Hair Catalog for Blind",
      Role: ["Idea Maker", "Catalog Maker", "Support Panel Design", "Support Producting Video"],
      AwardImage: [
        "/images/skills/reddot.png",
        "/images/skills/reddot1.jpeg",
        "/images/skills/reddot2.jpeg",
        "/images/skills/reddot3.jpeg",
        "/images/skills/reddot4.jpeg",
      ],
    },
    {
      AwardAgency: "Yound One Adc",
      AwardYear: "2023",
      AwardDetail: "Won recognotion with Merit and Short-list accolades",
      AwardTitle: "Touchable Hair Catalog for Blind",
      Role: ["Idea Maker", "Catalog Maker", "Support Panel Design", "Support Producting Video"],
      AwardImage: ["/images/skills/YoungOnes.png", "/images/skills/YoungOnes.png", "/images/skills/YoungOnes.png"],
    },
    {
      AwardAgency: "Mad Stars event",
      AwardYear: "2022",
      AwardDetail: "Won the Crystal award",
      AwardTitle: "Touchable Hair Catalog for Blind",
      Role: ["Idea Maker", "Catalog Maker", "Support Panel Design", "Support Producting Video"],
      AwardImage: ["/images/skills/madstars.png", "/images/skills/madstars.png", "/images/skills/madstars.png"],
    },
  ],
};

const ActivitiesPage = {
  Activities: [
    {
      ActivityName: "IT volunteer club by Dongseo university, Korea",
      ActivityDescription: ["Participate as an assistant instructor for Python and Scratch", "Create a Study circumstances"],
      ActivityImage: ["/images/commingsoon.png", "/images/commingsoon.png", "/images/commingsoon.png"],
    },
    {
      ActivityName: "Dongseo University Volunteer Group, Korea",
      ActivityDescription: [
        "Assist with laundry and cleaning at nursing homes",
        "Participate in mural painting projects",
        "Teach coding(Scratch), Mathematic and English to children",
      ],
      ActivityImage: ["/images/commingsoon.png", "/images/commingsoon.png", "/images/commingsoon.png"],
    },
    {
      ActivityName: "Military Service",
      ActivityDescription: ["Enlisted in the Marine Corps in January 2019", "Honorably discharged from the Marine Corps in August 2020"],
      ActivityImage: ["/images/activity/military.jpg", "/images/activity/military1.jpg", "/images/activity/military2.jpg"],
    },
  ],
};

module.exports = {
  IndexPage: IndexPage,
  ExperiencePage: ExperiencePage,
  WorksPage: WorksPage,
  SkillsPage: SkillsPage,
  ActivitiesPage: ActivitiesPage,
};
