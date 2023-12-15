import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import HomeView from "./views/HomeView.js";
import DetailView from "./views/DetailView.js";
import CartView from "./views/CartView.js";

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
            }
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

// Region Home

