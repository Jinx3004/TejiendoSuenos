# 🧶 Tejiendo Sueños - Página Web

¡Bienvenido! Esta es tu página web para tu emprendimiento de Crochet.

## 📋 Características Principales

✅ **Paleta de colores pastel** - Diseño cálido y atractivo
✅ **Galerías de productos** - Muestra tus amigurumis, flores tejidas y regalos
✅ **Selección de imágenes** - Carga tus propias imágenes de productos
✅ **Filtrado por categorías** - Los clientes pueden filtrar por tipo de producto
✅ **Filtrado por precio** - Rango de precios dinámico (Q100 - Q300)
✅ **Botón flotante de WhatsApp** - Burbujita para contacto directo
✅ **Integración WhatsApp** - Los clientes pueden consultar sobre productos

---

## 🚀 Cómo Usar

### 1. **Abrir la página**
   - Abre el archivo `index.html` en tu navegador web

### 2. **Cambiar las imágenes de productos**
   - Pasa el mouse sobre cualquier producto
   - Aparecerá un botón "📷 Cambiar Imagen"
   - Haz clic y selecciona la imagen que desees
   - La imagen se guardará automáticamente

### 3. **Usar los filtros**
   - **Filtro por categoría**: Haz clic en los botones para ver:
     - Todos los productos
     - Solo Amigurumis
     - Solo Flores Tejidas
     - Solo Regalos
   
   - **Filtro por precio**: Usa el slider para filtrar por rango de precios

### 4. **Ver detalles de producto**
   - Haz clic en "Ver Detalles" en cualquier producto
   - Se abrirá WhatsApp con un mensaje personalizado
   - El cliente podrá consultar sobre ese producto específico

### 5. **Contacto directo**
   - Usa el botón circular verde de WhatsApp en la esquina inferior derecha
   - Se abrirá WhatsApp con tu número: +502 30725729

---

## 📁 Estructura de Archivos

```
Tejiendo Sueños/
├── index.html          # Archivo principal (HTML)
├── css/
│   └── style.css       # Estilos y colores pastel
├── js/
│   └── script.js       # Funcionalidades (filtros, imágenes, etc.)
├── images/             # Carpeta para tus imágenes de productos
└── README.md           # Este archivo
```

---

## 🎨 Paleta de Colores Pastel

- **Rosa Pastel**: #FFB3D9
- **Azul Pastel**: #B3D9FF
- **Verde Pastel**: #B3FFB3
- **Amarillo Pastel**: #FFFFB3
- **Morado Pastel**: #E6B3FF
- **Durazno Pastel**: #FFD9B3
- **Lavanda Pastel**: #E6D9FF

---

## 📞 Contacto

- **WhatsApp**: +502 30725729
- **Productos**: Amigurumis, Flores Tejidas, Regalos Variados
- **Rango de precios**: Q100 - Q300

---

## 🔧 Personalización

### Cambiar nombre del emprendimiento:
En el archivo `index.html`, busca:
```html
<h1 class="logo">🧶 Tejiendo Sueños</h1>
```
Reemplaza "Tejiendo Sueños" con tu nombre

### Cambiar número de WhatsApp:
En el archivo `index.html`, busca:
```html
<a href="https://wa.me/50230725729?text=...
```
Reemplaza `50230725729` con tu número

### Cambiar rango de precios:
En el archivo `html`, busca:
```html
<input type="range" id="priceRange" min="100" max="300" value="300">
```
Cambia los valores de `min` y `max`

### Agregar más productos:
Copia esta estructura y agrégala al `gallery-grid`:
```html
<div class="product-card" data-category="amigurumis" data-price="150">
    <div class="product-image-container">
        <img src="images/tu-imagen.jpg" alt="Descripción">
        <input type="file" class="image-upload" accept="image/*">
        <button class="upload-btn">📷 Cambiar Imagen</button>
    </div>
    <h3>Nombre del Producto</h3>
    <p class="price">Q150</p>
    <button class="add-to-cart">Ver Detalles</button>
</div>
```

---

## 💡 Características Técnicas

✨ **Responsive Design** - Se adapta a cualquier dispositivo (móvil, tablet, desktop)
✨ **LocalStorage** - Las imágenes se guardan en el navegador
✨ **Sin necesidad de servidor** - Abre y usa directamente
✨ **Animaciones fluidas** - Efectos visuales atractivos
✨ **Compatible con todos los navegadores modernos**

---

## 📱 Dispositivos Soportados

- ✅ Computadora (Desktop)
- ✅ Tablet
- ✅ Móviles (iPhone, Android)

---

## 🐛 Solucionar Problemas

### Las imágenes no aparecen:
1. Asegúrate de que las imágenes estén en la carpeta `images/`
2. Verifica que el nombre de archivo sea correcto
3. Intenta con archivos JPG o PNG

### WhatsApp no abre:
1. Ten instalado WhatsApp Web o WhatsApp Desktop
2. Verifica que el número sea correcto: +502 30725729
3. Intenta desde otro navegador

### Los filtros no funcionan:
1. Recarga la página (F5)
2. Abre la consola (F12) y busca errores
3. Intenta con otro navegador

---

## 📝 Notas Importantes

- ✅ Las imágenes cargadas se guardan en tu navegador (LocalStorage)
- ⚠️ Si limpias el caché del navegador, las imágenes se perderán
- 📲 El botón de WhatsApp funciona en cualquier dispositivo
- 🌐 Puedes compartir la página con otros usuarios

---

## ✅ Checklist de Primeros Pasos

- [ ] Abre `index.html` en tu navegador
- [ ] Carga las imágenes de tus productos
- [ ] Prueba los filtros de categoría y precio
- [ ] Prueba el botón de WhatsApp
- [ ] Comparte con tus amigos y clientes

---

## 🎉 ¡Felicidades!

Tu página web está lista. Ahora puedes:
1. Compartir el link con tus clientes
2. Mostrar tus productos hermosos
3. Recibir consultas directas por WhatsApp
4. Crecer tu emprendimiento de Crochet

**¡Que disfrutes tu página web! 🧶💚**

---

*Página creada con amor para Tejiendo Sueños*
