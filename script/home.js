// owl carousel for world news article


$('.world_news_content').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        768: {
            items:2
        },
        990:{
            autoplay: false,
        },
        1050:{
            items:3,
            autoplay: false
        },
        1200:{
            items:4,
            autoplay: false
        }
    }
})



// menu responsive phone toggle class * active * for opening it


const open_menu_phone = document.querySelector('.open_menu .open_menu_content');
const menu_responsive = document.querySelector('.menu_responsive');

function reset_menu_responsive(){
     menu_responsive.style.visibility="visible";
     return function(){
        menu_responsive.style.visibility="hidden";
     }
}

open_menu_phone.addEventListener('click', function(){
       if(document.querySelector('.menu_responsive_content').classList.contains('active')){
             document.querySelector('.menu_responsive_content').classList.remove('active');
             reset_menu_responsive()();
       }
       else {
        document.querySelector('.menu_responsive_content').classList.add('active');
        reset_menu_responsive();
       }
});

window.addEventListener('click' , function(e){
      if (e.target == menu_responsive){
         reset_menu_responsive()();
         document.querySelector('.menu_responsive_content').classList.remove('active');
      }
})

// menu responsive tablet toggle class * active * for opening it

const open_menu_tablet = document.querySelector('.click_menu');
open_menu_tablet.addEventListener('click',function(){
    if(document.querySelector('.menu_web').classList.contains('active')){
        document.querySelector('.menu_web').classList.remove('active');
    }
    else {
        document.querySelector('.menu_web').classList.add('active');
        reset();
    }
});

// search box toggle class * active * for showing it

const search_menu = document.querySelector('.search_btn');
search_menu.addEventListener('click',function(){
    if(document.querySelector('.search_menu').classList.contains('active')){
         document.querySelector('.search_menu').classList.remove('active');
    }
    else {
        document.querySelector('.search_menu').classList.add('active');
    }
});

// if the search box is open , it will be removed when the menu responsive tablet is open

function reset(){
    document.querySelector('.search_menu').classList.remove('active');
}


// news category toggle class * active * for the opening


const news_category_click = document.querySelector('.news_category .show_news_category');
const news_category = document.querySelector('.news_category');
function show_news_category(){
    news_category_click.textContent = "Show";
    news_category_click.classList.remove('active');
    news_category_click.classList.add('left_ar');
    news_category_click.classList.remove('right_ar');
    
    return function(){
        news_category_click.textContent = "Hide";
        news_category_click.classList.add('active');
        news_category_click.classList.add('right_ar');
        news_category_click.classList.remove('left_ar');
    }
}
news_category_click.addEventListener('click',function(){
    if(news_category.classList.contains('active')){
         news_category.classList.remove('active');
        show_news_category();
         
    }
    else {
         news_category.classList.add('active');
         show_news_category()();
    }
});

// when the page gets load, it will open the news category and close it after 1.5 seconds

window.addEventListener('load', function(){
    news_category.classList.add('active');
    show_news_category()();
    this.setTimeout(function(){

          news_category.classList.remove('active'); 
          show_news_category();  
      },1500);
});


// scroll top btn instructions

const scroll_top_btn = document.querySelector('.go_top');
const sub_container = document.querySelector('.subscribe_container');
const body_tag = document.querySelector('body');


function scroll_top() {
    if(window.scrollY < document.querySelector('main').scrollHeight * 3){
        scroll_top_btn.classList.add('fade_out');
      }
      else {
        scroll_top_btn.classList.remove('fade_out');
        scroll_top_btn.style.transition=".5s";
      }
}
scroll_top()

window.addEventListener('scroll', ()=> {

    scroll_top()
    event_fade_in()
    article_slide_top();
      
});

// adjust the height of menu responsive phone

function adjust_height_menu_responsive(){

    if (document.documentElement.clientHeight < 710){
        document.querySelector('.menu_responsive_content').classList.add('height_adjust');
    }
    else {
    document.querySelector('.menu_responsive_content').classList.remove('height_adjust');
    }
}
adjust_height_menu_responsive()


// event article fade in on scroll

const event_article = document.querySelectorAll('.event_article');
const animation = 'fade_in';

function event_fade_in() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) /4;
    event_article.forEach(function(article){
           if(windowTop > article.offsetTop){
                 article.classList.add(animation);
           }
           else {
                 article.classList.remove(animation);
           }
    })
}
event_fade_in()


// event container background images changes after 5 seconds


const event_container = document.querySelector('.event_container');

const images_events = ['events_1.jpg', 'events_2.jpg', 'events_3.jpg','events_4.jpg'];

var x = 0;

setInterval(event_slider, 7000);

function event_slider(){
    if(x < images_events.length) {
        x = x + 1;
    }
      else {
         x = 1;
    }
    event_container.style.backgroundImage= 'url(images/home/'+ images_events[x - 1] +' )';
}

// owl carousel let's share categories

$('.category_container_content').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        450: {
            items:2
        },
        600: {
            items:3
        },
        1050:{
            items: 4
        },
        1200: {
            items: 5
        },
        1367: {
            items: 6
        },
        1550:{
            items: 8,
            loop:false
        }
    }
})


// prevent a click behaviour

var link = document.querySelectorAll('a[href="#"]');


link.forEach(function(a){
     a.addEventListener('click', (e) => {
                e.preventDefault();
     });
});


const article_anim = document.querySelectorAll('article[class$='+'_animation'+']');

function article_slide_top(){
    
    article_anim.forEach(function(article){
       
    if(window.pageYOffset + (window.innerHeight * 3) / 4 > article.offsetTop){
        article.classList.add('active')
    }
    else {
        article.classList.remove('active')

    }
   })
}

article_slide_top();




