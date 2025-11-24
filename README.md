# 🏴‍☠️ One Piece Pokédex

<div align="center">

![One Piece Banner](https://img.shields.io/badge/One%20Piece-Pok%C3%A9dex-FFD700?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAowAAAKMB8MeazgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRY/hPADCMOjr6KAMDw38S9DAwMPxnYGD4TwYGBgYGhv8MDAwMDP8Z/jMwMPxnYGD4z8DA8J+BgeE/AwPDfwYGhv8MDAwMDAwM/xkYGP4zMDD8Z2Bg+M/AwPCfgYHhPwMDw38GBob/DAwM/xkYGP4zMDD8Z2Bg+M/AwPCfgYHhPwMDw38GBob/DAwM/xkYGP4zMDD8Z2Bg+M/AwPCfgYHhPwMDw38GBob/DAwM/xkYGP4zMDD8Z2Bg+M/AwPCfgYHhPwMDw38GBob/DAwM/xkYGP4zMDD8Z2Bg+M/AwPCfgYHhPwMDw38GBob/DAwM/xkYGP4zMDD8Z2Bg+M/AwPCfgYHhPwMDw38GBob/DAwM/xkYGP4DAKmzTwF7KHqCAAAAAElFTkSuQmCC)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)](https://github.com/fn91/one-piece-pokedex)

**Una aplicación web interactiva estilo Pokédex dedicada al universo de One Piece**

[🚀 Demo en Vivo](#) • [📖 Documentación](#características) • [🤝 Contribuir](#contribuciones)

</div>

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🎨 Capturas de Pantalla](#-capturas-de-pantalla)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎮 Uso](#-uso)
- [🔧 Tecnologías](#-tecnologías)
- [🎯 Características Técnicas](#-características-técnicas)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---

## ✨ Características

### 🎭 Catálogo de Personajes
- **18 personajes icónicos** incluyendo la tripulación completa del Sombrero de Paja, aliados y villanos
- Diseño de **carteles wanted** auténticos con estética pirata
- **Emojis únicos** para cada personaje (👒 Luffy, ⚔️ Zoro, 🗺️ Nami, etc.)
- **Colores temáticos personalizados** por personaje con gradientes únicos
- Perfiles detallados con habilidades, recompensas y biografías
- Búsqueda en tiempo real y sistema de filtrado

### 🍎 Base de Datos de Frutas del Diablo
- **10 Frutas del Diablo icónicas** con información completa
- Categorización por tipo: **Paramecia**, **Zoan**, **Logia**
- Análisis detallado de fortalezas y debilidades
- Información del usuario actual
- Sistema de búsqueda y filtrado

### 🗺️ Modo Grand Line
- **6 temas de islas** con fondos dinámicos:
  - 🌊 **Open Sea** - El vasto océano del Grand Line
  - 🏜️ **Alabasta** - Reino del desierto
  - 🏗️ **Water 7** - Ciudad acuática
  - ☁️ **Skypiea** - Isla en el cielo
  - 🏛️ **Dressrosa** - Reino de las pasiones
  - ⛩️ **Wano Country** - Nación de samurais
- Navegación interactiva entre islas
- Información contextual de cada ubicación

### 🎨 Diseño Premium
- Estética rústica pirata con texturas desgastadas
- Animaciones suaves y micro-interacciones
- **Diseño totalmente responsive** para todos los dispositivos
- Contenedor estilo Pokédex con bordes inspirados en brújulas
- Placeholders SVG generados dinámicamente

---

## 🎨 Capturas de Pantalla

<div align="center">

### Vista Principal
*Carteles wanted con emojis únicos y colores temáticos*

### Modo Grand Line
*Navegación entre islas icónicas con fondos dinámicos*

### Detalles de Personaje
*Información completa con habilidades y biografía*

</div>

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Node.js (para servidor local)

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/fn91/one-piece-pokedex.git
   cd one-piece-pokedex
   ```

2. **Inicia el servidor local:**
   ```bash
   # Opción 1: http-server (recomendado)
   npx -y http-server . -p 8080 -c-1
   
   # Opción 2: Python
   python -m http.server 8080
   
   # Opción 3: Live Server
   npx live-server --port=8080
   ```

3. **Abre en tu navegador:**
   ```
   http://127.0.0.1:8080
   ```

---

## 📁 Estructura del Proyecto

```
one-piece-pokedex/
├── 📄 index.html              # Aplicación principal
├── 🎨 styles.css              # Sistema de diseño completo
├── ⚙️ app.js                  # Lógica de la aplicación
├── 📊 data/
│   ├── characters.json        # 18 personajes
│   └── devil-fruits.json      # 10 Frutas del Diablo
├── 🖼️ assets/
│   ├── characters/            # Retratos de personajes
│   ├── devil-fruits/          # Imágenes de frutas
│   ├── backgrounds/           # Fondos temáticos
│   └── wanted-poster-generator.html  # Generador de carteles
├── 📝 README.md               # Este archivo
└── 🚫 .gitignore              # Archivos ignorados
```

---

## 🎮 Uso

### Explorar Personajes
1. Haz clic en la pestaña **⚓ Personajes**
2. Desplázate por las tarjetas estilo cartel wanted
3. Usa el cuadro de búsqueda para encontrar personajes específicos
4. Filtra por tipo: Tripulación del Sombrero de Paja, Aliados o Villanos
5. Haz clic en cualquier tarjeta para ver información detallada

### Descubrir Frutas del Diablo
1. Haz clic en la pestaña **🍎 Frutas del Diablo**
2. Navega por el catálogo de frutas
3. Filtra por tipo: Paramecia, Zoan o Logia
4. Haz clic en cualquier fruta para ver habilidades, fortalezas y debilidades

### Modo Grand Line
1. Haz clic en la pestaña **🗺️ Modo Grand Line**
2. Selecciona diferentes islas para cambiar el tema de fondo
3. Lee sobre la importancia de cada isla
4. Explora todos los personajes con el fondo temático

---

## 🔧 Tecnologías

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados con variables CSS, Grid y Flexbox
- **JavaScript Vanilla** - Lógica de aplicación sin frameworks
- **JSON** - Base de datos de personajes y frutas
- **SVG** - Placeholders dinámicos
- **Fetch API** - Carga asíncrona de datos

---

## 🎯 Características Técnicas

### 🛡️ Manejo de Errores
- ✅ **Try-catch** en funciones de búsqueda
- ✅ **Validación de entradas** (tipo de dato, datos cargados)
- ✅ **Mensajes de error amigables** cuando no se encuentran resultados
- ✅ **Recuperación automática** sin crashes
- ✅ **Registro en consola** para debugging

### 🎨 Sistema de Diseño
- **18 esquemas de colores únicos** para cada personaje
- **Gradientes personalizados** que reflejan la personalidad
- **Emojis grandes (100px)** como placeholders visuales
- **Animaciones CSS** suaves y profesionales
- **Variables CSS** para fácil mantenimiento

### ⚡ Optimizaciones
- Placeholders SVG generados dinámicamente
- Sin dependencias externas
- Carga asíncrona de datos
- Event delegation para mejor rendimiento
- Código modular y mantenible

### ♿ Accesibilidad
- Navegación por teclado (ESC para cerrar modales)
- Textos alternativos en imágenes
- Contraste de colores adecuado
- Estructura semántica HTML5

---

## 🌈 Paleta de Colores por Personaje

| Personaje | Color Principal | Emoji | Tema |
|-----------|----------------|-------|------|
| Luffy | 🔴 Rojo intenso | 👒 | Pasión y determinación |
| Zoro | 🟢 Verde bosque | ⚔️ | Naturaleza y espadas |
| Nami | 🟠 Naranja brillante | 🗺️ | Mandarinas y clima |
| Usopp | 🟤 Marrón tierra | 🎯 | Madera y francotirador |
| Sanji | 🔵 Azul oscuro | 🍳 | Elegancia y misterio |
| Chopper | 🩷 Rosa dulce | 🦌 | Dulzura y medicina |
| Robin | 🟣 Púrpura misterioso | 📚 | Misterio y arqueología |
| Franky | 🔵 Azul tecnológico | 🔧 | Cyborg y mecánica |
| Brook | ⚫ Gris esqueleto | 🎵 | Esqueleto y música |
| Jinbe | 🔵 Azul océano | 🦈 | Mar y peces |

---

## 📊 Contenido

### Personajes Incluidos (18)

**Tripulación del Sombrero de Paja (10):**
- Monkey D. Luffy
- Roronoa Zoro
- Nami
- Usopp
- Sanji
- Tony Tony Chopper
- Nico Robin
- Franky
- Brook
- Jinbe

**Aliados (4):**
- Shanks
- Portgas D. Ace
- Trafalgar D. Water Law
- Sabo

**Villanos (4):**
- Crocodile
- Donquixote Doflamingo
- Kaido
- Charlotte Linlin (Big Mom)

### Frutas del Diablo Incluidas (10)
- Gomu Gomu no Mi (Hito Hito no Mi, Model: Nika)
- Hito Hito no Mi
- Hana Hana no Mi
- Yomi Yomi no Mi
- Mera Mera no Mi
- Ope Ope no Mi
- Suna Suna no Mi
- Ito Ito no Mi
- Uo Uo no Mi, Model: Seiryu
- Soru Soru no Mi

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Ideas para Contribuir
- 🎨 Añadir más personajes
- 🍎 Incluir más Frutas del Diablo
- 🗺️ Agregar más islas al modo Grand Line
- 🌙 Implementar modo oscuro/claro
- 🔊 Añadir efectos de sonido temáticos
- 📱 Crear versión PWA para uso offline
- 🖼️ Mejorar las imágenes de personajes

---

## 📝 Roadmap

- [ ] Sistema de favoritos
- [ ] Comparador de personajes
- [ ] Modo oscuro/claro
- [ ] Exportar carteles wanted como imágenes
- [ ] Sonidos temáticos de One Piece
- [ ] Versión PWA
- [ ] Más personajes de arcos recientes
- [ ] Sistema de logros/coleccionables

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **Eiichiro Oda** - Creador de One Piece
- **Comunidad de One Piece** - Por la inspiración constante
- **Pokémon** - Por el concepto original de Pokédex

---

## 📧 Contacto

**GitHub:** [@fn91](https://github.com/fn91)

¿Tienes preguntas o sugerencias? No dudes en abrir un [issue](https://github.com/fn91/one-piece-pokedex/issues).

---

<div align="center">

**¡Hecho con ❤️ para los fans de One Piece!**

🏴‍☠️ *"I'm gonna be King of the Pirates!"* - Monkey D. Luffy ⚓

[![GitHub Stars](https://img.shields.io/github/stars/fn91/one-piece-pokedex?style=social)](https://github.com/fn91/one-piece-pokedex)
[![GitHub Forks](https://img.shields.io/github/forks/fn91/one-piece-pokedex?style=social)](https://github.com/fn91/one-piece-pokedex/fork)

</div>
