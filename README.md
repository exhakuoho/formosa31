# FORMOSA31 唯誠鐘錶

高雄左營中高階腕錶銷售・維修・保養 — 官方形象網站。

純靜態 Next.js（App Router）網站，實作自 Claude Design 的 `FORMOSA31.dc.html` 設計稿
（原始設計檔保留於 `_extracted/`，已加入 `.gitignore`，不會推上 GitHub）。

**架構重點：低維護、無資料庫。** 商品資料是 Git 裡的一個檔案，建置時產生純靜態網頁；
聯絡表單寄信到店家信箱；日常維護直接請 Claude 改檔即可。詳見 **[SETUP.md](./SETUP.md)**。

## 開始使用

```bash
npm install
npm run dev      # 開發預覽 http://localhost:3000
npm run build    # 產生靜態網站到 out/（部署用）
```

## 專案結構

- `data/products.json` — **可編輯的商品目錄**（要上架／改價／下架就改這裡，或請 Claude 改）
- `app/` — 頁面：首頁、`/brand`、`/services`、`/watches`、`/watches/[id]`、`/contact`
- `components/` — 共用元件（Header、Footer、WatchCard、WatchListClient、InquiryForm、StoreMap、PlaceholderImage、Icons）
- `lib/` — `products.js`（讀 products.json、補預設值）、`seedData.js`（靜態文案／選項／格式 helper）、
  `marketingImages.js`（自動偵測 `public/images/` 的情境大圖）
- `public/images/` — logo、情境大圖、商品照片

## 維護與部署

- **商品上架（含批次）、改價、換照片、改文案**：見 [SETUP.md](./SETUP.md) 第 2–3 節（最簡單：直接跟 Claude 說）。
- **聯絡表單寄信**：Web3Forms，設定見 [SETUP.md](./SETUP.md) 第 4 節。
- **上線**：GitHub → Cloudflare Pages（Build command `npm run build`、輸出目錄 `out`），見 [SETUP.md](./SETUP.md) 第 5 節。
