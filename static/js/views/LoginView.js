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
                <input type="email" placeholder="Email" id="login-email">
            </div>



            <div class="login-password">
                <input type="password" placeholder="Password" id="login-password">
            </div>

            <div class="login-twosmallthings">
                <a class="login-text" href="/register" id="login-to-register">Make an account</a>

                <a class="login-text" href="ForgotPassword.html">Forgot Password?</a>
            </div>

            <h2 id="login-warning" class="login-warning"></h2>

            <div class="login-submit">
                <button id="login-button">Submit</button>
            </div>
        </div>
    </div> `;
    }
}