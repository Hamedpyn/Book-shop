// Select DOM Elements
const booksLi = document.querySelector('#books');
const watchBookPage = document.querySelector('#watch-BookPage');
const container = document.querySelector('#container');
const booksPageContainer = document.querySelector('#booksPageContainer');
const spinner = document.querySelector('#spinner');
const thisBookPage = document.querySelector('#thisBookPage');
const thisFirstPage = document.querySelector('#thisFirstPage');
const firstPage = document.querySelector('#firstPage');
const allBtn = document.querySelector('#allBtn');
const bodyEl = document.body;
const booksObject = document.querySelector("#booksObject");

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

// Function to toggle visibility of elements
function toggleVisibility(hide, show) {
    hide.style.display = 'none';
    show.style.display = 'block';
}
