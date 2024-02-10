// تحديد العناصر
const animatedText = document.querySelector('.animated-text');

// إضافة تأثير Scroll Trigger
gsap.registerPlugin(ScrollTrigger);
gsap.to(animatedText, {
    scrollTrigger: {
        trigger: animatedText,
        start: 'top 80%', // تحديد بداية التأثير عندما يكون النص على بعد 80% من الأعلى
        end: 'bottom 20%', // تحديد نهاية التأثير عندما يكون النص على بعد 20% من الأسفل
        toggleActions: 'play none none reverse', // تشغيل التأثير عند التمرير لأعلى وعكسه عند التمرير لأسفل
    },
    opacity: 1, // إعطاء قيمة الشفافية 1 لعرض النص بشكل كامل
    y: 0, // لا يوجد تحريك للنص عمودياً
    duration: 1.5 // مدة التأثير
});