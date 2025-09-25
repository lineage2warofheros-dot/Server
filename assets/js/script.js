// Fade-in effect for title and subtitle
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");

  title.style.opacity = 0;
  subtitle.style.opacity = 0;

  setTimeout(() => {
    title.style.transition = "opacity 2s ease-in-out";
    title.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    subtitle.style.transition = "opacity 2s ease-in-out";
    subtitle.style.opacity = 1;
  }, 1500);
});
