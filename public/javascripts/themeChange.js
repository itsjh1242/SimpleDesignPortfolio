// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  const themeToggleElement = document.querySelector(".themeToggle");
  const themeIconElement = document.getElementById("themeIcon");
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    themeIconElement.src = "images/icon/icon_moon.png"; // 어두운 테마 아이콘 이미지
  } else {
    setTheme("theme-dark");
    themeIconElement.src = "images/icon/icon_sun.png"; // 밝은 테마 아이콘 이미지
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
})();
