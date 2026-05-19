/* ============================================
   FUNCIONALIDADES JAVASCRIPT
   ============================================ */

// Variables Globales
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

// ============================================
// FUNCIONES DE FILTRADO POR CATEGORÍA
// ============================================
function filterByCategory(category) {
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'todos' || cardCategory === category) {
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
    // Log de inicialización
    console.log('✅ Tejiendo Sueños - Página cargada correctamente');
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
