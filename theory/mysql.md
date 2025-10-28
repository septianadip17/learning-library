# MySQL: Dasar-dasar dan Konsep Penting

## 1. Apa itu MySQL?
MySQL adalah sistem manajemen basis data relasional (RDBMS) open-source yang menggunakan bahasa SQL (Structured Query Language) untuk mengelola data. MySQL banyak digunakan untuk aplikasi web, analisis data, dan berbagai kebutuhan penyimpanan data.

## 2. Instalasi MySQL
- **MacOS:**  
  Jalankan di terminal:  
  ```
  brew install mysql
  ```
- **Windows:**  
  Download installer dari [mysql.com](https://dev.mysql.com/downloads/installer/).

## 3. Konsep Dasar MySQL
- **Database:** Kumpulan tabel yang saling berhubungan.
- **Tabel:** Struktur data berbentuk baris dan kolom.
- **Baris (Row):** Satu entri data dalam tabel.
- **Kolom (Column):** Atribut atau field dari data.

## 4. Perintah Dasar SQL di MySQL

### Membuat Database
```sql
CREATE DATABASE nama_database;
```

### Menggunakan Database
```sql
USE nama_database;
```

### Membuat Tabel
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100),
  email VARCHAR(100)
);
```

### Menambah Data
```sql
INSERT INTO users (nama, email) VALUES ('Budi', 'budi@email.com');
```

### Melihat Data
```sql
SELECT * FROM users;
```

### Mengupdate Data
```sql
UPDATE users SET nama = 'Andi' WHERE id = 1;
```

### Menghapus Data
```sql
DELETE FROM users WHERE id = 1;
```

## 5. Tipe Data Umum di MySQL
- `INT`: Bilangan bulat
- `VARCHAR(n)`: Teks dengan panjang maksimum n karakter
- `DATE`: Tanggal (YYYY-MM-DD)
- `DATETIME`: Tanggal dan waktu

## 6. Relasi Antar Tabel
- **One to One:** Satu baris di tabel A berhubungan dengan satu baris di tabel B.
- **One to Many:** Satu baris di tabel A berhubungan dengan banyak baris di tabel B.
- **Many to Many:** Banyak baris di tabel A berhubungan dengan banyak baris di tabel B (biasanya menggunakan tabel relasi).

## 7. Tips dan Best Practice
- Selalu backup database secara berkala.
- Gunakan indeks pada kolom yang sering digunakan untuk pencarian.
- Gunakan tipe data yang sesuai untuk efisiensi penyimpanan.


## 8. JOIN Table pada MySQL

JOIN digunakan untuk menggabungkan data dari dua atau lebih tabel berdasarkan relasi antar tabel tersebut. Berikut beberapa jenis JOIN yang umum digunakan:

### a. INNER JOIN
Mengambil data yang memiliki kecocokan di kedua tabel.

```sql
SELECT users.nama, orders.nomor_order
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### b. LEFT JOIN (LEFT OUTER JOIN)
Mengambil semua data dari tabel kiri dan data yang cocok dari tabel kanan. Jika tidak ada kecocokan, kolom dari tabel kanan akan bernilai NULL.

```sql
SELECT users.nama, orders.nomor_order
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

### c. RIGHT JOIN (RIGHT OUTER JOIN)
Mengambil semua data dari tabel kanan dan data yang cocok dari tabel kiri. Jika tidak ada kecocokan, kolom dari tabel kiri akan bernilai NULL.

```sql
SELECT users.nama, orders.nomor_order
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

### d. FULL JOIN (FULL OUTER JOIN)
Mengambil semua data dari kedua tabel, baik yang cocok maupun yang tidak.  
**Catatan:** MySQL tidak mendukung FULL JOIN secara langsung, namun bisa disimulasikan dengan UNION.

```sql
SELECT users.nama, orders.nomor_order
FROM users
LEFT JOIN orders ON users.id = orders.user_id
UNION
SELECT users.nama, orders.nomor_order
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

### e. CROSS JOIN
Menghasilkan kombinasi semua baris dari kedua tabel (perkalian Cartesian).

```sql
SELECT users.nama, orders.nomor_order
FROM users
CROSS JOIN orders;
```

---

---

**Catatan:**  
Untuk latihan, gunakan aplikasi seperti MySQL Workbench atau DBeaver agar lebih mudah mengelola database secara visual.
