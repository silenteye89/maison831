#!/bin/bash
# Generate elegant placeholder images as SVGs converted to simple colored blocks
# These will be replaced with real photos later

create_placeholder() {
  local filename=$1
  local color=$2
  local text=$3
  local width=${4:-1920}
  local height=${5:-1080}
  
  cat > "public/images/${filename}" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2C2420;stop-opacity:0.8" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.15)" font-family="Georgia, serif" font-size="48" letter-spacing="8">${text}</text>
</svg>
EOF
}

create_placeholder "hero.jpg" "#3D5A3E" "FOREST VIEW" 1920 1080
create_placeholder "coffee.jpg" "#8B7355" "SPECIALTY COFFEE" 1200 800
create_placeholder "vintage.jpg" "#3D5A3E" "VINTAGE SELECT" 1200 800
create_placeholder "whisky.jpg" "#B8976A" "WHISKY TASTING" 1200 800
create_placeholder "workshop.jpg" "#C4B59E" "WORKSHOP" 1200 800
create_placeholder "bookclub.jpg" "#2C2420" "BOOK CLUB" 1200 800
create_placeholder "boardgame.jpg" "#8B7355" "BOARD GAME" 1200 800
create_placeholder "space-1.jpg" "#C4B59E" "INTERIOR" 1200 800
create_placeholder "space-2.jpg" "#3D5A3E" "FOREST VIEW" 800 600
create_placeholder "space-3.jpg" "#8B7355" "ANTIQUE" 800 600
create_placeholder "space-4.jpg" "#B8976A" "CURATED" 800 1200
create_placeholder "space-5.jpg" "#3D5A3E" "GARDEN" 800 600
create_placeholder "space-6.jpg" "#2C2420" "GALLERY" 800 600
create_placeholder "vintage-1.jpg" "#8B7355" "AUTUMN" 900 1200
create_placeholder "vintage-2.jpg" "#C4B59E" "OBJECTS" 900 1200
create_placeholder "vintage-3.jpg" "#3D5A3E" "MAISON" 900 1200
create_placeholder "vintage-4.jpg" "#B8976A" "EUROPEAN" 900 1200
create_placeholder "rental.jpg" "#C4B59E" "RENTAL SPACE" 900 1200
create_placeholder "portfolio-1.jpg" "#C4B59E" "CAFÉ LUMIÈRE" 900 1200
create_placeholder "portfolio-2.jpg" "#2C2420" "ATELIER NOIR" 900 1200
create_placeholder "portfolio-3.jpg" "#3D5A3E" "MAISON DE FLEUR" 900 1200
create_placeholder "journal-1.jpg" "#C4B59E" "SPACE" 1200 750
create_placeholder "journal-2.jpg" "#8B7355" "COFFEE" 1200 750
create_placeholder "journal-3.jpg" "#3D5A3E" "VINTAGE" 1200 750
create_placeholder "journal-4.jpg" "#B8976A" "LIFESTYLE" 1200 750
create_placeholder "insta-1.jpg" "#C4B59E" "" 800 800
create_placeholder "insta-2.jpg" "#3D5A3E" "" 800 800
create_placeholder "insta-3.jpg" "#8B7355" "" 800 800
create_placeholder "insta-4.jpg" "#B8976A" "" 800 800
create_placeholder "insta-5.jpg" "#2C2420" "" 800 800
create_placeholder "insta-6.jpg" "#C4B59E" "" 800 800

echo "All placeholders generated!"
