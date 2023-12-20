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
                <div class="login-container-checkbox">
                    <input type="checkbox" class="login-checkbox">
                    <label for="checkbox" class="login-text">Remember Me</label>
                </div>

                <a class="login-text" href="ForgotPassword.html">Forgort Password?</a>
            </div>

            <h2 id="login-warning" class="login-warning"></h2>

            <div class="login-submit">
                <button id="login-button">Submit</button>
            </div>
        </div>
    </div> `;
    }
}