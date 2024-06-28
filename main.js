// document.addEventListener("DOMContentLoaded", () => {
//   // Simulate an API request or any async operation
//   setTimeout(() => {
//       hideLoader();
      
//   }); // Replace with your actual data loading logic and time

//   function hideLoader() {
//       const loader = document.getElementById("loading");
//       loader.style.display = "none";
//   }


// });

// var loader = document.getElementById("loading");

// window.addEventListener("load", function(){
//   loader.style.display = "none";
// })

$('html, body').css({
  'overflow': 'hidden',
  'height': '100%'
})

$(window).on("load",function(){
  $("#loading").fadeOut("slow"),
  $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
  })
  ;
});


  $(function(){
    $('.hamburger').click(function(){
        $('.navbar').toggleClass('navbar-open');
        $('.hamburger').toggleClass('menu-opened');
        $(this).toggleClass("is-active");
    });

    $('.hamburger').click(function(){
        $('.navbar').toggleClass('--open');
        $('.hamburger').toggleClass('menu-opened');
    });

    $('.navbar').click(function(){
      $('.navbar').removeClass('--open');
      $('.hamburger').removeClass('menu-opened');
      $('.hamburger').removeClass('is-active');
  });
});



$('.navbar .accordion').click(function(e) {
  e.preventDefault();
  $('.navbar .panel').slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation();
});


$('.educationaccordion').click(function(e) {
  e.preventDefault();
  $('.educationtext').slideToggle('medium'),
  $(this).toggleClass('opened') 
  e.stopPropagation();
});


// $('.educationaccordion').click(function(){
//   $('.educationtext').slideToggle('slow');
// });



gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

var videos = document.getElementsByClassName("autoplay");

function checkScroll() {
    var fraction = 0.1; // Play when 10% of the player is visible.

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);



$(document).ready(function () {

gsap.set("#landinglogo", {opacity:0, scale: 0.8})
gsap.set(".homelinks", {opacity:0})
gsap.set("#homemenu", {opacity:0})
gsap.set("#heading", {opacity:0})

var colors = new Array(
  
  [30,30,30],

  [60,60,60],
  [90,90,90],
  [120,120,120],
  [100,100,100],
  [0,0,0]

  );

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = .015;

function updateGradient()
{
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#gradient').css({
   
   
   background: "-webkit-radial-gradient(center, circle cover, "+color1+","+color2+")"});
    
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,30);


function scene1() {
  let landingtl = gsap.timeline({
 
    defaults: { clearProps: true } 
   });

 
landingtl.to("#landinglogo", 2, {scale: 1})
  .to("#landinglogo", 3, {opacity: 1}, "<")
  
  .to(".homelinks", 2, {
    opacity:1
   })
   .to("#homemenu", 2, {opacity:1}, "<");
  return landingtl;
}

let linkonetl = gsap.timeline();
function scene2() {
  
  linkonetl.to("#homelink", {
    keyframes: {
     "0%":   {opacity: 1},
     "55%":  {opacity: 0.5},
     "55%":  {opacity: 0.5},  // finetune with individual eases
     "100%": {opacity: 1},
      easeEach: 'power3.inOut' // ease between keyframes
    },
    ease: 'none', // ease the entire keyframe block
    duration: 1.5,
    repeat: -1,

   });
  return linkonetl;
}

let linktwotl = gsap.timeline();
function scene3() {
  
  linktwotl.to("#homelinktwo", {
    keyframes: {
     "0%":   {opacity: 1},
     "55%":  {opacity: 0.5},
     "55%":  {opacity: 0.5},  // finetune with individual eases
     "100%": {opacity: 1},
      easeEach: 'power3.inOut' // ease between keyframes
    },
    ease: 'none', // ease the entire keyframe block
    duration: 1.5,
    repeat: -1,

   });
  return linktwotl;
}

if ($("body").hasClass("home")) { 
let master = gsap.timeline()
  .add(scene1())
  .add(scene2()) // overlap slightly
  .add(scene3(), "<")
 

  $(".home").on("click", function(){

    master.progress(.8);
   
    
  });

  let linkone = document.querySelector("#homelink");
  let linktwo = document.querySelector("#homelinktwo");
 
  
  linkone.addEventListener("mouseenter", () => linkonetl.pause(0));
  linkone.addEventListener("mouseleave", () => linkonetl.restart(), linktwotl.restart());
  linktwo.addEventListener("mouseenter", () => linktwotl.pause(0));
  linktwo.addEventListener("mouseleave", () => linktwotl.restart(), linkonetl.restart());





}



});

const parent = document.querySelectorAll('.content img, .content video')

const fadeups = gsap.utils.toArray(parent);

fadeups.forEach((fadeup, i) => {
  const anim = gsap.fromTo(fadeup, {opacity: 0, y:150}, {duration: .5, opacity: 1, y: 0});
  ScrollTrigger.create({
    trigger: fadeup,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});


// E X P A N D panel ************************************************************************************************************************************************
$(document).ready(function () {
  openExpand('.expand-open');
  closeExpand('.expand-hide');
  expand('.expand-trigger');

 
});

function expand(i) {
  $(i).unbind('click');

  $(i).click(function () {

      // $('.expand-content').filter(':visible').slideUp();
      var header = $(this);
      //getting the next element
      var $content = header.prevAll('.expand-content');

      $content.slideToggle(300, function () {
          header.text(function () {
              return $content.is(":visible") ? "See Less" : "See More";
          });
      });
$(this).find("span").toggleClass('expanded');
  header.toggleClass('expanded');
     
  });

  
}

function openExpand(i) {
  $(i).unbind('click');

  $(i).click(function () {

      var header = $(this);
      //getting the next element
      var $content = header.next();

      $content.filter(':hidden').slideDown();

      $(i).toggleClass('expanded');
  });
}

function closeExpand(i) {
  $(i).unbind('click');
  $(i).click(function () {
      $('.expand-content').filter(':visible').slideUp();
  });
}


