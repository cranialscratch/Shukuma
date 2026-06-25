// Shukuma Wordsearch Mini Game — single-file bundle (no ES modules)
// Compatible with file:// and any static server

(function () {
"use strict";

// ─── Word list ───────────────────────────────────────────────────────────────
const WORDS = new Set([
  // 3-letter words
  "ace","act","add","age","ago","aid","aim","air","ale","all","and","ant","ape","arc","are","ark","arm","art","ash","ask","ate","awe","axe","aye",
  "bad","bag","ban","bar","bat","bay","bed","bet","bid","big","bit","bow","box","boy","bud","bug","bun","bus","but","buy",
  "cab","can","cap","car","cat","cob","cod","cop","cow","cry","cub","cup","cut",
  "dam","day","den","dew","did","dig","dim","dip","doe","dog","dot","dry","dub","dug","dye",
  "ear","eat","egg","ego","elf","elk","elm","end","era","eve","ewe","eye",
  "fad","fan","far","fat","fax","fee","few","fig","fit","fix","fly","foe","fog","for","fox","fry","fun","fur",
  "gag","gap","gas","gel","gem","get","gig","gin","gnu","god","got","gun","gut","guy","gym",
  "had","ham","has","hat","hay","her","hew","hid","him","hip","his","hit","hob","hog","hop","hot","how","hub","hue","hug","hum","hut",
  "ice","ill","imp","ink","inn","ion","ire","ivy",
  "jab","jam","jar","jaw","jet","jig","job","jog","jot","joy","jug","jut",
  "keg","ken","key","kid","kin","kit",
  "lab","lag","lap","law","lax","lay","lea","led","leg","let","lid","lip","lit","log","lot","low",
  "mad","man","map","mar","mat","maw","may","men","met","mew","mid","mix","mob","mop","mud","mug","mum",
  "nag","nap","net","new","nil","nip","nit","nob","nod","nor","not","now","nun","nut",
  "oak","oar","oat","odd","ode","off","oil","old","one","opt","orb","ore","our","out","owe","owl","own",
  "pad","pal","pan","pap","par","pat","paw","pay","pea","peg","pen","pep","per","pet","pew","pie","pig","pin","pit","ply","pod","pop","pot","pry","pub","pun","pup","pus","put",
  "rag","ram","ran","rap","rat","raw","ray","red","ref","rep","rid","rig","rim","rip","rob","rod","roe","rot","row","rub","rug","rum","run","rut","rye",
  "sad","sag","sap","sat","saw","say","sea","set","sew","shy","sin","sip","sir","sit","ski","sky","sly","sob","sod","son","sow","soy","spa","spy","sty","sub","sue","sum","sun","sup",
  "tab","tan","tap","tar","tax","tea","ten","the","thy","tie","tin","tip","toe","ton","too","top","tow","toy","try","tub","tug","two",
  "ugh","urn","use",
  "van","vat","via","vie","vim","vow",
  "wad","wag","war","was","wax","web","wed","wet","who","why","wig","win","wit","woe","wok","woo","wow",
  "yak","yam","yap","yaw","yea","yet","yew","yob","you",
  "zap","zen","zig","zip","zoo",
  // 4-letter words
  "able","ache","acid","acne","acre","acts","aged","aide","aims","ajar","akin","also","alto","amok","anew","apex","arch","area","arms","army","arts","ashy","atom","avid","away","awed","axes","axis",
  "babe","back","bade","bail","bait","bake","bald","bale","ball","balm","band","bane","bang","bank","bare","bark","barn","bash","bass","bath","bawl","beam","bean","bear","beat","been","beef","beer","bell","belt","bend","best","bias","bile","bill","bind","bird","bite","bled","blew","blob","blog","blow","blue","blur","boar","boat","body","bold","bolt","bomb","bond","bone","book","boom","boot","bore","born","boss","both","bout","brag","bran","brat","bred","brew","brim","brow","buff","bulb","bull","bump","bunk","buoy","burn","burp","burr","bury","buzz",
  "cage","cake","calf","call","calm","came","cane","card","care","cart","case","cash","cast","cave","cell","chef","chin","chip","chop","clad","clam","clap","claw","clay","clip","clod","clog","clop","clot","club","clue","coal","coat","coil","coin","cold","colt","comb","come","cone","cook","cool","cope","cord","core","corn","cosy","cozy","cram","crew","crop","crow","crud","cube","curl","curb","cure","curt","cyan",
  "dais","dale","dare","dark","dart","dash","data","date","dawn","dead","deaf","deal","dean","dear","debt","deck","deep","deer","deft","deli","demo","deny","desk","dial","dice","died","diet","dike","dill","dime","dine","dire","dirt","disc","dish","disk","dive","dolt","dome","done","door","dope","dorm","dose","dote","dove","down","drab","drag","draw","drew","drip","drop","drum","dual","duke","dull","dumb","dump","dune","dunk","dusk","dust",
  "each","earl","earn","ease","east","edge","emit","epic","ergo","even","ever","evil","ewer","exam","exec",
  "face","fact","fail","fair","fake","fall","fame","fang","farm","fast","fate","fawn","faze","fear","feat","feed","feel","feet","fell","felt","fend","fern","file","film","find","fine","fire","firm","fish","fist","fizz","flag","flap","flat","flaw","fled","flew","flex","flip","flit","flop","flow","foam","fold","folk","fond","font","fool","ford","fore","fork","form","fort","foul","four","fowl","free","frog","from","fuel","full","fume","fund","fuss","fuzz",
  "gain","gale","gall","game","gape","garb","gash","gave","gaze","gear","germ","gift","gild","gill","gist","glad","glow","glue","goad","goal","goat","goes","gold","golf","gone","gong","good","goon","gore","gosh","gown","grab","gram","gray","grew","grin","grip","grit","gulf","gull","gust","guts",
  "hack","hail","hair","hale","hall","halt","hand","hang","hard","hare","harm","harp","hash","haul","have","haze","hazy","head","heal","heap","heat","heel","heir","held","helm","help","herb","herd","here","hero","hewn","hide","high","hike","hill","hilt","hind","hint","hoax","hold","hole","holy","home","hone","honk","hood","hook","hope","horn","hose","host","huge","hulk","hull","hung","hunk","hunt","hurl","husk",
  "idle","idly","inch","iron","isle",
  "jack","jade","jail","jape","jerk","jest","jibe","jilt","jive","jolt","josh","jowl","jump","junk","jury","just",
  "keen","keep","kern","kick","kill","kilt","kind","king","knew","knob","knot","know",
  "lack","laid","lake","lame","lamp","land","lane","lank","lard","lark","lash","last","late","laud","lava","lawn","lazy","lead","leaf","leak","lean","leap","lent","less","lick","life","lift","like","limb","lime","limp","line","link","lion","list","live","load","loaf","loan","lobe","lock","loft","lone","long","loon","loop","lore","lorn","loss","lout","love","lull","lump","lung","lure","lurk","lush","lust","luxe",
  "made","maid","main","make","male","mall","mane","many","mare","mark","mart","mash","mask","mass","mast","mate","math","maze","mead","meal","mean","meat","melt","memo","mend","menu","mere","mesh","mice","mild","mile","mill","mime","mind","mine","mint","mire","miss","mist","moan","mode","mole","mold","mood","moon","moor","more","most","move","much","murk","muse","musk","must","myth",
  "name","nape","nark","nave","near","neck","need","newt","next","nick","node","none","noon","norm","nose","note","noun","nude","numb","nuts",
  "oath","oboe","once","only","open","oral","orca","oval","oven","over","owed","owns",
  "pace","pack","page","paid","pail","pain","pair","pale","palm","pane","park","part","pass","past","path","pave","peak","peal","peat","peel","peer","pelt","perk","pest","pick","pier","pile","pill","pine","pink","pint","pipe","plan","play","plod","plot","plow","ploy","plug","plum","plus","poem","poet","poke","pole","poll","pond","pone","pony","pool","pore","pork","port","pose","post","pour","pout","pray","prep","prey","prim","prod","prop","pull","pulp","pump","pure","push",
  "race","rack","rage","raid","rail","rain","rake","ramp","rang","rank","rasp","rate","rave","read","real","reap","rear","reed","reef","reel","rein","rely","rend","rent","rest","rice","rich","ride","rife","rile","ring","riot","rise","risk","roam","roar","robe","rock","role","roll","roof","rook","room","root","rope","rose","rout","rove","rude","rune","rush","rust",
  "safe","sage","sake","sale","salt","same","sand","sane","sang","sank","sash","save","seam","seed","seem","seen","self","sell","send","sent","shed","shin","ship","shoe","shot","show","shut","sick","side","sigh","silk","sill","silo","sing","sink","site","size","skid","skip","slab","slap","slew","slid","slim","slip","slob","slot","slow","slum","slur","snap","snip","snob","snow","soak","soar","sock","soft","soil","sole","some","song","soot","sore","sort","soul","soup","sour","spin","spit","spot","spur","stab","stag","star","stem","step","stew","stir","stop","stub","stud","stun","such","sulk","sung","sunk","sure","surf","swap","swat","sway","swim",
  "tack","tail","tale","tall","tame","tang","tank","taut","teem","tell","tend","tent","term","test","than","that","them","then","they","thin","this","thou","tide","tidy","till","tilt","time","tiny","tire","toad","told","toll","tomb","tone","took","torn","toss","tote","tour","town","trap","tray","tree","trek","trim","trio","trip","true","tuck","tuft","tune","turf","tusk","twin","type",
  "ugly","undo","upon","urge","used",
  "vale","vane","vary","veal","veer","veil","vein","verb","vibe","vice","view","vile","vine","void","vole","volt","vote",
  "wade","wage","wake","walk","wall","wane","want","ward","warm","warn","warp","wart","wash","watt","wavy","weak","weal","wean","weed","week","well","welt","wend","went","were","west","wide","wife","wild","wile","will","wilt","wink","wire","wise","wish","with","woke","wold","wolf","wood","woof","wool","word","wore","work","worm","worn","wort","wove","wrap","wren","writ",
  "yard","yarn","yawn","year","yell","yelp","your","yowl","yule",
  "zeal","zero","zinc","zone",
  // 5-letter words
  "abbot","abhor","abide","abyss","ached","acorn","actor","acute","adopt","adult","after","agile","aglow","agony","agree","ahead","aisle","alarm","album","alder","aloft","alone","along","aloof","aloud","amaze","amble","amend","amiss","among","ample","angry","angst","annex","anvil","aorta","apple","apply","apron","ardor","argue","arise","array","ashen","aside","asset","atone","attic","audit","avail","avoid","awake","aware","awful",
  "baker","banjo","basic","basis","batch","beach","began","begun","being","below","bench","birth","bison","black","blade","blame","bland","blank","blaze","bleak","bleed","bless","blind","bliss","block","blood","bloom","board","boast","booze","bound","boxer","brace","brake","brand","brave","brawn","bread","break","bride","brief","brink","brisk","broil","broke","brook","broom","broth","brown","brunt","brush","brute","buddy","build","built","bunch","bugle","burst","buyer",
  "cabin","camel","canal","candy","cargo","carry","catch","cause","cedar","chain","chalk","charm","chase","cheap","cheer","chess","chest","chief","child","chord","civic","civil","claim","clash","class","clean","clear","clerk","click","cliff","climb","cling","clock","close","cloth","cloud","clown","coach","colon","color","comet","comic","count","court","cover","crack","craft","cramp","crane","crash","creak","creed","creep","crest","crime","crisp","cross","crowd","crown","crude","cruel","crush","crust","cycle",
  "daily","dance","decay","defer","delay","depth","deter","devil","dirty","dizzy","dodge","doubt","dozen","draft","drain","drape","drawn","dream","drift","drill","drive","drove","drunk","dryer","duchy","dummy","dusky","dwarf","dwell","dying",
  "eager","eagle","early","earth","elect","empty","enemy","enjoy","enter","equal","error","essay","evade","event","every","exact","exist","extra",
  "fable","fairy","faith","false","fancy","fatal","favor","feast","fence","fetch","fever","fiber","field","fiend","fight","final","first","fixed","fizzy","flake","flame","flank","flare","flash","flask","flock","flood","floor","flown","flute","foggy","force","forge","forth","found","frame","frank","fraud","freak","fresh","front","froth","froze","fruit","fully","funny",
  "gaudy","gauge","giant","given","gland","glare","glass","gleam","glean","glide","glint","gloat","gloom","gloss","glove","going","grace","grade","grain","grand","grant","grape","grasp","grave","graze","greed","greet","grind","groan","groin","gross","group","grove","growl","grown","guile","guilt","guise","gusto","gutsy",
  "happy","hardy","harsh","haven","havoc","hazel","heard","heart","heavy","hedge","heist","hitch","hoist","horde","horse","hotel","hound","house","hover","human","humid","humor","hurry",
  "ideal","image","inane","incur","index","indie","inept","infer","inner","input","inter","intro","irate","issue",
  "jaded","jaunt","jerky","joker","judge","juice","juicy","jumpy",
  "keeps","kneel","knife","knock","known",
  "laden","laser","latch","later","leafy","leaky","learn","lease","least","ledge","legal","lemon","level","light","lilac","linen","liner","liver","lives","local","lodge","logic","lousy","lover","lower","lowly","loyal","lucky","lumpy","lusty",
  "magic","major","maker","manor","maple","march","marry","match","mayor","melee","melon","mercy","merit","merry","metal","micro","might","minor","minus","mirth","miser","mixer","modal","model","money","month","moral","morph","motel","motif","motor","motto","mourn","mouse","mousy","mouth","muddy","muggy","murky","mural","musty",
  "naive","nifty","night","noble","noisy","north","noted","novel","nudge","nurse",
  "occur","olive","onset","opera","order","ought","ounce","outer","oxide",
  "panic","party","paste","patch","pause","peace","pearl","penny","perch","petty","phase","phone","piano","piece","pilot","pitch","pixel","pizza","place","plain","plane","plank","plant","plate","plaza","pluck","plumb","plume","point","polar","polka","power","price","pride","prime","prior","prize","probe","prone","proof","prose","proxy","prune","pulse","punch","pupil","puppy","purge","queen","quest","quote",
  "rainy","rally","ranch","range","rapid","ratio","reach","ready","realm","rebel","refer","reign","relax","repay","reply","rerun","reuse","rider","ridge","rifle","right","risky","rival","river","rivet","robot","rocky","rouge","rough","round","route","rover","royal","ruler","runny","rural",
  "sadly","saint","salad","sauce","savvy","scale","scary","scene","scone","scope","score","scorn","scout","scowl","sense","serve","setup","seven","sever","shall","shame","shape","share","shark","sharp","sheen","sheer","shelf","shell","shift","shine","shirt","shock","short","shout","shove","sight","silly","since","sixth","sixty","skate","skill","skull","slain","slake","slate","slave","sleek","sleep","sleet","slice","slide","sling","slink","slope","sloth","small","smart","smell","smile","smite","smoke","snare","sneak","sneer","snide","sniff","snore","solar","solid","solve","sorry","south","space","spade","spare","spark","spawn","speak","speed","spend","spice","spicy","spill","spine","spite","spoke","spook","spoon","spout","spray","staff","stage","stain","stale","stall","stamp","stare","stark","start","state","steak","steal","steam","steel","steep","steer","stern","stick","stiff","still","sting","stink","stock","stoke","stone","stood","store","storm","story","stout","strap","straw","stray","strip","strum","stuck","study","stuff","style","sugar","suite","sulky","sunny","super","surge","swear","sweat","sweep","sweet","swept","swift","swine","swipe","swirl","swoop","syrup",
  "table","taken","taste","tasty","tatty","tawny","teach","tease","teddy","tepid","thank","theme","there","these","thick","thing","think","third","thorn","those","three","threw","throw","thump","tiger","tight","timer","tired","title","today","token","touch","tough","tower","toxic","trace","track","trade","trail","train","trait","trawl","tread","treat","trend","trick","tried","trite","troll","troop","truck","truly","trump","tuner","twang","tweak","tweed","twist","tying",
  "ulcer","ultra","under","unfit","unite","until","upper","upset","urban","usher","utter",
  "vague","valid","value","valve","vapor","vault","venom","verge","verse","vigil","viral","virus","visit","visor","vista","vital","vivid","vocal","vogue","voice","vouch",
  "wager","watch","water","weary","weave","wedge","weedy","weigh","weird","whale","wheat","wheel","where","which","while","whirl","whisk","white","whole","whose","widen","widow","wield","witty","woman","women","world","worry","worse","worst","worth","would","wound","wring","wrist","wrote","wrung",
  "yacht","yield","young","yours","youth",
  // 6+ letter words
  "absent","accuse","across","action","actual","advice","affect","afford","afraid","agency","animal","annual","appeal","appear","arrest","artery","assert","assets","assist","assure","attain","attend","awaken",
  "beacon","belief","belong","beware","bishop","blazed","blazer","broken","burden",
  "cancel","cannon","carbon","career","castle","cattle","census","change","charge","church","circle","cities","clause","clever","client","closed","coffee","column","combat","common","comply","cotton","couple","cousin","credit","crisis","critic","custom",
  "danger","dealer","debate","decide","defeat","defend","depend","design","detail","detect","divide","dollar","driven",
  "effect","elapse","empire","enable","engage","ensure","escape","estate","evolve","exceed","except","excite","exempt","expand","expect","expert","expose","extend",
  "factor","fallen","famous","father","filter","finger","finish","fiscal","flight","flower","follow","formal","former","frozen","future",
  "garden","gather","genius","gentle","global","golden","govern","growth","guided","guitar",
  "happen","hatred","heaven","hidden","higher","honest",
  "impact","impose","income","inform","inject","injury","inside","insist","insure","intend","intent","invest","island","itself",
  "jungle","killed","launch","lawyer","leader","league","lesson","letter","listen","little","living","losing",
  "manner","market","master","matter","middle","mirror","modern","moment","mother","motion","murder","muscle","mutual",
  "nation","native","nature","nearly","needle","normal","notice",
  "obtain","offend","office","oldest","onward","opener","option","output","oxygen",
  "parent","partly","patent","patrol","palace","papers","people","permit","person","phrase","player","plural","pocket","poison","police","policy","postal","praise","prison","profit","proper","proven","pursue",
  "racial","rather","reason","recipe","reform","remain","remind","remove","render","repair","repeat","resign","resort","result","retail","return","reveal","reward","ruling",
  "safety","sample","school","second","secret","sector","series","served","simple","single","sister","slowly","social","sought","source","spirit","spoken","spread","stable","static","steady","stolen","stored","stream","street","strict","strike","strong","struck","stupid","submit","suffer","summit","supply","symbol","system",
  "talent","target","theory","though","threat","ticket","toward","travel","treaty","tribal","triple","trying","tunnel",
  "unique","unless","unveil","update","useful",
  "valley","varied","victim","virtue","vision","visual","volume",
  "wallet","weapon","weekly","weight","whilst","wicked","widely","winter","within","wonder","wooden","worker","yearly",
  // 7+ letter words
  "ability","absence","account","accused","achieve","acquire","actions","address","adjourn","advance","adverse","against","analogy","another","approve","arrange","attempt","attract","average",
  "balance","beneath","besides","between","billion","captain","capture","certain","channel","chapter","citizen","command","comment","company","compare","compete","concept","concern","conduct","confirm","connect","consent","contact","contain","context","control","convert","correct","council","country","courage","covered","current","damaged","decided","decline","defence","default","deficit","deliver","despite","digital","dispute","distant","divided","drawing","dynamic",
  "ecology","economy","elected","element","emotion","endless","enhance","episode","exactly","execute","exhibit","exposed","extreme",
  "fashion","federal","feeling","fiction","finally","finance","finding","foreign","forward","founded","freedom","further",
  "general","getting","greater","growing","healthy","hearing","history","hundred","husband",
  "imagine","improve","include","initial","inquiry","insight","install","instead","intense","journey","justice","keeping","kitchen","landing","learned","leaving","lengthy","limited","logical","machine","married","medical","mention","message","million","minimum","missing","mistake","monster","nothing","nuclear","obvious","offense","offered","opening","operate","opinion","organic","outside",
  "patient","pattern","perhaps","popular","portion","poverty","prevent","primary","private","problem","process","produce","profile","promise","protect","provide","publish","purpose","qualify","quality","quickly","quietly","radical","reading","reality","realize","receive","recover","reflect","release","replace","require","resolve","respect","restore","revenue","society","soldier","somehow","someone","special","station","student","subject","success","support","surface","several","service","sustain","teacher","through","towards","traffic","trusted","typical","usually","village","violent","virtual","wealthy","welcome","western","whether","working","writing","younger",
  // 8+ letter words
  "absolute","accepted","accurate","actively","addition","adequate","advanced","affected","aircraft","although","analysis","annually","approved","argument","assembly","attached","attitude","audience","backward","balanced","becoming","believed","breaking","bringing","building","business","campaign","capacity","changing","chemical","children","choosing","climbing","combined","commerce","comments","compared","complete","compound","computer","concepts","concerns","conflict","consider","constant","consumer","contains","continue","contract","controls","covering","cultural","currency",
  "decision","declared","decrease","delivers","designed","detailed","develops","directly","disabled","disaster","discover","disposal","distance","distinct","district","division","domestic","economic","educated","election","employed","engineer","enormous","entirely","entrance","equation","estimate","evaluate","evidence","examples","exercise","expected","extended",
  "familiar","features","feedback","finished","flexible","followed","forecast","function","generate","governor","guidance","handling","happened","hundreds",
  "identify","includes","industry","infected","informal","inspired","interest","involved","isolated","judgment","launched","literacy","location","maintain","majority","marriage","material","medicine","millions","moderate","modified","movement","national","negative","observed","obtained","occurred","operated","ordinary","organize","original","overcome","packages","parallel","partners","payments","peaceful","physical","platform","policies","position","positive","possibly","practice","prepared","presence","pressing","previous","products","programs","progress","property","proposed","provides","purchase","received","recently","remained","repeated","replaced","requires","research","resource","response","resulted","security","selected","sentence","services","shipping","slightly","software","solution","specific","standard","struggle","students","studying","supposed","teaching","tendency","terminal","textbook","thousand","together","training","transfer","traveled","troubles","ultimate","uncommon","valuable","violence","whatever","wherever","wildlife","withdraw","workshop","yourself",
  // 9-letter words
  "abandoned","abilities","according","addressed","advancing","advantage","aftermath","agreement","alongside","ambiguous","amendment","announced","anonymous","apparatus","appointed","arbitrary","architect","arguments","assembled","assertion","athletics","attempted","attention","authentic","automatic","available","awareness","beautiful","beginning","believing","belonging","benefited","broadcast","brilliant","carefully","certainty","challenge","character","chemicals","chemistry","childhood","classroom","community","competing","computers","confident","connected","contained","continued","converted","corporate","corrected","countries","criticism","currently","databases","decisions","declaring","dedicated","delivered","democracy","departure","described","deserving","developed","different","dimension","direction","discussed","displayed","education","elaborate","emergency","employees","encounter","enjoyable","essential","estimated","exception","excessive","existence","explained","extremely",
  "financial","generated","geography","governing","graduated","guideline","happening","household","important","inclusion","indicated","influence","inherited","intensity","investors","isolation","knowledge","languages","locations","machinery","magnitude","marketing","materials","mechanism","mentioned","migration","milestone","necessary","objective","operating","organized","otherwise","performed","permanent","political","precisely","preferred","preparing","presented","prevented","principle","processes","producing","promoting","realistic","receiving","recording","reflected","regulated","relations","remaining","responded","resulting","returning","revealing","satisfied","secondary","sensitive","seriously","situation","sometimes","spiritual","statement","structure","succeeded","suggested","supported","surprised","surviving","sustained","technical","temporary","territory","thousands","treatment","typically","uncertain","universal","withdrawn","worldwide","excellent","expansion","following","formation","framework",
  // 10+ letter words
  "absolutely","acceptance","accessible","accomplish","accounting","accurately","adjustment","administer","affordable","aggressive","ambassador","applicable","atmosphere","attraction","background","calculation","challenges","collective","commitment","communicate","comparative","competitive","complement","complicated","components","considered","consistent","constructed","continuous","convenience","corporations","credentials","declaration","democratic","demonstrate","depression","effectively","environment","established","evaluation","examination","excellence","exceptional","exhibiting","experienced","explanation","flexibility","foundations","frustration","geographical","immediately","implications","independent","information","integration","involvement","limitations","maintenance","measurement","negotiation","observation","orientation","outstanding","performance","possibility","practically","preparation","presentation","principles","processing","productivity","professional","qualification","realization","recognition","regulations","reinforcing","relationships","reliability","replacement","representation","requirements","restriction","satisfaction","significant","sophisticated","specialized","spectacular","standardize","stimulation","substantial","sufficiently","transparent","understands","utilization","vulnerability",
  "accomplishment","administration","appropriately","approximately","communication","comprehensive","consideration","corresponding","determination","distinguished","effectiveness","establishment","extraordinary","identification","implementation","independently","opportunities","responsibilities","transformation","understanding","unfortunately","contributions","authorization","characteristics","circumstances","classification","collaboration","compatibility","compensation","concentration","configuration","construction","contemporary","contributions","conversation","coordination","demonstration","disadvantage","documentation","encouragement","enlightenment","expectations","experimental","generalization","globalization","identification","imagination","independence","inheritance","innovation","instruction","intersection","introduction","investigation","justification","manufacturing","measurements","methodology","neighborhood","organization","participation","possibilities","preservation","presentation","proclamation","professionalism","qualification","recommendation","rehabilitation","reinforcement","relationships","representation","revolutionize","sophistication","specification","standardization","susceptibility","transformation","visualization",
  // Special words for the example puzzle
  "whole","wholes","wholesale","wholehearted","wholeheartedness",
  "heart","hearts","heartedly","hearted","heartless","heartfelt","heartburn","heartland","heartwood","heartache","heartbeat","heartbreak","heartstring",
  "other","mother","another","brother","smother",
  "horse","horses","horsed",
  "shoe","shoes","shone","shore",
  "lone","loner","stone","stoner","toner","bone","boner","tone","tones","hone","honer","mole","moles","hole","holes",
  "helm","helms","held","helps","hemp",
  "muon","milk","mild","mile","mole","moles","miler","miles","mills",
  "geld","gender","gentle",
  "pawn","spawn","prawn","drawn","dawn",
  "notch","notched","notches",
  "whet","whether","whets",
  "shorn","sworn","scorn","scorned","corner","corners","cornered",
  "hovel","hover","novel","shovel",
  "endorse","endorsement","endorsements",
  "stroke","strokes","stroked",
  "throne","throw","threw","three",
  "throb","throbs",
  "roost","roots","rooted","hooters","hooted",
  "shore","shores","stored","stores",
  "moles","holes","poles","roles","soles","toles",
  "shone","phone","phoned","phones",
  "trowel","towel","towels","dowel","dowels","vowel","vowels",
  "wonder","wonders","wondered","ponder","ponders","pondered",
  "horde","hordes","border","borders","bordered",
  "throne","thrones","enthrone","enthroned",
  "gander","sender","render","renders","rendered","blender","slender","tender","tenders","tendered","fender","gender","genders","lender","lenders","mender","menders","vender",
  "wonder","wonders","plunder","thunder","blunder","hundred","sundry",
]);

// ─── Puzzles ─────────────────────────────────────────────────────────────────
const PUZZLES = [
  {
    id: "puzzle-001",
    letters: ["G","E","D","E","P","W","T","N","S","O","H","R","S","L","","M","U","H","E","L","K",""],
    prevAnswers: [
      { word: "WHOLEHEARTEDNESS", pct: 7 },
      { word: "WHOLEHEARTED", pct: 15 },
      { word: "HEARTED", pct: 21 },
      { word: "WHOLE", pct: 22 },
      { word: "HEART", pct: 32 },
      { word: "4 or lower", pct: 3 },
    ],
  },
  {
    id: "puzzle-002",
    letters: ["S","T","A","R","E","A","R","T","H","L","I","G","H","T","B","R","I","G","H","T","E","N"],
    prevAnswers: [
      { word: "EARTHLIGHT", pct: 5 },
      { word: "BRIGHTER", pct: 12 },
      { word: "STARTLE", pct: 18 },
      { word: "LIGHTS", pct: 25 },
      { word: "BRIGHT", pct: 28 },
      { word: "4 or lower", pct: 12 },
    ],
  },
  {
    id: "puzzle-003",
    letters: ["C","O","M","P","R","A","I","S","E","D","L","Y","F","U","L","N","E","S","S","H","O","W"],
    prevAnswers: [
      { word: "PRAISES", pct: 16 },
      { word: "COMPASS", pct: 20 },
      { word: "PROSE", pct: 30 },
      { word: "POEM", pct: 22 },
      { word: "4 or lower", pct: 12 },
    ],
  },
];

function getTodaysPuzzle() {
  const dayIndex = Math.floor(Date.now() / 86400000);
  return PUZZLES[dayIndex % PUZZLES.length];
}

function getDateString() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return dd + mm + yy;
}

function getScoreLevel(length) {
  if (length <= 4) return "Below Average";
  if (length <= 6) return "Average";
  if (length <= 10) return "Above Average";
  if (length <= 14) return "Master";
  return "Grandmaster";
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
let gameCompleted = false;
let lastTileEntered = null;

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
      // 4-tile rows offset right — diagonals point into 5-tile rows
      neighbours.push([r - 1, c - 1], [r - 1, c], [r + 1, c - 1], [r + 1, c]);
    } else {
      // 5-tile rows — diagonals point into 4-tile rows (which are offset right)
      neighbours.push([r - 1, c], [r - 1, c + 1], [r + 1, c], [r + 1, c + 1]);
    }
    neighbours.forEach(function(nr) {
      const key = nr[0] + "," + nr[1];
      if (posMap[key] !== undefined) adj[t.id].add(posMap[key]);
    });
  });

  return adj;
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

// ─── Rendering ────────────────────────────────────────────────────────────────
const COLOURS = {
  neutral:  { fill: "#d4a96a", stroke: "#b8864a", text: "#2a1a0a" },
  selected: { fill: "#e8c840", stroke: "#c9a820", text: "#2a1a0a" },
  valid:    { fill: "#5cb85c", stroke: "#3d8b3d", text: "#ffffff" },
  invalid:  { fill: "#d9534f", stroke: "#a02020", text: "#ffffff" },
};

function renderTile(tile) {
  const g = document.getElementById("tile-" + tile.id);
  if (!g) return;
  const c = COLOURS[tile.state] || COLOURS.neutral;
  const poly = g.querySelector("polygon");
  const text = g.querySelector("text");
  if (poly) { poly.setAttribute("fill", c.fill); poly.setAttribute("stroke", c.stroke); }
  if (text) {
    text.setAttribute("fill", c.text);
    if (tile.blank) {
      if (tile.state === "valid" && tile._resolvedLetter) {
        text.setAttribute("text-decoration", "underline");
        text.textContent = tile._resolvedLetter.toUpperCase();
      } else {
        text.removeAttribute("text-decoration");
        text.textContent = "_";
      }
    } else {
      text.removeAttribute("text-decoration");
      text.textContent = tile.letter.toUpperCase();
    }
  }
}

function renderAllTiles() { tiles.forEach(renderTile); }

function updateAnswerArea() {
  const el = document.getElementById("answer-text");
  if (!el) return;
  if (selectedPath.length === 0) {
    el.textContent = "";
    el.className = "";
    return;
  }
  const display = selectedPath.map(id => {
    const t = tiles[id];
    if (t.blank) return t.state === "valid" && t._resolvedLetter ? t._resolvedLetter.toUpperCase() : "_";
    return t.letter.toUpperCase();
  }).join("");
  el.textContent = display;
  el.className = "has-word";
}

function updateScoreDisplay(validWord) {
  const scoreEl = document.getElementById("score-value");
  const levelEl = document.getElementById("score-level");
  if (!scoreEl) return;
  if (validWord && selectedPath.length > 0) {
    const len = selectedPath.length;
    scoreEl.textContent = len;
    if (levelEl) levelEl.textContent = getScoreLevel(len);
    scoreEl.className = "valid";
  } else if (selectedPath.length > 0) {
    scoreEl.textContent = "?";
    if (levelEl) levelEl.textContent = "";
    scoreEl.className = "invalid";
  } else {
    scoreEl.textContent = bestScore > 0 ? bestScore : "?";
    if (levelEl) levelEl.textContent = bestScore > 0 ? getScoreLevel(bestScore) : "";
    scoreEl.className = "";
  }
  updateLevelBar();
}

function updateLevelBar() {
  const len = selectedPath.length > 0 ? selectedPath.length : bestScore;
  let activeLevel = 0;
  if (len > 0)  activeLevel = 1;
  if (len >= 5) activeLevel = 2;
  if (len >= 7) activeLevel = 3;
  if (len >= 11) activeLevel = 4;
  if (len >= 15) activeLevel = 5;
  document.querySelectorAll(".level-segment").forEach(seg => {
    const lvl = parseInt(seg.getAttribute("data-level"), 10);
    seg.classList.toggle("active", lvl <= activeLevel);
  });
}

function updateTicketDisplay() {
  const el = document.getElementById("ticket-count");
  if (el) el.textContent = ticketCount;
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

  tiles.forEach(tile => {
    const { x, y } = hexCenter(tile.row, tile.col);
    const c = COLOURS.neutral;

    const g = document.createElementNS(NS, "g");
    g.setAttribute("id", "tile-" + tile.id);
    g.setAttribute("class", "hex-tile");
    g.setAttribute("data-id", tile.id);

    const poly = document.createElementNS(NS, "polygon");
    poly.setAttribute("points", hexPoints(x, y, HEX_SIZE - 2));
    poly.setAttribute("fill", tile.blank ? "#c8956a" : c.fill);
    poly.setAttribute("stroke", c.stroke);
    poly.setAttribute("stroke-width", "2");

    const text = document.createElementNS(NS, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "central");
    text.setAttribute("font-size", "20");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("font-family", "Georgia, serif");
    text.setAttribute("fill", c.text);
    text.setAttribute("pointer-events", "none");
    text.setAttribute("user-select", "none");
    text.textContent = tile.blank ? "_" : tile.letter.toUpperCase();

    g.appendChild(poly);
    g.appendChild(text);
    svg.appendChild(g);
  });
}

// ─── Selection logic ──────────────────────────────────────────────────────────
function processWordState() {
  if (selectedPath.length === 0) {
    tiles.forEach(t => { t.state = "neutral"; t._resolvedLetter = ""; });
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
    // Non-selected tiles back to neutral
    tiles.forEach(t => {
      if (!selectedPath.includes(t.id)) { t.state = "neutral"; t._resolvedLetter = ""; }
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
    removed.forEach(id => { tiles[id].state = "neutral"; tiles[id]._resolvedLetter = ""; });
    processWordState();
    return;
  }

  // Must be adjacent to last selected tile (or path is empty)
  if (selectedPath.length > 0) {
    const last = selectedPath[selectedPath.length - 1];
    if (!adjacency[last].has(tileId)) return;
  }

  selectedPath.push(tileId);
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
  e.preventDefault();
  isDragging = true;
  lastTileEntered = null;

  // Clear previous selection
  tiles.forEach(t => { t.state = "neutral"; t._resolvedLetter = ""; });
  selectedPath = [];

  const tileId = tileIdFromPoint(e.clientX, e.clientY);
  enterTile(tileId);
}

function onPointerMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  const tileId = tileIdFromPoint(e.clientX, e.clientY);
  if (tileId !== null) enterTile(tileId);
}

function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;
  lastTileEntered = null;

  if (selectedPath.length === 0) return;

  const validWord = validateWord(selectedPath);

  if (!validWord) {
    // Flash red then clear
    selectedPath.forEach(id => { tiles[id].state = "invalid"; });
    renderAllTiles();
    setTimeout(() => {
      tiles.forEach(t => { t.state = "neutral"; t._resolvedLetter = ""; });
      selectedPath = [];
      renderAllTiles();
      updateAnswerArea();
      updateScoreDisplay(null);
    }, 700);
  } else {
    // Lock in valid word
    const len = selectedPath.length;
    if (len > bestScore) {
      bestScore = len;
      bestWord = validWord;
      saveState();
    }
    // Keep green state
    updateScoreDisplay(validWord);
    enableShare();
  }
}

// ─── Info panel ───────────────────────────────────────────────────────────────
function initInfoPanel() {
  const btn = document.getElementById("info-btn");
  const card = document.getElementById("game-card");
  if (btn && card) {
    btn.addEventListener("click", () => {
      card.classList.toggle("flipped");
      if (card.classList.contains("flipped")) populateAnswers();
    });
  }
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      document.getElementById("game-card") && document.getElementById("game-card").classList.remove("flipped");
    });
  }
}

function populateAnswers() {
  const list = document.getElementById("answers-list");
  if (!list || !puzzle) return;
  list.innerHTML = "";
  puzzle.prevAnswers.forEach(a => {
    const li = document.createElement("li");
    li.className = "answer-item";
    li.innerHTML =
      '<span class="answer-word">' + a.word + '</span>' +
      '<span class="answer-bar"><span class="answer-fill" style="width:' + a.pct + '%"></span></span>' +
      '<span class="answer-pct">' + a.pct + '%</span>';
    list.appendChild(li);
  });
}

// ─── Share ────────────────────────────────────────────────────────────────────
function enableShare() {
  const btn = document.getElementById("share-btn");
  if (btn) btn.disabled = false;
}

function initShare() {
  const btn = document.getElementById("share-btn");
  if (!btn) return;
  btn.addEventListener("click", function() {
    if (bestScore === 0) return;
    const level = getScoreLevel(bestScore);
    const dateStr = getDateString();
    const text = "I scored '" + level + "' with " + bestScore + " letters.\nHow did you do?\n#Joyall #Shukuma" + dateStr;

    const doShare = function() {
      ticketCount++;
      gameCompleted = true;
      saveState();
      updateTicketDisplay();
      showToast("+1 Joyall Ticket! Total: " + ticketCount);
    };

    if (navigator.share) {
      navigator.share({ title: "Shukuma", text: text }).then(doShare).catch(() => {
        navigator.clipboard && navigator.clipboard.writeText(text);
        doShare();
        showToast("Score copied to clipboard!");
      });
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast("Score copied to clipboard!");
          doShare();
        }).catch(() => { doShare(); });
      } else {
        doShare();
        showToast("Share: " + text.split('\n')[0]);
      }
    }
  });
}

function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2500);
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function storageKey() { return "shukuma-" + getDateString(); }

function saveState() {
  try {
    localStorage.setItem(storageKey(), JSON.stringify({ bestWord, bestScore, ticketCount, gameCompleted }));
  } catch(_) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (!raw) return;
    const s = JSON.parse(raw);
    bestWord = s.bestWord || "";
    bestScore = s.bestScore || 0;
    ticketCount = s.ticketCount || 0;
    gameCompleted = s.gameCompleted || false;
  } catch(_) {}
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  puzzle = getTodaysPuzzle();
  loadState();

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

  const svg = document.getElementById("hex-board");
  if (svg) {
    svg.addEventListener("pointerdown", onPointerDown);
    svg.addEventListener("pointermove", onPointerMove);
    svg.addEventListener("pointerup", onPointerUp);
    svg.addEventListener("pointercancel", onPointerUp);
    svg.style.touchAction = "none";
  }

  initInfoPanel();
  initShare();

  updateScoreDisplay(null);
  updateTicketDisplay();
  if (bestScore > 0) enableShare();

  const dateEl = document.getElementById("puzzle-date");
  if (dateEl) {
    const d = new Date();
    dateEl.textContent = d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }
}

// Start
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

})();
