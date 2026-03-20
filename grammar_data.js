// ═══════════════════════════════════════════════════════════════
// GRAMMAR_DATA.JS — Giáo trình tiếng Đức A1→C2
// Dùng chung cho index.html và learn.html
// Cấu trúc mỗi entry:
// { id, lv, group, title, titleVi, sub,
//   theory:{ intro, formula, examples[], tips[], dangers[], compare[] },
//   fill:{ s, ans, hint }, order:{ words[], ans[] },
//   quiz:[{ q, opts[], c, ex }] }
// ═══════════════════════════════════════════════════════════════

const GRAMMAR_DATA = {

// ══════════════════════════════════════════════════════
// A1 — 15 CHỦ ĐỀ
// ══════════════════════════════════════════════════════
A1: [

// 1. SEIN
{id:"a1_sein",lv:"A1",group:"Verben",title:"sein",titleVi:"Động từ 'là / ở'",sub:"Động từ bất quy tắc quan trọng nhất",
theory:{
intro:"<strong>sein</strong> là động từ bất quy tắc số 1 trong tiếng Đức — không có quy tắc nào giúp bạn đoán được. Dùng để diễn tả: danh tính (tên, quốc tịch), nghề nghiệp, tính cách, trạng thái (ốm, mệt...) và vị trí (ở đâu). <strong>Phải thuộc lòng hoàn toàn.</strong>",
formula:"ich <strong>bin</strong> | du <strong>bist</strong> | er/sie/es <strong>ist</strong>\nwir <strong>sind</strong> | ihr <strong>seid</strong> | sie/Sie <strong>sind</strong>\nPräteritum: war/warst/war/waren/wart/waren\nKonjunktiv II: wäre",
examples:[
 {de:"Ich <hl>bin</hl> Vietnamese.",vi:"Tôi là người Việt.",note:"Quốc tịch/danh tính → sein",good:true},
 {de:"Du <hl>bist</hl> sehr freundlich.",vi:"Bạn rất thân thiện.",note:"Tính cách → sein + Adjektiv",good:true},
 {de:"Er <hl>ist</hl> Arzt von Beruf.",vi:"Anh ấy là bác sĩ theo nghề.",note:"Nghề nghiệp: KHÔNG dùng Artikel! (ist Arzt, không phải ist ein Arzt)",good:true},
 {de:"Wir <hl>sind</hl> in Berlin.",vi:"Chúng tôi đang ở Berlin.",note:"Vị trí (ở đâu?) → sein + Ortsangabe",good:true},
 {de:"Das Wetter <hl>ist</hl> schön heute.",vi:"Thời tiết đẹp hôm nay.",note:"Mô tả trạng thái → sein + Adjektiv",good:true},
 {de:"Ihr <hl>seid</hl> meine besten Freunde.",vi:"Các bạn là những người bạn thân nhất của tôi.",note:"ihr → seid (hay bị nhầm với sind)",good:true},
 {de:"<span class='hl-red'>Ich ist müde.</span>",vi:"Tôi mệt.",note:"❌ SAI: ich → bin, không phải ist",good:false},
 {de:"<span class='hl-red'>Du sind Student.</span>",vi:"Bạn là sinh viên.",note:"❌ SAI: du → bist, không phải sind",good:false},
],
tips:["Thuộc theo thứ tự: BIN - BIST - IST - SIND - SEID - SIND. Đọc to 10 lần mỗi ngày trong 3 ngày.","Nghề nghiệp sau sein KHÔNG có Artikel: 'Ich bin Lehrer' (không phải 'ein Lehrer') — ngoại trừ có tính từ đi kèm: 'Ich bin EIN guter Lehrer'"],
dangers:["FALSCH: 'Du bin Student' → RICHTIG: 'Du BIST Student'. Mỗi ngôi có dạng riêng!","FALSCH: 'Er sind krank' → RICHTIG: 'Er IST krank'. er/sie/es luôn dùng IST"],
compare:[{a:"sein (là/ở/trạng thái)",b:"haben (có/sở hữu)",c:"Ich BIN krank (tôi ốm — trạng thái) | Ich HABE Kopfschmerzen (tôi đau đầu — có triệu chứng)"}]
},
fill:{s:"___ du müde? — Ja, ich ___ sehr müde.",ans:"Bist|bin",hint:"du → bist, ich → bin"},
quiz:[
 {q:"Ich ___ aus Vietnam. (sein)",opts:["bin","bist","ist","sind"],c:0,ex:"sein + ich = BIN. Reihenfolge: BIN-BIST-IST-SIND-SEID-SIND"},
 {q:"Er ___ Ingenieur von Beruf.",opts:["bin","bist","ist","sind"],c:2,ex:"sein + er = IST"},
 {q:"Wir ___ sehr glücklich heute.",opts:["bin","seid","ist","sind"],c:3,ex:"sein + wir = SIND"},
 {q:"Ihr ___ meine Kollegen.",opts:["seid","sind","ist","bin"],c:0,ex:"sein + ihr = SEID (hay nhầm với SIND!)"},
 {q:"Das ___ nicht richtig!",opts:["bin","bist","ist","seid"],c:2,ex:"sein + das (neutrum/es) = IST"},
]},

// 2. HABEN
{id:"a1_haben",lv:"A1",group:"Verben",title:"haben",titleVi:"Động từ 'có'",sub:"Sở hữu, cảm giác, Perfekt Hilfsverb",
theory:{
intro:"<strong>haben</strong> = có. Dùng để diễn đạt: sở hữu đồ vật/người, cảm giác thể chất (đói, khát, đau...), và quan trọng nhất — làm Hilfsverb tạo thì Perfekt (quá khứ). Bất quy tắc ở ngôi du (hast) và er/sie/es (hat).",
formula:"ich <strong>habe</strong> | du <strong>hast</strong> | er/sie/es <strong>hat</strong>\nwir <strong>haben</strong> | ihr <strong>habt</strong> | sie/Sie <strong>haben</strong>\nPräteritum: hatte/hattest/hatte/hatten/hattet/hatten",
examples:[
 {de:"Ich <hl>habe</hl> einen Bruder und eine Schwester.",vi:"Tôi có một anh/em trai và một chị/em gái.",note:"Sở hữu người thân → haben + Akkusativ",good:true},
 {de:"Er <hl>hat</hl> keine Zeit heute.",vi:"Anh ấy không có thời gian hôm nay.",note:"haben + kein/keine/kein để phủ định danh từ",good:true},
 {de:"<hl>Hast</hl> du Hunger?",vi:"Bạn có đói không?",note:"Cảm giác thể chất = haben, KHÔNG dùng sein!",good:true},
 {de:"Wir <hl>haben</hl> ein Problem.",vi:"Chúng tôi có một vấn đề.",note:"haben + ein + Nomen neutrum",good:true},
 {de:"Sie <hl>hat</hl> Geburtstag heute.",vi:"Hôm nay là sinh nhật cô ấy.",note:"Geburtstag haben = có sinh nhật (cụm cố định)",good:true},
 {de:"Ich <hl>habe</hl> gestern viel gelernt.",vi:"Hôm qua tôi đã học nhiều.",note:"haben làm Hilfsverb trong Perfekt",good:true},
 {de:"<span class='hl-red'>Ich habe kein Hunger.</span>",vi:"Tôi không đói.",note:"❌ SAI: Hunger = maskulin → keinen Hunger",good:false},
 {de:"<span class='hl-red'>Er habt ein Auto.</span>",vi:"Anh ấy có một chiếc xe.",note:"❌ SAI: er → hat (không phải habt — habt chỉ dùng cho 'ihr')",good:false},
],
tips:["haben + kein chia theo Genus: keinen (mask.Akk.), keine (fem.), kein (neut./Pl.)","Cảm giác thể chất LUÔN dùng haben: Hunger/Durst/Angst/Lust/Schmerzen HABEN — không bao giờ sein"],
dangers:["FALSCH: 'Ich bin Hunger' → RICHTIG: 'Ich HABE Hunger'. Tiếng Việt nói 'tôi ĐÓI' nhưng tiếng Đức: ich HABE Hunger","FALSCH: 'Er habt Zeit' → RICHTIG: 'Er HAT Zeit'. er/sie/es → HAT (không phải habt)"],
compare:[{a:"haben + Nomen (sở hữu)",b:"sein + Adjektiv (trạng thái)",c:"Ich habe HUNGER (có cảm giác đói) | Ich bin HUNGRIG (đang đói — tính từ)"}]
},
fill:{s:"___ du Zeit? — Nein, ich ___ leider keine Zeit.",ans:"Hast|habe",hint:"haben: du→hast, ich→habe"},
quiz:[
 {q:"Er ___ ein neues Fahrrad.",opts:["habe","hast","hat","haben"],c:2,ex:"haben + er = HAT"},
 {q:"___ ihr Hunger? — Ja, wir ___ großen Hunger!",opts:["Habt/haben","Hast/habe","Hat/hat","Haben/habt"],c:0,ex:"haben: ihr→habt, wir→haben"},
 {q:"Sie (Pl.) ___ viel Erfahrung.",opts:["hat","hast","haben","habt"],c:2,ex:"haben + sie (Plural)/Sie = HABEN"},
 {q:"Ich ___ Kopfschmerzen. Was soll ich machen?",opts:["bin","bin mit","habe","ist"],c:2,ex:"Körpersymptome = haben: ich HABE Kopfschmerzen"},
 {q:"Das Kind ___ Angst vor dem Hund.",opts:["ist","hat","hast","haben"],c:1,ex:"Angst haben = có nỗi sợ. das Kind → HAT"},
]},

// 3. ARTIKEL & GENUS
{id:"a1_artikel",lv:"A1",group:"Nomen & Artikel",title:"Artikel & Genus",titleVi:"Mạo từ & Giống danh từ",sub:"der/die/das — học KÈM với danh từ",
theory:{
intro:"Tiếng Đức có 3 giống: <strong>maskulin</strong> (der), <strong>feminin</strong> (die), <strong>neutrum</strong> (das). Giống của danh từ KHÔNG theo logic tự nhiên — 'das Mädchen' (cô gái) là trung tính! <strong>Quy tắc vàng: Không bao giờ học danh từ đơn lẻ. Luôn học: DER Tisch, DIE Lampe, DAS Buch.</strong>",
formula:"Mạo từ xác định: <strong>der</strong> (m) | <strong>die</strong> (f) | <strong>das</strong> (n) | <strong>die</strong> (Pl.)\nMạo từ không xác định: <strong>ein</strong> (m/n) | <strong>eine</strong> (f) | — (Pl.)\nKhông có mạo từ: nghề nghiệp sau sein, vật liệu chung, trừu tượng chung",
examples:[
 {de:"<hl>Der</hl> Mann arbeitet hier. — Kennst du <hl>den</hl> Mann?",vi:"Người đàn ông làm việc ở đây. — Bạn biết người đàn ông đó không?",note:"der (Nom.) → den (Akk.) — CHỈ maskulin thay đổi!",good:true},
 {de:"<hl>Die</hl> Frau ist Ärztin. Ich mag <hl>die</hl> Frau.",vi:"Người phụ nữ là bác sĩ. Tôi thích người phụ nữ đó.",note:"die feminin: Nominativ = Akkusativ = die",good:true},
 {de:"<hl>Das</hl> Kind spielt. Ich sehe <hl>das</hl> Kind.",vi:"Đứa trẻ chơi. Tôi thấy đứa trẻ.",note:"das neutrum: Nominativ = Akkusativ = das",good:true},
 {de:"Ich brauche <hl>einen</hl> Stift und <hl>ein</hl> Heft.",vi:"Tôi cần một cái bút và một quyển vở.",note:"einen (mask.Akk.) | ein (neut.Akk./Nom.)",good:true},
 {de:"Das ist <hl>eine</hl> gute Idee!",vi:"Đó là một ý tưởng hay!",note:"eine (fem.Nom./Akk.)",good:true},
 {de:"<hl>Das</hl> Mädchen heißt Lisa.",vi:"Cô bé tên là Lisa.",note:"NEUTRUM mặc dù là con gái — vì đuôi -chen → neutrum",good:true},
 {de:"<span class='hl-red'>Die Tisch ist groß.</span>",vi:"Cái bàn lớn.",note:"❌ SAI: Tisch = maskulin → DER Tisch",good:false},
 {de:"<span class='hl-red'>Ich kaufe ein Apfel.</span>",vi:"Tôi mua một quả táo.",note:"❌ SAI: Apfel = maskulin → EINEN Apfel (Akkusativ!)",good:false},
],
tips:[
 "Quy tắc đuôi FEMININ: -ung (Zeitung), -heit (Gesundheit), -keit (Möglichkeit), -schaft (Freundschaft), -tion (Information), -tät (Qualität), -ur (Natur) → IMMER feminin!",
 "Quy tắc đuôi NEUTRUM: -chen (Mädchen), -lein (Fräulein), -um (Museum), -ment (Instrument) → IMMER neutrum!",
 "Quy tắc đuôi MASKULIN: -er (Lehrer), -ling (Frühling), các ngày/tháng/mùa (der Montag, der Januar, der Sommer)"
],
dangers:[
 "Không bao giờ bỏ mạo từ khi danh từ đếm được số ít: FALSCH: 'Ich kaufe Apfel' → RICHTIG: 'Ich kaufe EINEN Apfel'",
 "FALSCH: 'Das ist ein Kind' → Đúng nhưng FALSCH: 'Das Mädchen ist eine Kind' → RICHTIG: 'Das Mädchen ist EIN Kind' (neutrum!)"
],
compare:[{a:"der/ein (maskulin)",b:"die/eine (feminin)",c:"der Lehrer | die Lehrerin — thêm -in thường tạo feminin từ maskulin"}]
},
fill:{s:"___ Buch ist interessant. Ich lese ___ Buch gerne.",ans:"Das|das",hint:"Buch = neutrum → das (Nom. và Akk. giống nhau với neutrum)"},
quiz:[
 {q:"___ Hund ist groß. (der Hund, Nominativ)",opts:["Der","Die","Das","Den"],c:0,ex:"Hund = maskulin → DER (Nominativ)"},
 {q:"Ich sehe ___ Hund. (der Hund, Akkusativ)",opts:["der","die","das","den"],c:3,ex:"Hund = maskulin → DEN (Akkusativ). CHỈ maskulin thay đổi: der→den!"},
 {q:"Das ist ___ Zeitung. (die Zeitung, Nominativ)",opts:["ein","eine","einen","einem"],c:1,ex:"-ung = feminin → EINE (indefinit Nominativ feminin)"},
 {q:"Er kauft ___ Auto. (das Auto, Akkusativ)",opts:["ein","eine","einen","einem"],c:0,ex:"Auto = neutrum → EIN (Akkusativ neutrum = Nominativ neutrum)"},
 {q:"___ Mädchen heißt Anna. (das Mädchen)",opts:["Der","Die","Das","Den"],c:2,ex:"-chen = immer neutrum → DAS Mädchen"},
]},

// 4. KASUS NOMINATIV & AKKUSATIV
{id:"a1_kasus",lv:"A1",group:"Kasus",title:"Nominativ & Akkusativ",titleVi:"Chủ cách & Đối cách",sub:"Ai làm gì với cái gì?",
theory:{
intro:"<strong>Nominativ</strong> = chủ ngữ (ai/cái gì làm hành động). <strong>Akkusativ</strong> = tân ngữ trực tiếp (ai/cái gì bị tác động). Điều quan trọng: <em>chỉ có maskulin thay đổi</em> khi chuyển từ Nom. sang Akk.: der→den, ein→einen.",
formula:"         Mask.    Fem.    Neut.   Plural\nNom.  der/ein  die/eine das/ein  die/—\nAkk.  den/einen die/eine das/ein  die/—\n⚠️ CHỈ maskulin thay đổi: der→den, ein→einen",
examples:[
 {de:"<hl>Der Hund</hl> beißt <hl>den Mann</hl>.",vi:"Con chó cắn người đàn ông.",note:"Der Hund (Nom.=chủ ngữ) | den Mann (Akk.=tân ngữ). Nếu đảo: 'Den Mann beißt der Hund' = vẫn là chó cắn người!",good:true},
 {de:"Ich kaufe <hl>einen Apfel</hl> und <hl>eine Banane</hl>.",vi:"Tôi mua một quả táo và một quả chuối.",note:"einen (mask.Akk.) | eine (fem.Akk.) — chỉ mask. thêm -n",good:true},
 {de:"Sie liest <hl>ein Buch</hl>.",vi:"Cô ấy đọc một cuốn sách.",note:"ein Buch: neutrum Akk. = Nom. — không thay đổi",good:true},
 {de:"Ich verstehe <hl>die Frage</hl> nicht.",vi:"Tôi không hiểu câu hỏi.",note:"die Frage: feminin Akk. = Nom. — không thay đổi",good:true},
 {de:"Er hat <hl>keinen</hl> Hunger.",vi:"Anh ấy không đói.",note:"keinen: mask.Akk. của kein (kein→keinen)",good:true},
 {de:"<hl>Das Kind</hl> liebt <hl>die Mutter</hl>.",vi:"Đứa trẻ yêu thương người mẹ.",note:"Das Kind (Nom.) | die Mutter (Akk.) — fem. không đổi",good:true},
 {de:"<span class='hl-red'>Ich sehe der Mann.</span>",vi:"Tôi thấy người đàn ông.",note:"❌ SAI: der Mann sau sehen → Akkusativ → DEN Mann",good:false},
 {de:"<span class='hl-red'>Er kauft ein Apfel.</span>",vi:"Anh ấy mua một quả táo.",note:"❌ SAI: Apfel = maskulin, Akkusativ → EINEN Apfel",good:false},
],
tips:["Hỏi NOMINATIV: 'WER/WAS macht das?' (Ai làm điều đó?)","Hỏi AKKUSATIV: 'WEN/WAS sehe/kaufe/liebe...ich?' (Tôi thấy/mua/yêu AI/CÁI GÌ?)","Mẹo nhớ: chỉ MASKULIN mới 'bị đánh' trong Akkusativ (thêm -n vào der và ein)"],
dangers:["Hay quên đổi ein→einen cho maskulin Akkusativ: 'Ich habe EIN Bruder' ❌ → 'Ich habe EINEN Bruder' ✓","Trật tự từ có thể thay đổi nhưng Kasus không đổi: 'Den Mann liebt die Frau' = người phụ nữ yêu người đàn ông (DEN = Akk. = tân ngữ)"],
compare:[{a:"Nominativ (chủ ngữ — làm hành động)",b:"Akkusativ (tân ngữ — bị tác động)",c:"DER Hund (Nom.) beißt DEN Mann (Akk.) ≠ DEN Hund (Akk.) beißt DER Mann (Nom.)"}]
},
fill:{s:"Ich sehe ___ Mann und ___ Frau dort.",ans:"den|die",hint:"Mann=mask.Akk.→den | Frau=fem.Akk.→die"},
quiz:[
 {q:"___ Hund bellt laut. (Nominativ)",opts:["Den","Die","Das","Der"],c:3,ex:"Hund = maskulin Nominativ → DER (chủ ngữ)"},
 {q:"Ich rufe ___ Hund. (Akkusativ, 'anrufen')",opts:["der","den","die","das"],c:1,ex:"Hund = maskulin Akkusativ → DEN (der→den)"},
 {q:"Sie liebt ___ Kind sehr. (Akkusativ)",opts:["dem","der","das","des"],c:2,ex:"Kind = neutrum → Akkusativ = Nominativ = DAS"},
 {q:"Er kauft ___ neuen Laptop. (ein, maskulin, Akkusativ)",opts:["ein","eine","einen","einem"],c:2,ex:"maskulin indefinit Akkusativ → EINEN (ein→einen)"},
 {q:"Ich habe ___ Frage. (Frage = feminin)",opts:["einen","einem","eine","ein"],c:2,ex:"Frage = feminin → EINE (feminin Akk. = Nom.)"},
]},

// 5. VERNEINUNG
{id:"a1_verneinung",lv:"A1",group:"Satzbau",title:"Verneinung",titleVi:"Phủ định: nicht vs. kein",sub:"Hai cách nói 'không' trong tiếng Đức",
theory:{
intro:"Tiếng Đức có 2 từ phủ định chính: <strong>nicht</strong> phủ định động từ, tính từ, trạng từ và cụm giới từ; <strong>kein/keine/kein</strong> phủ định danh từ (thay thế ein/eine/ein hoặc đứng trước danh từ không có mạo từ).",
formula:"<strong>nicht</strong>: phủ định Verb/Adj./Adv. — thường đứng CUỐI câu\n  → Ich arbeite nicht. | Das ist nicht gut.\n<strong>kein</strong>: phủ định Nomen — thay thế ein/eine/ein\n  mask.: kein/keinen | fem.: keine | neut.: kein | Pl.: keine",
examples:[
 {de:"Ich komme heute <hl>nicht</hl>.",vi:"Hôm nay tôi không đến.",note:"nicht phủ định toàn câu → đứng cuối",good:true},
 {de:"Das ist <hl>nicht</hl> richtig.",vi:"Điều đó không đúng.",note:"nicht đứng TRƯỚC Adjektiv khi phủ định riêng Adj.",good:true},
 {de:"Ich habe <hl>kein</hl> Auto.",vi:"Tôi không có xe hơi.",note:"Auto = neutrum → kein (thay thế 'ein')",good:true},
 {de:"Sie hat <hl>keine</hl> Zeit.",vi:"Cô ấy không có thời gian.",note:"Zeit = feminin → keine",good:true},
 {de:"Er trinkt <hl>keinen</hl> Kaffee.",vi:"Anh ấy không uống cà phê.",note:"Kaffee = maskulin, Akkusativ → keinen",good:true},
 {de:"Wir haben <hl>keine</hl> Kinder.",vi:"Chúng tôi không có con.",note:"Plural → keine",good:true},
 {de:"<span class='hl-red'>Ich habe nicht Auto.</span>",vi:"Tôi không có xe.",note:"❌ SAI: phủ định danh từ (không xác định) → kein/keine/kein",good:false},
 {de:"<span class='hl-red'>Ich kenne den Mann kein.</span>",vi:"Tôi không biết người đàn ông đó.",note:"❌ SAI: 'den Mann' đã xác định → 'Ich kenne den Mann NICHT'",good:false},
],
tips:["kein = nicht + ein: 'Ich habe KEIN Auto' = 'Ich habe NICHT EIN Auto'. Nếu trước danh từ là der/die/das (xác định) → dùng nicht: 'Ich kenne DEN Mann nicht'","Vị trí nicht: cuối câu khi phủ định toàn bộ | trước từ cần phủ định khi phủ định riêng phần"],
dangers:["Nhầm lẫn phổ biến: 'Ich habe nicht Hunger' ❌ → Hunger = maskulin Akk. → 'Ich habe KEINEN Hunger' ✓","Sau kein chia như ein: keinen (mask.Akk.), keine (fem.), kein (neut.), keine (Pl.)"],
compare:[{a:"nicht + Verb/Adj. (phủ định hành động/tính chất)",b:"kein + Nomen (phủ định sự tồn tại/sở hữu)",c:"Ich arbeite NICHT (không làm) | Ich habe KEINE Arbeit (không có việc làm)"}]
},
fill:{s:"Ich habe ___ Bruder, aber ich habe eine Schwester. Er kommt heute ___.",ans:"keinen|nicht",hint:"Bruder=mask.Akk.→keinen | phủ định toàn câu→nicht cuối"},
quiz:[
 {q:"Sie hat ___ Hunger. (Hunger = maskulin, Akkusativ)",opts:["nicht","kein","keine","keinen"],c:3,ex:"Hunger = maskulin Akkusativ → KEINEN"},
 {q:"Das ist ___ schön. (phủ định tính từ)",opts:["kein","keine","nicht","keinen"],c:2,ex:"phủ định Adjektiv → NICHT: 'Das ist NICHT schön'"},
 {q:"Ich habe ___ Geschwister. (Geschwister = Plural)",opts:["nicht","kein","keine","keinen"],c:2,ex:"Geschwister = Plural → KEINE"},
 {q:"Er kommt heute ___.",opts:["keine","kein","keinen","nicht"],c:3,ex:"phủ định toàn câu (Verb) → NICHT, đứng cuối"},
 {q:"Wir haben ___ Zeit für das Meeting.",opts:["keinen","keine","nicht","kein"],c:1,ex:"Zeit = feminin → KEINE Zeit"},
]},

// 6. W-FRAGEN
{id:"a1_wfragen",lv:"A1",group:"Satzbau",title:"W-Fragen",titleVi:"Câu hỏi với từ để hỏi",sub:"Wer? Was? Wo? Wann? Wie? Warum? Woher? Wohin?",
theory:{
intro:"W-Fragen dùng từ để hỏi bắt đầu bằng W để hỏi thông tin cụ thể. Cấu trúc cơ bản: <strong>W-Wort (vị trí 1) + Verb (vị trí 2) + Subjekt + Rest</strong>. Verb luôn ở vị trí 2 — đây là quy tắc V2 tiếng Đức.",
formula:"W-Wort + Verb + Subjekt + ...\nWer? = Ai? | Was? = Cái gì? | Wo? = Ở đâu?\nWoher? = Từ đâu? | Wohin? = Đi đâu?\nWann? = Khi nào? | Wie? = Như thế nào?\nWarum/Weshalb? = Tại sao? | Wie viel(e)? = Bao nhiêu?",
examples:[
 {de:"<hl>Wie</hl> heißen Sie?",vi:"Bạn tên gì? (lịch sự)",note:"Wie = như thế nào. heißen Sie? → đảo ngữ lịch sự",good:true},
 {de:"<hl>Woher</hl> kommst du?",vi:"Bạn đến từ đâu?",note:"Woher = từ đâu (xuất xứ). KHÔNG nói 'Wo kommst du von?'!",good:true},
 {de:"<hl>Wohin</hl> fährst du in den Ferien?",vi:"Bạn đi đâu trong kỳ nghỉ?",note:"Wohin = đi đâu (hướng/đích). Wo? ≠ Wohin?",good:true},
 {de:"<hl>Wann</hl> beginnt der Unterricht?",vi:"Giờ học bắt đầu khi nào?",note:"Wann = khi nào (thời gian)",good:true},
 {de:"<hl>Warum</hl> lernst du Deutsch?",vi:"Tại sao bạn học tiếng Đức?",note:"Warum = tại sao (lý do)",good:true},
 {de:"<hl>Wie viele</hl> Sprachen sprichst du?",vi:"Bạn nói được bao nhiêu ngôn ngữ?",note:"Wie viele? = bao nhiêu? (đếm được, số nhiều)",good:true},
 {de:"<hl>Wer</hl> ist das? — <hl>Wen</hl> liebst du?",vi:"Ai đó là ai? — Bạn yêu ai?",note:"Wer? = Nom. | Wen? = Akk. (Wer chia theo cách)",good:true},
 {de:"<span class='hl-red'>Wo kommst du?</span>",vi:"Bạn đến từ đâu?",note:"❌ SAI: Herkunft → WOHER kommst du?",good:false},
],
tips:["Wo/Woher/Wohin: Wo = ở đâu (đứng yên) | Woher = từ đâu (xuất phát) | Wohin = đi đâu (đích đến)","Wer chia theo Kasus: Wer? (Nom.) | Wen? (Akk.) | Wem? (Dat.) — giống như mạo từ der→den→dem"],
dangers:["FALSCH: 'Wo kommst du?' → RICHTIG: 'WOHER kommst du?'","FALSCH: 'Wie viel Bücher?' → RICHTIG: 'Wie viele Bücher?' (đếm được dùng wie viele)"],
compare:[{a:"Wo? (vị trí đứng yên)",b:"Wohin? (đích đến, có chuyển động)",c:"WO wohnst du? (ở đâu) | WOHIN gehst du? (đi đâu)"}]
},
fill:{s:"___ kommst du? — Aus Vietnam. ___ wohnst du jetzt? — In Berlin.",ans:"Woher|Wo",hint:"Herkunft (xuất xứ) → Woher | Ort (vị trí) → Wo"},
quiz:[
 {q:"___ ist das? — Das ist mein Freund Tom. (hỏi về người)",opts:["Was","Wo","Wer","Wie"],c:2,ex:"Hỏi về người → WER? (Was hỏi về đồ vật/sự việc)"},
 {q:"___ kostet das? — 15 Euro.",opts:["Wie viel","Wie viele","Wann","Warum"],c:0,ex:"Hỏi giá tiền → WIE VIEL? (không đếm được)"},
 {q:"___ fährst du? — Nach München.",opts:["Wo","Woher","Wohin","Wann"],c:2,ex:"Câu trả lời là đích đến (nach München) → WOHIN?"},
 {q:"___ beginnt der Film? — Um 20 Uhr.",opts:["Wie","Wo","Wen","Wann"],c:3,ex:"Hỏi thời điểm → WANN?"},
 {q:"___ lernst du Deutsch? — Weil ich in Deutschland studieren möchte.",opts:["Wo","Wann","Warum","Wohin"],c:2,ex:"Hỏi lý do → WARUM?"},
]},

// 7. PLURALFORMEN
{id:"a1_plural",lv:"A1",group:"Nomen & Artikel",title:"Plural",titleVi:"Danh từ số nhiều",sub:"5 kiểu tạo số nhiều + mạo từ 'die'",
theory:{
intro:"Tiếng Đức có <strong>5 nhóm tạo số nhiều</strong> và không có quy tắc tuyệt đối. Quan trọng: <strong>Tất cả danh từ số nhiều đều dùng mạo từ 'die'</strong>. Cần học số nhiều cùng lúc với danh từ: 'der Tisch, -e' (die Tische).",
formula:"Nhóm 1: thêm -(e): der Tisch → die Tische\nNhóm 2: thêm -(e)n: die Frau → die Frauen\nNhóm 3: thêm -er (±Umlaut): das Kind → die Kinder\nNhóm 4: thêm Umlaut (±e): der Vater → die Väter\nNhóm 5: thêm -s (từ vay mượn): das Auto → die Autos\nKhông đổi (±Umlaut): der Lehrer → die Lehrer",
examples:[
 {de:"<hl>Der</hl> Tisch → <hl>die</hl> Tische",vi:"cái bàn → những cái bàn",note:"Nhóm 1: +e (phổ biến nhất với maskulin)",good:true},
 {de:"<hl>Die</hl> Frau → <hl>die</hl> Frauen",vi:"người phụ nữ → những người phụ nữ",note:"Nhóm 2: +en (phổ biến nhất với feminin)",good:true},
 {de:"<hl>Das</hl> Kind → <hl>die</hl> Kinder",vi:"đứa trẻ → những đứa trẻ",note:"Nhóm 3: +er (nhiều neutrum)",good:true},
 {de:"<hl>Der</hl> Vater → <hl>die</hl> Väter",vi:"người cha → những người cha",note:"Nhóm 4: Umlaut (â/ö/ü)",good:true},
 {de:"<hl>Das</hl> Auto → <hl>die</hl> Autos",vi:"xe hơi → những xe hơi",note:"Nhóm 5: +s (từ nước ngoài, viết tắt)",good:true},
 {de:"<hl>Der</hl> Lehrer → <hl>die</hl> Lehrer",vi:"giáo viên (nam) → những giáo viên",note:"Không đổi: nhiều từ kết thúc bằng -er",good:true},
 {de:"Ich habe zwei <hl>Kinder</hl>. Meine <hl>Kinder</hl> heißen Max und Lisa.",vi:"Tôi có hai đứa con. Con tôi tên Max và Lisa.",note:"Plural luôn dùng 'die' (kể cả das Kind → die Kinder)",good:true},
 {de:"<span class='hl-red'>Die Fraus kommen.</span>",vi:"Những người phụ nữ đến.",note:"❌ SAI: die Frau → die Frauen (+en, không phải +s)",good:false},
],
tips:["Khi học từ mới, học theo công thức: Genus + từ + Plural: 'der Mann, ¨-er → die Männer'","Từ kết thúc bằng -ung, -heit, -keit, -schaft, -tion luôn +en: die Zeitung → die Zeitungen","Từ -er, -en, -el thường không đổi ở Plural (hoặc chỉ thêm Umlaut)"],
dangers:["FALSCH: 'die Kinds' → RICHTIG: 'die Kinder' (das Kind → die Kinder, +er)","FALSCH: 'die Männer arbeiten hard' → RICHTIG: 'die Männer arbeiten hart' (và Männer = Umlaut!)"],
compare:[{a:"Singular: der/die/das + Nomen",b:"Plural: IMMER 'die' + Nomen (+ Endung)",c:"DAS Kind | DIE Kinder | DER Mann | DIE Männer"}]
},
fill:{s:"Ich habe zwei ___. (das Kind) Sie spielen im Garten.",ans:"Kinder",hint:"das Kind → die Kinder (+er, kein Umlaut)"},
quiz:[
 {q:"die Frau → Plural?",opts:["die Fraus","die Frauen","die Fräuen","die Fraue"],c:1,ex:"Frau → Frauen (+en). Feminin -en-Plural sehr häufig."},
 {q:"das Buch → Plural?",opts:["die Buchs","die Buche","die Bücher","die Büchs"],c:2,ex:"Buch → Bücher (+er + Umlaut). Lernwort!"},
 {q:"der Tisch → Plural?",opts:["die Tischs","die Tische","die Täsche","die Tischers"],c:1,ex:"Tisch → Tische (+e). Maskulin +e sehr häufig."},
 {q:"Wie viele ___ hast du? (das Auto)",opts:["Autos","Autoe","Auten","Autös"],c:0,ex:"Auto → Autos (+s). Fremdwörter oft +s."},
 {q:"Die ___ kommen aus Deutschland. (der Lehrer)",opts:["Lehrers","Lehrer","Lehrern","Lehrerine"],c:1,ex:"Lehrer → Lehrer (keine Änderung). -er Wörter meist unveränderter Plural."},
]},

// 8. PERSONALPRONOMEN
{id:"a1_pronomen",lv:"A1",group:"Pronomen",title:"Personalpronomen",titleVi:"Đại từ nhân xưng",sub:"ich, du, er, sie, es, wir, ihr, sie, Sie",
theory:{
intro:"Đại từ nhân xưng thay thế danh từ đã nhắc đến. Quan trọng: giống (Genus) của danh từ quyết định đại từ thay thế — 'die Lampe' → 'sie' dù đèn không có giới tính. Ngoài ra: Sie (hoa) = cách nói lịch sự (với người lạ, cấp trên).",
formula:"Nom.:  ich | du | er | sie | es | wir | ihr | sie | Sie\nAkk.:  mich | dich | ihn | sie | es | uns | euch | sie | Sie\nDat.:  mir | dir | ihm | ihr | ihm | uns | euch | ihnen | Ihnen",
examples:[
 {de:"Das ist mein Vater. <hl>Er</hl> ist Arzt.",vi:"Đây là bố tôi. Ông ấy là bác sĩ.",note:"der Vater (maskulin) → er",good:true},
 {de:"Die Lampe ist schön. Ich mag <hl>sie</hl>.",vi:"Cái đèn đẹp. Tôi thích nó.",note:"die Lampe (feminin) → sie (Akkusativ)",good:true},
 {de:"Das Buch ist interessant. Liest du <hl>es</hl>?",vi:"Cuốn sách thú vị. Bạn đọc nó không?",note:"das Buch (neutrum) → es",good:true},
 {de:"Ich kenne <hl>ihn</hl> nicht.",vi:"Tôi không biết anh ấy.",note:"er → ihn (Akkusativ maskulin)",good:true},
 {de:"Kannst du <hl>mir</hl> helfen?",vi:"Bạn có thể giúp tôi không?",note:"ich → mir (Dativ) — helfen + Dativ",good:true},
 {de:"Entschuldigung, <hl>Sie</hl> haben meinen Stift.",vi:"Xin lỗi, bạn/ông/bà đang cầm bút của tôi.",note:"Sie (hoa) = lịch sự — không phân biệt nam/nữ",good:true},
 {de:"<span class='hl-red'>Die Lampe ist schön. Er ist teuer.</span>",vi:"Cái đèn đẹp. Nó đắt.",note:"❌ SAI: die Lampe = feminin → SIE ist teuer",good:false},
 {de:"<span class='hl-red'>Ich liebe er.</span>",vi:"Tôi yêu anh ấy.",note:"❌ SAI: sau động từ 'lieben' → Akkusativ → IHN",good:false},
],
tips:["Mẹo: Đại từ thay thế theo GENUS của danh từ, không theo nghĩa thực. 'Das Mädchen' → 'ES' (không phải 'sie')","Sie vs sie: Sie (hoa, singular/plural) = lịch sự; sie (thường) = cô ấy/họ — phân biệt qua ngữ cảnh"],
dangers:["FALSCH: 'Ich liebe er' → RICHTIG: 'Ich liebe IHN' (Akkusativ von er = ihn)","Hay quên: die Lampe → SIE (feminin!), không phải 'es'"],
compare:[{a:"er/sie/es (Nominativ)",b:"ihn/sie/es (Akkusativ)",c:"ER kommt (Nom.) | Ich sehe IHN (Akk.) — chỉ maskulin thay đổi: er→ihn"}]
},
fill:{s:"Das ist meine Mutter. ___ ist sehr nett. Ich liebe ___ sehr.",ans:"Sie|sie",hint:"Mutter = feminin → sie (Nom.) và sie (Akk. feminin không đổi)"},
quiz:[
 {q:"Der Hund ist süß. Ich mag ___.",opts:["er","ihn","ihm","es"],c:1,ex:"der Hund = maskulin → Akkusativ = IHN (er→ihn)"},
 {q:"Das ist mein Buch. ___ ist sehr interessant.",opts:["Er","Sie","Es","Ihr"],c:2,ex:"das Buch = neutrum → ES"},
 {q:"Kannst du ___ bitte helfen? (ich → Dativ)",opts:["mich","ich","mir","mein"],c:2,ex:"ich → Dativ = MIR. helfen nimmt Dativ!"},
 {q:"Guten Tag, ___ sind Frau Müller, oder?",opts:["sie","Sie","ihr","du"],c:1,ex:"Formelle Anrede → SIE (Großschreibung)"},
 {q:"Ich rufe ___ morgen an. (du → Akkusativ)",opts:["du","dich","dir","dein"],c:1,ex:"du → Akkusativ = DICH"},
]},

// 9. MODALVERBEN INTRO (können, müssen)
{id:"a1_modal_intro",lv:"A1",group:"Verben & Konjugation",title:"Modalverben (können, müssen)",titleVi:"Động từ tình thái: có thể, phải",sub:"Modal ở vị trí 2 + Infinitiv cuối câu",
theory:{
intro:"Modalverben diễn đạt khả năng, nghĩa vụ, mong muốn... Cấu trúc: <strong>Modal (vị trí 2) + ... + Infinitiv (cuối câu)</strong>. Tất cả Modal đều bất quy tắc và <em>mất umlaut ở ngôi số ít</em>: können → kann, müssen → muss.",
formula:"können (có thể): ich kann | du kannst | er kann | wir können | ihr könnt | sie können\nmüssen (phải): ich muss | du musst | er muss | wir müssen | ihr müsst | sie müssen\nCú pháp: [S] + Modal(V2) + [O/Adv.] + Infinitiv(CUỐI)",
examples:[
 {de:"Ich <hl>kann</hl> gut Deutsch <hl>sprechen</hl>.",vi:"Tôi có thể nói tiếng Đức tốt.",note:"können + Infinitiv cuối câu. 'gut' đứng giữa",good:true},
 {de:"Du <hl>musst</hl> das jetzt <hl>machen</hl>.",vi:"Bạn phải làm điều đó ngay bây giờ.",note:"müssen = bắt buộc (nội tại hoặc do hoàn cảnh)",good:true},
 {de:"<hl>Kann</hl> ich hier <hl>sitzen</hl>?",vi:"Tôi có thể ngồi đây không?",note:"Modal ở đầu câu hỏi Ja/Nein",good:true},
 {de:"Er <hl>kann</hl> leider nicht <hl>kommen</hl>.",vi:"Tiếc là anh ấy không thể đến.",note:"Negation: nicht trước Infinitiv hoặc cuối câu",good:true},
 {de:"Wir <hl>müssen</hl> jetzt <hl>gehen</hl>.",vi:"Chúng ta phải đi bây giờ.",note:"wir → müssen (lấy lại umlaut ở số nhiều!)",good:true},
 {de:"<span class='hl-red'>Ich kann sprechen Deutsch.</span>",vi:"Tôi có thể nói tiếng Đức.",note:"❌ SAI: Infinitiv phải ở CUỐI: 'Ich kann Deutsch SPRECHEN'",good:false},
],
tips:["Modal ở V2, Infinitiv ở cuối — không bao giờ đặt Infinitiv ngay sau Modal!","können có thể dùng mà không có Infinitiv nếu ngữ cảnh rõ: 'Ich kann das' (Tôi có thể làm điều đó)"],
dangers:["FALSCH: 'Ich muss nicht kommen' ≠ 'Tôi không được phép đến' → Đúng: 'Tôi không cần đến'. Cần dùng 'darf nicht' để diễn đạt 'không được phép'"],
compare:[{a:"können (khả năng)",b:"müssen (bắt buộc)",c:"Ich KANN kommen (có thể đến — tùy tôi) | Ich MUSS kommen (phải đến — bắt buộc)"}]
},
fill:{s:"Ich ___ leider nicht ___, weil ich krank bin. (können, kommen)",ans:"kann|kommen",hint:"können: ich→kann. Infinitiv kommen cuối câu"},
quiz:[
 {q:"Er ___ sehr gut Klavier ___. (können, spielen)",opts:["kann/spielen","kannst/spielen","kann/spielt","können/spielen"],c:0,ex:"können + er = KANN. Infinitiv spielen ans Ende."},
 {q:"Wir ___ morgen früh aufstehen.",opts:["müsst","musst","müssen","muss"],c:2,ex:"müssen + wir = MÜSSEN"},
 {q:"___ du mir helfen? (können)",opts:["Kann","Kannst","Können","Könnt"],c:1,ex:"können + du = KANNST. Frage: Modal an erste Position"},
 {q:"Sie ___ das Formular ausfüllen. (müssen, sie=Pl.)",opts:["muss","musst","müssen","müsst"],c:2,ex:"müssen + sie (Plural) = MÜSSEN"},
 {q:"Ich ___ heute leider nicht kommen. (können)",opts:["kann","kannst","können","könnte"],c:0,ex:"können + ich = KANN"},
]},

// 10. TRENNBARE VERBEN
{id:"a1_trennbar",lv:"A1",group:"Verben & Konjugation",title:"Trennbare Verben",titleVi:"Động từ tách được",sub:"aufmachen, anrufen, einladen — Vorsilbe ans Ende!",
theory:{
intro:"Nhiều động từ tiếng Đức có tiền tố (Vorsilbe) <em>tách ra</em> khỏi động từ khi chia: <strong>aufmachen → Ich mache die Tür auf</strong>. Các Vorsilbe thường gặp: auf-, an-, ab-, ein-, aus-, mit-, vor-, zu-, zurück-, weiter-. Khi nói, Vorsilbe được NHẤN MẠNH hơn.",
formula:"Trennbare Vorsilbe: auf-, an-, ab-, ein-, aus-, mit-, vor-, zu-, zurück-\nCú pháp: [S] + Verb(chia) + ... + Vorsilbe(CUỐI)\nPartizipII: ge + Vorsilbe + Stamm + t/en: aufmachen → aufgemacht\nModal: Modal(V2) + ... + Infinitiv(CUỐI, không tách): 'Ich muss die Tür aufmachen'",
examples:[
 {de:"Ich <hl>mache</hl> die Tür <hl>auf</hl>.",vi:"Tôi mở cửa.",note:"aufmachen → mache...auf (tách ra, auf cuối câu)",good:true},
 {de:"Er <hl>ruft</hl> seine Mutter <hl>an</hl>.",vi:"Anh ấy gọi điện cho mẹ.",note:"anrufen → ruft...an",good:true},
 {de:"Wir <hl>laden</hl> alle Freunde <hl>ein</hl>.",vi:"Chúng tôi mời tất cả bạn bè.",note:"einladen → laden...ein",good:true},
 {de:"Der Zug <hl>fährt</hl> um 8 Uhr <hl>ab</hl>.",vi:"Tàu khởi hành lúc 8 giờ.",note:"abfahren → fährt...ab (bất quy tắc: fahren→fährt)",good:true},
 {de:"Ich muss die Tür <hl>aufmachen</hl>.",vi:"Tôi phải mở cửa.",note:"Modal + Infinitiv: KHÔNG tách: aufmachen (nguyên vẹn cuối câu)",good:true},
 {de:"<span class='hl-red'>Ich aufmache die Tür.</span>",vi:"Tôi mở cửa.",note:"❌ SAI: phải tách: 'Ich MACHE die Tür AUF'",good:false},
],
tips:["Mẹo nhận biết: trọng âm rơi vào Vorsilbe (AUFmachen) → trennbar. Nếu rơi vào Stamm (verSTEHen) → không tách","Không tách: be-, ver-, er-, zer-, ge-, ent-, emp-, miss- → 'Er VERSTEHT die Frage' (không tách)"],
dangers:["Trong Nebensatz: tái hợp lại! 'Ich weiß, dass er die Tür aufmacht' (không tách vì Verb ở cuối NS)"],
compare:[{a:"Hauptsatz: tách (Vorsilbe cuối)",b:"Modal/Infinitiv: không tách",c:"Ich MACHE auf. | Ich muss AUFMACHEN."}]
},
fill:{s:"Ich ___ die Tür ___ und ___ das Licht ___. (aufmachen, anmachen)",ans:"mache|auf|mache|an",hint:"aufmachen→mache...auf | anmachen→mache...an"},
quiz:[
 {q:"Er ___ seine Freundin ___. (anrufen)",opts:["anruft/—","ruft/an","rufan/—","ruft/anrufen"],c:1,ex:"anrufen → ruft...AN. Vorsilbe 'an' ans Ende!"},
 {q:"Wir ___ morgen um 8 Uhr ___. (abfahren, wir)",opts:["abfahren/—","fahren/ab","fahrt/ab","fährt/ab"],c:1,ex:"abfahren → wir FAHREN...AB"},
 {q:"Ich muss das Fenster ___. (aufmachen)",opts:["auf/machen","aufmachen","machen auf","auf machen"],c:1,ex:"Mit Modal: NICHT trennen! 'Ich muss das Fenster AUFMACHEN'"},
 {q:"Sie ___ alle Gäste ___. (einladen)",opts:["ladet/ein","lädt/ein","einlädt/—","lädt/einladen"],c:1,ex:"einladen → lädt...EIN (Umlaut bei er/sie/es: laden→lädt)"},
 {q:"___ bitte das Licht ___! (anmachen, Imperativ du)",opts:["Mach/an","An/mach","Mache/an","Machst/an"],c:0,ex:"Imperativ trennbar: MACH das Licht AN!"},
]},

// 11. POSSESSIVPRONOMEN (mein, dein...)
{id:"a1_possessiv",lv:"A1",group:"Pronomen",title:"Possessivpronomen",titleVi:"Đại từ sở hữu",sub:"mein, dein, sein, ihr, unser, euer, ihr/Ihr",
theory:{
intro:"Đại từ sở hữu diễn đạt 'của ai'. Chúng chia như <strong>kein</strong> (cùng đuôi). Hai bước: (1) chọn gốc theo chủ sở hữu (mein/dein/sein...); (2) thêm đuôi theo Genus + Kasus của danh từ bị sở hữu.",
formula:"ich→mein | du→dein | er→sein | sie(sg)→ihr | es→sein\nwir→unser | ihr→euer | sie(pl)/Sie→ihr/Ihr\nĐuôi giống kein: Nom.m=—, Nom.f=e, Nom.n=—, Akk.m=en, Akk.f=e, Akk.n=—",
examples:[
 {de:"Das ist <hl>mein</hl> Vater und <hl>meine</hl> Mutter.",vi:"Đây là bố tôi và mẹ tôi.",note:"mein+Vater(m.Nom.)=mein | mein+Mutter(f.Nom.)=meine",good:true},
 {de:"Wie heißt <hl>dein</hl> Hund?",vi:"Con chó của bạn tên gì?",note:"dein+Hund(m.Nom.)=dein",good:true},
 {de:"Ich liebe <hl>meinen</hl> Job.",vi:"Tôi yêu công việc của mình.",note:"mein+Job(m.Akk.)=meinen (Akk.mask.→+en)",good:true},
 {de:"Er vermisst <hl>seine</hl> Familie.",vi:"Anh ấy nhớ gia đình của mình.",note:"sein+Familie(f.Akk.)=seine (Akk.fem.=Nom.fem.=+e)",good:true},
 {de:"<hl>Unser</hl> Haus ist nicht groß.",vi:"Ngôi nhà của chúng tôi không lớn.",note:"unser+Haus(n.Nom.)=unser (neut.Nom./Akk. không thêm đuôi)",good:true},
 {de:"<span class='hl-red'>Das ist meine Bruder.</span>",vi:"Đây là anh trai tôi.",note:"❌ SAI: Bruder=maskulin Nom. → MEIN Bruder (không thêm -e)",good:false},
],
tips:["Đuôi của Possessivpronomen = đuôi của kein. Học kein → biết luôn mein/dein/sein...","euer mất -e- trước đuôi: euer → eure (không phải euere): 'eure Mutter'"],
dangers:["FALSCH: 'meine Vater' → RICHTIG: 'mein Vater' (maskulin Nominativ = không có đuôi!)","euer → eure (Nom.f) | euren (Akk.m) — e của euer thường bị bỏ"],
compare:[{a:"sein (của anh ấy / của nó)",b:"ihr (của cô ấy / của họ)",c:"SEIN Auto = xe của anh ấy | IHR Auto = xe của cô ấy HOẶC xe của họ (ngữ cảnh quyết định)"}]
},
fill:{s:"Das ist ___ Buch (ich) und das ist ___ Stift. (du, mask.Nom.)",ans:"mein|dein",hint:"ich→mein (neut.Nom.=kein Endung) | du→dein (mask.Nom.=kein Endung)"},
quiz:[
 {q:"Das ist ___ Auto. (sie = cô ấy, das Auto)",opts:["seinen","ihren","ihr","ihre"],c:2,ex:"sie(sg)→ihr. Auto=neutrum Nom. → IHR (kein Endung)"},
 {q:"Ich vermisse ___ Familie. (ich, feminin Akkusativ)",opts:["mein","meinen","meinem","meine"],c:3,ex:"ich→mein. Familie=feminin Akk.=Nom. → MEINE"},
 {q:"Wie ist ___ Name? (Sie = lịch sự, maskulin Nom.)",opts:["Ihr","Ihre","Ihren","Ihrem"],c:0,ex:"Sie(lịch sự)→Ihr (hoa). Name=maskulin Nom. → IHR (kein Endung)"},
 {q:"Wir lieben ___ Stadt. (wir, die Stadt, Akkusativ)",opts:["unsere","unser","unseren","unserem"],c:0,ex:"wir→unser. Stadt=feminin Akk. → UNSERE (-e)"},
 {q:"Das sind ___ Kinder. (ihr = các bạn, Plural Nom.)",opts:["euere","eure","euren","euer"],c:1,ex:"ihr→euer. Plural Nom. → EURE (euer verliert -e- vor Endung)"},
]},

// 12. PRÄPOSITIONEN LOKAL
{id:"a1_praep_lokal",lv:"A1",group:"Präpositionen",title:"Lokale Präpositionen",titleVi:"Giới từ chỉ nơi chốn",sub:"in, an, auf, bei, neben, vor, hinter, über, unter, zwischen",
theory:{
intro:"Giới từ chỉ vị trí trả lời câu hỏi <strong>Wo?</strong> (ở đâu). Hai nhóm: (1) giới từ luôn đi với Dativ (bei, nach, aus, von, zu, seit, mit, gegenüber); (2) Wechselpräpositionen (in, an, auf, über, unter, neben, vor, hinter, zwischen) — dùng <em>Dativ khi đứng yên</em> (Wo?) và <em>Akkusativ khi có chuyển động đến đích</em> (Wohin?).",
formula:"LUÔN Dativ: bei, nach, aus, von, zu, seit, mit, gegenüber\nWechselpräp. Wo?→Dativ | Wohin?→Akkusativ\nDativ: dem/der/dem | Akkusativ: den/die/das\nArtikelkontraktionen: in dem→im | an dem→am | in das→ins | an das→ans",
examples:[
 {de:"Das Buch liegt <hl>auf dem</hl> Tisch.",vi:"Cuốn sách nằm trên bàn.",note:"auf + Wo? → Dativ: auf dem Tisch (der Tisch→dem)",good:true},
 {de:"Ich lege das Buch <hl>auf den</hl> Tisch.",vi:"Tôi đặt cuốn sách lên bàn.",note:"auf + Wohin? → Akkusativ: auf den Tisch",good:true},
 {de:"Wir sind <hl>im</hl> Restaurant. (in + dem)",vi:"Chúng tôi đang ở trong nhà hàng.",note:"im = in + dem (Kontraktion)",good:true},
 {de:"Ich gehe <hl>ins</hl> Kino. (in + das)",vi:"Tôi đi xem phim.",note:"ins = in + das (Kontraktion, Wohin?→Akk.)",good:true},
 {de:"Er wohnt <hl>bei</hl> seinen Eltern.",vi:"Anh ấy sống với bố mẹ.",note:"bei + Dativ immer (wohnen bei = sống cùng với)",good:true},
 {de:"<span class='hl-red'>Das Buch ist auf den Tisch.</span>",vi:"Cuốn sách ở trên bàn.",note:"❌ SAI: liegt (đứng yên) → Wo? → auf DEM Tisch",good:false},
],
tips:["Trick nhớ Wo/Wohin: Wo? = nằm, đứng, ngồi (Dativ) | Wohin? = đặt, gắn, đi (Akkusativ). Legen/stellen/hängen = Wohin → Akk.","Hay gặp: am Montag (an+dem), im Sommer (in+dem), ins Büro (in+das), ans Meer (an+das)"],
dangers:["FALSCH: 'Ich bin in dem Schule' → RICHTIG: 'Ich bin in DER Schule' (Schule = feminin → der, không có Kontraktion với feminin)"],
compare:[{a:"Wo? (Dativ, đứng yên)",b:"Wohin? (Akkusativ, có chuyển động)",c:"Das Buch liegt auf DEM Tisch | Ich lege das Buch auf DEN Tisch"}]
},
fill:{s:"Das Buch liegt ___ ___ Tisch. Ich lege es ___ ___ Regal. (auf, der Tisch, das Regal)",ans:"auf dem|auf das",hint:"Wo?→auf dem (Dativ) | Wohin?→auf das (Akkusativ neutrum)"},
quiz:[
 {q:"Die Katze sitzt ___ ___ Sofa. (auf, das Sofa, Wo?)",opts:["auf dem","auf das","auf der","auf den"],c:0,ex:"Wo? (sitzt=đứng yên) → Dativ. das Sofa → dem Sofa"},
 {q:"Ich gehe ___ ___ Schule. (in, die Schule, Wohin?)",opts:["in der","in die","in den","im"],c:1,ex:"Wohin? (gehe=di chuyển) → Akkusativ. die Schule → die Schule"},
 {q:"Er wohnt ___ Berlin. (in, Wo?)",opts:["in die","ins","in","im"],c:3,ex:"Berlin = maskulin → in + dem = IM Berlin? Nein! Städtenamen: keine Artikel → 'in Berlin' (kein Artikel)"},
 {q:"Das Café ist ___ ___ Bahnhof. (an, der Bahnhof, Wo?)",opts:["an den","an dem","am","ans"],c:2,ex:"Wo? → Dativ. an + dem = AM (Kontraktion)"},
 {q:"Ich hänge das Bild ___ ___ Wand. (an, die Wand, Wohin?)",opts:["an der","an die","am","ans"],c:1,ex:"Wohin? (hänge=đặt lên) → Akkusativ. die Wand → die Wand"},
]},

// 13. IMPERATIV
{id:"a1_imperativ",lv:"A1",group:"Verben & Konjugation",title:"Imperativ",titleVi:"Câu mệnh lệnh",sub:"Mach! Macht! Machen Sie! — 3 hình thức",
theory:{
intro:"Imperativ dùng để ra lệnh, yêu cầu, đề nghị. Tiếng Đức có 3 hình thức Imperativ tương ứng với 3 ngôi: du (thân mật 1 người), ihr (thân mật nhiều người), Sie (lịch sự).",
formula:"du-Form: Stamm(+e) — bỏ -st của du: du machst → Mach!\n  (động từ -d/-t/-ig/-m/-n: +e: Arbeite! Rede! Öffne!)\nihr-Form: giống chia thường: ihr macht → Macht!\nSie-Form: Infinitiv + Sie: Machen Sie!\nBất quy tắc: sein → Sei! / Seid! / Seien Sie!\n  starke Verben mit e→ie/i: lesen→lies! geben→gib! fahren→fahr!",
examples:[
 {de:"<hl>Komm</hl> bitte her!",vi:"Lại đây nào!",note:"du-Form: kommen → komm (bỏ -st)",good:true},
 {de:"<hl>Öffnet</hl> bitte die Bücher!",vi:"Các bạn hãy mở sách ra!",note:"ihr-Form: öffnen → öffnet (giống chia bình thường)",good:true},
 {de:"<hl>Sprechen Sie</hl> bitte langsamer!",vi:"Xin nói chậm hơn!",note:"Sie-Form: sprechen → Sprechen Sie (Infinitiv + Sie)",good:true},
 {de:"<hl>Sei</hl> nicht so laut!",vi:"Đừng ồn như vậy!",note:"sein bất quy tắc: du→Sei! (không phải 'bis')",good:true},
 {de:"<hl>Lies</hl> das Buch! — <hl>Gib</hl> mir das!",vi:"Đọc sách đi! — Đưa cho tôi!",note:"lesen→lies (e→ie) | geben→gib (e→i) — Vokalwechsel!",good:true},
 {de:"<span class='hl-red'>Machst du das!</span>",vi:"Làm điều đó đi!",note:"❌ Đây là câu hỏi, không phải mệnh lệnh. Imperativ: 'Mach das!'",good:false},
],
tips:["bitte làm câu lịch sự hơn: 'Komm bitte!' hoặc 'Bitte komm!' đều được","Thêm -e với du-Form khi Stamm kết thúc bằng -d/-t/-ig: 'Arbeite!' 'Öffne!' 'Entschuld-ige!'"],
dangers:["FALSCH: 'Fahren Sie bitte schneller' ❌ → RICHTIG: Đúng! Fahren Sie bitte schneller ✓ — nhưng FALSCH: 'Sie fahren bitte' (đây là câu kể, không phải mệnh lệnh)"],
compare:[{a:"du: Komm! (thân mật, 1 người)",b:"Sie: Kommen Sie! (lịch sự)",c:"Du machst das → MACH das! | Sie machen das → MACHEN SIE das!"}]
},
fill:{s:"___ bitte das Fenster ___! (du, aufmachen) ___ bitte langsam! (Sie, sprechen)",ans:"Mach|auf|Sprechen Sie",hint:"du-Imperativ trennbar: Mach...auf | Sie-Form: Sprechen Sie"},
quiz:[
 {q:"Imperativ du von 'kommen': Komm___ bitte!",opts:["Kommt","Kommen","Komm","Kommst"],c:2,ex:"du-Imperativ: kommen → KOMM (bỏ -st, kein -e nötig)"},
 {q:"Imperativ Sie von 'warten': ___ bitte!",opts:["Wart","Wartet","Warten Sie","Warte"],c:2,ex:"Sie-Form: Infinitiv + Sie → WARTEN SIE"},
 {q:"Imperativ du von 'lesen': ___ das Buch!",opts:["Lese","Liest","Lies","Lesen"],c:2,ex:"lesen: Vokalwechsel e→ie → LIES (du liest → Lies!)"},
 {q:"Imperativ ihr von 'machen': ___ das sofort!",opts:["Mach","Macht","Machen","Machst"],c:1,ex:"ihr-Form = chia bình thường: ihr macht → MACHT"},
 {q:"Imperativ du von 'sein': ___ bitte ruhig!",opts:["Seid","Bist","Sei","Seien Sie"],c:2,ex:"sein: bất quy tắc! du → SEI (không phải 'bis')"},
]},

// 14. ZAHLEN & DATUM
{id:"a1_zahlen",lv:"A1",group:"Sonstige",title:"Zahlen & Datum",titleVi:"Số đếm & Ngày tháng",sub:"1-1000, Datum, Uhrzeit",
theory:{
intro:"Số đếm và ngày tháng là nền tảng giao tiếp hàng ngày. Tiếng Đức có cấu trúc số đặc biệt: từ 13-19: teen + zehn; từ 21-99: đơn vị + und + chục (einundzwanzig = 1+20). Ngày tháng: Ordinalia (1. = erste, 2. = zweite...).",
formula:"1-12: eins/ein, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf\n13-19: dreizehn...neunzehn\n20-90: zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig\n21-99: einundzwanzig, zweiunddreißig...\n100: hundert | 1000: tausend\nDatum: am + Ordinalzahl: am ersten Januar (1.1.) | am zwanzigsten März",
examples:[
 {de:"Ich bin <hl>einundzwanzig</hl> Jahre alt.",vi:"Tôi hai mươi mốt tuổi.",note:"21 = einundzwanzig (đơn vị + und + chục)",good:true},
 {de:"Das kostet <hl>dreißig</hl> Euro.",vi:"Cái đó giá ba mươi euro.",note:"30 = dreißig (chú ý: -ßig, không phải dreizehnzig!)",good:true},
 {de:"Mein Geburtstag ist <hl>am fünften Mai</hl>.",vi:"Sinh nhật tôi là ngày 5 tháng 5.",note:"Datum: am + Ordinalzahl + Monat (am fünften = 5.)",good:true},
 {de:"Es ist <hl>halb drei</hl>. (= 2:30)",vi:"Bây giờ là 2 giờ 30.",note:"halb drei = nửa trước ba giờ = 2:30 (KHÔNG phải 3:30!)",good:true},
 {de:"Der Zug fährt <hl>um Viertel nach acht</hl>. (8:15)",vi:"Tàu chạy lúc 8 giờ 15.",note:"Viertel nach acht = 15 phút sau 8 giờ = 8:15",good:true},
 {de:"<span class='hl-red'>Es ist halb acht. (= 8:30?)</span>",vi:"Bây giờ là 8 giờ 30?",note:"❌ NHẦM: halb acht = 7:30 (nửa trước 8 giờ!), KHÔNG phải 8:30",good:false},
],
tips:["halb X = nửa tiếng TRƯỚC X: halb drei = 2:30 (nửa tiếng trước 3 giờ). Người Việt hay nhầm!","Ordinalzahlen: 1.-19.: thêm -te (erste*, zweite, dritte*, vierte...). 20+: thêm -ste (zwanzigste, dreißigste). Bất quy tắc: 1.=erst-, 3.=dritt-, 7.=siebt-, 8.=acht(e)"],
dangers:["sieben → siebzehn (17, không phải siebenzehn) | sieben → siebzig (70, không phải siebenzig)","dreißig (30) viết với -ß-, không phải dreissig hay dreizigsten"],
compare:[{a:"offizielle Uhrzeit (timetable)",b:"umgangssprachlich (hàng ngày)",c:"14:30 Uhr (chính thức) = halb drei (nachmittags) (thường ngày)"}]
},
fill:{s:"Mein Geburtstag ist ___ dritten März. Ich bin ___ Jahre alt. (26)",ans:"am|sechsundzwanzig",hint:"Datum: am + Ordinalzahl | 26=sechsundzwanzig"},
quiz:[
 {q:"Wie schreibt man 47 auf Deutsch?",opts:["vierzigsieben","siebenundvierzig","siebenvierzig","siebenundvierzig"],c:3,ex:"47 = sieben + und + vierzig = SIEBENUNDVIERZIG"},
 {q:"Es ist halb vier. Was bedeutet das?",opts:["4:30","3:30","4:15","3:45"],c:1,ex:"HALB VIER = eine halbe Stunde VOR vier = 3:30!"},
 {q:"Mein Geburtstag ist ___ fünfzehnten August.",opts:["an","am","auf dem","im"],c:1,ex:"Datum immer: AM + Ordinalzahl: AM fünfzehnten August"},
 {q:"Wie viel Uhr ist es? — Es ist Viertel vor neun. = ?",opts:["9:15","8:45","9:45","8:15"],c:1,ex:"Viertel VOR neun = 15 Minuten VOR 9 Uhr = 8:45"},
 {q:"Was kommt nach neunzehn? (19→20)",opts:["zwanzig","neunzig","neunzehnzig","zwanzigzehn"],c:0,ex:"20 = ZWANZIG"},
]},

// 15. WORTSTELLUNG V2
{id:"a1_wortstellung",lv:"A1",group:"Satzbau",title:"Wortstellung — V2-Regel",titleVi:"Trật tự từ — Động từ ở vị trí 2",sub:"Verb IMMER auf Position 2 im Hauptsatz",
theory:{
intro:"Quy tắc quan trọng nhất của cú pháp tiếng Đức: trong câu chính (Hauptsatz), <strong>động từ chia luôn ở vị trí 2</strong> — bất kể thành phần nào đứng đầu câu. Nếu không phải chủ ngữ đứng đầu, chủ ngữ phải đứng ngay sau động từ (đảo ngữ — Inversion).",
formula:"Bình thường: Subjekt(1) + Verb(2) + Rest\nĐảo ngữ: Adverb/Objekt(1) + Verb(2) + Subjekt + Rest\n⚠️ V2 = chia (konjugiertes Verb), KHÔNG phải Infinitiv/Partizip!\nKlammer: Verb(2) ... Infinitiv/Partizip/Vorsilbe(LETZTES)",
examples:[
 {de:"Ich <hl>esse</hl> jeden Tag Reis.",vi:"Tôi ăn cơm mỗi ngày.",note:"Chuẩn: S(1) + V(2) + Rest",good:true},
 {de:"Jeden Tag <hl>esse</hl> ich Reis.",vi:"Mỗi ngày tôi ăn cơm.",note:"Adverb đứng đầu → đảo ngữ: V(2) + S(3)",good:true},
 {de:"Heute <hl>kommt</hl> mein Freund nicht.",vi:"Hôm nay bạn tôi không đến.",note:"Heute đứng đầu → kommt(V2) + mein Freund(S3)",good:true},
 {de:"Morgen <hl>muss</hl> ich früh <hl>aufstehen</hl>.",vi:"Ngày mai tôi phải dậy sớm.",note:"Klammer: muss(V2) ... aufstehen(cuối)",good:true},
 {de:"Im Sommer <hl>fahren</hl> wir nach Italien.",vi:"Mùa hè chúng tôi đi Italy.",note:"Im Sommer(1) + fahren(2) + wir(3)...",good:true},
 {de:"<span class='hl-red'>Heute ich komme nicht.</span>",vi:"Hôm nay tôi không đến.",note:"❌ SAI: Heute(1) → V phải ở vị trí 2: 'Heute KOMME ich nicht'",good:false},
],
tips:["Đếm: vị trí 1 = thành phần đầu tiên (có thể là 1 từ hoặc cụm từ), vị trí 2 = Verb. Không phải 'từ thứ 2 trong câu' mà là 'thành phần thứ 2'","Câu hỏi Ja/Nein: Verb ở vị trí 1! 'Kommst du?' Câu hỏi W-: W-Wort(1) + Verb(2)"],
dangers:["FALSCH: 'Gestern ich habe gegessen' → RICHTIG: 'Gestern HABE ich gegessen' (habe = V2, gegessen = cuối)","Tiếng Anh có thể bỏ đảo ngữ, tiếng Đức KHÔNG: 'Yesterday I came' ≠ 'Gestern ich kam' ❌"],
compare:[{a:"Deutsch: V2 bắt buộc với đảo ngữ",b:"Tiếng Việt: linh hoạt hơn",c:"Heute komme ICH = Hôm nay TÔI đến (nhấn mạnh 'tôi') — tiếng Đức dùng vị trí, tiếng Việt dùng ngữ điệu"}]
},
fill:{s:"Heute ___ ich nicht arbeiten. Morgen ___ ich nach Hause ___. (müssen, fahren)",ans:"muss|fahre|nach Hause",hint:"V2-Regel: Heute→V2=muss | Morgen→V2=fahre, nach Hause=Rest"},
quiz:[
 {q:"___ du heute in die Schule? (gehen, Inversion mit 'Heute')",opts:["Heute gehst du","Heute du gehst","Gehst heute du","Heute geh du"],c:0,ex:"Heute(1) + gehst(2) + du(3) = HEUTE GEHST DU"},
 {q:"Gestern ___ er sehr müde ___. (sein, Perfekt: war...gewesen?)",opts:["ist er/gewesen","er war/—","war er/—","er ist/gewesen"],c:2,ex:"Präteritum: war = einfaches V2. Gestern(1) + WAR(2) + er(3)"},
 {q:"Im Winter ___ wir oft Ski. (fahren)",opts:["fahren wir","wir fahren","fährt wir","fahrt wir"],c:0,ex:"Im Winter(1) + FAHREN(2) + wir(3)... V2-Regel!"},
 {q:"Normalerweise ___ ich um 7 Uhr auf. (aufstehen)",opts:["stehe ich...auf","ich stehe...auf","aufstehe ich","stehe auf ich"],c:0,ex:"Normalerweise(1) + STEHE(2) + ich(3) + auf(Ende). Trennbares Verb!"},
 {q:"Heute Abend ___ wir ins Kino gehen.",opts:["wollen","wir wollen","willst","wollt"],c:0,ex:"Heute Abend(1) + WOLLEN(2) + wir(3) + ... + gehen(Ende)"},
]},

], // Ende A1

// ══════════════════════════════════════════════════════
// A2 — 20 CHỦ ĐỀ (9 nhóm Goethe A2)
// ══════════════════════════════════════════════════════
A2: [

// 1. PERFEKT
{id:"a2_perfekt",lv:"A2",group:"Tempora",title:"Perfekt",titleVi:"Thì quá khứ hoàn thành (văn nói)",sub:"haben/sein + Partizip II — thì quá khứ trong giao tiếp hàng ngày",
theory:{
intro:"Perfekt là thì quá khứ dùng trong <strong>giao tiếp hàng ngày</strong>. Người Đức nói 'Ich habe gegessen' (không phải 'Ich aß') trong hội thoại. Cấu trúc: Hilfsverb (haben/sein, vị trí 2) + Partizip II (cuối câu).",
formula:"Partizip II QUY TẮC: ge + Stamm + t: spielen→gespielt, kaufen→gekauft\nPartizip II BẤT QUY TẮC: ge + neuer Stamm + en: fahren→gefahren, essen→gegessen\nVorsilbe be-/er-/ver-/ent-: KEIN ge-: besuchen→besucht, vergessen→vergessen\nNhóm SEIN: Bewegungsverben(gehen,fahren,fliegen...) + Zustandsänderung(werden,wachsen) + sein,bleiben\nNhóm HABEN: tất cả còn lại",
examples:[
 {de:"Ich <hl>habe</hl> gestern Fußball ge<hl>spielt</hl>.",vi:"Hôm qua tôi đã chơi bóng đá.",note:"spielen→gespielt (quy tắc). haben vì không chuyển động",good:true},
 {de:"Er <hl>ist</hl> nach Berlin ge<hl>fahren</hl>.",vi:"Anh ấy đã lái xe đến Berlin.",note:"fahren→gefahren (BQT). sein vì Bewegungsverb",good:true},
 {de:"Wir <hl>haben</hl> das Museum be<hl>sucht</hl>.",vi:"Chúng tôi đã thăm bảo tàng.",note:"besuchen: be- → kein ge-: besucht (không phải gebesucht!)",good:true},
 {de:"Sie <hl>ist</hl> ge<hl>blieben</hl>.",vi:"Cô ấy đã ở lại.",note:"bleiben→geblieben. SEIN! (dù không chuyển động — ngoại lệ)",good:true},
 {de:"Das Kind <hl>hat</hl> ge<hl>schlafen</hl>.",vi:"Đứa trẻ đã ngủ.",note:"schlafen→geschlafen (BQT). haben (trạng thái, không chuyển động)",good:true},
 {de:"Ich <hl>habe</hl> meine Schlüssel ver<hl>gessen</hl>.",vi:"Tôi đã quên chìa khóa.",note:"vergessen: ver- → kein ge-: vergessen (Infinitiv = Partizip II!)",good:true},
 {de:"<span class='hl-red'>Ich habe gegangen.</span>",vi:"Tôi đã đi.",note:"❌ SAI: gehen = Bewegungsverb → BIN gegangen",good:false},
 {de:"<span class='hl-red'>Er ist gespielt.</span>",vi:"Anh ấy đã chơi.",note:"❌ SAI: spielen = không chuyển động → HAT gespielt",good:false},
],
tips:["Nhớ nhóm SEIN: chuyển động (gehen, kommen, fahren, fliegen, laufen, reisen, schwimmen) + thay đổi trạng thái (werden, wachsen, einschlafen) + sein, bleiben","sein/haben/Modal dùng Präteritum trong văn nói: 'Ich WAR', 'Ich HATTE', 'Ich KONNTE' — KHÔNG nói 'Ich bin gewesen' trong câu đơn"],
dangers:["FALSCH: 'Ich habe gegangen' → BIN gegangen","FALSCH: 'Er ist gespielt' → HAT gespielt (spielen không chuyển động)","FALSCH: 'Ich habe gebesucht' → HABE besucht (be- Vorsilbe → kein ge-)"],
compare:[{a:"Perfekt (văn nói, hội thoại)",b:"Präteritum (văn viết, kể chuyện)",c:"Ich BIN gegangen (nói) | Ich GING (viết tiểu thuyết). sein/haben/Modal: cả 2 đều dùng Prät. trong văn nói"}]
},
fill:{s:"Gestern ___ ich ins Kino ___. Meine Freundin ___ das Essen ___. (gehen, kochen)",ans:"bin|gegangen|hat|gekocht",hint:"gehen=Bewegungsverb→bin...gegangen | kochen=không c.đ.→hat...gekocht"},
quiz:[
 {q:"Er ___ nach Hause gegangen. (sein/haben?)",opts:["hat","ist","hatte","war"],c:1,ex:"gehen = Bewegungsverb → Perfekt mit SEIN: ist gegangen"},
 {q:"Wir ___ das Konzert ___ (besuchen). Partizip II?",opts:["haben/gebesucht","haben/besucht","sind/besucht","sind/gebesucht"],c:1,ex:"be- Vorsilbe → kein ge-! HABEN besucht"},
 {q:"Ich ___ heute sehr viel ___ (arbeiten). (reg. Verb)",opts:["habe/gearbeitet","bin/gearbeitet","habe/arbeitet","habe/arbeit"],c:0,ex:"arbeiten: quy tắc → ge+arbeit+et = gearbeitet. HABE (kein Bewegungsverb)"},
 {q:"Das Kind ___ eingeschlafen. (einschlafen)",opts:["hat","hast","ist","war"],c:2,ex:"einschlafen = Zustandsänderung (đi vào trạng thái ngủ) → SEIN"},
 {q:"Partizip II von 'vergessen'?",opts:["vergessen","gevirgessen","vergess","gevergessen"],c:0,ex:"ver- Vorsilbe → kein ge-! Partizip II = VERGESSEN (= Infinitiv)"},
]},

// 2. PRÄTERITUM (haben/sein/Modalverben)
{id:"a2_praeteritum",lv:"A2",group:"Tempora",title:"Präteritum (haben/sein/Modal)",titleVi:"Quá khứ đơn — dùng trong văn nói",sub:"war, hatte, konnte/musste/wollte...",
theory:{
intro:"Trong văn nói hàng ngày, tiếng Đức dùng Perfekt cho hầu hết động từ. Tuy nhiên, <strong>sein, haben và tất cả Modalverben dùng Präteritum</strong> — ngay cả trong hội thoại thông thường. Đây là ngoại lệ quan trọng cần thuộc.",
formula:"sein: war/warst/war/waren/wart/waren\nhaben: hatte/hattest/hatte/hatten/hattet/hatten\nkönnen: konnte/konntest/konnte/konnten/konntet/konnten\nmüssen: musste | dürfen: durfte | wollen: wollte | sollen: sollte | mögen: mochte",
examples:[
 {de:"Gestern <hl>war</hl> ich sehr müde.",vi:"Hôm qua tôi rất mệt.",note:"sein→war (dùng trong văn nói, không nói 'bin gewesen' đơn lẻ)",good:true},
 {de:"Als Kind <hl>hatte</hl> ich einen Hund.",vi:"Hồi nhỏ tôi có một con chó.",note:"haben→hatte (kể về quá khứ)",good:true},
 {de:"Ich <hl>konnte</hl> gestern nicht schlafen.",vi:"Hôm qua tôi không thể ngủ.",note:"können→konnte (văn nói hàng ngày, tự nhiên hơn 'habe können')",good:true},
 {de:"Er <hl>wollte</hl> nicht kommen.",vi:"Anh ấy không muốn đến.",note:"wollen→wollte. Modal Präteritum rất tự nhiên",good:true},
 {de:"Wir <hl>mussten</hl> lange warten.",vi:"Chúng tôi phải chờ lâu.",note:"müssen→mussten",good:true},
 {de:"Das <hl>durfte</hl> man damals nicht.",vi:"Ngày đó không được phép làm vậy.",note:"dürfen→durfte",good:true},
 {de:"<span class='hl-red'>Ich habe sein müde.</span>",vi:"Tôi đã mệt.",note:"❌ SAI: sein trong văn nói → Präteritum: 'Ich WAR müde'",good:false},
 {de:"<span class='hl-red'>Ich habe nicht schlafen gekonnt.</span>",vi:"Tôi đã không thể ngủ.",note:"❌ Đúng ngữ pháp nhưng không tự nhiên → 'Ich KONNTE nicht schlafen'",good:false},
],
tips:["Quy tắc thực tế: sein + haben + alle Modal → dùng Präteritum ngay cả khi nói chuyện hàng ngày","Starke Verben (động từ mạnh) chỉ dùng Präteritum khi VIẾT (báo, tiểu thuyết). Trong hội thoại → Perfekt"],
dangers:["FALSCH: 'Gestern ich war krank' → V2-Regel: 'Gestern WAR ich krank'"],
compare:[{a:"Modal Präteritum (tự nhiên trong văn nói)",b:"Modal Perfekt (nghe cứng nhắc)",c:"Ich KONNTE nicht kommen (tự nhiên) | Ich habe nicht kommen KÖNNEN (formal/văn viết)"}]
},
fill:{s:"Gestern ___ ich sehr krank. Ich ___ nicht in die Schule gehen. (sein, können)",ans:"war|konnte",hint:"sein→war | können→konnte (Präteritum trong văn nói)"},
quiz:[
 {q:"Als Kind ___ er sehr schüchtern. (sein, Präteritum)",opts:["ist","war","hat","hatte"],c:1,ex:"sein Präteritum: er → WAR"},
 {q:"Wir ___ gestern keine Zeit. (haben, Präteritum)",opts:["haben","hatten","habt","hattet"],c:1,ex:"haben Präteritum: wir → HATTEN"},
 {q:"Sie ___ nicht kommen. (dürfen, Präteritum)",opts:["darf","durfte","dürfte","durft"],c:1,ex:"dürfen Präteritum: DURFTE (Sg.)/DURFTEN (Pl.)"},
 {q:"Ich ___ das als Kind nicht essen. (wollen, Präteritum)",opts:["will","wollte","wolle","wöllt"],c:1,ex:"wollen Präteritum: ich → WOLLTE"},
 {q:"Es ___ sehr laut in der Stadt. (sein, Präteritum)",opts:["ist","ist gewesen","war","wäre"],c:2,ex:"sein Präteritum: es → WAR"},
]},

// 3. DATIV
{id:"a2_dativ",lv:"A2",group:"Kasus",title:"Dativ",titleVi:"Tặng cách (Dativ)",sub:"Wem? — cho ai / với ai",
theory:{
intro:"Dativ (Tặng cách) trả lời câu hỏi <strong>Wem?</strong> (cho ai/với ai). Dùng sau các động từ nhất định (helfen, geben, zeigen, schenken...), sau giới từ nhất định (mit, bei, nach, aus, von, zu, seit, gegenüber), và trong Wechselpräpositionen khi trả lời Wo?.",
formula:"Dativ Artikel:\n  Mask.: dem/einem | Fem.: der/einer | Neut.: dem/einem | Pl.: den/—\nDativ Personal-Pronomen: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen\nDativ-Plural: Nomen bekommt -(e)n! (den Kindern, den Männern)\nWichtige Dativ-Verben: helfen, geben, zeigen, schreiben, schenken, gehören, danken, antworten, gefallen, passen, fehlen",
examples:[
 {de:"Ich helfe <hl>meinem Vater</hl>.",vi:"Tôi giúp bố tôi.",note:"helfen + Dativ: Vater=maskulin→meinem Vater",good:true},
 {de:"Er gibt <hl>der Frau</hl> das Buch.",vi:"Anh ấy đưa cuốn sách cho người phụ nữ.",note:"geben + Dativ: Frau=feminin→der Frau (Dat.fem.=der!)",good:true},
 {de:"Das gehört <hl>mir</hl>.",vi:"Cái đó là của tôi.",note:"gehören + Dativ: ich→mir",good:true},
 {de:"Wie geht es <hl>dir</hl>?",vi:"Bạn có khỏe không?",note:"es geht + Dativ (cố định: es geht MIR gut)",good:true},
 {de:"Das Kleid passt <hl>ihr</hl> sehr gut.",vi:"Chiếc váy rất phù hợp với cô ấy.",note:"passen + Dativ: sie→ihr",good:true},
 {de:"Ich wohne <hl>bei meinen</hl> Eltern.",vi:"Tôi sống với bố mẹ.",note:"bei + Dativ immer: meine Eltern→bei meinen Eltern (Pl.Dat.)",good:true},
 {de:"<span class='hl-red'>Ich helfe den Mann.</span>",vi:"Tôi giúp người đàn ông.",note:"❌ SAI: helfen + Dativ → DEM Mann (không phải den)",good:false},
 {de:"<span class='hl-red'>Das Buch gehört die Frau.</span>",vi:"Cuốn sách thuộc về người phụ nữ.",note:"❌ SAI: gehören + Dativ → DER Frau",good:false},
],
tips:["Dat.fem. = DER (giống Nom.mask.!): die Frau→der Frau. Hay nhầm nhất!","Dativ-Plural: LUÔN thêm -(e)n vào danh từ: die Kinder→den Kindern, die Männer→den Männern, die Autos→den Autos"],
dangers:["FALSCH: 'Ich helfe ihn' → RICHTIG: 'Ich helfe IHM' (helfen+Dativ: er→ihm)","hay nhầm: 'der Frau' (Dat.fem.) với 'der Mann' (Nom.mask.) — hai trường hợp khác nhau!"],
compare:[{a:"Akkusativ (WEN? — bị tác động trực tiếp)",b:"Dativ (WEM? — hưởng lợi/bị ảnh hưởng gián tiếp)",c:"Ich schlage DEN Mann (Akk.) | Ich helfe DEM Mann (Dat.)"}]
},
fill:{s:"Kannst du ___ helfen? (ich→Dativpronomen) Ich zeige ___ Kind den Weg. (das Kind, Dativ)",ans:"mir|dem",hint:"ich→mir (Dativ) | das Kind→dem Kind (Dat.neut.)"},
quiz:[
 {q:"Ich gebe ___ Buch zurück. (die Bibliothek, Dativ)",opts:["die","der","dem","den"],c:1,ex:"Bibliothek=feminin → Dativ feminin = DER"},
 {q:"Er dankt ___ Lehrerin. (die Lehrerin, Dativ)",opts:["die","der","dem","den"],c:1,ex:"Lehrerin=feminin → Dativ feminin = DER"},
 {q:"Das gehört ___. (du→Dativpronomen)",opts:["dich","du","dein","dir"],c:3,ex:"du → Dativ = DIR"},
 {q:"Wie geht es ___? (er→Dativ)",opts:["ihn","er","ihm","sein"],c:2,ex:"er → Dativ = IHM"},
 {q:"Sie hilft ___ Kindern. (die Kinder, Dativ Plural)",opts:["die","den","der","des"],c:1,ex:"Plural Dativ → DEN. PLUS Nomen +n: den KindERN"},
]},

// 4. AKKUSATIV vs DATIV
{id:"a2_akk_dat",lv:"A2",group:"Kasus",title:"Akkusativ vs. Dativ",titleVi:"Phân biệt Đối cách và Tặng cách",sub:"Wechselpräpositionen + Verben mit 2 Objekten",
theory:{
intro:"Nhiều câu có cả Akkusativ lẫn Dativ. Với Wechselpräpositionen: <strong>Wo? → Dativ, Wohin? → Akkusativ</strong>. Với động từ 2 tân ngữ (geben, zeigen, schreiben...): Dativ (wem?) + Akkusativ (was?).",
formula:"Verben mit 2 Objekten: geben/zeigen/schicken/schenken/erklären...\n→ [S] + Verb + Dativ(Wem?) + Akkusativ(Was?)\nWechselpräp.: in/an/auf/über/unter/neben/vor/hinter/zwischen\n→ Wo? (liegen/stehen/hängen...) + Dativ\n→ Wohin? (legen/stellen/hängen...) + Akkusativ\nMerksatz: liegen/stehen/sitzen/hängen(Wo→Dat.) | legen/stellen/setzen/hängen(Wohin→Akk.)",
examples:[
 {de:"Er gibt <hl>dem Kind</hl> <hl>ein Buch</hl>.",vi:"Anh ấy đưa cho đứa trẻ một cuốn sách.",note:"dem Kind (Dat.=wem?) | ein Buch (Akk.=was?)",good:true},
 {de:"Ich zeige <hl>meiner Schwester</hl> <hl>die Stadt</hl>.",vi:"Tôi chỉ cho chị/em gái tôi thành phố.",note:"meiner Schwester (Dat.fem.) | die Stadt (Akk.fem.)",good:true},
 {de:"Das Buch liegt <hl>auf dem Tisch</hl>.",vi:"Cuốn sách nằm trên bàn.",note:"liegen = Zustand (Wo?) → auf + Dativ",good:true},
 {de:"Ich lege das Buch <hl>auf den Tisch</hl>.",vi:"Tôi đặt sách lên bàn.",note:"legen = Aktion (Wohin?) → auf + Akkusativ",good:true},
 {de:"Kann ich <hl>dir</hl> <hl>etwas</hl> erklären?",vi:"Tôi có thể giải thích gì đó cho bạn không?",note:"dir (Dat.=wem?) | etwas (Akk.=was?)",good:true},
 {de:"<span class='hl-red'>Ich stelle die Vase auf dem Tisch.</span>",vi:"Tôi đặt bình hoa lên bàn.",note:"❌ SAI: stellen = Wohin? → Akkusativ: auf DEN Tisch",good:false},
],
tips:["Mnemotechnik: 'LASS' = Legen/stellen/Setzen/hängen → Akkusativ (Wohin). 'SSL' = Stehen/Sitzen/Liegen → Dativ (Wo)","Thứ tự Dativ+Akkusativ: Dat.Pronomen trước Akk.: 'Ich gebe ES DIR' (Akk.Pron. trước Dat.Nomen: 'Ich gebe es meiner Freundin')"],
dangers:["FALSCH: 'Das Bild hängt an der Wand' (Dat.) ✓ vs 'Ich hänge das Bild an der Wand' ❌ → an DIE Wand (Akk.!)"],
compare:[{a:"liegt/steht/sitzt/hängt → Wo? → Dativ",b:"legt/stellt/setzt/hängt → Wohin? → Akkusativ",c:"Die Katze SITZT auf dem SOFA (Dat.) | Ich SETZE die Katze auf das SOFA (Akk.)"}]
},
fill:{s:"Ich ___ das Buch ___ ___ Regal. Es ___ jetzt ___ ___ Regal. (stellen/das Regal, liegen/das Regal)",ans:"stelle|auf das|liegt|auf dem",hint:"stellen=Wohin→Akk: auf das | liegen=Wo→Dat: auf dem"},
quiz:[
 {q:"Ich schreibe ___ eine E-Mail. (mein Freund, Dativ)",opts:["meinen Freund","meinem Freund","meiner Freund","meines Freund"],c:1,ex:"Freund=maskulin Dativ → MEINEM Freund"},
 {q:"Das Bild hängt ___ ___ Wand. (an, die Wand, Wo?)",opts:["an die","an der","an dem","ans"],c:1,ex:"hängt = Zustand (Wo?) → Dativ. die Wand → AN DER Wand"},
 {q:"Er hängt das Bild ___ ___ Wand. (an, die Wand, Wohin?)",opts:["an der","an dem","an die","ans"],c:2,ex:"hängt (Aktion, Wohin?) → Akkusativ. die Wand → AN DIE Wand"},
 {q:"Kannst du ___ das erklären? (ich, Dativpronomen)",opts:["mich","ich","mir","mein"],c:2,ex:"ich → Dativ = MIR"},
 {q:"Sie gibt ___ Hund ___ Knochen. (der Hund Dat., ein Knochen Akk.)",opts:["den Hund/einen","dem Hund/einen","den Hund/einem","dem Hund/einem"],c:1,ex:"Hund=mask.Dat.→DEM | Knochen=mask.Akk.→EINEN"},
]},

// 5. REFLEXIVVERBEN
{id:"a2_reflexiv",lv:"A2",group:"Verben & Konjugation",title:"Reflexivverben",titleVi:"Động từ phản thân",sub:"sich waschen, sich freuen, sich interessieren...",
theory:{
intro:"Reflexivverben dùng kèm đại từ phản thân (Reflexivpronomen). Có 2 loại: (1) Luôn phản thân: sich freuen, sich ärgern, sich befinden... (2) Có thể phản thân: waschen — 'ich wasche das Auto' (tắm xe) vs 'ich wasche mich' (tự tắm). Reflexivpronomen hầu hết giống Akkusativpronomen, chỉ khác ở ngôi 3.",
formula:"Akkusativ: mich, dich, sich, uns, euch, sich, sich\nDativ: mir, dir, sich, uns, euch, sich, sich\n(Dativ khi đã có Akk.Objekt: 'Ich wasche MIR die Hände')\nWichtige Reflexivverben: sich freuen (auf/über), sich ärgern (über), sich interessieren (für), sich befinden, sich befassen, sich beeilen, sich erinnern (an), sich entscheiden, sich vorstellen",
examples:[
 {de:"Ich freue <hl>mich</hl> auf den Urlaub.",vi:"Tôi rất vui mong đến kỳ nghỉ.",note:"sich freuen auf (mong đợi điều trong tương lai) → Akk.Reflexiv",good:true},
 {de:"Er ärgert <hl>sich</hl> über den Stau.",vi:"Anh ấy tức giận vì tắc đường.",note:"sich ärgern über → sich (er=ngôi 3 → sich)",good:true},
 {de:"Interessiert ihr <hl>euch</hl> für Musik?",vi:"Các bạn có quan tâm đến âm nhạc không?",note:"sich interessieren für → ihr → euch",good:true},
 {de:"Ich wasche <hl>mir</hl> die Hände.",vi:"Tôi rửa tay.",note:"Dativ-Reflexiv: đã có Akk.(die Hände) → Dat.: mir",good:true},
 {de:"Wir müssen <hl>uns</hl> beeilen!",vi:"Chúng ta phải nhanh lên!",note:"sich beeilen → wir → uns",good:true},
 {de:"<span class='hl-red'>Er freut ihn auf die Party.</span>",vi:"Anh ấy vui mong đến bữa tiệc.",note:"❌ SAI: ngôi 3 → SICH: 'Er freut SICH auf die Party'",good:false},
],
tips:["sich interessieren FÜR + Akkusativ: 'für Musik', 'für Sport'","sich freuen AUF (tương lai) vs sich freuen ÜBER (hiện tại/quá khứ): 'auf die Party' (mong đợi) vs 'über das Geschenk' (vui về quà nhận được)"],
dangers:["FALSCH: 'Ich freue mich über das Konzert nächste Woche' → nên dùng 'auf': noch nicht passiert → AUF!"],
compare:[{a:"sich freuen AUF (zukünftig — mong đợi)",b:"sich freuen ÜBER (vergangen/aktuell — vui về)",c:"Ich freue mich AUF das Konzert (tuần sau) | Ich freue mich ÜBER das Konzert (vừa xem xong)"}]
},
fill:{s:"Ich ___ sehr ___ das Wochenende. Er ___ ___ über den Lärm. (sich freuen auf, sich ärgern)",ans:"freue mich|auf|ärgert sich",hint:"freuen auf → freue mich auf | ärgern über → ärgert sich"},
quiz:[
 {q:"Sie ___ sehr ___ das Ergebnis. (sich freuen über)",opts:["freut sich/über","freut/sich über","sich freut/über","freutet sich/über"],c:0,ex:"sie(sg.) → sich. Reihenfolge: FREUT SICH über"},
 {q:"___ ihr ___ für Geschichte? (sich interessieren für)",opts:["Interessiert euch","Interessiert ihr euch","Interessiert sich ihr","Euch interessiert"],c:1,ex:"ihr → euch. Frage: Interessiert IHR EUCH für?"},
 {q:"Ich wasche ___ die Haare. (Dativ-Reflexiv)",opts:["mich","mir","sich","uns"],c:1,ex:"Dativ-Reflexiv (已有Akk. die Haare) → ich → MIR"},
 {q:"Wir müssen ___! (sich beeilen)",opts:["uns beeilen","sich beeilen","euch beeilen","mich beeilen"],c:0,ex:"wir → uns. Infinitiv: sich beeilen → wir: uns beeilen"},
 {q:"Kannst du ___ an den Namen erinnern? (sich erinnern an)",opts:["dich","sich","mir","dir"],c:0,ex:"du → Reflexiv Akk. = DICH"},
]},

// 6. MODALVERBEN VOLLSTÄNDIG
{id:"a2_modal_voll",lv:"A2",group:"Verben & Konjugation",title:"Modalverben — alle 6",titleVi:"6 Động từ tình thái đầy đủ",sub:"können, müssen, dürfen, wollen, sollen, mögen/möchten",
theory:{
intro:"6 Modalverben với nghĩa đầy đủ và các lỗi quan trọng cần tránh. Đặc biệt: <strong>müssen nicht ≠ darf nicht</strong> — đây là lỗi nghiêm trọng nhất trong thực tế giao tiếp.",
formula:"können: kann/kannst/kann/können/könnt/können (khả năng)\nmüssen: muss/musst/muss/müssen/müsst/müssen (bắt buộc)\ndürfen: darf/darfst/darf/dürfen/dürft/dürfen (được phép)\nwollen: will/willst/will/wollen/wollt/wollen (muốn — cá nhân)\nsollen: soll/sollst/soll/sollen/sollt/sollen (được yêu cầu/nên)\nmögen: mag/magst/mag/mögen/mögt/mögen (thích)\nmöchten: möchte/möchtest/möchte/möchten/möchtet/möchten (muốn — lịch sự)",
examples:[
 {de:"Ich <hl>kann</hl> gut kochen.",vi:"Tôi có thể nấu ăn tốt.",note:"können = khả năng thực sự có",good:true},
 {de:"Du <hl>musst</hl> das nicht machen.",vi:"Bạn không cần làm điều đó.",note:"müssen NICHT = nicht nötig (không cần — tùy bạn!)",good:true},
 {de:"Hier <hl>darf</hl> man nicht rauchen.",vi:"Ở đây không được phép hút thuốc.",note:"dürfen NICHT = verboten (bị cấm hoàn toàn)",good:true},
 {de:"Er <hl>will</hl> Arzt werden.",vi:"Anh ấy muốn trở thành bác sĩ.",note:"wollen = mong muốn cá nhân, mạnh mẽ",good:true},
 {de:"Du <hl>sollst</hl> mehr schlafen.",vi:"Bạn nên ngủ nhiều hơn.",note:"sollen = người khác yêu cầu/khuyên bạn",good:true},
 {de:"Ich <hl>möchte</hl> einen Kaffee, bitte.",vi:"Tôi muốn một tách cà phê, làm ơn.",note:"möchten = muốn lịch sự (dùng trong nhà hàng, cửa hàng)",good:true},
 {de:"<span class='hl-red'>Du musst nicht rauchen hier.</span>",vi:"Bạn bị cấm hút thuốc ở đây.",note:"❌ NHẦM NGHĨA: musst nicht = không cần. Cấm → DARFST nicht!",good:false},
 {de:"<span class='hl-red'>Ich will einen Kaffee.</span>",vi:"Tôi muốn một tách cà phê.",note:"⚠️ Đúng ngữ pháp nhưng thô. Trong nhà hàng → MÖCHTEN",good:false},
],
tips:["möchten là Konjunktiv II của mögen — luôn lịch sự, dùng khi đặt hàng, đề nghị","sollen = ai đó yêu cầu bạn: 'Der Arzt sagt, ich SOLL mehr schlafen' (bác sĩ bảo tôi)"],
dangers:["müssen NICHT ≠ darf NICHT: 'Du musst nicht kommen' = không cần đến (có thể không đến) | 'Du darfst nicht kommen' = bị cấm đến (không được phép)"],
compare:[{a:"wollen (mong muốn cá nhân)",b:"möchten (muốn lịch sự)",c:"Ich WILL das Buch (nghe có vẻ cầu thị) | Ich MÖCHTE das Buch (lịch sự)"}]
},
fill:{s:"Du ___ hier nicht parken — es ist verboten! Aber du ___ nicht kommen, wenn du nicht willst.",ans:"darfst|musst",hint:"verboten=dürfen nicht | nicht nötig=müssen nicht"},
quiz:[
 {q:"Du ___ nicht so laut sein — das ist verboten! (bị cấm)",opts:["musst","kannst","darfst","sollst"],c:2,ex:"Verbot = DARFST NICHT"},
 {q:"Sie ___ das Formular ausfüllen. (yêu cầu từ người khác)",opts:["will","möchte","soll","darf"],c:2,ex:"Auftrag von außen = SOLLEN: sie SOLL das Formular ausfüllen"},
 {q:"Ich ___ keinen Fisch. (không thích — mögen)",opts:["will","möchte","mag","darf"],c:2,ex:"mögen (thích) → ich MAG keinen Fisch"},
 {q:"___ ich hier sitzen? (hỏi xin phép)",opts:["Muss","Kann","Darf","Will"],c:2,ex:"Erlaubnis fragen = DÜRFEN: DARF ich hier sitzen?"},
 {q:"Er ___ unbedingt Pilot werden. (mong muốn mạnh mẽ)",opts:["soll","möchte","darf","will"],c:3,ex:"Eigener starker Wunsch = WOLLEN: er WILL Pilot werden"},
]},

// 7. KOMPARATIV & SUPERLATIV
{id:"a2_komparativ",lv:"A2",group:"Adjektive & Adverbien",title:"Komparativ & Superlativ",titleVi:"So sánh hơn & So sánh nhất",sub:"größer als, am größten, am liebsten...",
theory:{
intro:"So sánh trong tiếng Đức: Komparativ (so sánh hơn) dùng <strong>-er</strong>; Superlativ dùng <strong>am ...sten</strong> (trạng từ) hoặc <strong>-ste</strong> (tính từ trước danh từ). Nhiều tính từ một âm tiết thêm Umlaut.",
formula:"Komparativ: Adj. + er (+ Umlaut với a→ä, o→ö, u→ü)\n  groß→größer, alt→älter, jung→jünger, warm→wärmer\nSuperlativ: am + Adj. + (e)sten (trạng từ)\n  groß→am größten, alt→am ältesten, jung→am jüngsten\nSo sánh bằng: so...wie: 'Er ist so groß wie ich'\nSo sánh hơn: ...er als: 'Er ist größer als ich'\nBẤT QUY TẮC: gut→besser→am besten | viel→mehr→am meisten | gern→lieber→am liebsten | hoch→höher→am höchsten",
examples:[
 {de:"Berlin ist <hl>größer als</hl> München.",vi:"Berlin lớn hơn Munich.",note:"Komparativ + als: größer als",good:true},
 {de:"Das ist <hl>das beste</hl> Restaurant in der Stadt.",vi:"Đây là nhà hàng tốt nhất trong thành phố.",note:"Superlativ vor Nomen: gut→best-+e (das beste)",good:true},
 {de:"Ich laufe <hl>schneller als</hl> du.",vi:"Tôi chạy nhanh hơn bạn.",note:"Komparativ Adverb: schnell→schneller",good:true},
 {de:"Er trinkt <hl>am liebsten</hl> Kaffee.",vi:"Anh ấy thích uống cà phê nhất.",note:"gern→lieber→am liebsten (BQT!)",good:true},
 {de:"Sie ist <hl>genau so alt wie</hl> ich.",vi:"Cô ấy cùng tuổi với tôi.",note:"so...wie = bằng nhau",good:true},
 {de:"<span class='hl-red'>Er ist mehr groß als ich.</span>",vi:"Anh ấy cao hơn tôi.",note:"❌ SAI: không dùng 'mehr' với tính từ → 'Er ist GRÖSSER als ich'",good:false},
],
tips:["Hay dùng: lieber (prefer), am liebsten (prefer most): 'Ich esse LIEBER Fisch als Fleisch' | 'Am LIEBSTEN esse ich Sushi'","Tính từ trước danh từ ở Superlativ: bester/beste/bestes + Adjektivendung theo Kasus"],
dangers:["FALSCH: 'mehr schön' → RICHTIG: schöner | 'mehr gut' → besser","Umlaut hay bị quên: alt→älter (không phải alter!), jung→jünger, kalt→kälter"],
compare:[{a:"Komparativ (hơn) + als",b:"Superlativ (nhất) + am...sten",c:"größer ALS | AM größten — 'als' chỉ dùng với Komparativ!"}]
},
fill:{s:"Deutsch ist schwer, aber Chinesisch ist ___ ___. (schwer, Komparativ + als) Er spricht am ___ Englisch. (gut, Superlativ)",ans:"schwerer als|besten",hint:"schwer→schwerer | gut→am besten (BQT)"},
quiz:[
 {q:"Komparativ von 'gut'?",opts:["guter","mehr gut","besser","am besten"],c:2,ex:"gut → BESSER (bất quy tắc! Không phải 'guter')"},
 {q:"München ist ___ Wien. (groß, nhỏ hơn? — Wien ist größer)",opts:["kleiner als","klein wie","kleiner wie","als kleiner"],c:0,ex:"Komparativ + ALS: kleiner ALS Wien"},
 {q:"Sie trinkt ___ Tee. (gern, Superlativ)",opts:["am gernen","am gernsten","am liebsten","am lieblichsten"],c:2,ex:"gern → lieber → AM LIEBSTEN (bất quy tắc!)"},
 {q:"Das ist das ___ Buch, das ich je gelesen habe. (gut)",opts:["bessere","beste","gut","besten"],c:1,ex:"Superlativ vor def.Artikel: das BESTE Buch"},
 {q:"Er ist ___ ___ sein Bruder. (jung, so...wie?)",opts:["jünger als","so jung wie","am jüngsten wie","jünger wie"],c:1,ex:"Gleich = SO...WIE: 'Er ist SO JUNG WIE sein Bruder'"},
]},

// 8. ADJEKTIVDEKLINATION
{id:"a2_adjdekl",lv:"A2",group:"Adjektive & Adverbien",title:"Adjektivdeklination",titleVi:"Chia đuôi tính từ",sub:"Endungen nach definitem/indefinitem Artikel",
theory:{
intro:"Tính từ đứng trước danh từ phải thêm đuôi theo Genus, Kasus và loại mạo từ. Có 3 bảng: sau mạo từ xác định (der/die/das — 'schwache Deklination'), sau mạo từ không xác định (ein/eine — 'gemischte Deklination'), không có mạo từ ('starke Deklination').",
formula:"Sau definitem Artikel (der/die/das): -e hoặc -en\n  Nom.: -e (alle) | Akk.m.: -en | alle Dat./Gen.: -en\nSau indefinitem Artikel (ein/eine/ein):\n  Nom.m: -er | Nom.n: -es | Nom.f: -e\n  Akk.m: -en | Rest wie definit\nEinfache Regel: Wenn Artikel schon Genus zeigt → -e oder -en\n  Wenn Artikel KEIN Genus zeigt (ein/—) → Adjektiv muss Genus zeigen (-er/-e/-es)",
examples:[
 {de:"Der <hl>alte</hl> Mann liest.",vi:"Người đàn ông lớn tuổi đọc sách.",note:"def.Art. Nom.m → -e: der alte Mann",good:true},
 {de:"Ich sehe den <hl>alten</hl> Mann.",vi:"Tôi thấy người đàn ông lớn tuổi.",note:"def.Art. Akk.m → -en: den alten Mann",good:true},
 {de:"Das ist ein <hl>gutes</hl> Buch.",vi:"Đây là một cuốn sách hay.",note:"indef.Art. Nom.n → -es (ein zeigt kein Genus→Adj.muss!)",good:true},
 {de:"Sie hat eine <hl>schöne</hl> Stimme.",vi:"Cô ấy có giọng nói đẹp.",note:"indef.Art. Nom./Akk.f → -e",good:true},
 {de:"Ich trinke <hl>kalten</hl> Kaffee.",vi:"Tôi uống cà phê lạnh.",note:"ohne Artikel Akk.m → -en (stark: Adjektiv übernimmt Artikel-Info)",good:true},
 {de:"<span class='hl-red'>Das ist ein gute Idee.</span>",vi:"Đây là một ý tưởng hay.",note:"❌ SAI: Idee=feminin Nom., indef. → EINE gute Idee (eine+e)",good:false},
],
tips:["Einfachste Regel: wenn Artikel stark endet (den/dem/der/des) → Adjektiv endet -en. Wenn Artikel schwach (ein/kein ohne Endung) → Adjektiv gibt Info: -er/-e/-es","Lerntipp: lernt erst definit (der alte Mann, die alte Frau, das alte Haus) auswendig — am häufigsten!"],
dangers:["FALSCH: 'ein guter Wein trinken' (Akk.) → 'einen guten Wein trinken' (ein→einen, guter→guten im Akk.m.)"],
compare:[{a:"nach der/die/das (stark→Adj. -en)",b:"nach ein/eine (Adj. zeigt Genus: -er/-e/-es)",c:"DER alte Mann | EIN altER Mann (Nom.m.)"}]
},
fill:{s:"Das ist ein ___ Restaurant. (gut, neutrum Nom.) Ich esse gerne ___ Essen. (deutsch, neutrum Akk., kein Artikel)",ans:"gutes|deutsches",hint:"ein+neut.Nom.→-es | kein Art.+neut.Akk.→-es (stark)"},
quiz:[
 {q:"Das ist eine ___ Idee. (gut, feminin Nom., indef.)",opts:["guter","gute","gutes","guten"],c:1,ex:"eine(fem.Nom.) + gut → GUTE (eine schon zeigt fem. → -e)"},
 {q:"Ich kaufe den ___ Wein. (rot, maskulin Akk., def.)",opts:["roter","rote","rotes","roten"],c:3,ex:"den(def.Akk.m.) → Adjektiv immer -EN: den rotEN Wein"},
 {q:"___ Kaffee schmeckt gut. (schwarz, maskulin Nom., kein Art.)",opts:["schwarzer","schwarze","schwarzes","schwarzen"],c:0,ex:"Kein Artikel Nom.m → stark: Adjektiv zeigt Genus: schwarz-ER"},
 {q:"Sie hat ein ___ Kind. (süß, neutrum Akk., indef.)",opts:["süßes","süße","süßer","süßen"],c:3,ex:"ein(indef.Akk.n.) → -EN: ein süßEN Kind"},
 {q:"Das ___ Wetter macht uns glücklich. (schön, neutrum Nom., def.)",opts:["schöner","schöne","schönes","schönen"],c:1,ex:"das(def.Nom.n.) → -E: das schönE Wetter"},
]},

// 9. KONJUNKTIONEN
{id:"a2_konjunktionen",lv:"A2",group:"Satzbau",title:"Konjunktionen",titleVi:"Liên từ nối câu",sub:"und, aber, oder, denn, weil, dass, wenn",
theory:{
intro:"Konjunktionen nối câu hoặc mệnh đề. Quan trọng: <strong>koordinierende</strong> (und/aber/oder/denn) không thay đổi trật tự từ; <strong>subordinierende</strong> (weil/dass/wenn/obwohl...) đẩy Verb xuống cuối mệnh đề phụ.",
formula:"Koordinierend (không đổi V2): und, aber, oder, denn, sondern\n  [S+V...], und/aber/oder [S+V...]\nSubordinierend (Verb cuối NS): weil, dass, wenn, obwohl, während, bis, seit, bevor, nachdem, damit, ob\n  [HS], weil/dass/wenn + [S + ... + V(CUỐI)]",
examples:[
 {de:"Ich lerne Deutsch, <hl>weil</hl> ich in Deutschland <hl>studieren will</hl>.",vi:"Tôi học tiếng Đức vì tôi muốn học ở Đức.",note:"weil → Nebensatz: V cuối (will→studieren will→will cuối)",good:true},
 {de:"Ich weiß, <hl>dass</hl> du Recht <hl>hast</hl>.",vi:"Tôi biết rằng bạn đúng.",note:"dass → NS, V cuối: hast",good:true},
 {de:"Ich esse Fisch, <hl>aber</hl> ich mag kein Fleisch.",vi:"Tôi ăn cá nhưng tôi không thích thịt.",note:"aber = koordinierend → giữ nguyên SVO",good:true},
 {de:"Ich komme nicht, <hl>denn</hl> ich bin krank.",vi:"Tôi không đến vì tôi ốm.",note:"denn = koordinierend, giữ V2: 'denn ich BIN krank'",good:true},
 {de:"<hl>Wenn</hl> du Zeit <hl>hast</hl>, komm bitte vorbei.",vi:"Nếu bạn có thời gian, hãy ghé qua.",note:"wenn → NS đứng đầu → Hauptsatz bắt đầu bằng V!",good:true},
 {de:"<span class='hl-red'>Ich lerne Deutsch, weil ich will studieren.</span>",vi:"Tôi học tiếng Đức vì tôi muốn học.",note:"❌ SAI: weil → V cuối: 'weil ich studieren WILL'",good:false},
],
tips:["weil vs denn: nghĩa giống nhau nhưng cú pháp khác! weil → Nebensatz (V cuối) | denn → Hauptsatz (V2 giữ nguyên)","Khi NS đứng ĐẦU câu (Wenn du kommst,...): Hauptsatz BẮT ĐẦU bằng Verb → đảo ngữ!"],
dangers:["FALSCH: 'weil ich habe keine Zeit' → 'weil ich keine Zeit HABE' (habe cuối)","FALSCH: 'denn ich keine Zeit habe' → denn giữ V2: 'denn ich HABE keine Zeit'"],
compare:[{a:"denn (Koord. — V2 bình thường)",b:"weil (Subord. — V cuối)",c:"Ich komme nicht, DENN ich BIN krank | Ich komme nicht, WEIL ich krank BIN"}]
},
fill:{s:"Ich lerne Deutsch, ___ ich in Wien ___ ___ möchte. (weil, arbeiten)",ans:"weil|arbeiten|arbeiten möchte",hint:"weil → V cuối: 'weil ich in Wien arbeiten möchte' (möchte=Modal, cuối nhất)"},
quiz:[
 {q:"Ich esse nicht, ___ ich keinen Hunger habe. (vì — Nebensatz)",opts:["denn","weil","aber","und"],c:1,ex:"Nebensatz mit V-Ende → WEIL"},
 {q:"___ es regnet, nehme ich einen Schirm. (NS đầu câu)",opts:["Wenn","Weil","Dass","Ob"],c:0,ex:"Bedingung (nếu) → WENN. NS đầu → HS bắt đầu V: 'nehme ich'"},
 {q:"Ich weiß, ___ er morgen kommt.",opts:["weil","denn","dass","ob"],c:2,ex:"Wissen + Inhaltssatz → DASS: 'ich weiß, dass er kommt'"},
 {q:"Sie mag Kaffee, ___ sie trinkt lieber Tee. (tương phản)",opts:["und","denn","aber","weil"],c:2,ex:"Gegensatz → ABER (koordinierend, V2 bleibt)"},
 {q:"Er lernt viel, ___ er ist krank. (dù vậy — obwohl?)",opts:["weil","obwohl","denn","wenn"],c:1,ex:"Konzessiv (mặc dù) → OBWOHL: 'obwohl er krank IST' (V cuối)"},
]},

// 10. TEMPORALANGABEN
{id:"a2_temporal",lv:"A2",group:"Sonstige",title:"Temporalangaben",titleVi:"Trạng từ và giới từ chỉ thời gian",sub:"seit, für, vor, nach, während, bis, ab",
theory:{
intro:"Giới từ thời gian rất quan trọng trong giao tiếp hàng ngày. Cần phân biệt <strong>seit</strong> (kéo dài đến hiện tại — Präsens!) và <strong>vor</strong> (trước đây bao lâu — Präteritum/Perfekt). Cũng cần biết: <strong>in</strong> (sau bao lâu) và <strong>an/im/um</strong> cho các loại thời gian.",
formula:"seit + Dativ (kéo dài từ quá khứ đến nay) → PRÄSENS!\n  seit einem Jahr, seit 2020, seit letztem Montag\nvor + Dativ (bao lâu trước) → Vergangenheit\n  vor drei Jahren, vor einer Woche\nin + Dativ (sau bao lâu) → Zukunft\n  in drei Tagen, in einer Stunde\nan + Dat.: am Montag, am 1. Januar\nim + Dat.: im Januar, im Sommer, im Jahr 2024\num + Akk.: um 8 Uhr, um Mitternacht\nfür + Akk. (dự kiến trong bao lâu): für zwei Wochen\nbis + Akk. (đến lúc nào): bis Freitag, bis nächste Woche",
examples:[
 {de:"Ich lerne <hl>seit</hl> zwei Jahren Deutsch.",vi:"Tôi đã học tiếng Đức được 2 năm (và vẫn đang học).",note:"seit → PRÄSENS! Hành động BẮT ĐẦU 2 năm trước, VẪN ĐANG TIẾP TỤC",good:true},
 {de:"Er ist <hl>vor</hl> drei Jahren nach Deutschland gekommen.",vi:"Anh ấy đến Đức 3 năm trước.",note:"vor → Vergangenheit (Perfekt/Prät.)",good:true},
 {de:"Das Paket kommt <hl>in</hl> zwei Tagen.",vi:"Gói hàng sẽ đến trong 2 ngày nữa.",note:"in → Zukunft (in 2 Tagen = 2 ngày sau từ bây giờ)",good:true},
 {de:"Wir treffen uns <hl>am</hl> Dienstag <hl>um</hl> 15 Uhr.",vi:"Chúng ta gặp nhau vào thứ Ba lúc 15 giờ.",note:"am + Wochentag | um + Uhrzeit",good:true},
 {de:"Ich fahre <hl>für</hl> eine Woche nach Paris.",vi:"Tôi đi Paris trong một tuần.",note:"für + Akk. (dự kiến khoảng thời gian tương lai)",good:true},
 {de:"<span class='hl-red'>Ich lerne seit zwei Jahren Deutsch gelernt.</span>",vi:"Tôi đã học tiếng Đức được 2 năm.",note:"❌ SAI: seit → PRÄSENS! 'Ich lerne seit zwei Jahren Deutsch'",good:false},
],
tips:["seit → Präsens ist Englisch 'I have been learning' → auf Deutsch: PRESENT TENSE! Typischer Fehler!","am/im/um: am Montag/am 3. März; im Januar/im Sommer/im Jahr 2024; um 8 Uhr/um Mitternacht"],
dangers:["FALSCH: 'Ich habe seit drei Jahren Deutsch gelernt' → RICHTIG: 'Ich lerne seit drei Jahren Deutsch'","Unterschied: VOR 3 Jahren (3 năm trước, quá khứ) ≠ IN 3 Jahren (3 năm nữa, tương lai)"],
compare:[{a:"seit + Präsens (kéo dài đến nay)",b:"vor + Vergangenheit (thời điểm trong QK)",c:"seit 3 Jahren lerne ich (vẫn đang học) | vor 3 Jahren LERNTE ich (3 năm trước — có thể đã dừng)"}]
},
fill:{s:"Ich wohne ___ fünf Jahren in Berlin. Er ist ___ einem Jahr nach Deutschland gekommen.",ans:"seit|vor",hint:"vẫn đang ở→seit+Präsens | điểm thời gian QK→vor+Vergangenheit"},
quiz:[
 {q:"___ wann lernst du Deutsch? (từ khi nào đến nay)",opts:["Vor","Ab","Seit","Für"],c:2,ex:"Từ khi nào đến hiện tại → SEIT"},
 {q:"Das Meeting beginnt ___ 14 Uhr.",opts:["am","im","um","für"],c:2,ex:"Uhrzeit → UM: um 14 Uhr"},
 {q:"Sie ist ___ drei Tagen krank. (vẫn đang ốm)",opts:["vor","in","seit","für"],c:2,ex:"Vẫn đang ốm đến hiện tại → SEIT drei Tagen → Präsens: 'sie IST krank'"},
 {q:"Ich komme ___ zehn Minuten. (trong 10 phút nữa)",opts:["seit","vor","in","für"],c:2,ex:"Trong X thời gian nữa → IN: in zehn Minuten"},
 {q:"Wir bleiben ___ zwei Wochen in Japan. (dự kiến 2 tuần)",opts:["seit","vor","in","für"],c:3,ex:"Dự kiến khoảng thời gian → FÜR: für zwei Wochen"},
]},

// 11. FUTUR I
{id:"a2_futur",lv:"A2",group:"Tempora",title:"Futur I",titleVi:"Thì tương lai",sub:"werden + Infinitiv — dự đoán và lời hứa",
theory:{
intro:"Futur I dùng <strong>werden + Infinitiv</strong> để diễn đạt dự đoán, lời hứa và kế hoạch chắc chắn. Tuy nhiên, trong tiếng Đức hàng ngày, <strong>Präsens + Zeitangabe</strong> thường được dùng hơn cho kế hoạch tương lai.",
formula:"werden: werde/wirst/wird/werden/werdet/werden\nFutur I: [S] + werden(V2) + ... + Infinitiv(CUỐI)\nPräsens statt Futur (kế hoạch): 'Morgen FAHRE ich nach München' (tự nhiên hơn)\nFutur I hay dùng cho: dự đoán ('Es wird regnen'), lời hứa ('Ich werde dich anrufen'), suy luận ('Er wird krank sein')",
examples:[
 {de:"Morgen <hl>wird</hl> es regnen.",vi:"Ngày mai trời sẽ mưa.",note:"Vorhersage (dự đoán) → Futur I tự nhiên",good:true},
 {de:"Ich <hl>werde</hl> dich nie vergessen.",vi:"Tôi sẽ không bao giờ quên bạn.",note:"Versprechen (lời hứa) → Futur I",good:true},
 {de:"Er <hl>wird</hl> wohl noch schlafen.",vi:"Chắc anh ấy vẫn đang ngủ.",note:"Vermutung (suy luận) với 'wohl'",good:true},
 {de:"Nächste Woche <hl>fahre</hl> ich nach Paris.",vi:"Tuần tới tôi đi Paris.",note:"Kế hoạch cụ thể → PRÄSENS tự nhiên hơn Futur I",good:true},
 {de:"<span class='hl-red'>Ich werde morgen fahren nach Berlin.</span>",vi:"Ngày mai tôi sẽ đến Berlin.",note:"❌ SAI: V2-Regel + Infinitiv cuối: 'Ich werde morgen nach Berlin FAHREN'",good:false},
],
tips:["Khi nào dùng Futur I vs Präsens? Präsens + Zeitangabe = kế hoạch (tự nhiên, phổ biến hơn). Futur I = dự đoán, lời hứa, suy luận"],
dangers:["werden còn có nghĩa khác: 'Er WIRD Arzt' (trở thành bác sĩ) — không phải Futur!"],
compare:[{a:"Futur I (dự đoán/lời hứa)",b:"Präsens + Zeitangabe (kế hoạch cụ thể)",c:"Es WIRD morgen regnen (dự đoán) | Morgen FAHRE ich (kế hoạch đã lên)"}]
},
fill:{s:"Es ___ morgen sicher ___ — ich nehme einen Schirm mit. (werden, regnen)",ans:"wird|regnen",hint:"Futur I: wird(V2) + ... + regnen(Infinitiv cuối)"},
quiz:[
 {q:"werden, Futur I mit 'du': Du ___ das bereuen.",opts:["wird","wirst","werdet","werden"],c:1,ex:"werden + du = WIRST"},
 {q:"Ich ___ dich morgen ___. (werden, anrufen)",opts:["werde/anrufen","werde/an/rufen","anrufe/werde","rufe an"],c:0,ex:"Futur I: WERDE(V2) + anrufen(Infinitiv cuối). Trennbar: NICHT trennen im Infinitiv!"},
 {q:"Er ___ wohl schon zu Hause sein.",opts:["ist","wäre","wird","wurde"],c:2,ex:"Vermutung mit 'wohl' → Futur I: WIRD"},
 {q:"Wann ___ das Konzert ___? (beginnen, Futur I)",opts:["beginnt","wird beginnen","wird beginn","beginnen wird"],c:1,ex:"Futur I: WIRD beginnen (V2+Inf.cuối)"},
 {q:"Nächste Woche ___ ich nach Tokyo. (kế hoạch — dùng Präsens)",opts:["werde fliegen","fliege","geflogen","flog"],c:1,ex:"Kế hoạch cụ thể → PRÄSENS + Zeitangabe: 'nächste Woche FLIEGE ich' (tự nhiên hơn)"},
]},

// 12. WECHSELPRÄPOSITIONEN
{id:"a2_wechselpraep",lv:"A2",group:"Präpositionen",title:"Wechselpräpositionen",titleVi:"Giới từ hai cách",sub:"in/an/auf/über/unter/neben/vor/hinter/zwischen — Dativ hay Akkusativ?",
theory:{
intro:"9 Wechselpräpositionen có thể dùng cả Dativ (Wo?) lẫn Akkusativ (Wohin?). Quy tắc: <strong>Wo? (đứng yên) → Dativ; Wohin? (chuyển động đến đích) → Akkusativ</strong>. Các động từ 'tĩnh' (liegen, stehen, sitzen, hängen) → Dativ; động từ 'động' (legen, stellen, setzen, hängen) → Akkusativ.",
formula:"9 Wechselpräp.: in, an, auf, über, unter, neben, vor, hinter, zwischen\nWo? + liegen/stehen/sitzen/hängen/sein → DATIV\n  in dem(=im)/an dem(=am)/auf dem...\nWohin? + legen/stellen/setzen/hängen/gehen/fahren → AKKUSATIV\n  in das(=ins)/an das(=ans)/auf den/auf die/auf das...\nKontraktionen: in+dem=im, an+dem=am, in+das=ins, an+das=ans",
examples:[
 {de:"Die Bücher liegen <hl>auf dem</hl> Tisch.",vi:"Những cuốn sách nằm trên bàn.",note:"liegen=Wo? → Dativ: auf dem Tisch",good:true},
 {de:"Ich lege die Bücher <hl>auf den</hl> Tisch.",vi:"Tôi đặt sách lên bàn.",note:"legen=Wohin? → Akkusativ: auf den Tisch (mask.!)",good:true},
 {de:"Wir sitzen <hl>im</hl> Garten.",vi:"Chúng tôi ngồi trong vườn.",note:"sitzen=Wo? → in+dem=im Garten (der Garten, mask.)",good:true},
 {de:"Ich gehe <hl>ins</hl> Kino.",vi:"Tôi đi xem phim.",note:"gehen=Wohin? → in+das=ins Kino",good:true},
 {de:"Das Bild hängt <hl>an der</hl> Wand.",vi:"Bức tranh treo trên tường.",note:"hängen=Wo? → an+der (Dat.fem.: die Wand→der Wand)",good:true},
 {de:"<span class='hl-red'>Ich stelle mich hinter dem Baum.</span>",vi:"Tôi đứng ra sau cái cây.",note:"❌ SAI: stellen=Wohin? → Akkusativ: hinter DEN Baum",good:false},
],
tips:["Cheat code: LIEGT/STEHT/SITZT/HÄNGT/IST = Wo = Dativ | LEGT/STELLT/SETZT/HÄNGT/GEHT = Wohin = Akkusativ","Cố định: 'in der Schule' (Wo=Dat.f) | 'in die Schule gehen' (Wohin=Akk.f) | 'im Büro' (Dat.n) | 'ins Büro' (Akk.n)"],
dangers:["Dat.fem.=DER: 'an DER Wand' (nicht 'an der Mann'!) — Dat.fem. = Nom.mask. = DER"],
compare:[{a:"Wo? Dativ: auf dem, an der, im, am",b:"Wohin? Akkusativ: auf den/die/das, an die, ins, ans",c:"Das Buch liegt auf DEM Tisch | Ich lege es auf DEN Tisch"}]
},
fill:{s:"Die Katze sitzt ___ ___ Sofa. (auf, das Sofa, Wo?) Ich setze sie ___ ___ Korb. (in, der Korb, Wohin?)",ans:"auf dem|in den",hint:"Wo?→Dat: auf dem | Wohin?→Akk: in den (mask.)"},
quiz:[
 {q:"Das Auto steht ___ ___ Garage. (in, die Garage, Wo?)",opts:["in der","in die","in dem","ins"],c:0,ex:"Wo? → Dativ. die Garage(fem.) → IN DER Garage"},
 {q:"Er fährt ___ ___ Garage. (in, die Garage, Wohin?)",opts:["in der","in die","in dem","ins"],c:1,ex:"Wohin? → Akkusativ. die Garage(fem.) → IN DIE Garage"},
 {q:"Wir essen ___ ___. (in, das Restaurant, Wo?)",opts:["in dem","ins","im","in das"],c:2,ex:"Wo? → in+dem = IM Restaurant"},
 {q:"Ich hänge das Bild ___ ___ Wand. (an, die Wand, Wohin?)",opts:["an der","an die","am","ans"],c:1,ex:"Wohin? → Akk. die Wand → AN DIE Wand"},
 {q:"Das Café liegt ___ ___ Bahnhof. (an, der Bahnhof, Wo?)",opts:["an den","an dem","am","ans"],c:2,ex:"Wo? → an+dem = AM Bahnhof"},
]},

// 13. NEBENSATZ DASS
{id:"a2_dass",lv:"A2",group:"Satzbau",title:"Nebensatz mit 'dass'",titleVi:"Mệnh đề với 'dass' (rằng)",sub:"Ich denke, dass... — Verb ans Ende!",
theory:{
intro:"'<strong>dass</strong>' (rằng) nối mệnh đề phụ vào câu chính sau các động từ nói/nghĩ/cảm xúc. Verb trong dass-Satz luôn ở CUỐI.",
formula:"Hauptsatz + , + dass + [Subjekt] + [Objekt/Adv.] + [Verb(LETZTES)]\nHay dùng với: denken, glauben, meinen, wissen, sagen, finden, hoffen, wünschen, es ist toll/schade/schön...\nMit Modal im NS: Modal ganz ans Ende!\n  Ich glaube, dass er kommen KANN (NICHT: dass er KANN kommen)",
examples:[
 {de:"Ich denke, <hl>dass</hl> er Recht <hl>hat</hl>.",vi:"Tôi nghĩ rằng anh ấy đúng.",note:"hat ở cuối dass-Satz",good:true},
 {de:"Es ist schön, <hl>dass</hl> du hier <hl>bist</hl>.",vi:"Thật tốt khi bạn ở đây.",note:"es ist + Adj. + dass → Verb cuối",good:true},
 {de:"Ich hoffe, <hl>dass</hl> es morgen nicht <hl>regnet</hl>.",vi:"Tôi hy vọng ngày mai không mưa.",note:"Negation im NS: nicht vor Verb: 'nicht regnet'",good:true},
 {de:"Sie weiß, <hl>dass</hl> er morgen <hl>kommen wird</hl>.",vi:"Cô ấy biết rằng anh ấy sẽ đến ngày mai.",note:"Futur im NS: wird + kommen → kommen wird (wird letztes!)",good:true},
 {de:"<span class='hl-red'>Ich denke, dass er hat Recht.</span>",vi:"Tôi nghĩ anh ấy đúng.",note:"❌ SAI: V cuối trong dass-Satz: 'dass er Recht HAT'",good:false},
],
tips:["Sau 'dass' đếm: Subjekt → Objekte/Adverbien → Verb(e). Nhiều verb: Partizip/Infinitiv trước, Hilfsverb/Modal sau cùng","Có thể bỏ 'dass' trong văn nói: 'Ich denke, er hat Recht' (bỏ dass → V2 trở lại)"],
dangers:["Modal im dass-Satz: Modal ở CUỐI CÙNG: 'dass er kommen KANN' (KHÔNG: dass er KANN kommen)"],
compare:[{a:"dass-Satz (chính thức, văn viết)",b:"Infinitiv ohne dass (cùng chủ ngữ)",c:"Ich denke, DASS ich komme | Ich plane ZU kommen (cùng S → infinitiv)"}]
},
fill:{s:"Ich finde es toll, ___ du so fleißig ___. (dass, lernen) Sie hofft, ___ er bald ___ ___ . (dass, zurückkommen können)",ans:"dass|lernst|dass|zurückkommen kann",hint:"dass→V cuối | Modal: kann cuối cùng"},
quiz:[
 {q:"Ich weiß, dass er morgen ___. (kommen)",opts:["kommt","komme","kommen","kommt er"],c:0,ex:"dass-Satz, er → KOMMT ans Ende"},
 {q:"Es ist schade, dass du nicht ___ ___. (kommen, können — NS)",opts:["kann kommen","kommen kannst","kannst kommen","kommen kann"],c:3,ex:"Modal im NS: Infinitiv + Modal ans Ende: kommen KANN (du→kann? Nein: du→kannst) Warten: 'du nicht kommen KANNST'"},
 {q:"Ich glaube, dass sie das Buch schon ___ ___. (lesen, haben — Perfekt NS)",opts:["hat gelesen","gelesen hat","lesen hat","hat lesen"],c:1,ex:"Perfekt im NS: Partizip + Hilfsverb ans Ende: 'gelesen HAT'"},
 {q:"Er sagt, ___ er keine Zeit ___.",opts:["ob/hat","dass/hat","weil/hat","wenn/hat"],c:1,ex:"sagen + Inhalt → DASS. hat ans Ende."},
 {q:"Ich finde es gut, ___ wir mehr Pausen ___.",opts:["ob/machen","weil/machen","dass/machen","wenn/machen"],c:2,ex:"finden es gut/schön/... → DASS. machen ans Ende."},
]},

// 14. INDIREKTE FRAGE
{id:"a2_indirekte_frage",lv:"A2",group:"Satzbau",title:"Indirekte Frage",titleVi:"Câu hỏi gián tiếp",sub:"Ich frage, ob/wann/wo... — Verb ans Ende!",
theory:{
intro:"Câu hỏi gián tiếp tích hợp câu hỏi vào câu phụ. Giống Nebensatz: Verb ở cuối. Câu hỏi Ja/Nein → dùng <strong>ob</strong>; câu hỏi W- → dùng từ hỏi đó làm Konnektor.",
formula:"Ja/Nein-Frage → ob + [S+O+...+V(LETZTES)]\nW-Frage → W-Wort + [S+O+...+V(LETZTES)]\nHay dùng sau: fragen/wissen/verstehen/wissen ob, sagen wo/wann/wie",
examples:[
 {de:"Ich frage, <hl>ob</hl> er Zeit <hl>hat</hl>.",vi:"Tôi hỏi liệu anh ấy có thời gian không.",note:"Ja/Nein → ob. hat ở cuối",good:true},
 {de:"Weißt du, <hl>wo</hl> die Apotheke <hl>ist</hl>?",vi:"Bạn có biết hiệu thuốc ở đâu không?",note:"Wo-Frage → wo + V cuối",good:true},
 {de:"Ich verstehe nicht, <hl>warum</hl> er das <hl>gemacht hat</hl>.",vi:"Tôi không hiểu tại sao anh ấy làm vậy.",note:"Warum + Perfekt im NS: gemacht hat (P.II + Hilfsverb)",good:true},
 {de:"Kannst du mir sagen, <hl>wie viel</hl> das <hl>kostet</hl>?",vi:"Bạn có thể cho tôi biết cái đó giá bao nhiêu không?",note:"Wie viel → Konnektor + V cuối",good:true},
 {de:"<span class='hl-red'>Ich weiß nicht, ob kommt er.</span>",vi:"Tôi không biết liệu anh ấy có đến không.",note:"❌ SAI: ob → V cuối: 'ob er kommt'",good:false},
],
tips:["ob (= whether/if): chỉ dùng cho câu hỏi Ja/Nein. Câu hỏi có từ để hỏi → dùng từ đó: 'Ich weiß, WIE alt er ist'"],
dangers:["FALSCH: 'Ich frage, ob er kommt er' → thừa 'er' thứ 2: 'ob er kommt'"],
compare:[{a:"Direkte Frage (Verb trước)",b:"Indirekte Frage (Verb cuối)",c:"Kommt ER? → Ich frage, ob er KOMMT | Wo WOHNT er? → Ich frage, wo er WOHNT"}]
},
fill:{s:"Kannst du mir sagen, ___ das Museum geöffnet ___? Ich weiß nicht, ___ er schon angekommen ___.",ans:"ob|ist|ob|ist",hint:"Ja/Nein → ob. V cuối: ist"},
quiz:[
 {q:"Ich weiß nicht, ___ er morgen ___. (kommen, ob)",opts:["ob kommt er","ob er kommt","dass er kommt","wenn er kommt"],c:1,ex:"Ja/Nein → OB. V cuối: ob er KOMMT"},
 {q:"Weißt du, ___ der Zug ___? (ankommen, wann)",opts:["wann kommt an der Zug","wann der Zug ankommt","ob der Zug ankommt","wie der Zug ankommt"],c:1,ex:"Wann-Frage → wann als Konnektor. V cuối: ankommt (trennbar zusammen!)"},
 {q:"Kannst du mir erklären, ___ das ___? (funktionieren, wie)",opts:["wie das funktioniert","wie funktioniert das","ob das funktioniert","was das funktioniert"],c:0,ex:"Wie-Frage → wie + Subjekt + V cuối: wie das FUNKTIONIERT"},
 {q:"Er fragt, ___ ich ihm helfen ___. (können, ob)",opts:["ob ich ihm helfen kann","ob kann ich helfen","dass ich helfen kann","ob ich helfen könnte"],c:0,ex:"ob + S + O + V(Modal zuletzt): ob ich ihm helfen KANN"},
 {q:"Sie möchte wissen, ___ du ___ Deutsch ___. (lernen, seit wann)",opts:["seit wann du Deutsch lernst","seit wann lernst du","ob du Deutsch lernst","wann du Deutsch lernst"],c:0,ex:"seit wann als Konnektor + S + V cuối: seit wann du Deutsch LERNST"},
]},

// 15. PRÄPOSITIONEN DATIV-FEST
{id:"a2_praep_dativ",lv:"A2",group:"Präpositionen",title:"Präpositionen mit Dativ",titleVi:"Giới từ luôn đi với Dativ",sub:"mit, bei, nach, aus, von, zu, seit, gegenüber",
theory:{
intro:"8 giới từ này LUÔN đi với Dativ — không có ngoại lệ. Học thuộc lòng bằng câu: '<strong>mit bei nach aus von zu seit gegenüber</strong>'.",
formula:"MIT: cùng với, bằng (phương tiện)\nBEI: tại, ở nhà ai, khi\nNACH: sau, đến (nước/thành phố không có Artikel)\nAUS: từ, làm bằng (vật liệu)\nVON: từ, của\nZU: đến (người/tổ chức), cho mục đích\nSEIT: từ khi (+ Präsens!)\nGEGENÜBER: đối diện với (thường đứng SAU danh từ)",
examples:[
 {de:"Ich fahre <hl>mit dem</hl> Bus.",vi:"Tôi đi xe buýt.",note:"mit = phương tiện. Bus=mask.→mit dem Bus",good:true},
 {de:"Er wohnt <hl>bei seinen</hl> Eltern.",vi:"Anh ấy sống với bố mẹ.",note:"bei = ở nhà ai. Eltern=Pl.Dat.→bei seinen Eltern",good:true},
 {de:"Ich fahre <hl>nach</hl> Vietnam.",vi:"Tôi đi Việt Nam.",note:"nach + Länder/Städte (kein Artikel): nach Vietnam, nach Berlin",good:true},
 {de:"Die Tasse ist <hl>aus</hl> Porzellan.",vi:"Cái cốc làm bằng sứ.",note:"aus = vật liệu (kein Artikel nach aus)",good:true},
 {de:"Das Geschäft ist <hl>dem</hl> Bahnhof <hl>gegenüber</hl>.",vi:"Cửa hàng đối diện với ga tàu.",note:"gegenüber đứng SAU danh từ (postpositional)",good:true},
 {de:"<span class='hl-red'>Ich gehe zu der Arzt.</span>",vi:"Tôi đi gặp bác sĩ.",note:"❌ SAI: zu + dem = ZUM. zu + der (fem.) = ZUR. 'Ich gehe ZUM Arzt'",good:false},
],
tips:["Kontraktionen: zu+dem=zum, zu+der=zur, bei+dem=beim, von+dem=vom","zu vs nach: nach+Land/Stadt (kein Artikel) | zu+Person/Institution: 'zu meiner Freundin', 'zum Arzt', 'zur Schule'"],
dangers:["FALSCH: 'nach dem Arzt' → RICHTIG: 'ZUM Arzt' (zu+dem=zum)"],
compare:[{a:"nach + Stadt/Land (kein Artikel)",b:"zu + Person/Institution/mit Artikel",c:"nach Berlin, nach Deutschland | zum Arzt, zur Schule, zu meiner Freundin"}]
},
fill:{s:"Ich fahre morgen ___ ___ Arzt. (zu, der Arzt→Kontraktion) Sie kommt ___ Frankreich. (aus)",ans:"zum|aus",hint:"zu+dem=zum Arzt | aus+Herkunft: aus Frankreich"},
quiz:[
 {q:"Er kommt ___ ___ Schule. (von, die Schule→Kontraktion)",opts:["von der","von die","vom","von dem"],c:0,ex:"von + der(fem.Dat.) → VON DER Schule (keine Kontraktion bei feminin)"},
 {q:"Ich wohne ___ meinen Eltern.",opts:["nach","bei","zu","von"],c:1,ex:"Bei jdm. wohnen = wohnen BEI (+ Dativ)"},
 {q:"Das Café ist ___ ___ Post. (gegenüber, die Post)",opts:["gegenüber der","der gegenüber","gegenüber die","die gegenüber"],c:0,ex:"gegenüber + Dativ: GEGENÜBER DER Post (oder: 'der Post gegenüber' — beide möglich)"},
 {q:"Wir fahren ___ Urlaub ___ Thailand. (in, nach)",opts:["in den/nach","in/nach","nach/nach","nach/in den"],c:1,ex:"in Urlaub fahren (kein Artikel) | nach Thailand (Land ohne Artikel)"},
 {q:"Ich gehe jetzt ___ ___ Supermarkt. (zu, der Supermarkt)",opts:["zum","zur","zu dem","zu den"],c:0,ex:"zu + dem = ZUM Supermarkt (mask.Dat.)"},
]},

// 16. FUTUR MIT PRÄSENS & ZUKUNFTSPLÄNE
{id:"a2_zukunft",lv:"A2",group:"Tempora",title:"Zukunftspläne ausdrücken",titleVi:"Diễn đạt kế hoạch tương lai",sub:"Präsens, werden, möchten, vorhaben... für die Zukunft",
theory:{
intro:"Tiếng Đức có nhiều cách diễn đạt tương lai. Trong thực tế, người Đức thường dùng <strong>Präsens + Zeitangabe</strong> cho kế hoạch cụ thể, và <strong>werden</strong> cho dự đoán hoặc quyết định tức thời.",
formula:"1. Präsens + Zeitangabe (phổ biến nhất cho kế hoạch):\n   Nächste Woche fahre ich nach Wien.\n2. werden + Infinitiv (dự đoán, lời hứa, tức thời):\n   Ich werde das nie vergessen.\n3. möchten + Infinitiv (mong muốn):\n   Ich möchte Ärztin werden.\n4. vorhaben + zu + Infinitiv (có kế hoạch):\n   Ich habe vor, nächstes Jahr zu heiraten.\n5. planen + zu + Infinitiv:\n   Wir planen, ein Haus zu kaufen.",
examples:[
 {de:"Nächsten Monat <hl>fange</hl> ich einen neuen Job an.",vi:"Tháng tới tôi bắt đầu công việc mới.",note:"Präsens + Zeitangabe = kế hoạch xác định",good:true},
 {de:"Ich <hl>möchte</hl> eines Tages in Deutschland <hl>leben</hl>.",vi:"Một ngày nào đó tôi muốn sống ở Đức.",note:"möchten = nguyện vọng (chưa chắc)",good:true},
 {de:"Wir <hl>haben vor</hl>, im Sommer zu heiraten.",vi:"Chúng tôi có kế hoạch kết hôn vào mùa hè.",note:"vorhaben + zu + Infinitiv (kế hoạch chắc chắn)",good:true},
 {de:"Pass auf, du <hl>wirst</hl> fallen!",vi:"Cẩn thận, bạn sẽ ngã đấy!",note:"werden = cảnh báo/dự đoán",good:true},
],
tips:["vorhaben + zu + Infinitiv: 'Ich habe VOR, mehr Sport zu treiben' — Infinitiv tách ra cuối câu khi trong HS, nhưng mit 'zu'"],
dangers:["werden KHÔNG bao giờ thay hoàn toàn cho kế hoạch trong văn nói hàng ngày — Präsens tự nhiên hơn nhiều"],
compare:[{a:"werden (dự đoán/lời hứa)",b:"Präsens+Zeitangabe (kế hoạch cụ thể)",c:"Es WIRD regnen (dự đoán) | Morgen REGNET es (dự báo thời tiết cụ thể — cả 2 đều OK)"}]
},
fill:{s:"Ich ___ ___, nächstes Jahr Deutsch zu lernen. (planen) Was ___ du am Wochenende ___? (vorhaben)",ans:"plane|hast|vor",hint:"planen+zu+Inf | vorhaben → hast...vor (trennbar!)"},
quiz:[
 {q:"Ich ___ im Sommer nach Japan reisen. (Präsens, kế hoạch)",opts:["werde","reise","möchte","habe vor"],c:1,ex:"Kế hoạch cụ thể → Präsens: 'im Sommer REISE ich'"},
 {q:"___ du ___, mehr Sport zu treiben? (vorhaben)",opts:["Hast/vor","Hast/vorhaben","Hast/—","Habe/vor"],c:0,ex:"vorhaben (trennbar): du → HAST...VOR + zu+Infinitiv"},
 {q:"Eines Tages ___ ich eine eigene Firma ___ ___ . (gründen, möchten)",opts:["möchte gründen","werde gründen","plane gründen","habe gründen"],c:0,ex:"Nguyện vọng chưa chắc → MÖCHTE gründen (Modal + Infinitiv)"},
 {q:"Vorsicht, du ___ hinfallen! (cảnh báo)",opts:["möchtest","kannst","wirst","sollst"],c:2,ex:"Cảnh báo/dự đoán → WERDEN: du WIRST hinfallen"},
 {q:"Wir ___ ___, im Sommer ein Auto zu kaufen. (planen)",opts:["haben vor","planen","haben geplant","planen vor"],c:1,ex:"planen + zu + Infinitiv: wir PLANEN, ... zu kaufen"},
]},

// 17. ADJEKTIV ALS PRÄDIKAT vs ATTRIBUTIV
{id:"a2_adjektiv",lv:"A2",group:"Adjektive & Adverbien",title:"Adjektiv: prädikativ vs attributiv",titleVi:"Tính từ vị ngữ vs tính từ đặt trước danh từ",sub:"Das Essen ist gut vs das gute Essen",
theory:{
intro:"Tính từ tiếng Đức có 2 vị trí: <strong>prädikativ</strong> (sau sein/werden — không có đuôi!) và <strong>attributiv</strong> (trước danh từ — phải thêm đuôi theo Kasus/Genus/Artikel). Đây là điểm nhiều người học hay quên.",
formula:"Prädikativ (sau sein, werden, bleiben, heißen): KHÔNG có đuôi!\n  Das Essen ist gut. | Die Idee bleibt interessant.\nAttributiv (trước Nomen): phải thêm đuôi!\n  Das gute Essen | die interessante Idee\nVergleich: Das Essen ist GUT (prädikativ) vs das GUTE Essen (attributiv)",
examples:[
 {de:"Das Wetter ist <hl>schön</hl> heute.",vi:"Thời tiết đẹp hôm nay.",note:"prädikativ (nach ist) → kein Endung: schön",good:true},
 {de:"Wir haben <hl>schönes</hl> Wetter.",vi:"Chúng tôi có thời tiết đẹp.",note:"attributiv (vor Nomen, kein Artikel) → neut.Akk.: schön-es",good:true},
 {de:"Der Film ist <hl>langweilig</hl>.",vi:"Bộ phim chán.",note:"prädikativ → kein Endung",good:true},
 {de:"Ich mag keine <hl>langweiligen</hl> Filme.",vi:"Tôi không thích phim chán.",note:"attributiv Pl.Akk. nach kein → -en",good:true},
 {de:"<span class='hl-red'>Das iste guter Film.</span>",vi:"Đây là một bộ phim hay.",note:"❌ SAI: 'ist' kein Tippfehler; aber 'eine guter Film' ❌ → EIN guter Film (mask.Nom.indef.→-er)",good:false},
],
tips:["Prädikativ: Das Buch ist INTERESSANT (kein Endung — kein Nomen danach!)","Attributiv: ein interessantES Buch (Endung wegen neutrum Nom.indef.)"],
dangers:["FALSCH: 'Das ist eine gutes Buch' → Buch = neutrum → 'ein gutes Buch' (ein+neut.Nom.→-es)"],
compare:[{a:"prädikativ (kein Endung)",b:"attributiv (mit Endung)",c:"Das Auto ist SCHNELL (pred.) | ein schnellES Auto (attr.)"}]
},
fill:{s:"Das Restaurant ist ___. Wir essen in einem ___ Restaurant. (gut, gut+Endung, neut.Dat.indef.)",ans:"gut|guten",hint:"prädikativ→kein Endung | attributiv indef.Dat.neut.→-en"},
quiz:[
 {q:"Das Buch ist ___. (interessant, prädikativ)",opts:["interessantes","interessanten","interessanter","interessant"],c:3,ex:"Prädikativ (nach ist) → KEINE Endung: interessant"},
 {q:"Ein ___ Buch liegt auf dem Tisch. (interessant, neutrum Nom. indef.)",opts:["interessant","interessants","interessantes","interessanten"],c:2,ex:"Attributiv, ein(indef.) + neut.Nom. → -ES: ein interessantES Buch"},
 {q:"Ich kaufe den ___ Laptop. (neu, maskulin Akk. def.)",opts:["neuer","neue","neues","neuen"],c:3,ex:"Attributiv, den(def.) → immer -EN: den neuEN Laptop"},
 {q:"Das Essen schmeckt ___. (lecker, prädikativ nach schmecken)",opts:["leckeres","leckers","lecker","leckeren"],c:2,ex:"Prädikativ → keine Endung: lecker"},
 {q:"Wir suchen eine ___ Wohnung. (günstig, feminin Akk. indef.)",opts:["günstiger","günstige","günstiges","günstigen"],c:1,ex:"Attributiv, eine(indef.) + fem.Akk. → -E: eine günstigE Wohnung"},
]},

// 18. ORDINALZAHLEN & DATUM DETAILLIERT
{id:"a2_ordinal",lv:"A2",group:"Sonstige",title:"Ordinalzahlen & Datum",titleVi:"Số thứ tự & Ngày tháng chính thức",sub:"am ersten, zum zweiten Mal, der dritte...",
theory:{
intro:"Ordinalzahlen (1., 2., 3...) dùng trong ngày tháng, lần thứ bao nhiêu, thứ hạng. Chia như tính từ thường sau đuôi thêm -te (1-19) hoặc -ste (20+). Bất quy tắc: 1.=erst-, 3.=dritt-, 7.=siebt-, 8.=acht-.",
formula:"1-19: Grundzahl + te: zweit-, dritt* (BQT), viert-, fünft-, sechst-, siebt*(BQT), acht*(BQT), neunt-...\n20+: Grundzahl + ste: zwanzigst-, dreißigst-...\nDatum: am + Ordinal + Dat.: 'am ersten Mai'\nWenn Objekt: 'den dritten Mai' (Akk.)\nIm Brief: Hamburg, den 3. Mai 2024\nMündlich: 'am dritten Fünften zweitausendvierundzwanzig'",
examples:[
 {de:"Mein Geburtstag ist <hl>am fünften März</hl>.",vi:"Sinh nhật tôi ngày 5 tháng 3.",note:"am + Ordinal.Dat.: fünft + en = fünften (Dat.mask.def.→-en)",good:true},
 {de:"Das ist <hl>das erste</hl> Mal.",vi:"Đây là lần đầu tiên.",note:"Ordinal attributiv: erst + e (neut.Nom.def.→-e)",good:true},
 {de:"Er wurde <hl>Zweiter</hl> beim Wettbewerb.",vi:"Anh ấy về nhì trong cuộc thi.",note:"Ordinal substantivisch: Zweiter (wie Adjektiv)",good:true},
 {de:"Heute ist <hl>der zwanzigste</hl> März.",vi:"Hôm nay là ngày 20 tháng 3.",note:"Nominativ: 'Heute ist der zwanzigste März'",good:true},
],
tips:["Ngày tháng hay gặp: am ersten (1.), am zweiten (2.), am dritten (3.) — bất quy tắc!", "Viết số ngắn: 1. = erste, 2. = zweite, 3. = dritte (không phải 'dreite'!)"],
dangers:["FALSCH: am dritten April ✓ vs am drite April ❌ | 'der erste' ✓ vs 'der ein' ❌"],
compare:[{a:"am + Dat. (wann?)",b:"den + Akk. (welchen Tag schreiben?)",c:"AM dritten Mai (wann?) | Ich schreibe DEN dritten Mai... (Akkusativ im Brief-Kopf)"}]
},
fill:{s:"Ich bin ___ ___ Februar geboren. Das war ___ ___ Mal, dass ich Deutsch spreche. (am, dritten, das, erst-)",ans:"am dritten|das erste",hint:"am+Dat.→dritten | das+erst+(neut.Nom.def.)→erste"},
quiz:[
 {q:"Mein Geburtstag ist am ___. (3. April)",opts:["drei April","dritten April","dritte April","drei Aprils"],c:1,ex:"Datum am+Dat.: dritt+en = am DRITTEN April"},
 {q:"Das ist das ___ Mal. (1., neut.Nom.)",opts:["erste","ersten","erster","erstes"],c:0,ex:"das(def.neut.Nom.) + erst → -E: das ERSTE Mal"},
 {q:"Heute ist der ___ Januar. (20., Nom.)",opts:["zwanzigste","zwanzigsten","zwanzigster","zwanzigstes"],c:0,ex:"der(def.mask.Nom.) → -E: der zwanzigstE Januar"},
 {q:"Ich treffe ihn am ___ März. (15., Dat.)",opts:["fünfzehnsten","fünfzehntem","fünfzehnten","fünfzehnte"],c:2,ex:"am(def.mask.Dat.) → -EN: am fünfzehnten März"},
 {q:"Er kam ___ ins Ziel. (als Zweiter)",opts:["zweite","zweiter","als Zweiter","Zweites"],c:2,ex:"Substantiviertes Ordinal: ALS ZWEITER (wie Adjektiv ohne Artikel → stark -er)"},
]},

// 19. GENITIVKONSTRUKTIONEN (POSSESSIV)
{id:"a2_genitiv_pos",lv:"A2",group:"Kasus",title:"Genitiv — Besitz ausdrücken",titleVi:"Sở hữu cách — diễn đạt sự sở hữu",sub:"das Buch meines Vaters — des/der/des",
theory:{
intro:"Genitiv (sở hữu cách) diễn đạt quan hệ sở hữu: 'das Buch meines Vaters' (cuốn sách của bố tôi). Trong văn nói hàng ngày, người Đức thường dùng <strong>von + Dativ</strong> thay Genitiv. Nhưng trong văn viết và thi cử, Genitiv rất quan trọng.",
formula:"Genitiv Artikel:\n  Mask./Neut.: des/eines + Nomen+(e)s\n  Fem./Pl.: der/einer (không thay đổi Nomen)\nNomen-Endung Genitiv: Mask./Neut. thêm -(e)s: des Mannes, des Kindes\nGenitiv Possessivpronomen: meines/deines/seines/ihres... (mask./neut.) meiner/deiner... (fem./Pl.)",
examples:[
 {de:"Das ist das Auto <hl>meines Vaters</hl>.",vi:"Đây là xe hơi của bố tôi.",note:"Vater=mask. → des+Vaters(+s): meines Vaters",good:true},
 {de:"Der Name <hl>des Mannes</hl> ist Thomas.",vi:"Tên của người đàn ông là Thomas.",note:"Mann=mask.→des Mannes (+es vì kết thúc bằng man)",good:true},
 {de:"Das ist die Tasche <hl>meiner Schwester</hl>.",vi:"Đây là túi của chị/em gái tôi.",note:"Schwester=fem.→meiner Schwester (fem.Genitiv=der/meiner)",good:true},
 {de:"Wegen <hl>des Regens</hl> bleiben wir zuhause.",vi:"Vì mưa chúng tôi ở nhà.",note:"wegen + Genitiv (quan trọng!)",good:true},
 {de:"Das ist das Buch <hl>von meinem</hl> Freund.",vi:"Đây là cuốn sách của bạn tôi.",note:"von+Dativ = thay thế Genitiv trong văn nói",good:true},
],
tips:["Trong văn nói: 'das Auto von meinem Vater' (von+Dat.) tự nhiên hơn Genitiv","Quan trọng cần nhớ: wegen/trotz/während/statt + Genitiv!"],
dangers:["FALSCH: 'des Manns' → RICHTIG: 'des Mannes' (+es sau -n: Mann→Mannes)"],
compare:[{a:"Genitiv (văn viết, trang trọng)",b:"von + Dativ (văn nói)",c:"das Buch meines Freundes | das Buch von meinem Freund"}]
},
fill:{s:"Das Haus ___ Nachbarn (der Nachbar) ist sehr alt. Das ist das Problem ___ ganzen Stadt. (die Stadt, fem.)",ans:"des Nachbarn|der ganzen Stadt",hint:"Nachbar=mask.→des Nachbarn(+n, weak Noun!) | Stadt=fem.→der Stadt"},
quiz:[
 {q:"Das ist das Auto ___ Lehrers. (der Lehrer, mask.Genitiv)",opts:["des","der","dem","den"],c:0,ex:"Maskulin/Neutrum Genitiv: DES + Nomen+s: DES Lehrers"},
 {q:"Die Farbe ___ Autos (das Auto, neut.) ist rot.",opts:["des","der","dem","des Autos"],c:3,ex:"das Auto(neut.) Genitiv → DES + Auto+s = DES AUTOS"},
 {q:"Das Zimmer ___ Studentin (die Studentin, fem.) ist klein.",opts:["des","der","dem","die"],c:1,ex:"Feminin Genitiv → DER: DER Studentin (keine Nomen-Endung)"},
 {q:"Wegen ___ Wetters blieben wir zuhause. (das Wetter, neut.)",opts:["des","der","dem","das"],c:0,ex:"wegen + Genitiv: DES Wetters"},
 {q:"Ich kenne den Namen ___ Mannes nicht. (der Mann)",opts:["der","des","dem","den"],c:1,ex:"Mann=maskulin Genitiv → DES Mannes"},
]},

// 20. AUSDRÜCKE MIT VERBEN (idiomatische Wendungen)
{id:"a2_wendungen",lv:"A2",group:"Sonstige",title:"Wichtige Ausdrücke & feste Wendungen",titleVi:"Thành ngữ và cụm từ cố định A2",sub:"es gibt, Lust haben, Spaß machen, schaffen...",
theory:{
intro:"Tiếng Đức có nhiều cụm từ cố định (feste Wendungen) mà nghĩa không thể đoán từ từng từ riêng lẻ. Học thuộc những cụm này sẽ giúp bạn nghe tự nhiên hơn nhiều.",
formula:"es gibt + Akkusativ: có (chỉ sự tồn tại)\nLust haben auf + Akkusativ: cảm thấy muốn\nSpaß machen (+ Dativ): thú vị, vui\nschaffen: làm được, đạt được\nStimmt! / Stimmt nicht.: Đúng! / Sai.\nworauf/worüber/womit... (Pronominaladverbien): thay 'Präp.+es'\nankommen auf + Akkusativ: phụ thuộc vào",
examples:[
 {de:"<hl>Es gibt</hl> heute kein warmes Wasser.",vi:"Hôm nay không có nước nóng.",note:"es gibt + Akkusativ: kein warmes Wasser (Akk.neut.)",good:true},
 {de:"Hast du <hl>Lust</hl>, ins Kino zu gehen?",vi:"Bạn có muốn đi xem phim không?",note:"Lust haben auf/zu + Infinitiv: mong muốn",good:true},
 {de:"Das macht mir <hl>Spaß</hl>!",vi:"Điều đó thú vị với tôi!",note:"Spaß machen + Dativpronomen: mir/dir/ihm...",good:true},
 {de:"Ich habe es endlich <hl>geschafft</hl>!",vi:"Cuối cùng tôi đã làm được!",note:"schaffen: Perfekt = geschafft. etw. schaffen = làm được điều gì",good:true},
 {de:"<hl>Es kommt darauf an</hl>, wie viel Zeit du hast.",vi:"Phụ thuộc vào việc bạn có bao nhiêu thời gian.",note:"es kommt darauf an, dass/wie/ob...",good:true},
],
tips:["es gibt = có (sự tồn tại trong không gian): 'In Berlin gibt es viele Parks' | es hat (Schweizerdeutsch) — in Standard-DE = es gibt","Spaß machen ≠ Lust haben: Spaß machen = vui/thú vị | Lust haben = cảm giác muốn làm gì"],
dangers:["FALSCH: 'Es gibt keine warme Wasser' → Es gibt + Akk.: kein warmES Wasser"],
compare:[{a:"es gibt (Existenz, allgemein)",b:"es ist/sind (Lokale Existenz)",c:"Es GIBT Probleme (chung chung) | Das Problem IST hier (cụ thể ở đây)"}]
},
fill:{s:"___ ___ in der Stadt viele Restaurants. Hast du ___, heute Abend zu kochen? (Lust)",ans:"Es gibt|Lust",hint:"Existenz→es gibt | cảm giác muốn→Lust haben"},
quiz:[
 {q:"___ hier eine Toilette? (es gibt, hỏi)",opts:["Hat es","Gibt es","Ist es","Sind es"],c:1,ex:"es gibt (Existenz) → Frage: GIBT ES hier eine Toilette?"},
 {q:"Das ___ mir großen ___! (Spaß machen)",opts:["gibt/Spaß","macht/Spaß","hat/Spaß","bringt/Spaß"],c:1,ex:"Spaß MACHEN: 'Das MACHT mir großen SPASS'"},
 {q:"Ich habe keine ___, heute zu kochen. (muốn — Lust)",opts:["Lust","Spaß","Zeit","Hunger"],c:0,ex:"keine Lust haben + zu: 'keine LUST, heute zu kochen'"},
 {q:"Er hat die Prüfung endlich ___ . (schaffen, Perfekt)",opts:["geshafft","geschafft","schafft","geschaft"],c:1,ex:"schaffen → Perfekt = GESCHAFFT (quy tắc: ge+schaff+t)"},
 {q:"___ ___ keine Milch mehr im Kühlschrank.",opts:["Hat/—","Es hat","Es gibt","Gibt/—"],c:2,ex:"Existenz → ES GIBT keine Milch (Akk.)"},
]},

], // Ende A2

B1: [

{id:"b1_kausativ",lv:"B1",group:"Satzbau",title:"Kausale & Konsekutive Sätze",titleVi:"Nguyên nhân và Kết quả",sub:"weil/da/denn + sodass/so...dass",
theory:{
intro:"Ngoài weil (đã học A2), B1 mở rộng với da (NS đầu câu), và cấu trúc kết quả: sodass / so...dass.",
formula:"Kausal: weil/da + NS (V cuối) | denn + HS (V2)\nKonsekutiv (kết quả): sodass + NS (V cuối)\n  Er war so müde, dass er sofort einschlief.\n  Er arbeitete viel, sodass er erfolgreich wurde.\nZu + Adj. + als dass + KII: Er ist zu müde, als dass er noch arbeiten könnte.",
examples:[
 {de:"Er ist so krank, <hl>dass</hl> er nicht kommen kann.",vi:"Anh ấy ốm đến mức không thể đến.",note:"so...dass = đến mức... (kết quả)",good:true},
 {de:"Sie hat so viel gelernt, <hl>sodass</hl> sie die Prüfung bestanden hat.",vi:"Cô ấy học nhiều đến mức đã đậu thi.",note:"sodass = một từ khi kết quả trực tiếp",good:true},
 {de:"Er ist zu müde, <hl>als dass</hl> er noch arbeiten <hl>könnte</hl>.",vi:"Anh ấy quá mệt để còn có thể làm việc.",note:"zu...als dass + KII (B2-Struktur aber B1 passiv kennen)",good:true},
],
tips:["so...dass (Komma nach dem ersten Teil) | sodass (kein Komma, direktes Ergebnis)"],
dangers:["FALSCH: 'sodass er nicht kommen kann' (ohne so davor wenn nicht intensiviert) → 'Er ist krank, sodass er nicht kommen kann' ✓"],
compare:[{a:"weil (Ursache)",b:"sodass (Folge/Ergebnis)",c:"WEIL es regnet, bleiben wir (wegen Ursache) | Es regnet, SODASS wir bleiben (wegen Folge)"}]
},
fill:{s:"Er war so müde, ___ er sofort ___ ___. (dass, einschlafen, Perfekt: eingeschlafen ist)",ans:"dass|eingeschlafen ist",hint:"so...dass → Perfekt im NS: Partizip+Hilfsverb (eingeschlafen ist)"},
quiz:[
 {q:"Sie spricht so schnell, ___ ich nichts verstehe.",opts:["weil","sodass","dass","obwohl"],c:2,ex:"So + Adj./Adv. → SO schnell, DASS: so schnell, dass ich nichts verstehe"},
 {q:"Er hat so viel trainiert, ___ er den Marathon gewonnen hat.",opts:["dass","weil","sodass","obwohl"],c:2,ex:"Direktes Ergebnis: SODASS er den Marathon gewonnen hat"},
 {q:"___ das Wetter gut war, gingen wir wandern. (da, NS zuerst)",opts:["Weil","Da","Denn","Sodass"],c:1,ex:"NS am Anfang + bekannte Info → DA. HS-Inversion: gingen WIR"},
 {q:"Das Buch ist so interessant, ___ ich nicht aufhören kann zu lesen.",opts:["sodass","weil","obwohl","dass"],c:3,ex:"so interessant, DASS = so...dass Konstruktion"},
 {q:"Er ist ___ krank, ___ er nicht arbeiten kann.",opts:["so/dass","zu/dass","so/sodass","zu/als dass"],c:0,ex:"SO krank, DASS = so...dass (Folge/Konsequenz)"},
]},

{id:"b1_konzessiv",lv:"B1",group:"Satzbau",title:"Konzessivsätze",titleVi:"Mệnh đề nhượng bộ",sub:"obwohl, trotzdem, obgleich — mặc dù vậy",
theory:{
intro:"Konzessiv diễn đạt nghịch lý: 'mặc dù X nhưng Y'. Hai cách: <strong>obwohl</strong> (Nebensatz, V cuối) và <strong>trotzdem</strong> (Adverb, V2 đảo ngữ, 2 câu riêng).",
formula:"obwohl + [S + O + V(LETZTES)] , [HS]\n[HS], obwohl + [NS]\ntrotzdem → Hauptsatz: Trotzdem + V + S\nobgleich / obwohl / wenn auch (formal/B2+)",
examples:[
 {de:"Er kommt, <hl>obwohl</hl> er sehr müde <hl>ist</hl>.",vi:"Anh ấy đến mặc dù rất mệt.",note:"obwohl → NS: V cuối (ist)",good:true},
 {de:"<hl>Obwohl</hl> es regnet, <hl>gehen</hl> wir spazieren.",vi:"Mặc dù trời mưa chúng tôi vẫn đi dạo.",note:"NS đầu → HS đảo ngữ: gehen wir",good:true},
 {de:"Er ist krank. <hl>Trotzdem</hl> kommt er zur Arbeit.",vi:"Anh ấy ốm. Tuy nhiên anh ấy vẫn đến làm.",note:"trotzdem = Adverb → V2: trotzdem + V + S",good:true},
 {de:"<span class='hl-red'>Obwohl er ist krank, kommt er.</span>",vi:"Mặc dù ốm anh ấy vẫn đến.",note:"❌ SAI: obwohl → NS V cuối: 'obwohl er krank IST'",good:false},
],
tips:["obwohl vs trotzdem: obwohl = conjunction (1 câu), trotzdem = adverb (2 câu riêng)"],
dangers:["FALSCH: 'Obwohl...aber': NICHT 'aber' nach obwohl!"],
compare:[{a:"obwohl (NS, V cuối)",b:"trotzdem (Adverb, V2)",c:"..., OBWOHL er krank IST | Er ist krank. TROTZDEM KOMMT er."}]
},
fill:{s:"___ er sehr viel arbeitet, verdient er wenig. Er ist arm. ___ ist er glücklich.",ans:"Obwohl|Trotzdem",hint:"NS+V cuối→obwohl | 2 câu riêng→trotzdem+V2"},
quiz:[
 {q:"Er lernt jeden Tag, ___ er nie Fortschritte ___.",opts:["obwohl/macht","obwohl/macht er","trotzdem/macht","weil/macht"],c:0,ex:"obwohl → NS: macht cuối: obwohl er nie Fortschritte MACHT"},
 {q:"Sie hat kein Geld. ___ kauft sie neue Schuhe.",opts:["Obwohl","Weil","Trotzdem","Damit"],c:2,ex:"2 câu riêng + nghịch lý → TROTZDEM + V2: Trotzdem KAUFT sie"},
 {q:"___ das Wetter schlecht ist, machen wir einen Ausflug.",opts:["Da","Trotzdem","Obwohl","Weil"],c:2,ex:"NS đầu câu + nhượng bộ → OBWOHL. HS đảo ngữ: machen wir"},
 {q:"Ich bin müde. ___ gehe ich nicht ins Bett.",opts:["Obwohl","Da","Trotzdem","Weil"],c:2,ex:"TROTZDEM = tuy nhiên, 2 câu riêng biệt"},
 {q:"___ ich müde bin, kann ich nicht schlafen.",opts:["Weil","Obwohl","Trotzdem","Denn"],c:1,ex:"Nghịch lý (mệt nhưng không ngủ được) → OBWOHL"},
]},

{id:"b1_wenn_als",lv:"B1",group:"Satzbau",title:"wenn vs als",titleVi:"Khi — hiện tại/lặp lại vs một lần quá khứ",sub:"wenn (Gegenwart/Wiederholung) | als (einmalig Vergangenheit)",
theory:{
intro:"<strong>wenn</strong> = khi (hiện tại, tương lai, hoặc quá khứ lặp lại); <strong>als</strong> = khi (một thời điểm/giai đoạn duy nhất trong quá khứ, Präteritum).",
formula:"wenn: Gegenwart/Zukunft | quá khứ lặp lại (immer wenn)\nals: EINMALIG in der Vergangenheit (Präteritum/Perfekt)\nImmer wenn / jedes Mal wenn = mỗi khi → WENN (lặp lại QK)",
examples:[
 {de:"<hl>Wenn</hl> ich Zeit <hl>habe</hl>, lese ich.",vi:"Khi tôi có thời gian, tôi đọc sách.",note:"Gegenwart/allgemein → wenn + Präsens",good:true},
 {de:"<hl>Als</hl> ich jung <hl>war</hl>, wohnte ich auf dem Land.",vi:"Khi còn trẻ tôi sống ở nông thôn.",note:"Einmalige Vergangenheit → als + Präteritum",good:true},
 {de:"Immer <hl>wenn</hl> es regnete, spielte er drinnen.",vi:"Mỗi khi trời mưa anh ấy chơi trong nhà.",note:"Wiederholung in der Vergangenheit → immer wenn",good:true},
 {de:"<span class='hl-red'>Als ich oft krank bin, bleibe ich zuhause.</span>",vi:"Khi tôi ốm, tôi ở nhà.",note:"❌ SAI: lặp lại/hiện tại → WENN",good:false},
],
tips:["Test: Có thể thêm 'immer'? → wenn. Chỉ xảy ra 1 lần trong QK? → als"],
dangers:["als chỉ dùng với Vergangenheit! Không với Präsens/Futur"],
compare:[{a:"wenn (Gegenwart/Zukunft/Wiederholung)",b:"als (einmalige Vergangenheit)",c:"WENN ich Zeit habe (jetzt) | ALS ich jung war (damals, 1×)"}]
},
fill:{s:"___ ich 10 Jahre alt war, zog ich nach Berlin. ___ ich Zeit habe, gehe ich laufen.",ans:"Als|Wenn",hint:"Einmalige Vergangenheit→als | Gegenwart allgemein→wenn"},
quiz:[
 {q:"___ sie 5 Jahre alt war, fing sie an Klavier zu spielen.",opts:["Wenn","Als","Weil","Obwohl"],c:1,ex:"Einmalige Vergangenheit → ALS"},
 {q:"___ du Hilfe brauchst, ruf mich an. (allgemein/Zukunft)",opts:["Als","Da","Wenn","Weil"],c:2,ex:"Allgemein/Zukunft → WENN"},
 {q:"Immer ___ er Stress hatte, aß er Schokolade. (Wiederholung QK)",opts:["als","wenn","weil","obwohl"],c:1,ex:"Wiederholung in QK → IMMER WENN"},
 {q:"___ der Film zu Ende war, gingen wir essen.",opts:["Wenn","Als","Nachdem","Während"],c:1,ex:"Einmalig in der Vergangenheit → ALS"},
 {q:"___ ich groß bin, werde ich Astronaut!",opts:["Als","Wenn","Ob","Da"],c:1,ex:"Zukunft → WENN (kein als mit Zukunft!)"},
]},

{id:"b1_damit_umzu",lv:"B1",group:"Satzbau",title:"damit vs um...zu",titleVi:"Mục đích: để...",sub:"damit (khác chủ ngữ) | um...zu (cùng chủ ngữ)",
theory:{
intro:"Hai cấu trúc mục đích: <strong>um...zu</strong> (cùng S) và <strong>damit</strong> (khác S).",
formula:"um + ... + zu + Infinitiv: CÙNG chủ ngữ\ndamit + NS (V cuối): KHÁC chủ ngữ\nTest: Cùng người làm cả 2? → um...zu | Khác người? → damit",
examples:[
 {de:"Ich spare Geld, <hl>um</hl> ein Auto <hl>zu kaufen</hl>.",vi:"Tôi tiết kiệm để mua xe.",note:"Cùng S (ich): um...zu kaufen",good:true},
 {de:"Ich spreche langsam, <hl>damit</hl> du mich <hl>verstehst</hl>.",vi:"Tôi nói chậm để bạn hiểu.",note:"Khác S (ich ≠ du): damit + NS V cuối",good:true},
 {de:"<span class='hl-red'>Ich erkläre es, um du verstehst.</span>",vi:"Tôi giải thích để bạn hiểu.",note:"❌ SAI: khác S → DAMIT",good:false},
],
tips:["um...zu NICHT möglich wenn Subjekte verschieden"],
dangers:["FALSCH: 'um dass...' → Nur 'um...zu' ODER 'damit'"],
compare:[{a:"um...zu (cùng S)",b:"damit (khác S)",c:"Ich lerne, UM zu bestehen | Ich erkläre, DAMIT er versteht"}]
},
fill:{s:"Er geht früh schlafen, ___ früher aufstehen ___ ___ . (um, können, zu) Ich schreibe langsam, ___ alle es ___. (damit, verstehen)",ans:"um|zu können|damit|verstehen",hint:"cùng S→um...zu | khác S→damit+NS"},
quiz:[
 {q:"Er lernt viel, ___ die Prüfung ___ ___. (cùng S, bestehen)",opts:["damit/zu bestehen","um/zu bestehen","damit/besteht","weil/besteht"],c:1,ex:"Cùng S → UM...ZU: um die Prüfung ZU BESTEHEN"},
 {q:"Ich gebe dir das Buch, ___ du ___ kannst. (lesen, khác S)",opts:["um/zu lesen","damit/lesen kannst","um/zu lesen kannst","damit/zu lesen"],c:1,ex:"Khác S → DAMIT + NS V cuối: damit du lesen KANNST"},
 {q:"Sie macht Sport, ___ gesünder ___ ___. (werden, cùng S)",opts:["damit/zu werden","um/werden zu","um/zu werden","damit/wird"],c:2,ex:"Cùng S → UM...ZU: um gesünder ZU WERDEN"},
 {q:"Ich erkläre das nochmal, ___ alle es ___. (khác S)",opts:["um/zu verstehen","damit/verstehen","um/verstehen zu","damit/zu verstehen"],c:1,ex:"Khác S → DAMIT: damit alle es VERSTEHEN"},
 {q:"Er nimmt ein Taxi, ___ nicht warten ___ ___ . (müssen, cùng S)",opts:["damit/zu müssen","um/warten zu müssen","um/nicht zu müssen","um/zu warten"],c:2,ex:"Cùng S, Negation: UM NICHT warten ZU MÜSSEN"},
]},

{id:"b1_passiv",lv:"B1",group:"Verben & Konjugation",title:"Passiv",titleVi:"Thể bị động",sub:"werden + Partizip II — hành động được nhấn mạnh",
theory:{
intro:"Passiv nhấn mạnh <em>hành động</em> thay vì người thực hiện. Cấu trúc: <strong>werden (V2) + Partizip II (cuối)</strong>.",
formula:"Präsens: wird + Partizip II\nPräteritum: wurde + Partizip II\nPerfekt: ist/sind + Partizip II + worden ⚠️ (NICHT geworden!)\nModal+Passiv: Modal + Partizip II + werden\nTác nhân: von + Dativ\nZustandspassiv: sein + Partizip II (= Ergebnis)",
examples:[
 {de:"Das Haus <hl>wird</hl> gerade ge<hl>baut</hl>.",vi:"Nhà đang được xây.",note:"Passiv Präsens: wird + Partizip II",good:true},
 {de:"Das Auto <hl>wurde</hl> repa<hl>riert</hl>.",vi:"Xe đã được sửa.",note:"Passiv Präteritum: wurde + Partizip II",good:true},
 {de:"Der Brief <hl>ist</hl> geschrieben <hl>worden</hl>.",vi:"Bức thư đã được viết.",note:"Passiv Perfekt: ist + Partizip II + WORDEN (không phải geworden!)",good:true},
 {de:"Das <hl>muss</hl> sofort er<hl>ledigt werden</hl>.",vi:"Cái đó phải được giải quyết ngay.",note:"Modal+Passiv: muss + Partizip II + werden",good:true},
 {de:"<span class='hl-red'>Das Haus ist gebaut geworden.</span>",vi:"Nhà đã được xây.",note:"❌ SAI: Passiv Perfekt → WORDEN",good:false},
],
tips:["worden (Passiv Perfekt) ≠ geworden (Aktiv Perfekt von werden = trở thành)"],
dangers:["FALSCH: 'Das Buch ist geschrieben geworden' → 'ist geschrieben WORDEN'"],
compare:[{a:"Aktiv",b:"Passiv",c:"Der Arzt UNTERSUCHT den Patienten | Der Patient WIRD untersucht"}]
},
fill:{s:"Das Problem ___ gestern ___. (lösen, Passiv Präteritum) Das ___ jetzt ___ ___ . (machen, müssen, Passiv+Modal)",ans:"wurde gelöst|muss gemacht werden",hint:"Passiv Prät.: wurde+P.II | Modal+Passiv: muss+P.II+werden"},
quiz:[
 {q:"Das Auto ___ morgen ___. (reparieren, Passiv Präsens)",opts:["wird reparieren","wird repariert","ist repariert","wurde repariert"],c:1,ex:"Passiv Präsens: WIRD + Partizip II: wird REPARIERT"},
 {q:"Das Gebäude ___ 1900 ___. (bauen, Passiv Präteritum)",opts:["wurde gebaut","wird gebaut","ist gebaut worden","ist gebaut geworden"],c:0,ex:"Passiv Präteritum: WURDE + Partizip II"},
 {q:"Das Museum ___ 1850 gegründet ___.",opts:["hat/worden","ist/worden","wurde/—","ist/geworden"],c:1,ex:"Passiv Perfekt: IST + Partizip II + WORDEN"},
 {q:"Das ___ sofort ___ ___ . (reparieren, müssen)",opts:["muss repariert werden","wird repariert müssen","muss werden repariert","repariert werden muss"],c:0,ex:"Modal+Passiv: MUSS + Partizip II + werden"},
 {q:"Die Tür ___ offen. (Zustandspassiv: öffnen)",opts:["wird geöffnet","wurde geöffnet","ist geöffnet","ist geöffnet worden"],c:2,ex:"Zustandspassiv = IST + Partizip II"},
]},

{id:"b1_konjunktiv2",lv:"B1",group:"Verben & Konjugation",title:"Konjunktiv II",titleVi:"Điều kiện giả định",sub:"würde + Inf | hätte | wäre | könnte — lịch sự và phi thực tế",
theory:{
intro:"Konjunktiv II: điều kiện không có thật, mong muốn, lịch sự. Văn nói: thường dùng <strong>würde + Infinitiv</strong>. Học thuộc: hätte, wäre, könnte, sollte, müsste.",
formula:"würde + Infinitiv: động từ thường\nhätte (haben) | wäre (sein) | könnte/sollte/müsste/dürfte/wollte\nBedingung: Wenn + Konj.II, Konj.II/würde\nNICHT dùng würde với: sein→wäre, haben→hätte, Modal→könnte...",
examples:[
 {de:"Ich <hl>würde</hl> gerne reisen.",vi:"Tôi rất muốn đi du lịch.",note:"Wunsch: würde + Infinitiv",good:true},
 {de:"Wenn ich Zeit <hl>hätte</hl>, <hl>würde</hl> ich mehr lesen.",vi:"Nếu có thời gian tôi sẽ đọc nhiều hơn.",note:"Bedingung phi thực tế: wenn+hätte → würde",good:true},
 {de:"<hl>Könntest</hl> du mir helfen?",vi:"Bạn có thể giúp tôi không? (lịch sự)",note:"Konj.II = lịch sự hơn",good:true},
 {de:"<span class='hl-red'>Ich würde haben mehr Zeit.</span>",vi:"Tôi có nhiều thời gian hơn.",note:"❌ SAI: haben không dùng würde → HÄTTE",good:false},
],
tips:["KHÔNG dùng würde với: sein→wäre, haben→hätte, Modal→könnte/müsste..."],
dangers:["FALSCH: 'Ich würde sein müde' → RICHTIG: 'Ich WÄRE müde'"],
compare:[{a:"Konj.II (höflicher)",b:"Indikativ (direkt)",c:"Könntest du? (KII=lịch sự) | Kannst du? (trực tiếp)"}]
},
fill:{s:"Wenn ich Millionär ___, ___ ich um die Welt reisen. Ich ___ gerne mehr schlafen.",ans:"wäre|würde|würde",hint:"sein→wäre | würde+Infinitiv"},
quiz:[
 {q:"Wenn ich Zeit ___, käme ich gerne. (haben, Konj.II)",opts:["habe","hatte","hätte","würde haben"],c:2,ex:"haben Konj.II = HÄTTE"},
 {q:"Das ___ wirklich schön. (sein, Konj.II)",opts:["würde sein","würde","wäre","war"],c:2,ex:"sein Konj.II = WÄRE"},
 {q:"___ du mir bitte helfen? (können, Konj.II)",opts:["Kannst","Könntest","Würdest können","Konntest"],c:1,ex:"können Konj.II = KÖNNTEST"},
 {q:"Ich ___ gerne mehr reisen. (Wunsch)",opts:["würde reisen","würde","mögte","wollte reisen"],c:0,ex:"Wunsch mit normalem Verb → WÜRDE + reisen"},
 {q:"Wenn es nicht regnete, ___ wir spazieren gehen.",opts:["würden","werden","sind","hätten"],c:0,ex:"Folge der Bedingung → WÜRDEN + Infinitiv"},
]},

{id:"b1_plusquamperfekt",lv:"B1",group:"Tempora",title:"Plusquamperfekt & nachdem",titleVi:"Quá khứ hoàn thành — xảy ra trước",sub:"hatte/war + Partizip II — trước một hành động quá khứ khác",
theory:{
intro:"Plusquamperfekt diễn đạt hành động xảy ra <em>trước</em> một thời điểm khác trong quá khứ. Thường với <strong>nachdem</strong>.",
formula:"hatte + Partizip II (haben-Verben)\nwar + Partizip II (sein-Verben)\nNachdem + [PKP], [Präteritum/Perfekt]\n  Nachdem er gegessen HATTE, ging er schlafen.",
examples:[
 {de:"Nachdem er gegessen <hl>hatte</hl>, legte er sich hin.",vi:"Sau khi ăn xong, anh ấy nằm xuống.",note:"Essen zuerst (PKP: hatte gegessen) → dann liegen (Prät.)",good:true},
 {de:"Nachdem sie in Berlin <hl>angekommen war</hl>, rief sie an.",vi:"Sau khi đến Berlin cô ấy gọi điện.",note:"ankommen=sein-Verb → war angekommen",good:true},
 {de:"<span class='hl-red'>Nachdem er gegessen, schlief er.</span>",vi:"Sau khi ăn anh ấy ngủ.",note:"❌ SAI: nachdem LUÔN + PKP: 'Nachdem er gegessen HATTE, ...'",good:false},
],
tips:["nachdem LUÔN đi với PKP! Không được dùng Präsens sau nachdem"],
dangers:["FALSCH: 'Nachdem er kommt, ...' → PKP: 'Nachdem er gekommen WAR, ...'"],
compare:[{a:"Perfekt (QK bình thường)",b:"Plusquamperfekt (trước QK khác)",c:"Er hat gegessen | Nachdem er gegessen HATTE, ..."}]
},
fill:{s:"Nachdem er die Prüfung ___ ___ , feierte er. (bestehen, PKP: haben)",ans:"bestanden hatte",hint:"bestehen=haben → PKP: bestanden hatte"},
quiz:[
 {q:"Nachdem er ___ ___, ging er ins Bett. (essen PKP)",opts:["hat gegessen","gegessen hatte","hatte gegessen","aß"],c:1,ex:"PKP: Partizip + hatte → gegessen HATTE"},
 {q:"Nachdem sie ___ ___, konnte sie schlafen. (trainieren, haben-Verb)",opts:["trainiert war","hatte trainiert","trainiert hatte","trainiert ist"],c:2,ex:"haben-Verb → PKP: trainiert HATTE"},
 {q:"Nachdem der Zug ___ ___, wurde es ruhiger. (abfahren, sein-Verb)",opts:["abgefahren hatte","abgefahren war","war abfahren","hatte abgefahren"],c:1,ex:"sein-Verb → PKP: abgefahren WAR"},
 {q:"Als ich ankam, ___ er bereits ___. (gehen, PKP)",opts:["ist gegangen","ging","war gegangen","hatte gegangen"],c:2,ex:"gehen=sein-Verb → PKP: WAR gegangen"},
 {q:"Sie ___ die Erste, die das Ziel ___ ___ .",opts:["ist/erreicht hatte","war/erreicht hatte","hatte/erreicht war","ist/hatte erreicht"],c:1,ex:"PKP: war... | erreichen=haben → erreicht HATTE"},
]},

{id:"b1_relativsatz",lv:"B1",group:"Satzbau",title:"Relativsatz",titleVi:"Mệnh đề quan hệ",sub:"der/die/das/den/dem/dessen — mô tả danh từ chi tiết",
theory:{
intro:"Relativsatz mô tả chi tiết danh từ. Relativpronomen thay đổi theo Genus (của danh từ được mô tả) và Kasus (trong mệnh đề phụ).",
formula:"         Mask.  Fem.  Neut.  Plural\nNom.     der    die   das    die\nAkk.     den    die   das    die\nDat.     dem    der   dem    denen\nGen.     dessen deren dessen deren\nDấu phẩy BẮT BUỘC trước và sau Relativsatz!",
examples:[
 {de:"Das Buch, <hl>das</hl> ich lese, ist interessant.",vi:"Cuốn sách tôi đọc rất thú vị.",note:"das Buch(neut.) + Akkusativ → das",good:true},
 {de:"Der Mann, <hl>dem</hl> ich geholfen habe, ist nett.",vi:"Người đàn ông tôi đã giúp rất tốt bụng.",note:"der Mann(mask.) + Dativ(helfen+Dat.) → dem",good:true},
 {de:"Die Frau, <hl>deren</hl> Tochter Ärztin ist, wohnt hier.",vi:"Người phụ nữ có con gái là bác sĩ sống ở đây.",note:"die Frau(fem.) + Genitiv → deren",good:true},
 {de:"<span class='hl-red'>Das Buch, der ich lese...</span>",vi:"Cuốn sách tôi đọc...",note:"❌ SAI: Buch=neutrum → DAS",good:false},
],
tips:["3 bước: Genus → cột; Kasus im RS → hàng; tra bảng","Sau Genitiv (dessen/deren): KEIN Artikel: 'dessen Auto' (kein: dessen DAS Auto)"],
dangers:["Dấu phẩy BẮT BUỘC!","FALSCH: 'Das Buch, den ich lese' → neut.Akk.=das"],
compare:[{a:"Relativpronomen (wie Artikel+Extras)",b:"Extra",c:"Dat.Pl.→denen | Gen.→dessen/deren"}]
},
fill:{s:"Das ist der Mann, ___ ich kenne. (mask.Akk.) Das ist die Frau, ___ Buch ich gelesen habe. (fem.Gen.)",ans:"den|deren",hint:"mask.Akk.→den | fem.Gen.→deren"},
quiz:[
 {q:"Das ist das Buch, ___ ich suche. (neut.Akk.)",opts:["der","den","das","dem"],c:2,ex:"Buch=neutrum, Akkusativ → DAS"},
 {q:"Der Mann, ___ ich gestern getroffen habe, ist Arzt. (mask.Akk.)",opts:["der","den","dem","des"],c:1,ex:"Mann=mask., Akkusativ → DEN"},
 {q:"Die Stadt, ___ er wohnt, ist schön. (nach 'in', Dativ)",opts:["die","in der","in dem","der"],c:1,ex:"in+Dativ → 'in DER Stadt'"},
 {q:"Die Kinder, ___ ich geholfen habe, sind dankbar. (Plural, Dativ)",opts:["die","denen","den","deren"],c:1,ex:"Plural+Dativ → DENEN"},
 {q:"Das ist der Student, ___ Noten sehr gut sind. (mask.Genitiv)",opts:["dessen","deren","des","dem"],c:0,ex:"mask.Genitiv → DESSEN"},
]},

{id:"b1_infinitivgruppen",lv:"B1",group:"Satzbau",title:"Infinitivgruppen mit zu",titleVi:"Cụm động từ nguyên mẫu với 'zu'",sub:"versuchen/vergessen zu + Infinitiv — cùng chủ ngữ",
theory:{
intro:"Infinitiv mit zu thay thế Nebensatz khi cùng chủ ngữ. Trennbare Verben: zu đứng giữa Vorsilbe và Stamm.",
formula:"[S] + Verb + zu + Infinitiv\nTrennbares Verb: Vorsilbe + zu + Stamm: auf|zu|machen\nKein zu nach: Modal, lassen, sehen, hören, helfen",
examples:[
 {de:"Ich versuche, jeden Tag Deutsch zu lernen.",vi:"Tôi cố gắng học tiếng Đức mỗi ngày.",note:"versuchen + zu + Infinitiv",good:true},
 {de:"Er hat vergessen, das Licht auszumachen.",vi:"Anh ấy quên tắt đèn.",note:"trennbar: aus|zu|machen",good:true},
 {de:"<span class='hl-red'>Ich muss zu kommen.</span>",vi:"Tôi phải đến.",note:"❌ SAI: Nach Modal KEIN zu: 'Ich muss kommen'",good:false},
],
tips:["Modal, lassen, sehen, hören + Infinitiv OHNE zu!","Trennbar: 'vergessen, an|zu|rufen'"],
dangers:["FALSCH: 'vergessen zu aufmachen' → 'vergessen AUFzumachen'"],
compare:[{a:"zu+Infinitiv (meiste Verben)",b:"ohne zu (Modal/lassen...)",c:"Ich VERSUCHE zu kommen | Ich MUSS kommen"}]
},
fill:{s:"Er hat vergessen, das Fenster ___ ___. (zumachen, trennbar) Es ist wichtig, viel Wasser ___ ___. (trinken)",ans:"zuzumachen|zu trinken",hint:"trennbar: zu zwischen Vorsilbe+Stamm | zu+Infinitiv"},
quiz:[
 {q:"Ich versuche, jeden Tag Sport ___ ___.",opts:["zu machen","machen","zu machend","machend"],c:0,ex:"versuchen + ZU + Infinitiv: ZU MACHEN"},
 {q:"Er hat vergessen, das Licht ___. (anmachen, trennbar)",opts:["zu anmachen","anzumachen","anmachen zu","zu machen an"],c:1,ex:"Trennbar: AN-ZU-MACHEN"},
 {q:"Es ist wichtig, regelmäßig ___ ___.",opts:["zu schlafen","schlafen","zu schlafend","schlafend"],c:0,ex:"es ist wichtig + ZU + Infinitiv: ZU SCHLAFEN"},
 {q:"Sie ___ auf, zu rauchen. (aufhören, trennbar)",opts:["hört/—","hört auf/zu","aufhört/zu","höret/zu"],c:1,ex:"aufhören trennbar: hört AUF + ZU rauchen"},
 {q:"Ich muss jetzt ___ gehen.",opts:["zu gehen","gehen","gehen zu","gehend"],c:1,ex:"Nach Modal KEIN zu: muss GEHEN"},
]},


{id:"b1_zweiteilig",lv:"B1",group:"Satzbau",title:"Zweiteilige Konjunktionen",titleVi:"Liên từ đôi",sub:"zwar...aber, entweder...oder, weder...noch, sowohl...als auch",
theory:{
intro:"Liên từ đôi kết nối 2 thành phần câu với sắc thái đặc biệt. Chúng giúp văn phong phong phú và tự nhiên hơn.",
formula:"zwar...aber: tuy...nhưng (nhượng bộ nhẹ)\nentweder...oder: hoặc...hoặc (lựa chọn)\nweder...noch: không...cũng không (phủ định đôi)\nsowohl...als auch: vừa...vừa (cộng gộp)\nnicht nur...sondern auch: không chỉ...mà còn",
examples:[
 {de:"Das Restaurant ist <hl>zwar</hl> teuer, <hl>aber</hl> das Essen ist ausgezeichnet.",vi:"Nhà hàng tuy đắt nhưng đồ ăn xuất sắc.",note:"zwar...aber = tuy...nhưng. zwar im HS, aber koordinierend",good:true},
 {de:"<hl>Entweder</hl> kommst du mit, <hl>oder</hl> ich gehe allein.",vi:"Hoặc bạn đi cùng hoặc tôi đi một mình.",note:"entweder...oder = hoặc...hoặc (V2 nach entweder!)",good:true},
 {de:"Er spricht <hl>weder</hl> Englisch <hl>noch</hl> Französisch.",vi:"Anh ấy không nói được tiếng Anh cũng không nói được tiếng Pháp.",note:"weder...noch = không...cũng không (phủ định đôi)",good:true},
 {de:"Sie ist <hl>sowohl</hl> intelligent <hl>als auch</hl> fleißig.",vi:"Cô ấy vừa thông minh vừa chăm chỉ.",note:"sowohl...als auch = vừa...vừa (tích cực)",good:true},
 {de:"Er ist <hl>nicht nur</hl> Arzt, <hl>sondern auch</hl> Musiker.",vi:"Anh ấy không chỉ là bác sĩ mà còn là nhạc sĩ.",note:"nicht nur...sondern auch = không chỉ...mà còn",good:true},
],
tips:["zwar...aber: zwar bổ sung thông tin đối lập nhẹ. 'Das Buch ist ZWAR lang, ABER es lohnt sich'","entweder ở đầu câu → V2: 'ENTWEDER kommst du, ODER ich...' (V trực tiếp sau entweder)"],
dangers:["FALSCH: 'weder...oder' → RICHTIG: 'weder...NOCH'","FALSCH: 'sowohl...wie auch' → RICHTIG: 'sowohl...ALS auch'"],
compare:[{a:"entweder...oder (lựa chọn một trong hai)",b:"sowohl...als auch (cả hai)",c:"ENTWEDER Kaffee ODER Tee | SOWOHL Kaffee ALS AUCH Tee"}]
},
fill:{s:"Das Buch ist ___ lang, ___ es lohnt sich. Er spricht ___ Spanisch ___ Portugiesisch.",ans:"zwar|aber|sowohl|als auch",hint:"tuy...nhưng→zwar...aber | vừa...vừa→sowohl...als auch"},
quiz:[
 {q:"___ ich Zeit habe, ___ komme ich mit. (entweder...oder Variante mit zwar? Nein → wenn...dann? Nein → zwar...aber!)",opts:["Zwar/aber","Entweder/oder","Weder/noch","Sowohl/als auch"],c:0,ex:"'Zwar habe ich Zeit, ABER ich komme nicht mit' = tuy có thời gian nhưng không đến"},
 {q:"Er mag ___ Katzen ___ Hunde.",opts:["sowohl/als auch","entweder/oder","weder/noch","nicht nur/sondern"],c:2,ex:"Không thứ nào cả → WEDER...NOCH"},
 {q:"___ kommst du morgen, ___ ich gehe ohne dich.",opts:["Zwar/aber","Entweder/oder","Weder/noch","Sowohl/als auch"],c:1,ex:"Lựa chọn → ENTWEDER...ODER"},
 {q:"Sie ist ___ schön ___ intelligent.",opts:["weder/noch","entweder/oder","sowohl/als auch","zwar/aber"],c:2,ex:"Vừa...vừa → SOWOHL...ALS AUCH"},
 {q:"Das Essen ist ___ teuer, ___ nicht besonders gut.",opts:["entweder/oder","zwar/aber","sowohl/als auch","weder/noch"],c:1,ex:"Tuy đắt nhưng không ngon → ZWAR...ABER"},
]},

{id:"b1_genitiv_praep",lv:"B1",group:"Präpositionen",title:"Präpositionen mit Genitiv",titleVi:"Giới từ đi với Genitiv",sub:"wegen, trotz, während, statt/anstatt, aufgrund, innerhalb, außerhalb",
theory:{
intro:"Một số giới từ quan trọng luôn đi với Genitiv — phổ biến trong văn viết trang trọng và báo chí. Trong văn nói, nhiều người dùng Dativ thay, nhưng trong thi cử Goethe B1+ phải biết Genitiv.",
formula:"wegen + Gen.: vì, do (nguyên nhân)\ntrotz + Gen.: mặc dù (nhượng bộ)\nwährend + Gen.: trong khi, trong lúc\nstatt/anstatt + Gen.: thay vì\naufgrund + Gen.: do, vì (trang trọng hơn wegen)\ninnerhalb + Gen.: trong vòng (thời gian/không gian)\naußerhalb + Gen.: ngoài, bên ngoài",
examples:[
 {de:"<hl>Wegen</hl> des schlechten Wetters blieben wir zuhause.",vi:"Vì thời tiết xấu chúng tôi ở nhà.",note:"wegen + Gen.: des Wetters (neut.Gen.+s)",good:true},
 {de:"<hl>Trotz</hl> des Regens gingen wir spazieren.",vi:"Mặc dù mưa chúng tôi vẫn đi dạo.",note:"trotz + Gen.: des Regens",good:true},
 {de:"<hl>Während</hl> des Unterrichts soll man nicht schlafen.",vi:"Trong giờ học không nên ngủ.",note:"während + Gen.: des Unterrichts",good:true},
 {de:"<hl>Statt</hl> eines Autos kaufte er ein Fahrrad.",vi:"Thay vì mua xe hơi anh ấy mua xe đạp.",note:"statt + Gen.: eines Autos (neut.Gen.indef.)",good:true},
 {de:"<hl>Aufgrund</hl> der schlechten Noten musste er die Klasse wiederholen.",vi:"Do kết quả học tập kém anh ấy phải học lại.",note:"aufgrund + Gen. (trang trọng hơn wegen)",good:true},
],
tips:["wegen trong văn nói hay dùng Dativ: 'wegen dem Wetter' (Umgangssprache). Trong thi viết → Genitiv!","während = Präp.+Gen. (trong lúc). Cũng là Konjunktion: 'Während er schläft, arbeite ich' (NS)"],
dangers:["FALSCH: 'trotz dem Regen' (Dativ) → trong thi: 'trotz DES Regens' (Genitiv)"],
compare:[{a:"wegen (nguyên nhân)",b:"trotz (nhượng bộ)",c:"WEGEN des Regens blieben wir (vì mưa) | TROTZ des Regens gingen wir (mặc dù mưa)"}]
},
fill:{s:"___ der Krankheit konnte er nicht teilnehmen. ___ des Studiums arbeitete sie nebenbei.",ans:"Wegen|Während",hint:"nguyên nhân→wegen | trong lúc→während"},
quiz:[
 {q:"___ des Lärms konnte ich nicht schlafen. (vì, Genitiv)",opts:["Trotz","Wegen","Während","Statt"],c:1,ex:"Nguyên nhân → WEGEN + Genitiv: Wegen des Lärms"},
 {q:"___ des Regens machten wir einen Spaziergang. (mặc dù)",opts:["Wegen","Während","Trotz","Statt"],c:2,ex:"Nhượng bộ → TROTZ + Genitiv"},
 {q:"___ eines Autos nimmt er immer die U-Bahn. (thay vì)",opts:["Wegen","Trotz","Während","Statt"],c:3,ex:"Thay vì → STATT + Genitiv: Statt eines Autos"},
 {q:"___ der Ferien fährt er ans Meer. (trong lúc)",opts:["Statt","Wegen","Trotz","Während"],c:3,ex:"Trong lúc → WÄHREND + Genitiv: Während der Ferien"},
 {q:"___ seiner Bemühungen bekam er die Stelle nicht. (mặc dù nỗ lực)",opts:["Wegen","Aufgrund","Trotz","Während"],c:2,ex:"Mặc dù nỗ lực → TROTZ seiner Bemühungen"},
]},
], // Ende B1

// ══════════════════════════════════════════════════════
// B2 — 12 CHỦ ĐỀ
// ══════════════════════════════════════════════════════
B2: [
{id:"b2_relativsatz_adv",lv:"B2",group:"Satzbau",title:"Relativsatz mit Präposition & wo",titleVi:"Mệnh đề quan hệ với giới từ và wo",sub:"in dem → in dem / wodurch / worüber",
theory:{
intro:"Khi Relativpronomen đi kèm giới từ, có thể dùng Präp.+Relativpronomen hoặc (với đồ vật/khái niệm) Pronominaladverb (wo(r)+Präp.). Với người: LUÔN Präp.+Relativpronomen.",
formula:"Person: Präp. + Relativpronomen\n  der Mann, mit DEM ich gesprochen habe\nSache/Idee: wo(r) + Präp. (r trước Vokal)\n  das Thema, worüber wir gesprochen haben\n  das Haus, in dem/worin er wohnt\nwo-Relativsatz: bezieht sich auf ganzen Satz\n  Er kam zu spät, worüber ich mich ärgerte.",
examples:[
 {de:"Der Freund, <hl>mit dem</hl> ich studiert habe, ist jetzt Arzt.",vi:"Người bạn tôi đã học cùng giờ là bác sĩ.",note:"Person+mit → mit DEM (mask.Dat.)",good:true},
 {de:"Das Buch, <hl>worüber</hl> wir gesprochen haben, ist vergriffen.",vi:"Cuốn sách chúng ta đã nói đến đã hết hàng.",note:"Sache+über → worüber (wo+r+über, r vì über bắt đầu bằng Vokal)",good:true},
 {de:"Das ist das Café, <hl>in dem</hl>/<hl>worin</hl> wir uns kennen gelernt haben.",vi:"Đây là quán cà phê nơi chúng ta quen nhau.",note:"Ort: in dem oder worin (cả 2 đều đúng)",good:true},
 {de:"Er hat gelogen, <hl>worüber</hl> ich sehr verärgert bin.",vi:"Anh ấy đã nói dối, điều mà tôi rất tức giận.",note:"worüber bezieht sich auf ganze Aussage (nicht auf Nomen)",good:true},
],
tips:["Wo(r)+Präp. chỉ cho đồ vật/khái niệm, KHÔNG cho người: 'der Mann, über DEN (nicht: worüber) wir gesprochen haben'","r einfügen wenn Präp. mit Vokal beginnt: worüber, worauf, woran, womit (aber: wodurch, wofür = kein r)"],
dangers:["FALSCH: 'der Mann, womit ich gesprochen habe' → Person → 'mit DEM ich gesprochen habe'"],
compare:[{a:"Person: Präp. + Relativpron.",b:"Sache: wo(r)+Präp.",c:"der Mann, MIT DEM | das Thema, WORÜBER"}]
},
fill:{s:"Das ist das Projekt, ___ ich wochenlang gearbeitet habe. (an, Sache)",ans:"woran",hint:"Sache+an → woran (wo+r+an, r weil an=Konsonant? Nein: an mit 'a'=Vokal→woran)"},
quiz:[
 {q:"Der Kollege, ___ ich täglich arbeite, ist sehr nett. (mit, Person)",opts:["womit","mit dem","mit den","womit dem"],c:1,ex:"Person+mit → MIT DEM (mask.Dat.)"},
 {q:"Das ist das Thema, ___ wir diskutiert haben. (über, Sache)",opts:["über das","worüber","über dem","worum"],c:1,ex:"Sache+über → WORÜBER (wo+r+über)"},
 {q:"Das Haus, ___ er aufgewachsen ist, wurde abgerissen. (in, Ort)",opts:["in das","worin","in dem","woran"],c:2,ex:"Ort+in+Dat → IN DEM oder WORIN (beide korrekt)"},
 {q:"Er hat die Prüfung bestanden, ___ alle erleichtert waren. (über, Aussage)",opts:["über das","worüber","wofür","weswegen"],c:1,ex:"Aussage+über → WORÜBER (worüber alle erleichtert waren)"},
 {q:"Der Freund, ___ ich dieses Buch empfohlen habe, hat es gelesen. (Dativ, Person)",opts:["dem","wem","dessen","den"],c:0,ex:"Person+Dativ (empfehlen+Dat.) → DEM"},
]},

{id:"b2_konjunktiv1",lv:"B2",group:"Verben & Konjugation",title:"Konjunktiv I",titleVi:"Giả định cách I — tường thuật gián tiếp",sub:"Er sagt, er KOMME / Er sagte, er KÄME",
theory:{
intro:"Konjunktiv I dùng trong <strong>indirekte Rede</strong> (tường thuật — báo cáo lại lời ai đó). Phổ biến trong báo chí và ngôn ngữ trang trọng. KI ngôi er/sie/es: bỏ -t so với Indikativ.",
formula:"KI Bildung: Infinitivstamm + KI-Endung\n(-e/-est/-e/-en/-et/-en)\ner/sie/es-Form: immer ohne -t!\n  kommen: er komme (Ind.: er kommt)\n  sein: er sei (Ausnahme!)\n  haben: er habe\nWenn KI = Indikativ → KII verwenden:\n  'sie kommen' (KI=Ind.) → 'sie kämen' (KII)\nMündlich: oft Konjunktiv II oder 'dass'+Ind.",
examples:[
 {de:"Er sagt, er <hl>komme</hl> morgen.",vi:"Anh ấy nói anh ấy sẽ đến ngày mai.",note:"KI: kommen → er komme (kein -t!)",good:true},
 {de:"Die Zeitung berichtet, der Präsident <hl>sei</hl> krank.",vi:"Báo đưa tin tổng thống bị ốm.",note:"sein → er sei (đặc biệt, không phải 'ist')",good:true},
 {de:"Er sagte, er <hl>habe</hl> keine Zeit.",vi:"Anh ấy nói anh ấy không có thời gian.",note:"haben → er habe (KI, không phải 'hat')",good:true},
 {de:"Die Forscher behaupten, das Experiment <hl>sei</hl> erfolgreich <hl>gewesen</hl>.",vi:"Các nhà nghiên cứu khẳng định thí nghiệm đã thành công.",note:"KI Perfekt: sei + Partizip II (sein-Verb)",good:true},
 {de:"<span class='hl-red'>Er sagt, er ist krank.</span>",vi:"Anh ấy nói anh ấy ốm.",note:"⚠️ Không sai nhưng không phải indirekte Rede trang trọng → KI: 'er sei krank'",good:false},
],
tips:["KI trong báo chí: Der Minister erklärte, die Situation SEI unter Kontrolle. (sei = KI von sein)","Khi KI = Indikativ (Pl.): sie kommen → dùng KII: sie KÄMEN (tránh nhầm lẫn)"],
dangers:["KI ≠ KII: er komme (KI) | er käme (KII). Báo chí dùng KI, điều kiện giả định dùng KII"],
compare:[{a:"Konjunktiv I (indirekte Rede)",b:"Konjunktiv II (Bedingung/Höflichkeit)",c:"Er sage, er KOMME (KI berichtet) | Er KÄME, wenn... (KII: Bedingung)"}]
},
fill:{s:"Die Politikerin erklärte, sie ___ keine Steuern erhöhen. (wollen, KI)",ans:"wolle",hint:"KI wollen: er/sie → wolle (kein -t, kein Umlaut)"},
quiz:[
 {q:"KI von 'sein', er/sie/es:",opts:["ist","wäre","sei","seien"],c:2,ex:"sein KI: ich sei, du seiest, er SEI — bất quy tắc!"},
 {q:"Er sagt, er ___ das Buch gelesen. (haben, KI Perfekt)",opts:["hat","hatte","habe","hätte"],c:2,ex:"KI Perfekt: er HABE gelesen (haben→habe)"},
 {q:"Die Zeitung schreibt, der Plan ___ gescheitert. (sein, KI Perfekt)",opts:["ist","war","sei","wäre"],c:2,ex:"sein KI: er SEI gescheitert"},
 {q:"KI von 'kommen', er:",opts:["kommt","käme","komme","kommen"],c:2,ex:"kommen KI: er KOMME (Stamm+e, kein -t)"},
 {q:"Wenn KI = Indikativ (z.B. sie kommen), dann:",opts:["Indikativ verwenden","KII verwenden","Infinitiv verwenden","gar nichts"],c:1,ex:"Wenn KI nicht von Indikativ unterscheidbar → KII: sie KÄMEN"},
]},

{id:"b2_nominalisierung",lv:"B2",group:"Satzbau",title:"Nominalisierung",titleVi:"Danh từ hóa động từ/tính từ",sub:"das Lernen, das Schreiben, die Schönheit — văn trang trọng",
theory:{
intro:"Nominalisierung (danh từ hóa) biến động từ hoặc tính từ thành danh từ. Phổ biến trong văn học thuật và báo chí. Danh từ hóa từ động từ: thường là das + Infinitiv (neutrum). Từ tính từ: nhiều đuôi khác nhau (-heit, -keit, -schaft, -ung...).",
formula:"Verb → das + Infinitiv (neutral, großgeschrieben)\n  lernen → das Lernen | schreiben → das Schreiben\nVerb → die ___ung (nhiều động từ)\n  untersuchen → die Untersuchung\n  lösen → die Lösung\nAdj. → die ___heit/-keit/-schaft\n  gesund → die Gesundheit\n  möglich → die Möglichkeit\nNominalisierter Satz vs Nebensatz:\n  Statt: 'Er freut sich, dass er gewonnen hat'\n  → Er freut sich über seinen Gewinn. (trang trọng hơn)",
examples:[
 {de:"<hl>Das Lernen</hl> einer Fremdsprache ist eine Herausforderung.",vi:"Việc học một ngoại ngữ là một thách thức.",note:"lernen → das Lernen (neutrum, Großschreibung!)",good:true},
 {de:"Trotz <hl>seiner Bemühungen</hl> scheiterte er.",vi:"Mặc dù nỗ lực anh ấy vẫn thất bại.",note:"sich bemühen → die Bemühung → trotz+Gen.: seiner Bemühungen",good:true},
 {de:"Die <hl>Möglichkeit</hl>, im Ausland zu studieren, interessiert sie.",vi:"Khả năng học ở nước ngoài thu hút cô ấy.",note:"möglich → die Möglichkeit (adj.+-keit)",good:true},
 {de:"Aufgrund <hl>der Verschlechterung</hl> der Situation...",vi:"Do tình hình xấu đi...",note:"sich verschlechtern → die Verschlechterung (+ -ung)",good:true},
],
tips:["das Lernen, das Schreiben... = IMMER neutrum, IMMER Großschreibung","Übersetzung: 'das Lernen' = 'việc học' (gerund tiếng Việt)"],
dangers:["FALSCH: 'das lernen' → RICHTIG: 'das Lernen' (Substantiv → Großbuchstabe!)"],
compare:[{a:"Nebensatz (văn nói)",b:"Nominalisierung (văn viết/trang trọng)",c:"Er freut sich, DASS er kommt | Er freut sich über SEIN KOMMEN"}]
},
fill:{s:"___ ___ Fremdsprachen ist sehr wertvoll. (lernen → das Lernen) Die ___ des Problems dauerte lange. (lösen → ___ung)",ans:"Das Lernen|Lösung",hint:"Verb+das→Das Lernen (neutrum) | lösen+ung→Lösung"},
quiz:[
 {q:"Nominalisierung von 'untersuchen':",opts:["die Untersuchung","das Untersuchen","die Untersuchheit","der Untersucher"],c:0,ex:"untersuchen → die UNTERSUCHung (-ung Nominalisierung)"},
 {q:"___ Sport ist gesund. (treiben, Nominalisierung)",opts:["Das Treiben","Der Sport Treiben","Zu treiben","Treiben"],c:0,ex:"Verb als Substantiv: DAS TREIBEN (neutrum)"},
 {q:"Nominalisierung von 'gesund' (Adjektiv):",opts:["die Gesundheit","das Gesunde","die Gesundschaft","die Gesundung"],c:0,ex:"gesund → die GESUNDheit (-heit für Adjektive)"},
 {q:"Statt 'Er war glücklich, dass er gewann': Er freute sich über ___.",opts:["seinen Gewinn","das Gewinnen","seinen Gewinnens","der Gewinn"],c:0,ex:"gewinnen → der Gewinn (Nominalisierung). Über+Akk.: seinen GEWINN"},
 {q:"Nominalisierung von 'möglich':",opts:["die Mögligkeit","die Möglichkeit","das Mögliche","die Möglichschaft"],c:1,ex:"möglich → die MÖGLICHkeit (-keit für Adjektive auf -lich)"},
]},

{id:"b2_konzessiv_adv",lv:"B2",group:"Satzbau",title:"Konzessivkonstruktionen erweitert",titleVi:"Cấu trúc nhượng bộ nâng cao",sub:"trotz, obwohl, auch wenn, wenngleich, gleichwohl",
theory:{
intro:"B2 yêu cầu thành thạo nhiều cách diễn đạt nhượng bộ khác nhau để văn phong phong phú. Từ obwohl đơn giản đến wenngleich trang trọng.",
formula:"obwohl + NS (phổ biến, tất cả cấp)\ntrotz + Genitiv (giới từ, trang trọng)\ntrotzdem (Adverb, 2 câu riêng)\nauch wenn + NS (dù cho dù)\nwenngleich + NS (trang trọng, = obwohl)\ngleichwohl (Adverb = trotzdem, rất trang trọng)\nungeachtet + Genitiv (rất trang trọng = trotz)",
examples:[
 {de:"<hl>Auch wenn</hl> es schwierig ist, gebe ich nicht auf.",vi:"Dù khó đến đâu tôi cũng không bỏ cuộc.",note:"auch wenn = dù... cũng... (mạnh hơn obwohl về sự kiên định)",good:true},
 {de:"<hl>Wenngleich</hl> die Ergebnisse positiv sind, brauchen wir mehr Daten.",vi:"Mặc dù kết quả tích cực nhưng chúng ta cần thêm dữ liệu.",note:"wenngleich = obwohl (trang trọng, văn học thuật)",good:true},
 {de:"Er scheiterte, <hl>obgleich</hl> er alles versucht hatte.",vi:"Anh ấy thất bại mặc dù đã cố gắng hết sức.",note:"obgleich = obwohl (cổ hơn, văn viết)",good:true},
 {de:"<hl>Ungeachtet</hl> der Kritik setzte er sein Projekt fort.",vi:"Bất chấp những chỉ trích anh ấy tiếp tục dự án.",note:"ungeachtet + Genitiv (rất trang trọng = trotz)",good:true},
],
tips:["Cấp độ trang trọng (tăng dần): obwohl → trotz → wenngleich → obgleich → gleichwohl → ungeachtet","auch wenn mạnh hơn obwohl về ý chí: 'AUCH WENN es regnet, gehe ich' (dù mưa to đến đâu)"],
dangers:["wenngleich/obgleich + NS (V cuối!) — giống obwohl, không phải Adverb"],
compare:[{a:"obwohl/auch wenn (NS, V cuối)",b:"trotzdem/gleichwohl (Adverb, V2)",c:"OBWOHL er krank IST | Trotzdem KOMMT er"}]
},
fill:{s:"___ seiner mangelnden Erfahrung bekam er den Job. Er ist arm. ___ ist er glücklich.",ans:"Trotz|Gleichwohl",hint:"Genitiv→trotz | Adverb trang trọng→gleichwohl"},
quiz:[
 {q:"___ das Wetter schlecht ist, machen wir den Ausflug. (dù thế nào cũng đi)",opts:["Trotzdem","Auch wenn","Gleichwohl","Trotz"],c:1,ex:"Dù... cũng → AUCH WENN + NS"},
 {q:"___ aller Widerstände setzte sie ihr Vorhaben durch. (trang trọng, Gen.)",opts:["Obwohl","Trotzdem","Trotz","Wenngleich"],c:2,ex:"Genitiv + trang trọng → TROTZ aller Widerstände"},
 {q:"Die Studie ist wichtig, ___ sie methodische Schwächen hat. (wenngleich)",opts:["trotzdem","wenngleich","gleichwohl","obgleich"],c:1,ex:"NS + trang trọng = obwohl → WENNGLEICH"},
 {q:"___ die Kosten hoch sind, lohnt sich die Investition.",opts:["Obwohl","Trotzdem","Gleichwohl","Ungeachtet"],c:0,ex:"NS (V cuối) → OBWOHL (am häufigsten)"},
 {q:"___ er krank war, kam er zur Arbeit. (trang trọng hơn obwohl)",opts:["Trotzdem","Trotz","Obgleich","Wenngleich"],c:2,ex:"Obwohl trang trọng hơn → OBGLEICH + NS"},
]},

{id:"b2_funktionsverb",lv:"B2",group:"Verben & Konjugation",title:"Funktionsverbgefüge",titleVi:"Cụm động từ chức năng",sub:"in Frage stellen, zur Verfügung stehen — văn viết trang trọng",
theory:{
intro:"Funktionsverbgefüge (FVG) là cụm Verb+Nomen cố định thay thế động từ đơn. Phổ biến trong văn hành chính, kinh doanh, học thuật. Verb trong FVG (bringen, stellen, kommen, nehmen, stehen, geraten...) gần như mất nghĩa gốc.",
formula:"Struktur: Funktionsverb + (Präp.) + Nomen\nHäufige Funktionsverben:\n  bringen: zum Ausdruck bringen (diễn đạt)\n  stellen: in Frage stellen (đặt câu hỏi về), zur Verfügung stellen (cung cấp)\n  kommen: zu einem Ergebnis kommen (đạt kết quả), in Kontakt kommen\n  nehmen: Bezug nehmen auf (đề cập đến), Rücksicht nehmen auf\n  stehen: zur Verfügung stehen (sẵn sàng), in Verbindung stehen\n  geraten: in Schwierigkeiten geraten (gặp khó khăn)",
examples:[
 {de:"Er <hl>stellte</hl> das Ergebnis <hl>in Frage</hl>.",vi:"Anh ấy đặt câu hỏi về kết quả đó.",note:"in Frage stellen = in Zweifel ziehen (đặt nghi vấn)",good:true},
 {de:"Die Unterlagen stehen Ihnen <hl>zur Verfügung</hl>.",vi:"Tài liệu sẵn sàng để bạn dùng.",note:"zur Verfügung stehen = được cung cấp/sẵn sàng",good:true},
 {de:"Wir sind zu keinem <hl>Ergebnis gekommen</hl>.",vi:"Chúng tôi không đạt được kết quả nào.",note:"zu einem Ergebnis kommen = đạt kết quả",good:true},
 {de:"Er <hl>nahm Bezug</hl> auf den vorherigen Bericht.",vi:"Anh ấy đề cập đến báo cáo trước.",note:"Bezug nehmen auf = đề cập, liên quan đến",good:true},
],
tips:["FVG không thể dịch từng từ: 'in Frage stellen' ≠ 'stellen in Frage' (sai trật tự khi không tách!)","Trong bài thi B2/C1: thay 'erklären' bằng 'eine Erklärung abgeben' để văn phong trang trọng hơn"],
dangers:["FVG trennbar khi là trennbares Verb: 'Er STELLT das in Frage' (stellen là trennbar → stellt...in Frage)"],
compare:[{a:"Einfaches Verb (văn nói)",b:"Funktionsverbgefüge (văn trang trọng)",c:"fragen → IN FRAGE stellen | helfen → HILFE leisten | beginnen → BEGINN machen"}]
},
fill:{s:"Die Firma ___ alle Informationen ___ Verfügung. (stellen+zur)",ans:"stellt|zur",hint:"zur Verfügung stellen → stellt(V2)...zur Verfügung(cuối/getrennt)"},
quiz:[
 {q:"Er ___ seine Meinung klar ___ ___ ___ . (zum Ausdruck bringen)",opts:["bringt/zum Ausdruck","gibt/zum Ausdruck","stellt/zum Ausdruck","kommt/zum Ausdruck"],c:0,ex:"zum Ausdruck BRINGEN → er BRINGT ... zum Ausdruck"},
 {q:"___ Sie eine Verbindung ___ ___ Sekretariat ___. (in Verbindung setzen)",opts:["Setzen Sie/mit dem/—","Verbinden Sie/mit dem/—","Stellen Sie/in/—","Kommen Sie/zu dem/—"],c:0,ex:"in Verbindung setzen → SETZEN Sie sich mit dem Sekretariat in Verbindung"},
 {q:"Das Projekt ___ in ernste Schwierigkeiten ___. (geraten)",opts:["kommt/—","gerät/—","stellt/—","bringt/—"],c:1,ex:"in Schwierigkeiten GERATEN → GERÄT in Schwierigkeiten"},
 {q:"Die Studie ___ ___ Frage, ob... (in Frage stellen)",opts:["stellt/in","nimmt/in","bringt/in","setzt/in"],c:0,ex:"in Frage STELLEN → STELLT in Frage"},
 {q:"Er ___ keinen ___ auf ihre Bitte. (Rücksicht nehmen auf)",opts:["nahm/Rücksicht","zog/Rücksicht","leistete/Rücksicht","brachte/Rücksicht"],c:0,ex:"Rücksicht NEHMEN → er NAHM keine Rücksicht auf..."},
]},

{id:"b2_passiv_erweitert",lv:"B2",group:"Verben & Konjugation",title:"Passiv — erweiterte Formen",titleVi:"Bị động nâng cao — tất cả các dạng",sub:"Passiv mit Modal, Zustandspassiv, Passiversatz",
theory:{
intro:"B2 yêu cầu thành thạo tất cả dạng Passiv và biết cách thay thế Passiv bằng các cấu trúc tương đương.",
formula:"Modal+Passiv: Modal + Partizip II + werden (cuối)\nPassiv Konjunktiv II: würde + Partizip II + werden\nZustandspassiv: sein + Partizip II (= Ergebnis)\nPassiversatz (thay Passiv):\n  man + Aktiv: Man baut das Haus.\n  sein + zu + Infinitiv: Das Haus ist zu bauen.\n  lassen + sich + Infinitiv: Das lässt sich machen.\n  Adj. auf -bar/-lich: Das ist machbar/löslich.",
examples:[
 {de:"Das Problem <hl>muss gelöst werden</hl>.",vi:"Vấn đề phải được giải quyết.",note:"Modal+Passiv: muss + Partizip II + werden",good:true},
 {de:"Das wäre noch zu <hl>überprüfen</hl>.",vi:"Điều đó vẫn cần được kiểm tra.",note:"sein + zu + Infinitiv = Notwendigkeit/Möglichkeit",good:true},
 {de:"Das <hl>lässt sich</hl> nicht so einfach <hl>lösen</hl>.",vi:"Điều đó không dễ giải quyết như vậy.",note:"lassen + sich + Infinitiv = Möglichkeit (Passiversatz)",good:true},
 {de:"Dieses Problem ist <hl>lösbar</hl>.",vi:"Vấn đề này có thể giải quyết được.",note:"Adjektiv auf -bar = Möglichkeit (Passiversatz)",good:true},
 {de:"<hl>Die Tür ist geschlossen</hl>.",vi:"Cửa đã đóng.",note:"Zustandspassiv: sein + Partizip II = Ergebnis/Zustand",good:true},
],
tips:["sein + zu + Inf. = Notwendigkeit ODER Möglichkeit: 'Das ist zu lösen' = Das muss/kann gelöst werden","lassen + sich + Inf. = Möglichkeit (oft mit 'nicht'): 'Das lässt sich nicht beweisen'"],
dangers:["Zustandspassiv (ist+P.II) ≠ Perfekt Aktiv (ist+P.II+sein-Verb): 'Die Tür IST geöffnet' (Zustand) vs 'Sie IST gegangen' (Perfekt)"],
compare:[{a:"Vorgangspassiv (Prozess: wird)",b:"Zustandspassiv (Ergebnis: ist)",c:"Die Tür WIRD geöffnet (jetzt gerade) | Die Tür IST geöffnet (schon offen)"}]
},
fill:{s:"Diese Aufgabe ___ ___ bis Freitag ___ ___. (müssen, erledigen, Passiv+Modal) Das ___ ___ nicht mehr ___. (lassen, sich, ändern)",ans:"muss|erledigt werden|lässt|sich|ändern",hint:"Modal+Passiv: muss+erledigt+werden | lassen+sich+Inf: lässt sich ändern"},
quiz:[
 {q:"Das Dokument ___ bis morgen ___ ___. (sollen, unterschreiben, Passiv+Modal)",opts:["soll unterschrieben werden","wird unterschrieben","soll werden unterschrieben","wird unterschreiben"],c:0,ex:"Modal+Passiv: SOLL + unterschrieben + WERDEN"},
 {q:"Das Problem ___ ___ leicht lösen. (lassen, sich = Möglichkeit)",opts:["lässt sich","wird sich","ist sich","kann sich"],c:0,ex:"Möglichkeit als Passiversatz → LÄSST SICH lösen"},
 {q:"Ist die Aufgabe ___ ? (lösbar — Adj. Passiversatz)",opts:["löslich","lösbar","gelöst","zu lösen"],c:1,ex:"Adjektiv auf -bar = Möglichkeit: LÖSBAR"},
 {q:"___ ist offen. (Zustandspassiv: öffnen)",opts:["Es wird geöffnet","Es ist geöffnet","Es hat geöffnet","Es wurde geöffnet"],c:1,ex:"Zustandspassiv = IST + Partizip II: IST geöffnet"},
 {q:"Die Fehler ___ im Text ___ ___. (müssen, korrigieren, Passiv+Modal Präteritum)",opts:["mussten korrigiert werden","wurden korrigiert müssen","mussten werden korrigiert","korrigiert werden mussten"],c:0,ex:"Passiv+Modal Prät.: MUSSTEN + korrigiert + WERDEN"},
]},
], // Ende B2

// ══════════════════════════════════════════════════════
// C1 — 10 CHỦ ĐỀ
// ══════════════════════════════════════════════════════
C1: [
{id:"c1_partizip1",lv:"C1",group:"Verben & Konjugation",title:"Partizip I als Adjektiv",titleVi:"Phân từ I làm tính từ",sub:"schlafend, lachend — đồng thời, chủ động",
theory:{
intro:"Partizip I (-end) dùng như tính từ để mô tả hành động <em>đồng thời</em> và <em>chủ động</em> của danh từ. Cần thêm đuôi tính từ theo Genus/Kasus/Artikel giống tính từ thường.",
formula:"Bildung: Infinitiv + d: lachen → lachend\nAls Adjektiv: Adj.Endung nach Genus/Kasus/Artikel\nder lachende Mann (mask.Nom.def.→-e)\nein weinendes Kind (neut.Nom.indef.→-es)\nPartizip I ≠ Partizip II:\n  P.I: gleichzeitig + aktiv: der SCHLAFENDE Hund\n  P.II: vorzeitig + passiv: der GEBISSENE Mann\nErweiterte Partizipialgruppe: [Adv./PP] + Partizip I + Nomen\n  der seit Jahren hier lebende Ausländer",
examples:[
 {de:"Der <hl>schlafende</hl> Hund liegt auf dem Boden.",vi:"Con chó đang ngủ nằm trên sàn.",note:"schlafen+d → schlafend. mask.Nom.def.→-e: der schlafende",good:true},
 {de:"Die <hl>weinende</hl> Frau saß allein.",vi:"Người phụ nữ đang khóc ngồi một mình.",note:"weinen+d → weinend. fem.Nom.def.→-e",good:true},
 {de:"Ein <hl>lachendes</hl> Kind macht uns glücklich.",vi:"Một đứa trẻ đang cười khiến chúng ta vui.",note:"lachen+d → lachend. neut.Nom.indef.→-es",good:true},
 {de:"Die <hl>steigende</hl> Inflation besorgt alle.",vi:"Lạm phát đang tăng làm tất cả lo lắng.",note:"P.I als Adjektiv im nominalen Stil (báo chí)",good:true},
 {de:"Der seit Jahren hier <hl>lebende</hl> Ausländer...",vi:"Người nước ngoài sống ở đây nhiều năm...",note:"Erweiterte Partizipialgruppe: [seit Jahren hier] + lebende + Nomen",good:true},
],
tips:["P.I Test: Cùng thời điểm + chủ động? → P.I (-end). Trước đó + bị động? → P.II"],
dangers:["FALSCH: 'die lachendE Kinder' → Plural: die lachendEN Kinder (-en)"],
compare:[{a:"P.I (-end): gleichzeitig + aktiv",b:"P.II: vorzeitig/passiv",c:"der SCHLAFENDE Hund (đang ngủ) | der GEBISSENE Mann (đã bị cắn)"}]
},
fill:{s:"Die ___ Preise machen den Einkauf teuer. (steigen, P.I, Pl.Nom.def.) Ein ___ Kind weint selten. (lachen, P.I, neut.Nom.indef.)",ans:"steigenden|lachendes",hint:"Pl.Nom.def.→-en | neut.Nom.indef.→-es"},
quiz:[
 {q:"P.I von 'schreien', mask.Nom.def.: der ___ Mann",opts:["schreiender","schreienden","schreiende","schreiendes"],c:2,ex:"schreien+d → schreiend. mask.Nom.def.→-e: der schreiendE Mann"},
 {q:"P.I von 'wachsen', Pl.Nom.: die ___ Probleme",opts:["wachsende","wachsenden","wachsendes","wachsender"],c:1,ex:"Plural Nom. def. → -en: die wachsendEN Probleme"},
 {q:"Ein ___ Hund ist harmlos. (schlafen, P.I neut.Nom.indef.)",opts:["schlafende","schlafender","schlafendes","schlafenden"],c:2,ex:"neut.Nom.indef. → -es: ein schlafendES... Warten: Hund=maskulin! → ein schlafendER Hund"},
 {q:"Die ___ Wirtschaft braucht neue Impulse. (schrumpfen, P.I, fem.Nom.def.)",opts:["schrumpfende","schrumpfenden","schrumpfendes","schrumpfender"],c:0,ex:"fem.Nom.def. → -e: die schrumpfendE Wirtschaft"},
 {q:"P.I Test: 'der gefundene Schlüssel' = ?",opts:["P.I, aktiv","P.I, passiv","P.II, passiv","P.II, aktiv"],c:2,ex:"gefunden = Partizip II (ge+fund+en). Passiv (Schlüssel wurde gefunden). NICHT P.I!"},
]},

{id:"c1_partizip2_adj",lv:"C1",group:"Verben & Konjugation",title:"Partizip II als Adjektiv & Partizipialkonstruktion",titleVi:"Phân từ II làm tính từ và cụm phân từ",sub:"der gekaufte Wagen — rút gọn Relativsatz",
theory:{
intro:"Partizip II dùng như tính từ diễn đạt hành động đã hoàn thành hoặc bị động. Cụm Partizipialkonstruktion (P.II mở rộng) rút gọn Relativsatz — rất phổ biến trong văn học thuật và báo chí.",
formula:"P.II als Adj.: ge...t/en + Adjektivendung\n  der ge|kauf|te Wagen = das Auto, das gekauft wurde\nErweiterte Partizipialkonstruktion:\n  [PP/Adv./Obj.] + Partizip II + Nomen\n  der von der Polizei gesuchte Mann\n  = der Mann, der von der Polizei gesucht wird\nBildung: Relativsatz → Partizipialgruppe:\n  das Buch, das gestern veröffentlicht wurde\n  → das gestern veröffentlichte Buch",
examples:[
 {de:"Der <hl>gebissene</hl> Mann musste ins Krankenhaus.",vi:"Người đàn ông bị cắn phải vào bệnh viện.",note:"beißen → gebissen. mask.Nom.def.→-e: der gebissene",good:true},
 {de:"Das <hl>neu eröffnete</hl> Café ist sehr beliebt.",vi:"Quán cà phê mới khai trương rất được yêu thích.",note:"Erweiterte Gruppe: [neu] + eröffnet + Café",good:true},
 {de:"Die <hl>von der Regierung beschlossenen</hl> Maßnahmen...",vi:"Các biện pháp được chính phủ quyết định...",note:"[von der Regierung] + beschlossen + Maßnahmen (rút gọn RS)",good:true},
 {de:"Ein <hl>gut ausgebildeter</hl> Fachmann ist gefragt.",vi:"Một chuyên gia được đào tạo tốt được tìm kiếm.",note:"ausbilden → ausgebildet. indef.mask.Nom.→-er",good:true},
],
tips:["Rút gọn: 'das Haus, das gebaut wurde' → 'das gebaute Haus' (P.II vor Nomen)","Mở rộng: tất cả thông tin trong RS đứng giữa Artikel và P.II: 'das [im Jahr 1900] gebaute Haus'"],
dangers:["FALSCH: 'das gebauete Haus' → 'das gebaute Haus' (kein Extra-e bei Adj.endung nach -t)"],
compare:[{a:"Relativsatz (văn nói rõ ràng)",b:"Partizipialkonstruktion (văn viết ngắn gọn)",c:"das Haus, das gebaut wurde | das gebaute Haus"}]
},
fill:{s:"Der ___ ___ Mann wartet vor der Tür. (von der Polizei suchen, P.II mask.Nom.def.)",ans:"von der Polizei gesuchte",hint:"P.II: suchen→gesucht. [von der Polizei]+gesucht+e (mask.Nom.def.→-e)"},
quiz:[
 {q:"'Das Auto, das gestohlen wurde' als Partizipialkonstruktion:",opts:["das gestolene Auto","das gestohlene Auto","das gestohlen Auto","das gestohlenes Auto"],c:1,ex:"stehlen → gestohlen (BQT). neut.Nom.def. → -e: das gestohlenE Auto"},
 {q:"P.II von 'schreiben' als Adj., fem.Nom.def.: die ___ Nachricht",opts:["geschriebene","geschriebener","geschriebenes","geschrieben"],c:0,ex:"schreiben → geschrieben. fem.Nom.def.→-e: die geschriebENE Nachricht"},
 {q:"'der Mann, dem von der Polizei geholfen wurde' → Partizipialkonstruktion: ???",opts:["der geholfte Mann","der von der Polizei geholfen Mann","der der Polizei geholfte Mann","—"],c:3,ex:"Nicht möglich! Dativ-Relativsatz (helfen+Dativ) kann nicht als P.II-Konstruktion umgeformt werden"},
 {q:"Ein ___ Spezialist... (gut ausbilden, mask.Nom.indef., P.II)",opts:["gut ausgebildeter","gut ausgebildeten","gut ausgebildete","gut ausgebildetes"],c:0,ex:"ausbilden→ausgebildet. indef.mask.Nom.→-er: ein gut ausgebildetER"},
 {q:"Die ___ Situation... (sich verschlechtern, fem.Nom.def., P.II — Reflexiv-Verb!)",opts:["verschlechterte","verschlechterten","sich verschlechterte","—"],c:0,ex:"sich verschlechtern → verschlechtert (kein 'sich' im P.II Adj.): die verschlechterte Situation"},
]},

{id:"c1_irrealis_vg",lv:"C1",group:"Verben & Konjugation",title:"Irrealis der Vergangenheit",titleVi:"Điều kiện giả định trong quá khứ",sub:"Wenn ich gelernt hätte, wäre ich bestanden — điều đã không xảy ra",
theory:{
intro:"Irrealis Vergangenheit diễn đạt điều kiện không có thật trong <em>quá khứ</em> — điều đã không xảy ra và không thể thay đổi. Cấu trúc: KII Perfekt (hätte/wäre + Partizip II) ở cả hai vế.",
formula:"Wenn + [KII Perfekt], [KII Perfekt]\nhätte + Partizip II (für haben-Verben)\nwäre + Partizip II (für sein-Verben)\nModal im Irrealis Vg.:\n  Wenn ich mehr gelernt hätte, hätte ich bestehen können.\n  (Modal KII Vg.: hätte + Infinitiv + können)\nGemischter Irrealis: Vg.Bedingung + Gegenwarts-Folge:\n  Wenn er damals gelernt hätte, wäre er jetzt Arzt.",
examples:[
 {de:"Wenn ich mehr gelernt <hl>hätte</hl>, <hl>hätte</hl> ich bestanden.",vi:"Nếu tôi đã học nhiều hơn thì tôi đã đậu.",note:"Beide Teile: hätte + Partizip II",good:true},
 {de:"Wenn sie früher <hl>gekommen wäre</hl>, <hl>hätten</hl> wir mehr Zeit <hl>gehabt</hl>.",vi:"Nếu cô ấy đến sớm hơn chúng ta đã có nhiều thời gian hơn.",note:"kommen=sein→wäre+gekommen | gehabt haben→hätten+gehabt",good:true},
 {de:"Er <hl>wäre</hl> nicht krank <hl>geworden</hl>, wenn er besser aufgepasst <hl>hätte</hl>.",vi:"Anh ấy đã không bị ốm nếu cẩn thận hơn.",note:"werden(sein)→wäre+geworden | aufpassen(haben)→hätte+aufgepasst",good:true},
 {de:"Wenn ich das <hl>hätte wissen können</hl>!",vi:"Nếu tôi có thể biết điều đó!",note:"Modal Irrealis Vg.: hätte + wissen + können",good:true},
],
tips:["Merksatz: Vergangenheits-Irrealis = beide Teile KII Perfekt. 'Wenn ich...hätte/wäre..., hätte/wäre ich...'","Modal im Irrealis Vg.: hätte + Infinitiv + Modal-Infinitiv (ganz hinten): 'hätte kommen KÖNNEN'"],
dangers:["FALSCH: 'Wenn ich lernen würde, hätte ich bestanden' → Gegenwart+Vergangenheit gemischt → klingt falsch: beide KII Perfekt: 'Wenn ich gelernt HÄTTE, hätte ich BESTANDEN'"],
compare:[{a:"Irrealis Gegenwart (KII direkt)",b:"Irrealis Vergangenheit (KII Perfekt)",c:"Wenn ich Zeit HÄTTE, WÜRDE ich kommen | Wenn ich Zeit GEHABT HÄTTE, WÄRE ich gekommen"}]
},
fill:{s:"Wenn er früher ___ ___, ___ er den Zug noch ___. (aufstehen/sein-Verb, nehmen/haben-Verb, KII Vg.)",ans:"aufgestanden wäre|hätte|nehmen können",hint:"aufstehen=sein→wäre aufgestanden | nehmen=haben→hätte nehmen können"},
quiz:[
 {q:"Wenn er mehr geschlafen ___, wäre er nicht krank geworden.",opts:["hätte","hätte gehabt","wäre","würde haben"],c:0,ex:"schlafen=haben-Verb → KII Perfekt: HÄTTE geschlafen"},
 {q:"Wenn sie pünktlich ___ ___, hätten wir angefangen. (kommen, sein-Verb)",opts:["gekommen wäre","wäre gekommen","hätte gekommen","käme"],c:0,ex:"kommen=sein-Verb → KII Perfekt: gekommen WÄRE (Partizip+wäre)"},
 {q:"Er wäre nicht gestürzt, wenn er besser aufgepasst ___ ___ . (aufpassen, haben)",opts:["hätte aufgepasst","wäre aufgepasst","hätte aufgepassten","aufgepasst hätte"],c:0,ex:"aufpassen=haben → KII Perfekt: HÄTTE aufgepasst"},
 {q:"Ich ___ früher kommen ___ ___ , wenn du mich früher informiert hättest. (können, können im Irrealis Vg.)",opts:["hätte/kommen können","wäre/kommen können","hätte/können gekommen","würde/kommen"],c:0,ex:"Modal KII Vg.: HÄTTE + Infinitiv + können (ans Ende)"},
 {q:"Wenn wir das Problem früher ___ ___ ___ , wäre die Situation besser. (erkennen, können, KII Vg.)",opts:["hätten erkennen können","wären erkannt können","hätten können erkennen","erkannt hätten können"],c:0,ex:"Modal KII Vg.: HÄTTEN + erkennen + KÖNNEN"},
]},

{id:"c1_modalpartikeln",lv:"C1",group:"Sonstige",title:"Modalpartikeln",titleVi:"Tiểu từ tình thái",sub:"doch, mal, ja, eben, halt, denn, wohl, eigentlich, schon",
theory:{
intro:"Modalpartikeln thêm sắc thái cảm xúc và thái độ của người nói vào câu — không thể dịch trực tiếp. Đây là một trong những điểm phân biệt người học thành thạo với người bản ngữ.",
formula:"Vị trí: thường sau Verb và bổ ngữ bắt buộc, trước phần còn lại\ndoch: nhấn mạnh điều hiển nhiên hoặc phản bác\nmal: làm mềm yêu cầu, thân thiện\nja: ngạc nhiên dễ chịu (Aussagesatz)\neben/halt: chấp nhận thực tế không đổi được\ndenn: tò mò trong câu hỏi\nwohl: phỏng đoán\neigentlich: thực ra, hỏi điều thực sự muốn biết\nschon: xác nhận, nhấn mạnh điều đúng",
examples:[
 {de:"Das ist <hl>doch</hl> klar!",vi:"Điều đó rõ ràng mà!",note:"doch = nhấn mạnh điều hiển nhiên, hơi có ý trách",good:true},
 {de:"Komm <hl>mal</hl> her!",vi:"Lại đây một chút!",note:"mal = làm mềm mệnh lệnh, thân thiện hơn",good:true},
 {de:"Das ist <hl>ja</hl> interessant!",vi:"Thú vị thật nhỉ! (ngạc nhiên)",note:"ja = ngạc nhiên dễ chịu trong Aussagesatz (KHÔNG phải 'vâng'!)",good:true},
 {de:"Es ist <hl>eben</hl> so.",vi:"Vậy thì là vậy thôi.",note:"eben/halt = chấp nhận thực tế không thể thay đổi",good:true},
 {de:"Er ist <hl>wohl</hl> krank.",vi:"Chắc anh ấy bị ốm (phỏng đoán).",note:"wohl = phỏng đoán không chắc chắn",good:true},
 {de:"Was willst du <hl>eigentlich</hl>?",vi:"Thực ra bạn muốn gì?",note:"eigentlich = thực ra (hỏi điều thực sự muốn biết)",good:true},
],
tips:["ja trong Aussagesatz (ngạc nhiên) vs ja trong Antwort (vâng): ngữ điệu và vị trí khác nhau hoàn toàn","denn trong câu hỏi tạo sắc thái tò mò thân thiện: 'Wie heißt du DENN?' (hơn là 'Wie heißt du?')"],
dangers:["Modalpartikeln không bao giờ đứng đầu câu (gần như không có ngoại lệ)","Trong văn trang trọng: hạn chế dùng Modalpartikeln"],
compare:[{a:"ja = Antwort (vâng)",b:"ja = Modalpartikel (ngạc nhiên)",c:"JA, ich komme. (trả lời) | Das ist JA toll! (ngạc nhiên, nhấn mạnh)"}]
},
fill:{s:"Komm ___ her, ich muss dir etwas zeigen! Er ist ___ krank — er sieht sehr blass aus.",ans:"mal|wohl",hint:"làm mềm mệnh lệnh→mal | phỏng đoán→wohl"},
quiz:[
 {q:"'Komm ___ her!' — làm mềm lệnh, thân thiện",opts:["doch","mal","ja","wohl"],c:1,ex:"MAL = làm mềm câu lệnh, thân thiện hơn"},
 {q:"'Das ist ___ interessant!' — ngạc nhiên",opts:["denn","wohl","mal","ja"],c:3,ex:"JA = ngạc nhiên dễ chịu trong Aussagesatz"},
 {q:"'Es ist ___ so.' — chấp nhận thực tế",opts:["wohl","mal","eben","doch"],c:2,ex:"EBEN (hay HALT) = chấp nhận, không thể thay đổi"},
 {q:"'Er kommt ___ nicht.' — phỏng đoán",opts:["doch","mal","eben","wohl"],c:3,ex:"WOHL = phỏng đoán: 'Er kommt wohl nicht' = chắc anh ấy không đến"},
 {q:"'Wer bist du ___?' — tò mò trong câu hỏi",opts:["ja","wohl","denn","eben"],c:2,ex:"DENN = tò mò thân thiện trong câu hỏi: 'Wer bist du DENN?'"},
]},
], // Ende C1

// ══════════════════════════════════════════════════════
// C2 — 8 CHỦ ĐỀ
// ══════════════════════════════════════════════════════
C2: [
{id:"c2_wissenschaft",lv:"C2",group:"Sonstige",title:"Wissenschaftssprache",titleVi:"Ngôn ngữ học thuật",sub:"Nominaler Stil, unpersönliche Konstruktionen",
theory:{
intro:"Văn học thuật tiếng Đức đặc trưng bởi: ưu tiên danh từ hóa, thể bị động, cấu trúc vô nhân xưng (man, es), tránh 'ich'. Mục tiêu: khách quan, súc tích, trang trọng.",
formula:"Nominaler Stil: Verben → Nomen\n  untersuchen → die Untersuchung | lösen → die Lösung\nUnpersönlich: man/es/sein+zu+Inf.\n  Man kann feststellen → Es lässt sich feststellen\nPassiv dominiert: wird untersucht/analysiert\nKonnektoren: darüber hinaus, infolgedessen, demzufolge, gleichwohl, nichtsdestotrotz\nKein 'ich': statt 'Ich meine' → 'Es ist anzunehmen, dass...'",
examples:[
 {de:"Im Rahmen dieser <hl>Untersuchung</hl> wurden mehrere Hypothesen <hl>überprüft</hl>.",vi:"Trong khuôn khổ nghiên cứu này, một số giả thuyết đã được kiểm chứng.",note:"Nominaler Stil + Passiv + unpersönlich",good:true},
 {de:"<hl>Infolgedessen</hl> lässt sich schlussfolgern, dass...",vi:"Do đó có thể kết luận rằng...",note:"infolgedessen = do đó (kết quả). lässt sich schlussfolgern = có thể kết luận",good:true},
 {de:"<hl>Es ist davon auszugehen</hl>, dass die Ergebnisse valide sind.",vi:"Có thể giả định rằng các kết quả có giá trị.",note:"es ist davon auszugehen = có thể giả định (thay 'ich nehme an')",good:true},
 {de:"<hl>Darüber hinaus</hl> zeigen die Daten, dass...",vi:"Ngoài ra, dữ liệu cho thấy rằng...",note:"darüber hinaus = ngoài ra (thêm luận điểm)",good:true},
],
tips:["Akademische Konnektoren: außerdem/darüber hinaus (thêm), jedoch/allerdings (nhưng), infolgedessen/daher/deshalb (do đó), gleichwohl/nichtsdestotrotz (tuy nhiên)","Nominalstil-Übung: 'Er hat untersucht...' → 'Die Untersuchung durch X ergab...'"],
dangers:["Ich in Wissenschaft vermeiden: NICHT 'Ich habe herausgefunden' → 'Es konnte gezeigt werden, dass...'"],
compare:[{a:"Verbal (văn nói)",b:"Nominal (văn học thuật)",c:"'Wir haben untersucht' → 'Im Rahmen der Untersuchung wurden...'"}]
},
fill:{s:"___ ___ ___ ___, dass weitere Forschung notwendig ist. (Es, sein, davon, ausgehen)",ans:"Es ist davon auszugehen",hint:"unpersönlich: es ist davon auszugehen = man kann annehmen"},
quiz:[
 {q:"Akademisch für 'außerdem':",opts:["und auch","darüber hinaus","aber","trotzdem"],c:1,ex:"DARÜBER HINAUS = außerdem (trang trọng hơn)"},
 {q:"Passiver Nominalstil für 'man hat analysiert':",opts:["es wurde analysiert","man hat analysiert","ich habe analysiert","die Analyse wurde durchgeführt"],c:3,ex:"Nominalstil: 'die Analyse wurde durchgeführt' (thay vì 'man hat analysiert')"},
 {q:"'Ich nehme an, dass...' → akademisch:",opts:["Es ist anzunehmen, dass","Man meint, dass","Ich glaube, dass","Es scheint, dass"],c:0,ex:"ES IST ANZUNEHMEN, DASS... = unpersönlich, trang trọng"},
 {q:"Konnektor für Ergebnis/Folge (do đó):",opts:["darüber hinaus","gleichwohl","infolgedessen","nichtsdestotrotz"],c:2,ex:"INFOLGEDESSEN = do đó, kết quả là (Folge)"},
 {q:"Nominalstil für 'das Ergebnis verbessern':",opts:["die Verbesserung des Ergebnisses","das Ergebnis verbessern","die Ergebnisverbesserung","das Verbessern des Ergebnisses"],c:0,ex:"Verb → Nomen: 'die Verbesserung des Ergebnisses' (Gen. statt Objekt)"},
]},

{id:"c2_konzessiv_komplex",lv:"C2",group:"Satzbau",title:"Konzessiv C2 — komplexe Formen",titleVi:"Nhượng bộ C2 — cấu trúc phức tạp",sub:"wenngleich, auch wenn..., sei es... oder, wie sehr auch immer",
theory:{
intro:"C2 yêu cầu nắm vững các cấu trúc nhượng bộ rất trang trọng và phức tạp. Những cấu trúc này xuất hiện trong văn học, triết học, luật và báo chí chất lượng cao.",
formula:"wie sehr/viel/wenig auch immer: dù nhiều/ít thế nào\n  Wie sehr er auch versuchte, es gelang ihm nicht.\nsei es...oder: dù là...hay\n  Sei es Regen oder Schnee, er kommt.\ngeschweige denn: chứ chưa nói đến\n  Er kann kaum lesen, geschweige denn schreiben.\nawohl = zwar (C2/literarisch)\nungeachtet + Gen.: bất chấp\nauch wenn + KII: dù có điều kiện gì",
examples:[
 {de:"<hl>Wie sehr</hl> er auch bemüht war, er scheiterte.",vi:"Dù cố gắng đến đâu, anh ấy vẫn thất bại.",note:"wie sehr/oft/viel auch: không quan trọng mức độ nào",good:true},
 {de:"<hl>Sei es</hl> durch Überzeugung <hl>oder</hl> Zwang — das Ergebnis ist dasselbe.",vi:"Dù bằng thuyết phục hay cưỡng bức — kết quả là như nhau.",note:"sei es...oder = dù là...hay (liệt kê khả năng)",good:true},
 {de:"Er versteht kaum einfache Texte, <hl>geschweige denn</hl> akademische.",vi:"Anh ấy hầu như không hiểu văn bản đơn giản, chứ chưa nói đến văn học thuật.",note:"geschweige denn = chứ chưa nói đến (phủ định mạnh)",good:true},
 {de:"<hl>Ungeachtet</hl> aller Einwände wurde das Gesetz verabschiedet.",vi:"Bất chấp mọi phản đối, luật đã được thông qua.",note:"ungeachtet + Gen. = trotz (rất trang trọng)",good:true},
],
tips:["wie...auch immer: Konj.I hoặc KII theo thì: 'wie sehr er auch versuche/versucht habe/versuchte'","geschweige denn + Infinitiv ODER + Nomen: 'er kann nicht lesen, g.d. schreiben'"],
dangers:["sei es...oder: sau 'sei es' thường là Nomen hoặc Adj., không phải Verb chia"],
compare:[{a:"auch wenn (B1, đơn giản)",b:"wie sehr/viel auch immer (C2, intensiv)",c:"AUCH WENN er müde ist | WIE MÜDE er auch sein mag"}]
},
fill:{s:"___ seine Bemühungen auch gewesen sein mögen, er hat versagt. (Wie groß)",ans:"Wie groß",hint:"Intensität+auch: Wie groß ... auch"},
quiz:[
 {q:"'___ es Kritik oder Lob — er bleibt gelassen.'",opts:["Obwohl","Sei","Auch wenn","Wenngleich"],c:1,ex:"SEI ES...ODER = dù là...hay"},
 {q:"Er kann kaum sprechen, ___ singen.",opts:["obwohl","geschweige denn","auch wenn","wenngleich"],c:1,ex:"GESCHWEIGE DENN = chứ chưa nói đến (mạnh hơn 'erst recht nicht')"},
 {q:"___ sehr er sich auch bemühte, er scheiterte.",opts:["Auch","Wie","Obwohl","Sei"],c:1,ex:"WIE sehr er auch... = dù cố gắng đến đâu"},
 {q:"___ aller Widerstände setzte sie das Projekt durch. (bất chấp, trang trọng nhất)",opts:["Trotz","Obwohl","Ungeachtet","Wenngleich"],c:2,ex:"UNGEACHTET + Genitiv = trotz (sehr formell, C2)"},
 {q:"'Ich kann mir das nicht leisten, ___ ___ wollte.' = dù tôi muốn đến đâu",opts:["obwohl ich","auch wenn ich wollte","wie sehr ich auch","wenn ich schon"],c:2,ex:"WIE SEHR ICH AUCH wollte = dù tôi muốn đến đâu"},
]},

{id:"c2_rhetorische_mittel",lv:"C2",group:"Sonstige",title:"Rhetorische Mittel & Stilistik",titleVi:"Phương tiện tu từ và phong cách",sub:"Chiasmus, Anapher, Ellipse, Euphemismus",
theory:{
intro:"C2 yêu cầu nhận biết và sử dụng các phương tiện tu từ trong văn học và diễn thuyết. Những phương tiện này tạo hiệu quả thẩm mỹ và thuyết phục.",
formula:"Anapher: lặp từ/cụm từ đầu câu:\n  'Ich kämpfe für Frieden, ich kämpfe für Gerechtigkeit'\nChiasmus: đảo ngược cấu trúc A-B / B-A:\n  'Man lebt nicht um zu essen, sondern isst um zu leben'\nEllipse: bỏ thành phần có thể hiểu ngầm:\n  '[Bist du] Fertig?' | 'Je mehr, desto besser [wird es sein]'\nEuphemismus: thay thế từ khó chịu bằng từ nhẹ nhàng:\n  'einschlafen' statt 'sterben'\nAntithese: đối lập ý tưởng:\n  'Nicht für die Schule, sondern fürs Leben lernen wir'",
examples:[
 {de:"<hl>Wir fordern</hl> Frieden. <hl>Wir fordern</hl> Gerechtigkeit. <hl>Wir fordern</hl> Freiheit.",vi:"Chúng tôi đòi hỏi hòa bình. Chúng tôi đòi hỏi công lý. Chúng tôi đòi hỏi tự do.",note:"Anapher: lặp 'Wir fordern' đầu mỗi câu → tăng nhấn mạnh",good:true},
 {de:"Man lebt nicht, um zu essen, <hl>sondern isst, um zu leben</hl>.",vi:"Người ta không sống để ăn mà ăn để sống.",note:"Chiasmus: A(leben)+B(essen) / B(essen)+A(leben)",good:true},
 {de:"Er ist <hl>eingeschlafen</hl>. (= gestorben)",vi:"Ông ấy đã ngủ thiếp đi. (= qua đời)",note:"Euphemismus: thay 'sterben' bằng từ nhẹ nhàng hơn",good:true},
 {de:"<hl>Je mehr</hl> du lernst, <hl>desto besser</hl> sprichst du.",vi:"Càng học nhiều bạn nói càng tốt.",note:"Je...desto: càng...càng — C1/C2 Konstruktion",good:true},
],
tips:["Je...desto Konstruktion: Je + Komparativ + [NS], desto + Komparativ + [HS Inversion]"],
dangers:["Chiasmus ≠ Parallelismus: Parallelismus = cùng cấu trúc; Chiasmus = đảo ngược"],
compare:[{a:"Anapher (lặp đầu câu)",b:"Epiphora (lặp cuối câu)",c:"ICH kämpfe. ICH hoffe. (Anapher) | Er kämpft. Sie kämpft. (Epiphora — gleich enden)"}]
},
fill:{s:"Je ___ er arbeitet, ___ ___ verdient er. (viel, desto, viel)",ans:"mehr|desto mehr",hint:"Je mehr...desto mehr: Komparativ beider Seiten"},
quiz:[
 {q:"'Er ist friedlich eingeschlafen.' — welches rhetorisches Mittel?",opts:["Anapher","Chiasmus","Euphemismus","Ellipse"],c:2,ex:"EUPHEMISMUS: 'einschlafen' statt 'sterben' = Abschwächung"},
 {q:"Je ___ du übst, desto ___ wirst du. (gut/besser)",opts:["mehr/gut","mehr/besser","viel/besser","gut/besser"],c:1,ex:"Je MEHR du übst, desto BESSER wirst du (Komparativ)"},
 {q:"'Ich war erschöpft. Ich war leer. Ich gab auf.' — welches Mittel?",opts:["Chiasmus","Anapher","Ellipse","Euphemismus"],c:1,ex:"ANAPHER: Wiederholung von 'Ich' am Satzanfang"},
 {q:"'[Bist du] Fertig?' — welches rhetorisches Mittel?",opts:["Chiasmus","Anapher","Ellipse","Euphemismus"],c:2,ex:"ELLIPSE: Auslassung des verstehbaren Teils '[Bist du] Fertig?'"},
 {q:"Chiasmus-Beispiel:",opts:["Er liebt sie, sie liebt ihn","Ich kam, ich sah, ich siegte","Leben um zu essen, essen um zu leben","Er ist gut, sie ist gut"],c:2,ex:"CHIASMUS: A(leben)+B(essen) / B(essen)+A(leben) — Umkehrung der Elemente"},
]},

{id:"c2_textkoharenz",lv:"C2",group:"Satzbau",title:"Textkohärenz & Konnektoren C2",titleVi:"Liên kết văn bản và liên từ C2",sub:"nichtsdestotrotz, wohingegen, insofern als, demzufolge",
theory:{
intro:"C2 yêu cầu sử dụng thành thạo các liên từ và liên kết văn bản phức tạp để tạo nên văn phong học thuật, báo chí và văn học chất lượng cao.",
formula:"Additiv (thêm): überdies, zudem, darüber hinaus, ferner, des Weiteren\nAdversativ (đối lập): wohingegen, indessen, hingegen, dagegen\nKausal (nhân quả): infolgedessen, demzufolge, folglich, mithin, daher\nKonzessiv (nhượng bộ): nichtsdestotrotz, gleichwohl, dessen ungeachtet\nKonditionál: insofern als, sofern, unter der Bedingung, dass\nFinal (mục đích): zu dem Zweck(e), um...willen, in der Absicht",
examples:[
 {de:"Die Ergebnisse sind positiv; <hl>nichtsdestotrotz</hl> sind weitere Tests notwendig.",vi:"Kết quả tích cực; tuy nhiên các kiểm tra thêm vẫn cần thiết.",note:"nichtsdestotrotz = trotzdem (rất trang trọng)",good:true},
 {de:"Er bevorzugt Kaffee, <hl>wohingegen</hl> seine Frau lieber Tee trinkt.",vi:"Anh ấy thích cà phê trong khi vợ anh ấy thích trà hơn.",note:"wohingegen = während/dagegen (đối lập, trang trọng)",good:true},
 {de:"<hl>Demzufolge</hl> muss die Hypothese verworfen werden.",vi:"Do đó, giả thuyết phải bị bác bỏ.",note:"demzufolge = folglich, infolgedessen (kết quả)",good:true},
 {de:"<hl>Insofern als</hl> die Daten vollständig sind, können wir Schlüsse ziehen.",vi:"Trong chừng mực dữ liệu đầy đủ, chúng ta có thể rút ra kết luận.",note:"insofern als = trong chừng mực (điều kiện hạn chế)",good:true},
],
tips:["Konnektorenübung: für jeden deutschen Konnektor (B1-C2) einen Beispielsatz schreiben und auswendig lernen","Niveaus: B1: weil/obwohl/wenn | B2: zumal/wenngleich | C1: infolgedessen/gleichwohl | C2: demzufolge/nichtsdestotrotz"],
dangers:["wohingegen ≠ während (Zeit): wohingegen = Gegensatz (đối lập ý) | während có thể cả hai: Gleichzeitigkeit ODER Gegensatz"],
compare:[{a:"dagegen (văn nói)",b:"wohingegen (văn học thuật)",c:"Er mag Kaffee, sie DAGEGEN mag Tee | Er mag Kaffee, WOHINGEGEN sie Tee bevorzugt"}]
},
fill:{s:"Die Kosten sind hoch; ___ lohnt sich die Investition. Er arbeitet viel, ___ sie kaum schläft.",ans:"nichtsdestotrotz|wohingegen",hint:"trotzdem trang trọng→nichtsdestotrotz | đối lập trang trọng→wohingegen"},
quiz:[
 {q:"Akademisch für 'trotzdem':",opts:["nichtsdestotrotz","wohingegen","demzufolge","insofern"],c:0,ex:"NICHTSDESTOTROTZ = trotzdem (C2/akademisch)"},
 {q:"'Er ist fleißig, ___ sie faul ist.' (đối lập trang trọng)",opts:["nichtsdestotrotz","wohingegen","demzufolge","ferner"],c:1,ex:"WOHINGEGEN = während/dagegen (Gegensatz, trang trọng)"},
 {q:"Akademisch für 'deshalb'/'daher':",opts:["überdies","gleichwohl","demzufolge","wohingegen"],c:2,ex:"DEMZUFOLGE = daher/folglich (Schlussfolgerung, trang trọng)"},
 {q:"'Außerdem' trang trọng nhất:",opts:["ferner","und","auch","noch"],c:0,ex:"FERNER = außerdem (sehr formell, in Aufzählungen)"},
 {q:"'___ als die Bedingungen erfüllt sind, gilt das Abkommen.' (trong chừng mực)",opts:["Indem","Insofern","Infolge","Indessen"],c:1,ex:"INSOFERN ALS = trong chừng mực/điều kiện"},
]},

{id:"c2_stilistik_variation",lv:"C2",group:"Sonstige",title:"Stilistische Variation",titleVi:"Biến thể phong cách và diễn đạt",sub:"Paraphrasieren, Synonyme, Register wechseln",
theory:{
intro:"C2 yêu cầu linh hoạt giữa các phong cách (Register): không trang trọng (Umgangssprache), trung tính (Standard) và trang trọng (formell/akademisch). Khả năng paraphrasieren (diễn đạt lại) là kỹ năng quan trọng nhất.",
formula:"Register:\n1. Umgangssprache: 'Das ist voll krass!' | 'Keine Ahnung!'\n2. Standard: 'Das ist sehr beeindruckend!' | 'Ich weiß es nicht.'\n3. Formell: 'Das erscheint mir in hohem Maße bemerkenswert.' | 'Darüber bin ich nicht informiert.'\n\nParaphrasieren-Strategien:\n- Synonym verwenden: anfangen → beginnen → in Angriff nehmen\n- Umschreibung: sterben → das Leben verlieren → einschlafen (Euph.)\n- Nominalisierung: untersuchen → die Untersuchung durchführen",
examples:[
 {de:"Umg: 'Das klappt nicht.' | Std: 'Das funktioniert nicht.' | Formell: 'Dies erweist sich als nicht realisierbar.'",vi:"Không chạy/Không hoạt động/Điều này không khả thi.",note:"Gleiche Aussage in 3 Registern",good:true},
 {de:"Umg: 'Ich check das nicht.' | Std: 'Ich verstehe das nicht.' | Formell: 'Dies entzieht sich meinem Verständnis.'",vi:"Tôi không hiểu.",note:"Graduierter Ausdruck von Unverständnis",good:true},
 {de:"Paraphrase: 'Er hat die Prüfung nicht bestanden' → 'Er ist an der Prüfung gescheitert' → 'Die Prüfung verlief nicht erfolgreich für ihn'.",vi:"Anh ấy trượt thi.",note:"Verschiedene neutrale bis formelle Umschreibungen",good:true},
],
tips:["Für C2-Prüfung: je 3 Synonyme pro wichtigem Wort kennen. sagen: berichten/mitteilen/darlegen/erläutern"],
dangers:["Register-Mischen vermeiden: in formellen Texten kein 'krass' oder 'cool'"],
compare:[{a:"Umgangssprache (alltaglich)",b:"Formell (akademisch/offiziell)",c:"'Das ist voll cool!' | 'Dies erscheint äußerst bemerkenswert.'"}]
},
fill:{s:"Formell für 'Ich weiß das nicht': Darüber bin ich nicht ___. Formell für 'Das ist sehr gut': Dies erscheint in hohem Maße ___.",ans:"informiert|empfehlenswert",hint:"informiert sein = wissen | empfehlenswert/bemerkenswert = sehr gut"},
quiz:[
 {q:"Formell für 'anfangen':",opts:["losmachen","beginnen","starten","in Angriff nehmen"],c:3,ex:"IN ANGRIFF NEHMEN = sehr formell. beginnen = Standard. anfangen/losmachen = Umgangssprache"},
 {q:"Welches Register: 'Dies erweist sich als äußerst komplex.'",opts:["Umgangssprache","Standard","Formell/Akademisch","Dialekt"],c:2,ex:"'erweist sich als' + 'äußerst' → FORMELL/AKADEMISCH"},
 {q:"Paraphrase für 'Er ist gestorben' (neutral):",opts:["Er ist eingeschlafen","Er hat das Zeitliche gesegnet","Er hat sein Leben verloren","Er ist draufgegangen"],c:2,ex:"'sein Leben verloren' = neutral. 'eingeschlafen' = Euphemismus. 'draufgegangen' = Umgangssprache"},
 {q:"Synonym für 'zeigen' (akademisch):",opts:["zeigen","klarmachen","darlegen","sagen"],c:2,ex:"DARLEGEN = zeigen/erklären (formell). erläutern, aufzeigen auch möglich"},
 {q:"Umgangssprache für 'Ich bin erschöpft':",opts:["Ich bin sehr müde","Ich bin am Ende","Ich bin ermattet","Ich befinde mich in einem Zustand der Erschöpfung"],c:1,ex:"'AM ENDE sein' = Umgangssprache für erschöpft. 'ermattet' = literarisch. 'befinde mich' = sehr formell"},
]},
], // Ende C2
}; // Ende GRAMMAR_DATA

// ═══════════════════════════════════════════════════
// Helper-Funktionen für Index & Learn
// ═══════════════════════════════════════════════════
function getGrammarPool(lv) {
  return GRAMMAR_DATA[lv] || [];
}
function getAllTopics() {
  return Object.values(GRAMMAR_DATA).flat();
}
function getTopicById(id) {
  return getAllTopics().find(t => t.id === id);
}
function getTopicsByGroup(lv, group) {
  return (GRAMMAR_DATA[lv] || []).filter(t => t.group === group);
}
// Rückwärtskompatibilität: GRAMMAR = GRAMMAR_DATA
const GRAMMAR = GRAMMAR_DATA;
