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

                    <input type="email" placeholder="Email" id="register-email">
                </div>

                <div class="register-password">

                    <input type="password" placeholder="Password" id="register-password">
                </div>

                <div class="register-confirmPassword">

                    <input type="password" placeholder="Confirm Password" id="register-confirm-password">
                </div>


                <h2 id="register-warning" class="register-warning"></h2>

                <div class="register-submit" id="register-button">
                    <button>Submit</button>
                </div>
            </div>
        </div>
        `;
    }
}