document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  if (navbar) {
    navbar.innerHTML = `
      <ul class="nav">
        <li><a href="index.html">Начало</a></li>
        <li><a href="about.html">За Luna</a></li>
        <li><a href="services.html">Услуги</a></li>
        <li><a href="gal.html">Визии</a></li>
        <li><a href="news.html">Актуално</a></li>
        <li><a href="info.html">Информация</a></li>
        <li><a href="con.html">Контакти</a></li>
      </ul>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-col">
          <h4>Бързи връзки</h4>
          <ul>
            <li><a href="index.html">Начало</a></li>
            <li><a href="about.html">За Luna</a></li>
            <li><a href="services.html">Услуги</a></li>
            <li><a href="gal.html">Визии</a></li>
            <li><a href="news.html">Актуално</a></li>
            <li><a href="info.html">Информация</a></li>
            <li><a href="con.html">Контакти</a></li>
          </ul>
        </div>

        <div class="footer-col center">
          <h4>Последвайте ни</h4>
          <div class="footer-socials">
            <span>&#128214;</span>
            <span>&#128247;</span>
            <span>&#128038;</span>
            <span>&#9654;&#65039;</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Контакт с нас</h4>
          <p>&#128205; гр. Варна, България</p>
          <p>&#9993; info@luna.bg</p>
          <p>&#128222; 0888 123 456</p>
        </div>
      </div>

      <div class="footer-copy">
        &copy; LUNA, 2025
      </div>
    `;
  }




 
  let btn = document.getElementById("themeBtn");
  if(btn){
    btn.addEventListener("click", () => {
      const colors = ["#f6efe9", "#efe3d8", "#e8dccf"];
      document.body.style.background =
        colors[Math.floor(Math.random()*colors.length)];
    });
  }


  document.querySelectorAll("h2").forEach(h => {
    h.addEventListener("mouseover", () => {
      h.style.transform = "scale(1.05)";
    });
    h.addEventListener("mouseout", () => {
      h.style.transform = "scale(1)";
    });
  });

  document.querySelectorAll(".nav a").forEach(link => {
  if(link.href === window.location.href){
    link.style.color = "#c59d5f";
    link.style.fontWeight = "bold";
  }
});
let galleryImages = document.querySelectorAll('.gallery-card img');

galleryImages.forEach(img => {

  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.08)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });

});
let newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
  let overlay = card.querySelector('.news-overlay');

  card.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
  });

  card.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
});



});
