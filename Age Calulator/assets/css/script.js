let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
let button= document.getElementById("button")

function calculateAge() {
    let birthDate = new Date(userinput.value);

    // بررسی تاریخ معتبر
    if (isNaN(birthDate.getTime())) {
        console.log("تاریخ وارد شده معتبر نیست.");
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // ماه‌ها از 0 شروع می‌شوند
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // ماه‌ها از 0 شروع می‌شوند
    let y2 = today.getFullYear();

    let d3, m3, y3;

    // محاسبه تفاوت سال
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // اگر ماه جاری کمتر از ماه تولد باشد
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // اگر روز جاری کمتر از روز تولد باشد
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
        if (m3 < 0) { // اگر ماه منفی شد
            m3 = 11;
            y3--;
        }
    }

    // 
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); 
}



button.addEventListener("click",calculateAge)
