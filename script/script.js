
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
    let pinjam = document.getElementById('tanggalpinjam').value;
    let kembali = document.getElementById('tanggalkembali').value;

    if (nama === ""){
        alert("Isi Dulu Namanya !")
    } 
    else if (email === "") {
        alert("isi Dulu emailnya")
    }
    else if (judul === "") {
        alert("isi Dulu judul bukunya")
    }
    else if (jenis === ""){
        alert("Pilih Dahulu jenisnya")
    }
    else if (jumlahbuku === ""){
        alert("Masukan Jumlah Buku")
    }
    else if (telepon === "") {
        alert("isi Dulu nomor teleponnya")
    }
    else if (pinjam === ""){
        alert("Masukan Tanggal Pinjam Nya")
    }
    else if (kembali === ""){
        alert("Masukan Tanggal kembalinya")
    }
    else{
        alert(" Terimakasih " + nama + " dan buku berjudul " + judul + " dan jenis " + jenis + " sudah masuk sistem kami ")
    }
    
}


function validasi2() {
    let namaupdate = document.getElementById('namaupdate').value;
    let emailupdate = document.getElementById('emailupdate').value;
    let denda = document.getElementById('denda').value;
    let userstatus = document.getElementById('userstatus');
    let statuspinjam = document.getElementById('statuspinjam');
    let jumlahkembali = document.getElementById('jumlahkembali');

    if (namaupdate === ""){
        alert("Masukan Nama user yang ingin di Update")
    }

    else if (emailupdate === ""){
        alert("Masukan email user yang ingin di update")
    }

    else if (denda === "") {
        alert('Update denda pada user bila melewati batas peminjaman')
    }
    else if (statuspinjam === "") {
        alert('Update Status peminjaman pada user')
    }
    else if (userstatus === "") {
        alert('Update status user aprove atau tidak')
    }
    else if (jumlahkembali  === "") {
        alert('update jumlah buku yang kembali keperpustakaan')
    }
    else{
        alert("Update User Berhasil !")
    }
}

    
