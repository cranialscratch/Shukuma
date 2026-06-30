// Shukuma Wordsearch Mini Game — single-file bundle (no ES modules)
// Compatible with file:// and any static server

(function () {
"use strict";

// ─── Word list ───────────────────────────────────────────────────────────────
const WORDS = new Set([
  "abandoned",
  "abbot",
  "abhor",
  "abide",
  "abilities",
  "ability",
  "able",
  "absence",
  "absent",
  "absolute",
  "absolutely",
  "abyss",
  "acceptance",
  "accepted",
  "accessible",
  "accomplish",
  "accomplishment",
  "according",
  "account",
  "accounting",
  "accountings",
  "accurate",
  "accurately",
  "accuse",
  "accused",
  "ace",
  "ache",
  "ached",
  "achieve",
  "acid",
  "acne",
  "acorn",
  "acquire",
  "acre",
  "across",
  "act",
  "action",
  "actions",
  "actively",
  "actor",
  "acts",
  "actual",
  "acute",
  "add",
  "addition",
  "address",
  "addressed",
  "adequate",
  "adjourn",
  "adjustment",
  "administer",
  "administration",
  "administrations",
  "adopt",
  "adult",
  "advance",
  "advanced",
  "advancing",
  "advantage",
  "adverse",
  "advice",
  "affect",
  "affected",
  "afford",
  "affordable",
  "afraid",
  "after",
  "aftermath",
  "against",
  "age",
  "aged",
  "agency",
  "aggressive",
  "agile",
  "aglow",
  "ago",
  "agony",
  "agree",
  "agreement",
  "ahead",
  "aid",
  "aide",
  "aim",
  "aims",
  "air",
  "aircraft",
  "aisle",
  "ajar",
  "akin",
  "alarm",
  "album",
  "alder",
  "ale",
  "all",
  "aloft",
  "alone",
  "along",
  "alongside",
  "aloof",
  "aloud",
  "also",
  "although",
  "alto",
  "amaze",
  "ambassador",
  "ambiguous",
  "amble",
  "amend",
  "amendment",
  "amiss",
  "amok",
  "among",
  "ample",
  "analogy",
  "analysis",
  "and",
  "anew",
  "angry",
  "angst",
  "animal",
  "annex",
  "announced",
  "annual",
  "annually",
  "anonymous",
  "another",
  "ant",
  "anvil",
  "aorta",
  "ape",
  "apex",
  "apparatus",
  "appeal",
  "appear",
  "apple",
  "applicable",
  "apply",
  "appointed",
  "appropriately",
  "approve",
  "approved",
  "approximately",
  "apron",
  "arbitrary",
  "arc",
  "arch",
  "architect",
  "ardor",
  "are",
  "area",
  "argue",
  "argument",
  "arguments",
  "arise",
  "ark",
  "arm",
  "arms",
  "army",
  "arrange",
  "array",
  "arrest",
  "art",
  "artery",
  "arts",
  "ash",
  "ashen",
  "ashy",
  "aside",
  "ask",
  "assembled",
  "assembly",
  "assert",
  "assertion",
  "asset",
  "assets",
  "assist",
  "assure",
  "ate",
  "athletics",
  "atmosphere",
  "atmospheres",
  "atom",
  "atone",
  "attached",
  "attain",
  "attempt",
  "attempted",
  "attend",
  "attention",
  "attic",
  "attitude",
  "attract",
  "attraction",
  "audience",
  "audit",
  "authentic",
  "authorization",
  "authorizations",
  "automatic",
  "avail",
  "available",
  "average",
  "avid",
  "avoid",
  "awake",
  "awaken",
  "aware",
  "awareness",
  "away",
  "awe",
  "awed",
  "awful",
  "axe",
  "axes",
  "axis",
  "aye",
  "babe",
  "back",
  "background",
  "backward",
  "bad",
  "bade",
  "bag",
  "bail",
  "bait",
  "bake",
  "baker",
  "balance",
  "balanced",
  "bald",
  "bale",
  "ball",
  "balm",
  "ban",
  "band",
  "bane",
  "bang",
  "banjo",
  "bank",
  "bar",
  "bare",
  "bark",
  "barn",
  "bash",
  "basic",
  "basis",
  "bass",
  "bat",
  "batch",
  "bath",
  "bawl",
  "bay",
  "beach",
  "beacon",
  "beam",
  "bean",
  "bear",
  "beat",
  "beautiful",
  "becoming",
  "bed",
  "beef",
  "been",
  "beer",
  "began",
  "beginning",
  "begun",
  "being",
  "belief",
  "believed",
  "believing",
  "bell",
  "belong",
  "belonging",
  "below",
  "belt",
  "bench",
  "bend",
  "beneath",
  "benefited",
  "besides",
  "best",
  "bet",
  "between",
  "beware",
  "bias",
  "bid",
  "big",
  "bile",
  "bill",
  "billion",
  "bind",
  "bird",
  "birth",
  "bishop",
  "bison",
  "bit",
  "bite",
  "black",
  "blacksmith",
  "blade",
  "blame",
  "bland",
  "blank",
  "blaze",
  "blazed",
  "blazer",
  "bleak",
  "bled",
  "bleed",
  "bless",
  "blew",
  "blind",
  "bliss",
  "blob",
  "block",
  "blockchain",
  "blockchains",
  "blog",
  "blood",
  "bloom",
  "blow",
  "blue",
  "blur",
  "boar",
  "board",
  "boardroom",
  "boast",
  "boat",
  "body",
  "bold",
  "bolt",
  "bomb",
  "bond",
  "bone",
  "boner",
  "book",
  "boom",
  "boot",
  "booze",
  "bore",
  "born",
  "boss",
  "both",
  "bound",
  "bout",
  "bow",
  "box",
  "boxer",
  "boy",
  "brace",
  "brag",
  "brainstorming",
  "brake",
  "bran",
  "brand",
  "brat",
  "brave",
  "brawn",
  "bread",
  "break",
  "breaking",
  "bred",
  "brew",
  "brickworks",
  "bride",
  "brief",
  "brilliant",
  "brim",
  "bringing",
  "brink",
  "brisk",
  "broadcast",
  "broil",
  "broke",
  "broken",
  "brook",
  "broom",
  "broth",
  "brother",
  "brow",
  "brown",
  "brunt",
  "brush",
  "brute",
  "bud",
  "buddy",
  "buff",
  "bug",
  "bugle",
  "build",
  "building",
  "built",
  "bulb",
  "bull",
  "bump",
  "bun",
  "bunch",
  "bunk",
  "buoy",
  "burden",
  "burn",
  "burp",
  "burr",
  "burst",
  "bury",
  "bus",
  "business",
  "but",
  "buy",
  "buyer",
  "buzz",
  "cab",
  "cabin",
  "cage",
  "cake",
  "calculation",
  "calf",
  "call",
  "calm",
  "came",
  "camel",
  "campaign",
  "can",
  "canal",
  "cancel",
  "candy",
  "cane",
  "cannon",
  "cap",
  "capacity",
  "capitalising",
  "captain",
  "capture",
  "car",
  "carbon",
  "card",
  "care",
  "career",
  "carefully",
  "carefulness",
  "cargo",
  "carry",
  "cart",
  "case",
  "cash",
  "cast",
  "castle",
  "cat",
  "catch",
  "categorising",
  "cattle",
  "cause",
  "cave",
  "cedar",
  "cell",
  "census",
  "certain",
  "certainty",
  "chain",
  "chalk",
  "challenge",
  "challenger",
  "challengers",
  "challenges",
  "change",
  "changing",
  "channel",
  "chapter",
  "character",
  "characteristics",
  "charge",
  "charm",
  "chase",
  "cheap",
  "checkpoint",
  "cheer",
  "cheerfulness",
  "chef",
  "chemical",
  "chemicals",
  "chemistry",
  "chess",
  "chest",
  "chief",
  "child",
  "childhood",
  "children",
  "chin",
  "chip",
  "choosing",
  "chop",
  "chord",
  "choreography",
  "church",
  "circle",
  "circumstances",
  "cities",
  "citizen",
  "civic",
  "civil",
  "clad",
  "claim",
  "clam",
  "clap",
  "clash",
  "class",
  "classification",
  "classroom",
  "clause",
  "claw",
  "clay",
  "clean",
  "clear",
  "clerk",
  "clever",
  "click",
  "client",
  "cliff",
  "climb",
  "climbing",
  "cling",
  "clip",
  "clock",
  "clod",
  "clog",
  "clop",
  "close",
  "closed",
  "clot",
  "cloth",
  "cloud",
  "clown",
  "club",
  "clue",
  "coach",
  "coal",
  "coat",
  "cob",
  "cod",
  "coffee",
  "coil",
  "coin",
  "cold",
  "collaboration",
  "collective",
  "colon",
  "color",
  "colt",
  "column",
  "comb",
  "combat",
  "combined",
  "come",
  "comet",
  "comic",
  "command",
  "comment",
  "comments",
  "commerce",
  "commitment",
  "common",
  "communicate",
  "communication",
  "communicative",
  "communicatively",
  "community",
  "company",
  "comparative",
  "compare",
  "compared",
  "compatibility",
  "compensation",
  "compete",
  "competing",
  "competitive",
  "complement",
  "complementary",
  "complete",
  "complicated",
  "comply",
  "components",
  "compound",
  "comprehensive",
  "comprehensives",
  "computer",
  "computers",
  "concentration",
  "concentrations",
  "concept",
  "concepts",
  "concern",
  "concerns",
  "conduct",
  "cone",
  "confident",
  "configuration",
  "confirm",
  "conflict",
  "connect",
  "connected",
  "consent",
  "consider",
  "consideration",
  "considerations",
  "considered",
  "consistent",
  "constant",
  "constructed",
  "construction",
  "consumer",
  "contact",
  "contain",
  "contained",
  "contains",
  "contemporary",
  "context",
  "continue",
  "continued",
  "continuous",
  "contract",
  "contributions",
  "control",
  "controls",
  "convenience",
  "conversation",
  "conversations",
  "convert",
  "converted",
  "cook",
  "cool",
  "coordination",
  "coordinations",
  "cop",
  "cope",
  "cord",
  "core",
  "corn",
  "corner",
  "cornered",
  "corners",
  "corporate",
  "corporations",
  "correct",
  "corrected",
  "corresponding",
  "cosy",
  "cotton",
  "council",
  "count",
  "countries",
  "country",
  "couple",
  "courage",
  "court",
  "cousin",
  "cover",
  "covered",
  "covering",
  "cow",
  "cozy",
  "crack",
  "craft",
  "cram",
  "cramp",
  "crane",
  "crash",
  "creak",
  "credentials",
  "credit",
  "creed",
  "creep",
  "crest",
  "crew",
  "crime",
  "crisis",
  "crisp",
  "critic",
  "criticism",
  "crop",
  "cross",
  "crow",
  "crowd",
  "crown",
  "crud",
  "crude",
  "cruel",
  "crush",
  "crust",
  "cry",
  "crystalised",
  "crystallised",
  "cub",
  "cube",
  "cultural",
  "cup",
  "curb",
  "cure",
  "curl",
  "currency",
  "current",
  "currently",
  "curt",
  "custom",
  "cut",
  "cyan",
  "cycle",
  "daily",
  "dais",
  "dale",
  "dam",
  "damaged",
  "dance",
  "danger",
  "dare",
  "dark",
  "dart",
  "dash",
  "data",
  "databases",
  "date",
  "dawn",
  "day",
  "dead",
  "deaf",
  "deal",
  "dealer",
  "dean",
  "dear",
  "debate",
  "debt",
  "decay",
  "decide",
  "decided",
  "decision",
  "decisions",
  "deck",
  "declaration",
  "declarations",
  "declared",
  "declaring",
  "decline",
  "decrease",
  "dedicated",
  "deep",
  "deer",
  "default",
  "defeat",
  "defence",
  "defend",
  "defer",
  "deficit",
  "deft",
  "delay",
  "deli",
  "delimitations",
  "deliver",
  "delivered",
  "delivers",
  "demo",
  "democracy",
  "democratic",
  "democratising",
  "democratizing",
  "demonstrate",
  "demonstrated",
  "demonstrates",
  "demonstration",
  "den",
  "deny",
  "departure",
  "depend",
  "depression",
  "depressions",
  "depth",
  "described",
  "deserving",
  "design",
  "designed",
  "desk",
  "despite",
  "detail",
  "detailed",
  "detect",
  "deter",
  "determination",
  "devaluation",
  "devaluations",
  "developed",
  "develops",
  "devil",
  "dew",
  "dial",
  "dice",
  "did",
  "died",
  "diet",
  "different",
  "dig",
  "digital",
  "dike",
  "dill",
  "dim",
  "dime",
  "dimension",
  "dine",
  "dip",
  "dire",
  "direction",
  "directly",
  "dirt",
  "dirty",
  "disabled",
  "disadvantage",
  "disaster",
  "disc",
  "discover",
  "discussed",
  "dish",
  "disk",
  "displayed",
  "disposal",
  "dispute",
  "distance",
  "distant",
  "distinct",
  "distinguished",
  "district",
  "dive",
  "divide",
  "divided",
  "division",
  "dizzy",
  "documentation",
  "documentations",
  "documenting",
  "dodge",
  "doe",
  "dog",
  "dollar",
  "dolt",
  "dome",
  "domestic",
  "done",
  "door",
  "dope",
  "dorm",
  "dose",
  "dot",
  "dote",
  "doubt",
  "dove",
  "down",
  "dozen",
  "drab",
  "draft",
  "drag",
  "drain",
  "drape",
  "draw",
  "drawing",
  "drawn",
  "dream",
  "drew",
  "drift",
  "drill",
  "drip",
  "drive",
  "driven",
  "drop",
  "drove",
  "drum",
  "drunk",
  "dry",
  "dryer",
  "dual",
  "dub",
  "duchy",
  "dug",
  "duke",
  "dull",
  "dumb",
  "dummy",
  "dump",
  "dune",
  "dunk",
  "dusk",
  "dusky",
  "dust",
  "dwarf",
  "dwell",
  "dye",
  "dying",
  "dynamic",
  "each",
  "eager",
  "eagle",
  "ear",
  "earl",
  "early",
  "earn",
  "earth",
  "earthbound",
  "ease",
  "east",
  "eat",
  "echochamber",
  "ecology",
  "economic",
  "economy",
  "edge",
  "educated",
  "education",
  "effect",
  "effectively",
  "effectiveness",
  "egg",
  "ego",
  "elaborate",
  "elapse",
  "elect",
  "elected",
  "election",
  "element",
  "elf",
  "elk",
  "elm",
  "emergency",
  "emit",
  "emotion",
  "empire",
  "employed",
  "employees",
  "empty",
  "enable",
  "encounter",
  "encouragement",
  "encyclopaedia",
  "encyclopaedias",
  "encyclopedia",
  "encyclopedias",
  "end",
  "endless",
  "endorse",
  "endorsement",
  "endorsements",
  "enemy",
  "engage",
  "engineer",
  "enhance",
  "enjoy",
  "enjoyable",
  "enlightenment",
  "enlightenments",
  "enormous",
  "ensure",
  "enter",
  "entirely",
  "entrance",
  "environment",
  "epic",
  "episode",
  "equal",
  "equation",
  "era",
  "ergo",
  "error",
  "escape",
  "essay",
  "essential",
  "established",
  "establishment",
  "estate",
  "estimate",
  "estimated",
  "evade",
  "evaluate",
  "evaluation",
  "evaluations",
  "eve",
  "even",
  "event",
  "ever",
  "every",
  "evidence",
  "evil",
  "evolve",
  "ewe",
  "ewer",
  "exact",
  "exactly",
  "exam",
  "examination",
  "examinational",
  "examinations",
  "examples",
  "exceed",
  "excellence",
  "excellent",
  "except",
  "exception",
  "exceptional",
  "excessive",
  "excite",
  "exec",
  "execute",
  "exempt",
  "exercise",
  "exhibit",
  "exhibiting",
  "exist",
  "existence",
  "expand",
  "expansion",
  "expect",
  "expectations",
  "expected",
  "experienced",
  "experimental",
  "expert",
  "explained",
  "explanation",
  "explanations",
  "expose",
  "exposed",
  "extend",
  "extended",
  "extra",
  "extraordinary",
  "extreme",
  "extremely",
  "eye",
  "fable",
  "face",
  "fact",
  "factor",
  "fad",
  "fail",
  "fair",
  "fairy",
  "faith",
  "fake",
  "fall",
  "fallen",
  "false",
  "fame",
  "familiar",
  "familiarizing",
  "famous",
  "fan",
  "fancy",
  "fang",
  "far",
  "farm",
  "fashion",
  "fast",
  "fat",
  "fatal",
  "fate",
  "father",
  "favor",
  "fawn",
  "fax",
  "faze",
  "fear",
  "feast",
  "feat",
  "features",
  "federal",
  "fee",
  "feed",
  "feedback",
  "feel",
  "feeling",
  "feet",
  "fell",
  "felt",
  "fence",
  "fend",
  "fern",
  "fetch",
  "fever",
  "few",
  "fiber",
  "fiction",
  "field",
  "fiend",
  "fig",
  "fight",
  "file",
  "film",
  "filter",
  "final",
  "finally",
  "finance",
  "financial",
  "find",
  "finding",
  "fine",
  "finger",
  "finish",
  "finished",
  "fire",
  "firm",
  "first",
  "fiscal",
  "fish",
  "fist",
  "fit",
  "fix",
  "fixed",
  "fizz",
  "fizzy",
  "flag",
  "flake",
  "flame",
  "flank",
  "flap",
  "flare",
  "flash",
  "flask",
  "flat",
  "flaw",
  "fled",
  "flew",
  "flex",
  "flexibility",
  "flexible",
  "flight",
  "flip",
  "flit",
  "flock",
  "flood",
  "floor",
  "flop",
  "flow",
  "flower",
  "flown",
  "flute",
  "fly",
  "foam",
  "foe",
  "fog",
  "foggy",
  "fold",
  "folk",
  "follow",
  "followed",
  "following",
  "fond",
  "font",
  "fool",
  "for",
  "force",
  "ford",
  "fore",
  "forecast",
  "foreign",
  "forge",
  "fork",
  "form",
  "formal",
  "formation",
  "former",
  "fort",
  "forth",
  "forward",
  "foul",
  "found",
  "foundations",
  "founded",
  "four",
  "fowl",
  "fox",
  "frame",
  "framework",
  "frank",
  "fraud",
  "freak",
  "free",
  "freedom",
  "fresh",
  "frog",
  "from",
  "front",
  "froth",
  "froze",
  "frozen",
  "fruit",
  "frustration",
  "fry",
  "fuel",
  "full",
  "fully",
  "fume",
  "fun",
  "function",
  "fund",
  "funny",
  "fur",
  "further",
  "fuss",
  "future",
  "fuzz",
  "gag",
  "gain",
  "gale",
  "gall",
  "game",
  "gap",
  "gape",
  "garb",
  "garden",
  "gas",
  "gash",
  "gather",
  "gaudy",
  "gauge",
  "gave",
  "gaze",
  "gear",
  "gel",
  "geld",
  "gem",
  "gender",
  "general",
  "generalization",
  "generalizations",
  "generate",
  "generated",
  "genius",
  "gentle",
  "geographical",
  "geography",
  "germ",
  "get",
  "getting",
  "giant",
  "gift",
  "gig",
  "gild",
  "gill",
  "gin",
  "gist",
  "given",
  "glad",
  "gland",
  "glare",
  "glass",
  "gleam",
  "glean",
  "glide",
  "glint",
  "gloat",
  "global",
  "globalisation",
  "globalization",
  "globalizing",
  "gloom",
  "gloss",
  "glove",
  "glow",
  "glue",
  "gnu",
  "goad",
  "goal",
  "goat",
  "god",
  "goes",
  "going",
  "gold",
  "golden",
  "golf",
  "gone",
  "gong",
  "good",
  "goon",
  "gore",
  "gosh",
  "got",
  "govern",
  "governing",
  "governor",
  "gown",
  "grab",
  "grace",
  "gracefulness",
  "grade",
  "graduated",
  "grain",
  "gram",
  "grand",
  "grant",
  "grape",
  "grasp",
  "gratefulness",
  "grave",
  "gray",
  "graze",
  "greater",
  "greed",
  "greet",
  "grew",
  "grin",
  "grind",
  "grip",
  "grit",
  "groan",
  "groin",
  "gross",
  "group",
  "grove",
  "growing",
  "growl",
  "grown",
  "growth",
  "guidance",
  "guided",
  "guideline",
  "guile",
  "guilt",
  "guise",
  "guitar",
  "gulf",
  "gull",
  "gun",
  "gust",
  "gusto",
  "gut",
  "guts",
  "gutsy",
  "guy",
  "gym",
  "hack",
  "had",
  "hail",
  "hair",
  "hale",
  "hall",
  "halt",
  "ham",
  "hand",
  "handling",
  "hang",
  "happen",
  "happened",
  "happening",
  "happy",
  "hard",
  "hardy",
  "hare",
  "harm",
  "harmonisation",
  "harp",
  "harsh",
  "has",
  "hash",
  "hat",
  "hatred",
  "haul",
  "have",
  "haven",
  "havoc",
  "hay",
  "haze",
  "hazel",
  "hazy",
  "head",
  "heal",
  "healthy",
  "heap",
  "heard",
  "hearing",
  "heart",
  "heartache",
  "heartbeat",
  "heartbreak",
  "heartburn",
  "hearted",
  "heartedly",
  "heartfelt",
  "heartfeltly",
  "heartland",
  "heartless",
  "hearts",
  "heartstring",
  "heartwood",
  "heat",
  "heaven",
  "heavy",
  "hedge",
  "heel",
  "heir",
  "heist",
  "held",
  "helm",
  "helms",
  "help",
  "helps",
  "hemp",
  "her",
  "herb",
  "herd",
  "here",
  "hero",
  "hew",
  "hewn",
  "hid",
  "hidden",
  "hide",
  "high",
  "higher",
  "hike",
  "hill",
  "hilt",
  "him",
  "hind",
  "hint",
  "hip",
  "his",
  "history",
  "hit",
  "hitch",
  "hoax",
  "hob",
  "hog",
  "hoist",
  "hold",
  "hole",
  "holes",
  "holy",
  "home",
  "hone",
  "honer",
  "honest",
  "honk",
  "hood",
  "hook",
  "hooted",
  "hooters",
  "hop",
  "hope",
  "horde",
  "horn",
  "horse",
  "horsed",
  "horses",
  "hose",
  "hospitalising",
  "hospitalizing",
  "host",
  "hot",
  "hotel",
  "hound",
  "house",
  "household",
  "hovel",
  "hover",
  "how",
  "hub",
  "hue",
  "hug",
  "huge",
  "hulk",
  "hull",
  "hum",
  "human",
  "humid",
  "humor",
  "hundred",
  "hundreds",
  "hung",
  "hunk",
  "hunt",
  "hurl",
  "hurry",
  "husband",
  "husk",
  "hut",
  "ice",
  "ideal",
  "identification",
  "identify",
  "idle",
  "idly",
  "ill",
  "image",
  "imagination",
  "imaginations",
  "imagine",
  "immediately",
  "imp",
  "impact",
  "implementation",
  "implications",
  "important",
  "impose",
  "improve",
  "inane",
  "inch",
  "include",
  "includes",
  "inclusion",
  "income",
  "incur",
  "independence",
  "independences",
  "independent",
  "independently",
  "index",
  "indicated",
  "indie",
  "industrialise",
  "industrialised",
  "industrialiser",
  "industrialisers",
  "industrialises",
  "industrialising",
  "industry",
  "inept",
  "infected",
  "infer",
  "influence",
  "inform",
  "informal",
  "information",
  "inheritance",
  "inherited",
  "initial",
  "inject",
  "injury",
  "ink",
  "inn",
  "inner",
  "innovation",
  "innovational",
  "innovations",
  "input",
  "inquiry",
  "inside",
  "insight",
  "insist",
  "inspired",
  "install",
  "instead",
  "instruction",
  "instructions",
  "insure",
  "integration",
  "integrations",
  "intend",
  "intense",
  "intensity",
  "intent",
  "inter",
  "interest",
  "internalizing",
  "intersection",
  "intro",
  "introduction",
  "invest",
  "investigation",
  "investors",
  "involved",
  "involvement",
  "ion",
  "irate",
  "ire",
  "iron",
  "island",
  "isle",
  "isolated",
  "isolation",
  "issue",
  "itself",
  "ivy",
  "jab",
  "jack",
  "jade",
  "jaded",
  "jail",
  "jam",
  "jape",
  "jar",
  "jaunt",
  "jaw",
  "jerk",
  "jerky",
  "jest",
  "jet",
  "jibe",
  "jig",
  "jilt",
  "jive",
  "job",
  "jog",
  "joker",
  "jolt",
  "josh",
  "jot",
  "journey",
  "jowl",
  "joy",
  "judge",
  "judgment",
  "jug",
  "juice",
  "juicy",
  "jump",
  "jumpy",
  "jungle",
  "junk",
  "jury",
  "just",
  "justice",
  "justification",
  "jut",
  "keen",
  "keep",
  "keeping",
  "keeps",
  "keg",
  "ken",
  "kern",
  "key",
  "kick",
  "kid",
  "kill",
  "killed",
  "kilt",
  "kin",
  "kind",
  "king",
  "kit",
  "kitchen",
  "kneel",
  "knew",
  "knife",
  "knob",
  "knock",
  "knot",
  "know",
  "knowledge",
  "known",
  "lab",
  "lack",
  "laden",
  "lag",
  "laid",
  "lake",
  "lame",
  "lamp",
  "land",
  "landing",
  "lane",
  "languages",
  "lank",
  "lap",
  "lard",
  "lark",
  "laser",
  "lash",
  "last",
  "latch",
  "late",
  "later",
  "laud",
  "launch",
  "launched",
  "lava",
  "law",
  "lawn",
  "lawyer",
  "lax",
  "lay",
  "lazy",
  "lea",
  "lead",
  "leader",
  "leaf",
  "leafy",
  "league",
  "leak",
  "leaky",
  "lean",
  "leap",
  "learn",
  "learned",
  "lease",
  "least",
  "leaving",
  "led",
  "ledge",
  "leg",
  "legal",
  "legitimations",
  "lemon",
  "lengthy",
  "lent",
  "less",
  "lesson",
  "let",
  "letter",
  "level",
  "lick",
  "lid",
  "life",
  "lift",
  "light",
  "like",
  "lilac",
  "limb",
  "lime",
  "limitations",
  "limited",
  "limp",
  "line",
  "linen",
  "liner",
  "link",
  "lion",
  "lip",
  "list",
  "listen",
  "lit",
  "literacy",
  "little",
  "live",
  "liver",
  "lives",
  "living",
  "load",
  "loaf",
  "loan",
  "lobe",
  "local",
  "location",
  "locations",
  "lock",
  "lodge",
  "loft",
  "log",
  "logic",
  "logical",
  "lone",
  "loner",
  "long",
  "loon",
  "loop",
  "lore",
  "lorn",
  "losing",
  "loss",
  "lot",
  "lousy",
  "lout",
  "love",
  "lover",
  "low",
  "lower",
  "lowly",
  "loyal",
  "lucky",
  "lull",
  "lump",
  "lumpy",
  "lung",
  "lure",
  "lurk",
  "lush",
  "lust",
  "lusty",
  "luxe",
  "machine",
  "machinery",
  "mad",
  "made",
  "magic",
  "magnitude",
  "maid",
  "main",
  "maintain",
  "maintenance",
  "maintenances",
  "major",
  "majority",
  "make",
  "maker",
  "male",
  "mall",
  "man",
  "mane",
  "manner",
  "manor",
  "manufacturing",
  "manufacturings",
  "many",
  "map",
  "maple",
  "mar",
  "march",
  "mare",
  "mark",
  "market",
  "marketing",
  "marriage",
  "married",
  "marry",
  "mart",
  "mash",
  "mask",
  "mass",
  "mast",
  "master",
  "mat",
  "match",
  "mate",
  "material",
  "materials",
  "math",
  "matter",
  "maw",
  "may",
  "mayor",
  "maze",
  "mead",
  "meal",
  "mean",
  "measurement",
  "measurements",
  "meat",
  "mechanism",
  "medical",
  "medicine",
  "melee",
  "melon",
  "melt",
  "memo",
  "men",
  "mend",
  "mention",
  "mentioned",
  "menu",
  "mercy",
  "mere",
  "merit",
  "merry",
  "mesh",
  "message",
  "met",
  "metal",
  "methodology",
  "mew",
  "mice",
  "micro",
  "mid",
  "middle",
  "might",
  "migration",
  "mild",
  "mile",
  "miler",
  "miles",
  "milestone",
  "milk",
  "mill",
  "million",
  "millions",
  "mills",
  "mime",
  "mind",
  "mine",
  "minimum",
  "minor",
  "mint",
  "minus",
  "mire",
  "mirror",
  "mirth",
  "miser",
  "miss",
  "missing",
  "mist",
  "mistake",
  "misunderstand",
  "misunderstands",
  "mix",
  "mixer",
  "moan",
  "mob",
  "modal",
  "mode",
  "model",
  "moderate",
  "modern",
  "modified",
  "mold",
  "mole",
  "moles",
  "moment",
  "money",
  "monster",
  "month",
  "mood",
  "moon",
  "moor",
  "mop",
  "moral",
  "more",
  "morph",
  "most",
  "motel",
  "mother",
  "motif",
  "motion",
  "motor",
  "motto",
  "mourn",
  "mouse",
  "mousy",
  "mouth",
  "move",
  "movement",
  "much",
  "mud",
  "muddy",
  "mug",
  "muggy",
  "mum",
  "muon",
  "mural",
  "murder",
  "murk",
  "murky",
  "muscle",
  "muse",
  "musk",
  "must",
  "musty",
  "mutual",
  "myth",
  "nag",
  "naive",
  "name",
  "nap",
  "nape",
  "nark",
  "nation",
  "national",
  "nationalising",
  "nationalizing",
  "native",
  "naturalness",
  "nature",
  "nave",
  "near",
  "nearly",
  "necessary",
  "neck",
  "need",
  "needle",
  "negative",
  "negotiation",
  "neighborhood",
  "net",
  "new",
  "newt",
  "next",
  "nick",
  "nifty",
  "night",
  "nil",
  "nip",
  "nit",
  "nob",
  "noble",
  "nod",
  "node",
  "noisy",
  "none",
  "noon",
  "nor",
  "norm",
  "normal",
  "normalisation",
  "normalising",
  "north",
  "northbound",
  "nose",
  "not",
  "notch",
  "notched",
  "notches",
  "note",
  "noted",
  "nothing",
  "notice",
  "noun",
  "novel",
  "now",
  "nuclear",
  "nude",
  "nudge",
  "numb",
  "nun",
  "nurse",
  "nut",
  "nuts",
  "oak",
  "oar",
  "oat",
  "oath",
  "obiter",
  "objective",
  "oboe",
  "observation",
  "observed",
  "obtain",
  "obtained",
  "obvious",
  "occur",
  "occurred",
  "odd",
  "ode",
  "off",
  "offend",
  "offense",
  "offered",
  "office",
  "oil",
  "old",
  "oldest",
  "olive",
  "once",
  "one",
  "only",
  "onset",
  "onward",
  "open",
  "opener",
  "opening",
  "opera",
  "operate",
  "operated",
  "operating",
  "opinion",
  "opportunities",
  "opt",
  "option",
  "oral",
  "orb",
  "orca",
  "order",
  "ordinary",
  "ore",
  "organic",
  "organization",
  "organize",
  "organized",
  "orientation",
  "orientations",
  "original",
  "other",
  "otherwise",
  "ought",
  "ounce",
  "our",
  "out",
  "outer",
  "output",
  "outside",
  "outstanding",
  "oval",
  "oven",
  "over",
  "overcome",
  "overcoming",
  "overloaded",
  "owe",
  "owed",
  "owl",
  "own",
  "owns",
  "oxide",
  "oxygen",
  "pace",
  "pack",
  "packages",
  "pad",
  "page",
  "paid",
  "pail",
  "pain",
  "pair",
  "pal",
  "palace",
  "pale",
  "palm",
  "palmerston",
  "pan",
  "pane",
  "panic",
  "pap",
  "papers",
  "par",
  "parallel",
  "parent",
  "park",
  "part",
  "participation",
  "partly",
  "partners",
  "party",
  "pass",
  "past",
  "paste",
  "pat",
  "patch",
  "patent",
  "path",
  "patient",
  "patrol",
  "pattern",
  "pause",
  "pave",
  "paw",
  "pawn",
  "pay",
  "payments",
  "pea",
  "peace",
  "peaceful",
  "peak",
  "peal",
  "pearl",
  "peat",
  "peel",
  "peer",
  "peg",
  "pelt",
  "pen",
  "penny",
  "people",
  "pep",
  "per",
  "perch",
  "performance",
  "performed",
  "perhaps",
  "perk",
  "permanent",
  "permit",
  "person",
  "personalizing",
  "pest",
  "pet",
  "petty",
  "pew",
  "phase",
  "phone",
  "photography",
  "phrase",
  "physical",
  "piano",
  "pick",
  "pie",
  "piece",
  "pier",
  "pig",
  "pile",
  "pill",
  "pilot",
  "pin",
  "pine",
  "pink",
  "pint",
  "pioneering",
  "pipe",
  "pit",
  "pitch",
  "pixel",
  "pizza",
  "place",
  "plain",
  "plan",
  "plane",
  "plank",
  "plant",
  "plate",
  "platform",
  "play",
  "player",
  "playfulness",
  "plaza",
  "plod",
  "plot",
  "plow",
  "ploy",
  "pluck",
  "plug",
  "plum",
  "plumb",
  "plume",
  "plural",
  "plus",
  "ply",
  "pocket",
  "pod",
  "poem",
  "poet",
  "point",
  "poison",
  "poke",
  "polar",
  "pole",
  "poles",
  "police",
  "policies",
  "policy",
  "political",
  "polka",
  "poll",
  "pond",
  "pone",
  "pony",
  "pool",
  "pop",
  "popular",
  "popularising",
  "pore",
  "pork",
  "port",
  "portion",
  "pose",
  "position",
  "positive",
  "possibilities",
  "possibility",
  "possibly",
  "post",
  "postal",
  "pot",
  "pour",
  "pout",
  "poverty",
  "power",
  "practically",
  "practice",
  "praise",
  "prawn",
  "pray",
  "precaution",
  "precautions",
  "precisely",
  "preferred",
  "prep",
  "preparation",
  "prepared",
  "preparing",
  "presence",
  "presentation",
  "presented",
  "preservation",
  "pressing",
  "prevent",
  "prevented",
  "previous",
  "prey",
  "price",
  "pride",
  "prim",
  "primary",
  "prime",
  "principle",
  "principles",
  "prior",
  "prison",
  "private",
  "prize",
  "probe",
  "problem",
  "process",
  "processes",
  "processing",
  "proclamation",
  "procreations",
  "prod",
  "produce",
  "producing",
  "productivity",
  "products",
  "professional",
  "professionalism",
  "professionalisms",
  "profile",
  "profit",
  "programs",
  "progress",
  "promise",
  "promoting",
  "prone",
  "proof",
  "prop",
  "proper",
  "property",
  "proposed",
  "prose",
  "protect",
  "proven",
  "provide",
  "provides",
  "proxy",
  "prune",
  "pry",
  "pub",
  "publish",
  "pull",
  "pulp",
  "pulse",
  "pump",
  "pun",
  "punch",
  "pup",
  "pupil",
  "puppy",
  "purchase",
  "pure",
  "purge",
  "purpose",
  "pursue",
  "pus",
  "push",
  "put",
  "qualification",
  "qualify",
  "quality",
  "quarterback",
  "queen",
  "quest",
  "quickly",
  "quietly",
  "quote",
  "race",
  "racial",
  "rack",
  "radical",
  "rag",
  "rage",
  "raid",
  "rail",
  "rain",
  "rainy",
  "raise",
  "raised",
  "raises",
  "rake",
  "rally",
  "ram",
  "ramp",
  "ran",
  "ranch",
  "rang",
  "range",
  "rank",
  "rap",
  "rapid",
  "rasp",
  "rat",
  "rate",
  "rather",
  "ratio",
  "rationalising",
  "rationalizing",
  "rave",
  "raw",
  "ray",
  "reach",
  "read",
  "reading",
  "readjustment",
  "readjustments",
  "ready",
  "real",
  "realistic",
  "reality",
  "realization",
  "realize",
  "realm",
  "reap",
  "rear",
  "reason",
  "rebel",
  "receive",
  "received",
  "receiving",
  "recently",
  "recipe",
  "recognisable",
  "recognising",
  "recognition",
  "recommendation",
  "recommendations",
  "recording",
  "recover",
  "red",
  "reed",
  "reef",
  "reel",
  "reestablished",
  "ref",
  "refer",
  "reflect",
  "reflected",
  "reform",
  "regulated",
  "regulations",
  "rehabilitation",
  "reign",
  "rein",
  "reinforcement",
  "reinforcing",
  "relations",
  "relationships",
  "relax",
  "release",
  "reliability",
  "rely",
  "remain",
  "remained",
  "remaining",
  "remind",
  "remove",
  "rend",
  "render",
  "rent",
  "rep",
  "repair",
  "repay",
  "repeat",
  "repeated",
  "replace",
  "replaced",
  "replacement",
  "reply",
  "representation",
  "require",
  "requirements",
  "requires",
  "rerun",
  "research",
  "resign",
  "resolve",
  "resort",
  "resource",
  "respect",
  "responded",
  "response",
  "responsibilities",
  "rest",
  "restore",
  "restriction",
  "restrictions",
  "result",
  "resulted",
  "resulting",
  "retail",
  "return",
  "returning",
  "reuse",
  "reveal",
  "revealing",
  "revenue",
  "revolutionize",
  "revolutionizer",
  "reward",
  "rhinestone",
  "rhinestones",
  "rice",
  "rich",
  "rid",
  "ride",
  "rider",
  "ridge",
  "rife",
  "rifle",
  "rig",
  "right",
  "rile",
  "rim",
  "ring",
  "riot",
  "rip",
  "rise",
  "risk",
  "risky",
  "rival",
  "river",
  "rivet",
  "roam",
  "roar",
  "rob",
  "robe",
  "robot",
  "rock",
  "rocky",
  "rod",
  "roe",
  "role",
  "roles",
  "roll",
  "roof",
  "rook",
  "room",
  "roost",
  "root",
  "rooted",
  "roots",
  "rope",
  "rose",
  "rot",
  "rouge",
  "rough",
  "roughhoused",
  "round",
  "rout",
  "route",
  "rove",
  "rover",
  "row",
  "royal",
  "rub",
  "rude",
  "rug",
  "ruler",
  "ruling",
  "rum",
  "run",
  "rune",
  "runny",
  "rural",
  "rush",
  "rust",
  "rut",
  "rye",
  "sad",
  "sadly",
  "safe",
  "safety",
  "sag",
  "sage",
  "saint",
  "sake",
  "salad",
  "sale",
  "salt",
  "same",
  "sample",
  "sand",
  "sane",
  "sang",
  "sank",
  "sap",
  "sash",
  "sat",
  "satisfaction",
  "satisfactions",
  "satisfied",
  "sauce",
  "save",
  "savvy",
  "saw",
  "say",
  "scale",
  "scandalising",
  "scary",
  "scene",
  "school",
  "schoolwork",
  "scone",
  "scope",
  "score",
  "scorn",
  "scorned",
  "scout",
  "scowl",
  "sea",
  "seam",
  "second",
  "secondary",
  "secret",
  "sector",
  "security",
  "seed",
  "seem",
  "seen",
  "selected",
  "self",
  "selflessness",
  "sell",
  "send",
  "sense",
  "sensitive",
  "sent",
  "sentence",
  "series",
  "seriously",
  "serve",
  "served",
  "service",
  "services",
  "set",
  "setup",
  "seven",
  "sever",
  "several",
  "sew",
  "shall",
  "shame",
  "shape",
  "share",
  "shark",
  "sharp",
  "shed",
  "sheen",
  "sheer",
  "shelf",
  "shell",
  "shift",
  "shin",
  "shine",
  "ship",
  "shipping",
  "shirt",
  "shock",
  "shoe",
  "shoes",
  "shone",
  "shore",
  "shores",
  "shorn",
  "short",
  "shot",
  "shout",
  "shove",
  "shovel",
  "show",
  "shut",
  "shy",
  "sick",
  "side",
  "sigh",
  "sight",
  "significant",
  "significantly",
  "silk",
  "sill",
  "silly",
  "silo",
  "simple",
  "sin",
  "since",
  "sing",
  "single",
  "sink",
  "sip",
  "sir",
  "sister",
  "sit",
  "site",
  "situation",
  "sixth",
  "sixty",
  "size",
  "skate",
  "ski",
  "skid",
  "skill",
  "skip",
  "skull",
  "sky",
  "slab",
  "slain",
  "slake",
  "slap",
  "slate",
  "slave",
  "sleek",
  "sleep",
  "sleepyhead",
  "sleepyheads",
  "sleet",
  "slew",
  "slice",
  "slid",
  "slide",
  "slightly",
  "slim",
  "sling",
  "slink",
  "slip",
  "slob",
  "slope",
  "slot",
  "sloth",
  "slow",
  "slowly",
  "slum",
  "slur",
  "sly",
  "small",
  "smart",
  "smell",
  "smile",
  "smite",
  "smoke",
  "smother",
  "snap",
  "snare",
  "sneak",
  "sneer",
  "snide",
  "sniff",
  "snip",
  "snob",
  "snore",
  "snow",
  "soak",
  "soar",
  "sob",
  "social",
  "society",
  "sock",
  "sod",
  "soft",
  "software",
  "soil",
  "solar",
  "soldier",
  "sole",
  "soles",
  "solid",
  "solution",
  "solve",
  "some",
  "somehow",
  "someone",
  "sometimes",
  "son",
  "song",
  "soot",
  "sophisticated",
  "sophistication",
  "sophistications",
  "sore",
  "sorry",
  "sort",
  "sought",
  "soul",
  "soup",
  "sour",
  "source",
  "south",
  "southbound",
  "sow",
  "soy",
  "spa",
  "space",
  "spade",
  "spare",
  "spark",
  "spawn",
  "speak",
  "special",
  "specialized",
  "specific",
  "specification",
  "spectacular",
  "speed",
  "spend",
  "spice",
  "spicy",
  "spill",
  "spin",
  "spine",
  "spirit",
  "spiritual",
  "spit",
  "spite",
  "spoke",
  "spoken",
  "spook",
  "spoon",
  "spot",
  "spout",
  "spray",
  "spread",
  "springboard",
  "springboards",
  "springtime",
  "spur",
  "spy",
  "stab",
  "stable",
  "staff",
  "stag",
  "stage",
  "stain",
  "stale",
  "stall",
  "stamp",
  "standard",
  "standardised",
  "standardiser",
  "standardises",
  "standardization",
  "standardize",
  "standardized",
  "standardizer",
  "standardizes",
  "star",
  "stare",
  "stark",
  "start",
  "state",
  "statement",
  "static",
  "station",
  "steady",
  "steak",
  "steal",
  "steam",
  "steel",
  "steep",
  "steer",
  "stem",
  "step",
  "stern",
  "stew",
  "stick",
  "stiff",
  "still",
  "stimulation",
  "stimulations",
  "sting",
  "stink",
  "stir",
  "stock",
  "stoke",
  "stolen",
  "stone",
  "stoner",
  "stood",
  "stop",
  "store",
  "stored",
  "stores",
  "storm",
  "story",
  "storyboards",
  "stout",
  "strap",
  "straw",
  "stray",
  "stream",
  "street",
  "strict",
  "strike",
  "strip",
  "stroke",
  "stroked",
  "strokes",
  "strong",
  "struck",
  "structure",
  "struggle",
  "strum",
  "stub",
  "stuck",
  "stud",
  "student",
  "students",
  "study",
  "studying",
  "stuff",
  "stun",
  "stupid",
  "sty",
  "style",
  "sub",
  "subject",
  "submit",
  "substantial",
  "substantival",
  "succeeded",
  "success",
  "such",
  "sue",
  "suffer",
  "sufficiently",
  "sugar",
  "suggested",
  "suite",
  "sulk",
  "sulky",
  "sum",
  "summarising",
  "summarizing",
  "summit",
  "sun",
  "sung",
  "sunk",
  "sunny",
  "sup",
  "super",
  "supply",
  "support",
  "supported",
  "supposed",
  "sure",
  "surf",
  "surface",
  "surge",
  "surprised",
  "surviving",
  "susceptibility",
  "sustain",
  "sustained",
  "swap",
  "swat",
  "sway",
  "swear",
  "sweat",
  "sweep",
  "sweet",
  "swept",
  "swift",
  "swim",
  "swine",
  "swipe",
  "swirl",
  "swoop",
  "sworn",
  "symbol",
  "syrup",
  "system",
  "systematizing",
  "tab",
  "table",
  "tablecloth",
  "tack",
  "tail",
  "taken",
  "tale",
  "talent",
  "tall",
  "tame",
  "tan",
  "tang",
  "tank",
  "tap",
  "tar",
  "target",
  "taste",
  "tasty",
  "tatty",
  "taut",
  "tawny",
  "tax",
  "tea",
  "teach",
  "teacher",
  "teaching",
  "tease",
  "technical",
  "teddy",
  "teem",
  "tell",
  "temporary",
  "ten",
  "tend",
  "tendency",
  "tent",
  "tepid",
  "term",
  "terminal",
  "territory",
  "test",
  "textbook",
  "than",
  "thank",
  "thankfulness",
  "that",
  "the",
  "them",
  "theme",
  "then",
  "theory",
  "there",
  "these",
  "they",
  "thick",
  "thin",
  "thing",
  "think",
  "third",
  "this",
  "thorn",
  "those",
  "thou",
  "though",
  "thousand",
  "thousands",
  "threat",
  "three",
  "threw",
  "throb",
  "throbs",
  "throne",
  "through",
  "throw",
  "thump",
  "thy",
  "ticket",
  "tide",
  "tidy",
  "tie",
  "tiger",
  "tight",
  "till",
  "tilt",
  "time",
  "timer",
  "tin",
  "tiny",
  "tip",
  "tire",
  "tired",
  "title",
  "toad",
  "today",
  "toe",
  "together",
  "token",
  "told",
  "toles",
  "toll",
  "tomb",
  "ton",
  "tone",
  "toner",
  "tones",
  "too",
  "took",
  "top",
  "torn",
  "toss",
  "tote",
  "touch",
  "tough",
  "tour",
  "tournament",
  "tow",
  "toward",
  "towards",
  "tower",
  "town",
  "toxic",
  "toy",
  "trace",
  "track",
  "trackrecord",
  "trade",
  "traffic",
  "trail",
  "train",
  "training",
  "trait",
  "transfer",
  "transformation",
  "transparent",
  "trap",
  "travel",
  "traveled",
  "trawl",
  "tray",
  "tread",
  "treat",
  "treatment",
  "treaty",
  "tree",
  "trek",
  "trend",
  "tribal",
  "trick",
  "tried",
  "trim",
  "trio",
  "trip",
  "triple",
  "trite",
  "troll",
  "troop",
  "troposphere",
  "troubles",
  "truck",
  "true",
  "truly",
  "trump",
  "trusted",
  "try",
  "trying",
  "tub",
  "tuck",
  "tuft",
  "tug",
  "tune",
  "tuner",
  "tunnel",
  "turf",
  "tusk",
  "twang",
  "tweak",
  "tweed",
  "twin",
  "twist",
  "two",
  "tying",
  "type",
  "typewriting",
  "typewritings",
  "typical",
  "typically",
  "ugh",
  "ugly",
  "ulcer",
  "ultimate",
  "ultra",
  "uncertain",
  "uncommon",
  "under",
  "undercover",
  "understanding",
  "understands",
  "undo",
  "unfit",
  "unforgettable",
  "unforgotten",
  "unfortunately",
  "unique",
  "uniqueness",
  "unite",
  "universal",
  "unless",
  "unofficially",
  "unprecedented",
  "unquestioned",
  "unresponsive",
  "until",
  "unveil",
  "update",
  "upon",
  "upper",
  "upset",
  "urban",
  "urge",
  "urn",
  "use",
  "used",
  "useful",
  "usher",
  "usually",
  "utilization",
  "utter",
  "vague",
  "vale",
  "valid",
  "valley",
  "valuable",
  "value",
  "valve",
  "van",
  "vane",
  "vanquished",
  "vapor",
  "varied",
  "vary",
  "vat",
  "vault",
  "veal",
  "veer",
  "veil",
  "vein",
  "venom",
  "verb",
  "verge",
  "verse",
  "via",
  "vibe",
  "vice",
  "victim",
  "vie",
  "view",
  "vigil",
  "vile",
  "village",
  "vim",
  "vine",
  "violence",
  "violent",
  "viral",
  "virtual",
  "virtue",
  "virus",
  "vision",
  "visit",
  "visor",
  "vista",
  "visual",
  "visualization",
  "vital",
  "vivid",
  "vocal",
  "vogue",
  "voice",
  "void",
  "vole",
  "volleyball",
  "volleyballer",
  "volt",
  "volume",
  "vote",
  "vouch",
  "vow",
  "vulnerability",
  "wad",
  "wade",
  "wag",
  "wage",
  "wager",
  "wake",
  "walk",
  "wall",
  "wallet",
  "wane",
  "want",
  "war",
  "ward",
  "warm",
  "warn",
  "warp",
  "wart",
  "was",
  "wash",
  "watch",
  "water",
  "watercolor",
  "watt",
  "wavy",
  "wax",
  "weak",
  "weal",
  "wealthy",
  "wean",
  "weapon",
  "weary",
  "weave",
  "web",
  "wed",
  "wedge",
  "weed",
  "weedy",
  "week",
  "weekly",
  "weigh",
  "weight",
  "weird",
  "welcome",
  "welcomings",
  "well",
  "welt",
  "wend",
  "went",
  "were",
  "west",
  "western",
  "wet",
  "whale",
  "whatever",
  "wheat",
  "wheel",
  "where",
  "wherever",
  "whet",
  "whether",
  "whets",
  "which",
  "while",
  "whilst",
  "whirl",
  "whisk",
  "white",
  "who",
  "whole",
  "wholehearted",
  "wholeheartedness",
  "wholes",
  "wholesale",
  "whose",
  "why",
  "wicked",
  "wide",
  "widely",
  "widen",
  "widow",
  "wield",
  "wife",
  "wig",
  "wild",
  "wildlife",
  "wile",
  "will",
  "wilt",
  "win",
  "wink",
  "winter",
  "wire",
  "wise",
  "wish",
  "wit",
  "with",
  "withdraw",
  "withdrawn",
  "within",
  "witty",
  "woe",
  "wok",
  "woke",
  "wold",
  "wolf",
  "woman",
  "women",
  "wonder",
  "woo",
  "wood",
  "wooden",
  "woodpecker",
  "woodpeckers",
  "woof",
  "wool",
  "word",
  "wore",
  "work",
  "worker",
  "working",
  "workshop",
  "world",
  "worldclass",
  "worldwide",
  "worm",
  "worn",
  "worry",
  "worse",
  "worst",
  "wort",
  "worth",
  "worthiness",
  "would",
  "wound",
  "wove",
  "wow",
  "wrap",
  "wren",
  "wring",
  "wrist",
  "writ",
  "writing",
  "wrote",
  "wrung",
  "yacht",
  "yak",
  "yam",
  "yap",
  "yard",
  "yarn",
  "yaw",
  "yawn",
  "yea",
  "year",
  "yearly",
  "yell",
  "yelp",
  "yet",
  "yew",
  "yield",
  "yob",
  "you",
  "young",
  "younger",
  "your",
  "yours",
  "yourself",
  "youth",
  "yowl",
  "yule",
  "zap",
  "zeal",
  "zen",
  "zero",
  "zig",
  "zinc",
  "zip",
  "zone",
  "zoo"
]);;

// ─── Offensive word blocklist ─────────────────────────────────────────────────
// Matched against the fully-resolved lowercase word before any dictionary check.
const OFFENSIVE_WORDS = new Set([
  // Racial/ethnic slurs
  "nigger","niggers","nigga","niggas","chink","chinks","spic","spics","spick","spicks",
  "kike","kikes","wetback","wetbacks","gook","gooks","jap","japs","coon","coons",
  "darkie","darkies","wop","wops","dago","dagos","paki","pakis","raghead","ragheads",
  // Homophobic/transphobic slurs
  "faggot","faggots","tranny","trannies","shemale",
  // Extreme profanity & sexual
  "cunt","cunts","fucked","fucker","fuckers","fucking",
  "shitting","shitter","shitters",
  "asshole","assholes","arsehole","arseholes",
  // Violent/illegal
  "rapist","rapists","raping",
  "pedophile","pedophiles","paedophile","paedophiles",
]);

// ─── PUZZLES START ───
const PUZZLES = [
  { id: "p0148", letters: ["A","R","B","I","L","W","Y","A","K","A","S","S","D","M","M","T","S","O","H","B","A","R"], prevAnswers: [{"word":"AMBASSADOR","pct":4},{"word":"ABYSS","pct":21},{"word":"BASS","pct":27},{"word":"BIAS","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0028", letters: ["W","P","K","I","G","N","I","N","I","I","S","R","D","U","L","A","U","S","O","I","R","T"], prevAnswers: [{"word":"INDUSTRIALISING","pct":1},{"word":"SLING","pct":22},{"word":"TRAIL","pct":28},{"word":"PINK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0306", letters: ["H","T","E","L","W","H","U","A","Y","O","R","V","A","N","Z","I","O","U","A","T","I","N"], prevAnswers: [{"word":"AUTHORIZATION","pct":1},{"word":"NATION","pct":22},{"word":"RIVAL","pct":28},{"word":"LAVA","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0076", letters: ["Y","C","N","K","O","O","O","R","B","L","L","I","H","A","M","T","A","G","B","O","R","V"], prevAnswers: [{"word":"COLLABORATION","pct":1},{"word":"MOTION","pct":22},{"word":"COLON","pct":28},{"word":"COOL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0181", letters: ["C","N","E","M","F","","T","E","I","E","A","P","R","I","L","L","X","O","D","W","E","Y"], prevAnswers: [{"word":"EXPERIMENTAL","pct":2},{"word":"CHAPTER","pct":22},{"word":"VALLEY","pct":27},{"word":"LETTER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0311", letters: ["O","D","M","G","B","","S","A","R","Q","U","C","F","U","I","N","S","S","E","N","E","P"], prevAnswers: [{"word":"UNIQUENESS","pct":4},{"word":"UNIQUE","pct":21},{"word":"INCUR","pct":27},{"word":"DISC","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0352", letters: ["P","H","E","P","D","S","E","R","U","G","O","M","T","V","T","S","M","A","N","C","F","B"], prevAnswers: [{"word":"ATMOSPHERE","pct":4},{"word":"SHEER","pct":21},{"word":"PEER","pct":27},{"word":"HERE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0295", letters: ["G","B","E","N","D","","C","N","S","F","O","E","T","N","D","R","M","P","E","K","S","E"], prevAnswers: [{"word":"ENDORSEMENTS","pct":2},{"word":"ENDORSEMENT","pct":22},{"word":"BENCH","pct":27},{"word":"GOOD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0275", letters: ["G","N","I","P","K","O","R","T","I","O","C","E","O","R","","D","M","N","Y","V","T","N"], prevAnswers: [{"word":"RECOGNITION","pct":3},{"word":"ROCKY","pct":21},{"word":"TIRED","pct":27},{"word":"ORDER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0042", letters: ["S","P","H","C","W","R","E","R","Y","E","N","K","A","S","O","I","T","N","E","N","T","A"], prevAnswers: [{"word":"REPRESENTATION","pct":1},{"word":"PRESENTATION","pct":22},{"word":"PERCH","pct":28},{"word":"PERK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0099", letters: ["O","F","N","P","R","","U","O","U","G","O","A","H","C","T","Y","V","T","T","E","N","R"], prevAnswers: [{"word":"UNFORGOTTEN","pct":3},{"word":"FORGE","pct":21},{"word":"QUOTE","pct":27},{"word":"FORD","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0129", letters: ["E","D","I","D","N","N","","N","S","T","E","D","C","L","W","P","E","B","Y","E","N","Y"], prevAnswers: [{"word":"INDEPENDENTLY","pct":1},{"word":"INDEPENDENT","pct":22},{"word":"INTENT","pct":28},{"word":"DEPEND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0045", letters: ["R","E","A","L","W","S","","V","T","R","T","N","C","D","I","N","O","M","C","T","I","G"], prevAnswers: [{"word":"RESTRICTIONS","pct":3},{"word":"INITIAL","pct":21},{"word":"CITIES","pct":27},{"word":"REAL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0166", letters: ["B","I","T","C","E","I","O","R","E","H","N","I","S","U","F","N","E","R","P","K","T","O"], prevAnswers: [{"word":"INTERSECTION","pct":2},{"word":"SECTOR","pct":22},{"word":"INTER","pct":27},{"word":"TRIO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0254", letters: ["B","E","A","O","R","H","E","L","U","F","P","R","I","K","A","N","Z","A","N","O","I","T"], prevAnswers: [{"word":"REALIZATION","pct":3},{"word":"BEER","pct":21},{"word":"HEEL","pct":27},{"word":"BEER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0183", letters: ["W","I","H","Y","T","M","T","L","B","S","S","A","C","K","","K","C","U","G","V","I","L"], prevAnswers: [{"word":"BLACKSMITH","pct":4},{"word":"BLACK","pct":21},{"word":"CLASH","pct":27},{"word":"WITH","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0212", letters: ["T","I","R","H","U","F","S","G","B","E","I","I","N","O","O","R","T","A","S","G","E","C"], prevAnswers: [{"word":"CATEGORISING","pct":2},{"word":"INTRO","pct":22},{"word":"RIFE","pct":27},{"word":"RIFE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0266", letters: ["A","T","S","D","M","N","I","Y","V","L","N","O","A","I","A","N","G","N","","I","E","R"], prevAnswers: [{"word":"NATIONALISING","pct":1},{"word":"NATIONALIZING","pct":22},{"word":"NATION","pct":28},{"word":"DANGER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0145", letters: ["V","J","S","M","H","","N","G","B","M","E","T","E","N","E","S","E","N","D","R","O","D"], prevAnswers: [{"word":"ENDORSEMENT","pct":3},{"word":"ENDORSE","pct":21},{"word":"INTEND","pct":27},{"word":"VANE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0259", letters: ["S","L","A","N","M","I","F","O","S","","O","E","I","T","P","R","S","S","C","G","V","A"], prevAnswers: [{"word":"PROFESSIONALISMS","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"REFORM","pct":28},{"word":"SLIM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0026", letters: ["Y","A","N","I","C","R","T","D","W","P","X","R","R","K","A","E","A","O","N","Y","L","M"], prevAnswers: [{"word":"EXTRAORDINARY","pct":1},{"word":"ORDINARY","pct":22},{"word":"REALM","pct":28},{"word":"CYAN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0121", letters: ["P","K","S","T","I","","I","N","R","E","D","W","U","Y","V","N","C","T","O","S","O","I"], prevAnswers: [{"word":"INSTRUCTIONS","pct":3},{"word":"POINT","pct":21},{"word":"SNIDE","pct":27},{"word":"PICK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0185", letters: ["U","E","G","B","E","L","S","","A","F","N","S","H","L","E","E","C","W","S","S","S","P"], prevAnswers: [{"word":"SELFLESSNESS","pct":2},{"word":"CENSUS","pct":22},{"word":"CHARGE","pct":27},{"word":"GASH","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0085", letters: ["W","P","T","P","S","","I","Y","E","M","N","T","W","V","G","T","I","R","R","Y","O","D"], prevAnswers: [{"word":"TYPEWRITINGS","pct":2},{"word":"WRITING","pct":21},{"word":"POINT","pct":27},{"word":"WANT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0146", letters: ["A","R","M","Y","I","D","N","F","R","M","E","T","A","V","E","L","M","O","T","N","P","C"], prevAnswers: [{"word":"COMPLEMENTARY","pct":1},{"word":"COMPLEMENT","pct":22},{"word":"ARMY","pct":28},{"word":"ARMY","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0019", letters: ["S","L","C","R","R","A","","D","E","U","I","E","F","P","K","T","N","A","S","L","H","W"], prevAnswers: [{"word":"CREDENTIALS","pct":3},{"word":"FEDERAL","pct":21},{"word":"RAISED","pct":27},{"word":"SLATE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0197", letters: ["F","C","Y","L","O","I","I","N","T","D","F","E","S","G","","F","U","T","S","U","A","R"], prevAnswers: [{"word":"SUFFICIENTLY","pct":2},{"word":"TRAFFIC","pct":22},{"word":"SNIFF","pct":27},{"word":"FINE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0119", letters: ["Y","V","T","I","R","M","","H","U","E","I","G","B","T","E","N","A","T","D","N","O","I"], prevAnswers: [{"word":"DETERMINATION","pct":1},{"word":"REMAINED","pct":22},{"word":"NATION","pct":28},{"word":"TIMER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0288", letters: ["E","S","D","U","R","P","E","F","B","T","R","T","I","I","A","V","R","H","O","N","C","W"], prevAnswers: [{"word":"PRESERVATION","pct":2},{"word":"RATIO","pct":22},{"word":"WHITE","pct":27},{"word":"DEFT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0321", letters: ["V","T","S","P","H","","F","B","E","N","N","S","O","M","E","T","C","M","I","N","O","P"], prevAnswers: [{"word":"COMPONENTS","pct":4},{"word":"INTEND","pct":21},{"word":"STONE","pct":27},{"word":"VANE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0346", letters: ["I","S","L","P","R","R","E","I","P","P","I","N","C","O","U","F","B","E","S","C","A","D"], prevAnswers: [{"word":"PRINCIPLES","pct":4},{"word":"PRINCIPLE","pct":21},{"word":"LINER","pct":27},{"word":"ISLE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0015", letters: ["A","E","N","A","P","E","C","M","R","R","F","O","R","F","","D","W","B","E","N","M","T"], prevAnswers: [{"word":"PERFORMANCE","pct":3},{"word":"REFORM","pct":21},{"word":"APRON","pct":27},{"word":"PERK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0270", letters: ["M","T","L","C","Y","A","I","A","V","C","O","S","A","I","N","S","N","C","F","I","H","U"], prevAnswers: [{"word":"CLASSIFICATION","pct":1},{"word":"FINISH","pct":22},{"word":"AVAIL","pct":28},{"word":"TAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0241", letters: ["C","S","I","H","R","T","I","P","O","U","C","","S","B","A","T","N","I","T","I","O","H"], prevAnswers: [{"word":"SOPHISTICATIONS","pct":1},{"word":"SITUATION","pct":22},{"word":"ACTIONS","pct":28},{"word":"STATION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0109", letters: ["M","E","T","G","A","","S","L","W","T","Z","Y","S","B","I","I","E","I","M","G","N","O"], prevAnswers: [{"word":"SYSTEMATIZING","pct":1},{"word":"SYSTEM","pct":22},{"word":"SHAME","pct":28},{"word":"MEAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0315", letters: ["E","D","U","F","N","N","","N","I","T","E","D","T","L","D","P","E","P","Y","S","C","W"], prevAnswers: [{"word":"INDEPENDENTLY","pct":1},{"word":"INDEPENDENT","pct":22},{"word":"INTENT","pct":28},{"word":"ENTER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0187", letters: ["Y","T","N","V","O","I","C","O","S","U","N","","R","O","M","G","B","T","U","S","N","U"], prevAnswers: [{"word":"CONTINUOUS","pct":4},{"word":"YOUNGER","pct":21},{"word":"TYING","pct":27},{"word":"TINY","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0143", letters: ["A","R","A","V","T","L","D","T","I","I","C","E","O","D","","M","N","G","B","E","O","R"], prevAnswers: [{"word":"DECLARATION","pct":3},{"word":"DECLINE","pct":21},{"word":"RATIO","pct":27},{"word":"CEDAR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0253", letters: ["P","K","H","E","A","","I","N","R","O","L","W","I","Y","V","E","C","T","T","N","N","A"], prevAnswers: [{"word":"INHERITANCE","pct":3},{"word":"PROVEN","pct":21},{"word":"APPLE","pct":27},{"word":"PACK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0001", letters: ["D","A","R","F","O","U","","E","I","C","M","C","G","H","N","E","G","W","T","I","N","P"], prevAnswers: [{"word":"DOCUMENTING","pct":3},{"word":"ARGUMENT","pct":21},{"word":"FRAUD","pct":27},{"word":"DARE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0324", letters: ["O","S","E","P","H","U","R","S","F","D","E","P","S","B","E","N","I","O","D","A","C","N"], prevAnswers: [{"word":"DEPRESSION","pct":4},{"word":"HOUSE","pct":21},{"word":"SPEED","pct":27},{"word":"SOUR","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0002", letters: ["P","P","S","C","W","A","R","B","E","I","P","O","O","A","R","L","Y","L","T","E","N","D"], prevAnswers: [{"word":"APPROPRIATELY","pct":1},{"word":"TRIPLE","pct":22},{"word":"IRATE","pct":28},{"word":"PAIR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0351", letters: ["P","S","P","M","L","","A","R","O","B","T","A","C","I","M","T","N","D","W","I","V","E"], prevAnswers: [{"word":"COMPARATIVE","pct":3},{"word":"SUBMIT","pct":21},{"word":"SPRAY","pct":27},{"word":"PLOT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0044", letters: ["B","I","S","D","M","Z","N","Y","K","I","I","G","G","T","L","A","R","G","U","B","O","L"], prevAnswers: [{"word":"GLOBALIZING","pct":3},{"word":"GLOBAL","pct":21},{"word":"RAINY","pct":27},{"word":"SING","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0113", letters: ["S","U","O","D","H","B","O","O","F","G","N","R","H","V","I","E","","H","G","A","C","W"], prevAnswers: [{"word":"NEIGHBORHOOD","pct":2},{"word":"FOREIGN","pct":22},{"word":"THRONE","pct":27},{"word":"FORCE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0117", letters: ["A","R","W","B","T","U","","O","C","I","G","N","I","O","C","I","F","G","N","H","M","P"], prevAnswers: [{"word":"CONFIGURATION","pct":1},{"word":"GUITAR","pct":22},{"word":"RATIO","pct":28},{"word":"RANG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0240", letters: ["P","M","M","N","A","A","O","C","D","R","T","I","W","Y","E","V","O","C","V","E","H","U"], prevAnswers: [{"word":"COMPARATIVE","pct":3},{"word":"COMPARE","pct":21},{"word":"COVER","pct":27},{"word":"PART","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0034", letters: ["I","T","Y","K","L","I","B","I","O","C","P","C","T","N","R","O","P","A","W","V","M","A"], prevAnswers: [{"word":"COMPATIBILITY","pct":1},{"word":"CLIP","pct":22},{"word":"PROP","pct":28},{"word":"CLIP","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0110", letters: ["G","H","L","W","P","K","I","O","M","A","T","O","S","N","I","G","N","I","D","U","A","M"], prevAnswers: [{"word":"IMAGINATIONS","pct":3},{"word":"LOSING","pct":21},{"word":"AUDIT","pct":27},{"word":"LION","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0105", letters: ["N","L","T","O","H","M","E","N","C","S","S","","P","I","E","T","E","I","L","B","A","H"], prevAnswers: [{"word":"ESTABLISHMENT","pct":1},{"word":"CONTEXT","pct":22},{"word":"LESSON","pct":28},{"word":"LEAST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0238", letters: ["I","R","R","H","U","A","D","F","P","D","Z","I","K","N","A","A","O","N","T","S","T","I"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"KNOT","pct":28},{"word":"KNOT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0304", letters: ["I","E","M","M","L","V","N","E","S","O","T","D","W","V","N","Y","K","O","L","I","A","R"], prevAnswers: [{"word":"INVOLVEMENT","pct":3},{"word":"OLIVE","pct":21},{"word":"EVIL","pct":27},{"word":"EVIL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0317", letters: ["M","Y","K","I","G","","E","D","U","N","E","R","F","O","I","N","I","V","P","G","O","R"], prevAnswers: [{"word":"PIONEERING","pct":4},{"word":"ENGINEER","pct":21},{"word":"BEING","pct":27},{"word":"SNEER","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0210", letters: ["E","R","N","B","E","T","I","A","L","L","N","I","I","S","G","N","Z","C","W","P","I","K"], prevAnswers: [{"word":"INTERNALIZING","pct":1},{"word":"INTER","pct":22},{"word":"REEL","pct":28},{"word":"REEL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0237", letters: ["D","S","G","E","R","A","","M","Y","O","P","A","N","B","S","R","D","B","G","N","I","H"], prevAnswers: [{"word":"SPRINGBOARDS","pct":3},{"word":"LANDING","pct":21},{"word":"SALAD","pct":27},{"word":"DRAB","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0348", letters: ["L","Y","O","Y","H","U","C","L","G","K","E","T","E","I","F","F","I","V","F","E","A","S"], prevAnswers: [{"word":"EFFECTIVELY","pct":3},{"word":"EFFECT","pct":21},{"word":"COLT","pct":27},{"word":"COLT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0041", letters: ["D","A","D","S","V","","S","I","R","A","U","F","B","T","N","T","N","G","A","G","E","H"], prevAnswers: [{"word":"DISADVANTAGE","pct":2},{"word":"ADVANTAGE","pct":22},{"word":"DISTANT","pct":27},{"word":"DAIS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0354", letters: ["B","L","E","C","A","T","H","O","L","N","D","T","W","Y","K","A","L","I","R","M","G","V"], prevAnswers: [{"word":"TABLECLOTH","pct":4},{"word":"CLOTH","pct":21},{"word":"BATH","pct":27},{"word":"BATH","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0198", letters: ["E","N","O","P","N","H","P","L","F","T","S","M","B","E","N","M","O","C","I","D","W","Y"], prevAnswers: [{"word":"COMPONENTS","pct":4},{"word":"PONE","pct":21},{"word":"FLOP","pct":27},{"word":"PONE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0358", letters: ["C","W","Y","P","E","I","S","O","P","I","E","N","S","T","I","L","S","I","D","M","I","B"], prevAnswers: [{"word":"POSSIBILITIES","pct":1},{"word":"MILES","pct":22},{"word":"WISE","pct":28},{"word":"WISE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0349", letters: ["D","R","S","R","B","A","D","P","I","H","O","","N","F","K","B","G","I","R","P","T","C"], prevAnswers: [{"word":"SPRINGBOARDS","pct":3},{"word":"SPINE","pct":21},{"word":"ABHOR","pct":27},{"word":"DRAB","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0136", letters: ["S","L","K","C","F","P","T","R","A","C","K","E","B","N","D","Q","T","W","Y","U","A","R"], prevAnswers: [{"word":"QUARTERBACK","pct":3},{"word":"TRACK","pct":21},{"word":"CARE","pct":27},{"word":"CART","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0168", letters: ["K","N","O","I","O","C","U","T","E","R","M","N","A","W","Y","M","I","C","V","A","O","C"], prevAnswers: [{"word":"COMMUNICATION","pct":1},{"word":"COMMUNICATE","pct":22},{"word":"COMIC","pct":28},{"word":"KNOT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0252", letters: ["P","D","T","K","I","I","S","I","H","D","I","N","G","E","S","U","G","R","H","M","Y","V"], prevAnswers: [{"word":"DISTINGUISHED","pct":1},{"word":"INSIDE","pct":22},{"word":"SNIDE","pct":28},{"word":"KING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0022", letters: ["A","T","Y","N","D","R","E","L","Y","F","U","C","C","B","E","R","U","A","I","H","W","P"], prevAnswers: [{"word":"ACCURATELY","pct":4},{"word":"ACCURATE","pct":21},{"word":"TRUE","pct":27},{"word":"TRUE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0167", letters: ["Y","K","E","I","V","","D","C","M","G","N","E","N","B","E","I","C","O","C","V","N","O"], prevAnswers: [{"word":"CONVENIENCE","pct":3},{"word":"BEING","pct":21},{"word":"BEGUN","pct":27},{"word":"KING","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0084", letters: ["N","N","O","I","L","H","A","T","U","G","M","L","A","B","O","R","I","S","T","N","I","R"], prevAnswers: [{"word":"NORMALISATION","pct":1},{"word":"NORMAL","pct":22},{"word":"ALTO","pct":28},{"word":"HALT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0157", letters: ["U","F","E","I","L","","R","Y","V","N","C","A","A","E","S","R","U","O","S","D","G","B"], prevAnswers: [{"word":"GRACEFULNESS","pct":3},{"word":"ULTRA","pct":21},{"word":"CRANE","pct":27},{"word":"FULL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0301", letters: ["R","F","E","I","P","O","S","S","R","F","I","M","H","U","O","","S","K","N","A","L","I"], prevAnswers: [{"word":"PROFESSIONALISMS","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"PROFIT","pct":28},{"word":"ROSE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0083", letters: ["N","D","E","R","M","B","","V","O","H","O","H","B","T","S","U","N","D","U","O","I","C"], prevAnswers: [{"word":"SOUTHBOUND","pct":4},{"word":"OBVIOUS","pct":21},{"word":"BONER","pct":27},{"word":"BOUND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0302", letters: ["O","S","V","L","M","G","K","I","N","O","A","T","O","B","S","N","A","B","E","R","V","D"], prevAnswers: [{"word":"OBSERVATION","pct":3},{"word":"NATION","pct":21},{"word":"MOAN","pct":27},{"word":"LION","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0126", letters: ["A","E","S","T","N","N","V","G","I","I","V","A","D","N","O","T","U","F","B","I","T","I"], prevAnswers: [{"word":"INVESTIGATION","pct":1},{"word":"INVEST","pct":22},{"word":"AUDIT","pct":28},{"word":"GAVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0144", letters: ["H","O","V","T","D","T","D","O","L","G","E","M","O","I","R","W","G","B","E","H","Y","M"], prevAnswers: [{"word":"METHODOLOGY","pct":3},{"word":"WHERE","pct":21},{"word":"VOLT","pct":27},{"word":"VOTE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0081", letters: ["T","N","R","D","H","E","R","","F","A","T","I","B","R","T","S","N","G","E","I","H","O"], prevAnswers: [{"word":"HEARTSTRING","pct":3},{"word":"GREATER","pct":21},{"word":"HATRED","pct":27},{"word":"OBITER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0283", letters: ["Y","G","M","E","L","O","","H","T","N","L","O","C","F","V","O","D","T","D","G","I","R"], prevAnswers: [{"word":"METHODOLOGY","pct":3},{"word":"VOLUME","pct":21},{"word":"BLOOD","pct":27},{"word":"YOWL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0103", letters: ["E","L","E","O","R","A","I","","H","I","A","Z","U","O","T","F","P","K","N","A","N","S"], prevAnswers: [{"word":"REALIZATION","pct":3},{"word":"REALIZE","pct":21},{"word":"RAISE","pct":27},{"word":"LAID","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0014", letters: ["K","I","T","O","L","L","E","I","A","I","S","R","U","F","B","I","S","O","V","T","S","P"], prevAnswers: [{"word":"POSSIBILITIES","pct":1},{"word":"SUITE","pct":22},{"word":"TILL","pct":28},{"word":"KILL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0108", letters: ["T","R","H","A","H","C","O","W","F","I","P","K","O","E","N","S","W","L","S","S","M","Y"], prevAnswers: [{"word":"WORTHINESS","pct":4},{"word":"WORTH","pct":21},{"word":"THIN","pct":27},{"word":"THIN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0256", letters: ["E","N","D","A","L","F","U","E","D","T","R","C","T","P","S","N","O","K","O","R","U","C"], prevAnswers: [{"word":"CONSTRUCTED","pct":3},{"word":"CRUDE","pct":21},{"word":"OUNCE","pct":27},{"word":"NUDE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0224", letters: ["O","I","T","U","N","G","M","A","R","B","E","O","T","E","O","D","N","S","S","M","C","F"], prevAnswers: [{"word":"DEMONSTRATION","pct":1},{"word":"STATION","pct":22},{"word":"TIME","pct":28},{"word":"TIME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0130", letters: ["C","L","S","I","E","A","I","C","N","R","T","A","G","M","Y","I","P","K","I","L","P","H"], prevAnswers: [{"word":"CAPITALISING","pct":2},{"word":"REALITY","pct":22},{"word":"TRACE","pct":27},{"word":"CART","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0342", letters: ["L","A","C","V","T","P","R","E","M","M","E","R","E","I","D","F","T","N","B","E","N","C"], prevAnswers: [{"word":"REPLACEMENT","pct":3},{"word":"REPLACE","pct":21},{"word":"CAREER","pct":27},{"word":"ACRE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0216", letters: ["I","O","I","T","C","N","T","A","H","U","N","I","C","G","D","E","F","I","B","I","E","O"], prevAnswers: [{"word":"IDENTIFICATION","pct":1},{"word":"DEFICIT","pct":22},{"word":"CHAIN","pct":28},{"word":"THAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0009", letters: ["F","I","S","B","A","L","N","I","S","D","A","G","C","N","A","","R","W","S","C","P","K"], prevAnswers: [{"word":"SCANDALISING","pct":2},{"word":"HANDLING","pct":22},{"word":"FINGER","pct":27},{"word":"FLAG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0037", letters: ["D","I","N","A","A","M","S","I","N","D","T","","U","G","R","B","N","T","A","T","I","O"], prevAnswers: [{"word":"ADMINISTRATIONS","pct":1},{"word":"DISTANT","pct":22},{"word":"AMISS","pct":28},{"word":"DISC","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0142", letters: ["I","S","Y","V","N","G","A","S","G","I","H","L","W","F","I","B","T","T","C","A","N","N"], prevAnswers: [{"word":"SIGNIFICANT","pct":3},{"word":"SING","pct":21},{"word":"SALT","pct":27},{"word":"SING","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0056", letters: ["F","N","I","V","O","T","E","N","M","R","E","R","S","L","C","M","G","B","T","N","E","E"], prevAnswers: [{"word":"REINFORCEMENT","pct":1},{"word":"FORCE","pct":22},{"word":"INTRO","pct":28},{"word":"FORE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0334", letters: ["C","F","P","K","A","R","W","D","S","E","E","A","E","L","H","W","R","T","O","H","M","Y"], prevAnswers: [{"word":"WHOLEHEARTED","pct":2},{"word":"HEARTED","pct":22},{"word":"HEART","pct":27},{"word":"CARE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0211", letters: ["E","I","L","P","E","D","","M","G","P","I","A","K","O","L","C","E","N","O","D","Y","C"], prevAnswers: [{"word":"ENCYCLOPEDIAS","pct":2},{"word":"POLICE","pct":22},{"word":"LILAC","pct":27},{"word":"LAMP","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0061", letters: ["A","L","T","E","H","","E","L","F","P","C","S","B","E","A","C","S","I","S","B","N","D"], prevAnswers: [{"word":"ACCESSIBLE","pct":4},{"word":"ESCAPE","pct":21},{"word":"HOLES","pct":27},{"word":"BLESS","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0293", letters: ["F","H","T","P","E","","B","R","E","D","O","R","A","B","N","U","L","W","Y","K","A","H"], prevAnswers: [{"word":"EARTHBOUND","pct":4},{"word":"THROB","pct":21},{"word":"PEARL","pct":27},{"word":"FOUND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0115", letters: ["D","W","Y","A","N","","N","E","R","A","I","M","G","H","C","K","C","O","V","I","B","L"], prevAnswers: [{"word":"BLOCKCHAINS","pct":4},{"word":"REMIND","pct":21},{"word":"WHICH","pct":27},{"word":"DAWN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0226", letters: ["L","D","F","U","B","E","E","N","R","T","U","O","P","N","E","D","R","E","H","W","E","C"], prevAnswers: [{"word":"UNPRECEDENTED","pct":1},{"word":"BLEED","pct":22},{"word":"PRONE","pct":28},{"word":"DEBT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0114", letters: ["N","M","Y","V","O","D","D","S","W","R","L","C","S","I","O","W","L","A","U","G","B","A"], prevAnswers: [{"word":"WORLDCLASS","pct":4},{"word":"CLASS","pct":21},{"word":"CLOG","pct":27},{"word":"CLOG","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0131", letters: ["Y","O","E","R","M","","P","E","L","K","Y","S","S","L","H","A","D","T","N","E","U","F"], prevAnswers: [{"word":"SLEEPYHEADS","pct":4},{"word":"REPAY","pct":21},{"word":"ESSAY","pct":27},{"word":"REEL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0360", letters: ["G","V","N","A","N","C","L","O","I","E","C","A","T","P","R","O","M","A","D","F","B","T"], prevAnswers: [{"word":"PROCLAMATION","pct":2},{"word":"FORCE","pct":22},{"word":"CLAM","pct":27},{"word":"CLOT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0292", letters: ["M","Y","V","C","A","R","U","A","O","S","D","G","R","B","S","E","E","F","E","N","L","U"], prevAnswers: [{"word":"CAREFULNESS","pct":3},{"word":"AGREE","pct":21},{"word":"SNEER","pct":27},{"word":"MASS","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0035", letters: ["K","O","S","E","S","","D","I","T","M","T","N","I","G","R","U","O","V","T","O","P","P"], prevAnswers: [{"word":"OPPORTUNITIES","pct":1},{"word":"POSITION","pct":22},{"word":"INTRO","pct":28},{"word":"SOAK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0176", letters: ["P","H","U","F","B","T","A","N","I","I","P","T","O","C","C","I","I","P","S","T","R","A"], prevAnswers: [{"word":"PARTICIPATION","pct":1},{"word":"POINT","pct":22},{"word":"STRIP","pct":28},{"word":"HUNT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0195", letters: ["H","K","H","E","N","","M","A","G","V","A","B","R","I","K","A","T","B","D","U","E","R"], prevAnswers: [{"word":"HEARTBREAK","pct":4},{"word":"HEART","pct":21},{"word":"SMART","pct":27},{"word":"NUMB","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0332", letters: ["C","H","O","I","D","E","H","C","W","R","A","Y","K","E","M","O","C","T","B","S","U","G"], prevAnswers: [{"word":"ECHOCHAMBER","pct":3},{"word":"HEARD","pct":21},{"word":"CHARM","pct":27},{"word":"HERD","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0112", letters: ["C","H","E","A","F","W","E","T","R","H","O","L","E","S","S","E","D","P","K","A","N","S"], prevAnswers: [{"word":"WHOLEHEARTEDNESS","pct":1},{"word":"WHOLEHEARTED","pct":22},{"word":"HEARTED","pct":28},{"word":"HEAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0024", letters: ["A","Y","O","R","L","P","F","M","B","E","U","E","S","S","N","L","F","T","S","H","C","G"], prevAnswers: [{"word":"PLAYFULNESS","pct":3},{"word":"ROYAL","pct":21},{"word":"PLAY","pct":27},{"word":"LESS","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0357", letters: ["U","F","L","B","O","N","I","A","E","I","Z","","R","R","T","A","E","E","S","C","G","N"], prevAnswers: [{"word":"GENERALIZATION","pct":1},{"word":"REALIZATION","pct":22},{"word":"REALIZE","pct":28},{"word":"NATION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0193", letters: ["O","R","T","G","H","","N","N","W","B","O","E","I","E","P","I","E","R","N","P","S","L"], prevAnswers: [{"word":"PIONEERING","pct":4},{"word":"TROOP","pct":21},{"word":"INTRO","pct":27},{"word":"OBOE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0065", letters: ["E","L","C","N","C","","L","O","M","T","G","B","C","I","V","E","T","L","A","H","U","F"], prevAnswers: [{"word":"COLLECTIVE","pct":4},{"word":"ELECT","pct":21},{"word":"NOBLE","pct":27},{"word":"EDGE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0264", letters: ["G","E","L","I","G","N","L","U","F","E","B","A","E","S","S","C","H","C","O","D","W","P"], prevAnswers: [{"word":"CHALLENGES","pct":4},{"word":"CHALLENGE","pct":21},{"word":"WHALE","pct":27},{"word":"LIFE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0206", letters: ["W","P","K","O","S","E","D","T","M","N","O","I","C","S","I","S","F","A","A","T","Y","V"], prevAnswers: [{"word":"SATISFACTIONS","pct":2},{"word":"ACTIONS","pct":22},{"word":"ACTION","pct":27},{"word":"DONE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0235", letters: ["A","I","T","I","R","T","O","","S","I","A","N","C","","L","G","W","P","I","N","K","O"], prevAnswers: [{"word":"RATIONALISING","pct":1},{"word":"RATIONALIZING","pct":22},{"word":"ISLAND","pct":28},{"word":"LIVING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0249", letters: ["O","I","M","G","N","T","","T","A","T","C","T","I","C","H","A","R","U","F","P","K","O"], prevAnswers: [{"word":"ATTRACTION","pct":4},{"word":"ATTRACT","pct":21},{"word":"ACTION","pct":27},{"word":"MATCH","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0087", letters: ["U","H","C","F","B","","D","N","G","I","N","I","O","D","T","A","U","E","L","S","T","W"], prevAnswers: [{"word":"OUTSTANDING","pct":3},{"word":"FINDING","pct":21},{"word":"STATIC","pct":27},{"word":"HAND","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0327", letters: ["R","B","N","O","I","","F","R","P","T","H","U","T","A","D","N","U","H","L","W","O","B"], prevAnswers: [{"word":"NORTHBOUND","pct":4},{"word":"RIGHT","pct":21},{"word":"BROTH","pct":27},{"word":"RICH","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0101", letters: ["T","I","S","N","L","","C","I","O","R","I","A","T","W","Y","L","I","K","O","S","P","M"], prevAnswers: [{"word":"IMPLICATIONS","pct":2},{"word":"LOCATIONS","pct":22},{"word":"NOTICE","pct":27},{"word":"VISION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0096", letters: ["W","Y","K","O","C","A","L","T","H","U","P","E","N","C","O","M","M","E","G","V","T","L"], prevAnswers: [{"word":"COMPLEMENT","pct":4},{"word":"COMMENT","pct":21},{"word":"COUPLE","pct":27},{"word":"WALK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0281", letters: ["I","C","N","A","E","","T","F","C","U","Y","I","I","V","S","G","N","A","S","I","G","H"], prevAnswers: [{"word":"SIGNIFICANTLY","pct":3},{"word":"TRYING","pct":21},{"word":"STING","pct":27},{"word":"CLUE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0244", letters: ["N","D","W","Y","K","T","L","A","L","A","C","O","I","B","L","E","T","H","R","M","G","V"], prevAnswers: [{"word":"TABLECLOTH","pct":4},{"word":"TABLE","pct":21},{"word":"CLOTH","pct":27},{"word":"TALE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0082", letters: ["O","L","N","F","H","M","O","Y","V","Q","T","I","A","U","A","C","I","N","A","L","I","F"], prevAnswers: [{"word":"QUALIFICATION","pct":1},{"word":"FICTION","pct":22},{"word":"ATOM","pct":28},{"word":"ATOM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0132", letters: ["F","R","T","D","T","A","S","M","Y","I","N","U","V","A","O","N","R","F","U","H","C","G"], prevAnswers: [{"word":"FRUSTRATION","pct":3},{"word":"NATION","pct":21},{"word":"TRAIN","pct":27},{"word":"FAST","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0151", letters: ["C","R","W","O","K","E","","D","O","H","K","P","M","Y","E","C","E","D","P","A","S","U"], prevAnswers: [{"word":"WOODPECKERS","pct":4},{"word":"EMPIRE","pct":21},{"word":"CREAK","pct":27},{"word":"CREW","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0133", letters: ["P","T","C","G","R","","A","N","N","O","L","O","A","F","S","S","I","L","E","M","S","I"], prevAnswers: [{"word":"PROFESSIONALISM","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"FORMAL","pct":28},{"word":"PROSE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0006", letters: ["M","G","P","S","V","T","R","E","U","L","R","C","I","U","A","T","D","F","C","A","B","E"], prevAnswers: [{"word":"SPECTACULAR","pct":3},{"word":"ULTRA","pct":21},{"word":"DEBT","pct":27},{"word":"DICE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0205", letters: ["G","B","C","E","E","","O","R","R","N","M","M","L","D","E","M","N","F","A","T","I","O"], prevAnswers: [{"word":"RECOMMENDATION","pct":1},{"word":"COMMENT","pct":22},{"word":"COMMON","pct":28},{"word":"BOUND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0202", letters: ["L","M","G","V","S","S","O","S","P","E","I","O","N","R","H","D","U","F","P","E","B","E"], prevAnswers: [{"word":"DEPRESSIONS","pct":4},{"word":"MOON","pct":21},{"word":"GOON","pct":27},{"word":"MOON","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0078", letters: ["S","I","B","G","T","S","S","I","L","P","O","P","I","A","R","U","T","F","K","I","Y","Y"], prevAnswers: [{"word":"POSSIBILITY","pct":3},{"word":"SPOUT","pct":21},{"word":"SOUR","pct":27},{"word":"SOUR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0330", letters: ["O","L","C","P","P","D","Y","H","M","E","I","C","G","K","A","O","N","E","D","Y","S","U"], prevAnswers: [{"word":"ENCYCLOPEDIA","pct":2},{"word":"CLOP","pct":22},{"word":"PEAK","pct":27},{"word":"CLOP","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0063", letters: ["E","H","C","O","N","I","E","M","C","S","V","R","P","V","E","","W","Y","E","N","R","P"], prevAnswers: [{"word":"COMPREHENSIVES","pct":1},{"word":"PREVENT","pct":22},{"word":"EVENT","pct":28},{"word":"SERVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0353", letters: ["C","O","L","G","R","I","M","","E","C","U","S","I","S","C","A","T","R","E","N","M","D"], prevAnswers: [{"word":"CIRCUMSTANCES","pct":1},{"word":"DISTANCE","pct":22},{"word":"STRIKE","pct":28},{"word":"NATIVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0170", letters: ["A","S","M","L","D","M","W","Y","V","A","I","T","N","D","I","N","H","U","S","T","E","R"], prevAnswers: [{"word":"ADMINISTER","pct":4},{"word":"WINTER","pct":21},{"word":"INTER","pct":27},{"word":"SWIM","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0053", letters: ["F","K","I","C","P","","C","H","W","D","U","T","B","O","R","V","I","O","P","I","T","Y"], prevAnswers: [{"word":"PRODUCTIVITY","pct":2},{"word":"PRODUCE","pct":22},{"word":"WHICH","pct":27},{"word":"FACT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0018", letters: ["N","L","I","C","F","P","K","A","S","R","R","O","S","T","U","A","N","E","A","N","L","D"], prevAnswers: [{"word":"NATURALNESS","pct":3},{"word":"PROSE","pct":21},{"word":"RURAL","pct":27},{"word":"CASE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0104", letters: ["T","H","G","S","C","F","L","N","T","E","N","I","E","B","E","H","G","M","N","T","E","N"], prevAnswers: [{"word":"ENLIGHTENMENTS","pct":1},{"word":"FLIGHT","pct":22},{"word":"LINEN","pct":28},{"word":"STEM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0223", letters: ["L","M","N","G","B","","I","E","I","H","R","H","S","D","U","E","F","T","P","K","N","O"], prevAnswers: [{"word":"RHINESTONE","pct":4},{"word":"STONER","pct":21},{"word":"BEING","pct":27},{"word":"LORE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0365", letters: ["V","I","G","N","D","","A","S","I","O","D","L","I","U","F","N","S","B","A","S","A","C"], prevAnswers: [{"word":"SCANDALISING","pct":2},{"word":"ISLAND","pct":22},{"word":"VITAL","pct":27},{"word":"VEAL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0273", letters: ["E","R","A","P","K","D","I","T","A","I","O","","D","S","N","N","L","W","C","O","Y","V"], prevAnswers: [{"word":"CONSIDERATIONS","pct":1},{"word":"CONSIDER","pct":22},{"word":"RATIO","pct":28},{"word":"DRAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0070", letters: ["C","N","O","I","W","Y","V","T","A","D","R","D","A","N","A","S","I","Z","A","T","N","D"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"DAIS","pct":28},{"word":"DATA","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0169", letters: ["X","L","A","E","E","P","A","N","O","L","T","","C","N","I","W","Y","K","O","A","N","S"], prevAnswers: [{"word":"EXPLANATION","pct":3},{"word":"EXPAND","pct":21},{"word":"NATION","pct":27},{"word":"PLANE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0362", letters: ["O","C","P","K","M","A","N","M","R","M","W","Y","V","N","U","T","I","E","I","C","A","T"], prevAnswers: [{"word":"COMMUNICATIVE","pct":3},{"word":"MANY","pct":21},{"word":"MOAN","pct":27},{"word":"MANY","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0138", letters: ["U","G","A","W","B","E","O","T","C","O","R","E","N","L","D","R","F","P","O","C","K","A"], prevAnswers: [{"word":"WATERCOLOR","pct":4},{"word":"WAGER","pct":21},{"word":"COLOR","pct":27},{"word":"GOAT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0062", letters: ["I","U","H","C","F","P","E","O","O","L","L","I","N","A","U","A","T","S","V","E","D","W"], prevAnswers: [{"word":"DEVALUATIONS","pct":4},{"word":"INSTALL","pct":21},{"word":"STALL","pct":27},{"word":"HELP","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0319", letters: ["F","R","A","P","T","T","H","E","R","R","B","","S","E","C","W","Y","E","A","K","H","K"], prevAnswers: [{"word":"HEARTBREAK","pct":4},{"word":"THESE","pct":21},{"word":"HEART","pct":27},{"word":"APEX","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0316", letters: ["Y","N","O","I","V","T","S","M","T","E","I","I","A","L","G","I","T","L","H","C","F","B"], prevAnswers: [{"word":"LEGITIMATIONS","pct":1},{"word":"SITE","pct":22},{"word":"MOST","pct":28},{"word":"SITE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0048", letters: ["H","U","F","V","A","R","B","S","N","O","C","D","W","R","T","S","R","P","Y","B","O","A"], prevAnswers: [{"word":"STORYBOARDS","pct":3},{"word":"STORY","pct":21},{"word":"WRAP","pct":27},{"word":"WRAP","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0068", letters: ["O","C","U","H","W","D","E","M","Y","V","N","T","I","C","T","S","N","L","A","T","I","O"], prevAnswers: [{"word":"DOCUMENTATIONS","pct":1},{"word":"STATION","pct":22},{"word":"INTENT","pct":28},{"word":"EMIT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0313", letters: ["D","U","O","U","W","","S","T","N","V","O","N","I","S","E","R","O","M","G","B","C","T"], prevAnswers: [{"word":"CONTINUOUS","pct":4},{"word":"GOVERN","pct":21},{"word":"STORES","pct":27},{"word":"COVER","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0118", letters: ["W","E","N","P","A","L","L","G","K","H","N","S","E","C","L","T","R","M","Y","V","A","H"], prevAnswers: [{"word":"CHALLENGERS","pct":4},{"word":"CHALLENGE","pct":21},{"word":"WELL","pct":27},{"word":"WELL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0320", letters: ["I","F","F","K","C","I","U","L","F","I","O","S","D","E","N","G","V","T","T","L","Y","S"], prevAnswers: [{"word":"SUFFICIENTLY","pct":2},{"word":"ONLY","pct":22},{"word":"SONG","pct":27},{"word":"ONLY","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0075", letters: ["G","M","B","E","N","E","E","S","U","O","R","N","T","L","","I","U","P","R","E","Q","K"], prevAnswers: [{"word":"REQUIREMENTS","pct":2},{"word":"REQUIRES","pct":22},{"word":"SERIES","pct":27},{"word":"SERVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0149", letters: ["O","R","I","T","E","","O","I","A","W","N","D","N","Y","C","O","R","V","A","O","N","C"], prevAnswers: [{"word":"COORDINATIONS","pct":2},{"word":"NATION","pct":22},{"word":"GROIN","pct":27},{"word":"ROBE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0359", letters: ["F","B","E","I","C","","H","W","D","N","P","K","O","G","I","T","C","U","O","N","E","M"], prevAnswers: [{"word":"DOCUMENTING","pct":3},{"word":"OPTION","pct":21},{"word":"SPINE","pct":27},{"word":"FANG","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0228", letters: ["F","B","E","T","N","C","A","N","O","H","L","C","E","R","E","P","E","M","W","Y","K","A"], prevAnswers: [{"word":"REPLACEMENT","pct":3},{"word":"TEACHER","pct":21},{"word":"BEACH","pct":27},{"word":"BEAN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0287", letters: ["C","S","L","W","N","O","N","","V","C","N","O","I","T","E","T","A","T","I","C","R","D"], prevAnswers: [{"word":"CONCENTRATIONS","pct":1},{"word":"CONNECT","pct":22},{"word":"SCONE","pct":28},{"word":"CONE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0310", letters: ["O","D","F","P","A","B","M","H","M","L","S","I","E","A","C","K","T","H","R","W","Y","T"], prevAnswers: [{"word":"BLACKSMITH","pct":4},{"word":"BLACK","pct":21},{"word":"HEMP","pct":27},{"word":"HEMP","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0333", letters: ["I","O","N","L","F","T","E","","K","A","R","C","A","D","E","M","O","N","N","M","C","H"], prevAnswers: [{"word":"RECOMMENDATIONS","pct":1},{"word":"COMMERCE","pct":22},{"word":"NOTED","pct":28},{"word":"LONER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0214", letters: ["A","D","P","N","U","F","B","E","S","S","P","C","D","O","C","E","I","E","I","A","L","Z"], prevAnswers: [{"word":"SPECIALIZED","pct":3},{"word":"SPECIAL","pct":21},{"word":"SCALE","pct":27},{"word":"PEAL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0089", letters: ["M","O","R","U","I","A","","B","E","N","I","E","M","T","E","H","C","L","N","A","N","F"], prevAnswers: [{"word":"MAINTENANCES","pct":3},{"word":"IMAGINE","pct":21},{"word":"MANOR","pct":27},{"word":"URBAN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0201", letters: ["H","L","M","G","B","","N","N","S","N","I","N","D","O","T","V","O","U","I","A","F","P"], prevAnswers: [{"word":"INNOVATIONAL","pct":2},{"word":"BLIND","pct":21},{"word":"HELM","pct":27},{"word":"HELM","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0093", letters: ["H","E","L","B","M","","K","A","D","O","L","T","R","S","U","G","F","O","V","A","A","F"], prevAnswers: [{"word":"AFFORDABLE","pct":4},{"word":"AFFORD","pct":21},{"word":"BAKER","pct":27},{"word":"MOTEL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0008", letters: ["G","O","V","T","N","T","N","L","I","C","S","F","B","P","E","R","E","O","A","L","M","R"], prevAnswers: [{"word":"PALMERSTON","pct":4},{"word":"REALM","pct":21},{"word":"BORE","pct":27},{"word":"FLIT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0328", letters: ["L","B","D","O","I","A","U","R","F","S","T","E","P","H","E","S","E","I","E","D","R","B"], prevAnswers: [{"word":"REESTABLISHED","pct":1},{"word":"ESTABLISHED","pct":22},{"word":"DETAIL","pct":28},{"word":"LIST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0345", letters: ["S","N","I","T","C","O","O","A","A","R","P","O","R","N","","H","U","F","B","T","I","R"], prevAnswers: [{"word":"CORPORATIONS","pct":2},{"word":"SNORE","pct":22},{"word":"SCORE","pct":27},{"word":"SORE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0150", letters: ["I","G","S","D","M","N","O","Y","K","O","A","I","T","O","B","L","","A","L","G","I","L"], prevAnswers: [{"word":"GLOBALISATION","pct":1},{"word":"GLOBALIZATION","pct":22},{"word":"ABILITY","pct":28},{"word":"ACTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0199", letters: ["L","E","D","W","I","","V","N","A","M","N","O","S","M","I","R","I","U","T","A","T","G"], prevAnswers: [{"word":"DELIMITATIONS","pct":1},{"word":"GUITAR","pct":21},{"word":"SMILE","pct":27},{"word":"ANVIL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0172", letters: ["S","T","I","C","R","S","A","C","M","H","I","T","G","P","O","E","V","T","I","S","D","D"], prevAnswers: [{"word":"SOPHISTICATED","pct":1},{"word":"STATE","pct":22},{"word":"HOIST","pct":28},{"word":"SHOE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0073", letters: ["M","Y","C","A","A","","K","U","B","U","G","K","I","N","O","R","L","F","D","V","N","C"], prevAnswers: [{"word":"BACKGROUND","pct":4},{"word":"GROUP","pct":21},{"word":"ROUGH","pct":27},{"word":"MANY","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0340", letters: ["P","D","K","A","R","E","M","H","W","O","M","Y","V","C","T","C","I","I","R","A","T","C"], prevAnswers: [{"word":"DEMOCRATIC","pct":4},{"word":"DEMOCRACY","pct":21},{"word":"ACTOR","pct":27},{"word":"DEMO","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0251", letters: ["F","B","T","I","U","","N","D","W","O","U","T","P","C","C","N","I","K","A","G","O","C"], prevAnswers: [{"word":"ACCOUNTING","pct":4},{"word":"ACCOUNT","pct":21},{"word":"BOUND","pct":27},{"word":"FEND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0298", letters: ["O","N","B","E","I","T","C","E","I","R","H","I","S","U","F","N","E","R","P","K","T","O"], prevAnswers: [{"word":"INTERSECTION","pct":2},{"word":"NOTCH","pct":22},{"word":"INTER","pct":27},{"word":"ONCE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0280", letters: ["A","N","A","R","T","A","N","D","D","S","D","L","I","M","N","O","Z","A","G","B","I","T"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"SNOB","pct":28},{"word":"SAND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0072", letters: ["R","E","X","E","I","L","P","E","W","E","N","C","D","Y","K","N","C","A","H","M","G","V"], prevAnswers: [{"word":"EXPERIENCED","pct":3},{"word":"RILE","pct":21},{"word":"WEED","pct":27},{"word":"RILE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0289", letters: ["M","U","C","D","S","","R","P","K","T","C","I","A","S","A","U","H","W","N","C","E","S"], prevAnswers: [{"word":"CIRCUMSTANCES","pct":1},{"word":"STRICT","pct":22},{"word":"CRUST","pct":28},{"word":"MUST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0222", letters: ["O","F","E","S","R","P","N","I","S","H","A","O","U","G","L","V","A","N","L","T","C","W"], prevAnswers: [{"word":"PROFESSIONAL","pct":2},{"word":"VAPOR","pct":22},{"word":"NOUN","pct":27},{"word":"PANE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0116", letters: ["L","I","G","R","W","C","N","I","E","B","R","N","E","N","F","O","F","A","D","M","P","K"], prevAnswers: [{"word":"REINFORCING","pct":3},{"word":"REIGN","pct":21},{"word":"GRIN","pct":27},{"word":"GRIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0120", letters: ["Y","E","A","K","A","S","T","B","H","B","H","L","R","M","E","S","I","G","D","V","T","S"], prevAnswers: [{"word":"ESTABLISHED","pct":3},{"word":"STEAK","pct":21},{"word":"SHED","pct":27},{"word":"STAB","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0159", letters: ["U","F","V","G","O","","O","I","N","S","P","N","D","C","E","R","R","T","L","W","C","O"], prevAnswers: [{"word":"CORRESPONDING","pct":1},{"word":"LESSON","pct":22},{"word":"GOING","pct":28},{"word":"UPON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0051", letters: ["W","S","N","G","P","I","I","O","N","K","L","R","I","R","","A","M","H","U","Y","V","O"], prevAnswers: [{"word":"NORMALISING","pct":3},{"word":"NORMAL","pct":21},{"word":"SILLY","pct":27},{"word":"WILD","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0307", letters: ["N","G","S","W","I","M","O","C","A","D","","L","W","V","O","S","E","M","T","R","F","B"], prevAnswers: [{"word":"WELCOMINGS","pct":4},{"word":"WELCOME","pct":21},{"word":"MIDDLE","pct":27},{"word":"SOLES","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0005", letters: ["L","N","G","B","E","U","I","E","T","O","M","C","A","C","","M","O","D","F","P","C","K"], prevAnswers: [{"word":"COMMUNICATE","pct":3},{"word":"COMMON","pct":21},{"word":"COMIC","pct":27},{"word":"LUNG","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0335", letters: ["C","Y","V","T","S","","S","O","D","E","S","F","E","N","L","U","A","T","W","B","G","R"], prevAnswers: [{"word":"GRATEFULNESS","pct":2},{"word":"CHESS","pct":22},{"word":"SUGAR","pct":27},{"word":"CASE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0225", letters: ["C","I","T","U","G","","A","E","O","D","N","R","C","L","F","P","E","O","K","A","D","M"], prevAnswers: [{"word":"DEMOCRATIC","pct":4},{"word":"GUITAR","pct":21},{"word":"IRATE","pct":27},{"word":"GLARE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0163", letters: ["G","B","E","N","D","","C","N","F","P","O","E","T","N","D","R","M","S","E","K","S","E"], prevAnswers: [{"word":"ENDORSEMENTS","pct":2},{"word":"ENDORSEMENT","pct":22},{"word":"HORSES","pct":27},{"word":"GOOD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0165", letters: ["B","T","T","I","L","","S","I","D","F","P","K","M","O","N","O","U","L","S","I","T","A"], prevAnswers: [{"word":"STIMULATIONS","pct":3},{"word":"ITSELF","pct":21},{"word":"SPOUT","pct":27},{"word":"BEST","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0162", letters: ["Y","G","N","I","V","T","R","D","N","D","E","S","N","U","N","D","T","A","O","C","F","B"], prevAnswers: [{"word":"UNDERSTANDING","pct":1},{"word":"TREND","pct":22},{"word":"TEST","pct":28},{"word":"TEST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0204", letters: ["H","G","O","R","H","U","U","C","F","O","S","B","E","H","E","U","A","L","D","W","P","K"], prevAnswers: [{"word":"ROUGHHOUSED","pct":3},{"word":"ROUGH","pct":21},{"word":"PAUSE","pct":27},{"word":"HOSE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0007", letters: ["A","N","O","R","L","O","","F","P","I","I","E","V","S","A","S","S","N","M","L","P","D"], prevAnswers: [{"word":"PROFESSIONALISM","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"PROMISE","pct":28},{"word":"ALOOF","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0291", letters: ["C","I","F","V","O","R","S","","G","A","U","I","N","E","L","U","P","D","W","B","P","O"], prevAnswers: [{"word":"POPULARISING","pct":2},{"word":"POPULAR","pct":22},{"word":"VISUAL","pct":27},{"word":"COAL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0344", letters: ["K","A","N","S","L","M","I","G","V","T","T","O","N","I","R","A","E","R","P","A","P","P"], prevAnswers: [{"word":"PREPARATION","pct":3},{"word":"APPEAR","pct":21},{"word":"RATIO","pct":27},{"word":"MAIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0013", letters: ["E","I","D","Y","H","","S","P","K","L","I","E","D","A","L","A","C","R","R","T","S","Y"], prevAnswers: [{"word":"CRYSTALLISED","pct":2},{"word":"CRYSTALISED","pct":22},{"word":"LILAC","pct":27},{"word":"EASE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0161", letters: ["Y","K","A","N","L","","E","T","A","H","M","N","C","S","I","L","P","C","U","G","M","O"], prevAnswers: [{"word":"ACCOMPLISHMENT","pct":1},{"word":"ACCOMPLISH","pct":22},{"word":"SKATE","pct":28},{"word":"KEEN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0123", letters: ["D","E","I","R","E","N","U","S","M","R","D","","I","S","F","N","M","P","T","A","K","A"], prevAnswers: [{"word":"MISUNDERSTANDS","pct":1},{"word":"UNDERSTANDS","pct":22},{"word":"ISSUE","pct":28},{"word":"RISE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0098", letters: ["A","H","I","T","R","N","O","S","A","M","O","N","I","P","K","O","S","M","L","W","Y","V"], prevAnswers: [{"word":"HARMONISATION","pct":1},{"word":"HOIST","pct":22},{"word":"HARM","pct":28},{"word":"HARM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0267", letters: ["H","L","F","P","K","","O","C","S","N","C","M","D","E","T","I","M","W","M","T","Y","V"], prevAnswers: [{"word":"COMMITMENT","pct":4},{"word":"FLANK","pct":21},{"word":"FLOWN","pct":27},{"word":"HINT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0069", letters: ["D","U","F","P","N","","R","A","N","O","O","I","H","I","A","N","E","C","T","T","W","Y"], prevAnswers: [{"word":"ORIENTATIONS","pct":3},{"word":"NATION","pct":21},{"word":"FRONT","pct":27},{"word":"DRAIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0033", letters: ["P","K","E","A","R","","M","A","D","W","E","U","S","Y","M","R","V","T","E","N","T","S"], prevAnswers: [{"word":"MEASUREMENTS","pct":2},{"word":"MEASUREMENT","pct":22},{"word":"PRIME","pct":27},{"word":"PRIM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0164", letters: ["Y","S","V","I","R","U","G","I","O","M","L","","N","F","M","R","I","G","B","A","A","S"], prevAnswers: [{"word":"SUMMARISING","pct":3},{"word":"SUMMARIZING","pct":21},{"word":"SUGAR","pct":27},{"word":"RULER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0122", letters: ["P","K","M","O","C","S","O","M","D","W","Y","C","I","V","T","N","T","M","A","T","N","E"], prevAnswers: [{"word":"COMMITMENT","pct":4},{"word":"MIME","pct":21},{"word":"COSY","pct":27},{"word":"MIME","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0276", letters: ["R","T","Y","E","R","A","E","R","B","B","U","Q","A","I","H","M","C","G","V","A","K","U"], prevAnswers: [{"word":"QUARTERBACK","pct":3},{"word":"ARTERY","pct":21},{"word":"YEAR","pct":27},{"word":"RATE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0356", letters: ["N","O","I","T","D","W","N","C","Y","V","O","S","U","O","S","C","T","R","U","H","M","G"], prevAnswers: [{"word":"CONSTRUCTION","pct":2},{"word":"INCUR","pct":22},{"word":"CURT","pct":27},{"word":"OWNS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0243", letters: ["I","N","F","E","D","A","R","O","U","T","M","","V","I","A","N","F","H","O","N","C","G"], prevAnswers: [{"word":"INFORMATION","pct":3},{"word":"FORMATION","pct":21},{"word":"NATION","pct":27},{"word":"NARK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0350", letters: ["M","N","A","E","H","U","W","M","B","A","F","G","T","C","N","N","I","U","T","U","R","G"], prevAnswers: [{"word":"MANUFACTURING","pct":1},{"word":"NAME","pct":22},{"word":"BEAN","pct":28},{"word":"NAME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0290", letters: ["I","S","E","N","W","S","E","L","P","K","H","E","U","S","L","C","R","F","F","O","M","Y"], prevAnswers: [{"word":"CHEERFULNESS","pct":2},{"word":"SHEEN","pct":22},{"word":"CRUEL","pct":27},{"word":"SEEN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0209", letters: ["P","E","N","D","F","E","I","E","N","B","D","N","C","E","","T","E","S","L","W","Y","K"], prevAnswers: [{"word":"INDEPENDENCES","pct":2},{"word":"NEEDLE","pct":22},{"word":"DEBATE","pct":27},{"word":"NEED","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0190", letters: ["E","N","M","A","D","U","T","Y","E","N","G","I","M","K","I","R","P","I","R","P","H","S"], prevAnswers: [{"word":"SPRINGTIME","pct":4},{"word":"GRIND","pct":21},{"word":"NUDE","pct":27},{"word":"NUDE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0196", letters: ["D","R","S","E","I","A","C","S","W","Z","D","T","Y","A","V","N","A","A","T","I","O","N"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"ACTS","pct":28},{"word":"RAID","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0339", letters: ["G","O","B","E","I","T","N","","D","U","S","E","F","P","K","E","N","O","R","H","I","S"], prevAnswers: [{"word":"RHINESTONES","pct":4},{"word":"OFFENSE","pct":21},{"word":"STONER","pct":27},{"word":"BONER","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0074", letters: ["W","P","E","O","U","I","R","M","G","K","Y","L","E","A","O","L","U","T","B","S","A","L"], prevAnswers: [{"word":"ABSOLUTELY","pct":4},{"word":"ABSOLUTE","pct":21},{"word":"TELL","pct":27},{"word":"WIRE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0303", letters: ["I","C","S","L","F","","N","I","E","O","R","O","T","R","P","E","A","U","P","D","C","W"], prevAnswers: [{"word":"PROCREATIONS","pct":2},{"word":"PROFIT","pct":21},{"word":"SCORN","pct":27},{"word":"SLING","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0305", letters: ["R","E","U","S","S","","D","N","H","T","S","M","G","A","N","D","B","E","N","D","I","C"], prevAnswers: [{"word":"UNDERSTANDS","pct":3},{"word":"STORED","pct":21},{"word":"UNDER","pct":27},{"word":"READ","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0147", letters: ["T","","M","N","I","M","N","O","H","P","E","T","I","L","E","M","A","T","C","F","B","E"], prevAnswers: [{"word":"IMPLEMENTATION","pct":1},{"word":"MENTION","pct":22},{"word":"AMPLE","pct":28},{"word":"TAME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0213", letters: ["E","H","M","I","E","C","M","","W","H","A","B","Y","O","C","H","E","R","K","O","C","T"], prevAnswers: [{"word":"ECHOCHAMBER","pct":3},{"word":"BUYER","pct":21},{"word":"SWIM","pct":27},{"word":"CAME","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0124", letters: ["E","O","S","S","H","L","A","O","N","C","T","T","I","W","E","P","X","Y","K","A","N","E"], prevAnswers: [{"word":"EXPECTATIONS","pct":2},{"word":"EXPECT","pct":22},{"word":"CLASS","pct":27},{"word":"SOLE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0021", letters: ["B","E","N","L","S","","R","F","U","K","A","Y","V","A","B","I","T","R","I","L","Y","O"], prevAnswers: [{"word":"VULNERABILITY","pct":1},{"word":"ABILITY","pct":22},{"word":"SCARY","pct":28},{"word":"SNARE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0355", letters: ["N","L","T","M","B","","O","O","H","Y","P","H","G","I","D","U","R","A","F","Y","H","P"], prevAnswers: [{"word":"PHOTOGRAPHY","pct":3},{"word":"MOTOR","pct":21},{"word":"BROOM","pct":27},{"word":"LOOP","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0229", letters: ["M","G","V","T","C","","R","E","U","F","E","B","C","C","C","P","A","N","A","E","T","N"], prevAnswers: [{"word":"ACCEPTANCE","pct":4},{"word":"DEBATE","pct":21},{"word":"VERSE","pct":27},{"word":"MARE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0294", letters: ["M","S","S","E","Y","K","C","N","I","C","E","T","E","E","F","F","I","V","A","R","U","G"], prevAnswers: [{"word":"EFFECTIVENESS","pct":1},{"word":"EFFECT","pct":22},{"word":"FRUIT","pct":28},{"word":"SENT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0137", letters: ["D","A","W","Y","K","T","N","","L","E","S","T","I","R","M","B","U","A","G","V","S","L"], prevAnswers: [{"word":"SUBSTANTIAL","pct":3},{"word":"WINTER","pct":21},{"word":"WATER","pct":27},{"word":"DAWN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0194", letters: ["N","C","T","I","O","D","U","N","O","R","C","A","L","T","F","P","K","I","N","I","D","E"], prevAnswers: [{"word":"INTRODUCTION","pct":2},{"word":"INTRO","pct":22},{"word":"DUAL","pct":27},{"word":"ORCA","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0364", letters: ["B","T","I","T","I","Z","A","O","I","D","R","S","N","R","A","T","H","U","D","N","A","F"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"TRAIT","pct":28},{"word":"ARTS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0227", letters: ["U","T","F","B","E","I","O","","N","A","T","G","E","G","I","O","R","C","W","N","P","K"], prevAnswers: [{"word":"NEGOTIATION","pct":3},{"word":"EMOTION","pct":21},{"word":"TOKEN","pct":27},{"word":"TOMB","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0189", letters: ["K","F","O","S","F","O","S","N","A","R","","U","R","Y","M","T","T","N","V","A","I","O"], prevAnswers: [{"word":"TRANSFORMATION","pct":1},{"word":"FORMATION","pct":22},{"word":"OPTION","pct":28},{"word":"MOTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0234", letters: ["V","R","O","C","A","D","D","K","E","I","H","C","R","M","G","B","A","T","R","K","R","T"], prevAnswers: [{"word":"TRACKRECORD","pct":3},{"word":"TRACK","pct":21},{"word":"CORD","pct":27},{"word":"ROCK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0220", letters: ["I","S","V","N","V","S","L","M","Y","E","E","K","G","I","G","R","G","A","O","D","U","F"], prevAnswers: [{"word":"AGGRESSIVE","pct":4},{"word":"AGREE","pct":21},{"word":"VEER","pct":27},{"word":"ISLE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0095", letters: ["F","P","K","A","S","","L","W","D","T","E","Y","E","V","A","R","M","O","T","T","S","N"], prevAnswers: [{"word":"DEMONSTRATED","pct":3},{"word":"HEARTS","pct":21},{"word":"STREET","pct":27},{"word":"POLKA","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0326", letters: ["I","C","H","N","L","W","P","T","O","I","K","C","I","T","S","F","A","O","A","S","S","E"], prevAnswers: [{"word":"SATISFACTION","pct":2},{"word":"ACTION","pct":22},{"word":"LIST","pct":27},{"word":"LIST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0284", letters: ["R","A","N","D","L","W","Y","E","O","V","J","S","R","M","T","N","S","E","H","U","E","M"], prevAnswers: [{"word":"ENDORSEMENT","pct":3},{"word":"ENDORSE","pct":21},{"word":"DENY","pct":27},{"word":"DENY","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0055", letters: ["F","I","H","V","T","B","E","X","H","T","I","","R","I","C","W","P","E","N","G","N","B"], prevAnswers: [{"word":"EXHIBITING","pct":4},{"word":"EXHIBIT","pct":21},{"word":"CITIES","pct":27},{"word":"HEIR","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0139", letters: ["D","E","P","P","W","L","","L","A","E","B","I","L","B","N","A","C","R","M","G","K","I"], prevAnswers: [{"word":"APPLICABLE","pct":4},{"word":"APPEAL","pct":21},{"word":"DEVIL","pct":27},{"word":"DELI","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0010", letters: ["V","O","Y","K","R","E","I","C","V","C","M","S","L","F","O","I","B","O","R","G","N","G"], prevAnswers: [{"word":"OVERCOMING","pct":4},{"word":"COMIC","pct":21},{"word":"GOING","pct":27},{"word":"OVER","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0077", letters: ["L","U","T","I","P","O","R","O","N","E","V","E","I","I","","A","Z","D","W","Y","E","K"], prevAnswers: [{"word":"REVOLUTIONIZER","pct":1},{"word":"PORTION","pct":22},{"word":"LOVER","pct":28},{"word":"TREAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0178", letters: ["P","O","S","I","O","T","L","P","M","R","E","H","G","V","T","R","E","H","A","D","U","F"], prevAnswers: [{"word":"TROPOSPHERE","pct":3},{"word":"SIMPLE","pct":21},{"word":"POLE","pct":27},{"word":"POLE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0191", letters: ["O","S","L","P","R","","I","I","S","E","T","O","H","W","L","A","N","S","Y","K","A","N"], prevAnswers: [{"word":"RELATIONSHIPS","pct":1},{"word":"RELATIONS","pct":22},{"word":"OBITER","pct":28},{"word":"SISTER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0277", letters: ["V","A","A","S","B","I","L","","C","T","F","P","T","N","N","A","S","U","U","T","S","B"], prevAnswers: [{"word":"SUBSTANTIVAL","pct":2},{"word":"FLASH","pct":21},{"word":"PLANT","pct":27},{"word":"VALE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0263", letters: ["C","R","O","F","I","G","F","","D","N","M","N","R","P","K","I","I","E","C","T","H","U"], prevAnswers: [{"word":"REINFORCING","pct":3},{"word":"CROWD","pct":21},{"word":"GROAN","pct":27},{"word":"CROP","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0049", letters: ["U","B","I","S","E","S","I","P","N","I","L","S","O","F","T","I","E","V","T","","R","L"], prevAnswers: [{"word":"RESPONSIBILITIES","pct":1},{"word":"FILTER","pct":22},{"word":"CITIES","pct":28},{"word":"SITE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0128", letters: ["H","M","T","D","F","B","H","A","S","C","C","S","I","E","C","O","P","L","R","A","M","W"], prevAnswers: [{"word":"ACCOMPLISH","pct":4},{"word":"CRAMP","pct":21},{"word":"DASH","pct":27},{"word":"TAIL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0272", letters: ["W","S","B","T","N","I","I","C","E","R","L","N","G","C","M","A","T","Y","A","P","I","K"], prevAnswers: [{"word":"CAPITALISING","pct":2},{"word":"SWIRL","pct":22},{"word":"PANIC","pct":27},{"word":"SING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0300", letters: ["K","A","N","S","D","M","A","N","O","G","L","N","I","V","T","P","A","T","I","P","X","E"], prevAnswers: [{"word":"EXPLANATIONS","pct":3},{"word":"NATIONAL","pct":21},{"word":"PAIN","pct":27},{"word":"PAIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0232", letters: ["N","S","V","A","O","I","N","C","H","T","A","C","U","F","R","O","B","T","O","P","R","I"], prevAnswers: [{"word":"CORPORATIONS","pct":2},{"word":"PORTION","pct":22},{"word":"TRAIN","pct":27},{"word":"INCH","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0017", letters: ["N","L","Z","I","T","","I","N","L","G","N","O","A","W","P","R","S","B","E","E","I","R"], prevAnswers: [{"word":"PERSONALIZING","pct":1},{"word":"PRISON","pct":22},{"word":"LINEN","pct":28},{"word":"LENT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0308", letters: ["G","S","C","F","E","N","B","T","E","T","M","E","N","N","H","G","M","E","O","I","L","N"], prevAnswers: [{"word":"ENLIGHTENMENT","pct":1},{"word":"LIGHT","pct":22},{"word":"LION","pct":28},{"word":"LION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0286", letters: ["G","B","H","M","E","R","P","E","O","T","O","F","N","T","A","B","L","U","G","L","E","S"], prevAnswers: [{"word":"UNFORGETTABLE","pct":1},{"word":"PROBE","pct":22},{"word":"FORGE","pct":28},{"word":"MENU","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0012", letters: ["F","F","V","O","L","O","I","C","I","F","N","U","A","T","R","W","L","L","B","A","Y","N"], prevAnswers: [{"word":"UNOFFICIALLY","pct":2},{"word":"VOCAL","pct":22},{"word":"BRAWN","pct":27},{"word":"LOFT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0107", letters: ["R","U","C","O","H","","Y","N","S","V","D","T","T","S","T","E","R","C","I","C","U","M"], prevAnswers: [{"word":"CONSTRUCTED","pct":3},{"word":"RIDER","pct":21},{"word":"STRUM","pct":27},{"word":"RUSH","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0282", letters: ["N","L","H","W","Y","V","T","N","I","D","A","S","O","C","L","R","T","I","E","D","A","M"], prevAnswers: [{"word":"DECLARATIONS","pct":3},{"word":"STALE","pct":21},{"word":"CEDAR","pct":27},{"word":"VALE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0180", letters: ["S","U","Y","F","K","O","E","H","P","O","R","O","A","C","H","C","G","R","P","N","L","W"], prevAnswers: [{"word":"CHOREOGRAPHY","pct":2},{"word":"SORE","pct":22},{"word":"ROOK","pct":27},{"word":"SORE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0030", letters: ["F","P","D","K","O","S","E","E","N","A","U","S","O","U","N","Q","T","I","L","W","Y","V"], prevAnswers: [{"word":"UNQUESTIONED","pct":2},{"word":"KEEPS","pct":22},{"word":"STONE","pct":27},{"word":"PEST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0071", letters: ["R","W","P","K","A","","O","H","U","L","Y","I","D","E","T","A","M","E","G","V","I","M"], prevAnswers: [{"word":"IMMEDIATELY","pct":3},{"word":"RALLY","pct":21},{"word":"POLAR","pct":27},{"word":"RAIL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0011", letters: ["R","A","L","B","E","E","G","I","Z","","N","E","A","R","N","O","T","S","C","W","I","P"], prevAnswers: [{"word":"GENERALIZATIONS","pct":1},{"word":"REALIZATION","pct":22},{"word":"REVEAL","pct":28},{"word":"STONER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0258", letters: ["Y","T","I","L","S","U","E","I","B","S","C","P","B","N","U","S","T","I","D","F","K","I"], prevAnswers: [{"word":"SUSCEPTIBILITY","pct":1},{"word":"DUST","pct":22},{"word":"FUND","pct":28},{"word":"DUST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0080", letters: ["E","I","C","A","D","M","N","G","V","O","I","T","H","K","P","O","E","H","R","K","C","C"], prevAnswers: [{"word":"CHECKPOINT","pct":4},{"word":"POINT","pct":21},{"word":"DEMO","pct":27},{"word":"EMIT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0215", letters: ["O","D","I","C","F","","K","D","A","E","H","R","E","L","W","E","R","T","O","H","A","W"], prevAnswers: [{"word":"WHOLEHEARTED","pct":2},{"word":"HEARTED","pct":22},{"word":"OTHER","pct":27},{"word":"DOME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0171", letters: ["I","R","H","C","N","O","I","","Y","E","B","T","A","O","O","S","R","V","S","V","E","L"], prevAnswers: [{"word":"OBSERVATION","pct":3},{"word":"STATION","pct":21},{"word":"NATION","pct":27},{"word":"THROBS","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0246", letters: ["S","Y","H","C","T","O","W","P","V","O","G","R","A","A","H","P","R","P","N","L","M","B"], prevAnswers: [{"word":"PHOTOGRAPHY","pct":3},{"word":"SOOT","pct":21},{"word":"WRAP","pct":27},{"word":"SOOT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0230", letters: ["R","P","T","I","E","A","R","A","O","P","G","V","N","T","I","P","D","U","F","B","E","O"], prevAnswers: [{"word":"PREPARATION","pct":3},{"word":"RATIO","pct":21},{"word":"GRAND","pct":27},{"word":"REAR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0182", letters: ["I","T","M","C","O","U","G","N","O","N","B","T","V","S","O","I","R","S","U","A","L","F"], prevAnswers: [{"word":"CONTRIBUTIONS","pct":1},{"word":"TRIO","pct":22},{"word":"SNOB","pct":28},{"word":"TRIO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0255", letters: ["B","T","I","U","H","","T","O","N","F","A","I","T","P","K","Z","U","I","O","L","I","L"], prevAnswers: [{"word":"UTILIZATION","pct":3},{"word":"NATION","pct":21},{"word":"TRAIT","pct":27},{"word":"BEAT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0297", letters: ["B","T","T","I","L","","S","I","D","F","P","K","M","N","O","T","S","U","O","I","A","L"], prevAnswers: [{"word":"STIMULATION","pct":3},{"word":"ITSELF","pct":21},{"word":"SPOON","pct":27},{"word":"BEST","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0329", letters: ["S","M","H","C","F","N","","B","T","O","A","R","T","R","M","A","I","N","R","T","I","O"], prevAnswers: [{"word":"TRANSFORMATION","pct":1},{"word":"INFORMATION","pct":22},{"word":"FORMAL","pct":28},{"word":"INFORM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0052", letters: ["O","T","A","T","N","I","F","N","B","R","E","S","E","P","E","O","S","H","C","W","Y","K"], prevAnswers: [{"word":"PRESENTATION","pct":2},{"word":"NATION","pct":22},{"word":"TIRE","pct":27},{"word":"TIRE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0325", letters: ["S","D","T","E","N","","G","S","D","Y","U","H","U","V","R","O","H","O","O","R","G","I"], prevAnswers: [{"word":"ROUGHHOUSED","pct":3},{"word":"SHOUT","pct":21},{"word":"ROUND","pct":27},{"word":"SIGH","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0314", letters: ["A","R","U","C","R","O","G","N","O","Y","P","T","K","A","R","M","E","Y","S","L","F","V"], prevAnswers: [{"word":"CONTEMPORARY","pct":2},{"word":"TEMPORARY","pct":22},{"word":"PRAY","pct":27},{"word":"ROAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0031", letters: ["B","E","O","S","U","","W","N","P","K","U","O","S","E","G","L","I","A","R","N","A","T"], prevAnswers: [{"word":"REGULATIONS","pct":3},{"word":"NATION","pct":21},{"word":"LOWER","pct":27},{"word":"BUNK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0047", letters: ["I","L","F","P","R","C","O","","R","E","U","V","E","U","D","N","A","R","H","W","Y","K"], prevAnswers: [{"word":"UNDERCOVER","pct":4},{"word":"RECOVER","pct":21},{"word":"POLICE","pct":27},{"word":"LOVER","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0175", letters: ["F","F","O","H","U","E","M","R","Y","S","S","S","P","I","","I","L","O","O","N","A","S"], prevAnswers: [{"word":"PROFESSIONALISMS","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"ISLAND","pct":28},{"word":"SLINK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0088", letters: ["U","S","C","F","P","T","U","D","K","R","A","S","N","I","L","H","E","I","A","L","I","S"], prevAnswers: [{"word":"INDUSTRIALISES","pct":1},{"word":"STALL","pct":22},{"word":"SHARP","pct":28},{"word":"STUD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0090", letters: ["O","C","E","S","R","P","G","I","S","A","L","N","W","B","E","N","C","T","D","M","Y","K"], prevAnswers: [{"word":"PROCESSING","pct":4},{"word":"PROCESS","pct":21},{"word":"ORAL","pct":27},{"word":"ORAL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0269", letters: ["L","T","F","P","K","S","M","T","A","D","U","E","N","O","","J","D","W","Y","V","A","T"], prevAnswers: [{"word":"ADJUSTMENT","pct":4},{"word":"MUDDY","pct":21},{"word":"PANE","pct":27},{"word":"PANE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0309", letters: ["E","X","O","D","W","P","","K","A","R","E","L","R","I","P","A","T","H","M","E","N","U"], prevAnswers: [{"word":"EXPERIMENTAL","pct":2},{"word":"REPEAT","pct":22},{"word":"POLKA","pct":27},{"word":"OVER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0038", letters: ["E","L","B","N","R","U","G","I","Y","F","E","L","T","K","L","X","I","I","Y","O","I","B"], prevAnswers: [{"word":"FLEXIBILITY","pct":3},{"word":"LURE","pct":21},{"word":"BLUE","pct":27},{"word":"LURE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0079", letters: ["E","I","L","P","S","","C","Y","K","H","I","A","L","P","A","R","G","E","O","R","G","O"], prevAnswers: [{"word":"GEOGRAPHICAL","pct":2},{"word":"GEOGRAPHY","pct":22},{"word":"CHARGE","pct":27},{"word":"RAISES","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0094", letters: ["M","G","B","A","T","I","N","U","R","I","O","S","T","T","A","Z","I","H","C","F","R","O"], prevAnswers: [{"word":"AUTHORIZATIONS","pct":1},{"word":"ACTIONS","pct":22},{"word":"MINUS","pct":28},{"word":"ARTS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0127", letters: ["E","N","T","A","H","","E","N","E","W","D","P","D","Y","I","N","E","N","K","I","P","S"], prevAnswers: [{"word":"INDEPENDENT","pct":3},{"word":"DEPEND","pct":21},{"word":"ENTER","pct":27},{"word":"EVEN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0027", letters: ["U","F","P","K","I","","R","T","L","D","E","E","D","W","I","S","N","Y","V","O","C","O"], prevAnswers: [{"word":"CONSIDERED","pct":4},{"word":"CONSIDER","pct":21},{"word":"SERVED","pct":27},{"word":"PRIDE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0140", letters: ["G","A","B","T","I","C","T","C","E","D","I","I","O","J","W","F","I","N","U","S","T","P"], prevAnswers: [{"word":"JUSTIFICATION","pct":1},{"word":"FICTION","pct":22},{"word":"SWIFT","pct":28},{"word":"ACID","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0066", letters: ["W","L","O","K","O","A","O","D","F","R","P","H","O","K","R","W","C","S","T","N","M","Y"], prevAnswers: [{"word":"SCHOOLWORK","pct":4},{"word":"SCHOOL","pct":21},{"word":"WORK","pct":27},{"word":"WORK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0160", letters: ["C","P","W","T","Y","A","S","R","K","R","E","N","A","A","N","T","R","I","L","M","G","V"], prevAnswers: [{"word":"TRANSPARENT","pct":3},{"word":"PARENT","pct":21},{"word":"SPARE","pct":27},{"word":"CASE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0032", letters: ["G","C","B","E","I","O","C","R","U","N","F","P","K","S","O","T","N","S","I","S","T","E"], prevAnswers: [{"word":"CONSISTENT","pct":4},{"word":"INSIST","pct":21},{"word":"SOFT","pct":27},{"word":"COIN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0219", letters: ["M","S","L","W","Y","M","N","T","K","N","E","N","E","O","O","V","","A","D","R","I","U"], prevAnswers: [{"word":"ENVIRONMENT","pct":3},{"word":"DRIVEN","pct":21},{"word":"EVENT","pct":27},{"word":"MEND","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0261", letters: ["S","A","W","D","S","L","","O","I","U","C","R","G","B","A","D","L","R","C","T","H","F"], prevAnswers: [{"word":"WORLDCLASS","pct":4},{"word":"AVOID","pct":21},{"word":"CLASS","pct":27},{"word":"SALE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0186", letters: ["E","R","P","E","E","I","R","H","B","S","C","S","E","T","B","L","I","D","A","W","Y","K"], prevAnswers: [{"word":"REESTABLISHED","pct":1},{"word":"ESTABLISHED","pct":22},{"word":"RISE","pct":28},{"word":"RISE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0153", letters: ["U","O","C","F","P","","H","N","D","T","S","E","V","L","W","I","D","A","Y","U","Q","N"], prevAnswers: [{"word":"VANQUISHED","pct":4},{"word":"OUTSIDE","pct":21},{"word":"COUNT","pct":27},{"word":"CHASE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0179", letters: ["H","U","P","K","O","M","I","S","I","C","W","N","G","L","L","E","","A","D","Y","V","O"], prevAnswers: [{"word":"WELCOMINGS","pct":4},{"word":"SINGLE","pct":21},{"word":"SPINE","pct":27},{"word":"PINE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0023", letters: ["P","E","S","U","A","R","I","","V","C","T","C","A","L","P","L","A","N","Y","L","D","W"], prevAnswers: [{"word":"PRACTICALLY","pct":3},{"word":"PRACTICE","pct":21},{"word":"ASSERT","pct":27},{"word":"SHIRT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0207", letters: ["F","U","P","T","H","O","N","","A","L","B","D","W","Y","K","H","T","N","N","O","R","D"], prevAnswers: [{"word":"NORTHBOUND","pct":4},{"word":"FOUND","pct":21},{"word":"HOUND","pct":27},{"word":"FUND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0188", letters: ["E","T","N","K","M","O","O","A","R","P","R","C","Y","S","A","L","F","V","Y","R","T","N"], prevAnswers: [{"word":"CONTEMPORARY","pct":2},{"word":"TEMPORARY","pct":22},{"word":"MORAL","pct":27},{"word":"NOTE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0154", letters: ["D","A","D","L","M","G","R","N","A","A","D","B","T","T","Z","I","T","S","I","O","N","I"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"LAND","pct":28},{"word":"DRAG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0046", letters: ["S","L","Y","V","T","E","N","U","I","N","D","T","N","O","C","A","M","E","U","R","G","E"], prevAnswers: [{"word":"ENCOURAGEMENT","pct":1},{"word":"COURAGE","pct":22},{"word":"SEND","pct":28},{"word":"SEND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0299", letters: ["E","I","T","O","N","O","","A","B","C","I","I","T","W","B","L","R","Y","K","A","H","E"], prevAnswers: [{"word":"REHABILITATION","pct":1},{"word":"ABILITY","pct":22},{"word":"OBTAIN","pct":28},{"word":"ACTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0003", letters: ["N","H","W","Y","I","O","R","","O","T","P","O","R","A","M","L","C","S","M","A","U","G"], prevAnswers: [{"word":"PROCLAMATION","pct":2},{"word":"OPTION","pct":22},{"word":"GROIN","pct":27},{"word":"NORM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0059", letters: ["K","I","N","A","E","A","M","I","T","X","","O","N","H","L","N","W","Y","V","T","I","S"], prevAnswers: [{"word":"EXAMINATIONAL","pct":1},{"word":"NATIONAL","pct":21},{"word":"NATION","pct":27},{"word":"AMONG","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0174", letters: ["L","V","A","R","U","O","N","I","G","L","B","T","N","V","V","H","T","C","E","M","E","N"], prevAnswers: [{"word":"INVOLVEMENT","pct":3},{"word":"GIANT","pct":21},{"word":"GRAIN","pct":27},{"word":"RAIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0247", letters: ["O","I","L","F","N","T","","K","I","C","R","E","D","U","R","T","S","N","W","Y","C","O"], prevAnswers: [{"word":"CONSTRUCTION","pct":2},{"word":"STRUCTURE","pct":22},{"word":"STROKED","pct":27},{"word":"NOTICE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0152", letters: ["R","H","R","E","C","W","Y","P","S","E","O","S","E","N","O","I","R","V","V","L","T","A"], prevAnswers: [{"word":"PRESERVATION","pct":2},{"word":"NOISY","pct":22},{"word":"ARISE","pct":27},{"word":"WOOL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0239", letters: ["I","G","I","N","D","","F","T","E","B","N","E","G","O","I","O","R","R","H","T","A","C"], prevAnswers: [{"word":"INTEGRATIONS","pct":3},{"word":"INTEND","pct":21},{"word":"TARGET","pct":27},{"word":"INNER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0086", letters: ["R","A","E","O","D","S","W","M","Y","R","U","V","T","E","S","M","T","H","M","E","N","C"], prevAnswers: [{"word":"MEASUREMENT","pct":3},{"word":"SWEAR","pct":21},{"word":"DRUM","pct":27},{"word":"DRAW","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0029", letters: ["F","P","E","O","S","","N","L","C","I","O","W","O","T","A","S","N","V","Y","K","R","E"], prevAnswers: [{"word":"CONVERSATIONS","pct":2},{"word":"FLOWN","pct":22},{"word":"PRONE","pct":27},{"word":"SCONE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0336", letters: ["L","I","A","F","I","D","M","W","B","A","Z","I","A","R","R","I","N","F","T","H","U","G"], prevAnswers: [{"word":"FAMILIARIZING","pct":1},{"word":"FAMILIAR","pct":22},{"word":"TRAIL","pct":28},{"word":"FAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0156", letters: ["P","U","T","C","O","P","L","F","V","S","A","O","S","I","I","R","U","E","N","G","D","W"], prevAnswers: [{"word":"POPULARISING","pct":2},{"word":"POPULAR","pct":22},{"word":"ALOFT","pct":27},{"word":"PULP","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0260", letters: ["H","G","A","C","D","O","O","W","P","E","I","H","R","N","E","G","B","O","D","N","H","T"], prevAnswers: [{"word":"NEIGHBORHOOD","pct":2},{"word":"WOODEN","pct":22},{"word":"GOOD","pct":27},{"word":"GOOD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0020", letters: ["C","T","E","C","U","F","V","R","O","A","N","L","G","E","L","B","A","N","B","D","S","I"], prevAnswers: [{"word":"RECOGNISABLE","pct":2},{"word":"AFTER","pct":22},{"word":"CORE","pct":27},{"word":"ERGO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0248", letters: ["W","T","D","C","Y","A","E","M","O","K","C","P","A","D","M","I","L","S","U","G","V","T"], prevAnswers: [{"word":"COMPLICATED","pct":3},{"word":"DECAY","pct":21},{"word":"SLICE","pct":27},{"word":"TACK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0265", letters: ["E","O","C","W","S","","K","E","A","T","A","H","D","H","B","I","S","B","R","L","M","G"], prevAnswers: [{"word":"ESTABLISHED","pct":3},{"word":"STROKED","pct":21},{"word":"SHOCK","pct":27},{"word":"SMOKE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0217", letters: ["A","N","P","O","L","O","","R","F","I","I","P","E","S","D","S","S","W","M","B","E","I"], prevAnswers: [{"word":"PROFESSIONALISM","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"PRAISE","pct":28},{"word":"RAISES","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0173", letters: ["A","C","P","R","U","I","E","R","P","T","O","N","D","W","","K","A","N","U","H","M","G"], prevAnswers: [{"word":"PRECAUTION","pct":4},{"word":"NOTICE","pct":21},{"word":"TONER","pct":27},{"word":"REND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0337", letters: ["C","E","G","G","W","V","R","","A","I","E","E","S","V","S","S","N","L","M","Y","K","I"], prevAnswers: [{"word":"AGGRESSIVE","pct":4},{"word":"ENSURE","pct":21},{"word":"INSURE","pct":27},{"word":"GREED","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0125", letters: ["E","N","U","I","A","","F","P","K","D","T","A","D","J","S","M","T","O","U","R","E","N"], prevAnswers: [{"word":"READJUSTMENT","pct":4},{"word":"ESTATE","pct":21},{"word":"UNFIT","pct":27},{"word":"EARN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0279", letters: ["K","I","P","O","A","P","","U","F","P","V","A","C","I","L","B","T","S","C","A","L","E"], prevAnswers: [{"word":"APPLICABLE","pct":4},{"word":"UPDATE","pct":21},{"word":"IRATE","pct":27},{"word":"PIPE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0025", letters: ["L","U","C","H","A","","L","G","B","T","C","A","T","I","O","I","C","S","N","D","F","P"], prevAnswers: [{"word":"CALCULATION","pct":3},{"word":"FICTION","pct":21},{"word":"NATION","pct":27},{"word":"LATCH","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0245", letters: ["H","L","A","I","M","C","O","D","E","Y","E","P","A","G","C","N","","O","D","Y","S","U"], prevAnswers: [{"word":"ENCYCLOPAEDIA","pct":1},{"word":"CENSUS","pct":22},{"word":"IDEAL","pct":28},{"word":"LAID","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0092", letters: ["S","U","F","E","P","E","E","D","D","R","V","R","A","V","N","O","L","O","C","W","Y","K"], prevAnswers: [{"word":"OVERLOADED","pct":4},{"word":"SEVERAL","pct":21},{"word":"SERVED","pct":27},{"word":"SEED","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0323", letters: ["B","V","A","T","I","N","O","O","I","N","","N","N","S","D","U","F","P","T","I","E","R"], prevAnswers: [{"word":"INNOVATIONS","pct":4},{"word":"VOGUE","pct":21},{"word":"ATONE","pct":27},{"word":"BIND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0004", letters: ["D","N","O","I","U","F","B","Z","T","T","I","I","A","G","H","O","N","C","W","R","G","A"], prevAnswers: [{"word":"ORGANIZATION","pct":2},{"word":"NATION","pct":22},{"word":"BOND","pct":27},{"word":"BOND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0312", letters: ["C","R","F","P","K","E","M","A","N","T","M","I","N","N","E","D","A","L","O","I","T","W"], prevAnswers: [{"word":"DETERMINATION","pct":1},{"word":"TERMINAL","pct":22},{"word":"NATION","pct":28},{"word":"FAME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0262", letters: ["L","I","A","T","E","L","Z","V","I","D","A","I","O","W","Y","U","S","N","K","O","S","V"], prevAnswers: [{"word":"VISUALIZATION","pct":1},{"word":"VISUAL","pct":22},{"word":"TAIL","pct":28},{"word":"TAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0242", letters: ["P","D","U","G","V","T","R","S","M","H","E","E","N","P","S","O","C","A","F","B","M","T"], prevAnswers: [{"word":"ATMOSPHERES","pct":4},{"word":"ENSURE","pct":21},{"word":"SNEER","pct":27},{"word":"TREE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0192", letters: ["O","S","P","D","W","Y","K","O","A","C","E","I","N","O","P","N","T","N","M","M","S","A"], prevAnswers: [{"word":"COMPENSATION","pct":2},{"word":"SPOKEN","pct":22},{"word":"SPOKE","pct":27},{"word":"POKE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0343", letters: ["A","N","L","M","P","","N","I","S","I","O","A","L","S","S","E","P","R","W","B","F","O"], prevAnswers: [{"word":"PROFESSIONALISM","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"NATION","pct":28},{"word":"PRISON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0363", letters: ["C","E","P","B","T","","S","S","C","A","U","O","H","W","C","L","Y","K","A","R","A","L"], prevAnswers: [{"word":"SPECTACULAR","pct":3},{"word":"CLAUSE","pct":21},{"word":"CLOSED","pct":27},{"word":"CHESS","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0040", letters: ["A","M","E","O","U","N","T","N","S","R","L","F","P","U","O","K","A","R","I","T","D","W"], prevAnswers: [{"word":"TOURNAMENT","pct":4},{"word":"NAME","pct":21},{"word":"TOUR","pct":27},{"word":"NAME","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0250", letters: ["G","V","E","T","T","N","L","U","A","N","Y","T","N","U","F","O","R","U","I","D","W","B"], prevAnswers: [{"word":"UNFORTUNATELY","pct":1},{"word":"FUNNY","pct":22},{"word":"TAUT","pct":28},{"word":"TAUT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0236", letters: ["T","F","E","C","V","F","T","C","N","E","I","R","M","P","V","E","L","Y","E","L","Y","O"], prevAnswers: [{"word":"EFFECTIVELY","pct":3},{"word":"EFFECT","pct":21},{"word":"LEVEL","pct":27},{"word":"FIRM","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0067", letters: ["R","O","H","U","E","I","","V","T","L","A","R","B","S","I","B","C","W","L","I","T","Y"], prevAnswers: [{"word":"RELIABILITY","pct":3},{"word":"ABILITY","pct":21},{"word":"RELAX","pct":27},{"word":"MILER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0361", letters: ["W","P","K","O","R","N","O","","L","M","A","I","T","R","G","N","Z","A","O","Y","I","V"], prevAnswers: [{"word":"ORGANIZATION","pct":2},{"word":"ORGANIC","pct":22},{"word":"LOSING","pct":27},{"word":"POET","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0060", letters: ["S","I","I","H","O","P","T","P","D","H","L","A","M","Y","I","K","G","O","","I","N","S"], prevAnswers: [{"word":"HOSPITALISING","pct":1},{"word":"HOSPITALIZING","pct":22},{"word":"SPIT","pct":28},{"word":"SPIT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0064", letters: ["I","L","L","O","S","A","U","C","F","E","T","R","B","D","E","S","Y","I","D","Y","H","W"], prevAnswers: [{"word":"CRYSTALISED","pct":3},{"word":"DETAIL","pct":21},{"word":"BRUTE","pct":27},{"word":"LATE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0274", letters: ["A","M","B","T","U","N","N","G","U","F","G","N","S","A","C","L","I","P","T","U","R","K"], prevAnswers: [{"word":"MANUFACTURINGS","pct":1},{"word":"RULING","pct":22},{"word":"FACT","pct":28},{"word":"FACT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0106", letters: ["O","L","S","D","W","Y","A","V","A","I","Z","T","N","L","I","O","I","E","T","U","N","R"], prevAnswers: [{"word":"UTILIZATION","pct":3},{"word":"LAVA","pct":21},{"word":"SLOW","pct":27},{"word":"LAVA","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0257", letters: ["T","N","I","S","W","","H","N","S","O","R","T","E","D","U","G","B","E","I","H","A","C"], prevAnswers: [{"word":"WORTHINESS","pct":4},{"word":"THROUGH","pct":21},{"word":"GROWTH","pct":27},{"word":"NORTH","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0057", letters: ["P","R","K","I","W","O","","S","K","K","C","I","R","A","D","M","B","Y","O","R","B","T"], prevAnswers: [{"word":"BRICKWORKS","pct":4},{"word":"BISHOP","pct":21},{"word":"SHOCK","pct":27},{"word":"PROD","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0271", letters: ["W","H","C","C","Y","S","","O","A","I","I","M","L","P","N","L","P","U","G","V","O","H"], prevAnswers: [{"word":"ACCOMPLISH","pct":4},{"word":"MISSING","pct":21},{"word":"FINISH","pct":27},{"word":"CHAIN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0043", letters: ["U","H","C","G","B","","N","I","D","I","O","S","F","T","A","D","E","O","L","W","N","U"], prevAnswers: [{"word":"FOUNDATIONS","pct":3},{"word":"SOCIAL","pct":21},{"word":"BUNCH","pct":27},{"word":"UPON","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0322", letters: ["N","O","T","K","A","R","I","A","O","D","D","I","Z","S","N","A","T","E","C","W","Y","S"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARDIZE","pct":22},{"word":"TORN","pct":28},{"word":"TORN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0158", letters: ["C","F","P","N","E","O","R","U","D","R","A","T","O","B","L","E","H","B","W","Y","K","A"], prevAnswers: [{"word":"EARTHBOUND","pct":4},{"word":"FORTH","pct":21},{"word":"EARTH","pct":27},{"word":"CORE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0111", letters: ["V","O","L","T","S","B","E","L","D","A","Y","","G","L","E","L","V","N","L","R","U","F"], prevAnswers: [{"word":"VOLLEYBALLER","pct":4},{"word":"VALLEY","pct":21},{"word":"YIELD","pct":27},{"word":"VOLT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0050", letters: ["M","R","U","B","I","O","Y","A","R","N","T","I","K","G","O","S","N","S","G","H","C","F"], prevAnswers: [{"word":"BRAINSTORMING","pct":1},{"word":"MINOR","pct":22},{"word":"STORM","pct":28},{"word":"MINT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0184", letters: ["U","E","N","E","Q","I","C","S","S","N","F","P","K","U","N","T","H","L","W","Y","V","I"], prevAnswers: [{"word":"UNIQUENESS","pct":4},{"word":"UNIQUE","pct":21},{"word":"NIFTY","pct":27},{"word":"FIND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0039", letters: ["V","N","E","C","T","","R","M","N","G","X","B","E","E","E","C","L","L","C","O","E","H"], prevAnswers: [{"word":"EXCELLENCE","pct":4},{"word":"EXTREME","pct":21},{"word":"TONER","pct":27},{"word":"VANE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0097", letters: ["Y","V","A","H","F","S","S","","C","G","N","E","N","H","A","K","U","L","T","B","F","T"], prevAnswers: [{"word":"THANKFULNESS","pct":2},{"word":"UNLESS","pct":22},{"word":"HAVEN","pct":27},{"word":"BENCH","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0203", letters: ["U","G","C","I","V","","A","T","F","I","C","I","I","H","L","O","E","C","W","N","S","P"], prevAnswers: [{"word":"SPECIFICATION","pct":1},{"word":"SPECIFIC","pct":22},{"word":"FICTION","pct":28},{"word":"NATION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0218", letters: ["U","A","R","O","D","T","W","G","B","F","E","E","N","L","U","S","S","G","L","N","E","H"], prevAnswers: [{"word":"GRATEFULNESS","pct":2},{"word":"SENSE","pct":22},{"word":"FULL","pct":27},{"word":"RATE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0285", letters: ["O","D","M","T","R","A","","M","U","G","S","B","A","V","O","S","A","D","E","N","C","F"], prevAnswers: [{"word":"AMBASSADOR","pct":4},{"word":"ARDOR","pct":21},{"word":"GRAND","pct":27},{"word":"ORAL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0135", letters: ["H","U","F","B","N","O","E","","I","I","R","C","C","T","S","G","O","L","I","N","W","P"], prevAnswers: [{"word":"RECOGNITION","pct":3},{"word":"HOIST","pct":21},{"word":"INFER","pct":27},{"word":"FUEL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0134", letters: ["E","G","R","U","Y","L","I","V","T","A","I","T","I","T","M","N","S","L","I","O","H","C"], prevAnswers: [{"word":"LEGITIMATIONS","pct":1},{"word":"GLINT","pct":22},{"word":"RILE","pct":28},{"word":"GRIT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0208", letters: ["G","U","K","I","R","N","E","V","H","E","R","V","C","S","F","I","S","B","P","O","N","O"], prevAnswers: [{"word":"UNRESPONSIVE","pct":2},{"word":"POISON","pct":22},{"word":"KERN","pct":27},{"word":"KERN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0296", letters: ["Y","S","V","I","R","U","G","O","L","M","F","B","A","M","G","N","I","S","A","R","I",""], prevAnswers: [{"word":"SUMMARISING","pct":3},{"word":"SUMMARIZING","pct":21},{"word":"BASIS","pct":27},{"word":"GOAL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0338", letters: ["G","V","A","N","L","L","T","C","W","A","N","O","I","P","F","E","S","S","R","O","B","E"], prevAnswers: [{"word":"PROFESSIONAL","pct":2},{"word":"ATONE","pct":22},{"word":"PROBE","pct":27},{"word":"LANE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0177", letters: ["U","N","O","L","W","D","","V","T","R","E","S","U","S","H","S","D","M","T","A","N","G"], prevAnswers: [{"word":"UNDERSTANDS","pct":3},{"word":"UNLESS","pct":21},{"word":"SECOND","pct":27},{"word":"NUDGE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0091", letters: ["D","M","R","G","B","","A","A","I","C","C","H","C","S","I","T","T","E","R","S","I","R"], prevAnswers: [{"word":"CHARACTERISTICS","pct":1},{"word":"CHARACTER","pct":22},{"word":"MATCH","pct":28},{"word":"DEAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0347", letters: ["A","A","I","N","N","L","I","","G","O","","E","R","I","N","U","F","B","T","A","T","I"], prevAnswers: [{"word":"NATIONALISING","pct":1},{"word":"NATIONALIZING","pct":22},{"word":"EQUATION","pct":28},{"word":"OPENING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0141", letters: ["G","D","I","B","E","R","E","Z","I","D","A","","H","N","A","U","F","P","S","T","K","A"], prevAnswers: [{"word":"STANDARDIZED","pct":3},{"word":"STANDARD","pct":21},{"word":"NATURE","pct":27},{"word":"GRACE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0036", letters: ["K","I","R","G","T","D","G","N","M","Y","O","N","I","V","O","C","I","S","S","G","E","R"], prevAnswers: [{"word":"RECOGNISING","pct":3},{"word":"SINCE","pct":21},{"word":"SING","pct":27},{"word":"ONCE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0221", letters: ["F","E","S","C","M","A","","N","V","I","I","I","G","L","I","L","Z","G","A","R","I","O"], prevAnswers: [{"word":"FAMILIARIZING","pct":1},{"word":"FAMILIAR","pct":22},{"word":"FALSE","pct":28},{"word":"FEAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0231", letters: ["R","P","P","V","O","I","A","","I","X","M","Y","M","N","A","D","L","W","B","T","E","E"], prevAnswers: [{"word":"APPROXIMATELY","pct":1},{"word":"PRIMARY","pct":22},{"word":"WEEDY","pct":28},{"word":"PRIM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0318", letters: ["N","I","Y","V","T","O","R","O","U","R","O","I","N","S","D","C","T","M","G","U","B","T"], prevAnswers: [{"word":"INTRODUCTION","pct":2},{"word":"INTRO","pct":22},{"word":"RIOT","pct":27},{"word":"IRON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0058", letters: ["E","I","O","L","S","T","O","D","L","P","W","N","A","Y","E","C","X","K","A","N","P","E"], prevAnswers: [{"word":"EXCEPTIONAL","pct":3},{"word":"EXCEPTION","pct":21},{"word":"STOOD","pct":27},{"word":"LOON","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0016", letters: ["V","I","T","I","E","O","T","T","C","C","M","P","E","V","S","D","W","Y","E","I","P","N"], prevAnswers: [{"word":"COMPETITIVE","pct":3},{"word":"MOVE","pct":21},{"word":"DISC","pct":27},{"word":"MOVE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0233", letters: ["V","I","R","P","O","","I","E","S","F","C","P","L","B","E","N","P","S","C","A","I","R"], prevAnswers: [{"word":"PRINCIPLES","pct":4},{"word":"PRINCIPLE","pct":21},{"word":"VOICE","pct":27},{"word":"VICE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0100", letters: ["B","T","I","U","N","G","S","D","W","I","T","A","P","K","N","C","O","C","U","O","C","E"], prevAnswers: [{"word":"ACCOUNTINGS","pct":3},{"word":"ACCOUNT","pct":21},{"word":"STINK","pct":27},{"word":"ACTS","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0200", letters: ["E","M","O","H","W","D","R","C","P","K","A","A","N","C","T","S","G","U","I","","I","N"], prevAnswers: [{"word":"DEMOCRATISING","pct":1},{"word":"DEMOCRATIZING","pct":22},{"word":"HORDE","pct":28},{"word":"RANCH","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0054", letters: ["E","H","G","V","A","T","T","R","Y","R","F","N","C","W","L","E","B","E","T","L","Y","H"], prevAnswers: [{"word":"HEARTFELTLY","pct":3},{"word":"HEARTFELT","pct":21},{"word":"HEART","pct":27},{"word":"EARL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0102", letters: ["K","C","N","A","A","H","E","R","T","O","L","E","I","W","Y","V","H","T","N","C","N","I"], prevAnswers: [{"word":"INHERITANCE","pct":3},{"word":"CHEER","pct":21},{"word":"THERE","pct":27},{"word":"NECK","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0278", letters: ["K","A","L","I","L","O","H","M","Y","O","R","V","T","R","C","R","T","A","W","S","E","W"], prevAnswers: [{"word":"WATERCOLOR","pct":4},{"word":"COLOR","pct":21},{"word":"WATER","pct":27},{"word":"ROOK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0331", letters: ["C","H","U","F","A","E","","E","O","T","G","S","G","L","R","O","W","G","I","S","I","N"], prevAnswers: [{"word":"CATEGORISING","pct":2},{"word":"GROWING","pct":22},{"word":"CHESS","pct":27},{"word":"CHIEF","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0268", letters: ["L","S","N","O","W","Y","K","A","I","A","N","T","T","P","D","E","C","M","G","X","P","E"], prevAnswers: [{"word":"EXPECTATIONS","pct":2},{"word":"ATTEND","pct":22},{"word":"SKATE","pct":27},{"word":"WANT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0155", letters: ["C","T","I","W","E","H","","S","K","E","S","S","L","R","F","N","E","F","U","L","O","M"], prevAnswers: [{"word":"CHEERFULNESS","pct":2},{"word":"ITSELF","pct":22},{"word":"CHEER","pct":27},{"word":"CHESS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0341", letters: ["I","S","T","I","B","H","S","C","A","T","P","O","T","I","","E","I","L","W","N","O","Y"], prevAnswers: [{"word":"SOPHISTICATIONS","pct":1},{"word":"ACTIONS","pct":22},{"word":"OPTION","pct":28},{"word":"SPOT","pct":22},{"word":"4 or lower","pct":27}] },
];
// ─── PUZZLES END ───


// ─── Firebase config ─────────────────────────────────────────────────────────
// Paste your Firebase SDK config here (console.firebase.google.com → Project settings → Your apps)
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAfBsrmj7_DDxIlYmwmF9xNqYGccTiinMY",
  authDomain: "shukuma-b09bf.firebaseapp.com",
  projectId: "shukuma-b09bf",
  storageBucket: "shukuma-b09bf.firebasestorage.app",
  messagingSenderId: "623730561112",
  appId: "1:623730561112:web:064cbafbea6735a55d7a2d",
};

// ─── Version + changelog ──────────────────────────────────────────────────────
const VERSION = "2.0.58";
// Increment this whenever puzzle order changes — auto-clears stale local day state on next load.
const PUZZLE_ORDER_VERSION = "2.0.25";

const CHANGELOG = [
  {
    version: "2.0.58",
    date: "2026-06-30",
    title: "UX: loading skeleton on word list; remove 'share' language from scores",
    changes: [
      "Word list bar and percentage now show a shimmer skeleton while waiting for Firestore — no guessed values",
      "Replaced local-estimate fallback (100%/0%) with proper loading state",
      "Once server data arrives, real community percentages fill in seamlessly",
      "Past days or today with genuinely no scores show '—' after load completes",
      "Scores section no longer uses 'share' language — scores are recorded automatically when the longest word is found",
    ],
  },
  {
    version: "2.0.57",
    date: "2026-06-30",
    title: "Fix: always show % in word list; derive from local play when no server data",
    changes: [
      "Word rows always show a percentage — no more blank or letter-count fallback",
      "When server scores haven't loaded yet (e.g. right after finding the longest word), percentage is derived from local play: 100% for words you found, 0% for words you haven't",
      "Once other players' scores are recorded the real community percentage replaces the local estimate automatically",
      "Past days with genuinely no data show '—'",
    ],
  },
  {
    version: "2.0.56",
    date: "2026-06-30",
    title: "Fix: snapshot time/tries at goal, keep running after; remove letter count label",
    changes: [
      "'Tries to Find' and 'Time to Find' are now snapshot values captured the exact moment the longest word is found — the timer and attempt counter keep running after that for total stats",
      "Score submitted to Firestore uses the snapshot values for 'attempts' and 'timeSpent', not the post-find totals",
      "Attempts now count normally after the target is found (no longer stops at goal)",
      "Letter-count label ('10L', '10 ltr') removed from word rows — it was not meaningful when percentage data isn't yet available",
    ],
  },
  {
    version: "2.0.55",
    date: "2026-06-30",
    title: "Timer freeze, auto-submit, word list fixes, profile locale",
    changes: [
      "Timer freezes the moment you find today's longest word — Time to Find shows your actual play time, not total session time",
      "Tries counter now labelled 'Tries to Find' (vs 'Tries so far') so it's clear the count stops when you reach the target",
      "Score is automatically submitted to the leaderboard the moment the longest word is found — no need to Share first to see your percentage",
      "Word list now includes all words you've found today, even if they weren't in the pre-stored answer set",
      "'No other scores yet today' replaced with a clearer message that explains what it means",
      "Dictionary indicator added to profile — shows 🇬🇧 UK English or 🇺🇸 US English depending on your setting",
    ],
  },
  {
    version: "2.0.54",
    date: "2026-06-30",
    title: "Admin sidebar, word row definitions, cycling text fix, font floor",
    changes: [
      "Admin nav converted from horizontal pill strip to a slide-in sidebar drawer — hamburger button opens it, overlay or section tap closes it",
      "Colour Palette section now has its own 'Apply & Save Changes' button — no more hunting for it in the Data section",
      "Info button removed from each word row — tap the word itself to show/hide its definition",
      "Word length fallback label changed from '10L' (confusing) to '10 ltr'",
      "Cycling messages after finding the longest word now start correctly without a stutter — duplicate startCyclingMessages call removed",
      "gameCompleted flag set immediately on finding the longest word, so cycling text restores correctly after page reload",
    ],
  },
  {
    version: "2.0.53",
    date: "2026-06-29",
    title: "Profile panel polish — hex avatar, streak fix, freeze inventory",
    changes: [
      "Avatar now displays in a pointy-top hexagon shape to match the game tile design (was circle)",
      "Username given higher visual weight; email address shown as secondary label",
      "Streak count now computed from visible calendar dots — fixes edge case where count lagged behind the calendar display",
      "Streak freeze inventory shown as a count badge on the freeze button",
      "Font sizes raised to meet 17pt minimum throughout the profile panel",
    ],
  },
  {
    version: "2.0.52",
    date: "2026-06-29",
    title: "Scores area accessibility and layout overhaul",
    changes: [
      "Scores back-panel rebuilt with cleaner grid layout; column widths no longer overflow on short words",
      "All text in scores area raised to minimum 17pt",
      "Bar track and percentage column given fixed widths to prevent layout shift when definition panel expands",
    ],
  },
  {
    version: "2.0.51",
    date: "2026-06-29",
    title: "Fix: toast position over word box",
    changes: [
      "Toast notifications repositioned to appear over the word/answer box area rather than overlapping the board",
    ],
  },
  {
    version: "2.0.50",
    date: "2026-06-29",
    title: "Submit button moved to full-width bar between board and nav",
    changes: [
      "Submit button relocated from inside the topbar to a dedicated full-width bar below the board — easier to reach on mobile",
      "Button only visible when ≥4 tiles are selected",
    ],
  },
  {
    version: "2.0.49",
    date: "2026-06-29",
    title: "Word list redesign, friends stats, single-tile drag fix",
    changes: [
      "Word list rows redesigned with bar + percentage + definition toggle layout",
      "Friends stats tab added to back panel showing friends' scores for the same puzzle",
      "Single-tile drag no longer triggers a submit — minimum 2 tiles required for drag-release submit",
    ],
  },
  {
    version: "2.0.47",
    date: "2026-06-29",
    title: "Profile/avatar, haptics, dark mode fix, icon alignment",
    changes: [
      "Profile avatar upload added — photos stored in Firebase Storage",
      "Haptic feedback added for invalid words and tile selection",
      "Dark mode auto-detection fixed — no longer overrides user preference on reload",
      "Icon alignment corrected in topbar and nav buttons",
    ],
  },
  {
    version: "2.0.45",
    date: "2026-06-29",
    title: "Fix: friend profile tap — wrong function name and data shape",
    changes: [
      "Tapping a friend's row in the leaderboard now opens their profile correctly",
      "Fixed data shape mismatch where friend object used different field names than profile renderer expected",
    ],
  },
  {
    version: "2.0.44",
    date: "2026-06-29",
    title: "Profile redesign — SVG badges, Duolingo-style streak, friends",
    changes: [
      "Profile panel redesigned: SVG achievement badges, streak calendar, friends list",
      "Streak display styled like Duolingo — fire icon with day count and 7-day dot calendar",
      "Friends tab on back panel shows avatar + streak for each friend",
    ],
  },
  {
    version: "2.0.43",
    date: "2026-06-29",
    title: "Accessibility overhaul — screen reader, dark mode, high contrast",
    changes: [
      "aria-live regions added for board announcements and answer area",
      "Dark mode auto-detect added via prefers-color-scheme media query",
      "High-contrast mode toggle added in settings",
      "All tap targets raised to minimum 44×44pt",
      "Font scale slider added to settings for text size preference",
    ],
  },
  {
    version: "2.0.42",
    date: "2026-06-29",
    title: "Polish: Toast over word area, floats inside hex, min-4 as float",
    changes: [
      "Toasts now appear over the word text area (topbar) so the game date and iOS status bar remain visible",
      "Wrong/neutral float messages now display inside a hexagon tile (red for wrong, cream for neutral) at 18px — no more bare floating text",
      'Already Found float: font size raised to 18px to match minimum',
      "Minimum 4-letter rejection now shows as a hex float (\"Need 4+\") instead of a top-screen toast",
      "Float level and cheer labels raised from 0.8/0.85rem to 17px minimum",
    ],
  },
  {
    version: "2.0.41",
    date: "2026-06-29",
    title: "Fix: API locale, 4-letter minimum, parallel blank lookups",
    changes: [
      "Dictionary API: fixed locale code from 'en_US'/'en_GB' to 'en' — all prior API calls returned 404 due to wrong language code; blank tile validation now actually works",
      "Minimum word length raised to 4 letters — submitting fewer shows shake animation + 'Minimum 4 letters' notice",
      "Blank tile candidate checks now run in parallel (all 26 substitutions at once) instead of sequentially — much faster validation",
      "Word definition lookups also fixed to use 'en' locale",
    ],
  },
  {
    version: "2.0.40",
    date: "2026-06-29",
    title: "Fix: Blank tile works for all words + Motion permission asked once",
    changes: [
      "Blank tile API fallback: when WORDS set misses the word (e.g. KISS, VAST), all 26 letter substitutions are now tried via dictionary API — blank tiles now work for any valid English word",
      "lockValidWord: blank tile now shows its resolved letter (e.g. S in KISS) instead of ★ after a valid word is locked",
      "Motion/orientation permission (iOS): stored in localStorage so the dialog only appears once ever, not on every visit",
      "Rules: blank tile now described as 'a tile showing ★ counts as any letter'",
    ],
  },
  {
    version: "2.0.39",
    date: "2026-06-29",
    title: "Fix: Admin notice and score deletion fully decoupled",
    changes: [
      "sendTesterNotice(): writes config/testerReset independently — success/fail reported on its own",
      "resetAllScores(): separate button, deletes all score docs, no longer coupled to notice",
      "Previous bug: Promise.all coupled both ops so a score-deletion failure silently blocked the notice write",
      "Previous bug: score deletion query used wrong field ('dateStr') — docs actually store 'date' (DDMMYY format)",
      "Removed duplicate resetAllScores() definition",
      "Admin buttons now labelled '1. Send tester notice' and '2. Delete ALL score records'",
    ],
  },
  {
    version: "2.0.38",
    date: "2026-06-29",
    title: "Backfill: What's New entries for 2.0.32–2.0.37",
    changes: [
      "Changelog was not being updated with each release — all missing entries added",
    ],
  },
  {
    version: "2.0.37",
    date: "2026-06-29",
    title: "Tester notice button: inline SVG ticket icon",
    changes: [
      "Replaced emoji 🎟 with the same outline SVG ticket icon used on the Share button",
    ],
  },
  {
    version: "2.0.36",
    date: "2026-06-29",
    title: "Tester notice button: ticket icon instead of word",
    changes: [
      "Button now reads 'Understood +10 🎟' — ticket symbol instead of the word 'Tickets'",
    ],
  },
  {
    version: "2.0.35",
    date: "2026-06-29",
    title: "Fix: Tester reset clears board before showing notice modal",
    changes: [
      "Old scores/words/tiles were still visible behind the modal because the board had already rendered from localStorage",
      "Two-pass reload: on first detection, wipe all local game state and reload; on second load, board renders fresh, then modal appears",
      "clearLocalGameState() removes all per-date localStorage keys, share-tracking, unlocked-dates, and puzzle-version",
    ],
  },
  {
    version: "2.0.34",
    date: "2026-06-29",
    title: "Fix: Clear local game state on tester reset",
    changes: [
      "Deleting Firestore score docs did not affect localStorage — players still saw old results",
      "clearLocalGameState() now wipes all shukuma-DDMMYY state keys, share-tracking, and unlocked-dates on reset",
      "Page reloads after acknowledgment so the player lands on a clean board",
    ],
  },
  {
    version: "2.0.33",
    date: "2026-06-29",
    title: "Fix: Firestore rules grant admin full collection access",
    changes: [
      "Added firestore.rules file — admin (matt@uservox.com) can now read/write all scores and users docs",
      "resetPastScores() fully restored: deletes past score docs + writes config/testerReset notice",
      "resetAllScores() fully restored: deletes all score docs",
      "Regular users remain scoped to their own documents only",
    ],
  },
  {
    version: "2.0.32",
    date: "2026-06-29",
    title: "Fix: Tester notice via config/testerReset (not user profile docs)",
    changes: [
      "Admin cannot list the users collection, so writing pendingNotice to each user doc failed",
      "Notice now written to config/testerReset (admin can write config; all users can read config)",
      "checkTesterReset() reads config/testerReset on login; localStorage testerReset_ackAt tracks acknowledgment",
      "resetAllScores() temporarily replaced with Firebase console instructions (later restored in 2.0.33)",
    ],
  },
  {
    version: "2.0.31",
    date: "2026-06-29",
    title: "Fix: Tester notice now delivered via user profile (not config doc)",
    changes: [
      "Root cause: config/testerReset was not readable by non-admin users due to Firestore security rules",
      "Fix: resetPastScores() now writes pendingNotice directly onto each user's own profile document — users always have read access to their own doc",
      "checkTesterReset() removed; notice is instead detected inside loadUserData() where the profile is already fetched",
      "Acknowledging the notice clears pendingNotice from Firestore (no localStorage key needed)",
    ],
  },
  {
    version: "2.0.30",
    date: "2026-06-29",
    title: "Tester Reset Notice — Past Scores Cleared + Ticket Bonus",
    changes: [
      "Admin: 'Reset past day scores' button deletes all Firestore score records dated before today",
      "After reset, a Firestore flag activates a tester notice for all users on next load",
      "Modal shows a personalised apology message with a '+10 Tickets' CTA button",
      "Tapping the button awards 10 tickets, persists to Firestore, and marks the notice as seen",
      "Notice only shows once per reset event (keyed by timestamp in localStorage)",
    ],
  },
  {
    version: "2.0.29",
    date: "2026-06-29",
    title: "Admin UX — Full-Page Tabs + Backlog Form Fix",
    changes: [
      "Admin sections now show one at a time as full-page tabs (nav pills switch between them) — no more collapsing accordion",
      "Admin content area scrolls independently so the nav bar stays fixed at top",
      "Backlog edit form enlarged: taller notes textarea (5 rows), larger inputs, full-width layout",
      "Fixed: backlog save errors now surface as a toast instead of failing silently",
      "Fixed: all backlog mutations (save, toggle-done, delete) have error handling",
      "Added BLG-029: Hint sequence improvement (rotate through letters, not always first)",
    ],
  },
  {
    version: "2.0.28",
    date: "2026-06-29",
    title: "Admin Navigation Redesign — Sticky Nav Pills + Collapsible Sections",
    changes: [
      "Admin panel now has a sticky nav bar with 9 section pills (Themes, Palette, Typography, Saved, Tickets, Messages, Data, Audit, Backlog)",
      "Each section collapses to a compact header; tapping a nav pill or section heading expands it",
      "Opens to Backlog by default for quick access to tracked tasks",
      "Colour Palette section now has a heading to match all other sections",
    ],
  },
  {
    version: "2.0.27",
    date: "2026-06-29",
    title: "Panel Header UX + Score Sheet Dismiss",
    changes: [
      "Panel headings (Rules, Scores, Profile, Settings) larger and better spaced: 0.78rem → 1.05rem, tighter letter-spacing",
      "X close button now correctly placed in the right column of the header grid",
      "Scores reduced view dismisses when tapping anywhere above the score card",
      "Scores reduced view dismisses on swipe-down of the header bar",
      "Backlog BLG-025–028 added; loadBacklog() auto-merges new seed items into Firestore",
    ],
  },
  {
    version: "2.0.26",
    date: "2026-06-29",
    title: "Admin Backlog + Puzzle State Reset",
    changes: [
      "Added Development Backlog section to admin panel — 24 tracked items across bugs, improvements, and future features stored in Firestore",
      "Auto-clears stale local day-state when puzzle order changes (PUZZLE_ORDER_VERSION check on startup)",
      "Added admin 'Reset all player scores' button to batch-delete all Firestore score records (tester utility)",
    ],
  },
  {
    version: "2.0.25",
    date: "2026-06-29",
    title: "Difficulty Pacing — Reorder for Standard/Hard/Super-Hard Distribution",
    changes: [
      "Reordered all 365 puzzles to achieve target weekly cadence",
      "Standard (10-12L): 4-6 per week (252 puzzles, 4.8/week)",
      "Hard (13-14L): 1-2 per week (90 puzzles, 1.7/week)",
      "Super-hard (15L+): every 1-2 weeks (23 puzzles, 0.44/week)",
      "Day-of-week randomised within each week so no day is predictably hard",
    ],
  },
  {
    version: "2.0.24",
    date: "2026-06-29",
    title: "Morphological Maximization — Insane Word List Audit",
    changes: [
      "Audited all 365 puzzles against insane English word lists (440,000 words) via DFS",
      "4 API-accessible fixes: ACCOUNTINGS(11L), DELIMITATIONS(13L), MANUFACTURINGS(14L), SUBSTANTIVAL(12L)",
      "8 blank-tile fixes using confirmed standard-dictionary words: EXAMINATIONAL, REVOLUTIONIZER, TYPEWRITINGS, PROFESSIONALISMS(×3), INNOVATIONAL, PROCREATIONS",
      "All candidates filtered against american-english + british-english (standard + large) to exclude archaic, misspelled, or obscure technical terms",
    ],
  },
  {
    version: "2.0.23",
    date: "2026-06-29",
    title: "Word Maximization Pass 2 — Comprehensive Audit",
    changes: [
      "Comprehensive audit using system English word list (20,000+ words) found 8 more cases",
      "5 serious fixes: COMMUNICATIVE(13L), DEVALUATIONS(12L), INDUSTRIALISES(14L), CHALLENGERS(11L), ATMOSPHERES(11L) — these were accessible via dictionary API",
      "3 additional fixes: READJUSTMENT(12L), COMPREHENSIVES(14L), GRACEFULNESS(12L)",
      "GRACEFULNESS replaces CAREFULNESS for its puzzle day — blank tile provides the E",
    ],
  },
  {
    version: "2.0.22",
    date: "2026-06-28",
    title: "Word List Expansion — Full Word Forms",
    changes: [
      "Added 41 common word extensions to the dictionary (plurals, past tenses, adverbs)",
      "Updated 41 puzzle targets to their fullest valid form (e.g. CONVERSATION → CONVERSATIONS)",
      "SIGNIFICANTLY now a Hard word on its day (was SIGNIFICANT, Standard)",
      "British/American spelling variant support extended to STANDARDIZE/STANDARDISE forms",
    ],
  },
  { version: "2.0.21", date: "28 Jun 2026", changes: [
    "Blank wildcard tile now looks like a full tile — same fill as neutral tiles, faint ★ indicator instead of underscore",
    "Hint throb is slower (2.5s cycle) and half as bright — gentle warm glow rather than strong amber",
    "Hint duration reduced from 10s to 5s",
  ]},
  { version: "2.0.20", date: "28 Jun 2026", changes: [
    "Admin audit list now shows the publication date for each puzzle card",
  ]},
  { version: "2.0.19", date: "28 Jun 2026", changes: [
    "Hint button greys out once you've found today's longest word — tap it anyway for a free hint, no tickets charged",
  ]},
  { version: "2.0.18", date: "28 Jun 2026", changes: [
    "Puzzle difficulty now varies day-to-day: Standard (10–12 letters) most days, Hard (13–14) 1–2 times per week, Super Hard (15+) once every 1–2 weeks",
    "No more than 5 Standard days in a row — a harder puzzle always arrives within the week",
    "British/American spelling variants handled: words like NATIONALISING / NATIONALIZING now use a blank tile at the S/Z position so both forms count",
    "Flag overlay (🇬🇧 or 🇺🇸) appears when you submit a British or American spelling variant, celebrating your choice",
  ]},
  { version: "2.0.17", date: "28 Jun 2026", changes: [
    "Already found a word? A hex tile labelled 'Already Found' shakes left and right with rapid haptic, then floats off — no duplicate tickets awarded",
    "Attempt counter freezes the moment you find today's longest word — re-submissions no longer inflate your attempt count",
  ]},
  { version: "2.0.16", date: "28 Jun 2026", changes: [
    "All 365 puzzles redesigned — every target word is now 10 letters or longer (average 12 letters)",
    "Longest targets reach 16 letters: responsibilities, wholeheartedness, characteristics",
    "Half of all puzzles now include a blank wildcard tile to help discover more words",
    "No board has a word longer than its target — every puzzle is winnable",
    "Average of 39 discoverable words per board (up from ~15)",
  ]},
  { version: "2.0.15", date: "28 Jun 2026", changes: [
    "Fixed 4 puzzles where target words were shorter than 10 letters",
    "Day 34: BLACKSMITH (10), Day 53: REGULATIONS (11), Day 327: BACKGROUND (10), Day 354: BRAINSTORMING (13)",
  ]},
  { version: "2.0.14", date: "28 Jun 2026", changes: [
    "Admin: Game Card Audit tool — scan all 365 boards and flag short targets or boards with a longer word than the target",
  ]},
  { version: "2.0.13", date: "28 Jun 2026", changes: [
    "Valid words float off the board as a hex tile showing your score, level badge, and cheer message",
    "Confetti burst and rich haptic pattern when you find today's longest word",
    "Past-day play restores the correct prompt and completion state on return",
  ]},
  { version: "2.0.12", date: "28 Jun 2026", changes: [
    "Scores panel redesigned — cleaner layout, polished header",
    "Cycling completion message fix — first line is now day-specific, not always generic",
  ]},
  { version: "2.0.11", date: "28 Jun 2026", changes: [
    "Hint: smooth amber throb via CSS keyframe on polygon fill — true fade in/out, 10 seconds",
    "Ticket spend: confirmation modal shows current balance, cost, and remaining before any spend",
    "Completion messages: prompt cycles through encouraging messages after finding today's word",
    "Admin: edit cycle messages (saved to Firestore — affects all users)",
  ]},
  { version: "2.0.10", date: "28 Jun 2026", changes: [
    "Hint tile pulses bright amber via JS fill-swap — reliable on all browsers including iOS Safari",
  ]},
  { version: "2.0.9", date: "28 Jun 2026", changes: [
    "Hint tile now throbs bright amber for 10 seconds — much more visible",
    "Award tickets: configurable value (default 10) — earn on target word or Grandmaster in One",
    "Word list: found words shown live during play; ≥4-letter words listed (locked until discovered or unlocked)",
    "Tapping a found word highlights it on the board in sequence",
    "Past-day words unlock free if you found the target word; otherwise pay 10 tickets",
    "No ticket earnings for past-day games (spending still allowed)",
  ]},
  { version: "2.0.8", date: "28 Jun 2026", changes: [
    "Added breathing room between word box and top of board",
    "Action icons and share button pulled inward from screen edges",
  ]},
  { version: "2.0.7", date: "28 Jun 2026", changes: [
    "Board now sits at the top of the card — controls pin directly beneath it",
    "Removed large vertical gap between board and action controls",
    "Nav pill uses remaining space at the bottom naturally",
  ]},
  { version: "2.0.6", date: "28 Jun 2026", changes: [
    "Action icons and share button now sit on one row directly under the board — icons left, share right",
    "Board moves up closer to the word box (less wasted gap)",
    "Share button is now a slim outline pill — present without dominating the game",
    "Share button pulses gently 3× after each valid word is found, then rests",
  ]},
  { version: "2.0.5", date: "28 Jun 2026", changes: [
    "Admin: colour panel redesigned — light & dark side by side, one row per colour",
    "Admin: 5 preset themes (Default, Maroon, Forest, Ocean, Coffee) — click to preview, then save",
    "Admin: ⇒ suggest-dark button on every row derives a sensible dark-mode equivalent from the light colour",
    "Admin: secondary colours (strokes, sub-variants) collapsed under 'Advanced colours'",
    "Theme persistence unchanged — colours saved to Firestore survive all future JS/CSS updates",
  ]},
  { version: "2.0.4", date: "28 Jun 2026", changes: [
    "Game board moves 12px higher; action icons and share button tighten up beneath it",
    "Share button now reads 'Share 🎟 +1' — ticket icon plus label, not just the icon",
    "Scores sheet opens 120px higher so more content is immediately visible",
    "Swipe-up on scores sheet now correctly expands to full screen height",
    "Past-date word list: rubbing finger across blurred words now reveals them reliably",
    "Revealed words re-blur after 10 seconds, keeping the puzzle spoiler-free",
  ]},
  { version: "2.0.3", date: "27 Jun 2026", changes: [
    "Scores panel date nav now visible — swipe through past days directly in the scores sheet",
    "Scores panel syncs to the board's current date when opened",
    "Today: shows 'Come back tomorrow' + your best word in the scratchcard area",
    "Past dates: shows word list blurred, rub finger to reveal each word",
    "Leaderboard queries the correct date's Firestore scores (not always today)",
    "Scratchcard rub-to-reveal now fully wired up (was defined but never called)",
  ]},
  { version: "2.0.2", date: "27 Jun 2026", changes: [
    "Minimum font size raised to 17px everywhere — legibility across all text",
    "Badge icons now displayed inside a hexagon (same shape as game tiles)",
    "Share button simplified to compact pill — ticket icon + '+1'",
    "Action icons tightened closer to the game board",
    "Today's puzzle label only; past-date header is blank",
    "Scores sheet opens to partial view; Profile/Settings always open full screen",
    "Blur/scratchcard reveal now works with any finger movement direction on iOS",
    "Today's scores tab shows 'Come back tomorrow' + your best word",
    "Admin: 1,000 test tickets; manual ticket-count control in admin panel",
  ]},
  { version: "2.0.0", date: "27 Jun 2026", changes: [
    "Dictionary (US/UK English) moved from Rules to Settings tab",
    "Admin button now appears as soon as admin signs in — no longer pre-hidden before auth",
    "Admin button starts hidden in HTML and is revealed only on confirmed admin sign-in",
  ]},
  { version: "1.9.9", date: "27 Jun 2026", changes: [
    "Admin now controls light AND dark mode palettes independently",
    "All colour groups exposed: brand, backgrounds, text, icons, tiles, strokes, leaderboard",
    "CSS custom properties cover every coloured element; dark mode uses --dk-* counterparts",
    "Saved palettes store the complete light + dark colour set",
  ]},
  { version: "1.9.8", date: "27 Jun 2026", changes: [
    "Admin colour palettes now saved to Firestore and applied to all users in real time",
    "Admin panel only visible to admin user (matt@uservox.com) — accessible on any signed-in device",
    "Server theme propagates via Firestore onSnapshot — no page reload required for players",
  ]},
  { version: "1.9.7", date: "27 Jun 2026", changes: [
    "Clear now stays clear — board remains fully neutral for the rest of the session",
    "Played (indigo) best-word tiles only restore on page reload or date change",
  ]},
  { version: "1.9.6", date: "27 Jun 2026", changes: [
    "Undo removes the last selected tile (backspace); shake phone triggers the same action",
    "Clear wipes the entire board to neutral including the indigo best-word tiles",
    "Hint flashes the first unselected tile on the path of today's target word",
    "Hint costs 1 ticket — confirmation modal shows your balance and a 'Buy Tickets' placeholder",
  ]},
  { version: "1.9.5", date: "27 Jun 2026", changes: [
    "Prompt 'Find today's longest word' now correctly centred in the word box",
    "Header label changes to 'ARCHIVED PUZZLE' when browsing past dates",
    "Share button simplified: single row with 'Share' label and '+1 ticket' badge",
    "All page icons standardised to 26×26 to match the nav pill icon size",
  ]},
  { version: "1.9.4", date: "27 Jun 2026", changes: [
    "Scores tab redesigned: partial sheet sits 30px below the game board",
    "Today's answers shown as a scratchcard — rub left/right to reveal words",
    "Stacked player avatars per word show who scored it as their best",
    "Tap avatar stack to see full player list (rank, word, tries, time)",
    "Tap a player to view their profile",
    "Admin palette system: save, rename, apply, and delete named colour palettes",
  ]},
  { version: "1.9.3", date: "27 Jun 2026", changes: [
    "Toast moved to top of screen with frosted-glass push-notification style",
    "Word display area is fixed height — no background box",
    "Tile outlines removed across all colour themes",
  ]},
  { version: "1.9.2", date: "27 Jun 2026", changes: [
    "Ticket count moved to top-right corner of header",
    "Removed score/current/ticket cards below the board — cleaner layout",
    "Undo, Clear, Hint moved directly beneath the board",
    "Share button always available: share any puzzle even without a score",
    "Up to 5 shares per day each earn a Ticket; further shares are free",
    "Sheet navigation tabs removed — use the pill bar to switch panels",
    "Admin colour changes now apply and re-render tiles live",
  ]},
  { version: "1.9.1", date: "27 Jun 2026", changes: [
    "Bottom nav pill returned: Play, Scores, Profile, Settings (large icons, no text)",
    "Rainbow word-level bar beneath word box — grows from centre, colour tracks rank",
    "Info (ℹ) button restored in header for quick rules access",
    "Toast notifications larger, clearer, and displayed for 5 seconds",
    "Past-game notice replaced by a toast on first interaction",
    "Version tag moved to Settings tab",
  ]},
  { version: "1.9.0", date: "26 Jun 2026", changes: [
    "Redesigned UI: clean white/light theme with purple brand accent",
    "New header with TODAY'S PUZZLE label and date",
    "Word display box replaces topbar — shows current word or prompt",
    "Stats row: CURRENT / YOUR BEST / TICKETS cards replace score section",
    "Action bar: UNDO, CLEAR, HINT buttons replace bottom navigation",
    "Sheet navigation: tab row inside sheet header for Rules/Scores/Profile/Settings",
    "UNDO button removes last selected tile from path",
    "HINT button triggers idle-hint animation on demand",
  ]},
  { version: "1.8.1", date: "26 Jun 2026", changes: [
    "Admin panel moved to Settings tab (no longer requires long-press on version tag)",
    "Bottom nav renamed: Board → Play (hexagon icon), Stats → Profile (person icon)",
    "Navigation bar redesigned as a pill/capsule segmented control",
    "10 welcome tickets awarded on new account registration (email or Google)",
    "Share button always enabled after a valid word; first share per day earns a ticket",
    "Score display: larger value text (2.4rem) for better readability",
    "Version number shown in Settings tab footer",
  ]},
  { version: "1.8.0", date: "26 Jun 2026", changes: [
    "Full-screen layout — board fills the entire viewport with iOS safe-area support",
    "Glass-effect bottom navigation bar (Board / Scores / Stats / Settings) — iOS 27 style",
    "Back panel replaced with smooth slide-up sheet; swipe or tap Board to dismiss",
    "Fixed: Settings tab labels were invisible (white on white); all settings text now dark",
    "Answers section: always expanded, no expand/collapse; per-word eye toggle to reveal/hide",
    "Date navigation synced — Scores tab shows answers for the day you're viewing on the board",
    "Admin panel: long-press version tag to edit CSS variables, fonts, and seed demo data",
    "Removed 'Joyall' branding from share text and rules copy",
    "Removed 'Words Found Today' section from Scores tab",
    "Standardised font-size variables (--fs-xs through --fs-3xl) for accessibility",
  ]},
  { version: "1.7.4", date: "26 Jun 2026", changes: [
    "New scoring: ≤3 Below Average · 4–5 Average · 6–7 Above Average · 8–9 Master · ≥10 Grandmaster",
    "Day difficulty badge: Standard / Hard ★ / Extra Hard ★★ shown above the board",
    "'Grandmaster in One!' — find the target word on your very first attempt",
    "Fixed: ECHOCHAMBER (and similar compound words) now accepted correctly",
  ]},
  { version: "1.7.3", date: "26 Jun 2026", changes: [
    "Settings tab: dark mode, sound, haptics, colour themes (blue/yellow & high contrast for accessibility)",
    "Dictionary selection also in Settings; push notification opt-in",
    "Account settings: email prefs, change password, delete data / account",
    "Previous day's answers moved to the Scores tab — browse past dates to reveal them",
    "All 365 puzzles pre-screened: offensive words can no longer be traced on the board",
  ]},
  { version: "1.6.0", date: "26 Jun 2026", changes: [
    "Brand design system — cream tiles on dark wine board; indigo ‘played’ word tiles",
    "Answer word now displays in the top bar (↺ reset | WORD | ℹ info)",
    "Diagonal stripe hatching on invalid (red) tiles",
    "Reset button clears selection; best-word tiles stay indigo while exploring",
    "Share button throbs and says ‘Share to earn Tickets!’ after a valid word",
    "Idle hint — tiles pulse gently after 8 seconds of no activity",
    "Full CSS variable theming: swap any brand colour without touching code",
  ]},
  { version: "1.5.0", date: "26 Jun 2026", changes: [
    "Pull-to-refresh: pull down on the board to reload the page",
    "Word reveal gating on leaderboard — yesterday’s answer revealed after viewing",
    "Extended word list with more common English words",
    "Reward float animation on valid word submission",
    "Leaderboard sorted client-side for reliability",
  ]},
  { version: "1.4.0", date: "26 Jun 2026", changes: [
    "Browse past 13 days’ puzzles with ‹ › arrows on the board",
    "Leaderboard date navigation — see who scored what on any past day",
    "Past-day target word revealed in the Scores tab",
    "Attempt counter: tracks how many words you tried each session",
    "Active-time timer: measures how long you spent playing",
    "Attempts and time shown on leaderboard rows and in your history",
  ]},
  { version: "1.3.0", date: "25 Jun 2026", changes: [
    "Sign in / create account (email or Google)",
    "Save your score to a global leaderboard",
    "My Stats: games played, best score, streak, average",
    "Badges: earn 10 badges for milestones and streaks",
    "Scores tab: Today’s scores and All Time leaderboards",
    "Guest play always available — auth only needed to save scores",
  ]},
  { version: "1.2.0", date: "24 Jun 2026", changes: [
    "365 validated daily puzzles with 10–13 letter target words",
    "Puzzle solver ensures every board has a valid path",
    "Puzzles date-anchored — same puzzle for all players each day",
  ]},
  { version: "1.1.0", date: "23 Jun 2026", changes: [
    "Fixed tile selection on iOS (scrolling no longer interferes with the board)",
    "Live dictionary API fallback (British and American English)",
    "Added missing common words to local dictionary",
  ]},
  { version: "1.0.0", date: "22 Jun 2026", changes: [
    "Initial launch!",
    "22-tile hexagonal board with a new daily puzzle",
    "Word validation with local dictionary + API fallback",
    "Score levels from Below Average to Grandmaster",
    "Share your result via Web Share API or clipboard",
    "Progress saved locally so you can pick up where you left off",
  ]},
];

// ─── Float animation messages ─────────────────────────────────────────────────
const FLOAT_MSGS = {
  short: [
    "Keep Going!", "Build it up!", "Add more!",
  ],
  wrong: ["Try Again!", "Not a Word!", "Keep Going!", "So Close!", "Almost!", "Nope!"],
  valid: {
    "Below Average": ["Nice start!", "Good try!", "Getting there!", "Keep it up!"],
    "Average":       ["Solid!", "Good word!", "Nice one!", "Well done!"],
    "Above Average": ["Great word!", "Impressive!", "Excellent!", "Brilliant!"],
    "Master":        ["Outstanding!", "Masterful!", "Spectacular!", "Wow!"],
    "Grandmaster":   ["Legendary!", "Incredible!", "Grandmaster!", "Genius!"],
  },
  target_found: [
    "You found it! 🏆", "That's the one! 🎉", "The longest word! 👑",
    "Incredible! 🎯", "Perfect score! ⭐", "Champion! 🥇",
  ],
  in_one: [
    "First try! 🎯", "One and done! 🏆", "Nailed it! ⭐",
    "Perfection! 👑", "Genius! 🧠", "Unbelievable! 🎉",
  ],
};

// ─── Badge definitions ────────────────────────────────────────────────────────
const BADGE_SVGS = {
  first_word:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M7 9h10a2 2 0 0 1 2 2v1"/><path d="M7 9a2 2 0 0 0-2 2v1"/><circle cx="12" cy="6" r="3"/></svg>',
  above_average: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  master:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  grandmaster:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.562 3.266a1 1 0 0 1 .876 0L22 8l-10 5L2 8z"/><path d="M22 8v8"/><path d="M2 8v8"/><path d="M12 13v9"/><path d="M4 12.5v4.167a2 2 0 0 0 1.106 1.789l5 2.5a2 2 0 0 0 1.788 0l5-2.5a2 2 0 0 0 1.106-1.789V12.5"/></svg>',
  streak_3:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  streak_7:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  streak_30:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>',
  games_10:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  games_50:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  games_100:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>',
};

const BADGES = {
  first_word:    { name: "First Word",    desc: "Complete your first puzzle" },
  above_average: { name: "Word Wizard",   desc: "Score 7 or more letters in a single game" },
  master:        { name: "Master",        desc: "Score 11 or more letters in a single game" },
  grandmaster:   { name: "Grandmaster",   desc: "Score 15 or more letters in a single game" },
  streak_3:      { name: "On a Roll",     desc: "Play 3 days in a row" },
  streak_7:      { name: "Week Warrior",  desc: "Play 7 days in a row" },
  streak_30:     { name: "Month Champion",desc: "Play 30 days in a row" },
  games_10:      { name: "Scholar",       desc: "Complete 10 puzzles" },
  games_50:      { name: "Academic",      desc: "Complete 50 puzzles" },
  games_100:     { name: "Centurion",     desc: "Complete 100 puzzles" },
};

// Puzzle calendar: PUZZLES[0] = June 1 2026, PUZZLES[1] = June 2 2026, …
const PUZZLE_BASE_MS = Date.UTC(2026, 5, 1);

function getPuzzleIndex(ddmmyy) {
  const dd = parseInt(ddmmyy.slice(0, 2), 10);
  const mm = parseInt(ddmmyy.slice(2, 4), 10) - 1;
  const yy = 2000 + parseInt(ddmmyy.slice(4, 6), 10);
  const ms = Date.UTC(yy, mm, dd);
  const off = Math.floor((ms - PUZZLE_BASE_MS) / 86400000);
  return ((off % PUZZLES.length) + PUZZLES.length) % PUZZLES.length;
}

function getTodaysPuzzle() {
  return PUZZLES[getPuzzleIndex(getDateString())];
}

function getPuzzleForDate(ddmmyy) {
  return PUZZLES[getPuzzleIndex(ddmmyy)];
}

function getDateString() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return dd + mm + yy;
}

// Offset: 0 = today, -1 = yesterday, etc.
function getDateForOffset(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return String(d.getDate()).padStart(2, "0") +
         String(d.getMonth() + 1).padStart(2, "0") +
         String(d.getFullYear()).slice(-2);
}

function formatDateDisplay(ddmmyy) {
  const dd = parseInt(ddmmyy.slice(0, 2), 10);
  const mm = parseInt(ddmmyy.slice(2, 4), 10) - 1;
  const yy = 2000 + parseInt(ddmmyy.slice(4, 6), 10);
  return new Date(yy, mm, dd).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function formatTime(secs) {
  if (!secs || secs < 1) return "—";
  if (secs < 60) return secs + "s";
  return Math.floor(secs / 60) + "m " + (secs % 60) + "s";
}

function getScoreLevel(length) {
  if (length <= 3)  return "Below Average";
  if (length <= 5)  return "Average";
  if (length <= 7)  return "Above Average";
  if (length <= 9)  return "Master";
  return "Grandmaster";
}

function getDayDifficulty(targetLen) {
  if (targetLen >= 15) return "Extra Hard";
  if (targetLen >= 13) return "Hard";
  return "Standard";
}

// ─── Board layout ─────────────────────────────────────────────────────────────
// Row sizes for 4-5-4-5-4 hex grid (22 tiles total)
const ROW_SIZES = [4, 5, 4, 5, 4];
const HEX_SIZE = 42;
const HEX_W = Math.sqrt(3) * HEX_SIZE;
const VERT_SPACING = HEX_SIZE * 1.5;

// ─── Game state ───────────────────────────────────────────────────────────────
let puzzle = null;
let tiles = [];
let adjacency = [];
let selectedPath = [];
let isDragging = false;
let bestScore = 0;
let bestWord = "";
let ticketCount = 0;
var AWARD_TICKETS = 10; // tickets given per achievement award
let gameCompleted = false;
let lastTileEntered = null;
const apiCache = new Map();
let isChecking = false;

// ─── Dictionary locale ────────────────────────────────────────────────────────
var selectedLocale = "en_US";

function detectDefaultLocale() {
  var lang = ((navigator.language || navigator.userLanguage) || "en-US").toLowerCase();
  var region = (lang.split("-")[1] || "").toLowerCase();
  // Regions that use British English as standard
  var gbRegions = ["gb","au","nz","ie","za","in","sg","hk","ng","gh","ke","tz","ug","sc","tt","jm","bb","mt","cy"];
  return gbRegions.indexOf(region) !== -1 ? "en_GB" : "en_US";
}

function initLocale() {
  var saved = localStorage.getItem("shukuma-locale");
  selectedLocale = saved || detectDefaultLocale();
  updateLocaleBtns();
}

function setLocale(locale) {
  selectedLocale = locale;
  localStorage.setItem("shukuma-locale", locale);
  apiCache.clear(); // old locale responses are now stale
  updateLocaleBtns();
}

function updateLocaleBtns() {
  document.querySelectorAll(".locale-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.locale === selectedLocale);
  });
}

// ─── User settings ────────────────────────────────────────────────────────────
var darkMode      = false;
var soundEnabled  = true;
var hapticsEnabled = true;
var colourTheme   = "default"; // "default" | "protanopia" | "highcontrast"
var textSize      = "normal";  // "normal" | "large" | "xl"

// Haptic intensity multiplier (1 = normal, admin-adjustable)
var hapticIntensity = parseFloat(localStorage.getItem("shukuma-haptic-intensity") || "1");

function triggerHaptic(pattern) {
  if (!hapticsEnabled) return;
  var scaled = Array.isArray(pattern)
    ? pattern.map(function(v) { return Math.round(v * hapticIntensity); })
    : Math.round((pattern || 8) * hapticIntensity);
  if (navigator.vibrate) {
    navigator.vibrate(scaled);
  } else {
    // iOS fallback — audio micro-click through Web Audio API
    audioHapticClick(Array.isArray(pattern) ? Math.ceil(pattern.filter(function(_, i) { return i % 2 === 0; }).length) : 1);
  }
}

function audioHapticClick(count) {
  if (!hapticsEnabled) return;
  try {
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    var ctx = new AudioCtx();
    var interval = 60; // ms between clicks
    for (var i = 0; i < Math.min(count, 20); i++) {
      (function(idx) {
        var startT = ctx.currentTime + idx * (interval / 1000);
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = "sine"; osc.frequency.value = 180;
        gain.gain.setValueAtTime(0.08 * Math.min(hapticIntensity, 2), startT);
        gain.gain.exponentialRampToValueAtTime(0.0001, startT + 0.018);
        osc.start(startT); osc.stop(startT + 0.020);
      })(i);
    }
  } catch (e) {}
}

function applyDarkMode(on) {
  darkMode = on;
  document.documentElement.dataset.theme = on ? "dark" : "";
  localStorage.setItem("shukuma-dark-mode", on ? "1" : "0");
  var tcMeta = document.getElementById("theme-color-meta");
  if (tcMeta) tcMeta.content = on ? "#1c1c1e" : "#f2f2f7";
}

function applyColourTheme(theme) {
  colourTheme = theme;
  document.documentElement.dataset.colour = theme === "default" ? "" : theme;
  localStorage.setItem("shukuma-colour-theme", theme);
  buildColours();
  renderAllTiles();
}

function applyTextSize(size) {
  textSize = size || "normal";
  document.documentElement.dataset.textsize = textSize === "normal" ? "" : textSize;
  localStorage.setItem("shukuma-text-size", textSize);
}

function loadUserSettings() {
  var savedDark  = localStorage.getItem("shukuma-dark-mode");
  darkMode       = savedDark !== null ? savedDark === "1" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  soundEnabled   = localStorage.getItem("shukuma-sound") !== "0";
  hapticsEnabled = localStorage.getItem("shukuma-haptics") !== "0";
  colourTheme    = localStorage.getItem("shukuma-colour-theme") || "default";
  textSize       = localStorage.getItem("shukuma-text-size") || "normal";
  document.documentElement.dataset.theme    = darkMode ? "dark" : "";
  document.documentElement.dataset.colour   = colourTheme === "default" ? "" : colourTheme;
  document.documentElement.dataset.textsize = textSize === "normal" ? "" : textSize;
  // Sync status bar theme-color (Dynamic Island area)
  var tcMeta = document.getElementById("theme-color-meta");
  if (tcMeta) tcMeta.content = darkMode ? "#1c1c1e" : "#f2f2f7";
}

// Attempt + time tracking
let attemptCount = 0;
let validAttemptCount = 0;
let hintsUsed = 0;
let activeTimeMs = 0;
let timerRunning = false;
let timerLastStart = 0;
// Snapshots captured the moment the longest word is found
// (used for "Tries to Find" / "Time to Find" display; timer & counter keep running after)
let targetFoundMs = 0;
let targetFoundAttempts = 0;

// Board date browsing (0 = today, -1 = yesterday, …)
let browseOffset = 0;
let browsedDateStr = null; // null = today
var foundWords = []; // words found (valid) in current session
var targetWordFound = false; // true once the puzzle's longest word has been found
var unlockedDates = {}; // { "280626": true } — legacy: dates where user paid to unlock all words
var revealedLongestByDate = {}; // { "DDMMYY": true } — paid to reveal only the longest word
var wlSortMode = "length-desc"; // word list sort: length-desc / length-asc / pct-desc / pct-asc

// Cycling completion messages
var CYCLE_MESSAGES_DEFAULT = [
  "Now find the most words",
  "Come back tomorrow for another word",
  "Compete with your friends",
  "Share with friends and earn tickets",
];
var cycleMessages = CYCLE_MESSAGES_DEFAULT.slice();
var _cycleTimer = null;
var _cycleAttemptCount = 0;
var _cycleGen = 0; // incremented on stop/start to cancel stale setTimeouts

// Board highlight auto-clear timer
var _highlightTimer = null;

// Definition cache { word: html }
var _defCache = {};

// Tile IDs forming the current best-score word (shown in indigo)
let playedPath = [];
let playedPathVisible = true; // false after clearBoard(); resets only on page load
let inOneAchieved = false;

var pointerDownX = 0, pointerDownY = 0;
var pointerDownTile = null;
var tapHintShown = false;

// ─── Firebase / auth state ────────────────────────────────────────────────────
let db = null, fbAuth = null, fbStorage = null, currentUser = null, userProfile = null;

const ADMIN_EMAIL = "matt@uservox.com";
function isAdmin() { return !!(currentUser && currentUser.email === ADMIN_EMAIL); }

// ─── Tile factory ─────────────────────────────────────────────────────────────
function makeTile(id, row, col, letter) {
  return { id, row, col, letter: letter, blank: letter === "", state: "neutral", _resolvedLetter: "" };
}

// ─── Geometry ─────────────────────────────────────────────────────────────────
function hexCenter(row, col) {
  // Even rows (0,2,4) have 4 tiles and are horizontally offset by half a tile
  const isEvenRow = row % 2 === 0;
  const totalOddWidth = 5 * HEX_W;
  // Centre the board: odd rows (5 tiles) span totalOddWidth
  const boardLeft = 2; // small padding
  const x = boardLeft + (isEvenRow ? HEX_W / 2 : 0) + col * HEX_W + HEX_W / 2;
  const y = row * VERT_SPACING + HEX_SIZE + 2;
  return { x, y };
}

function boardDimensions() {
  const width = 5 * HEX_W + 4;
  const height = 4 * VERT_SPACING + 2 * HEX_SIZE + 4;
  return { width: Math.ceil(width), height: Math.ceil(height) };
}

function hexPoints(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30); // pointy-top
    pts.push((cx + r * Math.cos(angle)).toFixed(2) + "," + (cy + r * Math.sin(angle)).toFixed(2));
  }
  return pts.join(" ");
}

// ─── Adjacency ────────────────────────────────────────────────────────────────
function buildAdjacency() {
  const posMap = {};
  tiles.forEach(t => { posMap[t.row + "," + t.col] = t.id; });

  const adj = tiles.map(() => new Set());

  tiles.forEach(t => {
    const r = t.row, c = t.col;
    const isEvenRow = r % 2 === 0;
    // Same-row neighbours
    const neighbours = [[r, c - 1], [r, c + 1]];
    // Diagonal neighbours
    if (isEvenRow) {
      // Even rows (4 tiles) offset right: diagonals connect to col c and c+1 in adjacent odd rows
      neighbours.push([r - 1, c], [r - 1, c + 1], [r + 1, c], [r + 1, c + 1]);
    } else {
      // Odd rows (5 tiles): diagonals connect to col c-1 and c in adjacent even rows
      neighbours.push([r - 1, c - 1], [r - 1, c], [r + 1, c - 1], [r + 1, c]);
    }
    neighbours.forEach(function(nr) {
      const key = nr[0] + "," + nr[1];
      if (posMap[key] !== undefined) adj[t.id].add(posMap[key]);
    });
  });

  return adj;
}

// Returns all words formed by substituting each blank with a–z (26^blanks total)
function getBlankCandidates(path) {
  var base = path.map(function(id) { return tiles[id].letter.toLowerCase(); });
  var blankPos = [];
  base.forEach(function(l, i) { if (l === "") blankPos.push(i); });
  var candidates = [];
  function gen(bi, arr) {
    if (bi === blankPos.length) { candidates.push(arr.join("")); return; }
    for (var c = 97; c <= 122; c++) {
      arr[blankPos[bi]] = String.fromCharCode(c);
      gen(bi + 1, arr.slice());
    }
  }
  gen(0, base.slice());
  return candidates;
}

// ─── Word validation ──────────────────────────────────────────────────────────
function validateWord(path) {
  const letters = path.map(id => tiles[id].letter.toLowerCase());
  const blankPos = [];
  letters.forEach((l, i) => { if (l === "") blankPos.push(i); });

  if (blankPos.length === 0) {
    const w = letters.join("");
    return WORDS.has(w) ? w : null;
  }

  // Try a-z for each blank (handles up to 2 blanks efficiently)
  function tryBlanks(bi, arr) {
    if (bi === blankPos.length) {
      const w = arr.join("");
      return WORDS.has(w) ? w : null;
    }
    for (let c = 97; c <= 122; c++) {
      arr[blankPos[bi]] = String.fromCharCode(c);
      const result = tryBlanks(bi + 1, arr);
      if (result) return result;
    }
    return null;
  }
  return tryBlanks(0, letters.slice());
}

// ─── Dictionary API fallback ──────────────────────────────────────────────────
async function checkDictionaryAPI(word) {
  var key = word.toLowerCase();
  if (apiCache.has(key)) return apiCache.get(key);
  if (OFFENSIVE_WORDS.has(key)) { apiCache.set(key, false); return false; }
  try {
    var resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + key);
    if (resp.ok) { apiCache.set(key, true); return true; }
  } catch (_) {}
  apiCache.set(key, false);
  return false;
}

// ─── Rendering ────────────────────────────────────────────────────────────────
var COLOURS = {};

function buildColours() {
  var s = getComputedStyle(document.documentElement);
  function g(v) { return s.getPropertyValue(v).trim() || null; }
  COLOURS = {
    neutral:  { fill: g("--tile-neutral")       || "#ffffff", stroke: g("--tile-neutral-stroke")  || "#e5e7eb", text: g("--tile-text")        || "#1f2937" },
    selected: { fill: g("--tile-selected")      || "#7c4dff", stroke: g("--tile-selected-stroke") || "#5e35b1", text: g("--tile-text-light")  || "#ffffff" },
    valid:    { fill: g("--tile-valid")         || "#22c55e", stroke: g("--tile-valid-stroke")    || "#16a34a", text: g("--tile-text-light")  || "#ffffff" },
    invalid:  { fill: g("--tile-invalid")       || "#ef4444", stroke: g("--tile-invalid-stroke")  || "#dc2626", text: g("--tile-text-light")  || "#ffffff" },
    played:   { fill: g("--tile-played")        || "#4ade80", stroke: g("--tile-played-stroke")   || "#22c55e", text: g("--tile-text")        || "#1f2937" },
    blank:    { fill: g("--tile-blank")         || "#f3f4f6", stroke: g("--tile-neutral-stroke")  || "#e5e7eb", text: g("--tile-text")        || "#1f2937" },
  };
}

function renderTile(tile) {
  const g = document.getElementById("tile-" + tile.id);
  if (!g) return;
  const c = COLOURS[tile.state] || COLOURS.neutral;
  // Keep ARIA label current so screen readers see letter + state
  var ariaLetter = tile.blank ? (tile._resolvedLetter ? tile._resolvedLetter.toUpperCase() + " (blank)" : "blank") : tile.letter.toUpperCase();
  var ariaState  = { neutral: "", selected: "selected", valid: "valid", invalid: "not a word", played: "best word" }[tile.state] || "";
  g.setAttribute("aria-label", ariaState ? ariaLetter + " — " + ariaState : ariaLetter);
  const NS = "http://www.w3.org/2000/svg";
  const poly = g.querySelector("polygon:not(.hatch-overlay)");
  const text = g.querySelector("text");
  if (poly) {
    poly.setAttribute("fill", c.fill);
  }
  var hatch = g.querySelector(".hatch-overlay");
  if (tile.state === "invalid") {
    if (!hatch && poly) {
      hatch = document.createElementNS(NS, "polygon");
      hatch.setAttribute("class", "hatch-overlay");
      hatch.setAttribute("points", poly.getAttribute("points"));
      hatch.setAttribute("fill", "url(#invalid-hatch)");
      hatch.setAttribute("pointer-events", "none");
      g.insertBefore(hatch, text);
    }
  } else {
    if (hatch) hatch.remove();
  }
  if (text) {
    text.setAttribute("fill", c.text);
    if (tile.blank) {
      if (tile.state === "valid" && tile._resolvedLetter) {
        text.setAttribute("text-decoration", "underline");
        text.setAttribute("font-size", "22");
        text.setAttribute("fill-opacity", "1");
        text.textContent = tile._resolvedLetter.toUpperCase();
      } else if (tile.state !== "neutral") {
        // selected / invalid / played — show resolved letter or star at full opacity
        text.removeAttribute("text-decoration");
        text.setAttribute("font-size", tile._resolvedLetter ? "22" : "18");
        text.setAttribute("fill-opacity", tile._resolvedLetter ? "1" : "0.5");
        text.textContent = tile._resolvedLetter ? tile._resolvedLetter.toUpperCase() : "★";
      } else {
        // neutral — faint star, looks like a real tile
        text.removeAttribute("text-decoration");
        text.setAttribute("font-size", "18");
        text.setAttribute("fill-opacity", "0.35");
        text.textContent = "★";
      }
    } else {
      text.removeAttribute("text-decoration");
      text.setAttribute("fill-opacity", "1");
      text.textContent = tile.letter.toUpperCase();
    }
  }
}

function renderAllTiles() { tiles.forEach(renderTile); }

function updateAnswerArea() {
  var ansEl     = document.getElementById("answer-text");
  var promptEl  = document.getElementById("game-prompt");
  var resetBtn  = document.getElementById("reset-btn");
  var submitBtn = document.getElementById("submit-btn");
  if (!ansEl) return;
  if (selectedPath.length === 0) {
    ansEl.hidden = true; ansEl.textContent = "";
    ansEl.style.fontSize = ""; ansEl.style.letterSpacing = "";
    if (promptEl)  promptEl.hidden  = false;
    if (resetBtn)  resetBtn.hidden  = true;
    if (submitBtn) submitBtn.hidden = true;
    updateWordLevelBar(0);
    // Restart cycling if target has been found
    if (_cycleAttemptCount > 0 && !_cycleTimer) setTimeout(startCyclingMessages, 200);
    return;
  }
  // User is selecting — pause the cycling so prompt hides cleanly
  if (_cycleTimer) { clearInterval(_cycleTimer); _cycleTimer = null; }
  var display = selectedPath.map(function(id) {
    var t = tiles[id];
    if (t.blank) return (t.state === "valid" && t._resolvedLetter) ? t._resolvedLetter.toUpperCase() : "_";
    return t.letter.toUpperCase();
  }).join("");
  var hasInvalid = selectedPath.some(function(id) { return tiles[id].state === "invalid"; });
  if (hasInvalid) display += "?";
  ansEl.textContent = display;
  ansEl.hidden = false;
  if (promptEl)  promptEl.hidden  = true;
  if (resetBtn)  resetBtn.hidden  = false;
  if (submitBtn) submitBtn.hidden = selectedPath.length < 4;

  // Scale font down for longer words to prevent topbar overflow
  var wordLen = display.replace("?", "").length;
  ansEl.style.fontSize    = wordLen <= 9  ? "" : wordLen <= 12 ? "1.2rem" : wordLen <= 15 ? "1rem" : "0.88rem";
  ansEl.style.letterSpacing = wordLen <= 9  ? "" : wordLen <= 12 ? "0.08em" : "0.04em";

  updateWordLevelBar(selectedPath.length);
}

function updateScoreDisplay(validWord) {
  const scoreEl     = document.getElementById("score-value");
  const levelEl     = document.getElementById("score-level");
  const liveEl      = document.getElementById("score-value-live");
  if (!scoreEl) return;
  if (validWord && selectedPath.length > 0) {
    const len = selectedPath.length;
    scoreEl.textContent = len;
    if (levelEl) levelEl.textContent = getScoreLevel(len);
    scoreEl.className = "valid";
    if (liveEl) liveEl.textContent = len;
  } else if (selectedPath.length > 0) {
    scoreEl.textContent = "?";
    if (levelEl) levelEl.textContent = "";
    scoreEl.className = "invalid";
    if (liveEl) liveEl.textContent = selectedPath.length;
  } else {
    scoreEl.textContent = bestScore > 0 ? bestScore : "?";
    if (levelEl) {
      var baseLevel = bestScore > 0 ? getScoreLevel(bestScore) : "";
      levelEl.textContent = (inOneAchieved && bestScore > 0) ? "Grandmaster in One!" : baseLevel;
    }
    scoreEl.className = "";
    if (liveEl) liveEl.textContent = selectedPath.length > 0 ? selectedPath.length : "—";
  }
  updateLevelBar();
}

function updateLevelBar() {
  const len = selectedPath.length > 0 ? selectedPath.length : bestScore;
  let activeLevel = 0;
  if (len > 0)  activeLevel = 1;
  if (len >= 4) activeLevel = 2;
  if (len >= 6) activeLevel = 3;
  if (len >= 8) activeLevel = 4;
  if (len >= 10) activeLevel = 5;
  document.querySelectorAll(".level-segment").forEach(seg => {
    const lvl = parseInt(seg.getAttribute("data-level"), 10);
    seg.classList.toggle("active", lvl <= activeLevel);
  });
}

function updateWordLevelBar(len) {
  var fill = document.getElementById("word-level-fill");
  if (!fill) return;
  var width = len <= 0 ? 0 : Math.min(100, (len / 10) * 100);
  fill.style.width = width + "%";
  var color;
  if (len <= 3)      color = "#ef4444";
  else if (len <= 5) color = "#f97316";
  else if (len <= 7) color = "#84cc16";
  else if (len <= 9) color = "#14b8a6";
  else               color = "#8b5cf6";
  fill.style.backgroundColor = color;
}

function updateDifficultyBadge() {
  var el = document.getElementById("difficulty-badge");
  if (!el) return;
  var targetLen = (puzzle && puzzle.prevAnswers && puzzle.prevAnswers[0])
    ? puzzle.prevAnswers[0].word.length : 0;
  if (!targetLen) { el.hidden = true; return; }
  var diff = getDayDifficulty(targetLen);
  el.textContent = diff === "Hard" ? "Hard ★" : diff === "Extra Hard" ? "Extra Hard ★★" : "Standard";
  el.dataset.difficulty = diff.toLowerCase().replace(" ", "-");
  el.hidden = false;
}

function updateTicketDisplay() {
  const el = document.getElementById("ticket-count");
  if (el) el.textContent = ticketCount;
}

// Aligns #board-controls horizontal padding to the left/right edges of the
// bottom-row hexagons so icons sit flush with the board's last column.
function alignBoardControls() {
  var controls = document.getElementById("board-controls");
  var svg = document.getElementById("hex-board");
  if (!controls || !svg || !tiles.length) return;
  var maxRow = Math.max.apply(null, tiles.map(function(t) { return t.row; }));
  var bottomTiles = tiles.filter(function(t) { return t.row === maxRow; });
  var minCol = Math.min.apply(null, bottomTiles.map(function(t) { return t.col; }));
  var maxCol = Math.max.apply(null, bottomTiles.map(function(t) { return t.col; }));
  var leftCx  = hexCenter(maxRow, minCol).x;
  var rightCx = hexCenter(maxRow, maxCol).x;
  var dims = boardDimensions();
  var svgRect = svg.getBoundingClientRect();
  var scaleX = svgRect.width / dims.width;
  var controlsRect = controls.getBoundingClientRect();
  var leftPad  = svgRect.left + (leftCx  - HEX_W / 2) * scaleX - controlsRect.left;
  var rightPad = controlsRect.right - (svgRect.left + (rightCx + HEX_W / 2) * scaleX);
  controls.style.paddingLeft  = Math.max(4, Math.round(leftPad))  + "px";
  controls.style.paddingRight = Math.max(4, Math.round(rightPad)) + "px";
}

// ─── Board construction ───────────────────────────────────────────────────────
function buildBoard() {
  const svg = document.getElementById("hex-board");
  if (!svg) return;
  const { width, height } = boardDimensions();
  svg.setAttribute("viewBox", "0 0 " + width + " " + height);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.innerHTML = "";

  const NS = "http://www.w3.org/2000/svg";

  const defs = document.createElementNS(NS, "defs");
  defs.innerHTML =
    '<pattern id="invalid-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">' +
    '<line x1="0" y1="0" x2="0" y2="8" stroke="rgba(0,0,0,0.22)" stroke-width="4"/>' +
    '</pattern>' +
    '<filter id="tile-shadow" x="-15%" y="-15%" width="130%" height="140%" color-interpolation-filters="sRGB">' +
    '<feDropShadow dx="0" dy="2.5" stdDeviation="1.8" flood-opacity="0.38"/>' +
    '</filter>';
  svg.appendChild(defs);

  tiles.forEach(tile => {
    const { x, y } = hexCenter(tile.row, tile.col);
    const c = COLOURS.neutral;

    const g = document.createElementNS(NS, "g");
    g.setAttribute("id", "tile-" + tile.id);
    g.setAttribute("class", "hex-tile");
    g.setAttribute("data-id", tile.id);
    g.setAttribute("role", "img");
    g.setAttribute("aria-label", tile.blank ? "blank tile" : tile.letter.toUpperCase() + " tile");

    const poly = document.createElementNS(NS, "polygon");
    poly.setAttribute("points", hexPoints(x, y, HEX_SIZE - 2));
    poly.setAttribute("fill", c.fill);
    poly.setAttribute("stroke", "none");
    poly.setAttribute("filter", "url(#tile-shadow)");

    const text = document.createElementNS(NS, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "central");
    text.setAttribute("font-size", tile.blank ? "18" : "22");
    text.setAttribute("font-weight", "700");
    text.setAttribute("font-family", "'Arial Black', 'Arial Bold', Arial, 'Helvetica Neue', sans-serif");
    text.setAttribute("fill", c.text);
    text.setAttribute("fill-opacity", tile.blank ? "0.35" : "1");
    text.setAttribute("pointer-events", "none");
    text.setAttribute("user-select", "none");
    text.textContent = tile.blank ? "★" : tile.letter.toUpperCase();

    g.appendChild(poly);
    g.appendChild(text);
    svg.appendChild(g);
  });
}

// ─── Selection logic ──────────────────────────────────────────────────────────
function restoreTileDefault(t) {
  t.state = (playedPathVisible && playedPath.includes(t.id)) ? "played" : "neutral";
  t._resolvedLetter = "";
}

function clearSelection() {
  tiles.forEach(function(t) {
    if (t.state !== "played") { t.state = "neutral"; t._resolvedLetter = ""; }
  });
  if (playedPathVisible) {
    playedPath.forEach(function(id) { if (tiles[id]) tiles[id].state = "played"; });
  }
  selectedPath = [];
  renderAllTiles();
  updateAnswerArea();
  updateScoreDisplay(null);
  updateShareBtn();
}

function processWordState() {
  if (selectedPath.length === 0) {
    tiles.forEach(restoreTileDefault);
    renderAllTiles();
    updateAnswerArea();
    updateScoreDisplay(null);
    return;
  }

  const validWord = validateWord(selectedPath);

  // Apply resolved blank letters if valid
  if (validWord) {
    let vi = 0;
    selectedPath.forEach(id => {
      const t = tiles[id];
      t.state = "valid";
      t._resolvedLetter = t.blank ? validWord[vi] : "";
      vi++;
    });
  } else {
    selectedPath.forEach(id => {
      tiles[id].state = "selected";
      tiles[id]._resolvedLetter = "";
    });
    // Non-selected tiles back to default (respects played state)
    tiles.forEach(t => {
      if (!selectedPath.includes(t.id)) restoreTileDefault(t);
    });
  }

  renderAllTiles();
  updateAnswerArea();
  updateScoreDisplay(validWord);
}

function enterTile(tileId) {
  if (tileId === null || tileId === undefined) return;
  if (tileId === lastTileEntered) return;
  lastTileEntered = tileId;

  const pathIdx = selectedPath.indexOf(tileId);

  if (pathIdx !== -1) {
    // Backtrack: remove from this index onward
    const removed = selectedPath.splice(pathIdx + 1);
    removed.forEach(id => restoreTileDefault(tiles[id]));
    processWordState();
    return;
  }

  // Must be adjacent to last selected tile (or path is empty)
  if (selectedPath.length > 0) {
    const last = selectedPath[selectedPath.length - 1];
    if (!adjacency[last].has(tileId)) return;
  }

  selectedPath.push(tileId);
  triggerHaptic(8);
  processWordState();
}

function tileIdFromPoint(clientX, clientY) {
  const svg = document.getElementById("hex-board");
  if (!svg) return null;
  const rect = svg.getBoundingClientRect();
  const scaleX = parseFloat(svg.getAttribute("width")) / rect.width;
  const scaleY = parseFloat(svg.getAttribute("height")) / rect.height;
  const svgX = (clientX - rect.left) * scaleX;
  const svgY = (clientY - rect.top) * scaleY;

  let closest = null, minDist = Infinity;
  tiles.forEach(t => {
    const { x, y } = hexCenter(t.row, t.col);
    const d = Math.hypot(svgX - x, svgY - y);
    if (d < minDist) { minDist = d; closest = t.id; }
  });
  return minDist < HEX_SIZE ? closest : null;
}

// ─── Pointer handlers ─────────────────────────────────────────────────────────
function onPointerDown(e) {
  if (isChecking) return;
  e.preventDefault();
  pointerDownX = e.clientX;
  pointerDownY = e.clientY;
  pointerDownTile = tileIdFromPoint(e.clientX, e.clientY);
  isDragging = false;
  lastTileEntered = null;
  if (!timerRunning) { timerRunning = true; timerLastStart = Date.now(); }
}

function onPointerMove(e) {
  e.preventDefault();
  if (pointerDownTile === null) return;
  var dx = e.clientX - pointerDownX;
  var dy = e.clientY - pointerDownY;
  if (!isDragging && Math.hypot(dx, dy) > 12) {
    isDragging = true;
    tiles.forEach(restoreTileDefault);
    selectedPath = [];
    lastTileEntered = null;
    enterTile(pointerDownTile);
  }
  if (isDragging) {
    var tileId = tileIdFromPoint(e.clientX, e.clientY);
    if (tileId !== null) enterTile(tileId);
  }
}

async function onPointerUp(e) {
  if (isChecking) return;

  if (isDragging) {
    isDragging = false;
    lastTileEntered = null;
    pointerDownTile = null;
    if (selectedPath.length === 0) return;
    if (selectedPath.length === 1) { clearSelection(); return; } // reverted to start — silent clear
    if (selectedPath.length < 4) { flashInvalid("Need 4+"); return; }
    attemptCount++;
    var validWord = validateWord(selectedPath);
    if (validWord) {
      if (OFFENSIVE_WORDS.has(validWord.toLowerCase())) { flashInvalid(); return; }
      lockValidWord(validWord); return;
    }
    var hasBlanks = selectedPath.some(function(id) { return tiles[id].blank; });
    var answerEl = document.getElementById("answer-text");
    if (hasBlanks) {
      // Try all blank substitutions via API in parallel
      isChecking = true;
      if (answerEl) answerEl.classList.add("checking");
      var candidates = getBlankCandidates(selectedPath).filter(function(c) { return !OFFENSIVE_WORDS.has(c); });
      var results = await Promise.all(candidates.map(function(c) {
        return checkDictionaryAPI(c).then(function(ok) { return ok ? c : null; }).catch(function() { return null; });
      }));
      var resolved = results.find(Boolean) || null;
      isChecking = false;
      if (answerEl) answerEl.classList.remove("checking");
      if (resolved) { lockValidWord(resolved); return; }
    } else {
      var word = selectedPath.map(function(id) { return tiles[id].letter.toLowerCase(); }).join("");
      if (OFFENSIVE_WORDS.has(word)) { flashInvalid(); return; }
      isChecking = true;
      if (answerEl) answerEl.classList.add("checking");
      var found = false;
      try { found = await checkDictionaryAPI(word); } catch (_) {}
      isChecking = false;
      if (answerEl) answerEl.classList.remove("checking");
      if (found) { lockValidWord(word); return; }
    }
    flashInvalid();
    return;
  }

  // Tap completed
  isDragging = false;
  var tileId = pointerDownTile;
  pointerDownTile = null;
  if (tileId === null) return;
  if (!timerRunning) { timerRunning = true; timerLastStart = Date.now(); }

  // Tapping the only tile: clear
  if (selectedPath.length === 1 && selectedPath[0] === tileId) {
    clearSelection();
    return;
  }

  // Tapping the last tile with ≥2 letters: submit
  if (selectedPath.length >= 2 && selectedPath[selectedPath.length - 1] === tileId) {
    attemptCount++;
    await submitTappedWord();
    return;
  }

  // Tapping another already-selected tile: backtrack
  var pathIdx = selectedPath.indexOf(tileId);
  if (pathIdx !== -1) {
    var removed = selectedPath.splice(pathIdx + 1);
    removed.forEach(function(id) { restoreTileDefault(tiles[id]); });
    processWordState();
    return;
  }

  // Tapping a new tile: check adjacency, start fresh if not adjacent
  if (selectedPath.length > 0) {
    var last = selectedPath[selectedPath.length - 1];
    if (!adjacency[last] || !adjacency[last].has(tileId)) {
      tiles.forEach(restoreTileDefault);
      selectedPath = [];
    }
  }

  selectedPath.push(tileId);
  processWordState();
  if (selectedPath.length >= 4 && !tapHintShown) {
    tapHintShown = true;
    showToast("Tap the last letter again to check your word");
  }
  pulseTileSubmitHint();
}

function lockValidWord(word) {
  // Guard: word was revealed via tickets — cannot score it
  if (!browsedDateStr) {
    var todayKey = getDateString();
    var todayTarget = puzzle && puzzle.prevAnswers && puzzle.prevAnswers[0]
      ? puzzle.prevAnswers[0].word.toUpperCase() : "";
    if (revealedLongestByDate[todayKey] && word.toUpperCase() === todayTarget) {
      showToast("You revealed this word — it can't count as your score");
      setTimeout(clearSelection, 1500);
      return;
    }
  }

  // Guard: word already found today — shake tile and bail
  if (foundWords.includes(word.toUpperCase())) {
    showAlreadyFoundAnim();
    triggerHaptic([40, 20, 40, 20, 40, 20, 40, 20, 40]);
    setTimeout(clearSelection, 1500);
    return;
  }

  // "In One!" — player nailed the target word on their very first attempt
  var targetLen = (puzzle && puzzle.prevAnswers && puzzle.prevAnswers[0])
    ? puzzle.prevAnswers[0].word.length : 0;
  var isFirstAttempt = (attemptCount <= 1);
  var isInOne = isFirstAttempt && targetLen > 0 && selectedPath.length >= targetLen && !browsedDateStr;

  validAttemptCount++;
  selectedPath.forEach(function(id, i) {
    tiles[id].state = "valid";
    if (tiles[id].blank) tiles[id]._resolvedLetter = word[i] || "";
  });
  renderAllTiles();
  const len = selectedPath.length;
  foundWords.push(word.toUpperCase());
  if (len > bestScore) {
    bestScore = len;
    bestWord = word;
    playedPath = selectedPath.slice();
    if (isInOne) inOneAchieved = true;
  }
  saveState();
  updateScoreDisplay(word);
  updateAnswerArea();
  updateShareBtn();

  var foundTarget = targetLen > 0 && len >= targetLen;
  var level = getScoreLevel(len);
  srAnnounce(word.toUpperCase() + " — " + len + " letters, " + level + (foundTarget ? ", today's longest word!" : ""));

  // Rapid-fire haptic: N quick taps for N letters found
  var wordHapticPattern = [];
  for (var hi = 0; hi < len; hi++) { wordHapticPattern.push(30); if (hi < len - 1) wordHapticPattern.push(22); }
  triggerHaptic(wordHapticPattern);

  if (isInOne) {
    targetWordFound = true;
    gameCompleted = true;
    _cycleAttemptCount = attemptCount;
    // Snapshot time/tries at the moment of finding the longest word
    targetFoundAttempts = attemptCount;
    targetFoundMs = activeTimeMs + (timerRunning ? (Date.now() - timerLastStart) : 0);
    saveState();
    if (currentUser) submitScore().then(function() {
      var t = document.getElementById("tab-scores");
      if (t && !t.hidden) loadLeaderboard();
    }).catch(function() {});
    var inOneMsgs = FLOAT_MSGS.in_one;
    var inOneCheer = inOneMsgs[Math.floor(Math.random() * inOneMsgs.length)];
    showFloatAnim({ type: "valid", score: len, level: "Grandmaster in One!", cheer: inOneCheer });
    // Grandmaster rumble: brief build-up then big pop, then confetti
    setTimeout(function() {
      triggerHaptic([20,10,30,10,40,10,60,10,100,30,200]);
      showConfetti();
    }, 300);
    setTimeout(function() {
      showToast("🎯 Grandmaster in One! First attempt perfection!");
    }, 1600);
    setTimeout(function() { giveAwardTickets("Grandmaster in One!"); }, 2000);
  } else if (foundTarget) {
    targetWordFound = true;
    gameCompleted = true;
    _cycleAttemptCount = attemptCount;
    // Snapshot time/tries at the moment of finding the longest word
    targetFoundAttempts = attemptCount;
    targetFoundMs = activeTimeMs + (timerRunning ? (Date.now() - timerLastStart) : 0);
    saveState();
    if (currentUser) submitScore().then(function() {
      var t = document.getElementById("tab-scores");
      if (t && !t.hidden) loadLeaderboard();
    }).catch(function() {});
    var msgs = FLOAT_MSGS.target_found;
    var cheer = msgs[Math.floor(Math.random() * msgs.length)];
    showFloatAnim({ type: "valid", score: len, level: level, cheer: cheer });
    setTimeout(function() { triggerHaptic([40,20,80,30,150]); showConfetti(); }, 300);
    setTimeout(function() {
      showToast("🏆 You found today's longest word!");
    }, 1600);
    setTimeout(function() { giveAwardTickets("today's longest word found!"); }, 2000);
  } else {
    var cheers = (FLOAT_MSGS.valid[level] || FLOAT_MSGS.valid["Average"]);
    var cheer2 = cheers[Math.floor(Math.random() * cheers.length)];
    showFloatAnim({ type: "valid", score: len, level: level, cheer: cheer2 });
  }

  // Reflect targetWordFound state on hint button immediately
  updateHintBtn();

  // Spelling variant overlay — informational flag if player used GB/US alternate form
  var variantInfo = getSpellingVariant(word);
  if (variantInfo) {
    setTimeout(function() { showSpellingVariantAnim(variantInfo.locale); }, 500);
  }

  // After showing green, transition to played (indigo) state
  setTimeout(clearSelection, 1500);

  // Subtle share throb once tiles have settled (~300ms after clearSelection)
  setTimeout(function() {
    var shareBtn = document.getElementById("share-btn");
    if (!shareBtn) return;
    shareBtn.classList.remove("share-pulse");
    void shareBtn.offsetWidth; // force reflow so animation restarts cleanly
    shareBtn.classList.add("share-pulse");
    setTimeout(function() { shareBtn.classList.remove("share-pulse"); }, 2400);
  }, 1800);
}

function flashInvalid(customCheer) {
  selectedPath.forEach(id => { tiles[id].state = "invalid"; });
  renderAllTiles();
  updateAnswerArea();
  srAnnounce(customCheer === "Need 4+" ? "Need at least 4 letters" : "Not a valid word");
  triggerHaptic([55, 30, 55]); // double-thud for invalid

  var resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.classList.add("is-throbbing");

  var wrongs = FLOAT_MSGS.wrong;
  var cheer = customCheer || wrongs[Math.floor(Math.random() * wrongs.length)];
  showFloatAnim({ type: "wrong", cheer: cheer });

  setTimeout(function() {
    if (resetBtn) resetBtn.classList.remove("is-throbbing");
    clearSelection();
  }, 700);
}

async function submitTappedWord() {
  if (selectedPath.length < 4) { showToast("Minimum 4 letters"); flashInvalid(); return; }
  var validWord = validateWord(selectedPath);
  if (validWord) {
    if (OFFENSIVE_WORDS.has(validWord.toLowerCase())) { flashInvalid(); return; }
    lockValidWord(validWord); return;
  }
  var hasBlanks = selectedPath.some(function(id) { return tiles[id].blank; });
  var answerEl2 = document.getElementById("answer-text");
  if (hasBlanks) {
    // Try all blank substitutions via API in parallel
    isChecking = true;
    if (answerEl2) answerEl2.classList.add("checking");
    var candidates2 = getBlankCandidates(selectedPath).filter(function(c) { return !OFFENSIVE_WORDS.has(c); });
    var results2 = await Promise.all(candidates2.map(function(c) {
      return checkDictionaryAPI(c).then(function(ok) { return ok ? c : null; }).catch(function() { return null; });
    }));
    var resolved2 = results2.find(Boolean) || null;
    isChecking = false;
    if (answerEl2) answerEl2.classList.remove("checking");
    if (resolved2) { lockValidWord(resolved2); return; }
  } else {
    var word2 = selectedPath.map(function(id) { return tiles[id].letter.toLowerCase(); }).join("");
    if (OFFENSIVE_WORDS.has(word2)) { flashInvalid(); return; }
    isChecking = true;
    if (answerEl2) answerEl2.classList.add("checking");
    var found2 = false;
    try { found2 = await checkDictionaryAPI(word2); } catch (_) {}
    isChecking = false;
    if (answerEl2) answerEl2.classList.remove("checking");
    if (found2) { lockValidWord(word2); return; }
  }
  flashInvalid();
}

function pulseTileSubmitHint() {
  if (selectedPath.length < 2) return;
  var lastId = selectedPath[selectedPath.length - 1];
  var g = document.getElementById("tile-" + lastId);
  if (!g) return;
  g.classList.add("tile-submit-hint");
  setTimeout(function() { g.classList.remove("tile-submit-hint"); }, 800);
}

function undoLastTile() {
  if (selectedPath.length === 0) return;
  var id = selectedPath.pop();
  restoreTileDefault(tiles[id]);
  processWordState();
}

function clearBoard() {
  playedPathVisible = false;
  tiles.forEach(function(t) {
    t.state = "neutral";
    t._resolvedLetter = "";
  });
  selectedPath = [];
  renderAllTiles();
  updateAnswerArea();
  updateScoreDisplay(null);
}

// Find the path of tile IDs that spells `word` on the current board via adjacency DFS
function findWordPath(word) {
  var letters = word.toUpperCase().split("");
  function dfs(depth, prevId, used) {
    if (depth === letters.length) return [];
    var L = letters[depth];
    var candidates = (depth === 0)
      ? tiles
      : Array.from(adjacency[prevId] || []).map(function(id) { return tiles[id]; });
    for (var i = 0; i < candidates.length; i++) {
      var t = candidates[i];
      if (!t || used[t.id] || t.letter.toUpperCase() !== L) continue;
      used[t.id] = true;
      var sub = dfs(depth + 1, t.id, used);
      if (sub !== null) return [t.id].concat(sub);
      delete used[t.id];
    }
    return null;
  }
  return dfs(0, -1, {});
}

function highlightWordOnBoard(word) {
  var path = findWordPath(word);
  if (!path || !path.length) { showToast("Cannot find " + word + " on this board"); return; }

  // Clear current selection and any running auto-clear timer
  if (_highlightTimer) { clearTimeout(_highlightTimer); _highlightTimer = null; }
  clearSelection();

  // Animate tiles sequentially
  path.forEach(function(id, idx) {
    setTimeout(function() {
      tiles[id].state = "selected";
      selectedPath = path.slice(0, idx + 1);
      renderAllTiles();
      updateAnswerArea();
    }, idx * 110);
  });

  // Auto-clear after 5 seconds (counted from when last tile illuminates)
  var clearAfter = (path.length * 110) + 5000;
  _highlightTimer = setTimeout(function() {
    _highlightTimer = null;
    clearSelection();
  }, clearAfter);
}

function doHint(free) {
  var targetWord = puzzle && puzzle.prevAnswers && puzzle.prevAnswers[0]
    ? puzzle.prevAnswers[0].word : "";
  if (!targetWord) { showToast("No hint available for this puzzle"); return; }

  var path = findWordPath(targetWord);
  if (!path || !path.length) { showToast("No hint available"); return; }

  // Pick first tile in path that's neutral and not already selected
  var selectedSet = new Set(selectedPath);
  var candidate = null;
  for (var i = 0; i < path.length; i++) {
    if (!selectedSet.has(path[i]) && tiles[path[i]] && tiles[path[i]].state === "neutral") {
      candidate = path[i];
      break;
    }
  }
  if (candidate === null) { showToast("All hint tiles already selected!"); return; }

  if (!free) {
    ticketCount = Math.max(0, ticketCount - 1);
    saveTickets();
    updateTicketDisplay();
    hintsUsed++;
    saveState();
  }

  pulseHintTile(candidate);
  showToast(free ? "Free hint — you've already found today's word!" : "Hint — next letter highlighted for 10 seconds");
}

function updateHintBtn() {
  var hintBtn = document.getElementById("hint-btn");
  if (!hintBtn) return;
  if (targetWordFound) {
    hintBtn.classList.add("hint-found");
    hintBtn.setAttribute("aria-label", "Hint (free — longest word already found)");
  } else {
    hintBtn.classList.remove("hint-found");
    hintBtn.setAttribute("aria-label", "Hint");
  }
}

function pulseHintTile(tileId) {
  var g = document.getElementById("tile-" + tileId);
  if (!g) return;
  var poly = g.querySelector("polygon:not(.hatch-overlay)");
  if (!poly) return;
  // CSS keyframe on the polygon element — smooth fill throb, works on iOS Safari
  poly.classList.add("tile-hint-poly");
  setTimeout(function() {
    poly.classList.remove("tile-hint-poly");
    renderTile(tiles[tileId]); // restore correct fill
  }, 5000);
}

function showHintModal() {
  if (ticketCount < 1) { showToast("Not enough tickets for a hint"); return; }
  confirmTicketSpend({
    title: "Use a Hint?",
    desc: "A hint will throb one letter from today's target word on the board for 10 seconds.",
    cost: 1,
  }, doHint);
}

// Generic ticket-spend confirmation — shows balance, cost, remainder
function confirmTicketSpend(opts, onConfirm) {
  var modal = document.getElementById("ticket-confirm-modal");
  if (!modal) { onConfirm(); return; }

  document.getElementById("ticket-confirm-title").textContent = opts.title || "Spend Tickets?";
  document.getElementById("ticket-confirm-desc").textContent  = opts.desc  || "";
  document.getElementById("tc-current").textContent = ticketCount;
  document.getElementById("tc-cost").textContent    = opts.cost;
  document.getElementById("tc-after").textContent   = Math.max(0, ticketCount - opts.cost);

  modal.hidden = false;

  var okBtn  = document.getElementById("ticket-confirm-ok");
  var canBtn = document.getElementById("ticket-confirm-cancel");
  var overlay = document.getElementById("ticket-confirm-overlay");

  function close() { modal.hidden = true; }

  // Clone to remove old listeners
  var okNew  = okBtn.cloneNode(true);
  var canNew = canBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(okNew, okBtn);
  canBtn.parentNode.replaceChild(canNew, canBtn);

  okNew.addEventListener("click", function() { close(); onConfirm(); });
  canNew.addEventListener("click", close);
  overlay.onclick = close;
}

function triggerHint() {
  var neutralTiles = tiles.filter(function(t) { return t.state === "neutral"; });
  if (neutralTiles.length < 2) return;
  var seed = neutralTiles[Math.floor(Math.random() * neutralTiles.length)];
  var chain = [seed];
  var seen = {};
  seen[seed.id] = true;
  for (var i = 0; i < 3; i++) {
    var last = chain[chain.length - 1];
    var adj = Array.from(adjacency[last.id] || []).filter(function(id) {
      return !seen[id] && tiles[id] && tiles[id].state === "neutral";
    });
    if (!adj.length) break;
    var next = tiles[adj[Math.floor(Math.random() * adj.length)]];
    seen[next.id] = true;
    chain.push(next);
  }
  chain.forEach(function(tile, idx) {
    var g = document.getElementById("tile-" + tile.id);
    if (!g) return;
    setTimeout(function() {
      g.classList.add("tile-hint");
      setTimeout(function() { g.classList.remove("tile-hint"); }, 1100);
    }, idx * 140);
  });
}

// ─── Info panel ───────────────────────────────────────────────────────────────
// ─── Sheet open / close ──────────────────────────────────────────────────────
// Maps internal tab name → bottom-nav data-panel value
var TAB_TO_NAV = { rules: "rules", scores: "scores", stats: "profile", settings: "settings" };
var PANEL_TITLES = { rules: "How to Play", scores: "Scores", stats: "Profile", settings: "Settings" };

function openSheet(tabName) {
  var sheet = document.getElementById("game-back");
  if (sheet) {
    if (tabName === "scores") {
      // Partial sheet: top sits 8px below the board, swipe up to expand
      var boardEl = document.getElementById("board-container");
      if (boardEl) {
        var rect = boardEl.getBoundingClientRect();
        sheet.style.top = (rect.bottom + 8 - 120) + "px";
      } else {
        sheet.style.top = "55%";
      }
      sheet.classList.remove("full-screen");
    } else {
      // Profile / Settings / Rules: always full screen
      sheet.style.top = "0px";
      sheet.classList.add("full-screen");
    }
    sheet.classList.add("open");
  }
  if (tabName) switchBackTab(tabName);
  // Update nav active state (rules tab stays on "play")
  var tabToNav = { scores: "scores", stats: "profile", settings: "settings" };
  var navPanel = tabToNav[tabName];
  if (navPanel) {
    document.querySelectorAll(".nav-btn").forEach(function(b) {
      b.classList.toggle("active", b.dataset.panel === navPanel);
    });
  }
}

function closeSheet() {
  var sheet = document.getElementById("game-back");
  if (sheet) {
    sheet.classList.remove("open");
    sheet.classList.remove("full-screen");
  }
  document.querySelectorAll(".nav-btn").forEach(function(b) {
    b.classList.toggle("active", b.dataset.panel === "play");
  });
}

function initInfoPanel() {
  // Word box reset (×) button
  var resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", clearSelection);

  // Accessible submit button (motor alternative to gesture)
  var submitBtn = document.getElementById("submit-btn");
  if (submitBtn) submitBtn.addEventListener("click", submitTappedWord);

  // Header buttons
  var menuBtn = document.getElementById("menu-btn");
  if (menuBtn) menuBtn.addEventListener("click", function() { openSheet("rules"); });

  var scoresBtn = document.getElementById("scores-btn");
  if (scoresBtn) scoresBtn.addEventListener("click", function() { openSheet("scores"); });

  var infoBtn = document.getElementById("info-btn");
  if (infoBtn) infoBtn.addEventListener("click", function() { openSheet("rules"); });

  // Bottom nav pill
  var NAV_TAB_MAP = { scores: "scores", profile: "stats", settings: "settings" };
  document.querySelectorAll(".nav-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var panel = btn.dataset.panel;
      if (panel === "play") { closeSheet(); return; }
      var tabName = NAV_TAB_MAP[panel];
      if (tabName) {
        openSheet(tabName);
        document.querySelectorAll(".nav-btn").forEach(function(b) {
          b.classList.toggle("active", b.dataset.panel === panel);
        });
      }
    });
  });

  // Action bar
  var undoBtn = document.getElementById("undo-btn");
  if (undoBtn) undoBtn.addEventListener("click", undoLastTile);

  var clearBtn = document.getElementById("clear-btn");
  if (clearBtn) clearBtn.addEventListener("click", clearBoard);

  var hintBtn = document.getElementById("hint-btn");
  if (hintBtn) hintBtn.addEventListener("click", function() {
    if (gameCompleted) return;
    if (targetWordFound) {
      doHint(true);  // free after the longest word has been found
    } else {
      showHintModal();
    }
  });

  // Ticket-spend confirmation modal (generic — wired via confirmTicketSpend())

  // Back / close button → close sheet
  var backBtn = document.getElementById("back-btn");
  if (backBtn) backBtn.addEventListener("click", closeSheet);

  // Sheet tab row
  document.querySelectorAll(".back-tab").forEach(function(btn) {
    btn.addEventListener("click", function() { switchBackTab(btn.dataset.tab); });
  });

  document.querySelectorAll(".locale-btn").forEach(function(btn) {
    btn.addEventListener("click", function() { setLocale(btn.dataset.locale); });
  });

  var statsSigninBtn = document.getElementById("stats-signin-btn");
  if (statsSigninBtn) statsSigninBtn.addEventListener("click", function() { showAuthModal("signup"); });

  var signoutBtn = document.getElementById("signout-btn");
  if (signoutBtn) signoutBtn.addEventListener("click", function() { fbSignOut(); });

  // Scores date button — tapping opens the calendar (same as board date)
  var lbDateBtn = document.getElementById("lb-date-btn");
  if (lbDateBtn) {
    lbDateBtn.addEventListener("click", function() {
      var openCal = window._openCalendar;
      if (openCal) openCal();
    });
  }

  // Add swipe navigation to scores tab (same day nav as board swipe)
  initScoresSwipe();

  // Board date navigation — synced with leaderboard date
  var boardPrevBtn = document.getElementById("board-date-prev");
  var boardNextBtn = document.getElementById("board-date-next");
  if (boardPrevBtn) boardPrevBtn.addEventListener("click", function() {
    if (browseOffset > -13) {
      browseOffset--;
      lbDayOffset = browseOffset;
      loadBoardForDate(getDateForOffset(browseOffset));
    }
  });
  if (boardNextBtn) boardNextBtn.addEventListener("click", function() {
    if (browseOffset < 0) {
      browseOffset++;
      lbDayOffset = browseOffset;
      loadBoardForDate(getDateForOffset(browseOffset));
    }
  });
}

// ─── Board date browsing ──────────────────────────────────────────────────────
function loadBoardForDate(ddmmyy) {
  const isToday = ddmmyy === getDateString();
  browsedDateStr = isToday ? null : ddmmyy;
  puzzle = isToday ? getTodaysPuzzle() : getPuzzleForDate(ddmmyy);

  // Reset game state for this date
  tiles = []; selectedPath = []; isDragging = false; playedPath = []; playedPathVisible = true; foundWords = [];
  bestScore = 0; bestWord = ""; gameCompleted = false;
  attemptCount = 0; validAttemptCount = 0; activeTimeMs = 0; timerRunning = false; timerLastStart = 0;
  inOneAchieved = false; targetWordFound = false;
  targetFoundMs = 0; targetFoundAttempts = 0;

  loadState();

  // Re-derive targetWordFound from persisted bestScore
  var _targetLen = (puzzle && puzzle.prevAnswers && puzzle.prevAnswers[0])
    ? puzzle.prevAnswers[0].word.length : 0;
  if (_targetLen > 0 && bestScore >= _targetLen) targetWordFound = true;

  let tileIndex = 0;
  for (let row = 0; row < ROW_SIZES.length; row++) {
    for (let col = 0; col < ROW_SIZES[row]; col++) {
      const letter = (puzzle.letters[tileIndex] !== undefined) ? puzzle.letters[tileIndex] : "";
      tiles.push(makeTile(tileIndex, row, col, letter));
      tileIndex++;
    }
  }
  adjacency = buildAdjacency();
  buildBoard();
  requestAnimationFrame(alignBoardControls);
  setTimeout(runBoardOpenAnimation, 100);

  // Restore played path tiles to indigo
  playedPath.forEach(function(id) { if (tiles[id]) tiles[id].state = "played"; });
  if (playedPath.length > 0) renderAllTiles();

  updateScoreDisplay(null);
  updateTicketDisplay();
  updateAnswerArea();
  updateShareBtn();
  updateHintBtn();
  updateDifficultyBadge();

  // Date display
  const dateEl = document.getElementById("puzzle-date");
  if (dateEl) dateEl.textContent = formatDateDisplay(ddmmyy);

  // Header label — "TODAY'S PUZZLE" for today, empty for past dates
  const labelEl = document.getElementById("header-label");
  if (labelEl) labelEl.textContent = isToday ? "TODAY'S PUZZLE" : "";

  // Prev/next arrows
  const prevBtn = document.getElementById("board-date-prev");
  const nextBtn = document.getElementById("board-date-next");
  if (prevBtn) prevBtn.disabled = browseOffset <= -13;
  if (nextBtn) nextBtn.disabled = browseOffset >= 0;

  if (!isToday) setTimeout(function() { showToast("You're viewing a past puzzle"); }, 800);

  // Restore word-area message based on loaded game state
  if (gameCompleted) {
    _cycleAttemptCount = attemptCount;
    setTimeout(startCyclingMessages, isToday ? 200 : 500);
  } else if (!isToday && bestScore > 0) {
    stopCyclingMessages();
    var promptEl = document.getElementById("game-prompt");
    if (promptEl) promptEl.textContent = "Keep going to find the longest word";
  } else {
    stopCyclingMessages();
  }
}

function populateAnswers(explicitDateStr) {
  // Now handled by buildScratchAnswers via the scores panel
  // This function is kept for backward compat but delegates to the scratchcard
  var section = document.getElementById("answers-section");
  if (section) section.hidden = true;
}

// ─── Word definition lookup ───────────────────────────────────────────────────
var defCache = {};

async function fetchDefinition(word) {
  var key = word.toLowerCase();
  if (defCache[key] !== undefined) return defCache[key];
  try {
    var resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + key);
    if (!resp.ok) { defCache[key] = null; return null; }
    var data = await resp.json();
    var meaning = data &&
      data[0] &&
      data[0].meanings &&
      data[0].meanings[0] &&
      data[0].meanings[0].definitions &&
      data[0].meanings[0].definitions[0];
    var def = meaning ? (meaning.definition || null) : null;
    defCache[key] = def;
    return def;
  } catch(_) {
    defCache[key] = null;
    return null;
  }
}

// ─── Firebase init ────────────────────────────────────────────────────────────
function initFirebase() {
  try {
    if (!FIREBASE_CONFIG.apiKey || typeof firebase === "undefined") return;
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    fbAuth = firebase.auth();
    if (typeof firebase.storage === "function") fbStorage = firebase.storage();
    fbAuth.onAuthStateChanged(handleAuthChange);
    // Apply server theme for all users — real-time so admin changes propagate live
    db.collection("config").doc("theme").onSnapshot(function(doc) {
      if (doc.exists) applyThemeData(doc.data());
    }, function() {}); // ignore permission errors for unauthenticated users
    // Load admin-configured cycling messages
    db.collection("config").doc("cycleMessages").get().then(function(doc) {
      if (doc.exists && Array.isArray(doc.data().messages) && doc.data().messages.length) {
        cycleMessages = doc.data().messages;
        saveCycleMessages(); // cache locally
        var ta = document.getElementById("admin-cycle-messages");
        if (ta) ta.value = cycleMessages.join("\n");
      }
    }).catch(function() {});
  } catch (e) {
    console.warn("Firebase init failed:", e.message);
  }
}

function handleAuthChange(user) {
  currentUser = user;
  updateUserBtn();
  updateAdminAccess();
  if (user) {
    loadUserData(user);
  } else {
    userProfile = null;
    renderStatsPanel();
  }
}

function showTesterResetModal(message, ticketAward, setAt) {
  var modal = document.getElementById("tester-reset-modal");
  if (!modal) return;
  var msgEl = document.getElementById("tester-reset-message");
  var btn   = document.getElementById("tester-reset-btn");
  if (msgEl) msgEl.textContent = message;
  if (btn) {
    btn.innerHTML = "Understood &nbsp;+" + ticketAward +
      ' <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:middle">' +
      '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>' +
      '</svg>';
    btn.onclick = function() {
      ticketCount += ticketAward;
      saveTickets();
      updateTicketDisplay();
      // Persist ticket count to user's own Firestore doc (always allowed)
      if (db && currentUser) {
        db.collection("users").doc(currentUser.uid).update({
          tickets: ticketCount,
        }).catch(function() {});
      }
      // Mark fully acknowledged and clean up the two-pass flag
      try {
        localStorage.setItem("testerReset_ackAt", String(setAt));
        localStorage.removeItem("testerReset_clearedAt");
      } catch(e) {}
      modal.hidden = true;
      showToast("+" + ticketAward + " tickets added. Thanks for your patience!");
    };
  }
  modal.hidden = false;
}

// Wipe all per-date game state from localStorage (shukuma-DDMMYY keys,
// unlocked-dates, and share-tracking). Called on tester reset before the
// modal appears so players see a clean slate immediately.
function clearLocalGameState() {
  var toRemove = [];
  for (var i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    if (!k) continue;
    if (/^shukuma-\d{6}$/.test(k)) toRemove.push(k);      // per-date state
    if (/^sharedToday-/.test(k))   toRemove.push(k);       // share tracking
  }
  toRemove.forEach(function(k) { localStorage.removeItem(k); });
  localStorage.removeItem("shukuma-unlocked-dates");
  localStorage.removeItem("shukuma-puzzle-version"); // force re-check on next load
}

// Check config/testerReset and show notice if not yet acknowledged.
// Two-pass flow to ensure the board renders fresh before the modal appears:
//   Pass 1 — detect unacknowledged reset: wipe localStorage, set clearedAt, reload
//   Pass 2 — after reload with empty localStorage: board renders fresh, show modal
async function checkTesterReset() {
  if (!db) return;
  try {
    var snap = await db.collection("config").doc("testerReset").get();
    if (!snap.exists) return;
    var data = snap.data();
    if (!data || !data.setAt) return;
    var setAt = data.setAt;

    // Already fully acknowledged — nothing to do
    var ackAt = localStorage.getItem("testerReset_ackAt");
    if (ackAt && Number(ackAt) >= setAt) return;

    // Pass 2: local state was already cleared on a previous load — show modal on fresh board
    var clearedAt = localStorage.getItem("testerReset_clearedAt");
    if (clearedAt && Number(clearedAt) >= setAt) {
      showTesterResetModal(
        data.message || "Howdy Tester! — Sorry, we've had to reset some data. Here's a bonus for your trouble.",
        data.ticketAward || 10,
        setAt
      );
      return;
    }

    // Pass 1: first detection — wipe all local game state then reload so the
    // board renders from scratch before we show the modal
    clearLocalGameState();
    localStorage.setItem("testerReset_clearedAt", String(setAt));
    window.location.reload();
  } catch(e) {
    // silently ignore — non-fatal
  }
}

// Sends notice only — writes to config/testerReset which all signed-in users
// can read on next load. Independent of score deletion so it always succeeds.
function sendTesterNotice() {
  if (!db) { showToast("No database."); return; }
  if (!confirm("Send a ‘+10 ticket’ notice to all testers? They will see it on next login.")) return;
  db.collection("config").doc("testerReset").set({
    message: "Howdy Tester! — Sorry, we’ve had to make some changes which means you’ve lost previous scores. Please try again and here is a bonus for your troubles.",
    ticketAward: 10,
    setAt: Date.now(),
  })
    .then(function() { showToast("Notice sent — testers will see it on next login."); })
    .catch(function(err) { showToast("Notice failed: " + (err && err.message ? err.message : String(err))); });
}

// Deletes ALL score documents — independent of notice so one failure doesn’t
// block the other. Score docs use field ‘date’ in DDMMYY format.
async function resetAllScores() {
  if (!db) { showToast("No database connection."); return; }
  if (!confirm("Delete ALL score records for ALL players? This cannot be undone.")) return;
  showToast("Deleting scores…");
  try {
    var snap = await db.collection("scores").get();
    if (snap.empty) { showToast("No score records found."); return; }
    var total = 0;
    var batch = db.batch();
    var batchCount = 0;
    for (var i = 0; i < snap.docs.length; i++) {
      batch.delete(snap.docs[i].ref);
      batchCount++;
      total++;
      if (batchCount === 499) {
        await batch.commit();
        batch = db.batch();
        batchCount = 0;
      }
    }
    if (batchCount > 0) await batch.commit();
    showToast("Deleted " + total + " score records.");
  } catch(e) {
    showToast("Score deletion failed: " + e.message);
  }
}

function updateAdminAccess() {
  var btn = document.getElementById("settings-admin-btn");
  if (btn) btn.hidden = !isAdmin();
  // Refresh palette list when admin signs in
  if (isAdmin()) {
    loadServerPalettes().then(function(palettes) { renderPaletteList(palettes); });
  }
}

// ─── Avatar / initials helpers ────────────────────────────────────────────────
function getInitials(profile) {
  var name = (profile && profile.displayName) || (profile && profile.username) || "?";
  var parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function renderAvatarEl(el, profile) {
  if (!el) return;
  var photoURL = profile && profile.photoURL;
  if (photoURL) {
    el.innerHTML = '<img src="' + escHtml(photoURL) + '" alt="Profile photo" class="avatar-photo">';
    el.style.background = "transparent";
  } else {
    el.textContent = getInitials(profile);
    el.style.background = "";
  }
}

function compressImage(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function(e) {
      var img = new Image();
      img.onerror = reject;
      img.onload = function() {
        var MAX = 128;
        var scale = Math.min(MAX / img.width, MAX / img.height, 1);
        var w = Math.round(img.width * scale) || 128;
        var h = Math.round(img.height * scale) || 128;
        var canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        canvas.toBlob(function(blob) {
          if (blob) resolve(blob); else reject(new Error("Compression failed"));
        }, "image/jpeg", 0.72);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function uploadAvatar(file) {
  if (!fbStorage || !currentUser || !db) throw new Error("Not ready");
  var blob = await compressImage(file);
  var ref = fbStorage.ref("avatars/" + currentUser.uid);
  await ref.put(blob, { contentType: "image/jpeg" });
  var url = await ref.getDownloadURL();
  await db.collection("users").doc(currentUser.uid).update({ photoURL: url });
  if (userProfile) userProfile.photoURL = url;
  return url;
}

async function deleteAvatar() {
  if (!fbStorage || !currentUser || !db) return;
  try { await fbStorage.ref("avatars/" + currentUser.uid).delete(); } catch (e) {}
  await db.collection("users").doc(currentUser.uid).update({ photoURL: null });
  if (userProfile) userProfile.photoURL = null;
}

async function checkUsernameAvailable(username) {
  if (!db) return true;
  var snap = await db.collection("users")
    .where("usernameLower", "==", username.toLowerCase())
    .limit(1).get();
  return snap.empty;
}

// ─── Sign up / in / out ───────────────────────────────────────────────────────
async function fbSignUp(username, displayName, email, password) {
  if (!fbAuth || !db) throw new Error("Firebase not configured");
  const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
  const uid = cred.user.uid;
  await db.collection("users").doc(uid).set({
    uid,
    username: username.trim(),
    usernameLower: username.trim().toLowerCase(),
    displayName: (displayName || "").trim(),
    email,
    photoURL: null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    stats: { totalGames: 0, totalScore: 0, bestScore: 0, bestWord: "", currentStreak: 0, bestStreak: 0, lastPlayedDate: "" },
    badges: {},
    tickets: 10,
  });
  // Send email verification
  try { await cred.user.sendEmailVerification(); } catch (e) {}
  // Welcome bonus — 10 tickets for new registrations
  ticketCount += 10;
  saveTickets();
  updateTicketDisplay();
  return cred.user;
}

async function fbSignIn(email, password) {
  if (!fbAuth) throw new Error("Firebase not configured");
  const cred = await fbAuth.signInWithEmailAndPassword(email, password);
  return cred.user;
}

async function fbSignInGoogle() {
  if (!fbAuth) throw new Error("Firebase not configured");
  const provider = new firebase.auth.GoogleAuthProvider();
  const cred = await fbAuth.signInWithPopup(provider);
  if (cred.additionalUserInfo && cred.additionalUserInfo.isNewUser) {
    const uid = cred.user.uid;
    const gName = cred.user.displayName || "Player";
    const gUsername = gName.toLowerCase().replace(/\s+/g, "").slice(0, 20);
    await db.collection("users").doc(uid).set({
      uid,
      username: gUsername,
      usernameLower: gUsername.toLowerCase(),
      displayName: gName,
      email: cred.user.email,
      photoURL: cred.user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      stats: { totalGames: 0, totalScore: 0, bestScore: 0, bestWord: "", currentStreak: 0, bestStreak: 0, lastPlayedDate: "" },
      badges: {},
      tickets: 10,
    });
    ticketCount += 10;
    saveTickets();
    updateTicketDisplay();
  }
  return cred.user;
}

async function fbSignOut() {
  if (fbAuth) await fbAuth.signOut();
}

// ─── Load user profile ────────────────────────────────────────────────────────
async function loadUserData(user) {
  if (!db) return;
  try {
    const snap = await db.collection("users").doc(user.uid).get();
    if (snap.exists) {
      userProfile = snap.data();
      // Back-fill usernameLower for existing accounts that predate the field
      if (userProfile.username && !userProfile.usernameLower) {
        db.collection("users").doc(user.uid).update({ usernameLower: userProfile.username.toLowerCase() }).catch(function() {});
        userProfile.usernameLower = userProfile.username.toLowerCase();
      }
      checkTesterReset();
    } else {
      const fallbackUsername = (user.displayName || user.email.split("@")[0]).toLowerCase().replace(/\s+/g, "").slice(0, 20);
      const d = {
        uid: user.uid,
        username: fallbackUsername,
        usernameLower: fallbackUsername.toLowerCase(),
        displayName: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        stats: { totalGames: 0, totalScore: 0, bestScore: 0, bestWord: "", currentStreak: 0, bestStreak: 0, lastPlayedDate: "" },
        badges: {},
      };
      await db.collection("users").doc(user.uid).set(d);
      userProfile = d;
    }
    renderStatsPanel();
    // Handle friend invite link
    var urlParams = new URLSearchParams(window.location.search);
    var friendUid = urlParams.get("friend");
    if (friendUid && friendUid !== user.uid) {
      var alreadyFriends = (userProfile && userProfile.friends && userProfile.friends.includes(friendUid));
      if (!alreadyFriends) {
        setTimeout(function() { handleFriendInvite(friendUid); }, 1000);
      }
    }
  } catch (e) {
    console.warn("loadUserData:", e.message);
  }
}

// ─── Score submission ─────────────────────────────────────────────────────────
function getYesterdayDateStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return String(d.getDate()).padStart(2,"0") + String(d.getMonth()+1).padStart(2,"0") + String(d.getFullYear()).slice(-2);
}

async function submitScore() {
  if (!db || !currentUser || bestScore === 0) return;
  if (browsedDateStr) return; // never save scores for past-game browse mode
  const dateStr = getDateString();
  const scoreDocId = currentUser.uid + "_" + dateStr;
  try {
    const scoreRef = db.collection("scores").doc(scoreDocId);
    const existing = await scoreRef.get();
    if (existing.exists && existing.data().score >= bestScore) return;

    const username = (userProfile && userProfile.username) || currentUser.displayName || "Player";
    const level = getScoreLevel(bestScore);
    const prevStreak = (userProfile && userProfile.stats && userProfile.stats.currentStreak) || 0;
    const lastDate   = (userProfile && userProfile.stats && userProfile.stats.lastPlayedDate) || "";
    const yesterday  = getYesterdayDateStr();
    const streak = (lastDate === yesterday) ? prevStreak + 1 : (lastDate === dateStr ? prevStreak : 1);
    const bestStreakSoFar = Math.max(streak, (userProfile && userProfile.stats && userProfile.stats.bestStreak) || 0);
    const totalGamesNow  = ((userProfile && userProfile.stats && userProfile.stats.totalGames) || 0) + (existing.exists ? 0 : 1);
    const elapsed = timerRunning ? activeTimeMs + (Date.now() - timerLastStart) : activeTimeMs;
    // Use snapshot values for "time/tries to find" in the score doc; fall back to totals if target not yet found
    const scoreTimeMs  = targetFoundMs  > 0 ? targetFoundMs  : elapsed;
    const scoreAttempts = targetFoundAttempts > 0 ? targetFoundAttempts : attemptCount;

    const batch = db.batch();
    batch.set(scoreRef, {
      uid: currentUser.uid, username, date: dateStr, puzzleId: puzzle.id,
      score: bestScore, word: bestWord, level,
      attempts: scoreAttempts,
      validAttempts: validAttemptCount,
      timeSpent: Math.round(scoreTimeMs / 1000),
      submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const userRef = db.collection("users").doc(currentUser.uid);
    const upd = { "stats.lastPlayedDate": dateStr, "stats.currentStreak": streak, "stats.bestStreak": bestStreakSoFar };
    if (!existing.exists) {
      upd["stats.totalGames"] = firebase.firestore.FieldValue.increment(1);
      upd["stats.totalScore"] = firebase.firestore.FieldValue.increment(bestScore);
      upd["stats.totalWords"] = firebase.firestore.FieldValue.increment(validAttemptCount);
      upd["stats.totalTimeSecs"] = firebase.firestore.FieldValue.increment(Math.round(elapsed / 1000));
    }
    if (bestScore > ((userProfile && userProfile.stats && userProfile.stats.bestScore) || 0)) { upd["stats.bestScore"] = bestScore; upd["stats.bestWord"] = bestWord; }
    batch.update(userRef, upd);

    const levelKey = level.toLowerCase().replace(/[- ]/g, "");
    batch.set(db.collection("puzzleStats").doc(dateStr), { totalPlayers: firebase.firestore.FieldValue.increment(1), ["groups." + levelKey]: firebase.firestore.FieldValue.increment(1) }, { merge: true });

    await batch.commit();

    const newBadges = computeNewBadges(bestScore, streak, totalGamesNow, (userProfile && userProfile.badges) || {});
    for (const bid of newBadges) {
      await db.collection("users").doc(currentUser.uid).update({ ["badges." + bid]: firebase.firestore.FieldValue.serverTimestamp() });
      showBadgeToast(bid);
    }
    await loadUserData(currentUser);
  } catch (e) {
    console.warn("submitScore:", e.message);
  }
}

// ─── Leaderboard ─────────────────────────────────────────────────────────────
let lbFilter = "date";
let lbDayOffset = 0; // 0 = today, -1 = yesterday, etc.

function updateLbDateNav() {
  var labelEl = document.getElementById("lb-date-label");
  if (!labelEl) return;
  var dateStr = getDateForOffset(lbDayOffset);
  labelEl.textContent = lbDayOffset === 0 ? "Today" : formatDateDisplay(dateStr);
}

async function loadLeaderboard(filter) {
  lbFilter = "date";
  var displayDate = getDateForOffset(lbDayOffset);
  var displayPuz  = getPuzzleForDate(displayDate);
  var isToday     = lbDayOffset === 0;

  updateLbDateNav();

  // Render scratchcard immediately with loading skeleton (no auth needed)
  buildScratchAnswers(displayPuz ? displayPuz.prevAnswers : [], {}, isToday, 0, true);
  buildPlayersSection([], "");

  if (!db) return;

  try {
    var snap = await db.collection("scores").where("date", "==", displayDate).get();
    var allDocs = snap.docs.map(function(d) { return d.data(); })
      .sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    var playersByWord = {};
    allDocs.forEach(function(d) {
      var w = (d.word || "").toUpperCase();
      if (!playersByWord[w]) playersByWord[w] = [];
      playersByWord[w].push(d);
    });

    var targetWord = displayPuz && displayPuz.prevAnswers && displayPuz.prevAnswers[0]
      ? displayPuz.prevAnswers[0].word.toUpperCase() : "";

    if (displayPuz) buildScratchAnswers(displayPuz.prevAnswers, playersByWord, isToday, allDocs.length, false);
    buildPlayersSection(allDocs, targetWord);
  } catch (e) {
    console.warn("loadLeaderboard:", e.message);
  }
}

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, function(c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; });
}

// ─── Scratchcard answers (v1.9.4) ─────────────────────────────────────────────
var AVATAR_COLORS = ["#7c4dff","#ef4444","#22c55e","#f97316","#3b82f6","#ec4899","#0ea5e9","#a855f7"];

function buildScratchAnswers(answers, playersByWord, isToday, totalPlayers, loading) {
  var container = document.getElementById("scratchcard-list");
  if (!container) return;
  container.innerHTML = "";

  // All valid words ≥ 4 letters from this puzzle
  var allWords = (answers || []).filter(function(a) { return (a.word || "").length >= 4; })
    .slice().sort(function(a, b) { return b.word.length - a.word.length; });

  // Merge in any words the user found today that aren't in the pre-stored list
  if (isToday) {
    var inList = new Set(allWords.map(function(a) { return a.word.toUpperCase(); }));
    foundWords.forEach(function(w) {
      var wu = w.toUpperCase();
      if (!inList.has(wu)) {
        allWords.push({ word: wu, pct: -1 });
        inList.add(wu);
      }
    });
    allWords.sort(function(a, b) { return b.word.length - a.word.length; });
  }

  var dateKey = getDateForOffset(lbDayOffset);

  // Build myFound set (today = live, past = from localStorage)
  var myFound;
  if (isToday) {
    myFound = new Set(foundWords.map(function(w) { return w.toUpperCase(); }));
  } else {
    myFound = new Set();
    try {
      var raw = localStorage.getItem("shukuma-" + dateKey);
      if (raw) {
        var s = JSON.parse(raw);
        (s.foundWords || []).forEach(function(w) { myFound.add(w.toUpperCase()); });
        if (s.bestWord) myFound.add(s.bestWord.toUpperCase());
      }
    } catch(_) {}
  }

  // Longest (target) word
  var targetWord = allWords.length > 0 ? allWords[0].word.toUpperCase() : "";

  // Has the user paid to reveal the longest word for this date?
  var revealedTarget = !!(revealedLongestByDate && revealedLongestByDate[dateKey]);

  // ── Sort controls ────────────────────────────────────────────────
  var sortBar = document.createElement("div");
  sortBar.className = "wl-sort-bar";
  var sortIcon = document.createElement("span");
  sortIcon.className = "wl-sort-icon";
  sortIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M7 12h10M11 18h2"/></svg>';
  sortBar.appendChild(sortIcon);
  var sortSelect = document.createElement("select");
  sortSelect.className = "wl-sort-select";
  sortSelect.setAttribute("aria-label", "Sort words by");
  [
    { key: "length-desc", label: "Longest first" },
    { key: "length-asc",  label: "Shortest first" },
    { key: "pct-desc",    label: "Most found first" },
    { key: "pct-asc",     label: "Least found first" },
  ].forEach(function(s) {
    var opt = document.createElement("option");
    opt.value = s.key;
    opt.textContent = s.label;
    if (wlSortMode === s.key) opt.selected = true;
    sortSelect.appendChild(opt);
  });
  (function(ans, pbw, it, tp) {
    sortSelect.addEventListener("change", function() {
      wlSortMode = sortSelect.value;
      buildScratchAnswers(ans, pbw, it, tp, false);
    });
  })(answers, playersByWord, isToday, totalPlayers);
  sortBar.appendChild(sortSelect);
  container.appendChild(sortBar);

  if (allWords.length === 0) {
    var empty = document.createElement("div");
    empty.className = "sc-empty";
    empty.textContent = "No words available for this puzzle.";
    container.appendChild(empty);
    return;
  }

  // ── Apply sort ───────────────────────────────────────────────────
  var sorted = allWords.slice();
  if (wlSortMode === "length-asc") {
    sorted.sort(function(a, b) { return a.word.length - b.word.length; });
  } else if (wlSortMode === "pct-desc" || wlSortMode === "pct-asc") {
    sorted.sort(function(a, b) {
      var wa = a.word.toUpperCase(), wb = b.word.toUpperCase();
      var pa = totalPlayers > 0 ? (playersByWord[wa] || []).length : 0;
      var pb = totalPlayers > 0 ? (playersByWord[wb] || []).length : 0;
      return wlSortMode === "pct-desc" ? pb - pa : pa - pb;
    });
  }

  // ── Render each word ─────────────────────────────────────────────
  sorted.forEach(function(a) {
    var wu = a.word.toUpperCase();
    var isFound = myFound.has(wu);
    var isTarget = wu === targetWord;
    var isRevealedWord = isTarget && revealedTarget && !isFound;
    var count = totalPlayers > 0 ? (playersByWord[wu] || []).length : 0;
    var pct = totalPlayers > 0 ? Math.round((count / totalPlayers) * 100) : -1;
    var row = buildWordRow({
      word: wu, found: isFound, isTarget: isTarget, revealed: isRevealedWord,
      pct: pct, totalPlayers: totalPlayers, isToday: isToday, loading: !!loading,
      answers: answers, playersByWord: playersByWord, dateKey: dateKey,
    });
    container.appendChild(row);
  });
}

function buildWordRow(cfg) {
  var word = cfg.word, found = cfg.found, isTarget = cfg.isTarget;
  var revealed = cfg.revealed; // paid to reveal (target only, not yet found)
  var pct = cfg.pct, totalPlayers = cfg.totalPlayers, loading = cfg.loading;
  var isToday = cfg.isToday, answers = cfg.answers, playersByWord = cfg.playersByWord, dateKey = cfg.dateKey;
  var locked = !found && !revealed;

  var row = document.createElement("div");
  row.className = "wl-row" + (locked ? " wl-locked" : "") + (found ? " wl-found" : "") + (revealed && !found ? " wl-revealed" : "");

  // ── LEFT column ──────────────────────────────────────────────────
  var leftCol = document.createElement("div");
  leftCol.className = "wl-left";

  var wordEl = document.createElement("div");
  wordEl.className = "wl-word";
  if (locked) {
    wordEl.textContent = word; // CSS blur hides it visually; screen reader gets aria-label
    wordEl.setAttribute("aria-label", word.length + "-letter word, hidden");
  } else {
    wordEl.textContent = word;
    if (revealed && !found) {
      var revTag = document.createElement("span");
      revTag.className = "wl-tag wl-tag-revealed";
      revTag.textContent = "Revealed";
      wordEl.appendChild(revTag);
    }
  }
  leftCol.appendChild(wordEl);

  // Stats subrow (found or revealed words)
  if (found || revealed) {
    var statsDiv = document.createElement("div");
    statsDiv.className = "wl-stats";

    var rankSpan = document.createElement("span");
    rankSpan.className = "wl-stats-muted";
    rankSpan.textContent = getScoreLevel(word.length);
    statsDiv.appendChild(rankSpan);

    // Extra stats for today's target word that the user found (not revealed)
    if (isToday && isTarget && found && !revealed) {
      if (attemptCount > 0) {
        statsDiv.appendChild(document.createTextNode(" · "));
        var trSpan = document.createElement("span");
        trSpan.className = "wl-stats-muted";
        trSpan.textContent = attemptCount + " tr" + (attemptCount !== 1 ? "ies" : "y");
        statsDiv.appendChild(trSpan);
      }
      var elapsed = timerRunning ? activeTimeMs + (Date.now() - timerLastStart) : activeTimeMs;
      if (elapsed > 0) {
        statsDiv.appendChild(document.createTextNode(" · "));
        var tmSpan = document.createElement("span");
        tmSpan.className = "wl-stats-muted";
        tmSpan.textContent = formatTime(Math.round(elapsed / 1000));
        statsDiv.appendChild(tmSpan);
      }
      if (hintsUsed > 0) {
        statsDiv.appendChild(document.createTextNode(" · "));
        var htSpan = document.createElement("span");
        htSpan.className = "wl-stats-muted";
        htSpan.textContent = hintsUsed + " hint" + (hintsUsed !== 1 ? "s" : "");
        statsDiv.appendChild(htSpan);
      }
    }

    leftCol.appendChild(statsDiv);
  }

  // Reveal button (locked target word, today only)
  if (locked && isTarget && isToday) {
    var revealRow = document.createElement("div");
    revealRow.className = "wl-reveal-row";
    var revealBtn = document.createElement("button");
    revealBtn.className = "wl-reveal-btn";
    revealBtn.innerHTML = 'Reveal · <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg> 10 tickets';
    (function(dk, ans, pbw, tp) {
      revealBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (ticketCount < 10) { showToast("Not enough tickets to reveal the longest word"); return; }
        confirmTicketSpend({
          title: "Reveal Longest Word?",
          desc: "Spend 10 tickets to reveal today's longest word. You won't be able to score it afterward.",
          cost: 10,
        }, function() {
          ticketCount = Math.max(0, ticketCount - 10);
          saveTickets();
          updateTicketDisplay();
          revealedLongestByDate[dk] = true;
          saveRevealedLongest();
          buildScratchAnswers(ans, pbw, true, tp);
        });
      });
    })(dateKey, answers, playersByWord, totalPlayers);
    revealRow.appendChild(revealBtn);
    leftCol.appendChild(revealRow);
  }


  // ── BAR + PCT — direct grid children (columns 2 & 3) ────────────
  var barTrack = document.createElement("div");
  barTrack.className = "wl-bar-track";
  var barFill = document.createElement("div");
  if (loading) {
    barFill.className = "wl-bar-fill wl-bar-loading";
  } else {
    barFill.className = "wl-bar-fill" + (found ? " wl-bar-found" : "");
    barFill.style.width = (pct >= 0 ? Math.max(4, pct) : 0) + "%";
  }
  barTrack.appendChild(barFill);

  var pctEl = document.createElement("span");
  if (loading) {
    pctEl.className = "wl-pct wl-pct-loading";
    pctEl.textContent = "00%"; // invisible placeholder for layout
    pctEl.setAttribute("aria-hidden", "true");
  } else {
    pctEl.className = "wl-pct";
    if (pct >= 0) {
      pctEl.textContent = pct + "%";
      pctEl.title = pct + "% of players found this word";
    } else {
      pctEl.textContent = "—";
      pctEl.title = "No data for this day";
    }
  }

  row.appendChild(leftCol);
  row.appendChild(barTrack);
  row.appendChild(pctEl);

  // Tap unlocked word → show/hide definition
  if (!locked) {
    (function(w, r) {
      row.addEventListener("click", function() { toggleWordDefinition(w, r); });
    })(word, row);
  }

  return row;
}

function toggleWordDefinition(word, rowEl) {
  var existing = rowEl.nextElementSibling;
  if (existing && existing.classList.contains("wl-def-panel")) {
    existing.remove();
    return;
  }
  var panel = document.createElement("div");
  panel.className = "wl-def-panel";
  panel.textContent = "Loading…";
  rowEl.parentNode.insertBefore(panel, rowEl.nextSibling);

  var cached = _defCache[word];
  if (cached) { panel.innerHTML = cached; return; }

  var key = word.toLowerCase();
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(key))
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!Array.isArray(data) || !data[0]) throw new Error("no data");
      var html = "";
      (data[0].meanings || []).slice(0, 2).forEach(function(m) {
        var def = m.definitions && m.definitions[0] ? m.definitions[0].definition : "";
        if (def) html += '<div class="wl-def-entry"><span class="wl-def-pos">' + escHtml(m.partOfSpeech) + '</span> ' + escHtml(def) + '</div>';
      });
      if (!html) html = '<em>No definition found.</em>';
      _defCache[word] = html;
      if (panel.parentNode) panel.innerHTML = html;
    })
    .catch(function() {
      var html = '<em>Could not load definition.</em>';
      _defCache[word] = html;
      if (panel.parentNode) panel.innerHTML = html;
    });
}

function buildPlayersSection(players, targetWord) {
  var container = document.getElementById("scores-players");
  if (!container) return;
  container.innerHTML = "";

  var isToday = lbDayOffset === 0;

  // ── My Stats card (today only, when the user has played) ─────────
  if (isToday && currentUser && bestScore > 0) {
    var myCard = document.createElement("div");
    myCard.className = "my-stats-card";
    var myHdr = document.createElement("div");
    myHdr.className = "my-stats-hdr";
    myHdr.textContent = "Your Score Today";
    myCard.appendChild(myHdr);
    var myGrid = document.createElement("div");
    myGrid.className = "my-stats-grid";
    var elapsed = timerRunning ? activeTimeMs + (Date.now() - timerLastStart) : activeTimeMs;
    var myCells = [
      { val: bestWord || "—", lbl: "Best Word" },
      { val: getScoreLevel(bestScore), lbl: "Ranking" },
      { val: (targetWordFound ? targetFoundAttempts : attemptCount) || "—", lbl: targetWordFound ? "Tries to Find" : "Tries so far" },
      { val: formatTime(Math.round((targetWordFound ? targetFoundMs : elapsed) / 1000)), lbl: targetWordFound ? "Time to Find" : "Time so far" },
    ];
    if (hintsUsed > 0) myCells.push({ val: hintsUsed, lbl: "Hints Used" });
    myCells.forEach(function(s) {
      var cell = document.createElement("div");
      cell.className = "my-stats-cell";
      cell.innerHTML = '<span class="my-stat-val">' + escHtml(String(s.val)) + '</span><span class="my-stat-lbl">' + escHtml(s.lbl) + '</span>';
      myGrid.appendChild(cell);
    });
    myCard.appendChild(myGrid);
    container.appendChild(myCard);
  }

  // ── Friends section (today only) ─────────────────────────────────
  if (isToday && targetWord && currentUser && userProfile && userProfile.friends && userProfile.friends.length > 0) {
    var myFriendUids = userProfile.friends;
    var friendsWhoFound = (players || []).filter(function(p) {
      return myFriendUids.indexOf(p.uid) !== -1 && (p.word || "").toUpperCase() === targetWord.toUpperCase();
    });
    var friendsNotFound = (players || []).filter(function(p) {
      return myFriendUids.indexOf(p.uid) !== -1 && (p.word || "").toUpperCase() !== targetWord.toUpperCase();
    });

    if (friendsWhoFound.length > 0 || friendsNotFound.length > 0) {
      var friendHdr = document.createElement("div");
      friendHdr.className = "friends-found-hdr";
      friendHdr.textContent = "Friends";
      container.appendChild(friendHdr);

      if (friendsWhoFound.length > 0) {
        var foundSub = document.createElement("div");
        foundSub.className = "friends-found-sublabel";
        foundSub.textContent = "Found today's word";
        container.appendChild(foundSub);
        friendsWhoFound.forEach(function(p, i) {
          var color = AVATAR_COLORS[i % AVATAR_COLORS.length];
          var row = document.createElement("div");
          row.className = "player-row";
          row.innerHTML =
            '<div class="player-avatar" style="background:' + color + '">' + (p.username || "?").charAt(0).toUpperCase() + '</div>' +
            '<div class="player-info"><div class="player-name">' + escHtml(p.username || "Player") + '</div></div>' +
            '<div class="player-right"><span class="player-found-badge">Found it!</span></div>';
          container.appendChild(row);
        });
      }

      if (friendsNotFound.length > 0) {
        var notFoundSub = document.createElement("div");
        notFoundSub.className = "friends-found-sublabel";
        notFoundSub.textContent = "Still playing";
        container.appendChild(notFoundSub);
        friendsNotFound.forEach(function(p, i) {
          var color = AVATAR_COLORS[i % AVATAR_COLORS.length];
          var row = document.createElement("div");
          row.className = "player-row";
          row.innerHTML =
            '<div class="player-avatar" style="background:' + color + '">' + (p.username || "?").charAt(0).toUpperCase() + '</div>' +
            '<div class="player-info"><div class="player-name">' + escHtml(p.username || "Player") + '</div></div>' +
            '<div class="player-right">' +
              '<button class="player-hint-btn">Send hint · <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg> 2</button>' +
            '</div>';
          (function(player) {
            row.querySelector(".player-hint-btn").addEventListener("click", function(e) {
              e.stopPropagation();
              sendHintToPlayer(player);
            });
          })(p);
          container.appendChild(row);
        });

        if (friendsNotFound.length > 1) {
          var totalCost = friendsNotFound.length * 2;
          var sendAllRow = document.createElement("div");
          sendAllRow.className = "friends-send-all-row";
          var sendAllBtn = document.createElement("button");
          sendAllBtn.className = "friends-send-all-btn";
          sendAllBtn.innerHTML = 'Send hint to all ' + friendsNotFound.length + ' · <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg> ' + totalCost;
          (function(fnf, cost) {
            sendAllBtn.addEventListener("click", function() {
              if (ticketCount < cost) { showToast("Not enough tickets"); return; }
              confirmTicketSpend({
                title: "Send hint to all?",
                desc: "Send a hint to all " + fnf.length + " friends still playing. Costs " + cost + " tickets.",
                cost: cost,
              }, function() {
                ticketCount = Math.max(0, ticketCount - cost);
                saveTickets();
                updateTicketDisplay();
                fnf.forEach(function(p) { showToast("Hint sent to " + (p.username || "Player") + "!"); });
                // TODO: write hint notifications to Firestore for each recipient
              });
            });
          })(friendsNotFound, totalCost);
          sendAllRow.appendChild(sendAllBtn);
          container.appendChild(sendAllRow);
        }
      }
    }
  }

  if (!players || !players.length) {
    var empty = document.createElement("div");
    empty.className = "scores-empty";
    if (isToday) {
      empty.textContent = currentUser && bestScore > 0
        ? "Your score has been recorded. Check back later to see how others compare!"
        : "No scores yet today — find the longest word to get on the board!";
    } else {
      empty.textContent = "No scores were recorded for this day.";
    }
    container.appendChild(empty);
    return;
  }

  // ── Community scores ─────────────────────────────────────────────
  var hdr = document.createElement("div");
  hdr.className = "scores-players-hdr";
  hdr.textContent = "How Everyone Did";
  container.appendChild(hdr);

  players.forEach(function(p, i) {
    var row = document.createElement("div");
    row.className = "player-row";

    var color = AVATAR_COLORS[i % AVATAR_COLORS.length];
    var initials = (p.username || "?").charAt(0).toUpperCase();
    var foundTarget = targetWord && (p.word || "").toUpperCase() === targetWord.toUpperCase();
    var timeStr = p.timeSpent ? formatTime(p.timeSpent) : null;
    var wrongAtt = Math.max(0, (p.attempts || 0) - (p.validAttempts || 0));

    var metaParts = [];
    if (timeStr) metaParts.push(timeStr);
    if (p.attempts !== undefined) metaParts.push((p.validAttempts || 0) + "✓ / " + wrongAtt + "✗");

    row.innerHTML =
      '<div class="player-avatar" style="background:' + color + '">' + initials + '</div>' +
      '<div class="player-info">' +
        '<div class="player-name">' + escHtml(p.username || "Player") + '</div>' +
        '<div class="player-best-word">' + escHtml((p.word || "—").toUpperCase()) + '</div>' +
        (metaParts.length ? '<div class="player-meta">' + metaParts.join(" · ") + '</div>' : '') +
      '</div>' +
      '<div class="player-right">' +
        '<span class="player-score-badge">' + (p.score || 0) + ' letters</span>' +
        (foundTarget ? '<span class="player-found-badge">Found it!</span>' : '') +
      '</div>';

    container.appendChild(row);
  });
}

function sendHintToPlayer(player) {
  if (ticketCount < 1) { showToast("Not enough tickets to send a hint"); return; }
  confirmTicketSpend({
    title: "Send Hint?",
    desc: "Send " + escHtml(player.username || "Player") + " a hint for today's word.",
    cost: 1,
  }, function() {
    ticketCount = Math.max(0, ticketCount - 1);
    saveTickets();
    updateTicketDisplay();
    showToast("Hint sent to " + (player.username || "Player") + "!");
    // TODO: write hint notification to Firestore for recipient
  });
}

function openPlayerModal(players, wordTitle) {
  var modal  = document.getElementById("player-modal");
  var wordEl = document.getElementById("player-modal-word");
  var body   = document.getElementById("player-modal-body");
  if (!modal || !body) return;

  if (wordEl) wordEl.textContent = wordTitle || "";
  body.innerHTML = "";

  var sorted = players.slice().sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

  sorted.forEach(function(p, i) {
    var rank       = i + 1;
    var wrongAtt   = Math.max(0, (p.attempts || 0) - (p.validAttempts || 0));
    var metaParts  = [];
    if (p.validAttempts !== undefined) {
      metaParts.push(p.validAttempts + " ✓ / " + wrongAtt + " ✗");
    }
    if (p.timeSpent) metaParts.push(formatTime(p.timeSpent));
    var color = AVATAR_COLORS[i % AVATAR_COLORS.length];

    var row = document.createElement("div");
    row.className = "pm-row";
    row.innerHTML =
      '<span class="pm-rank' + (rank <= 3 ? " pm-top3" : "") + '">' + rank + "</span>" +
      '<div class="pm-avatar" style="background:' + color + '">' + (p.username || "?").charAt(0).toUpperCase() + "</div>" +
      '<div class="pm-info">' +
        '<div class="pm-name">' + escHtml(p.username || "Player") + "</div>" +
        (metaParts.length ? '<div class="pm-meta">' + metaParts.join(" · ") + "</div>" : "") +
      "</div>" +
      '<span class="pm-word">' + escHtml(p.word || "") + "</span>";

    row.addEventListener("click", function() {
      openPlayerProfile(p, color);
    });
    body.appendChild(row);
  });

  modal.hidden = false;
}

function openPlayerProfile(player, color) {
  var modal = document.getElementById("player-profile-modal");
  var body  = document.getElementById("ppm-body");
  var title = document.getElementById("ppm-title");
  if (!modal || !body) return;

  if (title) title.textContent = (player.username || "Player") + "'s Profile";

  var initials  = (player.username || "?").charAt(0).toUpperCase();
  var wrongAtt  = Math.max(0, (player.attempts || 0) - (player.validAttempts || 0));
  var timeStr   = player.timeSpent ? formatTime(player.timeSpent) : "—";
  var wordStr   = (player.word || "—").toUpperCase();

  body.innerHTML =
    '<div class="ppm-avatar-lg" style="background:' + (color || "#7c4dff") + '">' + initials + "</div>" +
    '<div class="ppm-name">' + escHtml(player.username || "Player") + "</div>" +
    '<div class="ppm-stats-grid">' +
      '<div class="ppm-stat-box"><div class="ppm-stat-val">' + wordStr + '</div><div class="ppm-stat-lbl">Best Word</div></div>' +
      '<div class="ppm-stat-box"><div class="ppm-stat-val">' + (player.score || 0) + '</div><div class="ppm-stat-lbl">Letters</div></div>' +
      '<div class="ppm-stat-box"><div class="ppm-stat-val">' + (player.validAttempts !== undefined ? player.validAttempts : "—") + '</div><div class="ppm-stat-lbl">Words Found</div></div>' +
      '<div class="ppm-stat-box"><div class="ppm-stat-val">' + timeStr + '</div><div class="ppm-stat-lbl">Time Taken</div></div>' +
    "</div>";

  modal.hidden = false;
}

function initPlayerModals() {
  var pm        = document.getElementById("player-modal");
  var pmClose   = document.getElementById("player-modal-close");
  var pmOverlay = document.getElementById("player-modal-overlay");
  function closePlayerModal() { if (pm) pm.hidden = true; }
  if (pmClose)   pmClose.addEventListener("click", closePlayerModal);
  if (pmOverlay) pmOverlay.addEventListener("click", closePlayerModal);

  var ppm       = document.getElementById("player-profile-modal");
  var ppmClose  = document.getElementById("ppm-close");
  var ppmBack   = document.getElementById("ppm-back");
  var ppmOverlay = document.getElementById("ppm-overlay");
  function closeProfileModal() { if (ppm) ppm.hidden = true; }
  function backToPlayers()     { closeProfileModal(); if (pm) pm.hidden = false; }
  if (ppmClose)   ppmClose.addEventListener("click", closeProfileModal);
  if (ppmOverlay) ppmOverlay.addEventListener("click", closeProfileModal);
  if (ppmBack)    ppmBack.addEventListener("click", backToPlayers);
}

// ─── Admin theme helpers ───────────────────────────────────────────────────────
function applyThemeData(data) {
  if (!data) return;
  // css contains ALL vars — both --xxx (light) and --dk-xxx (dark counterparts).
  // Both live on :root, so a single loop handles them all.
  if (data.css) {
    Object.keys(data.css).forEach(function(k) {
      document.documentElement.style.setProperty(k, data.css[k]);
    });
  }
  if (data.font) document.body.style.fontFamily = data.font;
  if (data.scale) document.documentElement.style.fontSize = (parseFloat(data.scale) / 100) + "rem";
  buildColours();
  renderAllTiles();
}

async function saveServerTheme(data) {
  if (!db || !isAdmin()) return;
  try {
    await db.collection("config").doc("theme").set(Object.assign({}, data, {
      appliedAt: firebase.firestore.FieldValue.serverTimestamp(),
      appliedBy: currentUser.uid,
    }));
  } catch (e) { console.warn("saveServerTheme:", e.message); }
}

async function loadServerPalettes() {
  if (!db) return [];
  try {
    var doc = await db.collection("config").doc("palettes").get();
    return (doc.exists && Array.isArray(doc.data().list)) ? doc.data().list : [];
  } catch (e) { return []; }
}

async function saveServerPalettes(palettes) {
  if (!db || !isAdmin()) return;
  try {
    await db.collection("config").doc("palettes").set({ list: palettes });
  } catch (e) { console.warn("saveServerPalettes:", e.message); }
}

function renderPaletteList(palettes) {
  var container = document.getElementById("admin-palette-list");
  if (!container) return;
  if (!palettes || !palettes.length) {
    container.innerHTML = '<div style="color:#bbb;font-size:0.78rem;padding:2px 0">No saved palettes yet.</div>';
    return;
  }
  container.innerHTML = "";
  var swatchVars = ["--brand", "--tile-neutral", "--tile-selected", "--tile-valid"];
  palettes.forEach(function(pal) {
    var item = document.createElement("div");
    item.className = "admin-palette-item";

    var swatches = document.createElement("div");
    swatches.className = "admin-palette-swatches";
    swatchVars.forEach(function(v) {
      var s = document.createElement("div");
      s.className = "admin-palette-swatch";
      s.style.background = (pal.css && pal.css[v]) || "#ccc";
      swatches.appendChild(s);
    });

    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "admin-palette-name-input";
    nameInput.value = pal.name || "Unnamed";
    nameInput.addEventListener("change", function() {
      loadServerPalettes().then(function(all) {
        var found = all.find(function(p) { return p.id === pal.id; });
        if (found) { found.name = nameInput.value; saveServerPalettes(all); }
      });
    });

    var applyBtn = document.createElement("button");
    applyBtn.className = "admin-palette-apply-btn";
    applyBtn.textContent = "Use";
    applyBtn.addEventListener("click", function() {
      applyThemeData(pal);
      // Sync colour picker inputs
      if (typeof ADMIN_CSS_MAP !== "undefined") {
        Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
          var cssVar = ADMIN_CSS_MAP[inputId];
          var inp = document.getElementById(inputId);
          if (inp && pal.css && pal.css[cssVar]) inp.value = pal.css[cssVar];
        });
      }
      // Save as active theme for all users
      saveServerTheme({ css: pal.css, font: pal.font, scale: pal.scale, name: pal.name });
      showToast('"' + pal.name + '" applied for all users.');
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "admin-palette-delete-btn";
    deleteBtn.textContent = "×";
    deleteBtn.title = "Delete palette";
    deleteBtn.addEventListener("click", function() {
      loadServerPalettes().then(function(all) {
        var updated = all.filter(function(p) { return p.id !== pal.id; });
        saveServerPalettes(updated);
        renderPaletteList(updated);
      });
    });

    item.appendChild(swatches);
    item.appendChild(nameInput);
    item.appendChild(applyBtn);
    item.appendChild(deleteBtn);
    container.appendChild(item);
  });
}

// ─── Badge logic ──────────────────────────────────────────────────────────────
function computeNewBadges(score, streak, totalGames, existing) {
  var earn = [];
  if (!existing.first_word)                earn.push("first_word");
  if (score >= 7  && !existing.above_average) earn.push("above_average");
  if (score >= 11 && !existing.master)        earn.push("master");
  if (score >= 15 && !existing.grandmaster)   earn.push("grandmaster");
  if (streak >= 3  && !existing.streak_3)     earn.push("streak_3");
  if (streak >= 7  && !existing.streak_7)     earn.push("streak_7");
  if (streak >= 30 && !existing.streak_30)    earn.push("streak_30");
  if (totalGames >= 10  && !existing.games_10)  earn.push("games_10");
  if (totalGames >= 50  && !existing.games_50)  earn.push("games_50");
  if (totalGames >= 100 && !existing.games_100) earn.push("games_100");
  return earn;
}

function showBadgeToast(badgeId) {
  var b = BADGES[badgeId];
  if (b) showToast("Badge unlocked: " + b.name + "!");
}

// ─── User button ──────────────────────────────────────────────────────────────
function updateUserBtn() {
  var btn = document.getElementById("user-btn");
  if (!btn) return;
  btn.classList.toggle("logged-in", !!currentUser);
  btn.title = currentUser
    ? "Signed in as " + ((userProfile && userProfile.username) || (currentUser.email || ""))
    : "Sign in / My profile";
}

// ─── Auth modal ───────────────────────────────────────────────────────────────
var authModalCallback = null;
var authMode = "signup";

// ─── Edit Profile Modal ───────────────────────────────────────────────────────
function initEditProfileModal() {
  var modal = document.getElementById("edit-profile-modal");
  if (!modal) return;

  document.getElementById("ep-close").addEventListener("click", function() { modal.hidden = true; });
  document.getElementById("ep-overlay").addEventListener("click", function() { modal.hidden = true; });
  modal.addEventListener("keydown", function(e) { if (e.key === "Escape") modal.hidden = true; });

  // Avatar upload
  var photoInput = document.getElementById("ep-photo-input");
  document.getElementById("ep-change-photo").addEventListener("click", function() { photoInput.click(); });
  photoInput.addEventListener("change", function() {
    if (photoInput.files[0]) handleAvatarUpload(photoInput.files[0]);
  });
  document.getElementById("ep-remove-photo").addEventListener("click", handleAvatarRemove);

  // Username availability check (debounced)
  var usernameInput = document.getElementById("ep-username-input");
  var usernameTimer;
  usernameInput.addEventListener("input", function() {
    clearTimeout(usernameTimer);
    var val = usernameInput.value.trim().toLowerCase();
    var statusEl = document.getElementById("ep-username-status");
    if (!val || val === (userProfile && (userProfile.usernameLower || (userProfile.username || "").toLowerCase()))) {
      statusEl.textContent = ""; statusEl.className = ""; return;
    }
    statusEl.textContent = "…"; statusEl.className = "checking";
    usernameTimer = setTimeout(function() {
      checkUsernameAvailable(val).then(function(ok) {
        statusEl.textContent = ok ? "✓" : "✗ taken";
        statusEl.className = "ep-username-status " + (ok ? "ok" : "taken");
      }).catch(function() {});
    }, 600);
  });

  // Password sub-form toggle
  document.getElementById("ep-pwd-toggle").addEventListener("click", function() {
    document.getElementById("ep-pwd-form").hidden = false;
    this.hidden = true;
    document.getElementById("ep-pwd-current").focus();
  });
  document.getElementById("ep-pwd-cancel").addEventListener("click", function() {
    document.getElementById("ep-pwd-form").hidden = true;
    document.getElementById("ep-pwd-toggle").hidden = false;
    document.getElementById("ep-pwd-error").hidden = true;
    ["ep-pwd-current","ep-pwd-new","ep-pwd-confirm"].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = "";
    });
  });
  document.getElementById("ep-pwd-save").addEventListener("click", handlePasswordChange);
  document.getElementById("ep-save-btn").addEventListener("click", handleSaveProfile);

  // Edit button in profile row
  var editBtn = document.getElementById("edit-profile-btn");
  if (editBtn) editBtn.addEventListener("click", openEditProfileModal);
}

function openEditProfileModal() {
  if (!userProfile || !currentUser) return;
  var modal = document.getElementById("edit-profile-modal");
  if (!modal) return;
  renderAvatarEl(document.getElementById("ep-avatar"), userProfile);
  document.getElementById("ep-displayname-input").value = userProfile.displayName || "";
  document.getElementById("ep-username-input").value    = userProfile.username || "";
  document.getElementById("ep-email-display").textContent = currentUser.email || "";
  document.getElementById("ep-remove-photo").hidden = !userProfile.photoURL;
  document.getElementById("ep-error").hidden        = true;
  document.getElementById("ep-pwd-form").hidden     = true;
  document.getElementById("ep-pwd-toggle").hidden   = false;
  document.getElementById("ep-username-status").textContent = "";
  document.getElementById("ep-username-status").className   = "";
  ["ep-pwd-current","ep-pwd-new","ep-pwd-confirm"].forEach(function(id) {
    var el = document.getElementById(id); if (el) el.value = "";
  });
  var badge = document.getElementById("ep-email-verified-badge");
  if (badge) {
    var isOAuth = currentUser.providerData && currentUser.providerData.some(function(p) { return p.providerId !== "password"; });
    if (isOAuth || currentUser.emailVerified) {
      badge.textContent = "✓ Verified"; badge.className = "ep-verified-badge verified";
    } else {
      badge.textContent = "Not verified"; badge.className = "ep-verified-badge unverified";
    }
  }
  // Hide password section for OAuth users
  var isOAuth2 = currentUser.providerData && currentUser.providerData.some(function(p) { return p.providerId !== "password"; });
  var pwdToggle = document.getElementById("ep-pwd-toggle");
  if (pwdToggle) pwdToggle.hidden = isOAuth2;
  modal.hidden = false;
}

async function handleAvatarUpload(file) {
  var changeBtn = document.getElementById("ep-change-photo");
  changeBtn.disabled = true; changeBtn.textContent = "Uploading…";
  try {
    await uploadAvatar(file);
    renderAvatarEl(document.getElementById("ep-avatar"), userProfile);
    renderAvatarEl(document.getElementById("user-avatar"), userProfile);
    document.getElementById("ep-remove-photo").hidden = false;
  } catch (e) {
    showEpError("Upload failed. Check your connection and try again.");
  } finally {
    changeBtn.disabled = false; changeBtn.textContent = "Change Photo";
    document.getElementById("ep-photo-input").value = "";
  }
}

async function handleAvatarRemove() {
  var removeBtn = document.getElementById("ep-remove-photo");
  removeBtn.disabled = true;
  try {
    await deleteAvatar();
    renderAvatarEl(document.getElementById("ep-avatar"), userProfile);
    renderAvatarEl(document.getElementById("user-avatar"), userProfile);
    removeBtn.hidden = true;
  } catch (e) {
    showEpError("Could not remove photo. Try again.");
  } finally {
    removeBtn.disabled = false;
  }
}

async function handleSaveProfile() {
  var displayName = document.getElementById("ep-displayname-input").value.trim();
  var username    = document.getElementById("ep-username-input").value.trim();
  if (!username || username.length < 2) { showEpError("Username must be at least 2 characters."); return; }
  if (/\s/.test(username)) { showEpError("Username cannot contain spaces."); return; }
  var saveBtn = document.getElementById("ep-save-btn");
  saveBtn.disabled = true; saveBtn.textContent = "Saving…";
  document.getElementById("ep-error").hidden = true;
  try {
    var currentUsernameLower = userProfile.usernameLower || (userProfile.username || "").toLowerCase();
    if (username.toLowerCase() !== currentUsernameLower) {
      var available = await checkUsernameAvailable(username);
      if (!available) { showEpError("That username is already taken. Please choose another."); return; }
    }
    await db.collection("users").doc(currentUser.uid).update({
      displayName: displayName,
      username:    username,
      usernameLower: username.toLowerCase(),
    });
    if (userProfile) {
      userProfile.displayName   = displayName;
      userProfile.username      = username;
      userProfile.usernameLower = username.toLowerCase();
    }
    renderStatsPanel();
    document.getElementById("edit-profile-modal").hidden = true;
  } catch (e) {
    showEpError("Save failed. Please try again.");
  } finally {
    saveBtn.disabled = false; saveBtn.textContent = "Save Changes";
  }
}

async function handlePasswordChange() {
  var currentPwd = document.getElementById("ep-pwd-current").value;
  var newPwd     = document.getElementById("ep-pwd-new").value;
  var confirmPwd = document.getElementById("ep-pwd-confirm").value;
  var pwdError   = document.getElementById("ep-pwd-error");
  pwdError.hidden = true;
  if (!currentPwd || !newPwd) { showEpPwdError("Please fill in all password fields."); return; }
  if (newPwd.length < 6)      { showEpPwdError("New password must be at least 6 characters."); return; }
  if (newPwd !== confirmPwd)  { showEpPwdError("Passwords don't match."); return; }
  var saveBtn = document.getElementById("ep-pwd-save");
  saveBtn.disabled = true; saveBtn.textContent = "Updating…";
  try {
    var credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPwd);
    await currentUser.reauthenticateWithCredential(credential);
    await currentUser.updatePassword(newPwd);
    document.getElementById("ep-pwd-form").hidden    = true;
    document.getElementById("ep-pwd-toggle").hidden  = false;
    ["ep-pwd-current","ep-pwd-new","ep-pwd-confirm"].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = "";
    });
    var epErr = document.getElementById("ep-error");
    epErr.textContent = "Password updated successfully.";
    epErr.style.background = "#f0fdf4"; epErr.style.borderColor = "#bbf7d0"; epErr.style.color = "#15803d";
    epErr.hidden = false;
    setTimeout(function() { epErr.hidden = true; epErr.style.cssText = ""; }, 3000);
  } catch (e) {
    showEpPwdError(e.code === "auth/wrong-password" || e.code === "auth/invalid-credential"
      ? "Current password is incorrect." : "Password update failed. Please try again.");
  } finally {
    saveBtn.disabled = false; saveBtn.textContent = "Update Password";
  }
}

function showEpError(msg) {
  var el = document.getElementById("ep-error");
  el.textContent = msg; el.style.cssText = ""; el.hidden = false;
}
function showEpPwdError(msg) {
  var el = document.getElementById("ep-pwd-error");
  el.textContent = msg; el.hidden = false;
}

function initAuthModal() {
  var modal = document.getElementById("auth-modal");
  if (!modal) return;
  document.getElementById("auth-close").addEventListener("click", function() { hideAuthModal(false); });
  document.getElementById("auth-overlay").addEventListener("click", function() { hideAuthModal(false); });
  document.getElementById("auth-guest").addEventListener("click", function() { hideAuthModal(false); });
  document.getElementById("auth-switch-mode").addEventListener("click", function() {
    authMode = authMode === "signup" ? "login" : "signup";
    applyAuthMode();
  });
  document.getElementById("auth-submit").addEventListener("click", handleAuthSubmit);
  document.getElementById("auth-google").addEventListener("click", handleGoogleSubmit);
  // Verify screen buttons
  var resendBtn = document.getElementById("auth-verify-resend");
  var doneBtn   = document.getElementById("auth-verify-done");
  if (resendBtn) resendBtn.addEventListener("click", function() {
    if (!currentUser) return;
    resendBtn.disabled = true;
    currentUser.sendEmailVerification().then(function() {
      resendBtn.textContent = "Sent!";
      setTimeout(function() { resendBtn.textContent = "Resend email"; resendBtn.disabled = false; }, 3000);
    }).catch(function() {
      resendBtn.textContent = "Error — try again";
      setTimeout(function() { resendBtn.textContent = "Resend email"; resendBtn.disabled = false; }, 3000);
    });
  });
  if (doneBtn) doneBtn.addEventListener("click", function() { hideAuthModal(true); });
  modal.addEventListener("keydown", function(e) {
    if (e.key === "Enter") handleAuthSubmit();
    if (e.key === "Escape") hideAuthModal(false);
  });
}

function applyAuthMode() {
  var isSignup = authMode === "signup";
  var titleEl    = document.getElementById("auth-title");
  var subEl      = document.getElementById("auth-subtitle");
  var userField  = document.getElementById("auth-username");
  var nameField  = document.getElementById("auth-displayname");
  var submitEl   = document.getElementById("auth-submit");
  var switchBtn  = document.getElementById("auth-switch-mode");
  var pwdInput   = document.getElementById("auth-password");
  var switchRow  = document.querySelector(".auth-switch-row");
  if (titleEl)   titleEl.textContent   = isSignup ? "Save Your Score" : "Welcome back";
  if (subEl)     subEl.textContent     = isSignup
    ? "Create an account to track your progress and compete with friends."
    : "Sign in to save your score and see the leaderboard.";
  if (nameField) nameField.hidden      = !isSignup;
  if (userField) userField.hidden      = !isSignup;
  if (submitEl)  submitEl.textContent  = isSignup ? "Create Account" : "Sign In";
  if (switchBtn) switchBtn.textContent = isSignup ? "Sign in instead" : "Create an account";
  if (switchRow) switchRow.firstChild.textContent = isSignup ? "Already have an account? " : "Don't have an account? ";
  if (pwdInput)  pwdInput.autocomplete = isSignup ? "new-password" : "current-password";
  document.getElementById("auth-error").hidden = true;
}

function showAuthModal(mode, onDone) {
  authMode = mode || "signup";
  authModalCallback = onDone || null;
  applyAuthMode();
  document.getElementById("auth-email").value    = "";
  document.getElementById("auth-password").value = "";
  document.getElementById("auth-username").value = "";
  var dn = document.getElementById("auth-displayname"); if (dn) dn.value = "";
  document.getElementById("auth-error").hidden   = true;
  // Reset verify screen
  var fc = document.getElementById("auth-form-content"); if (fc) fc.hidden = false;
  var vs = document.getElementById("auth-verify-screen"); if (vs) vs.hidden = true;
  document.getElementById("auth-modal").hidden   = false;
  setTimeout(function() {
    var first = authMode === "signup" ? document.getElementById("auth-displayname") : document.getElementById("auth-email");
    if (first) first.focus();
  }, 80);
}

function hideAuthModal(success) {
  document.getElementById("auth-modal").hidden = true;
  if (authModalCallback) {
    var cb = authModalCallback;
    authModalCallback = null;
    cb(success ? currentUser : null);
  }
}

async function handleAuthSubmit() {
  var email       = document.getElementById("auth-email").value.trim();
  var password    = document.getElementById("auth-password").value;
  var username    = document.getElementById("auth-username").value.trim();
  var displayName = (document.getElementById("auth-displayname") || {value:""}).value.trim();
  var submitEl    = document.getElementById("auth-submit");
  if (!email || !password) { showAuthError("Please enter your email and password."); return; }
  if (authMode === "signup") {
    if (!displayName) { showAuthError("Please enter your full name."); return; }
    if (!username) { showAuthError("Please choose a username."); return; }
    if (/\s/.test(username)) { showAuthError("Username cannot contain spaces."); return; }
  }
  submitEl.disabled = true;
  submitEl.textContent = "…";
  document.getElementById("auth-error").hidden = true;
  try {
    if (authMode === "signup") {
      await fbSignUp(username, displayName, email, password);
      // Show verification screen instead of closing modal
      var fc = document.getElementById("auth-form-content"); if (fc) fc.hidden = true;
      var vemail = document.getElementById("auth-verify-email"); if (vemail) vemail.textContent = email;
      var vs = document.getElementById("auth-verify-screen"); if (vs) vs.hidden = false;
      submitEl.disabled = false;
      submitEl.textContent = "Create Account";
    } else {
      await fbSignIn(email, password);
      hideAuthModal(true);
    }
  } catch (e) {
    submitEl.disabled = false;
    submitEl.textContent = authMode === "signup" ? "Create Account" : "Sign In";
    showAuthError(friendlyAuthError(e.code));
  }
}

async function handleGoogleSubmit() {
  try {
    await fbSignInGoogle();
    hideAuthModal(true);
  } catch (e) {
    showAuthError(friendlyAuthError(e.code));
  }
}

function showAuthError(msg) {
  var el = document.getElementById("auth-error");
  el.textContent = msg;
  el.hidden = false;
}

function friendlyAuthError(code) {
  var map = {
    "auth/email-already-in-use": "That email is already registered. Try signing in.",
    "auth/invalid-email":        "Invalid email address.",
    "auth/weak-password":        "Password must be at least 6 characters.",
    "auth/user-not-found":       "No account found. Check your email or create an account.",
    "auth/wrong-password":       "Incorrect password.",
    "auth/invalid-credential":   "Incorrect email or password.",
    "auth/too-many-requests":    "Too many attempts. Please try again later.",
    "auth/popup-closed-by-user": "Google sign-in was cancelled.",
  };
  return map[code] || "Sign-in failed. Please try again.";
}

// ─── Stats panel ──────────────────────────────────────────────────────────────
function renderStatsPanel() {
  var outEl = document.getElementById("stats-logged-out");
  var inEl  = document.getElementById("stats-logged-in");
  if (!outEl || !inEl) return;
  if (!currentUser || !userProfile) { outEl.hidden = false; inEl.hidden = true; return; }
  outEl.hidden = true;
  inEl.hidden  = false;

  var avatarEl = document.getElementById("user-avatar");
  renderAvatarEl(avatarEl, userProfile);

  // @username is the prominent identifier; short name "First L." below
  var nameEl = document.getElementById("user-display-name");
  if (nameEl) nameEl.textContent = "@" + (userProfile.username || "player");
  var dn = (userProfile.displayName || "").trim();
  var shortName = "";
  if (dn) {
    var nameParts = dn.split(/\s+/);
    shortName = nameParts.length > 1
      ? nameParts[0] + " " + nameParts[nameParts.length - 1].charAt(0).toUpperCase() + "."
      : nameParts[0];
  }
  var usernameEl = document.getElementById("user-username-text");
  if (usernameEl) {
    usernameEl.textContent = shortName;
    usernameEl.hidden = !shortName;
  }
  var emailEl = document.getElementById("user-email-text");
  if (emailEl) emailEl.textContent = currentUser.email || "";
  var localeEl = document.getElementById("user-locale-text");
  if (localeEl) {
    localeEl.textContent = selectedLocale === "en_GB" ? "🇬🇧 UK English dictionary" : "🇺🇸 US English dictionary";
  }

  // Email verification banner — hide for Google/OAuth users
  var verifyBanner = document.getElementById("user-verify-banner");
  if (verifyBanner) {
    var isOAuth = currentUser.providerData && currentUser.providerData.some(function(p) { return p.providerId !== "password"; });
    verifyBanner.hidden = currentUser.emailVerified || isOAuth;
  }
  var resendVerifyBtn = document.getElementById("user-resend-verify-btn");
  if (resendVerifyBtn) resendVerifyBtn.onclick = function() {
    currentUser.sendEmailVerification().then(function() {
      resendVerifyBtn.textContent = "Sent!";
      setTimeout(function() { resendVerifyBtn.textContent = "Resend"; }, 3000);
    }).catch(function() {});
  };

  var s = userProfile.stats || {};
  var totalGames  = s.totalGames || 0;
  var topScore    = s.bestScore  || 0;
  var streak      = s.currentStreak || 0;
  var avg         = totalGames > 0 ? Math.round((s.totalScore || 0) / totalGames) : 0;
  var totalWords  = s.totalWords || 0;
  var totalTimeSec = s.totalTimeSecs || 0;

  function setVal(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  setVal("stat-games",  totalGames);
  setVal("stat-best",   topScore);
  setVal("stat-avg",    avg);
  setVal("stat-total-words", totalWords > 0 ? totalWords : "—");
  setVal("stat-total-time",  totalTimeSec > 0 ? formatTotalTime(totalTimeSec) : "—");

  renderStreakWidget(streak, s.bestStreak || 0);
  renderBadges(userProfile.badges || {});
  renderFriends();
}

function formatTotalTime(secs) {
  if (!secs || secs < 60) return secs + "s";
  var m = Math.floor(secs / 60);
  if (m < 60) return m + " min";
  var h = Math.floor(m / 60);
  var rem = m % 60;
  return h + "h " + (rem > 0 ? rem + "m" : "");
}

function getLastSevenDays() {
  var result = [];
  var DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  for (var i = 6; i >= 0; i--) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var yy = String(d.getFullYear()).slice(-2);
    var key = dd + mm + yy;
    var stored = null;
    try { stored = JSON.parse(localStorage.getItem("shukuma-" + key) || "null"); } catch (_) {}
    var played = !!(stored && (stored.bestScore > 0 || stored.gameCompleted));
    result.push({ key: key, dayName: DAY_NAMES[d.getDay()], played: played, isToday: i === 0 });
  }
  return result;
}

function renderStreakWidget(streak, bestStreak) {
  var widget = document.getElementById("streak-widget");
  if (!widget) return;
  var days = getLastSevenDays();

  // Compute streak from local calendar (always matches the dots shown)
  var localStreak = 0;
  for (var i = days.length - 1; i >= 0; i--) {
    if (days[i].played) localStreak++;
    else break;
  }
  var displayStreak = Math.max(streak, localStreak);

  var freezes = (userProfile && userProfile.streakFreezes != null) ? userProfile.streakFreezes : 3;
  var fireSvg = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>';
  var snowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 6-8 6-8-6"/><path d="m20 18-8-6-8 6"/><path d="m2 12 4-2-4-2"/><path d="m22 12-4-2 4-2"/></svg>';

  var html =
    '<div class="streak-hero">' +
      '<div class="streak-hero-icon">' + fireSvg + '</div>' +
      '<div class="streak-hero-nums">' +
        '<div class="streak-hero-count">' + displayStreak + '</div>' +
        '<div class="streak-hero-label">Day Streak</div>' +
      '</div>' +
      (bestStreak > 0 ? '<div class="streak-best">Best: ' + bestStreak + '</div>' : '') +
    '</div>' +
    '<div class="streak-days">';
  days.forEach(function(d) {
    var cls = "streak-day" + (d.played ? " played" : "") + (d.isToday ? " today" : "");
    html += '<div class="' + cls + '">' +
      '<div class="streak-day-flame">' + (d.played ? fireSvg : '') + '</div>' +
      '<div class="streak-day-name">' + d.dayName + '</div>' +
    '</div>';
  });
  html += '</div>';

  // Streak freeze inventory
  var totalFreezes = 3;
  var usedFreezes = Math.max(0, totalFreezes - freezes);
  html += '<div class="streak-freeze-row"><span class="streak-freeze-label">Streak Freezes</span><div class="streak-freeze-icons">';
  for (var f = 0; f < totalFreezes; f++) {
    var used = f < usedFreezes;
    html += '<div class="streak-freeze-icon' + (used ? ' used' : '') + '" title="' + (used ? 'Used' : 'Available') + '">' + snowSvg + '</div>';
  }
  html += '</div></div>';

  widget.innerHTML = html;
}

async function renderFriends() {
  var section = document.getElementById("friends-section");
  var list = document.getElementById("friends-list");
  if (!section || !list) return;
  section.hidden = !currentUser;
  if (!currentUser) return;

  var myFriends = (userProfile && userProfile.friends) || [];
  if (!myFriends.length) {
    list.innerHTML = '<p class="friends-empty">No friends connected yet. Invite someone to play!</p>';
    return;
  }
  list.innerHTML = '<div class="friends-loading">Loading...</div>';

  try {
    var profiles = await Promise.all(myFriends.map(function(uid) {
      return db.collection("users").doc(uid).get().then(function(snap) {
        return snap.exists ? Object.assign({ uid: uid }, snap.data()) : null;
      }).catch(function() { return null; });
    }));

    list.innerHTML = "";
    profiles.filter(Boolean).forEach(function(p) {
      var words = (p.stats && p.stats.totalWords) || 0;
      var row = document.createElement("div");
      row.className = "friend-row";
      var avatarHtml = p.photoURL
        ? '<img src="' + escHtml(p.photoURL) + '" alt="" class="avatar-photo" style="width:100%;height:100%;border-radius:50%;object-fit:cover">'
        : escHtml(getInitials(p));
      var displayName = (p.displayName && p.displayName.trim()) ? p.displayName : (p.username || "Player");
      row.innerHTML =
        '<div class="friend-avatar"' + (p.photoURL ? ' style="background:transparent;overflow:hidden"' : '') + '>' + avatarHtml + '</div>' +
        '<div class="friend-info">' +
          '<div class="friend-name">' + escHtml(displayName) + '</div>' +
          '<div class="friend-words">' + words + ' words</div>' +
        '</div>' +
        '<svg class="friend-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';
      row.addEventListener("click", (function(prof) { return function() {
        openPlayerProfile({
          username:      prof.username || "Player",
          word:          (prof.stats && prof.stats.bestWord)   || "—",
          score:         (prof.stats && prof.stats.bestScore)  || 0,
          validAttempts: (prof.stats && prof.stats.totalWords) || undefined,
          attempts:      (prof.stats && prof.stats.totalWords) || 0,
          timeSpent:     null,
        }, null);
      }; })(p));
      list.appendChild(row);
    });
    if (!list.children.length) {
      list.innerHTML = '<p class="friends-empty">No friends connected yet.</p>';
    }
  } catch (e) {
    list.innerHTML = '<p class="friends-empty">Could not load friends.</p>';
  }
}

function inviteFriend() {
  if (!currentUser) { showAuthModal("signup"); return; }
  var url = window.location.origin + window.location.pathname + "?friend=" + currentUser.uid;
  if (navigator.share) {
    navigator.share({ title: "Play Shukuma!", text: "Join me on Shukuma — find today's longest word!", url: url }).catch(function() {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function() { showToast("Invite link copied!"); }).catch(function() { showToast(url); });
  } else {
    showToast("Share: " + url);
  }
}

async function handleFriendInvite(inviterUid) {
  if (!currentUser || !db || currentUser.uid === inviterUid) return;
  try {
    await db.collection("users").doc(currentUser.uid).update({
      friends: firebase.firestore.FieldValue.arrayUnion(inviterUid)
    });
    await db.collection("users").doc(inviterUid).update({
      friends: firebase.firestore.FieldValue.arrayUnion(currentUser.uid)
    });
    showToast("You are now connected as friends!");
    await loadUserData(currentUser);
  } catch (e) {
    console.warn("handleFriendInvite:", e.message);
  }
}

function renderBadges(earned) {
  var grid = document.getElementById("badges-grid");
  if (!grid) return;
  grid.innerHTML = "";
  Object.keys(BADGES).forEach(function(id) {
    var b = BADGES[id];
    var isEarned = !!earned[id];
    var item = document.createElement("div");
    item.className = "badge-item " + (isEarned ? "earned" : "locked");
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", b.name + (isEarned ? " — earned" : " — locked"));
    item.innerHTML =
      '<div class="badge-hex">' +
        (BADGE_SVGS[id] || "") +
      '</div>' +
      '<div class="badge-name">' + escHtml(b.name) + '</div>';
    item.addEventListener("click", function() { showBadgeInfoModal(id, isEarned); });
    item.addEventListener("keydown", function(e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showBadgeInfoModal(id, isEarned); } });
    grid.appendChild(item);
  });
}

function showBadgeInfoModal(badgeId, isEarned) {
  var b = BADGES[badgeId];
  if (!b) return;
  var modal = document.getElementById("badge-info-modal");
  if (!modal) return;
  var icon = modal.querySelector(".bim-icon");
  var name = modal.querySelector(".bim-name");
  var desc = modal.querySelector(".bim-desc");
  var status = modal.querySelector(".bim-status");
  if (icon) icon.innerHTML = BADGE_SVGS[badgeId] || "";
  if (name) name.textContent = b.name;
  if (desc) desc.textContent = b.desc;
  if (status) {
    status.textContent = isEarned ? "Earned" : "Not yet earned";
    status.className = "bim-status " + (isEarned ? "earned" : "locked");
  }
  modal.hidden = false;
}

async function loadRecentHistory() {
  var container = document.getElementById("history-list");
  if (!container || !db || !currentUser) return;
  container.innerHTML = '<div style="color:#ccc;font-size:0.78rem">Loading…</div>';
  try {
    var snap = await db.collection("scores").where("uid","==",currentUser.uid).orderBy("submittedAt","desc").limit(7).get();
    container.innerHTML = "";
    if (snap.empty) { container.innerHTML = '<div style="color:#ccc;font-size:0.78rem">No games yet — play to see history!</div>'; return; }
    snap.docs.forEach(function(doc) {
      var d = doc.data();
      var row = document.createElement("div");
      row.className = "history-row";
      var dt = d.date || "";
      var dateDisplay = dt.slice(0,2) + "/" + dt.slice(2,4) + "/" + dt.slice(4);
      var wrongAtt = Math.max(0, (d.attempts || 0) - (d.validAttempts || 0));
      var meta = (d.attempts || d.timeSpent)
        ? '<span class="history-meta">' + (d.validAttempts || 0) + ' ✓ / ' + wrongAtt + ' ✗ · ' + formatTime(d.timeSpent || 0) + "</span>"
        : "";
      row.innerHTML =
        '<span class="history-date">' + dateDisplay + "</span>" +
        '<span class="history-score">' + d.score + "</span>" +
        '<span class="history-level">' + (d.level || "") + "</span>" + meta;
      container.appendChild(row);
    });
  } catch (e) {
    container.innerHTML = '<div style="color:#ccc;font-size:0.78rem">Could not load history.</div>';
    console.warn("loadRecentHistory:", e.message);
  }
}

// ─── Tab switching ────────────────────────────────────────────────────────────
function switchBackTab(tabName) {
  document.querySelectorAll(".tab-panel").forEach(function(p) {
    p.hidden = p.id !== "tab-" + tabName;
  });
  document.querySelectorAll(".back-tab").forEach(function(b) {
    b.classList.toggle("active", b.dataset.tab === tabName);
  });
  var titleEl = document.getElementById("back-panel-title");
  if (titleEl) titleEl.textContent = PANEL_TITLES[tabName] || tabName;
  if (tabName === "scores")   { lbDayOffset = browseOffset; loadLeaderboard(lbFilter || "date"); }
  if (tabName === "stats")    renderStatsPanel();
  if (tabName === "settings") renderSettingsPanel();
}

// ─── Share ────────────────────────────────────────────────────────────────────
function updateShareBtn() {
  var btn = document.getElementById("share-btn");
  if (!btn) return;
  btn.classList.remove("is-throbbing");
  btn.classList.remove("share-pulse");
  var badgeEl  = document.getElementById("share-ticket-badge");
  var todayKey = "sharedToday-" + getDateString();
  var shareCount = parseInt(localStorage.getItem(todayKey) || "0", 10);
  if (badgeEl) badgeEl.style.display = shareCount >= 5 ? "none" : "";
}

function enableShare() { updateShareBtn(); }

function initShare() {
  var btn = document.getElementById("share-btn");
  if (!btn) return;
  btn.addEventListener("click", function() {
    var doShare = function() {
      var dateStr = getDateString();
      var text;
      if (bestScore > 0) {
        var level = getScoreLevel(bestScore);
        var displayLevel = inOneAchieved ? "Grandmaster in One!" : level;
        text = "I scored '" + displayLevel + "' with " + bestScore +
          " letters on Shukuma!\nHow did you do?\nhttps://cranialscratch.github.io/Shukuma/\n#Shukuma" + dateStr;
      } else {
        text = "Can you find the longest word? Try today's Shukuma puzzle!\nhttps://cranialscratch.github.io/Shukuma/\n#Shukuma";
      }

      // Each of the first 5 shares today earns one ticket (today only)
      var todayKey = "sharedToday-" + dateStr;
      var shareCount = parseInt(localStorage.getItem(todayKey) || "0", 10);
      if (!browsedDateStr && shareCount < 5) {
        ticketCount++;
        localStorage.setItem(todayKey, String(shareCount + 1));
        saveTickets();
        updateTicketDisplay();
        showToast("Ticket earned! " + (shareCount + 1) + "/5 🎟");
      }

      if (bestScore > 0) {
        gameCompleted = true;
        saveState();
        if (currentUser) submitScore().catch(function() {});
      }
      updateShareBtn();

      if (navigator.share) {
        navigator.share({ title: "Shukuma", text: text }).catch(function() {
          navigator.clipboard && navigator.clipboard.writeText(text);
        });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          showToast("Copied to clipboard!");
        }).catch(function() {});
      } else {
        showToast("Share: " + text.split("\n")[0]);
      }
    };

    // Only prompt auth when sharing a score (no need for guest share)
    if (bestScore > 0 && !currentUser && db) {
      showAuthModal("signup", function() { doShare(); });
    } else {
      doShare();
    }
  });
}

function srAnnounce(msg) {
  var el = document.getElementById("sr-announce");
  if (!el) return;
  el.textContent = "";
  // Defer so screen reader sees the change as new content
  setTimeout(function() { el.textContent = msg; }, 50);
}

function showToast(msg) {
  var toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  // Position over the word box (the "Find today's longest word" area)
  var wordEl = document.getElementById("word-box") || document.getElementById("topbar-word") || document.getElementById("game-topbar");
  if (wordEl) {
    var tr = wordEl.getBoundingClientRect();
    toast.style.top = Math.round(tr.top + tr.height / 2) + "px";
  }
  if (toast._timer) { clearTimeout(toast._timer); toast._timer = null; }
  toast.classList.add("visible");
  toast._timer = setTimeout(function() { toast.classList.remove("visible"); toast._timer = null; }, 5000);
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function currentDateStr() { return browsedDateStr || getDateString(); }
function storageKey() { return "shukuma-" + currentDateStr(); }

// Clears all per-date localStorage entries when the puzzle order has changed.
// Called once at startup before loadState() — ensures players never see a
// stale score from a puzzle that now sits on a different calendar day.
function checkPuzzleVersion() {
  var stored = localStorage.getItem("shukuma-puzzle-version");
  if (stored === PUZZLE_ORDER_VERSION) return;
  var toRemove = [];
  for (var i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    if (k && /^shukuma-\d{4}-\d{2}-\d{2}$/.test(k)) toRemove.push(k);
  }
  toRemove.forEach(function(k) { localStorage.removeItem(k); });
  localStorage.setItem("shukuma-puzzle-version", PUZZLE_ORDER_VERSION);
}

function saveState() {
  const elapsed = timerRunning ? activeTimeMs + (Date.now() - timerLastStart) : activeTimeMs;
  try {
    localStorage.setItem(storageKey(), JSON.stringify({
      bestWord, bestScore, gameCompleted, attemptCount, validAttemptCount, hintsUsed, activeTimeMs: elapsed, playedPath, inOneAchieved, foundWords, targetFoundMs, targetFoundAttempts,
    }));
  } catch(_) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (!raw) return;
    const s = JSON.parse(raw);
    bestWord         = s.bestWord    || "";
    bestScore        = s.bestScore   || 0;
    gameCompleted    = s.gameCompleted || false;
    attemptCount     = s.attemptCount  || 0;
    validAttemptCount = s.validAttemptCount || 0;
    activeTimeMs     = s.activeTimeMs  || 0;
    playedPath       = Array.isArray(s.playedPath) ? s.playedPath : [];
    hintsUsed        = s.hintsUsed || 0;
    inOneAchieved    = s.inOneAchieved || false;
    foundWords       = Array.isArray(s.foundWords) ? s.foundWords : [];
    targetFoundMs       = s.targetFoundMs || 0;
    targetFoundAttempts = s.targetFoundAttempts || 0;
  } catch(_) {}
}

// ─── Ticket persistence ────────────────────────────────────────────────────────
function saveTickets() {
  try { localStorage.setItem("shukuma-tickets", String(ticketCount)); } catch(_) {}
}

function loadTickets() {
  var v = localStorage.getItem("shukuma-tickets");
  if (v !== null) { ticketCount = parseInt(v) || 0; return; }
  // Migration: seed from current date's saved state on first upgrade
  try {
    var raw = localStorage.getItem("shukuma-" + getDateString());
    if (raw) {
      var s = JSON.parse(raw);
      if (s.ticketCount) { ticketCount = s.ticketCount; saveTickets(); return; }
    }
  } catch(_) {}
  ticketCount = 0;
  saveTickets();
}

function giveAwardTickets(reason) {
  if (browsedDateStr) return; // no awards for past-day play
  ticketCount += AWARD_TICKETS;
  saveTickets();
  updateTicketDisplay();
  showToast("🎟 +" + AWARD_TICKETS + " tickets — " + reason);
}

function loadAwardTickets() {
  var v = localStorage.getItem("shukuma-award-tickets");
  if (v !== null) AWARD_TICKETS = parseInt(v) || 10;
}

function saveAwardTickets() {
  localStorage.setItem("shukuma-award-tickets", String(AWARD_TICKETS));
}

function loadUnlockedDates() {
  try { unlockedDates = JSON.parse(localStorage.getItem("shukuma-unlocked-dates") || "{}"); } catch(_) { unlockedDates = {}; }
}
function saveUnlockedDates() {
  try { localStorage.setItem("shukuma-unlocked-dates", JSON.stringify(unlockedDates)); } catch(_) {}
}
function loadRevealedLongest() {
  try { revealedLongestByDate = JSON.parse(localStorage.getItem("shukuma-revealed-longest") || "{}"); } catch(_) { revealedLongestByDate = {}; }
}
function saveRevealedLongest() {
  try { localStorage.setItem("shukuma-revealed-longest", JSON.stringify(revealedLongestByDate)); } catch(_) {}
}

// ─── Completion cycling messages ───────────────────────────────────────────────
function loadCycleMessages() {
  try {
    var v = localStorage.getItem("shukuma-cycle-messages");
    if (v) cycleMessages = JSON.parse(v);
  } catch(_) {}
}
function saveCycleMessages() {
  try { localStorage.setItem("shukuma-cycle-messages", JSON.stringify(cycleMessages)); } catch(_) {}
}

function startCyclingMessages() {
  var promptEl = document.getElementById("game-prompt");
  if (!promptEl) return;
  stopCyclingMessages(); // clears _cycleTimer and increments _cycleGen

  var gen = ++_cycleGen; // capture generation for this run

  var attemptsLabel = _cycleAttemptCount === 1 ? "attempt" : "attempts";
  var firstMsg = browsedDateStr
    ? "Found in " + _cycleAttemptCount + " " + attemptsLabel + "!"
    : "You found today's word in " + _cycleAttemptCount + " " + attemptsLabel + "!";

  // Shuffle the rest
  var rest = cycleMessages.slice();
  for (var i = rest.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = rest[i]; rest[i] = rest[j]; rest[j] = tmp;
  }
  var msgs = [firstMsg].concat(rest);
  var idx = 0;

  function showMsg() {
    if (_cycleGen !== gen) return; // stale — a newer cycle started or cycling stopped
    promptEl.style.opacity = "0";
    var capturedIdx = idx;
    idx = (idx + 1) % msgs.length;
    setTimeout(function() {
      if (_cycleGen !== gen) return; // still stale after fade-out delay
      promptEl.textContent = msgs[capturedIdx];
      promptEl.style.opacity = "1";
    }, 520);
  }

  showMsg();
  _cycleTimer = setInterval(showMsg, 4500);
}

function stopCyclingMessages() {
  _cycleGen++; // invalidate any pending setTimeout callbacks
  if (_cycleTimer) { clearInterval(_cycleTimer); _cycleTimer = null; }
  var promptEl = document.getElementById("game-prompt");
  if (promptEl) { promptEl.style.opacity = "1"; promptEl.textContent = "Find today's longest word"; }
}

// ─── Version / changelog ──────────────────────────────────────────────────────
function initVersionPanel() {
  // Ensure modal is hidden on startup regardless of CSS specificity issues
  var modalEl = document.getElementById("changelog-modal");
  if (modalEl) { modalEl.hidden = true; modalEl.style.display = "none"; }

  var tag = document.getElementById("version-tag");
  if (tag) {
    tag.textContent = "v" + VERSION;
    tag.addEventListener("click", showChangelog);
    tag.addEventListener("keydown", function(e) { if (e.key === "Enter" || e.key === " ") showChangelog(); });
  }
  var closeBtn = document.getElementById("changelog-close");
  var overlay  = document.getElementById("changelog-overlay");
  var forceBtn = document.getElementById("force-update-btn");
  if (closeBtn) closeBtn.addEventListener("click", hideChangelog);
  if (overlay)  overlay.addEventListener("click", hideChangelog);
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") hideChangelog(); });
  if (forceBtn) forceBtn.addEventListener("click", function() {
    var dest = window.location.pathname + "?v=" + VERSION + "&t=" + Date.now();
    if (typeof caches !== "undefined") {
      caches.keys().then(function(names) {
        return Promise.all(names.map(function(n) { return caches.delete(n); }));
      }).finally(function() { window.location.href = dest; });
    } else {
      window.location.href = dest;
    }
  });
  renderChangelog();
}

function renderChangelog() {
  var list = document.getElementById("changelog-list");
  if (!list) return;
  list.innerHTML = CHANGELOG.map(function(entry, i) {
    var latest = i === 0;
    return '<div class="cl-entry' + (latest ? " cl-latest" : "") + '">' +
      '<div class="cl-version-row">' +
        '<span class="cl-version">v' + entry.version + '</span>' +
        (latest ? '<span class="cl-badge">Latest</span>' : "") +
        '<span class="cl-date">' + entry.date + '</span>' +
      '</div>' +
      '<ul class="cl-changes">' +
        entry.changes.map(function(c) { return "<li>" + escHtml(c) + "</li>"; }).join("") +
      "</ul></div>";
  }).join("");
}

function showChangelog() {
  var modal = document.getElementById("changelog-modal");
  if (modal) { modal.hidden = false; modal.style.display = ""; }
}

function hideChangelog() {
  var modal = document.getElementById("changelog-modal");
  if (modal) { modal.hidden = true; modal.style.display = "none"; }
}

// ─── Float animation ──────────────────────────────────────────────────────────
function showFloatAnim(opts) {
  var container = document.getElementById("board-container");
  if (!container) return;

  var old = container.querySelector(".float-anim-wrapper");
  if (old) old.remove();

  var wrapper = document.createElement("div");
  wrapper.className = "float-anim-wrapper";

  var inner = document.createElement("div");
  inner.className = "float-anim-inner float-type-" + (opts.type || "neutral");

  if (opts.type === "valid") {
    // Pointy-top SVG hex styled like a game tile
    var r = 52, cx = 60, cy = 62;
    var pts = [];
    for (var i = 0; i < 6; i++) {
      var ang = (Math.PI / 180) * (60 * i - 30);
      pts.push((cx + r * Math.cos(ang)).toFixed(1) + "," + (cy + r * Math.sin(ang)).toFixed(1));
    }
    inner.innerHTML =
      '<svg class="float-hex-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" width="120" height="124" aria-hidden="true">' +
        '<defs><filter id="fh-shadow" x="-30%" y="-30%" width="160%" height="160%">' +
          '<feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="rgba(0,0,0,0.25)"/>' +
        '</filter></defs>' +
        '<polygon points="' + pts.join(" ") + '" fill="var(--tile-neutral,#e8dfc8)" stroke="var(--tile-neutral-stroke,#c8b098)" stroke-width="2.5" filter="url(#fh-shadow)"/>' +
        '<text x="60" y="66" font-family="Inter,sans-serif" font-size="54" font-weight="900" text-anchor="middle" dominant-baseline="middle" fill="var(--tile-text,#1a0a00)">' + escHtml(String(opts.score)) + '</text>' +
      '</svg>' +
      '<span class="float-level">' + escHtml(opts.level || "") + '</span>' +
      '<span class="float-cheer">' + escHtml(opts.cheer || "") + '</span>';
  } else {
    // wrong / neutral: hex with text inside at ≥17px
    var r3 = 52, cx3 = 60, cy3 = 62;
    var pts3 = [];
    for (var i3 = 0; i3 < 6; i3++) {
      var ang3 = (Math.PI / 180) * (60 * i3 - 30);
      pts3.push((cx3 + r3 * Math.cos(ang3)).toFixed(1) + "," + (cy3 + r3 * Math.sin(ang3)).toFixed(1));
    }
    var isWrong = (opts.type === "wrong");
    var hexFill   = isWrong ? "var(--tile-invalid,#d9534f)"        : "var(--tile-neutral,#e8dfc8)";
    var hexStroke = isWrong ? "var(--tile-invalid-stroke,#a02020)" : "var(--tile-neutral-stroke,#c8b098)";
    var hexText   = isWrong ? "#ffffff"                            : "var(--tile-text,#1a0a00)";
    var cheer3 = opts.cheer || "";
    // Split into 1-2 lines so text fits inside the hex at 18px
    var lines3 = [];
    if (cheer3.length <= 9) {
      lines3 = [cheer3];
    } else {
      var mid3 = Math.floor(cheer3.length / 2);
      var sp3 = cheer3.lastIndexOf(" ", mid3);
      if (sp3 <= 0) sp3 = cheer3.indexOf(" ");
      lines3 = sp3 > 0 ? [cheer3.substring(0, sp3), cheer3.substring(sp3 + 1)] : [cheer3];
    }
    var lineH3 = 22;
    var startY3 = cy3 - ((lines3.length - 1) * lineH3) / 2;
    var textEls3 = lines3.map(function(line, li) {
      return '<text x="' + cx3 + '" y="' + (startY3 + li * lineH3).toFixed(1) + '" font-family="Inter,sans-serif" font-size="18" font-weight="800" text-anchor="middle" dominant-baseline="middle" fill="' + hexText + '">' + escHtml(line) + '</text>';
    }).join("");
    inner.innerHTML =
      '<svg class="float-hex-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" width="120" height="124" aria-hidden="true">' +
        '<defs><filter id="fh-shadow-wr" x="-30%" y="-30%" width="160%" height="160%">' +
          '<feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="rgba(0,0,0,0.25)"/>' +
        '</filter></defs>' +
        '<polygon points="' + pts3.join(" ") + '" fill="' + hexFill + '" stroke="' + hexStroke + '" stroke-width="2.5" filter="url(#fh-shadow-wr)"/>' +
        textEls3 +
      '</svg>';
  }

  wrapper.appendChild(inner);
  container.appendChild(wrapper);

  inner.addEventListener("animationend", function() { wrapper.remove(); }, { once: true });
}

function showAlreadyFoundAnim() {
  srAnnounce("Already found that word");
  var container = document.getElementById("board-container");
  if (!container) return;
  var old = container.querySelector(".float-anim-wrapper");
  if (old) old.remove();
  var wrapper = document.createElement("div");
  wrapper.className = "float-anim-wrapper float-already";
  var inner = document.createElement("div");
  inner.className = "float-anim-inner";
  var r = 52, cx = 60, cy = 62, pts = [];
  for (var i = 0; i < 6; i++) {
    var ang = (Math.PI / 180) * (60 * i - 30);
    pts.push((cx + r * Math.cos(ang)).toFixed(1) + "," + (cy + r * Math.sin(ang)).toFixed(1));
  }
  inner.innerHTML =
    '<svg class="float-hex-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" width="120" height="124" aria-hidden="true">' +
      '<defs><filter id="fh-shadow-af" x="-30%" y="-30%" width="160%" height="160%">' +
        '<feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="rgba(0,0,0,0.25)"/>' +
      '</filter></defs>' +
      '<polygon points="' + pts.join(" ") + '" fill="var(--tile-neutral,#e8dfc8)" stroke="var(--tile-neutral-stroke,#c8b098)" stroke-width="2.5" filter="url(#fh-shadow-af)"/>' +
      '<text x="60" y="51" font-family="Inter,sans-serif" font-size="18" font-weight="800" text-anchor="middle" dominant-baseline="middle" fill="var(--tile-text,#1a0a00)">Already</text>' +
      '<text x="60" y="73" font-family="Inter,sans-serif" font-size="18" font-weight="800" text-anchor="middle" dominant-baseline="middle" fill="var(--tile-text,#1a0a00)">Found</text>' +
    '</svg>';
  wrapper.appendChild(inner);
  container.appendChild(wrapper);
  inner.addEventListener("animationend", function() { wrapper.remove(); }, { once: true });
}

// ─── Spelling Variant Overlay ────────────────────────────────────────────────
var SPELLING_VARIANTS = {
  'NATIONALISING':  'NATIONALIZING',
  'NATIONALIZING':  'NATIONALISING',
  'DEMOCRATISING':  'DEMOCRATIZING',
  'DEMOCRATIZING':  'DEMOCRATISING',
  'GLOBALISATION':  'GLOBALIZATION',
  'GLOBALIZATION':  'GLOBALISATION',
  'HOSPITALISING':  'HOSPITALIZING',
  'HOSPITALIZING':  'HOSPITALISING',
  'RATIONALISING':  'RATIONALIZING',
  'RATIONALIZING':  'RATIONALISING',
  'SUMMARISING':    'SUMMARIZING',
  'SUMMARIZING':    'SUMMARISING',
  'STANDARDISED':   'STANDARDIZED',
  'STANDARDIZED':   'STANDARDISED',
  'STANDARDISES':   'STANDARDIZES',
  'STANDARDIZES':   'STANDARDISES',
  'STANDARDISER':   'STANDARDIZER',
  'STANDARDIZER':   'STANDARDISER',
};

function getSpellingVariant(word) {
  var upper = word.toUpperCase();
  var alt = SPELLING_VARIANTS[upper];
  if (!alt) return null;
  var isGB = /I[ZS](ING|ED|ATION|E[^D])/.test(upper)
    ? !/IZ/.test(upper)   // has IZ? -> US; else GB
    : /IS/.test(upper);
  var isGBForm = !upper.includes('IZ');
  return { word: upper, alt: alt, locale: isGBForm ? 'GB' : 'US' };
}

function showSpellingVariantAnim(locale) {
  var container = document.getElementById("board-container");
  if (!container) return;
  var old = container.querySelector(".float-spelling-variant");
  if (old) old.remove();
  var wrapper = document.createElement("div");
  wrapper.className = "float-anim-wrapper float-spelling-variant";
  var inner = document.createElement("div");
  inner.className = "float-anim-inner";
  var r = 52, cx = 60, cy = 62, pts = [];
  for (var i = 0; i < 6; i++) {
    var ang = (Math.PI / 180) * (60 * i - 30);
    pts.push((cx + r * Math.cos(ang)).toFixed(1) + "," + (cy + r * Math.sin(ang)).toFixed(1));
  }
  var flag = locale === 'GB' ? '🇬🇧' : '🇺🇸';
  var label = locale === 'GB' ? 'British' : 'American';
  inner.innerHTML =
    '<svg class="float-hex-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 124" width="120" height="124" aria-hidden="true">' +
      '<defs><filter id="fh-shadow-sv" x="-30%" y="-30%" width="160%" height="160%">' +
        '<feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="rgba(0,0,0,0.25)"/>' +
      '</filter></defs>' +
      '<polygon points="' + pts.join(" ") + '" fill="var(--tile-selected,#e8c840)" stroke="var(--tile-selected-stroke,#c9a820)" stroke-width="2.5" filter="url(#fh-shadow-sv)"/>' +
      '<text x="60" y="46" font-family="Inter,sans-serif" font-size="22" text-anchor="middle" dominant-baseline="middle">' + flag + '</text>' +
      '<text x="60" y="68" font-family="Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="var(--tile-text,#1a0a00)">' + label + '</text>' +
      '<text x="60" y="82" font-family="Inter,sans-serif" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="middle" fill="var(--tile-text,#1a0a00)">Spelling</text>' +
    '</svg>';
  wrapper.appendChild(inner);
  container.appendChild(wrapper);
  inner.addEventListener("animationend", function() { wrapper.remove(); }, { once: true });
}

// ─── Confetti ─────────────────────────────────────────────────────────────────
function showConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var canvas = document.createElement("canvas");
  var dpr = window.devicePixelRatio || 1;
  var W = window.innerWidth, H = window.innerHeight;
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  var COLS = ["#e8dfc8","#4c5ab8","#5cb85c","#e8c840","#c8b098","#ff2d55","#ffffff","#3d1a24"];
  var particles = [];
  for (var i = 0; i < 90; i++) {
    particles.push({
      x: Math.random() * W,
      y: -12 - Math.random() * 100,
      w: 7 + Math.random() * 8,
      h: 4 + Math.random() * 5,
      color: COLS[Math.floor(Math.random() * COLS.length)],
      vx: (Math.random() - 0.5) * 3.5,
      vy: 2.5 + Math.random() * 4.5,
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.18,
      opacity: 1
    });
  }
  var started = Date.now();

  function draw() {
    var elapsed = Date.now() - started;
    ctx.clearRect(0, 0, W, H);
    var any = false;
    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      p.x += p.vx; p.y += p.vy; p.rot += p.spin; p.vy += 0.12;
      if (elapsed > 1800) p.opacity = Math.max(0, p.opacity - 0.016);
      if (p.y < H + 20 && p.opacity > 0) any = true;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (any) requestAnimationFrame(draw);
    else canvas.remove();
  }
  requestAnimationFrame(draw);
}

// ─── Pull-to-refresh ──────────────────────────────────────────────────────────
function initPullToRefresh() {
  var front     = document.getElementById("game-front");
  var indicator = document.getElementById("ptr-indicator");
  if (!front || !indicator) return;

  var startY = 0, pulling = false, triggered = false;
  var THRESHOLD = 80, MAX_PULL = 64;

  front.addEventListener("touchstart", function(e) {
    if (isDragging || front.scrollTop > 0) return;
    startY = e.touches[0].clientY;
    pulling = false;
    triggered = false;
  }, { passive: true });

  front.addEventListener("touchmove", function(e) {
    if (isDragging || triggered) return;
    var delta = e.touches[0].clientY - startY;
    if (delta <= 0) { pulling = false; return; }
    if (front.scrollTop > 0) return;
    pulling = true;
    var progress = Math.min(delta, MAX_PULL);
    var opacity  = progress / MAX_PULL;
    indicator.style.transform = "translateY(" + (progress - 48) + "px)";
    indicator.style.opacity   = String(opacity);
    indicator.classList.toggle("ptr-ready", delta >= THRESHOLD);
  }, { passive: true });

  front.addEventListener("touchend", function() {
    if (!pulling) return;
    pulling = false;
    if (indicator.classList.contains("ptr-ready") && !triggered) {
      triggered = true;
      indicator.classList.add("ptr-spinning");
      setTimeout(function() { window.location.reload(); }, 400);
    } else {
      indicator.style.transform = "translateY(-48px)";
      indicator.style.opacity   = "0";
      indicator.classList.remove("ptr-ready");
    }
  }, { passive: true });
}

// ─── Shake-to-undo ───────────────────────────────────────────────────────────
function initShakeDetect() {
  var lastMag = 0, lastShake = 0;
  var THRESHOLD = 12, COOLDOWN = 1000;

  function onMotion(e) {
    var a = e.accelerationIncludingGravity;
    if (!a) return;
    var mag = Math.abs(a.x || 0) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
    var delta = Math.abs(mag - lastMag);
    lastMag = mag;
    if (delta > THRESHOLD && Date.now() - lastShake > COOLDOWN) {
      if (selectedPath.length > 0) {
        lastShake = Date.now();
        undoLastTile();
        showToast("Shaken — last letter undone");
      }
    }
  }

  if (typeof DeviceMotionEvent !== "undefined") {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      var motionPerm = localStorage.getItem("deviceMotionPermission");
      if (motionPerm === "granted") {
        // Previously granted — re-request silently (iOS won't show dialog again)
        DeviceMotionEvent.requestPermission()
          .then(function(r) { if (r === "granted") window.addEventListener("devicemotion", onMotion, { passive: true }); })
          .catch(function() {});
      } else if (motionPerm !== "denied") {
        // Not yet asked — wait for first user tap, then request once
        document.addEventListener("touchend", function requestOnce() {
          DeviceMotionEvent.requestPermission()
            .then(function(r) {
              localStorage.setItem("deviceMotionPermission", r);
              if (r === "granted") window.addEventListener("devicemotion", onMotion, { passive: true });
            })
            .catch(function() {});
        }, { once: true });
      }
    } else {
      window.addEventListener("devicemotion", onMotion, { passive: true });
    }
  }
}

// ─── Board opening animation ──────────────────────────────────────────────────
function runBoardOpenAnimation() {
  if (!tiles || !tiles.length) return;

  // Eight distinct sweep patterns
  var PATTERNS = [
    // Left → right column sweep
    function(ts) { return ts.slice().sort(function(a, b) { return a.col - b.col || a.row - b.row; }); },
    // Right → left column sweep
    function(ts) { return ts.slice().sort(function(a, b) { return b.col - a.col || a.row - b.row; }); },
    // Top → bottom row cascade
    function(ts) { return ts.slice().sort(function(a, b) { return a.row - b.row || a.col - b.col; }); },
    // Bottom → top row cascade
    function(ts) { return ts.slice().sort(function(a, b) { return b.row - a.row || a.col - b.col; }); },
    // Ripple outward from center
    function(ts) {
      var cx = 0, cy = 0;
      ts.forEach(function(t) { cx += t.col; cy += t.row; });
      cx /= ts.length; cy /= ts.length;
      return ts.slice().sort(function(a, b) {
        return Math.hypot(a.col - cx, a.row - cy) - Math.hypot(b.col - cx, b.row - cy);
      });
    },
    // Ripple inward from edges
    function(ts) {
      var cx = 0, cy = 0;
      ts.forEach(function(t) { cx += t.col; cy += t.row; });
      cx /= ts.length; cy /= ts.length;
      return ts.slice().sort(function(a, b) {
        return Math.hypot(b.col - cx, b.row - cy) - Math.hypot(a.col - cx, a.row - cy);
      });
    },
    // Diagonal top-left → bottom-right
    function(ts) { return ts.slice().sort(function(a, b) { return (a.row + a.col) - (b.row + b.col); }); },
    // Diagonal top-right → bottom-left
    function(ts) { return ts.slice().sort(function(a, b) { return (a.col - a.row) - (b.col - b.row); }); },
  ];

  var ordered = PATTERNS[Math.floor(Math.random() * PATTERNS.length)](tiles);
  var STEP = 42; // ms between each tile starting its pulse

  ordered.forEach(function(tile, idx) {
    setTimeout(function() {
      var g = document.getElementById("tile-" + tile.id);
      if (!g) return;
      g.classList.remove("tile-pulse");
      void g.offsetWidth; // flush reflow so animation restarts cleanly
      g.classList.add("tile-pulse");
      setTimeout(function() { g.classList.remove("tile-pulse"); }, 650);
    }, idx * STEP);
  });
}

// ─── Idle hint ────────────────────────────────────────────────────────────────
function initIdleHint() {
  var lastInteraction = Date.now();
  function resetTimer() { lastInteraction = Date.now(); }
  document.addEventListener("pointerdown", resetTimer, { passive: true });
  document.addEventListener("touchstart",  resetTimer, { passive: true });
  setInterval(function() {
    if (gameCompleted) return;
    if (selectedPath.length > 0) return;
    if (Date.now() - lastInteraction < 7000) return;
    triggerHint();
  }, 8000);
}

// ─── Swipe navigation ─────────────────────────────────────────────────────────
function initSwipeNavigation() {
  var front = document.getElementById("game-front");
  if (!front) return;
  var startX = 0, startY = 0, swiping = false;
  var MIN_SWIPE = 65;

  front.addEventListener("touchstart", function(e) {
    if (isDragging || isChecking) return;
    if (e.target.closest && e.target.closest("#hex-board")) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    swiping = true;
    front.style.transition = "";
  }, { passive: true });

  front.addEventListener("touchmove", function(e) {
    if (!swiping) return;
    var dx = e.touches[0].clientX - startX;
    var dy = e.touches[0].clientY - startY;
    if (Math.abs(dy) > Math.abs(dx) * 0.9) { swiping = false; return; }
    var canLeft = browseOffset > -13, canRight = browseOffset < 0;
    var limited = (dx > 0 && !canLeft) || (dx < 0 && !canRight);
    front.style.transform = "translateX(" + (limited ? dx * 0.25 : dx * 0.42) + "px)";
    front.style.opacity = String(Math.max(0.65, 1 - Math.abs(dx) / 380));
  }, { passive: true });

  function endSwipe(dx) {
    if (!swiping) return;
    swiping = false;
    var canLeft = browseOffset > -13, canRight = browseOffset < 0;
    if (dx > MIN_SWIPE && canLeft) {
      doDateNavigate("prev");
    } else if (dx < -MIN_SWIPE && canRight) {
      doDateNavigate("next");
    } else {
      front.style.transition = "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s";
      front.style.transform = "";
      front.style.opacity = "";
      setTimeout(function() { front.style.transition = front.style.transform = front.style.opacity = ""; }, 350);
    }
  }

  front.addEventListener("touchend", function(e) { endSwipe(e.changedTouches[0].clientX - startX); }, { passive: true });
  front.addEventListener("touchcancel", function() {
    swiping = false;
    front.style.transition = "transform 0.25s, opacity 0.2s";
    front.style.transform = front.style.opacity = "";
    setTimeout(function() { front.style.transition = ""; }, 300);
  }, { passive: true });
}

function doDateNavigate(direction) {
  var front = document.getElementById("game-front");
  if (!front) return;
  front.style.transition = "transform 0.18s ease-in, opacity 0.18s";
  front.style.transform = direction === "prev" ? "translateX(55%)" : "translateX(-55%)";
  front.style.opacity = "0";
  setTimeout(function() {
    if (direction === "prev" && browseOffset > -13) { browseOffset--; loadBoardForDate(getDateForOffset(browseOffset)); }
    else if (direction === "next" && browseOffset < 0) { browseOffset++; loadBoardForDate(getDateForOffset(browseOffset)); }
    front.style.transition = "";
    front.style.transform = direction === "prev" ? "translateX(-40%)" : "translateX(40%)";
    front.style.opacity = "0";
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        front.style.transition = "transform 0.26s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.22s ease-out";
        front.style.transform = front.style.opacity = "";
        setTimeout(function() { front.style.transition = front.style.transform = front.style.opacity = ""; }, 300);
      });
    });
  }, 190);
}

// Swipe left/right on the Scores tab to navigate between days
function initScoresSwipe() {
  var scoresTab = document.getElementById("tab-scores");
  if (!scoresTab) return;
  var startX = 0, startY = 0;
  var MIN_SWIPE = 55;
  scoresTab.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  // Evaluate on touchend only — avoids conflict with vertical scroll
  scoresTab.addEventListener("touchend", function(e) {
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < MIN_SWIPE) return;           // too short
    if (Math.abs(dy) > Math.abs(dx) * 0.65) return; // too vertical
    if (dx > 0 && lbDayOffset > -13) doLbDateNavigate("prev");
    else if (dx < 0 && lbDayOffset < 0) doLbDateNavigate("next");
  }, { passive: true });
}

function doLbDateNavigate(direction) {
  if (direction === "prev" && lbDayOffset > -13) {
    lbDayOffset--; browseOffset = lbDayOffset;
  } else if (direction === "next" && lbDayOffset < 0) {
    lbDayOffset++; browseOffset = lbDayOffset;
  } else return;
  var dateStr = getDateForOffset(browseOffset);
  loadBoardForDate(dateStr);
  loadLeaderboard("date");
}

// ─── Settings ─────────────────────────────────────────────────────────────────
function renderSettingsPanel() {
  // Version label — wired once
  var verLabel = document.getElementById("settings-version-label");
  if (verLabel && !verLabel._changelogWired) {
    verLabel._changelogWired = true;
    verLabel.textContent = "Shukuma v" + VERSION + " — tap to view changelog";
    verLabel.style.cursor = "pointer";
    verLabel.addEventListener("click", showChangelog);
  }

  // Appearance
  var darkToggle  = document.getElementById("setting-dark-mode");
  var soundToggle = document.getElementById("setting-sound");
  var hapticToggle= document.getElementById("setting-haptics");
  if (darkToggle)   darkToggle.checked   = darkMode;
  if (soundToggle)  soundToggle.checked  = soundEnabled;
  if (hapticToggle) hapticToggle.checked = hapticsEnabled;

  // Colour theme
  document.querySelectorAll(".colour-theme-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.theme === colourTheme);
  });

  // Text size
  document.querySelectorAll(".text-size-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.size === (textSize || "normal"));
  });

  // Account section
  var accountSection = document.getElementById("settings-account");
  if (accountSection) accountSection.hidden = !currentUser;
  var notifToggle = document.getElementById("setting-notif");
  var marketingToggle = document.getElementById("setting-marketing");
  if (currentUser) loadAccountPrefs(notifToggle, marketingToggle);
}

async function loadAccountPrefs(notifEl, marketingEl) {
  if (!db || !currentUser) return;
  try {
    var snap = await db.collection("users").doc(currentUser.uid).get();
    var prefs = (snap.exists && snap.data().prefs) || {};
    if (notifEl)    notifEl.checked    = prefs.pushNotifications !== false;
    if (marketingEl) marketingEl.checked = prefs.marketing !== false;
  } catch (e) { /* silent */ }
}

function initSettings() {
  var panel = document.getElementById("tab-settings");
  if (!panel) return;

  // Dark mode
  var darkToggle = document.getElementById("setting-dark-mode");
  if (darkToggle) {
    darkToggle.checked = darkMode;
    darkToggle.addEventListener("change", function() {
      applyDarkMode(this.checked);
      localStorage.setItem("shukuma-dark-mode", this.checked ? "1" : "0");
    });
  }

  // System dark mode: follow OS preference if user hasn't manually set it
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e) {
    if (localStorage.getItem("shukuma-dark-mode") === null) {
      applyDarkMode(e.matches);
      if (darkToggle) darkToggle.checked = e.matches;
    }
  });

  // Text size
  document.querySelectorAll(".text-size-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.size === (textSize || "normal"));
    btn.addEventListener("click", function() {
      applyTextSize(btn.dataset.size);
      document.querySelectorAll(".text-size-btn").forEach(function(b) {
        b.classList.toggle("active", b.dataset.size === textSize);
      });
    });
  });

  // Sound
  var soundToggle = document.getElementById("setting-sound");
  if (soundToggle) soundToggle.addEventListener("change", function() {
    soundEnabled = this.checked;
    localStorage.setItem("shukuma-sound", soundEnabled ? "1" : "0");
  });

  // Haptics
  var hapticToggle = document.getElementById("setting-haptics");
  if (hapticToggle) hapticToggle.addEventListener("change", function() {
    hapticsEnabled = this.checked;
    localStorage.setItem("shukuma-haptics", hapticsEnabled ? "1" : "0");
    if (hapticsEnabled) triggerHaptic(15); // confirm haptics are working
  });

  // Colour theme
  document.querySelectorAll(".colour-theme-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      applyColourTheme(btn.dataset.theme);
      document.querySelectorAll(".colour-theme-btn").forEach(function(b) {
        b.classList.toggle("active", b.dataset.theme === colourTheme);
      });
    });
  });

  // Push notifications
  var notifToggle = document.getElementById("setting-notif");
  if (notifToggle) notifToggle.addEventListener("change", function() {
    if (!db || !currentUser) return;
    db.collection("users").doc(currentUser.uid).set(
      { prefs: { pushNotifications: this.checked } }, { merge: true }
    );
  });

  // Marketing emails
  var marketingToggle = document.getElementById("setting-marketing");
  if (marketingToggle) marketingToggle.addEventListener("change", function() {
    if (!db || !currentUser) return;
    db.collection("users").doc(currentUser.uid).set(
      { prefs: { marketing: this.checked } }, { merge: true }
    );
  });

  // Change password
  var changePwBtn = document.getElementById("settings-change-password");
  if (changePwBtn) changePwBtn.addEventListener("click", function() {
    if (!fbAuth || !currentUser || !currentUser.email) return;
    fbAuth.sendPasswordResetEmail(currentUser.email).then(function() {
      showToast("Password reset email sent.");
    }).catch(function(e) {
      showToast("Failed: " + e.message);
    });
  });

  // Delete account
  var deleteBtn = document.getElementById("settings-delete-account");
  if (deleteBtn) deleteBtn.addEventListener("click", function() {
    if (!confirm("This will permanently delete your account and all your data. Are you sure?")) return;
    if (!db || !currentUser) return;
    var uid = currentUser.uid;
    var batch = db.batch();
    batch.delete(db.collection("users").doc(uid));
    batch.commit().then(function() {
      return currentUser.delete();
    }).then(function() {
      showToast("Account deleted.");
    }).catch(function(e) {
      showToast("Error: " + e.message);
    });
  });

  var inviteBtn = document.getElementById("friends-invite-btn");
  if (inviteBtn) inviteBtn.addEventListener("click", inviteFriend);

  var bimClose = document.getElementById("badge-info-close");
  if (bimClose) bimClose.addEventListener("click", function() {
    var modal = document.getElementById("badge-info-modal");
    if (modal) modal.hidden = true;
  });
  var bimOverlay = document.getElementById("badge-info-overlay");
  if (bimOverlay) bimOverlay.addEventListener("click", function() {
    var modal = document.getElementById("badge-info-modal");
    if (modal) modal.hidden = true;
  });
}

// ─── Admin panel ─────────────────────────────────────────────────────────────

// ── Colour math helpers ───────────────────────────────────────────────────────
function hexToHsl(hex) {
  var r = parseInt(hex.slice(1,3),16)/255;
  var g = parseInt(hex.slice(3,5),16)/255;
  var b = parseInt(hex.slice(5,7),16)/255;
  var max = Math.max(r,g,b), min = Math.min(r,g,b);
  var h=0, s=0, l=(max+min)/2;
  if (max !== min) {
    var d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch (max) {
      case r: h = ((g-b)/d + (g<b?6:0))/6; break;
      case g: h = ((b-r)/d + 2)/6; break;
      case b: h = ((r-g)/d + 4)/6; break;
    }
  }
  return {h: h*360, s: s, l: l};
}

function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));
  var c = (1 - Math.abs(2*l-1)) * s;
  var x = c * (1 - Math.abs((h/60)%2-1));
  var m = l - c/2;
  var r,g,b;
  if      (h<60) {r=c;g=x;b=0;}
  else if (h<120){r=x;g=c;b=0;}
  else if (h<180){r=0;g=c;b=x;}
  else if (h<240){r=0;g=x;b=c;}
  else if (h<300){r=x;g=0;b=c;}
  else           {r=c;g=0;b=x;}
  return "#" + [r+m,g+m,b+m].map(function(v){return Math.round(v*255).toString(16).padStart(2,"0");}).join("");
}

// Suggest a dark-mode equivalent of a light-mode colour based on the CSS var name.
function suggestDark(lightHex, varName) {
  if (!lightHex || lightHex.length < 7) return lightHex;
  var hsl = hexToHsl(lightHex);
  var h = hsl.h, s = hsl.s, l = hsl.l;

  if (/board-bg|page-bg|sheet-bg|word-box|stat-box/.test(varName)) {
    // Backgrounds: very dark, same hue
    return hslToHex(h, s * 0.65, Math.max(0.05, 0.18 * (1 - l)));
  }
  if (/card-bg/.test(varName)) {
    return hslToHex(h, s * 0.65, Math.max(0.10, 0.22 * (1 - l)));
  }
  if (/brand/.test(varName) && !/stroke/.test(varName)) {
    // Accent: lighten for dark backgrounds
    return hslToHex(h, Math.min(s, 0.9), Math.min(l + 0.22, 0.80));
  }
  if (/text-primary/.test(varName)) {
    return hslToHex(h, s * 0.12, 0.93);
  }
  if (/text-secondary/.test(varName)) {
    return hslToHex(h, s * 0.30, Math.min(l + 0.38, 0.72));
  }
  if (/text-muted|prompt|icon/.test(varName)) {
    return hslToHex(h, s * 0.25, Math.min(l + 0.28, 0.60));
  }
  if (/tile-neutral/.test(varName) && !/stroke/.test(varName)) {
    // Neutral tile: dark grey, slight hue tint
    return hslToHex(h, Math.max(s * 0.5, 0.04), 0.22);
  }
  if (/tile-selected|tile-valid|tile-invalid|tile-played/.test(varName) && !/stroke/.test(varName)) {
    // Coloured states: slightly lighter
    return hslToHex(h, s, Math.min(l + 0.16, 0.85));
  }
  if (/stroke/.test(varName)) {
    return hslToHex(h, s, Math.min(l + 0.10, 0.55));
  }
  if (/lb-row-border/.test(varName)) {
    return hslToHex(h, s * 0.5, Math.max(0.14, 0.24 * (1 - l)));
  }
  // Default: brighten
  return hslToHex(h, s, Math.min(l + 0.22, 0.88));
}

// ── Preset themes ─────────────────────────────────────────────────────────────
var PRESET_THEMES = {
  default: {
    "--brand":"#7c4dff","--brand-dark":"#5e35b1","--board-bg":"#f2f2f7","--card-bg":"#ffffff",
    "--sheet-bg":"#f2f2f7","--word-box-bg":"#f0f0ec","--stat-box-bg":"#f7f7f5",
    "--text-primary":"#1c1c1e","--text-secondary":"#6e6e73","--text-muted":"#9ca3af",
    "--prompt-color":"#9ca3af","--icon-color":"#6e6e73","--lb-row-border":"#f0f0ec",
    "--tile-neutral":"#ffffff","--tile-neutral-stroke":"#e5e7eb","--tile-blank":"#f3f0eb",
    "--tile-text":"#1f2937","--tile-text-light":"#ffffff",
    "--tile-selected":"#7c4dff","--tile-selected-stroke":"#5e35b1",
    "--tile-valid":"#22c55e","--tile-valid-stroke":"#16a34a",
    "--tile-invalid":"#ef4444","--tile-invalid-stroke":"#dc2626",
    "--tile-played":"#4ade80","--tile-played-stroke":"#16a34a",
    "--dk-brand":"#a78bfa","--dk-brand-dark":"#7c4dff","--dk-board-bg":"#1c1c1e","--dk-card-bg":"#2c2c2e",
    "--dk-sheet-bg":"#1c1c1e","--dk-word-box-bg":"#2c2c2e","--dk-stat-box-bg":"#3a3a3c",
    "--dk-text-primary":"#f2f2f7","--dk-text-secondary":"#aeaeb2","--dk-text-muted":"#636366",
    "--dk-prompt-color":"#636366","--dk-icon-color":"#aeaeb2","--dk-lb-row-border":"#3a3a3c",
    "--dk-tile-neutral":"#3a3a3c","--dk-tile-neutral-stroke":"#48484a","--dk-tile-blank":"#3a3532",
    "--dk-tile-text":"#f2f2f7","--dk-tile-text-light":"#ffffff",
    "--dk-tile-selected":"#a78bfa","--dk-tile-selected-stroke":"#7c4dff",
    "--dk-tile-valid":"#4ade80","--dk-tile-valid-stroke":"#22c55e",
    "--dk-tile-invalid":"#f87171","--dk-tile-invalid-stroke":"#ef4444",
    "--dk-tile-played":"#86efac","--dk-tile-played-stroke":"#4ade80",
  },
  maroon: {
    // Cream tiles on wine-maroon board — original design spec
    "--brand":"#c0395c","--brand-dark":"#8e1f3d","--board-bg":"#f5f0e8","--card-bg":"#fdfaf5",
    "--sheet-bg":"#f0ebe0","--word-box-bg":"#eee8d8","--stat-box-bg":"#f5f0e8",
    "--text-primary":"#2d1a10","--text-secondary":"#6b4c3a","--text-muted":"#a08070",
    "--prompt-color":"#a08070","--icon-color":"#6b4c3a","--lb-row-border":"#eee8d8",
    "--tile-neutral":"#e8dfc8","--tile-neutral-stroke":"#c8b098","--tile-blank":"#f0e8d0",
    "--tile-text":"#1a0a00","--tile-text-light":"#ffffff",
    "--tile-selected":"#e8c840","--tile-selected-stroke":"#c9a820",
    "--tile-valid":"#5cb85c","--tile-valid-stroke":"#3d8b3d",
    "--tile-invalid":"#d9534f","--tile-invalid-stroke":"#a02020",
    "--tile-played":"#4c5ab8","--tile-played-stroke":"#333f8f",
    "--dk-brand":"#e8607a","--dk-brand-dark":"#c0395c","--dk-board-bg":"#3d1a24","--dk-card-bg":"#521d2a",
    "--dk-sheet-bg":"#3d1a24","--dk-word-box-bg":"#3d1a24","--dk-stat-box-bg":"#521d2a",
    "--dk-text-primary":"#f5e8d8","--dk-text-secondary":"#c8a898","--dk-text-muted":"#886050",
    "--dk-prompt-color":"#886050","--dk-icon-color":"#c8a898","--dk-lb-row-border":"#521d2a",
    "--dk-tile-neutral":"#e8dfc8","--dk-tile-neutral-stroke":"#c8b098","--dk-tile-blank":"#f0e8d0",
    "--dk-tile-text":"#1a0a00","--dk-tile-text-light":"#ffffff",
    "--dk-tile-selected":"#e8c840","--dk-tile-selected-stroke":"#c9a820",
    "--dk-tile-valid":"#5cb85c","--dk-tile-valid-stroke":"#3d8b3d",
    "--dk-tile-invalid":"#d9534f","--dk-tile-invalid-stroke":"#a02020",
    "--dk-tile-played":"#6c7ad8","--dk-tile-played-stroke":"#4c5ab8",
  },
  forest: {
    "--brand":"#2d7a4f","--brand-dark":"#1a5c38","--board-bg":"#f0f4f0","--card-bg":"#ffffff",
    "--sheet-bg":"#e8f0e8","--word-box-bg":"#e4ede4","--stat-box-bg":"#f0f5f0",
    "--text-primary":"#1a2e1a","--text-secondary":"#4a6a4a","--text-muted":"#7a9a7a",
    "--prompt-color":"#7a9a7a","--icon-color":"#4a6a4a","--lb-row-border":"#e0ece0",
    "--tile-neutral":"#ffffff","--tile-neutral-stroke":"#d0e4d0","--tile-blank":"#e8f2e8",
    "--tile-text":"#1a2e1a","--tile-text-light":"#ffffff",
    "--tile-selected":"#2d7a4f","--tile-selected-stroke":"#1a5c38",
    "--tile-valid":"#22c55e","--tile-valid-stroke":"#16a34a",
    "--tile-invalid":"#ef4444","--tile-invalid-stroke":"#dc2626",
    "--tile-played":"#a3e635","--tile-played-stroke":"#65a30d",
    "--dk-brand":"#4ade80","--dk-brand-dark":"#22c55e","--dk-board-bg":"#0f1a10","--dk-card-bg":"#1a2e1a",
    "--dk-sheet-bg":"#0f1a10","--dk-word-box-bg":"#1a2e1a","--dk-stat-box-bg":"#1e3520",
    "--dk-text-primary":"#e8f5e8","--dk-text-secondary":"#a0c8a0","--dk-text-muted":"#5a7a5a",
    "--dk-prompt-color":"#5a7a5a","--dk-icon-color":"#a0c8a0","--dk-lb-row-border":"#1e3520",
    "--dk-tile-neutral":"#1e3520","--dk-tile-neutral-stroke":"#2d4a2e","--dk-tile-blank":"#243828",
    "--dk-tile-text":"#e8f5e8","--dk-tile-text-light":"#ffffff",
    "--dk-tile-selected":"#4ade80","--dk-tile-selected-stroke":"#22c55e",
    "--dk-tile-valid":"#86efac","--dk-tile-valid-stroke":"#4ade80",
    "--dk-tile-invalid":"#f87171","--dk-tile-invalid-stroke":"#ef4444",
    "--dk-tile-played":"#bef264","--dk-tile-played-stroke":"#a3e635",
  },
  ocean: {
    "--brand":"#0e7490","--brand-dark":"#0c5d73","--board-bg":"#f0f8ff","--card-bg":"#ffffff",
    "--sheet-bg":"#e0f2fe","--word-box-bg":"#e0f2fe","--stat-box-bg":"#f0f8ff",
    "--text-primary":"#0c2438","--text-secondary":"#1e5a7a","--text-muted":"#5a8ca8",
    "--prompt-color":"#5a8ca8","--icon-color":"#1e5a7a","--lb-row-border":"#e0f2fe",
    "--tile-neutral":"#ffffff","--tile-neutral-stroke":"#bae6fd","--tile-blank":"#e0f2fe",
    "--tile-text":"#0c2438","--tile-text-light":"#ffffff",
    "--tile-selected":"#0e7490","--tile-selected-stroke":"#0c5d73",
    "--tile-valid":"#22c55e","--tile-valid-stroke":"#16a34a",
    "--tile-invalid":"#ef4444","--tile-invalid-stroke":"#dc2626",
    "--tile-played":"#38bdf8","--tile-played-stroke":"#0284c7",
    "--dk-brand":"#38bdf8","--dk-brand-dark":"#0ea5e9","--dk-board-bg":"#0c1825","--dk-card-bg":"#0f2535",
    "--dk-sheet-bg":"#0c1825","--dk-word-box-bg":"#0f2535","--dk-stat-box-bg":"#162d40",
    "--dk-text-primary":"#e0f2fe","--dk-text-secondary":"#7abbd8","--dk-text-muted":"#3a6a85",
    "--dk-prompt-color":"#3a6a85","--dk-icon-color":"#7abbd8","--dk-lb-row-border":"#162d40",
    "--dk-tile-neutral":"#162d40","--dk-tile-neutral-stroke":"#1e3d55","--dk-tile-blank":"#1a3548",
    "--dk-tile-text":"#e0f2fe","--dk-tile-text-light":"#ffffff",
    "--dk-tile-selected":"#38bdf8","--dk-tile-selected-stroke":"#0ea5e9",
    "--dk-tile-valid":"#4ade80","--dk-tile-valid-stroke":"#22c55e",
    "--dk-tile-invalid":"#f87171","--dk-tile-invalid-stroke":"#ef4444",
    "--dk-tile-played":"#7dd3fc","--dk-tile-played-stroke":"#38bdf8",
  },
  coffee: {
    "--brand":"#92400e","--brand-dark":"#6b2d08","--board-bg":"#fdf8f0","--card-bg":"#fffef8",
    "--sheet-bg":"#f5ede0","--word-box-bg":"#f5ede0","--stat-box-bg":"#fdf8f0",
    "--text-primary":"#2c1a08","--text-secondary":"#6b4825","--text-muted":"#a07050",
    "--prompt-color":"#a07050","--icon-color":"#6b4825","--lb-row-border":"#f0e0c8",
    "--tile-neutral":"#fffef8","--tile-neutral-stroke":"#e8d5b8","--tile-blank":"#f5ede0",
    "--tile-text":"#2c1a08","--tile-text-light":"#ffffff",
    "--tile-selected":"#92400e","--tile-selected-stroke":"#6b2d08",
    "--tile-valid":"#22c55e","--tile-valid-stroke":"#16a34a",
    "--tile-invalid":"#ef4444","--tile-invalid-stroke":"#dc2626",
    "--tile-played":"#d97706","--tile-played-stroke":"#b45309",
    "--dk-brand":"#fbbf24","--dk-brand-dark":"#f59e0b","--dk-board-bg":"#1a0e04","--dk-card-bg":"#261408",
    "--dk-sheet-bg":"#1a0e04","--dk-word-box-bg":"#261408","--dk-stat-box-bg":"#30180a",
    "--dk-text-primary":"#fdf8f0","--dk-text-secondary":"#c8a070","--dk-text-muted":"#7a5030",
    "--dk-prompt-color":"#7a5030","--dk-icon-color":"#c8a070","--dk-lb-row-border":"#30180a",
    "--dk-tile-neutral":"#30180a","--dk-tile-neutral-stroke":"#402010","--dk-tile-blank":"#382010",
    "--dk-tile-text":"#fdf8f0","--dk-tile-text-light":"#ffffff",
    "--dk-tile-selected":"#fbbf24","--dk-tile-selected-stroke":"#f59e0b",
    "--dk-tile-valid":"#4ade80","--dk-tile-valid-stroke":"#22c55e",
    "--dk-tile-invalid":"#f87171","--dk-tile-invalid-stroke":"#ef4444",
    "--dk-tile-played":"#fcd34d","--dk-tile-played-stroke":"#fbbf24",
  },
};

// Apply a PRESET_THEMES entry: set CSS vars + sync all pickers + live preview.
// Does NOT save — user clicks "Apply & save theme" to persist.
function applyPreset(presetKey) {
  var theme = PRESET_THEMES[presetKey];
  if (!theme) return;
  // Apply vars live
  Object.keys(theme).forEach(function(cssVar) {
    document.documentElement.style.setProperty(cssVar, theme[cssVar]);
  });
  buildColours();
  renderAllTiles();
  // Sync all colour pickers that exist in the DOM
  Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
    var cssVar = ADMIN_CSS_MAP[inputId];
    var inp = document.getElementById(inputId);
    if (inp && theme[cssVar]) inp.value = theme[cssVar];
  });
  // Update preset button active state
  document.querySelectorAll(".theme-preset").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.preset === presetKey);
  });
}

// Map of color input IDs → CSS variable names
// Maps input id → CSS variable name.
// Light-mode pickers set the main var directly on :root.
// Dark-mode pickers set --dk-* vars on :root (html[data-theme="dark"] reads them via var()).
var ADMIN_LIGHT_MAP = {
  "ac-brand":                "--brand",
  "ac-brand-dark":           "--brand-dark",
  "ac-board-bg":             "--board-bg",
  "ac-card-bg":              "--card-bg",
  "ac-sheet-bg":             "--sheet-bg",
  "ac-word-box-bg":          "--word-box-bg",
  "ac-stat-box-bg":          "--stat-box-bg",
  "ac-text-primary":         "--text-primary",
  "ac-text-secondary":       "--text-secondary",
  "ac-text-muted":           "--text-muted",
  "ac-prompt-color":         "--prompt-color",
  "ac-icon-color":           "--icon-color",
  "ac-lb-row-border":        "--lb-row-border",
  "ac-tile-neutral":         "--tile-neutral",
  "ac-tile-neutral-stroke":  "--tile-neutral-stroke",
  "ac-tile-blank":           "--tile-blank",
  "ac-tile-text":            "--tile-text",
  "ac-tile-text-light":      "--tile-text-light",
  "ac-tile-selected":        "--tile-selected",
  "ac-tile-selected-stroke": "--tile-selected-stroke",
  "ac-tile-valid":           "--tile-valid",
  "ac-tile-valid-stroke":    "--tile-valid-stroke",
  "ac-tile-invalid":         "--tile-invalid",
  "ac-tile-invalid-stroke":  "--tile-invalid-stroke",
  "ac-tile-played":          "--tile-played",
  "ac-tile-played-stroke":   "--tile-played-stroke",
};
var ADMIN_DARK_MAP = {
  "dk-brand":                "--dk-brand",
  "dk-brand-dark":           "--dk-brand-dark",
  "dk-board-bg":             "--dk-board-bg",
  "dk-card-bg":              "--dk-card-bg",
  "dk-sheet-bg":             "--dk-sheet-bg",
  "dk-word-box-bg":          "--dk-word-box-bg",
  "dk-stat-box-bg":          "--dk-stat-box-bg",
  "dk-text-primary":         "--dk-text-primary",
  "dk-text-secondary":       "--dk-text-secondary",
  "dk-text-muted":           "--dk-text-muted",
  "dk-prompt-color":         "--dk-prompt-color",
  "dk-icon-color":           "--dk-icon-color",
  "dk-lb-row-border":        "--dk-lb-row-border",
  "dk-tile-neutral":         "--dk-tile-neutral",
  "dk-tile-neutral-stroke":  "--dk-tile-neutral-stroke",
  "dk-tile-blank":           "--dk-tile-blank",
  "dk-tile-text":            "--dk-tile-text",
  "dk-tile-text-light":      "--dk-tile-text-light",
  "dk-tile-selected":        "--dk-tile-selected",
  "dk-tile-selected-stroke": "--dk-tile-selected-stroke",
  "dk-tile-valid":           "--dk-tile-valid",
  "dk-tile-valid-stroke":    "--dk-tile-valid-stroke",
  "dk-tile-invalid":         "--dk-tile-invalid",
  "dk-tile-invalid-stroke":  "--dk-tile-invalid-stroke",
  "dk-tile-played":          "--dk-tile-played",
  "dk-tile-played-stroke":   "--dk-tile-played-stroke",
};
// Combined for backward-compatible palette saves (all vars in one css object)
var ADMIN_CSS_MAP = Object.assign({}, ADMIN_LIGHT_MAP, ADMIN_DARK_MAP);

// ─── Game Card Audit ──────────────────────────────────────────────────────────
var WORD_PREFIXES = null;
var _auditCancel = false;

function buildWordPrefixes() {
  if (WORD_PREFIXES) return;
  WORD_PREFIXES = new Set();
  WORDS.forEach(function(w) {
    if (w.length < 4) return;
    for (var i = 1; i <= w.length; i++) WORD_PREFIXES.add(w.slice(0, i));
  });
}

function auditOnePuzzle(puzzle) {
  var letters = puzzle.letters.map(function(l) { return (l || "").toLowerCase(); });
  var blankCount = letters.filter(function(l) { return l === ""; }).length;

  // Build a local adjacency map (same hex topology as buildAdjacency but self-contained)
  var posMap = {};
  var idx = 0;
  for (var row = 0; row < ROW_SIZES.length; row++) {
    for (var col = 0; col < ROW_SIZES[row]; col++) {
      posMap[row + "," + col] = idx++;
    }
  }
  var adj = [];
  idx = 0;
  for (var row = 0; row < ROW_SIZES.length; row++) {
    for (var col = 0; col < ROW_SIZES[row]; col++) {
      var nbrs = [[row, col - 1], [row, col + 1]];
      if (row % 2 === 0) {
        nbrs.push([row - 1, col], [row - 1, col + 1], [row + 1, col], [row + 1, col + 1]);
      } else {
        nbrs.push([row - 1, col - 1], [row - 1, col], [row + 1, col - 1], [row + 1, col]);
      }
      var neighbors = [];
      nbrs.forEach(function(nr) {
        var key = nr[0] + "," + nr[1];
        if (posMap[key] !== undefined) neighbors.push(posMap[key]);
      });
      adj.push(neighbors);
      idx++;
    }
  }

  var found = new Set();
  var longestWord = "";
  var visited = new Uint8Array(22);

  function dfs(tileId, word) {
    if (!WORD_PREFIXES.has(word)) return; // no 4+ letter word starts with this — prune
    if (word.length >= 4 && WORDS.has(word) && !OFFENSIVE_WORDS.has(word)) {
      found.add(word);
      if (word.length > longestWord.length) longestWord = word;
    }
    if (word.length >= 16) return;
    var neighbors = adj[tileId];
    for (var ni = 0; ni < neighbors.length; ni++) {
      var nextId = neighbors[ni];
      if (visited[nextId]) continue;
      visited[nextId] = 1;
      var nextLetter = letters[nextId];
      if (nextLetter === "") {
        for (var ci = 97; ci <= 122; ci++) dfs(nextId, word + String.fromCharCode(ci));
      } else {
        dfs(nextId, word + nextLetter);
      }
      visited[nextId] = 0;
    }
  }

  for (var i = 0; i < 22; i++) {
    visited[i] = 1;
    var letter = letters[i];
    if (letter === "") {
      for (var ci = 97; ci <= 122; ci++) dfs(i, String.fromCharCode(ci));
    } else {
      dfs(i, letter);
    }
    visited[i] = 0;
  }

  var targetWord = (puzzle.prevAnswers && puzzle.prevAnswers[0])
    ? puzzle.prevAnswers[0].word.toLowerCase() : "";
  var flags = [];
  if (targetWord.length < 10) flags.push("short");
  if (longestWord.length > targetWord.length) flags.push("longer");

  return { wordCount: found.size, longestFound: longestWord, blankCount: blankCount,
           targetLen: targetWord.length, flags: flags };
}

function runAdminAudit() {
  buildWordPrefixes();

  var tbody       = document.getElementById("admin-audit-tbody");
  var bar         = document.getElementById("admin-audit-bar");
  var progLabel   = document.getElementById("admin-audit-progress-label");
  var progDiv     = document.getElementById("admin-audit-progress");
  var tableWrap   = document.getElementById("admin-audit-table-wrap");
  var summaryDiv  = document.getElementById("admin-audit-summary");
  var runBtn      = document.getElementById("admin-audit-run-btn");
  var cancelBtn   = document.getElementById("admin-audit-cancel-btn");
  if (!tbody) return;

  tbody.innerHTML = "";
  tableWrap.style.display = "none";
  summaryDiv.style.display = "none";
  progDiv.style.display = "block";
  bar.style.width = "0%";
  if (runBtn) runBtn.disabled = true;
  if (cancelBtn) cancelBtn.style.display = "";
  _auditCancel = false;

  var total = PUZZLES.length;
  var i = 0, shortCount = 0, longerCount = 0;

  function processBatch() {
    if (_auditCancel) {
      progDiv.style.display = "none";
      if (runBtn) runBtn.disabled = false;
      if (cancelBtn) cancelBtn.style.display = "none";
      return;
    }
    var batchEnd = Math.min(i + 8, total);
    while (i < batchEnd) {
      var puz = PUZZLES[i];
      var r = auditOnePuzzle(puz);
      var targetWord = puz.prevAnswers && puz.prevAnswers[0] ? puz.prevAnswers[0].word : "";

      if (r.flags.indexOf("short") >= 0) shortCount++;
      if (r.flags.indexOf("longer") >= 0) longerCount++;

      var rowBg = r.flags.indexOf("short") >= 0 ? "#fff5f5"
                : r.flags.indexOf("longer") >= 0 ? "#fffbf0" : "";

      var longestTxt = r.longestFound
        ? (r.longestFound.toUpperCase() + (r.longestFound.toLowerCase() === targetWord.toLowerCase()
            ? " <span style='color:#22c55e;font-size:0.75em'>✓</span>"
            : " <span style='color:#e67e00;font-weight:700;font-size:0.8em'>↑</span>"))
        : "<span style='color:#d1d5db'>—</span>";

      var flagsHtml = r.flags.length
        ? r.flags.map(function(f) { return '<span class="audit-flag audit-flag-' + f + '">' + f.toUpperCase() + '</span>'; }).join(" ")
        : "<span style='color:#d1d5db;font-size:0.78em'>OK</span>";

      var pubDate = new Date(PUZZLE_BASE_MS + i * 86400000);
      var pubDateStr = pubDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

      var tr = document.createElement("tr");
      tr.style.background = rowBg;
      tr.innerHTML =
        '<td class="audit-td" style="text-align:center;color:#9ca3af;">' + (i + 1) + '</td>' +
        '<td class="audit-td" style="color:#6b7280;font-size:0.76rem;white-space:nowrap;">' + pubDateStr + '</td>' +
        '<td class="audit-td" style="font-weight:700;font-family:monospace;letter-spacing:0.05em;">' + escHtml(targetWord.toUpperCase()) + '</td>' +
        '<td class="audit-td" style="text-align:center;font-weight:' + (r.targetLen < 10 ? "700" : "400") + ';color:' + (r.targetLen < 10 ? "#ef4444" : "#374151") + ';">' + r.targetLen + '</td>' +
        '<td class="audit-td" style="text-align:center;color:#6b7280;">' + r.wordCount + '</td>' +
        '<td class="audit-td" style="font-family:monospace;font-size:0.82rem;">' + longestTxt + '</td>' +
        '<td class="audit-td" style="text-align:center;color:#9ca3af;">' + (r.blankCount || "—") + '</td>' +
        '<td class="audit-td">' + flagsHtml + '</td>';
      tbody.appendChild(tr);
      i++;
    }

    var pct = Math.round(i / total * 100);
    bar.style.width = pct + "%";
    progLabel.textContent = i + " / " + total;

    if (i < total) {
      setTimeout(processBatch, 0);
    } else {
      progDiv.style.display = "none";
      tableWrap.style.display = "";
      summaryDiv.style.display = "";
      summaryDiv.innerHTML =
        "<strong style='color:#ef4444'>" + shortCount + "</strong> cards with target &lt;10 letters &nbsp;·&nbsp;" +
        "<strong style='color:#e67e00'>" + longerCount + "</strong> cards where a longer valid word exists on the board";
      if (runBtn) runBtn.disabled = false;
      if (cancelBtn) cancelBtn.style.display = "none";
    }
  }
  setTimeout(processBatch, 0);
}

// ── Development Backlog — initial seed data ─────────────────────────────────
var INITIAL_BACKLOG_ITEMS = [
  // Bugs — standalone, immediately actionable
  { id:"BLG-001", title:"Ticket icon size to be kept fixed for user total", category:"bug", status:"open", priority:"medium", blockedBy:"", notes:"Icon grows/shrinks with ticket number length. Should be fixed width regardless of digit count.", branch:"" },
  { id:"BLG-002", title:"Hint disables when today's word is visibly selected", category:"bug", status:"open", priority:"medium", blockedBy:"", notes:"Show toast 'No Hint Needed — You Found Today’s Word' instead of triggering a hint.", branch:"" },
  { id:"BLG-003", title:"Retracing to single starting letter treated as manual clear", category:"bug", status:"open", priority:"low", blockedBy:"", notes:"If player traces back to only the starting tile, treat as a clear (not a word attempt). Board resets silently.", branch:"" },
  { id:"BLG-004", title:"Toast message position: over played word area, not over date", category:"bug", status:"open", priority:"low", blockedBy:"", notes:"Move toast anchor so it appears above the played word text area and does not obscure the date display.", branch:"" },
  { id:"BLG-005", title:"Share message uses correct award and copy for that day’s puzzle", category:"bug", status:"open", priority:"medium", blockedBy:"", notes:"When sharing a previous day, award label and message body should reflect that day’s result, not today’s.", branch:"" },
  // Improvements — standalone
  { id:"BLG-006", title:"'You found N words' messaging while playing non-longest words", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"After submitting a valid but shorter word, cycle in 'You have found a total of N words'. Messaging must account for whether the longest word has already been found to stay supportive and non-confusing.", branch:"" },
  { id:"BLG-007", title:"Idle 30s swipe hint animation (once per session)", category:"improvement", status:"open", priority:"low", blockedBy:"", notes:"After 30s idle: show 'Swipe right/left to move between days' with animated pointing finger (right→left, 3 loops). Grey text in the space between board bottom and pill bar. Show only once per session.", branch:"" },
  { id:"BLG-008", title:"First-visit popup when arriving on a previous day", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"Message: 'Replay any day — Play for fun. Find all the words. Tickets are awarded only on the puzzle’s publication date.' Single button: Replay.", branch:"" },
  { id:"BLG-009", title:"'Words to Discover' becomes 'Reveal All' with confirmation flow", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"Button label changes to 'Reveal All'. Opens modal: 'Free after finding today’s longest word, or −10 Tickets.' Buttons: 'Reveal for free' / 'Reveal −10 Tickets' / Cancel.", branch:"" },
  { id:"BLG-010", title:"Hide date and nav arrows in score sheet reduced view", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"In reduced view, date and navigation arrows are hidden. Swipe left/right and tapping date in main game area still work as shortcuts. On full-page expand, date appears identically to main game area.", branch:"" },
  { id:"BLG-011", title:"Score card cycling messages in reduced view", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"Cycle: 'Swipe left/right to move between days'; 'Tap the date to jump to any day'; 'You found today’s word in N attempts'; 'You found a total of N words'; 'Share and challenge your friends'. Maintain consistent wording with existing messages.", branch:"" },
  { id:"BLG-012", title:"All in-game messages manageable in admin area", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"Expand the admin message editor to cover all message types and sequences, not just completion messages.", branch:"" },
  // Design Polish — from plan, not yet implemented
  { id:"BLG-013", title:"Remove Joyall brand header from game card", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"Remove <header id='brand-header'>. Add compensating top padding so board breathes. Board takes full card width from the top.", branch:"" },
  { id:"BLG-014", title:"Replace ℹ emoji info button with outline SVG icon", category:"improvement", status:"open", priority:"low", blockedBy:"", notes:"iOS renders ℹ as a blue rounded-square glyph. Replace with SVG circle-i outline (stroke, no fill).", branch:"" },
  { id:"BLG-015", title:"Replace ↺ emoji reset button with SVG undo-arrow icon", category:"improvement", status:"open", priority:"low", blockedBy:"", notes:"Emoji renders inconsistently across platforms. Replace with clean SVG counterclockwise arrow.", branch:"" },
  { id:"BLG-016", title:"Idle hint: pulse 3–4 connected adjacent tiles instead of all tiles", category:"improvement", status:"open", priority:"low", blockedBy:"", notes:"Build a short connected chain starting from a random neutral tile. Stagger the pulse across chain tiles (130ms delay each). Guides player without overwhelming the board.", branch:"" },
  { id:"BLG-017", title:"Font size increases: prompt, answer text, score value, ticket badge", category:"improvement", status:"open", priority:"low", blockedBy:"", notes:"game-prompt: 0.78→0.9rem, allow 2 lines. answer-text: 1.2→1.5rem. score-value: 1.8→2.4rem. score-level: 0.7→0.8rem. ticket-badge: 0.8→0.9rem.", branch:"" },
  { id:"BLG-018", title:"Tile letter font size increase (20→22)", category:"improvement", status:"open", priority:"low", blockedBy:"", notes:"In buildTile() SVG, increase font-size attribute from 20 to 22.", branch:"" },
  // Features — blocked on systems not yet built
  { id:"BLG-019", title:"Push 24h after first play: 'Ready to find today’s longest word?'", category:"feature", status:"blocked", priority:"medium", blockedBy:"Push notification system", notes:"Opens today’s puzzle when notification is tapped.", branch:"" },
  { id:"BLG-020", title:"Push notification when a friend achieves Grandmaster in One", category:"feature", status:"blocked", priority:"low", blockedBy:"Push notifications + friend/social system", notes:"Encourages player to play when a friend achieves the top award.", branch:"" },
  { id:"BLG-021", title:"Allow player to heart a friend’s daily award", category:"feature", status:"blocked", priority:"medium", blockedBy:"Friend/social system", notes:"", branch:"" },
  { id:"BLG-022", title:"Show friend hasn’t played; send them a free hint for −2 Tickets", category:"feature", status:"blocked", priority:"medium", blockedBy:"Friend/social system", notes:"Encourages friend engagement via hint gifting.", branch:"" },
  { id:"BLG-023", title:"Send Extend Streak token to a friend who’s run out", category:"feature", status:"blocked", priority:"medium", blockedBy:"Friend system + push notifications", notes:"−10 Tickets to send. In-app toast tells the player if they missed the push.", branch:"" },
  { id:"BLG-024", title:"Push at 23:00 to save N-day streak before midnight", category:"feature", status:"blocked", priority:"medium", blockedBy:"Push notification system", notes:"Triggered when player hasn’t played that day and their streak is at risk of breaking.", branch:"" },
  // Panel header / sheet UX fixes
  { id:"BLG-025", title:"Panel headings larger and better spaced (Rules, Scores, Profile, Settings)", category:"bug", status:"in-progress", priority:"high", blockedBy:"", notes:"font-size 0.78rem → 1.05rem, letter-spacing 0.13em → 0.07em, heading row padding increased.", branch:"fix/panel-headers" },
  { id:"BLG-026", title:"X close icon placed correctly at right of header bar", category:"bug", status:"in-progress", priority:"high", blockedBy:"", notes:"Added explicit grid-column placement: title in column 2 (1fr), button in column 3 (44px right). Was auto-placed into wrong columns.", branch:"fix/panel-headers" },
  { id:"BLG-027", title:"Scores reduced view closes when tapping above score card", category:"improvement", status:"in-progress", priority:"medium", blockedBy:"", notes:"pointerdown listener on document; closes sheet when tap y-position is above sheet.getBoundingClientRect().top.", branch:"fix/panel-headers" },
  { id:"BLG-028", title:"Scores reduced view closes on swipe-down of header bar", category:"improvement", status:"in-progress", priority:"medium", blockedBy:"", notes:"Extended initBackPanelDrag touchend: swipe down from reduced view (not full-screen) calls closeSheet().", branch:"fix/panel-headers" },
  { id:"BLG-029", title:"Hint sequence — rotate letter hints in order, not always first letter", category:"improvement", status:"open", priority:"medium", blockedBy:"", notes:"Each time the player asks for a hint, show the next unselected letter in sequence (1st letter first, then 2nd, etc.). Currently the hint always reveals the first letter regardless of how many times it has been tapped.", branch:"" },
];

var ADMIN_SECTIONS = [
  { id: "themes",     label: "Themes"     },
  { id: "palette",    label: "Palette"    },
  { id: "typography", label: "Typography" },
  { id: "saved",      label: "Saved"      },
  { id: "tickets",    label: "Tickets"    },
  { id: "messages",   label: "Messages"   },
  { id: "data",       label: "Data"       },
  { id: "audit",      label: "Audit"      },
  { id: "backlog",    label: "Backlog"    },
];

function openSidebar() {
  var nav = document.getElementById("admin-nav");
  var overlay = document.getElementById("admin-sidebar-overlay");
  if (nav) nav.classList.add("open");
  if (overlay) overlay.classList.add("open");
}

function closeSidebar() {
  var nav = document.getElementById("admin-nav");
  var overlay = document.getElementById("admin-sidebar-overlay");
  if (nav) nav.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
}

function expandAdminSection(id) {
  var content  = document.getElementById("admin-content");
  var panel    = document.getElementById("admin-panel");
  var titleEl  = document.getElementById("admin-section-title");
  if (!content) return;
  content.querySelectorAll(".admin-section").forEach(function(sec) {
    sec.style.display = (sec.dataset.section === id) ? "" : "none";
  });
  document.querySelectorAll(".admin-nav-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.section === id);
  });
  if (titleEl) {
    var def = ADMIN_SECTIONS.find(function(d) { return d.id === id; });
    titleEl.textContent = def ? def.label : "Admin";
  }
  closeSidebar();
  if (panel) panel.scrollTo({ top: 0, behavior: "instant" });
}

function initAdminNav() {
  var content = document.getElementById("admin-content");
  var nav     = document.getElementById("admin-nav");
  var menuBtn = document.getElementById("admin-menu-btn");
  var overlay = document.getElementById("admin-sidebar-overlay");
  if (!content || !nav) return;

  // Assign data-section and hide all sections initially
  content.querySelectorAll(".admin-section").forEach(function(sec, i) {
    var def = ADMIN_SECTIONS[i];
    if (!def) return;
    sec.dataset.section = def.id;
    sec.style.display = "none";
  });

  // Build sidebar nav items
  nav.innerHTML = "";
  ADMIN_SECTIONS.forEach(function(def) {
    var btn = document.createElement("button");
    btn.className = "admin-nav-btn";
    btn.dataset.section = def.id;
    btn.textContent = def.label;
    btn.addEventListener("click", function() { expandAdminSection(def.id); });
    nav.appendChild(btn);
  });

  // Hamburger opens sidebar; overlay click closes it
  if (menuBtn) menuBtn.addEventListener("click", openSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Open Backlog by default
  expandAdminSection("backlog");
}

function initAdmin() {
  var panel = document.getElementById("admin-panel");
  if (!panel) return;

  // Settings tab admin trigger button — shown/hidden by updateAdminAccess() on auth change
  var settingsAdminBtn = document.getElementById("settings-admin-btn");
  if (settingsAdminBtn) {
    settingsAdminBtn.addEventListener("click", function() {
      // Refresh palette list from server each time panel opens
      loadServerPalettes().then(function(palettes) { renderPaletteList(palettes); });
      // Populate ticket input with current count
      var ticketInput = document.getElementById("admin-ticket-input");
      if (ticketInput) ticketInput.value = ticketCount;
      panel.hidden = false;
      // Refresh backlog and reopen its section
      var list = document.getElementById("admin-backlog-list");
      if (list) list.innerHTML = "<p style='color:#bbb;font-size:0.82rem;padding:12px 0'>Loading…</p>";
      loadBacklog().then(function(items) {
        _backlogItems = items;
        renderBacklog(items);
        expandAdminSection("backlog");
      }).catch(function(err) {
        if (list) list.innerHTML = "<p style='color:#c00;font-size:0.82rem;padding:12px 0'>Failed to load backlog: " + (err && err.message ? err.message : err) + "</p>";
      });
    });
  }

  // Settings version label
  var versionLabel = document.getElementById("settings-version-label");
  if (versionLabel) versionLabel.textContent = "Shukuma v" + VERSION;

  // Close button (HTML uses id="admin-close")
  var closeBtn = document.getElementById("admin-close");
  if (closeBtn) closeBtn.addEventListener("click", function() { panel.hidden = true; });

  // Preset theme buttons
  panel.querySelectorAll(".theme-preset").forEach(function(btn) {
    btn.addEventListener("click", function() {
      applyPreset(btn.dataset.preset);
      showToast("Theme preview applied — click 'Apply & save' to make it permanent.");
    });
  });

  // Suggest-dark buttons
  panel.querySelectorAll(".suggest-dark").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var lightId = btn.dataset.light;
      var darkId  = btn.dataset.dark;
      var lightInput = document.getElementById(lightId);
      var darkInput  = document.getElementById(darkId);
      if (!lightInput || !darkInput) return;
      var cssVar = ADMIN_CSS_MAP[darkId] || darkId;
      var suggested = suggestDark(lightInput.value, cssVar);
      darkInput.value = suggested;
      document.documentElement.style.setProperty(ADMIN_CSS_MAP[darkId], suggested);
      buildColours();
      renderAllTiles();
    });
  });

  // Wire ALL colour pickers (light + dark) from current CSS vars
  Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
    var cssVar = ADMIN_CSS_MAP[inputId];
    var input = document.getElementById(inputId);
    if (!input) return;
    var computed = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    if (computed) input.value = computed;
    input.addEventListener("input", function() {
      document.documentElement.style.setProperty(cssVar, input.value);
      buildColours();
      renderAllTiles();
    });
  });

  // Font selector — seed from current applied font
  var fontSelect = document.getElementById("ac-font");
  if (fontSelect) {
    var currentFont = document.body.style.fontFamily;
    if (currentFont) fontSelect.value = currentFont;
    fontSelect.addEventListener("change", function() {
      document.body.style.fontFamily = fontSelect.value;
    });
  }

  // Font scale (range 85–120 = percentage of base size) — seed from current applied scale
  var fontScaleRange = document.getElementById("ac-font-scale");
  if (fontScaleRange) {
    var currentScale = document.documentElement.style.fontSize;
    if (currentScale) fontScaleRange.value = String(Math.round(parseFloat(currentScale) * 100));
    fontScaleRange.addEventListener("input", function() {
      var pct = parseFloat(fontScaleRange.value);
      document.documentElement.style.fontSize = (pct / 100) + "rem";
    });
  }

  // Apply button — snapshot all pickers (light + dark) and save to server
  function applyAndSaveTheme() {
    var overrides = {};
    Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
      var input = document.getElementById(inputId);
      if (input) overrides[ADMIN_CSS_MAP[inputId]] = input.value;
    });
    var themeData = {
      css:   overrides,
      font:  fontSelect   ? fontSelect.value   : null,
      scale: fontScaleRange ? fontScaleRange.value : null,
      name:  "Custom",
    };
    applyThemeData(themeData);
    saveServerTheme(themeData).then(function() {
      showToast("Theme saved and applied for all users.");
    });
  }
  var applyBtn = document.getElementById("admin-apply-btn");
  if (applyBtn) applyBtn.addEventListener("click", applyAndSaveTheme);
  var paletteApplyBtn = document.getElementById("palette-apply-btn");
  if (paletteApplyBtn) paletteApplyBtn.addEventListener("click", applyAndSaveTheme);

  // Reset button — delete server theme so all clients revert to CSS defaults
  var resetBtn = document.getElementById("admin-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", function() {
    if (!confirm("Reset to CSS defaults for all users? Palettes are kept.")) return;
    if (db && isAdmin()) {
      db.collection("config").doc("theme").delete().catch(function() {});
    }
    window.location.reload();
  });

  // Clear all local storage
  var clearBtn = document.getElementById("admin-clear-storage-btn");
  if (clearBtn) clearBtn.addEventListener("click", function() {
    if (!confirm("Clear all local storage? This resets your game state.")) return;
    localStorage.clear();
    window.location.reload();
  });

  // Set ticket count manually
  var setTicketsBtn = document.getElementById("admin-set-tickets-btn");
  if (setTicketsBtn) setTicketsBtn.addEventListener("click", async function() {
    var input = document.getElementById("admin-ticket-input");
    if (!input) return;
    var newCount = parseInt(input.value, 10);
    if (isNaN(newCount) || newCount < 0) { showToast("Invalid ticket count."); return; }
    ticketCount = newCount;
    saveTickets();
    updateTicketDisplay();
    if (db && currentUser) {
      try { await db.collection("users").doc(currentUser.uid).set({ tickets: newCount }, { merge: true }); } catch(_) {}
    }
    showToast("Tickets set to " + newCount + ".");
  });

  // Set award ticket value
  var setAwardBtn = document.getElementById("admin-set-award-tickets-btn");
  if (setAwardBtn) setAwardBtn.addEventListener("click", function() {
    var input = document.getElementById("admin-award-ticket-input");
    if (!input) return;
    var v = parseInt(input.value, 10);
    if (isNaN(v) || v < 0) { showToast("Invalid value."); return; }
    AWARD_TICKETS = v;
    saveAwardTickets();
    showToast("Award tickets set to " + v + " per award.");
  });

  // Cycle messages — populate textarea with current messages, save on button click
  var cycleTA = document.getElementById("admin-cycle-messages");
  if (cycleTA) {
    cycleTA.value = cycleMessages.join("\n");
    var saveCycleBtn = document.getElementById("admin-save-cycle-messages-btn");
    if (saveCycleBtn) saveCycleBtn.addEventListener("click", function() {
      var lines = cycleTA.value.split("\n").map(function(l) { return l.trim(); }).filter(Boolean);
      if (!lines.length) { showToast("Enter at least one message."); return; }
      cycleMessages = lines;
      saveCycleMessages();
      // Persist to Firestore so all users get the update
      if (db) {
        db.collection("config").doc("cycleMessages").set({ messages: lines })
          .then(function() { showToast("Messages saved for all users."); })
          .catch(function() { showToast("Saved locally (Firestore failed)."); });
      } else {
        showToast("Messages saved.");
      }
    });
  }

  // Seed demo data
  var seedBtn = document.getElementById("admin-seed-btn");
  if (seedBtn) seedBtn.addEventListener("click", function() {
    seedDemoData().then(function() {
      showToast("Demo data seeded for matt@cranialscratch.com.");
    }).catch(function(e) {
      showToast("Seed failed: " + (e.message || e));
    });
  });

  // ── Palette management ──────────────────────────────────────────────
  loadServerPalettes().then(renderPaletteList);

  var paletteNameInput = document.getElementById("admin-palette-name");
  var savePaletteBtn   = document.getElementById("admin-save-palette-btn");
  if (savePaletteBtn) {
    savePaletteBtn.addEventListener("click", function() {
      // Build default name from current datetime
      var now = new Date();
      var defaultName =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0") + " " +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0");
      var palName = (paletteNameInput && paletteNameInput.value.trim()) || defaultName;

      // Snapshot all current CSS vars (light + dark pickers)
      var cssState = {};
      Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
        var inp = document.getElementById(inputId);
        if (inp) cssState[ADMIN_CSS_MAP[inputId]] = inp.value;
      });

      var pal = {
        id:    "pal_" + now.getTime(),
        name:  palName,
        css:   cssState,
        font:  fontSelect  ? fontSelect.value  : null,
        scale: fontScaleRange ? fontScaleRange.value : null,
      };

      loadServerPalettes().then(function(all) {
        all.push(pal);
        saveServerPalettes(all);
        renderPaletteList(all);
        if (paletteNameInput) paletteNameInput.value = "";
        showToast('"' + palName + '" saved.');
      });
    });
  }

  // ── Game Card Audit ─────────────────────────────────────────────────────
  var auditRunBtn = document.getElementById("admin-audit-run-btn");
  var auditCancelBtn = document.getElementById("admin-audit-cancel-btn");
  if (auditRunBtn) auditRunBtn.addEventListener("click", runAdminAudit);
  if (auditCancelBtn) auditCancelBtn.addEventListener("click", function() { _auditCancel = true; });

  var sendNoticeBtn = document.getElementById("admin-reset-past-scores-btn");
  if (sendNoticeBtn) sendNoticeBtn.addEventListener("click", sendTesterNotice);

  var resetAllScoresBtn = document.getElementById("admin-reset-all-scores-btn");
  if (resetAllScoresBtn) resetAllScoresBtn.addEventListener("click", resetAllScores);

  // ── Admin Nav (accordion + sticky pills) ───────────────────────────────
  initAdminNav();

  // ── Development Backlog ─────────────────────────────────────────────────
  initBacklogAdmin();
}

// ── Development Backlog — state ─────────────────────────────────────────────
var _backlogItems = [];
var _backlogFilterStatus = "";
var _backlogFilterCat = "";

function loadBacklog() {
  if (!db) return Promise.resolve([]);
  return db.collection("config").doc("backlog").get().then(function(snap) {
    if (!snap.exists || !(snap.data().items || []).length) return seedInitialBacklog();
    var items = snap.data().items;
    // Merge any new items from INITIAL_BACKLOG_ITEMS that aren't in Firestore yet
    var existingIds = new Set(items.map(function(i) { return i.id; }));
    var toAdd = INITIAL_BACKLOG_ITEMS.filter(function(i) { return !existingIds.has(i.id); });
    if (!toAdd.length) return items;
    var now = Date.now();
    var merged = items.concat(toAdd.map(function(item) { return Object.assign({}, item, { createdAt: now }); }));
    return db.collection("config").doc("backlog").set({ items: merged }).then(function() { return merged; });
  });
}

function seedInitialBacklog() {
  var now = Date.now();
  var items = INITIAL_BACKLOG_ITEMS.map(function(item) {
    return Object.assign({}, item, { createdAt: now });
  });
  return db.collection("config").doc("backlog").set({ items: items }).then(function() { return items; });
}

function saveBacklog(items) {
  if (!db) return Promise.resolve();
  return db.collection("config").doc("backlog").set({ items: items });
}

function renderBacklog(items) {
  var list = document.getElementById("admin-backlog-list");
  if (!list) return;

  var filtered = items.filter(function(item) {
    if (_backlogFilterStatus && item.status !== _backlogFilterStatus) return false;
    if (_backlogFilterCat && item.category !== _backlogFilterCat) return false;
    return true;
  });

  var statusOrder = { "in-progress": 0, "open": 1, "blocked": 2, "done": 3 };
  var priorityOrder = { "high": 0, "medium": 1, "low": 2 };
  filtered.sort(function(a, b) {
    var sd = (statusOrder[a.status] || 0) - (statusOrder[b.status] || 0);
    if (sd !== 0) return sd;
    return (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1);
  });

  if (!filtered.length) {
    list.innerHTML = "<p style='color:#999;font-size:0.82rem;text-align:center;padding:20px 0'>No items match this filter.</p>";
    return;
  }

  var STATUS_LABELS  = { "open": "Open", "in-progress": "In Progress", "blocked": "Blocked", "done": "Done" };
  var CAT_LABELS     = { "bug": "Bug", "improvement": "Improvement", "feature": "Feature" };
  var PRI_LABELS     = { "high": "High", "medium": "Med", "low": "Low" };

  list.innerHTML = filtered.map(function(item) {
    var isDone = item.status === "done";
    var blockedNote = (item.status === "blocked" && item.blockedBy)
      ? "<div class='admin-backlog-blocked-note'>⛔ Requires: " + item.blockedBy.replace(/</g, "&lt;") + "</div>"
      : "";
    var branchNote = item.branch
      ? "<div class='admin-backlog-branch'>⎇ " + item.branch.replace(/</g, "&lt;") + "</div>"
      : "";
    var notesNote = item.notes
      ? "<div class='admin-backlog-notes-text'>" + item.notes.replace(/</g, "&lt;") + "</div>"
      : "";
    var doneLabel = isDone ? "Reopen" : "Done ✓";
    return "<div class='admin-backlog-item" + (isDone ? " is-done" : "") + "' data-id='" + item.id + "'>" +
      "<div class='admin-backlog-item-body'>" +
        "<div class='admin-backlog-item-title'>" + item.title.replace(/</g, "&lt;") + "</div>" +
        "<div class='admin-backlog-badges'>" +
          "<span class='admin-backlog-badge badge-status-" + item.status + "'>" + (STATUS_LABELS[item.status] || item.status) + "</span>" +
          "<span class='admin-backlog-badge badge-cat-" + item.category + "'>" + (CAT_LABELS[item.category] || item.category) + "</span>" +
          "<span class='admin-backlog-badge badge-priority-" + item.priority + "'>" + (PRI_LABELS[item.priority] || item.priority) + "</span>" +
        "</div>" +
        blockedNote + branchNote + notesNote +
      "</div>" +
      "<div class='admin-backlog-item-actions'>" +
        "<button class='admin-backlog-action-btn' data-action='edit' data-id='" + item.id + "'>Edit</button>" +
        "<button class='admin-backlog-action-btn done-btn' data-action='toggle-done' data-id='" + item.id + "'>" + doneLabel + "</button>" +
        "<button class='admin-backlog-action-btn danger' data-action='delete' data-id='" + item.id + "'>Delete</button>" +
      "</div>" +
    "</div>";
  }).join("");

  list.querySelectorAll("[data-action]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var action = btn.getAttribute("data-action");
      var id = btn.getAttribute("data-id");
      if (action === "edit")        backlogOpenEdit(id);
      else if (action === "toggle-done") backlogToggleDone(id);
      else if (action === "delete") backlogDelete(id);
    });
  });
}

function backlogOpenEdit(id) {
  var item = id ? _backlogItems.find(function(i) { return i.id === id; }) : null;
  var form = document.getElementById("admin-backlog-form");
  if (!form) return;
  document.getElementById("admin-backlog-editing-id").value = id || "";
  document.getElementById("admin-backlog-title").value = item ? item.title : "";
  document.getElementById("admin-backlog-category").value = item ? item.category : "bug";
  document.getElementById("admin-backlog-status").value = item ? item.status : "open";
  document.getElementById("admin-backlog-priority").value = item ? item.priority : "medium";
  document.getElementById("admin-backlog-blocked-by").value = item ? (item.blockedBy || "") : "";
  document.getElementById("admin-backlog-notes").value = item ? (item.notes || "") : "";
  document.getElementById("admin-backlog-branch").value = item ? (item.branch || "") : "";
  var blockedRow = document.getElementById("admin-backlog-blocked-row");
  if (blockedRow) blockedRow.style.display = (item && item.status === "blocked") ? "" : "none";
  form.style.display = "";
  document.getElementById("admin-backlog-title").focus();
}

function backlogToggleDone(id) {
  var item = _backlogItems.find(function(i) { return i.id === id; });
  if (!item) return;
  item.status = item.status === "done" ? "open" : "done";
  saveBacklog(_backlogItems).then(function() { renderBacklog(_backlogItems); })
    .catch(function(err) { showToast("Save failed: " + (err && err.message ? err.message : String(err))); });
}

function backlogDelete(id) {
  if (!confirm("Delete this backlog item?")) return;
  _backlogItems = _backlogItems.filter(function(i) { return i.id !== id; });
  saveBacklog(_backlogItems).then(function() { renderBacklog(_backlogItems); })
    .catch(function(err) { showToast("Delete failed: " + (err && err.message ? err.message : String(err))); });
}

function initBacklogAdmin() {
  var addBtn      = document.getElementById("admin-backlog-add-btn");
  var form        = document.getElementById("admin-backlog-form");
  var saveBtn     = document.getElementById("admin-backlog-save-btn");
  var cancelBtn   = document.getElementById("admin-backlog-cancel-btn");
  var statusFilter = document.getElementById("admin-backlog-filter-status");
  var catFilter   = document.getElementById("admin-backlog-filter-cat");
  var statusSelect = document.getElementById("admin-backlog-status");
  var blockedRow  = document.getElementById("admin-backlog-blocked-row");

  if (addBtn) addBtn.addEventListener("click", function() { backlogOpenEdit(null); });
  if (cancelBtn) cancelBtn.addEventListener("click", function() { if (form) form.style.display = "none"; });
  if (statusSelect) statusSelect.addEventListener("change", function() {
    if (blockedRow) blockedRow.style.display = this.value === "blocked" ? "" : "none";
  });
  if (statusFilter) statusFilter.addEventListener("change", function() {
    _backlogFilterStatus = this.value;
    renderBacklog(_backlogItems);
  });
  if (catFilter) catFilter.addEventListener("change", function() {
    _backlogFilterCat = this.value;
    renderBacklog(_backlogItems);
  });
  if (saveBtn) saveBtn.addEventListener("click", function() {
    var editingId = document.getElementById("admin-backlog-editing-id").value;
    var title = (document.getElementById("admin-backlog-title").value || "").trim();
    if (!title) { showToast("Please enter a title."); return; }
    var existing = editingId ? _backlogItems.find(function(i) { return i.id === editingId; }) : null;
    var newItem = {
      id: editingId || ("BLG-" + String(Date.now()).slice(-6)),
      title: title,
      category: document.getElementById("admin-backlog-category").value,
      status: document.getElementById("admin-backlog-status").value,
      priority: document.getElementById("admin-backlog-priority").value,
      blockedBy: document.getElementById("admin-backlog-blocked-by").value.trim(),
      notes: document.getElementById("admin-backlog-notes").value.trim(),
      branch: document.getElementById("admin-backlog-branch").value.trim(),
      createdAt: existing ? (existing.createdAt || Date.now()) : Date.now(),
    };
    if (editingId) {
      _backlogItems = _backlogItems.map(function(i) { return i.id === editingId ? newItem : i; });
    } else {
      _backlogItems.push(newItem);
    }
    saveBacklog(_backlogItems).then(function() {
      renderBacklog(_backlogItems);
      if (form) form.style.display = "none";
      showToast(editingId ? "Item updated." : "Item added.");
    }).catch(function(err) {
      showToast("Save failed: " + (err && err.message ? err.message : String(err)));
    });
  });

  // Load from Firestore and render (also refreshed on each panel open)
  loadBacklog().then(function(items) {
    _backlogItems = items;
    renderBacklog(items);
  }).catch(function(err) {
    console.warn("Backlog initial load failed:", err);
  });
}

async function seedDemoData() {
  if (!db) throw new Error("Firestore not initialised");
  if (!fbAuth) throw new Error("Firebase Auth not initialised");

  // Resolve or create the demo user account
  var user = fbAuth.currentUser;
  if (!user || user.email !== "matt@cranialscratch.com") {
    throw new Error("Sign in as matt@cranialscratch.com first.");
  }

  var uid = user.uid;
  var today = new Date();
  // UTC midnight for today
  today.setUTCHours(0, 0, 0, 0);

  var words = ["THRONE", "SHORE", "STONE", "HONE", "TONE", "HORN", "HERO", "ONES"];
  var levels = ["Master", "Above Average", "Above Average", "Average", "Average", "Average", "Below Average", "Below Average"];
  var batch = db.batch();

  for (var i = 1; i <= 7; i++) {
    var d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    var yyyy = d.getUTCFullYear();
    var mm   = String(d.getUTCMonth() + 1).padStart(2, "0");
    var dd   = String(d.getUTCDate()).padStart(2, "0");
    var dateStr = yyyy + "-" + mm + "-" + dd;

    var word  = words[(i - 1) % words.length];
    var score = word.length;
    var level = levels[(i - 1) % levels.length];

    var docRef = db.collection("scores").doc(uid + "_" + dateStr);
    batch.set(docRef, {
      uid:       uid,
      email:     user.email,
      displayName: "Matt (demo)",
      date:      dateStr,
      word:      word,
      score:     score,
      level:     level,
      attempts:  Math.ceil(Math.random() * 4) + 1,
      activeTimeMs: Math.floor(Math.random() * 180000) + 30000,
      submittedAt: d.toISOString(),
    });
  }

  await batch.commit();

  // Give admin 1000 tickets for testing
  await db.collection("users").doc(uid).set({ tickets: 1000 }, { merge: true });
  ticketCount = 1000;
  saveTickets();
  updateTicketDisplay();
}

// ─── Calendar date picker ──────────────────────────────────────────────────────
function initCalendar() {
  var dateEl = document.getElementById("puzzle-date");
  if (!dateEl) return;

  var modal   = document.getElementById("calendar-modal");
  var overlay = document.getElementById("calendar-overlay");
  var cancelBtn = document.getElementById("cal-cancel");
  var prevBtn = document.getElementById("cal-prev");
  var nextBtn = document.getElementById("cal-next");
  if (!modal) return;

  var calViewYear = 0, calViewMonth = 0;

  dateEl.addEventListener("click", openCalendar);
  if (overlay)   overlay.addEventListener("click",   closeCalendar);
  if (cancelBtn) cancelBtn.addEventListener("click", closeCalendar);

  if (prevBtn) prevBtn.addEventListener("click", function() {
    calViewMonth--;
    if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
    renderCalendar(calViewYear, calViewMonth);
  });
  if (nextBtn) nextBtn.addEventListener("click", function() {
    calViewMonth++;
    if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
    renderCalendar(calViewYear, calViewMonth);
  });

  function openCalendar() {
    var now = new Date();
    calViewYear  = now.getFullYear();
    calViewMonth = now.getMonth();
    renderCalendar(calViewYear, calViewMonth);
    modal.hidden = false;
  }
  // Expose so the scores date button can open the same calendar
  window._openCalendar = openCalendar;

  function closeCalendar() { modal.hidden = true; }

  function renderCalendar(year, month) {
    var today = new Date(); today.setHours(0,0,0,0);
    var minDate = new Date(today); minDate.setDate(minDate.getDate() - 13);

    var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var label = document.getElementById("cal-month-label");
    if (label) label.textContent = MONTHS[month] + " " + year;

    var prevMonthFirst = new Date(year, month - 1, 1);
    var nextMonthFirst = new Date(year, month + 1, 1);
    var minMonthFirst  = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    var maxMonthFirst  = new Date(today.getFullYear(), today.getMonth(), 1);

    if (prevBtn) prevBtn.disabled = prevMonthFirst < minMonthFirst;
    if (nextBtn) nextBtn.disabled = nextMonthFirst > maxMonthFirst;

    var grid = document.getElementById("cal-grid");
    if (!grid) return;
    grid.innerHTML = "";

    ["Su","Mo","Tu","We","Th","Fr","Sa"].forEach(function(d) {
      var h = document.createElement("div");
      h.className = "cal-day-header";
      h.textContent = d;
      grid.appendChild(h);
    });

    var firstDow  = new Date(year, month, 1).getDay();
    var daysInMo  = new Date(year, month + 1, 0).getDate();

    for (var i = 0; i < firstDow; i++) {
      var blank = document.createElement("div");
      blank.className = "cal-day";
      grid.appendChild(blank);
    }

    for (var d = 1; d <= daysInMo; d++) {
      var dayDate = new Date(year, month, d); dayDate.setHours(0,0,0,0);
      var btn = document.createElement("button");
      btn.className = "cal-day";
      btn.textContent = d;

      var isToday = dayDate.getTime() === today.getTime();
      var selectable = dayDate >= minDate && dayDate <= today;

      if (isToday) btn.classList.add("cal-today");
      if (selectable && !isToday) btn.classList.add("cal-past");
      if (!selectable) { btn.disabled = true; }
      else {
        btn.addEventListener("click", (function(dt) {
          return function() {
            var dd  = String(dt.getDate()).padStart(2, "0");
            var mm  = String(dt.getMonth() + 1).padStart(2, "0");
            var yy  = String(dt.getFullYear()).slice(-2);
            var ddmmyy = dd + mm + yy;
            var todayMs = today.getTime();
            browseOffset = Math.round((dt.getTime() - todayMs) / 86400000);
            lbDayOffset  = browseOffset;
            closeCalendar();
            loadBoardForDate(ddmmyy);
            var scoresTab = document.getElementById("tab-scores");
            if (scoresTab && !scoresTab.hidden) loadLeaderboard("date");
          };
        })(dayDate));
      }
      grid.appendChild(btn);
    }
  }
}

// ─── Back panel swipe-up to full screen ──────────────────────────────────────
function initBackPanelDrag() {
  var backEl   = document.getElementById("game-back");
  var headerEl = document.getElementById("back-header");
  if (!backEl || !headerEl) return;

  var startY = 0, movedY = 0, partialTop = "";

  headerEl.addEventListener("touchstart", function(e) {
    startY = e.touches[0].clientY;
    movedY = 0;
    // Remember the current inline top so we can restore it when collapsing
    if (!backEl.classList.contains("full-screen")) {
      partialTop = backEl.style.top;
    }
  }, { passive: true });

  headerEl.addEventListener("touchmove", function(e) {
    movedY = e.touches[0].clientY - startY;
  }, { passive: true });

  headerEl.addEventListener("touchend", function() {
    if (movedY < -40) {
      // Swipe up → full screen
      backEl.style.top = "";
      backEl.classList.add("full-screen");
    } else if (movedY > 40) {
      if (backEl.classList.contains("full-screen")) {
        // Swipe down from full screen → collapse to reduced view
        backEl.classList.remove("full-screen");
        backEl.style.top = partialTop;
      } else {
        // Swipe down from reduced view → close the sheet entirely
        closeSheet();
      }
    }
    startY = 0; movedY = 0;
  });
}

// Tap anywhere above the reduced score sheet to close it
function initSheetDismiss() {
  document.addEventListener("pointerdown", function(e) {
    var sheet = document.getElementById("game-back");
    if (!sheet || !sheet.classList.contains("open") || sheet.classList.contains("full-screen")) return;
    var rect = sheet.getBoundingClientRect();
    if (e.clientY < rect.top) closeSheet();
  }, { passive: true });
}

// ─── Blur-reveal touch fix ────────────────────────────────────────────────────
function initBlurReveal() {
  var backContent = document.getElementById("back-content");
  if (!backContent) return;

  function revealAt(x, y) {
    var el = document.elementFromPoint(x, y);
    while (el && el !== backContent) {
      if (el.classList && el.classList.contains("answer-blurred")) {
        el.classList.remove("answer-blurred");
        break;
      }
      el = el.parentElement;
    }
  }

  backContent.addEventListener("touchstart", function(e) {
    if (e.touches.length !== 1) return;
    revealAt(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  backContent.addEventListener("touchmove", function(e) {
    if (e.touches.length !== 1) return;
    revealAt(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  loadUserSettings();
  buildColours();
  checkPuzzleVersion(); // clear stale day state if puzzle order changed
  puzzle = getTodaysPuzzle();
  loadState();
  loadTickets();
  loadAwardTickets();
  loadUnlockedDates();
  loadRevealedLongest();
  loadCycleMessages();

  // Build tiles
  let tileIndex = 0;
  for (let row = 0; row < ROW_SIZES.length; row++) {
    for (let col = 0; col < ROW_SIZES[row]; col++) {
      const letter = (puzzle.letters[tileIndex] !== undefined) ? puzzle.letters[tileIndex] : "";
      tiles.push(makeTile(tileIndex, row, col, letter));
      tileIndex++;
    }
  }

  adjacency = buildAdjacency();
  buildBoard();
  requestAnimationFrame(alignBoardControls);
  setTimeout(runBoardOpenAnimation, 100);

  // Restore played path tiles to indigo after board is built
  playedPath.forEach(function(id) { if (tiles[id]) tiles[id].state = "played"; });
  if (playedPath.length > 0) renderAllTiles();

  const svg = document.getElementById("hex-board");
  if (svg) {
    svg.addEventListener("pointerdown", onPointerDown);
    svg.addEventListener("pointermove", onPointerMove);
    svg.addEventListener("pointerup", onPointerUp);
    svg.addEventListener("pointercancel", onPointerUp);
    svg.style.touchAction = "none";
    // iOS Safari requires explicit touch listeners with passive:false to block scroll
    svg.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
    svg.addEventListener("touchmove", e => e.preventDefault(), { passive: false });
  }

  initLocale();
  initFirebase();
  initAuthModal();
  initEditProfileModal();
  initInfoPanel();
  initShare();
  initVersionPanel();
  initPullToRefresh();
  initIdleHint();
  initShakeDetect();
  initSwipeNavigation();
  initSettings();
  initAdmin();
  initPlayerModals();
  initCalendar();
  initBackPanelDrag();
  initSheetDismiss();
  initBlurReveal();
  // initScratchReveal replaced by buildWordRow tap-to-reveal system

  updateScoreDisplay(null);
  updateTicketDisplay();
  updateAnswerArea();
  updateShareBtn();
  updateHintBtn();
  updateDifficultyBadge();

  const dateEl = document.getElementById("puzzle-date");
  if (dateEl) dateEl.textContent = formatDateDisplay(getDateString());

  // Init board nav buttons
  const boardPrevBtn = document.getElementById("board-date-prev");
  const boardNextBtn = document.getElementById("board-date-next");
  if (boardPrevBtn) boardPrevBtn.disabled = false;
  if (boardNextBtn) boardNextBtn.disabled = true;

  // Pause active timer when user leaves the tab/app
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      if (timerRunning) {
        activeTimeMs += Date.now() - timerLastStart;
        timerRunning = false;
        saveState();
      }
    } else if (!browsedDateStr && (bestScore > 0 || selectedPath.length > 0)) {
      timerRunning = true;
      timerLastStart = Date.now();
    }
  });
}

// Start
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window.addEventListener("resize", function() { requestAnimationFrame(alignBoardControls); });

})();
