// Shukuma Wordsearch Mini Game — single-file bundle (no ES modules)
// Compatible with file:// and any static server

(function () {
"use strict";

// ─── Word list ───────────────────────────────────────────────────────────────
const WORDS = new Set([
"ace","act","add","age","ago","aid","aim","air","ale","all","and","ant","ape","arc","are","ark","arm","art","ash","ask","ate","awe","axe","aye","bad","bag","ban","bar","bat","bay","bed","bet","bid","big","bit","bow","box","boy","bud","bug","bun","bus","but","buy","cab","can","cap","car","cat","cob","cod","cop","cow","cry","cub","cup","cut","dam","day","den","dew","did","dig","dim","dip","doe","dog","dot","dry","dub","dug","dye","ear","eat","egg","ego","elf","elk","elm","end","era","eve","ewe","eye","fad","fan","far","fat","fax","fee","few","fig","fit","fix","fly","foe","fog","for","fox","fry","fun","fur","gag","gap","gas","gel","gem","get","gig","gin","gnu","god","got","gun","gut","guy","gym","had","ham","has","hat","hay","her","hew","hid","him","hip","his","hit","hob","hog","hop","hot","how","hub","hue","hug","hum","hut","ice","ill","imp","ink","inn","ion","ire","ivy","jab","jam","jar","jaw","jet","jig","job","jog","jot","joy","jug","jut","keg","ken","key","kid","kin","kit","lab","lag","lap","law","lax","lay","lea","led","leg","let","lid","lip","lit","log","lot","low","mad","man","map","mar","mat","maw","may","men","met","mew","mid","mix","mob","mop","mud","mug","mum","nag","nap","net","new","nil","nip","nit","nob","nod","nor","not","now","nun","nut","oak","oar","oat","odd","ode","off","oil","old","one","opt","orb","ore","our","out","owe","owl","own","pad","pal","pan","pap","par","pat","paw","pay","pea","peg","pen","pep","per","pet","pew","pie","pig","pin","pit","ply","pod","pop","pot","pry","pub","pun","pup","pus","put","rag","ram","ran","rap","rat","raw","ray","red","ref","rep","rid","rig","rim","rip","rob","rod","roe","rot","row","rub","rug","rum","run","rut","rye","sad","sag","sap","sat","saw","say","sea","set","sew","shy","sin","sip","sir","sit","ski","sky","sly","sob","sod","son","sow","soy","spa","spy","sty","sub","sue","sum","sun","sup","tab","tan","tap","tar","tax","tea","ten","the","thy","tie","tin","tip","toe","ton","too","top","tow","toy","try","tub","tug","two","ugh","urn","use","van","vat","via","vie","vim","vow","wad","wag","war","was","wax","web","wed","wet","who","why","wig","win","wit","woe","wok","woo","wow","yak","yam","yap","yaw","yea","yet","yew","yob","you","zap","zen","zig","zip","zoo","able","ache","acid","acne","acre","acts","aged","aide","aims","ajar","akin","also","alto","amok","anew","apex","arch","area","arms","army","arts","ashy","atom","avid","away","awed","axes","axis","babe","back","bade","bail","bait","bake","bald","bale","ball","balm","band","bane","bang","bank","bare","bark","barn","bash","bass","bath","bawl","beam","bean","bear","beat","been","beef","beer","bell","belt","bend","best","bias","bile","bill","bind","bird","bite","bled","blew","blob","blog","blow","blue","blur","boar","boat","body","bold","bolt","bomb","bond","bone","book","boom","boot","bore","born","boss","both","bout","brag","bran","brat","bred","brew","brim","brow","buff","bulb","bull","bump","bunk","buoy","burn","burp","burr","bury","buzz","cage","cake","calf","call","calm","came","cane","card","care","cart","case","cash","cast","cave","cell","chef","chin","chip","chop","clad","clam","clap","claw","clay","clip","clod","clog","clop","clot","club","clue","coal","coat","coil","coin","cold","colt","comb","come","cone","cook","cool","cope","cord","core","corn","cosy","cozy","cram","crew","crop","crow","crud","cube","curl","curb","cure","curt","cyan","dais","dale","dare","dark","dart","dash","data","date","dawn","dead","deaf","deal","dean","dear","debt","deck","deep","deer","deft","deli","demo","deny","desk","dial","dice","died","diet","dike","dill","dime","dine","dire","dirt","disc","dish","disk","dive","dolt","dome","done","door","dope","dorm","dose","dote","dove","down","drab","drag","draw","drew","drip","drop","drum","dual","duke","dull","dumb","dump","dune","dunk","dusk","dust","each","earl","earn","ease","east","edge","emit","epic","ergo","even","ever","evil","ewer","exam","exec","face","fact","fail","fair","fake","fall","fame","fang","farm","fast","fate","fawn","faze","fear","feat","feed","feel","feet","fell","felt","fend","fern","file","film","find","fine","fire","firm","fish","fist","fizz","flag","flap","flat","flaw","fled","flew","flex","flip","flit","flop","flow","foam","fold","folk","fond","font","fool","ford","fore","fork","form","fort","foul","four","fowl","free","frog","from","fuel","full","fume","fund","fuss","fuzz","gain","gale","gall","game","gape","garb","gash","gave","gaze","gear","germ","gift","gild","gill","gist","glad","glow","glue","goad","goal","goat","goes","gold","golf","gone","gong","good","goon","gore","gosh","gown","grab","gram","gray","grew","grin","grip","grit","gulf","gull","gust","guts","hack","hail","hair","hale","hall","halt","hand","hang","hard","hare","harm","harp","hash","haul","have","haze","hazy","head","heal","heap","heat","heel","heir","held","helm","help","herb","herd","here","hero","hewn","hide","high","hike","hill","hilt","hind","hint","hoax","hold","hole","holy","home","hone","honk","hood","hook","hope","horn","hose","host","huge","hulk","hull","hung","hunk","hunt","hurl","husk","idle","idly","inch","iron","isle","jack","jade","jail","jape","jerk","jest","jibe","jilt","jive","jolt","josh","jowl","jump","junk","jury","just","keen","keep","kern","kick","kill","kilt","kind","king","knew","knob","knot","know","lack","laid","lake","lame","lamp","land","lane","lank","lard","lark","lash","last","late","laud","lava","lawn","lazy","lead","leaf","leak","lean","leap","lent","less","lick","life","lift","like","limb","lime","limp","line","link","lion","list","live","load","loaf","loan","lobe","lock","loft","lone","long","loon","loop","lore","lorn","loss","lout","love","lull","lump","lung","lure","lurk","lush","lust","luxe","made","maid","main","make","male","mall","mane","many","mare","mark","mart","mash","mask","mass","mast","mate","math","maze","mead","meal","mean","meat","melt","memo","mend","menu","mere","mesh","mice","mild","mile","mill","mime","mind","mine","mint","mire","miss","mist","moan","mode","mole","mold","mood","moon","moor","more","most","move","much","murk","muse","musk","must","myth","name","nape","nark","nave","near","neck","need","newt","next","nick","node","none","noon","norm","nose","note","noun","nude","numb","nuts","oath","oboe","once","only","open","oral","orca","oval","oven","over","owed","owns","pace","pack","page","paid","pail","pain","pair","pale","palm","pane","park","part","pass","past","path","pave","peak","peal","peat","peel","peer","pelt","perk","pest","pick","pier","pile","pill","pine","pink","pint","pipe","plan","play","plod","plot","plow","ploy","plug","plum","plus","poem","poet","poke","pole","poll","pond","pone","pony","pool","pore","pork","port","pose","post","pour","pout","pray","prep","prey","prim","prod","prop","pull","pulp","pump","pure","push","race","rack","rage","raid","rail","rain","rake","ramp","rang","rank","rasp","rate","rave","read","real","reap","rear","reed","reef","reel","rein","rely","rend","rent","rest","rice","rich","ride","rife","rile","ring","riot","rise","risk","roam","roar","robe","rock","role","roll","roof","rook","room","root","rope","rose","rout","rove","rude","rune","rush","rust","safe","sage","sake","sale","salt","same","sand","sane","sang","sank","sash","save","seam","seed","seem","seen","self","sell","send","sent","shed","shin","ship","shoe","shot","show","shut","sick","side","sigh","silk","sill","silo","sing","sink","site","size","skid","skip","slab","slap","slew","slid","slim","slip","slob","slot","slow","slum","slur","snap","snip","snob","snow","soak","soar","sock","soft","soil","sole","some","song","soot","sore","sort","soul","soup","sour","spin","spit","spot","spur","stab","stag","star","stem","step","stew","stir","stop","stub","stud","stun","such","sulk","sung","sunk","sure","surf","swap","swat","sway","swim","tack","tail","tale","tall","tame","tang","tank","taut","teem","tell","tend","tent","term","test","than","that","them","then","they","thin","this","thou","tide","tidy","till","tilt","time","tiny","tire","toad","told","toll","tomb","tone","took","torn","toss","tote","tour","town","trap","tray","tree","trek","trim","trio","trip","true","tuck","tuft","tune","turf","tusk","twin","type","ugly","undo","upon","urge","used","vale","vane","vary","veal","veer","veil","vein","verb","vibe","vice","view","vile","vine","void","vole","volt","vote","wade","wage","wake","walk","wall","wane","want","ward","warm","warn","warp","wart","wash","watt","wavy","weak","weal","wean","weed","week","well","welt","wend","went","were","west","wide","wife","wild","wile","will","wilt","wink","wire","wise","wish","with","woke","wold","wolf","wood","woof","wool","word","wore","work","worm","worn","wort","wove","wrap","wren","writ","yard","yarn","yawn","year","yell","yelp","your","yowl","yule","zeal","zero","zinc","zone","abbot","abhor","abide","abyss","ached","acorn","actor","acute","adopt","adult","after","agile","aglow","agony","agree","ahead","aisle","alarm","album","alder","aloft","alone","along","aloof","aloud","amaze","amble","amend","amiss","among","ample","angry","angst","annex","anvil","aorta","apple","apply","apron","ardor","argue","arise","array","ashen","aside","asset","atone","attic","audit","avail","avoid","awake","aware","awful","baker","banjo","basic","basis","batch","beach","began","begun","being","below","bench","birth","bison","black","blade","blame","bland","blank","blaze","bleak","bleed","bless","blind","bliss","block","blood","bloom","board","boast","booze","bound","boxer","brace","brake","brand","brave","brawn","bread","break","bride","brief","brink","brisk","broil","broke","brook","broom","broth","brown","brunt","brush","brute","buddy","build","built","bunch","bugle","burst","buyer","cabin","camel","canal","candy","cargo","carry","catch","cause","cedar","chain","chalk","charm","chase","cheap","cheer","chess","chest","chief","child","chord","civic","civil","claim","clash","class","clean","clear","clerk","click","cliff","climb","cling","clock","close","cloth","cloud","clown","coach","colon","color","comet","comic","count","court","cover","crack","craft","cramp","crane","crash","creak","creed","creep","crest","crime","crisp","cross","crowd","crown","crude","cruel","crush","crust","cycle","daily","dance","decay","defer","delay","depth","deter","devil","dirty","dizzy","dodge","doubt","dozen","draft","drain","drape","drawn","dream","drift","drill","drive","drove","drunk","dryer","duchy","dummy","dusky","dwarf","dwell","dying","eager","eagle","early","earth","elect","empty","enemy","enjoy","enter","equal","error","essay","evade","event","every","exact","exist","extra","fable","fairy","faith","false","fancy","fatal","favor","feast","fence","fetch","fever","fiber","field","fiend","fight","final","first","fixed","fizzy","flake","flame","flank","flare","flash","flask","flock","flood","floor","flown","flute","foggy","force","forge","forth","found","frame","frank","fraud","freak","fresh","front","froth","froze","fruit","fully","funny","gaudy","gauge","giant","given","gland","glare","glass","gleam","glean","glide","glint","gloat","gloom","gloss","glove","going","grace","grade","grain","grand","grant","grape","grasp","grave","graze","greed","greet","grind","groan","groin","gross","group","grove","growl","grown","guile","guilt","guise","gusto","gutsy","happy","hardy","harsh","haven","havoc","hazel","heard","heart","heavy","hedge","heist","hitch","hoist","horde","horse","hotel","hound","house","hover","human","humid","humor","hurry","ideal","image","inane","incur","index","indie","inept","infer","inner","input","inter","intro","irate","issue","jaded","jaunt","jerky","joker","judge","juice","juicy","jumpy","keeps","kneel","knife","knock","known","laden","laser","latch","later","leafy","leaky","learn","lease","least","ledge","legal","lemon","level","light","lilac","linen","liner","liver","lives","local","lodge","logic","lousy","lover","lower","lowly","loyal","lucky","lumpy","lusty","magic","major","maker","manor","maple","march","marry","match","mayor","melee","melon","mercy","merit","merry","metal","micro","might","minor","minus","mirth","miser","mixer","modal","model","money","month","moral","morph","motel","motif","motor","motto","mourn","mouse","mousy","mouth","muddy","muggy","murky","mural","musty","naive","nifty","night","noble","noisy","north","noted","novel","nudge","nurse","occur","olive","onset","opera","order","ought","ounce","outer","oxide","panic","party","paste","patch","pause","peace","pearl","penny","perch","petty","phase","phone","piano","piece","pilot","pitch","pixel","pizza","place","plain","plane","plank","plant","plate","plaza","pluck","plumb","plume","point","polar","polka","power","price","pride","prime","prior","prize","probe","prone","proof","prose","proxy","prune","pulse","punch","pupil","puppy","purge","queen","quest","quote","rainy","raise","rally","ranch","range","rapid","ratio","reach","ready","realm","rebel","refer","reign","relax","repay","reply","rerun","reuse","rider","ridge","rifle","right","risky","rival","river","rivet","robot","rocky","rouge","rough","round","route","rover","royal","ruler","runny","rural","sadly","saint","salad","sauce","savvy","scale","scary","scene","scone","scope","score","scorn","scout","scowl","sense","serve","setup","seven","sever","shall","shame","shape","share","shark","sharp","sheen","sheer","shelf","shell","shift","shine","shirt","shock","short","shout","shove","sight","silly","since","sixth","sixty","skate","skill","skull","slain","slake","slate","slave","sleek","sleep","sleet","slice","slide","sling","slink","slope","sloth","small","smart","smell","smile","smite","smoke","snare","sneak","sneer","snide","sniff","snore","solar","solid","solve","sorry","south","space","spade","spare","spark","spawn","speak","speed","spend","spice","spicy","spill","spine","spite","spoke","spook","spoon","spout","spray","staff","stage","stain","stale","stall","stamp","stare","stark","start","state","steak","steal","steam","steel","steep","steer","stern","stick","stiff","still","sting","stink","stock","stoke","stone","stood","store","storm","story","stout","strap","straw","stray","strip","strum","stuck","study","stuff","style","sugar","suite","sulky","sunny","super","surge","swear","sweat","sweep","sweet","swept","swift","swine","swipe","swirl","swoop","syrup","table","taken","taste","tasty","tatty","tawny","teach","tease","teddy","tepid","thank","theme","there","these","thick","thing","think","third","thorn","those","three","threw","throw","thump","tiger","tight","timer","tired","title","today","token","touch","tough","tower","toxic","trace","track","trade","trail","train","trait","trawl","tread","treat","trend","trick","tried","trite","troll","troop","truck","truly","trump","tuner","twang","tweak","tweed","twist","tying","ulcer","ultra","under","unfit","unite","until","upper","upset","urban","usher","utter","vague","valid","value","valve","vapor","vault","venom","verge","verse","vigil","viral","virus","visit","visor","vista","vital","vivid","vocal","vogue","voice","vouch","wager","watch","water","weary","weave","wedge","weedy","weigh","weird","whale","wheat","wheel","where","which","while","whirl","whisk","white","whole","whose","widen","widow","wield","witty","woman","women","world","worry","worse","worst","worth","would","wound","wring","wrist","wrote","wrung","yacht","yield","young","yours","youth","absent","accuse","across","action","actual","advice","affect","afford","afraid","agency","animal","annual","appeal","appear","arrest","artery","assert","assets","assist","assure","attain","attend","awaken","beacon","belief","belong","beware","bishop","blazed","blazer","broken","burden","cancel","cannon","carbon","career","castle","cattle","census","change","charge","church","circle","cities","clause","clever","client","closed","coffee","column","combat","common","comply","cotton","couple","cousin","credit","crisis","critic","custom","danger","dealer","debate","decide","defeat","defend","depend","design","detail","detect","divide","dollar","driven","effect","elapse","empire","enable","engage","ensure","escape","estate","evolve","exceed","except","excite","exempt","expand","expect","expert","expose","extend","factor","fallen","famous","father","filter","finger","finish","fiscal","flight","flower","follow","formal","former","frozen","future","garden","gather","genius","gentle","global","golden","govern","growth","guided","guitar","happen","hatred","heaven","hidden","higher","honest","impact","impose","income","inform","inject","injury","inside","insist","insure","intend","intent","invest","island","itself","jungle","killed","launch","lawyer","leader","league","lesson","letter","listen","little","living","losing","manner","market","master","matter","middle","mirror","modern","moment","mother","motion","murder","muscle","mutual","nation","native","nature","nearly","needle","normal","notice","obtain","offend","office","oldest","onward","opener","option","output","oxygen","parent","partly","patent","patrol","palace","papers","people","permit","person","phrase","player","plural","pocket","poison","police","policy","postal","praise","prison","profit","proper","proven","pursue","racial","raised","raises","rather","reason","recipe","reform","remain","remind","remove","render","repair","repeat","resign","resort","result","retail","return","reveal","reward","ruling","safety","sample","school","second","secret","sector","series","served","simple","single","sister","slowly","social","sought","source","spirit","spoken","spread","stable","static","steady","stolen","stored","stream","street","strict","strike","strong","struck","stupid","submit","suffer","summit","supply","symbol","system","talent","target","theory","though","threat","ticket","toward","travel","treaty","tribal","triple","trying","tunnel","unique","unless","unveil","update","useful","valley","varied","victim","virtue","vision","visual","volume","wallet","weapon","weekly","weight","whilst","wicked","widely","winter","within","wonder","wooden","worker","yearly","ability","absence","account","accused","achieve","acquire","actions","address","adjourn","advance","adverse","against","analogy","another","approve","arrange","attempt","attract","average","balance","beneath","besides","between","billion","captain","capture","certain","channel","chapter","citizen","command","comment","company","compare","compete","concept","concern","conduct","confirm","connect","consent","contact","contain","context","control","convert","correct","council","country","courage","covered","current","damaged","decided","decline","defence","default","deficit","deliver","despite","digital","dispute","distant","divided","drawing","dynamic","ecology","economy","elected","element","emotion","endless","enhance","episode","exactly","execute","exhibit","exposed","extreme","fashion","federal","feeling","fiction","finally","finance","finding","foreign","forward","founded","freedom","further","general","getting","greater","growing","healthy","hearing","history","hundred","husband","imagine","improve","include","initial","inquiry","insight","install","instead","intense","journey","justice","keeping","kitchen","landing","learned","leaving","lengthy","limited","logical","machine","married","medical","mention","message","million","minimum","missing","mistake","monster","nothing","nuclear","obvious","offense","offered","opening","operate","opinion","organic","outside","patient","pattern","perhaps","popular","portion","poverty","prevent","primary","private","problem","process","produce","profile","promise","protect","provide","publish","purpose","qualify","quality","quickly","quietly","radical","reading","reality","realize","receive","recover","reflect","release","replace","require","resolve","respect","restore","revenue","society","soldier","somehow","someone","special","station","student","subject","success","support","surface","several","service","sustain","teacher","through","towards","traffic","trusted","typical","usually","village","violent","virtual","wealthy","welcome","western","whether","working","writing","younger","absolute","accepted","accurate","actively","addition","adequate","advanced","affected","aircraft","although","analysis","annually","approved","argument","assembly","attached","attitude","audience","backward","balanced","becoming","believed","breaking","bringing","building","business","campaign","capacity","changing","chemical","children","choosing","climbing","combined","commerce","comments","compared","complete","compound","computer","concepts","concerns","conflict","consider","constant","consumer","contains","continue","contract","controls","covering","cultural","currency","decision","declared","decrease","delivers","designed","detailed","develops","directly","disabled","disaster","discover","disposal","distance","distinct","district","division","domestic","economic","educated","election","employed","engineer","enormous","entirely","entrance","equation","estimate","evaluate","evidence","examples","exercise","expected","extended","familiar","features","feedback","finished","flexible","followed","forecast","function","generate","governor","guidance","handling","happened","hundreds","identify","includes","industry","infected","informal","inspired","interest","involved","isolated","judgment","launched","literacy","location","maintain","majority","marriage","material","medicine","millions","moderate","modified","movement","national","negative","observed","obtained","occurred","operated","ordinary","organize","original","overcome","packages","parallel","partners","payments","peaceful","physical","platform","policies","position","positive","possibly","practice","prepared","presence","pressing","previous","products","programs","progress","property","proposed","provides","purchase","received","recently","remained","repeated","replaced","requires","research","resource","response","resulted","security","selected","sentence","services","shipping","slightly","software","solution","specific","standard","struggle","students","studying","supposed","teaching","tendency","terminal","textbook","thousand","together","training","transfer","traveled","troubles","ultimate","uncommon","valuable","violence","whatever","wherever","wildlife","withdraw","workshop","yourself","abandoned","abilities","according","addressed","advancing","advantage","aftermath","agreement","alongside","ambiguous","amendment","announced","anonymous","apparatus","appointed","arbitrary","architect","arguments","assembled","assertion","athletics","attempted","attention","authentic","automatic","available","awareness","beautiful","beginning","believing","belonging","benefited","broadcast","brilliant","carefully","certainty","challenge","character","chemicals","chemistry","childhood","classroom","community","competing","computers","confident","connected","contained","continued","converted","corporate","corrected","countries","criticism","currently","databases","decisions","declaring","dedicated","delivered","democracy","departure","described","deserving","developed","different","dimension","direction","discussed","displayed","education","elaborate","emergency","employees","encounter","enjoyable","essential","estimated","exception","excessive","existence","explained","extremely","financial","generated","geography","governing","graduated","guideline","happening","household","important","inclusion","indicated","influence","inherited","intensity","investors","isolation","knowledge","languages","locations","machinery","magnitude","marketing","materials","mechanism","mentioned","migration","milestone","necessary","objective","operating","organized","otherwise","performed","permanent","political","precisely","preferred","preparing","presented","prevented","principle","processes","producing","promoting","realistic","receiving","recording","reflected","regulated","relations","remaining","responded","resulting","returning","revealing","satisfied","secondary","sensitive","seriously","situation","sometimes","spiritual","statement","structure","succeeded","suggested","supported","surprised","surviving","sustained","technical","temporary","territory","thousands","treatment","typically","uncertain","universal","withdrawn","worldwide","excellent","expansion","following","formation","framework","absolutely","acceptance","accessible","accomplish","accounting","accurately","adjustment","administer","affordable","aggressive","ambassador","applicable","atmosphere","attraction","background","calculation","challenges","collective","commitment","communicate","comparative","competitive","complement","complicated","components","considered","consistent","constructed","continuous","convenience","corporations","credentials","declaration","democratic","demonstrate","depression","effectively","environment","established","evaluation","examination","excellence","exceptional","exhibiting","experienced","explanation","flexibility","foundations","frustration","geographical","immediately","implications","independent","information","integration","involvement","limitations","maintenance","measurement","negotiation","observation","orientation","outstanding","performance","possibility","practically","preparation","presentation","principles","processing","productivity","professional","qualification","realization","recognition","regulations","reinforcing","relationships","reliability","replacement","representation","requirements","restriction","satisfaction","significant","sophisticated","specialized","spectacular","standardize","stimulation","substantial","sufficiently","transparent","understands","utilization","vulnerability","accomplishment","administration","appropriately","approximately","communication","comprehensive","consideration","corresponding","determination","distinguished","effectiveness","establishment","extraordinary","identification","implementation","independently","opportunities","responsibilities","transformation","understanding","unfortunately","contributions","authorization","characteristics","circumstances","classification","collaboration","compatibility","compensation","concentration","configuration","construction","contemporary","contributions","conversation","coordination","demonstration","disadvantage","documentation","encouragement","enlightenment","expectations","experimental","generalization","globalization","identification","imagination","independence","inheritance","innovation","instruction","intersection","introduction","investigation","justification","manufacturing","measurements","methodology","neighborhood","organization","participation","possibilities","preservation","presentation","proclamation","professionalism","qualification","recommendation","rehabilitation","reinforcement","relationships","representation","revolutionize","sophistication","specification","standardization","susceptibility","transformation","visualization","whole","wholes","wholesale","wholehearted","wholeheartedness","heart","hearts","heartedly","hearted","heartless","heartfelt","heartburn","heartland","heartwood","heartache","heartbeat","heartbreak","heartstring","other","mother","another","brother","smother","horse","horses","horsed","shoe","shoes","shone","shore","lone","loner","stone","stoner","toner","bone","boner","tone","tones","hone","honer","mole","moles","hole","holes","helm","helms","held","helps","hemp","muon","milk","mild","mile","mole","moles","miler","miles","mills","geld","gender","gentle","pawn","spawn","prawn","drawn","dawn","notch","notched","notches","whet","whether","whets","shorn","sworn","scorn","scorned","corner","corners","cornered","hovel","hover","novel","shovel","endorse","endorsement","endorsements","stroke","strokes","stroked","throne","throw","threw","three","throb","throbs","roost","roots","rooted","hooters","hooted","shore","shores","stored","stores","moles","holes","poles","roles","soles","toles","echochamber","worldclass","trackrecord","heartfeltly","welcomings","globalisation","globalizing","globalisation","normalisation","normalising","nationalizing","nationalising","industrialise","industrialising","democratising","democratizing","categorising","rationalizing","rationalising","hospitalising","hospitalizing","personalizing","summarizing","summarising","scandalising","popularising","capitalising","recognising","recognisable","legitimations","harmonisation","internalizing","familiarizing","systematizing","brainstorming","obiter","palmerston","vanquished","roughhoused","sleepyhead","woodpecker","tablecloth","blockchain","southbound","northbound","earthbound","schoolwork","brickworks","watercolor","checkpoint","tournament","rhinestone","volleyball","blacksmith","photography","choreography","precaution","quarterback","storyboards","troposphere","springboard","springtime","playfulness","naturalness","carefulness","gratefulness","worthiness","thankfulness","cheerfulness","selflessness","uniqueness","undercover","typewriting","overloaded","overcoming","pioneering","documenting","boardroom","crystalised","crystallised","encyclopaedia","encyclopedia","complementary","unprecedented","unresponsive","unforgettable","unforgotten","unofficially","unquestioned","reestablished","misunderstand"
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
  { id: "p0001", letters: ["R","A","C","W","E","P","","S","E","S","O","E","I","I","S","N","L","T","I","B","I","I"], prevAnswers: [{"word":"RESPONSIBILITIES","pct":1},{"word":"POSSIBILITIES","pct":22},{"word":"OPERATE","pct":28},{"word":"PRAISE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0002", letters: ["H","O","C","F","P","W","L","K","A","A","H","E","E","R","E","D","N","S","T","E","S","S"], prevAnswers: [{"word":"WHOLEHEARTEDNESS","pct":1},{"word":"WHOLEHEARTED","pct":22},{"word":"WHOLE","pct":28},{"word":"HOLE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0003", letters: ["T","I","C","S","I","S","H","","M","R","C","A","G","E","B","A","R","E","T","C","I","R"], prevAnswers: [{"word":"CHARACTERISTICS","pct":1},{"word":"CHARACTER","pct":22},{"word":"CHANGE","pct":28},{"word":"CRITIC","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0004", letters: ["C","S","I","L","F","B","I","R","A","G","N","T","I","T","N","I","S","D","G","N","D","U"], prevAnswers: [{"word":"INDUSTRIALISING","pct":1},{"word":"INITIAL","pct":22},{"word":"SING","pct":28},{"word":"SING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0005", letters: ["U","S","N","A","Y","E","S","O","L","K","F","I","I","O","","O","R","S","M","T","P","M"], prevAnswers: [{"word":"PROFESSIONALISM","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"PROFIT","pct":28},{"word":"NOSE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0006", letters: ["O","N","T","S","I","T","M","A","G","I","A","N","B","D","Z","D","T","I","R","A","R","H"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"STAG","pct":28},{"word":"STAG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0007", letters: ["M","H","C","C","E","S","","O","A","N","I","M","K","T","A","L","P","N","L","P","U","G"], prevAnswers: [{"word":"ACCOMPLISHMENT","pct":1},{"word":"ACCOMPLISH","pct":22},{"word":"COUSIN","pct":28},{"word":"CHASE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0008", letters: ["G","R","N","B","T","T","A","O","I","R","S","T","I","A","E","I","N","C","D","M","I","F"], prevAnswers: [{"word":"ADMINISTRATION","pct":1},{"word":"STATION","pct":22},{"word":"CITIES","pct":28},{"word":"BOAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0009", letters: ["Y","I","C","V","A","F","T","A","N","S","I","I","C","S","A","O","","U","C","L","N","G"], prevAnswers: [{"word":"CLASSIFICATION","pct":1},{"word":"FICTION","pct":22},{"word":"ACTION","pct":28},{"word":"TAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0010", letters: ["E","G","P","K","E","N","A","O","N","R","L","I","N","G","A","I","T","D","M","Y","Z","A"], prevAnswers: [{"word":"GENERALIZATION","pct":1},{"word":"GENERAL","pct":22},{"word":"AGREE","pct":28},{"word":"GAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0011", letters: ["T","I","F","B","E","N","I","I","C","","E","D","A","D","N","O","T","S","L","W","I","P"], prevAnswers: [{"word":"IDENTIFICATION","pct":1},{"word":"INTEND","pct":22},{"word":"INTER","pct":28},{"word":"FIELD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0012", letters: ["L","E","V","T","I","P","M","E","N","M","M","I","T","H","N","C","T","A","F","O","I","B"], prevAnswers: [{"word":"IMPLEMENTATION","pct":1},{"word":"EVENT","pct":22},{"word":"LIMP","pct":28},{"word":"LIMP","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0013", letters: ["E","O","R","M","L","","A","O","N","N","D","T","I","P","E","M","R","E","K","M","O","C"], prevAnswers: [{"word":"RECOMMENDATION","pct":1},{"word":"COMMENT","pct":22},{"word":"NATION","pct":28},{"word":"ORAL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0014", letters: ["T","T","A","I","R","I","I","T","S","L","O","N","U","F","I","B","H","E","P","E","A","R"], prevAnswers: [{"word":"REHABILITATION","pct":1},{"word":"STATION","pct":22},{"word":"TRIO","pct":28},{"word":"TRIO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0015", letters: ["T","I","R","D","R","E","","F","B","P","R","E","S","N","T","A","E","E","O","I","T","N"], prevAnswers: [{"word":"REPRESENTATION","pct":1},{"word":"PRESENTATION","pct":22},{"word":"PERMIT","pct":28},{"word":"TARGET","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0016", letters: ["O","S","P","D","M","O","G","V","A","S","P","H","I","C","I","T","S","N","A","T","I","O"], prevAnswers: [{"word":"SOPHISTICATION","pct":1},{"word":"POSITION","pct":22},{"word":"VISION","pct":28},{"word":"DAIS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0017", letters: ["L","","I","B","A","Y","L","P","I","T","I","E","T","H","S","S","C","M","G","U","E","S"], prevAnswers: [{"word":"SUSCEPTIBILITY","pct":1},{"word":"BLISS","pct":22},{"word":"ELECT","pct":28},{"word":"BILE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0018", letters: ["N","N","O","I","M","H","C","G","T","B","S","T","A","A","N","F","R","M","R","T","O","I"], prevAnswers: [{"word":"TRANSFORMATION","pct":1},{"word":"FORMATION","pct":22},{"word":"RATIO","pct":28},{"word":"BARN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0019", letters: ["E","T","A","P","L","A","","R","P","Y","I","O","P","H","U","R","P","F","V","T","I","Y"], prevAnswers: [{"word":"APPROPRIATELY","pct":1},{"word":"PRIVATE","pct":22},{"word":"POSTAL","pct":28},{"word":"APRON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0020", letters: ["M","N","P","P","D","W","B","A","R","Y","E","O","O","L","E","T","A","X","L","P","M","I"], prevAnswers: [{"word":"APPROXIMATELY","pct":1},{"word":"AMPLE","pct":22},{"word":"BOAT","pct":28},{"word":"BOAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0021", letters: ["R","O","H","T","S","","R","F","U","P","I","N","A","K","Z","I","O","O","A","T","H","E"], prevAnswers: [{"word":"AUTHORIZATION","pct":1},{"word":"THROBS","pct":22},{"word":"THORN","pct":28},{"word":"ROAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0022", letters: ["S","B","D","U","T","N","Y","K","O","O","I","A","R","R","M","I","S","B","G","N","G","H"], prevAnswers: [{"word":"BRAINSTORMING","pct":1},{"word":"STORM","pct":22},{"word":"MINOR","pct":28},{"word":"NORM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0023", letters: ["C","O","L","G","R","I","M","","E","C","U","S","I","E","S","A","T","R","C","N","M","D"], prevAnswers: [{"word":"CIRCUMSTANCES","pct":1},{"word":"DISTANCE","pct":22},{"word":"STRIKE","pct":28},{"word":"COMIC","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0024", letters: ["L","L","S","U","O","C","A","F","P","A","B","T","I","T","R","O","L","E","I","O","N","D"], prevAnswers: [{"word":"COLLABORATION","pct":1},{"word":"LOCATION","pct":22},{"word":"LOCAL","pct":28},{"word":"SLAB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0025", letters: ["N","U","M","H","I","","M","G","B","C","C","O","T","A","T","I","U","S","I","O","N","D"], prevAnswers: [{"word":"COMMUNICATION","pct":1},{"word":"FICTION","pct":22},{"word":"NOTICE","pct":28},{"word":"NUMB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0026", letters: ["Y","I","L","I","H","T","M","B","U","G","O","P","I","T","I","C","A","T","M","B","S","D"], prevAnswers: [{"word":"COMPATIBILITY","pct":1},{"word":"TIGHT","pct":22},{"word":"LIMB","pct":28},{"word":"LIMB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0027", letters: ["U","G","K","Y","A","","E","A","R","E","M","N","T","M","L","P","M","I","D","F","C","O"], prevAnswers: [{"word":"COMPLEMENTARY","pct":1},{"word":"COMPLEMENT","pct":22},{"word":"GLEAN","pct":28},{"word":"URGE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0028", letters: ["M","G","K","E","O","D","A","N","Y","D","I","S","C","U","E","A","Y","C","F","P","O","L"], prevAnswers: [{"word":"ENCYCLOPAEDIA","pct":1},{"word":"ENCYCLOPEDIA","pct":22},{"word":"MODE","pct":28},{"word":"MODE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0029", letters: ["F","B","O","S","C","","V","D","C","S","I","E","O","N","E","H","M","P","W","Y","E","R"], prevAnswers: [{"word":"COMPREHENSIVE","pct":1},{"word":"DEVIL","pct":22},{"word":"CAVE","pct":28},{"word":"CAVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0030", letters: ["F","P","O","N","K","A","E","I","T","N","C","N","A","C","O","N","T","R","S","L","W","Y"], prevAnswers: [{"word":"CONCENTRATION","pct":1},{"word":"CONTAIN","pct":22},{"word":"POINT","pct":28},{"word":"FACE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0031", letters: ["P","K","O","N","R","","S","T","O","L","F","A","I","O","N","I","R","Y","C","V","G","U"], prevAnswers: [{"word":"CONFIGURATION","pct":1},{"word":"PRISON","pct":22},{"word":"STOKE","pct":28},{"word":"PAST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0032", letters: ["B","C","E","O","S","O","C","U","F","N","O","N","P","S","I","T","A","K","I","D","E","R"], prevAnswers: [{"word":"CONSIDERATION","pct":1},{"word":"CONSIDER","pct":22},{"word":"INSIDE","pct":28},{"word":"BOOT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0033", letters: ["P","T","O","N","C","","C","N","D","W","B","R","T","Y","U","I","K","S","T","I","O","N"], prevAnswers: [{"word":"CONTRIBUTIONS","pct":1},{"word":"NOTCH","pct":22},{"word":"NOTE","pct":28},{"word":"ONCE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0034", letters: ["I","N","G","T","S","I","T","A","I","R","M","D","R","L","F","E","O","C","B","E","M","O"], prevAnswers: [{"word":"DEMOCRATISING","pct":1},{"word":"SING","pct":22},{"word":"RING","pct":28},{"word":"SING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0035", letters: ["E","N","G","N","D","","H","I","D","M","S","O","N","Y","E","P","C","K","I","R","R","O"], prevAnswers: [{"word":"CORRESPONDING","pct":1},{"word":"ENEMY","pct":22},{"word":"SHOCK","pct":28},{"word":"EASE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0036", letters: ["A","G","N","I","N","C","C","Z","S","U","O","R","I","Y","V","M","A","T","T","I","E","D"], prevAnswers: [{"word":"DEMOCRATIZING","pct":1},{"word":"DEMOCRATISING","pct":22},{"word":"COME","pct":28},{"word":"COME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0037", letters: ["E","O","N","A","D","M","T","S","N","D","R","","W","Y","A","V","T","I","T","I","O","N"], prevAnswers: [{"word":"DEMONSTRATION","pct":1},{"word":"MONSTER","pct":22},{"word":"ONSET","pct":28},{"word":"MOTOR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0038", letters: ["A","N","N","O","M","L","W","A","I","D","T","N","T","Y","E","E","I","V","T","I","R","M"], prevAnswers: [{"word":"DETERMINATION","pct":1},{"word":"NATION","pct":22},{"word":"INTER","pct":28},{"word":"WANT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0039", letters: ["N","H","S","I","D","","E","L","U","W","I","D","G","P","D","S","I","N","K","I","T","H"], prevAnswers: [{"word":"DISTINGUISHED","pct":1},{"word":"SINGLE","pct":22},{"word":"HOIST","pct":28},{"word":"FIELD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0040", letters: ["O","R","D","I","D","A","N","I","H","R","A","Y","U","T","X","R","F","B","E","E","O","R"], prevAnswers: [{"word":"EXTRAORDINARY","pct":1},{"word":"ORDINARY","pct":22},{"word":"EXTRA","pct":28},{"word":"ROAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0041", letters: ["M","U","D","D","E","","C","O","R","N","F","P","K","A","T","A","N","U","T","I","O","N"], prevAnswers: [{"word":"DOCUMENTATION","pct":1},{"word":"MENTION","pct":22},{"word":"MUON","pct":28},{"word":"MUON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0042", letters: ["C","F","A","R","U","E","F","E","G","C","B","T","S","T","S","S","E","V","I","V","E","N"], prevAnswers: [{"word":"EFFECTIVENESS","pct":1},{"word":"AFFECT","pct":22},{"word":"AFTER","pct":28},{"word":"REST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0043", letters: ["M","S","L","Y","V","","M","N","T","G","E","E","E","A","R","U","N","N","U","I","O","C"], prevAnswers: [{"word":"ENCOURAGEMENT","pct":1},{"word":"AGREEMENT","pct":22},{"word":"COURAGE","pct":28},{"word":"MIME","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0044", letters: ["G","N","S","C","F","E","M","B","T","T","E","E","N","N","H","G","M","E","O","I","L","N"], prevAnswers: [{"word":"ENLIGHTENMENT","pct":1},{"word":"THEME","pct":22},{"word":"FEET","pct":28},{"word":"FEET","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0045", letters: ["E","S","O","C","F","T","T","","E","B","A","N","I","H","L","E","M","B","I","S","H","D"], prevAnswers: [{"word":"ESTABLISHMENT","pct":1},{"word":"ESTATE","pct":22},{"word":"STATIC","pct":28},{"word":"ENABLE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0046", letters: ["T","H","U","P","K","F","N","M","E","A","S","G","N","I","M","A","Z","I","L","I","R","I"], prevAnswers: [{"word":"FAMILIARIZING","pct":1},{"word":"FAMILIAR","pct":22},{"word":"HUNG","pct":28},{"word":"HUNG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0047", letters: ["R","U","F","V","A","L","I","","N","B","G","S","A","G","O","L","N","T","H","C","O","I"], prevAnswers: [{"word":"GLOBALISATION","pct":1},{"word":"GLOBALIZATION","pct":22},{"word":"CONTAIN","pct":28},{"word":"FISH","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0048", letters: ["C","F","P","K","O","S","M","I","N","R","L","T","O","M","A","H","A","W","O","N","I","S"], prevAnswers: [{"word":"HARMONISATION","pct":1},{"word":"PINK","pct":22},{"word":"KNOW","pct":28},{"word":"PINK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0049", letters: ["D","A","Z","I","M","","T","B","L","K","I","O","A","O","N","O","L","L","E","R","G","U"], prevAnswers: [{"word":"GLOBALIZATION","pct":1},{"word":"ACTION","pct":22},{"word":"NATION","pct":28},{"word":"ROOTED","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0050", letters: ["S","I","M","H","I","L","Y","S","O","N","A","P","K","G","O","T","I","S","G","R","U","F"], prevAnswers: [{"word":"HOSPITALISING","pct":1},{"word":"SLING","pct":22},{"word":"SING","pct":28},{"word":"SING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0051", letters: ["I","L","W","B","Z","A","","O","H","I","T","S","I","N","H","I","P","P","G","D","M","Y"], prevAnswers: [{"word":"HOSPITALIZING","pct":1},{"word":"WITHIN","pct":22},{"word":"OBTAIN","pct":28},{"word":"WORST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0052", letters: ["L","E","D","N","Y","T","N","E","M","N","D","E","P","I","G","K","I","L","A","H","U","F"], prevAnswers: [{"word":"INDEPENDENTLY","pct":1},{"word":"INDEPENDENT","pct":22},{"word":"INTEND","pct":28},{"word":"LENT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0053", letters: ["P","K","A","S","L","","T","W","Y","U","S","R","V","D","N","A","I","E","I","L","I","S"], prevAnswers: [{"word":"INDUSTRIALISE","pct":1},{"word":"PLUCK","pct":22},{"word":"TRAIL","pct":28},{"word":"PLOT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0054", letters: ["N","I","Y","V","T","R","T","N","G","E","N","H","U","F","L","A","N","B","I","Z","I","G"], prevAnswers: [{"word":"INTERNALIZING","pct":1},{"word":"INTENT","pct":22},{"word":"INANE","pct":28},{"word":"TENT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0055", letters: ["P","E","V","E","O","S","I","N","S","I","T","","L","G","M","N","O","Y","A","T","I","K"], prevAnswers: [{"word":"INVESTIGATION","pct":1},{"word":"POSITION","pct":22},{"word":"INTENSE","pct":28},{"word":"VICTIM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0056", letters: ["I","T","S","V","F","A","U","N","U","I","A","J","H","L","C","T","G","B","N","O","I","T"], prevAnswers: [{"word":"JUSTIFICATION","pct":1},{"word":"FICTION","pct":22},{"word":"TAIL","pct":28},{"word":"TAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0057", letters: ["E","A","T","I","I","M","S","N","O","T","I","G","E","O","","G","L","D","W","P","K","A"], prevAnswers: [{"word":"LEGITIMATIONS","pct":1},{"word":"INSIGHT","pct":22},{"word":"SINGLE","pct":28},{"word":"EAST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0058", letters: ["A","C","R","G","M","A","T","N","I","F","E","U","R","H","U","N","A","W","B","T","N","M"], prevAnswers: [{"word":"MANUFACTURING","pct":1},{"word":"INTENT","pct":22},{"word":"WRING","pct":28},{"word":"MATE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0059", letters: ["A","N","D","E","M","S","U","S","R","I","","T","U","H","D","A","W","Y","V","N","T","N"], prevAnswers: [{"word":"MISUNDERSTAND","pct":1},{"word":"UNDERSTANDS","pct":22},{"word":"STUPID","pct":28},{"word":"ISLAND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0060", letters: ["T","O","A","N","A","I","N","G","R","N","L","A","U","F","I","B","G","T","S","I","N","I"], prevAnswers: [{"word":"NATIONALISING","pct":1},{"word":"NATIONAL","pct":22},{"word":"TAIL","pct":28},{"word":"TAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0061", letters: ["G","N","I","Z","A","N","I","I","E","","T","O","L","U","N","A","N","A","F","B","T","I"], prevAnswers: [{"word":"NATIONALIZING","pct":1},{"word":"NATIONAL","pct":22},{"word":"ACTION","pct":28},{"word":"GAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0062", letters: ["N","L","N","O","H","U","G","A","I","M","B","S","T","R","A","L","I","T","O","N","I","R"], prevAnswers: [{"word":"NORMALISATION","pct":1},{"word":"NORMAL","pct":22},{"word":"ANGST","pct":28},{"word":"NUMB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0063", letters: ["N","U","O","P","I","I","T","P","S","T","E","R","O","P","S","","M","G","V","T","N","U"], prevAnswers: [{"word":"OPPORTUNITIES","pct":1},{"word":"PROMISE","pct":22},{"word":"UNITE","pct":28},{"word":"TREAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0064", letters: ["P","I","R","E","A","C","D","P","M","T","I","A","G","I","V","T","R","A","O","N","N","P"], prevAnswers: [{"word":"PARTICIPATION","pct":1},{"word":"ACTION","pct":22},{"word":"TRAIT","pct":28},{"word":"ACID","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0065", letters: ["O","S","G","H","N","","R","E","F","A","I","N","P","L","I","Z","G","V","A","N","L","T"], prevAnswers: [{"word":"PERSONALIZING","pct":1},{"word":"LANDING","pct":22},{"word":"GENIUS","pct":28},{"word":"SHINE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0066", letters: ["I","B","I","B","L","H","S","C","W","I","Y","S","E","T","I","I","O","P","E","S","P","N"], prevAnswers: [{"word":"POSSIBILITIES","pct":1},{"word":"NOISY","pct":22},{"word":"SITE","pct":28},{"word":"POSE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0067", letters: ["Q","E","R","W","U","L","","K","O","A","I","L","F","H","I","F","N","O","C","A","T","I"], prevAnswers: [{"word":"QUALIFICATION","pct":1},{"word":"FILTER","pct":22},{"word":"ULCER","pct":28},{"word":"EVIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0068", letters: ["A","T","I","H","U","R","N","O","F","B","A","T","I","R","L","E","G","C","I","S","I","N"], prevAnswers: [{"word":"RATIONALISING","pct":1},{"word":"HOTEL","pct":22},{"word":"RATIO","pct":28},{"word":"HINT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0069", letters: ["N","H","U","F","I","G","A","B","T","Z","R","T","","I","A","O","I","L","L","N","S","C"], prevAnswers: [{"word":"RATIONALIZING","pct":1},{"word":"GROAN","pct":22},{"word":"ATTIC","pct":28},{"word":"GRAB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0070", letters: ["U","F","P","D","E","I","R","E","B","T","B","L","H","S","A","R","I","S","E","E","C","W"], prevAnswers: [{"word":"REESTABLISHED","pct":1},{"word":"ESTABLISHED","pct":22},{"word":"TIRED","pct":28},{"word":"FIRE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0071", letters: ["L","G","B","E","I","T","N","","A","M","E","O","F","E","C","R","I","N","D","W","R","E"], prevAnswers: [{"word":"REINFORCEMENT","pct":1},{"word":"BELONG","pct":22},{"word":"BEING","pct":28},{"word":"TIMER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0072", letters: ["T","A","E","R","I","F","L","H","B","O","N","S","I","E","O","S","P","L","C","W","Y","S"], prevAnswers: [{"word":"RELATIONSHIPS","pct":1},{"word":"RELATIONS","pct":22},{"word":"TALE","pct":28},{"word":"TALE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0073", letters: ["W","Y","V","E","K","","O","R","R","I","L","V","H","O","T","U","M","G","N","I","Z","E"], prevAnswers: [{"word":"REVOLUTIONIZE","pct":1},{"word":"SOLUTION","pct":22},{"word":"ERROR","pct":28},{"word":"WELT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0074", letters: ["D","G","V","T","E","I","D","N","U","T","A","C","I","S","H","I","S","T","O","P","F","B"], prevAnswers: [{"word":"SOPHISTICATED","pct":1},{"word":"INDIE","pct":22},{"word":"DIED","pct":28},{"word":"DIET","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0075", letters: ["Y","C","N","K","A","I","A","O","N","F","F","T","I","R","","I","C","G","S","P","E","V"], prevAnswers: [{"word":"SPECIFICATION","pct":1},{"word":"SPECIFIC","pct":22},{"word":"RESPECT","pct":28},{"word":"NOTICE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0076", letters: ["P","S","G","K","A","Y","N","S","Y","T","S","I","R","E","C","Z","I","F","M","A","T","V"], prevAnswers: [{"word":"SYSTEMATIZING","pct":1},{"word":"SYSTEM","pct":22},{"word":"SING","pct":28},{"word":"SING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0077", letters: ["R","S","T","A","V","E","U","N","D","T","D","N","I","N","","O","N","C","F","B","G","E"], prevAnswers: [{"word":"UNDERSTANDING","pct":1},{"word":"STUDENT","pct":22},{"word":"OLDEST","pct":28},{"word":"REST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0078", letters: ["O","R","G","E","O","F","L","E","T","G","N","U","T","S","E","L","A","C","Y","K","B","A"], prevAnswers: [{"word":"UNFORGETTABLE","pct":1},{"word":"ACTUAL","pct":22},{"word":"FORGE","pct":28},{"word":"ROOF","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0079", letters: ["E","O","L","Y","H","","T","P","Y","N","A","E","L","U","T","R","U","N","K","A","O","F"], prevAnswers: [{"word":"UNFORTUNATELY","pct":1},{"word":"PLURAL","pct":22},{"word":"ENTER","pct":28},{"word":"HEART","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0080", letters: ["K","N","C","A","S","M","E","E","D","G","D","N","T","V","C","E","P","N","T","E","R","U"], prevAnswers: [{"word":"UNPRECEDENTED","pct":1},{"word":"NEED","pct":22},{"word":"MEND","pct":28},{"word":"NEED","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0081", letters: ["A","","U","H","V","I","Z","N","C","S","I","A","O","U","A","L","T","I","F","P","T","I"], prevAnswers: [{"word":"VISUALIZATION","pct":1},{"word":"VISUAL","pct":22},{"word":"PUNCH","pct":28},{"word":"AXIS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0082", letters: ["N","U","Y","V","H","M","T","G","E","V","L","I","I","U","I","B","A","L","L","N","E","R"], prevAnswers: [{"word":"VULNERABILITY","pct":1},{"word":"ABILITY","pct":22},{"word":"VEIL","pct":28},{"word":"VEIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0083", letters: ["N","C","E","R","M","A","","K","I","T","L","L","P","I","C","I","S","I","P","A","G","N"], prevAnswers: [{"word":"CAPITALISING","pct":2},{"word":"INSPIRED","pct":22},{"word":"MAKER","pct":27},{"word":"DANCE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0084", letters: ["N","C","D","N","M","Y","G","I","G","V","E","O","S","T","A","T","R","I","I","C","R","H"], prevAnswers: [{"word":"CATEGORISING","pct":2},{"word":"GOING","pct":22},{"word":"SORT","pct":27},{"word":"SORT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0085", letters: ["L","F","C","E","O","","N","H","E","Y","E","L","R","V","S","N","U","F","R","S","U","A"], prevAnswers: [{"word":"CHEERFULNESS","pct":2},{"word":"UNLESS","pct":22},{"word":"FLOWN","pct":27},{"word":"LOAN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0086", letters: ["G","O","H","T","S","R","U","C","F","O","E","K","O","G","C","Y","H","P","R","A","P","N"], prevAnswers: [{"word":"CHOREOGRAPHY","pct":2},{"word":"GRACE","pct":22},{"word":"GORE","pct":27},{"word":"GORE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0087", letters: ["M","R","U","N","G","","A","I","O","T","S","T","C","I","E","N","O","C","H","P","M","L"], prevAnswers: [{"word":"COMPENSATION","pct":2},{"word":"ATTENTION","pct":22},{"word":"STATION","pct":27},{"word":"CONTAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0088", letters: ["U","T","H","M","G","R","S","N","B","U","T","N","O","C","C","A","L","C","T","I","O","N"], prevAnswers: [{"word":"CONSTRUCTION","pct":2},{"word":"CONTACT","pct":22},{"word":"COLON","pct":27},{"word":"GUTS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0089", letters: ["C","I","D","W","N","O","","Y","E","T","O","R","C","E","M","P","A","H","P","O","R","U"], prevAnswers: [{"word":"CONTEMPORARY","pct":2},{"word":"TEMPORARY","pct":22},{"word":"PORTION","pct":27},{"word":"MOTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0090", letters: ["N","V","E","R","O","C","I","A","S","D","O","T","M","G","N","B","T","I","R","H","U","F"], prevAnswers: [{"word":"CONVERSATION","pct":2},{"word":"RATIO","pct":22},{"word":"BOND","pct":27},{"word":"MARE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0091", letters: ["H","M","R","G","B","","O","D","I","D","C","O","I","S","U","N","N","A","F","O","I","T"], prevAnswers: [{"word":"COORDINATION","pct":2},{"word":"NATION","pct":22},{"word":"HUMOR","pct":27},{"word":"HOOD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0092", letters: ["S","N","O","I","L","W","R","T","Y","K","O","P","A","O","S","C","O","R","P","D","M","G"], prevAnswers: [{"word":"CORPORATIONS","pct":2},{"word":"PORTION","pct":22},{"word":"SWORN","pct":27},{"word":"WORT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0093", letters: ["M","S","I","L","G","E","D","L","A","V","","S","T","L","O","U","R","S","F","B","C","Y"], prevAnswers: [{"word":"CRYSTALLISED","pct":2},{"word":"CRYSTALISED","pct":22},{"word":"DROVE","pct":27},{"word":"VISTA","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0094", letters: ["U","F","B","D","T","N","G","I","H","G","E","C","S","A","T","N","A","A","W","P","V","D"], prevAnswers: [{"word":"DISADVANTAGE","pct":2},{"word":"ADVANTAGE","pct":22},{"word":"DANCE","pct":27},{"word":"DICE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0095", letters: ["W","B","E","I","L","","A","H","E","D","I","M","N","G","E","P","C","Y","K","O","L","C"], prevAnswers: [{"word":"ENCYCLOPEDIA","pct":2},{"word":"WEDGE","pct":22},{"word":"LEDGE","pct":27},{"word":"WADE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0096", letters: ["F","P","K","T","O","R","R","N","S","A","O","S","E","E","N","D","E","M","L","W","Y","V"], prevAnswers: [{"word":"ENDORSEMENTS","pct":2},{"word":"ENDORSEMENT","pct":22},{"word":"PROSE","pct":27},{"word":"PROD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0097", letters: ["G","V","T","I","C","S","N","","U","F","E","O","I","X","P","C","A","T","E","B","T","E"], prevAnswers: [{"word":"EXPECTATIONS","pct":2},{"word":"SECOND","pct":22},{"word":"TONES","pct":27},{"word":"TONE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0098", letters: ["X","E","T","N","P","L","A","E","Y","E","R","I","M","K","A","R","P","H","U","G","V","T"], prevAnswers: [{"word":"EXPERIMENTAL","pct":2},{"word":"EMPIRE","pct":22},{"word":"PEARL","pct":27},{"word":"EARL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0099", letters: ["G","O","E","V","R","","G","H","C","A","P","T","D","W","H","B","L","E","I","C","A","I"], prevAnswers: [{"word":"GEOGRAPHICAL","pct":2},{"word":"CHARGE","pct":22},{"word":"GRAPE","pct":27},{"word":"GONG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0100", letters: ["K","S","A","R","N","E","S","F","I","L","U","G","C","Y","F","R","V","T","E","T","A","S"], prevAnswers: [{"word":"GRATEFULNESS","pct":2},{"word":"TRULY","pct":22},{"word":"SELF","pct":27},{"word":"SELF","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0101", letters: ["T","I","S","N","L","","C","I","O","R","I","A","T","W","Y","L","I","K","O","S","P","M"], prevAnswers: [{"word":"IMPLICATIONS","pct":2},{"word":"LOCATIONS","pct":22},{"word":"NOTICE","pct":27},{"word":"VISION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0102", letters: ["B","N","E","D","E","D","C","P","N","T","E","E","E","S","L","W","D","Y","K","N","N","I"], prevAnswers: [{"word":"INDEPENDENCE","pct":2},{"word":"DEPEND","pct":22},{"word":"STEEP","pct":27},{"word":"DEEP","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0103", letters: ["N","E","E","I","I","T","R","","H","T","E","S","U","I","C","F","P","K","O","N","O","S"], prevAnswers: [{"word":"INTERSECTION","pct":2},{"word":"INTEREST","pct":22},{"word":"ENTER","pct":27},{"word":"INTER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0104", letters: ["O","R","U","S","M","G","T","N","B","I","N","R","O","T","N","D","O","I","C","U","C","T"], prevAnswers: [{"word":"INTRODUCTION","pct":2},{"word":"INTRO","pct":22},{"word":"MINT","pct":27},{"word":"SNOB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0105", letters: ["A","R","O","D","E","N","T","S","W","M","E","","V","E","M","A","T","S","R","U","S","M"], prevAnswers: [{"word":"MEASUREMENTS","pct":2},{"word":"MEASUREMENT","pct":22},{"word":"STREAM","pct":27},{"word":"ENTER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0106", letters: ["H","G","A","C","W","P","O","E","N","H","B","R","D","G","I","O","H","T","E","N","O","D"], prevAnswers: [{"word":"NEIGHBORHOOD","pct":2},{"word":"THRONE","pct":22},{"word":"THROB","pct":27},{"word":"GORE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0107", letters: ["I","G","O","R","H","","N","G","A","W","O","P","N","K","T","I","I","O","R","A","Z","S"], prevAnswers: [{"word":"ORGANIZATION","pct":2},{"word":"AGONY","pct":22},{"word":"RATIO","pct":27},{"word":"IRON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0108", letters: ["U","P","U","E","L","D","O","P","W","A","B","A","N","I","R","L","P","H","S","I","N","G"], prevAnswers: [{"word":"POPULARISING","pct":2},{"word":"POPULAR","pct":22},{"word":"DAIS","pct":27},{"word":"DOPE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0109", letters: ["N","E","S","R","T","","E","U","F","A","I","R","P","B","T","O","E","O","S","H","N","C"], prevAnswers: [{"word":"PRESENTATION","pct":2},{"word":"STATION","pct":22},{"word":"NATION","pct":27},{"word":"SHORES","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0110", letters: ["V","L","M","G","K","A","T","N","P","V","A","I","N","R","E","S","O","P","D","U","E","R"], prevAnswers: [{"word":"PRESERVATION","pct":2},{"word":"REASON","pct":22},{"word":"SAINT","pct":27},{"word":"LAVA","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0111", letters: ["P","R","O","E","D","M","L","C","F","A","A","","T","T","I","N","L","P","I","O","H","W"], prevAnswers: [{"word":"PROCLAMATION","pct":2},{"word":"LOCAL","pct":22},{"word":"COLON","pct":27},{"word":"ROLE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0112", letters: ["A","N","I","S","L","P","O","S","H","R","O","F","E","U","G","V","A","N","L","T","C","W"], prevAnswers: [{"word":"PROFESSIONAL","pct":2},{"word":"PROOF","pct":22},{"word":"NOSE","pct":27},{"word":"NOSE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0113", letters: ["N","L","T","Y","U","C","T","I","F","D","P","I","V","K","O","R","","C","P","A","H","W"], prevAnswers: [{"word":"PRODUCTIVITY","pct":2},{"word":"SHARP","pct":22},{"word":"TIRE","pct":27},{"word":"TIRE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0114", letters: ["U","F","V","L","A","N","G","B","E","C","O","N","A","L","E","R","I","S","B","D","W","P"], prevAnswers: [{"word":"RECOGNISABLE","pct":2},{"word":"ACORN","pct":22},{"word":"PIANO","pct":27},{"word":"LEAN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0115", letters: ["L","F","P","K","I","","N","A","D","M","E","T","S","E","R","I","U","Q","W","Y","R","E"], prevAnswers: [{"word":"REQUIREMENTS","pct":2},{"word":"REQUIRES","pct":22},{"word":"REQUIRE","pct":27},{"word":"NATURE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0116", letters: ["I","T","U","S","O","C","G","T","A","N","A","I","B","T","I","F","S","C","H","L","W","P"], prevAnswers: [{"word":"SATISFACTION","pct":2},{"word":"ACTION","pct":22},{"word":"FAITH","pct":27},{"word":"STAB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0117", letters: ["S","I","M","Y","I","L","","C","S","N","A","A","I","G","D","D","N","G","O","U","F","B"], prevAnswers: [{"word":"SCANDALISING","pct":2},{"word":"ISLAND","pct":22},{"word":"MILLS","pct":27},{"word":"SILK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0118", letters: ["C","E","S","W","L","F","L","S","P","E","S","E","N","S","K","S","S","T","I","D","M","Y"], prevAnswers: [{"word":"SELFLESSNESS","pct":2},{"word":"SELF","pct":22},{"word":"LENT","pct":27},{"word":"SELF","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0119", letters: ["P","K","I","L","I","C","","O","D","F","I","G","V","F","U","E","N","T","S","T","Y","L"], prevAnswers: [{"word":"SUFFICIENTLY","pct":2},{"word":"CLIENT","pct":22},{"word":"LOGIC","pct":27},{"word":"PICK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0120", letters: ["P","T","N","E","N","H","A","K","L","K","N","F","R","S","E","L","U","M","S","Y","V","A"], prevAnswers: [{"word":"THANKFULNESS","pct":2},{"word":"THANK","pct":22},{"word":"THAN","pct":27},{"word":"THAN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0121", letters: ["B","A","O","F","N","","U","N","F","E","H","M","I","P","Y","L","C","I","K","I","L","A"], prevAnswers: [{"word":"UNOFFICIALLY","pct":2},{"word":"ASHEN","pct":22},{"word":"LILAC","pct":27},{"word":"BABE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0122", letters: ["B","E","Q","I","D","H","N","U","C","F","P","U","E","K","D","E","S","T","O","N","O","I"], prevAnswers: [{"word":"UNQUESTIONED","pct":2},{"word":"QUEST","pct":22},{"word":"USED","pct":27},{"word":"PEST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0123", letters: ["P","K","I","R","O","S","E","R","V","N","","C","N","S","F","E","U","B","I","V","O","S"], prevAnswers: [{"word":"UNRESPONSIVE","pct":2},{"word":"RESPONSE","pct":22},{"word":"ONSET","pct":27},{"word":"POSE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0124", letters: ["E","O","D","D","I","C","E","T","E","E","H","A","R","F","L","O","H","P","K","A","R","W"], prevAnswers: [{"word":"WHOLEHEARTED","pct":2},{"word":"HEARTED","pct":22},{"word":"DETER","pct":27},{"word":"DEAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0125", letters: ["T","I","C","S","C","","F","P","K","A","L","N","O","L","U","A","O","L","C","E","T","I"], prevAnswers: [{"word":"CALCULATION","pct":3},{"word":"FISCAL","pct":21},{"word":"PLATE","pct":27},{"word":"TILL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0126", letters: ["N","E","F","U","L","A","R","N","L","C","F","E","I","M","Y","S","V","A","R","S","U","O"], prevAnswers: [{"word":"CAREFULNESS","pct":3},{"word":"LINER","pct":21},{"word":"LIVES","pct":27},{"word":"NEAR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0127", letters: ["O","C","E","S","D","","M","T","A","P","M","U","C","K","C","O","N","I","A","N","M","R"], prevAnswers: [{"word":"COMMUNICATE","pct":3},{"word":"COMMON","pct":21},{"word":"COMET","pct":27},{"word":"ONCE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0128", letters: ["R","P","S","L","F","E","V","B","T","I","M","I","T","M","O","P","R","A","N","C","A","D"], prevAnswers: [{"word":"COMPARATIVE","pct":3},{"word":"TIMER","pct":21},{"word":"RIVER","pct":27},{"word":"EMIT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0129", letters: ["I","T","C","C","V","I","","O","S","E","T","M","D","W","Y","E","P","E","I","P","N","R"], prevAnswers: [{"word":"COMPETITIVE","pct":3},{"word":"COMPETE","pct":21},{"word":"INCOME","pct":27},{"word":"TILT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0130", letters: ["C","C","T","E","N","I","A","C","D","R","L","O","F","B","E","P","M","O","L","P","H","W"], prevAnswers: [{"word":"COMPLICATED","pct":3},{"word":"REPLACED","pct":21},{"word":"DETAIL","pct":27},{"word":"TAIL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0131", letters: ["C","I","S","M","G","","T","N","O","E","R","D","C","N","U","T","E","D","A","C","L","F"], prevAnswers: [{"word":"CONSTRUCTED","pct":3},{"word":"CONSIDER","pct":21},{"word":"STAGE","pct":27},{"word":"START","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0132", letters: ["V","N","E","S","E","I","V","D","M","N","E","N","G","B","C","O","O","C","C","A","R","U"], prevAnswers: [{"word":"CONVENIENCE","pct":3},{"word":"SEVEN","pct":21},{"word":"VINE","pct":27},{"word":"VEIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0133", letters: ["C","O","M","G","R","","E","L","I","E","R","A","S","D","N","T","I","C","E","U","F","P"], prevAnswers: [{"word":"CREDENTIALS","pct":3},{"word":"UNDERCOVER","pct":21},{"word":"LEARNED","pct":27},{"word":"CORNER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0134", letters: ["R","Y","N","M","G","C","S","V","T","I","A","T","S","S","L","J","O","U","E","D","F","B"], prevAnswers: [{"word":"CRYSTALISED","pct":3},{"word":"SCALE","pct":21},{"word":"AISLE","pct":27},{"word":"GILD","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0135", letters: ["U","F","P","K","N","O","E","","N","I","D","C","L","T","H","A","L","W","A","R","Y","V"], prevAnswers: [{"word":"DECLARATION","pct":3},{"word":"CREDIT","pct":21},{"word":"DECAY","pct":27},{"word":"FEEL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0136", letters: ["C","F","E","T","P","K","A","T","A","S","M","S","R","L","W","D","N","Y","V","E","M","O"], prevAnswers: [{"word":"DEMONSTRATE","pct":3},{"word":"FEAST","pct":21},{"word":"STATE","pct":27},{"word":"FEAT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0137", letters: ["L","E","Y","V","T","M","N","","U","A","U","T","I","R","F","C","O","N","B","E","D","G"], prevAnswers: [{"word":"DOCUMENTING","pct":3},{"word":"FUNCTION","pct":21},{"word":"NATION","pct":27},{"word":"LENT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0138", letters: ["L","F","C","E","P","E","R","H","H","B","E","O","M","M","I","C","D","W","A","H","Y","K"], prevAnswers: [{"word":"ECHOCHAMBER","pct":3},{"word":"CREEP","pct":21},{"word":"REBEL","pct":27},{"word":"FREE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0139", letters: ["Y","L","F","F","D","E","","E","E","B","V","C","T","C","V","I","T","N","R","M","P","E"], prevAnswers: [{"word":"EFFECTIVELY","pct":3},{"word":"ACTIVELY","pct":21},{"word":"EFFECT","pct":27},{"word":"AFFECT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0140", letters: ["F","E","P","K","O","M","N","R","A","L","E","T","W","E","Y","S","R","V","N","D","O","T"], prevAnswers: [{"word":"ENDORSEMENT","pct":3},{"word":"ELEMENT","pct":21},{"word":"MOLES","pct":27},{"word":"MOLE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0141", letters: ["F","M","E","P","E","N","T","N","I","R","O","","S","I","V","L","W","Y","E","N","K","O"], prevAnswers: [{"word":"ENVIRONMENT","pct":3},{"word":"MENTION","pct":21},{"word":"METAL","pct":27},{"word":"TONER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0142", letters: ["S","E","Y","K","A","T","A","H","B","B","R","M","G","L","I","V","D","T","S","H","E","S"], prevAnswers: [{"word":"ESTABLISHED","pct":3},{"word":"STEAM","pct":21},{"word":"LIVES","pct":27},{"word":"SEAM","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0143", letters: ["I","N","A","Y","V","M","E","T","I","T","A","X","O","I","","D","N","U","G","B","E","O"], prevAnswers: [{"word":"EXAMINATION","pct":3},{"word":"NATION","pct":21},{"word":"ATONE","pct":27},{"word":"NEAR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0144", letters: ["E","P","V","T","I","C","T","I","O","C","X","E","N","H","U","F","A","B","E","O","L","L"], prevAnswers: [{"word":"EXCEPTIONAL","pct":3},{"word":"EXCEPTION","pct":21},{"word":"VINE","pct":27},{"word":"VINE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0145", letters: ["B","E","R","P","O","","E","W","Y","N","C","D","K","N","E","I","E","X","C","R","E","P"], prevAnswers: [{"word":"EXPERIENCED","pct":3},{"word":"DECIDE","pct":21},{"word":"BONER","pct":27},{"word":"BLEED","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0146", letters: ["K","A","N","S","D","M","I","G","V","A","T","O","N","T","N","A","P","X","I","P","L","E"], prevAnswers: [{"word":"EXPLANATION","pct":3},{"word":"NATION","pct":21},{"word":"DATA","pct":27},{"word":"DATA","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0147", letters: ["K","I","Y","O","F","L","L","","C","E","I","I","W","X","I","B","T","Y","V","T","F","A"], prevAnswers: [{"word":"FLEXIBILITY","pct":3},{"word":"LILAC","pct":21},{"word":"KILT","pct":27},{"word":"KILL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0148", letters: ["O","S","S","N","F","R","M","T","O","F","Y","A","I","V","O","A","D","N","U","U","N","H"], prevAnswers: [{"word":"FOUNDATIONS","pct":3},{"word":"FORMATION","pct":21},{"word":"FOUND","pct":27},{"word":"FORM","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0149", letters: ["I","R","O","I","E","","N","R","T","W","P","T","A","K","F","U","S","O","S","R","F","D"], prevAnswers: [{"word":"FRUSTRATION","pct":3},{"word":"STATION","pct":21},{"word":"INPUT","pct":27},{"word":"IRON","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0150", letters: ["I","G","T","R","U","F","V","O","L","E","A","G","N","O","B","L","Z","I","L","G","I","H"], prevAnswers: [{"word":"GLOBALIZING","pct":3},{"word":"GLOBAL","pct":21},{"word":"OVAL","pct":27},{"word":"OVAL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0151", letters: ["Y","L","H","E","R","T","","R","A","N","L","T","C","W","B","E","F","E","H","F","I","D"], prevAnswers: [{"word":"HEARTFELTLY","pct":3},{"word":"HEARTFELT","pct":21},{"word":"HEARD","pct":27},{"word":"HOTEL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0152", letters: ["H","O","E","A","C","W","P","H","R","K","A","S","T","G","G","N","S","T","L","M","I","R"], prevAnswers: [{"word":"HEARTSTRING","pct":3},{"word":"HEARTS","pct":21},{"word":"HEART","pct":27},{"word":"HOPE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0153", letters: ["M","S","D","U","Y","","T","O","N","A","A","I","I","N","E","N","R","M","C","I","G","A"], prevAnswers: [{"word":"IMAGINATION","pct":3},{"word":"STATION","pct":21},{"word":"MOTION","pct":27},{"word":"ACTION","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0154", letters: ["Y","I","D","S","C","F","A","E","M","Y","T","B","M","E","L","E","I","I","M","N","R","W"], prevAnswers: [{"word":"IMMEDIATELY","pct":3},{"word":"DEBATE","pct":21},{"word":"DATE","pct":27},{"word":"DATE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0155", letters: ["I","A","H","C","D","N","W","","K","E","I","T","P","P","E","E","N","S","N","D","L","M"], prevAnswers: [{"word":"INDEPENDENT","pct":3},{"word":"DEPEND","pct":21},{"word":"HOTEL","pct":27},{"word":"AIDE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0156", letters: ["F","O","S","L","N","I","R","W","P","I","M","K","O","O","T","A","R","E","N","D","U","Y"], prevAnswers: [{"word":"INFORMATION","pct":3},{"word":"FORMATION","pct":21},{"word":"RATIO","pct":27},{"word":"FORM","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0157", letters: ["I","R","E","D","T","","H","G","B","A","I","N","E","N","C","I","R","S","E","U","F","P"], prevAnswers: [{"word":"INHERITANCE","pct":3},{"word":"FINISHED","pct":21},{"word":"NATURE","pct":27},{"word":"INANE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0158", letters: ["D","N","O","I","W","Y","S","T","V","O","N","T","C","S","U","I","R","U","H","M","G","B"], prevAnswers: [{"word":"INSTRUCTION","pct":3},{"word":"MINUS","pct":21},{"word":"STIR","pct":27},{"word":"SNOW","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0159", letters: ["C","W","P","K","A","","T","S","L","R","A","I","O","M","G","E","T","N","Y","V","I","N"], prevAnswers: [{"word":"INTEGRATION","pct":3},{"word":"CHARGE","pct":21},{"word":"NATION","pct":27},{"word":"CHARM","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0160", letters: ["C","V","F","I","P","E","L","N","E","M","E","O","V","I","N","T","M","S","D","W","Y","K"], prevAnswers: [{"word":"INVOLVEMENT","pct":3},{"word":"EVOLVE","pct":21},{"word":"VENOM","pct":27},{"word":"FINE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0161", letters: ["W","Y","V","A","N","","R","U","L","N","S","G","I","O","I","T","A","M","B","T","T","I"], prevAnswers: [{"word":"LIMITATIONS","pct":3},{"word":"WORST","pct":21},{"word":"STING","pct":27},{"word":"WEST","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0162", letters: ["W","Y","V","E","T","N","T","C","O","R","N","E","N","M","A","I","N","A","U","G","B","E"], prevAnswers: [{"word":"MAINTENANCE","pct":3},{"word":"TRAIN","pct":21},{"word":"GIANT","pct":27},{"word":"CONE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0163", letters: ["G","B","E","N","U","","L","N","F","P","S","E","T","E","A","U","M","K","M","A","R","E"], prevAnswers: [{"word":"MEASUREMENT","pct":3},{"word":"ELAPSE","pct":21},{"word":"MUSCLE","pct":27},{"word":"GULL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0164", letters: ["P","M","K","O","L","E","Y","O","N","T","C","L","G","F","H","D","O","Y","V","O","T","D"], prevAnswers: [{"word":"METHODOLOGY","pct":3},{"word":"PELT","pct":21},{"word":"YELP","pct":27},{"word":"PELT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0165", letters: ["P","K","A","A","R","","N","T","D","W","Y","V","U","T","S","S","R","A","S","E","N","L"], prevAnswers: [{"word":"NATURALNESS","pct":3},{"word":"TAKEN","pct":21},{"word":"PREY","pct":27},{"word":"PRAY","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0166", letters: ["P","O","I","T","K","A","N","N","A","H","L","N","I","M","Y","E","O","T","V","T","G","I"], prevAnswers: [{"word":"NEGOTIATION","pct":3},{"word":"NATIONAL","pct":21},{"word":"POINT","pct":27},{"word":"PALE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0167", letters: ["K","I","G","R","G","","U","N","Y","V","L","S","I","O","A","I","N","S","M","M","R","O"], prevAnswers: [{"word":"NORMALISING","pct":3},{"word":"NORMAL","pct":21},{"word":"CLAIM","pct":27},{"word":"KILL","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0168", letters: ["T","I","R","N","H","C","R","O","W","Y","E","V","I","E","O","S","A","T","S","V","B","O"], prevAnswers: [{"word":"OBSERVATION","pct":3},{"word":"ROVER","pct":21},{"word":"TIRE","pct":27},{"word":"TIRE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0169", letters: ["R","E","N","K","O","I","A","T","A","N","T","","C","N","I","W","Y","V","O","T","I","S"], prevAnswers: [{"word":"ORIENTATION","pct":3},{"word":"PATIENT","pct":21},{"word":"NATION","pct":27},{"word":"ATTAIN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0170", letters: ["O","S","G","R","U","T","M","Y","V","O","S","A","N","U","A","T","H","G","N","D","I","N"], prevAnswers: [{"word":"OUTSTANDING","pct":3},{"word":"STING","pct":21},{"word":"TOAD","pct":27},{"word":"TOAD","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0171", letters: ["N","M","T","H","E","C","N","","Y","K","E","A","M","O","P","R","O","R","C","P","F","S"], prevAnswers: [{"word":"PERFORMANCE","pct":3},{"word":"PARENT","pct":21},{"word":"FORMAL","pct":27},{"word":"TUNER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0172", letters: ["H","R","A","Y","I","G","H","P","D","T","O","Y","U","O","H","F","K","O","G","P","E","S"], prevAnswers: [{"word":"PHOTOGRAPHY","pct":3},{"word":"HIGH","pct":21},{"word":"DUKE","pct":27},{"word":"HIGH","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0173", letters: ["F","Y","P","U","U","N","A","L","P","L","E","S","I","D","","S","V","A","L","Y","O","R"], prevAnswers: [{"word":"PLAYFULNESS","pct":3},{"word":"UNLESS","pct":21},{"word":"RAISES","pct":27},{"word":"PULSE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0174", letters: ["Y","S","E","H","C","S","O","P","W","I","V","O","L","B","B","N","Y","D","I","L","I","T"], prevAnswers: [{"word":"POSSIBILITY","pct":3},{"word":"POSE","pct":21},{"word":"PONY","pct":27},{"word":"POSE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0175", letters: ["Y","C","A","O","H","T","","R","G","C","I","K","P","A","I","C","E","S","L","L","Y","U"], prevAnswers: [{"word":"PRACTICALLY","pct":3},{"word":"PRACTICE","pct":21},{"word":"SPECIAL","pct":27},{"word":"CATCH","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0176", letters: ["P","D","U","F","B","E","I","O","R","A","T","O","H","C","R","A","N","P","W","P","E","R"], prevAnswers: [{"word":"PREPARATION","pct":3},{"word":"ROOTED","pct":21},{"word":"ATONE","pct":27},{"word":"PEAT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0177", letters: ["Q","U","O","S","L","A","","P","T","T","R","C","K","E","N","K","C","D","R","B","A","W"], prevAnswers: [{"word":"QUARTERBACK","pct":3},{"word":"ACCURATE","pct":21},{"word":"CORNER","pct":27},{"word":"SOLAR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0178", letters: ["L","I","Z","H","A","R","U","A","F","E","N","T","P","K","A","O","I","N","S","C","W","Y"], prevAnswers: [{"word":"REALIZATION","pct":3},{"word":"ATONE","pct":21},{"word":"TONER","pct":27},{"word":"AREA","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0179", letters: ["H","U","G","F","G","N","I","N","B","O","R","S","I","E","C","E","","C","A","L","W","P"], prevAnswers: [{"word":"RECOGNISING","pct":3},{"word":"INSIDE","pct":21},{"word":"CRISIS","pct":27},{"word":"GUISE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0180", letters: ["D","M","Y","V","T","N","G","N","O","C","O","N","I","G","E","R","I","T","H","U","F","B"], prevAnswers: [{"word":"RECOGNITION","pct":3},{"word":"FRONT","pct":21},{"word":"CORE","pct":27},{"word":"GORE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0181", letters: ["W","O","I","T","P","","N","U","A","A","S","G","L","N","L","H","E","M","Y","V","R","T"], prevAnswers: [{"word":"REGULATIONS","pct":3},{"word":"RELATIONS","pct":21},{"word":"SINGLE","pct":27},{"word":"WORN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0182", letters: ["N","I","L","R","G","C","W","I","E","B","R","N","E","N","F","O","F","A","D","M","P","K"], prevAnswers: [{"word":"REINFORCING","pct":3},{"word":"LINE","pct":21},{"word":"REEF","pct":27},{"word":"LINE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0183", letters: ["U","L","T","Y","F","I","I","E","R","V","B","L","T","R","","A","I","S","C","W","P","E"], prevAnswers: [{"word":"RELIABILITY","pct":3},{"word":"REALITY","pct":21},{"word":"FILTER","pct":27},{"word":"LIVER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0184", letters: ["A","C","E","M","L","P","F","N","E","E","B","T","E","R","N","C","O","H","W","Y","K","A"], prevAnswers: [{"word":"REPLACEMENT","pct":3},{"word":"REPLACE","pct":21},{"word":"PACE","pct":27},{"word":"PACE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0185", letters: ["G","I","B","E","I","R","C","","H","T","I","T","U","S","E","O","F","P","R","N","K","O"], prevAnswers: [{"word":"RESTRICTION","pct":3},{"word":"FUNCTION","pct":21},{"word":"CITIES","pct":27},{"word":"STONER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0186", letters: ["O","R","Y","V","U","O","R","D","G","G","I","E","C","H","O","U","S","F","H","B","E","H"], prevAnswers: [{"word":"ROUGHHOUSED","pct":3},{"word":"ROUGH","pct":21},{"word":"HOUSE","pct":27},{"word":"GORE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0187", letters: ["P","N","G","K","I","I","S","I","C","I","F","","R","C","U","Y","V","A","A","N","T","S"], prevAnswers: [{"word":"SIGNIFICANT","pct":3},{"word":"RESIGN","pct":21},{"word":"SNIFF","pct":27},{"word":"GIST","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0188", letters: ["N","I","R","K","G","O","P","I","R","B","A","S","P","T","R","C","W","V","O","D","S","G"], prevAnswers: [{"word":"SPRINGBOARD","pct":3},{"word":"CARBON","pct":21},{"word":"RING","pct":27},{"word":"RING","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0189", letters: ["V","A","A","D","P","L","I","C","E","I","","U","P","F","Z","D","S","B","E","E","S","C"], prevAnswers: [{"word":"SPECIALIZED","pct":3},{"word":"SPECIAL","pct":21},{"word":"ALOUD","pct":27},{"word":"VALE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0190", letters: ["E","S","C","R","O","H","C","W","A","T","A","U","L","Y","C","E","P","K","A","L","P","S"], prevAnswers: [{"word":"SPECTACULAR","pct":3},{"word":"PLACE","pct":21},{"word":"SHOT","pct":27},{"word":"SHOE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0191", letters: ["E","I","R","H","S","","A","E","F","T","D","R","Z","P","A","N","D","I","K","A","S","O"], prevAnswers: [{"word":"STANDARDIZE","pct":3},{"word":"STANDARD","pct":21},{"word":"HEARTS","pct":27},{"word":"RAISE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0192", letters: ["O","S","M","R","W","Y","V","N","A","S","U","O","N","T","M","L","I","U","I","H","A","T"], prevAnswers: [{"word":"STIMULATION","pct":3},{"word":"LOUSY","pct":21},{"word":"MUST","pct":27},{"word":"ARMS","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0193", letters: ["O","D","E","D","H","","R","R","S","F","O","Y","A","V","S","T","B","O","A","R","B","N"], prevAnswers: [{"word":"STORYBOARDS","pct":3},{"word":"STORED","pct":21},{"word":"ERROR","pct":27},{"word":"HURRY","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0194", letters: ["N","T","I","A","T","A","N","U","L","S","O","D","W","B","Y","K","I","L","U","S","E","R"], prevAnswers: [{"word":"SUBSTANTIAL","pct":3},{"word":"INDIE","pct":21},{"word":"LAUD","pct":27},{"word":"UNDO","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0195", letters: ["R","G","S","U","O","","F","M","B","A","S","M","M","G","N","I","A","R","T","D","S","I"], prevAnswers: [{"word":"SUMMARISING","pct":3},{"word":"DISTANT","pct":21},{"word":"GROSS","pct":27},{"word":"ROOF","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0196", letters: ["Z","I","U","E","I","R","H","S","C","N","A","U","Y","G","V","M","M","I","R","G","O","L"], prevAnswers: [{"word":"SUMMARIZING","pct":3},{"word":"HUMAN","pct":21},{"word":"RANG","pct":27},{"word":"RING","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0197", letters: ["C","R","N","D","L","K","E","O","R","W","C","C","T","Y","","A","R","A","D","I","H","M"], prevAnswers: [{"word":"TRACKRECORD","pct":3},{"word":"FACTOR","pct":21},{"word":"CANDY","pct":27},{"word":"TONER","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0198", letters: ["A","P","S","P","R","H","N","C","W","E","N","A","Y","K","T","A","R","T","R","I","L","M"], prevAnswers: [{"word":"TRANSPARENT","pct":3},{"word":"PARENT","pct":21},{"word":"SPARE","pct":27},{"word":"RENT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0199", letters: ["T","A","D","U","R","","B","R","E","O","S","E","E","P","P","N","H","C","O","S","P","W"], prevAnswers: [{"word":"TROPOSPHERE","pct":3},{"word":"RESORT","pct":21},{"word":"TROOP","pct":27},{"word":"ABHOR","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0200", letters: ["Y","P","E","O","D","T","R","W","U","G","I","B","E","N","T","N","G","A","I","H","C","F"], prevAnswers: [{"word":"TYPEWRITING","pct":3},{"word":"WRITING","pct":21},{"word":"THING","pct":27},{"word":"TYPE","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0201", letters: ["H","M","G","B","S","","N","N","D","D","U","D","I","N","T","R","E","C","A","S","F","P"], prevAnswers: [{"word":"UNDERSTANDS","pct":3},{"word":"NATURE","pct":21},{"word":"SHOUT","pct":27},{"word":"HANG","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0202", letters: ["H","C","Y","V","G","O","T","N","R","R","T","T","E","O","G","U","S","L","F","N","W","B"], prevAnswers: [{"word":"UNFORGOTTEN","pct":3},{"word":"UTTER","pct":21},{"word":"RENT","pct":27},{"word":"RENT","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0203", letters: ["D","W","T","A","Y","","I","O","Z","A","N","N","I","E","R","M","I","L","G","B","U","T"], prevAnswers: [{"word":"UTILIZATION","pct":3},{"word":"NATION","pct":21},{"word":"NOISY","pct":27},{"word":"DEAN","pct":21},{"word":"4 or lower","pct":28}] },
  { id: "p0204", letters: ["L","O","B","A","U","E","S","C","F","T","L","V","T","S","Y","Y","N","D","W","P","E","O"], prevAnswers: [{"word":"ABSOLUTELY","pct":4},{"word":"ABSOLUTE","pct":21},{"word":"SOLE","pct":27},{"word":"SOLE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0205", letters: ["L","W","C","C","C","E","E","","A","N","P","K","A","P","A","T","S","D","M","G","V","T"], prevAnswers: [{"word":"ACCEPTANCE","pct":4},{"word":"CREEP","pct":21},{"word":"KNEEL","pct":27},{"word":"WEED","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0206", letters: ["M","G","V","A","L","T","H","L","U","F","P","E","B","A","E","S","S","I","C","C","E","S"], prevAnswers: [{"word":"ACCESSIBLE","pct":4},{"word":"THESE","pct":21},{"word":"VALE","pct":27},{"word":"VALE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0207", letters: ["G","I","V","O","H","L","S","","T","D","P","H","F","B","A","M","O","S","A","C","C","C"], prevAnswers: [{"word":"ACCOMPLISH","pct":4},{"word":"VISIT","pct":21},{"word":"SHIFT","pct":27},{"word":"GILD","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0208", letters: ["Y","A","V","A","N","C","G","H","L","O","C","F","B","U","T","G","N","I","N","T","I","U"], prevAnswers: [{"word":"ACCOUNTING","pct":4},{"word":"ACCOUNT","pct":21},{"word":"NOUN","pct":27},{"word":"NOUN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0209", letters: ["R","A","T","E","P","U","A","L","Y","K","C","C","A","C","","S","M","G","V","T","L","Y"], prevAnswers: [{"word":"ACCURATELY","pct":4},{"word":"ACCURATE","pct":21},{"word":"STICK","pct":27},{"word":"RATE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0210", letters: ["U","S","T","B","E","J","N","M","E","U","D","A","N","I","L","F","T","P","K","A","D","O"], prevAnswers: [{"word":"ADJUSTMENT","pct":4},{"word":"ADOPT","pct":21},{"word":"NAME","pct":27},{"word":"JUST","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0211", letters: ["K","A","S","M","E","R","","W","Y","T","V","T","N","S","I","N","A","D","D","H","I","M"], prevAnswers: [{"word":"ADMINISTER","pct":4},{"word":"ATTAIN","pct":21},{"word":"NATURE","pct":27},{"word":"SHARK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0212", letters: ["K","O","L","T","S","U","L","G","V","A","B","E","D","B","D","A","F","F","N","R","O","A"], prevAnswers: [{"word":"AFFORDABLE","pct":4},{"word":"AFFORD","pct":21},{"word":"LEARN","pct":27},{"word":"LEAD","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0213", letters: ["K","I","G","O","A","G","I","","U","G","S","V","F","R","E","S","E","B","A","R","T","H"], prevAnswers: [{"word":"AGGRESSIVE","pct":4},{"word":"INVEST","pct":21},{"word":"GUISE","pct":27},{"word":"GOLF","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0214", letters: ["A","R","B","I","L","W","Y","K","S","A","M","M","T","H","A","B","D","R","S","S","A","O"], prevAnswers: [{"word":"AMBASSADOR","pct":4},{"word":"MASS","pct":21},{"word":"BASS","pct":27},{"word":"MASS","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0215", letters: ["A","C","T","S","D","","Y","E","L","I","C","B","N","L","A","A","L","E","P","P","B","R"], prevAnswers: [{"word":"APPLICABLE","pct":4},{"word":"TYPICAL","pct":21},{"word":"LILAC","pct":27},{"word":"ACTS","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0216", letters: ["S","M","N","C","F","B","S","E","E","O","O","P","R","R","T","M","H","E","I","A","L","W"], prevAnswers: [{"word":"ATMOSPHERE","pct":4},{"word":"SNEER","pct":21},{"word":"TROOP","pct":27},{"word":"FORT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0217", letters: ["I","N","A","T","C","O","","T","R","U","I","F","A","P","K","T","C","O","R","S","L","W"], prevAnswers: [{"word":"ATTRACTION","pct":4},{"word":"CONTRACT","pct":21},{"word":"CONTACT","pct":27},{"word":"TANG","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0218", letters: ["G","C","A","E","S","K","M","B","Y","R","G","A","R","U","O","K","I","L","U","N","D","F"], prevAnswers: [{"word":"BACKGROUND","pct":4},{"word":"ROUND","pct":21},{"word":"BACK","pct":27},{"word":"MAID","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0219", letters: ["B","O","D","F","P","I","H","","H","M","T","L","B","M","S","A","E","R","W","K","C","Y"], prevAnswers: [{"word":"BLACKSMITH","pct":4},{"word":"CASTLE","pct":21},{"word":"FIBER","pct":27},{"word":"BLEAK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0220", letters: ["A","H","K","S","I","C","U","F","P","N","K","O","L","H","B","C","O","B","T","D","W","Y"], prevAnswers: [{"word":"BLOCKCHAIN","pct":4},{"word":"CHAIN","pct":21},{"word":"BLOCK","pct":27},{"word":"HACK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0221", letters: ["B","E","N","L","I","R","","P","I","C","C","K","A","K","W","D","S","M","O","R","K","Y"], prevAnswers: [{"word":"BRICKWORKS","pct":4},{"word":"CIRCLE","pct":21},{"word":"TRICK","pct":27},{"word":"BEND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0222", letters: ["A","L","L","E","H","C","S","G","N","O","D","E","W","P","K","N","L","T","R","M","Y","V"], prevAnswers: [{"word":"CHALLENGES","pct":4},{"word":"CHALLENGE","pct":21},{"word":"CHOP","pct":27},{"word":"HALL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0223", letters: ["R","U","C","F","B","","E","K","N","P","C","H","P","S","L","T","W","O","Y","E","N","I"], prevAnswers: [{"word":"CHECKPOINT","pct":4},{"word":"REPLY","pct":21},{"word":"BRACE","pct":27},{"word":"RUDE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0224", letters: ["H","U","E","F","P","E","L","V","I","I","O","L","T","V","S","C","E","C","D","W","Y","K"], prevAnswers: [{"word":"COLLECTIVE","pct":4},{"word":"SOLVE","pct":21},{"word":"FELL","pct":27},{"word":"HULL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0225", letters: ["T","N","E","D","W","","M","V","T","N","A","T","I","R","U","G","O","M","B","E","C","M"], prevAnswers: [{"word":"COMMITMENT","pct":4},{"word":"ENGAGE","pct":21},{"word":"WOMEN","pct":27},{"word":"GAUGE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0226", letters: ["D","F","B","C","E","N","M","O","I","R","W","Y","M","T","N","E","P","L","K","O","M","E"], prevAnswers: [{"word":"COMPLEMENT","pct":4},{"word":"TREND","pct":21},{"word":"MONEY","pct":27},{"word":"COMB","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0227", letters: ["U","O","G","V","T","N","P","","C","E","N","M","O","P","T","S","H","L","F","B","E","N"], prevAnswers: [{"word":"COMPONENTS","pct":4},{"word":"SPOUT","pct":21},{"word":"GONE","pct":27},{"word":"GONE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0228", letters: ["F","P","K","I","R","T","I","D","L","W","S","D","E","C","O","N","E","R","Y","V","O","S"], prevAnswers: [{"word":"CONSIDERED","pct":4},{"word":"CONSIDER","pct":21},{"word":"SNEER","pct":27},{"word":"IDLE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0229", letters: ["F","P","K","O","S","","L","T","W","Y","S","V","N","O","N","I","T","E","C","T","S","N"], prevAnswers: [{"word":"CONSISTENT","pct":4},{"word":"FELT","pct":21},{"word":"PELT","pct":27},{"word":"FELT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0230", letters: ["O","C","O","U","N","I","N","U","S","T","G","B","T","N","U","H","L","F","P","K","I","C"], prevAnswers: [{"word":"CONTINUOUS","pct":4},{"word":"COIN","pct":21},{"word":"SUNG","pct":27},{"word":"COIN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0231", letters: ["O","M","E","B","C","A","D","","O","R","T","D","N","L","I","F","P","K","A","C","R","M"], prevAnswers: [{"word":"DEMOCRATIC","pct":4},{"word":"MELON","pct":21},{"word":"CAMEL","pct":27},{"word":"MEAD","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0232", letters: ["B","E","N","D","N","O","A","C","W","I","S","D","Y","K","S","E","I","R","E","R","P","T"], prevAnswers: [{"word":"DEPRESSION","pct":4},{"word":"RIDER","pct":21},{"word":"BEND","pct":27},{"word":"BEND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0233", letters: ["E","O","R","B","L","","B","N","D","Y","H","O","U","K","A","T","E","H","U","S","R","A"], prevAnswers: [{"word":"EARTHBOUND","pct":4},{"word":"HEARTS","pct":21},{"word":"BROIL","pct":27},{"word":"ONLY","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0234", letters: ["E","N","O","I","O","L","S","U","T","D","W","L","A","Y","K","A","A","N","V","R","V","E"], prevAnswers: [{"word":"EVALUATION","pct":4},{"word":"NATION","pct":21},{"word":"SOUL","pct":27},{"word":"SOUL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0235", letters: ["X","E","P","K","E","C","L","","A","C","E","L","S","E","N","D","W","Y","V","N","T","I"], prevAnswers: [{"word":"EXCELLENCE","pct":4},{"word":"KILLED","pct":21},{"word":"SAMPLE","pct":27},{"word":"EXEC","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0236", letters: ["E","H","I","N","B","X","I","B","S","E","T","L","M","G","I","Y","K","I","N","G","O","D"], prevAnswers: [{"word":"EXHIBITING","pct":4},{"word":"EXHIBIT","pct":21},{"word":"TYING","pct":27},{"word":"HILT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0237", letters: ["T","R","O","S","K","A","","W","Y","E","E","E","H","R","H","A","K","N","B","T","R","L"], prevAnswers: [{"word":"HEARTBREAK","pct":4},{"word":"THREAT","pct":21},{"word":"TRACE","pct":27},{"word":"SOLAR","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0238", letters: ["A","T","N","S","D","A","I","U","F","V","N","O","P","O","N","T","I","E","N","I","R","C"], prevAnswers: [{"word":"INNOVATION","pct":4},{"word":"NOTICE","pct":21},{"word":"DATA","pct":27},{"word":"DATA","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0239", letters: ["R","B","N","O","I","","F","R","T","P","T","H","H","U","N","D","B","A","L","U","O","W"], prevAnswers: [{"word":"NORTHBOUND","pct":4},{"word":"BRIEF","pct":21},{"word":"NORTH","pct":27},{"word":"RIOT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0240", letters: ["R","E","M","T","C","M","V","O","H","O","I","N","U","Y","K","G","I","C","V","S","L","F"], prevAnswers: [{"word":"OVERCOMING","pct":4},{"word":"VIGIL","pct":21},{"word":"SLING","pct":27},{"word":"MEMO","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0241", letters: ["L","O","L","R","I","A","D","E","V","H","E","","O","G","D","B","A","D","T","S","U","F"], prevAnswers: [{"word":"OVERLOADED","pct":4},{"word":"REVEAL","pct":21},{"word":"LEADER","pct":27},{"word":"LADEN","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0242", letters: ["P","D","W","Y","K","A","O","S","M","S","T","N","H","R","E","M","U","P","G","V","L","A"], prevAnswers: [{"word":"PALMERSTON","pct":4},{"word":"PASTE","pct":21},{"word":"PAST","pct":27},{"word":"PAST","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0243", letters: ["P","I","O","T","H","R","E","N","C","I","E","","B","N","E","N","P","S","G","L","M","Y"], prevAnswers: [{"word":"PIONEERING","pct":4},{"word":"PREVENT","pct":21},{"word":"PIECE","pct":27},{"word":"PIER","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0244", letters: ["H","M","G","V","T","P","T","I","C","R","U","I","S","E","C","A","O","N","L","F","B","E"], prevAnswers: [{"word":"PRECAUTION","pct":4},{"word":"VISION","pct":21},{"word":"PURE","pct":27},{"word":"PURE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0245", letters: ["O","I","U","F","B","C","P","","S","N","P","L","E","S","I","R","C","A","D","W","Y","K"], prevAnswers: [{"word":"PRINCIPLES","pct":4},{"word":"PRINCIPLE","pct":21},{"word":"POLES","pct":27},{"word":"FUEL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0246", letters: ["D","M","G","Y","C","E","K","N","I","O","S","S","I","R","R","P","P","H","U","F","V","O"], prevAnswers: [{"word":"PROCESSING","pct":4},{"word":"PROCESS","pct":21},{"word":"DESK","pct":27},{"word":"DESK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0247", letters: ["U","E","F","P","K","N","","S","A","O","C","W","Y","T","S","E","N","I","V","T","R","H"], prevAnswers: [{"word":"RHINESTONE","pct":4},{"word":"STONER","pct":21},{"word":"ESSAY","pct":27},{"word":"PASTE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0248", letters: ["D","R","F","S","P","O","K","H","C","O","W","O","R","W","T","L","O","N","M","Y","V","H"], prevAnswers: [{"word":"SCHOOLWORK","pct":4},{"word":"SCHOOL","pct":21},{"word":"DROP","pct":27},{"word":"DROP","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0249", letters: ["A","E","U","F","D","H","","L","S","A","Y","E","D","P","I","P","E","C","W","B","E","H"], prevAnswers: [{"word":"SLEEPYHEAD","pct":4},{"word":"FULLY","pct":21},{"word":"AHEAD","pct":27},{"word":"USED","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0250", letters: ["W","Y","K","D","J","D","E","O","N","O","R","B","U","S","U","T","H","M","G","V","O","H"], prevAnswers: [{"word":"SOUTHBOUND","pct":4},{"word":"DOUBT","pct":21},{"word":"SOUTH","pct":27},{"word":"DEBT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0251", letters: ["F","V","T","S","G","","G","L","W","I","N","T","B","R","P","M","I","E","S","E","N","M"], prevAnswers: [{"word":"SPRINGTIME","pct":4},{"word":"GLINT","pct":21},{"word":"GIANT","pct":27},{"word":"FAIR","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0252", letters: ["G","T","L","V","T","A","B","E","H","B","T","C","S","U","H","O","L","F","P","E","O","C"], prevAnswers: [{"word":"TABLECLOTH","pct":4},{"word":"TABLE","pct":21},{"word":"SLOTH","pct":27},{"word":"ABLE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0253", letters: ["P","K","U","R","A","","T","O","N","I","D","W","A","Y","V","T","T","M","N","M","N","E"], prevAnswers: [{"word":"TOURNAMENT","pct":4},{"word":"ROUTE","pct":21},{"word":"NOTED","pct":27},{"word":"PACK","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0254", letters: ["P","E","D","R","U","A","N","E","H","W","Y","U","R","K","N","C","C","O","T","R","E","V"], prevAnswers: [{"word":"UNDERCOVER","pct":4},{"word":"RERUN","pct":21},{"word":"ROVER","pct":27},{"word":"PANE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0255", letters: ["Y","V","I","U","O","","E","S","M","G","N","S","N","B","E","E","U","I","S","A","U","Q"], prevAnswers: [{"word":"UNIQUENESS","pct":4},{"word":"UNIQUE","pct":21},{"word":"VERGE","pct":27},{"word":"VIEW","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0256", letters: ["E","N","D","T","L","W","S","Y","K","U","I","H","E","I","Q","N","A","D","H","V","R","V"], prevAnswers: [{"word":"VANQUISHED","pct":4},{"word":"WEND","pct":21},{"word":"SHIN","pct":27},{"word":"WEND","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0257", letters: ["K","O","Y","L","V","","E","B","L","O","L","L","A","I","H","C","W","P","A","Y","T","S"], prevAnswers: [{"word":"VOLLEYBALL","pct":4},{"word":"VALLEY","pct":21},{"word":"BELOW","pct":27},{"word":"KILL","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0258", letters: ["T","R","W","S","U","G","R","R","B","W","E","C","O","E","A","T","O","L","O","C","N","D"], prevAnswers: [{"word":"WATERCOLOR","pct":4},{"word":"WATER","pct":21},{"word":"COLOR","pct":27},{"word":"GREW","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0259", letters: ["S","M","T","S","R","","C","G","B","E","L","O","N","N","W","E","M","I","C","G","H","U"], prevAnswers: [{"word":"WELCOMINGS","pct":4},{"word":"WELCOME","pct":21},{"word":"GOLDEN","pct":27},{"word":"MELON","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0260", letters: ["D","P","A","S","U","G","R","V","R","W","O","E","K","T","O","D","E","C","N","W","P","L"], prevAnswers: [{"word":"WOODPECKER","pct":4},{"word":"GRAVE","pct":21},{"word":"PAVE","pct":27},{"word":"PAVE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0261", letters: ["S","A","W","D","S","L","","O","I","U","C","R","G","B","A","D","L","R","C","T","H","F"], prevAnswers: [{"word":"WORLDCLASS","pct":4},{"word":"AVOID","pct":21},{"word":"CLASS","pct":27},{"word":"SALE","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0262", letters: ["H","N","S","S","A","I","E","W","C","F","H","O","P","K","O","T","R","S","W","L","M","Y"], prevAnswers: [{"word":"WORTHINESS","pct":4},{"word":"THEORY","pct":21},{"word":"WORT","pct":27},{"word":"WORT","pct":21},{"word":"4 or lower","pct":27}] },
  { id: "p0263", letters: ["I","S","N","P","B","L","O","","U","I","I","P","R","S","T","F","S","E","E","I","V","T"], prevAnswers: [{"word":"RESPONSIBILITIES","pct":1},{"word":"SNARE","pct":22},{"word":"SLOPE","pct":28},{"word":"PUPIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0264", letters: ["W","H","E","U","A","E","L","G","B","R","E","O","O","T","E","E","H","W","D","N","S","S"], prevAnswers: [{"word":"WHOLEHEARTEDNESS","pct":1},{"word":"WHOLEHEARTED","pct":22},{"word":"WHERE","pct":28},{"word":"WART","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0265", letters: ["C","O","C","I","H","","S","I","T","A","R","R","S","W","A","T","E","Y","V","C","T","S"], prevAnswers: [{"word":"CHARACTERISTICS","pct":1},{"word":"CHARACTER","pct":22},{"word":"ASSIST","pct":28},{"word":"CHARM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0266", letters: ["N","D","O","M","Y","I","U","V","A","I","T","S","N","A","R","S","I","G","L","I","S","L"], prevAnswers: [{"word":"INDUSTRIALISING","pct":1},{"word":"SLING","pct":22},{"word":"TINY","pct":28},{"word":"DUST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0267", letters: ["L","I","S","M","N","A","R","","W","O","P","O","B","I","E","E","F","I","S","S","R","F"], prevAnswers: [{"word":"PROFESSIONALISM","pct":1},{"word":"PROFESSIONAL","pct":22},{"word":"PRAISE","pct":28},{"word":"REPAIR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0268", letters: ["C","T","A","Z","W","Y","I","R","I","N","O","A","D","V","A","S","D","N","D","T","A","N"], prevAnswers: [{"word":"STANDARDIZATION","pct":1},{"word":"STANDARD","pct":22},{"word":"SOAR","pct":28},{"word":"SOAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0269", letters: ["F","P","H","M","B","M","L","S","E","E","O","I","N","O","","C","C","T","C","R","A","W"], prevAnswers: [{"word":"ACCOMPLISHMENT","pct":1},{"word":"ACCOMPLISH","pct":22},{"word":"SLICE","pct":28},{"word":"PLOD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0270", letters: ["W","T","D","A","Y","A","I","M","V","R","O","I","A","T","N","N","N","D","S","I","H","U"], prevAnswers: [{"word":"ADMINISTRATION","pct":1},{"word":"MINOR","pct":22},{"word":"TRAIT","pct":28},{"word":"WART","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0271", letters: ["T","A","A","L","I","C","","S","C","O","I","S","P","N","K","F","I","O","S","F","R","M"], prevAnswers: [{"word":"CLASSIFICATION","pct":1},{"word":"ACTIONS","pct":22},{"word":"STATION","pct":28},{"word":"NATION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0272", letters: ["F","Z","N","B","E","I","A","O","O","R","L","T","I","G","S","A","R","C","E","N","E","W"], prevAnswers: [{"word":"GENERALIZATION","pct":1},{"word":"REALIZATION","pct":22},{"word":"GENERAL","pct":28},{"word":"FIRE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0273", letters: ["F","I","C","Y","V","I","T","A","T","T","I","N","I","N","E","O","","H","I","D","U","G"], prevAnswers: [{"word":"IDENTIFICATION","pct":1},{"word":"FICTION","pct":22},{"word":"ACTION","pct":28},{"word":"CYAN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0274", letters: ["M","I","Y","K","L","P","A","O","N","E","P","I","N","M","E","R","T","U","N","T","A","G"], prevAnswers: [{"word":"IMPLEMENTATION","pct":1},{"word":"APPLE","pct":22},{"word":"MERIT","pct":28},{"word":"PAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0275", letters: ["M","M","E","V","T","O","R","N","D","I","C","E","A","D","","U","I","T","G","B","O","N"], prevAnswers: [{"word":"RECOMMENDATION","pct":1},{"word":"NATION","pct":22},{"word":"MOTIF","pct":28},{"word":"MORE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0276", letters: ["A","B","K","A","N","H","I","L","I","L","E","R","T","D","N","O","A","M","G","I","T","V"], prevAnswers: [{"word":"REHABILITATION","pct":1},{"word":"RATIO","pct":22},{"word":"ATONE","pct":28},{"word":"KILT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0277", letters: ["K","A","A","N","P","T","T","","N","N","M","I","O","G","E","S","R","E","V","E","R","P"], prevAnswers: [{"word":"REPRESENTATION","pct":1},{"word":"PRESENTATION","pct":22},{"word":"PROMISE","pct":28},{"word":"ACTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0278", letters: ["T","I","N","H","I","C","E","O","L","T","A","T","I","W","S","I","P","O","Y","K","H","S"], prevAnswers: [{"word":"SOPHISTICATION","pct":1},{"word":"STATION","pct":22},{"word":"ATONE","pct":28},{"word":"NOTE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0279", letters: ["I","C","P","O","S","U","","W","V","S","T","Y","T","E","C","I","L","I","P","T","B","I"], prevAnswers: [{"word":"SUSCEPTIBILITY","pct":1},{"word":"JUSTICE","pct":22},{"word":"CAUSE","pct":28},{"word":"CURT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0280", letters: ["O","S","F","O","R","A","N","S","R","T","F","D","M","U","Y","N","A","T","V","A","O","I"], prevAnswers: [{"word":"TRANSFORMATION","pct":1},{"word":"FORMATION","pct":22},{"word":"SOAR","pct":28},{"word":"SORT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0281", letters: ["O","L","T","A","N","","E","P","I","Y","L","O","R","M","A","P","R","G","K","P","A","R"], prevAnswers: [{"word":"APPROPRIATELY","pct":1},{"word":"REPAIR","pct":22},{"word":"PROPER","pct":28},{"word":"LOWLY","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0282", letters: ["R","Y","S","C","F","V","Y","E","T","I","O","L","T","P","R","X","M","A","P","A","I","M"], prevAnswers: [{"word":"APPROXIMATELY","pct":1},{"word":"ROLES","pct":22},{"word":"VOLE","pct":28},{"word":"VOLT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0283", letters: ["I","T","A","U","O","A","","H","T","N","Z","O","U","D","M","I","R","G","B","T","I","R"], prevAnswers: [{"word":"AUTHORIZATION","pct":1},{"word":"ACTION","pct":22},{"word":"OPTION","pct":28},{"word":"TAUT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0284", letters: ["M","E","R","A","L","W","P","B","I","G","T","I","N","N","I","M","S","T","R","B","R","O"], prevAnswers: [{"word":"BRAINSTORMING","pct":1},{"word":"STORM","pct":22},{"word":"PINT","pct":28},{"word":"RAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0285", letters: ["A","T","U","H","N","S","","I","Y","C","M","R","C","E","V","U","C","T","S","N","C","O"], prevAnswers: [{"word":"CIRCUMSTANCES","pct":1},{"word":"STRICT","pct":22},{"word":"SPICY","pct":28},{"word":"ATOM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0286", letters: ["B","B","H","M","O","A","G","V","A","R","L","L","O","A","T","I","N","C","C","O","N","S"], prevAnswers: [{"word":"COLLABORATION","pct":1},{"word":"ACTIONS","pct":22},{"word":"AORTA","pct":28},{"word":"BOAR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0287", letters: ["C","E","R","W","M","O","N","","V","M","N","O","I","A","U","I","A","T","N","M","C","H"], prevAnswers: [{"word":"COMMUNICATION","pct":1},{"word":"BONER","pct":22},{"word":"HONER","pct":28},{"word":"CONE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0288", letters: ["M","P","N","R","O","C","A","W","V","I","T","A","L","L","B","I","Y","E","I","T","Y","H"], prevAnswers: [{"word":"COMPATIBILITY","pct":1},{"word":"PAWN","pct":22},{"word":"AWAY","pct":28},{"word":"PAWN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0289", letters: ["E","L","P","H","M","","M","B","E","E","C","O","O","L","N","Y","S","U","T","A","R","Y"], prevAnswers: [{"word":"COMPLEMENTARY","pct":1},{"word":"COMPLEMENT","pct":22},{"word":"ELEMENT","pct":28},{"word":"MOMENT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0290", letters: ["E","I","S","N","L","V","M","E","F","B","O","P","H","O","S","C","R","E","C","V","D","W"], prevAnswers: [{"word":"COMPREHENSIVE","pct":1},{"word":"SCOPE","pct":22},{"word":"OPEN","pct":28},{"word":"MOVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0291", letters: ["U","R","F","P","K","T","A","N","O","N","","T","I","N","E","C","N","S","L","W","C","O"], prevAnswers: [{"word":"CONCENTRATION","pct":1},{"word":"STATION","pct":22},{"word":"CONCERN","pct":28},{"word":"CONTAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0292", letters: ["M","P","K","C","O","R","F","O","S","I","L","Y","N","O","T","A","F","I","N","R","U","G"], prevAnswers: [{"word":"CONFIGURATION","pct":1},{"word":"RATIO","pct":22},{"word":"FROM","pct":28},{"word":"RIOT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0293", letters: ["N","I","S","G","O","I","D","N","C","T","E","","O","E","A","R","O","S","C","U","F","P"], prevAnswers: [{"word":"CONSIDERATION","pct":1},{"word":"CONSIDER","pct":22},{"word":"SOLDIER","pct":28},{"word":"INSIDE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0294", letters: ["F","S","N","O","P","T","R","I","N","C","T","I","T","C","O","N","B","U","E","D","W","Y"], prevAnswers: [{"word":"CONTRIBUTIONS","pct":1},{"word":"TRIO","pct":22},{"word":"BIND","pct":28},{"word":"TRIO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0295", letters: ["Y","K","I","G","R","","A","D","N","U","R","N","I","O","R","E","O","F","C","V","S","P"], prevAnswers: [{"word":"CORRESPONDING","pct":1},{"word":"READING","pct":22},{"word":"NATURE","pct":28},{"word":"YARN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0296", letters: ["K","D","A","N","D","E","G","U","Y","M","N","G","V","O","I","S","I","T","C","R","A","T"], prevAnswers: [{"word":"DEMOCRATISING","pct":1},{"word":"CRIME","pct":22},{"word":"AGED","pct":28},{"word":"DEMO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0297", letters: ["K","A","E","N","C","","D","M","U","N","G","Y","O","I","V","T","T","C","Z","I","A","R"], prevAnswers: [{"word":"DEMOCRATIZING","pct":1},{"word":"LADEN","pct":22},{"word":"TRAIT","pct":28},{"word":"KING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0298", letters: ["I","O","N","K","T","A","R","T","A","N","D","D","S","L","W","E","O","N","Y","V","M","T"], prevAnswers: [{"word":"DEMONSTRATION","pct":1},{"word":"NATION","pct":22},{"word":"RATIO","pct":28},{"word":"ARTS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0299", letters: ["K","O","I","A","N","N","","T","L","W","M","N","A","Y","R","I","D","V","T","E","T","E"], prevAnswers: [{"word":"DETERMINATION","pct":1},{"word":"TERMINAL","pct":22},{"word":"INITIAL","pct":28},{"word":"NATION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0300", letters: ["E","D","E","N","D","A","I","H","S","L","T","N","I","W","P","S","G","U","K","I","I","D"], prevAnswers: [{"word":"DISTINGUISHED","pct":1},{"word":"IDEAL","pct":22},{"word":"PLAIN","pct":28},{"word":"DEAD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0301", letters: ["O","U","M","A","D","C","N","E","N","U","T","","W","Y","A","V","T","I","T","I","O","N"], prevAnswers: [{"word":"DOCUMENTATION","pct":1},{"word":"STATION","pct":22},{"word":"OUNCE","pct":28},{"word":"MANE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0302", letters: ["T","S","S","S","V","H","L","E","E","E","W","V","N","F","F","P","I","E","E","C","T","N"], prevAnswers: [{"word":"EFFECTIVENESS","pct":1},{"word":"EFFECT","pct":22},{"word":"LESS","pct":28},{"word":"SEEN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0303", letters: ["N","T","N","U","I","E","M","G","D","","N","E","A","B","E","C","U","R","E","O","O","C"], prevAnswers: [{"word":"ENCOURAGEMENT","pct":1},{"word":"INTENSE","pct":22},{"word":"INTEND","pct":28},{"word":"TEND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0304", letters: ["D","O","P","Y","C","L","E","A","S","Y","D","A","U","C","N","I","F","V","A","E","N","C"], prevAnswers: [{"word":"ENCYCLOPAEDIA","pct":1},{"word":"ENCYCLOPEDIA","pct":22},{"word":"CANDY","pct":28},{"word":"DOPE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0305", letters: ["G","I","E","H","H","","L","N","S","T","E","N","C","E","N","M","T","F","B","E","N","M"], prevAnswers: [{"word":"ENLIGHTENMENT","pct":1},{"word":"ELEMENT","pct":22},{"word":"INTENT","pct":28},{"word":"LISTEN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0306", letters: ["L","T","O","C","F","A","S","E","P","B","L","E","I","H","S","I","N","B","H","M","E","T"], prevAnswers: [{"word":"ESTABLISHMENT","pct":1},{"word":"TALENT","pct":22},{"word":"TABLE","pct":28},{"word":"LAST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0307", letters: ["D","H","U","F","R","O","A","R","B","D","","T","E","I","N","Y","X","O","A","R","R","S"], prevAnswers: [{"word":"EXTRAORDINARY","pct":1},{"word":"ORDINARY","pct":22},{"word":"HORDE","pct":28},{"word":"FRAUD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0308", letters: ["G","O","D","W","R","I","B","G","A","A","Z","I","N","R","I","L","F","F","T","I","M","A"], prevAnswers: [{"word":"FAMILIARIZING","pct":1},{"word":"FAMILIAR","pct":22},{"word":"RAIL","pct":28},{"word":"RAIL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0309", letters: ["G","L","E","D","M","O","N","","K","A","B","O","O","L","S","I","T","B","I","S","A","R"], prevAnswers: [{"word":"GLOBALISATION","pct":1},{"word":"EMOTION","pct":22},{"word":"MOTION","pct":28},{"word":"LEMON","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0310", letters: ["S","D","M","N","Y","G","I","O","K","L","L","Z","I","O","B","A","A","T","O","L","E","R"], prevAnswers: [{"word":"GLOBALIZATION","pct":1},{"word":"REALIZATION","pct":22},{"word":"RATIO","pct":28},{"word":"DILL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0311", letters: ["L","W","Y","N","V","","N","R","O","M","H","D","I","O","R","A","A","T","N","I","S","U"], prevAnswers: [{"word":"HARMONISATION","pct":1},{"word":"NORMAL","pct":22},{"word":"CHARM","pct":28},{"word":"LAND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0312", letters: ["C","I","W","B","T","P","T","I","H","S","P","A","L","G","O","H","I","D","N","I","S","M"], prevAnswers: [{"word":"HOSPITALISING","pct":1},{"word":"WILD","pct":22},{"word":"SPIT","pct":28},{"word":"WILD","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0313", letters: ["U","I","L","A","F","V","Z","P","T","","I","S","I","N","G","N","O","L","E","C","H","W"], prevAnswers: [{"word":"HOSPITALIZING","pct":1},{"word":"LIVING","pct":22},{"word":"LOSING","pct":28},{"word":"LIVE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0314", letters: ["N","E","C","I","T","D","W","D","N","L","N","E","B","Y","E","E","P","N","Y","O","R","M"], prevAnswers: [{"word":"INDEPENDENTLY","pct":1},{"word":"INDEPENDENT","pct":22},{"word":"DEPEND","pct":28},{"word":"WENT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0315", letters: ["A","I","G","B","L","R","","N","I","I","T","D","I","S","R","S","U","U","E","C","F","P"], prevAnswers: [{"word":"INDUSTRIALISE","pct":1},{"word":"INDUSTRY","pct":22},{"word":"STRONG","pct":28},{"word":"REIGN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0316", letters: ["W","N","I","Z","P","K","G","A","I","N","A","N","L","I","T","E","R","R","O","D","M","Y"], prevAnswers: [{"word":"INTERNALIZING","pct":1},{"word":"INANE","pct":22},{"word":"MERRY","pct":28},{"word":"GAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0317", letters: ["F","B","T","I","G","","T","C","W","E","S","I","P","V","N","A","G","N","I","T","I","O"], prevAnswers: [{"word":"INVESTIGATION","pct":1},{"word":"NEGOTIATION","pct":22},{"word":"DESIGN","pct":28},{"word":"CITIES","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0318", letters: ["U","J","P","K","S","O","S","I","N","T","I","T","O","F","F","C","A","R","M","I","Y","V"], prevAnswers: [{"word":"JUSTIFICATION","pct":1},{"word":"FICTION","pct":22},{"word":"STIFF","pct":28},{"word":"JUST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0319", letters: ["V","I","G","T","I","T","L","E","L","M","I","","C","A","F","S","N","B","T","I","O","E"], prevAnswers: [{"word":"LEGITIMATIONS","pct":1},{"word":"LESSON","pct":22},{"word":"GLEAN","pct":28},{"word":"TIGER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0320", letters: ["F","U","N","K","A","I","A","C","F","C","O","M","D","T","U","Y","G","V","R","I","N","A"], prevAnswers: [{"word":"MANUFACTURING","pct":1},{"word":"COURT","pct":22},{"word":"CURT","pct":28},{"word":"FACT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0321", letters: ["E","I","D","R","M","","A","N","F","P","R","T","I","K","E","S","M","S","A","D","N","U"], prevAnswers: [{"word":"MISUNDERSTAND","pct":1},{"word":"EMPIRE","pct":22},{"word":"HATRED","pct":28},{"word":"ARREST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0322", letters: ["K","O","N","G","N","A","S","I","E","O","L","I","S","D","I","T","A","M","Y","V","A","N"], prevAnswers: [{"word":"NATIONALISING","pct":1},{"word":"NATIONAL","pct":22},{"word":"ALSO","pct":28},{"word":"ALSO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0323", letters: ["K","O","N","A","N","T","I","I","L","A","","Z","L","S","G","I","D","M","Y","N","V","A"], prevAnswers: [{"word":"NATIONALIZING","pct":1},{"word":"RATIONALIZING","pct":22},{"word":"NOTHING","pct":28},{"word":"ACTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0324", letters: ["O","S","A","M","D","W","M","L","Y","N","O","R","I","V","A","N","S","A","N","O","I","T"], prevAnswers: [{"word":"NORMALISATION","pct":1},{"word":"NORMAL","pct":22},{"word":"WORST","pct":28},{"word":"DOWN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0325", letters: ["S","E","I","T","I","","O","I","A","L","P","R","N","W","O","P","T","U","Y","K","O","S"], prevAnswers: [{"word":"OPPORTUNITIES","pct":1},{"word":"PROMISE","pct":22},{"word":"POLICE","pct":28},{"word":"STROKE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0326", letters: ["I","C","N","O","S","L","W","A","I","T","Y","P","T","R","I","C","I","K","A","P","O","R"], prevAnswers: [{"word":"PARTICIPATION","pct":1},{"word":"PARTLY","pct":22},{"word":"STRAP","pct":28},{"word":"STIR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0327", letters: ["R","P","P","E","D","","Y","R","K","N","G","O","S","I","Z","I","L","O","S","G","A","N"], prevAnswers: [{"word":"PERSONALIZING","pct":1},{"word":"PERSON","pct":22},{"word":"RANG","pct":28},{"word":"RANG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0328", letters: ["L","I","L","A","I","B","R","P","U","T","I","O","F","I","V","S","S","T","E","S","S","B"], prevAnswers: [{"word":"POSSIBILITIES","pct":1},{"word":"POSITIVE","pct":22},{"word":"POST","pct":28},{"word":"POST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0329", letters: ["I","U","S","D","F","L","","B","T","I","A","U","Q","C","A","T","I","C","E","I","O","N"], prevAnswers: [{"word":"QUALIFICATION","pct":1},{"word":"STATION","pct":22},{"word":"NATION","pct":28},{"word":"SULK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0330", letters: ["A","N","O","G","L","S","I","D","M","I","I","T","Y","V","N","A","A","R","N","G","L","H"], prevAnswers: [{"word":"RATIONALISING","pct":1},{"word":"NATIONAL","pct":22},{"word":"NATION","pct":28},{"word":"SING","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0331", letters: ["R","E","D","M","A","I","","V","A","T","O","N","G","H","A","N","G","N","L","I","Z","I"], prevAnswers: [{"word":"RATIONALIZING","pct":1},{"word":"RAISED","pct":22},{"word":"NATION","pct":28},{"word":"REIGN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0332", letters: ["E","E","S","N","M","R","A","T","G","V","B","T","S","D","L","O","D","U","I","S","H","E"], prevAnswers: [{"word":"REESTABLISHED","pct":1},{"word":"ESTABLISHED","pct":22},{"word":"SOLID","pct":28},{"word":"EAST","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0333", letters: ["N","T","H","U","Y","E","E","","T","M","R","I","N","E","R","F","N","M","C","O","S","L"], prevAnswers: [{"word":"REINFORCEMENT","pct":1},{"word":"CORRECT","pct":22},{"word":"FINGER","pct":28},{"word":"THERE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0334", letters: ["M","G","V","S","T","I","H","P","P","T","O","N","I","A","I","R","S","H","L","E","U","F"], prevAnswers: [{"word":"RELATIONSHIPS","pct":1},{"word":"RELATIONS","pct":22},{"word":"SNORE","pct":28},{"word":"SPIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0335", letters: ["C","F","P","E","I","E","Z","","A","N","I","U","L","O","I","T","V","O","D","W","R","E"], prevAnswers: [{"word":"REVOLUTIONIZE","pct":1},{"word":"VOLUME","pct":22},{"word":"PEARL","pct":28},{"word":"PEAL","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0336", letters: ["I","H","O","S","S","W","P","Y","K","T","A","T","A","S","I","C","E","C","R","M","G","D"], prevAnswers: [{"word":"SOPHISTICATED","pct":1},{"word":"SKATE","pct":22},{"word":"DECAY","pct":28},{"word":"SWAT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0337", letters: ["W","B","E","P","E","","C","S","S","C","I","P","D","A","I","F","M","Y","T","I","O","N"], prevAnswers: [{"word":"SPECIFICATION","pct":1},{"word":"SPECIFIC","pct":22},{"word":"SPICY","pct":28},{"word":"BLEW","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0338", letters: ["G","W","B","E","N","I","M","O","D","I","Z","I","T","S","T","E","M","A","Y","S","U","P"], prevAnswers: [{"word":"SYSTEMATIZING","pct":1},{"word":"SYSTEM","pct":22},{"word":"MUSTY","pct":28},{"word":"MODE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0339", letters: ["P","A","G","K","A","T","N","N","S","U","S","D","I","H","","R","E","Y","U","N","D","V"], prevAnswers: [{"word":"UNDERSTANDING","pct":1},{"word":"HUNDREDS","pct":22},{"word":"PAUSE","pct":28},{"word":"TAUT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0340", letters: ["V","U","E","T","N","N","L","U","B","O","F","B","H","R","M","A","T","P","G","E","T","E"], prevAnswers: [{"word":"UNFORGETTABLE","pct":1},{"word":"FORGE","pct":22},{"word":"FABLE","pct":28},{"word":"NORM","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0341", letters: ["R","T","U","N","V","O","U","A","T","T","F","N","E","N","","I","L","D","W","B","Y","E"], prevAnswers: [{"word":"UNFORTUNATELY","pct":1},{"word":"UNFIT","pct":22},{"word":"STOUT","pct":28},{"word":"ROUT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0342", letters: ["R","E","C","B","E","P","R","E","D","U","N","U","E","O","H","W","T","N","Y","K","E","D"], prevAnswers: [{"word":"UNPRECEDENTED","pct":1},{"word":"RERUN","pct":22},{"word":"BEEN","pct":28},{"word":"BEEN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0343", letters: ["K","O","S","V","R","","T","N","G","Z","A","I","O","I","L","A","V","I","B","A","U","S"], prevAnswers: [{"word":"VISUALIZATION","pct":1},{"word":"ACTIONS","pct":22},{"word":"OPTION","pct":28},{"word":"NATION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0344", letters: ["A","R","Y","O","D","W","I","T","Y","P","B","L","I","T","R","A","L","U","N","E","N","V"], prevAnswers: [{"word":"VULNERABILITY","pct":1},{"word":"REALITY","pct":22},{"word":"WILT","pct":28},{"word":"WILT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0345", letters: ["G","N","S","I","C","A","I","L","A","P","I","T","A","S","","O","D","W","B","T","N","C"], prevAnswers: [{"word":"CAPITALISING","pct":2},{"word":"SLING","pct":22},{"word":"PILOT","pct":27},{"word":"GAIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0346", letters: ["N","I","I","R","G","A","S","O","O","C","T","E","G","S","G","L","W","P","K","A","N","C"], prevAnswers: [{"word":"CATEGORISING","pct":2},{"word":"CASTLE","pct":22},{"word":"STAIN","pct":27},{"word":"RISE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0347", letters: ["U","S","S","H","F","L","N","E","C","R","","I","W","E","C","P","K","S","E","H","L","F"], prevAnswers: [{"word":"CHEERFULNESS","pct":2},{"word":"SLAIN","pct":22},{"word":"SNARE","pct":27},{"word":"FLARE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0348", letters: ["R","Y","I","H","D","M","E","P","Y","B","R","O","A","E","H","O","G","R","H","C","G","T"], prevAnswers: [{"word":"CHOREOGRAPHY","pct":2},{"word":"DRYER","pct":22},{"word":"GRAPE","pct":27},{"word":"PIER","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0349", letters: ["S","I","C","M","P","T","O","O","P","D","A","N","E","W","","S","N","K","A","N","M","R"], prevAnswers: [{"word":"COMPENSATION","pct":2},{"word":"STATION","pct":22},{"word":"STATIC","pct":27},{"word":"STAB","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0350", letters: ["R","N","O","E","D","S","W","C","Y","R","T","V","O","U","S","N","O","U","C","T","I","H"], prevAnswers: [{"word":"CONSTRUCTION","pct":2},{"word":"OWNS","pct":22},{"word":"RUST","pct":27},{"word":"OWNS","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0351", letters: ["Y","S","T","N","L","","E","M","O","V","T","P","C","N","M","O","Y","I","D","R","A","R"], prevAnswers: [{"word":"CONTEMPORARY","pct":2},{"word":"TEMPORARY","pct":22},{"word":"CONTEXT","pct":27},{"word":"SECTOR","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0352", letters: ["R","S","A","T","V","E","N","O","I","L","V","N","O","W","Y","K","A","C","N","C","D","M"], prevAnswers: [{"word":"CONVERSATION","pct":2},{"word":"NATION","pct":22},{"word":"ATONE","pct":27},{"word":"RELY","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0353", letters: ["C","E","L","W","O","O","I","","V","R","D","N","A","N","O","T","A","C","N","I","H","M"], prevAnswers: [{"word":"COORDINATION","pct":2},{"word":"NATION","pct":22},{"word":"WHILE","pct":27},{"word":"GLINT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0354", letters: ["R","P","O","R","O","C","O","T","A","H","N","I","U","F","S","B","T","I","R","E","L","W"], prevAnswers: [{"word":"CORPORATIONS","pct":2},{"word":"PORTION","pct":22},{"word":"TROOP","pct":27},{"word":"PORT","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0355", letters: ["H","W","S","P","K","","Y","T","R","C","C","R","A","N","M","D","L","L","G","E","S","I"], prevAnswers: [{"word":"CRYSTALLISED","pct":2},{"word":"CRYSTALISED","pct":22},{"word":"HACK","pct":27},{"word":"HACK","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0356", letters: ["E","G","A","T","L","M","S","N","Y","K","I","A","A","A","S","D","D","V","V","R","U","F"], prevAnswers: [{"word":"DISADVANTAGE","pct":2},{"word":"ADVANTAGE","pct":22},{"word":"AIMS","pct":27},{"word":"SAGE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0357", letters: ["U","","O","V","A","N","P","L","C","A","E","T","C","R","I","D","N","Y","W","B","E","C"], prevAnswers: [{"word":"ENCYCLOPEDIA","pct":2},{"word":"INEPT","pct":22},{"word":"CLOWN","pct":27},{"word":"UNDO","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0358", letters: ["U","G","B","E","E","N","D","N","I","T","S","C","D","N","E","M","O","R","F","P","E","S"], prevAnswers: [{"word":"ENDORSEMENTS","pct":2},{"word":"ENDORSEMENT","pct":22},{"word":"COMPETE","pct":27},{"word":"BEND","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0359", letters: ["W","Y","K","A","N","","D","M","E","O","G","V","X","N","I","T","P","E","S","A","T","C"], prevAnswers: [{"word":"EXPECTATIONS","pct":2},{"word":"EXPECT","pct":22},{"word":"YAWN","pct":27},{"word":"YAWN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0360", letters: ["F","B","L","E","I","L","R","A","T","O","E","I","N","E","X","P","M","E","D","W","Y","K"], prevAnswers: [{"word":"EXPERIMENTAL","pct":2},{"word":"EMPIRE","pct":22},{"word":"FILE","pct":27},{"word":"FILE","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0361", letters: ["Y","K","O","R","G","L","A","","U","F","G","C","I","E","O","R","P","H","G","V","A","A"], prevAnswers: [{"word":"GEOGRAPHICAL","pct":2},{"word":"ORGANIC","pct":22},{"word":"RURAL","pct":27},{"word":"ORCA","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0362", letters: ["R","G","B","E","A","N","L","G","H","T","M","P","K","F","E","A","S","S","U","L","N","E"], prevAnswers: [{"word":"GRATEFULNESS","pct":2},{"word":"ELAPSE","pct":22},{"word":"TEASE","pct":27},{"word":"RANG","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0363", letters: ["L","P","M","V","I","","I","N","C","C","T","E","D","F","A","I","B","T","S","N","O","I"], prevAnswers: [{"word":"IMPLICATIONS","pct":2},{"word":"LOCATIONS","pct":22},{"word":"LIMITED","pct":27},{"word":"FICTION","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0364", letters: ["G","E","V","I","E","N","C","C","A","D","N","I","H","U","E","N","F","B","P","E","D","E"], prevAnswers: [{"word":"INDEPENDENCE","pct":2},{"word":"DEPEND","pct":22},{"word":"DEEP","pct":27},{"word":"CHIN","pct":22},{"word":"4 or lower","pct":27}] },
  { id: "p0365", letters: ["V","T","N","O","N","","S","T","I","D","R","E","C","M","G","E","I","B","E","I","T","N"], prevAnswers: [{"word":"INTERSECTION","pct":2},{"word":"DIRECTION","pct":22},{"word":"TARGET","pct":27},{"word":"STREET","pct":22},{"word":"4 or lower","pct":27}] }
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
const VERSION = "2.0.16";

const CHANGELOG = [
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
    "Keep Trying!", "Almost there…", "Build it up!", "Keep going!",
    "Add more letters!", "You can do it!", "Don't stop now!",
  ],
  wrong: [
    "Try Again!", "Not a word!", "Keep hunting!", "Almost!",
    "Give it another go!", "So close!", "Not this time!",
  ],
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
const BADGES = {
  first_word:    { icon: "🌱", name: "First Word",    desc: "Complete your first puzzle" },
  above_average: { icon: "⭐", name: "Word Wizard",    desc: "Score 7 or more letters" },
  master:        { icon: "🏅", name: "Master",         desc: "Score 11 or more letters" },
  grandmaster:   { icon: "👑", name: "Grandmaster",    desc: "Score 15 or more letters" },
  streak_3:      { icon: "🔥", name: "On a Roll",      desc: "3 days in a row" },
  streak_7:      { icon: "💪", name: "Week Warrior",   desc: "7 days in a row" },
  streak_30:     { icon: "🏆", name: "Month Champion", desc: "30 days in a row" },
  games_10:      { icon: "📚", name: "Scholar",        desc: "10 puzzles completed" },
  games_50:      { icon: "🎓", name: "Academic",       desc: "50 puzzles completed" },
  games_100:     { icon: "🧙", name: "Centurion",      desc: "100 puzzles completed" },
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

function triggerHaptic(pattern) {
  if (!hapticsEnabled) return;
  if (!navigator.vibrate) return;
  if (Array.isArray(pattern)) navigator.vibrate(pattern);
  else navigator.vibrate(pattern || 8);
}

function applyDarkMode(on) {
  darkMode = on;
  document.documentElement.dataset.theme = on ? "dark" : "";
  localStorage.setItem("shukuma-dark-mode", on ? "1" : "0");
}

function applyColourTheme(theme) {
  colourTheme = theme;
  document.documentElement.dataset.colour = theme === "default" ? "" : theme;
  localStorage.setItem("shukuma-colour-theme", theme);
  buildColours();
  renderAllTiles();
}

function loadUserSettings() {
  darkMode       = localStorage.getItem("shukuma-dark-mode") === "1";
  soundEnabled   = localStorage.getItem("shukuma-sound") !== "0";
  hapticsEnabled = localStorage.getItem("shukuma-haptics") !== "0";
  colourTheme    = localStorage.getItem("shukuma-colour-theme") || "default";
  document.documentElement.dataset.theme  = darkMode ? "dark" : "";
  document.documentElement.dataset.colour = colourTheme === "default" ? "" : colourTheme;
}

// Attempt + time tracking
let attemptCount = 0;
let validAttemptCount = 0;
let activeTimeMs = 0;
let timerRunning = false;
let timerLastStart = 0;

// Board date browsing (0 = today, -1 = yesterday, …)
let browseOffset = 0;
let browsedDateStr = null; // null = today
var foundWords = []; // words found (valid) in current session
var unlockedDates = {}; // { "280626": true } — dates where user paid to unlock all words

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
let db = null, fbAuth = null, currentUser = null, userProfile = null;

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
    var resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/" + selectedLocale + "/" + key);
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
  const NS = "http://www.w3.org/2000/svg";
  const poly = g.querySelector("polygon:not(.hatch-overlay)");
  const text = g.querySelector("text");
  if (poly) {
    poly.setAttribute("fill", (tile.state === "neutral" && tile.blank) ? COLOURS.blank.fill : c.fill);
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
  var ansEl    = document.getElementById("answer-text");
  var promptEl = document.getElementById("game-prompt");
  var resetBtn = document.getElementById("reset-btn");
  if (!ansEl) return;
  if (selectedPath.length === 0) {
    ansEl.hidden = true; ansEl.textContent = "";
    ansEl.style.fontSize = ""; ansEl.style.letterSpacing = "";
    if (promptEl) promptEl.hidden = false;
    if (resetBtn) resetBtn.hidden = true;
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
  if (promptEl) promptEl.hidden = true;
  if (resetBtn) resetBtn.hidden = false;

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

    const poly = document.createElementNS(NS, "polygon");
    poly.setAttribute("points", hexPoints(x, y, HEX_SIZE - 2));
    poly.setAttribute("fill", tile.blank ? COLOURS.blank.fill : c.fill);
    poly.setAttribute("stroke", "none");
    poly.setAttribute("filter", "url(#tile-shadow)");

    const text = document.createElementNS(NS, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "central");
    text.setAttribute("font-size", "22");
    text.setAttribute("font-weight", "700");
    text.setAttribute("font-family", "'Arial Black', 'Arial Bold', Arial, 'Helvetica Neue', sans-serif");
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
    attemptCount++;
    var validWord = validateWord(selectedPath);
    if (validWord) {
      if (OFFENSIVE_WORDS.has(validWord.toLowerCase())) { flashInvalid(); return; }
      lockValidWord(validWord); return;
    }
    var hasBlanks = selectedPath.some(function(id) { return tiles[id].blank; });
    if (!hasBlanks && selectedPath.length >= 3) {
      var word = selectedPath.map(function(id) { return tiles[id].letter.toLowerCase(); }).join("");
      if (OFFENSIVE_WORDS.has(word)) { flashInvalid(); return; }
      isChecking = true;
      var answerEl = document.getElementById("answer-text");
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
  if (selectedPath.length >= 3 && !tapHintShown) {
    tapHintShown = true;
    showToast("Tap the last letter again to check your word");
  }
  pulseTileSubmitHint();
}

function lockValidWord(word) {
  // "In One!" — player nailed the target word on their very first attempt
  var targetLen = (puzzle && puzzle.prevAnswers && puzzle.prevAnswers[0])
    ? puzzle.prevAnswers[0].word.length : 0;
  var isFirstAttempt = (attemptCount <= 1);
  var isInOne = isFirstAttempt && targetLen > 0 && selectedPath.length >= targetLen && !browsedDateStr;

  validAttemptCount++;
  selectedPath.forEach(id => { tiles[id].state = "valid"; });
  renderAllTiles();
  const len = selectedPath.length;
  if (!foundWords.includes(word.toUpperCase())) foundWords.push(word.toUpperCase());
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

  if (isInOne) {
    _cycleAttemptCount = attemptCount;
    var inOneMsgs = FLOAT_MSGS.in_one;
    var inOneCheer = inOneMsgs[Math.floor(Math.random() * inOneMsgs.length)];
    showFloatAnim({ type: "valid", score: len, level: "Grandmaster in One!", cheer: inOneCheer });
    showConfetti();
    triggerHaptic([100, 50, 100, 50, 200]);
    setTimeout(function() {
      showToast("🎯 Grandmaster in One! First attempt perfection!");
    }, 1600);
    setTimeout(function() { giveAwardTickets("Grandmaster in One!"); }, 2000);
    setTimeout(startCyclingMessages, 2200);
  } else if (foundTarget) {
    _cycleAttemptCount = attemptCount;
    var msgs = FLOAT_MSGS.target_found;
    var cheer = msgs[Math.floor(Math.random() * msgs.length)];
    showFloatAnim({ type: "valid", score: len, level: level, cheer: cheer });
    showConfetti();
    triggerHaptic([100, 50, 100, 50, 200]);
    setTimeout(function() {
      showToast("🏆 You found today's longest word!");
    }, 1600);
    setTimeout(function() { giveAwardTickets("today's longest word found!"); }, 2000);
    setTimeout(startCyclingMessages, 2200);
  } else {
    var cheers = (FLOAT_MSGS.valid[level] || FLOAT_MSGS.valid["Average"]);
    var cheer2 = cheers[Math.floor(Math.random() * cheers.length)];
    showFloatAnim({ type: "valid", score: len, level: level, cheer: cheer2 });
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

function flashInvalid() {
  var pathLen = selectedPath.length;
  selectedPath.forEach(id => { tiles[id].state = "invalid"; });
  renderAllTiles();
  updateAnswerArea();

  var resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.classList.add("is-throbbing");

  var msgs = pathLen < 3 ? FLOAT_MSGS.short : FLOAT_MSGS.wrong;
  var cheer = msgs[Math.floor(Math.random() * msgs.length)];
  showFloatAnim({ type: pathLen < 3 ? "neutral" : "wrong", cheer: cheer });

  setTimeout(function() {
    if (resetBtn) resetBtn.classList.remove("is-throbbing");
    clearSelection();
  }, 700);
}

async function submitTappedWord() {
  var validWord = validateWord(selectedPath);
  if (validWord) {
    if (OFFENSIVE_WORDS.has(validWord.toLowerCase())) { flashInvalid(); return; }
    lockValidWord(validWord); return;
  }
  var hasBlanks = selectedPath.some(function(id) { return tiles[id].blank; });
  if (!hasBlanks && selectedPath.length >= 3) {
    var word = selectedPath.map(function(id) { return tiles[id].letter.toLowerCase(); }).join("");
    if (OFFENSIVE_WORDS.has(word)) { flashInvalid(); return; }
    isChecking = true;
    var answerEl = document.getElementById("answer-text");
    if (answerEl) answerEl.classList.add("checking");
    var found = false;
    try { found = await checkDictionaryAPI(word); } catch (_) {}
    isChecking = false;
    if (answerEl) answerEl.classList.remove("checking");
    if (found) { lockValidWord(word); return; }
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

function doHint() {
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

  ticketCount = Math.max(0, ticketCount - 1);
  saveTickets();
  updateTicketDisplay();

  pulseHintTile(candidate);
  showToast("Hint — next letter highlighted for 10 seconds");
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
  }, 10000);
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
    showHintModal();
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

  // Leaderboard date navigation — synced with board date
  var lbPrevBtn = document.getElementById("lb-date-prev");
  var lbNextBtn = document.getElementById("lb-date-next");
  if (lbPrevBtn) lbPrevBtn.addEventListener("click", function() {
    if (lbDayOffset > -13) {
      lbDayOffset--;
      browseOffset = lbDayOffset;
      loadBoardForDate(getDateForOffset(browseOffset));
      loadLeaderboard("date");
    }
  });
  if (lbNextBtn) lbNextBtn.addEventListener("click", function() {
    if (lbDayOffset < 0) {
      lbDayOffset++;
      browseOffset = lbDayOffset;
      loadBoardForDate(getDateForOffset(browseOffset));
      loadLeaderboard("date");
    }
  });

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
  inOneAchieved = false;

  loadState();

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

  // Restore played path tiles to indigo
  playedPath.forEach(function(id) { if (tiles[id]) tiles[id].state = "played"; });
  if (playedPath.length > 0) renderAllTiles();

  updateScoreDisplay(null);
  updateTicketDisplay();
  updateAnswerArea();
  updateShareBtn();
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
    var locale = (typeof selectedLocale !== "undefined" ? selectedLocale : "en_GB");
    var resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/" + locale + "/" + key);
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

function updateAdminAccess() {
  var btn = document.getElementById("settings-admin-btn");
  if (btn) btn.hidden = !isAdmin();
  // Refresh palette list when admin signs in
  if (isAdmin()) {
    loadServerPalettes().then(function(palettes) { renderPaletteList(palettes); });
  }
}

// ─── Sign up / in / out ───────────────────────────────────────────────────────
async function fbSignUp(username, email, password) {
  if (!fbAuth || !db) throw new Error("Firebase not configured");
  const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
  const uid = cred.user.uid;
  await db.collection("users").doc(uid).set({
    uid, username: username.trim(), email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    stats: { totalGames: 0, totalScore: 0, bestScore: 0, bestWord: "", currentStreak: 0, bestStreak: 0, lastPlayedDate: "" },
    badges: {},
    tickets: 10,
  });
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
    await db.collection("users").doc(uid).set({
      uid, username: cred.user.displayName || "Player", email: cred.user.email,
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
    } else {
      const d = {
        uid: user.uid, username: user.displayName || user.email.split("@")[0], email: user.email || "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        stats: { totalGames: 0, totalScore: 0, bestScore: 0, bestWord: "", currentStreak: 0, bestStreak: 0, lastPlayedDate: "" },
        badges: {},
      };
      await db.collection("users").doc(user.uid).set(d);
      userProfile = d;
    }
    renderStatsPanel();
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

    const batch = db.batch();
    batch.set(scoreRef, {
      uid: currentUser.uid, username, date: dateStr, puzzleId: puzzle.id,
      score: bestScore, word: bestWord, level,
      attempts: attemptCount,
      validAttempts: validAttemptCount,
      timeSpent: Math.round(elapsed / 1000),
      submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const userRef = db.collection("users").doc(currentUser.uid);
    const upd = { "stats.lastPlayedDate": dateStr, "stats.currentStreak": streak, "stats.bestStreak": bestStreakSoFar };
    if (!existing.exists) { upd["stats.totalGames"] = firebase.firestore.FieldValue.increment(1); upd["stats.totalScore"] = firebase.firestore.FieldValue.increment(bestScore); }
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
  var prevBtn = document.getElementById("lb-date-prev");
  var nextBtn = document.getElementById("lb-date-next");
  if (!labelEl) return;

  var dateStr = getDateForOffset(lbDayOffset);
  labelEl.textContent = lbDayOffset === 0 ? "Today" : formatDateDisplay(dateStr);
  if (nextBtn) nextBtn.disabled = lbDayOffset >= 0;
  if (prevBtn) prevBtn.disabled = lbDayOffset <= -13;
}

async function loadLeaderboard(filter) {
  lbFilter = "date";
  var displayDate = getDateForOffset(lbDayOffset);
  var displayPuz  = getPuzzleForDate(displayDate);
  var isToday     = lbDayOffset === 0;

  updateLbDateNav();

  // Render scratchcard immediately (no auth needed)
  buildScratchAnswers(displayPuz ? displayPuz.prevAnswers : [], {}, isToday, 0);
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

    if (displayPuz) buildScratchAnswers(displayPuz.prevAnswers, playersByWord, isToday, allDocs.length);
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

function buildScratchAnswers(answers, playersByWord, isToday, totalPlayers) {
  var container = document.getElementById("scratchcard-list");
  if (!container) return;
  container.innerHTML = "";

  // All valid words ≥ 4 letters from this puzzle
  var allWords = (answers || []).filter(function(a) { return (a.word || "").length >= 4; })
    .slice().sort(function(a, b) { return b.word.length - a.word.length; });

  var dateKey = isToday ? null : (browsedDateStr || lbDayOffset !== 0 ? getDateForOffset(lbDayOffset) : null);

  // Found words for this date (today = live foundWords, past = loaded from state)
  var myFound;
  if (isToday) {
    myFound = new Set(foundWords.map(function(w) { return w.toUpperCase(); }));
  } else {
    // Load from saved state for that date
    myFound = new Set();
    try {
      var raw = localStorage.getItem("shukuma-" + (dateKey || getDateString()));
      if (raw) {
        var s = JSON.parse(raw);
        (s.foundWords || []).forEach(function(w) { myFound.add(w.toUpperCase()); });
        // Also include bestWord for legacy saves that didn't have foundWords
        if (s.bestWord) myFound.add(s.bestWord.toUpperCase());
      }
    } catch(_) {}
  }

  // Target word (index 0 in answers, sorted by length desc)
  var targetWord = allWords.length > 0 ? allWords[0].word.toUpperCase() : "";

  // Is this date unlocked?
  var isUnlocked = isToday ? false : (dateKey && unlockedDates[dateKey]);

  // Check if user found the target word for this date (unlocks past-day words for free)
  var foundTarget = targetWord && myFound.has(targetWord);
  var canViewFree = foundTarget && !isToday;

  if (isToday) {
    // "Come back tomorrow" message for target word
    var msg = document.createElement("div");
    msg.className = "sc-tomorrow-msg";
    msg.textContent = "Come back tomorrow to see today's answer!";
    container.appendChild(msg);
  }

  // Header for found words
  if (myFound.size > 0) {
    var fHdr = document.createElement("div");
    fHdr.className = "wl-section-hdr";
    fHdr.textContent = "Your words";
    container.appendChild(fHdr);

    // Show found words sorted longest first
    var foundArr = Array.from(myFound).sort(function(a, b) { return b.length - a.length; });
    foundArr.forEach(function(w) {
      var row = buildWordRow(w, true, false, playersByWord, totalPlayers || 0);
      container.appendChild(row);
    });
  }

  // Locked / unlockable words section
  var lockedWords = allWords.filter(function(a) {
    var wu = a.word.toUpperCase();
    // Today: target word never shown, others can be unlocked
    if (isToday && wu === targetWord) return false;
    // Skip already found
    if (myFound.has(wu)) return false;
    return true;
  });

  if (lockedWords.length > 0) {
    var lHdr = document.createElement("div");
    lHdr.className = "wl-section-hdr";
    lHdr.textContent = "Words to discover";
    container.appendChild(lHdr);

    // Unlock button (for past days only)
    if (!isToday && !isUnlocked && !canViewFree) {
      var unlockRow = document.createElement("div");
      unlockRow.className = "wl-unlock-row";
      var unlockBtn = document.createElement("button");
      unlockBtn.className = "wl-unlock-btn";
      unlockBtn.innerHTML = 'Unlock all — find today\'s word or <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg> &minus;10';
      unlockBtn.addEventListener("click", function() {
        if (ticketCount < 10) { showToast("Not enough tickets — you need 10"); return; }
        confirmTicketSpend({
          title: "Unlock All Words?",
          desc: "Reveal the full word list for this puzzle.",
          cost: 10,
        }, function() {
          ticketCount -= 10;
          saveTickets();
          updateTicketDisplay();
          if (dateKey) { unlockedDates[dateKey] = true; saveUnlockedDates(); }
          buildScratchAnswers(answers, playersByWord, isToday, totalPlayers || 0);
          showToast("Words unlocked!");
        });
      });
      unlockRow.appendChild(unlockBtn);
      container.appendChild(unlockRow);
    }

    var showLocked = isUnlocked || canViewFree;
    lockedWords.forEach(function(a) {
      var row = buildWordRow(a.word.toUpperCase(), showLocked, !showLocked, playersByWord, totalPlayers || 0);
      container.appendChild(row);
    });
  }

  if (!isToday && allWords.length === 0) {
    var empty = document.createElement("div");
    empty.className = "sc-empty";
    empty.textContent = "No answers available for this date.";
    container.appendChild(empty);
  }
}

function buildWordRow(word, revealed, locked, playersByWord, totalPlayers) {
  var row = document.createElement("div");
  row.className = "wl-row" + (locked ? " wl-locked" : "") + (revealed ? " wl-found" : "");

  var wordSpan = document.createElement("span");
  wordSpan.className = "wl-word";
  if (locked) {
    var dots = "";
    for (var d = 0; d < word.length; d++) dots += (d ? " ·" : "·");
    wordSpan.textContent = dots;
  } else {
    wordSpan.textContent = word;
  }

  var rightSide = document.createElement("div");
  rightSide.className = "wl-row-right";

  if (!locked) {
    // % of players who found this word
    if (playersByWord && totalPlayers > 0) {
      var count = (playersByWord[word] || []).length;
      var pct = Math.round((count / totalPlayers) * 100);
      var pctSpan = document.createElement("span");
      pctSpan.className = "wl-pct";
      pctSpan.textContent = pct + "%";
      rightSide.appendChild(pctSpan);
    } else {
      var lenSpan = document.createElement("span");
      lenSpan.className = "wl-len";
      lenSpan.textContent = word.length + " letters";
      rightSide.appendChild(lenSpan);
    }

    // (?) dictionary button on revealed words
    if (revealed) {
      var defBtn = document.createElement("button");
      defBtn.className = "wl-def-btn";
      defBtn.setAttribute("aria-label", "Definition of " + word);
      defBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8" stroke-width="3"/></svg>';
      defBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleWordDefinition(word, row);
      });
      rightSide.appendChild(defBtn);
    }
  }

  row.appendChild(wordSpan);
  row.appendChild(rightSide);

  // Tap revealed word → highlight on board for 5 seconds
  if (revealed) {
    row.addEventListener("click", function() {
      highlightWordOnBoard(word);
    });
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
  var locale = (typeof selectedLocale !== "undefined" ? selectedLocale : "en_GB");
  fetch("https://api.dictionaryapi.dev/api/v2/entries/" + locale + "/" + encodeURIComponent(key))
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

  if (!players || !players.length) {
    var empty = document.createElement("div");
    empty.className = "scores-empty";
    empty.textContent = "No scores yet — be the first!";
    container.appendChild(empty);
    return;
  }

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

    // Send hint button for players who haven't found the target
    if (!foundTarget && targetWord && currentUser && p.uid !== currentUser.uid) {
      var hintBtn = document.createElement("button");
      hintBtn.className = "player-hint-btn";
      hintBtn.innerHTML = 'Hint <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>';
      (function(player) {
        hintBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          sendHintToPlayer(player);
        });
      })(p);
      row.querySelector(".player-right").appendChild(hintBtn);
    }

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
  if (b) showToast("Badge unlocked: " + b.icon + " " + b.name + "!");
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
  var submitEl   = document.getElementById("auth-submit");
  var switchBtn  = document.getElementById("auth-switch-mode");
  var pwdInput   = document.getElementById("auth-password");
  if (titleEl)   titleEl.textContent   = isSignup ? "Save Your Score" : "Welcome back";
  if (subEl)     subEl.textContent     = isSignup
    ? "Create an account to track your progress and compete with friends."
    : "Sign in to save your score and see the leaderboard.";
  if (userField) userField.hidden       = !isSignup;
  if (submitEl)  submitEl.textContent  = isSignup ? "Create Account" : "Sign In";
  if (switchBtn) switchBtn.textContent = isSignup ? "Sign in instead" : "Create an account";
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
  document.getElementById("auth-error").hidden   = true;
  document.getElementById("auth-modal").hidden   = false;
  setTimeout(function() {
    var first = authMode === "signup" ? document.getElementById("auth-username") : document.getElementById("auth-email");
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
  var email    = document.getElementById("auth-email").value.trim();
  var password = document.getElementById("auth-password").value;
  var username = document.getElementById("auth-username").value.trim();
  var submitEl = document.getElementById("auth-submit");
  if (!email || !password) { showAuthError("Please enter your email and password."); return; }
  if (authMode === "signup" && !username) { showAuthError("Please choose a username."); return; }
  submitEl.disabled = true;
  submitEl.textContent = "…";
  document.getElementById("auth-error").hidden = true;
  try {
    if (authMode === "signup") await fbSignUp(username, email, password);
    else await fbSignIn(email, password);
    hideAuthModal(true);
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
  if (avatarEl) avatarEl.textContent = (userProfile.username || "P")[0].toUpperCase();
  var nameEl = document.getElementById("user-display-name");
  if (nameEl) nameEl.textContent = userProfile.username || "Player";
  var emailEl = document.getElementById("user-email-text");
  if (emailEl) emailEl.textContent = currentUser.email || "";

  var s = userProfile.stats || {};
  var totalGames = s.totalGames || 0;
  var topScore   = s.bestScore  || 0;
  var streak     = s.currentStreak || 0;
  var avg        = totalGames > 0 ? Math.round((s.totalScore || 0) / totalGames) : 0;

  function setVal(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  setVal("stat-games",  totalGames);
  setVal("stat-best",   topScore);
  setVal("stat-streak", streak + "🔥");
  setVal("stat-avg",    avg);

  renderBadges(userProfile.badges || {});
  loadRecentHistory();
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
    item.title = b.name + ": " + b.desc;
    item.innerHTML =
      '<div class="badge-hex">' +
        '<span class="badge-emoji">' + b.icon + '</span>' +
      '</div>' +
      '<div class="badge-name">' + b.name + '</div>';
    grid.appendChild(item);
  });
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

function showToast(msg) {
  var toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  if (toast._timer) { clearTimeout(toast._timer); toast._timer = null; }
  toast.classList.add("visible");
  toast._timer = setTimeout(function() { toast.classList.remove("visible"); toast._timer = null; }, 5000);
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function currentDateStr() { return browsedDateStr || getDateString(); }
function storageKey() { return "shukuma-" + currentDateStr(); }

function saveState() {
  const elapsed = timerRunning ? activeTimeMs + (Date.now() - timerLastStart) : activeTimeMs;
  try {
    localStorage.setItem(storageKey(), JSON.stringify({
      bestWord, bestScore, gameCompleted, attemptCount, validAttemptCount, activeTimeMs: elapsed, playedPath, inOneAchieved, foundWords,
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
    inOneAchieved    = s.inOneAchieved || false;
    foundWords       = Array.isArray(s.foundWords) ? s.foundWords : [];
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
    inner.innerHTML = '<span class="float-cheer">' + escHtml(opts.cheer || "") + '</span>';
  }

  wrapper.appendChild(inner);
  container.appendChild(wrapper);

  inner.addEventListener("animationend", function() { wrapper.remove(); }, { once: true });
}

// ─── Confetti ─────────────────────────────────────────────────────────────────
function showConfetti() {
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
      // iOS 13+ — request on the first user tap to avoid a cold popup
      document.addEventListener("touchend", function requestOnce() {
        DeviceMotionEvent.requestPermission()
          .then(function(r) { if (r === "granted") window.addEventListener("devicemotion", onMotion, { passive: true }); })
          .catch(function() {});
        document.removeEventListener("touchend", requestOnce);
      }, { once: true });
    } else {
      window.addEventListener("devicemotion", onMotion, { passive: true });
    }
  }
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
  if (darkToggle) darkToggle.addEventListener("change", function() {
    applyDarkMode(this.checked);
    localStorage.setItem("shukuma-dark-mode", this.checked ? "1" : "0");
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

      var tr = document.createElement("tr");
      tr.style.background = rowBg;
      tr.innerHTML =
        '<td class="audit-td" style="text-align:center;color:#9ca3af;">' + (i + 1) + '</td>' +
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
  var applyBtn = document.getElementById("admin-apply-btn");
  if (applyBtn) applyBtn.addEventListener("click", function() {
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
  });

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
      // Swipe up → full screen: clear inline top so CSS top:0 takes effect
      backEl.style.top = "";
      backEl.classList.add("full-screen");
    } else if (movedY > 40 && backEl.classList.contains("full-screen")) {
      // Swipe down → collapse back to partial: restore saved inline top
      backEl.classList.remove("full-screen");
      backEl.style.top = partialTop;
    }
    startY = 0; movedY = 0;
  });
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
  puzzle = getTodaysPuzzle();
  loadState();
  loadTickets();
  loadAwardTickets();
  loadUnlockedDates();
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
  initBlurReveal();
  // initScratchReveal replaced by buildWordRow tap-to-reveal system

  updateScoreDisplay(null);
  updateTicketDisplay();
  updateAnswerArea();
  updateShareBtn();
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

})();
