import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import HomeView from "./views/HomeView.js";
import DetailView from "./views/DetailView.js";
import CartView from "./views/CartView.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

let data = [
    {
        Id: '0',
        Image: [
            'https://tamshoppe.vn/Thumb/Web/Resources/Uploaded/2/images/san-pham/Noel/vo-tat-noel-bang-len-tron-mau-2_w800_h600.jpg',
            'https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/san-pham/Noel/vo-tat-noel-bang-len-tron-mau-7.jpg',
            'https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/san-pham/Noel/vo-tat-noel-bang-len-tron-mau-9.jpg',
            'https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/san-pham/Noel/vo-tat-noel-bang-len-tron-mau-8.jpg',
        ],
        Name: "Christmas socks",
        Price: "1.08",
        Description: "",
    },
    {
        Id: '1',
        Image: [
            'https://statics.vinpearl.com/cay-thong-mua-giang-sinh-10_1696061475.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF39Nued3hSWUlK4DV-XvXz6_TPliZd_7GoA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3nn0tldMemn8VsvdL3lX8UbIjDTsAW7LDa2Lz3uzItDDIB7BiUjBUm83FMn04b167YI&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuG0stUDOLe5vrzSwu8ILyRXaBrzxVWdOuA&usqp=CAU',
        ],
        Name: "Christmas tree",
        Price: "1.08",
        Description: "",
    },

    {
        Id: '2',
        Image: [
            'https://bizweb.dktcdn.net/100/435/747/products/82090dbb-a7b7-4e1a-98e3-dcec797f6de0.jpg?v=1670390518353',
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/747/products/f4dfa526-a5cd-45ad-9444-d28740eb6426.jpg?v=1670390518353',
            'https://down-vn.img.susercontent.com/file/sg-11134201-22120-2ir29f1fg6kv6f',
            'https://down-vn.img.susercontent.com/file/sg-11134201-7qvde-lkc5p83uiwsqf9',
        ],
        Name: "Santa cup",
        Price: "1.08",
        Description: "",
    },

    {
        Id: '3',
        Image: [
            'https://sfexpress.vn/wp-content/uploads/2022/12/Black-Moon-Blog-Banner-2022-12-06T150703.572.png',
            'https://cf.shopee.vn/file/43cb41df3d3e483e58c4dbbf9acf8c53',
            'https://cf.shopee.vn/file/70c71a876078cd669c22f8bf69b04784',
            'https://cf.shopee.vn/file/sg-11134201-22100-wtytpr05m5ivd0',
        ],
        Name: "Christmas socks",
        Price: "1.08",
        Description: "",
    },

    {
        id: '4',
        Image: [
            'https://mona.vn/wp-content/uploads/2019/08/9612322246_1177161717.jpg',
            'https://mona.vn/wp-content/uploads/2022/05/vong-nguyet-que-noel-mona-1.jpg',
            'https://salt.tikicdn.com/cache/w1200/ts/product/98/79/df/ebddabbd80adc4f8d08c5d04805308dc.jpg',
            'https://dathangsi.vn/upload/products/2022/10/0404-vong-hoa-trang-tri-noel-40cm-co-den.jpg',
        ],
        Name: "Christmas socks",
        Price: "1.08",
        Description: "",
    },

    {
        id: '5',
        Image: [
            'https://salt.tikicdn.com/cache/w1200/ts/product/3e/dc/eb/ac26ae5f11c1cdc134e74d8ea8640d60.jpg',
            'https://trangtrinoel.vn/wp-content/uploads/2017/09/do-giang-sinh-cho-be-gai.jpg',
            'https://lzd-img-global.slatic.net/g/p/4c9599f42b8c97cad0da21d42b217cc5.jpg_550x550.jpg',
            'https://cf.shopee.vn/file/5ac37ff3fa3c0001b617d09524947275',
        ],
        Name: "Christmas socks",
        Price: "1.08",
        Description: "",
    },
    {
        id: '7',
        Image: [
            'https://cf.shopee.vn/file/881ed0cb3e3452fb2dbd2d7900476188',
            'https://trangphucdien.net/wp-content/uploads/2019/11/trang-phuc-noel-yeu-tinh-003-600x600.jpg',
            'https://my-live-02.slatic.net/p/a815f7ae323fea3c74884fe72fd08b40.jpg',
            'https://my-test-11.slatic.net/p/4d68457652a32736a67ba32b424b011d.jpg,'
        ],
        Name: "Christmas T-shirts",
        Price: "",
        Description: "",
    },

    {
        id: '8',
        Image: [
            'https://winecity.vn/wp-content/uploads/2023/08/mau-hop-qua-noel.jpg',
            'https://product.hstatic.net/1000253397/product/hop-qua-giang-sinh-2021_71e896dfc7ec4da89d2fe1d3fb64bcda_1024x1024.jpg',
            'https://hopquatet.vn/wp-content/uploads/2020/07/Y-nghia-tang-qua-vao-Giang-sinh-min.jpg',
            'https://product.hstatic.net/1000163114/product/z2194873073612_ec0957e7b588f96088d9c0eaf8b95747_c6325d070d3c4ffdafdab520dcd25a6d_master.jpg',
        ],
        Name: "Christmas shirts",
        Price: "",
        Description: "",
    },

    {
        id: '9',
        Image: [
            'https://mona.vn/wp-content/uploads/2019/10/qua-chau-trang-tri-noel-2.jpg',
            'https://phukiengiangsinh.vn/wp-content/uploads/2022/04/chau-noel-chau-kieu-6cm-1.jpg',
            'https://phukiengiangsinh.vn/wp-content/uploads/2022/03/qua-chau-trang-tri-noel-10.jpg',
            'https://lzd-img-global.slatic.net/g/p/8aa1ad9fd2521c3259712966632f5851.jpg_960x960q80.jpg_.webp',
        ],
        Name: "Christmas claus costumes",
        Price: "",
        Description: "",
    },

    {
        id: '10',
        Image: [
            'https://banner2.cleanpng.com/20180215/jaw/kisspng-mrs-claus-jingle-bell-christmas-decoration-clip-a-transparent-christmas-cliparts-5a85f3951e1812.5349831815187280851233.jpg',
            'https://down-vn.img.susercontent.com/file/f9413afa599c3ac572b5402dc77ea05a_tn',
            'https://img.ws.mms.shopee.vn/4cc1dcd7de735ea828d58df600584269',
            'https://saigonhoa.com/wp-content/uploads/2022/12/chuong-noel.jpg',
        ],
        Name: " Christmas hats",
        Price: "",
        Description: "",
    },

    {
        id: '11',
        Image: [
            'https://img.pikbest.com/ai/illus_our/20230427/355640c5c6785937148f1eaf1aa6a033.jpg!w700wp',
            'https://trangphucdien.net/wp-content/uploads/2020/12/mo-hinh-ong-gia-noel-bom-hoi-8-600x600.jpg',
            'https://lzd-img-global.slatic.net/g/p/e67bb1057005ba74189037bd517d15d7.jpg_960x960q80.jpg_.webp',
            'https://down-vn.img.susercontent.com/file/e9e58ce93184d7862945b44bbbb42449',
        ],
        Name: "Christmas slippers",
        Price: "",
        Description: "",
    },

    {
        id: '12',
        Image: [
            'https://cdn.tgdd.vn/2021/12/CookRecipe/CookTipsNote/12-cach-trang-tri-banh-kem-noel-cuc-ky-dep-mat-cho-dip-giang-tipsnote-800x450-6.png',
            'https://img.ltwebstatic.com/images3_spmp/2023/09/23/2a/1695456165d5a779ea305fdda0e2bb8af7f74c5bde_square_thumbnail_405x552.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBq16zbRs_Su0en-WNbeBAdMSVF62aWJaJRBdq2qWXemCOHGULNmEM3ATudIqVbQZmgs&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5Y6rgYKUPz-7wYpH23UD1CrDoApJXYSHU6kl2VIGsOarQKEWZO0kbfyJVW0ETHoOu1s&usqp=CAU',
        ],
        Name: "Christmas led lights",
        Price: "",
        Description: "",
    },

    {
        id: '13',
        Image: [
            'https://cdn.tgdd.vn/Files/2022/11/05/1484413/ong-gia-noel-cuoi-may-con-tuan-loc-ten-cua-chung-la-gi-202211050906448039.jpg',
            'https://cdn-img-v2.webbnc.net/uploadv2/web/10/10846/product/2018/10/27/12/48/1540643497_mx-cxog1tl-01.jpg',
            'https://down-vn.img.susercontent.com/file/1549993c03acf032bf0ab5036c386627',
            'https://lzd-img-global.slatic.net/g/ff/kf/S7cc642f0b4b645b6b5cc4b23b00e0b5bx.jpg_720x720q80.jpg',
        ],
        Name: "Christmas tree",
        Price: "",
        Description: "",
    },

    {
        id: '14',
        Image: [
            'https://png.pngtree.com/thumb_back/fw800/background/20231007/pngtree-joyful-3d-illustration-of-santa-claus-with-christmas-gift-on-festive-image_13543067.png',
            'https://trangphucdien.net/wp-content/uploads/2020/12/cong-chao-noel-giang-sinh-1.jpg',
            'https://media.istockphoto.com/id/903022962/pt/foto/santa-claus-statue-on-white-background.jpg?s=1024x1024&w=is&k=20&c=MIfkrW95DGEscS5dBEmHTRASFZ3E6nbLBnFAEjHhSvg=',
            'https://down-vn.img.susercontent.com/file/888f019300bdab10a4fd4341c6e4d98b'
        ],
        Name: "Christmas ornaments",
        Price: "",
        Description: "",
    },

    {
        id: '15',
        Image: "",
        Name: "Christmas stocking",
        Price: "",
        Description: "",
    },

    {
        id: '16',
        Image: "",
        Name: "Christmas homeware products",
        Price: [
            'https://blog.btaskee.com/wp-content/uploads/2020/12/lam-qua-cau-tuyet-handmade-1280x720.jpg',
            'https://nhaxinhplaza.vn/wp-content/uploads/cach-lam-qua-cau-tuyet.jpg',
            'https://vn-test-11.slatic.net/p/f0e86248e3cf5fcccd23827872debecd.jpg',
            'https://salt.tikicdn.com/ts/product/28/ba/bd/d8d587f8b4c4c2fbd590020805f65c9b.jpg',
        ],
        Description: "",
    },

    {
        id: '17',
        Image: [
            'https://cfimg.wowcher.co.uk/cdn-cgi/image/height=520,width=777,quality=85,format=auto/https://static.wowcher.co.uk/images/deal/25249312/962346.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8uxAK-e1bRT46S0sey_dt0FACN5URkalS8mGPCvgvOW19bYQT4wPJT_NCcfwiorhdXtc&usqp=CAU',
            'https://img.ltwebstatic.com/images3_spmp/2023/08/11/10/169174500187cc2ea2d8ff8707548415dfc56afce8_thumbnail_720x.webp',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQvJRQhBbB4MYMcEPeWzeC0xqRE6E-BkQY-QmLsLf8tF4sScxlyeO3-mJLL_z8yqNEoo&usqp=CAU',
        ],
        Name: "Christmas pillow covers",
        Price: "",
        Description: "",
    },

    {
        id: '18',
        Image: [
            ''
        ],
        Name: "Christmas wreath",
        Price: "",
        Description: "",
    },

    {
        id: '19',
        Image: [
            'https://www.makermama.com/wp-content/uploads/2021/11/Etched-Birch-Ornaments-7-e1637621880628.jpeg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4i8k9DyzieppiGSmmwA-FSmNlq2DiH3kb9grOycdActNOknbuD8BWH4Vzghxw7QeT5JM&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EQ6LWlMLcdsxqzAjo-1dIMzzSqmXqN6gm0aOPo2WUq9oyBizw0mPEVdfdp0RcPFw2Eg&usqp=CAU',
            'https://i.pinimg.com/736x/35/0e/c7/350ec72a867eab7372f8e9c6451c2bdf.jpg',
        ],
        Name: "Christmas wooden ornaments",
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
            } else if (routeMap.path === '/register') {
                registerFunction();
            } else if (routeMap.path === '/login') {
                loginFuncion();
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
    const itemClick = data.find(item => item?.Id === id);
    const imgBig = document.getElementById('detail-img-big');
    const imhSmall1 = document.getElementById('detail-img-1');
    const imhSmall2 = document.getElementById('detail-img-2');
    const imhSmall3 = document.getElementById('detail-img-3');
    const textDescription = document.getElementById('detail-description');
    const textPrice = document.getElementById('detail-price');
    const textName = document.getElementById('detail-name');

    imgBig.setAttribute('src', itemClick.Image[0]);
    imhSmall1.setAttribute('src', itemClick.Image[1]);
    imhSmall2.setAttribute('src', itemClick.Image[2]);
    imhSmall3.setAttribute('src', itemClick.Image[3]);
    textDescription.innerText = itemClick?.Description;
    textPrice.innerText = `$${itemClick?.Price}`;
    textName.innerText = itemClick?.Name;

}

const groupByQuanlity = (cartList, newProduct) => {
    const newCarts = [];
    if (cartList.length === 0) {
        newCarts.push({
            ...newProduct,
            quanlity: 1
        })
    } else {
        let isExist = false;
        for (const item of cartList) {
            if (item?.Id === newProduct?.Id) {
                newCarts.push({
                    ...item,
                    quanlity: Number(item.quanlity) + 1
                })
                isExist = true;
            } else {
                newCarts.push(item);
            }
        }

        if (!isExist) {
            newCarts.push({
                ...newProduct,
                quanlity: 1
            })
        }
    }
    return newCarts;
}

const addCart = (x) => {
    const carts = localStorage.getItem('carts');
    const idUser = JSON.parse(localStorage.getItem('idUser'));
    if (idUser) {
        if (carts) {
            const cartList = JSON.parse(carts) || {};
            const newListCarts = groupByQuanlity(cartList[idUser], x);
            const newCarts = {
                ...cartList,
                [idUser]: newListCarts
            }
            localStorage.setItem('carts', JSON.stringify(newCarts));
        } else {
            const cartList = groupByQuanlity([], x);
            const newCarts = {
                [idUser]: cartList
            }
            localStorage.setItem('carts', JSON.stringify(newCarts));
        }
        navigateTo('/cart');
    } else {
        alert('You have to login to use this function !');
    }
}

const loadData = () => {
    const parent = document.getElementById('home-container-products');
    for (let x of data.slice(0, 6)) {
        const aElement = document.createElement('a');
        aElement.href = `detail/${x?.Id || 10}`;
        aElement.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.matches('[btn-add-cart]')) {
                addCart(x);
            } else {
                navigateTo(aElement.getAttribute('href'));
            }
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
                <h3>$${x.Price}</h3>
                <div class="home-name-lines"></div>
                <p>Christmas is a popular event for all people in this world</p>
            </div>
        </div>
        <button btn-add-cart class="home-button">Add to Cart</button>
        `;
        aElement.appendChild(divProduct);
        parent.appendChild(aElement);
    }

    const parent2 = document.getElementById('home-container-products-2');
    for (let x of data.slice(6, 12)) {
        const aElement = document.createElement('a');
        aElement.href = `detail/${x?.Id || 10}`;
        aElement.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.matches('[btn-add-cart]')) {
                addCart(x);
            } else {
                navigateTo(aElement.getAttribute('href'));
            }
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
                <h3>${x.Price}</h3>
                <div class="home-name-lines"></div>
                <p>Christmas is a popular event for all people in this world</p>
            </div>
        </div>
    
        <button btn-add-cart class="home-button" id="home-button">Add to Cart</button>
        `;
        aElement.appendChild(divProduct);
        parent2.appendChild(aElement);
    }
}

// Region Home

const cartFunction = () => {
    const cartsFromLocal = localStorage.getItem('carts');
    const idUser = JSON.parse(localStorage.getItem('idUser'));
    let listCart = [];
    if (cartsFromLocal) {
        const dataParse = JSON.parse(cartsFromLocal);
        listCart = dataParse[idUser];
    }

    const quanlity = document.getElementById('cart-quality');
    quanlity.innerText = `${listCart.length} Items`;

    let totalAll = 0;

    const container = document.getElementById('cart-container-item');
    const totalText = document.getElementById('cart-total');
    for (const item of listCart) {
        const total = Math.round(Number(item?.quanlity) * Number(item?.Price) * 100) / 100;
        totalAll += total;
        const divContainer = document.createElement('div');
        divContainer.classList.add('cart-item');
        divContainer.innerHTML = `
        <div class="cart-header-detail">
            <div class="cart-unrealistic">
            <img src="${item?.Image[1]}" alt="">  
        
            <div class="cart-words">
                <h3>${item?.Name}</h3>
                <h5>Design</h5>
                <h6>Remove</h6>
            </div>
        </div>
        </div>

        <div class="cart-header-detail">
            <div class="cart-detail-item">
                <p><b>${item?.quanlity}</b></p>
            </div>

            <div class="cart-detail-item">
                <p><b>${item?.Price}</b></p>
            </div>

            <div class="cart-detail-item">
                <p><b>$${total}</b></p>
            </div>
        </div>                              
        `;
        container.appendChild(divContainer);
    }
    totalText.innerText = `$${totalAll}`;
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
                    navigateTo('/login');
                    
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


const loginFuncion = () => {
    const button = document.getElementById("login-button")
    const warning = document.getElementById("login-warning")
    const moveToRegister = document.getElementById("login-to-register");

    moveToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/register');
    })

    button.addEventListener("click", (e) => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === "" || password === "") {
            warning.innerText = "Fields should not be empty"

        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const idUser = user.uid;
                    localStorage.setItem('idUser', JSON.stringify(idUser));
                    navigateTo('/');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);

                    if (errorMessage.includes("auth/invalid-email")) {
                        warning.innerText = "Invalid Email"
                    }

                    else if (errorMessage.includes("auth/weak-password")) {
                        warning.innerText = "Password must be at least 6 characters"

                    }
                    else if (errorMessage.includes("auth/invalid-credential")) {
                        warning.innerText = "Wrong password or email"
                    }
                });
        }

    }
    )
}

