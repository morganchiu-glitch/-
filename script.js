document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 手機版選單切換
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 2. 點擊選單連結後自動收起
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. FAQ 手風琴效果
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // 4. 表單送出處理 (這裡模擬送出)
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 防止頁面刷新
        
        // 抓取一些資料來顯示感謝訊息 (模擬)
        const name = bookingForm.querySelector('input[type="text"]').value;
        
        // 實際應用時，這裡通常會串接後端 API 或 Email 服務 (如 Formspree)
        alert(`感謝您，${name}！\n\n慈光老師已收到您的預約申請。\n助理將會在 24 小時內與您聯繫安排時間。`);
        
        bookingForm.reset();
    });
    
    // 5. 平滑捲動 (相容舊瀏覽器)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
