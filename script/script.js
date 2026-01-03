
//nav menu tombol//

function bukamenu() {
    const menusam = document.querySelector('.menusamping')
    menusam.style.display = 'flex'
}

function sembunyimenu() {
    const menusam = document.querySelector('.menusamping')
    menusam.style.display = 'none'
}

function validasi() {
    
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let judul = document.getElementById('judulbuku').value;
    let telepon = document.getElementById('telepon').value;
    let jenis = document.getElementById('jenisbuku').value;
    let jumlahbuku = document.getElementById('jumlahbuku').value;

    if (nama === ""){
        alert("Isi Dulu Namanya ges !")
    } 
    else if (email === "") {
        alert("isi dulu emailnya")
    }
    else if (judul === "") {
        alert("isi dulu judul bukunya")
    }
    else if (jenis === ""){
        alert("Pilih Dahulu jenisnya")
    }
    else if (jumlahbuku === ""){
        alert("Masukan Jumlah Buku")
    }
    else if (telepon === "") {
        alert("isi dulu nomor teleponnya")
    }
    else{
        alert(" Makasih " + nama + " dan buku berjudul " + judul + " sudah masuk sistem kami ")
    }
    
}


function validasi2() {
    let namaupdate = document.getElementById('namaupdate').value;
    let emailupdate = document.getElementById('emailupdate').value;

    if (namaupdate === ""){
        alert("Masukan Nama Buat di Update")
    }

    else if (emailupdate === ""){
        alert("Masukan email buat update")
    }
    else{
        alert("Makasih ges")
    }
}

    
