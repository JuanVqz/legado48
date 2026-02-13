# Información de Contacto - LEGADO 48°

## 📱 Redes Sociales

### Facebook

| Campo | Información |
|-------|-------------|
| **URL** | https://www.facebook.com/LEGADO48/ |
| **Handle** | @LEGADO48 |
| **Nombre** | LEGADO 48 |
| **Categoría** | Página de Facebook |
| **Uso** | Actualizaciones, eventos, contenido visual |

**Notas de Implementación:**
- Utilizar etiqueta `target="_blank"` para abrir en nueva pestaña
- Atributo `rel="noopener noreferrer"` para seguridad
- Texto visible: "Facebook"
- Subtexto: "@LEGADO48"

---

### Instagram

| Campo | Información |
|-------|-------------|
| **URL** | https://www.instagram.com/legado_48 |
| **Handle** | @legado_48 |
| **Nombre** | LEGADO 48° |
| **Categoría** | Perfil de Instagram |
| **Uso** | Contenido visual, galería, stories |

**Notas de Implementación:**
- Utilizar etiqueta `target="_blank"` para abrir en nueva pestaña
- Atributo `rel="noopener noreferrer"` para seguridad
- Texto visible: "Instagram"
- Subtexto: "@legado_48"

---

## 📞 Contacto Directo

### Email

| Campo | Información |
|-------|-------------|
| **Email** | ventaslegado48@gmail.com |
| **Asunto sugerido** | Contacto desde sitio web |
| **Tiempo de respuesta** | 24-48 horas |

**Notas de Implementación:**
- Utilizar esquema `mailto:` para enlace
- Enlace: `mailto:ventaslegado48@gmail.com`
- Texto visible: "Correo"
- Subtexto: "ventaslegado48@gmail.com"
- No requiere `target="_blank"` (abre cliente de email)

**Ejemplo:**
```html
<a href="mailto:ventaslegado48@gmail.com" class="contact-card">
  <div class="icon-container">
    <i class="fa-regular fa-envelope"></i>
  </div>
  <div class="text-container">
    <h2 class="label">Correo</h2>
    <p class="value">ventaslegado48@gmail.com</p>
  </div>
</a>
```

---

### Teléfono

| Campo | Información |
|-------|-------------|
| **Teléfono** | 951 477 2122 |
| **Formato internacional** | +52 951 477 2122 |
| **País** | México (código +52) |
| **Tipo** | Celular |
| **Horario de atención** | Lunes a Viernes, 9am - 6pm |

**Notas de Implementación:**
- Utilizar esquema `tel:` para enlace (funciona en móvil)
- Enlace: `tel:+529514772122`
- Texto visible: "Teléfono"
- Subtexto: "951 477 2122"
- No requiere `target="_blank"` (inicia llamada en móvil)

**Ejemplo:**
```html
<a href="tel:+529514772122" class="contact-card">
  <div class="icon-container">
    <i class="fa-solid fa-phone"></i>
  </div>
  <div class="text-container">
    <h2 class="label">Teléfono</h2>
    <p class="value">951 477 2122</p>
  </div>
</a>
```

---

## 🌐 URLs Canónicas

| Plataforma | URL Canónica | Short URL (opcional) |
|------------|--------------|---------------------|
| **Página principal** | https://legado48.com | TBD |
| **Facebook** | https://www.facebook.com/LEGADO48/ | fb.com/LEGADO48 |
| **Instagram** | https://www.instagram.com/legado_48 | instagram.com/legado_48 |

---

## 📋 Resumen de Contacto

| Método | Detalle | Enlace | Prioridad |
|--------|--------|--------|-----------|
| Facebook | @LEGADO48 | https://www.facebook.com/LEGADO48/ | Alta |
| Instagram | @legado_48 | https://www.instagram.com/legado_48 | Alta |
| Email | ventaslegado48@gmail.com | mailto:ventaslegado48@gmail.com | Alta |
| Teléfono | 951 477 2122 | tel:+529514772122 | Alta |

---

## 🔒 Consideraciones de Seguridad y Privacidad

### Enlaces Externos (Facebook, Instagram)

Para todos los enlaces que abren en nuevas pestañas, utilizar:
```html
<a href="URL" target="_blank" rel="noopener noreferrer">
  <!-- contenido -->
</a>
```

**Explicación de atributos:**
- `target="_blank"`: Abre enlace en nueva pestaña/ventana
- `rel="noopener"`: Evita que la nueva página pueda acceder a `window.opener`
- `rel="noreferrer"`: No envía información de referencia al nuevo sitio

### Enlaces de Contacto (Email, Teléfono)

No requieren `target="_blank"`:
- `mailto:`: Abre cliente de email del usuario
- `tel:`: Inicia llamada (solo en dispositivos móviles)

---

## 📱 Consideraciones Móviles

### Enlaces Teléfono

Los enlaces `tel:` funcionan de manera diferente según el dispositivo:

| Plataforma | Comportamiento |
|------------|----------------|
| **iOS** | Abre la app de teléfono |
| **Android** | Abre el marcador telefónico |
| **Desktop** | Puede no funcionar (sin soporte nativo) |

### Enlaces Email

Los enlaces `mailto:` funcionan de manera similar en todas las plataformas:
- Abre el cliente de email predeterminado del usuario
- Puede abrir apps de email o servicios web (Gmail, Outlook, etc.)

### Redes Sociales

Los enlaces a Facebook e Instagram siempre deberían abrir en una nueva pestaña para mantener al usuario en el sitio.

---

## 🎨 Iconos Recomendados

### Iconos de Contacto

| Elemento | Icono Font Awesome | Clase |
|----------|-------------------|-------|
| Facebook | Facebook | `fa-brands fa-facebook` |
| Instagram | Instagram | `fa-brands fa-instagram` |
| Email | Envelope | `fa-regular fa-envelope` |
| Teléfono | Phone | `fa-solid fa-phone` |

**Nota**: Utilizar Font Awesome 6 (CDN)

---

## 📊 Analytics y Tracking (Opcional)

Si se desea realizar seguimiento de clics en los enlaces de contacto, se pueden agregar:

### Google Analytics

```html
<a href="URL" onclick="gtag('event', 'click', {'event_category': 'Contact', 'event_label': 'Facebook'})">
  <!-- contenido -->
</a>
```

### UTM Parameters (para redes sociales)

Para seguimiento de tráfico desde el sitio web a redes sociales:

- **Facebook**: `https://www.facebook.com/LEGADO48/?utm_source=website&utm_medium=link&utm_campaign=contact`
- **Instagram**: `https://www.instagram.com/legado_48/?utm_source=website&utm_medium=link&utm_campaign=contact`

---

## 🔄 Actualizaciones

### Última Actualización

- **Fecha**: Febrero 2026
- **Versión**: 1.0

### Historial de Cambios

| Fecha | Cambio | Responsable |
|-------|--------|-------------|
| Feb 2026 | Versión inicial - Documentación de contacto completa | Equipo LEGADO 48° |

---

## 📚 Documentación Adicional

- [`guia-de-marca.md`](guia-de-marca.md) - Guía completa de la marca
- [`colores.md`](colores.md) - Sistema de colores
- [`patrones-diseno.md`](patrones-diseno.md) - Patrones de diseño
- [`guia-desarrollo.md`](guia-desarrollo.md) - Guía técnica

---

## 📞 Contacto para Actualizaciones

Si hay cambios en la información de contacto, por favor notificar a:

- **Email**: ventaslegado48@gmail.com
- **Responsable**: Equipo de desarrollo

---

© 2024 LEGADO 48°. Todos los derechos reservados.
