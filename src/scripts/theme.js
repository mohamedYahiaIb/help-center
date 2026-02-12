const toggleBtn = document.querySelector(".toggle-theme");
const background = document.querySelector(".container");

let isAnimating = false;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    background.classList.toggle("dark-mode");
    toggleBtn.textContent = "🌙";
} else {
    background.classList.remove("dark-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    if (isAnimating) return;

    isAnimating = true;
    toggleBtn.classList.add("fade-icon");

    setTimeout(() => {
        background.classList.toggle("dark-mode");

        if (background.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "☀️";
        }

        toggleBtn.classList.remove("fade-icon");
        isAnimating = false;
    }, 250);
});