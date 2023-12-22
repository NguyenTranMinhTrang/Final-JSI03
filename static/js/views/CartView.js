import ClassView from "./ClassView.js";

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("CartView");
    }

    async getHtml() {
        return `
        <div class="cart-all">
            <div class="cart-shopping">
                <div class="cart-shopping-navbar">
                    <h1>Shopping Cart</h1>
                    <h2 id="cart-quality">0 Items</h2>
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

                    <div id="cart-container-item"></div>

                    <div class="cart-return">
                        <i class="fa-solid fa-arrow-left"></i>
                        <a href="">Continue Shopping</a>
                    </div>
                </div>

                
            </div>

            <div class="cart-order-summary">
                <div class="cart-summary">
                    <h1>Oder summary</h1>
                </div>

                <div class="cart-lines-second"></div>

                <div class="cart-sale-card">
                    <h3>Subtotal</h3>
                    <h4 id="cart-total">$1.08</h4>
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

                <div class="cart-sale-card">
                    <h3>Total</h3>
                    <h4>$4.12</h4>
                </div>  

                <div class="cart-lines-second"></div>

                <div class="cart-checkout">

                </div>
            </div>
        </div>
        `
    }
}