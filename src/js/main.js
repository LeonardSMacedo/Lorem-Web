$(document).ready(function () {
  $(".bannerTopo .bannerContainer").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

  $(".btnlogin").on("click", function (){
  let login = $(".formLogin")
  let cadastro = $(".formCad")

  login.css("display", "block")
  cadastro.css("display", "none")
});

$(".btncad").on("click", function (){
  let login = $(".formLogin")
  let cadastro = $(".formCad")

  login.css("display", "none")
  cadastro.css("display", "block")
});

});


