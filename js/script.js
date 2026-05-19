/* ============================================
   FUNCIONALIDADES JAVASCRIPT
   ============================================ */

// Variables Globales
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const priceRange = document.getElementById('priceRange');
const priceDisplay = document.getElementById('priceDisplay');
const uploadButtons = document.querySelectorAll('.upload-btn');
const imageUploads = document.querySelectorAll('.image-upload');

// ============================================
// FUNCIONES DE FILTRADO POR CATEGORÍA
// ============================================
function filterByCategory(category) {
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'todos' || cardCategory === category) {
            card.classList.remove('hidden');
            // Verificar también el filtro de precio
            filterByPrice();
        } else {
            card.classList.add('hidden');
        }
    });
}

// ============================================
// FUNCIONES DE FILTRADO POR PRECIO
// ============================================
function filterByPrice() {
    const maxPrice = parseInt(priceRange.value);
    priceDisplay.textContent = `Q100 - Q${maxPrice}`;

    productCards.forEach(card => {
        if (card.classList.contains('hidden')) return;
        
        const cardPrice = parseInt(card.getAttribute('data-price'));
        if (cardPrice <= maxPrice) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ============================================
// EVENT LISTENERS PARA FILTROS
// ============================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        // Filtrar por categoría
        const category = button.getAttribute('data-filter');
        filterByCategory(category);
    });
});

// Event listener para filtro de precio
priceRange.addEventListener('input', filterByPrice);

// ============================================
// FUNCIONALIDAD DE CARGA DE IMÁGENES
// ============================================
uploadButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        imageUploads[index].click();
    });
});

imageUploads.forEach((input, index) => {
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        
        if (file) {
            // Validar que sea una imagen
            if (!file.type.startsWith('image/')) {
                alert('Por favor selecciona un archivo de imagen válido');
                return;
            }

            // Validar tamaño (máximo 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('La imagen debe tener un tamaño máximo de 5MB');
                return;
            }

            // Crear URL de la imagen
            const reader = new FileReader();
            reader.onload = (event) => {
                const productCard = uploadButtons[index].closest('.product-card');
                const productImage = productCard.querySelector('.product-image');
                productImage.src = event.target.result;
                
                // Guardar en localStorage para persistencia
                const productName = productCard.querySelector('h3').textContent;
                localStorage.setItem(`product-image-${productName}`, event.target.result);
                
                // Mostrar notificación de éxito
                showNotification('✅ Imagen actualizada correctamente');
            };
            reader.readAsDataURL(file);
        }
    });
});

// ============================================
// FUNCIÓN DE NOTIFICACIONES
// ============================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #B3FFB3 0%, #90EE90 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// FUNCIONALIDAD DE "VER DETALLES"
// ============================================
const viewDetailsButtons = document.querySelectorAll('.add-to-cart');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('.product-image').src;

        // Crear mensaje para WhatsApp
        const message = `Hola Tejiendo Sueños! Me interesa ${productName} (${productPrice}). ¿Puedes darme más detalles?`;
        const whatsappUrl = `https://wa.me/50230725729?text=${encodeURIComponent(message)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});

// ============================================
// CARGAR IMÁGENES GUARDADAS DEL LOCALSTORAGE
// ============================================
function loadSavedImages() {
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent;
        const savedImage = localStorage.getItem(`product-image-${productName}`);
        
        if (savedImage) {
            const productImage = card.querySelector('.product-image');
            productImage.src = savedImage;
        }
    });
}

// ============================================
// AGREGAR ESTILOS PARA ANIMACIONES
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .product-card {
        animation: fadeIn 0.5s ease;
    }

    .product-card.hidden {
        display: none;
        animation: none;
    }
`;
document.head.appendChild(style);

// ============================================
// INICIALIZAR LA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar imágenes guardadas
    loadSavedImages();
    
    // Log de inicialización
    console.log('✅ Tejiendo Sueños - Página cargada correctamente');
    console.log('📸 Sistema de carga de imágenes: Activo');
    console.log('🎯 Filtros de productos: Activos');
    console.log('💬 WhatsApp: +502 30725729');
});

// ============================================
// FUNCIONALIDAD EXTRA: Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// FUNCIONALIDAD EXTRA: Dark Mode (Opcional)
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verificar si el usuario tiene dark mode habilitado
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============================================
// FUNCIONALIDAD: Conteo de clicks en WhatsApp
// ============================================
const whatsappBubble = document.querySelector('.whatsapp-bubble');
whatsappBubble.addEventListener('click', () => {
    const clickCount = parseInt(localStorage.getItem('whatsapp-clicks') || 0) + 1;
    localStorage.setItem('whatsapp-clicks', clickCount);
    console.log(`📊 Clicks en WhatsApp: ${clickCount}`);
});
