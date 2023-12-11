import ClassView from "./ClassView.js";

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("CartView");
    }

    async getHtml() {
        return `
            <h1>Cart</h1>
        `
    }
}