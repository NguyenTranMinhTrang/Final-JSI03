import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import HomeView from "./views/HomeView.js";
import DetailView from "./views/DetailView.js";
import CartView from "./views/CartView.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCK2oLg4-PD3K7wyQpWZo1plNuaIGam1Cw",
    authDomain: "final-project-79120.firebaseapp.com",
    projectId: "final-project-79120",
    storageBucket: "final-project-79120.appspot.com",
    messagingSenderId: "324439090576",
    appId: "1:324439090576:web:0ff902f69358401876bf15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

let data1 = [
    {
        Id: '0',
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
        ],
        Name: "Christmas socks",
        Price: "$1.08",
        Description: "",
    },
    {
        Id: '1',
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
        ],
        Name: "Christmas socks",
        Price: "$1.08",
        Description: "",
    },

    {
        Id: '2',
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
        ],
        Name: "Christmas socks",
        Price: "$1.08",
        Description: "",
    },

    {
        Id: '3',
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
        ],
        Name: "Christmas socks",
        Price: "$1.08",
        Description: "",
    },

    {
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
        ],
        Name: "Christmas socks",
        Price: "$1.08",
        Description: "",
    },

    {
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
        ],
        Name: "Christmas socks",
        Price: "$1.08",
        Description: "",
    },
]

let data2 = [
    {
        Image: "",
        Name: "Christmas T-shirts",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas shirts",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas claus costumes",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: " Christmas hats",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas slippers",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas led lights",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas tree",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas ornaments",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas stocking",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas homeware products",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas pillow covers",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas wreath",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas wooden ornaments",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas blanket",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas bags/packages and gift boxes",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Rolling pin with Christmas ornaments",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas oven mitts",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas wine bottle dust cover",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas aprons",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas glass/cups decor",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas table decor",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas holders",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas cookies cutters",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas bowl",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas thermo cups",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas capuchinator",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas pet costume",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas pet hat",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas collars",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Pet Christmas pajama",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Pet Christmas sweater",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Pet Christmas bandana",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Pet Christmas scarfs",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: " Pet Christmas stockings",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: " Christmas presents for pets",
        Price: "",
        Description: "",
    },

    {
        Image: "",
        Name: "Christmas themed jewelry",
        Price: "",
        Description: "",
    },
]


const router = async () => {
    const route = [
        { path: '/login', view: LoginView },
        { path: '/register', view: RegisterView },
        { path: '/', view: HomeView },
        { path: '/detail', view: DetailView },
        { path: '/cart', view: CartView },

    ];

    console.log('location.pathname: ', location.pathname);
    let pathName = location.pathname;
    if (pathName.includes('detail')) {
        const array = pathName.split('/');
        console.log('array: ', array);
        const view = new DetailView();
        document.getElementById('app').innerHTML = await view.getHtml();
        loadDataItem(array[2]);
    } else {
        const routeMap = route.find(value => value.path === location.pathname);
        if (routeMap) {
            const view = new routeMap.view();
            document.getElementById('app').innerHTML = await view.getHtml();
            if (routeMap.path === '/') {
                loadData();
                handleClickItem();
            } else if (routeMap.path === '/register') {
                registerFunction();
            } else if (routeMap.path === '/cart') {
                cartFunction();
            }
        }
    }
}

const navigateTo = url => {
    console.log('url: ', url);
    if (url === 'http://localhost:3000/cart') {
        const userId = localStorage.getItem('idUser');
        if (userId) {
            history.pushState(null, null, url);
            router();
        } else {
            alert('You have not login yet. Please login to use cart!!!');
        }
    } else {
        history.pushState(null, null, url);
        router();
    }
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

// Region Home


const loadDataItem = (id) => {
    console.log('id: ', id);
    const itemClick = data1.find(item => item?.Id === id);
    console.log('itemClick: ', itemClick);
    const imgBig = document.getElementById('detail-img-big');
    const imhSmall1 = document.getElementById('detail-img-1');
    const imhSmall2 = document.getElementById('detail-img-2');
    const imhSmall3 = document.getElementById('detail-img-3');
    const textDescription = document.getElementById('detail-description');
    const textPrice = document.getElementById('detail-price');

    imgBig.setAttribute('src', itemClick.Image[0]);
    imhSmall1.setAttribute('src', itemClick.Image[1]);
    imhSmall2.setAttribute('src', itemClick.Image[2]);
    imhSmall3.setAttribute('src', itemClick.Image[3]);
    textDescription.innerText = itemClick?.Description;
    textPrice.innerText = itemClick?.Price;
}

const loadData = () => {
    const parent = document.getElementById('home-container-products');
    for (let x of data1) {
        const aElement = document.createElement('a');
        aElement.href = `detail/${x?.Id || 10}`;
        aElement.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(aElement.getAttribute('href'));
        })

        const button = document.createElement('button');
        button.classList.add('home-button');
        button.innerText = 'Add to Cart';
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('x?.Id: ', x?.Id);
        })
        const divProduct = document.createElement('div');
        divProduct.classList.add('home-products');
        aElement.innerHTML = 
        divProduct.innerHTML = `
        <div class="home-detail-products">
            <div class="home-image-products">
                <img src=${x.Image[0]} alt="">
            </div>
    
            <div class="home-name-products">
                <h1>${x.Name}</h1>
                <h3>$1.08</h3>
                <div class="home-name-lines"></div>
                <p>Christmas is a popular event for all people in this world</p>
            </div>
        </div>
        `;
        divProduct.appendChild(button);

        aElement.appendChild(divProduct);
        parent.appendChild(aElement);
    }

    for (let x of data1) {
        const divProduct = document.createElement('div');
        divProduct.classList.add('home-products');
        divProduct.innerHTML = `
        <div class="home-detail-products">
            <div class="home-image-products">
                <img src=${x.Image[0]} alt="">
            </div>
    
            <div class="home-name-products">
                <h1>${x.Name}</h1>
                <h3>${x.Price}</h3>
                <div class="home-name-lines"></div>
                <p>Christmas is a popular event for all people in this world</p>
            </div>
        </div>
    
        <button class="home-button" id="home-button">Add to Cart</button>
        `;
        const parent = document.getElementById('home-container-products-2');
        parent.appendChild(divProduct);
    }
}

const handleClickItem = () => {

}

// Region Home

const cartFunction = () => {
    const cartsFromLocal = localStorage.getItem('carts');
    const idUser = JSON.stringify(localStorage.getItem('idUser'));
    let listCart = [];
    if (cartsFromLocal) {
        const dataParse = JSON.parse(cartsFromLocal);
        listCart = dataParse[idUser].carts;
    }
    
    const container = document.getElementById('cart-container-item');
    for (const item of listCart) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('cart-item');
        divContainer.innerHTML = `
        <div class="cart-header-detail">
            <div class="cart-unrealistic">
            <img src="https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg" alt="">  
        
            <div class="cart-words">
                <h3>Chirstmas socks</h3>
                <h5>Design</h5>
                <h6>Remove</h6>
            </div>
        </div>
        </div>

        <div class="cart-header-detail">
            <div class="cart-detail-item">
                <p><b>1</b></p>
            </div>

            <div class="cart-detail-item">
                <p><b>$1.08</b></p>
            </div>

            <div class="cart-detail-item">
                <p><b>$1.08</b></p>
            </div>
        </div>                              
        `;
        container.appendChild(divContainer);
    }
}

const registerFunction = () => {
    const registerbutton = document.getElementById('register-button');
        const warning = document.getElementById('register-warning');

        registerbutton.addEventListener('click', (e) => {
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
          
            if (email === "" || password === "" || confirmPassword === "") {
                warning.innerText = "Fields should not be empty"
            } else if (password !== confirmPassword) {
                warning.innerText = "Passwords do not match"
            } else {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        const idUser = user.uid;
                        localStorage.setItem('idUser', JSON.stringify(idUser));
                        navigateTo('/');
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        console.log(errorMessage);
                       if (errorMessage.includes("auth/invalid-email")) {
                        warning.innerText = "Invalid Email"
                       }

                       else if (errorMessage.includes("auth/weak-password")) {
                         warning.innerText = "Password must be at least 6 characters"
                       }

                       else if (errorMessage.includes("auth/email-already-in-use")) {
                        warning.innerText = "You already used this email"
                       }
                    });
            }

           
        })
}


