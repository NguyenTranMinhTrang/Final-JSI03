import ClassView from './ClassView.js'

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("HomeView");
    }

    async getHtml() {
        return `
        <div class="home-all">

        <!-- Navbar -->

        <div class="home-navbar">
            <img class="home-logo" src="https://www.pngitem.com/pimgs/m/257-2575276_christmas-logos-merry-christmas-logo-png-transparent-png.png" alt="">
            <div class="home-middle">
                <a href="">Home</a>
                <a href="">Cart</a>
                <a href="">About</a>
                <a href="">Products</a>
            </div>

            <div class="home-right">
                <i class="fa-brands fa-facebook"></i>
                <div class="home-vertical-slash p-8">
                    |
               </div>
                <a href=""><i class="fa-solid fa-user p-8"></i></a>
                <i class="fa-solid fa-earth-americas p-8"></i>
            </div>
        </div>

        <!-- Slider -->

        <section class="home-container-slider" id="home-container-slider" >

            <swiper-container class="home-swiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
            centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">

                <swiper-slide> 
                    <img class="home-sliders" width="100%" height="100%" style="object-fit: contain;" src="https://static.vecteezy.com/system/resources/previews/003/572/417/non_2x/merry-christmas-sale-banner-template-design-free-vector.jpg" alt="">
                </swiper-slide>

                <swiper-slide> 
                    <img class="home-sliders" width="100%" height="100%" style="object-fit: contain;" src="https://static.vecteezy.com/system/resources/previews/013/751/311/non_2x/christmas-sale-banner-decorate-with-white-snowflakes-labels-for-special-offers-and-discounts-during-the-new-year-and-christmas-illustration-vector.jpg" alt="">
                </swiper-slide>

                <swiper-slide> 
                    <img class="home-sliders" width="100%" height="100%" style="object-fit: contain;" src="https://cdn.luxshopping.vn/Thumnails/Uploads/News/900-noel-2020-1-.png.webp" alt="">
                </swiper-slide>

                <swiper-slide> 
                    <img class="home-sliders" width="100%" height="100%" style="object-fit: contain;" src="https://hacom.vn/media/news/2112_1219-banner-tin-tuc-noel.png" alt="">
                </swiper-slide>
        
            </swiper-container>
    
            <div class="swiper-pagination"></div>
            
        </section>

        <!-- Products -->

        <div class="home-sale-products">
            <h1>HOT-SALE PRODUCTS</h1>
        </div>

        <div id="home-container-products"></div>

        <div class="home-sale-products">
            <h1>HOT-SALE PRODUCTS</h1>
        </div>

        <div id="home-container-products-2"></div>

    </div>
        `;
    }
}