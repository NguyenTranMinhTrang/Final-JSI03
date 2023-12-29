export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    getHeader() {
        return `
        <div class="home-navbar">
            <img class="home-logo" src="http://localhost:3000/images/logo.png" alt="">
            <div class="home-middle">
                <a data-link href="/">Home</a>
                <a  data-link href="/cart">Cart</a>
                <a data-link href="/">About</a>
                <a data-link href="/">Products</a>
            </div>

            <div class="home-right">
                <i class="fa-brands fa-facebook"></i>
                <div class="home-vertical-slash p-8">
                    |
            </div>
                <a href="/login"><i class="fa-solid fa-user p-8"></i></a>
                <i class="fa-solid fa-earth-americas p-8"></i>
            </div>
        </div>
        `
    }
}