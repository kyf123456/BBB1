$(function () {
    topSwiper();
    mustBuySwiper();
});

function topSwiper() {
    var swiper =new Swiper("#topSwiper", {
        direction: "horizontal",
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect:'cube',
        autoplay: 3000,
        autoplayDisableOnInteraction: false

    })
}

function mustBuySwiper() {
    var swiper = new Swiper('#swiperMenu', {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 5,
        loop: false,
    });
};