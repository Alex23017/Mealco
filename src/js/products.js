document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
    {
      imageCard: "img/imgSwiper/Belliwelli.svg",
      logoImage: "img/imgSwiper/Moreish.svg",
      linkButton: "cayenne.html",
    },
   
  ];

  const swiperList = document.getElementById("product-container");

  function renderSwiper(productsArray) {
    if (swiperList) {
      swiperList.innerHTML = ""; // очистить контейнер

      productsArray.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("swiper-slide");

        div.innerHTML = `
          <div class="product-card">
            <img src="${product.imageCard}" alt="Product Image">
            <div class="product-logo">
              <img src="${product.logoImage}" alt="Logo Image">
              <a href="${product.linkButton}">Learn more</a>
            </div>
          </div>
        `;

        swiperList.appendChild(div);
      });
    }
  }

  renderSwiper(products);
});
