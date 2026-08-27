export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  addedDate: string;
}

export interface WeaponData {
  id: string;
  name: string;
  category: 'Primary' | 'Secondary' | 'Melee' | 'Utility';
  rarity: 'Mythical' | 'Legendary' | 'Rare' | 'Uncommon' | 'Common';
  headshotDamage: number;
  bodyDamage: number;
  fireRateRPM: number;
  magazineSize: number;
  reloadTimeSec: number;
  ttk100hp: number; // in seconds
  ttk150hp: number; // in seconds
  effectiveRange: string;
  description: string;
  proTip: string;
}

export interface TierItem {
  name: string;
  category: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  reason: string;
  statsSummary: string;
}

export interface CrosshairPreset {
  id: string;
  name: string;
  author: string;
  code: string;
  color: string;
  length: number;
  thickness: number;
  gap: number;
  dotSize: number;
  showDot: boolean;
  outline: boolean;
  opacity: number;
}

export interface MapGuide {
  id: string;
  name: string;
  environment: string;
  playstyle: string;
  description: string;
  callouts: string[];
  keyStrategies: string[];
}

export const GAME_INFO = {
  title: "Roblox Rivals Wiki & Database",
  subtitle: "Interactive Crosshair Configurator, Weapon TTK Calculator & 2026 Codes",
  description: "The ultimate interactive database for Roblox Rivals. Customize crosshair codes, calculate weapon TTK and damage stats, view 2026 meta tier lists, and redeem active working codes.",
  url: "https://rivals.robloxwikihub.com",
  stats: [
    { label: "Developer", value: "Nosniy Games" },
    { label: "Platform", value: "Roblox (PC, Mobile, Console)" },
    { label: "Genre", value: "Fast-Paced FPS / Shooter" },
    { label: "Max Prestige", value: "Prestige 10" },
    { label: "Engine", value: "Custom High-Tick Physics" },
    { label: "Active Players", value: "150,000+ Concurrent" }
  ]
};

export const ACTIVE_CODES: CodeItem[] = [
  {
    code: "FREE195",
    rewards: "3x Weapon Keys",
    status: "active",
    addedDate: "2026-08-27"
  },
  {
    code: "CANNONBALLLLL",
    rewards: "5x Goodie Bags",
    status: "active",
    addedDate: "2026-08-27"
  },
  {
    code: "COMMUNITY24",
    rewards: "1x Community Wrap (Random Weapon)",
    status: "active",
    addedDate: "2026-08-27"
  },
  {
    code: "BONUS",
    rewards: "1x Weapon Key",
    status: "active",
    addedDate: "2026-08-27"
  },
  {
    code: "BOOST",
    rewards: "1x Weapon Key",
    status: "active",
    addedDate: "2026-08-27"
  },
  {
    code: "ROBLOX_RTC",
    rewards: "5x Weapon Keys",
    status: "active",
    addedDate: "2026-08-27"
  },
  {
    code: "ELBILLUG",
    rewards: "Fun Secret Item",
    status: "active",
    addedDate: "2026-08-27"
  }
];

export const EXPIRED_CODES: CodeItem[] = [
  {
    code: "ALPHA_TEST_2025",
    rewards: "10 Keys",
    status: "expired",
    addedDate: "2025-11-01"
  }
];

export const WEAPONS: WeaponData[] = [
  {
    id: "assault-rifle",
    name: "Assault Rifle (AR-47)",
    category: "Primary",
    rarity: "Legendary",
    headshotDamage: 36,
    bodyDamage: 22,
    fireRateRPM: 650,
    magazineSize: 30,
    reloadTimeSec: 2.1,
    ttk100hp: 0.28,
    ttk150hp: 0.46,
    effectiveRange: "Medium to Long Range",
    description: "Versatile, highly controllable rifle capable of 3-tap headshot kills at medium ranges.",
    proTip: "First 3 shots have zero recoil. Tap-fire at long ranges to guarantee headshots."
  },
  {
    id: "heavy-sniper",
    name: "Heavy Sniper Rifle",
    category: "Primary",
    rarity: "Mythical",
    headshotDamage: 160,
    bodyDamage: 95,
    fireRateRPM: 48,
    magazineSize: 5,
    reloadTimeSec: 3.2,
    ttk100hp: 0.00,
    ttk150hp: 0.00,
    effectiveRange: "Long to Extreme Range",
    description: "One-shot headshot weapon against full armor players. High bullet speed with armor penetration.",
    proTip: "Combine with slide-cancel quick-scoping for devastating CQC surprise kills."
  },
  {
    id: "pump-shotgun",
    name: "Pump Action Shotgun",
    category: "Primary",
    rarity: "Rare",
    headshotDamage: 130,
    bodyDamage: 90,
    fireRateRPM: 72,
    magazineSize: 6,
    reloadTimeSec: 2.8,
    ttk100hp: 0.00,
    ttk150hp: 0.83,
    effectiveRange: "Close Quarters (0-10m)",
    description: "Extreme point-blank damage. Pellets hit hard enough to instantly eliminate unarmored foes.",
    proTip: "Jump and slide past container corners to close distance before triggering the shot."
  },
  {
    id: "vulcan-minigun",
    name: "Vulcan Minigun",
    category: "Primary",
    rarity: "Legendary",
    headshotDamage: 24,
    bodyDamage: 15,
    fireRateRPM: 950,
    magazineSize: 100,
    reloadTimeSec: 4.5,
    ttk100hp: 0.31,
    ttk150hp: 0.44,
    effectiveRange: "Medium Range Suppressive",
    description: "Sustained fire beast capable of melting multiple enemies holding narrow choke points.",
    proTip: "Hold right-click to pre-spin barrels before jumping around corners."
  },
  {
    id: "dual-uzis",
    name: "Dual Micro Uzis",
    category: "Secondary",
    rarity: "Rare",
    headshotDamage: 20,
    bodyDamage: 13,
    fireRateRPM: 1050,
    magazineSize: 40,
    reloadTimeSec: 1.8,
    ttk100hp: 0.23,
    ttk150hp: 0.34,
    effectiveRange: "Close Range Sprint",
    description: "Blistering rate of fire. Insane hip-fire accuracy during slide cancels.",
    proTip: "Switch to Uzis when primary mag is empty during intense 1v1 CQC duels."
  },
  {
    id: "heavy-revolver",
    name: "Magnum Revolver (.44)",
    category: "Secondary",
    rarity: "Legendary",
    headshotDamage: 75,
    bodyDamage: 45,
    fireRateRPM: 180,
    magazineSize: 6,
    reloadTimeSec: 2.2,
    ttk100hp: 0.33,
    ttk150hp: 0.66,
    effectiveRange: "Medium Range Precision",
    description: "2-shot body kill or 1-shot headshot + body tap combo. Favored by high-skill duelists.",
    proTip: "Line up headshots while counter-strafing behind hard cover."
  },
  {
    id: "shadow-katana",
    name: "Shadow Katana",
    category: "Melee",
    rarity: "Mythical",
    headshotDamage: 110,
    bodyDamage: 80,
    fireRateRPM: 130,
    magazineSize: 1,
    reloadTimeSec: 0.0,
    ttk100hp: 0.00,
    ttk150hp: 0.46,
    effectiveRange: "Melee Lunge Range",
    description: "Grants +15% movement speed when equipped. Forward lunge attack slices through shields.",
    proTip: "Equip Katana when rotating across open map areas to maximize movement speed."
  },
  {
    id: "frag-grenade",
    name: "Frag Grenade",
    category: "Utility",
    rarity: "Uncommon",
    headshotDamage: 125,
    bodyDamage: 125,
    fireRateRPM: 30,
    magazineSize: 2,
    reloadTimeSec: 5.0,
    ttk100hp: 0.00,
    ttk150hp: 0.00,
    effectiveRange: "Throwable AoE",
    description: "Cookable explosive grenade that deals lethal damage in a 5-meter blast radius.",
    proTip: "Cook grenade for 1.5 seconds before throwing over walls into objective points."
  }
];

export const TIER_LIST: TierItem[] = [
  {
    name: "Heavy Sniper Rifle",
    category: "Primary",
    tier: "S+",
    reason: "Instant one-shot headshot kill potential across any distance; unmatched game-changing impact in 1v1 duels.",
    statsSummary: "Head: 160 dmg | TTK: 0.00s | Range: Extreme"
  },
  {
    name: "Assault Rifle (AR-47)",
    category: "Primary",
    tier: "S+",
    reason: "The most consistent and reliable gun in the entire game. Zero initial recoil and fast 0.28s TTK.",
    statsSummary: "Head: 36 dmg | Body: 22 dmg | RPM: 650"
  },
  {
    name: "Shadow Katana",
    category: "Melee",
    tier: "S+",
    reason: "Passively boosts movement speed by +15% when pulled out; lunge strike one-shots unarmored enemies.",
    statsSummary: "Lunge: 110 dmg | Movement: +15% Speed"
  },
  {
    name: "Magnum Revolver (.44)",
    category: "Secondary",
    tier: "S",
    reason: "Deals 75 headshot damage; the best secondary for switching after an initial primary bullet hit.",
    statsSummary: "Head: 75 dmg | Body: 45 dmg | RPM: 180"
  },
  {
    name: "Dual Micro Uzis",
    category: "Secondary",
    tier: "S",
    reason: "1050 RPM fire rate destroys CQC enemies in 0.23 seconds during slide cancels.",
    statsSummary: "Head: 20 dmg | RPM: 1050 | Mag: 40"
  },
  {
    name: "Pump Action Shotgun",
    category: "Primary",
    tier: "A",
    reason: "Devastating in close-quarters CQC maps like Warehouse, but drops off heavily past 12 meters.",
    statsSummary: "Point-Blank: 130 dmg | Mag: 6"
  },
  {
    name: "Vulcan Minigun",
    category: "Primary",
    tier: "A",
    reason: "Huge 100-round mag and pre-spin capability can lock down entire choke points.",
    statsSummary: "Head: 24 dmg | Mag: 100 | Spin-up: 0.4s"
  },
  {
    name: "Frag Grenade",
    category: "Utility",
    tier: "A",
    reason: "Clears out defenders hiding behind deployable shields or corner obstacles.",
    statsSummary: "Max Explosion: 125 dmg | Radius: 5m"
  }
];

export const CROSSHAIR_PRESETS: CrosshairPreset[] = [
  {
    id: "pro-dot-red",
    name: "S1mple Pro Red Dot",
    author: "Rivals Pro Player",
    code: "RIVALS-DOT-RED-99",
    color: "#FF2233",
    length: 0,
    thickness: 0,
    gap: 0,
    dotSize: 3.5,
    showDot: true,
    outline: true,
    opacity: 1.0
  },
  {
    id: "cs-classic-green",
    name: "CS-Classic Green Cross",
    author: "Tactical Gamer",
    code: "RIVALS-CROSS-GRN-01",
    color: "#00FF66",
    length: 7,
    thickness: 2,
    gap: 3,
    dotSize: 0,
    showDot: false,
    outline: true,
    opacity: 0.9
  },
  {
    id: "neon-cyan-clean",
    name: "Valorant Neon Cyan",
    author: "Aim God",
    code: "RIVALS-CYAN-VAL-44",
    color: "#00FFFF",
    length: 5,
    thickness: 1.5,
    gap: 2,
    dotSize: 0,
    showDot: false,
    outline: false,
    opacity: 1.0
  },
  {
    id: "crimson-crosshair",
    name: "Aggressive Crimson",
    author: "High-FPS Duelist",
    code: "RIVALS-CRIMSON-77",
    color: "#FF0055",
    length: 9,
    thickness: 2.5,
    gap: 4,
    dotSize: 2,
    showDot: true,
    outline: true,
    opacity: 1.0
  },
  {
    id: "minimal-white",
    name: "Minimal White Plus",
    author: "Clean Aesthetics",
    code: "RIVALS-WHITE-MINI-11",
    color: "#FFFFFF",
    length: 4,
    thickness: 1,
    gap: 1,
    dotSize: 1.5,
    showDot: true,
    outline: true,
    opacity: 0.95
  }
];

export const MAPS: MapGuide[] = [
  {
    id: "warehouse",
    name: "Warehouse CQC",
    environment: "Industrial Shipping Container Docks",
    playstyle: "Fast CQC & Shotgun / Dual Uzi Slide Duels",
    description: "Dense shipping containers create tight corners and high-perch sniper towers.",
    callouts: ["Central Crane", "Blue Container Perch", "Red Vent Flank", "Dock Ramp"],
    keyStrategies: [
      "Use Shadow Katana or Dual Uzis to quickly rotate between shipping containers.",
      "Control Central Crane high ground with Heavy Sniper to pin down enemy spawns.",
      "Watch out for players slide-canceling out of Red Vent Flank."
    ]
  },
  {
    id: "desert-outpost",
    name: "Desert Outpost",
    environment: "Sun-drenched Military Ruins & Bunkers",
    playstyle: "Long-Range Sniping & Assault Rifle Sightlines",
    description: "Wide open sandy terrain with underground bunker tunnels connecting north and south bases.",
    callouts: ["Sniper Ridge", "Underground Bunker A", "Helipad Center", "Ruined Tower"],
    keyStrategies: [
      "Equip Assault Rifle or Heavy Sniper; open terrain heavily rewards long-range precision.",
      "Flank through Underground Bunker A with Frag Grenades to surprise entrenched snipers.",
      "Use Deployable Shield when capping the open Helipad Center objective."
    ]
  },
  {
    id: "arena-x",
    name: "Arena X",
    environment: "Symmetrical Futuristic Cyber Arena",
    playstyle: "Tournament 1v1 & Balanced Duel Arena",
    description: "Symmetrical 3-lane arena built specifically for competitive Ranked 1v1 and 2v2 duels.",
    callouts: ["Mid Ramp", "Pillar 1", "Pillar 2", "Health Spawn Room"],
    keyStrategies: [
      "Pre-aim Mid Ramp at round start; first shot land gives massive momentum.",
      "Control Health Spawn Room timing to steal healing power-ups from opponents."
    ]
  }
];

export const GUIDES = [
  {
    title: "Mastering Slide-Cancel Movement in Rivals",
    category: "Movement Mastery",
    readTime: "4 min read",
    summary: "Learn how to instantly reset your sprint cooldown by combining Slide + Jump + Crouch to become an unhittable target.",
    steps: [
      "Sprint forward and press Crouch (C or Ctrl) to initiate slide.",
      "0.2 seconds into the slide, tap Jump (Spacebar) to cancel downward momentum.",
      "Immediately tap Sprint again to trigger full sprint speed without deceleration."
    ]
  },
  {
    title: "Sensitivity Converter: Valorant & CS2 to Rivals",
    category: "Aim Optimization",
    readTime: "3 min read",
    summary: "Match your muscle memory by converting mouse DPI and in-game sensitivity from popular shooters directly into Rivals.",
    steps: [
      "Valorant to Rivals: Multiply your Valorant Sensitivity by 3.18.",
      "CS2 / Apex to Rivals: Multiply your CS2 Sensitivity by 1.00.",
      "Overwatch to Rivals: Divide your Overwatch Sensitivity by 3.33."
    ]
  },
  {
    title: "Maximizing FPS & Keybind Configuration",
    category: "Performance Settings",
    readTime: "5 min read",
    summary: "Optimize graphics settings, disable shadow bloat, and configure optimal keybinds for instantaneous weapon switching.",
    steps: [
      "Set Roblox Graphics Quality to Level 3 or Level 4 to disable particle bloat while keeping high-resolution enemy models.",
      "Bind Secondary Weapon to E or Mouse Button 4 for 0.05s instant weapon swap during reload delays.",
      "Turn off Screen Shake and Motion Blur in Rivals Game Options."
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I redeem codes in Roblox Rivals?",
    answer: "Launch Roblox Rivals, open the main menu on the left, click the 'Rewards / Twitter Codes' button, enter any active code from our list, and click Redeem."
  },
  {
    question: "How do I import crosshair codes in Rivals?",
    answer: "Open Rivals Settings > Crosshair tab > Click 'Import Code', paste a generated code from our Crosshair Configurator, and click Apply."
  },
  {
    question: "What is the best weapon in Roblox Rivals 2026?",
    answer: "The Heavy Sniper Rifle and Assault Rifle (AR-47) share S+ Tier status. The Sniper provides one-shot headshot kills, while the AR-47 delivers the most consistent medium-range DPS."
  }
];
