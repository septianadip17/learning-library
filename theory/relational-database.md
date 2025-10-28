# Relational Database (Basis Data Relasional)

## 1. Pengertian Relational Database

Relational Database (basis data relasional) adalah sistem penyimpanan data yang mengorganisasikan informasi ke dalam tabel-tabel (relations) yang saling terhubung melalui relasi tertentu. Setiap tabel terdiri dari baris (row/record) dan kolom (column/field). Model ini diperkenalkan oleh Edgar F. Codd pada tahun 1970.

## 2. Konsep Dasar

- **Tabel (Table/Relation):** Struktur utama yang menyimpan data dalam bentuk baris dan kolom.
- **Baris (Row/Record/Tuple):** Satu entri data dalam tabel.
- **Kolom (Column/Field/Attribute):** Satu atribut atau properti dari data.
- **Primary Key:** Kolom unik yang membedakan setiap baris dalam tabel.
- **Foreign Key:** Kolom yang menghubungkan satu tabel dengan tabel lain, biasanya merujuk ke primary key tabel lain.
- **Relasi:** Hubungan antar tabel melalui primary key dan foreign key.

## 3. Jenis Relasi Antar Tabel

- **One to One:** Satu baris di tabel A hanya berhubungan dengan satu baris di tabel B.
- **One to Many:** Satu baris di tabel A dapat berhubungan dengan banyak baris di tabel B (paling umum).
- **Many to Many:** Banyak baris di tabel A dapat berhubungan dengan banyak baris di tabel B (biasanya menggunakan tabel penghubung/relasi).

### Contoh Relasi

#### One to Many
Tabel `pelanggan` dan `orders`:
- Satu pelanggan bisa memiliki banyak order.
- Satu order hanya dimiliki satu pelanggan.

#### Many to Many
Tabel `siswa`, `kelas`, dan tabel relasi `siswa_kelas`:
- Satu siswa bisa mengikuti banyak kelas.
- Satu kelas bisa diikuti banyak siswa.

## 4. Contoh Skema Relasional

### Tabel `pelanggan`
| id | nama      | email           |
|----|-----------|-----------------|
| 1  | Budi      | budi@email.com  |
| 2  | Andi      | andi@email.com  |
| 3  | Sari      | sari@email.com  |

### Tabel `orders`
| id | user_id | nomor_order |
|----|---------|-------------|
| 1  | 1       | ORD001      |
| 2  | 2       | ORD002      |
| 3  | 1       | ORD003      |

## 5. Contoh Query Relasional dan Outputnya

### a. Menampilkan Semua Data Pelanggan
```sql
SELECT * FROM pelanggan;
```
| id | nama | email           |
|----|------|-----------------|
| 1  | Budi | budi@email.com  |
| 2  | Andi | andi@email.com  |
| 3  | Sari | sari@email.com  |

---

### b. Menampilkan Semua Data Orders
```sql
SELECT * FROM orders;
```
| id | user_id | nomor_order |
|----|---------|-------------|
| 1  | 1       | ORD001      |
| 2  | 2       | ORD002      |
| 3  | 1       | ORD003      |

---

### c. Menampilkan Semua Order beserta Nama Pelanggan (INNER JOIN)
```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
INNER JOIN orders ON pelanggan.id = orders.user_id;
```
| nama | nomor_order |
|------|-------------|
| Budi | ORD001      |
| Andi | ORD002      |
| Budi | ORD003      |

---

### d. Menampilkan Semua Pelanggan dan Order-nya (LEFT JOIN)
```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
LEFT JOIN orders ON pelanggan.id = orders.user_id;
```
| nama | nomor_order |
|------|-------------|
| Budi | ORD001      |
| Budi | ORD003      |
| Andi | ORD002      |
| Sari | NULL        |

---

### e. Menambah Order Baru untuk Pelanggan
```sql
INSERT INTO orders (user_id, nomor_order) VALUES (3, 'ORD004');
```
Setelah query di atas, data pada tabel `orders` menjadi:
| id | user_id | nomor_order |
|----|---------|-------------|
| 1  | 1       | ORD001      |
| 2  | 2       | ORD002      |
| 3  | 1       | ORD003      |
| 4  | 3       | ORD004      |

---

### f. Menampilkan Semua Order beserta Nama Pelanggan (Setelah Penambahan)
```sql
SELECT pelanggan.nama, orders.nomor_order
FROM pelanggan
INNER JOIN orders ON pelanggan.id = orders.user_id;
```
| nama | nomor_order |
|------|-------------|
| Budi | ORD001      |
| Andi | ORD002      |
| Budi | ORD003      |
| Sari | ORD004      |

---

### g. Menampilkan Jumlah Order per Pelanggan (GROUP BY)
```sql
SELECT pelanggan.nama, COUNT(orders.id) AS jumlah_order
FROM pelanggan
LEFT JOIN orders ON pelanggan.id = orders.user_id
GROUP BY pelanggan.id, pelanggan.nama;
```
| nama | jumlah_order |
|------|--------------|
| Budi | 2            |
| Andi | 1            |
| Sari | 1            |

---

### h. Menampilkan Pelanggan yang Belum Pernah Order
```sql
SELECT pelanggan.nama
FROM pelanggan
LEFT JOIN orders ON pelanggan.id = orders.user_id
WHERE orders.id IS NULL;
```
| nama |
|------|
| (tidak ada, karena semua pelanggan sudah punya order) |

---

## 6. Integrity Constraint (Kendala Integritas)

- **Primary Key Constraint:** Menjamin setiap baris unik.
- **Foreign Key Constraint:** Menjamin data antar tabel tetap konsisten.
- **Unique Constraint:** Menjamin nilai kolom tidak ada yang sama.
- **Not Null Constraint:** Kolom tidak boleh kosong.

---

## 7. Normalisasi (Contoh End-to-End)

Normalisasi adalah proses mengorganisasi data agar tidak ada duplikasi dan data lebih konsisten. Berikut contoh proses normalisasi dari tabel yang belum dinormalisasi (masih berantakan) hingga menjadi tabel-tabel yang sudah ternormalisasi.

---

### **A. Tabel Belum Dinormalisasi (Unnormalized Table)**

Misal kita punya tabel transaksi seperti ini:

| transaksi_id | nama_pelanggan | email             | produk         | qty | harga |
|--------------|----------------|-------------------|----------------|-----|-------|
| 1            | Budi           | budi@email.com    | Buku Tulis     | 2   | 5000  |
| 2            | Andi           | andi@email.com    | Pensil         | 5   | 2000  |
| 3            | Budi           | budi@email.com    | Penghapus      | 1   | 3000  |
| 4            | Sari           | sari@email.com    | Buku Tulis     | 1   | 5000  |
| 5            | Andi           | andi@email.com    | Buku Tulis     | 3   | 5000  |

**Permasalahan:**  
- Data pelanggan dan produk berulang.
- Sulit update data pelanggan/produk jika ada perubahan.

---

### **B. Normalisasi ke 1NF (First Normal Form)**

Pisahkan data pelanggan dan produk ke tabel terpisah.

#### 1. Tabel `pelanggan`
```sql
CREATE TABLE pelanggan (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO pelanggan (nama, email) VALUES
('Budi', 'budi@email.com'),
('Andi', 'andi@email.com'),
('Sari', 'sari@email.com');
```
| id | nama | email           |
|----|------|-----------------|
| 1  | Budi | budi@email.com  |
| 2  | Andi | andi@email.com  |
| 3  | Sari | sari@email.com  |

#### 2. Tabel `produk`
```sql
CREATE TABLE produk (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(100),
  harga INT
);

INSERT INTO produk (nama, harga) VALUES
('Buku Tulis', 5000),
('Pensil', 2000),
('Penghapus', 3000);
```
| id | nama        | harga |
|----|-------------|-------|
| 1  | Buku Tulis  | 5000  |
| 2  | Pensil      | 2000  |
| 3  | Penghapus   | 3000  |

#### 3. Tabel `transaksi`
```sql
CREATE TABLE transaksi (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pelanggan_id INT,
  produk_id INT,
  qty INT,
  FOREIGN KEY (pelanggan_id) REFERENCES pelanggan(id),
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);

INSERT INTO transaksi (pelanggan_id, produk_id, qty) VALUES
(1, 1, 2), -- Budi beli 2 Buku Tulis
(2, 2, 5), -- Andi beli 5 Pensil
(1, 3, 1), -- Budi beli 1 Penghapus
(3, 1, 1), -- Sari beli 1 Buku Tulis
(2, 1, 3); -- Andi beli 3 Buku Tulis
```
| id | pelanggan_id | produk_id | qty |
|----|--------------|-----------|-----|
| 1  | 1            | 1         | 2   |
| 2  | 2            | 2         | 5   |
| 3  | 1            | 3         | 1   |
| 4  | 3            | 1         | 1   |
| 5  | 2            | 1         | 3   |

---

### **C. Query Data Setelah Normalisasi**

#### Menampilkan Semua Transaksi Lengkap
```sql
SELECT transaksi.id AS transaksi_id, pelanggan.nama AS nama_pelanggan, pelanggan.email, produk.nama AS produk, transaksi.qty, produk.harga
FROM transaksi
JOIN pelanggan ON transaksi.pelanggan_id = pelanggan.id
JOIN produk ON transaksi.produk_id = produk.id;
```
| transaksi_id | nama_pelanggan | email           | produk      | qty | harga |
|--------------|----------------|-----------------|-------------|-----|-------|
| 1            | Budi           | budi@email.com  | Buku Tulis  | 2   | 5000  |
| 2            | Andi           | andi@email.com  | Pensil      | 5   | 2000  |
| 3            | Budi           | budi@email.com  | Penghapus   | 1   | 3000  |
| 4            | Sari           | sari@email.com  | Buku Tulis  | 1   | 5000  |
| 5            | Andi           | andi@email.com  | Buku Tulis  | 3   | 5000  |

---

### **D. Keuntungan Setelah Normalisasi**
- Data pelanggan dan produk tidak redundant.
- Jika email pelanggan berubah, cukup update di satu tempat.
- Data lebih konsisten dan mudah di-maintain.

---

**Kesimpulan:**  
Normalisasi memecah tabel besar yang berisi data berulang menjadi beberapa tabel yang saling terhubung dengan relasi (foreign key), sehingga data lebih rapi, konsisten, dan efisien.