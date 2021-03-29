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
};
