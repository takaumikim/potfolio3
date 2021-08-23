'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}

{
$('.slider').slick({
  autoplay:true, // 自動再生を設定
  autoplaySpeed:5000, // スライド切り替えの時間を設定
  dots:true, // インジケーターを表示
  arrows:true,
  pauseOnHover:false
});
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 550);
});