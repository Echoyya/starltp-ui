<template>
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
            <div
                v-for="(banner,index) in banners"
                :key="index"
                class="swiper-slide"
                :style="{ backgroundImage: 'url(' + banner.url + ')' }"
            ></div>
        </div>
        <div class="swiper-button-prev">
            <span></span>
        </div>
        <div class="swiper-button-next">
            <span></span>
        </div>
        <ul class="swiper-pagination"></ul>
    </div>
</template>
<script>
export default {
    props: ['banners'],
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                effect: 'fade',
                loop: true,
                speed: 2000,
                runCallbacksOnInit: false,
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet(index, className) {
                        return '<li class="' + className + '"><span><i></i></span></li>'
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted() {
        // this.mySwiper.start
    }
}
</script>
<style lang="less">
.swiper-container {
    width: 100%;
    height: 500px;
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .swiper-button-next,
    .swiper-button-prev {
        width: 15%;
        height: 100%;
        top: 0;
        background: none;
    }
    .swiper-button-prev {
        left: 0;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-next span,
    .swiper-button-prev span {
        display: block;
        width: 64px;
        height: 64px;
        position: absolute;
        left: 20px;
        top: 50%;
        margin-top: -32px;
        border-radius: 100%;
        background: rgba(180, 180, 180, 0.25) url('~static/arrows.png') no-repeat center 17px;
        opacity: 0;
        -webkit-transition: opacity 0.5s ease;
        transition: opacity 0.5s ease;
    }
    .swiper-button-next span {
        background: rgba(180, 180, 180, 0.25) url('~static/arrows.png') no-repeat center -71px;
        left: auto;
        right: 20px;
    }
    .swiper-button-next:hover span,
    .swiper-button-prev:hover span {
        opacity: 0.6;
    }
    .swiper-pagination-bullet {
        width: 0.833rem;
        height: 0.833rem;
        display: inline-block;
        background: #7c5e53;
    }
    .swiper-pagination {
        top: auto;
        bottom: 0;
        background: none;
    }
    .swiper-pagination-bullet {
        display: inline-block;
        width: 50px;
        height: 30px;
        margin: 0 3px;
        cursor: pointer;
        background: none;
        border-radius: 0;
        opacity: 1;
    }
    .swiper-pagination-bullet span {
        width: 50px;
        height: 2px;
        display: block;
        background: rgba(128, 128, 128, 0.25);
    }
    .swiper-pagination-bullet-active span {
        background: #3c4860;
    }
    .swiper-pagination-bullet i {
        height: 2px;
        transform: scaleX(0);
        transform-origin: 0;
        display: block;
    }
}
</style>
