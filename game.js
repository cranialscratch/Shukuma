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
  "rainy","raise","rally","ranch","range","rapid","ratio","reach","ready","realm","rebel","refer","reign","relax","repay","reply","rerun","reuse","rider","ridge","rifle","right","risky","rival","river","rivet","robot","rocky","rouge","rough","round","route","rover","royal","ruler","runny","rural",
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
  "racial","raised","raises","rather","reason","recipe","reform","remain","remind","remove","render","repair","repeat","resign","resort","result","retail","return","reveal","reward","ruling",
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

// ─── PUZZLES START ───
const PUZZLES = [
  { id: "p0001", letters: ["I","E","S","T","O","R","I","E","D","T","E","C","I","I","C","R","M","E","D","I","L","T"], prevAnswers: [{"word":"DIRECTORIES","pct":4},{"word":"DESIRE","pct":15},{"word":"SECRET","pct":22},{"word":"RESET","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0002", letters: ["O","S","O","R","E","W","J","U","T","N","M","B","H","D","N","O","D","D","L","U","S","I"], prevAnswers: [{"word":"SOUTHBOUND","pct":4},{"word":"BOUND","pct":15},{"word":"MOUND","pct":30},{"word":"SOUTH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0003", letters: ["I","L","W","P","D","F","E","D","E","N","R","A","D","H","E","E","H","M","T","T","S","A"], prevAnswers: [{"word":"HEADMASTER","pct":4},{"word":"MASTER","pct":15},{"word":"AHEAD","pct":30},{"word":"HASTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0004", letters: ["N","E","N","D","W","F","T","E","E","R","A","I","N","T","N","E","C","O","N","E","M","C"], prevAnswers: [{"word":"CONCENTRATED","pct":4},{"word":"OCEAN","pct":15},{"word":"TRAIN","pct":30},{"word":"TRAIT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0005", letters: ["T","T","E","D","E","N","D","U","Y","M","I","O","D","P","O","S","E","R","O","L","E","V"], prevAnswers: [{"word":"DEVELOPMENT","pct":4},{"word":"DEVELOP","pct":15},{"word":"IMPOSE","pct":22},{"word":"ENDED","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0006", letters: ["M","E","N","A","H","E","G","T","T","W","N","A","R","H","T","A","R","J","N","I","R","F"], prevAnswers: [{"word":"ARRANGEMENT","pct":4},{"word":"AGENT","pct":15},{"word":"RANGE","pct":30},{"word":"RAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0007", letters: ["W","I","N","K","R","O","I","E","F","B","N","T","R","A","G","V","H","I","O","P","K","G"], prevAnswers: [{"word":"FRIGHTENING","pct":4},{"word":"INTER","pct":15},{"word":"RIGHT","pct":30},{"word":"HIRE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0008", letters: ["E","M","N","Y","L","A","F","B","A","I","T","O","H","T","Y","I","S","O","T","E","P","H"], prevAnswers: [{"word":"HOSPITALITY","pct":4},{"word":"FAIL","pct":15},{"word":"FAME","pct":30},{"word":"LEAF","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0009", letters: ["E","O","D","F","O","O","I","E","E","E","V","S","N","N","L","A","T","O","Y","Y","E","T"], prevAnswers: [{"word":"DEFENSIVELY","pct":4},{"word":"FESTAL","pct":15},{"word":"ASIDE","pct":30},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0010", letters: ["T","I","T","I","O","N","A","N","O","C","M","R","A","O","P","O","C","L","E","D","E","N"], prevAnswers: [{"word":"DECLARATION","pct":4},{"word":"NATIONAL","pct":9},{"word":"DOMAIN","pct":22},{"word":"ACORN","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0011", letters: ["R","Y","U","O","E","O","S","D","N","O","H","N","E","V","O","T","S","M","E","D","R","E"], prevAnswers: [{"word":"TREMENDOUS","pct":4},{"word":"SHORE","pct":15},{"word":"STOVE","pct":30},{"word":"DONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0012", letters: ["P","U","D","N","O","R","I","E","C","E","A","S","H","E","B","L","O","C","U","M","A","H"], prevAnswers: [{"word":"ECHOCHAMBER","pct":4},{"word":"CHOSEN","pct":15},{"word":"DESIRE","pct":22},{"word":"ENDURE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0013", letters: ["T","W","A","P","G","E","D","E","S","B","Z","R","C","R","S","I","L","I","N","U","R","A"], prevAnswers: [{"word":"SPECIALIZED","pct":4},{"word":"SIZED","pct":15},{"word":"RAIL","pct":30},{"word":"READ","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0014", letters: ["T","I","E","K","I","N","V","S","N","O","A","T","M","M","K","F","P","E","H","O","T","N"], prevAnswers: [{"word":"INVESTMENT","pct":4},{"word":"INVEST","pct":15},{"word":"VEIN","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0015", letters: ["Y","V","R","A","E","D","S","V","O","E","D","D","N","H","V","A","N","T","S","I","U","Q"], prevAnswers: [{"word":"VANQUISHED","pct":4},{"word":"ADDED","pct":15},{"word":"NAIVE","pct":30},{"word":"AUNT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0016", letters: ["L","O","N","L","A","T","I","H","I","L","E","T","N","I","P","M","O","I","D","P","E","C"], prevAnswers: [{"word":"CONTEMPLATION","pct":4},{"word":"EMOTION","pct":15},{"word":"COMPEL","pct":22},{"word":"COMET","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0017", letters: ["V","N","D","B","T","P","E","A","L","D","E","E","E","T","J","M","P","H","C","E","L","W"], prevAnswers: [{"word":"DEPENDABLE","pct":4},{"word":"BLADE","pct":15},{"word":"PEDAL","pct":30},{"word":"ABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0018", letters: ["P","R","T","I","E","O","O","R","O","H","P","B","N","D","Y","N","E","I","G","I","I","L"], prevAnswers: [{"word":"PROPORTION","pct":4},{"word":"PORTION","pct":15},{"word":"TROPHY","pct":22},{"word":"LINEN","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0019", letters: ["F","U","E","E","H","I","N","Z","T","O","S","I","D","I","I","H","T","S","N","P","I","C"], prevAnswers: [{"word":"CITIZENSHIP","pct":4},{"word":"SHINE","pct":15},{"word":"DINE","pct":30},{"word":"DISH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0020", letters: ["C","H","N","I","H","K","E","E","R","N","L","U","F","S","E","W","E","R","S","R","E","W"], prevAnswers: [{"word":"CHEERFULNESS","pct":4},{"word":"CHEER","pct":15},{"word":"FEEL","pct":30},{"word":"FREE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0021", letters: ["I","M","T","O","K","O","I","S","S","B","R","R","E","T","I","L","N","N","W","L","I","G"], prevAnswers: [{"word":"WILLINGNESS","pct":4},{"word":"INNER","pct":15},{"word":"LINEN","pct":30},{"word":"ORBIT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0022", letters: ["A","E","R","U","I","J","N","A","I","S","D","H","S","N","C","N","T","D","R","A","F","E"], prevAnswers: [{"word":"HANDCRAFTED","pct":4},{"word":"CRAFT","pct":15},{"word":"HASTE","pct":30},{"word":"SHARE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0023", letters: ["G","R","K","S","D","R","O","O","F","O","W","L","E","E","U","D","H","A","A","N","T","S"], prevAnswers: [{"word":"GROUNDWORK","pct":4},{"word":"AUNTS","pct":15},{"word":"FEAST","pct":30},{"word":"GROWL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0024", letters: ["S","S","G","N","T","T","I","H","I","O","R","E","C","I","I","D","T","L","N","E","L","S"], prevAnswers: [{"word":"STRETCHING","pct":4},{"word":"STORED","pct":15},{"word":"REIGN","pct":30},{"word":"STORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0025", letters: ["O","I","E","A","A","E","G","R","T","T","D","E","W","T","A","I","F","F","I","L","C","A"], prevAnswers: [{"word":"FACILITATED","pct":4},{"word":"CLIFF","pct":15},{"word":"GREAT","pct":30},{"word":"WEDGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0026", letters: ["N","D","N","C","V","E","N","L","O","T","R","R","V","T","G","O","V","G","O","F","N","U"], prevAnswers: [{"word":"UNFORGOTTEN","pct":4},{"word":"TREND","pct":15},{"word":"FORE","pct":30},{"word":"FORT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0027", letters: ["L","A","T","M","A","N","T","P","O","T","C","T","S","O","I","E","H","P","W","R","V","R"], prevAnswers: [{"word":"ATMOSPHERIC","pct":4},{"word":"ANTIC","pct":15},{"word":"LANCE","pct":30},{"word":"THEIR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0028", letters: ["C","A","R","W","M","N","D","G","S","C","C","Y","U","T","E","J","B","T","I","N","G","B"], prevAnswers: [{"word":"SUBJECTING","pct":4},{"word":"CANDY","pct":15},{"word":"DANCE","pct":30},{"word":"GRAND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0029", letters: ["E","E","S","S","A","L","E","R","L","E","C","A","Y","G","H","S","E","T","D","W","N","E"], prevAnswers: [{"word":"CARELESSLY","pct":4},{"word":"CLEAR","pct":15},{"word":"EARLY","pct":30},{"word":"LEACH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0030", letters: ["I","S","E","H","R","E","B","D","O","E","E","N","B","N","O","B","I","S","R","C","A","G"], prevAnswers: [{"word":"CORNERISED","pct":4},{"word":"CORNER","pct":15},{"word":"DESIRE","pct":22},{"word":"ACORN","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0031", letters: ["A","S","E","D","A","T","R","N","H","N","D","G","U","N","B","I","N","C","E","C","E","P"], prevAnswers: [{"word":"UNDERSTANDING","pct":4},{"word":"STAND","pct":15},{"word":"TREND","pct":30},{"word":"DINE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0032", letters: ["C","O","L","L","N","N","O","R","E","T","R","P","S","O","A","A","W","E","D","M","O","F"], prevAnswers: [{"word":"CONTROLLERS","pct":4},{"word":"CONTROL","pct":15},{"word":"APRON","pct":30},{"word":"COOL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0033", letters: ["K","O","R","P","C","F","F","N","A","O","W","O","C","N","U","L","Y","E","E","N","D","R"], prevAnswers: [{"word":"PROFOUNDLY","pct":4},{"word":"COULD","pct":15},{"word":"FOUND","pct":30},{"word":"RECAP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0034", letters: ["M","O","C","N","N","P","I","T","I","I","A","E","A","D","T","L","B","T","I","B","C","T"], prevAnswers: [{"word":"INCOMPATIBLE","pct":4},{"word":"ALBEIT","pct":15},{"word":"TABLE","pct":30},{"word":"ABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0035", letters: ["E","Q","U","E","E","U","I","N","U","N","O","T","F","E","E","A","R","V","S","S","E","Y"], prevAnswers: [{"word":"UNIQUENESS","pct":4},{"word":"ATONE","pct":15},{"word":"ENTRY","pct":30},{"word":"QUEEN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0036", letters: ["F","H","T","F","F","I","F","J","P","N","R","E","N","D","G","V","O","N","I","S","C","E"], prevAnswers: [{"word":"DISCOVERING","pct":4},{"word":"DISCOVER","pct":9},{"word":"COVER","pct":30},{"word":"FIFTH","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0037", letters: ["W","N","I","I","E","L","O","V","W","T","I","B","R","A","O","O","C","C","D","M","M","A"], prevAnswers: [{"word":"ACCOMMODATION","pct":4},{"word":"MOBILE","pct":15},{"word":"COMMA","pct":30},{"word":"BILE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0038", letters: ["D","W","E","O","I","D","W","T","S","N","U","L","I","T","S","A","A","E","R","I","T","F"], prevAnswers: [{"word":"INDUSTRIALIST","pct":4},{"word":"INSULT","pct":15},{"word":"AUNTS","pct":30},{"word":"TRIAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0039", letters: ["K","U","E","R","A","E","I","U","R","C","G","S","O","S","L","N","I","U","U","G","D","N"], prevAnswers: [{"word":"SURROUNDING","pct":4},{"word":"REIGN","pct":15},{"word":"ROUND","pct":30},{"word":"CAKE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0040", letters: ["W","R","M","E","T","Y","V","B","C","I","R","A","N","L","S","E","I","U","A","C","V","N"], prevAnswers: [{"word":"UNIVERSALITY","pct":4},{"word":"UNIVERSAL","pct":9},{"word":"ARISE","pct":30},{"word":"LASER","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0041", letters: ["H","N","E","G","V","C","I","N","I","T","I","G","R","N","E","U","H","O","L","U","R","B"], prevAnswers: [{"word":"NEIGHBORING","pct":4},{"word":"BORN","pct":15},{"word":"GRIN","pct":30},{"word":"HORN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0042", letters: ["I","N","G","R","A","S","C","R","A","S","U","O","L","S","C","D","E","V","V","S","I","G"], prevAnswers: [{"word":"DISCUSSING","pct":4},{"word":"ALOUD","pct":15},{"word":"CORAL","pct":30},{"word":"CODE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0043", letters: ["A","E","I","H","D","N","O","I","I","S","R","T","A","D","A","E","H","C","I","K","L","O"], prevAnswers: [{"word":"RELOCATIONS","pct":4},{"word":"LOCATION","pct":9},{"word":"AHEAD","pct":30},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0044", letters: ["S","E","S","T","I","I","S","E","M","V","R","R","B","E","S","O","G","A","S","P","R","H"], prevAnswers: [{"word":"PROGRESSIVE","pct":4},{"word":"PROGRESS","pct":9},{"word":"ERROR","pct":30},{"word":"GROSS","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0045", letters: ["S","C","N","R","I","O","O","T","I","E","N","C","B","S","A","S","I","U","H","N","O","T"], prevAnswers: [{"word":"CONTRIBUTION","pct":4},{"word":"NONE","pct":15},{"word":"NOON","pct":30},{"word":"SANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0046", letters: ["T","L","A","Y","A","U","T","N","S","C","L","I","O","N","A","T","U","E","C","C","V","T"], prevAnswers: [{"word":"CALCULATIONS","pct":4},{"word":"NATIONAL","pct":9},{"word":"CAUTION","pct":22},{"word":"ACTION","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0047", letters: ["V","S","A","N","C","I","B","B","R","S","R","I","N","S","P","E","T","G","R","M","I","S"], prevAnswers: [{"word":"SPRINGTIME","pct":4},{"word":"BRINGS","pct":15},{"word":"SPRING","pct":22},{"word":"BASIC","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0048", letters: ["I","R","E","E","T","N","R","E","T","I","G","E","V","N","O","O","C","P","L","F","D","E"], prevAnswers: [{"word":"RECOGNITION","pct":4},{"word":"FLOOD","pct":15},{"word":"LOGIN","pct":30},{"word":"TIGER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0049", letters: ["O","W","N","F","Y","N","H","U","D","T","M","V","L","L","I","D","E","N","I","B","A","R"], prevAnswers: [{"word":"VULNERABILITY","pct":4},{"word":"ABIDE","pct":15},{"word":"ADMIT","pct":30},{"word":"LEARN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0050", letters: ["I","G","A","W","A","M","R","T","R","N","I","A","R","G","G","E","E","V","C","D","H","A"], prevAnswers: [{"word":"HEARTWARMING","pct":4},{"word":"AIMING","pct":15},{"word":"GRAIN","pct":30},{"word":"HEART","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0051", letters: ["E","S","I","T","G","O","O","I","N","T","P","O","V","A","P","V","E","L","A","G","D","Y"], prevAnswers: [{"word":"POSITIVELY","pct":4},{"word":"POSITIVE","pct":9},{"word":"POINT","pct":30},{"word":"GOES","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0052", letters: ["P","T","N","R","O","Y","O","T","S","L","N","M","O","D","M","E","A","S","E","I","N","O"], prevAnswers: [{"word":"STONEMASON","pct":4},{"word":"ANIME","pct":15},{"word":"STONE","pct":30},{"word":"MANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0053", letters: ["Y","R","W","O","U","O","R","I","N","N","T","P","T","P","S","I","C","A","E","C","F","I"], prevAnswers: [{"word":"SPECIFICATION","pct":4},{"word":"ACTION","pct":15},{"word":"NOTICE","pct":22},{"word":"STORY","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0054", letters: ["S","H","H","V","O","P","A","S","I","E","C","I","Y","F","E","T","V","L","F","H","I","E"], prevAnswers: [{"word":"EFFECTIVELY","pct":4},{"word":"ACTIVELY","pct":9},{"word":"ACTIVE","pct":22},{"word":"EFFECT","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0055", letters: ["T","D","N","N","C","L","C","D","I","H","E","N","E","E","S","E","N","P","F","U","D","E"], prevAnswers: [{"word":"INDEPENDENCE","pct":4},{"word":"FUSE","pct":15},{"word":"HEED","pct":30},{"word":"HELD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0056", letters: ["T","E","R","V","S","B","L","U","W","T","A","O","A","I","C","S","P","S","O","N","H","I"], prevAnswers: [{"word":"RELATIONSHIPS","pct":4},{"word":"ACTION","pct":15},{"word":"STABLE","pct":22},{"word":"CABLE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0057", letters: ["E","L","D","B","I","T","E","N","R","A","E","T","C","V","I","L","U","O","T","T","S","T"], prevAnswers: [{"word":"CULTIVATED","pct":4},{"word":"SLEET","pct":15},{"word":"STOUT","pct":30},{"word":"CULT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0058", letters: ["D","T","B","C","S","H","I","A","S","A","Y","A","E","L","R","G","D","I","P","O","U","N"], prevAnswers: [{"word":"PLAYGROUND","pct":4},{"word":"AROUND","pct":15},{"word":"POUND","pct":30},{"word":"PROUD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0059", letters: ["O","G","O","G","W","I","N","B","Y","T","E","I","N","N","N","S","S","N","O","P","T","E"], prevAnswers: [{"word":"WITNESSING","pct":4},{"word":"ONSET","pct":15},{"word":"BONE","pct":30},{"word":"GONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0060", letters: ["N","D","R","I","U","N","E","H","N","A","I","L","G","W","I","C","L","S","I","P","E","H"], prevAnswers: [{"word":"WANDERINGS","pct":4},{"word":"WANDER","pct":15},{"word":"SHELL","pct":30},{"word":"CELL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0061", letters: ["T","H","E","A","S","F","E","A","U","N","Y","B","R","G","T","L","F","T","T","L","E","C"], prevAnswers: [{"word":"HEARTFELTLY","pct":4},{"word":"HEART","pct":15},{"word":"ABLE","pct":30},{"word":"BEAR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0062", letters: ["T","N","S","V","U","O","E","W","Y","R","U","Q","S","G","T","T","U","E","P","I","C","R"], prevAnswers: [{"word":"PICTURESQUE","pct":4},{"word":"CURE","pct":15},{"word":"ROUT","pct":30},{"word":"SURE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0063", letters: ["D","G","R","N","O","A","Y","N","G","L","D","I","C","H","N","U","M","O","P","C","O","P"], prevAnswers: [{"word":"COMPOUNDING","pct":4},{"word":"COMING","pct":15},{"word":"COMIC","pct":30},{"word":"MOUND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0064", letters: ["H","N","A","L","D","E","E","T","N","R","U","D","I","V","E","D","W","O","S","D","I","N"], prevAnswers: [{"word":"NATIONWIDE","pct":4},{"word":"WIDEN","pct":15},{"word":"DEAL","pct":30},{"word":"DEAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0065", letters: ["H","E","P","M","E","E","R","O","S","S","N","V","C","I","R","H","S","A","O","N","S","D"], prevAnswers: [{"word":"COMPREHENSION","pct":4},{"word":"ACORN","pct":15},{"word":"NOISE","pct":30},{"word":"SCOPE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0066", letters: ["O","I","E","E","C","C","W","O","L","L","T","E","A","O","A","H","S","C","C","O","C","E"], prevAnswers: [{"word":"CHOCOLATES","pct":4},{"word":"SCALE","pct":15},{"word":"THESE","pct":30},{"word":"CASE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0067", letters: ["N","S","I","V","O","J","T","U","E","P","E","R","N","U","S","V","R","O","W","R","C","A"], prevAnswers: [{"word":"UNRESPONSIVE","pct":4},{"word":"STERN","pct":15},{"word":"SUPER","pct":30},{"word":"SITE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0068", letters: ["N","E","S","I","L","U","S","F","C","N","F","E","Y","R","Y","P","W","D","A","L","U","H"], prevAnswers: [{"word":"PLAYFULNESS","pct":4},{"word":"ISSUE","pct":15},{"word":"FUSE","pct":30},{"word":"PLAY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0069", letters: ["E","E","B","M","R","S","T","A","A","G","A","D","B","V","S","E","L","I","I","V","H","S"], prevAnswers: [{"word":"REESTABLISHED","pct":4},{"word":"STABLE","pct":15},{"word":"AGREE","pct":30},{"word":"LEASE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0070", letters: ["I","T","N","S","R","G","H","E","S","B","H","K","S","R","E","W","U","N","G","R","P","V"], prevAnswers: [{"word":"BRIGHTNESS","pct":4},{"word":"BRIGHT","pct":15},{"word":"RIGHT","pct":30},{"word":"GREW","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0071", letters: ["A","V","B","M","N","C","H","N","W","E","R","T","S","N","O","W","E","E","I","C","L","I"], prevAnswers: [{"word":"CHRONICLES","pct":4},{"word":"THRONE","pct":15},{"word":"NORTH","pct":30},{"word":"THROW","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0072", letters: ["W","R","O","I","E","O","B","N","T","C","X","A","A","A","G","E","M","N","E","S","L","I"], prevAnswers: [{"word":"EXAMINATION","pct":4},{"word":"ANIME","pct":15},{"word":"MANOR","pct":30},{"word":"CAGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0073", letters: ["G","N","M","P","Y","C","U","H","V","E","R","I","I","U","E","T","S","N","O","O","E","G"], prevAnswers: [{"word":"TRIUMPHING","pct":4},{"word":"STRUNG","pct":15},{"word":"HINGE","pct":30},{"word":"STEER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0074", letters: ["S","I","E","D","S","Y","N","L","I","I","R","U","N","F","R","V","G","A","E","A","A","L"], prevAnswers: [{"word":"UNYIELDING","pct":4},{"word":"YIELD","pct":15},{"word":"DENY","pct":30},{"word":"FIRE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0075", letters: ["D","R","T","E","H","R","A","Q","R","V","E","U","B","T","N","T","K","A","S","O","C","C"], prevAnswers: [{"word":"QUARTERBACK","pct":4},{"word":"AUTO","pct":15},{"word":"BACK","pct":30},{"word":"COST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0076", letters: ["N","E","V","R","O","N","V","I","O","I","L","A","N","T","A","T","E","M","S","G","N","E"], prevAnswers: [{"word":"ENVIRONMENTAL","pct":4},{"word":"ATLAS","pct":15},{"word":"LINEN","pct":30},{"word":"METAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0077", letters: ["L","E","S","E","T","M","T","A","M","I","E","F","R","I","A","T","R","N","D","L","I","H"], prevAnswers: [{"word":"TIMEFRAMES","pct":4},{"word":"FRAME","pct":15},{"word":"METAL","pct":30},{"word":"STEAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0078", letters: ["L","L","I","S","A","T","O","N","E","S","I","E","D","Y","R","C","L","S","T","C","K","D"], prevAnswers: [{"word":"CRYSTALLISED","pct":4},{"word":"NOTICE","pct":15},{"word":"ALLOT","pct":30},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0079", letters: ["A","C","I","T","N","I","N","I","Y","S","C","I","L","I","T","T","O","I","N","E","T","P"], prevAnswers: [{"word":"POLITICIANS","pct":4},{"word":"POLITE","pct":15},{"word":"POTENT","pct":22},{"word":"PILOT","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0080", letters: ["R","A","G","R","I","N","S","N","A","O","M","I","M","I","C","L","E","W","T","K","D","U"], prevAnswers: [{"word":"WELCOMINGS","pct":4},{"word":"COMING","pct":15},{"word":"ANIME","pct":30},{"word":"CLING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0081", letters: ["O","A","C","G","E","T","O","H","V","A","H","O","N","E","U","X","E","O","G","S","T","I"], prevAnswers: [{"word":"EXHAUSTION","pct":4},{"word":"COAT","pct":15},{"word":"GUST","pct":30},{"word":"HATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0082", letters: ["G","B","R","T","R","S","A","I","D","O","C","F","C","L","A","I","U","O","L","E","S","N"], prevAnswers: [{"word":"COUNSELLORS","pct":4},{"word":"SOCIAL","pct":15},{"word":"BRAID","pct":30},{"word":"LOCAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0083", letters: ["R","N","V","A","M","N","M","E","T","I","E","S","L","D","K","H","V","E","P","T","J","S"], prevAnswers: [{"word":"THEMSELVES","pct":4},{"word":"THEME","pct":15},{"word":"THESE","pct":30},{"word":"DINE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0084", letters: ["T","V","E","F","E","E","A","O","A","M","U","B","H","R","I","L","E","Q","B","I","I","U"], prevAnswers: [{"word":"EQUILIBRIUM","pct":4},{"word":"ABLE","pct":15},{"word":"BILE","pct":30},{"word":"BLUE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0085", letters: ["I","O","E","T","H","V","L","U","S","E","I","T","A","R","U","O","N","A","I","N","Y","R"], prevAnswers: [{"word":"REVOLUTIONARY","pct":4},{"word":"NATIVE","pct":15},{"word":"TOILET","pct":22},{"word":"LIVER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0086", letters: ["L","E","W","U","B","A","S","E","O","E","E","L","K","G","D","W","O","N","A","A","E","D"], prevAnswers: [{"word":"KNOWLEDGEABLE","pct":4},{"word":"KNOWLEDGE","pct":9},{"word":"LEASE","pct":30},{"word":"LEDGE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0087", letters: ["H","E","V","S","E","M","L","F","T","N","T","O","O","I","N","V","U","C","W","I","H","E"], prevAnswers: [{"word":"INVOLVEMENT","pct":4},{"word":"COOL","pct":15},{"word":"FOOL","pct":30},{"word":"FOOT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0088", letters: ["P","U","R","U","L","B","H","G","N","A","E","R","N","C","K","S","D","E","L","I","S","T"], prevAnswers: [{"word":"BLACKLISTED","pct":4},{"word":"LISTEN","pct":15},{"word":"BAKER","pct":30},{"word":"BLACK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0089", letters: ["E","D","L","O","N","S","E","C","N","O","W","I","S","I","T","N","S","S","F","C","A","P"], prevAnswers: [{"word":"SANCTIONED","pct":4},{"word":"ACTION","pct":15},{"word":"PANIC","pct":30},{"word":"COLD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0090", letters: ["W","L","I","C","H","W","O","H","S","Y","A","R","O","H","A","G","E","A","P","R","O","G"], prevAnswers: [{"word":"CHOREOGRAPHY","pct":4},{"word":"CHORE","pct":15},{"word":"GROWL","pct":30},{"word":"SHORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0091", letters: ["A","N","S","R","R","F","P","H","E","T","L","A","W","S","Y","N","W","O","U","U","T","E"], prevAnswers: [{"word":"TRANSPLANT","pct":4},{"word":"PLANT","pct":15},{"word":"SPAWN","pct":30},{"word":"ARTS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0092", letters: ["A","T","I","O","N","I","N","G","G","M","D","S","A","E","O","A","A","R","S","M","W","W"], prevAnswers: [{"word":"DOMINATING","pct":4},{"word":"ADMIT","pct":15},{"word":"ANIME","pct":30},{"word":"GOING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0093", letters: ["R","G","N","N","U","A","I","G","E","O","C","B","K","H","G","S","D","O","N","H","I","E"], prevAnswers: [{"word":"DISCOURAGING","pct":4},{"word":"AGING","pct":15},{"word":"GRAIN","pct":30},{"word":"DISH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0094", letters: ["N","D","S","E","I","T","E","I","K","T","I","T","N","E","P","O","R","U","V","P","O","T"], prevAnswers: [{"word":"OPPORTUNITIES","pct":4},{"word":"INTRO","pct":15},{"word":"TRUNK","pct":30},{"word":"INTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0095", letters: ["D","V","E","P","L","P","F","O","E","R","E","S","P","Y","N","O","L","U","O","I","T","A"], prevAnswers: [{"word":"POPULATION","pct":4},{"word":"ALONE","pct":15},{"word":"ATONE","pct":30},{"word":"PULSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0096", letters: ["S","E","D","S","P","C","N","I","F","O","U","M","G","A","R","U","N","Y","A","T","I","O"], prevAnswers: [{"word":"DECORATION","pct":4},{"word":"PORTION","pct":15},{"word":"AROUND","pct":22},{"word":"COURT","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0097", letters: ["E","F","O","R","F","O","E","T","L","V","T","U","S","E","C","O","M","I","R","I","G","N"], prevAnswers: [{"word":"OVERCOMING","pct":4},{"word":"COMING","pct":15},{"word":"SMOTE","pct":30},{"word":"FORT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0098", letters: ["I","S","T","E","R","M","A","C","S","T","U","N","C","O","C","R","I","H","C","S","E","W"], prevAnswers: [{"word":"CIRCUMSTANCES","pct":4},{"word":"CHINA","pct":15},{"word":"NURSE","pct":30},{"word":"AUTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0099", letters: ["T","L","Y","Y","L","T","I","T","R","E","E","N","C","X","M","I","A","C","P","E","R","D"], prevAnswers: [{"word":"EXPERIMENT","pct":4},{"word":"ANIME","pct":15},{"word":"DRAIN","pct":30},{"word":"ENTRY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0100", letters: ["L","W","R","K","O","L","O","N","A","O","N","W","A","H","S","U","E","H","C","H","H","I"], prevAnswers: [{"word":"SCHOOLWORK","pct":4},{"word":"KNOW","pct":15},{"word":"LORN","pct":30},{"word":"ROLL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0101", letters: ["S","D","O","T","B","R","A","N","A","U","C","I","E","T","O","B","G","I","Y","G","H","M"], prevAnswers: [{"word":"NEIGHBOURS","pct":4},{"word":"ATONE","pct":15},{"word":"BRAIN","pct":30},{"word":"CRANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0102", letters: ["B","L","M","K","L","D","T","S","O","O","I","I","A","B","J","U","L","N","B","O","U","R"], prevAnswers: [{"word":"JOURNALISM","pct":4},{"word":"BOLD","pct":15},{"word":"LAST","pct":30},{"word":"LIST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0103", letters: ["G","I","Y","E","N","O","T","E","O","N","A","A","S","P","K","C","E","R","O","O","N","V"], prevAnswers: [{"word":"CONVERSATION","pct":4},{"word":"RESET","pct":15},{"word":"CASE","pct":30},{"word":"COOK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0104", letters: ["S","I","T","K","E","R","Y","K","H","V","N","S","O","L","I","P","U","I","I","N","U","H"], prevAnswers: [{"word":"UNIVERSITY","pct":4},{"word":"LIVER","pct":15},{"word":"EVIL","pct":30},{"word":"LIVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0105", letters: ["E","D","G","T","G","F","E","C","E","R","E","N","H","O","R","V","O","R","C","E","S","U"], prevAnswers: [{"word":"GREENHOUSE","pct":4},{"word":"DEGREE","pct":15},{"word":"CHOSE","pct":30},{"word":"DEFER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0106", letters: ["E","L","M","F","R","E","N","U","J","E","F","J","N","N","F","I","R","D","C","E","D","N"], prevAnswers: [{"word":"DIFFERENCE","pct":4},{"word":"DIFFER","pct":15},{"word":"DEFER","pct":30},{"word":"FENCE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0107", letters: ["S","I","E","E","T","A","S","L","E","N","E","W","R","C","R","T","A","O","E","Y","C","T"], prevAnswers: [{"word":"RESISTANCE","pct":4},{"word":"ROTATE","pct":15},{"word":"ACTOR","pct":30},{"word":"AISLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0108", letters: ["R","R","Y","E","K","L","A","N","O","R","O","P","I","P","V","O","T","O","L","E","R","P"], prevAnswers: [{"word":"PROPORTIONAL","pct":4},{"word":"PORTION","pct":15},{"word":"LOVER","pct":30},{"word":"PROVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0109", letters: ["N","T","E","D","V","A","A","G","A","D","A","S","C","V","C","R","I","D","O","A","G","O"], prevAnswers: [{"word":"DISADVANTAGED","pct":4},{"word":"AGATE","pct":15},{"word":"AGED","pct":30},{"word":"CAGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0110", letters: ["E","S","E","R","N","I","N","T","E","T","R","O","H","I","S","O","C","P","K","P","O","S"], prevAnswers: [{"word":"TROPOSPHERE","pct":4},{"word":"CONSENT","pct":15},{"word":"CORNER","pct":22},{"word":"SPHERE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0111", letters: ["R","T","B","L","A","R","E","I","A","D","F","E","T","I","T","I","S","E","B","O","N","H"], prevAnswers: [{"word":"TRADITIONS","pct":4},{"word":"TRADITION","pct":9},{"word":"ALBEIT","pct":22},{"word":"FESTAL","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0112", letters: ["P","M","Y","A","N","U","Y","A","G","D","O","O","H","N","R","T","E","R","B","O","H","E"], prevAnswers: [{"word":"BROTHERHOOD","pct":4},{"word":"BROTH","pct":15},{"word":"OTHER","pct":30},{"word":"ROUND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0113", letters: ["V","I","T","C","L","E","A","R","E","Y","P","E","P","A","R","N","O","C","W","T","E","O"], prevAnswers: [{"word":"COOPERATIVELY","pct":4},{"word":"PARENT","pct":15},{"word":"ENTRY","pct":30},{"word":"REPEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0114", letters: ["O","T","M","E","R","S","R","E","C","E","C","U","A","E","T","U","P","S","U","R","E","T"], prevAnswers: [{"word":"RESTRUCTURE","pct":4},{"word":"RESCUE","pct":15},{"word":"SECURE","pct":22},{"word":"RECAP","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0115", letters: ["O","S","S","I","P","M","E","L","B","A","T","I","I","M","I","S","R","U","N","E","E","G"], prevAnswers: [{"word":"POSSIBILITIES","pct":4},{"word":"POSSIBLE","pct":9},{"word":"SERIES","pct":22},{"word":"BLESS","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0116", letters: ["C","D","R","Y","L","O","I","L","D","R","U","T","K","T","H","T","E","O","O","U","S","D"], prevAnswers: [{"word":"COURTHOUSE","pct":4},{"word":"OUTSET","pct":15},{"word":"COURT","pct":30},{"word":"HOUSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0117", letters: ["T","E","T","A","E","N","C","S","E","R","C","T","O","T","I","E","N","S","A","N","M","E"], prevAnswers: [{"word":"ENTERTAINMENT","pct":4},{"word":"CENTER","pct":15},{"word":"ENTER","pct":30},{"word":"SCENE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0118", letters: ["T","A","U","M","L","I","L","F","R","N","O","E","O","S","N","E","I","E","T","S","T","R"], prevAnswers: [{"word":"FORMULATIONS","pct":4},{"word":"ALONE","pct":15},{"word":"ONSET","pct":30},{"word":"STEEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0119", letters: ["L","I","T","W","T","T","C","C","T","P","I","M","Y","E","S","S","S","H","K","F","C","I"], prevAnswers: [{"word":"SKEPTICISM","pct":4},{"word":"EPIC","pct":15},{"word":"MISS","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0120", letters: ["P","R","E","U","R","I","G","N","N","T","N","S","I","F","C","I","A","F","I","N","D","F"], prevAnswers: [{"word":"FINGERPRINT","pct":4},{"word":"FINDING","pct":15},{"word":"FADING","pct":22},{"word":"FINGER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0121", letters: ["R","I","L","E","A","D","Z","E","D","D","A","T","S","T","N","H","T","E","Y","M","T","T"], prevAnswers: [{"word":"STANDARDIZED","pct":4},{"word":"STANDARD","pct":9},{"word":"HAZEL","pct":30},{"word":"STAND","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0122", letters: ["N","N","O","I","G","I","Z","T","E","L","R","A","Y","A","O","L","O","I","B","G","F","B"], prevAnswers: [{"word":"GLOBALIZATION","pct":4},{"word":"GLOBAL","pct":15},{"word":"ALIGN","pct":30},{"word":"LABOR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0123", letters: ["E","E","W","G","S","W","E","C","E","E","O","M","I","R","E","A","E","P","H","S","T","R"], prevAnswers: [{"word":"MASTERPIECE","pct":4},{"word":"MASTER","pct":15},{"word":"STREAM","pct":22},{"word":"STEAM","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0124", letters: ["E","I","N","T","O","S","Y","N","R","H","O","I","H","H","H","P","E","C","L","K","C","F"], prevAnswers: [{"word":"CHECKPOINT","pct":4},{"word":"CHECK","pct":15},{"word":"CHIEF","pct":30},{"word":"POINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0125", letters: ["I","Y","W","H","R","R","N","A","Y","S","K","T","H","O","O","M","C","N","T","N","E","E"], prevAnswers: [{"word":"ENCHANTMENT","pct":4},{"word":"WATCH","pct":15},{"word":"CENT","pct":30},{"word":"CHAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0126", letters: ["T","I","O","O","A","R","B","N","H","O","E","E","K","O","P","O","W","B","C","P","R","D"], prevAnswers: [{"word":"COOPERATION","pct":4},{"word":"OPERATION","pct":9},{"word":"PORTION","pct":22},{"word":"ORBIT","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0127", letters: ["A","E","I","O","O","H","R","T","N","E","L","F","A","C","E","E","R","R","A","T","B","T"], prevAnswers: [{"word":"CELEBRATION","pct":4},{"word":"FLEECE","pct":15},{"word":"RATIO","pct":30},{"word":"FARE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0128", letters: ["E","E","S","P","M","C","C","A","E","A","R","I","N","F","T","O","T","D","T","N","W","H"], prevAnswers: [{"word":"SPACECRAFT","pct":4},{"word":"ESCAPE","pct":15},{"word":"NOTICE","pct":22},{"word":"ANTIC","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0129", letters: ["T","C","I","L","B","O","T","T","A","M","E","H","P","E","I","S","M","M","H","S","Y","E"], prevAnswers: [{"word":"SYMPATHETIC","pct":4},{"word":"ATTIC","pct":15},{"word":"COMET","pct":30},{"word":"THEME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0130", letters: ["O","N","G","G","P","W","T","E","I","O","C","D","T","Y","E","U","R","S","M","H","I","N"], prevAnswers: [{"word":"INSTRUCTED","pct":4},{"word":"TRUCE","pct":15},{"word":"HURT","pct":30},{"word":"POEM","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0131", letters: ["E","L","O","N","G","E","N","I","T","A","T","T","A","T","R","I","L","S","A","C","U","D"], prevAnswers: [{"word":"ARTICULATION","pct":4},{"word":"AGENT","pct":15},{"word":"ATTIC","pct":30},{"word":"SAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0132", letters: ["C","O","C","V","T","U","M","P","T","E","L","P","R","C","I","D","G","V","N","A","G","R"], prevAnswers: [{"word":"COMPLIANCE","pct":4},{"word":"COULD","pct":15},{"word":"DANCE","pct":30},{"word":"CUTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0133", letters: ["T","F","E","E","N","I","E","A","R","V","I","G","S","R","A","N","W","O","E","C","D","O"], prevAnswers: [{"word":"WOODCARVINGS","pct":4},{"word":"RANGE","pct":15},{"word":"CARE","pct":30},{"word":"DOWN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0134", letters: ["V","R","P","B","E","E","V","S","V","N","M","H","C","T","I","B","G","E","O","N","D","H"], prevAnswers: [{"word":"PREVENTION","pct":4},{"word":"PREVENT","pct":15},{"word":"EVENT","pct":30},{"word":"BIND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0135", letters: ["L","A","E","K","L","M","R","E","W","A","T","S","A","T","A","E","M","P","U","N","I","L"], prevAnswers: [{"word":"STREAMLINE","pct":4},{"word":"STREAM","pct":15},{"word":"ANIME","pct":30},{"word":"LLAMA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0136", letters: ["N","E","A","I","D","O","W","W","A","E","K","C","N","R","T","C","C","G","S","R","U","H"], prevAnswers: [{"word":"WONDERSTRUCK","pct":4},{"word":"STRUCK","pct":15},{"word":"DONE","pct":30},{"word":"HURT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0137", letters: ["W","Y","E","H","W","H","U","M","I","E","C","D","S","N","R","E","H","P","N","F","H","A"], prevAnswers: [{"word":"HEMISPHERE","pct":4},{"word":"REDUCE","pct":15},{"word":"SPHERE","pct":22},{"word":"CREW","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0138", letters: ["L","W","V","M","D","L","T","R","G","N","D","N","O","A","W","R","U","H","T","E","O","J"], prevAnswers: [{"word":"GROUNDWATER","pct":4},{"word":"HOUND","pct":15},{"word":"ROUND","pct":30},{"word":"WATER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0139", letters: ["A","R","D","T","R","R","I","H","R","E","Y","T","T","H","P","O","O","H","A","R","G","P"], prevAnswers: [{"word":"PHOTOGRAPHER","pct":4},{"word":"GRAPE","pct":15},{"word":"THIRD","pct":30},{"word":"TOOTH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0140", letters: ["S","T","I","O","N","E","A","N","N","Q","U","I","E","S","A","E","R","V","C","G","A","N"], prevAnswers: [{"word":"QUESTIONNAIRE","pct":4},{"word":"INNER","pct":15},{"word":"QUEST","pct":30},{"word":"SQUAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0141", letters: ["L","A","H","C","L","R","G","N","O","E","N","I","G","E","T","I","I","E","W","I","W","P"], prevAnswers: [{"word":"CHALLENGING","pct":4},{"word":"AGING","pct":15},{"word":"AGREE","pct":30},{"word":"INTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0142", letters: ["P","C","O","U","B","U","O","T","S","G","A","S","V","N","N","T","E","W","I","D","Y","E"], prevAnswers: [{"word":"OUTSTANDING","pct":4},{"word":"OUTSET","pct":15},{"word":"COAST","pct":30},{"word":"NASTY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0143", letters: ["E","R","K","E","W","O","R","S","E","Y","H","E","R","D","N","E","H","R","H","A","L","I"], prevAnswers: [{"word":"HANDYWORKS","pct":4},{"word":"HANDY","pct":15},{"word":"HORSE","pct":30},{"word":"WORSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0144", letters: ["U","L","H","L","G","P","H","O","S","S","J","A","T","P","N","Y","Y","E","S","L","U","R"], prevAnswers: [{"word":"UPHOLSTERY","pct":4},{"word":"HATE","pct":15},{"word":"LURE","pct":30},{"word":"PLUG","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0145", letters: ["E","Y","I","P","G","D","H","F","E","I","S","N","N","S","S","I","C","O","K","T","T","I"], prevAnswers: [{"word":"DISTINCTION","pct":4},{"word":"DISTINCT","pct":9},{"word":"INSIST","pct":22},{"word":"DISH","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0146", letters: ["I","W","S","C","M","I","E","A","B","T","I","O","N","A","I","H","N","I","R","P","S","H"], prevAnswers: [{"word":"INSPIRATION","pct":4},{"word":"RATIO","pct":15},{"word":"BASE","pct":30},{"word":"CASE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0147", letters: ["H","M","Y","L","J","A","A","R","I","C","Y","T","N","E","A","O","L","U","U","E","V","O"], prevAnswers: [{"word":"VOLUNTARILY","pct":4},{"word":"VOLUNTARY","pct":9},{"word":"INTO","pct":30},{"word":"LOVE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0148", letters: ["A","N","R","T","M","T","U","O","W","E","R","L","V","T","N","T","R","Y","K","W","E","O"], prevAnswers: [{"word":"TOURNAMENT","pct":4},{"word":"NATURE","pct":15},{"word":"ENTER","pct":30},{"word":"ENTRY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0149", letters: ["O","W","A","R","D","A","N","S","R","K","E","O","F","B","R","M","W","A","E","L","P","B"], prevAnswers: [{"word":"BREAKDOWNS","pct":4},{"word":"BREAKDOWN","pct":9},{"word":"AWAKE","pct":30},{"word":"BREAD","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0150", letters: ["E","D","C","E","I","S","O","P","S","A","O","I","R","R","A","B","N","I","D","I","G","E"], prevAnswers: [{"word":"SPRINGBOARD","pct":4},{"word":"SPRING","pct":15},{"word":"BOARD","pct":30},{"word":"DOING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0151", letters: ["I","I","R","G","A","T","N","S","T","T","A","I","A","Y","I","V","T","R","T","E","J","P"], prevAnswers: [{"word":"INITIATIVE","pct":4},{"word":"ARTIST","pct":15},{"word":"NATIVE","pct":22},{"word":"NAIVE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0152", letters: ["I","O","N","A","T","A","R","S","E","L","A","I","A","D","C","C","W","P","E","L","S","B"], prevAnswers: [{"word":"DECLARATIONS","pct":4},{"word":"ALTAR","pct":15},{"word":"ARISE","pct":30},{"word":"RAISE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0153", letters: ["N","I","I","V","G","G","S","O","C","H","B","R","Y","I","I","P","Y","F","D","M","T","N"], prevAnswers: [{"word":"IMPROVISING","pct":4},{"word":"IVORY","pct":15},{"word":"NIGH","pct":30},{"word":"SIGN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0154", letters: ["E","O","L","M","I","P","N","E","S","G","S","N","A","T","G","T","O","I","R","H","U","S"], prevAnswers: [{"word":"ENTHUSIASM","pct":4},{"word":"SOUTH","pct":15},{"word":"STONE","pct":30},{"word":"LEAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0155", letters: ["O","A","T","B","L","R","T","T","A","L","N","O","U","I","E","R","C","O","N","G","V","E"], prevAnswers: [{"word":"CONTROLLING","pct":4},{"word":"CONTROL","pct":15},{"word":"LINGER","pct":22},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0156", letters: ["Y","R","I","C","O","R","G","N","N","S","T","I","E","W","E","R","X","E","R","E","P","I"], prevAnswers: [{"word":"EXPERIENCING","pct":4},{"word":"EXPERT","pct":15},{"word":"STRING","pct":22},{"word":"PIXIE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0157", letters: ["D","N","D","R","B","O","U","A","I","K","R","F","S","A","A","T","I","G","J","O","R","N"], prevAnswers: [{"word":"FUNDRAISING","pct":4},{"word":"AROUND","pct":15},{"word":"BOUND","pct":30},{"word":"DRAFT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0158", letters: ["S","S","O","I","E","I","G","C","A","K","A","E","L","A","I","E","S","I","L","G","N","I"], prevAnswers: [{"word":"SOCIALISING","pct":4},{"word":"SOCIAL","pct":15},{"word":"ALIEN","pct":30},{"word":"ALIGN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0159", letters: ["M","W","H","S","T","P","I","E","R","L","P","D","L","U","I","P","A","E","P","E","I","R"], prevAnswers: [{"word":"LEADERSHIP","pct":4},{"word":"LEADER","pct":15},{"word":"DALE","pct":30},{"word":"HELD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0160", letters: ["D","E","I","A","I","N","N","T","P","F","O","O","H","E","H","C","V","H","O","R","E","E"], prevAnswers: [{"word":"OVERCONFIDENT","pct":4},{"word":"CONFIDENT","pct":9},{"word":"ATONE","pct":30},{"word":"CHORE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0161", letters: ["F","H","K","I","B","Y","O","B","R","H","L","A","E","M","A","L","T","B","E","R","T","U"], prevAnswers: [{"word":"BUTTERBALL","pct":4},{"word":"ALTER","pct":15},{"word":"LATER","pct":30},{"word":"UTTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0162", letters: ["O","R","I","G","R","U","E","R","D","G","H","U","S","Y","H","O","E","N","C","K","D","O"], prevAnswers: [{"word":"ROUGHHOUSED","pct":4},{"word":"HOUSE","pct":15},{"word":"REUSE","pct":30},{"word":"ROUGH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0163", letters: ["F","N","O","N","N","E","U","I","R","S","D","T","P","E","C","R","I","H","D","J","J","E"], prevAnswers: [{"word":"DESCRIPTION","pct":4},{"word":"TUNED","pct":15},{"word":"DRIP","pct":30},{"word":"DUNE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0164", letters: ["I","T","Y","G","V","O","U","H","P","I","T","C","V","P","O","U","B","A","R","D","A","E"], prevAnswers: [{"word":"PRODUCTIVITY","pct":4},{"word":"PITCH","pct":15},{"word":"PROUD","pct":30},{"word":"TOUCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0165", letters: ["B","B","R","H","U","N","A","K","N","V","R","C","C","E","O","B","E","D","G","N","A","T"], prevAnswers: [{"word":"CARBONATED","pct":4},{"word":"ABOVE","pct":15},{"word":"BRACE","pct":30},{"word":"BACK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0166", letters: ["I","R","T","N","T","A","H","A","K","E","L","U","F","B","N","S","E","I","E","S","R","N"], prevAnswers: [{"word":"THANKFULNESS","pct":4},{"word":"EARTH","pct":15},{"word":"TENSE","pct":30},{"word":"TRAIT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0167", letters: ["H","R","W","W","I","N","G","E","P","O","E","E","H","R","S","N","O","F","T","O","N","F"], prevAnswers: [{"word":"RHINESTONE","pct":4},{"word":"HONEST","pct":15},{"word":"STRONG","pct":22},{"word":"HINGE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0168", letters: ["U","I","K","D","E","L","S","D","R","S","A","E","T","O","C","I","A","D","O","N","S","B"], prevAnswers: [{"word":"SOCIALISED","pct":4},{"word":"SOCIAL","pct":15},{"word":"BASIC","pct":30},{"word":"DEALS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0169", letters: ["V","O","C","L","A","O","S","O","A","R","A","S","R","I","D","I","T","O","Y","N","A","E"], prevAnswers: [{"word":"COORDINATORS","pct":4},{"word":"CORAL","pct":15},{"word":"DRAIN","pct":30},{"word":"STAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0170", letters: ["O","N","K","P","T","I","T","E","R","C","M","I","G","H","U","O","R","E","E","D","P","G"], prevAnswers: [{"word":"PRODUCTION","pct":4},{"word":"HUMOR","pct":15},{"word":"INTER","pct":30},{"word":"PROUD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0171", letters: ["T","W","R","N","O","S","E","R","C","U","T","T","N","H","H","A","S","W","P","E","H","D"], prevAnswers: [{"word":"SOUTHEASTERN","pct":4},{"word":"OUTSET","pct":15},{"word":"CREST","pct":30},{"word":"HASTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0172", letters: ["G","F","I","M","R","H","F","C","O","J","O","N","I","O","S","I","U","A","G","Y","L","L"], prevAnswers: [{"word":"UNOFFICIALLY","pct":4},{"word":"SONIC","pct":15},{"word":"COIN","pct":30},{"word":"JOIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0173", letters: ["D","C","V","E","E","N","I","O","R","I","D","P","W","A","N","E","M","H","O","D","L","E"], prevAnswers: [{"word":"OVERWHELMED","pct":4},{"word":"AIDED","pct":15},{"word":"ENDED","pct":30},{"word":"MEDIA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0174", letters: ["I","S","K","S","B","N","A","A","R","T","T","O","D","T","E","B","N","W","A","E","T","R"], prevAnswers: [{"word":"SKATEBOARD","pct":4},{"word":"ADOBE","pct":15},{"word":"BOARD","pct":30},{"word":"SKATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0175", letters: ["R","R","I","E","I","G","T","E","D","P","H","H","E","N","B","T","L","Y","K","F","U","L"], prevAnswers: [{"word":"RIGHTFULLY","pct":4},{"word":"FULLY","pct":15},{"word":"RIGHT","pct":30},{"word":"THEIR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0176", letters: ["G","T","A","I","I","F","U","L","P","G","A","E","L","N","N","M","N","T","I","O","T","H"], prevAnswers: [{"word":"MEANINGFUL","pct":4},{"word":"TALENT","pct":15},{"word":"LEMON","pct":30},{"word":"FAME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0177", letters: ["M","E","V","E","E","G","A","U","O","N","A","R","C","T","C","O","L","N","G","H","D","E"], prevAnswers: [{"word":"ENCOURAGEMENT","pct":4},{"word":"COURAGE","pct":15},{"word":"ANCHOR","pct":22},{"word":"AGENT","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0178", letters: ["P","R","E","D","U","N","C","E","I","H","N","E","T","G","A","C","D","N","F","T","T","E"], prevAnswers: [{"word":"UNPRECEDENTED","pct":4},{"word":"ATTEND","pct":15},{"word":"CANE","pct":30},{"word":"DEED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0179", letters: ["A","T","R","G","T","H","G","O","T","A","G","U","H","W","H","O","O","R","G","N","U","T"], prevAnswers: [{"word":"THROUGHOUT","pct":4},{"word":"THROUGH","pct":15},{"word":"ROUGH","pct":30},{"word":"TOUGH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0180", letters: ["D","L","E","T","D","P","C","L","E","M","O","S","Y","F","T","I","C","H","O","N","S","D"], prevAnswers: [{"word":"COMPLETELY","pct":4},{"word":"COMPLETE","pct":9},{"word":"POINT","pct":30},{"word":"COIN","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0181", letters: ["E","R","W","A","J","A","C","W","N","T","I","Y","C","I","V","A","V","I","T","Y","S","S"], prevAnswers: [{"word":"CREATIVITY","pct":4},{"word":"VICAR","pct":15},{"word":"ACRE","pct":30},{"word":"CARE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0182", letters: ["A","S","A","T","B","R","T","S","I","R","U","T","W","V","S","I","K","L","B","C","N","R"], prevAnswers: [{"word":"STATISTICS","pct":4},{"word":"ATTIC","pct":15},{"word":"STRUT","pct":30},{"word":"TWIST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0183", letters: ["T","J","P","M","N","E","I","T","U","P","M","P","E","L","P","N","R","A","A","T","E","M"], prevAnswers: [{"word":"TEMPERAMENTAL","pct":4},{"word":"LATER","pct":15},{"word":"METAL","pct":30},{"word":"PLATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0184", letters: ["R","E","E","T","T","O","C","N","A","O","M","P","O","T","C","V","A","I","R","O","S","S"], prevAnswers: [{"word":"COMPASSIONATE","pct":4},{"word":"CROSS","pct":15},{"word":"CENT","pct":30},{"word":"CORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0185", letters: ["W","N","K","C","S","H","O","C","H","E","L","B","A","E","T","W","N","I","A","E","T","H"], prevAnswers: [{"word":"BLOCKCHAIN","pct":4},{"word":"BLOCK","pct":15},{"word":"CABLE","pct":30},{"word":"CHAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0186", letters: ["I","O","A","T","E","T","N","R","A","A","A","Y","N","A","T","T","R","E","S","K","U","E"], prevAnswers: [{"word":"STATIONARY","pct":4},{"word":"NATURE","pct":15},{"word":"STATE","pct":30},{"word":"NOTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0187", letters: ["P","I","V","A","W","D","S","G","B","T","U","O","S","H","A","G","N","G","E","R","I","T"], prevAnswers: [{"word":"GATHERINGS","pct":4},{"word":"GATHER","pct":15},{"word":"AGING","pct":30},{"word":"GREAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0188", letters: ["E","A","P","O","A","L","M","I","I","T","T","E","T","O","S","R","E","C","N","K","V","H"], prevAnswers: [{"word":"PALMERSTON","pct":4},{"word":"ALTER","pct":15},{"word":"CHEER","pct":30},{"word":"PITCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0189", letters: ["E","E","F","V","S","E","X","R","G","N","C","R","U","T","O","E","D","B","I","T","P","R"], prevAnswers: [{"word":"EXCEPTIONS","pct":4},{"word":"SECRET","pct":15},{"word":"CENT","pct":30},{"word":"NOTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0190", letters: ["R","O","E","R","E","R","T","V","Y","A","R","E","T","W","N","C","H","I","H","D","G","N"], prevAnswers: [{"word":"EVERYTHING","pct":4},{"word":"ERROR","pct":15},{"word":"EVERY","pct":30},{"word":"RANCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0191", letters: ["T","H","O","F","S","O","O","I","S","C","K","T","I","M","M","E","T","B","A","R","K","O"], prevAnswers: [{"word":"STOCKMARKET","pct":4},{"word":"BITTER","pct":15},{"word":"MARKET","pct":22},{"word":"STOCK","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0192", letters: ["O","D","T","O","G","E","T","E","O","T","S","R","F","N","E","M","E","I","N","I","O","N"], prevAnswers: [{"word":"REFINEMENTS","pct":4},{"word":"FINE","pct":15},{"word":"FOOT","pct":30},{"word":"GOES","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0193", letters: ["E","A","O","L","S","R","M","R","S","P","O","T","H","I","S","N","V","R","B","L","E","T"], prevAnswers: [{"word":"RESPONSIBLE","pct":4},{"word":"ARMOR","pct":15},{"word":"MONTH","pct":30},{"word":"ISLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0194", letters: ["D","T","N","E","E","J","Y","M","P","N","N","O","L","E","N","P","E","P","I","H","D","R"], prevAnswers: [{"word":"DEPLOYMENT","pct":4},{"word":"DEPLOY","pct":15},{"word":"POLE","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0195", letters: ["N","I","Y","T","A","D","O","N","B","O","B","H","N","O","H","O","G","E","O","R","U","I"], prevAnswers: [{"word":"NEIGHBOURHOOD","pct":4},{"word":"ROUGE","pct":15},{"word":"ROUGH","pct":30},{"word":"HOOD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0196", letters: ["S","R","E","A","M","O","I","R","H","K","A","E","Y","E","T","C","K","O","S","F","A","C"], prevAnswers: [{"word":"SMOKESTACK","pct":4},{"word":"SMOKE","pct":15},{"word":"STACK","pct":30},{"word":"AREA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0197", letters: ["K","A","R","U","R","C","T","Y","I","E","O","R","G","O","C","I","N","C","R","D","I","D"], prevAnswers: [{"word":"TRACKRECORD","pct":4},{"word":"RECORD","pct":15},{"word":"ACORN","pct":30},{"word":"ACTOR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0198", letters: ["C","W","O","W","M","N","T","Y","R","A","G","E","P","E","A","E","R","D","T","N","E","C"], prevAnswers: [{"word":"PERCENTAGE","pct":4},{"word":"AGATE","pct":15},{"word":"AGENT","pct":30},{"word":"ANGER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0199", letters: ["C","O","E","E","S","L","D","F","S","E","L","L","B","C","T","S","E","S","I","O","N","K"], prevAnswers: [{"word":"COLLECTIONS","pct":4},{"word":"SECTION","pct":15},{"word":"ITSELF","pct":22},{"word":"NESTLE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0200", letters: ["O","G","R","A","L","I","S","T","S","O","H","C","N","L","C","S","Y","Y","R","P","I","N"], prevAnswers: [{"word":"PSYCHOLOGISTS","pct":4},{"word":"ARTS","pct":15},{"word":"COIL","pct":30},{"word":"LIST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0201", letters: ["I","N","F","A","D","S","T","A","W","N","U","V","D","J","D","P","Y","E","E","R","L","A"], prevAnswers: [{"word":"UNDERPLAYED","pct":4},{"word":"DEAL","pct":15},{"word":"DUST","pct":30},{"word":"NUDE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0202", letters: ["Y","O","I","S","E","T","P","R","S","E","U","O","E","C","A","R","U","N","E","E","F","L"], prevAnswers: [{"word":"CAREFULNESS","pct":4},{"word":"PRESS","pct":15},{"word":"ROUTE","pct":30},{"word":"AUTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0203", letters: ["Y","R","E","R","A","W","S","T","D","T","N","P","O","N","L","E","H","C","K","N","L","I"], prevAnswers: [{"word":"HELICOPTER","pct":4},{"word":"SPENT","pct":15},{"word":"DOTE","pct":30},{"word":"HOPE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0204", letters: ["H","W","T","R","L","I","H","A","O","E","E","G","W","T","N","N","E","U","U","C","K","D"], prevAnswers: [{"word":"WORTHWHILE","pct":4},{"word":"AGENT","pct":15},{"word":"KNEEL","pct":30},{"word":"WHILE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0205", letters: ["Y","O","U","F","L","A","T","L","E","W","O","R","S","N","I","M","A","I","U","E","R","A"], prevAnswers: [{"word":"REMORSEFUL","pct":4},{"word":"AISLE","pct":15},{"word":"ARMOR","pct":30},{"word":"RAISE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0206", letters: ["S","E","A","I","R","E","L","T","O","P","I","P","N","D","N","H","S","N","O","E","P","I"], prevAnswers: [{"word":"RELATIONSHIP","pct":4},{"word":"SHINE","pct":15},{"word":"SPEND","pct":30},{"word":"SPINE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0207", letters: ["F","C","J","N","M","O","S","P","T","P","T","I","A","T","E","T","O","N","T","I","S","R"], prevAnswers: [{"word":"COMPETITION","pct":4},{"word":"PIANO","pct":15},{"word":"SCOPE","pct":30},{"word":"STOMP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0208", letters: ["S","T","S","V","V","H","R","O","G","F","P","I","L","E","E","R","E","U","R","E","N","C"], prevAnswers: [{"word":"PREFERENCE","pct":4},{"word":"PREFER","pct":15},{"word":"STRIPE","pct":22},{"word":"PRIOR","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0209", letters: ["O","M","P","T","I","C","L","A","H","K","F","A","I","R","D","T","S","N","S","T","U","T"], prevAnswers: [{"word":"COMPLAINTS","pct":4},{"word":"FAINT","pct":15},{"word":"PAINT","pct":30},{"word":"PLAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0210", letters: ["A","D","A","Y","N","O","S","U","N","U","R","T","O","N","I","C","W","R","G","L","A","E"], prevAnswers: [{"word":"OUTSOURCING","pct":4},{"word":"STRING","pct":15},{"word":"STRUNG","pct":22},{"word":"ACTOR","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0211", letters: ["E","L","E","T","T","M","G","Y","N","E","M","A","I","V","N","T","R","E","J","U","N","C"], prevAnswers: [{"word":"UNCERTAINTY","pct":4},{"word":"CERTAIN","pct":15},{"word":"ELEMENT","pct":22},{"word":"TRAIN","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0212", letters: ["N","O","M","N","S","A","E","E","D","T","R","E","S","G","R","E","N","I","A","T","D","R"], prevAnswers: [{"word":"DEMONSTRATE","pct":4},{"word":"RENDER","pct":15},{"word":"AGREE","pct":30},{"word":"DEMON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0213", letters: ["A","L","O","L","C","I","G","O","A","A","H","H","I","R","S","C","Y","G","V","C","P","S"], prevAnswers: [{"word":"PSYCHOLOGICAL","pct":4},{"word":"LOGIC","pct":15},{"word":"CASH","pct":30},{"word":"CHAR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0214", letters: ["U","O","H","T","N","D","O","G","H","G","S","T","I","F","P","V","N","F","S","E","E","K"], prevAnswers: [{"word":"KNIGHTHOODS","pct":4},{"word":"EVENTS","pct":15},{"word":"KNIGHT","pct":22},{"word":"EVENT","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0215", letters: ["N","N","F","N","I","G","N","R","Y","T","R","T","S","U","I","N","I","F","B","R","D","I"], prevAnswers: [{"word":"DISTRIBUTING","pct":4},{"word":"BITING","pct":15},{"word":"GRIND","pct":30},{"word":"BIND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0216", letters: ["G","P","N","I","H","N","G","N","D","J","C","O","P","W","A","O","S","E","L","N","R","R"], prevAnswers: [{"word":"CORRESPONDING","pct":4},{"word":"PERSONAL","pct":9},{"word":"RESPOND","pct":22},{"word":"ACORN","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0217", letters: ["F","A","H","R","O","B","O","O","N","I","S","M","C","R","T","H","E","A","T","H","P","L"], prevAnswers: [{"word":"BIRTHPLACE","pct":4},{"word":"ACORN","pct":15},{"word":"BIRTH","pct":30},{"word":"LEMON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0218", letters: ["A","H","E","S","K","T","T","B","F","I","A","E","R","N","U","E","E","C","G","P","F","L"], prevAnswers: [{"word":"BREATHTAKING","pct":4},{"word":"CREATING","pct":9},{"word":"RETAIN","pct":22},{"word":"AKIN","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0219", letters: ["E","D","S","P","R","N","U","I","M","S","U","N","D","T","A","N","O","E","S","H","D","H"], prevAnswers: [{"word":"MISUNDERSTAND","pct":4},{"word":"STAND","pct":15},{"word":"DUNE","pct":30},{"word":"HAND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0220", letters: ["A","E","O","B","V","T","P","S","B","E","H","S","E","D","T","I","T","E","E","A","C","I"], prevAnswers: [{"word":"SOPHISTICATED","pct":4},{"word":"DEATH","pct":15},{"word":"BEST","pct":30},{"word":"POET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0221", letters: ["N","M","E","H","I","A","R","T","K","T","I","O","I","H","O","L","P","W","N","N","O","E"], prevAnswers: [{"word":"METROPOLITAN","pct":4},{"word":"REMAIN","pct":15},{"word":"MERIT","pct":30},{"word":"OTHER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0222", letters: ["S","L","B","A","U","E","A","I","N","S","T","V","I","S","L","G","R","R","C","T","I","U"], prevAnswers: [{"word":"SUSTAINABLE","pct":4},{"word":"STABLE","pct":15},{"word":"BLESS","pct":30},{"word":"STAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0223", letters: ["O","P","N","O","B","N","S","C","R","E","D","E","R","O","N","R","H","N","T","U","T","A"], prevAnswers: [{"word":"CORRESPONDENT","pct":4},{"word":"RESPOND","pct":15},{"word":"NATURE","pct":22},{"word":"BENDS","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0224", letters: ["E","H","B","W","C","C","S","O","S","I","T","R","C","N","G","A","K","I","H","T","W","A"], prevAnswers: [{"word":"NIGHTWATCH","pct":4},{"word":"NIGHT","pct":15},{"word":"STARK","pct":30},{"word":"STING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0225", letters: ["E","D","D","M","F","I","I","P","W","N","P","O","C","T","I","Y","I","T","E","L","L","H"], prevAnswers: [{"word":"DEFINITELY","pct":4},{"word":"FINITE","pct":15},{"word":"COIL","pct":30},{"word":"HILL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0226", letters: ["I","O","H","R","T","A","W","T","U","E","G","C","O","R","N","I","U","M","I","R","T","V"], prevAnswers: [{"word":"MOUTHWATERING","pct":4},{"word":"COURT","pct":15},{"word":"MOUTH","pct":30},{"word":"TIGER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0227", letters: ["A","S","S","D","E","S","C","I","S","W","O","A","N","N","M","Y","T","O","A","J","A","I"], prevAnswers: [{"word":"ASSOCIATIONS","pct":4},{"word":"ACIDS","pct":15},{"word":"COAT","pct":30},{"word":"INTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0228", letters: ["I","S","M","S","E","R","B","T","I","N","H","N","O","N","A","L","Y","E","H","M","K","H"], prevAnswers: [{"word":"MANNERISMS","pct":4},{"word":"MANNER","pct":15},{"word":"LANE","pct":30},{"word":"MANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0229", letters: ["R","N","K","R","L","J","I","V","S","W","Y","B","S","O","R","C","L","S","A","L","D","A"], prevAnswers: [{"word":"WORLDCLASS","pct":4},{"word":"CLASS","pct":15},{"word":"WORLD","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0230", letters: ["I","T","M","P","O","S","A","I","L","N","M","C","I","T","C","I","Y","E","I","T","L","R"], prevAnswers: [{"word":"IMPLICATIONS","pct":4},{"word":"STAMP","pct":15},{"word":"CAMP","pct":30},{"word":"CAST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0231", letters: ["B","T","O","S","E","N","N","O","I","T","O","N","T","U","C","S","V","A","V","E","R","T"], prevAnswers: [{"word":"CONSERVATION","pct":4},{"word":"CUTE","pct":15},{"word":"NONE","pct":30},{"word":"NOON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0232", letters: ["O","T","S","U","M","I","I","G","C","E","Z","N","G","C","N","S","M","U","A","E","O","S"], prevAnswers: [{"word":"CUSTOMIZING","pct":4},{"word":"CUSTOM","pct":15},{"word":"STING","pct":30},{"word":"CANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0233", letters: ["T","G","I","K","I","F","N","R","O","T","W","O","I","E","N","E","T","T","F","P","I","N"], prevAnswers: [{"word":"NETWORKING","pct":4},{"word":"NETWORK","pct":15},{"word":"INTENT","pct":22},{"word":"INTO","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0234", letters: ["N","O","O","R","E","N","U","S","E","A","R","I","H","S","E","O","E","M","L","T","N","E"], prevAnswers: [{"word":"NOURISHMENT","pct":4},{"word":"ARISE","pct":15},{"word":"ENTER","pct":30},{"word":"LEARN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0235", letters: ["P","R","I","D","T","E","C","Y","F","R","S","V","P","V","E","R","K","D","I","N","G","O"], prevAnswers: [{"word":"PRESERVING","pct":4},{"word":"PRICE","pct":15},{"word":"RESET","pct":30},{"word":"SERVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0236", letters: ["H","I","F","C","V","D","S","I","A","O","S","E","T","M","N","N","O","I","N","C","I","T"], prevAnswers: [{"word":"MODIFICATIONS","pct":4},{"word":"ATONE","pct":15},{"word":"ONSET","pct":30},{"word":"DOSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0237", letters: ["A","R","C","H","T","I","A","O","N","R","C","M","E","I","F","E","E","C","O","P","D","D"], prevAnswers: [{"word":"DEMOCRATIC","pct":4},{"word":"DEMON","pct":15},{"word":"MACHO","pct":30},{"word":"MARCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0238", letters: ["E","N","H","V","W","N","B","E","K","H","R","E","L","M","E","P","A","J","F","N","O","G"], prevAnswers: [{"word":"GOALKEEPER","pct":4},{"word":"REBEL","pct":15},{"word":"REPEL","pct":30},{"word":"BEER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0239", letters: ["O","I","B","B","P","R","E","I","D","D","R","S","C","H","E","U","L","I","K","S","S","O"], prevAnswers: [{"word":"DISCLOSURES","pct":4},{"word":"DRESS","pct":15},{"word":"ORDER","pct":30},{"word":"REUSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0240", letters: ["R","A","H","R","G","N","D","E","P","A","F","M","M","R","T","R","T","A","A","H","E","R"], prevAnswers: [{"word":"GRANDFATHER","pct":4},{"word":"FATHER","pct":15},{"word":"GATHER","pct":22},{"word":"RATHER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0241", letters: ["S","U","M","I","E","H","P","E","D","O","A","P","E","E","T","R","H","T","F","O","G","S"], prevAnswers: [{"word":"PHOTOGRAPHED","pct":4},{"word":"GRAPE","pct":15},{"word":"GRATE","pct":30},{"word":"HUMID","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0242", letters: ["C","N","A","I","I","T","E","S","S","A","A","D","R","L","F","H","E","C","S","W","O","V"], prevAnswers: [{"word":"CREDENTIALS","pct":4},{"word":"ANTIC","pct":15},{"word":"DATE","pct":30},{"word":"DEAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0243", letters: ["O","M","Y","E","A","A","N","D","T","V","I","O","E","T","T","N","M","R","J","A","I","E"], prevAnswers: [{"word":"DETERMINATION","pct":4},{"word":"AIMED","pct":15},{"word":"ANIME","pct":30},{"word":"DEMON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0244", letters: ["L","B","W","I","E","M","O","T","O","A","F","R","D","T","I","C","P","T","C","A","L","B"], prevAnswers: [{"word":"PROBLEMATICAL","pct":4},{"word":"PROBLEM","pct":15},{"word":"PROFIT","pct":22},{"word":"AMBLE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0245", letters: ["M","S","R","H","G","Y","R","K","F","E","V","O","W","U","B","A","T","R","G","M","S","E"], prevAnswers: [{"word":"MASTERWORK","pct":4},{"word":"MASTER","pct":15},{"word":"STORY","pct":30},{"word":"STOVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0246", letters: ["U","H","G","T","R","E","K","N","F","B","A","I","T","P","T","R","A","V","C","K","E","H"], prevAnswers: [{"word":"HEARTBREAKING","pct":4},{"word":"BAKING","pct":15},{"word":"BAKER","pct":30},{"word":"BREAK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0247", letters: ["A","S","I","N","F","M","H","U","P","L","E","A","O","G","N","B","R","F","N","T","U","J"], prevAnswers: [{"word":"PUNISHMENT","pct":4},{"word":"SHELF","pct":15},{"word":"BEAR","pct":30},{"word":"FAME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0248", letters: ["E","K","F","T","S","I","Y","H","H","B","C","T","H","P","L","W","I","G","A","Y","R","R"], prevAnswers: [{"word":"PLAYWRIGHT","pct":4},{"word":"RIGHT","pct":15},{"word":"CLAP","pct":30},{"word":"CLAY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0249", letters: ["M","B","A","D","H","I","T","C","R","D","P","M","C","E","S","L","O","F","H","I","E","B"], prevAnswers: [{"word":"ACCOMPLISHED","pct":4},{"word":"ABIDE","pct":15},{"word":"ELSE","pct":30},{"word":"HIDE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0250", letters: ["I","H","T","P","N","N","G","N","N","I","O","R","D","A","T","U","W","D","B","S","S","I"], prevAnswers: [{"word":"SUSTAINING","pct":4},{"word":"GROIN","pct":15},{"word":"STAIN","pct":30},{"word":"STING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0251", letters: ["T","I","O","R","K","A","F","O","P","V","B","E","E","S","L","F","T","A","E","B","O","E"], prevAnswers: [{"word":"PROFITABLE","pct":4},{"word":"PROFIT","pct":15},{"word":"FABLE","pct":30},{"word":"PROOF","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0252", letters: ["U","J","B","H","C","A","E","U","B","R","S","R","O","A","A","C","Y","F","R","U","R","G"], prevAnswers: [{"word":"BUREAUCRACY","pct":4},{"word":"BUREAU","pct":15},{"word":"ACRES","pct":30},{"word":"YOURS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0253", letters: ["H","C","D","I","N","O","Y","T","L","A","O","T","A","K","U","A","I","N","W","N","V","O"], prevAnswers: [{"word":"NATIONALITY","pct":4},{"word":"NATIONAL","pct":9},{"word":"VITAL","pct":30},{"word":"VAIN","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0254", letters: ["L","E","N","E","A","L","N","T","M","I","N","H","E","T","N","A","N","C","H","T","V","N"], prevAnswers: [{"word":"ENHANCEMENT","pct":4},{"word":"ENHANCE","pct":15},{"word":"INANE","pct":30},{"word":"THEME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0255", letters: ["C","A","L","P","V","I","R","T","R","O","N","A","E","M","N","H","E","T","E","C","B","R"], prevAnswers: [{"word":"MECHANICAL","pct":4},{"word":"ALTAR","pct":15},{"word":"ALTER","pct":30},{"word":"CHEER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0256", letters: ["B","I","I","E","E","U","L","D","P","R","E","N","M","A","D","L","Y","T","T","E","B","O"], prevAnswers: [{"word":"DELIBERATELY","pct":4},{"word":"BURDEN","pct":15},{"word":"BLEND","pct":30},{"word":"BILE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0257", letters: ["E","N","I","L","T","R","H","N","A","O","F","G","O","H","O","S","O","A","S","R","M","M"], prevAnswers: [{"word":"SHORTENING","pct":4},{"word":"SHORE","pct":15},{"word":"SHORT","pct":30},{"word":"FOOT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0258", letters: ["N","T","D","H","T","F","G","C","O","S","U","N","O","N","S","L","C","C","O","I","I","A"], prevAnswers: [{"word":"CONCLUSIONS","pct":4},{"word":"GUST","pct":15},{"word":"LION","pct":30},{"word":"LUNG","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0259", letters: ["S","T","K","S","T","I","O","N","F","O","M","A","N","N","E","L","L","U","C","Y","U","S"], prevAnswers: [{"word":"EMOTIONALLY","pct":4},{"word":"EMOTIONAL","pct":9},{"word":"EMOTION","pct":22},{"word":"LEMON","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0260", letters: ["I","T","I","E","E","I","O","S","C","O","O","P","L","N","T","P","M","Y","A","A","G","U"], prevAnswers: [{"word":"OPPOSITION","pct":4},{"word":"POSITION","pct":9},{"word":"OPPOSE","pct":22},{"word":"APPLY","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0261", letters: ["S","C","M","Y","J","M","C","T","D","Y","E","O","R","O","E","L","N","O","S","C","I","E"], prevAnswers: [{"word":"ELECTRONICS","pct":4},{"word":"CLONE","pct":15},{"word":"ELECT","pct":30},{"word":"CORD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0262", letters: ["T","R","T","B","P","A","T","I","C","O","A","L","U","Y","R","E","Y","M","L","E","D","H"], prevAnswers: [{"word":"PARTICULARLY","pct":4},{"word":"PARTLY","pct":15},{"word":"ALTAR","pct":30},{"word":"ATTIC","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0263", letters: ["E","H","T","R","K","H","Q","E","A","A","U","O","O","R","T","O","E","E","R","R","M","R"], prevAnswers: [{"word":"EARTHQUAKE","pct":4},{"word":"EARTH","pct":15},{"word":"QUOTA","pct":30},{"word":"AUTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0264", letters: ["S","S","I","H","E","S","O","M","K","U","I","N","R","M","C","P","E","C","I","E","A","R"], prevAnswers: [{"word":"PERMISSION","pct":4},{"word":"MISSION","pct":15},{"word":"SESSION","pct":22},{"word":"ISSUE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0265", letters: ["V","E","R","L","T","O","W","A","O","P","A","D","Y","U","V","D","E","W","S","T","C","R"], prevAnswers: [{"word":"OVERLOADED","pct":4},{"word":"AWARE","pct":15},{"word":"CEDAR","pct":30},{"word":"LAYER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0266", letters: ["S","E","Q","T","U","B","U","E","R","S","L","N","T","O","J","A","L","V","D","T","Y","A"], prevAnswers: [{"word":"SUBSEQUENTLY","pct":4},{"word":"ALTER","pct":15},{"word":"BLUNT","pct":30},{"word":"SLANT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0267", letters: ["A","O","R","A","D","A","B","T","S","A","A","R","I","C","L","W","E","V","O","L","K","L"], prevAnswers: [{"word":"COLLABORATIVE","pct":4},{"word":"VERBAL","pct":15},{"word":"LABOR","pct":30},{"word":"LOCAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0268", letters: ["C","E","W","K","O","S","S","E","E","R","I","C","K","P","C","N","R","H","T","G","T","T"], prevAnswers: [{"word":"PROCESSING","pct":4},{"word":"PROCESS","pct":15},{"word":"CROSS","pct":30},{"word":"PRICE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0269", letters: ["T","A","T","H","I","O","N","E","M","N","R","C","U","N","Y","S","O","D","H","T","B","T"], prevAnswers: [{"word":"DOCUMENTATION","pct":4},{"word":"ROTATE","pct":15},{"word":"ATONE","pct":30},{"word":"CENT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0270", letters: ["J","E","E","H","A","Y","F","I","T","W","N","I","G","E","H","D","N","C","O","T","I","S"], prevAnswers: [{"word":"WAYFINDING","pct":4},{"word":"FINDING","pct":15},{"word":"DIGIT","pct":30},{"word":"FIND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0271", letters: ["G","A","T","S","H","N","S","F","E","E","I","E","R","R","O","V","A","T","Y","O","M","H"], prevAnswers: [{"word":"EARTHMOVING","pct":4},{"word":"EARTH","pct":15},{"word":"IVORY","pct":30},{"word":"VISTA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0272", letters: ["H","P","B","S","R","A","R","M","G","T","N","W","G","I","H","E","F","R","P","S","R","N"], prevAnswers: [{"word":"PARTNERSHIP","pct":4},{"word":"RATHER","pct":15},{"word":"WRATH","pct":30},{"word":"FERN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0273", letters: ["P","N","T","A","O","I","I","W","Y","P","H","N","G","P","G","D","T","T","A","S","I","D"], prevAnswers: [{"word":"DISAPPOINTING","pct":4},{"word":"POINT","pct":15},{"word":"TWIN","pct":30},{"word":"WIND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0274", letters: ["E","O","N","N","P","V","R","F","O","R","S","D","E","Y","E","D","E","T","V","I","R","C"], prevAnswers: [{"word":"REDIRECTED","pct":4},{"word":"DRIVE","pct":15},{"word":"DROVE","pct":30},{"word":"ORDER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0275", letters: ["D","O","N","R","F","A","G","G","N","I","A","M","I","K","W","A","A","S","D","R","T","I"], prevAnswers: [{"word":"DRAMATISING","pct":4},{"word":"AWARD","pct":15},{"word":"DOGMA","pct":30},{"word":"DRAW","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0276", letters: ["R","F","O","E","E","O","F","F","R","A","T","R","O","R","E","I","Y","V","N","G","Y","R"], prevAnswers: [{"word":"REFRIGERATOR","pct":4},{"word":"OFFER","pct":15},{"word":"REIGN","pct":30},{"word":"TIGER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0277", letters: ["F","E","U","E","I","N","L","Y","R","L","R","D","L","P","S","I","S","I","I","C","A","G"], prevAnswers: [{"word":"DISCIPLINE","pct":4},{"word":"ACIDS","pct":15},{"word":"FINE","pct":30},{"word":"IDLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0278", letters: ["U","B","S","C","S","N","I","R","P","S","O","T","I","O","R","S","P","N","Y","F","E","E"], prevAnswers: [{"word":"SUBSCRIPTIONS","pct":4},{"word":"SPIRIT","pct":15},{"word":"STRIPE","pct":22},{"word":"PRIOR","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0279", letters: ["T","N","A","Y","A","N","T","S","R","O","E","N","I","U","E","R","S","G","S","K","O","L"], prevAnswers: [{"word":"INSTANTANEOUS","pct":4},{"word":"INTENT","pct":15},{"word":"SISTER","pct":22},{"word":"INTER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0280", letters: ["L","B","R","V","L","B","E","A","T","I","W","N","I","W","T","M","G","R","E","O","N","E"], prevAnswers: [{"word":"LIBERATING","pct":4},{"word":"ANGER","pct":15},{"word":"BRAIN","pct":30},{"word":"RANGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0281", letters: ["N","L","K","M","D","E","C","U","E","D","R","E","A","E","A","T","O","E","F","N","O","C"], prevAnswers: [{"word":"CONFEDERATE","pct":4},{"word":"CEDAR","pct":15},{"word":"TRADE","pct":30},{"word":"TREND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0282", letters: ["P","S","I","N","A","E","C","Y","G","P","I","F","N","E","L","H","E","G","T","D","S","T"], prevAnswers: [{"word":"SPECIFYING","pct":4},{"word":"EPIC","pct":15},{"word":"FILE","pct":30},{"word":"NEST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0283", letters: ["T","U","J","D","I","S","A","F","B","F","Y","I","S","Y","I","N","G","A","E","P","M","E"], prevAnswers: [{"word":"JUSTIFYING","pct":4},{"word":"FAST","pct":15},{"word":"FIST","pct":30},{"word":"JUST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0284", letters: ["R","D","R","V","L","E","H","O","B","I","T","I","D","O","N","E","E","U","P","K","L","P"], prevAnswers: [{"word":"BORDERLINE","pct":4},{"word":"EDITION","pct":15},{"word":"BORDER","pct":22},{"word":"EITHER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0285", letters: ["A","R","B","D","D","E","A","L","S","I","F","E","U","S","N","N","A","T","O","C","A","S"], prevAnswers: [{"word":"CONSIDERABLE","pct":4},{"word":"DEFEAT","pct":15},{"word":"BREAD","pct":30},{"word":"DEALS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0286", letters: ["A","L","L","I","C","R","T","Y","E","I","V","A","E","I","E","I","T","H","U","I","O","T"], prevAnswers: [{"word":"THEATRICALLY","pct":4},{"word":"VICAR","pct":15},{"word":"VIRAL","pct":30},{"word":"CALL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0287", letters: ["V","U","R","E","P","O","L","W","E","D","D","N","D","S","E","C","E","E","H","N","E","P"], prevAnswers: [{"word":"DEPENDENCE","pct":4},{"word":"ENDED","pct":15},{"word":"HENCE","pct":30},{"word":"DEEP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0288", letters: ["W","O","R","O","N","I","F","M","H","U","I","T","I","C","S","Y","G","I","U","I","D","U"], prevAnswers: [{"word":"UNIFORMITY","pct":4},{"word":"FORM","pct":15},{"word":"SIFT","pct":30},{"word":"SUIT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0289", letters: ["E","N","O","I","L","R","U","N","O","I","L","H","D","E","A","E","A","R","L","B","L","E"], prevAnswers: [{"word":"UNRELIABLE","pct":4},{"word":"BEARD","pct":15},{"word":"UNION","pct":30},{"word":"ABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0290", letters: ["T","A","B","R","C","D","E","L","D","I","R","E","I","P","P","R","R","S","N","U","O","T"], prevAnswers: [{"word":"UNPREDICTABLE","pct":4},{"word":"BLEED","pct":15},{"word":"ERROR","pct":30},{"word":"PRIDE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0291", letters: ["I","M","L","I","S","T","U","A","I","R","Y","K","T","I","H","R","I","D","O","V","G","N"], prevAnswers: [{"word":"STIMULATING","pct":4},{"word":"GRIND","pct":15},{"word":"AKIN","pct":30},{"word":"GRID","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0292", letters: ["A","N","I","L","I","T","L","T","G","O","N","U","M","Y","A","A","L","I","F","I","O","A"], prevAnswers: [{"word":"MULTINATIONAL","pct":4},{"word":"NATIONAL","pct":9},{"word":"TONAL","pct":30},{"word":"AUNT","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0293", letters: ["O","T","Y","L","C","W","R","R","Y","O","S","G","R","M","P","M","T","A","L","E","E","N"], prevAnswers: [{"word":"COMPLEMENTARY","pct":4},{"word":"COMPEL","pct":15},{"word":"TEMPLE","pct":22},{"word":"ENTRY","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0294", letters: ["N","I","R","E","C","E","T","H","P","E","D","S","X","R","E","N","W","E","L","N","B","F"], prevAnswers: [{"word":"EXPERIENCED","pct":4},{"word":"EITHER","pct":15},{"word":"EXPERT","pct":22},{"word":"STEER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0295", letters: ["R","T","O","G","S","N","S","D","F","E","E","M","A","A","R","E","Z","Z","O","I","L","F"], prevAnswers: [{"word":"DAZZLEMENTS","pct":4},{"word":"DOSE","pct":15},{"word":"FAME","pct":30},{"word":"MAZE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0296", letters: ["A","E","I","F","W","E","R","W","C","A","T","F","R","E","I","C","A","L","I","D","S","L"], prevAnswers: [{"word":"WATERFALLS","pct":4},{"word":"ACIDS","pct":15},{"word":"AFTER","pct":30},{"word":"CRAFT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0297", letters: ["W","L","S","G","W","W","H","O","G","S","O","L","E","S","E","E","S","O","G","N","M","O"], prevAnswers: [{"word":"WHOLESOMENESS","pct":4},{"word":"WHOLE","pct":15},{"word":"WHOSE","pct":30},{"word":"ELSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0298", letters: ["H","C","B","P","S","U","N","I","A","B","A","T","L","D","S","T","Y","L","L","N","I","P"], prevAnswers: [{"word":"SUBSTANTIALLY","pct":4},{"word":"NASTY","pct":15},{"word":"PAINT","pct":30},{"word":"UNTIL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0299", letters: ["R","T","H","N","H","D","I","S","P","L","E","V","O","L","G","E","L","L","A","B","Y","E"], prevAnswers: [{"word":"VOLLEYBALL","pct":4},{"word":"DEVELOP","pct":15},{"word":"SOLELY","pct":22},{"word":"LEGAL","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0300", letters: ["E","D","B","T","N","I","D","P","S","G","I","H","H","B","E","N","G","M","E","R","I","N"], prevAnswers: [{"word":"ENGINEERING","pct":4},{"word":"BEGIN","pct":15},{"word":"BEING","pct":30},{"word":"REIGN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0301", letters: ["Y","Y","V","O","H","I","N","S","B","G","N","T","R","A","M","A","I","O","I","W","S","N"], prevAnswers: [{"word":"IMAGINATIONS","pct":4},{"word":"INTRO","pct":15},{"word":"STAIN","pct":30},{"word":"IRON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0302", letters: ["T","O","O","A","A","E","G","L","E","I","H","G","N","N","I","N","O","S","L","E","K","R"], prevAnswers: [{"word":"SNORKELING","pct":4},{"word":"GOAL","pct":15},{"word":"GONE","pct":30},{"word":"HEAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0303", letters: ["I","C","T","I","N","D","A","O","T","I","E","A","N","I","B","R","I","S","W","D","L","G"], prevAnswers: [{"word":"INDICATIONS","pct":4},{"word":"ACTION","pct":15},{"word":"BEARD","pct":30},{"word":"BRAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0304", letters: ["E","M","U","L","A","I","A","T","C","S","P","A","A","O","E","N","N","R","S","O","U","S"], prevAnswers: [{"word":"SIMULTANEOUS","pct":4},{"word":"EASE","pct":15},{"word":"NOSE","pct":30},{"word":"NOUN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0305", letters: ["P","S","T","E","H","J","E","Z","E","I","R","I","E","L","A","T","F","E","I","M","A","R"], prevAnswers: [{"word":"FAMILIARIZE","pct":4},{"word":"FAMILIAR","pct":9},{"word":"SEIZE","pct":30},{"word":"TRAIL","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0306", letters: ["T","X","S","C","E","E","I","N","N","N","S","O","G","D","A","I","D","N","I","T","E","S"], prevAnswers: [{"word":"EXTENSIONS","pct":4},{"word":"TENSION","pct":15},{"word":"ASIDE","pct":30},{"word":"DOING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0307", letters: ["O","P","C","H","L","N","T","C","A","R","E","A","R","H","S","I","T","N","O","B","N","I"], prevAnswers: [{"word":"CHARACTERS","pct":4},{"word":"RETAIN","pct":15},{"word":"RAISE","pct":30},{"word":"REACH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0308", letters: ["A","R","G","F","T","Y","E","T","A","E","T","N","I","D","M","W","S","W","S","C","O","E"], prevAnswers: [{"word":"INTEGRATED","pct":4},{"word":"RETAIN","pct":15},{"word":"AFTER","pct":30},{"word":"FAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0309", letters: ["T","A","E","J","S","R","K","R","N","O","E","U","S","U","D","T","W","E","N","E","I","H"], prevAnswers: [{"word":"UNDERTAKERS","pct":4},{"word":"AROUND","pct":15},{"word":"TENDER","pct":22},{"word":"REUSE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0310", letters: ["E","R","S","A","H","E","I","R","C","I","V","Y","F","N","N","N","L","G","I","A","S","A"], prevAnswers: [{"word":"ANNIVERSARY","pct":4},{"word":"RIVER","pct":15},{"word":"FLAG","pct":30},{"word":"HERE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0311", letters: ["U","U","F","O","G","C","W","E","W","I","A","A","C","F","I","E","I","S","T","N","E","Y"], prevAnswers: [{"word":"SCIENTIFIC","pct":4},{"word":"FINE","pct":15},{"word":"GIFT","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0312", letters: ["O","L","S","O","K","E","L","Y","D","C","O","R","M","N","H","D","T","V","A","C","W","T"], prevAnswers: [{"word":"CHANCELLOR","pct":4},{"word":"ANCHOR","pct":15},{"word":"CHANCE","pct":22},{"word":"CHORD","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0313", letters: ["Y","K","P","R","O","I","T","G","E","A","C","I","N","T","I","G","R","I","R","G","E","L"], prevAnswers: [{"word":"TRIGGERING","pct":4},{"word":"LINGER","pct":15},{"word":"TIGER","pct":30},{"word":"GIRL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0314", letters: ["A","A","E","F","V","E","A","R","B","D","R","H","B","R","B","L","D","E","O","A","N","C"], prevAnswers: [{"word":"BORDERLAND","pct":4},{"word":"BORDER","pct":15},{"word":"VERBAL","pct":22},{"word":"BLAND","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0315", letters: ["E","R","T","R","N","I","C","L","A","G","L","G","V","A","N","L","E","T","L","C","V","I"], prevAnswers: [{"word":"TRAVELLING","pct":4},{"word":"TRAVEL","pct":15},{"word":"CLANG","pct":30},{"word":"CLING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0316", letters: ["N","W","B","G","L","R","Y","L","Y","L","U","L","R","A","A","C","E","P","R","T","C","S"], prevAnswers: [{"word":"SPECTACULAR","pct":4},{"word":"RULER","pct":15},{"word":"TRACE","pct":30},{"word":"CALL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0317", letters: ["L","U","N","R","D","I","O","S","N","A","M","I","O","I","C","N","T","I","D","H","A","R"], prevAnswers: [{"word":"NOMINATIONS","pct":4},{"word":"LIMIT","pct":15},{"word":"RANCH","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0318", letters: ["N","C","J","H","A","S","E","N","E","S","S","I","M","N","A","I","R","O","N","E","R","A"], prevAnswers: [{"word":"RENAISSANCE","pct":4},{"word":"ARISE","pct":15},{"word":"SCENE","pct":30},{"word":"AREA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0319", letters: ["T","S","H","A","R","N","F","O","R","A","U","E","M","H","D","C","D","B","E","E","W","O"], prevAnswers: [{"word":"TRANSFORMED","pct":4},{"word":"AUNTS","pct":15},{"word":"CEDAR","pct":30},{"word":"TRADE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0320", letters: ["H","A","B","L","R","E","S","I","I","H","T","A","T","B","F","E","N","P","S","H","M","N"], prevAnswers: [{"word":"REHABILITATE","pct":4},{"word":"LISTEN","pct":15},{"word":"FEAST","pct":30},{"word":"HASTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0321", letters: ["S","T","O","R","V","I","M","R","I","A","T","A","R","I","T","S","E","R","O","N","A","T"], prevAnswers: [{"word":"MOTIVATIONS","pct":4},{"word":"ARMOR","pct":15},{"word":"ERROR","pct":30},{"word":"ONSET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0322", letters: ["S","K","R","T","Y","E","M","S","G","L","H","V","O","I","M","W","V","H","N","G","R","E"], prevAnswers: [{"word":"OVERWHELMING","pct":4},{"word":"HELM","pct":15},{"word":"OVER","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0323", letters: ["A","E","O","V","R","M","R","T","F","K","F","A","H","E","A","E","O","B","L","B","H","B"], prevAnswers: [{"word":"REMARKABLE","pct":4},{"word":"BLEAK","pct":15},{"word":"EARTH","pct":30},{"word":"FABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0324", letters: ["N","A","T","M","D","I","S","L","E","E","T","A","E","E","P","N","J","E","N","D","E","H"], prevAnswers: [{"word":"INDEPENDENT","pct":4},{"word":"AISLE","pct":15},{"word":"ASIDE","pct":30},{"word":"ATLAS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0325", letters: ["E","S","A","N","Y","Y","L","D","E","S","P","L","U","I","D","A","Y","G","E","O","I","N"], prevAnswers: [{"word":"DISPLAYING","pct":4},{"word":"ALLAY","pct":15},{"word":"DOING","pct":30},{"word":"PLAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0326", letters: ["O","O","R","A","R","T","A","D","Y","A","R","M","G","L","L","A","B","E","U","C","C","T"], prevAnswers: [{"word":"CALCULATOR","pct":4},{"word":"ALARM","pct":15},{"word":"LLAMA","pct":30},{"word":"RADAR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0327", letters: ["P","L","N","P","E","D","O","M","E","P","F","Y","N","V","A","E","S","T","T","A","D","S"], prevAnswers: [{"word":"DEPLOYMENTS","pct":4},{"word":"DEPLOY","pct":15},{"word":"DOME","pct":30},{"word":"FEAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0328", letters: ["M","S","A","F","M","S","S","T","E","E","I","K","O","B","H","A","I","R","A","L","A","C"], prevAnswers: [{"word":"HISTORICAL","pct":4},{"word":"ASSIST","pct":15},{"word":"FAST","pct":30},{"word":"FATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0329", letters: ["A","S","L","C","B","S","I","B","B","H","R","A","T","E","D","T","S","A","D","N","C","E"], prevAnswers: [{"word":"ESTABLISHED","pct":4},{"word":"BASIS","pct":15},{"word":"START","pct":30},{"word":"TRAIL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0330", letters: ["E","T","R","S","S","N","A","O","E","I","N","R","H","W","T","O","O","F","D","I","V","C"], prevAnswers: [{"word":"TRANSITION","pct":4},{"word":"AROSE","pct":15},{"word":"HORSE","pct":30},{"word":"INANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0331", letters: ["C","S","W","A","Y","C","I","T","G","N","O","I","A","F","A","A","G","R","E","X","G","E"], prevAnswers: [{"word":"EXAGGERATION","pct":4},{"word":"FANCY","pct":15},{"word":"RATIO","pct":30},{"word":"TIGER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0332", letters: ["R","T","L","L","A","T","S","U","I","E","S","I","T","B","R","D","C","D","V","T","U","S"], prevAnswers: [{"word":"ILLUSTRATES","pct":4},{"word":"SISTER","pct":15},{"word":"DRESS","pct":30},{"word":"START","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0333", letters: ["D","N","O","C","V","F","O","N","R","O","R","I","N","N","T","A","T","H","N","V","E","G"], prevAnswers: [{"word":"CONFRONTATION","pct":4},{"word":"ROTATE","pct":15},{"word":"FRONT","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0334", letters: ["H","K","R","R","L","L","Y","H","E","A","I","N","V","C","I","O","E","C","B","M","N","O"], prevAnswers: [{"word":"ECONOMICALLY","pct":4},{"word":"ECONOMIC","pct":9},{"word":"LINEN","pct":30},{"word":"CALL","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0335", letters: ["U","T","N","T","R","I","O","U","R","R","C","L","O","R","R","A","W","N","T","E","T","O"], prevAnswers: [{"word":"WATERCOLOR","pct":4},{"word":"CONTROL","pct":15},{"word":"CLOWN","pct":30},{"word":"COUNT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0336", letters: ["I","G","N","O","M","A","I","I","N","N","N","T","T","N","T","A","U","T","F","R","S","Y"], prevAnswers: [{"word":"IMAGINATION","pct":4},{"word":"RATIO","pct":15},{"word":"TITAN","pct":30},{"word":"MAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0337", letters: ["T","I","S","S","Y","I","L","S","S","B","I","E","H","P","K","S","D","T","O","S","N","E"], prevAnswers: [{"word":"POSSIBILITY","pct":4},{"word":"TENSE","pct":15},{"word":"BILE","pct":30},{"word":"DESK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0338", letters: ["T","A","I","D","E","E","N","E","R","O","E","L","O","A","E","S","B","G","H","D","U","A"], prevAnswers: [{"word":"SUBORDINATE","pct":4},{"word":"ABUSE","pct":15},{"word":"BLEED","pct":30},{"word":"SLEET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0339", letters: ["D","G","E","F","L","E","I","D","A","W","K","M","L","O","N","C","T","Y","A","T","A","N"], prevAnswers: [{"word":"ACKNOWLEDGED","pct":4},{"word":"KNOWLEDGE","pct":9},{"word":"LEDGE","pct":30},{"word":"WEDGE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0340", letters: ["T","T","H","E","S","A","G","N","N","S","T","E","I","R","S","R","G","N","I","H","S","R"], prevAnswers: [{"word":"STRENGTHENING","pct":4},{"word":"STRENGTH","pct":9},{"word":"INNER","pct":30},{"word":"REIGN","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0341", letters: ["A","D","S","T","O","B","C","A","E","R","S","A","R","N","V","F","C","D","S","R","S","E"], prevAnswers: [{"word":"BROADCASTER","pct":4},{"word":"SCARCE","pct":15},{"word":"SECRET","pct":22},{"word":"STARE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0342", letters: ["O","I","N","W","H","N","T","U","T","A","G","I","R","L","U","U","R","T","G","A","A","R"], prevAnswers: [{"word":"NUTRITIONAL","pct":4},{"word":"GULAG","pct":15},{"word":"UNION","pct":30},{"word":"HANG","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0343", letters: ["E","P","O","L","R","T","A","H","G","A","U","K","Y","I","T","S","S","A","O","N","J","T"], prevAnswers: [{"word":"OPERATIONS","pct":4},{"word":"OPERATION","pct":9},{"word":"RATIO","pct":30},{"word":"SKATE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0344", letters: ["L","E","O","T","V","T","H","G","O","A","H","P","R","E","H","U","H","A","I","L","I","P"], prevAnswers: [{"word":"PHOTOGRAPH","pct":4},{"word":"HARP","pct":15},{"word":"HATE","pct":30},{"word":"HEAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0345", letters: ["T","E","L","I","H","D","E","E","V","O","B","P","A","R","N","U","B","L","B","D","F","E"], prevAnswers: [{"word":"UNBELIEVABLE","pct":4},{"word":"ABLE","pct":15},{"word":"BALE","pct":30},{"word":"BOND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0346", letters: ["G","S","N","O","M","E","J","A","I","G","S","P","T","E","A","R","I","A","H","E","V","R"], prevAnswers: [{"word":"ASPIRATIONS","pct":4},{"word":"NATIVE","pct":15},{"word":"RATIO","pct":30},{"word":"RIVER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0347", letters: ["I","H","L","T","B","T","O","C","I","C","P","E","R","P","N","L","B","O","T","E","A","T"], prevAnswers: [{"word":"TABLECLOTH","pct":4},{"word":"TALENT","pct":15},{"word":"CLOTH","pct":30},{"word":"ELECT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0348", letters: ["A","J","T","A","O","U","O","R","B","N","D","H","O","T","N","O","U","H","N","I","S","E"], prevAnswers: [{"word":"ROUNDHOUSE","pct":4},{"word":"AROUND","pct":15},{"word":"HOUND","pct":30},{"word":"HOUSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0349", letters: ["V","T","G","V","T","E","M","T","D","D","E","T","E","I","S","A","C","I","G","N","S","E"], prevAnswers: [{"word":"DESIGNATED","pct":4},{"word":"DISEASE","pct":15},{"word":"DESIGN","pct":22},{"word":"ASIDE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0350", letters: ["E","U","L","C","L","N","F","I","A","A","I","I","T","P","W","O","N","I","S","A","N","R"], prevAnswers: [{"word":"UNIFICATION","pct":4},{"word":"FINAL","pct":15},{"word":"PANEL","pct":30},{"word":"UNION","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0351", letters: ["Y","T","N","E","S","R","E","N","H","E","L","G","T","W","V","G","P","O","A","R","I","S"], prevAnswers: [{"word":"WAVELENGTH","pct":4},{"word":"GRAVEL","pct":15},{"word":"ENTER","pct":30},{"word":"ENTRY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0352", letters: ["C","V","I","T","A","T","E","L","A","T","I","Y","L","T","V","G","R","E","G","T","A","E"], prevAnswers: [{"word":"RELATIVELY","pct":4},{"word":"AGREE","pct":15},{"word":"EARLY","pct":30},{"word":"GREAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0353", letters: ["E","W","A","A","H","D","D","H","T","N","R","T","R","U","O","H","O","N","N","B","N","U"], prevAnswers: [{"word":"NORTHBOUND","pct":4},{"word":"BOUND","pct":15},{"word":"HOUND","pct":30},{"word":"NORTH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0354", letters: ["A","F","E","C","L","I","S","T","O","H","R","E","V","L","L","O","C","O","E","N","T","R"], prevAnswers: [{"word":"CONTROVERSIAL","pct":4},{"word":"SECTOR","pct":15},{"word":"COVER","pct":30},{"word":"COVET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0355", letters: ["A","S","I","N","A","R","O","A","I","S","X","L","N","N","E","P","L","G","H","E","R","C"], prevAnswers: [{"word":"EXPLAINING","pct":4},{"word":"EXPLAIN","pct":15},{"word":"PLAIN","pct":30},{"word":"LOAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0356", letters: ["R","P","D","K","E","C","E","T","E","U","R","N","I","I","R","E","A","S","T","M","A","V"], prevAnswers: [{"word":"RECRUITMENT","pct":4},{"word":"CREAM","pct":15},{"word":"ENTER","pct":30},{"word":"INTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0357", letters: ["E","N","E","D","N","B","O","E","U","E","P","I","R","E","P","W","T","I","O","E","G","N"], prevAnswers: [{"word":"PIONEERING","pct":4},{"word":"TIRED","pct":15},{"word":"TRIED","pct":30},{"word":"BONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0358", letters: ["R","A","M","H","E","Y","R","T","E","M","E","E","U","T","U","R","Q","T","O","N","I","F"], prevAnswers: [{"word":"TOURNIQUET","pct":4},{"word":"FIRE","pct":15},{"word":"MEET","pct":30},{"word":"MERE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0359", letters: ["X","C","A","F","I","E","O","K","E","B","L","R","E","I","I","F","A","O","L","T","Y","T"], prevAnswers: [{"word":"FLEXIBILITY","pct":4},{"word":"BILE","pct":15},{"word":"CAKE","pct":30},{"word":"CORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0360", letters: ["I","O","D","E","T","W","E","I","N","I","I","B","D","O","T","L","E","S","N","A","R","R"], prevAnswers: [{"word":"LIBERATION","pct":4},{"word":"ALBEIT","pct":15},{"word":"ANTLER","pct":22},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0361", letters: ["R","D","U","I","O","A","R","O","I","B","A","P","D","K","C","A","E","E","B","L","N","S"], prevAnswers: [{"word":"BLACKBOARD","pct":4},{"word":"BLACK","pct":15},{"word":"BOARD","pct":30},{"word":"DRAPE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0362", letters: ["R","H","E","G","I","B","N","N","N","A","S","L","I","C","E","T","G","G","I","S","R","U"], prevAnswers: [{"word":"STRUGGLING","pct":4},{"word":"LINEN","pct":15},{"word":"BASE","pct":30},{"word":"CASE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0363", letters: ["O","V","O","B","A","I","E","E","D","N","S","A","S","O","A","N","I","T","I","T","T","L"], prevAnswers: [{"word":"DESTINATIONS","pct":4},{"word":"BEAST","pct":15},{"word":"NAIVE","pct":30},{"word":"SAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0364", letters: ["E","T","T","P","G","R","O","A","S","O","J","E","B","F","U","E","L","G","N","O","E","O"], prevAnswers: [{"word":"UNFORGETTABLE","pct":4},{"word":"FORGET","pct":15},{"word":"FORGE","pct":30},{"word":"TABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0365", letters: ["D","N","U","A","D","D","N","O","F","A","S","E","P","T","M","R","I","N","I","O","N","P"], prevAnswers: [{"word":"FOUNDATION","pct":4},{"word":"PERMIT","pct":15},{"word":"FOUND","pct":30},{"word":"POUND","pct":35},{"word":"4 or lower","pct":16}] }
];
// ─── PUZZLES END ───

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
const apiCache = new Map();
let isChecking = false;

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

// ─── Dictionary API fallback (en_US + en_GB) ─────────────────────────────────
async function checkDictionaryAPI(word) {
  const key = word.toLowerCase();
  if (apiCache.has(key)) return apiCache.get(key);
  for (const lang of ["en_US", "en_GB"]) {
    try {
      const resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/" + lang + "/" + key);
      if (resp.ok) { apiCache.set(key, true); return true; }
    } catch (_) {}
  }
  apiCache.set(key, false);
  return false;
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
  if (isChecking) return;
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

async function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;
  lastTileEntered = null;

  if (selectedPath.length === 0) return;

  // Local word list — instant
  const validWord = validateWord(selectedPath);
  if (validWord) {
    lockValidWord(validWord);
    return;
  }

  // API fallback for non-blank words (blank combos are too many to try via API)
  const hasBlanks = selectedPath.some(id => tiles[id].blank);
  if (!hasBlanks && selectedPath.length >= 3) {
    const word = selectedPath.map(id => tiles[id].letter.toLowerCase()).join("");
    isChecking = true;
    const answerEl = document.getElementById("answer-text");
    if (answerEl) answerEl.classList.add("checking");
    let found = false;
    try { found = await checkDictionaryAPI(word); } catch (_) {}
    isChecking = false;
    if (answerEl) answerEl.classList.remove("checking");
    if (found) { lockValidWord(word); return; }
  }

  flashInvalid();
}

function lockValidWord(word) {
  selectedPath.forEach(id => { tiles[id].state = "valid"; });
  renderAllTiles();
  const len = selectedPath.length;
  if (len > bestScore) {
    bestScore = len;
    bestWord = word;
    saveState();
  }
  updateScoreDisplay(word);
  updateAnswerArea();
  enableShare();
}

function flashInvalid() {
  selectedPath.forEach(id => { tiles[id].state = "invalid"; });
  renderAllTiles();
  setTimeout(function() {
    tiles.forEach(t => { t.state = "neutral"; t._resolvedLetter = ""; });
    selectedPath = [];
    renderAllTiles();
    updateAnswerArea();
    updateScoreDisplay(null);
  }, 700);
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
    // iOS Safari requires explicit touch listeners with passive:false to block scroll
    svg.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
    svg.addEventListener("touchmove", e => e.preventDefault(), { passive: false });
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
