# FORMOSA31 網站 — 設定與維護說明

這是用 Next.js 做的 FORMOSA31（唯誠鐘錶）官方網站，包含：首頁、品牌、服務、精選錶款（可搜尋／篩選）、商品詳情、聯絡門市。

**架構刻意設計成「最低維護」：**

- **沒有資料庫**，不會像一般免費後台那樣閒置就「睡著」。
- 商品資料是專案裡的一個檔案（`data/products.json`），網站每次部署時把它變成純靜態網頁，掛在 CDN 上，又快又穩。
- 聯絡表單直接**寄 email 到你的 Gmail**，你收信就好，不用登入任何後台。
- 日常維護（上架／改價／換照片）**直接跟 Claude 說就好**，它幫你改檔案、推上 GitHub、自動更新網站。

---

## 1. 本機執行（看網站）

```bash
npm install
npm run dev
```

開啟 http://localhost:3000。網站開箱即用，不需要任何設定。

---

## 2. 日常維護：商品上架／改價／下架（最常用）

**最簡單的方式：直接跟 Claude 說。** 例如：

- 「幫我把這支浪琴上架，型號 X、價格 Y、規格…」
- 「這次要上 20 支錶」＋ 一份清單（Excel／Google 試算表／LINE 訊息／拍照都行）＋ 照片 → Claude 一次幫你全部建好、推上線。
- 「P003 改成下架」「Rolex 那支價格改成 NT$ XXX」

Claude 會去改 `data/products.json`、放好照片、推上 GitHub，約 1 分鐘後網站自動更新。

**想自己改也可以**（進階，非必要）：`data/products.json` 是一個商品清單檔，每支錶一個區塊，欄位意思如下：

| 欄位 | 意思 | 範例 |
|---|---|---|
| `id` | 商品編號（每支不可重複） | `"P012"` |
| `brand` | 品牌（英文） | `"Longines"` |
| `line` | 商品名稱 | `"Master Collection 月相"` |
| `model` | 型號 | `"L2.909.4.78.3"` |
| `size` | 錶徑 | `"40 mm"` |
| `movement` | 機芯 | `"自動機械"` |
| `material` | 材質 | `"不鏽鋼 Steel"` |
| `price` | 價格（純文字，可寫「歡迎詢價」） | `"NT$ 92,000"` |
| `kw` | 關鍵字（用於篩選） | `["商務","正裝","送禮"]` |
| `tag` | 角標（可留空） | `"經典"` |
| `stock` | 庫存數量 | `3` |
| `status` | `"published"` 上架／`"draft"` 不顯示 | `"published"` |
| `images` | 商品照片路徑（見下一節） | `["/images/products/p012-1.jpg"]` |

其餘欄位（防水、鏡面、保固、品牌中文…）會自動帶入合理預設值，不寫也沒關係。

---

## 3. 商品照片與門市情境照

- **商品照片**：放進 `public/images/products/`，然後在該商品的 `images` 欄位填路徑（例如 `"/images/products/p012-1.jpg"`）。沒有照片時，網站會顯示「腕錶去背圖」的灰色佔位框，不會壞。
- **首頁／品牌頁／服務頁的大圖**：依固定檔名放進 `public/images/` 就會自動顯示，不用改程式：
  - `home-hero`、`home-about`
  - `brand-hero`、`brand-about`
  - `services-hero`、`services-repair`、`services-open`
  - 副檔名可用 `.jpg` / `.jpeg` / `.png` / `.webp`
- 不熟悉怎麼上傳檔案沒關係——把照片給 Claude，它幫你放到正確位置並命名。

---

## 4. 聯絡表單寄信設定（一次性，約 2 分鐘）

聯絡表單用免費服務 **Web3Forms** 把客人的詢價直接寄到你信箱。在設定金鑰前，表單會顯示「請直接來電／Email」的提示，網站照常運作。

1. 前往 https://web3forms.com ，在首頁輸入你的收件信箱（`0805wilson@gmail.com`），它會寄一封信給你，點信裡的連結確認，就會得到一組 **Access Key**（一串英數字）。**不需要註冊帳號、不需要密碼。**
2. 把這組 Access Key 給 Claude，或自己在專案根目錄的 `.env.local` 檔案加一行：

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=你的_access_key
   ```

3. 之後客人在網站填表單送出，你的 Gmail 就會收到一封詢價通知。

---

## 5. 部署上線（GitHub → Cloudflare Pages 自動更新）

網站是純靜態輸出，部署很單純：

1. 把專案推上 GitHub（可直接請 Claude 用「推上 GitHub」幫你做）。
2. 到 Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**，選這個 repo。
3. 建置設定：
   - **Framework preset**：Next.js（Static HTML Export）／或手動填下面兩項
   - **Build command**：`npm run build`
   - **Build output directory**：`out`
   - **環境變數**：加上 `NEXT_PUBLIC_WEB3FORMS_KEY`（值就是第 4 節拿到的 key）
4. 按部署。完成後會拿到一個 `xxx.pages.dev` 網址，之後可在 Cloudflare 綁定 `formosa31.com` 自訂網域。
5. 之後每次把改動推上 GitHub，Cloudflare Pages 會自動重新部署——跟你原本「推上 GitHub 自動更新網站」的習慣完全一樣。

> 也可以部署到 Vercel：選這個 repo，Build command `npm run build`、Output `out`、加上同樣的環境變數即可。

---

## 6. 還沒接上的東西

- **LINE 連結**：網站上的「LINE 聯絡／諮詢」按鈕目前是預留位置（連到 `#`），因為還沒有正式的 LINE 官方帳號加入連結。等你有了，告訴 Claude 一次換上即可。

---

## 常見問題

- **網站會不會閒置就壞掉／要喚醒？** 不會。沒有資料庫、沒有伺服器，就是一堆靜態檔案放在 CDN 上。
- **改一支錶要多久才會生效？** 推上 GitHub 後約 1 分鐘，Cloudflare Pages 自動重建完成就更新。
- **資料會不會不小心刪掉救不回來？** 所有改動都在 GitHub 有版本紀錄，任何一步都能還原。
