import ClassView from './ClassView.js'

export default class extends ClassView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        <div class="login">
        <div class="login-container">
            <div class="login-name">
                <h2>Log In</h2>
            </div>
    
            <div class="login-email">
                <input type="email" placeholder="Email">
            </div>
    
            <div class="login-password">
                <input type="password" placeholder="Password">
            </div>

            <div class="login-twosmallthings">
                <input type="checkbox">
                <label for="checkbox">Remember Me</label>

                <div class="login-forgotPassword">
                    <p>Forgort Password?</p>
                </div>
            </div>
        

            <div class="login-submit">
                <button>Submit</button>
            </div>
        </div>
    </div>
        `;
    }
}