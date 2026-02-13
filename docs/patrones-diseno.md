# Patrones de Diseño - LEGADO 48°

## 📐 Introducción

Este documento define los patrones de diseño reutilizables utilizados en la página "Próximamente" de LEGADO 48°. Estos patrones aseguran consistencia visual y funcional en toda la aplicación.

---

## 🎨 Patrones de Colores

### Patrón 1: Fondo Oscuro con Texto Claro

**Uso**: Fondo principal de la página

```css
.background-dark {
  background-color: var(--bg-primary);  /* #03463E - Brunswick Green */
  color: var(--text-primary);          /* #FBEFC5 - Lemon Chiffon */
}
```

**Cuando usar:**
- ✅ Fondo de toda la página
- ✅ Secciones principales
- ✅ Contenedores oscuros

**Variaciones:**
- Fondo semi-transparente: `rgba(3, 70, 62, 0.8)` (80% opacidad)

---

### Patrón 2: Acento en Amarillo/Orange

**Uso**: Highlights, call-to-action, títulos destacados

```css
.accent-yellow {
  color: var(--accent);  /* #FFCA05 - Jonquil */
}

.accent-orange {
  color: var(--hover-color);  /* #EF6122 - Giants Orange */
}
```

**Cuando usar:**
- ✅ Texto "PRÓXIMAMENTE"
- ✅ Call-to-action
- ✅ Iconos de contacto
- ✅ Estados hover

---

## 📐 Patrones de Tipografía

### Patrón 1: Brand Name - Extra Large

**Uso**: Nombre de la marca "LEGADO 48°"

```css
.brand-name {
  font-family: var(--font-main);  /* Montserrat */
  font-weight: 700;  /* Bold */
  font-size: 2.5rem;  /* 40px - Mobile */
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Tablet */
@media (min-width: 768px) {
  .brand-name {
    font-size: 3rem;  /* 48px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .brand-name {
    font-size: 4rem;  /* 64px */
  }
}

/* Large Screens */
@media (min-width: 1440px) {
  .brand-name {
    font-size: 4.5rem;  /* 72px */
  }
}
```

**Variaciones:**
- Mobile: 2.5rem (40px)
- Tablet: 3rem (48px)
- Desktop: 4rem (64px)
- Large: 4.5rem (72px)

---

### Patrón 2: Título Destacado - Large

**Uso**: Texto "PRÓXIMAMENTE" y otros títulos importantes

```css
.coming-soon {
  font-family: var(--font-main);  /* Montserrat */
  font-weight: 600;  /* SemiBold */
  font-size: 1.75rem;  /* 28px - Mobile */
  color: var(--accent);  /* #FFCA05 - Jonquil */
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Tablet */
@media (min-width: 768px) {
  .coming-soon {
    font-size: 2rem;  /* 32px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .coming-soon {
    font-size: 2.5rem;  /* 40px */
  }
}
```

**Variaciones:**
- Mobile: 1.75rem (28px)
- Tablet: 2rem (32px)
- Desktop: 2.5rem (40px)

---

### Patrón 3: Texto de Tarjeta - Medium

**Uso**: Títulos dentro de las tarjetas de contacto

```css
.card-label {
  font-family: var(--font-main);
  font-weight: 600;  /* SemiBold */
  font-size: 1rem;  /* 16px */
  margin-bottom: 0.25rem;
}
```

---

### Patrón 4: Texto Secundario - Small

**Uso**: Valores dentro de las tarjetas de contacto

```css
.card-value {
  font-family: var(--font-main);
  font-weight: 400;  /* Regular */
  font-size: 0.875rem;  /* 14px */
  opacity: 0.9;
}
```

---

## 🎯 Patrones de Componentes

### Patrón 1: Tarjeta de Contacto

**Uso**: Tarjetas que muestran información de contacto con icono + texto

```css
.contact-card {
  background-color: var(--card-bg);  /* Keppel semi-transparente */
  border: 2px solid var(--border-color);  /* Keppel */
  border-radius: 12px;
  padding: var(--spacing-md);  /* 2rem */
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);  /* 2rem */
  transition: all 0.3s ease;
  min-height: 72px;  /* Touch-friendly */
}

/* Estado Hover */
.contact-card:hover {
  border-color: var(--hover-color);  /* Giants Orange */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 97, 34, 0.2);
}

/* Mobile (Apilado verticalmente) */
.contact-card {
  width: 100%;
}

/* Tablet (Grid 2x2) */
@media (min-width: 768px) {
  .contact-card {
    width: calc(50% - var(--spacing-md));
  }
}

/* Desktop (Horizontal) */
@media (min-width: 1024px) {
  .contact-card {
    width: calc(50% - var(--spacing-md));
    max-width: 400px;
  }
}
```

**Estructura HTML:**

```html
<a href="URL" class="contact-card" target="_blank" rel="noopener noreferrer">
  <div class="icon-container">
    <i class="fa-brands fa-facebook"></i>
  </div>
  <div class="text-container">
    <h2 class="label">Facebook</h2>
    <p class="value">@LEGADO48</p>
  </div>
</a>
```

**Variaciones:**
- Full-width (mobile)
- 50% width (tablet/desktop)
- Max-width 400px (desktop)

---

### Patrón 2: Icon Container

**Uso**: Contenedor para iconos de contacto

```css
.icon-container {
  font-size: 1.5rem;  /* 24px */
  color: var(--icon-color);  /* #FFCA05 - Jonquil */
  flex-shrink: 0;
}

/* Hover */
.contact-card:hover .icon-container {
  color: var(--hover-color);  /* #EF6122 - Giants Orange */
}
```

---

### Patrón 3: Text Container

**Uso**: Contenedor para texto dentro de tarjetas

```css
.text-container {
  text-align: left;
  flex: 1;
}
```

---

## 📐 Patrones de Layout

### Patrón 1: Contenedor Centralizado

**Uso**: Contenedor principal que centra todo el contenido

```css
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-md);  /* 2rem */
}

.container {
  text-align: center;
  max-width: 320px;  /* Mobile */
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 900px;
  }
}

/* Large Screens */
@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}
```

---

### Patrón 2: Grid Responsive

**Uso**: Sección de contacto con tarjetas en grid

```css
.contact-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);  /* 1rem */
}

/* Tablet - Grid 2x2 */
@media (min-width: 768px) {
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);  /* 2rem */
  }
}

/* Desktop - Horizontal */
@media (min-width: 1024px) {
  .contact-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--spacing-lg);  /* 3rem */
    flex-wrap: wrap;
  }
}
```

**Variaciones:**
- Columna simple (mobile)
- Grid 2x2 (tablet)
- Horizontal (desktop)

---

## 🎨 Patrones de Espaciado

### Patrón 1: Espaciado entre Elementos

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 2rem;     /* 32px */
  --spacing-lg: 3rem;     /* 48px */
}
```

**Uso:**

| Espaciado | Tamaño | Uso |
|-----------|--------|-----|
| `--spacing-xs` | 0.5rem (8px) | Margen pequeño entre elementos cercanos |
| `--spacing-sm` | 1rem (16px) | Gap entre tarjetas (mobile) |
| `--spacing-md` | 2rem (32px) | Padding de tarjetas, gap tablet |
| `--spacing-lg` | 3rem (48px) | Margen entre secciones, gap desktop |

---

## ✨ Patrones de Animación

### Patrón 1: Hover Suave

**Uso**: Transición suave en estados hover

```css
.transition-smooth {
  transition: all 0.3s ease;
}
```

**Uso en tarjetas:**

```css
.contact-card {
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: var(--hover-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 97, 34, 0.2);
}
```

**Propiedades animadas:**
- `border-color`: Keppel → Giants Orange
- `transform`: translateY(-2px) - efecto de elevación
- `box-shadow`: Aparece sombra naranja suave

---

### Patrón 2: Color Transition

**Uso**: Transición de color suave

```css
.transition-color {
  transition: color 0.3s ease;
}

.icon-container {
  transition: color 0.3s ease;
}

.contact-card:hover .icon-container {
  color: var(--hover-color);
}
```

---

## 📱 Patrones Responsive

### Patrón 1: Mobile-First Breakpoints

```css
/* Mobile (Base) - 320px+ */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Screens */ }
```

**Uso:**
- Escribir estilos para móvil primero
- Añadir media queries con `min-width` para pantallas más grandes
- No usar `max-width` (evita specificity issues)

---

### Patrón 2: Fluid Typography

**Uso**: Tipografía que escala fluidamente con el viewport

```css
/* Método 1: Clamps */
.brand-name {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
}

/* Método 2: Media Queries */
.brand-name {
  font-size: 2.5rem;
}

@media (min-width: 768px) {
  .brand-name {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .brand-name {
    font-size: 4rem;
  }
}
```

**Recomendación**: Usar media queries para mayor control en breakpoints específicos.

---

## 🎨 Patrones de Accesibilidad

### Patrón 1: Touch Targets

**Uso**: Elementos interactivos con tamaño mínimo para toque

```css
.contact-card {
  min-height: 72px;  /* Mínimo 44x44px (WCAG) */
  padding: var(--spacing-md);
}
```

**Recomendación**: Mínimo 44x44px (WCAG 2.1 AAA), ideal 48x48px o más.

---

### Patrón 2: Focus States

**Uso**: Estados de foco para navegación por teclado

```css
.contact-card:focus {
  outline: 2px solid var(--accent);  /* Jonquil */
  outline-offset: 2px;
}
```

**Importante**: Asegurar que los estados de foco sean visibles y claros.

---

## 📋 Checklist de Patrones

Antes de crear un nuevo componente, verificar:

- [ ] ¿Sigue el patrón de colores de la marca?
- [ ] ¿Utiliza tipografía Montserrat?
- [ ] ¿Es responsive (mobile-first)?
- [ ] ¿Tiene estados hover en desktop?
- [ ] ¿Tiene estados focus para accesibilidad?
- [ ] ¿Los touch targets son de al menos 44x44px?
- [ ) ¿Las animaciones son suaves (0.2s - 0.3s)?
- [ ] ¿El contraste cumple WCAG AA+?

---

## 📚 Documentación Adicional

- [`guia-de-marca.md`](guia-de-marca.md) - Guía completa de la marca
- [`colores.md`](colores.md) - Sistema de colores
- [`informacion-contacto.md`](informacion-contacto.md) - Información de contacto
- [`guia-desarrollo.md`](guia-desarrollo.md) - Guía técnica de implementación

---

## 🔄 Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | Febrero 2026 | Versión inicial - Patrones de diseño completos |

---

© 2024 LEGADO 48°. Todos los derechos reservados.
