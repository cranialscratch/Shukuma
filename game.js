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
  { id: "p0001", letters: ["J","O","T","D","Y","P","T","P","E","E","N","L","S","M","Y","O","E","G","A","U","H","O"], prevAnswers: [{"word":"DEPLOYMENT","pct":4},{"word":"DEPLOY","pct":15},{"word":"HONEY","pct":30},{"word":"ELSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0002", letters: ["P","E","C","G","F","R","T","N","I","V","E","R","S","A","D","H","T","I","T","Y","V","O"], prevAnswers: [{"word":"ADVERTISING","pct":4},{"word":"INTER","pct":15},{"word":"OTHER","pct":30},{"word":"SINCE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0003", letters: ["Y","D","N","T","A","I","U","O","R","N","A","N","R","O","G","S","D","U","N","G","E","S"], prevAnswers: [{"word":"SURROUNDING","pct":4},{"word":"ROUND","pct":15},{"word":"AUNT","pct":30},{"word":"NOUN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0004", letters: ["F","O","U","A","N","R","R","C","M","I","E","D","E","E","P","A","F","V","I","E","E","A"], prevAnswers: [{"word":"REINFORCED","pct":4},{"word":"FORCE","pct":15},{"word":"ORDER","pct":30},{"word":"ACRE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0005", letters: ["A","A","T","E","A","R","R","T","S","C","H","O","T","E","E","I","M","N","P","V","E","E"], prevAnswers: [{"word":"ACHIEVEMENTS","pct":4},{"word":"ACHIEVE","pct":15},{"word":"ACHE","pct":30},{"word":"ARCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0006", letters: ["N","I","T","T","S","B","R","L","O","T","U","O","B","B","R","C","D","Y","T","J","T","E"], prevAnswers: [{"word":"INSTRUCTED","pct":4},{"word":"COUNT","pct":15},{"word":"COURT","pct":30},{"word":"ROBOT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0007", letters: ["H","P","A","F","D","Y","R","Y","F","O","G","O","R","A","C","E","R","E","P","H","O","J"], prevAnswers: [{"word":"CHOREOGRAPHY","pct":4},{"word":"CHORE","pct":15},{"word":"ERROR","pct":30},{"word":"RECAP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0008", letters: ["W","P","R","N","I","L","E","W","A","N","T","H","T","T","I","O","I","L","N","V","N","A"], prevAnswers: [{"word":"INTERNATIONAL","pct":4},{"word":"NATIONAL","pct":9},{"word":"INVITE","pct":22},{"word":"HOTEL","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0009", letters: ["T","C","R","E","O","R","E","E","F","N","L","A","A","I","C","E","B","F","E","S","J","N"], prevAnswers: [{"word":"ELECTRONICS","pct":4},{"word":"ALERT","pct":15},{"word":"ELECT","pct":30},{"word":"BALE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0010", letters: ["A","T","N","A","R","N","I","O","R","I","Y","E","A","P","I","P","E","U","S","N","T","I"], prevAnswers: [{"word":"INSPIRATION","pct":4},{"word":"RATIO","pct":15},{"word":"PIPE","pct":30},{"word":"SPIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0011", letters: ["N","E","F","E","E","I","E","I","H","V","Y","R","N","F","T","N","A","O","S","A","T","I"], prevAnswers: [{"word":"STATIONARY","pct":4},{"word":"NASTY","pct":15},{"word":"RATIO","pct":30},{"word":"FERN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0012", letters: ["H","O","I","N","T","T","S","I","G","I","G","I","L","V","N","T","A","K","G","I","C","H"], prevAnswers: [{"word":"INITIALISING","pct":4},{"word":"ALIGN","pct":15},{"word":"CHALK","pct":30},{"word":"STING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0013", letters: ["Y","K","E","I","E","O","R","O","R","B","W","D","C","G","R","N","B","U","O","U","C","P"], prevAnswers: [{"word":"GROUNDWORK","pct":4},{"word":"DROWN","pct":15},{"word":"GROWN","pct":30},{"word":"ROUND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0014", letters: ["U","R","T","E","O","G","N","W","A","J","A","N","J","A","E","L","M","L","A","I","S","O"], prevAnswers: [{"word":"JOURNALISM","pct":4},{"word":"AISLE","pct":15},{"word":"SLANT","pct":30},{"word":"ALSO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0015", letters: ["R","A","T","D","G","G","T","S","T","E","P","A","N","D","M","L","Y","E","R","E","O","M"], prevAnswers: [{"word":"DEPLOYMENTS","pct":4},{"word":"DEPLOY","pct":15},{"word":"PLANE","pct":30},{"word":"PLANT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0016", letters: ["N","N","I","Z","E","G","O","A","I","T","I","N","L","A","T","G","H","A","N","T","A","O"], prevAnswers: [{"word":"NATIONALIZING","pct":4},{"word":"NATIONAL","pct":9},{"word":"GOING","pct":30},{"word":"TITAN","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0017", letters: ["H","C","G","I","S","A","R","N","S","R","I","S","S","S","S","I","C","U","A","D","U","T"], prevAnswers: [{"word":"DISCUSSING","pct":4},{"word":"CHAIR","pct":15},{"word":"CRASH","pct":30},{"word":"ARCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0018", letters: ["T","I","E","T","S","N","M","N","H","H","E","N","G","C","C","C","I","B","H","E","N","L"], prevAnswers: [{"word":"ENLIGHTENMENT","pct":4},{"word":"HENCE","pct":15},{"word":"LIGHT","pct":30},{"word":"LINEN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0019", letters: ["K","G","F","R","T","P","C","E","B","E","O","H","M","C","H","E","A","F","O","R","R","V"], prevAnswers: [{"word":"ECHOCHAMBER","pct":4},{"word":"AMBER","pct":15},{"word":"CHORE","pct":30},{"word":"CHAR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0020", letters: ["E","N","W","F","E","I","E","E","H","C","T","F","W","N","D","E","D","E","E","N","P","E"], prevAnswers: [{"word":"DEPENDENCE","pct":4},{"word":"ENDED","pct":15},{"word":"DEEP","pct":30},{"word":"FEET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0021", letters: ["R","R","E","D","H","P","M","S","O","T","K","D","O","I","S","K","C","A","M","M","B","L"], prevAnswers: [{"word":"BLACKSMITH","pct":4},{"word":"BLACK","pct":15},{"word":"COAL","pct":30},{"word":"DOCK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0022", letters: ["L","A","C","E","P","A","S","T","R","C","T","A","S","D","O","R","G","L","A","S","B","M"], prevAnswers: [{"word":"BROADCASTER","pct":4},{"word":"PALACE","pct":15},{"word":"ROTATE","pct":22},{"word":"ACTOR","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0023", letters: ["E","F","F","I","N","R","E","E","C","P","R","E","N","A","O","S","E","E","I","N","T","D"], prevAnswers: [{"word":"PREFERENCE","pct":4},{"word":"POINTS","pct":15},{"word":"PREFER","pct":22},{"word":"APRON","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0024", letters: ["K","Y","O","O","U","G","H","S","P","I","N","T","I","S","E","A","L","R","I","L","N","N"], prevAnswers: [{"word":"HOSPITALISING","pct":4},{"word":"SIGNAL","pct":15},{"word":"ALIEN","pct":30},{"word":"EIGHT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0025", letters: ["V","E","H","I","N","F","L","P","H","R","A","T","S","I","E","N","D","D","G","A","G","B"], prevAnswers: [{"word":"FRIENDSHIP","pct":4},{"word":"GENTLE","pct":15},{"word":"AGENT","pct":30},{"word":"FLARE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0026", letters: ["H","N","E","B","S","W","N","T","H","B","A","C","K","R","R","A","U","I","E","T","I","Q"], prevAnswers: [{"word":"QUARTERBACK","pct":4},{"word":"BRAWN","pct":15},{"word":"TRACK","pct":30},{"word":"BACK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0027", letters: ["O","A","N","A","B","A","O","R","G","L","B","A","N","O","L","I","T","A","C","E","V","A"], prevAnswers: [{"word":"COLLABORATIVE","pct":4},{"word":"NATIVE","pct":15},{"word":"GRANT","pct":30},{"word":"GROAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0028", letters: ["E","L","L","T","A","Y","R","O","V","E","B","A","L","S","O","T","D","L","G","E","R","G"], prevAnswers: [{"word":"VOLLEYBALL","pct":4},{"word":"LATER","pct":15},{"word":"BALL","pct":30},{"word":"DATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0029", letters: ["S","L","P","I","Y","O","A","S","D","D","I","Y","P","G","N","E","S","H","J","E","I","I"], prevAnswers: [{"word":"DISPLAYING","pct":4},{"word":"DOING","pct":15},{"word":"PLAID","pct":30},{"word":"PLAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0030", letters: ["S","A","E","O","O","R","I","G","E","F","M","N","C","R","E","O","D","Y","P","T","U","D"], prevAnswers: [{"word":"OUTPERFORMING","pct":4},{"word":"REFORM","pct":15},{"word":"OUTER","pct":30},{"word":"DOME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0031", letters: ["N","E","G","L","T","E","D","E","V","M","A","N","P","R","O","N","D","E","M","O","I","E"], prevAnswers: [{"word":"INDEPENDENT","pct":4},{"word":"DEMON","pct":15},{"word":"INANE","pct":30},{"word":"LEDGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0032", letters: ["C","S","E","R","G","P","R","E","O","O","T","R","O","D","N","G","O","C","I","N","L","Y"], prevAnswers: [{"word":"CORRESPONDING","pct":4},{"word":"RESPOND","pct":15},{"word":"INTRO","pct":30},{"word":"COOL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0033", letters: ["N","N","G","U","A","T","H","Y","M","I","O","W","Y","O","A","E","T","V","N","L","I","S"], prevAnswers: [{"word":"NATIONALITY","pct":4},{"word":"NATIONAL","pct":9},{"word":"STEAL","pct":30},{"word":"LEAN","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0034", letters: ["R","V","N","C","S","E","I","O","E","A","T","B","C","U","H","N","W","E","E","D","Y","W"], prevAnswers: [{"word":"OBITER","pct":4},{"word":"COIN","pct":15},{"word":"HATE","pct":30},{"word":"REIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0035", letters: ["R","I","O","H","E","F","N","Y","G","Y","A","D","N","R","W","W","I","U","D","C","T","I"], prevAnswers: [{"word":"WAYFINDING","pct":4},{"word":"FINDING","pct":15},{"word":"FADING","pct":22},{"word":"DRYER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0036", letters: ["D","A","M","O","N","I","C","A","U","T","A","E","I","E","R","T","D","E","G","D","S","L"], prevAnswers: [{"word":"INTEGRATED","pct":4},{"word":"RETAIN","pct":15},{"word":"DRAIN","pct":30},{"word":"GRACE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0037", letters: ["E","E","N","F","N","O","P","D","E","I","H","O","T","M","S","T","S","A","C","C","I","C"], prevAnswers: [{"word":"SOPHISTICATED","pct":4},{"word":"PHONE","pct":15},{"word":"SHINE","pct":30},{"word":"SHONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0038", letters: ["H","I","N","N","I","L","M","I","G","I","V","A","V","T","N","A","E","R","Y","H","S","T"], prevAnswers: [{"word":"STREAMLINING","pct":4},{"word":"STREAM","pct":15},{"word":"ANVIL","pct":30},{"word":"HASTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0039", letters: ["O","E","T","A","K","U","B","U","M","S","R","T","O","G","T","R","Y","H","W","O","T","H"], prevAnswers: [{"word":"TRUSTWORTHY","pct":4},{"word":"BURROW","pct":15},{"word":"BURST","pct":30},{"word":"STORY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0040", letters: ["I","R","E","P","C","B","L","W","A","K","W","E","H","R","O","I","H","E","K","S","V","F"], prevAnswers: [{"word":"BRICKWORKS","pct":4},{"word":"BRICK","pct":15},{"word":"VIEW","pct":30},{"word":"WORK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0041", letters: ["N","D","T","C","A","D","E","I","E","I","U","D","R","L","V","V","E","T","R","R","R","N"], prevAnswers: [{"word":"REDIRECTED","pct":4},{"word":"ADDED","pct":15},{"word":"AIDED","pct":30},{"word":"TIRED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0042", letters: ["M","I","R","B","I","S","O","G","E","N","H","E","T","F","G","N","A","C","R","T","P","N"], prevAnswers: [{"word":"CATEGORISING","pct":4},{"word":"CANE","pct":15},{"word":"GRIM","pct":30},{"word":"HEAP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0043", letters: ["G","W","A","E","Y","O","U","C","I","O","N","X","H","I","O","E","A","S","T","S","U","T"], prevAnswers: [{"word":"EXHAUSTION","pct":4},{"word":"STONE","pct":15},{"word":"CHAT","pct":30},{"word":"EACH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0044", letters: ["T","V","R","O","E","X","T","A","R","E","N","I","D","T","E","N","A","C","M","S","Y","R"], prevAnswers: [{"word":"EXTRAORDINARY","pct":4},{"word":"ANNEX","pct":15},{"word":"CRANE","pct":30},{"word":"DIARY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0045", letters: ["E","N","N","L","A","T","I","O","N","R","D","L","A","P","N","R","I","O","G","I","Z","S"], prevAnswers: [{"word":"RATIONALIZING","pct":4},{"word":"RATIO","pct":15},{"word":"DINE","pct":30},{"word":"EARN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0046", letters: ["R","D","S","N","E","E","I","C","O","D","R","E","G","E","P","R","T","V","B","J","A","E"], prevAnswers: [{"word":"RECONSIDERED","pct":4},{"word":"PRICE","pct":15},{"word":"PRIDE","pct":30},{"word":"DEED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0047", letters: ["I","Z","E","D","L","I","C","T","L","A","E","P","S","R","L","K","J","V","N","T","G","U"], prevAnswers: [{"word":"SPECIALIZED","pct":4},{"word":"LEARN","pct":15},{"word":"PEARL","pct":30},{"word":"EARL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0048", letters: ["S","E","O","A","U","B","D","D","P","O","B","I","N","H","G","U","O","R","H","S","V","C"], prevAnswers: [{"word":"ROUGHHOUSED","pct":4},{"word":"DODGE","pct":15},{"word":"GUIDE","pct":30},{"word":"HOUSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0049", letters: ["E","P","O","R","E","L","L","C","S","E","S","O","G","S","N","U","N","I","I","T","H","P"], prevAnswers: [{"word":"COUNSELLORS","pct":4},{"word":"CLOSES","pct":15},{"word":"CLOSE","pct":30},{"word":"COUNT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0050", letters: ["K","O","A","E","L","N","S","G","P","C","S","E","R","O","N","C","L","E","I","T","O","F"], prevAnswers: [{"word":"REFLECTIONS","pct":4},{"word":"ELECTION","pct":9},{"word":"SECTION","pct":22},{"word":"LESSON","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0051", letters: ["I","A","T","R","N","I","I","E","E","O","N","M","T","S","T","N","E","N","N","O","B","E"], prevAnswers: [{"word":"ENTERTAINMENT","pct":4},{"word":"RETAIN","pct":15},{"word":"ENTER","pct":30},{"word":"STONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0052", letters: ["C","E","S","J","T","L","T","T","I","F","T","E","S","E","L","S","N","S","A","E","S","E"], prevAnswers: [{"word":"SELFLESSNESS","pct":4},{"word":"ITSELF","pct":15},{"word":"LESSEN","pct":22},{"word":"NESTLE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0053", letters: ["D","V","T","E","D","S","P","T","H","N","H","B","G","E","Z","S","C","U","I","T","I","T"], prevAnswers: [{"word":"CITIZEN","pct":4},{"word":"ZITI","pct":15},{"word":"ZITS","pct":30},{"word":"TICS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0054", letters: ["E","L","E","T","I","Y","N","I","I","E","A","I","F","C","U","S","F","H","O","R","D","E"], prevAnswers: [{"word":"DEFINITELY","pct":4},{"word":"DEFINE","pct":15},{"word":"FINITE","pct":22},{"word":"OCEAN","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0055", letters: ["N","D","Y","D","S","W","O","D","K","O","E","T","A","E","B","A","O","E","D","E","B","R"], prevAnswers: [{"word":"BREAKDOWNS","pct":4},{"word":"BREAKDOWN","pct":9},{"word":"BREAD","pct":30},{"word":"BREAK","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0056", letters: ["M","P","G","I","N","D","G","T","R","B","O","E","I","I","K","R","W","Y","N","I","N","G"], prevAnswers: [{"word":"TRIGGERING","pct":4},{"word":"BORE","pct":15},{"word":"BORN","pct":30},{"word":"KING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0057", letters: ["E","R","N","T","A","L","E","T","U","I","M","W","B","E","G","N","O","H","H","N","R","V"], prevAnswers: [{"word":"REALIGNMENT","pct":4},{"word":"ALIGN","pct":15},{"word":"REALM","pct":30},{"word":"UTTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0058", letters: ["T","T","O","A","C","A","S","R","F","P","S","I","H","C","M","E","O","N","O","G","T","A"], prevAnswers: [{"word":"COMPASSIONATE","pct":4},{"word":"ARISE","pct":15},{"word":"ASSET","pct":30},{"word":"COMET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0059", letters: ["I","N","H","U","T","J","T","M","F","I","N","A","F","T","A","E","N","S","R","I","A","E"], prevAnswers: [{"word":"HUMANITARIANS","pct":4},{"word":"HUMAN","pct":15},{"word":"INANE","pct":30},{"word":"TITAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0060", letters: ["T","K","E","E","E","C","D","K","O","U","O","S","C","B","N","D","A","O","I","H","T","R"], prevAnswers: [{"word":"SOUNDTRACK","pct":4},{"word":"ASKED","pct":15},{"word":"COUNT","pct":30},{"word":"TRACK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0061", letters: ["T","C","M","G","T","P","O","F","I","T","R","O","I","S","A","H","V","I","B","L","E","A"], prevAnswers: [{"word":"COMFORTABLE","pct":4},{"word":"COMFORT","pct":15},{"word":"PORTAL","pct":22},{"word":"STABLE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0062", letters: ["O","P","H","M","I","N","R","D","O","Z","N","E","T","T","A","O","A","S","T","I","N","C"], prevAnswers: [{"word":"MODERNIZATION","pct":4},{"word":"MODERN","pct":15},{"word":"INNER","pct":30},{"word":"STERN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0063", letters: ["E","Y","A","S","O","L","L","C","M","M","N","E","I","A","P","E","R","T","T","F","G","E"], prevAnswers: [{"word":"ENERGETICALLY","pct":4},{"word":"ALERT","pct":15},{"word":"GREEN","pct":30},{"word":"SCALE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0064", letters: ["F","G","J","T","L","U","N","V","A","N","I","E","I","E","A","I","D","E","M","F","C","A"], prevAnswers: [{"word":"MEANINGFUL","pct":4},{"word":"AIDE","pct":15},{"word":"AVID","pct":30},{"word":"FAME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0065", letters: ["N","A","M","E","R","O","T","N","H","U","E","T","Y","T","V","B","N","I","A","B","O","Y"], prevAnswers: [{"word":"TOURNAMENT","pct":4},{"word":"MANOR","pct":15},{"word":"MATE","pct":30},{"word":"NAME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0066", letters: ["R","T","E","O","I","A","I","N","U","R","N","O","A","E","A","X","E","I","G","G","E","I"], prevAnswers: [{"word":"EXAGGERATION","pct":4},{"word":"RATIO","pct":15},{"word":"TRAIN","pct":30},{"word":"UNION","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0067", letters: ["C","S","E","U","O","N","T","Q","E","V","K","E","N","K","T","R","C","S","M","G","I","E"], prevAnswers: [{"word":"CONSEQUENCE","pct":4},{"word":"REQUEST","pct":15},{"word":"SECRET","pct":22},{"word":"ONSET","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0068", letters: ["N","R","N","A","H","E","A","A","S","T","V","R","O","S","A","E","U","S","D","H","T","A"], prevAnswers: [{"word":"SOUTHEASTERN","pct":4},{"word":"HASTE","pct":15},{"word":"HAVEN","pct":30},{"word":"OUTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0069", letters: ["A","S","F","D","S","T","G","N","A","H","I","E","O","R","M","N","S","T","N","N","E","A"], prevAnswers: [{"word":"RHINESTONE","pct":4},{"word":"ATONE","pct":15},{"word":"SHINE","pct":30},{"word":"STONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0070", letters: ["O","K","K","A","I","N","P","M","I","O","C","O","R","I","A","N","M","A","T","S","I","L"], prevAnswers: [{"word":"NORMALISATION","pct":4},{"word":"ANIMAL","pct":15},{"word":"AROMA","pct":30},{"word":"COAST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0071", letters: ["F","R","E","N","I","E","M","T","T","N","E","D","S","F","O","N","T","I","R","C","O","V"], prevAnswers: [{"word":"REFINEMENTS","pct":4},{"word":"FRONT","pct":15},{"word":"STONE","pct":30},{"word":"FEED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0072", letters: ["O","M","R","A","C","N","I","S","N","G","A","L","I","P","N","I","A","N","N","O","T","A"], prevAnswers: [{"word":"NATIONALISING","pct":4},{"word":"NATIONAL","pct":9},{"word":"COMING","pct":22},{"word":"TONAL","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0073", letters: ["W","S","I","R","J","I","S","O","P","N","N","E","C","T","G","I","U","N","E","A","R","D"], prevAnswers: [{"word":"PROCESSING","pct":4},{"word":"PROCESS","pct":15},{"word":"DRAIN","pct":30},{"word":"PROSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0074", letters: ["V","L","O","S","I","I","B","E","N","G","A","I","O","I","A","T","T","L","Y","T","E","A"], prevAnswers: [{"word":"OBLIGATIONS","pct":4},{"word":"AGATE","pct":15},{"word":"ALONE","pct":30},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0075", letters: ["A","W","I","D","R","N","U","E","O","O","D","A","R","I","T","U","C","T","O","A","L","I"], prevAnswers: [{"word":"ARTICULATION","pct":4},{"word":"CAUTION","pct":15},{"word":"ACRE","pct":30},{"word":"AUTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0076", letters: ["E","C","E","H","T","N","O","R","G","I","N","G","O","O","I","I","O","O","N","T","O","T"], prevAnswers: [{"word":"RECOGNITION","pct":4},{"word":"HERON","pct":15},{"word":"CENT","pct":30},{"word":"CORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0077", letters: ["M","O","S","E","A","H","U","U","C","E","T","R","O","E","F","W","N","E","T","O","I","O"], prevAnswers: [{"word":"COURTHOUSE","pct":4},{"word":"COURT","pct":15},{"word":"HOUSE","pct":30},{"word":"MOURN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0078", letters: ["U","C","E","R","T","A","F","V","P","I","N","U","T","O","N","D","U","E","R","N","M","O"], prevAnswers: [{"word":"PRECAUTION","pct":4},{"word":"CAUTION","pct":15},{"word":"UNION","pct":30},{"word":"FACE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0079", letters: ["T","O","T","A","K","N","I","E","E","T","I","T","T","S","A","L","O","C","E","P","M","U"], prevAnswers: [{"word":"COMPLAINTS","pct":4},{"word":"PAINT","pct":15},{"word":"PLAIN","pct":30},{"word":"SAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0080", letters: ["D","I","E","E","U","A","V","I","G","S","L","D","N","V","E","I","I","C","N","S","H","A"], prevAnswers: [{"word":"INDIVIDUALISE","pct":4},{"word":"ALIEN","pct":15},{"word":"HINGE","pct":30},{"word":"SLAVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0081", letters: ["K","B","I","O","A","N","O","T","H","S","W","Y","A","V","N","S","C","O","H","R","E","L"], prevAnswers: [{"word":"RELOCATIONS","pct":4},{"word":"LOCATION","pct":9},{"word":"COAT","pct":30},{"word":"KNOT","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0082", letters: ["T","T","T","F","O","M","N","E","S","N","E","A","M","K","E","O","S","E","U","E","U","R"], prevAnswers: [{"word":"MEASUREMENT","pct":4},{"word":"EASE","pct":15},{"word":"KEEN","pct":30},{"word":"KNEE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0083", letters: ["U","N","R","I","D","U","T","L","A","N","S","R","I","O","I","B","O","S","E","I","O","T"], prevAnswers: [{"word":"INDUSTRIALIST","pct":4},{"word":"ROBOT","pct":15},{"word":"TRIAL","pct":30},{"word":"BIND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0084", letters: ["H","N","E","P","B","D","G","H","S","I","N","S","U","A","P","R","G","I","H","H","D","D"], prevAnswers: [{"word":"SUSPENDING","pct":4},{"word":"ENDING","pct":15},{"word":"SPEND","pct":30},{"word":"BIND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0085", letters: ["E","V","H","P","H","S","I","G","A","Y","C","O","R","V","O","T","O","O","T","H","H","P"], prevAnswers: [{"word":"PHOTOGRAPHIC","pct":4},{"word":"VIGOR","pct":15},{"word":"POOR","pct":30},{"word":"ROOT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0086", letters: ["E","B","E","O","R","W","S","D","O","T","R","R","O","O","C","A","C","D","K","R","E","U"], prevAnswers: [{"word":"TRACKRECORD","pct":4},{"word":"RECORD","pct":15},{"word":"TRACE","pct":30},{"word":"TRACK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0087", letters: ["Y","E","E","E","G","A","D","E","K","L","F","S","G","P","E","D","N","O","R","T","N","U"], prevAnswers: [{"word":"UNDERPLAYED","pct":4},{"word":"ALERT","pct":15},{"word":"DELAY","pct":30},{"word":"EAGLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0088", letters: ["Y","I","E","B","U","N","L","H","I","T","I","D","V","E","N","G","J","P","R","S","W","E"], prevAnswers: [{"word":"UNYIELDING","pct":4},{"word":"ELITE","pct":15},{"word":"INTER","pct":30},{"word":"UNTIL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0089", letters: ["B","O","R","Y","H","P","E","L","H","V","D","P","U","O","R","I","P","O","W","S","H","C"], prevAnswers: [{"word":"WORSHIPPED","pct":4},{"word":"HIPPO","pct":15},{"word":"ORDER","pct":30},{"word":"REPLY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0090", letters: ["R","I","C","O","I","S","T","H","W","U","E","R","R","L","I","A","S","T","L","O","T","E"], prevAnswers: [{"word":"ILLUSTRATES","pct":4},{"word":"THREAT","pct":15},{"word":"EARTH","pct":30},{"word":"STARE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0091", letters: ["N","C","F","C","R","T","K","S","T","I","S","N","R","A","D","U","S","H","L","N","I","T"], prevAnswers: [{"word":"INDUSTRIAL","pct":4},{"word":"TIDAL","pct":15},{"word":"TRIAL","pct":30},{"word":"DIRT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0092", letters: ["I","P","H","L","A","E","E","L","A","R","I","G","A","C","E","N","T","A","L","S","I","O"], prevAnswers: [{"word":"PERCENTAGE","pct":4},{"word":"SINGLE","pct":15},{"word":"REIGN","pct":30},{"word":"REPEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0093", letters: ["E","N","E","M","E","M","T","T","I","T","E","R","U","E","L","R","E","R","D","T","R","C"], prevAnswers: [{"word":"RECRUITMENT","pct":4},{"word":"ELEMENT","pct":15},{"word":"ENTER","pct":30},{"word":"UTTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0094", letters: ["Y","R","E","T","R","N","N","I","S","Y","S","G","I","F","U","N","D","A","I","C","A","R"], prevAnswers: [{"word":"FUNDRAISING","pct":4},{"word":"DIGIT","pct":15},{"word":"FUNGI","pct":30},{"word":"REIGN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0095", letters: ["I","V","E","R","F","T","E","Y","S","I","Y","T","H","U","D","U","I","N","G","E","Y","G"], prevAnswers: [{"word":"EVERYTHING","pct":4},{"word":"EVERY","pct":15},{"word":"GUIDE","pct":30},{"word":"THING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0096", letters: ["R","L","I","A","I","E","A","S","G","A","L","T","I","A","L","A","C","N","Y","P","N","R"], prevAnswers: [{"word":"REALISTICALLY","pct":4},{"word":"AERIAL","pct":15},{"word":"ALLAY","pct":30},{"word":"ATLAS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0097", letters: ["D","L","E","P","D","R","W","B","S","Y","C","L","O","P","S","H","L","G","E","R","O","Y"], prevAnswers: [{"word":"PSYCHOLOGY","pct":4},{"word":"CHORE","pct":15},{"word":"GLOBE","pct":30},{"word":"HORSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0098", letters: ["N","T","H","R","I","T","M","O","F","R","P","B","I","H","R","G","N","H","F","E","W","A"], prevAnswers: [{"word":"FINGERPRINT","pct":4},{"word":"FINGER","pct":15},{"word":"ANGER","pct":30},{"word":"GOING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0099", letters: ["R","S","N","O","L","V","O","T","I","F","I","E","A","O","E","P","L","R","M","X","Y","O"], prevAnswers: [{"word":"EXPLORATION","pct":4},{"word":"EARLY","pct":15},{"word":"PEARL","pct":30},{"word":"PLATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0100", letters: ["O","L","M","T","C","R","O","E","A","A","E","R","G","W","T","N","H","L","T","H","K","P"], prevAnswers: [{"word":"WATERCOLOR","pct":4},{"word":"GREAT","pct":15},{"word":"WATER","pct":30},{"word":"ACRE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0101", letters: ["R","T","I","F","T","O","J","T","I","B","U","S","A","G","T","J","H","B","A","G","E","L"], prevAnswers: [{"word":"JUSTIFIABLE","pct":4},{"word":"ROBUST","pct":15},{"word":"STABLE","pct":22},{"word":"JOUST","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0102", letters: ["P","I","G","I","L","O","N","S","L","E","D","V","I","V","E","E","H","T","R","O","N","O"], prevAnswers: [{"word":"DEVELOPING","pct":4},{"word":"DEVELOP","pct":15},{"word":"DEVIL","pct":30},{"word":"DOING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0103", letters: ["P","H","A","Y","R","O","O","N","L","M","F","U","D","E","T","V","N","R","O","E","S","V"], prevAnswers: [{"word":"PROFOUNDLY","pct":4},{"word":"FOUND","pct":15},{"word":"HOUND","pct":30},{"word":"PROOF","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0104", letters: ["N","I","R","C","G","S","I","A","O","F","H","T","M","I","O","I","E","A","I","B","B","D"], prevAnswers: [{"word":"DEMOCRATISING","pct":4},{"word":"HIRING","pct":15},{"word":"COMET","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0105", letters: ["I","H","R","E","E","C","E","P","D","D","E","N","I","A","L","U","T","C","I","B","A","T"], prevAnswers: [{"word":"UNPREDICTABLE","pct":4},{"word":"ATTIC","pct":15},{"word":"BLADE","pct":30},{"word":"BLUNT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0106", letters: ["R","P","S","V","E","P","N","S","Y","A","R","N","W","B","A","O","R","P","T","I","T","A"], prevAnswers: [{"word":"PREPARATIONS","pct":4},{"word":"APRON","pct":15},{"word":"RATIO","pct":30},{"word":"EARN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0107", letters: ["T","U","I","P","I","W","E","N","O","V","D","A","R","Y","N","H","T","S","U","O","B","C"], prevAnswers: [{"word":"EARTHBOUND","pct":4},{"word":"BOUND","pct":15},{"word":"DEATH","pct":30},{"word":"EARTH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0108", letters: ["S","H","C","O","S","D","O","C","L","B","J","S","A","H","T","R","E","T","C","H","B","T"], prevAnswers: [{"word":"CHOCOLATES","pct":4},{"word":"THREAT","pct":15},{"word":"CHOSE","pct":30},{"word":"LASER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0109", letters: ["A","F","N","X","T","N","A","E","P","E","I","R","E","H","M","E","A","L","U","A","T","G"], prevAnswers: [{"word":"EXPERIMENT","pct":4},{"word":"ANIME","pct":15},{"word":"EAGLE","pct":30},{"word":"FAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0110", letters: ["A","L","A","G","R","R","U","O","O","E","L","C","C","R","N","G","K","N","E","C","A","V"], prevAnswers: [{"word":"OCCURRENCE","pct":4},{"word":"RULER","pct":15},{"word":"COAL","pct":30},{"word":"CURE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0111", letters: ["S","E","Y","P","S","L","N","I","H","F","U","A","T","Y","A","L","N","T","D","O","P","R"], prevAnswers: [{"word":"PLAYFULNESS","pct":4},{"word":"UNLESS","pct":15},{"word":"PLAIN","pct":30},{"word":"PLANE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0112", letters: ["R","S","N","A","E","S","E","L","R","N","E","M","U","I","M","H","V","T","Y","Y","N","A"], prevAnswers: [{"word":"NATURALNESS","pct":4},{"word":"LESSEN","pct":15},{"word":"ENEMY","pct":30},{"word":"HEEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0113", letters: ["R","R","I","N","S","E","V","N","U","I","T","D","N","S","Y","O","R","E","A","C","V","T"], prevAnswers: [{"word":"UNIVERSITY","pct":4},{"word":"ACORN","pct":15},{"word":"INNER","pct":30},{"word":"RIVER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0114", letters: ["O","D","N","E","P","G","E","S","E","R","N","R","C","T","S","I","I","O","S","R","B","S"], prevAnswers: [{"word":"DESCRIBING","pct":4},{"word":"BRINE","pct":15},{"word":"BRING","pct":30},{"word":"REND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0115", letters: ["U","N","T","I","T","I","R","S","T","V","E","E","I","J","T","R","S","E","D","O","V","T"], prevAnswers: [{"word":"UNIVERSITIES","pct":4},{"word":"UNIVERSE","pct":9},{"word":"RESET","pct":30},{"word":"RIVER","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0116", letters: ["K","S","E","I","A","E","I","R","T","T","T","E","P","W","N","E","R","T","T","T","O","B"], prevAnswers: [{"word":"ENTERPRISE","pct":4},{"word":"ATTIRE","pct":15},{"word":"ENTIRE","pct":22},{"word":"ENTER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0117", letters: ["E","Y","R","D","E","O","R","E","T","I","O","R","S","E","M","O","L","E","T","H","P","U"], prevAnswers: [{"word":"UPHOLSTERY","pct":4},{"word":"ERROR","pct":15},{"word":"HORSE","pct":30},{"word":"PULSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0118", letters: ["N","S","U","N","O","I","A","M","N","T","I","S","S","A","N","D","R","B","C","I","M","A"], prevAnswers: [{"word":"INDICATIONS","pct":4},{"word":"ACIDS","pct":15},{"word":"SAINT","pct":30},{"word":"INTO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0119", letters: ["M","N","V","O","E","R","E","E","G","N","T","G","C","O","I","R","O","O","N","E","O","E"], prevAnswers: [{"word":"GOVERNMENT","pct":4},{"word":"ENTIRE","pct":15},{"word":"ENTER","pct":30},{"word":"INTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0120", letters: ["N","X","P","R","S","P","E","S","E","T","N","I","S","L","E","O","S","A","R","T","N","S"], prevAnswers: [{"word":"EXPRESSIONS","pct":4},{"word":"EXPRESS","pct":15},{"word":"SESSION","pct":22},{"word":"ENTER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0121", letters: ["T","I","T","A","A","V","O","D","B","U","N","N","O","G","C","O","M","M","A","C","D","D"], prevAnswers: [{"word":"ACCOMMODATION","pct":4},{"word":"COMMON","pct":15},{"word":"BOND","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0122", letters: ["O","R","T","M","P","O","T","E","I","C","L","S","K","T","I","H","G","R","A","N","D","I"], prevAnswers: [{"word":"METROPOLITAN","pct":4},{"word":"GRID","pct":15},{"word":"LOOP","pct":30},{"word":"MESH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0123", letters: ["A","C","H","I","D","E","I","N","O","P","T","S","S","H","N","A","O","U","T","A","N","E"], prevAnswers: [{"word":"INSTANTANEOUS","pct":4},{"word":"ANTIC","pct":15},{"word":"ISSUE","pct":30},{"word":"PEACH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0124", letters: ["O","U","N","S","E","C","L","E","D","E","L","E","T","F","D","E","A","D","I","L","L","T"], prevAnswers: [{"word":"COUNSELLED","pct":4},{"word":"CELL","pct":15},{"word":"DALE","pct":30},{"word":"DATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0125", letters: ["A","A","I","I","P","R","T","L","A","A","P","A","N","B","P","H","R","N","N","E","E","D"], prevAnswers: [{"word":"PARAPHERNALIA","pct":4},{"word":"HAPPEN","pct":15},{"word":"ALTAR","pct":30},{"word":"APART","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0126", letters: ["I","H","B","K","A","N","E","S","E","T","E","R","A","H","R","T","C","E","V","N","N","E"], prevAnswers: [{"word":"ENTERTAINERS","pct":4},{"word":"CENTER","pct":15},{"word":"RETAIN","pct":22},{"word":"ACRES","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0127", letters: ["E","U","O","F","K","N","N","D","T","E","I","T","A","U","K","N","I","D","E","D","O","E"], prevAnswers: [{"word":"FOUNDATION","pct":4},{"word":"FOUND","pct":15},{"word":"AIDE","pct":30},{"word":"FOND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0128", letters: ["E","N","T","D","U","D","V","I","N","U","I","M","I","A","I","S","H","R","L","E","G","A"], prevAnswers: [{"word":"INDIVIDUALISM","pct":4},{"word":"DIVIDE","pct":15},{"word":"DISH","pct":30},{"word":"DUAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0129", letters: ["M","M","H","S","E","E","H","C","D","O","N","O","E","M","E","C","R","T","S","N","T","A"], prevAnswers: [{"word":"CONCENTRATED","pct":4},{"word":"SCHEME","pct":15},{"word":"SECRET","pct":22},{"word":"CHORE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0130", letters: ["F","I","C","I","C","U","O","S","T","S","N","N","C","B","S","E","O","A","S","I","C","H"], prevAnswers: [{"word":"CONSCIOUSNESS","pct":4},{"word":"CONSCIOUS","pct":9},{"word":"COST","pct":30},{"word":"ECHO","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0131", letters: ["R","O","I","D","A","G","R","L","I","C","Y","L","N","E","F","L","E","U","U","L","T","M"], prevAnswers: [{"word":"GRACEFULLY","pct":4},{"word":"FULLY","pct":15},{"word":"GRACE","pct":30},{"word":"DINE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0132", letters: ["H","S","I","P","B","B","B","A","S","A","O","H","S","R","D","B","O","T","S","Y","R","E"], prevAnswers: [{"word":"STORYBOARDS","pct":4},{"word":"BOARD","pct":15},{"word":"HASTE","pct":30},{"word":"HOARD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0133", letters: ["N","T","I","C","D","V","F","A","T","L","U","I","I","F","T","E","C","O","T","S","P","N"], prevAnswers: [{"word":"SPECIFICATION","pct":4},{"word":"ACTION","pct":15},{"word":"FLUTE","pct":30},{"word":"FACT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0134", letters: ["S","E","R","E","L","N","C","R","P","I","E","I","X","C","U","A","N","E","I","T","D","H"], prevAnswers: [{"word":"EXPERIENCE","pct":4},{"word":"PRICE","pct":15},{"word":"LINE","pct":30},{"word":"NICE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0135", letters: ["T","E","L","C","R","B","R","A","F","E","J","I","R","S","N","L","U","E","S","A","S","F"], prevAnswers: [{"word":"CAREFULNESS","pct":4},{"word":"FAILURE","pct":15},{"word":"ASSERT","pct":22},{"word":"FERAL","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0136", letters: ["G","T","C","O","S","H","O","R","E","E","S","Y","M","C","N","L","B","E","H","A","R","M"], prevAnswers: [{"word":"REMEMBRANCES","pct":4},{"word":"BRANCH","pct":15},{"word":"CHARM","pct":30},{"word":"LANCE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0137", letters: ["N","G","A","L","J","D","T","I","I","S","E","I","B","F","S","S","I","M","O","P","V","E"], prevAnswers: [{"word":"POSSIBILITIES","pct":4},{"word":"VISIT","pct":15},{"word":"BITE","pct":30},{"word":"LATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0138", letters: ["P","D","I","P","E","E","T","S","A","H","A","H","O","E","A","L","I","M","G","N","I","Z"], prevAnswers: [{"word":"HOSPITALIZING","pct":4},{"word":"ASIDE","pct":15},{"word":"DEATH","pct":30},{"word":"STEAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0139", letters: ["W","A","E","B","D","N","T","R","R","G","U","O","E","A","R","O","I","Y","T","O","I","T"], prevAnswers: [{"word":"GROUNDWATER","pct":4},{"word":"AROUND","pct":15},{"word":"OUTER","pct":30},{"word":"ROUND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0140", letters: ["U","T","E","L","F","I","C","F","T","N","O","E","R","E","E","F","G","E","N","N","N","K"], prevAnswers: [{"word":"REFLECTION","pct":4},{"word":"COIN","pct":15},{"word":"FELT","pct":30},{"word":"FINE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0141", letters: ["E","M","E","T","S","N","E","R","H","D","D","N","E","B","O","O","T","W","U","S","H","F"], prevAnswers: [{"word":"TREMENDOUS","pct":4},{"word":"TENDER","pct":15},{"word":"ENTER","pct":30},{"word":"SHONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0142", letters: ["C","H","E","R","H","S","R","D","P","I","T","A","E","D","P","A","L","P","T","S","P","D"], prevAnswers: [{"word":"LEADERSHIP","pct":4},{"word":"LEADER","pct":15},{"word":"PEDAL","pct":30},{"word":"STARE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0143", letters: ["E","D","O","U","C","O","O","T","S","R","W","T","B","A","T","N","T","S","S","I","O","F"], prevAnswers: [{"word":"DECORATION","pct":4},{"word":"CROWN","pct":15},{"word":"INTRO","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0144", letters: ["O","T","V","H","C","I","N","A","C","O","C","M","E","L","A","R","I","Y","M","N","E","G"], prevAnswers: [{"word":"MECHANICAL","pct":4},{"word":"ANTIC","pct":15},{"word":"CRANE","pct":30},{"word":"CRIME","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0145", letters: ["I","R","E","L","E","G","E","T","A","V","W","E","I","P","I","N","O","M","H","S","T","T"], prevAnswers: [{"word":"RELATIONSHIP","pct":4},{"word":"ALTER","pct":15},{"word":"GREEN","pct":30},{"word":"LATER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0146", letters: ["R","B","P","I","L","I","R","P","R","Y","H","D","A","L","A","C","V","C","L","L","I","T"], prevAnswers: [{"word":"PRACTICALLY","pct":4},{"word":"APRIL","pct":15},{"word":"BIRD","pct":30},{"word":"CALL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0147", letters: ["Y","O","S","M","A","N","I","R","P","L","T","A","O","I","G","N","N","B","S","I","C","J"], prevAnswers: [{"word":"RATIONALISING","pct":4},{"word":"NATIONAL","pct":9},{"word":"ALIGN","pct":30},{"word":"ALTAR","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0148", letters: ["D","G","E","A","T","E","L","W","B","L","N","O","L","M","K","T","E","E","E","N","R","N"], prevAnswers: [{"word":"KNOWLEDGEABLE","pct":4},{"word":"KNOWLEDGE","pct":9},{"word":"ENTER","pct":30},{"word":"LEDGE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0149", letters: ["O","C","I","S","M","O","T","N","V","M","A","G","S","M","U","C","T","B","N","I","O","L"], prevAnswers: [{"word":"COMMUNICATING","pct":4},{"word":"COMMA","pct":15},{"word":"COAT","pct":30},{"word":"COIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0150", letters: ["U","A","O","N","Y","O","I","H","T","E","T","O","C","T","A","N","F","O","N","O","R","V"], prevAnswers: [{"word":"CONFRONTATION","pct":4},{"word":"FRONT","pct":15},{"word":"FONT","pct":30},{"word":"NOTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0151", letters: ["M","A","N","N","U","O","N","N","M","E","H","O","I","R","S","M","A","T","G","T","O","R"], prevAnswers: [{"word":"RESTORATION","pct":4},{"word":"RATIO","pct":15},{"word":"TRAIN","pct":30},{"word":"MAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0152", letters: ["O","N","C","K","B","I","K","I","I","T","A","B","I","R","A","R","B","E","B","I","T","K"], prevAnswers: [{"word":"ARBITRATION","pct":4},{"word":"OBTAIN","pct":15},{"word":"BRAIN","pct":30},{"word":"RABBI","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0153", letters: ["S","T","A","L","T","N","I","A","P","G","N","T","M","C","O","T","E","A","P","E","A","O"], prevAnswers: [{"word":"CONTEMPLATING","pct":4},{"word":"METAL","pct":15},{"word":"PAINT","pct":30},{"word":"PLAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0154", letters: ["Y","N","C","B","L","P","B","I","F","E","E","L","K","T","R","E","C","N","A","B","D","M"], prevAnswers: [{"word":"DELIBERATELY","pct":4},{"word":"BLEED","pct":15},{"word":"BREED","pct":30},{"word":"FIBER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0155", letters: ["T","D","T","W","R","S","H","O","E","E","R","A","R","S","E","N","I","T","S","A","E","H"], prevAnswers: [{"word":"WORTHINESS","pct":4},{"word":"ASSERT","pct":15},{"word":"SHARE","pct":30},{"word":"SHORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0156", letters: ["E","D","A","B","M","I","E","S","S","T","L","N","O","N","U","F","G","R","D","E","T","A"], prevAnswers: [{"word":"GRATEFULNESS","pct":4},{"word":"LESSON","pct":15},{"word":"AROSE","pct":30},{"word":"GRATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0157", letters: ["O","P","N","L","I","K","C","O","U","N","C","N","K","T","E","C","O","A","K","H","A","A"], prevAnswers: [{"word":"CHECKPOINT","pct":4},{"word":"ACCENT","pct":15},{"word":"CHECK","pct":30},{"word":"POINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0158", letters: ["N","I","Z","E","E","G","I","V","Y","S","W","L","W","B","O","B","A","L","G","L","Y","E"], prevAnswers: [{"word":"GLOBALIZING","pct":4},{"word":"GLOBAL","pct":15},{"word":"ALIGN","pct":30},{"word":"BALE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0159", letters: ["I","A","N","N","N","R","E","T","O","T","E","S","I","M","U","E","G","E","T","Q","B","D"], prevAnswers: [{"word":"QUESTIONNAIRE","pct":4},{"word":"INTER","pct":15},{"word":"NOISE","pct":30},{"word":"QUEEN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0160", letters: ["I","A","I","A","T","M","T","E","O","I","O","I","R","G","E","N","T","W","L","S","N","T"], prevAnswers: [{"word":"LEGITIMATIONS","pct":4},{"word":"ENTIRE","pct":15},{"word":"ATONE","pct":30},{"word":"INTRO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0161", letters: ["E","R","U","O","V","O","L","N","E","T","U","O","R","N","T","I","A","Y","F","O","N","L"], prevAnswers: [{"word":"REVOLUTIONARY","pct":4},{"word":"LOVER","pct":15},{"word":"TONAL","pct":30},{"word":"LOAN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0162", letters: ["V","B","H","I","L","C","O","C","Y","E","E","N","L","T","D","O","C","A","T","M","I","E"], prevAnswers: [{"word":"ECONOMICAL","pct":4},{"word":"ECONOMIC","pct":9},{"word":"MODEL","pct":30},{"word":"BONE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0163", letters: ["V","V","O","F","T","R","C","M","I","O","I","S","T","F","O","D","E","B","O","S","D","A"], prevAnswers: [{"word":"DISCOMFITED","pct":4},{"word":"SMITE","pct":15},{"word":"VOMIT","pct":30},{"word":"BEDS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0164", letters: ["U","T","T","T","E","O","N","F","O","E","G","I","O","C","U","S","R","E","O","N","I","D"], prevAnswers: [{"word":"CONSIDERING","pct":4},{"word":"DRIFT","pct":15},{"word":"SNIDE","pct":30},{"word":"FIRE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0165", letters: ["C","U","L","G","A","C","M","R","N","T","A","U","I","A","W","U","L","T","E","P","F","A"], prevAnswers: [{"word":"ACCUMULATING","pct":4},{"word":"FLAT","pct":15},{"word":"GRIN","pct":30},{"word":"RING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0166", letters: ["C","K","C","E","D","M","Y","I","O","P","S","S","T","T","A","H","E","R","O","T","S","G"], prevAnswers: [{"word":"SYMPATHETIC","pct":4},{"word":"ASSERT","pct":15},{"word":"MYSTIC","pct":22},{"word":"ASSET","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0167", letters: ["S","O","H","B","T","G","C","S","L","E","N","P","W","O","R","U","T","B","S","O","Y","O"], prevAnswers: [{"word":"YOUNGSTERS","pct":4},{"word":"PUNCH","pct":15},{"word":"STERN","pct":30},{"word":"YOUNG","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0168", letters: ["E","N","E","T","G","I","D","E","L","U","L","E","F","A","I","S","R","E","N","E","E","P"], prevAnswers: [{"word":"GUIDELINES","pct":4},{"word":"TENDER","pct":15},{"word":"AISLE","pct":30},{"word":"DEFER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0169", letters: ["T","I","A","T","N","I","S","O","I","O","M","R","N","L","T","A","G","O","R","H","S","O"], prevAnswers: [{"word":"HARMONISATION","pct":4},{"word":"GROIN","pct":15},{"word":"GRAM","pct":30},{"word":"HARM","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0170", letters: ["H","O","R","C","E","I","T","O","N","T","L","W","T","B","A","N","E","A","S","L","P","M"], prevAnswers: [{"word":"CONTEMPLATE","pct":4},{"word":"PLANET","pct":15},{"word":"CROWN","pct":30},{"word":"PENAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0171", letters: ["N","O","R","H","R","E","G","T","H","Y","N","R","E","T","R","I","D","V","H","N","I","O"], prevAnswers: [{"word":"NORTHERNER","pct":4},{"word":"NORTHERN","pct":9},{"word":"THRONE","pct":22},{"word":"NORTH","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0172", letters: ["O","O","S","T","O","T","T","T","O","E","G","W","R","G","N","L","L","Y","C","I","E","T"], prevAnswers: [{"word":"STORYTELLING","pct":4},{"word":"STORY","pct":15},{"word":"LINE","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0173", letters: ["I","G","L","O","S","S","O","N","E","T","P","H","T","I","G","K","C","E","I","H","U","N"], prevAnswers: [{"word":"TECHNOLOGISTS","pct":4},{"word":"GLOSS","pct":15},{"word":"PHONE","pct":30},{"word":"ECHO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0174", letters: ["R","E","O","G","L","B","T","R","A","H","O","M","P","O","P","B","H","L","Y","N","N","E"], prevAnswers: [{"word":"PHOTOGRAPH","pct":4},{"word":"POWER","pct":15},{"word":"HELP","pct":30},{"word":"PART","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0175", letters: ["T","I","T","D","A","L","V","E","H","R","E","L","K","E","I","Y","R","T","I","E","H","E"], prevAnswers: [{"word":"RELATIVELY","pct":4},{"word":"DEVIL","pct":15},{"word":"ELITE","pct":30},{"word":"LEVEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0176", letters: ["O","E","G","O","S","I","E","T","U","T","D","E","O","I","I","Y","N","I","Y","N","C","T"], prevAnswers: [{"word":"DISTINCTION","pct":4},{"word":"DISTINCT","pct":9},{"word":"DENY","pct":30},{"word":"NEED","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0177", letters: ["A","B","S","N","C","L","L","F","P","O","Y","O","K","B","I","N","C","C","E","I","A","H"], prevAnswers: [{"word":"BLOCKCHAIN","pct":4},{"word":"BLOCK","pct":15},{"word":"CHAIN","pct":30},{"word":"FLOCK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0178", letters: ["P","O","D","N","A","O","C","M","L","O","P","E","N","O","E","R","T","O","O","N","A","I"], prevAnswers: [{"word":"COOPERATION","pct":4},{"word":"OPERATION","pct":9},{"word":"ATONE","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0179", letters: ["S","A","D","O","N","G","T","U","H","I","L","E","D","T","I","W","Y","T","C","R","E","P"], prevAnswers: [{"word":"TYPEWRITING","pct":4},{"word":"AGILE","pct":15},{"word":"CREW","pct":30},{"word":"DATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0180", letters: ["R","A","I","N","E","A","T","O","I","T","C","E","N","M","N","E","O","E","L","I","R","T"], prevAnswers: [{"word":"INTERACTION","pct":4},{"word":"ACTION","pct":15},{"word":"CENTER","pct":22},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0181", letters: ["R","O","W","T","K","I","N","E","N","N","G","W","B","E","M","C","U","H","N","M","R","Y"], prevAnswers: [{"word":"NETWORKING","pct":4},{"word":"NETWORK","pct":15},{"word":"IRON","pct":30},{"word":"KING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0182", letters: ["E","R","C","B","S","R","R","I","G","H","O","N","I","S","T","A","E","E","E","I","N","G"], prevAnswers: [{"word":"ORIGINATING","pct":4},{"word":"ORIGIN","pct":15},{"word":"THRONE","pct":22},{"word":"ATONE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0183", letters: ["N","L","E","V","M","E","A","I","I","H","V","T","N","L","S","O","N","P","B","S","O","G"], prevAnswers: [{"word":"INNOVATIVE","pct":4},{"word":"NOVEL","pct":15},{"word":"VITAL","pct":30},{"word":"HEAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0184", letters: ["S","P","I","R","P","A","A","E","A","D","I","E","T","N","R","L","S","I","G","M","N","O"], prevAnswers: [{"word":"ASPIRATIONS","pct":4},{"word":"PIRATE","pct":15},{"word":"NOISE","pct":30},{"word":"ONSET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0185", letters: ["N","E","D","A","I","T","C","N","N","A","O","P","O","L","D","R","S","S","U","H","R","E"], prevAnswers: [{"word":"CORRESPONDENT","pct":4},{"word":"RESPOND","pct":15},{"word":"DANCE","pct":30},{"word":"CENT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0186", letters: ["K","R","U","R","G","H","W","U","O","E","A","S","R","T","R","C","E","V","A","T","H","M"], prevAnswers: [{"word":"TREACHEROUS","pct":4},{"word":"TREASURE","pct":9},{"word":"TEACHER","pct":22},{"word":"ARCHER","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0187", letters: ["A","S","U","W","I","T","S","T","H","N","A","B","V","A","B","E","S","C","G","L","T","I"], prevAnswers: [{"word":"SUSTAINABLE","pct":4},{"word":"STABLE","pct":15},{"word":"BEAST","pct":30},{"word":"SAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0188", letters: ["C","O","N","G","R","E","M","I","R","O","V","H","U","D","D","A","I","T","N","A","O","R"], prevAnswers: [{"word":"OVERCOMING","pct":4},{"word":"COMING","pct":15},{"word":"COME","pct":30},{"word":"DOVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0189", letters: ["G","I","W","L","N","Z","L","A","K","I","E","N","O","Y","P","R","S","A","H","R","S","O"], prevAnswers: [{"word":"PERSONALIZING","pct":4},{"word":"PERSONAL","pct":9},{"word":"ALIGN","pct":30},{"word":"PENAL","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0190", letters: ["O","U","H","A","H","T","G","T","B","D","S","F","U","F","O","Y","L","L","M","V","A","Y"], prevAnswers: [{"word":"THOUGHTFULLY","pct":4},{"word":"FULLY","pct":15},{"word":"TOUGH","pct":30},{"word":"BATH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0191", letters: ["Y","W","O","R","A","N","T","D","L","R","R","Y","D","N","A","S","A","C","I","K","S","L"], prevAnswers: [{"word":"WORLDCLASS","pct":4},{"word":"ARRAY","pct":15},{"word":"CLASS","pct":30},{"word":"DROWN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0192", letters: ["O","T","C","E","N","D","G","R","S","T","I","N","V","U","I","R","T","S","B","H","D","I"], prevAnswers: [{"word":"DISTRIBUTING","pct":4},{"word":"BITING","pct":15},{"word":"HIRING","pct":22},{"word":"STRING","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0193", letters: ["D","O","G","O","N","I","N","G","U","U","E","A","G","O","M","O","Y","O","P","P","C","E"], prevAnswers: [{"word":"COMPOUNDING","pct":4},{"word":"DOING","pct":15},{"word":"GOING","pct":30},{"word":"MOUND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0194", letters: ["B","O","N","D","H","U","U","F","T","T","O","P","N","L","S","A","E","C","T","E","D","O"], prevAnswers: [{"word":"SOUTHBOUND","pct":4},{"word":"OUTSET","pct":15},{"word":"BOUND","pct":30},{"word":"DEPOT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0195", letters: ["B","I","I","E","A","L","S","N","G","T","C","C","G","T","I","A","E","P","R","P","T","T"], prevAnswers: [{"word":"CAPITALISING","pct":4},{"word":"CAPITAL","pct":15},{"word":"ACCEPT","pct":22},{"word":"ATTIC","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0196", letters: ["A","O","D","R","N","A","W","A","T","R","E","U","R","S","E","N","D","E","K","A","T","R"], prevAnswers: [{"word":"UNDERTAKERS","pct":4},{"word":"ENDURE","pct":15},{"word":"RENDER","pct":22},{"word":"REWARD","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0197", letters: ["I","P","H","D","N","L","I","S","I","E","H","C","V","E","A","A","S","E","A","O","E","U"], prevAnswers: [{"word":"DISCIPLINE","pct":4},{"word":"ACHE","pct":15},{"word":"CASE","pct":30},{"word":"CHIP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0198", letters: ["E","R","O","N","S","U","S","L","L","S","I","C","H","V","D","S","D","P","I","R","B","O"], prevAnswers: [{"word":"DISCLOSURES","pct":4},{"word":"ISSUE","pct":15},{"word":"LORE","pct":30},{"word":"ROLL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0199", letters: ["G","A","H","U","R","P","R","H","H","R","G","O","T","I","E","I","B","E","S","S","V","E"], prevAnswers: [{"word":"PROGRESSIVE","pct":4},{"word":"PROGRESS","pct":9},{"word":"PRESS","pct":30},{"word":"PROBE","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0200", letters: ["D","N","F","L","E","I","I","A","E","N","C","B","H","O","I","U","N","Q","T","S","E","U"], prevAnswers: [{"word":"UNQUESTIONED","pct":4},{"word":"ABUSE","pct":15},{"word":"NOISE","pct":30},{"word":"QUEST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0201", letters: ["N","B","O","W","N","V","R","D","E","K","R","S","R","E","E","R","A","L","A","W","D","N"], prevAnswers: [{"word":"BORDERLAND","pct":4},{"word":"BORDER","pct":15},{"word":"ORDER","pct":30},{"word":"AREA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0202", letters: ["N","O","A","Q","I","I","J","E","U","N","T","S","F","G","S","A","E","S","E","U","E","S"], prevAnswers: [{"word":"QUESTIONING","pct":4},{"word":"FEAST","pct":15},{"word":"QUEST","pct":30},{"word":"STING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0203", letters: ["R","O","S","P","R","D","E","R","E","T","O","D","A","D","A","H","I","D","S","C","W","V"], prevAnswers: [{"word":"WIDESPREAD","pct":4},{"word":"SPREAD","pct":15},{"word":"AIDED","pct":30},{"word":"ORDER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0204", letters: ["V","H","A","O","N","C","H","L","W","A","E","L","O","O","H","N","N","G","D","G","I","E"], prevAnswers: [{"word":"CHALLENGING","pct":4},{"word":"ALLOW","pct":15},{"word":"ALONE","pct":30},{"word":"ALONG","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0205", letters: ["O","Y","B","C","E","L","N","E","A","V","E","W","H","I","T","N","O","B","N","C","E","J"], prevAnswers: [{"word":"OBJECTIVELY","pct":4},{"word":"OBJECTIVE","pct":9},{"word":"OBJECT","pct":22},{"word":"EVENT","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0206", letters: ["R","A","H","H","T","B","I","A","S","O","N","E","E","R","T","S","E","B","M","I","N","G"], prevAnswers: [{"word":"BRAINSTORMING","pct":4},{"word":"BRAIN","pct":15},{"word":"INTRO","pct":30},{"word":"SAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0207", letters: ["J","L","B","O","M","E","H","R","W","A","T","N","P","T","I","L","D","I","C","A","E","C"], prevAnswers: [{"word":"PROBLEMATICAL","pct":4},{"word":"PROBLEM","pct":15},{"word":"ELITE","pct":30},{"word":"THROW","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0208", letters: ["R","U","O","B","H","H","E","I","H","O","N","L","G","H","O","D","O","F","I","A","E","W"], prevAnswers: [{"word":"NEIGHBOURHOOD","pct":4},{"word":"BILE","pct":15},{"word":"DOLE","pct":30},{"word":"DONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0209", letters: ["A","P","M","O","N","V","D","E","C","G","I","I","R","B","N","Z","T","A","P","T","R","O"], prevAnswers: [{"word":"DEMOCRATIZING","pct":4},{"word":"INTRO","pct":15},{"word":"MERIT","pct":30},{"word":"TIRED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0210", letters: ["O","C","R","E","D","B","A","R","C","D","H","O","O","G","T","H","G","N","N","I","S","I"], prevAnswers: [{"word":"RECOGNISING","pct":4},{"word":"NIGHT","pct":15},{"word":"SHORE","pct":30},{"word":"SIGHT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0211", letters: ["O","N","P","S","S","W","P","I","T","N","E","V","L","N","O","H","A","U","R","I","T","C"], prevAnswers: [{"word":"CULTIVATION","pct":4},{"word":"ACTION","pct":15},{"word":"HAVEN","pct":30},{"word":"VAULT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0212", letters: ["D","Y","E","T","T","V","L","L","U","W","I","O","B","E","N","N","S","A","E","A","U","G"], prevAnswers: [{"word":"ABSOLUTELY","pct":4},{"word":"ABSOLUTE","pct":9},{"word":"SOLELY","pct":22},{"word":"INANE","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0213", letters: ["S","R","O","T","D","T","W","A","N","M","R","D","I","K","O","R","S","L","O","C","J","D"], prevAnswers: [{"word":"COORDINATORS","pct":4},{"word":"WORST","pct":15},{"word":"COOK","pct":30},{"word":"CORD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0214", letters: ["R","E","H","I","U","A","T","H","I","R","P","G","R","T","N","N","I","N","E","I","K","L"], prevAnswers: [{"word":"HEARTENING","pct":4},{"word":"HIRING","pct":15},{"word":"KNIGHT","pct":22},{"word":"RATHER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0215", letters: ["Y","T","S","R","E","F","N","T","T","O","U","O","L","R","G","T","E","B","D","E","T","A"], prevAnswers: [{"word":"UNFORGETTABLE","pct":4},{"word":"FORGET","pct":15},{"word":"FORGE","pct":30},{"word":"ROUGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0216", letters: ["I","T","C","W","E","V","E","E","E","L","L","O","C","M","C","L","I","T","F","Y","M","O"], prevAnswers: [{"word":"COLLECTIVE","pct":4},{"word":"LEVEL","pct":15},{"word":"CELL","pct":30},{"word":"COIL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0217", letters: ["I","G","R","O","R","O","L","N","O","B","J","S","I","E","A","I","A","T","T","L","I","I"], prevAnswers: [{"word":"GLOBALISATION","pct":4},{"word":"GLOBAL","pct":15},{"word":"GLOBE","pct":30},{"word":"LABOR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0218", letters: ["I","B","I","M","F","L","R","U","E","I","R","P","N","E","U","Q","K","T","C","E","L","F"], prevAnswers: [{"word":"EQUILIBRIUM","pct":4},{"word":"PRIME","pct":15},{"word":"CURL","pct":30},{"word":"MENU","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0219", letters: ["I","I","N","E","M","G","A","S","T","A","E","T","M","E","N","N","I","T","A","H","O","T"], prevAnswers: [{"word":"IMAGINATION","pct":4},{"word":"AGAINST","pct":15},{"word":"AGAIN","pct":30},{"word":"AGATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0220", letters: ["A","S","N","O","E","D","L","I","Y","E","D","T","N","M","F","P","E","A","T","E","X","C"], prevAnswers: [{"word":"EXCEPTIONS","pct":4},{"word":"CANE","pct":15},{"word":"CENT","pct":30},{"word":"DEED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0221", letters: ["N","O","T","E","U","D","E","E","E","S","A","F","R","C","I","T","O","S","N","A","I","N"], prevAnswers: [{"word":"FASCINATIONS","pct":4},{"word":"DEFER","pct":15},{"word":"DOTE","pct":30},{"word":"FEAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0222", letters: ["T","N","N","T","E","M","E","S","O","E","T","S","E","I","N","D","V","I","B","O","T","N"], prevAnswers: [{"word":"INVESTMENTS","pct":4},{"word":"INTENT","pct":15},{"word":"INVEST","pct":22},{"word":"TENSE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0223", letters: ["U","T","T","M","O","H","O","N","B","G","L","A","A","U","O","E","L","K","E","R","H","T"], prevAnswers: [{"word":"THROUGHOUT","pct":4},{"word":"THROUGH","pct":15},{"word":"ROUGH","pct":30},{"word":"THERE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0224", letters: ["F","P","S","N","T","Y","B","A","A","O","P","O","G","T","R","E","S","A","E","R","H","P"], prevAnswers: [{"word":"TROPOSPHERE","pct":4},{"word":"REPORT","pct":15},{"word":"SPHERE","pct":22},{"word":"GOES","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0225", letters: ["R","T","N","A","R","A","T","B","F","T","P","I","O","C","I","T","N","C","I","P","A","E"], prevAnswers: [{"word":"PARTICIPATION","pct":4},{"word":"ANTIC","pct":15},{"word":"OCEAN","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0226", letters: ["E","O","R","A","L","A","B","T","H","E","T","E","E","S","E","N","L","L","H","O","Y","H"], prevAnswers: [{"word":"ELABORATELY","pct":4},{"word":"LABOR","pct":15},{"word":"SHEET","pct":30},{"word":"SHONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0227", letters: ["E","S","R","M","A","I","O","A","I","A","T","M","K","C","I","M","O","C","T","N","U","A"], prevAnswers: [{"word":"COMMUNICATORS","pct":4},{"word":"CITIES","pct":15},{"word":"COMMIT","pct":22},{"word":"AROSE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0228", letters: ["A","R","E","D","W","T","I","B","E","A","N","G","I","C","O","E","T","L","R","S","P","R"], prevAnswers: [{"word":"LIBERATING","pct":4},{"word":"ENTIRE","pct":15},{"word":"AWARE","pct":30},{"word":"BEING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0229", letters: ["U","K","H","N","B","O","U","E","D","A","C","T","T","K","D","U","O","I","W","N","R","G"], prevAnswers: [{"word":"ROUNDABOUT","pct":4},{"word":"ROTTEN","pct":15},{"word":"ABOUT","pct":30},{"word":"ACTOR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0230", letters: ["A","A","N","O","D","L","E","I","T","T","T","I","T","C","O","R","N","V","S","T","U","K"], prevAnswers: [{"word":"NUTRITIONAL","pct":4},{"word":"ROTTEN","pct":15},{"word":"SCORN","pct":30},{"word":"TONAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0231", letters: ["U","S","T","R","D","N","D","O","I","I","I","I","A","R","N","Y","I","L","E","N","S","E"], prevAnswers: [{"word":"INDUSTRIALISE","pct":4},{"word":"INNER","pct":15},{"word":"TRIAL","pct":30},{"word":"DINE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0232", letters: ["C","W","E","N","C","E","R","S","T","N","G","U","R","I","A","C","A","I","R","U","T","T"], prevAnswers: [{"word":"RESTRUCTURING","pct":4},{"word":"ANGER","pct":15},{"word":"CAUSE","pct":30},{"word":"RANGE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0233", letters: ["N","T","N","I","R","E","G","N","G","R","H","I","T","N","A","Z","M","I","A","L","I","L"], prevAnswers: [{"word":"INTERNALIZING","pct":4},{"word":"TIMING","pct":15},{"word":"HINGE","pct":30},{"word":"INTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0234", letters: ["T","E","V","N","N","P","E","E","T","O","R","A","I","I","Y","R","N","O","B","A","F","O"], prevAnswers: [{"word":"PREVENTION","pct":4},{"word":"PREVENT","pct":15},{"word":"ARRAY","pct":30},{"word":"EVENT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0235", letters: ["R","P","E","A","P","E","T","N","D","R","H","C","I","A","L","U","W","W","R","E","F","R"], prevAnswers: [{"word":"PERPENDICULAR","pct":4},{"word":"ENTER","pct":15},{"word":"FERAL","pct":30},{"word":"INTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0236", letters: ["A","F","V","C","E","L","W","B","B","I","A","C","O","R","S","O","N","B","E","V","R","T"], prevAnswers: [{"word":"CONTROVERSIAL","pct":4},{"word":"ACORN","pct":15},{"word":"COVER","pct":30},{"word":"LASER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0237", letters: ["U","O","F","R","I","A","U","R","E","Y","L","S","E","E","S","N","C","H","N","S","E","F"], prevAnswers: [{"word":"CHEERFULNESS","pct":4},{"word":"CHEER","pct":15},{"word":"FENCE","pct":30},{"word":"FOUL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0238", letters: ["C","V","G","T","R","T","T","U","R","T","D","N","E","I","E","N","O","V","E","R","C","D"], prevAnswers: [{"word":"UNDERCOVER","pct":4},{"word":"RENDER","pct":15},{"word":"COVER","pct":30},{"word":"TREND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0239", letters: ["R","L","A","A","N","T","H","E","I","O","O","N","E","L","T","A","B","E","C","E","L","H"], prevAnswers: [{"word":"TABLECLOTH","pct":4},{"word":"ENABLE","pct":15},{"word":"ATONE","pct":30},{"word":"CLOTH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0240", letters: ["W","G","I","E","E","A","N","T","A","Y","L","E","R","F","M","B","I","L","N","O","D","E"], prevAnswers: [{"word":"DELIBERATING","pct":4},{"word":"MOBILE","pct":15},{"word":"ALERT","pct":30},{"word":"INTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0241", letters: ["I","O","F","A","T","R","N","O","D","A","I","O","V","N","S","O","P","E","S","E","R","D"], prevAnswers: [{"word":"DEPRESSION","pct":4},{"word":"ARISE","pct":15},{"word":"DONOR","pct":30},{"word":"DRESS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0242", letters: ["O","X","E","L","B","I","A","S","F","I","A","Y","E","L","I","T","V","R","S","E","C","L"], prevAnswers: [{"word":"FLEXIBILITY","pct":4},{"word":"LEASE","pct":15},{"word":"EASE","pct":30},{"word":"ELSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0243", letters: ["O","T","G","H","T","I","O","E","O","A","D","N","L","R","I","S","O","W","E","D","N","C"], prevAnswers: [{"word":"CONSIDERATION","pct":4},{"word":"RATIO","pct":15},{"word":"AIDE","pct":30},{"word":"DONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0244", letters: ["D","M","K","E","C","O","P","A","D","L","B","I","T","G","E","B","E","H","C","I","O","S"], prevAnswers: [{"word":"COMPATIBLE","pct":4},{"word":"DEATH","pct":15},{"word":"GLOBE","pct":30},{"word":"BITE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0245", letters: ["L","G","N","J","R","T","B","I","T","E","R","H","S","A","E","P","R","E","T","E","O","T"], prevAnswers: [{"word":"PROTESTING","pct":4},{"word":"REPORT","pct":15},{"word":"STING","pct":30},{"word":"TREAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0246", letters: ["T","B","H","N","M","A","I","I","N","R","L","B","O","O","I","A","T","I","N","Z","A","L"], prevAnswers: [{"word":"NORMALIZATION","pct":4},{"word":"OBTAIN","pct":15},{"word":"ALARM","pct":30},{"word":"IRON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0247", letters: ["N","R","N","F","D","U","I","Q","I","O","T","U","E","S","M","E","T","A","E","T","N","E"], prevAnswers: [{"word":"TOURNIQUET","pct":4},{"word":"MOUND","pct":15},{"word":"MOURN","pct":30},{"word":"SMOTE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0248", letters: ["H","R","D","N","L","E","A","F","H","B","E","T","F","A","R","L","N","R","K","A","M","E"], prevAnswers: [{"word":"REMARKABLE","pct":4},{"word":"AFTER","pct":15},{"word":"ALTAR","pct":30},{"word":"ALTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0249", letters: ["F","N","E","E","V","A","T","M","L","L","C","U","P","C","C","S","P","A","D","E","I","U"], prevAnswers: [{"word":"SUPPLEMENTAL","pct":4},{"word":"TEMPLE","pct":15},{"word":"ACUTE","pct":30},{"word":"APPLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0250", letters: ["E","S","N","R","T","R","E","L","G","P","A","N","N","S","E","A","T","I","O","W","P","T"], prevAnswers: [{"word":"PRESENTING","pct":4},{"word":"PARENT","pct":15},{"word":"INNER","pct":30},{"word":"PANEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0251", letters: ["O","Y","O","I","S","S","H","N","T","S","I","E","C","P","R","O","T","E","I","L","A","Y"], prevAnswers: [{"word":"PROTECTION","pct":4},{"word":"PROTECT","pct":15},{"word":"HENCE","pct":30},{"word":"PILOT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0252", letters: ["D","P","L","S","O","N","G","A","E","U","O","B","I","V","W","H","N","O","H","R","T","R"], prevAnswers: [{"word":"NORTHBOUND","pct":4},{"word":"BOUND","pct":15},{"word":"HOUND","pct":30},{"word":"INTRO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0253", letters: ["N","O","I","T","E","S","T","V","A","K","I","T","I","D","N","G","O","T","L","E","N","E"], prevAnswers: [{"word":"NEGOTIATIONS","pct":4},{"word":"STING","pct":15},{"word":"STONE","pct":30},{"word":"GONE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0254", letters: ["N","E","X","G","N","T","P","E","A","A","A","R","S","D","S","M","N","S","S","T","O","I"], prevAnswers: [{"word":"EXPRESSION","pct":4},{"word":"EXPRESS","pct":15},{"word":"ANNEX","pct":30},{"word":"PRESS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0255", letters: ["L","I","T","I","O","P","I","C","G","Y","B","A","N","N","S","N","B","O","U","E","L","I"], prevAnswers: [{"word":"POLITICIANS","pct":4},{"word":"BASIC","pct":15},{"word":"BLESS","pct":30},{"word":"CABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0256", letters: ["M","O","U","B","L","G","K","O","C","N","S","S","N","R","I","O","L","I","R","T","A","D"], prevAnswers: [{"word":"CONSOLIDATING","pct":4},{"word":"LOSING","pct":15},{"word":"SOLID","pct":30},{"word":"ALSO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0257", letters: ["A","S","E","E","P","I","I","E","F","B","C","P","T","U","T","F","Q","U","R","E","S","E"], prevAnswers: [{"word":"PICTURESQUE","pct":4},{"word":"SISTER","pct":15},{"word":"EPIC","pct":30},{"word":"FEET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0258", letters: ["T","N","W","I","A","M","J","O","R","P","B","O","E","M","T","D","P","K","F","O","E","C"], prevAnswers: [{"word":"WOODPECKER","pct":4},{"word":"MAJOR","pct":15},{"word":"DAMP","pct":30},{"word":"DECK","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0259", letters: ["R","G","F","A","O","O","T","M","T","F","T","E","C","A","N","N","E","O","W","U","P","R"], prevAnswers: [{"word":"UNFORGOTTEN","pct":4},{"word":"ROTTEN","pct":15},{"word":"CENT","pct":30},{"word":"CORE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0260", letters: ["N","H","G","N","M","C","O","N","I","Y","Y","T","O","S","A","R","V","I","N","S","I","T"], prevAnswers: [{"word":"TRANSITIONING","pct":4},{"word":"INTO","pct":15},{"word":"RAYS","pct":30},{"word":"4 or lower","pct":51}] },
  { id: "p0261", letters: ["H","I","T","E","R","C","B","P","S","A","E","S","L","D","H","Y","S","E","D","T","P","E"], prevAnswers: [{"word":"SLEEPYHEAD","pct":4},{"word":"BEACH","pct":15},{"word":"ARCH","pct":30},{"word":"BEAR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0262", letters: ["S","S","N","D","R","T","A","S","I","E","W","U","M","O","D","N","M","I","H","S","Y","O"], prevAnswers: [{"word":"MISUNDERSTAND","pct":4},{"word":"DISASTER","pct":9},{"word":"STAND","pct":30},{"word":"WATER","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0263", letters: ["F","T","C","H","R","A","I","T","I","O","B","N","V","A","C","A","G","G","O","L","L","I"], prevAnswers: [{"word":"COLLABORATING","pct":4},{"word":"ALIGN","pct":15},{"word":"ANTIC","pct":30},{"word":"BATCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0264", letters: ["I","N","G","N","G","D","M","I","I","A","T","V","V","H","R","B","N","E","H","U","O","C"], prevAnswers: [{"word":"ENCOURAGING","pct":4},{"word":"TRADING","pct":15},{"word":"AGING","pct":30},{"word":"COBRA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0265", letters: ["I","O","Y","E","L","P","A","H","A","Y","T","E","R","O","L","L","F","T","N","V","H","F"], prevAnswers: [{"word":"HEARTFELTLY","pct":4},{"word":"HEART","pct":15},{"word":"TREAT","pct":30},{"word":"AREA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0266", letters: ["D","A","S","R","I","N","T","D","E","N","H","U","N","M","G","C","U","A","I","A","M","N"], prevAnswers: [{"word":"UNDERSTANDING","pct":4},{"word":"MIGHT","pct":15},{"word":"STAND","pct":30},{"word":"TUNED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0267", letters: ["V","V","F","I","G","B","N","R","M","E","O","T","I","S","A","C","N","T","B","O","E","G"], prevAnswers: [{"word":"CONFIRMING","pct":4},{"word":"CONFIRM","pct":15},{"word":"BASE","pct":30},{"word":"CASE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0268", letters: ["R","B","S","B","N","A","C","E","F","D","A","R","I","B","I","L","N","G","P","S","I","N"], prevAnswers: [{"word":"SCANDALISING","pct":4},{"word":"DARING","pct":15},{"word":"ACRES","pct":30},{"word":"BEING","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0269", letters: ["K","S","D","O","R","I","E","E","O","T","H","R","H","O","O","A","L","D","R","B","O","D"], prevAnswers: [{"word":"BROTHERHOOD","pct":4},{"word":"BROTH","pct":15},{"word":"LABOR","pct":30},{"word":"OTHER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0270", letters: ["V","T","S","C","E","G","G","S","I","B","R","I","N","R","A","R","O","G","L","U","P","P"], prevAnswers: [{"word":"POPULARISING","pct":4},{"word":"POPULAR","pct":15},{"word":"LARGE","pct":30},{"word":"EARL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0271", letters: ["S","A","V","U","R","A","I","T","H","O","U","N","U","V","N","R","E","M","N","I","S","H"], prevAnswers: [{"word":"NOURISHMENT","pct":4},{"word":"NURSE","pct":15},{"word":"SAINT","pct":30},{"word":"AUNT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0272", letters: ["R","I","O","Y","E","M","W","A","K","L","A","O","E","Y","B","R","C","N","A","K","C","N"], prevAnswers: [{"word":"REMARKABLY","pct":4},{"word":"AWAKE","pct":15},{"word":"BLAME","pct":30},{"word":"CORAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0273", letters: ["T","S","N","A","H","O","A","R","H","H","B","R","S","G","N","O","U","H","I","E","A","V"], prevAnswers: [{"word":"NEIGHBOURS","pct":4},{"word":"BOAST","pct":15},{"word":"BRUSH","pct":30},{"word":"HARSH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0274", letters: ["C","P","S","Y","D","T","L","V","C","S","R","O","H","T","I","L","R","D","S","G","O","V"], prevAnswers: [{"word":"PSYCHOLOGISTS","pct":4},{"word":"CHORD","pct":15},{"word":"GIRL","pct":30},{"word":"LIST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0275", letters: ["I","O","O","E","E","B","Y","X","A","H","I","C","M","N","I","H","N","I","O","T","A","T"], prevAnswers: [{"word":"EXAMINATION","pct":4},{"word":"CHAT","pct":15},{"word":"EXAM","pct":30},{"word":"INCH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0276", letters: ["H","S","B","A","E","I","L","T","T","D","S","S","E","I","I","E","R","E","F","T","I","G"], prevAnswers: [{"word":"REESTABLISHED","pct":4},{"word":"SERIES","pct":15},{"word":"RESET","pct":30},{"word":"SLIDE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0277", letters: ["W","C","N","F","M","S","O","E","D","E","B","R","E","T","T","G","A","E","G","E","T","A"], prevAnswers: [{"word":"CONFEDERATE","pct":4},{"word":"AGREED","pct":15},{"word":"AGREE","pct":30},{"word":"AROSE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0278", letters: ["T","D","S","E","T","F","H","R","E","R","A","M","A","I","I","L","I","F","Z","I","N","G"], prevAnswers: [{"word":"FAMILIARIZING","pct":4},{"word":"FAMILIAR","pct":9},{"word":"ALIGN","pct":30},{"word":"SHAFT","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0279", letters: ["N","A","R","E","N","E","G","R","F","A","R","I","R","O","T","H","F","R","R","H","U","V"], prevAnswers: [{"word":"REFRIGERATOR","pct":4},{"word":"EARTH","pct":15},{"word":"GREAT","pct":30},{"word":"AREA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0280", letters: ["A","L","D","T","T","L","I","F","N","S","Y","S","E","K","Y","C","E","H","F","R","T","D"], prevAnswers: [{"word":"CRYSTALLISED","pct":4},{"word":"DECRY","pct":15},{"word":"SILLY","pct":30},{"word":"STALL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0281", letters: ["Y","E","T","P","S","L","E","B","R","N","E","L","P","V","I","C","O","M","V","S","B","R"], prevAnswers: [{"word":"COMPLETELY","pct":4},{"word":"COMPLETE","pct":9},{"word":"BELOW","pct":30},{"word":"SLEET","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0282", letters: ["D","F","A","D","I","N","E","S","B","F","L","S","W","K","U","H","E","F","N","A","T","R"], prevAnswers: [{"word":"THANKFULNESS","pct":4},{"word":"ASSERT","pct":15},{"word":"ASSET","pct":30},{"word":"FLESH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0283", letters: ["E","T","E","H","N","T","D","W","M","N","E","T","G","B","L","S","I","W","A","C","K","L"], prevAnswers: [{"word":"BLACKLISTED","pct":4},{"word":"LISTEN","pct":15},{"word":"BLACK","pct":30},{"word":"CABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0284", letters: ["R","T","I","N","D","E","Y","M","A","T","E","R","T","N","C","L","I","G","H","N","O","A"], prevAnswers: [{"word":"DETERMINATION","pct":4},{"word":"AGILE","pct":15},{"word":"GIRL","pct":30},{"word":"LION","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0285", letters: ["I","N","D","N","A","I","R","R","E","T","I","V","E","I","T","O","I","W","A","N","F","A"], prevAnswers: [{"word":"INITIATIVE","pct":4},{"word":"NATIVE","pct":15},{"word":"DRIVE","pct":30},{"word":"RIVER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0286", letters: ["O","F","Y","F","E","I","Y","A","V","C","R","M","O","S","A","E","D","E","L","I","T","N"], prevAnswers: [{"word":"CREDENTIALS","pct":4},{"word":"DEALS","pct":15},{"word":"ENTER","pct":30},{"word":"ACRE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0287", letters: ["N","G","W","N","I","O","W","O","D","V","M","N","I","T","H","O","H","M","R","A","E","T"], prevAnswers: [{"word":"EARTHMOVING","pct":4},{"word":"EARTH","pct":15},{"word":"HEART","pct":30},{"word":"DOWN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0288", letters: ["A","P","H","E","S","U","Y","W","N","H","R","H","B","E","E","E","R","E","V","E","K","R"], prevAnswers: [{"word":"EVERYWHERE","pct":4},{"word":"EVERY","pct":15},{"word":"USHER","pct":30},{"word":"EVER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0289", letters: ["G","C","T","P","I","Q","U","E","N","N","B","I","E","U","T","N","H","S","S","C","I","S"], prevAnswers: [{"word":"UNIQUENESS","pct":4},{"word":"QUEEN","pct":15},{"word":"QUIET","pct":30},{"word":"SHEET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0290", letters: ["E","S","A","C","N","V","G","V","K","C","D","R","N","J","E","E","W","O","G","D","L","M"], prevAnswers: [{"word":"ACKNOWLEDGED","pct":4},{"word":"KNOWLEDGE","pct":9},{"word":"AGREED","pct":22},{"word":"AGREE","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0291", letters: ["L","I","V","O","W","N","E","R","L","O","R","D","O","M","R","E","A","F","R","H","D","S"], prevAnswers: [{"word":"OVERLOADED","pct":4},{"word":"DEVIL","pct":15},{"word":"DROVE","pct":30},{"word":"DROWN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0292", letters: ["B","I","C","L","O","Y","C","I","U","O","E","D","T","R","R","M","C","A","M","R","O","R"], prevAnswers: [{"word":"DEMOCRATIC","pct":4},{"word":"ERROR","pct":15},{"word":"COME","pct":30},{"word":"TIDE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0293", letters: ["P","I","O","E","C","D","I","N","E","N","N","I","R","M","R","G","N","A","R","S","T","E"], prevAnswers: [{"word":"PIONEERING","pct":4},{"word":"EARNINGS","pct":9},{"word":"DINE","pct":30},{"word":"EARN","pct":35},{"word":"4 or lower","pct":22}] },
  { id: "p0294", letters: ["O","U","N","I","R","K","G","N","Y","A","N","P","A","P","C","O","M","A","R","C","A","D"], prevAnswers: [{"word":"ACCOMPANYING","pct":4},{"word":"COMPANY","pct":15},{"word":"CAMP","pct":30},{"word":"DAMP","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0295", letters: ["F","N","T","M","I","R","A","T","E","Y","I","K","O","G","N","T","E","L","E","U","A","R"], prevAnswers: [{"word":"TOLERATING","pct":4},{"word":"ENTER","pct":15},{"word":"INTER","pct":30},{"word":"AKIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0296", letters: ["I","V","T","J","I","L","I","R","A","N","L","E","V","A","G","E","E","N","R","R","A","S"], prevAnswers: [{"word":"TRAVELLING","pct":4},{"word":"RELEASE","pct":15},{"word":"LINGER","pct":22},{"word":"TRAVEL","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0297", letters: ["D","L","W","N","F","I","C","E","C","F","E","R","E","R","M","P","E","M","P","G","J","V"], prevAnswers: [{"word":"DIFFERENCE","pct":4},{"word":"DIFFER","pct":15},{"word":"FIERCE","pct":22},{"word":"CLIFF","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0298", letters: ["N","I","U","M","S","R","T","H","P","U","K","N","I","B","T","N","G","N","Y","R","E","F"], prevAnswers: [{"word":"TRIUMPHING","pct":4},{"word":"ENTRY","pct":15},{"word":"HINGE","pct":30},{"word":"INNER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0299", letters: ["H","T","A","B","F","A","I","D","N","S","N","O","U","B","W","R","O","N","T","L","F","Y"], prevAnswers: [{"word":"FOUNDATIONS","pct":4},{"word":"FAITH","pct":15},{"word":"FOUND","pct":30},{"word":"ROUND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0300", letters: ["N","S","U","O","O","I","E","I","E","T","N","C","D","E","A","I","E","A","V","T","S","E"], prevAnswers: [{"word":"DESTINATIONS","pct":4},{"word":"NOISE","pct":15},{"word":"SINCE","pct":30},{"word":"STAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0301", letters: ["H","B","D","T","N","K","E","G","T","R","O","S","I","L","W","C","O","D","O","O","H","A"], prevAnswers: [{"word":"SCHOOLWORK","pct":4},{"word":"CHAOS","pct":15},{"word":"CHOSE","pct":30},{"word":"SCORN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0302", letters: ["D","E","F","S","O","N","T","O","F","I","A","L","N","T","T","R","C","E","L","A","N","D"], prevAnswers: [{"word":"DECLARATION","pct":4},{"word":"NATIONAL","pct":9},{"word":"SOFTEN","pct":22},{"word":"ALONE","pct":35},{"word":"4 or lower","pct":30}] },
  { id: "p0303", letters: ["S","E","D","V","S","N","C","D","T","H","E","F","I","S","L","R","F","I","R","N","E","Y"], prevAnswers: [{"word":"DIFFERENCES","pct":4},{"word":"DIFFER","pct":15},{"word":"FENCE","pct":30},{"word":"HENCE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0304", letters: ["A","R","P","U","E","D","F","K","S","O","N","E","V","I","T","R","I","L","D","A","E","B"], prevAnswers: [{"word":"LIBERATION","pct":4},{"word":"ATONE","pct":15},{"word":"LIVER","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0305", letters: ["T","C","W","E","I","E","E","F","F","V","L","B","O","E","Y","S","S","L","C","H","Y","S"], prevAnswers: [{"word":"EFFECTIVELY","pct":4},{"word":"EFFECT","pct":15},{"word":"ELECT","pct":30},{"word":"SLEET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0306", letters: ["G","I","S","Y","T","N","E","T","S","D","I","E","N","O","I","Z","M","Y","E","T","A","Y"], prevAnswers: [{"word":"SYSTEMATIZING","pct":4},{"word":"SEIZE","pct":15},{"word":"DINE","pct":30},{"word":"MATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0307", letters: ["C","C","A","I","E","N","O","H","H","E","N","S","O","U","N","O","A","L","A","I","T","H"], prevAnswers: [{"word":"CONSOLATION","pct":4},{"word":"ATONE","pct":15},{"word":"SHONE","pct":30},{"word":"UNION","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0308", letters: ["I","S","O","R","M","S","O","N","T","M","I","E","R","O","C","R","E","U","N","H","I","U"], prevAnswers: [{"word":"COMMISSIONER","pct":4},{"word":"MISSION","pct":15},{"word":"HIRE","pct":30},{"word":"MISS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0309", letters: ["W","D","B","E","J","E","D","Y","O","M","I","I","L","H","M","B","A","E","E","T","U","T"], prevAnswers: [{"word":"IMMEDIATELY","pct":4},{"word":"ABIDE","pct":15},{"word":"AIDED","pct":30},{"word":"MEDIA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0310", letters: ["T","R","B","D","H","W","A","E","B","A","I","H","U","R","M","G","A","R","I","I","N","Y"], prevAnswers: [{"word":"HEARTWARMING","pct":4},{"word":"AIMING","pct":15},{"word":"AHEAD","pct":30},{"word":"EARTH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0311", letters: ["M","E","N","U","C","E","P","T","D","N","A","I","D","I","H","N","T","H","E","I","E","V"], prevAnswers: [{"word":"ENHANCEMENT","pct":4},{"word":"ENHANCE","pct":15},{"word":"INANE","pct":30},{"word":"PAINT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0312", letters: ["U","A","Y","N","L","O","F","O","S","O","O","I","E","O","I","T","X","S","E","D","E","P"], prevAnswers: [{"word":"EXPEDITIONS","pct":4},{"word":"EDITION","pct":15},{"word":"FIXED","pct":30},{"word":"FOOL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0313", letters: ["T","E","C","P","E","R","O","T","E","I","N","G","B","S","A","B","A","O","F","L","E","L"], prevAnswers: [{"word":"RECOGNISABLE","pct":4},{"word":"FABLE","pct":15},{"word":"TONAL","pct":30},{"word":"TRIAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0314", letters: ["C","A","N","U","B","O","R","E","H","N","P","S","S","S","I","S","A","H","V","E","O","E"], prevAnswers: [{"word":"UNRESPONSIVE","pct":4},{"word":"ACORN","pct":15},{"word":"HERON","pct":30},{"word":"PRESS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0315", letters: ["I","I","G","D","T","E","G","A","P","R","V","N","R","D","O","M","I","T","E","I","N","A"], prevAnswers: [{"word":"DOMINATING","pct":4},{"word":"DANGER","pct":15},{"word":"DARING","pct":22},{"word":"ANGER","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0316", letters: ["I","T","Y","T","V","I","A","R","I","A","T","E","L","C","B","O","R","A","E","D","C","E"], prevAnswers: [{"word":"CREATIVITY","pct":4},{"word":"ABODE","pct":15},{"word":"ALERT","pct":30},{"word":"CORAL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0317", letters: ["B","E","C","C","O","I","T","F","R","L","A","E","C","L","U","C","N","H","Y","D","I","B"], prevAnswers: [{"word":"TECHNICALLY","pct":4},{"word":"LUCID","pct":15},{"word":"BILL","pct":30},{"word":"BITE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0318", letters: ["T","U","D","A","W","T","A","R","T","H","B","O","I","C","O","R","U","O","O","R","S","N"], prevAnswers: [{"word":"CORROBORATION","pct":4},{"word":"BOARD","pct":15},{"word":"RATIO","pct":30},{"word":"BATH","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0319", letters: ["E","A","D","H","S","T","N","I","G","T","E","U","N","A","U","T","K","N","O","E","W","G"], prevAnswers: [{"word":"OUTSTANDING","pct":4},{"word":"ATTEND","pct":15},{"word":"ENDING","pct":22},{"word":"OUTSET","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0320", letters: ["I","F","O","A","B","S","R","R","A","L","N","O","P","E","I","O","P","O","R","E","S","T"], prevAnswers: [{"word":"RESPONSIBLE","pct":4},{"word":"OPPOSE","pct":15},{"word":"APRON","pct":30},{"word":"ISLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0321", letters: ["E","E","B","B","T","M","D","R","T","A","O","S","I","R","N","R","G","A","T","S","E","T"], prevAnswers: [{"word":"DEMONSTRATE","pct":4},{"word":"DEMON","pct":15},{"word":"GROAN","pct":30},{"word":"MANOR","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0322", letters: ["E","U","P","R","O","W","N","C","E","R","N","E","D","W","M","D","E","F","T","E","N","T"], prevAnswers: [{"word":"UNPRECEDENTED","pct":4},{"word":"ENDED","pct":15},{"word":"OWNED","pct":30},{"word":"DEED","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0323", letters: ["O","E","A","T","D","R","I","S","I","E","N","H","O","O","D","P","N","I","O","M","S","N"], prevAnswers: [{"word":"MODERNISATION","pct":4},{"word":"MODERN","pct":15},{"word":"REASON","pct":22},{"word":"SHINE","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0324", letters: ["S","I","O","N","S","E","P","E","R","F","R","L","I","N","O","M","M","K","A","O","A","B"], prevAnswers: [{"word":"PROFESSION","pct":4},{"word":"NOISE","pct":15},{"word":"PRESS","pct":30},{"word":"REPEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0325", letters: ["T","N","L","A","A","T","U","B","A","H","F","P","C","O","T","H","J","E","U","G","R","D"], prevAnswers: [{"word":"THOUGHTFUL","pct":4},{"word":"BLUNT","pct":15},{"word":"TOUGH","pct":30},{"word":"THAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0326", letters: ["A","C","O","A","M","S","N","H","W","T","I","T","U","D","Y","E","I","T","A","N","O","Y"], prevAnswers: [{"word":"CONSTITUTION","pct":4},{"word":"CAST","pct":15},{"word":"MAST","pct":30},{"word":"SITE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0327", letters: ["L","G","S","N","E","E","S","O","V","B","U","B","I","K","C","S","T","O","R","B","P","C"], prevAnswers: [{"word":"LESSON","pct":4},{"word":"CUBS","pct":15},{"word":"BUCK","pct":30},{"word":"LESS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0328", letters: ["S","K","A","T","B","O","B","H","L","S","P","H","O","S","I","B","I","Y","B","I","L","T"], prevAnswers: [{"word":"POSSIBILITY","pct":4},{"word":"BATH","pct":15},{"word":"4 or lower","pct":81}] },
  { id: "p0329", letters: ["A","U","Q","O","R","T","D","K","V","E","R","A","O","P","S","E","H","E","O","E","N","A"], prevAnswers: [{"word":"HEADQUARTERS","pct":4},{"word":"AHEAD","pct":15},{"word":"HEART","pct":30},{"word":"HOARD","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0330", letters: ["A","T","N","M","H","R","E","E","E","N","Y","P","L","T","O","M","W","F","U","A","O","C"], prevAnswers: [{"word":"COMPLEMENTARY","pct":4},{"word":"COMPEL","pct":15},{"word":"AMPLE","pct":30},{"word":"ENTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0331", letters: ["C","A","T","H","H","N","I","A","L","G","L","Y","R","U","R","E","E","N","N","D","D","E"], prevAnswers: [{"word":"UNDERLYING","pct":4},{"word":"ANGLE","pct":15},{"word":"GREED","pct":30},{"word":"GREEN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0332", letters: ["A","C","E","O","T","N","L","R","T","I","I","A","I","G","D","S","D","C","O","E","S","O"], prevAnswers: [{"word":"SOCIALISED","pct":4},{"word":"SOCIAL","pct":15},{"word":"ALERT","pct":30},{"word":"ASIDE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0333", letters: ["W","A","V","E","R","Y","L","H","Y","I","S","P","H","H","G","K","K","N","T","N","T","P"], prevAnswers: [{"word":"PLAYWRIGHT","pct":4},{"word":"RIGHT","pct":15},{"word":"SIGHT","pct":30},{"word":"SLAVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0334", letters: ["A","K","T","A","L","V","E","O","M","U","E","I","I","A","T","I","O","R","N","O","G","U"], prevAnswers: [{"word":"EVALUATION","pct":4},{"word":"VALUE","pct":15},{"word":"AUTO","pct":30},{"word":"LAKE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0335", letters: ["S","C","H","A","E","C","R","T","B","S","A","D","L","D","E","S","W","E","T","E","L","H"], prevAnswers: [{"word":"SEARCHABLE","pct":4},{"word":"EARTH","pct":15},{"word":"SLEET","pct":30},{"word":"TABLE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0336", letters: ["N","O","R","U","N","O","G","I","U","T","I","E","L","C","X","E","V","Y","L","U","S","I"], prevAnswers: [{"word":"EXCLUSIVELY","pct":4},{"word":"CLUE","pct":15},{"word":"IRON","pct":30},{"word":"NOON","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0337", letters: ["I","Y","E","S","G","N","E","W","W","C","L","S","Y","O","N","G","S","A","M","I","U","O"], prevAnswers: [{"word":"WELCOMINGS","pct":4},{"word":"COMING","pct":15},{"word":"ESSAY","pct":30},{"word":"EYES","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0338", letters: ["T","H","E","I","A","C","U","N","S","T","C","H","C","H","T","M","A","M","N","E","T","N"], prevAnswers: [{"word":"ENCHANTMENT","pct":4},{"word":"ACHE","pct":15},{"word":"CAME","pct":30},{"word":"CHAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0339", letters: ["L","I","Y","H","T","E","D","O","N","C","U","E","I","O","E","M","T","W","D","N","T","A"], prevAnswers: [{"word":"DOCUMENTATION","pct":4},{"word":"CENT","pct":15},{"word":"CODE","pct":30},{"word":"DUEL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0340", letters: ["N","L","V","A","U","R","E","E","Y","O","V","S","I","I","I","E","R","N","N","G","P","O"], prevAnswers: [{"word":"PRESERVING","pct":4},{"word":"REVERSE","pct":15},{"word":"REIGN","pct":30},{"word":"SERVE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0341", letters: ["D","M","U","C","Y","T","E","O","D","H","P","N","D","B","T","T","I","E","D","A","R","S"], prevAnswers: [{"word":"DOCUMENTARIES","pct":4},{"word":"ARISE","pct":15},{"word":"TRIED","pct":30},{"word":"CODE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0342", letters: ["O","I","O","S","P","H","L","L","O","O","H","A","P","E","A","C","H","O","Y","S","I","T"], prevAnswers: [{"word":"PHILOSOPHICAL","pct":4},{"word":"POACH","pct":15},{"word":"YACHT","pct":30},{"word":"ALSO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0343", letters: ["D","B","G","N","R","A","O","I","I","A","A","S","R","E","V","Y","P","E","M","T","T","M"], prevAnswers: [{"word":"SPRINGBOARD","pct":4},{"word":"SPRING","pct":15},{"word":"BOARD","pct":30},{"word":"EMPTY","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0344", letters: ["M","A","N","U","T","A","T","T","R","T","E","E","O","V","E","O","N","F","S","A","I","U"], prevAnswers: [{"word":"UNFORTUNATE","pct":4},{"word":"ROTTEN","pct":15},{"word":"FORT","pct":30},{"word":"MATE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0345", letters: ["S","U","M","R","H","N","M","A","I","N","N","G","Z","C","L","N","N","I","S","C","S","G"], prevAnswers: [{"word":"SUMMARIZING","pct":4},{"word":"4 or lower","pct":96}] },
  { id: "p0346", letters: ["B","B","W","W","S","P","P","H","R","R","I","M","E","G","N","T","I","A","I","G","V","C"], prevAnswers: [{"word":"SPRINGTIME","pct":4},{"word":"AIMING","pct":15},{"word":"SPRING","pct":22},{"word":"TIMING","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0347", letters: ["N","Y","E","S","C","R","T","E","O","N","S","I","R","G","I","U","M","A","E","S","H","M"], prevAnswers: [{"word":"SUMMARISING","pct":4},{"word":"SISTER","pct":15},{"word":"AROSE","pct":30},{"word":"RESET","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0348", letters: ["E","T","I","T","H","E","C","V","E","A","X","S","M","D","I","P","N","E","T","N","T","H"], prevAnswers: [{"word":"EXCITEMENT","pct":4},{"word":"THEME","pct":15},{"word":"HEAD","pct":30},{"word":"SPIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0349", letters: ["I","E","I","O","H","T","C","A","L","H","S","I","L","A","U","F","F","Y","N","O","T","C"], prevAnswers: [{"word":"UNOFFICIALLY","pct":4},{"word":"FISCAL","pct":15},{"word":"OFFICE","pct":22},{"word":"CALL","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0350", letters: ["S","A","T","I","R","A","R","O","R","E","D","S","N","V","C","J","M","E","N","O","O","A"], prevAnswers: [{"word":"CONVERSATIONS","pct":4},{"word":"ATONE","pct":15},{"word":"CEDAR","pct":30},{"word":"ORDER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0351", letters: ["R","A","T","E","E","N","H","N","S","A","A","U","M","B","D","E","S","S","T","C","I","A"], prevAnswers: [{"word":"ENTHUSIASM","pct":4},{"word":"SUNSET","pct":15},{"word":"MUSIC","pct":30},{"word":"AREA","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0352", letters: ["N","W","I","A","S","O","I","E","T","I","G","O","B","T","E","G","L","A","A","Z","I","L"], prevAnswers: [{"word":"GLOBALIZATION","pct":4},{"word":"GLOBAL","pct":15},{"word":"GLOBE","pct":30},{"word":"BALL","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0353", letters: ["T","R","S","F","S","N","A","H","H","I","I","Y","F","T","O","N","R","T","I","H","R","D"], prevAnswers: [{"word":"TRANSITION","pct":4},{"word":"SAINT","pct":15},{"word":"TRAIN","pct":30},{"word":"ARTS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0354", letters: ["H","E","N","C","R","I","B","O","F","A","T","N","T","L","E","T","O","W","P","M","B","E"], prevAnswers: [{"word":"PLATE","pct":4},{"word":"PETAL","pct":15},{"word":"METAL","pct":30},{"word":"TALE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0355", letters: ["B","F","T","A","E","N","T","R","E","E","T","L","N","M","V","A","V","I","E","L","O","N"], prevAnswers: [{"word":"INVOLVEMENT","pct":4},{"word":"EVENT","pct":15},{"word":"METAL","pct":30},{"word":"TREAT","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0356", letters: ["E","I","R","B","L","G","S","A","T","U","E","L","I","O","L","E","F","O","V","I","T","N"], prevAnswers: [{"word":"LEGISLATION","pct":4},{"word":"ARISE","pct":15},{"word":"ELITE","pct":30},{"word":"RATIO","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0357", letters: ["I","T","H","N","V","O","E","T","I","A","M","P","G","T","I","S","I","I","O","N","O","A"], prevAnswers: [{"word":"MOTIVATIONS","pct":4},{"word":"SMOTE","pct":15},{"word":"VOMIT","pct":30},{"word":"AIMS","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0358", letters: ["N","C","M","I","U","E","H","V","I","R","A","A","B","T","A","M","O","Y","M","I","N","T"], prevAnswers: [{"word":"UNCERTAINTY","pct":4},{"word":"CERTAIN","pct":15},{"word":"HEART","pct":30},{"word":"TRAIN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0359", letters: ["S","A","Y","A","S","N","T","A","G","T","E","M","E","S","T","F","E","N","E","T","L","B"], prevAnswers: [{"word":"SETTLEMENTS","pct":4},{"word":"SETTLE","pct":15},{"word":"AGATE","pct":30},{"word":"BEEN","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0360", letters: ["N","S","H","T","G","Y","T","G","S","A","A","N","D","M","E","L","E","P","O","V","A","W"], prevAnswers: [{"word":"WAVELENGTH","pct":4},{"word":"DELAY","pct":15},{"word":"PENAL","pct":30},{"word":"STAND","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0361", letters: ["N","N","G","D","Y","A","O","Y","I","R","S","T","I","E","L","A","P","S","M","A","P","T"], prevAnswers: [{"word":"PALMERSTON","pct":4},{"word":"NASTY","pct":15},{"word":"ALSO","pct":30},{"word":"LAST","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0362", letters: ["E","T","F","G","E","S","L","I","E","I","E","T","F","R","C","R","S","T","O","T","I","D"], prevAnswers: [{"word":"DIRECTORIES","pct":4},{"word":"FILTER","pct":15},{"word":"SECTOR","pct":22},{"word":"CREST","pct":35},{"word":"4 or lower","pct":24}] },
  { id: "p0363", letters: ["M","S","I","V","Y","G","A","U","E","I","S","T","L","A","E","I","O","R","N","O","V","E"], prevAnswers: [{"word":"REVOLUTION","pct":4},{"word":"NESTLE","pct":15},{"word":"LOVER","pct":30},{"word":"NOISE","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0364", letters: ["K","S","E","V","E","L","R","E","W","T","E","L","T","B","R","S","A","I","B","V","N","O"], prevAnswers: [{"word":"REVELATIONS","pct":4},{"word":"SEVERE","pct":15},{"word":"ALERT","pct":30},{"word":"ALTER","pct":35},{"word":"4 or lower","pct":16}] },
  { id: "p0365", letters: ["E","T","N","L","O","D","E","W","A","L","H","O","V","S","K","S","N","A","H","I","U","Q"], prevAnswers: [{"word":"VANQUISHED","pct":4},{"word":"OWNED","pct":15},{"word":"LAWN","pct":30},{"word":"OWED","pct":35},{"word":"4 or lower","pct":16}] }
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
const VERSION = "1.9.0";

const CHANGELOG = [
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

function triggerHaptic(ms) {
  if (!hapticsEnabled) return;
  if (navigator.vibrate) navigator.vibrate(ms || 8);
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

// Tile IDs forming the current best-score word (shown in indigo)
let playedPath = [];
let inOneAchieved = false;

var pointerDownX = 0, pointerDownY = 0;
var pointerDownTile = null;
var tapHintShown = false;

// ─── Firebase / auth state ────────────────────────────────────────────────────
let db = null, fbAuth = null, currentUser = null, userProfile = null;

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
    poly.setAttribute("stroke", c.stroke);
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
    return;
  }
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
    poly.setAttribute("stroke", c.stroke);
    poly.setAttribute("stroke-width", "2");
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
  t.state = playedPath.includes(t.id) ? "played" : "neutral";
  t._resolvedLetter = "";
}

function clearSelection() {
  tiles.forEach(function(t) {
    if (t.state !== "played") { t.state = "neutral"; t._resolvedLetter = ""; }
  });
  playedPath.forEach(function(id) { if (tiles[id]) tiles[id].state = "played"; });
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
  if (len > bestScore) {
    bestScore = len;
    bestWord = word;
    playedPath = selectedPath.slice();
    if (isInOne) inOneAchieved = true;
    saveState();
  }
  updateScoreDisplay(word);
  updateAnswerArea();
  updateShareBtn();

  var foundTarget = targetLen > 0 && len >= targetLen;
  var level = getScoreLevel(len);

  if (isInOne) {
    var inOneMsgs = FLOAT_MSGS.in_one;
    var inOneCheer = inOneMsgs[Math.floor(Math.random() * inOneMsgs.length)];
    showFloatAnim({ type: "valid", score: len, level: "Grandmaster in One!", cheer: inOneCheer });
    setTimeout(function() {
      showToast("🎯 Grandmaster in One! First attempt perfection!");
    }, 1600);
  } else if (foundTarget) {
    var msgs = FLOAT_MSGS.target_found;
    var cheer = msgs[Math.floor(Math.random() * msgs.length)];
    showFloatAnim({ type: "valid", score: len, level: level, cheer: cheer });
    setTimeout(function() {
      showToast("🏆 You found today's longest word!");
    }, 1600);
  } else {
    var cheers = (FLOAT_MSGS.valid[level] || FLOAT_MSGS.valid["Average"]);
    var cheer2 = cheers[Math.floor(Math.random() * cheers.length)];
    showFloatAnim({ type: "valid", score: len, level: level, cheer: cheer2 });
  }

  // After showing green, transition to played (indigo) state
  setTimeout(clearSelection, 1500);
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
  if (sheet) { sheet.classList.add("open"); }
  if (tabName) switchBackTab(tabName);
}

function closeSheet() {
  var sheet   = document.getElementById("game-back");
  if (sheet)   { sheet.classList.remove("open"); }
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

  // Action bar
  var undoBtn = document.getElementById("undo-btn");
  if (undoBtn) undoBtn.addEventListener("click", undoLastTile);

  var clearBtn = document.getElementById("clear-btn");
  if (clearBtn) clearBtn.addEventListener("click", clearSelection);

  var hintBtn = document.getElementById("hint-btn");
  if (hintBtn) hintBtn.addEventListener("click", function() {
    if (gameCompleted || selectedPath.length > 0) return;
    triggerHint();
  });

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

  document.querySelectorAll(".lb-filter-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".lb-filter-btn").forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      loadLeaderboard(btn.dataset.filter);
    });
  });

  var statsSigninBtn = document.getElementById("stats-signin-btn");
  if (statsSigninBtn) statsSigninBtn.addEventListener("click", function() { showAuthModal("signup"); });

  var lbSigninBtn = document.getElementById("lb-signin-btn");
  if (lbSigninBtn) lbSigninBtn.addEventListener("click", function() { showAuthModal("signup"); });

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
  tiles = []; selectedPath = []; isDragging = false; playedPath = [];
  bestScore = 0; bestWord = ""; ticketCount = 0; gameCompleted = false;
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

  // Prev/next arrows
  const prevBtn = document.getElementById("board-date-prev");
  const nextBtn = document.getElementById("board-date-next");
  if (prevBtn) prevBtn.disabled = browseOffset <= -13;
  if (nextBtn) nextBtn.disabled = browseOffset >= 0;

  // Past-game banner
  const banner = document.getElementById("past-game-banner");
  if (banner) banner.hidden = isToday;
}

function populateAnswers(explicitDateStr) {
  var section = document.getElementById("answers-section");
  var list    = document.getElementById("answers-list");
  if (!section || !list) return;

  var dateStr = explicitDateStr || browsedDateStr;
  if (!dateStr) { section.hidden = true; return; }

  var puz = getPuzzleForDate(dateStr);
  section.hidden = false;

  // Build answer list immediately (no expand/collapse)
  list.innerHTML = "";
  if (!puz || !puz.prevAnswers) return;

  // Section heading
  var heading = document.createElement("div");
  heading.className = "wd-section-title";
  heading.textContent = formatDateDisplay(dateStr) + " — Answers";
  list.appendChild(heading);

  // Sort longest → shortest
  var answers = puz.prevAnswers.slice().sort(function(a, b) {
    return (b.word || "").length - (a.word || "").length;
  });

  var myWord = bestWord ? bestWord.toUpperCase() : "";

  answers.forEach(function(a, idx) {
    var word = (a.word || "").toUpperCase();
    var isTarget = idx === 0;
    var isMine   = myWord && word === myWord;

    var li = document.createElement("li");
    li.className = "answer-item" +
      (isTarget ? " answer-target" : "") +
      (isMine   ? " answer-mine"   : "");

    // Eye toggle button
    var eyeBtn = document.createElement("button");
    eyeBtn.className = "answer-eye-btn";
    eyeBtn.setAttribute("aria-label", "Show / hide word");
    eyeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

    // Word span (blurred by default)
    var wordSpan = document.createElement("span");
    wordSpan.className = "answer-word answer-blurred";
    wordSpan.textContent = word;

    eyeBtn.addEventListener("click", function() {
      var revealed = wordSpan.classList.toggle("answer-blurred") === false;
      eyeBtn.classList.toggle("revealed", revealed);
      if (revealed) {
        eyeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
      } else {
        eyeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
      }
    });

    // Bar
    var bar = document.createElement("span");
    bar.className = "answer-bar";
    var fill = document.createElement("span");
    fill.className = "answer-fill";
    fill.style.width = (a.pct || 0) + "%";
    bar.appendChild(fill);

    // Pct
    var pct = document.createElement("span");
    pct.className = "answer-pct";
    pct.textContent = (a.pct || 0) + "%";

    li.appendChild(eyeBtn);
    li.appendChild(wordSpan);
    li.appendChild(bar);
    li.appendChild(pct);

    // Definition button for target word only
    if (isTarget) {
        var defBtn = document.createElement("button");
        defBtn.className = "def-btn";
        defBtn.title = "Show definition";
        defBtn.setAttribute("aria-label", "Show definition");
        defBtn.textContent = "?";
        defBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          var box = li.querySelector(".def-box");
          if (box) { box.remove(); return; }
          var newBox = document.createElement("div");
          newBox.className = "def-box";
          newBox.textContent = "Loading…";
          li.appendChild(newBox);
          fetchDefinition(word).then(function(def) {
            newBox.textContent = def || "No definition found.";
          });
        });
        li.appendChild(defBtn);
      }

      list.appendChild(li);

  });
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
  } catch (e) {
    console.warn("Firebase init failed:", e.message);
  }
}

function handleAuthChange(user) {
  currentUser = user;
  updateUserBtn();
  if (user) {
    loadUserData(user);
  } else {
    userProfile = null;
    renderStatsPanel();
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
  updateTicketDisplay();
  saveState();
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
    updateTicketDisplay();
    saveState();
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
  var labelEl   = document.getElementById("lb-date-label");
  var prevBtn   = document.getElementById("lb-date-prev");
  var nextBtn   = document.getElementById("lb-date-next");
  var revealEl  = document.getElementById("lb-word-reveal");
  if (!labelEl) return;

  var dateStr = getDateForOffset(lbDayOffset);
  labelEl.textContent = lbDayOffset === 0 ? "Today" : formatDateDisplay(dateStr);
  if (nextBtn) nextBtn.disabled = lbDayOffset >= 0;
  if (prevBtn) prevBtn.disabled = lbDayOffset <= -13;

  if (lbDayOffset < 0 && revealEl) {
    var p = getPuzzleForDate(dateStr);
    var word = p && p.prevAnswers && p.prevAnswers[0] ? p.prevAnswers[0].word : "";
    revealEl.hidden = !word;
    revealEl.innerHTML = word
      ? '<button class="lb-reveal-btn" onclick="this.nextElementSibling.hidden=false;this.hidden=true">Reveal target word</button>' +
        '<span class="lb-word-inner" hidden><span class="lb-word-label">Target word:</span> <strong class="lb-word-value">' + escHtml(word) + "</strong></span>"
      : "";
  } else if (revealEl) {
    revealEl.hidden = true;
  }
}

async function loadLeaderboard(filter) {
  lbFilter = filter || "date";
  updateLbDateNav();
  var listEl    = document.getElementById("lb-list");
  var loadingEl = document.getElementById("lb-loading");
  var noauthEl  = document.getElementById("lb-noauth");
  if (!listEl) return;

  if (!db) { noauthEl.hidden = false; listEl.hidden = true; if (loadingEl) loadingEl.hidden = true; return; }
  noauthEl.hidden = true;
  loadingEl.hidden = false;
  listEl.hidden = true;
  listEl.innerHTML = "";

  try {
    var snap;
    var docs;
    if (lbFilter === "date") {
      var queryDate = getDateForOffset(lbDayOffset);
      if (lbDayOffset < 0) populateAnswers(queryDate);
      else { var answersSection = document.getElementById("answers-section"); if (answersSection) answersSection.hidden = true; }
      snap = await db.collection("scores").where("date", "==", queryDate).get();
      docs = snap.docs.slice().sort(function(a, b) { return (b.data().score || 0) - (a.data().score || 0); });
    } else {
      snap = await db.collection("users").get();
      docs = snap.docs.filter(function(d) { return d.data().stats && d.data().stats.bestScore; })
        .slice().sort(function(a, b) { return (b.data().stats.bestScore || 0) - (a.data().stats.bestScore || 0); }).slice(0, 25);
    }
    loadingEl.hidden = true;
    listEl.hidden = false;
    listEl.innerHTML = "";

    if (!docs.length) { listEl.innerHTML = '<div class="lb-empty">No scores yet — be first!</div>'; return; }

    // Player rows
    var topDocs = lbFilter === "date" ? docs.slice(0, 25) : docs;
    topDocs.forEach(function(doc, i) {
      var d     = doc.data();
      var score = lbFilter === "date" ? d.score : ((d.stats && d.stats.bestScore) || 0);
      var name  = d.username || "Player";
      var isMe  = currentUser && (d.uid === currentUser.uid || doc.id === currentUser.uid);
      var rank  = i + 1;
      var wrongAttempts = lbFilter === "date"
        ? Math.max(0, (d.attempts || 0) - (d.validAttempts || 0))
        : 0;
      var meta  = (lbFilter === "date" && (d.attempts || d.timeSpent))
        ? '<span class="lb-meta">' + (d.validAttempts || 0) + ' ✓ / ' + wrongAttempts + ' ✗ · ' + formatTime(d.timeSpent || 0) + "</span>"
        : "";
      var row   = document.createElement("div");
      row.className = "lb-row" + (isMe ? " lb-row-me" : "");
      row.innerHTML =
        '<span class="lb-rank' + (rank <= 3 ? " top3" : "") + '">' + rank + "</span>" +
        '<span class="lb-name">' + escHtml(name) + (isMe ? ' <span style="color:var(--brand);font-size:0.65rem">(you)</span>' : "") + "</span>" +
        '<span class="lb-score">' + score + "</span>" +
        '<span class="lb-level">' + getScoreLevel(score) + "</span>" + meta;
      listEl.appendChild(row);
    });
  } catch (e) {
    loadingEl.hidden = true;
    listEl.hidden = false;
    listEl.innerHTML = '<div class="lb-empty">Could not load scores.</div>';
    console.warn("loadLeaderboard:", e.message);
  }
}

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, function(c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; });
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
    item.innerHTML = '<div class="badge-icon">' + b.icon + '</div><div class="badge-name">' + b.name + "</div>";
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
  if (tabName === "scores")   { lbDayOffset = 0; loadLeaderboard(lbFilter || "date"); }
  if (tabName === "stats")    renderStatsPanel();
  if (tabName === "settings") renderSettingsPanel();
}

// ─── Share ────────────────────────────────────────────────────────────────────
function updateShareBtn() {
  var btn = document.getElementById("share-btn");
  if (!btn) return;
  btn.classList.remove("is-throbbing");
  btn.disabled = !(bestScore > 0 && browsedDateStr === null);
}

function enableShare() { updateShareBtn(); }

function initShare() {
  var btn = document.getElementById("share-btn");
  if (!btn) return;
  btn.addEventListener("click", function() {
    if (bestScore === 0) return;

    var doShare = function() {
      var level = getScoreLevel(bestScore);
      var displayLevel = inOneAchieved ? "Grandmaster in One!" : level;
      var dateStr = getDateString();
      var text = "I scored '" + displayLevel + "' with " + bestScore +
        " letters on Shukuma!\nHow did you do?\nhttps://cranialscratch.github.io/Shukuma/\n#Shukuma" + dateStr;

      // First share of the day earns a ticket; subsequent shares are free but don't earn
      var todayKey = "sharedToday-" + dateStr;
      var alreadyEarned = !!localStorage.getItem(todayKey);
      if (!alreadyEarned) {
        ticketCount++;
        localStorage.setItem(todayKey, "1");
        updateTicketDisplay();
        showToast("Ticket earned! 🎟");
      }
      gameCompleted = true;
      saveState();
      updateShareBtn();
      if (currentUser) submitScore().catch(function() {});

      if (navigator.share) {
        navigator.share({ title: "Shukuma", text: text }).catch(function() {
          navigator.clipboard && navigator.clipboard.writeText(text);
          if (alreadyEarned) showToast("Score copied to clipboard!");
        });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          if (alreadyEarned) showToast("Score copied to clipboard!");
        }).catch(function() {});
      } else {
        showToast("Share: " + text.split("\n")[0]);
      }
    };

    if (!currentUser && db) {
      showAuthModal("signup", function() { doShare(); });
    } else {
      doShare();
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
function currentDateStr() { return browsedDateStr || getDateString(); }
function storageKey() { return "shukuma-" + currentDateStr(); }

function saveState() {
  const elapsed = timerRunning ? activeTimeMs + (Date.now() - timerLastStart) : activeTimeMs;
  try {
    localStorage.setItem(storageKey(), JSON.stringify({
      bestWord, bestScore, ticketCount, gameCompleted, attemptCount, validAttemptCount, activeTimeMs: elapsed, playedPath, inOneAchieved,
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
    ticketCount      = s.ticketCount || 0;
    gameCompleted    = s.gameCompleted || false;
    attemptCount     = s.attemptCount  || 0;
    validAttemptCount = s.validAttemptCount || 0;
    activeTimeMs     = s.activeTimeMs  || 0;
    playedPath       = Array.isArray(s.playedPath) ? s.playedPath : [];
    inOneAchieved    = s.inOneAchieved || false;
  } catch(_) {}
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

  // Remove any existing animation that hasn't finished
  var old = container.querySelector(".float-anim-wrapper");
  if (old) old.remove();

  var wrapper = document.createElement("div");
  wrapper.className = "float-anim-wrapper";

  var inner = document.createElement("div");
  inner.className = "float-anim-inner float-type-" + (opts.type || "neutral");

  if (opts.type === "valid") {
    inner.innerHTML =
      '<span class="float-score">' + escHtml(String(opts.score)) + '</span>' +
      '<span class="float-level">' + escHtml(opts.level) + '</span>' +
      '<span class="float-cheer">' + escHtml(opts.cheer) + '</span>';
  } else {
    inner.innerHTML = '<span class="float-cheer">' + escHtml(opts.cheer) + '</span>';
  }

  wrapper.appendChild(inner);
  container.appendChild(wrapper);

  // Remove element after animation completes
  inner.addEventListener("animationend", function() { wrapper.remove(); }, { once: true });
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
// Map of color input IDs → CSS variable names
var ADMIN_CSS_MAP = {
  "ac-brand":         "--brand",
  "ac-board-bg":      "--board-bg",
  "ac-tile-neutral":  "--tile-neutral",
  "ac-tile-selected": "--tile-selected",
  "ac-tile-valid":    "--tile-valid",
  "ac-tile-invalid":  "--tile-invalid",
  "ac-tile-played":   "--tile-played",
};

function initAdmin() {
  var panel = document.getElementById("admin-panel");
  if (!panel) return;

  // Settings tab admin trigger button
  var settingsAdminBtn = document.getElementById("settings-admin-btn");
  if (settingsAdminBtn) settingsAdminBtn.addEventListener("click", function() { panel.hidden = false; });

  // Settings version label
  var versionLabel = document.getElementById("settings-version-label");
  if (versionLabel) versionLabel.textContent = "Shukuma v" + VERSION;

  // Close button (HTML uses id="admin-close")
  var closeBtn = document.getElementById("admin-close");
  if (closeBtn) closeBtn.addEventListener("click", function() { panel.hidden = true; });

  // Restore saved overrides first so inputs reflect persisted values
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem("shukuma-admin-css") || "{}"); } catch (e) { /* ignore */ }
  Object.keys(saved).forEach(function(k) { document.documentElement.style.setProperty(k, saved[k]); });

  var savedFont = localStorage.getItem("shukuma-admin-font");
  if (savedFont) document.body.style.fontFamily = savedFont;

  var savedScale = localStorage.getItem("shukuma-admin-scale");
  if (savedScale) document.documentElement.style.fontSize = (parseFloat(savedScale) / 100) + "rem";

  // Wire colour pickers
  Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
    var cssVar = ADMIN_CSS_MAP[inputId];
    var input = document.getElementById(inputId);
    if (!input) return;
    // Seed with persisted value or computed CSS
    if (saved[cssVar]) {
      input.value = saved[cssVar];
    } else {
      var computed = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      if (computed) input.value = computed;
    }
    input.addEventListener("input", function() {
      document.documentElement.style.setProperty(cssVar, input.value);
    });
  });

  // Font selector
  var fontSelect = document.getElementById("ac-font");
  if (fontSelect) {
    if (savedFont) fontSelect.value = savedFont;
    fontSelect.addEventListener("change", function() {
      document.body.style.fontFamily = fontSelect.value;
    });
  }

  // Font scale (range 85–120 = percentage of base size)
  var fontScaleRange = document.getElementById("ac-font-scale");
  if (fontScaleRange) {
    if (savedScale) fontScaleRange.value = savedScale;
    fontScaleRange.addEventListener("input", function() {
      var pct = parseFloat(fontScaleRange.value);
      document.documentElement.style.fontSize = (pct / 100) + "rem";
    });
  }

  // Apply button — persist to localStorage
  var applyBtn = document.getElementById("admin-apply-btn");
  if (applyBtn) applyBtn.addEventListener("click", function() {
    var overrides = {};
    Object.keys(ADMIN_CSS_MAP).forEach(function(inputId) {
      var input = document.getElementById(inputId);
      if (input) overrides[ADMIN_CSS_MAP[inputId]] = input.value;
    });
    localStorage.setItem("shukuma-admin-css", JSON.stringify(overrides));
    if (fontScaleRange) localStorage.setItem("shukuma-admin-scale", fontScaleRange.value);
    if (fontSelect)     localStorage.setItem("shukuma-admin-font",  fontSelect.value);
    showToast("Theme saved.");
  });

  // Reset button — clear saved overrides and reload
  var resetBtn = document.getElementById("admin-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", function() {
    localStorage.removeItem("shukuma-admin-css");
    localStorage.removeItem("shukuma-admin-scale");
    localStorage.removeItem("shukuma-admin-font");
    window.location.reload();
  });

  // Clear all local storage
  var clearBtn = document.getElementById("admin-clear-storage-btn");
  if (clearBtn) clearBtn.addEventListener("click", function() {
    if (!confirm("Clear all local storage? This resets your game state.")) return;
    localStorage.clear();
    window.location.reload();
  });

  // Seed demo data
  var seedBtn = document.getElementById("admin-seed-btn");
  if (seedBtn) seedBtn.addEventListener("click", function() {
    seedDemoData().then(function() {
      showToast("Demo data seeded for matt@cranialscratch.com.");
    }).catch(function(e) {
      showToast("Seed failed: " + (e.message || e));
    });
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

  // Give Matt 100 tickets
  await db.collection("users").doc(uid).set({ tickets: 100 }, { merge: true });
  ticketCount = 100;
  updateTicketDisplay();
  saveState();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  loadUserSettings();
  buildColours();
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
  initSwipeNavigation();
  initSettings();
  initAdmin();

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
