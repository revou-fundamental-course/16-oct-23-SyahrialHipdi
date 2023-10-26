// let i = 1;

// if (i = 1) {
    const pengguna = document.getElementById("pengguna");
    let nama = prompt("Hallo Selamat Datang", "Nama Anda");
    pengguna.innerHTML=nama;
//     i++;
// }

document.getElementById("sender-waktu").innerHTML=new Date();

function replaceName(){
	let nama = prompt("masukan nama anda");
	document.getElementById("pengguna").innerHTML=nama;
}

function validateForm() {
	const nama = document.forms["formulir"]["nama"].value;
	const lahir = document.forms["formulir"]["lahir"].value;
	const gender = document.forms["formulir"]["gender"].value;
	const pesan = document.forms["formulir"]["pesan"].value;

	if (nama=="" || lahir=="" || gender=="" || pesan=="") {
		alert("tidak boleh ada yang kosong");
		return false;
	}

	setSenderUI(nama,lahir,gender,pesan);

	return false;
}

function setSenderUI(nama,lahir,gender,pesan){
	document.getElementById("sender-nama").innerHTML=nama;
	document.getElementById("sender-lahir").innerHTML=lahir;
	document.getElementById("sender-gender").innerHTML=gender;
	document.getElementById("sender-pesan").innerHTML=pesan;
}
