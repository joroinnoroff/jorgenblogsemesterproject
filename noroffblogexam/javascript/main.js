document.getElementById("searchInput").addEventListener("keyup", searchItems);

function searchItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const items = document.getElementsByClassName("article-holder");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const title = item.querySelector(".post-title").textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
const allPosts = document.querySelector(".all-posts");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(allPosts);

const backButton = document.querySelector(".backttop");
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".backttop");

  if (backButton) {
    backButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
