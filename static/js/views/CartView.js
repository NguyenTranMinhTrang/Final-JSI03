import ClassView from "./ClassView.js";

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("CartView");
    }

    async getHtml() {
        return `
        <div class="cart-all">
            <div class="cart-container">
                <div class="cart-shopping">
                    <div class="cart-shopping-navbar">
                        <h1>Shopping Cart</h1>
                        <h2>3 Items</h2>
                    </div>

                    <div class="cart-lines"></div>

                    <div class="cart-products">
                        <div class="cart-header">
                            <div class="cart-header-title">
                                <p><b>PRODUCT DETAILS</b></p>
                            </div>

                            <div class="cart-header-detail">
                                <div class="cart-detail-item">
                                    <p><b>QUANTITY</b></p>
                                </div>

                                <div class="cart-detail-item">
                                    <p><b>PRICE</b></p>
                                </div>

                                <div class="cart-detail-item">
                                    <p><b>TOTAL</b></p>
                                </div>
                            </div>
                        </div>

                        <div id="cart-container-item">
                        </div>

                        <div class="cart-item">
                            <div class="cart-header-detail">
                                <div class="cart-unrealistic">
                                    <img src="https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg" alt="">  
                                
                                    <div class="cart-words">
                                        <h3>Chirstmas socks</h3>
                                        <h5>Design</h5>
                                        <h6>Remove</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="cart-header-detail">
                                <div class="cart-detail-item">
                                    <p><b>1</b></p>
                                </div>

                                <div class="cart-detail-item">
                                    <p><b>$1.08</b></p>
                                </div>

                                <div class="cart-detail-item">
                                    <p><b>$1.08</b></p>
                                </div>
                            </div>
                        </div>

                    <div class="cart-return">
                        <i class="fa-solid fa-arrow-left"></i>
                        <a href="">Continue Shopping</a>
                    </div>
                </div>

                <div class="cart-order-summary">
                    <div class="cart-summary">
                        <h1>Oder summary</h1>
                    </div>

                    <div class="cart-lines-second"></div>

                    <div class="cart-sale-card">
                        <h3>Subtotal</h3>
                        <h4>$1.08</h4>
                    </div>

                    <div class="cart-sale-card">
                        <h3>Estimated Shipping & Handing</h3>
                        <h4>$3.04</h4>
                    </div>

                    <div class="cart-sale-card">
                        <h3>Estimated Tax</h3>
                        <h4>__</h4>
                    </div>

                    <div class="cart-lines-second"></div>

                    <div class="cart-total">

                    </div>

                    <div class="cart-lines-second"></div>

                    <div class="cart-checkout">

                    </div>
                </div>
            </div>
        </div>
        `
    }
}