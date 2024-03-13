
document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));
  
    const imageUrls = [
      "https://img.freepik.com/free-vector/hand-drawn-tree-life-brown-shades_23-2148703761.jpg?t=st=1709845711~exp=1709849311~hmac=a1f62484d5a9835a3d765b822dfce64ddc3bcd830031ca9f092fa20c61832089&w=740",
      "https://img.freepik.com/premium-photo/landscape-paintings-landscapes-abstract-ink-painting-background-fashion-modern-art-wall_716388-282.jpg?w=740",
      "https://img.freepik.com/free-photo/graffiti-children-bicycle_1122-2206.jpg?t=st=1710067132~exp=1710070732~hmac=1566d391ad7c9f4854c03785e3eca05399a02c4e7f95bf0f311f4c90e0cdf81f&w=740",
      "https://img.freepik.com/premium-photo/boats-water-watercolor_726745-129.jpg?w=740",
      "https://img.freepik.com/premium-photo/flower-background_456341-965.jpg?w=740",
      "https://img.freepik.com/premium-photo/canvas-frames-digital-graphic-like-impression-drawing-colorful-tree-digital-landscape_216426-186.jpg?w=360",
      "./assets/beach.jpg",
      "./assets/sunrise.avif",
      "./assets/flowers.avif",



    ];
    const titles = [
      "Tree of Life",
      "Abstract Landscape",
      "Grunge Wood",
      "Boats on Water",
      "Flower Background",
      "Field of Flowers",
      "Floral watercolor landscape",
      "Flowers behind humidity glass",

    ];
    const artists = [
      'Davonte Wes',
      'Estela Mendoza',
      'Madeline Burke',
      'Diego Keller',
      'Vance Moss',
      'Lauren Willis'
    ];
    const years = [
      '2024',
      '2024',
      '2023',
      '2022',
      '2024',
      '2022'
    ];
  
    console.log("Image URL:", imageUrls[index]);
    console.log("Title:", titles[index]);
    console.log("Artist:", artists[index]);
    console.log("Year:", years[index]);
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = imageUrls[index];
    image.alt = "Artwork";
    imageContainer.appendChild(image);
  
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details");
    const title = document.createElement("h2");
    title.textContent = "Art Title: " + titles[index];
    const artistPara = document.createElement("p");
    artistPara.textContent = "Artist Name: " + artists[index];
    const yearPara = document.createElement("p");
    yearPara.textContent = "Year: " + years[index];
    detailsContainer.appendChild(title);
    detailsContainer.appendChild(artistPara);
    detailsContainer.appendChild(yearPara);
  
    const section = document.getElementById("work-item");
    section.appendChild(imageContainer);
    section.appendChild(detailsContainer);
  });
  