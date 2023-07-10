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
  profile_title: "JunHyeon Kim",
  // Profile About Left Text
  profile_left_text: "Profile",
  // Profile About Right Text
  profile_right_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    2: "Dongseo University, Busan,South Korea",
    3: "Mar.2018 – Feb.2024",
  },
};

module.exports = {
  IndexPage: IndexPage,
};
