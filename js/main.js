//開啟動畫
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return; // 預防找不到元素出錯

  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

//按鈕
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//導覽列
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-glass");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//打字機
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello! Welcome to my website💗";
  const target = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // 打字速度
    } else {
      // 打完後停一下，然後清空再重新開始
      setTimeout(() => {
        target.textContent = "";
        index = 0;
        type();
      }, 2000); // 等 2 秒後重新打字
    }
  }

  type(); // 啟動打字
});
