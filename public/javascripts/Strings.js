function stringConvert(page) {
  Object.entries(page).forEach(([key, value]) => {
    document.getElementById(key).innerHTML = value;
  });
}

const IndexPage = {
  // Landing Page
  profile_banner: "Personal Portfolio",
  profile_title: "Hi,\nI'm JunHyeon Kim",
  left_text: "Profile",
  right_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
