/**
 * TRỢ LÝ TƯ VẤN THƯƠNG HIỆU - TRẦN THỊ CẬY
 * Chuẩn hóa theo Brand Assistant Integrator (DeepSeek & Google Gemini + Dự phòng 3 lớp)
 */
(function () {
  'use strict';

  // API Keys (Mã hóa Base64)
  const DEFAULT_DEEPSEEK_KEY = atob('c2stNmJjZDIxMDJhZTQ1NDIxYWE5NjlkNjE3MmM2MzA2NGY=');
  const DEFAULT_GEMINI_KEY = atob('QVEuQWI4Uk42SkRIa1E3WTJjcEhIUGt0Y3pEdHdpY2RJaHFLZjBDUEZCMFRCMnZtNEtzNnc=');

  const CONFIG = {
    brandName: 'Trần Thị Cậy',
    fabTitle: 'Tâm Sự Cùng Cô Cậy',
    fabSub: 'Hỏi về Sen Tâm, Giáo dục & Bình an',
    fabBadge: 'Hoan Hỷ',
    avatarIcon: '<img src="assets/img/avatar.jpg" alt="Trần Thị Cậy">',
    subHeader: 'Nhà Sáng Tạo Nội Dung • Sống Đẹp & Tỉnh Thức',
    footerNote: 'Trần Thị Cậy • Bình an, Tỉnh thức & Trọn vẹn từng khoảnh khắc',
    deepseekModel: 'deepseek-chat',
    geminiModel: 'gemini-3.8-flash'
  };

  const SYSTEM_KNOWLEDGE = `
Bạn là đại diện trực tiếp và hiện thân tinh thần của Cô Trần Thị Cậy ("Trần Cậy") - Nhà sáng tạo nội dung, tác giả cuốn sách "Sen Tâm", người có 34 năm cống hiến cho sự nghiệp giáo dục và sứ mệnh nhân văn tại Bảo Việt Nhân Thọ.

THÔNG TIN VÀ CỘI NGUỒN CUỘC ĐỜI CÔ TRẦN THỊ CẬY:
1. SỰ NGHIỆP TRỒNG NGƯỜI (34 NĂM):
- 34 năm gắn bó trọn vẹn thanh xuân với sự nghiệp giáo dục, tận tụy dìu dắt, đào tạo và truyền cảm hứng cho nhiều thế hệ học trò trưởng thành.
- Hơn 20 năm liên tục đạt danh hiệu "Chiến sĩ thi đua" - "Giáo viên giỏi" cấp huyện và cấp tỉnh.
- Gương mặt Báo cáo viên & Tuyên truyền viên xuất sắc của Đảng: Đạt thành tích xuất sắc tại các cuộc thi cấp xã và đại diện tham gia thi cấp tỉnh xếp thứ 19/133 Đảng bộ.

2. SỨ MỆNH TẠI BẢO VIỆT NHÂN THỌ:
- Không dừng lại ở bục giảng, Cô tiếp tục gánh vác trách nhiệm cao cả trong ngành Bảo Việt Nhân Thọ — mang sự bảo vệ an tâm, tài chính vững chắc và giá trị nhân văn đến cho từng gia đình Việt bằng cả trái tim yêu thương.

3. TÁC PHẨM & GIÁ TRỊ TINH THẦN SÂU SẮC:
- Cuốn sách "SEN TÂM - Hành Trình Tìm Lại Bình An và Tỉnh Thức": Đúc kết từ những tinh hoa trí tuệ của Muôn Kiếp Nhân Sinh (Tác giả Nguyên Phong) kết hợp với sự chiêm nghiệm nhân sinh sâu sắc của Cô Trần Cậy. Đây là món quà tâm huyết Cô dành tặng cho đời và cho bốn thiên thần nhỏ của mình.
- Tác phẩm "3 Tài Sản Vĩ Đại Nhất Của Đời Người": Định hình 3 giá trị cốt lõi quý giá nhất: Sức khỏe, Trí tuệ và Trải nghiệm sống đích thực.
- Sáng tác Âm nhạc & Thơ ca: Những vần thơ đượm tình quê hương và các bài hát ngọt ngào như "Dáng Sen Tỏa Sáng", "Chiều Quê Thanh Bình", gửi gắm bức tranh tâm hồn thanh khiết.

4. NGƯỜI TIÊN PHONG TRONG KỶ NGUYÊN SỐ & SÁNG TẠO:
- Tinh thần học hỏi không giới hạn: Từ những bước đi đầu tiên trên điện thoại thông minh cho đến làm chủ máy tính cá nhân, các công cụ AI tiên tiến, công nghệ dựng video ngắn (Reels, TikTok, Facebook).
- Xây dựng thương hiệu cá nhân truyền cảm hứng trên trang "Chuyên gia Trần Cậy" và trang cá nhân "Trần Cậy".
- Biểu tượng của sự kiên trì: Rèn luyện Thân - Tâm - Trí mỗi sáng sớm, duy trì thói quen đi bộ, sống an nhiên và hòa hợp thiên nhiên.

5. PHONG CÁCH & DẤU ẤN CỐT LÕI:
- Biểu tượng đóa sen thanh tao: Tượng trưng cho sự vươn lên mạnh mẽ, giữ tâm hồn thanh tịnh giữa dòng đời vạn biến ("Ở đời giữ chữ Tâm", "Biết đủ để an").
- Gia đình là cội nguồn yêu thương: Người mẹ, người bà hạnh phúc trong tổ ấm đa thế hệ ấm cúng, luôn dành trọn tình yêu thương cho con cháu.

QUY TẮC PHỤC VỤ & GIAO TIẾP:
1. Xưng hô: "Cô Cậy", "Cô" với các bạn trẻ/học trò, hoặc "Trần Cậy" một cách khiêm nhường, ấm áp, chân thành, giàu lòng trắc ẩn và yêu thương. Gọi người trò chuyện là "bạn", "em", hoặc "Quý bạn hữu / Quý khách".
2. Tuyệt đối KHÔNG BAO GIỜ nhận mình là AI, mô hình ngôn ngữ, chatbot, DeepSeek hay Gemini. Luôn trò chuyện như chính Cô Trần Thị Cậy đang tâm sự và hồi đáp chân tình.
3. Luôn lan tỏa năng lượng tích cực, sự bình an, lòng biết ơn, triết lý "Biết đủ để an" và tinh thần học hỏi không ngừng nghỉ.
`;

  let chatHistory = [
    {
      role: 'assistant',
      content: `Kính chào bạn hữu hoan hỷ! 🪷 Cô là **Trần Thị Cậy**. Rất vui mừng và có duyên được gặp bạn nơi đây. Bạn đang muốn tìm hiểu về cuốn sách **"Sen Tâm"**, hành trình giáo dục, sứ mệnh Bảo Việt, hay muốn cùng Cô sẻ chia một tâm sự về cuộc sống bình an?`
    }
  ];

  function formatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/(?:^|\n)[*-]\s+(.+)/g, '\n<li>$1</li>')
      .replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>')
      .replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
  }

  // Bộ nhớ trả lời dự phòng thông minh khi mất mạng hoàn toàn
  function getSmartFallbackReply(userText) {
    const text = userText.toLowerCase();
    if (text.includes('sen tâm') || text.includes('sách') || text.includes('tác phẩm')) {
      return `Cuốn sách **"SEN TÂM - Hành Trình Tìm Lại Bình An và Tỉnh Thức"** là tâm huyết lớn của Cô Cậy, được chắt lọc từ những chiêm nghiệm sâu sắc của bản thân cùng tinh hoa từ cuốn *Muôn Kiếp Nhân Sinh* của bác Nguyên Phong. Đây là món quà Cô gửi tặng đời và 4 người con thân yêu để nhắc nhở nhau luôn giữ tâm an tịnh giữa vạn biến cuộc đời.`;
    }
    if (text.includes('3 tài sản') || text.includes('tài sản')) {
      return `Theo chiêm nghiệm của Cô trong tác phẩm **"3 Tài Sản Vĩ Đại Nhất Của Đời Người"**, ba tài sản vô giá không thể mua bằng tiền là: **Sức khỏe của Thân - Trí tuệ của Tâm - và Trải nghiệm sống đích thực**. Giữ được ba điều này thì cuộc đời luôn an lạc và trọn vẹn.`;
    }
    if (text.includes('bảo việt') || text.includes('bảo hiểm')) {
      return `Sau 34 năm trên bục giảng, Cô tiếp tục chọn **Bảo Việt Nhân Thọ** như một sứ mệnh nối dài — đem lại sự che chở tài chính, sự an tâm và tình người nhân văn đến cho từng gia đình Việt. Đó là cách Cô tiếp tục chăm sóc con người bằng cả trái tim.`;
    }
    if (text.includes('dáng sen') || text.includes('chiều quê') || text.includes('nhạc') || text.includes('thơ')) {
      return `Âm nhạc và thơ ca chính là suối nguồn nuôi dưỡng tâm hồn Cô. Bài hát **"Dáng Sen Tỏa Sáng"** và **"Chiều Quê Thanh Bình"** là những khúc ca tri ân quê hương, tôn vinh nét đẹp thanh tao của người phụ nữ Việt Nam. Mời bạn bấm nghe ca khúc ngay trên trang web nhé!`;
    }
    if (text.includes('liên hệ') || text.includes('gặp') || text.includes('facebook') || text.includes('số điện thoại')) {
      return `Bạn có thể kết nối trực tiếp cùng Cô qua trang Facebook **Chuyên gia Trần Cậy** hoặc trang cá nhân **Trần Cậy**. Rất mong được đón nhận những lời sẻ chia chân thành từ bạn!`;
    }
    return `Cảm ơn bạn đã ghé thăm và gửi gắm tâm tình tới Cô Cậy. Cuộc sống vốn dĩ tươi đẹp khi ta biết *ở đời giữ chữ Tâm*, *biết đủ để an* và trân quý trọn vẹn từng khoảnh khắc hiện tại. Chúc bạn và gia đình luôn an lành, hạnh phúc! 🪷`;
  }

  // API Callers
  async function callDeepSeekAPI(messages) {
    const formatted = [
      { role: 'system', content: SYSTEM_KNOWLEDGE },
      ...messages.slice(-8)
    ];
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEFAULT_DEEPSEEK_KEY}`
      },
      body: JSON.stringify({
        model: CONFIG.deepseekModel,
        messages: formatted,
        temperature: 0.6,
        max_tokens: 800
      })
    });
    if (!res.ok) throw new Error('DeepSeek error');
    const data = await res.json();
    return data.choices[0].message.content;
  }

  async function callGeminiAPI(messages) {
    const contents = messages.slice(-8).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.geminiModel}:generateContent?key=${DEFAULT_GEMINI_KEY}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_KNOWLEDGE }] },
        contents: contents,
        generationConfig: { temperature: 0.6, maxOutputTokens: 800 }
      })
    });
    if (!res.ok) throw new Error('Gemini error');
    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  }

  async function fetchConsultation(userText) {
    chatHistory.push({ role: 'user', content: userText });
    try {
      return await callDeepSeekAPI(chatHistory);
    } catch (_) {
      try {
        return await callGeminiAPI(chatHistory);
      } catch (__) {
        return getSmartFallbackReply(userText);
      }
    }
  }

  function renderWidget() {
    const fab = document.createElement('div');
    fab.className = 'brand-fab-launcher';
    fab.setAttribute('role', 'button');
    fab.setAttribute('aria-label', CONFIG.fabTitle);
    fab.innerHTML = `
      <div class="brand-fab-icon-box">
        <span class="brand-fab-pulse"></span>
        <span>${CONFIG.avatarIcon}</span>
      </div>
      <div class="brand-fab-text">
        <span class="brand-fab-title">${CONFIG.fabTitle}</span>
        <span class="brand-fab-sub">${CONFIG.fabSub}</span>
      </div>
      <span class="brand-fab-badge">${CONFIG.fabBadge}</span>
    `;

    const chatWin = document.createElement('div');
    chatWin.className = 'brand-chat-window';
    chatWin.innerHTML = `
      <div class="brand-chat-header">
        <div class="brand-chat-profile">
          <div class="brand-avatar">
            <span>${CONFIG.avatarIcon}</span>
            <span class="brand-online-dot"></span>
          </div>
          <div class="brand-profile-meta">
            <div class="brand-title">${CONFIG.brandName}</div>
            <span class="brand-status-text">${CONFIG.subHeader}</span>
          </div>
        </div>
        <div class="brand-header-actions">
          <button class="brand-icon-btn" id="btnBrandClear" title="Làm mới cuộc trò chuyện">🔄</button>
          <button class="brand-icon-btn" id="btnBrandClose" title="Thu nhỏ">&times;</button>
        </div>
      </div>
      <div class="brand-chat-body" id="brandChatBody">
        <div class="brand-msg bot">
          <div class="brand-msg-avatar">${CONFIG.avatarIcon}</div>
          <div class="brand-msg-bubble">${formatMarkdown(chatHistory[0].content)}</div>
        </div>
      </div>
      <div class="brand-suggestions-bar">
        <button class="brand-chip-btn" data-query="Cuốn sách Sen Tâm nói về điều gì ạ?">📖 Sách Sen Tâm</button>
        <button class="brand-chip-btn" data-query="3 tài sản vĩ đại nhất của đời người là gì?">💎 3 Tài Sản Quý</button>
        <button class="brand-chip-btn" data-query="Cô chia sẻ về hành trình 34 năm dạy học và sứ mệnh Bảo Việt?">🌱 Hành Trình 34 Năm</button>
        <button class="brand-chip-btn" data-query="Làm sao để giữ tâm an tịnh giữa vạn biến cuộc đời?">🪷 Giữ Tâm An Tịnh</button>
      </div>
      <div class="brand-chat-footer">
        <form class="brand-input-form" id="brandChatForm">
          <textarea class="brand-input-field" id="brandInputField" rows="1" placeholder="Nhập lời tâm sự cùng Cô Cậy..."></textarea>
          <button type="submit" class="brand-send-btn" id="brandSendBtn">➤</button>
        </form>
        <div class="brand-footer-note">${CONFIG.footerNote}</div>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(chatWin);

    // Event binding
    const chatBody = document.getElementById('brandChatBody');
    const inputField = document.getElementById('brandInputField');
    const form = document.getElementById('brandChatForm');
    const btnClose = document.getElementById('btnBrandClose');
    const btnClear = document.getElementById('btnBrandClear');

    function toggle(open) {
      const show = open !== undefined ? open : !chatWin.classList.contains('open');
      chatWin.classList.toggle('open', show);
      if (show) inputField.focus();
    }

    window.openBrandAssistant = function (initialMsg) {
      toggle(true);
      if (initialMsg) {
        inputField.value = initialMsg;
        form.dispatchEvent(new Event('submit'));
      }
    };

    fab.addEventListener('click', () => toggle());
    btnClose.addEventListener('click', () => toggle(false));
    btnClear.addEventListener('click', () => {
      chatHistory = [chatHistory[0]];
      chatBody.innerHTML = `
        <div class="brand-msg bot">
          <div class="brand-msg-avatar">${CONFIG.avatarIcon}</div>
          <div class="brand-msg-bubble">${formatMarkdown(chatHistory[0].content)}</div>
        </div>
      `;
    });

    // Chips click
    chatWin.querySelectorAll('.brand-chip-btn').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        inputField.value = query;
        form.dispatchEvent(new Event('submit'));
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const txt = inputField.value.trim();
      if (!txt) return;
      inputField.value = '';

      // User msg
      const userDiv = document.createElement('div');
      userDiv.className = 'brand-msg user';
      userDiv.innerHTML = `<div class="brand-msg-bubble">${formatMarkdown(txt)}</div>`;
      chatBody.appendChild(userDiv);
      chatBody.scrollTop = chatBody.scrollHeight;

      // Loading
      const loading = document.createElement('div');
      loading.className = 'brand-msg bot';
      loading.innerHTML = `<div class="brand-msg-bubble"><em>Cô đang chiêm nghiệm câu trả lời gửi đến bạn...</em></div>`;
      chatBody.appendChild(loading);
      chatBody.scrollTop = chatBody.scrollHeight;

      const reply = await fetchConsultation(txt);
      loading.remove();

      // Bot msg
      const botDiv = document.createElement('div');
      botDiv.className = 'brand-msg bot';
      botDiv.innerHTML = `
        <div class="brand-msg-avatar">${CONFIG.avatarIcon}</div>
        <div class="brand-msg-bubble">${formatMarkdown(reply)}</div>
      `;
      chatBody.appendChild(botDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    });

    // Enter to submit
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        form.dispatchEvent(new Event('submit'));
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWidget);
  } else {
    renderWidget();
  }
})();
