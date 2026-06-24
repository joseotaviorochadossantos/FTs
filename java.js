const featuredGallery = document.getElementById('featuredGallery');
const extraGallery = document.getElementById('extraGallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

const fallbackImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80';

// Lista manual dos 100 cards. Troque a imagem de cada um editando a linha correspondente.
const galleryItems = [
    { title: 'GRUPO 1', text: 'Melhores amigas', image: 'img/1.jpg' },
    { title: 'GRUPO 2', text: 'amigos e amigas', image: 'img/2.jpg' },
    { title: 'GRUPO 3', text: 'BONDE DOS MENOR TONY COUNTRY', image: 'img/3.jpg' },
    { title: 'GRUPO 4', text: 'Almoço com os amigos, o ultimo...', image: 'img/4.jpg' },
    { title: 'GRUPO 5', text: 'Recepção dos calouros.', image: 'img/5.jpg' },
    { title: 'GRUPO 6', text: 'Primeira vez no lab de quimica(apredi a ligar um fogão)', image: 'img/6.jpeg' },
    { title: 'Pedro', text: 'queiemi ele com uma massinha de vidro', image: 'img/7.jpg' },
    { title: 'GRUPO 8', text: 'O primeiro momento mais marcante.', image: 'img/8.jpg' },
    { title: 'GRUPO 9', text: 'O primeiro momento mais marcante.', image: 'img/9.jpg' },
    { title: 'GRUPO 10', text: 'O primeiro momento mais marcante.', image: 'img/10.jpg' },
    { title: 'GRUPO 11', text: 'O primeiro momento mais marcante.', image: 'img/11.jpg' },
    { title: 'GRUPO 12', text: 'O primeiro momento mais marcante.', image: 'img/12.jpg' },
    { title: 'GRUPO 13', text: 'O primeiro momento mais marcante.', image: 'img/13.jpg' },
    { title: 'GRUPO 14', text: 'O primeiro momento mais marcante.', image: 'img/14.jpg' },
    { title: 'GRUPO 15', text: 'O primeiro momento mais marcante.', image: 'img/15.jpg' },
    { title: 'GRUPO 16', text: 'O primeiro momento mais marcante.', image: 'img/16.jpg' },
    { title: 'GRUPO 17', text: 'O primeiro momento mais marcante.', image: 'img/17.jpg' },
    { title: 'GRUPO 18', text: 'O primeiro momento mais marcante.', image: 'img/18.jpg' },
    { title: 'GRUPO 19', text: 'O primeiro momento mais marcante.', image: 'img/19.jpg' },
    { title: 'GRUPO 20', text: 'O primeiro momento mais marcante.', image: 'img/20.jpg' },
    { title: 'GRUPO 21', text: 'O primeiro momento mais marcante.', image: 'img/21.jpg' },
    { title: 'GRUPO 22', text: 'O primeiro momento mais marcante.', image: 'img/22.jpg' },
    { title: 'GRUPO 23', text: 'O primeiro momento mais marcante.', image: 'img/23.jpg' },
    { title: 'GRUPO 24', text: 'O primeiro momento mais marcante.', image: 'img/24.jpg' },
    { title: 'GRUPO 25', text: 'O primeiro momento mais marcante.', image: 'img/25.jpg' },
    { title: 'GRUPO 26', text: 'O primeiro momento mais marcante.', image: 'img/26.jpg' },
    { title: 'GRUPO 27', text: 'O primeiro momento mais marcante.', image: 'img/27.jpg' },
    { title: 'GRUPO 28', text: 'O primeiro momento mais marcante.', image: 'img/28.jpg' },
    { title: 'GRUPO 29', text: 'O primeiro momento mais marcante.', image: 'img/29.jpg' },
    { title: 'GRUPO 30', text: 'O primeiro momento mais marcante.', image: 'img/30.jpg' },
    { title: 'GRUPO 31', text: 'O primeiro momento mais marcante.', image: 'img/31.jpg' },
    { title: 'GRUPO 32', text: 'O primeiro momento mais marcante.', image: 'img/32.jpg' },
    { title: 'GRUPO 33', text: 'O primeiro momento mais marcante.', image: 'img/33.jpg' },
    { title: 'GRUPO 34', text: 'O primeiro momento mais marcante.', image: 'img/34.jpg' },
    { title: 'GRUPO 35', text: 'O primeiro momento mais marcante.', image: 'img/35.jpg' },
    { title: 'GRUPO 36', text: 'O primeiro momento mais marcante.', image: 'img/36.jpg' },
    { title: 'GRUPO 37', text: 'O primeiro momento mais marcante.', image: 'img/37.jpg' },
    { title: 'GRUPO 38', text: 'O primeiro momento mais marcante.', image: 'img/38.jpg' },
    { title: 'GRUPO 39', text: 'O primeiro momento mais marcante.', image: 'img/39.jpg' },
    { title: 'GRUPO 40', text: 'O primeiro momento mais marcante.', image: 'img/40.jpg' },
    { title: 'GRUPO 41', text: 'O primeiro momento mais marcante.', image: 'img/41.jpg' },
    { title: 'GRUPO 42', text: 'O primeiro momento mais marcante.', image: 'img/42.jpg' },
    { title: 'GRUPO 43', text: 'O primeiro momento mais marcante.', image: 'img/43.jpg' },
    { title: 'GRUPO 44', text: 'O primeiro momento mais marcante.', image: 'img/44.jpg' },
    { title: 'GRUPO 45', text: 'O primeiro momento mais marcante.', image: 'img/45.jpg' },
    { title: 'GRUPO 46', text: 'O primeiro momento mais marcante.', image: 'img/46.jpg' },
    { title: 'GRUPO 47', text: 'O primeiro momento mais marcante.', image: 'img/47.jpg' },
    { title: 'GRUPO 48', text: 'O primeiro momento mais marcante.', image: 'img/48.jpg' },
    { title: 'GRUPO 49', text: 'O primeiro momento mais marcante.', image: 'img/49.jpg' },
    { title: 'GRUPO 50', text: 'O primeiro momento mais marcante.', image: 'img/50.jpg' },
    { title: 'GRUPO 51', text: 'O primeiro momento mais marcante.', image: 'img/51.jpg' },
    { title: 'GRUPO 52', text: 'O primeiro momento mais marcante.', image: 'img/52.jpg' },
    { title: 'GRUPO 53', text: 'O primeiro momento mais marcante.', image: 'img/53.jpg' },
    { title: 'GRUPO 54', text: 'O primeiro momento mais marcante.', image: 'img/54.jpg' },
    { title: 'GRUPO 55', text: 'O primeiro momento mais marcante.', image: 'img/55.jpg' },
    { title: 'GRUPO 56', text: 'O primeiro momento mais marcante.', image: 'img/56.jpg' },
    { title: 'GRUPO 57', text: 'O primeiro momento mais marcante.', image: 'img/57.jpg' },
    { title: 'GRUPO 58', text: 'O primeiro momento mais marcante.', image: 'img/58.jpg' },
    { title: 'GRUPO 59', text: 'O primeiro momento mais marcante.', image: 'img/59.jpg' },
    { title: 'GRUPO 60', text: 'O primeiro momento mais marcante.', image: 'img/60.jpg' },
    { title: 'GRUPO 61', text: 'O primeiro momento mais marcante.', image: 'img/61.jpg' },
    { title: 'GRUPO 62', text: 'O primeiro momento mais marcante.', image: 'img/62.jpg' },
    { title: 'GRUPO 63', text: 'O primeiro momento mais marcante.', image: 'img/63.jpg' },
    { title: 'GRUPO 64', text: 'O primeiro momento mais marcante.', image: 'img/64.jpg' },
    { title: 'GRUPO 65', text: 'O primeiro momento mais marcante.', image: 'img/65.jpg' },
    { title: 'GRUPO 66', text: 'O primeiro momento mais marcante.', image: 'img/66.jpg' },
    { title: 'GRUPO 67', text: 'O primeiro momento mais marcante.', image: 'img/67.jpg' },
    { title: 'GRUPO 68', text: 'O primeiro momento mais marcante.', image: 'img/68.jpg' },
    { title: 'GRUPO 69', text: 'O primeiro momento mais marcante.', image: 'img/69.jpg' },
    { title: 'GRUPO 70', text: 'O primeiro momento mais marcante.', image: 'img/70.jpg' },
    { title: 'GRUPO 71', text: 'O primeiro momento mais marcante.', image: 'img/71.jpg' },
    { title: 'GRUPO 72', text: 'O primeiro momento mais marcante.', image: 'img/72.jpg' },
    { title: 'GRUPO 73', text: 'O primeiro momento mais marcante.', image: 'img/73.jpg' },
    { title: 'GRUPO 74', text: 'O primeiro momento mais marcante.', image: 'img/74.jpg' },
    { title: 'GRUPO 75', text: 'O primeiro momento mais marcante.', image: 'img/75.jpg' },
    { title: 'GRUPO 76', text: 'O primeiro momento mais marcante.', image: 'img/76.jpg' },
    { title: 'GRUPO 77', text: 'O primeiro momento mais marcante.', image: 'img/77.jpg' },
    { title: 'GRUPO 78', text: 'O primeiro momento mais marcante.', image: 'img/78.jpg' },
    { title: 'GRUPO 79', text: 'O primeiro momento mais marcante.', image: 'img/79.jpg' },
    { title: 'GRUPO 80', text: 'O primeiro momento mais marcante.', image: 'img/80.jpg' },
    { title: 'GRUPO 81', text: 'O primeiro momento mais marcante.', image: 'img/81.jpg' },
    { title: 'GRUPO 82', text: 'O primeiro momento mais marcante.', image: 'img/82.jpg' },
    { title: 'GRUPO 83', text: 'O primeiro momento mais marcante.', image: 'img/83.jpg' },
    { title: 'GRUPO 84', text: 'O primeiro momento mais marcante.', image: 'img/84.jpg' },
    { title: 'GRUPO 85', text: 'O primeiro momento mais marcante.', image: 'img/85.jpg' },
    { title: 'GRUPO 86', text: 'O primeiro momento mais marcante.', image: 'img/86.jpg' },
    { title: 'GRUPO 87', text: 'O primeiro momento mais marcante.', image: 'img/87.jpg' },
    { title: 'GRUPO 88', text: 'O primeiro momento mais marcante.', image: 'img/88.jpg' },
    { title: 'GRUPO 89', text: 'O primeiro momento mais marcante.', image: 'img/89.jpg' },
    { title: 'GRUPO 90', text: 'O primeiro momento mais marcante.', image: 'img/90.jpg' },
    { title: 'GRUPO 91', text: 'O primeiro momento mais marcante.', image: 'img/91.jpg' },
    { title: 'GRUPO 92', text: 'O primeiro momento mais marcante.', image: 'img/92.jpg' },
    { title: 'GRUPO 93', text: 'O primeiro momento mais marcante.', image: 'img/93.jpg' },
    { title: 'GRUPO 94', text: 'O primeiro momento mais marcante.', image: 'img/94.jpg' },
    { title: 'GRUPO 95', text: 'O primeiro momento mais marcante.', image: 'img/95.jpg' },
    { title: 'GRUPO 96', text: 'O primeiro momento mais marcante.', image: 'img/96.jpg' },
    { title: 'GRUPO 97', text: 'O primeiro momento mais marcante.', image: 'img/97.jpg' },
    { title: 'GRUPO 98', text: 'O primeiro momento mais marcante.', image: 'img/98.jpg' },
    { title: 'GRUPO 99', text: 'O primeiro momento mais marcante.', image: 'img/99.jpg' },
    { title: 'GRUPO 100', text: 'O primeiro momento mais marcante.', image: 'img/100.jpg' },
    { title: 'GRUPO 101', text: 'O primeiro momento mais marcante.', image: 'img/101.jpg' },
    { title: 'GRUPO 102', text: 'O primeiro momento mais marcante.', image: 'img/102.jpg' },
    { title: 'GRUPO 103', text: 'O primeiro momento mais marcante.', image: 'img/103.jpg' },
    { title: 'GRUPO 104', text: 'O primeiro momento mais marcante.', image: 'img/104.jpg' },
    { title: 'GRUPO 105', text: 'O primeiro momento mais marcante.', image: 'img/105.jpg' },
    { title: 'GRUPO 106', text: 'O primeiro momento mais marcante.', image: 'img/106.jpg' }
];

function createCard(item, featured = false) {
    const article = document.createElement('article');
    article.className = `card${featured ? ' featured' : ''}`;

    const imageSrc = item.image || fallbackImage;

    article.innerHTML = `
        <img src="${imageSrc}" alt="${item.title}" onerror="this.onerror=null;this.src='${fallbackImage}'">
        <div class="card-body">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    `;

    return article;
}

function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightboxView() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
}

const featuredItems = galleryItems.slice(0, 6);
const extraItems = galleryItems.slice(6);

featuredItems.forEach((item) => {
    const card = createCard(item, true);
    featuredGallery.appendChild(card);
});

extraItems.forEach((item) => {
    const card = createCard(item);
    extraGallery.appendChild(card);
});

document.querySelectorAll('.card img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

closeLightbox.addEventListener('click', closeLightboxView);
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightboxView();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightboxView();
    }
});
