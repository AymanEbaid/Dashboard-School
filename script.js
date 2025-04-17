
// let toggleButton = document.getElementById('dark-mode-toggle');

// toggleButton.addEventListener('click', function () {
//     document.body.classList.toggle('dark-mode');
// });
const btn = document.getElementById("modeToggleBtn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // نبدّل الرمز حسب الوضع الحالي
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️"; // شمس = دارك مود مفعّل
  } else {
    btn.textContent = "🌙"; // قمر = دارك مود مش مفعّل
  }
}