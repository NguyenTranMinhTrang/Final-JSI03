import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import HomeView from "./views/HomeView.js";
import DetailView from "./views/DetailView.js";

let data1 = [
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
    ];
    const routeMap = route.find(value => value.path === location.pathname);
    if (routeMap) {
        const view = new routeMap.view();
        console.log('routeMap: ', routeMap);
        console.log('await view.getHtml(): ', await view.getHtml());

        document.getElementById('app').innerHTML = await view.getHtml();
        if (routeMap.path === '/') {
            loadData();
        }
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

// Region Home

const loadData = () => {
    for (let x of data1) {
        console.log('x: ', x);
        const divProduct = document.createElement('div');
        divProduct.classList.add('home-products');
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
    
        <button class="home-button" id="home-button">Add to Cart</button>
        `;
        const parent = document.getElementById('home-container-products');
        parent.appendChild(divProduct);
    }

    for (let x of data1) {
        console.log('x: ', x);
        const divProduct = document.createElement('div');
        divProduct.classList.add('home-products-2');
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

// Region Home

