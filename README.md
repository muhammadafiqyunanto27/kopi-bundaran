# kopi-bundaran ☕

Landing page statis untuk **Kopi Bundaran** — cafe & menu. Dibuat dengan
[Astro](https://astro.build) dengan gaya sketsa tangan (hand-drawn).

## Fitur

- Hero, Tentang Kami, Menu (2 kolom), Galeri (collage abstract + lightbox), dan Kontak & Lokasi.
- Responsif untuk mobile, tablet, dan desktop.
- Galeri dengan lightbox (navigasi keyboard: ← →, Esc).

## Struktur

```
kopi-bundaran/
├─ package.json        # script root (dev/build/preview)
├─ site/               # project Astro
│  ├─ src/
│  │  ├─ components/    # Hero, About, Menu, Gallery, Contact
│  │  ├─ data/          # site.ts (info cafe), menu.ts (daftar menu)
│  │  ├─ layouts/       # Layout.astro
│  │  ├─ pages/         # index.astro, 404.astro
│  │  └─ styles/        # global.css
│  └─ public/           # gambar & aset statis
└─ README.md
```

## Menjalankan

Butuh Node.js 18+.

```bash
npm install          # install dependency root
npm --prefix site install   # install dependency Astro
npm run dev          # jalankan dev server (default http://localhost:4321/)
```

Build production:

```bash
npm run build        # hasil ada di site/dist/
npm run preview      # cek hasil build
```

## Mengubah konten

- Info cafe (alamat, jam buka, WhatsApp, Instagram, embed maps):
  `site/src/data/site.ts`
- Daftar menu & harga: `site/src/data/menu.ts`
- Foto galeri: ganti file di `site/public/images/`
