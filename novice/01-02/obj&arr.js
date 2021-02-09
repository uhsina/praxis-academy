let customer = [
    {
    identitas: 
    {
      nip: '12301',
      nama_lengkap: function(){
        return(this.nama_depan+this.nama_belakang)
      }, 
      nama_depan: 'onyan',
      nama_belakang: 'kopon',
      umur: 32,
    },
    pesanan:
    {
        makanan_pokok: 'tiwul',
        lauk: 'sapi',
        minum: 'jeruk panas',
    },
    },
    {
    identitas:
    {
      nip: '12302',
      nama_lengkap: function(){
        return(this.nama_depan+this.nama_belakang)
      },
      nama_depan: 'dawi',
      nama_belakang: 'yah',
      umur: 37,
    },
    pesanan:
    {
        makanan_pokok: 'jagung',
        lauk: 'ayam',
        minum: 'es jeruk',
    },
    },
    {
    identitas:
    {
      nip: '12303',
      nama_lengkap: function(){
        return(this.nama_depan+this.nama_belakang)
      },
      nama_depan: 'sao',
      nama_belakang: 'dah',
      umur: 36,
    },
    pesanan:
    {
        makanan_pokok: 'nasi',
        lauk: 'ikan',
        minum: 'es teh',
    },
  }
  ];
  console.log(customer[0].identitas.nip);
  console.log(customer[0].identitas.nama_lengkap());
  console.log(customer[0].identitas.nama_depan);
  console.log(customer[0].identitas.umur);
  console.log(customer[0].pesanan.makanan_pokok);
  console.log(customer[0].pesanan.lauk);
  console.log(customer[0].pesanan.minum);