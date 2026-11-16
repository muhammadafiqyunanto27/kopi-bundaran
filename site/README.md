# Kopi Bundaran

Website cafe Kopi Bundaran (Astro, static).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output ke dist/
npm run preview  # preview build
```

## Struktur

- `src/data/menu.ts` — data menu (harga Rp)
- `src/data/site.ts` — info bisnis (alamat, jam, kontak) — **isi placeholder**
- `src/components/` — komponen UI
- `src/pages/` — halaman (`/`, `/menu`, 404)
- `public/images/` — foto cafe

## Kustomisasi

Edit `src/data/site.ts` untuk alamat, jam buka, WhatsApp, Instagram.
Edit `src/data/menu.ts` untuk menu & harga.