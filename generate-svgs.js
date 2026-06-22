const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'projects');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function generateSvg(title, width, height, isMobile) {
  const bgColor = "#0A0A0A";
  const frameColor = "#121212";
  const accentColor = "#222222";
  const textPrimary = "#FFFFFF";
  const textSecondary = "#888888";

  const rx = isMobile ? 32 : 16;

  let content = '';
  if (isMobile) {
    content = `
      <rect x="0" y="0" width="${width}" height="${height}" fill="${bgColor}" />
      <!-- Device Frame -->
      <rect x="20" y="20" width="${width-40}" height="${height-40}" rx="${rx}" fill="${frameColor}" stroke="${accentColor}" stroke-width="1.5"/>
      <!-- Notch -->
      <rect x="${width/2 - 50}" y="20" width="100" height="20" rx="10" fill="${bgColor}"/>
      
      <!-- Content lines -->
      <rect x="40" y="80" width="${width-80}" height="40" rx="8" fill="${accentColor}" opacity="0.5"/>
      <rect x="40" y="140" width="${width-80}" height="120" rx="12" fill="${accentColor}" opacity="0.3"/>
      <rect x="40" y="280" width="${width/2-50}" height="100" rx="12" fill="${accentColor}" opacity="0.3"/>
      <rect x="${width/2+10}" y="280" width="${width/2-50}" height="100" rx="12" fill="${accentColor}" opacity="0.3"/>
      
      <rect x="40" y="400" width="${width-80}" height="80" rx="12" fill="${accentColor}" opacity="0.3"/>
      <rect x="40" y="500" width="${width-80}" height="80" rx="12" fill="${accentColor}" opacity="0.3"/>
      
      <text x="${width/2}" y="${height/2 + 200}" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="${textPrimary}" text-anchor="middle" opacity="0.8">${title}</text>
      <text x="${width/2}" y="${height/2 + 225}" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="${textSecondary}" text-anchor="middle" opacity="0.6">Mobile App View</text>
    `;
  } else {
    content = `
      <rect x="0" y="0" width="${width}" height="${height}" fill="${bgColor}" />
      <!-- Browser Frame -->
      <rect x="40" y="40" width="${width-80}" height="${height-80}" rx="${rx}" fill="${frameColor}" stroke="${accentColor}" stroke-width="1.5"/>
      
      <!-- Window Controls -->
      <circle cx="65" cy="65" r="5" fill="${accentColor}" />
      <circle cx="85" cy="65" r="5" fill="${accentColor}" />
      <circle cx="105" cy="65" r="5" fill="${accentColor}" />
      
      <line x1="40" y1="90" x2="${width-40}" y2="90" stroke="${accentColor}" stroke-width="1.5"/>
      
      <!-- Sidebar -->
      <rect x="40" y="90" width="200" height="${height-130}" fill="${bgColor}" opacity="0.2"/>
      <rect x="60" y="120" width="160" height="24" rx="4" fill="${accentColor}" opacity="0.5"/>
      <rect x="60" y="160" width="120" height="16" rx="4" fill="${accentColor}" opacity="0.3"/>
      <rect x="60" y="192" width="140" height="16" rx="4" fill="${accentColor}" opacity="0.3"/>
      <rect x="60" y="224" width="130" height="16" rx="4" fill="${accentColor}" opacity="0.3"/>
      <rect x="60" y="256" width="150" height="16" rx="4" fill="${accentColor}" opacity="0.3"/>
      
      <!-- Main Content Header -->
      <rect x="280" y="120" width="${width-360}" height="48" rx="8" fill="${accentColor}" opacity="0.2"/>
      
      <!-- Data Cards -->
      <rect x="280" y="200" width="${(width-400)/3}" height="140" rx="12" fill="${accentColor}" opacity="0.3"/>
      <rect x="${280 + (width-400)/3 + 20}" y="200" width="${(width-400)/3}" height="140" rx="12" fill="${accentColor}" opacity="0.3"/>
      <rect x="${280 + (width-400)/3*2 + 40}" y="200" width="${(width-400)/3}" height="140" rx="12" fill="${accentColor}" opacity="0.3"/>
      
      <!-- Main Chart/Table -->
      <rect x="280" y="370" width="${width-360}" height="280" rx="12" fill="${accentColor}" opacity="0.2"/>
      
      <!-- Title Overlay -->
      <text x="${width/2 + 100}" y="${height/2 - 20}" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="700" fill="${textPrimary}" text-anchor="middle" opacity="0.9" letter-spacing="-1">${title}</text>
      <text x="${width/2 + 100}" y="${height/2 + 20}" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="${textSecondary}" text-anchor="middle" opacity="0.7">Enterprise Dashboard</text>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    ${content}
  </svg>`;
}

const projects = [
  { slug: "simponi", title: "SIMPONI" },
  { slug: "dpmptsp", title: "DPMPTSP" },
  { slug: "mpp", title: "MPP Digital" }
];

projects.forEach(p => {
  fs.writeFileSync(path.join(dir, p.slug + '-desktop.svg'), generateSvg(p.title, 1440, 900, false));
  fs.writeFileSync(path.join(dir, p.slug + '-mobile.svg'), generateSvg(p.title, 390, 844, true));
});

console.log("SVG placeholders generated successfully.");
