const bannerTitle = document.querySelector ('.prime__title');
const bannerText = document.querySelector ('.prime__text');
const bannerButton = document.querySelector ('.prime__btn');
const burger = document.querySelector('.burger');

if (burger){
  const burgerNav = document.querySelector('.burger__nav');
  burger.addEventListener("click", function(e) { 
    document.body.classList.toggle('-lock');
    burger.classList.toggle('_active');
    burgerNav.classList.toggle('_active');
    bannerTitle.classList.toggle('-none');
    bannerText.classList.toggle('-none');
    bannerButton.classList.toggle('-none')

  });
}