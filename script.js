document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FAQ 手風琴效果 (點擊展開/收合)
    const faqs = document.querySelectorAll('.faq');
    
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            // 如果希望一次只展開一個，請取消下面這行的註解：
            // document.querySelector('.faq.open')?.classList.remove('open');
            faq.classList.toggle('open');
            
            // 旋轉箭頭圖示
            const icon = faq.querySelector('.fa-chevron-down');
            if(icon) {
                if (faq.classList.contains('open')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
                icon.style.transition = '0.3s';
            }
        });
    });

    // 2. 表單送出模擬
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 防止頁面重新整理
            
            // 可以在這裡加入抓取表單資料的邏輯
            
            alert('【系統通知】\n\n感謝您的預約！\n慈光老師助理會盡快與您聯繫安排時間。');
            bookingForm.reset(); // 清空表單
        });
    }

    // 3. 平滑捲動 (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
