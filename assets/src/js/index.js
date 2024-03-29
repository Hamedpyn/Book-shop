// Select DOM Elements
const booksLi = document.querySelector('#books');
const watchBookPage = document.querySelector('#watch-BookPage');
const container = document.querySelector('#container');
const bodyEl = document.body;
const containerBasket = document.querySelector("#containerBasket");
const pText = document.querySelector('#pText');
let textWriter = 0;
let text = `کتاب آنلاین منبعی به شکل کتاب است که فقط برای مطالعه در اینترنت در دسترس است. این کتاب با
ایده
رایج یک کتاب الکترونیکی متفاوت است`;

// Sample book data
const allBooks = [
    { id: 1, booksName: "بیتکوین", imageSrc: "assets/images/book-9-removebg-preview.png", price: 60 },
    { id: 2, booksName: "افعی در پنجره", imageSrc: "assets/images/package4-1-300x300-removebg-preview.png", price: 35 },
    { id: 3, booksName: "تولد", imageSrc: "assets/images/package2-1-300x300-removebg-preview.png", price: 99 },
    { id: 4, booksName: "دنباله کتاب ها", imageSrc: "assets/images/book-12-300x300-removebg-preview.png", price: 99 },
    { id: 5, booksName: "صلیب", imageSrc: "assets/images/book-10.jpg", price: 39 },
    { id: 6, booksName: "غار", imageSrc: "assets/images/package6-1.png", price: 48 },
    { id: 7, booksName: "هرگز رویا را متوقف نکنید", imageSrc: "assets/images/package8-1-300x300-removebg-preview.png", price: 43 },
    { id: 8, booksName: "R شبکه", imageSrc: "assets/images/package5-1-600x600-1-300x300-removebg-preview.png", price: 29 },
    { id: 9, booksName: "قوانین طبیعت", imageSrc: "assets/images/package3-1-removebg-preview.png", price: 75 },
    { id: 10, booksName: "رودخانه اکسترا", imageSrc: "assets/images/package1-1-600x600.jpg", price: 36 },
    { id: 11, booksName: "بیوگرافی", imageSrc: "assets/images/package7-1.jpg", price: 89 },
    { id: 12, booksName: "سیارات", imageSrc: "assets/images/book-11-600x600.jpg", price: 99 },
];

// Event listener for opening book page
booksLi.addEventListener('click', openBookPage)
watchBookPage.addEventListener('click', openBookPage)

// Function for introduce paragraph
function textIndex() {
    // Check if the textWriter index is within the bounds of the text length
    if (textWriter < text.length) {
        let currentCharacter = text[textWriter]; // Get the current character
        textWriter++; // Increment the textWriter index
        pText.innerHTML += currentCharacter; // Append the current character to the HTML element
    }
}

// Call the textIndex function every 50ms using setInterval
setInterval(textIndex, 50);

let h2Elem = document.getElementById('introduceTitle');

// Create a typewriter instance for the h2 element
let typewriter = new Typewriter(h2Elem, {
    loop: true,
    cursor: ""
});

// Type the phrase "بهترین کتاب ها"
typewriter.typeString('بهترین کتاب ها')
    .pauseFor(1500) // Pause for 1.5 seconds
    .deleteAll() // Delete all typed characters
    .typeString("معروف ترین کتاب ها") // Type the phrase
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>پراستفاده ترین کتاب ها</strong>')
    .pauseFor(1500)
    .start(); // Start the typewriter effect

// Function to open book page
function openBookPage() {
    container.style.display = "none";

    bodyEl.style.backgroundColor = '';
    booksPageHtml()
    const thisBookPage = document.querySelector('#thisBookPage');
    thisBookPage.classList.add("active")
    window.scrollBy(0,-2000)
}

// Function to change body html to books page html
function booksPageHtml() {
    bodyEl.innerHTML = `<div id="booksPageContainer">
    <header id="booksHeader">
        <div class="header">
            <div class="topHeader">
                <div class="LoginAndBasket">
                    <button class="loginBtn"><span>ورود / ثبت نام</span><i class="fa-solid fa-user"></i></button><div id="bookBasket" class="userBasket">    <i class="fa-solid fa-basket-shopping"></i></div></div><nav class="menu"><ul>        <li><span>تماس با ما</span></li><li><span><i class="fa-solid fa-chevron-down"></i>صفحات </span><ul class="pages">                <li><span>وبلاگ</span></li>                <li><span>درباره ما</span></li>                <li><span>سوالات متداول</span></li><li><span><i class="fa-solid fa-chevron-left"></i><span>منوی کشویی <ul class="underMenu">                                <li>زیر منو 1</li>
                               <li>زیر منو 2</li>                                <li>زیر منو 3</li>
                                            </ul>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>دسته بندی</span>
                        </li>
                        <li>
                            <span>
                                <i class="fa-solid fa-chevron-down"></i>
                                مجموعه
                            </span>
                            <ul class="collection">
                                <li>
                                    <img src="assets/images/book-10.jpg">
                                    <span class="historical">کتاب های تاریخی</span>
                                </li>
                                <li>
                                    <img src="assets/images/book-9-removebg-preview.png">
                                    <span class="trade">کتاب های ارز مجازی</span>
                                </li>
                                <li>
                                    <img src="assets/images/package3-1-removebg-preview.png">
                                    <span class="art">کتاب های هنر و گرافیک</span>
                                </li>
                                <li>
                                    <img src="assets/images/package2-1-300x300-removebg-preview.png">
                                    <span class="biography">کتاب های بیوگرافی</span>
                                </li>
                            </ul>
                        </li>
                        <li><span id=thisBookPage>کتاب ها</span></li>
                        <li id="thisFirstPage"><a href="index.html"><span>صفحه اصلی</span></a></li>
                        <img src="assets/images/logo-book-shop.png">
                    </ul>
                </nav>
            </div>
        </div>
        <div id="pagesStatus">
            <div id="statusPage">
                <div id="rightStatus">
                    <span>فروشگاه</span>
                </div>
                <div id="leftStatus">
                    <span>محصولات</span>
                    <i class="fa-solid fa-chevron-left"></i>
                    <i class="fa-solid fa-house-chimney"></i>
                </div>
            </div>
        </div>
    </header>
    <main id="main">
        <div id="mostBook" class="most">
            <div class="all-books">
                <div id="booksObject" class="allBooks">
                </div>
            </div>
        </div>
        <div id="booksButtons">
            <div style="display: flex;
            gap: 6px;" id="allBtn">
            </div>
        </div>
    </main>
    <footer id="footer">
        <div id="latestNews">
            <div id="news">
                <div class="grouping">
                    <span id="newsBtn" class="grouping-txt">دریافت تخفیف ویژه</span>
                </div>
                <div class="titlesOfBookPage">
                    <h1>برای اخبار جدید به ما بپیوندید</h1>
                </div>
                <div class="searchBox">
                    <input type="text" placeholder="... ایمیل خود را وارد کنید">
                    <div class="iconBox">
                        <span>عضویت</span>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="siteDetails">
            <div id="footerMenu">
                <div id="quote">
                    <img src="assets/images/logo-book-shop.png">
                    <div id="theQuote">
                        <p>وقتی راه را به صورت واضح درک کردید , میتوانید آن را در همه چیز ببینید</p>
                    </div>
                    <div id="quoteAuthor">میاموتو موساشی</div>
                </div>
                <div class="fMenu" id="specialMenu">
                    <ul>
                        <h4>منو سفارشی</h4>
                        <li>صفحه اصلی</li>
                        <li>کتاب ها</li>
                        <li>مجموعه</li>
                        <li>دسته بندی</li>
                    </ul>
                </div>
                <div class="fMenu" id="support">
                    <ul>
                        <h4>پشتیبانی</h4>
                        <li>سوالات متداول</li>
                        <li>قوانین</li>
                        <li>سیاست و قوانین</li>
                        <li>گزارش</li>
                    </ul>
                </div>
                <div class="fMenu" id="aboutUs">
                    <ul>
                        <h4>درباره ما</h4>
                        <li>درباره ما</li>
                        <li>شرکا</li>
                        <li>چشم انداز</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="devDetails">
            <div id="dev">
                <div id="brandsIcon">
                    <a id="instagram" href="https://instagram.com/hamedpyn">
                        <i id="instaI" class="fa-brands fa-instagram"></i>
                    </a>
                    <a id="what" href="https://wa.me/+989306831354">
                        <i id="ws" class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a id="telegram" href="https://t.me/hamedpyn">
                        <i id="tl" class="fa-brands fa-telegram"></i>
                    </a>
                    <a id="github" href="https://github.com/Hamedpyn">
                        <i id="gh" class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div id="devText">
                    <p>این سایت صرفا جهت تمرین و نمونه کار کدنویسی شده است</p>
                </div>
                <div id="devEmail">
                    <a href="mailto:hamedpyn@gmail.com">hamedpyn@gmail.com</a>
                </div>
            </div>
        </div>
    </footer>
</div>`
    const thisFirstPage = document.querySelector('#thisFirstPage');
    const booksPageContainer = document.querySelector('#booksPageContainer');
    const booksObject = document.querySelector("#booksObject");
    const allBtn = document.querySelector('#allBtn');
    const bookBasket = document.querySelector('#bookBasket')
    bookBasket.addEventListener("click", isEmptyBasket)
    paginationGenerator()
    setBtnPagination();
}

// Function to toggle visibility of elements
function toggleVisibility(hide, show) {
    hide.style.display = 'none';
    show.style.display = 'block';
}

// Pagination settings
let currentPage = 1;
let rows = 6;

// Function to generate pagination and display books
function paginationGenerator() {
    booksObject.innerHTML = ''
    let end = currentPage * rows
    let start = end - rows
    let books = allBooks.slice(start, end)
    books.forEach(book => {
        booksObject.innerHTML += booksHtml(book)
    })
}

// Function to generate book HTML
function booksHtml(book) {
    return `<div class="aBook singleBook"><div class="topBook"><img src="${book.imageSrc}"></div><div class="bottomBook"><div><span class="book-title">${book.booksName}</span><span class="bookPrice">${book.price}<span>تومان</span></span></div><button onclick="getProduct(${book.id})"><span>افزودن به سبد خرید</span><i class="fas fa-shopping-cart"></i></button></div></div>`
}

function setBtnPagination() {
    allBtn.innerHTML = "";
    // Calculate the total number of pages
    let counter = Math.ceil(allBooks.length / rows)
    for (let i = 1; i < counter + 1; i++) {
        let btn = createNewBtn(i)
        allBtn.appendChild(btn)
    }
}

// Function to create a new pagination button
function createNewBtn(thisPage) {
    let newButton = document.createElement('button')
    // Set the button text as the page number
    newButton.innerHTML = thisPage
    // Add a class to the active button
    thisPage === currentPage ? newButton.classList = 'btnActive' : "";
    newButton.addEventListener('click', () => {
        // Update the current page
        currentPage = thisPage;
        // Generate the books for the new page
        paginationGenerator();
        // Remove the active class from the previous active button
        document.querySelector('button.btnActive').classList = '';
        // Add the active class to the new button
        newButton.classList = 'btnActive';
        window.scrollBy(0,-2000)
    })
    return newButton
}

// to save the Products
let mainProduct = [];
// to calculate price
let sum = 0;

// Function to add Product to user Basket
function userBasket() {
    // change the result whenever an item is deleted
    sum = 0;
    callBackFunc();
    let table = document.querySelector("table");
    let totalPrice = document.querySelector("#totalPrice");
    // change display to show ( their default display is none )
    table.style.display = "block"
    totalPrice.style.display = "flex"
    mainProduct.forEach((book) => {
        table.innerHTML += `<tr id="tr2">
        <td id="td1">
            <span id="plus">+</span>
            <input id="input" value="1" type="number">
            <span id="min">-</span>
        </td>
        <td style="font-family: poppins;">${book.price}</td>
        <td>${book.booksName}</td>
        <td><img width="80px" src="${book.imageSrc}"></td>
        <td><i onclick="removeItem(${book.id})" class="fa-solid fa-trash-can delete-book" data-index ="0"></i></td>
    </tr>`;
        // change the result after the item is deleted
        calculatePrice(book)
    });
    // if mainProduct's length is equal to 0, show an message that says your basket is empty
    if (mainProduct.length == "0") {
        callBackFunc();
        let basket = document.querySelector('#basket');
        let emptyBasket = document.createElement("div");
        emptyBasket.textContent = "سبد خرید شما خالی است";
        emptyBasket.style.cssText = "width: 1066px;height: 100px;border: 1px solid rgb(202 202 202);display: flex;justify-content: flex-end;align-items: center;font-size: 20px;padding-right: 29px;background-color:#f6f6f6;";
        basket.appendChild(emptyBasket);
    }
}

// Function to remove Item from the Basket
function removeItem(bookId) {
    mainProduct = mainProduct.filter(item => item.id !== bookId)
    // call userBasket() to update the Basket
    userBasket()
}

// Function to calculate total price
function calculatePrice(book) {
    sum += book.price
    totalPrice.innerHTML = `قیمت نهایی:  ${sum}تومان `
}

function callBackFunc() {
    basketHtml();
    backToBookPage();
}

function backToBookPage() {
    let bookBasketPage = document.querySelector('#basketBook').addEventListener('click', () => {
        booksPageHtml();
        const thisBookPage = document.querySelector('#thisBookPage');
        thisBookPage.classList.add("active");
    });
};

// Event listener for isEmptyBasket
containerBasket.addEventListener('click', isEmptyBasket)

function getProduct(event) {
    let mainData = allBooks.find(book => {
        return book.id === event;
    })
    mainProduct.push(mainData);
}

// Function to change the body html to Basket page
function basketHtml() {
    bodyEl.innerHTML = `<div id="userBasketPage" style="background-color: #f8f8f8;">
    <header id="booksHeader">
    <div class="header">
            <div class="topHeader">
                <div class="LoginAndBasket">
                <button class="loginBtn">
                <span>ورود / ثبت نام</span>
                <i class="fa-solid fa-user"></i>
                </button>
                    <div class="userBasket">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </div>
                </div>
                <nav class="menu">
                    <ul>
                        <li><span>تماس با ما</span></li>
                        <li>
                            <span>
                                <i class="fa-solid fa-chevron-down"></i>
                                صفحات
                            </span>
                            <ul class="pages">
                            <li><span>وبلاگ</span></li>
                                <li><span>درباره ما</span></li>
                                <li><span>سوالات متداول</span></li>
                                <li>
                                    <span>
                                        <i class="fa-solid fa-chevron-left"></i>
                                        <span>منوی کشویی
                                            <ul class="underMenu">
                                            <li>زیر منو 1</li>
                                                <li>زیر منو 2</li>
                                                <li>زیر منو 3</li>
                                            </ul>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>دسته بندی</span>
                        </li>
                        <li>
                            <span>
                                <i class="fa-solid fa-chevron-down"></i>
                                مجموعه
                            </span>
                            <ul class="collection">
                                <li>
                                    <img src="assets/images/book-10.jpg">
                                    <span class="historical">کتاب های تاریخی</span>
                                </li>
                                <li>
                                    <img src="assets/images/book-9-removebg-preview.png">
                                    <span class="trade">کتاب های ارز مجازی</span>
                                </li>
                                <li>
                                    <img src="assets/images/package3-1-removebg-preview.png">
                                    <span class="art">کتاب های هنر و گرافیک</span>
                                </li>
                                <li>
                                    <img src="assets/images/package2-1-300x300-removebg-preview.png">
                                    <span class="biography">کتاب های بیوگرافی</span>
                                </li>
                            </ul>
                        </li>
                        <li><span id="basketBook">کتاب ها</span></li>
                        <li id="thisFirstPage"><a href="index.html"><span>صفحه اصلی</span></a></li>
                        <img src="assets/images/logo-book-shop.png">
                    </ul>
                </nav>
            </div>
        </div>
        <div id="pagesStatus">
            <div id="statusPage">
                <div id="rightStatus">
                    <span>سبد خرید</span>
                </div>
                <div id="leftStatus">
                    <span>سبد خرید</span>
                    <i class="fa-solid fa-chevron-left"></i>
                    <i class="fa-solid fa-house-chimney"></i>
                </div>
            </div>
        </div>
    </header>
    <main id="main">
        <div id="basket">

            <table style="display:none" id="basketTable">
                <tr id="tr1">
                    <th>تعداد</th>
                    <th>قیمت</th>
                    <th>محصول</th>
                    <th>عکس کتاب</th>
                    <th>حذف</th>
                </tr>
                    
            </table>
            <div style="display:none" id="totalPrice"></div>
        </div>
    </main>
    <footer id="footer">
    <div id="latestNews">
            <div id="news">
                <div class="grouping">
                    <span id="newsBtn" class="grouping-txt">دریافت تخفیف ویژه</span>
                </div>
                <div class="titlesOfBookPage">
                    <h1>برای اخبار جدید به ما بپیوندید</h1>
                </div>
                <div class="searchBox">
                    <input type="text" placeholder="... ایمیل خود را وارد کنید">
                    <div class="iconBox">
                        <span>عضویت</span>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="siteDetails">
            <div id="footerMenu">
                <div id="quote">
                    <img src="assets/images/logo-book-shop.png">
                    <div id="theQuote">
                        <p>وقتی راه را به صورت واضح درک کردید , میتوانید آن را در همه چیز ببینید</p>
                    </div>
                    <div id="quoteAuthor">میاموتو موساشی</div>
                </div>
                <div class="fMenu" id="specialMenu">
                    <ul>
                        <h4>منو سفارشی</h4>
                        <li>صفحه اصلی</li>
                        <li>کتاب ها</li>
                        <li>مجموعه</li>
                        <li>دسته بندی</li>
                    </ul>
                </div>
                <div class="fMenu" id="support">
                    <ul>
                        <h4>پشتیبانی</h4>
                        <li>سوالات متداول</li>
                        <li>قوانین</li>
                        <li>سیاست و قوانین</li>
                        <li>گزارش</li>
                    </ul>
                </div>
                <div class="fMenu" id="aboutUs">
                    <ul>
                        <h4>درباره ما</h4>
                        <li>درباره ما</li>
                        <li>شرکا</li>
                        <li>چشم انداز</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
                </div>
        </div>
        <div id="devDetails">
            <div id="dev">
                <div id="brandsIcon">
                    <a id="instagram" href="https://instagram.com/hamedpyn">
                        <i id="instaI" class="fa-brands fa-instagram"></i>
                    </a>
                    <a id="what" href="https://wa.me/+989306831354">
                    <i id="ws" class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a id="telegram" href="https://t.me/hamedpyn">
                        <i id="tl" class="fa-brands fa-telegram"></i>
                    </a>
                    <a id="github" href="https://github.com/Hamedpyn">
                        <i id="gh" class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div id="devText">
                    <p>این سایت صرفا جهت تمرین و نمونه کار کدنویسی شده است</p>
                    </div>
                    <div id="devEmail">
                    <a href="mailto:hamedpyn@gmail.com">hamedpyn@gmail.com</a>
                    </div>
            </div>
            </div>
    </footer>
    </div>`
}

// Function to check the Products status
function isEmptyBasket() {
    // if mainProduct's length is equal to 0, show an message that says your basket is empty
    if (mainProduct.length == "0") {
        callBackFunc();
        let basket = document.querySelector('#basket');
        let emptyBasket = document.createElement("div");
        emptyBasket.textContent = "سبد خرید شما خالی است";
        emptyBasket.style.cssText = "width: 1066px;height: 100px;border: 1px solid rgb(202 202 202);display: flex;justify-content: flex-end;align-items: center;font-size: 20px;padding-right: 29px;background-color:#f6f6f6;";
        basket.appendChild(emptyBasket);
    } else {
        // if the basket is not empty, call userBasket to add the Products to the Basket
        userBasket()
    }
}

// Swiper Js Library
const swiper = new Swiper(".swiper", {
    loop:true,
    // 3 slides
    slidesPerView: "auto",
    spaceBetween:30,
    centeredSlides:true,
    // set next and prev buttons
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    pagination:{
        clickable:true,
        el:".swiper-pagination"
    },
    // autoplay every 2500ms
    autoplay: {
        delay:2500,
        disableOnInteraction:false
    }
})