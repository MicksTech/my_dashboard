document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("navlist").classList.toggle("active");
  document.getElementById("header").classList.toggle("active");
});

document.querySelectorAll("#navlist a").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("navlist").classList.remove("active");
    document.getElementById("header").classList.remove("active");
  });
});
