# FORMOSA31 唯誠鐘錶

高雄左營中高階腕錶銷售・維修・保養 — 官方形象網站。

純靜態 Next.js（App Router）網站，實作自 Claude Design 的 `FORMOSA31.dc.html` 設計稿
（原始設計檔保留於 `_extracted/`，已加入 `.gitignore`，不會推上 GitHub）。

員工與 AI 透過工作台建立商品。草稿與審核版本存在 D1，原圖存在私人 R2。官網從核准目錄產生靜態頁面，列表封面使用公開 R2。維護與部署步驟見 [SETUP.md](./SETUP.md)。

## 開始使用

```bash
npm install
npm run dev      # 開發預覽 http://localhost:3000
npm run build    # 產生靜態網站到 out/（部署用）
```

## 專案結構

- `data/products.json` — 工作台發布的核准商品目錄
- `app/` — 頁面：首頁、`/brand`、`/services`、`/watches`、`/watches/[id]`、`/contact`
- `components/` — 共用元件（Header、Footer、WatchCard、WatchListClient、InquiryForm、StoreMap、PlaceholderImage、Icons）
- `lib/` — `products.js`（讀 products.json、補預設值）、`seedData.js`（靜態文案／選項／格式 helper）、
  `marketingImages.js`（自動偵測 `public/images/` 的情境大圖）
- `public/images/` — logo、情境大圖、商品照片

## 維護與部署

- **商品上架（含批次）、改價、換照片、改文案**：見 [SETUP.md](./SETUP.md) 第 2–3 節。
- **聯絡表單寄信**：Web3Forms，設定見 [SETUP.md](./SETUP.md) 第 4 節。
- **上線**：GitHub → Cloudflare Pages（Build command `npm run build`、輸出目錄 `out`），見 [SETUP.md](./SETUP.md) 第 5 節。
