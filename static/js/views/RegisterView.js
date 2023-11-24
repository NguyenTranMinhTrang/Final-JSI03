import ClassView from './ClassView.js'

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <div class="register">
        <div class="register-container">
            <div class="register-name">
                <h2>Register</h2>
            </div>
    
            <div class="register-email">
              
                <input type="email" placeholder="Email">
            </div>
    
            <div class="register-password">
               
                <input type="password" placeholder="Password">
            </div>
    
            <div class="register-confirmPassword">
               
                <input type="password" placeholder="Confirm Password">
            </div>
    
            <div class="register-submit">
                <button>Submit</button>
            </div>
        </div>
    </div>
        `;
    }
}