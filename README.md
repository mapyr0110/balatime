# BALATIME SCHOOL

Сайт для BALATIME SCHOOL на React + Vite.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:

```bash
npm install
```

2. Run the app:

```bash
npm run dev
```

## Deploy to GitHub Pages

Репозиторий: `balatime`

В `vite.config.ts` уже указан правильный base:

```ts
base: '/balatime/'
```

Деплой настроен через GitHub Actions в `.github/workflows/deploy.yml`.

Чтобы залить проект в GitHub:

```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/USERNAME/balatime.git
git push -u origin main
```

После пуша открой GitHub:

`Settings` -> `Pages` -> `Build and deployment` -> `Source` -> `GitHub Actions`

Сайт будет доступен по адресу:

```txt
https://USERNAME.github.io/balatime/
```
