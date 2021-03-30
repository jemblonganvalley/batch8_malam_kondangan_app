//penampung data input liveview
let data_lv = {
  mempelai_pria: "",
  mempelai_wanita: "",
  tanggal_akad: "",
  tanggal_resepsi: "",
  lokasi: "",
  gmaps: "",
  pesan: "",
  font: "",
  background: "",
};

const handleChange = (event) => {
  //mebersihkan layar console
  console.clear();

  data_lv = {
    //menampilkan kembali data sebelumnya
    ...data_lv,

    //edit / tambah data baru
    [event.target.name]: event.target.value,
  };

  console.log(data_lv);

  //tangkap dan inner html content sesuai data
  let lv_mempelai = document.querySelector(".lv_mempelai");
  let lv_akad = document.querySelector(".lv_akad");
  let lv_resepsi_time = document.querySelector(".lv_resepsi_time");
  let lv_resepsi_lokasi = document.querySelector(".lv_resepsi_lokasi");
  let lv_pesan = document.querySelector(".lv_pesan");

  //inner html
  lv_mempelai.innerHTML = `${data_lv.mempelai_pria} & ${data_lv.mempelai_wanita}`;
  lv_akad.innerHTML = data_lv.tanggal_akad.replace("T", " / ");
  lv_resepsi_time.innerHTML = data_lv.tanggal_resepsi.replace("T", " / ");
  lv_resepsi_lokasi.innerHTML = data_lv.lokasi;
  lv_pesan.innerHTML = data_lv.pesan;
};
