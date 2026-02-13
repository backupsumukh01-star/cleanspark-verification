# CleanSpark Mining (CLSM) – Token Website

Simple, professional single-page site for **BscScan token verification**. No wallet connect, swap, or charts.

## Tech

- **Next.js** (App Router)
- **Tailwind CSS**
- **Vercel** (ready to deploy)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to go live (Vercel)

### 1. Put the project on GitHub

- Create a new repo at [github.com/new](https://github.com/new) (e.g. `cleanspark-clsm-site`).
- In this folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

(Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.)

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub” if you like).
2. Click **Add New…** → **Project**.
3. **Import** the GitHub repo you just pushed. Select it and click **Import**.
4. Leave all settings as default (Framework: Next.js, no env vars).
5. Click **Deploy**. Wait 1–2 minutes.
6. You’ll get a live URL like `https://your-project.vercel.app`.

### 3. Use the URL on BscScan

- Copy your Vercel URL.
- On BscScan, open your token contract page → **Token** tab → **Update Token Info** (or similar).
- Paste the URL in the **“Official token website”** or **“Website”** field and save.

That’s it — your site is live and ready for BscScan verification.
