import ClassView from './ClassView.js'

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("DetailView");
    }

    async getHtml() {
        return `
        <div>
            ${this.getHeader()}
            <div class="detail-container">
                <div class="detail-img">

                    <div class="detail-img-big">
                        <img src="https://i.ytimg.com/vi/L7gTNdPltEk/maxresdefault.jpg" class="img-big" id="detail-img-big">
                    </div>

                    <div class="detail-img-small">
                        <div class="detail-img-part">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTrrZlCuZGKurSpS6_Hltx72A_GwQQ93RSw&usqp=CAU"
                                class="img-small" alt="" id="detail-img-1">
                        </div>

                        <div class="detail-img-part">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTrrZlCuZGKurSpS6_Hltx72A_GwQQ93RSw&usqp=CAU"
                                class="img-small" alt="" id="detail-img-2">
                        </div>

                        <div class="detail-img-part">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTrrZlCuZGKurSpS6_Hltx72A_GwQQ93RSw&usqp=CAU"
                                class="img-small" alt="" id="detail-img-3">
                        </div>
                    </div>

                </div>

                <div class="detail-product">
                    <div class="detail-bulletin">
                        <div>
                            <h1>Christmas Cup</h1>
                            <h3 id="detail-description" class="detail-mota">
                            </h3>
                        </div>
                    </div>

                    <div class="detail-price">
                        <h2 id="detail-price"></h2>
                    </div>
                    <div class="detail-button">
                        <div class="detail-button-buy" style="margin-right: 12px;">
                            <h3 class="text-button">Buy now</h3>
                        </div>
                        <div class="detail-button-buy">
                            <h3 class="text-button">Add to cart</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}