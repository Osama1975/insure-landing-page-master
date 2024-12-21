const humburgerMenu = document.querySelector(".humburger");
const xmark = document.querySelector(".x-mark");
const bars = document.querySelector(".bars");
const listItem = document.querySelector("#navbar nav ul");

humburgerMenu.addEventListener("click", function () {
  xmark.classList.toggle("active"); //يضيف كلاس اكتيف الى الكلاس الرئيسي في حاله عدم وجود كلاس اكتيف ويعمل العكس ايضا حيث يحذف الكلاس اكتيف في حاله وجوده مع الكلاس الاصلي
  bars.classList.toggle("active");
  listItem.classList.toggle("active");
});
