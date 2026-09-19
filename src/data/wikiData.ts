export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  addedDate: string;
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
    code: "FREE198",
    rewards: "3x Weapon Keys (newest milestone code)",
    status: "active",
    addedDate: ""
  },
  {
    code: "FREE197",
    rewards: "3x Weapon Keys",
    status: "active",
    addedDate: ""
  },
  {
    code: "COMMUNITY25",
    rewards: "1x Community Wrap (random weapon)",
    status: "active",
    addedDate: ""
  },
  {
    code: "IMMELTINGHELP",
    rewards: "2x Weapon Keys",
    status: "active",
    addedDate: ""
  },
  {
    code: "COCONUTBONK",
    rewards: "250x Pearls (summer event)",
    status: "active",
    addedDate: ""
  },
  {
    code: "RIVALSSUMMER",
    rewards: "3x Tropical Chests (summer event)",
    status: "active",
    addedDate: ""
  },
  {
    code: "CANNONBALLLLL",
    rewards: "5x Goodie Bags",
    status: "active",
    addedDate: ""
  },
  {
    code: "BONUS",
    rewards: "1x Weapon Key",
    status: "active",
    addedDate: ""
  },
  {
    code: "BOOST",
    rewards: "1x Weapon Key",
    status: "active",
    addedDate: ""
  },
  {
    code: "ROBLOX_RTC",
    rewards: "5x Weapon Keys",
    status: "active",
    addedDate: ""
  },
  {
    code: "ELBILLUG",
    rewards: "No reward — joke code (spells GULLIBLE backwards)",
    status: "active",
    addedDate: ""
  }
];

export const EXPIRED_CODES: CodeItem[] = [
  {
    code: "COMMUNITY24",
    rewards: "1x Community Wrap (superseded by COMMUNITY25)",
    status: "expired",
    addedDate: ""
  }
];

export interface WeaponData {
  id: string;
  name: string;
  category: "Primary" | "Secondary" | "Melee";
  quality: "Standard" | "Prime" | "Contraband";
  stats: string; // verified values sourced from community wiki pages, or "Value not documented"
  description: string;
}

// All names verified against Miraheze wiki / Fandom / Rivals Pulse (Sept 2026).
// Numeric values are included ONLY where a source documents them; everything
// else is explicitly marked "Value not documented" rather than invented.
export const WEAPONS: WeaponData[] = [
  { id: "assault-rifle", name: "Assault Rifle", category: "Primary", quality: "Standard", stats: "12 dmg/shot | ~600 RPM (0.1s interval) | 20-rd mag | 1.25x headshot | falloff 13-3 (50-200 studs) | -10% move speed", description: "The default free primary — every player starts here. Surprisingly competitive for its cost." },
  { id: "shotgun", name: "Shotgun", category: "Primary", quality: "Standard", stats: "10 pellets x 7.5 dmg | 1.5x headshot (112.5 max) | 7-rd mag + 35 reserve | 0.7s interval | 6.5-degree spread | min 25 dmg past 10 studs", description: "Semi-auto pellet monster at close range; falls off hard past 10 studs." },
  { id: "sniper", name: "Sniper", category: "Primary", quality: "Standard", stats: "150 headshot (one-shot kill) | 50 body | no damage falloff | long interval between shots | reload/fire rate not documented", description: "The most expensive Standard weapon. One tap to the head ends any duel." },
  { id: "minigun", name: "Minigun", category: "Primary", quality: "Prime", stats: "8 dmg/shot | 300 reserve | 1.25x headshot | falloff 9-4.5 | 2-pen bullets | no reload needed", description: "Prime-tier hose with bullet penetration. Slows you while spinning up." },
  { id: "paintball-gun", name: "Paintball Gun", category: "Primary", quality: "Prime", stats: "Value not documented (slow fire rate, high per-shot damage per community description)", description: "Prime-tier plinker with a unique projectile feel." },
  { id: "bow", name: "Bow", category: "Primary", quality: "Standard", stats: "Value not documented", description: "Skill-shot projectile weapon." },
  { id: "burst-rifle", name: "Burst Rifle", category: "Primary", quality: "Standard", stats: "Value not documented", description: "Burst-fire rifle." },
  { id: "dart-gun", name: "Dart Gun", category: "Primary", quality: "Standard", stats: "Value not documented", description: "Utility-flavored primary." },
  { id: "firework-launcher", name: "Firework Launcher", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Explosive festive launcher." },
  { id: "flamethrower", name: "Flamethrower", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Close-range area denial." },
  { id: "grenade-launcher", name: "Grenade Launcher", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Arcing explosive projectiles." },
  { id: "hyperlaser", name: "Hyperlaser", category: "Primary", quality: "Prime", stats: "Value not documented (spelling varies by source — verify in game)", description: "Energy beam weapon." },
  { id: "ice-gun", name: "Ice Gun", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Cryo utility weapon." },
  { id: "ray-gun", name: "Ray Gun", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Classic energy weapon." },
  { id: "subspace-tripmine-gun", name: "Subspace Tripmine Gun", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Deploys tripmines as a gun slot." },
  { id: "tesla-gun", name: "Tesla Gun", category: "Primary", quality: "Prime", stats: "Value not documented", description: "Chain-lightning weapon." },
  { id: "revolver", name: "Revolver", category: "Secondary", quality: "Standard", stats: "30 dmg | 40 headshot | falloff 34-8.5 (50-200 studs) | 0.9s deploy time | -5% move speed | semi-auto", description: "The reliable sidearm — solid headshot payoff." },
  { id: "uzi", name: "Uzi", category: "Secondary", quality: "Standard", stats: "8 dmg/shot | 24-rd mag + 96 reserve | 1.25x headshot | falloff to 1.75-2 at range | 3-degree spread", description: "Fast-firing pocket SMG." },
  { id: "blast-bow", name: "Blast Bow", category: "Secondary", quality: "Prime", stats: "Value not documented", description: "Explosive secondary bow." },
  { id: "crossbow", name: "Crossbow", category: "Secondary", quality: "Standard", stats: "Value not documented", description: "Silent bolt thrower." },
  { id: "dual-guns", name: "Dual Guns", category: "Secondary", quality: "Prime", stats: "Value not documented", description: "Akimbo pistols." },
  { id: "hand-cannon", name: "Hand Cannon", category: "Secondary", quality: "Prime", stats: "Value not documented", description: "Heavy-hitting pocket cannon." },
  { id: "handgun", name: "Handgun", category: "Secondary", quality: "Standard", stats: "Value not documented", description: "Basic sidearm." },
  { id: "harpoon-gun", name: "Harpoon Gun", category: "Secondary", quality: "Prime", stats: "Value not documented", description: "Pulls targets in." },
  { id: "shotbow", name: "Shotbow", category: "Secondary", quality: "Prime", stats: "Value not documented", description: "Shotgun-meets-bow hybrid." },
  { id: "stake-launcher", name: "Stake Launcher", category: "Secondary", quality: "Prime", stats: "Value not documented", description: "Projectile harpoon variant." },
  { id: "taser", name: "Taser", category: "Secondary", quality: "Standard", stats: "Value not documented", description: "Stun sidearm." },
  { id: "katana", name: "Katana", category: "Melee", quality: "Standard", stats: "Value not documented", description: "The signature melee blade." },
  { id: "knife", name: "Knife", category: "Melee", quality: "Standard", stats: "Value not documented", description: "Default melee." },
  { id: "machete", name: "Machete", category: "Melee", quality: "Standard", stats: "Value not documented", description: "Heavy chopping melee." },
  { id: "axe", name: "Axe", category: "Melee", quality: "Standard", stats: "Value not documented", description: "Slow, heavy melee." },
  { id: "war-hammer", name: "War Hammer", category: "Melee", quality: "Prime", stats: "Value not documented", description: "Massive slow melee." }
];

export interface QualityEntry {
  name: string;
  note: string;
}

// The real in-game classification (verified on Fandom): weapons come in
// Standard / Prime / Contraband quality bands — not invented S/A/B meta tiers.
export const WEAPON_QUALITIES: QualityEntry[] = [
  { name: "Standard", note: "Bought with in-game cash in the shop. Assault Rifle is the free default; Sniper is the most expensive Standard weapon." },
  { name: "Prime", note: "Higher-tier band. Weapons like Minigun and Paintball Gun live here, with skins from Skin Case 1-3, Spooky/Festive Cases, Ultra Key Bundle and the Glory Shop." },
  { name: "Contraband", note: "The rarest band, documented on the community wiki." },
  { name: "Gamemode Exclusive", note: "5 additional weapons exist only inside specific gamemodes." },
  { name: "Skins", note: "Every weapon carries skins across Common / Rare / Legendary / Mythical (e.g. Uzi: Pine = Common, Electro / Money Gun = Legendary, Keyzi = Mythical)." }
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
    answer: "The Sniper provides one-shot headshot kills (150 damage), while the Assault Rifle is the free default with the most consistent medium-range performance. There is no official tier ranking — see the quality guide."
  }
];
