const tabsConfig = [
  { id: "all", label: "All" },
  { id: "dsa-alg", label: "DSA & Algo" },
  { id: "system-design", label: "System Design" },
  { id: "english", label: "English" },
];

const cards = [
  {
    id: "data-structures",
    title: "Data Structures",
    sections: ["all", "dsa-alg"],
    content: `
            <ul>
                <li><a href="theory/data-structures.html#1-introduction">Introduction</a></li>
                <li><a href="theory/data-structures.html#2-types-of-data-structures">Types of Data Structures</a></li>
                <li><a href="theory/data-structures.html#21-linear-data-structures">Linear Data Structures</a>
                    <ul>
                        <li><a href="theory/data-structures.html#211-array">Array</a></li>
                        <li><a href="theory/data-structures.html#212-linked-list">Linked List</a></li>
                        <li><a href="theory/data-structures.html#213-stack">Stack</a></li>
                        <li><a href="theory/data-structures.html#214-queue">Queue</a></li>
                    </ul>
                </li>
                <li><a href="theory/data-structures.html#22-non-linear-data-structures">Non-Linear Data Structures</a>
                    <ul>
                        <li><a href="theory/data-structures.html#221-tree">Tree</a></li>
                        <li><a href="theory/data-structures.html#222-graph">Graph</a></li>
                    </ul>
                </li>
                <li><a href="theory/data-structures.html#23-associative-data-structures">Associative Data Structures</a>
                    <ul>
                        <li><a href="theory/data-structures.html#231-map">Map</a></li>
                    </ul>
                </li>
            </ul>
        `,
  },
  {
    id: "operations-on-data-structures",
    title: "Operations on Data Structures",
    sections: ["all", "dsa-alg"],
    content: `
            <ul>
                <li><a href="theory/operations-on-data-structures.html#insertion">Insertion</a></li>
                <li><a href="theory/operations-on-data-structures.html#deletion">Deletion</a></li>
                <li><a href="theory/operations-on-data-structures.html#traversal">Traversal</a></li>
                <li><a href="theory/operations-on-data-structures.html#searching">Searching</a></li>
                <li><a href="theory/operations-on-data-structures.html#sorting">Sorting</a></li>
            </ul>
        `,
  },
  {
    id: "big-o-notation",
    title: "Big O Notation",
    sections: ["all", "dsa-alg"],
    content: `
            <ul>
                <li><a href="theory/big-o-notation.html#1-introduction">Introduction</a></li>
                <li><a href="theory/big-o-notation.html#2-why-is-big-o-important">Why is Big-O Important?</a></li>
                <li><a href="theory/big-o-notation.html#3-common-big-o-classes">Common Big-O Classes</a>
                    <ul>
                        <li><a href="theory/big-o-notation.html#31-o1--constant-time">O(1) — Constant Time</a></li>
                        <li><a href="theory/big-o-notation.html#32-olog-n--logarithmic-time">O(log n) — Logarithmic Time</a></li>
                        <li><a href="theory/big-o-notation.html#33-on--linear-time">O(n) — Linear Time</a></li>
                        <li><a href="theory/big-o-notation.html#34-on-log-n--linearithmic-time">O(n log n) — Linearithmic Time</a></li>
                        <li><a href="theory/big-o-notation.html#35-on2--quadratic-time">O(n²) — Quadratic Time</a></li>
                        <li><a href="theory/big-o-notation.html#36-o2n--exponential-time">O(2^n) — Exponential Time</a></li>
                    </ul>
                </li>
                <li><a href="theory/big-o-notation.html#4-how-to-find-big-o">How to Find Big-O</a></li>
                <li><a href="theory/big-o-notation.html#5-summary">Summary</a></li>
            </ul>
        `,
  },
  {
    id: "mysql",
    title: "MySQL",
    sections: ["all", "system-design"],
    content: `
        <ul>
            <li><a href="theory/mysql.html#1-apa-itu-mysql">Apa itu MySQL?</a></li>
            <li><a href="theory/mysql.html#2-instalasi-mysql">Instalasi MySQL</a></li>
            <li><a href="theory/mysql.html#3-konsep-dasar-mysql">Konsep Dasar MySQL</a></li>
            <li><a href="theory/mysql.html#4-contoh-tabel">Contoh Tabel</a></li>
            <li><a href="theory/mysql.html#5-perintah-dasar-sql-di-mysql">Perintah Dasar SQL di MySQL</a>
                <ul>
                    <li><a href="theory/mysql.html#membuat-database">Membuat Database</a></li>
                    <li><a href="theory/mysql.html#menggunakan-database">Menggunakan Database</a></li>
                    <li><a href="theory/mysql.html#membuat-tabel">Membuat Tabel</a></li>
                    <li><a href="theory/mysql.html#menambah-data">Menambah Data</a></li>
                    <li><a href="theory/mysql.html#melihat-data">Melihat Data</a></li>
                    <li><a href="theory/mysql.html#mengupdate-data">Mengupdate Data</a></li>
                    <li><a href="theory/mysql.html#menghapus-data">Menghapus Data</a></li>
                    <li><a href="theory/mysql.html#menambah-kolom">Menambah Kolom</a></li>
                    <li><a href="theory/mysql.html#menghapus-kolom">Menghapus Kolom</a></li>
                    <li><a href="theory/mysql.html#mengganti-nama-tabel">Mengganti Nama Tabel</a></li>
                    <li><a href="theory/mysql.html#membatasi-jumlah-data-limit">Membatasi Jumlah Data (LIMIT)</a></li>
                    <li><a href="theory/mysql.html#mengurutkan-data-order-by">Mengurutkan Data (ORDER BY)</a></li>
                    <li><a href="theory/mysql.html#mencari-data-where">Mencari Data (WHERE)</a></li>
                    <li><a href="theory/mysql.html#fungsi-agregasi">Fungsi Agregasi</a></li>
                    <li><a href="theory/mysql.html#group-by-dan-having">Group By dan Having</a></li>
                </ul>
            </li>
            <li><a href="theory/mysql.html#6-tipe-data-umum-di-mysql">Tipe Data Umum di MySQL</a></li>
            <li><a href="theory/mysql.html#7-relasi-antar-tabel">Relasi Antar Tabel</a></li>
            <li><a href="theory/mysql.html#8-join-table-pada-mysql">JOIN Table pada MySQL</a>
                <ul>
                    <li><a href="theory/mysql.html#inner-join">INNER JOIN</a></li>
                    <li><a href="theory/mysql.html#left-join">LEFT JOIN</a></li>
                    <li><a href="theory/mysql.html#right-join">RIGHT JOIN</a></li>
                    <li><a href="theory/mysql.html#full-join">FULL JOIN</a></li>
                    <li><a href="theory/mysql.html#cross-join">CROSS JOIN</a></li>
                </ul>
            </li>
            <li><a href="theory/mysql.html#9-subquery">Subquery</a></li>
            <li><a href="theory/mysql.html#10-index">Index</a></li>
            <li><a href="theory/mysql.html#11-user-management">User Management</a></li>
        </ul>
    `,
  },
  // Tambahkan card lain di sini sesuai kebutuhan
];
