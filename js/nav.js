const setNavClass = (e) => {
  console.log("Dat abc");
  const nav = document.getElementById("nav");
  if (window && window.pageYOffset >= 80) {
    nav.classList.add("stickyNav");
  } else {
    nav.classList.remove("stickyNav");
  }
};
