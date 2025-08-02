class Buku {
  constructor(judul, halaman) {
    this.judul = judul;
    this.halaman = halaman;
  }

  greet() {
    console.table(`Ini adalah buku yang berjudul ${this.judul} dan memiliki jumlah halaman ${this.halaman}`)
  }
}

const buku1 = new Buku("Black Mamba", 10)
buku1.greet()

