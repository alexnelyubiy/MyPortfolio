$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				$.magnificPopup.close();
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});
  //works
  $(".img_wrk1").mouseenter(function(){
      $(".btn-project1").show();
    });
   $(".btn-project1").mouseleave(function(){
      $(".btn-project1").hide();
    });
  
  $(".img_wrk2").mouseenter(function(){
        $(".btn-project2").show();
    });
  $(".btn-project2").mouseleave(function(){
      $(".btn-project2").hide();
    });
  

  $(".img_wrk3").mouseenter(function(){
        $(".btn-project3").show();
    });
  $(".btn-project3").mouseleave(function(){
      $(".btn-project3").hide();
    });
  

  $(".img_wrk4").mouseenter(function(){
        $(".btn-project4").show();
    });
  $(".btn-project4").mouseleave(function(){
      $(".btn-project4").hide();
    });
  

  $(".img_wrk5").mouseenter(function(){
        $(".btn-project5").show();
    });
  $(".btn-project5").mouseleave(function(){
      $(".btn-project5").hide();
    });
  

  $(".img_wrk6").mouseenter(function(){
        $(".btn-project6").show();
    });
  $(".btn-project6").mouseleave(function(){
      $(".btn-project6").hide();
    });
  

//Slick
	$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	//magnific-popup
	$('.popup').magnificPopup();
});



