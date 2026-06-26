#!/usr/bin/env node
// tools/build-puzzles.js
// Offline puzzle generator for Shukuma.
// Run: node tools/build-puzzles.js
// Output: updates the PUZZLES array inside game.js between the marker comments.

'use strict';
const fs = require('fs');
const path = require('path');

// ─── Board layout (22 tiles, 4-5-4-5-4 rows) ────────────────────────────────
const ROW_SIZES = [4, 5, 4, 5, 4];
const TILES = [];
let tid = 0;
ROW_SIZES.forEach((size, row) => {
  for (let col = 0; col < size; col++) TILES.push({ id: tid++, row, col });
});

// ─── Adjacency (must match game.js buildAdjacency exactly) ──────────────────
const ADJ = (() => {
  const posMap = {};
  TILES.forEach(t => { posMap[t.row + ',' + t.col] = t.id; });
  const adj = TILES.map(() => []);
  TILES.forEach(t => {
    const { row: r, col: c } = t;
    const isEven = r % 2 === 0;
    const nbrs = [[r, c - 1], [r, c + 1]];
    if (isEven) nbrs.push([r-1,c],[r-1,c+1],[r+1,c],[r+1,c+1]);
    else        nbrs.push([r-1,c-1],[r-1,c],[r+1,c-1],[r+1,c]);
    nbrs.forEach(([nr, nc]) => {
      const k = nr + ',' + nc;
      if (posMap[k] !== undefined) adj[t.id].push(posMap[k]);
    });
  });
  return adj;
})();

// ─── Utilities ───────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Snake path finder (DFS, randomised) ────────────────────────────────────
function findSnakePath(length) {
  const starts = shuffle(TILES.map(t => t.id));
  for (const start of starts) {
    const path = [];
    const visited = new Array(22).fill(false);
    if (dfsPath(start, visited, path, length)) return path;
  }
  return null;
}

function dfsPath(cur, visited, path, length) {
  path.push(cur);
  visited[cur] = true;
  if (path.length === length) return true;
  for (const n of shuffle(ADJ[cur])) {
    if (!visited[n]) {
      if (dfsPath(n, visited, path, length)) return true;
    }
  }
  path.pop();
  visited[cur] = false;
  return false;
}

// ─── Solver: can word be formed on a 22-letter board? ───────────────────────
function canFormWord(word, letters) {
  const w = word.toLowerCase();
  const lc = letters.map(l => l.toLowerCase());
  const used = new Array(22).fill(false);

  function dfs(wi, cur) {
    if (wi === w.length) return true;
    const ch = w[wi];
    for (const n of ADJ[cur]) {
      if (used[n]) continue;
      if (lc[n] === ch || lc[n] === '') {
        used[n] = true;
        if (dfs(wi + 1, n)) return true;
        used[n] = false;
      }
    }
    return false;
  }

  for (let i = 0; i < 22; i++) {
    if (lc[i] === w[0] || lc[i] === '') {
      used[i] = true;
      if (dfs(1, i)) return true;
      used[i] = false;
    }
  }
  return false;
}

// ─── Find all achievable words on a board from a word set ───────────────────
function findWords(letters, wordSet) {
  const found = [];
  for (const w of wordSet) {
    if (w.length >= 4 && canFormWord(w, letters)) found.push(w);
  }
  found.sort((a, b) => b.length - a.length || a.localeCompare(b));
  return found;
}

// ─── Filler letter pool (English frequency, balanced) ───────────────────────
const POOL = (
  'EEEEEEEEEEEETTTTTTTTTAAAAAAAAOOOOOOOIIIIIIINNNNNNNSSSSSSH' +
  'HHHHHRRRRRRDDDDLLLLCCCCUUUMMMWWWFFFGGGYYYPPPBBBVVVKKJ'
).split('');

function fillerLetter() {
  return POOL[(Math.random() * POOL.length) | 0];
}

// ─── Generate a single puzzle for a target word ──────────────────────────────
function generatePuzzle(word, solverWords, attempts = 60) {
  const upper = word.toUpperCase();
  const len = upper.length;

  for (let a = 0; a < attempts; a++) {
    const path = findSnakePath(len);
    if (!path) continue;

    const letters = new Array(22).fill('');
    for (let i = 0; i < len; i++) letters[path[i]] = upper[i];
    for (let i = 0; i < 22; i++) if (letters[i] === '') letters[i] = fillerLetter();

    // Sanity check (should always pass by construction)
    if (!canFormWord(upper, letters)) continue;

    // Find secondary words for prevAnswers
    const achieved = findWords(letters, solverWords);
    const prevAnswers = buildPrevAnswers(upper, achieved);

    return { letters, prevAnswers };
  }
  return null;
}

// ─── Build a plausible prevAnswers distribution ──────────────────────────────
function buildPrevAnswers(target, achieved) {
  // Show top 4 distinct words by length, plus a catch-all
  const shown = [];
  const seen = new Set();
  for (const w of achieved) {
    if (seen.has(w.toUpperCase()) || w.toUpperCase() === target) continue;
    seen.add(w.toUpperCase());
    shown.push(w.toUpperCase());
    if (shown.length >= 3) break;
  }

  // Synthetic % distribution based on word length buckets
  const answers = [{ word: target, pct: 4 }];
  if (shown[0]) answers.push({ word: shown[0], pct: shown[0].length >= 8 ? 9 : 15 });
  if (shown[1]) answers.push({ word: shown[1], pct: shown[1].length >= 6 ? 22 : 30 });
  if (shown[2]) answers.push({ word: shown[2], pct: 35 });
  answers.push({ word: '4 or lower', pct: 100 - answers.reduce((s, a) => s + a.pct, 0) });
  return answers;
}

// ─── Solver word list (game words + common English words for secondary finds)─
// These are used only for finding secondary words to populate prevAnswers.
// The actual game validates words via its own WORDS set + the dictionary API.
const SOLVER_WORDS = new Set([
  // 4-letter
  'able','ache','acre','aged','aide','aims','akin','also','arch','area','army',
  'arts','asks','aunt','auto','avid','away','back','bait','bale','ball','band',
  'bang','bank','bare','bark','barn','base','bath','bear','beat','beds','been',
  'beef','beer','bell','belt','bend','best','bile','bill','bind','bird','bite',
  'blue','blur','boat','bold','bolt','bond','bone','book','bore','born','both',
  'buck','bulk','bull','burn','burp','cage','cake','call','came','camp','cane',
  'cape','card','care','cart','case','cash','cast','cave','cell','cent','char',
  'chat','chip','clan','clap','clay','clue','coal','coat','code','coil','coin',
  'cola','cold','come','cook','cool','cord','core','corn','cost','coup','cove',
  'crew','crop','cult','cure','curl','cute','dale','damp','dank','dark','date',
  'dawn','days','dead','deal','dean','dear','deck','deed','deep','deny','desk',
  'dime','dine','dirt','dish','disk','dock','dole','dome','done','door','dose',
  'dote','dove','down','drag','draw','drew','drip','drop','drum','dual','duel',
  'duke','dull','dumb','dump','dune','dust','duty','dusk','dyed','each','earl',
  'earn','ease','east','echo','edge','else','epic','even','ever','evil','exam',
  'eyes','face','fact','fail','fair','fake','fall','fame','fare','farm','fast',
  'fate','feat','feed','feel','feet','fell','felt','fend','fern','file','fill',
  'film','find','fine','fire','firm','fish','fist','flag','flat','flew','flip',
  'flow','foam','folk','fond','font','food','fool','foot','ford','fore','fork',
  'form','fort','foul','four','free','fuel','full','fund','fuse','gale','game',
  'gang','gave','gaze','gear','germ','gift','girl','glad','glow','glue','goal',
  'goat','goes','gold','golf','gone','good','grab','gram','gray','grew','grid',
  'grim','grin','grip','gulf','gust','guts','guys','hack','hail','hair','half',
  'hall','halt','hand','hang','hard','harm','harp','hash','hate','have','hawk',
  'head','heal','heap','hear','heat','heel','heed','held','helm','help','hemp',
  'herb','here','hero','hide','high','hill','hire','hold','hole','home','hood',
  'hook','hope','horn','hour','hump','hung','hunt','hurl','hurt','hymn','idea',
  'idle','inch','into','iron','isle','jack','jail','jest','john','join','joke',
  'jolt','jump','just','keen','keep','kill','kind','king','knee','knew','knot',
  'know','lack','laid','lake','lamp','land','lane','lark','lash','last','late',
  'lawn','lead','leaf','lean','leap','left','lens','less','lied','lift','like',
  'lime','limp','line','link','lion','list','live','load','loan','lock','loft',
  'lone','long','look','loop','lord','lore','lorn','lore','lout','love','luck',
  'lump','lung','lure','lurk','mace','made','main','make','male','mall','malt',
  'mane','many','mark','mars','mash','mask','mass','mast','mate','maze','mean',
  'meat','meet','meld','melt','memo','mend','menu','mere','mesh','mild','milk',
  'mill','mind','mine','mint','miss','mist','mode','monk','moon','more','moss',
  'most','moth','move','muck','mule','must','mute','nail','name','navy','near',
  'neck','need','nest','next','nice','nick','nigh','nine','node','none','noon',
  'norm','nose','note','noun','nude','oath','oven','over','owed','owned','pace',
  'pack','page','paid','pain','pair','pale','palm','pang','park','part','pass',
  'past','path','peak','peel','peer','pick','pier','pile','pine','pipe','plan',
  'play','plea','plod','plot','plow','plug','plum','plus','poem','poet','pole',
  'poll','pond','poor','pore','port','pose','post','pour','prey','prod','prop',
  'pull','pulp','pump','pure','push','rack','raid','rail','rain','rank','rare',
  'rash','rate','rays','read','real','reap','reel','rely','rend','rent','rest',
  'rich','ride','rift','ring','riot','ripe','rise','risk','road','roam','roar',
  'robe','rock','rode','roll','roof','room','root','rope','rose','rout','rove',
  'ruin','rule','rush','rust','safe','sage','sail','sake','sale','salt','same',
  'sand','sane','sang','sank','save','scan','scar','seal','seem','seep','send',
  'shod','shoe','shop','shot','show','shut','sick','side','sift','sign','silk',
  'sill','sing','sink','site','size','skin','skip','slap','slew','slid','slim',
  'slip','slot','slow','slug','smug','snap','snow','soak','soar','soil','sole',
  'some','song','sore','sort','soul','span','spin','spot','star','stay','stem',
  'step','stew','stir','stop','strap','stub','such','suit','sulk','sung','sunk',
  'sure','surf','swap','swat','swim','tail','tale','talk','tall','tame','tank',
  'tape','task','taut','taxi','team','tear','tend','tent','term','test','than',
  'that','them','then','they','thin','this','thus','tick','tide','tied','tile',
  'time','tire','told','toll','tone','took','tool','tops','torn','toss','tour',
  'tow','town','trap','trim','trip','true','tuck','tug','tuna','tune','turn',
  'tusk','twig','twin','type','ugly','undo','unit','upon','user','vain','vale',
  'vast','veil','vein','very','view','vile','vine','vote','wade','wage','wake',
  'walk','wall','wand','want','ward','warm','warp','wart','wary','wash','wave',
  'weak','weal','weed','week','well','wept','were','west','when','whim','whip',
  'wide','wife','wild','will','wilt','wind','wine','wing','wink','wire','wise',
  'wish','wisp','with','wolf','wool','word','wore','work','worm','wove','wrap',
  'wren','yell','your','zone',
  // 5-letter
  'abide','abode','about','above','abuse','ached','acids','acorn','acres',
  'actor','acute','added','admit','adobe','adopt','adult','after','again',
  'agate','agent','agile','aging','agony','agree','ahead','aided','aimed',
  'aisle','alarm','album','alert','alien','align','alike','allay','allot',
  'allow','alone','along','aloof','aloud','altar','alter','amber','amble',
  'amend','ample','angel','anger','angle','angry','anime','ankle','annex',
  'antic','anvil','apart','apple','apply','April','apron','argue','arise',
  'armor','aroma','arose','array','arrow','aside','asked','asset','atlas',
  'atone','attic','audio','audit','aunts','avail','avoid','awake','award',
  'aware','awful','badly','baker','basic','basis','batch','beach','beard',
  'beast','began','begin','being','below','bench','bends','birch','birth',
  'black','blade','blame','bland','blank','blaze','bleak','bleed','blend',
  'bless','blind','block','blood','bloom','blown','blunt','board','boast',
  'bound','boxer','brace','braid','brain','brake','brand','brave','brawn',
  'bread','break','breed','breve','brick','bride','brine','bring','broke',
  'brook','broom','broth','brown','brush','built','burst','buyer','cable',
  'camel','candy','carry','cause','cedar','cedar','chain','chair','chalk',
  'chaos','charm','cheap','check','cheek','cheer','chess','chest','chick',
  'chief','child','chill','china','choir','chord','chore','chose','civil',
  'claim','clamp','clang','clash','class','clean','clear','clerk','click',
  'cliff','climb','cling','clock','clone','close','cloth','cloud','clown',
  'coach','coast','cobra','comet','comic','comma','coral','couch','could',
  'count','court','cover','covet','cozy','craft','crane','crash','creak',
  'cream','crest','crime','cross','crowd','crown','cruel','crush','cubic',
  'curly','curve','cycle','daily','dairy','dance','deals','death','debut',
  'decoy','decry','defer','deity','delay','demon','depot','depth','derby',
  'devil','diary','digit','divvy','dizzy','dodge','dogma','doing','donor',
  'doubt','dough','dove','dowry','draft','drain','drape','dream','dress',
  'drift','drill','drink','drive','drove','drown','dryer','eagle','early',
  'earth','eight','elect','elite','ember','empty','ended','enemy','enjoy',
  'enter','entry','equal','error','essay','evade','event','every','exact',
  'exist','extra','fable','faint','faith','fancy','fault','feast','fence',
  'feral','fetch','fever','fiber','field','fiend','fifth','fifty','fight',
  'final','first','fixed','flame','flank','flare','flash','flesh','flock',
  'flood','floor','floss','flour','flown','fluff','flute','focal','focus',
  'force','forge','found','frame','frank','fraud','front','froze','fully',
  'fungi','funny','galax','globe','gloom','gloss','glory','glove','going',
  'grace','grade','grain','grand','grant','grape','grasp','grass','grate',
  'grave','great','greed','green','grief','grind','groan','groin','groom',
  'gross','group','grove','growl','grown','gruel','gruff','guard','guava',
  'guess','guest','guide','guile','guise','gulag','gulch','gummy','gusty',
  'hammy','handy','happy','harsh','haste','haven','hazel','heart','heavy',
  'hence','heron','hinge','hippo','hoard','hobby','honey','horse','hotel',
  'hound','house','human','humid','humor','hydra','image','imply','inner',
  'input','inter','intro','inane','irony','issue','ivory','jaunt','joust',
  'judge','juice','juicy','jumpy','kayak','kneel','knight','labor','lance',
  'large','laser','later','layer','leach','learn','lease','ledge','legal',
  'lemon','level','light','limit','linen','liver','llama','local','lodge',
  'logic','login','loose','lover','lower','lucid','lucky','lyric','macho',
  'magic','major','maker','manor','maple','march','match','mayor','media',
  'merit','mercy','merge','metal','might','mirth','mixed','model','money',
  'month','moral','mound','mourn','mouth','moved','muggy','music','naive',
  'nasty','night','noble','noise','north','novel','nurse','nymph','ocean',
  'offer','olive','onset','orbit','order','other','outer','owned','oxide',
  'ozone','paint','panel','panic','paper','peace','peach','pearl','pedal',
  'penal','penny','perky','phase','phone','piano','pilot','pitch','pixel',
  'pixie','pizza','place','plaid','plain','plane','plant','plate','plaza',
  'pluck','plumb','plume','poach','point','pound','power','prank','press',
  'price','pride','prime','prior','prize','probe','proof','prose','proud',
  'prove','prowl','psalm','pulse','punch','pupil','purge','queen','quest',
  'queue','quick','quiet','quota','quote','rabbi','radar','raise','ranch',
  'range','rapid','ratio','reach','realm','rebel','recap','reign','relax',
  'repay','repel','reply','reset','reuse','ridge','rifle','right','river',
  'rivet','robot','rocky','roman','rouge','rough','round','route','royal',
  'rugby','rugged','ruler','rural','sabre','sadly','saint','sauce','scale',
  'scene','scope','score','scorn','scout','seize','serve','seven','shade',
  'shaft','shake','shall','shame','shape','share','sharp','shawl','sheet',
  'shelf','shell','shift','shirt','shore','short','shine','shone','shook',
  'shout','sight','silly','since','sixth','sixty','sized','skate','skill',
  'skull','skunk','slack','slant','slash','slave','sleek','sleet','slice',
  'slide','slope','smile','smite','smoke','smote','snail','snake','sneak',
  'snide','solid','solve','sonic','south','space','spare','spark','spawn',
  'speak','speed','spend','spent','spice','spill','spine','spray','squat',
  'squad','stack','staff','stage','stain','stalk','stall','stamp','stand',
  'stare','stark','start','state','steam','steel','steep','steer','stern',
  'sting','stock','stoke','stomp','stone','stood','store','storm','story',
  'stout','steal','steam','stove','strap','straw','strip','strut','stuck',
  'study','stump','style','sugar','suite','sunny','super','surge','swamp',
  'swear','sweat','sweep','sweet','swept','swift','swill','swipe','swoop',
  'sword','swore','sworn','swung','synth','table','taken','taste','teach',
  'tense','teeth','their','theme','there','these','thick','thing','think',
  'third','those','three','threw','thrice','throw','tidal','tiger','tired',
  'titan','today','token','tonal','tooth','total','touch','tough','toxic',
  'trace','track','trade','trail','train','trait','tramp','treat','trend',
  'trial','tribe','trick','tried','truce','trunk','tryst','tuned','twist',
  'unify','union','until','upper','urban','usher','utter','valid','value',
  'valve','vapor','vault','vicar','video','vigor','viral','virus','vogue',
  'voice','vista','visit','vital','vivid','vomit','voter','voucher','vulva',
  'wafer','watch','water','weary','weave','wedge','weird','while','white',
  'whole','whose','widen','width','witty','women','world','worry','worse',
  'worst','worth','would','wound','wrath','write','wrote','yacht','yearn',
  'yield','young','yours','youth','zebra',
  // 6-letter
  'abduct','absent','absorb','accent','accept','access','accord','accuse',
  'aching','acquit','action','active','actual','adjust','admire','advise',
  'affect','afraid','agency','agenda','aiming','aerial','afford','afford',
  'afraid','affect','agreed','albeit','anchor','animal','answer','antler',
  'appear','archer','ardent','around','artist','ascend','assert','assist',
  'attend','attire','august','baking','battle','beauty','behave','belief',
  'belong','better','beyond','bishop','biting','bitter','blazed','blends',
  'border','bottle','bought','bounty','branch','breach','bright','brings',
  'bronze','brutal','budget','bundle','bureau','burden','burrow','buying',
  'castle','caught','cellar','center','chance','change','charge','chosen',
  'circle','circus','cities','closes','cobalt','comfort','coming','commit',
  'common','compel','comply','concur','corner','costly','custom','danger',
  'daring','decade','decide','defeat','define','degree','deploy','design',
  'desire','devote','differ','divide','divine','domain','double','driven',
  'duster','effect','efface','eighth','either','embody','empire','enable',
  'ending','endure','energy','enough','entire','escape','events','expect',
  'expert','fading','fallen','famous','father','festal','fierce','figure',
  'filter','finger','finite','fiscal','fleece','forest','forget','formal',
  'foster','flight','flower','follow','frozen','future','gather','gentle',
  'gifted','giving','global','gravel','groove','growth','happen','health',
  'heroes','higher','hiring','honest','hunger','impact','impose','insult',
  'intent','invent','insist','invest','invite','itself','jagged','joyful',
  'jungle','junior','knight','leader','launch','lessen','letter','lesson',
  'linger','listen','losing','lucent','mainly','manage','manner','market',
  'master','matter','misery','mobile','modern','modest','mirror','motive',
  'murder','mutual','mystic','narrow','native','nature','nearby','nestle',
  'notice','number','object','obtain','office','offset','oppose','outset',
  'origin','output','palace','parent','partly','people','permit','pirate',
  'planet','player','plenty','points','policy','polite','portal','please',
  'potent','phrase','prefer','profit','protect','prompt','proven','public',
  'pursue','rather','readily','reason','rebel','record','reduce','regard',
  'reform','remain','render','repair','report','rescue','retain','reveal',
  'reward','ribbon','ritual','robust','rocket','rodent','rotate','rotten',
  'safely','sailor','salute','sample','savage','scarce','scheme','screen',
  'secret','sector','secure','series','settle','severe','shadow','single',
  'signal','silver','simple','sister','sketch','social','soften','solely',
  'source','sphere','spirit','splash','spread','spring','sprout','square',
  'stable','strung','strong','struck','stripe','stored','stream','strike',
  'strict','string','submit','sunset','surely','talent','tariff','temple',
  'tender','threat','throne','thrown','timing','toilet','toward','trauma',
  'travel','tremor','triple','trophy','trying','tunnel','unison','unless',
  'update','urgent','useful','valley','varied','verbal','virtue','vision',
  'visual','volume','wander','wanted','weapon','weekly','weight','winner',
  'wisdom','yellow','zealot',
  // 7-letter
  'abandon','absence','account','achieve','acquire','address','adopted',
  'advance','adverse','affable','against','ancient','anxious','attempt',
  'attract','average','awkward','balance','bargain','between','billion',
  'blanket','blossom','buffalo','cabinet','capable','capital','captain',
  'capture','caution','century','certain','channel','chapter','clarity',
  'classic','climate','combine','command','comment','company','compare',
  'compete','complex','concern','conduct','confirm','connect','consent',
  'content','context','control','country','courage','counter','deliver',
  'develop','devoted','digital','disable','disease','dispute','distant',
  'diverse','dynamic','economy','edition','elegant','element','emotion',
  'enhance','explain','explore','express','extreme','failure','fashion',
  'feature','feeling','finance','finding','forbid','foreign','forward',
  'freedom','fulfill','general','genuine','glimpse','glowing','goddess',
  'gravity','harmony','harvest','history','kingdom','knowing','knowing',
  'lasting','landing','lengthy','license','limited','looking','magical',
  'miracle','missing','mission','mixture','monster','network','nothing',
  'obvious','offense','opinion','outcome','outside','overall','perfect',
  'perhaps','popular','portion','prevent','primary','problem','process',
  'purpose','qualify','rapidly','realize','recover','regular','release',
  'replace','request','require','respond','restore','results','revenue',
  'reverse','sailing','satisfy','science','section','servant','service',
  'session','sharing','shelter','silence','similar','success','support',
  'suppose','surface','survive','teacher','tension','trading','through',
  'trouble','typical','unified','unknown','variety','version','without',
  // 8-letter
  'absolute','abstract','accepted','accident','actually','addition','adequate',
  'adjacent','admitted','advanced','advisory','affected','affirmed','agencies',
  'actively','alliance','allowing','analysis','announced','apparent','approach',
  'arranged','assembly','assisted','audience','balanced','becoming','behavior',
  'believed','bringing','business','captured','carrying','changing','children',
  'choosing','civilian','claiming','cleaning','clearing','clothing','combined',
  'compared','compiled','complete','confined','constant','consumed','contrast',
  'creating','criminal','cultural','currency','decision','declared','defeated',
  'designed','detailed','disaster','discover','distinct','domestic','dominant',
  'earnings','economic','educated','election','eligible','emerging','emphasis',
  'employee','enabling','engaging','entering','entirely','estimate','everyday',
  'evidence','excluded','existing','expanded','extended','external','facility',
  'familiar','fighting','followed','football','formally','founding','graduate',
  'greatest','handling','happened','healthy','included','increase','informed',
  'instance','involved','isolated','language','learning','location','managing',
  'measured','medieval','mentally','military','movement','national','negative',
  'northern','obtained','operated','original','personal','planning','platform',
  'position','positive','possible','powerful','prepared','pressure','produced',
  'progress','provided','reaching','received','recorded','referred','regarded',
  'regional','released','remained','required','research','resource','response',
  'resulted','returned','revealed','selected','separate','severity','standard',
  'starting','strength','striking','survived','taxation','thousand','thinking',
  'together','training','transfer','treasure','treatment','ultimate','universe',
  'valuable','violence','whatever','followed','wondered','yourself',
  // 9-letter
  'abandoned','abilities','absorbing','accessing','announced','awareness',
  'beautiful','beginning','belonging','breakdown','certainly','component',
  'confident','connected','conscious','contained','countless','described',
  'direction','discussed','displayed','diversity','emergency','emotional',
  'exchanged','expansion','following','framework','generated','generally',
  'governing','guarantee','happening','household','implement','increased',
  'indicated','initially','interface','knowledge','landscape','lifestyle',
  'logistics','mentioned','narrative','necessary','objective','obviously',
  'operation','organised','organized','ourselves','parameter','potential',
  'presented','primarily','principle','recovered','reflected','remaining',
  'resources','responses','resulting','satisfied','searching','secretary',
  'sensitive','situation','something','somewhere','statement','substance',
  'suggested','territory','threshold','therefore','tradition','traveling',
  'treatment','unchanged','universal','voluntary','warehouse','wonderful',
]);

// ─── Target words (10-13 letters, curated for recognisability) ───────────────
const TARGET_WORDS = [
  // ── 10-letter ──
  'ABSOLUTELY','BIRTHPLACE','BLACKBOARD','BLACKSMITH','BORDERLINE',
  'BRIGHTNESS','CALCULATOR','CARELESSLY','CHARACTERS','CHOCOLATES',
  'COMPLETELY','COMPASSION','COMPLIANCE','COMPROMISE','COUNSELLORS',
  'COURTHOUSE','CREATIVITY','DEDICATION','DEFINITELY','DEPENDABLE',
  'DEPLOYMENT','DEPRESSION','DIFFERENCE','DIFFICULTY','DIRECTIONS',
  'DISCIPLINE','DISCOVERED','EARTHQUAKE','ECONOMICAL','EVERYTHING',
  'EXCITEMENT','EXPERIENCE','EXPERIMENT','EXPRESSION','FRIENDSHIP',
  'GOALKEEPER','GOVERNMENT','GROUNDWORK','HEADMASTER','HEALTHCARE',
  'HEARTBREAK','HELICOPTER','HEMISPHERE','HISTORICAL','IMPORTANCE',
  'INCREDIBLE','INDUSTRIAL','INITIATIVE','JOURNALISM','LEADERSHIP',
  'LIBERATION','MOTORCYCLE','NATIONWIDE','NORTHBOUND','OPERATIONS',
  'PERCENTAGE','PERMISSION','PHOTOGRAPH','PLAYGROUND','POPULATION',
  'PREVENTION','PRODUCTION','PROFESSION','PROTECTION','PSYCHOLOGY',
  'PUNISHMENT','REFERENDUM','REFLECTION','RELATIVELY','REMARKABLE',
  'REPEATEDLY','RESISTANCE','REVOLUTION','RHINESTONE','ROUNDABOUT',
  'SKATEBOARD','SMARTPHONE','SOUNDTRACK','SPACECRAFT','SPRINGTIME',
  'STATISTICS','STREAMLINE','SUPPLEMENT','TABLECLOTH','THOUGHTFUL',
  'TOURNAMENT','TRAVELLING','TREMENDOUS','UNDERCOVER','VOLLEYBALL',
  'WATERCOLOR','WIDESPREAD','WOODPECKER','WORTHWHILE','BORDERLAND',
  'BLOCKCHAIN','BREAKDOWNS','BRICKWORKS','BUTTERBALL','BRIGHTENED',
  'CARBONATED','CELEBRATED','CELEBRATED','CHANCELLOR','CHARITABLE',
  'CHECKPOINT','CHRONICLES','COLLECTIVE','COMMANDING','COMPATIBLE',
  'COMPLAINTS','CONFIRMING','CORNERISED','COUNSELLED','CULTIVATED',
  'DECORATION','DEMOCRATIC','DEPENDENCE','DEPLOYMENT','DESCRIBING',
  'DEVASTATED','DEVELOPING','DISCUSSING','DISPLAYING','DISTRIBUTING',
  'DOMINATING','EARTHBOUND','ENGINEERING','ENTERPRISE','ENTHUSIASM',
  'EVERYWHERE','EXCEPTIONS','EXHAUSTION','EXPLAINING','EXTENSIONS',
  'EVALUATION','EXAMINERS','FOUNDATION','GRACEFULLY','GRANDFATHER',
  'GREENHOUSE','GUIDELINES','HANDSHAKING','HANDYWORKS','HEARTENING',
  'HIGHLANDS','INNOVATIVE','INTEGRATED','INVESTMENT','JUSTIFYING',
  'LIBERATING','LIFETIMES','MANNERISMS','MASTERWORK','MECHANISMS',
  'MEANINGFUL','MECHANICAL','MOTIVATION','MOTORCYCLE','MYSTERIOUS',
  'NETWORKING','NIGHTWATCH','NORTHERNER','OCCURRENCE','OPERATIONS',
  'OPPOSITION','ORGANISING','OUTBUILDING','OVERCOMING','OVERLOADED',
  'PAINTBRUSH','PALMERSTON','PERSISTENT','PIONEERING','PLAYWRIGHT',
  'POSITIVELY','PRECAUTION','PREFERENCE','PRESENTING','PRESERVING',
  'PROCESSING','PROFOUNDLY','PROFITABLE','PROPORTION','PROTESTING',
  'PUBLISHERS','PURCHASING','QUALIFYING','QUARRELLED','QUESTIONING',
  'RECOVERING','REDIRECTED','REINFORCED','REQUESTING','RESTORING',
  'REWARDING','RHINESTONE','RIGHTFULLY','ROBOTICS','ROUNDHOUSE',
  'SANCTIONED','SCHOOLWORK','SCIENTIFIC','SEARCHABLE','SHORTENING',
  'SHOWCASING','SKATEBOARD','SKEPTICISM','SLEEPYHEAD','SMOKESTACK',
  'SNORKELING','SOCIALISED','SOLIDIFYING','SOMEBODY','SOUTHBOUND',
  'SPECIFYING','STAGGERING','STATIONARY','STONEMASON','STRETCHING',
  'STRUGGLING','SUBJECTING','SUBTRACTED','SUCCESSFUL','SUFFICIENTLY',
  'SUMMARISED','SUSPENDING','SUSTAINING','TABLECLOTH','TECHNICALLY',
  'THEMSELVES','THROUGHOUT','THUNDERING','TIMEFRAMES','TOLERATING',
  'TOURNIQUET','TRADITIONS','TRANSITION','TRANSPLANT','TRAVELLING',
  'TRIGGERING','TRIUMPHING','UNDERLYING','UNIFORMITY','UNIQUENESS',
  'UNIVERSITY','UNRELIABLE','UPHOLSTERY','VALIDATION','VANQUISHED',
  'VERSATILE','VOLUNTEERS','WANDERINGS','WATERFALLS','WAVELENGTH',
  'WELCOMINGS','WITNESSING','WORLDCLASS','WORSHIPPED','YOUNGSTERS',

  // ── 11-letter ──
  'ANNIVERSARY','ATMOSPHERIC','BROTHERHOOD','CITIZENSHIP','COMFORTABLE',
  'COMPETITION','COMPLICATED','CONSIDERING','CONTROLLING','COOPERATION',
  'CREDENTIALS','DECLARATION','DEMONSTRATE','DESCRIPTION','DEVELOPMENT',
  'EFFECTIVELY','ELIMINATION','EMOTIONALLY','ENCHANTMENT','ENGINEERING',
  'ENHANCEMENT','EXAMINATION','EXCLUSIVELY','EXPERIENCED','EXPLORATION',
  'FINGERPRINT','FLEXIBILITY','FLOURISHING','FOUNDATIONS','GENERATIONS',
  'GROUNDWATER','HEARTWARMING','HOSPITALITY','IMAGINATION','IMMEDIATELY',
  'INDEPENDENT','INVOLVEMENT','LEGISLATION','MEASUREMENT','NEIGHBORING',
  'NOURISHMENT','OUTSTANDING','PARTNERSHIP','PERSPECTIVE','POLITICIANS',
  'POSSIBILITY','PROGRESSIVE','QUESTIONING','RECOGNITION','RECRUITMENT',
  'RELATIONSHIP','RENAISSANCE','REPRESENTED','RESPONSIBLE','SCHOLARSHIP',
  'SOUTHEASTERN','SPECIALIZED','SPECTACULAR','STORYTELLING','SUBORDINATE',
  'SURROUNDING','SUSTAINABLE','TECHNICALLY','UNBELIEVABLE','UNCERTAINTY',
  'VOLUNTARILY','WILLINGNESS','WONDERFULLY','ADVERTISING','AFFILIATION',
  'ARBITRATION','ARCHITECTURE','ARRANGEMENT','ASPIRATIONS','ASSOCIATIONS',
  'BATTLEGROUND','BROADCASTER','BUREAUCRACY','CAREFULNESS','CELEBRATION',
  'CHALLENGING','COLLECTIONS','COMMEMORATE','COMPETITION','CONCLUSIONS',
  'CONFEDERATE','CONSEQUENCE','CONSOLATION','CONSUMPTION','CONTEMPLATE',
  'CONTROLLERS','CULTIVATION','CURIOSITIES','DECLARATIONS','DEFENSIVELY',
  'DELIBERATELY','DESIGNATED','DESTINATIONS','DIFFERENCES','DIRECTORIES',
  'DISCLOSURES','DISCOVERING','DISTINCTION','DIVERSIFIED','EFFECTIVELY',
  'ELABORATELY','EMOTIONALLY','ESTABLISHED','EXCLUSIVELY','EXPRESSIONS',
  'FACILITATED','FAMILIARIZE','FLEXIBILITY','GLOBALIZING','GRATEFULNESS',
  'HEARTFELTLY','HISTORICALLY','IMAGINATIONS','IMPLICATIONS','INCREASINGLY',
  'INDICATIONS','INSTRUCTED','INTERACTION','INTRODUCING','JUSTIFIABLE',
  'MEASUREMENT','METROPOLITAN','MOTIVATIONS','MOUNTAINSIDE','NATIONALITY',
  'NEIGHBOURS','OBJECTIVELY','OUTSOURCING','PRACTICALLY','PROPORTIONS',
  'PROSECUTOR','RECOGNISING','REFINEMENTS','REMARKABLY','REMORSEFUL',
  'RESPONSIBLE','RESTRUCTURE','SIGNIFICANT','SIMULTANEOUS','SOCIALISING',
  'SPECTACULAR','SUPPLEMENTAL','TECHNICALLY','THOUGHTFULLY','THOROUGHLY',
  'UNINHABITED','UNIVERSITIES','UNFORTUNATE','WONDERSTRUCK','WORTHINESS',
  'APPROACHING','BLACKLISTED','CALCULATIONS','CELEBRATIONS','CHEERFULNESS',
  'CITIZENSHIP','COMFORTABLE','COMPLICATED','COMPOUNDING','CRYSTALLISED',
  'CUSTOMIZING','DAZZLEMENTS','DECLARATIONS','DEPLOYMENTS','DISCOMFITED',
  'DRAMATISING','EARTHMOVING','ECHOCHAMBER','ELECTRONICS','ENCOURAGING',
  'EQUILIBRIUM','ESTABLISHED','EXHILARATED','EXPEDITIONS','FRIGHTENING',
  'FUNDRAISING','GATHERINGS','GRANDMASTER','HANDCRAFTED','ILLUSTRATES',
  'IMPROVISING','INSPIRATION','INTERESTING','KNIGHTHOODS','LISTENERSHIP',
  'MASTERPIECE','MINDFULNESS','NATURALNESS','NIGHTSHIFTS','NOMINATIONS',
  'NUTRITIONAL','OBLIGATIONS','OVERJOYED','OVERWHELMED','PHOTOGRAPHED',
  'PICTURESQUE','PLAYFULNESS','POSSIBILITIES','PREPARATIONS','PRIZEWINNERS',
  'PRODUCTIVITY','PROJECTIONS','PROPORTIONAL','QUARTERBACK','REALIGNMENT',
  'REFLECTIONS','REHABILITATE','RELOCATIONS','RESTORATION','REVELATIONS',
  'ROUGHHOUSED','SELFLESSNESS','SETTLEMENTS','SPRINGBOARD','STIMULATING',
  'STOCKMARKET','STORYBOARDS','SUNFLOWERS','SYMPATHETIC','THANKFULNESS',
  'TRACKRECORD','TRANSFORMED','TRANSPORTER','TREACHEROUS','TRIUMPHANTLY',
  'TROPOSPHERE','TRUSTWORTHY','TYPEWRITING','UNAMBIGUOUS','UNDERPLAYED',
  'UNDERTAKERS','UNFORGOTTEN','UNIFICATION','UNOFFICIALLY','UNQUESTIONED',
  'UNYIELDING','VACCINATION','WATERCOLORS','WAYFINDING','WOODCARVINGS',

  // ── 12-letter ──
  'ACCOMPLISHED','BROADCASTING','CHOREOGRAPHY','CONSERVATION',
  'CONVERSATION','DELIBERATELY','HEARTWARMING','INTELLECTUAL',
  'OVERWHELMING','PARTICULARLY','PHOTOGRAPHER','RELATIONSHIP',
  'STORYTELLING','STRATOSPHERE','ACCOMPLISHED','ARTICULATION',
  'CHOREOGRAPHY','CIRCUMSTANCE','COMMISSIONER','CONCENTRATED',
  'CONTAMINATED','CONTRIBUTION','COORDINATORS','DELIBERATING',
  'DISAPPOINTING','ECONOMICALLY','ENTERTAINERS','EXAGGERATION',
  'EXPERIENCING','EXTRAORDINARY','GLOBALIZATION','INDEPENDENCE',
  'INDEPENDENTLY','INDIVIDUALISM','INTELLECTUAL','INTERNATIONAL',
  'MANIFESTATION','NEIGHBOURHOOD','NORTHEASTERN','OVERWHELMING',
  'PARAPHERNALIA','PERPENDICULAR','PHOTOGRAPHER','PRESENTATIONS',
  'QUESTIONNAIRE','RESPONSIBILITY','SOPHISTICATED','SPECIFICATION',
  'STANDARDIZED','STRATOSPHERE','SUBSEQUENTLY','SUSTAINABILITY',
  'TECHNOLOGICAL','UNDERESTIMATE','VULNERABILITY','ACCOMPANYING',
  'ACKNOWLEDGED','BREATHTAKING','CANCELLATION','CIRCUMSTANTIAL',
  'COLLABORATION','COLLABORATING','COMPREHENSION','CONSIDERABLE',
  'CONSTITUTION','COOPERATIVELY','CORRESPONDENT','COUNTERMEASURE',
  'DELIBERATELY','DEMONSTRATING','DISADVANTAGED','DISCOMFORTINGLY',
  'DOCUMENTARIES','ENCOURAGEMENT','ENTREPRENEURSHIP','ENVIRONMENTAL',
  'ESTABLISHMENT','EXPERIMENTATION','FASCINATIONS','FORMULATIONS',
  'HEADQUARTERS','INDUSTRIALIST','KNOWLEDGEABLE','MANUFACTURINGS',
  'MODIFICATIONS','MULTINATIONAL','NEIGHBOURHOODS','PHILOSOPHICAL',
  'PHOTOGRAPHIC','PREDOMINANTLY','PSYCHOLOGICAL','QUESTIONNAIRES',
  'RECONSIDERED','REFRIGERATOR','STRAIGHTENING','STRENGTHENING',
  'SUBSCRIPTIONS','SUPERINTENDENT','TEMPERAMENTAL','THEATRICALLY',
  'UNFORGETTABLE','UNIVERSALITY','UNPRECEDENTED','UNPREDICTABLE',
  'UNPRECEDENTED','UNRESPONSIVE','WHOLESOMENESS',

  // ── 13-letter ──
  'ACCOMMODATION','CIRCUMSTANCES','COLLABORATIVE','COMPREHENSION',
  'CONSCIOUSNESS','CONSIDERATION','CONTROVERSIAL','DEMONSTRATION',
  'DETERMINATION','ENTERTAINMENT','ENVIRONMENTAL','ESTABLISHMENT',
  'EXTRAORDINARY','KNOWLEDGEABLE','MISUNDERSTAND','NEIGHBOURHOOD',
  'OVERCONFIDENT','PHILOSOPHICAL','PSYCHOLOGICAL','QUESTIONNAIRE',
  'REVOLUTIONARY','SOPHISTICATED','SUBSTANTIALLY','UNDERSTANDING',
  'VULNERABILITY','UNPRECEDENTED','ENCOURAGEMENT','CONFRONTATION',
  'CORRESPONDING','COMPLEMENTARY','COMPASSIONATE','CONSCIENTIOUS',
  'CONTEMPLATION','CONVERSATIONS','CONTROVERSIAL','CORROBORATION',
  'DISAPPOINTING','DISCOURAGING','DOCUMENTATION','ENLIGHTENMENT',
  'EXHILARATING','GLOBALIZATION','HEARTBREAKING','INCOMPATIBLE',
  'INSTANTANEOUS','INTERNATIONALLY','MAGNIFICENTLY','MODERNISATION',
  'MOUTHWATERING','OPPORTUNITIES','PARTICIPATION','PREDOMINANTLY',
  'PROBLEMATICAL','PROFESSORSHIP','PSYCHOLOGISTS','QUESTIONNAIRES',
  'REESTABLISHED','REINFORCEMENT','RELATIONSHIPS','REMEMBRANCES',
  'REPRESENTATIONS','SIGNIFICANTLY','SOPHISTICATION','SPECIFICATIONS',
  'STRAIGHTENING','SUSTAINABILITY','SYSTEMATICALLY','THOUGHTFULNESS',
  'UNDERSTANDINGS','UNFORGETTABLE','UNQUESTIONABLE','WHOLEHEARTED',
];

// De-duplicate and filter to valid length range
const VALID_WORDS = [...new Set(
  TARGET_WORDS
    .map(w => w.toUpperCase().replace(/[^A-Z]/g, ''))
    .filter(w => w.length >= 10 && w.length <= 13)
)];

console.log(`Target word pool: ${VALID_WORDS.length} words`);

// ─── Main generation loop ────────────────────────────────────────────────────
function main() {
  const gameJsPath = path.join(__dirname, '..', 'game.js');
  const gameJs = fs.readFileSync(gameJsPath, 'utf8');

  const startMarker = '// ─── PUZZLES START ───';
  const endMarker   = '// ─── PUZZLES END ───';
  if (!gameJs.includes(startMarker) || !gameJs.includes(endMarker)) {
    console.error('ERROR: Markers not found in game.js. Add:\n  ' + startMarker + '\n  ...\n  ' + endMarker);
    process.exit(1);
  }

  const count = parseInt(process.argv[2] || '365', 10);
  console.log(`Generating ${count} puzzles...`);

  const puzzles = [];
  const shuffledWords = shuffle(VALID_WORDS);
  let wordIdx = 0;

  while (puzzles.length < count) {
    const word = shuffledWords[wordIdx % shuffledWords.length];
    wordIdx++;
    if (wordIdx > shuffledWords.length * 3) {
      console.warn(`Stopping early: exhausted word pool after ${puzzles.length} puzzles`);
      break;
    }

    const result = generatePuzzle(word, SOLVER_WORDS);
    if (!result) {
      process.stdout.write('.');
      continue;
    }
    puzzles.push({
      id: `p${String(puzzles.length + 1).padStart(4, '0')}`,
      letters: result.letters,
      prevAnswers: result.prevAnswers,
    });
    if (puzzles.length % 20 === 0) process.stdout.write(`\n${puzzles.length}/${count} `);
    else process.stdout.write(`${puzzles.length % 20 === 1 ? '' : ''}`);
  }

  console.log(`\n\nGenerated ${puzzles.length} puzzles.`);

  // Format the PUZZLES array as compact JS (one puzzle per line for readability)
  const puzzlesJs = `// ─── PUZZLES START ───\nconst PUZZLES = [\n` +
    puzzles.map(p => {
      const lettersStr = JSON.stringify(p.letters);
      const answersStr = JSON.stringify(p.prevAnswers);
      return `  { id: ${JSON.stringify(p.id)}, letters: ${lettersStr}, prevAnswers: ${answersStr} }`;
    }).join(',\n') +
    '\n];\n// ─── PUZZLES END ───';

  const newGameJs = gameJs.replace(
    new RegExp(startMarker.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '[\\s\\S]*?' + endMarker.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')),
    puzzlesJs
  );

  fs.writeFileSync(gameJsPath, newGameJs, 'utf8');
  console.log(`Updated game.js with ${puzzles.length} puzzles.`);
}

main();
