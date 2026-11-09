# 011_ORMCleanArchitecture

RESTful API untuk manajemen data komik yang dibangun menggunakan **Node.js**, **Express.js**, **Sequelize ORM**, dan **PostgreSQL**. Dilengkapi dengan validasi schema request menggunakan **Joi**.

## Daftar Isi
- [Fitur Utama](#fitur-utama)
- [Struktur Direktori](#struktur-direktori)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi dan Konfigurasi](#instalasi-dan-konfigurasi)
- [Dokumentasi API](#dokumentasi-api)

---

## Fitur Utama
- **CRUD Komik**:
  - GET /api/komik: Mengambil daftar seluruh data komik.
  - GET /api/komik/:id: Mengambil detail data komik berdasarkan ID.
  - POST /api/komik: Menambahkan data komik baru.
  - PUT /api/komik/:id: Memperbarui data komik yang sudah ada.
  - DELETE /api/komik/:id: Menghapus data komik dari database.
- **Validasi Data**: Menggunakan middleware validator Joi pada request payload (POST & PUT).
- **Database ORM**: Pemetaan objek database relasional menggunakan Sequelize ORM PostgreSQL.

---

## Struktur Direktori
``
.
├── config/
│   ├── config.js         # Konfigurasi database Sequelize (dev & prod)
│   └── db.js             # Autentikasi koneksi dan sinkronisasi database
├── controller/
│   └── komikController.js# Logic controller untuk operasi CRUD komik
├── models/
│   ├── index.js          # Inisialisasi Sequelize dan loader model
│   └── komik.js          # Definisi skema model Komik
├── routes/
│   └── api.js            # Mapping endpoint router REST API
├── validations/
│   └── komikValidation.js# Skema dan middleware validasi request Joi
├── .env.example          # Template konfigurasi environment
├── .gitignore            # File pengabaian git
├── .sequelizerc          # Konfigurasi path Sequelize CLI
├── index.js              # Entrypoint server aplikasi Express
├── package.json          # Metadata proyek dan daftar dependensi
└── README.md             # Dokumentasi proyek
``

---

## Teknologi yang Digunakan
- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Sequelize v6
- **Database**: PostgreSQL (pg)
- **Validasi**: Joi
- **Tools**: Nodemon, Sequelize-CLI, Dotenv

---

## Persyaratan Sistem
- Node.js versi 18 atau lebih baru
- PostgreSQL terpasang dan berjalan

---

## Instalasi dan Konfigurasi

1. **Clone repositori**:
   ``bash
   git clone https://github.com/KhoirulArifPratama/011_ORMCleanArchitecture.git
   cd 011_ORMCleanArchitecture
   ``

2. **Instal dependensi**:
   ``bash
   npm install
   ``

3. **Konfigurasi Environment Variable**:
   Salin file .env.example menjadi .env kemudian sesuaikan konfigurasi database Anda:
   ``bash
   cp .env.example .env
   ``
   Isi konfigurasi pada file .env:
   ``env
   PORT=3000
   DB_USER=postgres
   DB_PASSWORD=password_db_anda
   DB_DATABASE=perpustakaan
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DIALECT=postgres
   ``

4. **Jalankan Aplikasi**:
   ``bash
   npm start
   ``
   Server akan berjalan pada http://localhost:3000.

---

## Dokumentasi API

### 1. Ambil Semua Komik
- **Endpoint**: GET /api/komik
- **Response 200 OK**:
  ``json
  [
    {
      "id": 1,
      "title": "One Piece",
      "description": "Petualangan bajak laut mencari harta karun terbesar",
      "author": "Eiichiro Oda",
      "createdAt": "2026-11-09T03:00:00.000Z",
      "updatedAt": "2026-11-09T03:00:00.000Z"
    }
  ]
  ``

### 2. Ambil Komik Berdasarkan ID
- **Endpoint**: GET /api/komik/:id
- **Response 200 OK**:
  ``json
  {
    "id": 1,
    "title": "One Piece",
    "description": "Petualangan bajak laut mencari harta karun terbesar",
    "author": "Eiichiro Oda",
    "createdAt": "2026-11-09T03:00:00.000Z",
    "updatedAt": "2026-11-09T03:00:00.000Z"
  }
  ``
- **Response 404 Not Found**:
  ``json
  {
    "error": "Komik not found."
  }
  ``

### 3. Tambah Komik Baru
- **Endpoint**: POST /api/komik
- **Header**: Content-Type: application/json
- **Request Body**:
  ``json
  {
    "title": "Naruto",
    "description": "Kisah perjuangan ninja menjadi Hokage",
    "author": "Masashi Kishimoto"
  }
  ``
- **Response 201 Created**:
  ``json
  {
    "id": 2,
    "title": "Naruto",
    "description": "Kisah perjuangan ninja menjadi Hokage",
    "author": "Masashi Kishimoto",
    "createdAt": "2026-11-09T03:10:00.000Z",
    "updatedAt": "2026-11-09T03:10:00.000Z"
  }
  ``
- **Response 400 Bad Request**:
  ``json
  {
    "error": "Judul komik wajib diisi"
  }
  ``

### 4. Perbarui Data Komik
- **Endpoint**: PUT /api/komik/:id
- **Header**: Content-Type: application/json
- **Request Body**:
  ``json
  {
    "title": "Naruto Shippuden",
    "description": "Kisah lanjutan perjuangan ninja",
    "author": "Masashi Kishimoto"
  }
  ``
- **Response 200 OK**:
  ``json
  {
    "id": 2,
    "title": "Naruto Shippuden",
    "description": "Kisah lanjutan perjuangan ninja",
    "author": "Masashi Kishimoto",
    "createdAt": "2026-11-09T03:10:00.000Z",
    "updatedAt": "2026-11-09T03:15:00.000Z"
  }
  ``

### 5. Hapus Komik
- **Endpoint**: DELETE /api/komik/:id
- **Response 200 OK**:
  ``json
  {
    "message": "Komik deleted successfully."
  }
  ``
