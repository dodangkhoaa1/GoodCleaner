var smallScreenWidth = 768;
function adjustParentHeight(parentId, childImageId, childContentId, topPercent) {
  //set relative parent's height equal sum absolute child's height 
  var parent = document.getElementById(parentId);
  var childImage = document.getElementById(childImageId);
  var childContent = document.getElementById(childContentId);
  if (window.innerWidth <= smallScreenWidth) {
    //when at a small screen
    parent.style.height = childImage.offsetHeight * topPercent / 100
      //because childContent have "top: 'topPercent'%" so it lost 'topPercent' height
      + childContent.offsetHeight + 'px';
  }
}
function adjustRelativeHeight() {
  adjustParentHeight("boxSection1", "imageSection1", "contentSection1", 80);
  adjustParentHeight("boxSection2", "imageSection2", "contentSection2", 37);
}
//adjust relative parent height equal sum absolute child's height when content loaded
window.addEventListener('DOMContentLoaded', adjustRelativeHeight);
//adjust relative parent height equal sum absolute child's height when window size changed
window.addEventListener('resize', adjustRelativeHeight);

//click title to open details
var toggleDetail = document.querySelectorAll(".toggleServiceDetail");
toggleDetail.forEach(function (element) {
  element.addEventListener("click", () => {
    var detail = element.querySelector(".serviceDetail"); //get sevice element
    detail.classList.toggle("hidden"); //show/hide detail of service
    adjustRelativeHeight(); //resize height of main
  });
});

var seeDetail = document.querySelectorAll(".seeDetail");
//link at footer
seeDetail.forEach(function (element) {
  element.addEventListener('click', () => {
    var hrefValue = element.getAttribute("href"); //get value of href=""
    var match = hrefValue.match(/\d+/); //get number in href
    var number = match[0]; //get the first number
    var service = document.getElementById("service" + number); //get service with id
    var detailService = service.querySelector(".serviceDetail"); //get detail of above service
    detailService.classList.remove("hidden"); //show detail of service
    adjustRelativeHeight(); //resize height of main
  });
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle("sm:hidden");
}

// toggle mobile menu 
var hamburgerButton = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobile-menu");
hamburgerButton.addEventListener("click", toggleMobileMenu);

//close mobile menu
var closeMobileMenu = document.querySelectorAll(".closeMobileMenu");
closeMobileMenu.forEach(function (element) { 
  element.addEventListener('click',toggleMobileMenu); 
});