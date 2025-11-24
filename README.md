# 🏴‍☠️ One Piece Pokédex - Grand Line Navigator

A stunning web application that combines the cataloging functionality of a Pokédex with the rich universe of One Piece. Browse characters, explore Devil Fruits, and navigate through iconic islands of the Grand Line!

![One Piece Pokédex](https://img.shields.io/badge/One%20Piece-Pok%C3%A9dex-FFD700?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

## ✨ Features

### 🎭 Character Catalog
- **18 Characters** including the complete Straw Hat Pirates crew, major allies, and villains
- Wanted poster-style character cards with authentic pirate aesthetics
- Detailed character profiles with abilities, bounties, and biographies
- Real-time search and filter functionality

### 🍎 Devil Fruit Database
- **10 Iconic Devil Fruits** with complete information
- Type-based categorization (Paramecia, Zoan, Logia)
- Detailed strengths and weaknesses analysis
- Current user information

### 🗺️ Grand Line Mode
- **6 Island Themes** with dynamic backgrounds:
  - 🌊 Open Sea
  - 🏜️ Alabasta
  - 🏗️ Water 7
  - ☁️ Skypiea
  - 🏛️ Dressrosa
  - ⛩️ Wano Country

### 🎨 Premium Design
- Rustic pirate aesthetics with weathered textures
- Smooth animations and micro-interactions
- Fully responsive design for all devices
- Pokédex-style device container with compass-inspired borders

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for running the local server)

### Running the Application

1. **Start the local server:**
   ```powershell
   npx -y http-server "f:/experimentos/pokedex one piece" -p 8080 -c-1
   ```

2. **Open in your browser:**
   ```
   http://127.0.0.1:8080
   ```

### Alternative Server Options

**Using Python:**
```bash
cd "f:/experimentos/pokedex one piece"
python -m http.server 8080
```

**Using Live Server:**
```bash
npx live-server --port=8080
```

## 📁 Project Structure

```
pokedex one piece/
├── index.html              # Main application
├── styles.css              # Complete design system
├── app.js                  # Application logic
├── data/
│   ├── characters.json     # 18 characters
│   └── devil-fruits.json   # 10 Devil Fruits
└── assets/
    ├── characters/         # Character portraits
    ├── devil-fruits/       # Devil Fruit images
    └── placeholders.html   # Image placeholder generator
```

## 🎮 How to Use

### Browse Characters
1. Click on the **⚓ Characters** tab
2. Scroll through the wanted poster-style cards
3. Use the search box to find specific characters
4. Filter by type: Straw Hat Pirates, Allies, or Villains
5. Click any card to view detailed information

### Explore Devil Fruits
1. Click on the **🍎 Devil Fruits** tab
2. Browse through the Devil Fruit catalog
3. Filter by type: Paramecia, Zoan, or Logia
4. Click any fruit to see abilities, strengths, and weaknesses

### Grand Line Mode
1. Click on the **🗺️ Grand Line Mode** tab
2. Select different islands to change the background theme
3. Read about each island's significance
4. Browse all characters with the themed background

## 🎯 Key Features

- ✅ **18 Characters** with complete profiles
- ✅ **10 Devil Fruits** with detailed information
- ✅ **6 Island Themes** for immersive experience
- ✅ **Real-time Search** and filtering
- ✅ **Responsive Design** for all devices
- ✅ **Smooth Animations** and transitions
- ✅ **Modal Detail Views** for in-depth information
- ✅ **Keyboard Support** (ESC to close modals)

## 🎨 Design Highlights

### Color Palette
- **Pirate Browns**: #8B4513, #D2691E
- **Nautical Navy**: #1a2332, #2c3e50
- **Treasure Gold**: #FFD700, #DAA520
- **Ocean Blues**: #006994, #4682B4

### Typography
- **Pirata One**: Dramatic pirate-style headers
- **Cinzel**: Elegant serif for labels
- **Roboto**: Clean body text

### Animations
- Device entrance with 3D rotation
- Card hover effects with elevation
- Modal slide-up transitions
- Smooth background changes

## 📊 Content

### Characters Included

**Straw Hat Pirates (10):**
Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe

**Allies (4):**
Shanks, Ace, Law, Sabo

**Villains (4):**
Crocodile, Doflamingo, Kaido, Big Mom

### Devil Fruits Included

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

## 🔧 Technical Details

- **Pure Vanilla JavaScript** - No frameworks required
- **CSS Grid & Flexbox** - Modern responsive layouts
- **Fetch API** - Asynchronous data loading
- **CSS Custom Properties** - Maintainable design system
- **ES6+ Features** - Modern JavaScript syntax

## 🌟 Highlights

- **Authentic One Piece Aesthetics**: Every detail reflects the series
- **Wanted Poster Design**: Character cards styled as bounty posters
- **Interactive Island Themes**: Dynamic backgrounds from the Grand Line
- **Comprehensive Information**: Rich data for every character and fruit
- **Smooth User Experience**: Professional animations and transitions

## 📝 Notes

### Image System
The application includes an intelligent fallback system for images. If character or Devil Fruit images are not found, it automatically displays SVG placeholders with the character/fruit name. You can replace these with actual artwork by adding images to:
- `assets/characters/` (named according to `characters.json`)
- `assets/devil-fruits/` (named according to `devil-fruits.json`)

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🎉 Enjoy!

Explore the world of One Piece through this immersive Pokédex experience! Search for your favorite characters, learn about Devil Fruits, and navigate through the Grand Line! 

**⚓ Set sail and discover the treasures of the One Piece universe! 🏴‍☠️**

---

*Created with passion for One Piece fans everywhere* ❤️
