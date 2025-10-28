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

## 4. Contoh Tabel

### Tabel `pelanggan`
| id | nama      | email               |
|----|-----------|---------------------|
| 1  | Budi      | budi@email.com      |
| 2  | Andi      | andi@email.com      |
| 3  | Sari      | sari@email.com      |
| 4  | Rina      | rina@email.com      |
| 5  | Dedi      | dedi@email.com      |
| 6  | Lina      | lina@email.com      |
| 7  | Tono      | tono@email.com      |
| 8  | Sinta     | sinta@email.com     |
| 9  | Agus      | agus@email.com      |
| 10 | Dewi      | dewi@email.com      |

### Tabel `orders`
| id | user_id | nomor_order |
|----|---------|-------------|
| 1  | 1       | ORD001      |
| 2  | 2       | ORD002      |
| 3  | 1       | ORD003      |
| 4  | 3       | ORD004      |
| 5  | 4       | ORD005      |
| 6  | 5       | ORD006      |
| 7  | 2       | ORD007      |
| 8  | 6       | ORD008      |
| 9  | 1       | ORD009      |
| 10 | 7       | ORD010      |

## 5. Perintah Dasar SQL di MySQL

### Membuat Database
```sql
CREATE DATABASE toko;
```

### Menggunakan Database
```sql
USE toko;
```

### Membuat Tabel
```sql
CREATE TABLE pelanggan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  nomor_order VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES pelanggan(id)
);
```

### Menambah Data
```sql
INSERT INTO pelanggan (nama, email) VALUES
('Budi', 'budi@email.com'),
('Andi', 'andi@email.com'),
('Sari', 'sari@email.com'),
('Rina', 'rina@email.com'),
('Dedi', 'dedi@email.com'),
('Lina', 'lina@email.com'),
('Tono', 'tono@email.com'),
('Sinta', 'sinta@email.com'),
('Agus', 'agus@email.com'),
('Dewi', 'dewi@email.com');

INSERT INTO orders (user_id, nomor_order) VALUES
(1, 'ORD001'),
(2, 'ORD002'),
(1, 'ORD003'),
(3, 'ORD004'),
(4, 'ORD005'),
(5, 'ORD006'),
(2, 'ORD007'),
(6, 'ORD008'),
(1, 'ORD009'),
(7, 'ORD010');
```

### Melihat Data
```sql
SELECT * FROM pelanggan;
```
| id | nama      | email               |
|----|-----------|---------------------|
| 1  | Budi      | budi@email.com      |
| 2  | Andi      | andi@email.com      |
| 3  | Sari      | sari@email.com      |
| 4  | Rina      | rina@email.com      |
| 5  | Dedi      | dedi@email.com      |
| 6  | Lina      | lina@email.com      |
| 7  | Tono      | tono@email.com      |
| 8  | Sinta     | sinta@email.com     |
| 9  | Agus      | agus@email.com      |
| 10 | Dewi      | dewi@email.com      |

```sql
SELECT * FROM orders;
```
| id | user_id | nomor_order |
|----|---------|-------------|
| 1  | 1       | ORD001      |
| 2  | 2       | ORD002      |
| 3  | 1       | ORD003      |
| 4  | 3       | ORD004      |
| 5  | 4       | ORD005      |
| 6  | 5       | ORD006      |
| 7  | 2       | ORD007      |
| 8  | 6       | ORD008      |
| 9  | 1       | ORD009      |
| 10 | 7       | ORD010      |

### Mengupdate Data
```sql
UPDATE pelanggan SET nama = 'Andi Wijaya' WHERE id = 2;
```
| id | nama        | email               |
|----|-------------|---------------------|
| 2  | Andi Wijaya | andi@email.com      |

### Menghapus Data
```sql
DELETE FROM pelanggan WHERE id = 10;
```
| id | nama      | email               |
|----|-----------|---------------------|
| 10 | Dewi      | dewi@email.com      | *(baris ini akan terhapus)*

### Menambah Kolom
```sql
ALTER TABLE pelanggan ADD COLUMN alamat VARCHAR(255);
```
| id | nama      | email               | alamat |
|----|-----------|---------------------|--------|
| 1  | Budi      | budi@email.com      | NULL   |
| ...| ...       | ...                 | ...    |

### Menghapus Kolom
```sql
ALTER TABLE pelanggan DROP COLUMN alamat;
```
| id | nama      | email               |
|----|-----------|---------------------|
| 1  | Budi      | budi@email.com      |
| ...| ...       | ...                 |

### Mengganti Nama Tabel
```sql
RENAME TABLE pelanggan TO customer;
```
| id | nama      | email               |
|----|-----------|---------------------|
| 1  | Budi      | budi@email.com      |
| ...| ...       | ...                 |

### Membatasi Jumlah Data (LIMIT)
```sql
SELECT * FROM pelanggan LIMIT 3;
```
| id | nama   | email            |
|----|--------|------------------|
| 1  | Budi   | budi@email.com   |
| 2  | Andi   | andi@email.com   |
| 3  | Sari   | sari@email.com   |

### Mengurutkan Data (ORDER BY)
```sql
SELECT * FROM pelanggan ORDER BY nama DESC;
```
| id | nama      | email               |
|----|-----------|---------------------|
| 7  | Tono      | tono@email.com      |
| 8  | Sinta     | sinta@email.com     |
| 3  | Sari      | sari@email.com      |
| 4  | Rina      | rina@email.com      |
| 6  | Lina      | lina@email.com      |
| 2  | Andi      | andi@email.com      |
| 5  | Dedi      | dedi@email.com      |
| 1  | Budi      | budi@email.com      |
| 9  | Agus      | agus@email.com      |
| 10 | Dewi      | dewi@email.com      |

### Mencari Data (WHERE)
```sql
SELECT * FROM pelanggan WHERE nama LIKE 'S%';
```
| id | nama  | email            |
|----|-------|------------------|
| 3  | Sari  | sari@email.com   |
| 8  | Sinta | sinta@email.com  |

### Fungsi Agregasi
```sql
SELECT COUNT(*) FROM orders;
```
| COUNT(*) |
|----------|
| 10       |

```sql
SELECT AVG(id) FROM pelanggan;
```
| AVG(id) |
|---------|
| 5.5     |

```sql
SELECT MAX(id) FROM pelanggan;
```
| MAX(id) |
|---------|
| 10      |

```sql
SELECT MIN(id) FROM pelanggan;
```
| MIN(id) |
|---------|
| 1       |

### Group By dan Having
```sql
SELECT user_id, COUNT(*) as jumlah_order
FROM orders
GROUP BY user_id
HAVING jumlah_order > 1;
```
| user_id | jumlah_order |
|---------|--------------|
| 1       | 3            |
| 2       | 2            |

## 6. Tipe Data Umum di MySQL
- `INT`: Bilangan bulat
- `VARCHAR(n)`: Teks dengan panjang maksimum n karakter
- `DATE`: Tanggal (YYYY-MM-DD)
- `DATETIME`: Tanggal dan waktu
- `FLOAT`, `DOUBLE`: Angka desimal
- `BOOLEAN`: Nilai true/false

## 7. Relasi Antar Tabel
- **One to One:** Satu baris di tabel A berhubungan dengan satu baris di tabel B.
- **One to Many:** Satu baris di tabel A berhubungan dengan banyak baris di tabel B.
- **Many to Many:** Banyak baris di tabel A berhubungan dengan banyak baris di tabel B (biasanya menggunakan tabel relasi).

## 8. JOIN Table pada MySQL

JOIN digunakan untuk menggabungkan data dari dua atau lebih tabel berdasarkan relasi antar tabel tersebut. Berikut beberapa jenis JOIN yang umum digunakan:

### a. INNER JOIN
Mengambil data yang memiliki kecocokan di kedua tabel.

```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
INNER JOIN orders ON pelanggan.id = orders.user_id;
```
| nama      | nomor_order |
|-----------|-------------|
| Budi      | ORD001      |
| Andi      | ORD002      |
| Budi      | ORD003      |
| Sari      | ORD004      |
| Rina      | ORD005      |
| Dedi      | ORD006      |
| Andi      | ORD007      |
| Lina      | ORD008      |
| Budi      | ORD009      |
| Tono      | ORD010      |

### b. LEFT JOIN (LEFT OUTER JOIN)
Mengambil semua data dari tabel kiri dan data yang cocok dari tabel kanan. Jika tidak ada kecocokan, kolom dari tabel kanan akan bernilai NULL.

```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
LEFT JOIN orders ON pelanggan.id = orders.user_id;
```
| nama      | nomor_order |
|-----------|-------------|
| Budi      | ORD001      |
| Budi      | ORD003      |
| Budi      | ORD009      |
| Andi      | ORD002      |
| Andi      | ORD007      |
| Sari      | ORD004      |
| Rina      | ORD005      |
| Dedi      | ORD006      |
| Lina      | ORD008      |
| Tono      | ORD010      |
| Sinta     | NULL        |
| Agus      | NULL        |
| Dewi      | NULL        |

### c. RIGHT JOIN (RIGHT OUTER JOIN)
Mengambil semua data dari tabel kanan dan data yang cocok dari tabel kiri. Jika tidak ada kecocokan, kolom dari tabel kiri akan bernilai NULL.

```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
RIGHT JOIN orders ON pelanggan.id = orders.user_id;
```
| nama      | nomor_order |
|-----------|-------------|
| Budi      | ORD001      |
| Andi      | ORD002      |
| Budi      | ORD003      |
| Sari      | ORD004      |
| Rina      | ORD005      |
| Dedi      | ORD006      |
| Andi      | ORD007      |
| Lina      | ORD008      |
| Budi      | ORD009      |
| Tono      | ORD010      |

### d. FULL JOIN (FULL OUTER JOIN)
MySQL tidak mendukung FULL JOIN secara langsung, namun bisa disimulasikan dengan UNION.

```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
LEFT JOIN orders ON pelanggan.id = orders.user_id
UNION
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
RIGHT JOIN orders ON pelanggan.id = orders.user_id;
```
| nama      | nomor_order |
|-----------|-------------|
| Budi      | ORD001      |
| Budi      | ORD003      |
| Budi      | ORD009      |
| Andi      | ORD002      |
| Andi      | ORD007      |
| Sari      | ORD004      |
| Rina      | ORD005      |
| Dedi      | ORD006      |
| Lina      | ORD008      |
| Tono      | ORD010      |
| Sinta     | NULL        |
| Agus      | NULL        |
| Dewi      | NULL        |

### e. CROSS JOIN
Menghasilkan kombinasi semua baris dari kedua tabel (perkalian Cartesian).

```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
CROSS JOIN orders;
```
| nama      | nomor_order |
|-----------|-------------|
| Budi      | ORD001      |
| Budi      | ORD002      |
| ...       | ...         |
| Dewi      | ORD010      |
*(Total 100 baris: 10 pelanggan x 10 orders)*

## 9. Subquery

Subquery adalah query di dalam query lain.

```sql
SELECT nama FROM pelanggan
WHERE id IN (SELECT user_id FROM orders WHERE nomor_order = 'ORD001');
```
| nama  |
|-------|
| Budi  |

## 10. Index

Index digunakan untuk mempercepat pencarian data.

```sql
CREATE INDEX idx_nama ON pelanggan(nama);
```

## 11. User Management

### Membuat User Baru
```sql
CREATE USER 'userbaru'@'localhost' IDENTIFIED BY 'passwordku';
```

### Memberikan Hak Akses
```sql
GRANT ALL PRIVILEGES ON toko.* TO 'userbaru'@'localhost';
FLUSH PRIVILEGES;
```

---

**Catatan:**  
Untuk latihan, gunakan aplikasi seperti MySQL Workbench atau DBeaver agar lebih mudah mengelola database secara visual.

Referensi lanjutan:  
- [W3Schools MySQL Tutorial](https://www.w3schools.com/mysql/)
- [MySQL Official Documentation](https://dev.mysql.com/doc/)
