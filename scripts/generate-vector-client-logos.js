const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

const svgLogos = {
  'ranipur-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <!-- Outer Hex/Gear Badge -->
      <polygon points="25,2 46,14 46,38 25,50 4,38 4,14" fill="#0B1B3D" stroke="#6CBD43" stroke-width="2"/>
      <!-- Inner Stalks / Pan Symbol -->
      <path d="M25 10 V40 M25 18 L18 12 M25 24 L32 18 M25 30 L17 24 M25 34 L33 28" stroke="#6CBD43" stroke-width="2" stroke-linecap="round"/>
      <circle cx="25" cy="8" r="2.5" fill="#E2E8F0"/>
    </g>
    <!-- Corporate Typography -->
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">RANIPUR</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#6CBD43" letter-spacing="1">SUGAR MILLS LTD</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">SINDH • ESTD 1991</text>
  </svg>`,

  'matiari-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <circle cx="25" cy="25" r="24" fill="#14532D" stroke="#F59E0B" stroke-width="2"/>
      <path d="M25 6 C16 16 14 34 25 44 C36 34 34 16 25 6 Z" fill="#F59E0B" opacity="0.9"/>
      <text x="25" y="29" font-family="serif" font-size="12" font-weight="bold" fill="#14532D" text-anchor="middle">M</text>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">MATIARI</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#15803D" letter-spacing="1">SUGAR MILLS LTD</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">MATIARI GROUP</text>
  </svg>`,

  'bandhi-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <rect x="4" y="4" width="42" height="42" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <path d="M12 36 L25 12 L38 36 Z" fill="none" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="25" cy="26" r="4" fill="#38BDF8"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">BANDHI</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#0284C7" letter-spacing="1">SUGAR MILLS LTD</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">NAWABSHAH • SINDH</text>
  </svg>`,

  'gulf-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <circle cx="25" cy="25" r="23" fill="#1E3A8A" stroke="#93C5FD" stroke-width="2"/>
      <path d="M14 25 C14 18 20 14 25 14 C32 14 36 20 36 25 C36 32 30 36 25 36" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      <circle cx="25" cy="25" r="3" fill="#F59E0B"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">GULF SUGAR</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#1E40AF" letter-spacing="1">MILLS LIMITED</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">INDUSTRIAL DIVISION</text>
  </svg>`,

  'new-dadu-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <rect x="5" y="5" width="40" height="40" rx="8" fill="#991B1B" stroke="#FCA5A5" stroke-width="2"/>
      <path d="M15 35 V15 L35 35 V15" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">NEW DADU</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#B91C1C" letter-spacing="1">SUGAR MILLS LTD</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">DADU • SINDH</text>
  </svg>`,

  'tharparkar-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <circle cx="25" cy="25" r="23" fill="#D97706" stroke="#FEF3C7" stroke-width="2"/>
      <path d="M15 35 L25 15 L35 35 Z" fill="#FFFFFF"/>
      <circle cx="25" cy="18" r="2" fill="#D97706"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">THARPARKAR</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#D97706" letter-spacing="1">SUGAR MILLS</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">MIRPURKHAS REGION</text>
  </svg>`,

  'naudero-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <polygon points="25,5 45,39 5,39" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
      <path d="M25 16 V34 M19 28 L31 28" stroke="#10B981" stroke-width="2"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">NAUDERO</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#059669" letter-spacing="1">SUGAR MILLS</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">LARKANA • SINDH</text>
  </svg>`,

  'chamber-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <rect x="6" y="6" width="38" height="38" rx="6" fill="#334155" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="25" cy="25" r="9" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="3 2"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">CHAMBER</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#D97706" letter-spacing="1">SUGAR MILLS</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">TANDO ALLAHYAR</text>
  </svg>`,

  'tando-allahyar-sugar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" fill="none">
    <rect width="240" height="80" rx="8" fill="#F8FAFC"/>
    <g transform="translate(14, 15)">
      <circle cx="25" cy="25" r="23" fill="#166534" stroke="#86EFAC" stroke-width="2"/>
      <path d="M17 33 C17 21 25 15 25 15 C25 15 33 21 33 33" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="25" cy="30" r="3" fill="#86EFAC"/>
    </g>
    <text x="72" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="900" fill="#0B1B3D" letter-spacing="-0.3">NEW TANDO ALLAH YAR</text>
    <text x="72" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#16A34A" letter-spacing="1">SUGAR MILLS</text>
    <text x="72" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="600" fill="#64748B">RASHIDABAD • SINDH</text>
  </svg>`
};

for (const [filename, content] of Object.entries(svgLogos)) {
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log('Saved', filename);
}

