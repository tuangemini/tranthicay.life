/**
 * MAIN INTERACTIVE SCRIPT - TRẦN THỊ CẬY
 * Website: tranthicay.life
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    // Close nav on click link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.textContent = '☰';
      });
    });
  }

  // 2. Sticky Header on Scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 3. Gallery Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 4. Lightbox Modal
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-card-title')?.innerText || '';
      const tag = card.querySelector('.gallery-card-tag')?.innerText || '';
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong> — <em>${tag}</em>`;
        }
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // 5. Daily Wisdom Quotes Generator
  const quotesList = [
    {
      content: "Ở đời, giữ được chữ TÂM trong sáng thì đi đâu cũng thanh thản, gặp cảnh ngộ nào lòng cũng an nhiên như đóa sen vươn lên đón ánh mặt trời.",
      sub: "Triết lý sống thanh tịnh — Trần Thị Cậy"
    },
    {
      content: "Biết đủ để an, biết dừng để tĩnh, biết buông để lòng thanh thản. Hạnh phúc đích thực không nằm ở của cải gom góp, mà ở sự thảnh thơi trong từng nhịp thở.",
      sub: "Chiêm nghiệm từ tác phẩm Sen Tâm"
    },
    {
      content: "Ba tài sản vĩ đại nhất của đời người là Sức khỏe của Thân thể, Trí tuệ của Tâm hồn và Trải nghiệm sống chân thực. Giữ trọn ba điều này, bạn đã là người giàu có nhất thế gian.",
      sub: "Tác phẩm 3 Tài Sản Vĩ Đại Nhất Của Đời Người"
    },
    {
      content: "Tuổi tác chưa bao giờ là rào cản ngăn bước ta chạm tới tri thức mới. Khi ta mở rộng lòng mình với công nghệ và trí tuệ nhân tạo, ta đang tiếp tục gieo mầm cho tương lai.",
      sub: "Tinh thần tiên phong kỷ nguyên số — Trần Cậy"
    },
    {
      content: "34 năm đứng trên bục giảng dạy cho tôi biết trân quý từng ánh mắt học trò; và sứ mệnh Bảo Việt dạy cho tôi biết trân quý sự an lành, che chở cho từng mái ấm gia đình.",
      sub: "Tâm niệm người gieo mầm & bảo vệ con người"
    }
  ];

  let currentQuoteIndex = 0;
  const quoteTextEl = document.getElementById('quoteText');
  const quoteSubEl = document.getElementById('quoteSub');
  const btnNextQuote = document.getElementById('btnNextQuote');

  function renderQuote(index) {
    if (!quoteTextEl || !quoteSubEl) return;
    quoteTextEl.style.opacity = '0';
    quoteSubEl.style.opacity = '0';
    setTimeout(() => {
      quoteTextEl.textContent = `“${quotesList[index].content}”`;
      quoteSubEl.textContent = `— ${quotesList[index].sub}`;
      quoteTextEl.style.opacity = '1';
      quoteSubEl.style.opacity = '1';
    }, 200);
  }

  if (btnNextQuote) {
    btnNextQuote.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotesList.length;
      renderQuote(currentQuoteIndex);
    });
  }

  // 6. Quick Connect to AI assistant from buttons
  document.querySelectorAll('[data-ask-ai]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const question = el.getAttribute('data-ask-ai');
      if (window.openBrandAssistant) {
        window.openBrandAssistant(question);
      }
    });
  });
});
