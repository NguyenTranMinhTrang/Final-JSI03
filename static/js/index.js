import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import HomeView from "./views/HomeView.js";
import DetailView from "./views/DetailView.js";

const router = async () => {
    const route = [
        {path: '/login', view: LoginView},
        {path: '/register', view:  RegisterView},
        {path: '/', view: HomeView},
        {path: '/detail', view: DetailView},
    ];
    const routeMap = route.find(value => value.path === location.pathname);
    if (routeMap) {
        const view = new routeMap.view();
        document.getElementById('app').innerHTML = await view.getHtml();
    }
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener('popstate', router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})

