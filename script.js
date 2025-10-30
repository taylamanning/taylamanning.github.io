// Put the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

//Dark mode toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
