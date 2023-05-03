var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
    //   第一張卡片內容
      cards1: [
        {
          title: "林冠廷",
          
          featurn: "認真負責、熱情開朗、喜愛觀察不同事物、面對未知事物勇於挑戰、重視朋友",
          interest:"閱讀、與朋友聊天、打排球",
          saying:"人生就像蒲公英,看似自由,卻身不由己",
        }, 
	],
    //   第二張卡片內容
      cards2: [
        {
            title: "林冠廷",
              
            learn1: "一年級  教育科技概論、教育心理學、教學原理與策略、平面設計、攝影與視覺傳達、.....",
            learn2: "二年級  3D動畫製作、網頁設計與製作、簡報呈現與口語表達、.....",
            learn3:"電腦入門與程式思維、資訊生活與法律、企業與法律",
        },
    ],
    //   第三張卡片內容
        cards3: [
        {
            title: "林冠廷",
                  
            link1: "https://docs.google.com/presentation/d/1A2B1BXVCSKCw__LMcyRG1ul59q1_lais/edit?usp=share_link&ouid=108097901754550188343&rtpof=true&sd=true",
            link2: "https://openprocessing.org/sketch/1525067",
            link3: "https://openprocessing.org/sketch/1422649",
            link4: "https://drive.google.com/drive/folders/1hUpaA8eA9312JV92u-ewPOQDW5RCcq8p?usp=share_link",
            link5: "https://drive.google.com/drive/folders/1G_j_ZTdry27GFI0xfrNPcJGdQDtskHTE?usp=share_link",
        },
    ],
    },
    //  幻燈片呈現
    mounted:function(){        
        swiper = new Swiper('.carousel', {
// ++++++++++++++++++++++++++++++++++++++++++++++++ //
            loop: true,//內容循環
            speed: 1000,           
            autoplay: { //自動播放下一頁
                delay: 2500,
                disableOnInteraction: false,
              },     
            effect: 'cards',
            grabCursor: true, // 碰到卡片時游標為手掌
// ++++++++++++++++++++++++++++++++++++++++++++++++ //
            navigation: {
                nextEl: '.swiper-button-next',  //上一頁按鈕物件
                prevEl: '.swiper-button-prev',  //下一頁按鈕物件
            },
            pagination: {
                el: ".swiper-pagination",   //分頁物件
            }
        });     

        }
  });

