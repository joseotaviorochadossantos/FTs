const featuredGallery = document.getElementById('featuredGallery');
const extraGallery = document.getElementById('extraGallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

const galleryItems = [
    { title: 'Grupo 1', text: 'O primeiro momento mais marcante.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Grupo 2', text: 'Um dos encontros que vale lembrar.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Grupo 3', text: 'Mais uma lembrança especial.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Grupo 4', text: 'Esse espaço é seu para personalizar.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Grupo 5', text: 'O destaque principal da sua galeria.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Grupo 6', text: 'Mais um grupo para destacar.', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80' }
];

for (let index = 7; index <= 100; index += 1) {
    galleryItems.push({
        title: `Grupo ${index}`,
        text: 'Mais uma memória para o álbum.',
        image: `https://picsum.photos/seed/grupo${index}/800/600`
    });
}

function createCard(item, featured = false) {
    const article = document.createElement('article');
    article.className = `card${featured ? ' featured' : ''}`;

    article.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
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
