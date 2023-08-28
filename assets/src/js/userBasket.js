
function userBasket() {
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
    const bookBasketPage = document.querySelector('#basketBook').addEventListener('click', () => {
        bodyEl.innerHTML = "";
        booksPageHtml()
        const thisBookPage = document.querySelector('#thisBookPage');
        thisBookPage.classList.add("active")
    })
}

containerBasket.addEventListener('click', userBasket)