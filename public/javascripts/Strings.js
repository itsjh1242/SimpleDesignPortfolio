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
  // Landing Page
  profile_banner: "Personal Portfolio",
  profile_title: "Hi,\nI'm JunHyeon Kim",
  profile_left_text: "Profile",
  profile_right_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  menu: {
    0: ["Experiences", "Job Responsibilities, Achievements"],
    1: ["Works", "Personal or Team Project Works"],
    2: ["Skills & Certificates", "Key Skills, Certificates"],
    3: ["Activities", "Extracurricular Activities, Leadership Roles"],
  },
  menu_readmore: "Read More",
};

module.exports = {
  IndexPage: IndexPage,
};
