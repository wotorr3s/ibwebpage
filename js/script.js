// var vmax = Math.max(window.innerWidth, window.innerHeight) / 100;
// var vmin = Math.min(window.innerWidth, window.innerHeight) / 100;
// console.log(vmin);
// window.addEventListener('resize', function() {
//     vmax = Math.max(window.innerWidth, window.innerHeight) / 100;
//     // update any styles that depend on vmax...
// });
// var left=document.getElementById("left-menu");
// var was=false;
// window.onscroll=function() {
//     var scrollHeight = window.scrollY;
//     var targetHeight = 70*vmin; // replace with your target height
//     if (scrollHeight > targetHeight) {
//         left.style.animation="slide-in 0.2s forwards";
//         was=true;
//     }
//     if (scrollHeight < targetHeight && was==true) {
//         left.style.animation="slide-out 0.2s forwards";
//     }
// };
// left.onmouseover=function(){
//     document.getElementById("text1").style.animation="show-text 1s forwards";
// }
// left.onmouseleave=function(){
//     document.getElementById("text1").style.animation="show-text 0.5s backwards";
// }
// window.addEventListener('scroll', function() {
//     var menu = document.querySelector('.slide-in-menu');
//     if (window.pageYOffset > 100) { // change 100 to the point you want
//         menu.classList.add('slide-left');
//     } else {
//         menu.classList.remove('slide-left');
//     }
// });

// var home = document.querySelector('.home')
// var value=0;
// setTimeout((value) => {
//     home.style.setProperty('--stroke-dashoffset', value+1)
//     value++;
// }, 1000);