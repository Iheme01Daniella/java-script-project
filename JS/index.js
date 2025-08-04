document.addEventListener("DOMContentLoaded", function () {
  let products = [
    {
      icon: "fa-solid fa-wallet",
      header: "Multi-currency support",
      body: "Manage over 150 cryptocurrencies in one secure wallet. Buy, sell, and exchange with ease.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      header: "Enhanced security",
      body: "Military-grade encryption, biometric authentication, and two-factor verification to keep your assets safe.",
    },
    {
      icon: "fa-solid fa-bell",
      header: "Real-time notifications",
      body: "Stay informed with instant alerts for transactions, price movements, and security events.",
    },
    {
      icon: "fa-solid fa-cloud-arrow-up",
      header: "Backup & Recovery",
      body: "Secure cloud backup and easy recovery options to ensure you never lose access to your funds.",
    },
    {
      icon: "fa-solid fa-chart-line",
      header: "Smart trading",
      body: "Advanced trading tools with real-time market data and AI-powered insights for better decisions.",
    },
    {
      icon: "fa-solid fa-headset",
      header: "24/7 Support",
      body: "Get help anytime with our dedicated support team and comprehensive knowledge base.",
    },
  ];

  let container = document.getElementById("features-row");
  container.innerHTML = "";

  products.forEach((product) => {
    let div = document.createElement("div");
    div.className = "col-12 col-sm-6 col-md-4 mb-4";

    div.innerHTML = `
            <div class="feature-card text-center">
                <i class="${product.icon} fa-2x mb-3" style="color: aqua;"></i>
                <h5>${product.header}</h5>
                <p>${product.body}</p>
            </div>
        `;
    container.appendChild(div);
  });

  // Testimonials Section
  let Items = [
    {
      body: "Wallet-wise has completely changed how I manage my digital assets. The security features are impressive and the interface is simple. I can finally sleep at night knowing my crypto is safe.",
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      body: "As someone new to cryptocurrency, I was worried about security. WalletWise made it easy to get started with helpful tutorials and bank-level security. The customer support team is also incredibly responsive.",
      name: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
    {
      body: "I have tried several crypto wallets and WalletWise is by far the best. The cross-platform sync works flawlessly, and the built-in exchange has saved me so much time and money on fees.",
      name: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
    },
  ];

  let itemContainer = document.getElementById("item-row");
  itemContainer.innerHTML = "";

  Items.forEach((item) => {
    let div = document.createElement("div");
    div.className = "col-12 col-sm-6 col-md-4 mb-4";

    // Generate star rating HTML
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < item.rating ? "★" : "☆";
    }

    div.innerHTML = `
                <div class="Item-card">
                    <p class="item-body">${item.body}</p>
                    <div class="user-info">
                        <img src="${item.avatar}" alt="${item.name}" class="user-avatar">
                        <div>
                            <div class="user-name">${item.name}</div>
                            <div class="stars">${stars}</div>
                        </div>
                    </div>
                    
                </div>
            `;
    itemContainer.appendChild(div);
  });
});

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
