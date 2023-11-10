import ClassView from './ClassView.js'

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("DetailView");
    }

    async getHtml() {
        return `
            <div>
            
            </div>
        `;
    }
}