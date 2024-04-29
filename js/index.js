

$('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 1500,
    autoplay: true,
});



$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

document.querySelector('.lan').addEventListener('click', function () {
    var lan_drop = document.querySelector('.lan_drop');
    if (lan_drop.style.display === 'none') {
        lan_drop.style.display = 'block';
    } else {
        lan_drop.style.display = 'none';
    }
});
AOS.init();

document.querySelectorAll('.header_menu>li')[0].addEventListener('mouseover', function () {
    document.querySelector('.header_drop_menu').style.display = 'block'
})

document.querySelectorAll('.header_menu>li')[0].addEventListener('mouseout', function () {
    document.querySelector('.header_drop_menu').style.display = 'none'
})
document.querySelectorAll('.header_menu>li')[1].addEventListener('mouseover', function () {
    document.querySelector('.header_drop_menu_01').style.display = 'block'
})

document.querySelectorAll('.header_menu>li')[1].addEventListener('mouseout', function () {
    document.querySelector('.header_drop_menu_01').style.display = 'none'
})

document.querySelectorAll('.header_menu>li')[2].addEventListener('mouseover', function () {
    document.querySelector('.header_drop_menu_02').style.display = 'block'
})

document.querySelectorAll('.header_menu>li')[2].addEventListener('mouseout', function () {
    document.querySelector('.header_drop_menu_02').style.display = 'none'
})
document.querySelectorAll('.header_menu>li')[3].addEventListener('mouseover', function () {
    document.querySelector('.header_drop_menu_03').style.display = 'block'
})

document.querySelectorAll('.header_menu>li')[3].addEventListener('mouseout', function () {
    document.querySelector('.header_drop_menu_03').style.display = 'none'
})



// 요소들을 선택합니다.
const titles = document.querySelectorAll('.brand_section_title > p');
const imgSections = document.querySelectorAll('div[class^="brand_section_img"]');

// 각 타이틀에 대한 이벤트 리스너를 추가합니다.
titles.forEach((title, index) => {
    title.addEventListener('click', function () {
        // 모든 이미지 섹션을 숨깁니다.
        imgSections.forEach(section => {
            section.style.display = 'none';
        });

        // 클릭된 타이틀에 해당하는 이미지 섹션만 표시합니다.
        imgSections[index].style.display = 'block';
    });
});