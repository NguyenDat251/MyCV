const setPositionFooter = () => {
  const footer = document.getElementById("timelineFooter");
  const timeline = document.getElementById("timeline");
  if (window && window.pageYOffset >= window.innerHeight) {
    footer.classList.add(".stickyLineItemFooter");
  } else if (
    window &&
    window.pageYOffset >= window.innerHeight + timeline.offsetHeight
  ) {
    footer.classList.remove(".stickyLineItemFooter");
    footer.classList.add(".stickToBottom");
  }
};
