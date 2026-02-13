# Guía de Desarrollo - LEGADO 48°

## 🚀 Introducción

Esta guía proporciona las instrucciones técnicas necesarias para desarrollar, modificar y mantener la página "Próximamente" de LEGADO 48°.

---

## 📂 Estructura de Archivos

```
legado48/
├── docs/                          # Documentación
│   ├── guia-de-marca.md          # Guía de la marca
│   ├── colores.md                # Sistema de colores
│   ├── informacion-contacto.md   # Información de contacto
│   ├── patrones-diseno.md        # Patrones de diseño
│   └── guia-desarrollo.md        # Este archivo
├── index.html                     # Página principal
├── style.css                      # Hoja de estilos
├── README.md                      # Documentación del proyecto
└── .gitignore                     # Archivos ignorados por Git
```

---

## 🎨 Uso de Colores en CSS

### Variables CSS (CSS Custom Properties)

Todos los colores de la marca se definen como variables CSS en `style.css`:

```css
:root {
  /* Subset de Colores de Marca */
  --bg-primary: #03463E;      /* Brunswick Green - Fondo principal */
  --text-primary: #FBEFC5;    /* Lemon Chiffon - Texto principal */
  --accent: #FFCA05;          /* Jonquil - Resaltado/Highlight */
  --border-color: #37AF9F;    /* Keppel - Bordes de tarjetas */
  --hover-color: #EF6122;     /* Giants Orange - Estados hover */
  
  /* Colores Adicionales */
  --card-bg: rgba(3, 70, 62, 0.8);  /* Keppel semi-transparente */
  --icon-color: #FFCA05;     /* Jonquil - Iconos */
}
```

### Cómo Usar las Variables

**Correcto:**
```css
.hero {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

**Incorrecto (no usar hardcode):**
```css
.hero {
  background-color: #03463E;  /* ❌ No hardcodear colores */
  color: #FBEFC5;
}
```

### Ventajas de Usar Variables

- ✅ Mantenibilidad fácil: Cambiar color en un solo lugar
- ✅ Consistencia garantizada: Siempre los mismos colores
- ✅ Futura expansión: Fácil añadir temas nuevos
- ✅ Documentación integrada: Nombre de color en código

---

## 📐 Enfoque Mobile-First

### Concepto

Mobile-First significa escribir CSS primero para pantallas pequeñas (móvil), y luego añadir media queries para pantallas más grandes.

### Por Qué Mobile-First

- ✅ Mejor performance en móviles (CSS más pequeño)
- ✅ Prioriza el dispositivo más utilizado
- ✅ CSS más limpio y mantenible
- ✅ Evita specificity issues

### Implementación

```css
/* Mobile (Base) - 320px+ */
body {
  padding: var(--spacing-md);
}

.container {
  max-width: 320px;
}

.brand-name {
  font-size: 2.5rem;
}

/* Tablet - 768px+ */
@media (min-width: 768px) {
  .container {
    max-width: 640px;
  }
  
  .brand-name {
    font-size: 3rem;
  }
}

/* Desktop - 1024px+ */
@media (min-width: 1024px) {
  .container {
    max-width: 900px;
  }
  
  .brand-name {
    font-size: 4rem;
  }
}

/* Large Screens - 1440px+ */
@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
  
  .brand-name {
    font-size: 4.5rem;
  }
}
```

### Reglas Importantes

1. **Usar `min-width` NO `max-width`**
   - ✅ `@media (min-width: 768px)`
   - ❌ `@media (max-width: 767px)`

2. **Orden de Media Queries**
   - Mobile (base) → Tablet → Desktop → Large
   - No mezclar `min-width` y `max-width`

3. **Sólo añadir lo que cambia**
   - Si el mobile funciona en desktop, no añadir media query

---

## 🎯 Tipografía

### Google Fonts - Montserrat

```html
<!-- Agregar en <head> de index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
```

### Uso en CSS

```css
:root {
  --font-main: 'Montserrat', sans-serif;
}

body {
  font-family: var(--font-main);
}
```

### Peso de Fuente

| Peso | Valor | Uso |
|------|-------|-----|
| Regular | 400 | Texto secundario, valores |
| SemiBold | 600 | Títulos de tarjetas |
| Bold | 700 | Nombre de marca |

---

## 🎨 Font Awesome - Iconos

### CDN

```html
<!-- Agregar en <head> de index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

### Iconos Utilizados

| Elemento | Clase Font Awesome |
|----------|-------------------|
| Facebook | `fa-brands fa-facebook` |
| Instagram | `fa-brands fa-instagram` |
| Email | `fa-regular fa-envelope` |
| Teléfono | `fa-solid fa-phone` |

### Ejemplo de Uso

```html
<div class="icon-container">
  <i class="fa-brands fa-facebook"></i>
</div>
```

---

## 🚀 Despliegue

### Opciones de Hosting

#### 1. GitHub Pages (Gratis)

```bash
# 1. Push a GitHub
git add .
git commit -m "Add LEGADO 48° coming soon page"
git push origin main

# 2. Habilitar GitHub Pages en:
#    Settings > Pages > Source: main branch
```

**URL resultante**: `https://[username].github.io/legado48/`

#### 2. Netlify (Gratis)

```bash
# Opción 1: Drag & Drop
# Arrastrar carpeta al dashboard de Netlify

# Opción 2: CLI
npm install -g netlify-cli
netlify deploy
```

**URL resultante**: `https://random-name.netlify.app`

#### 3. Vercel (Gratis)

```bash
# 1. Push a GitHub
# 2. Conectar repositorio en vercel.com
# 3. Deploy automático
```

**URL resultante**: `https://legado48.vercel.app`

#### 4. Hosting Tradicional

Subir archivos por FTP/SFTP al servidor:
- `index.html`
- `style.css`

---

## ✅ Checklist de Calidad

### Antes de Commit

- [ ] HTML5 válido (https://validator.w3.org/)
- [ ] CSS válido (https://jigsaw.w3.org/css-validator/)
- [ ] Contraste WCAG AA+ (https://webaim.org/resources/contrastchecker/)
- [ ] Enlaces funcionales
- [ ] Responsive en todos los breakpoints
- [ ] Imágenes optimizadas (si aplica)
- [ ] Sin errores en consola

### Testing Manual

#### Mobile Testing
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13)
- [ ] 414px (iPhone 12/13 Pro Max)
- [ ] 360px (Android常见)

#### Tablet Testing
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape)

#### Desktop Testing
- [ ] 1024px (Desktop pequeño)
- [ ] 1440px (Desktop grande)
- [ ] 1920px (Full HD)

#### Browser Testing
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)

---

## 🔧 Notas de Compatibilidad

### Soporte de Navegadores

| Navegador | Versión Mínima | Notas |
|-----------|----------------|-------|
| Chrome | 90+ | ✅ Soporte completo |
| Firefox | 88+ | ✅ Soporte completo |
| Safari | 14+ | ✅ Soporte completo |
| Edge | 90+ | ✅ Soporte completo |
| IE | ❌ | No soportado |

### Características CSS Utilizadas

| Característica | Soporte | Fallback |
|----------------|---------|----------|
| CSS Variables | 95%+ | No necesario (navegadores modernos) |
| Flexbox | 99%+ | No necesario |
| Grid | 95%+ | No necesario |
| RGBA | 99%+ | No necesario |

---

## 🎨 Buenas Prácticas de CSS

### 1. Usar Variables CSS

```css
/* ✅ Correcto */
.hero {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

/* ❌ Incorrecto */
.hero {
  background-color: #03463E;
  color: #FBEFC5;
}
```

### 2. Mobile-First

```css
/* ✅ Correcto */
.container {
  max-width: 320px;
}

@media (min-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* ❌ Incorrecto */
@media (max-width: 767px) {
  .container {
    max-width: 320px;
  }
}
```

### 3. Evitar !important

```css
/* ✅ Correcto */
.button-primary {
  background-color: var(--accent);
}

/* ❌ Incorrecto */
.button-primary {
  background-color: var(--accent) !important;
}
```

### 4. Usar Unidades Relativas

```css
/* ✅ Correcto */
font-size: 1rem;
padding: var(--spacing-md);
max-width: 100%;

/* ❌ Incorrecto */
font-size: 16px;
padding: 32px;
max-width: 320px;
```

---

## 🐛 Debugging

### Herramientas

**Chrome DevTools:**
- `Cmd + Opt + I` (Mac)
- `Ctrl + Shift + I` (Windows/Linux)

**Firefox DevTools:**
- `Cmd + Opt + I` (Mac)
- `Ctrl + Shift + I` (Windows/Linux)

### Comandos Útiles

**Responsive Design Mode:**
- Chrome: `Cmd + Shift + M` (Mac)
- Chrome: `Ctrl + Shift + M` (Windows/Linux)

**Inspect Element:**
- `Cmd + Opt + C` (Mac)
- `Ctrl + Shift + C` (Windows/Linux)

---

## 📚 Recursos Adicionales

### Documentación
- [MDN - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [CSS-Tricks](https://css-tricks.com/)

### Herramientas
- [Coolors](https://coolors.co/) - Generador de paletas
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Can I Use](https://caniuse.com/) - Soporte de características

### Inspiración
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

---

## 🔄 Flujo de Trabajo

### Desarrollo Local

1. **Crear rama para cambios**
   ```bash
   git checkout -b feature/nuevo-componente
   ```

2. **Hacer cambios**
   - Editar `index.html` o `style.css`

3. **Probar localmente**
   - Abrir `index.html` en navegador
   - Probar en diferentes tamaños de pantalla

4. **Validar**
   - HTML5 validator
   - CSS validator
   - Contrast checker

5. **Commit y push**
   ```bash
   git add .
   git commit -m "Add: descripción de cambios"
   git push origin feature/nuevo-componente
   ```

6. **Pull Request**
   - Crear PR en GitHub
   - Solicitar review

---

## 📝 Convenciones de Commit

```
<tipo>: <descripción>

[opcional: cuerpo]

[opcional: pie]
```

**Tipos:**
- `add`: Nuevo feature
- `fix`: Bug fix
- `update`: Actualización de código existente
- `docs`: Cambios en documentación
- `style`: Formato, puntos y comas, etc.
- `refactor`: Refactorización
- `test`: Añadir tests
- `chore`: Cambios en build, herramientas, etc.

**Ejemplos:**
```
add: Add contact card component
fix: Fix spacing on mobile devices
update: Update brand colors to new palette
docs: Add development guide
style: Format CSS with Prettier
```

---

## 📞 Soporte

### Para Desarrolladores

Si tienes preguntas técnicas sobre el desarrollo:

1. Revisa esta guía
2. Consulta documentación en `docs/`
3. Busca en MDN o Stack Overflow
4. Contacta al equipo responsable

### Para Actualizaciones

Si hay cambios en la información de contacto o marca:

1. Actualizar archivos relevantes en `docs/`
2. Actualizar `index.html` y `style.css` si aplica
3. Validar cambios
4. Commit con mensaje descriptivo

---

## 🔄 Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | Febrero 2026 | Versión inicial - Guía de desarrollo completa |

---

## 📚 Documentación Adicional

- [`guia-de-marca.md`](guia-de-marca.md) - Guía completa de la marca
- [`colores.md`](colores.md) - Sistema de colores
- [`informacion-contacto.md`](informacion-contacto.md) - Información de contacto
- [`patrones-diseno.md`](patrones-diseno.md) - Patrones de diseño

---

© 2024 LEGADO 48°. Todos los derechos reservados.
