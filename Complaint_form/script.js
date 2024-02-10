document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('form button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // التحقق من صحة البريد الإلكتروني
        const emailInput = document.getElementById('email');
        if (!validateEmail(emailInput.value)) {
            showMessage('البريد الإلكتروني غير صحيح!', 'error');
            return;
        }

        // التحقق من الموافقة على شروط الخدمة
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            showMessage('يجب الموافقة على شروط الخدمة!', 'error');
            return;
        }

        // يمكن إضافة تحقق إضافي هنا

        // رسالة تأكيد 
        showMessage('تم إرسال الشكوى بنجاح!', 'success');
    });

    //  لتحقق من صحة البريد الإلكتروني
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    //  لعرض رسائل التأكيد  
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.innerHTML = `<p>${message}</p>`;
        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
});
submitButton.addEventListener('click', function () {
    submitButton.classList.add('active');
});

submitButton.addEventListener('mouseleave', function () {
    submitButton.classList.remove('active');
});
