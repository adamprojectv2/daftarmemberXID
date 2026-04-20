AOS.init({duration:800,once:true});

/* PARTICLES */
particlesJS("particles-js",{
  particles:{
    number:{value:80},
    size:{value:3},
    move:{speed:1},
    line_linked:{enable:true,opacity:0.2},
    color:{value:"#ffffff"}
  },
  interactivity:{
    events:{onhover:{enable:true,mode:"repulse"}}
  }
});

/* DATA */
const members=[
{no:1,name:"Adam Marvel Prasetyo",quote:"Tidak harus hebat di awal, yang penting tidak berhenti di tengah."},
{no:2,name:"Adita Nanda Prastiti",quote:"Semua prosesmu sedang menuju versi terbaikmu."},
{no:3,name:"Akmal Sanik",quote:"Kalau lelah, istirahat. Jangan menyerah."},
{no:4,name:"Amira Zahra Kana’ah",quote:"Kamu sedang di waktu yang tepat."},
{no:5,name:"Asti Dwi Fauziah",quote:"Berani mencoba adalah kekuatan."},
{no:6,name:"Aunna Fadhila Uzma",quote:"Langkah kecil tetap berarti."},
{no:7,name:"Azhar Alya Athirah",quote:"Fokus pada tujuanmu."},
{no:8,name:"Damara Sabiya Meiazka",quote:"Kerja keras hari ini, hasil esok."},
{no:9,name:"Ellen Raya Anjana Barus",quote:"Berbeda itu kelebihanmu."},
{no:10,name:"Fadillah Nurhalizah",quote:"Terus berjalan meski pelan."},
{no:11,name:"Friyanka Stepanny Lumban Gaol",quote:"Proses panjang menghasilkan hal besar."},
{no:12,name:"Hanif Alhakim Ramadhan",quote:"Kesalahan adalah pembelajaran."},
{no:13,name:"Hasby Shodikin",quote:"Disiplin hari ini, sukses nanti."},
{no:14,name:"Izham Hafizd Karami",quote:"Terus berkembang setiap hari."},
{no:15,name:"Jaliesvio Rizky Brillantoro",quote:"Jadilah dirimu sendiri."},
{no:16,name:"Khoirul Azzam Syaripudin",quote:"Kerja diam-diam, sukses terang-terangan."},
{no:17,name:"Lutfiana Fauziah",quote:"Impian besar dimulai dari langkah kecil."},
{no:18,name:"Mario Adi Wibowo",quote:"Tetap kuat walau lelah."},
{no:19,name:"Muhammad Faaza Fauzan Adziima",quote:"Mulai saja dulu."},
{no:20,name:"Muhammad Hannan Setyanto",quote:"Kesuksesan adalah pilihan untuk terus maju."},
{no:21,name:"Muhammad Rasyah Abbas",quote:"Berani gagal adalah awal berhasil."},
{no:22,name:"Muhammad Yusuf Rivaldi",quote:"Belajar hari ini, sukses besok."},
{no:23,name:"Mutia Sri Wulan Dian Koro",quote:"Terus melangkah tanpa ragu."},
{no:24,name:"Nahira Celiya Hutami",quote:"Jangan bandingkan dirimu."},
{no:25,name:"Nailah Agustin",quote:"Kerja keras akan terbayar."},
{no:26,name:"Nazwa Dwi Harijati",quote:"Percaya diri adalah kunci."},
{no:27,name:"Radinka Allesya Fortuna",quote:"Kamu lebih kuat dari yang kamu pikirkan."},
{no:28,name:"Ridoartha Sumarna",quote:"Semua butuh waktu."},
{no:29,name:"Rishelin Putri Syawaluna",quote:"Kamu pasti bisa."},
{no:30,name:"Rizki Abdul Mustajab",quote:"Mulai sekarang, bukan nanti."},
{no:31,name:"Safira Aulia",quote:"Optimis adalah kekuatan."},
{no:32,name:"Sarifahtul Aulia",quote:"Berani mencoba itu penting."},
{no:33,name:"Syfha Novianti",quote:"Jangan berhenti karena lelah."},
{no:34,name:"Vippy Septavia Rubianti",quote:"Langkah kecil, hasil besar."},
{no:35,name:"Wahid Fahriansyah Mubarok",quote:"Disiplin adalah jalan sukses."},
{no:36,name:"Yuda Andriyan",quote:"Mimpi besar butuh keberanian."}
];

const list=document.getElementById("list");

/* RENDER */
function render(data){
  const keyword=document.getElementById("search").value.toLowerCase();
  list.innerHTML="";

  data.forEach((m,i)=>{
    const avatar=`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=random`;

    list.innerHTML+=`
    <div class="card" onclick="openPopup('${m.name}',${m.no},'${avatar}','${m.quote}')">
      <img src="${avatar}">
      <div class="number">Absen ${m.no}</div>
      <div class="name">${m.name}</div>
    </div>
    `;
  });

  AOS.refresh();
}

render(members);

/* SEARCH */
document.getElementById("search").addEventListener("input",e=>{
  const val=e.target.value.toLowerCase();
  const filtered=members.filter(m=>
    m.name.toLowerCase().includes(val)||
    m.no.toString().includes(val)
  );
  render(filtered);
});

/* POPUP */
function openPopup(name,no,img,quote){
  popup.classList.add("active");
  overlay.classList.add("active");
  popName.innerText=name;
  popAbsen.innerText="Absen "+no;
  popImg.src=img;
  popQuote.innerText=quote;
}

function closePopup(){
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

/* MUSIC */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let isPlaying=false;

function toggleMusic(){
  if(!isPlaying){
    music.play();
    btn.innerText="⏸ Pause";
  }else{
    music.pause();
    btn.innerText="▶️ Play";
  }
  isPlaying=!isPlaying;
}
