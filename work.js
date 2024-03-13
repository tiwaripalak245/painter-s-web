document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const grid = document.querySelector(".grid");


    dropdownBtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    const navbarBrand = document.querySelector(".navbar-brand");
    navbarBrand.addEventListener("click", function () {
      window.location.href = "index.html";
    });

    const imageUrls = [
      "https://img.freepik.com/free-vector/hand-drawn-tree-life-brown-shades_23-2148703761.jpg?t=st=1709845711~exp=1709849311~hmac=a1f62484d5a9835a3d765b822dfce64ddc3bcd830031ca9f092fa20c61832089&w=740",
      "https://img.freepik.com/premium-photo/landscape-paintings-landscapes-abstract-ink-painting-background-fashion-modern-art-wall_716388-282.jpg?w=740",
      "https://img.freepik.com/free-photo/graffiti-children-bicycle_1122-2206.jpg?t=st=1710067132~exp=1710070732~hmac=1566d391ad7c9f4854c03785e3eca05399a02c4e7f95bf0f311f4c90e0cdf81f&w=740",
      "https://img.freepik.com/premium-photo/boats-water-watercolor_726745-129.jpg?w=740",
      "https://img.freepik.com/premium-photo/flower-background_456341-965.jpg?w=740",
      "https://img.freepik.com/premium-photo/canvas-frames-digital-graphic-like-impression-drawing-colorful-tree-digital-landscape_216426-186.jpg?w=360",
    ];
    const titles = [
      "Tree of Life",
      "Abstract Landscape",
      "Grunge Wood",
      "Boats on Water",
      "Flower Background",
      "Digital Graphic",
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


    function populateGrid() {
      imageUrls.forEach((imageUrl, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Artwork";

        const title = document.createElement("p");
        title.classList.add("text-title");
        title.textContent = titles[index];

        const button = document.createElement("button");
        button.classList.add("card-button");
        button.textContent = "Add to Cart";
        button.style.display = "none";

        cardDetails.appendChild(img);
        cardDetails.appendChild(title);
        card.appendChild(cardDetails);
        card.appendChild(button);

        card.addEventListener("mouseenter", function () {
          button.style.display = "block";
        });

        card.addEventListener("mouseleave", function () {
          button.style.display = "none";
        });
        card.addEventListener("click", function () {
          window.location.href = "work-item.html";
        });

        card.addEventListener("click", function () {
            const workItemUrl = `work-item.html?index=${index}&artist=${artists[index]}&year=${years[index]}`;
            window.location.href = workItemUrl;
        });
        
        grid.appendChild(card);

      });
    }

    populateGrid();
  });