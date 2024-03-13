document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const navbarBrand = document.querySelector(".navbar-brand");
  const aboutSection = document.querySelector(".about-section");
  const popularWorks = document.querySelectorAll(".popular-work");


  const imageUrls = [
    "./assets/beach.jpg",
    "./assets/sunrise.avif",
    "./assets/flowers.avif",
  ];
  const titles = [
    "Field of Flowers",
    "Floral watercolor landscape",
    "Flowers behind humidity glass",
  ];
  const artists = [
    'Davonte Wes',
    'Estela Mendoza',
    'Madeline Burke'
  ];

  const years = [
    '2024',
    '2024',
    '2023'
  ];



  dropdownBtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  navbarBrand.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  popularWorks.forEach((work, index) => {
    work.addEventListener("click", function () {
      redirectToWorkItem(index, artists[index], years[index]);
    });
  });

  aboutSection.addEventListener("click", function() {
    window.location.href = "about.html";
  });


  function redirectToWorkItem(index, artist, year) {
    const workItemUrl = `work-item.html?index=${index}&artist=${artist}&year=${year}`;
    window.location.href = workItemUrl;
  }
  
});
