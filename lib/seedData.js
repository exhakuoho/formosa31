// Static page content (brand tiers, services, trust, store info…) and shared
// option lists / format helpers ported from the Claude Design prototype
// (FORMOSA31.dc.html). The editable watch catalog lives in
// data/products.json — see lib/products.js.

export const BRAND_ZH = {
  Longines: "浪琴",
  Rado: "雷達",
  Mido: "美度",
  Oris: "豪利時",
  Hamilton: "漢米爾頓",
  Seiko: "精工",
  Citizen: "星辰",
  Casio: "卡西歐",
};

export const KEYWORD_LIST = [
  "商務", "正裝", "潛水", "運動", "飛行", "計時", "月相",
  "機械", "石英", "男錶", "女錶", "送禮", "收藏",
];

export const DEFAULT_BRAND_OPTIONS = [
  "Longines", "Rado", "Mido", "Oris", "Hamilton", "Seiko", "Citizen", "Casio",
];

export const DEFAULT_MATERIAL_OPTIONS = [
  "不鏽鋼 Steel",
  "高科技陶瓷 Ceramic",
  "不鏽鋼 · 藍寶石鏡面",
  "不鏽鋼 · 鑽石時標",
  "樹脂 · 碳纖維 Carbon",
  "鈦金屬 Titanium",
  "18K 玫瑰金 Rose Gold",
];

export const DEFAULT_MOVEMENT_OPTIONS = [
  "自動機械", "石英", "手動上鍊", "光動能石英", "同軸擒縱",
];

// The watch catalog itself lives in data/products.json (see lib/products.js).
// This file only holds static page copy, option lists, and format helpers.

export function productSpecRows(p) {
  if (!p) return [];
  return [
    ["品牌 Brand", `${p.brand || ""} ${p.brandZh || ""}`.trim()],
    ["型號 Model", p.model || "—"],
    ["錶徑 Case Size", p.size || "—"],
    ["機芯 Movement", p.movementFull || p.movement || "—"],
    ["錶殼材質 Case Material", p.material || "—"],
    ["錶帶材質 Strap Material", p.strap || "原廠錶帶 Original"],
    ["防水 Water Resistance", p.water || "—"],
    ["鏡面 Crystal", p.crystal || "藍寶石水晶玻璃 Sapphire"],
    ["保固 Warranty", p.warranty || "原廠國際保固"],
    ["商品狀態 Condition", p.condition || "全新正品 Brand New"],
  ].map(([label, value]) => ({ label, value }));
}

export function productDescription(p) {
  if (!p || !p.line) return "";
  const kw = p.kw || [];
  return (
    `${p.brand} ${p.brandZh} ${p.line}，搭載${p.movementFull || p.movement}，${p.material}，錶徑 ${p.size}。` +
    (kw.length ? `適合${kw.join("、")}。` : "") +
    " 原廠正品，門市提供專業維修與終生售後服務。"
  );
}

export const BRAND_TIERS = [
  {
    tier: "中高階主力", tierEn: "Premium Core",
    note: "瑞士與精緻製錶工藝,商務與收藏入門的雋永選擇",
    brands: [
      { zh: "浪琴", en: "Longines", desc: "瑞士製錶傳統與優雅，商務與正式場合的雋永之選。" },
      { zh: "雷達", en: "Rado", desc: "高科技陶瓷先驅，現代設計與輕盈耐磨的代表。" },
      { zh: "美度", en: "Mido", desc: "建築美學靈感，高性價比的瑞士機械入門首選。" },
      { zh: "豪利時", en: "Oris", desc: "獨立製錶品牌，專業潛水與飛行錶的玩家精神。" },
      { zh: "漢米爾頓", en: "Hamilton", desc: "美式血統、瑞士工藝，軍錶與電影經典風格。" },
    ],
  },
  {
    tier: "實用與日常", tierEn: "Everyday",
    note: "日本製錶實力，耐用可靠、日常與送禮皆宜",
    brands: [
      { zh: "精工", en: "Seiko", desc: "日本製錶實力，從機械到 GS 的全面選擇。" },
      { zh: "星辰", en: "Citizen", desc: "光動能科技，免換電池的環保實用主義。" },
      { zh: "卡西歐", en: "Casio", desc: "堅固耐用與多功能，日常與運動的可靠夥伴。" },
    ],
  },
];

export const SERVICE_EDGE = [
  { icon: "headset", zh: "店內專業技師", en: "In-House Technician", desc: "維修不外包，由店內技師親自檢測與處理，品質可控。" },
  { icon: "repair", zh: "高比例自主維修", en: "Self-Repair Capability", desc: "多數機芯保養、洗油、調校於店內完成，不假他人之手。" },
  { icon: "service", zh: "現場即時報價", en: "On-Site Quotation", desc: "親臨門市即可現場檢測、當面報價，透明且無壓力。" },
  { icon: "calendar", zh: "快速交件", en: "Fast Turnaround", desc: "常見維修項目快速處理、縮短等待，讓您的時計早日回到手腕。" },
  { icon: "shield", zh: "終生免費檢測", en: "Lifetime Care", desc: "於本店購買之腕錶，提供終生免費檢測與走時、防水調整。" },
];

export const SERVICES = [
  { icon: "sales", zh: "腕錶銷售", en: "Watch Sales" },
  { icon: "repair", zh: "手錶維修", en: "Repair" },
  { icon: "service", zh: "保養檢測", en: "Servicing" },
  { icon: "strap", zh: "錶帶更換", en: "Strap Change" },
  { icon: "battery", zh: "電池更換", en: "Battery" },
  { icon: "water", zh: "防水測試", en: "Water Test" },
  { icon: "gift", zh: "送禮諮詢", en: "Gift Advice" },
  { icon: "calendar", zh: "預約賞錶", en: "Appointment" },
];

export const TRUST = [
  { icon: "shield", zh: "正品保證", en: "100% Authentic", desc: "所有腕錶皆為原廠正品,提供完整保固與來源說明,安心擁有。" },
  { icon: "repair", zh: "專業維修", en: "Expert Repair", desc: "逾二十年鐘錶維修經驗,機芯保養、洗油校時皆由專人處理。" },
  { icon: "store", zh: "實體門市", en: "Physical Store", desc: "高雄左營實體門市,歡迎親臨賞錶、面對面諮詢與議價。" },
  { icon: "headset", zh: "售後服務", en: "After-Sales", desc: "售後保養、提醒與諮詢一應俱全,建立長期信任關係。" },
  { icon: "gem", zh: "精選品牌", en: "Curated Brands", desc: "嚴選 Longines、Tudor、Omega、Rado 等中高階品牌。" },
  { icon: "pin", zh: "在地經營", en: "Local Trust", desc: "深耕在地、口碑經營,是高雄值得信賴的鐘錶選擇。" },
];

// "Official & public listings" — the store can be verified across brand
// official pages and public directories. Used to build pre-purchase trust.
export const VERIFY_LINKS = [
  { icon: "store", name: "寶島鐘錶 官方網站", cat: "Formosa Times · Official", desc: "明誠店分店資訊登錄於寶島鐘錶官方網站，可查證為官方登錄門市。", url: "https://www.formosatimes.com.tw/branches/39" },
  { icon: "shield", name: "Seiko 精工", cat: "Authorized Dealer", desc: "收錄於 Seiko 精工官方網站特約經銷商頁面，為原廠授權銷售據點。", url: "https://www.seikowatches.com/tw-zh/stores/tw00073" },
  { icon: "gem", name: "Longines 浪琴表", cat: "Official Boutique", desc: "列載於 Longines 浪琴官方網站專賣店介紹，為官方合作通路。", url: "https://www.longines.com/zh-tw/store/id/formosa-mingcheng-kaohsiung-city-22037" },
  { icon: "chat", name: "Facebook 粉絲專頁", cat: "Official Page", desc: "FORMOSA31 官方 Facebook 粉絲專頁，分享門市動態與顧客互動。", url: "https://www.facebook.com/formosatimes31/" },
  { icon: "pin", name: "iWatcHome 城邦國際名表", cat: "Public Listing", desc: "收錄於城邦國際名表門市資訊頁，公開通路可查門市資料。", url: "https://www.iwatchome.net/store/info/229" },
];

export const BRAND_NAMES = [
  "Longines 浪琴", "Rado 雷達", "Mido 美度", "Oris 豪利時",
  "Hamilton 漢米爾頓", "Seiko 精工", "Citizen 星辰", "Casio 卡西歐",
];

export const BRAND_VALUES = [
  { n: "01", zh: "中高階品牌選品", en: "Curated Selection", icon: "gem", desc: "精選市場主流且具競爭力的國際腕錶品牌，主力商品價格約落在新台幣 1 萬至 15 萬元，滿足商務配戴、自用升級、送禮與日常佩戴需求。" },
  { n: "02", zh: "專業維修技術", en: "Repair Expertise", icon: "repair", desc: "FORMOSA31 不只銷售腕錶，也具備鐘錶維修與檢測能力，提供洗油保養、故障排除、防水測試、零件更換等服務，讓腕錶在長期配戴後仍能被妥善照顧。" },
  { n: "03", zh: "長期售後服務", en: "Lifetime Service", icon: "headset", desc: "凡於 FORMOSA31 購買腕錶，皆可享有長期售後支持，包含錶帶調整、維修檢測與電池更換等服務，讓購買不只是成交，而是服務的開始。" },
];

// Three highlight cards shown on the home page directly under the hero.
export const HOME_HIGHLIGHTS = [
  { n: "01", icon: "gem", zh: "中高階品牌選品", en: "Curated Brands", desc: "精選 Longines、Rado、Mido、Oris、Hamilton、Seiko、Citizen、Casio 等國際知名腕錶品牌。" },
  { n: "02", icon: "repair", zh: "專業維修技術", en: "Repair Expertise", desc: "提供洗油保養、故障排除、防水測試與零件更換等服務，多數維修案件可由店內技師協助處理。" },
  { n: "03", icon: "headset", zh: "長期售後服務", en: "Lifetime Service", desc: "店內購買腕錶享有錶帶調整、維修檢測與電池更換等售後支持，讓購買不只是一次交易。" },
];

export const SERVICE_ITEMS = [
  { n: "01", zh: "腕錶銷售", en: "Watch Sales", icon: "sales", desc: "提供 Longines、Rado、Mido、Oris、Hamilton、Seiko、Citizen、Casio 等國際品牌腕錶，適合商務、自用、送禮與日常配戴需求。" },
  { n: "02", zh: "選錶建議", en: "Watch Advisory", icon: "gem", desc: "依照預算、品牌偏好、配戴場合、手腕尺寸與風格需求，協助挑選合適腕錶。" },
  { n: "03", zh: "維修檢測", en: "Inspection", icon: "service", desc: "針對停走、走時異常、零件耗損、進水疑慮等狀況，提供初步檢測與維修建議。" },
  { n: "04", zh: "洗油保養", en: "Overhaul", icon: "repair", desc: "機械錶機芯清潔、上油、檢查與調校，協助維持腕錶穩定運作。" },
  { n: "05", zh: "故障排除", en: "Troubleshooting", icon: "repair", desc: "排查走時不準、停擺、上鍊異常等問題，找出原因並提出處理方式。" },
  { n: "06", zh: "防水測試", en: "Water Resistance Test", icon: "water", desc: "檢測防水狀況，協助判斷是否需更換防水膠圈或進一步維修。" },
  { n: "07", zh: "零件更換", en: "Parts Replacement", icon: "service", desc: "更換耗損或損壞零件，依品牌與料件供應狀況評估與報價。" },
  { n: "08", zh: "電池更換", en: "Battery Replacement", icon: "battery", desc: "石英錶電池更換，同步檢查防水膠圈與電池室狀況。" },
  { n: "09", zh: "錶帶調整", en: "Strap Adjustment", icon: "strap", desc: "金屬錶帶長度調整、錶帶更換，貼合手腕配戴更舒適。" },
];

export const REPAIR_FLOW = [
  { n: "1", zh: "檢測", en: "Inspection", desc: "初步確認手錶狀況與問題來源" },
  { n: "2", zh: "報價", en: "Quotation", desc: "說明維修內容、費用與所需時間" },
  { n: "3", zh: "訂購零件", en: "Parts Order", desc: "若需更換零件，確認料件狀況" },
  { n: "4", zh: "維修更換", en: "Repair", desc: "由技術人員進行維修與處理" },
  { n: "5", zh: "組裝檢測", en: "Assembly & Test", desc: "完成後進行功能與狀態檢查" },
  { n: "6", zh: "完成交件", en: "Handover", desc: "通知顧客取件並說明注意事項" },
];

export const FAQ = [
  { q: "FORMOSA31 主要販售哪些品牌？", a: "FORMOSA31 精選 Longines 浪琴、Rado 雷達、Mido 美度、Oris 豪利時、Hamilton 漢米爾頓、Seiko 精工、Citizen 星辰、Casio 卡西歐等國際知名腕錶品牌。" },
  { q: "商品價格大約落在哪裡？", a: "店內主力商品約落在新台幣 1 萬至 15 萬元，適合商務配戴、自用升級與送禮需求。" },
  { q: "有提供維修服務嗎？", a: "有。FORMOSA31 提供洗油保養、故障排除、防水測試、零件更換、電池更換與錶帶調整等服務。" },
  { q: "不是在店內購買的手錶也可以維修嗎？", a: "可以。FORMOSA31 接受多數品牌腕錶的維修與檢測服務，實際是否可維修會依品牌、零件供應與現場檢測結果判斷。" },
  { q: "維修流程是什麼？", a: "維修流程通常為檢測、報價、訂購零件、維修更換、組裝檢測與完成交件。" },
  { q: "在 FORMOSA31 購買手錶有什麼售後服務？", a: "凡於 FORMOSA31 購買腕錶，享有長期售後服務，包含錶帶調整、維修檢測與電池更換等服務。實際內容依品牌、型號、零件狀況與現場檢測結果為準。" },
];

export const FLOW_STEPS = [
  { n: "01", zh: "首頁 Home", desc: "第一印象 — 建立專業與信任感" },
  { n: "02", zh: "瀏覽錶款", desc: "品牌分類 → 商品列表 → 篩選" },
  { n: "03", zh: "商品詳情", desc: "規格、價格、多圖、信任資訊" },
  { n: "04", zh: "聯絡詢價", desc: "電話 / LINE / 表單三入口" },
  { n: "05", zh: "到店成交", desc: "預約賞錶 → 門市服務" },
];

export const STORE = {
  legalName: "唯誠鐘錶股份有限公司",
  legalNameEn: "WEICHENG WATCH CO., LTD.",
  address: "高雄市左營區明誠二路505-3號",
  phone: "07-5580678",
  phoneHref: "tel:075580678",
  email: "service@formosa31.com",
  web: "formosa31.com",
  hours: "週一至週六 11:00 – 21:00",
};
