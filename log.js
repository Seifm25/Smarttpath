const contain = document.querySelector('.contain');
const registerr = document.querySelector('.registerr');
const loginn = document.querySelector('.loginn');
registerr.onclick = () => {
    contain.classList.add('active');
}
loginn.onclick = () => {
    contain.classList.remove('active');
}



const loginForm = document.querySelector('.form.login form');
const loginBtn = loginForm.querySelector('.btn');

loginForm.onsubmit = (event) => {
    event.preventDefault(); // منع الصفحة من التحديث

    // 1. تغيير شكل الزرار أثناء الإرسال
    loginBtn.innerText = "Sending...";
    loginBtn.style.opacity = "0.7";
    loginBtn.style.pointerEvents = "none";

    // 2. محاكاة وقت الإرسال (انتظار ثانيتين)
    setTimeout(() => {
        // رجوع الزرار لوضعه الطبيعي
        loginBtn.innerText = "Login";
        loginBtn.style.opacity = "1";
        loginBtn.style.pointerEvents = "auto";

        // 3. إظهار رسالة النجاح المنبثقة
        showSuccessAlert();
        
        // 4. السطر السحري لمسح كل البيانات وتصفير الحقول فوراً الحين 🎉
        loginForm.reset();

    }, 2000); 
}

// دالة مخصصة لإنشاء رسالة نجاح متحركة وشيك جداً في الشاشة
function showSuccessAlert() {
    const alertBox = document.createElement('div');
    alertBox.className = 'success-alert';
    alertBox.innerHTML = `
        <div class="alert-content">
            <i class="bx bx-check-circle"></i>
            <h3>Success!</h3>
            <p>Your data has been sent securely.</p>
        </div>
    `;
    document.body.appendChild(alertBox);

    // حذف الرسالة تلقائياً بعد 3 ثواني
    setTimeout(() => {
        alertBox.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => alertBox.remove(), 500);
    }, 3000);
}
