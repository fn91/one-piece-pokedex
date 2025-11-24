# 🏴‍☠️ Generador de Carteles Wanted - Guía de Uso

## 📋 Descripción

He creado un generador completo de carteles "WANTED" (Se Busca) estilo One Piece con diseños personalizados para cada uno de los 17 personajes de la Pokédex.

## ✨ Características

### Carteles Incluidos

**Tripulación del Sombrero de Paja (9 personajes):**
- ⚔️ Roronoa Zoro - ₿1,111,000,000
- 🗺️ Nami - ₿366,000,000
- 🎯 God Usopp - ₿500,000,000
- 🍳 Sanji - ₿1,032,000,000
- 🦌 Tony Tony Chopper - ₿1,000
- 📚 Nico Robin - ₿930,000,000
- 🔧 Franky - ₿394,000,000
- 🎵 Brook - ₿383,000,000
- 🦈 Jinbe - ₿1,100,000,000

**Aliados (4 personajes):**
- 👑 Shanks - ₿4,048,900,000
- 🔥 Portgas D. Ace - ₿550,000,000
- 💀 Trafalgar D. Water Law - ₿3,000,000,000
- 🔥 Sabo - ₿602,000,000

**Villanos (4 personajes):**
- 🏜️ Crocodile - ₿1,965,000,000
- 🕶️ Donquixote Doflamingo - ₿340,000,000
- 🐉 Kaido - ₿4,611,100,000
- 👸 Charlotte Linlin (Big Mom) - ₿4,388,000,000

### Diseño Personalizado por Personaje

Cada cartel tiene:
- ✅ **Esquema de colores único** basado en el personaje
- ✅ **Emoji representativo** del personaje
- ✅ **Recompensa oficial** actualizada
- ✅ **Rol y afiliación** del personaje
- ✅ **Estilo "WANTED"** auténtico de One Piece
- ✅ **Decoraciones doradas** en las esquinas
- ✅ **Efecto hover** con rotación y elevación

## 🎨 Paleta de Colores por Personaje

| Personaje | Color Principal | Tema |
|-----------|----------------|------|
| Zoro | Verde oscuro | Espadas y naturaleza |
| Nami | Naranja brillante | Mandarinas y clima |
| Usopp | Marrón tierra | Madera y francotirador |
| Sanji | Azul oscuro/negro | Elegancia y cocina |
| Chopper | Rosa | Dulzura y medicina |
| Robin | Púrpura | Misterio y arqueología |
| Franky | Azul tecnológico | Cyborg y mecánica |
| Brook | Gris oscuro | Esqueleto y música |
| Jinbe | Azul océano | Mar y peces |
| Shanks | Rojo intenso | Pelo rojo y poder |
| Ace | Naranja fuego | Llamas y calor |
| Law | Negro/gris | Oscuridad y cirugía |
| Sabo | Naranja/dorado | Fuego y revolución |
| Crocodile | Beige arena | Desierto y arena |
| Doflamingo | Rosa/magenta | Flamenco y hilos |
| Kaido | Púrpura/índigo | Dragón y poder |
| Big Mom | Rosa/dorado | Dulces y poder |

## 🚀 Cómo Usar

### Acceso Rápido
El generador está disponible en:
```
http://127.0.0.1:8080/assets/wanted-poster-generator.html
```

### Funciones Disponibles

#### 1. **Ver Todos los Carteles**
- Abre la página y desplázate para ver todos los diseños
- Cada cartel tiene su propio estilo visual único

#### 2. **Imprimir Carteles**
- Haz clic en el botón **"🖨️ Imprimir Todos los Carteles"**
- Se abrirá el diálogo de impresión
- Puedes imprimir en papel o guardar como PDF

#### 3. **Guardar como PDF**
```
1. Clic en "Imprimir Todos los Carteles"
2. En el diálogo de impresión, selecciona "Guardar como PDF"
3. Elige la ubicación y guarda
```

#### 4. **Personalizar Carteles**

##### Cambiar Recompensa:
```html
<div class="bounty-amount">₿ 1,111,000,000</div>
<!-- Cambia el número a la recompensa deseada -->
```

##### Cambiar Nombre:
```html
<div class="character-name">Roronoa Zoro</div>
<!-- Cambia el nombre del personaje -->
```

##### Cambiar Rol:
```html
<div class="character-role">Espadachín de los Piratas del Sombrero de Paja</div>
<!-- Cambia la descripción del rol -->
```

##### Añadir Imagen Real:
```html
<!-- Reemplaza esto: -->
<div class="portrait-placeholder">
  <span class="portrait-emoji">⚔️</span>
  <div class="portrait-text">Roronoa Zoro</div>
</div>

<!-- Con esto: -->
<img src="ruta/a/imagen-zoro.jpg" alt="Roronoa Zoro" style="width: 100%; height: 100%; object-fit: cover;">
```

## 🎯 Casos de Uso

### 1. **Decoración de Eventos**
- Imprime los carteles para decorar fiestas temáticas de One Piece
- Usa como pósters para habitaciones de fans

### 2. **Proyectos Escolares**
- Material visual para presentaciones sobre One Piece
- Recursos educativos sobre diseño gráfico

### 3. **Contenido para Redes Sociales**
- Guarda como PDF y comparte en redes sociales
- Crea contenido temático para comunidades de One Piece

### 4. **Colección Personal**
- Imprime y colecciona todos los carteles
- Crea un álbum de personajes favoritos

## 🔧 Personalización Avanzada

### Cambiar Colores de Fondo

Encuentra la clase CSS del personaje y modifica el gradiente:

```css
.zoro-poster .portrait-container {
  background: linear-gradient(135deg, #2d5016, #4a7c2f);
  /* Cambia estos colores hexadecimales */
}
```

### Añadir Nuevos Personajes

1. Copia un bloque completo de cartel existente
2. Cambia el nombre de la clase (ej: `.nuevo-personaje-poster`)
3. Actualiza todos los textos
4. Añade estilos CSS personalizados

### Modificar Tamaño de Impresión

Ajusta el CSS para cambiar el tamaño de los carteles:

```css
.wanted-poster {
  width: 400px;  /* Ajusta el ancho */
  /* El alto se ajustará automáticamente */
}
```

## 📱 Compatibilidad

- ✅ **Navegadores**: Chrome, Firefox, Safari, Edge
- ✅ **Dispositivos**: Desktop, Tablet, Mobile
- ✅ **Impresión**: Compatible con impresoras y PDF
- ✅ **Responsive**: Se adapta a diferentes tamaños de pantalla

## 💡 Consejos y Trucos

### Para Mejor Calidad de Impresión:
1. Usa papel de alta calidad (180-200 gsm)
2. Imprime en modo "Alta Calidad"
3. Considera papel con textura para efecto vintage

### Para Efecto Envejecido:
1. Imprime en papel beige o crema
2. Arruga ligeramente el papel antes de imprimir
3. Usa té o café para manchar los bordes (después de imprimir)

### Para Uso Digital:
1. Guarda como PDF en alta resolución
2. Usa herramientas de captura de pantalla para imágenes individuales
3. Comparte directamente desde el navegador

## 🎨 Ejemplos de Uso Creativo

### Juego de Mesa Personalizado
- Usa los carteles como cartas de personajes
- Crea un juego de memoria con parejas de carteles

### Calendario Temático
- Asigna un personaje a cada mes
- Imprime 12 carteles para crear un calendario anual

### Marcadores de Libros
- Imprime en tamaño reducido
- Recorta y plastifica para marcadores duraderos

### Pegatinas
- Imprime en papel adhesivo
- Recorta y usa como pegatinas personalizadas

## 📊 Especificaciones Técnicas

- **Formato**: HTML5 + CSS3
- **Fuentes**: Google Fonts (Pirata One, Cinzel, Roboto)
- **Tamaño de Cartel**: 320px ancho (responsive)
- **Altura de Retrato**: 280px
- **Colores**: Paleta personalizada por personaje
- **Animaciones**: Hover effects con CSS transitions
- **Impresión**: Optimizado con @media print

## 🆘 Solución de Problemas

### Los carteles no se ven bien al imprimir
- Asegúrate de que "Gráficos de fondo" esté activado en las opciones de impresión

### Las fuentes no se cargan
- Verifica tu conexión a internet (las fuentes vienen de Google Fonts)
- Espera unos segundos para que las fuentes se descarguen

### Los colores se ven diferentes
- Calibra tu monitor
- Ajusta la configuración de color de tu impresora

### El PDF es muy grande
- Reduce la calidad de impresión
- Imprime solo los carteles que necesites

## 🌟 Características Destacadas

1. **17 Diseños Únicos**: Cada personaje tiene su propio estilo visual
2. **Recompensas Oficiales**: Todas las cifras están actualizadas
3. **Estilo Auténtico**: Diseño fiel a los carteles de One Piece
4. **Fácil de Usar**: No requiere conocimientos técnicos
5. **Personalizable**: Código HTML/CSS fácil de modificar
6. **Listo para Imprimir**: Optimizado para impresión física y PDF

## 📝 Notas Adicionales

- Los emojis son placeholders - puedes reemplazarlos con imágenes reales
- El diseño es completamente responsive
- Los efectos hover solo funcionan en dispositivos con mouse
- La impresión oculta automáticamente elementos innecesarios (botones, instrucciones)

---

**¡Disfruta creando tus carteles wanted de One Piece!** 🏴‍☠️⚓

*Creado con pasión para los fans de One Piece* ❤️
