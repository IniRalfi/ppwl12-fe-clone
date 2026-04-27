# 📝 Git Commit Guide

Panduan ini mengikuti standar **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** — konvensi yang digunakan oleh proyek-proyek besar seperti Angular, Vue, dan banyak open source lainnya.

---

## 📐 Format Dasar

```
<type>(<scope>): <subject>

[body]

[footer]
```

| Bagian    | Keterangan                                              | Wajib?      |
| --------- | ------------------------------------------------------- | ----------- |
| `type`    | Jenis perubahan (lihat tabel di bawah)                  | ✅ Ya       |
| `scope`   | Bagian kode yang terpengaruh, misal `auth`, `ui`, `api` | ❌ Opsional |
| `subject` | Deskripsi singkat, huruf kecil, tanpa titik di akhir    | ✅ Ya       |
| `body`    | Penjelasan _mengapa_ perubahan ini dibuat               | ❌ Opsional |
| `footer`  | Info tambahan, misal `BREAKING CHANGE`, referensi issue | ❌ Opsional |

---

## 🏷️ Tipe Commit

| Type       | Kapan Digunakan                                                               | Contoh                                          |
| ---------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| `feat`     | Menambahkan **fitur baru**                                                    | `feat(auth): add google oauth login`            |
| `fix`      | Memperbaiki **bug**                                                           | `fix(api): handle null response from endpoint`  |
| `docs`     | Perubahan pada **dokumentasi** saja                                           | `docs: update README with setup instructions`   |
| `style`    | Perubahan **format/style** kode tanpa mengubah logika (spasi, semicolon, dll) | `style: fix indentation in components`          |
| `refactor` | **Refactoring** kode — bukan fitur baru, bukan bugfix                         | `refactor(user): simplify profile update logic` |
| `perf`     | Perubahan yang **meningkatkan performa**                                      | `perf(image): enable lazy loading on gallery`   |
| `test`     | Menambah atau mengubah **unit/integration test**                              | `test(auth): add test for login validation`     |
| `build`    | Perubahan pada **build system** atau dependency eksternal                     | `build: upgrade next.js to v15`                 |
| `ci`       | Perubahan pada konfigurasi **CI/CD pipeline**                                 | `ci: add github actions workflow`               |
| `chore`    | Pekerjaan rutin yang **tidak mengubah src atau test**                         | `chore: update .gitignore`                      |
| `revert`   | **Membatalkan** commit sebelumnya                                             | `revert: feat(auth): add google oauth login`    |

---

## ✍️ Aturan Penulisan Subject

- ✅ Gunakan **huruf kecil** semua
- ✅ Gunakan **kalimat imperatif** (perintah): `add`, `fix`, `update`, `remove` — bukan `added`, `fixing`, `updated`
- ✅ Maksimal **72 karakter**
- ❌ Jangan diakhiri **titik** (`.`)
- ❌ Jangan terlalu vage: `fix bug` → ❌ | `fix(cart): resolve NaN on empty cart total` → ✅

---

## 💡 Contoh Commit Lengkap

### Contoh 1 — Sederhana

```
feat(hero): add animated gradient background
```

### Contoh 2 — Dengan Body

```
fix(form): prevent duplicate submission on double click

Added a loading state flag that disables the submit button
after the first click until the request resolves.
```

### Contoh 3 — Breaking Change

```
feat(api)!: change response structure for /user endpoint

BREAKING CHANGE: `data.user` is now returned as `data.profile`.
All consumers of this endpoint must update accordingly.
```

### Contoh 4 — Referensi Issue

```
fix(auth): redirect to login on expired session

Closes #42
```

---

## 🔍 Scope Umum yang Bisa Dipakai

> Sesuaikan dengan struktur proyekmu.

| Scope    | Merujuk ke                                       |
| -------- | ------------------------------------------------ |
| `auth`   | Autentikasi & otorisasi                          |
| `ui`     | Komponen UI umum                                 |
| `api`    | Route atau integrasi API                         |
| `db`     | Database / schema / migration                    |
| `layout` | Layout halaman                                   |
| `hero`   | Section hero                                     |
| `nav`    | Navigasi                                         |
| `seo`    | Meta tag, Open Graph                             |
| `config` | Konfigurasi project (next.config, tsconfig, dll) |
| `deps`   | Dependency/package                               |

---

## ⚡ Cheatsheet Cepat

```bash
# Fitur baru
git commit -m "feat(section): add contact form"

# Bugfix
git commit -m "fix(nav): close menu on outside click"

# Refactor
git commit -m "refactor(hero): extract animation to custom hook"

# Update dependency
git commit -m "build(deps): upgrade tailwindcss to v4"

# Dokumentasi
git commit -m "docs: add git commit guide"

# Cleanup / chore
git commit -m "chore: remove unused imports"
```

---

## 🛠️ Tools Pendukung (Opsional)

| Tool                                                                                       | Fungsi                                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| [Commitizen](https://github.com/commitizen/cz-cli)                                         | CLI interaktif untuk nulis commit sesuai konvensi |
| [Commitlint](https://commitlint.js.org/)                                                   | Lint pesan commit otomatis di CI                  |
| [Husky](https://typicode.github.io/husky/)                                                 | Git hooks — jalankan commitlint sebelum commit    |
| [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) | Auto-generate `CHANGELOG.md` dari commit history  |

---

> 💬 **Prinsip utama:** Commit message yang baik harus bisa dibaca oleh orang lain (atau dirimu sendiri di masa depan) tanpa perlu membuka kodenya.
