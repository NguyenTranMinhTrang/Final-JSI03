import ClassView from './ClassView.js'

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("HomeView");
    }

    async getHtml() {
        return `
            <h1>HomeView</h1>
        `;
    }
}