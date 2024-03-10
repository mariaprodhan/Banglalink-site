$(function(){
     
    //  nav start
 $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 50){
        $(".menu-bg").addClass("bg")
    }else{
        $(".menu-bg").removeClass("bg")
    }

 })

 $(".nav-icon .oneee").click(function(){
    $(".inputtt").toggleClass("addmnav")
})

// img part start


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);




// img part end










 // back1top start

 $(".back2top i").click(function(){
    $('html,body').animate({
        scrollTop:0,
    })
})


// garally start


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

// garally end




      // color switcher
     $(".switch").click(function () {
     $(".color-switcher").toggleClass("slide")
    })
     $(".dark").click(function () {
    $(".style").attr("href", "css/dark.css")
    $(".style-responsive").attr("href", "css/responsive.css")
    })
     $(".red").click(function () {
      $(".style").attr("href", "css/red.css")
      $(".style-responsive").attr("href", "css/responsive.css")
     })
    $(".green").click(function () {
    $(".style").attr("href", "css/green.css")
    $(".style-responsive").attr("href", "css/ responsive.css")
     })

    //   silder part
        
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item00')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item00')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})



    


    // loading start

    $(window).on("load",function(){
        $(".loading").delay(1000).fadeOut(500);
    })

    new WOW().init();
    
    // banner start
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 50){
            $(".menu").addClass("bg")
        }else{
            $(".menu").removeClass("bg")
        }
        if(scrolling > 50){
            $(".back2top i").fadeIn(1000)
        }else{
            $(".back2top i").fadeOut(1000)
        }
    })

     // back1top start

     $(".back2top i").click(function(){
        $('html,body').animate({
            scrollTop:0,
        })
    })






    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        prevArrow:".next",
        nextArrow:".prve",
        autoplay: true,
    });
    
    $(".nav-icon .oneee").click(function(){
        $(".inputtt").toggleClass("addmnav")
    })
    // banner end


    // explore start

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1200,
    delay: 400
});


ScrollReveal().reveal('.ser_text');
ScrollReveal().reveal('.tagline', { delay: 600, origin:'left' });
ScrollReveal().reveal('.punchline', { delay: 600, origin:'bottom' });


ScrollReveal().reveal('.ser-item1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.ser-item3', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.ser-item2', { delay: 600, origin:'right' });


ScrollReveal().reveal('.item2', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.item3', { delay: 600, origin:'left' });
ScrollReveal().reveal('.item1', { delay: 600, origin:'top' });
ScrollReveal().reveal('.item4', { delay: 600, origin:'right' });

ScrollReveal().reveal('.tower-text', { delay: 600, origin:'top' });
ScrollReveal().reveal('.tower-button1', { delay: 900, origin:'left' });
ScrollReveal().reveal('.tower-button2', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.tower-button3', { delay: 600, origin:'right' });

ScrollReveal().reveal('.more-about-main1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.more-about-main2', { delay: 600, origin:'right' });

ScrollReveal().reveal('.career-head', { delay: 600, origin:'top' });
ScrollReveal().reveal('.career-img', { delay: 600, origin:'bottom' });

ScrollReveal().reveal('.memory-item1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.memory-item2', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.memory-item3', { delay: 600, origin:'top' });
ScrollReveal().reveal('.memory-item4', { delay: 600, origin:'right' });

ScrollReveal().reveal('.business-text', { delay: 600, origin:'right' });
ScrollReveal().reveal('.business-img', { delay: 600, origin:'left' })

ScrollReveal().reveal('.icon-inner1', { delay: 600, origin:'right' });
ScrollReveal().reveal('.icon-inner2', { delay: 600, origin:'top' });
ScrollReveal().reveal('.icon-inner3', { delay: 600, origin:'left' });

ScrollReveal().reveal('.phone-img1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.phone-inner1', { delay: 600, origin:'right' });

ScrollReveal().reveal('.forw-text', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.forw-img-main', { delay: 600, origin:'top' });


ScrollReveal().reveal('.career-logo', { delay: 600, origin:'top' });


ScrollReveal().reveal('.award-text', { delay: 600, origin:'left' });
ScrollReveal().reveal('.award-img', { delay: 600, origin:'right' });

ScrollReveal().reveal('.award-img', { delay: 600, origin:'right' });
ScrollReveal().reveal('.award-img', { delay: 600, origin:'right' });
ScrollReveal().reveal('.award-img', { delay: 600, origin:'right' });


// explore end

    // brand-slider start
$(".brand-slider").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
    ]
});

    
})
// brand-slider end


// testimonial part slider
$(".img-slider").slick({
    slidesToShow: 3,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    asNavFor: ".details-slider",
    focusOnSelect: true,
    prevArrow: '<i class="fas fa-angle-up prev"></i>',
    nextArrow: '<i class="fas fa-angle-down next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  
  $(".details-slider").slick({
    arrows: false,
    asNavFor: ".img-slider",
    fade: true,
    focusOnSelect: true,
  })


// video part start

  $(".brand-slider1").slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
     vertical: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
    ]
});

    
// venobox start
$('.venobox').venobox();







