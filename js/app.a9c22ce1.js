(function(){var t={134:function(){},3868:function(){},8887:function(){},7849:function(t,s,a){"use strict";var i=a(144),e=a(998),r=function(){var t=this,s=t._self._c;return s(e.Z,[s("app-header"),s("router-view"),s("scrollup-btn"),s("app-footer")],1)},l=[],c=a(7893),n=a(3201),o=a(3687),d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"header"},[s(n.Z,[s("div",{staticClass:"logo",attrs:{id:"logo"},on:{click:t.moveHome}},[t._v("Sukyung's Portfolio")]),s(o.Z),s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"link",attrs:{href:"#"}},[s(c.Z,{attrs:{text:""},on:{click:t.moveMain}},[t._v("ABOUT ME")])],1),s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project",expression:"'#project'"}],staticClass:"link",attrs:{href:"#"}},[s(c.Z,{attrs:{text:""},on:{click:t.moveMain}},[t._v("PROJECT")])],1),s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"link",attrs:{href:"#"}},[s(c.Z,{attrs:{text:""},on:{click:t.moveMain}},[t._v("SKILLS")])],1)],1)],1)},p=[],u=(a(7658),{methods:{moveHome(){this.$router.push("/"),window.scrollTo({top:0,left:0,behavior:"smooth"})},moveMain(){this.$router.push("/")}}}),g=u,f=a(1001),v=(0,f.Z)(g,d,p,!1,null,"5ef3b75c",null),m=v.exports,C=a(1998),Z=a(4886),y=a(9223),h=a(9819),_=a(4324),b=a(1713),j=function(){var t=this,s=t._self._c;return s("div",[s(h.Z,{attrs:{height:"auto",dark:"",padless:""}},[s(C.Z,{staticClass:"card",attrs:{flat:"",tile:""}},[s(n.Z,{attrs:{"align-center":"","justify-start":""}},[s("div",{staticClass:"pt-5 pl-5"},[s(b.Z,[s(c.Z,{attrs:{icon:"","x-large":""}},[s(_.Z,[t._v("mdi-email")])],1),s("div",{staticClass:"mt-3"},[t._v("xlvl369@gmail.com")])],1),s(b.Z,[s(c.Z,{attrs:{icon:"","x-large":""}},[s(_.Z,[t._v("mdi-cellphone")])],1),s("div",{staticClass:"mt-3"},[t._v("010-9061-8957")])],1),s(b.Z,{staticClass:"mb-5"},[s(c.Z,{attrs:{icon:"","x-large":""},on:{click:t.moveGit}},[s(_.Z,[t._v("mdi-github")])],1),s("div",{staticClass:"mt-3"},[t._v("github")])],1)],1)]),s("div",{staticClass:"close"},[t._v("Thank you for visiting!")]),s(y.Z),s(Z.ZB,{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),s("strong",[t._v("Sukyung's PORTFOLIO")])])],1)],1)],1)},w=[],k={methods:{moveGit(){window.open("https://github.com/Lee-suk?tab=repositories","_blank")}}},S=k,x=(0,f.Z)(S,j,w,!1,null,"7a5579ff",null),O=x.exports,T=function(){var t=this,s=t._self._c;return s("div",[t.visible?s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#logo",expression:"'#logo'"}],staticClass:"link",attrs:{href:"#"}},[s(c.Z,{attrs:{fixed:"",bottom:"",right:"",fab:""}},[s(_.Z,[t._v("mdi-arrow-up")])],1)],1):t._e()])},P=[],E={name:"Btn",data(){return{visible:!1}},mounted(){document.addEventListener("scroll",(t=>{console.log(t);const s=document.documentElement.scrollTop;console.log(s),this.visible=s>500}))}},I=E,B=(0,f.Z)(I,T,P,!1,null,"071a35cf",null),A=B.exports,J={name:"App",components:{AppHeader:m,AppFooter:O,ScrollupBtn:A},data:()=>({})},M=J,F=(0,f.Z)(M,r,l,!1,null,null,null),L=F.exports,$=a(8345),D=a(266),H=a(1267),N=a(9422),G=function(){var t=this,s=t._self._c;return s("div",[s("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:2500,disableOnInteraction:!1},options:t.swiperOption}},[s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/firstTop.jpg)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}},[s(n.Z,{attrs:{"data-aos":"fade-up","data-aos-duration":"1000","fill-height":"","align-center":"","justify-center":""}},[s("div",{staticClass:"slog"},[t._v("올바른 방향과 가치를 추구")])])],1),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/secondTop.jpg)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s("div",{staticClass:"slog"},[t._v("변화하는 시대에 적응")])])],1),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/thirdTop.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s("div",{staticClass:"slog"},[t._v("끊임없는 피드백으로 성장")])])],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header",attrs:{id:"about"}},[t._v("ABOUT ME")]),s(C.Z,[s(N.Z,{attrs:{"aspect-ratio":16/9}},[s("div",{staticClass:"bg",staticStyle:{"background-image":"url(image/introduce.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"center"}},[s("div",{staticClass:"intro"},[t._v("안녕하세요")]),s("span",{staticStyle:{"background-color":"#aed6f1"}},[s("vue-typer",{staticClass:"display-3",attrs:{text:["성장하는","도전하는","소통하는","책임감있는","변화하는"],repeat:1/0,"initial-action":"typing","pre-type-delay":100,"type-delay":200,"pre-erase-delay":1500,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"smooth"}})],1),s("div",{staticClass:"intro"},[t._v("인재 이수경입니다.")])])],1)],1)])],1)],1),s("div",{staticClass:"section",attrs:{id:"project"}},[s("div",{staticClass:"header"},[t._v("PROJECT")]),s(n.Z,{attrs:{wrap:""}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"slide-right"}},[s(N.Z,{attrs:{"aspect-ratio":1}},[s("img",{staticClass:"image",attrs:{src:"image/project/petfood.png"},on:{click:t.moveProject1}})])],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-down","data-aos-delay":"100"}},[s(N.Z,{attrs:{"aspect-ratio":1}},[s("img",{staticClass:"image",attrs:{src:"image/project/safecheck.png"},on:{click:t.moveProject2}})])],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-left","data-aos-delay":"200"}},[s(N.Z,{attrs:{"aspect-ratio":1}},[s("img",{staticClass:"image",attrs:{src:"image/project/localfood.png"},on:{click:t.moveProject3}})])],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-right"}},[s(N.Z,{attrs:{"aspect-ratio":1}},[s("img",{staticClass:"image",attrs:{src:"image/project/nomosquito.png"},on:{click:t.moveProject4}})])],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-up","data-aos-delay":"100"},on:{click:t.moveProject5}},[s(N.Z,{attrs:{"aspect-ratio":1}},[s("img",{staticClass:"image",attrs:{src:"image/project/interior.png"}})])],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-left","data-aos-delay":"200"},on:{click:t.moveProject6}},[s(N.Z,{attrs:{"aspect-ratio":1}},[s("img",{staticClass:"image",attrs:{src:"image/project/delivery.png"}})])],1)],1)],1),s("div",{staticClass:"section",attrs:{id:"skills"}},[s("div",{staticClass:"header"},[t._v("SKILLS")]),s(N.Z,{attrs:{"aspect-ratio":16/9}},[s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[s(C.Z,{staticClass:"card",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("LANGUAGE")])]),s(y.Z),s(b.Z,{attrs:{justify:"center",wrap:""}},[s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/python.png"}}),s("div",{staticClass:"sub"},[t._v("Python")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/C.png"}}),s("div",{staticClass:"sub"},[t._v("C")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/java.png"}}),s("div",{staticClass:"sub"},[t._v("java")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/javascript.png"}}),s("div",{staticClass:"sub"},[t._v("javascript")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/HTML5.png"}}),s("div",{staticClass:"sub"},[t._v("HTML5")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/CSS.png"}}),s("div",{staticClass:"sub"},[t._v("CSS")])])],1)],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[s(C.Z,{staticClass:"card",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("DEVELOP")])]),s(y.Z),s(b.Z,{attrs:{justify:"center",wrap:""}},[s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/flask.png"}}),s("div",{staticClass:"sub"},[t._v("Flask")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/nodejs.png"}}),s("div",{staticClass:"sub"},[t._v("Node.js")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/vuejs.png"}}),s("div",{staticClass:"sub"},[t._v("Vue.js")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/swift.png"}}),s("div",{staticClass:"sub"},[t._v("Swift")])]),s(D.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img",attrs:{src:"image/skills/arduino.png"}}),s("div",{staticClass:"sub"},[t._v("Arduino")])])],1)],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"900"}},[s(C.Z,{staticClass:"card",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("CERTIFICATE")])]),s(y.Z),s(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[s(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),s("h4",{staticClass:"pt-2 pl-3"},[t._v("정보처리기사")])],1),s(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[s(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),s("h4",{staticClass:"pt-2 pl-3"},[t._v("리눅스마스터 2급")])],1),s(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[s(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),s("h4",{staticClass:"pt-2 pl-3"},[t._v("네트워크관리사")])],1),s(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[s(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),s("h4",{staticClass:"pt-2 pl-3"},[t._v("파이썬프로그래밍활용능력 2급")])],1),s(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[s(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),s("h4",{staticClass:"pt-2 pl-3"},[t._v("빅데이터분석실무 2급")])],1),s(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[s(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),s("h4",{staticClass:"pt-2 pl-3"},[t._v("인공지능전문가")])],1)],1)],1)],1)],1)],1)],1)},R=[],U=function(){var t=this,s=t._self._c;return s("div",{staticClass:"TextAnime1"},[s("transition-group",{staticClass:"title",attrs:{tag:"div"}},t._l(t.text,(function(a){return s("span",{key:a.id,staticClass:"item",domProps:{textContent:t._s(a.text)}})})),0)],1)},V=[],q={props:{autoplay:Boolean},data(){return{timer:null,index:0,original:["차분하지만 빠른 열정으로 오류를 잡아내고 끝까지 해결합니다.","변화에 빠르게 적응하고 다양한 생각을 공유할 수 있는 선도적이고 창의적이며 유연한 사람입니다.","자신감 있는 분야에서 최선을 다할 뿐만 아니라 AI와 보안 분야에서 학습에 대한 열정으로 지평을 넓히고 있습니다."],messages:[],text:""}},computed:{editor:{get(){return this.text.map((t=>t.text)).join("")},set(t){this.text=this.convText(t)}}},watch:{autoplay(t){clearTimeout(this.timer),t&&this.ticker()}},methods:{ticker(){this.timer=setTimeout((()=>{this.autoplay&&(this.index=this.index<this.messages.length-1?this.index+1:0,this.text=this.messages[this.index],this.ticker())}),5e3)},convText(t){const s={},a=t.split("").map((t=>(s[t]=s[t]?++s[t]:1,{id:`${t}_${s[t]}`,text:t})));return Object.freeze(a)}},created(){this.messages=this.original.map((t=>this.convText(t))),this.text=this.messages[0],this.ticker()}},K=q,Q=(0,f.Z)(K,U,V,!1,null,"43344a4b",null),z=Q.exports,W=a(697),X=(a(2633),a(2711)),Y=a.n(X),tt=a(172),st=a(7649),at=a(2997),it=a(5186);tt.Z.use([st.Z,at.Z,it.Z]);var et={name:"Home",data(){return{autoplay:!0,swiperOption:{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}}}},methods:{moveProject1(){this.$router.push("/petfood")},moveProject2(){this.$router.push("/safecheck")},moveProject3(){this.$router.push("/localfood")},moveProject4(){this.$router.push("/patent")},moveProject5(){this.$router.push("/interior")},moveProject6(){this.$router.push("/delivery")}},mounted(){Y().init()},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide,TextAnimate:z}},rt=et,lt=(0,f.Z)(rt,G,R,!1,null,"1deb218f",null),ct=lt.exports,nt=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/petfoodfull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("PetFoodChecking")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 반려동물 음식 성분 분석 웹사이트 ")])])])],1)],1),s(n.Z,{attrs:{"align-center":"","justify-end":""}},[s(C.Z,{staticClass:"card"},[s("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:3500,disableOnInteraction:!1},options:t.swiperOption}},[s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/select.png)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/simple.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/simpleresult.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/image.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/imageresult.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/userDB.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/managerDB.png)"}})],1)],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("개발 목적")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT1")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 최근 핵가족화 및 1인 가구 증가로 반려동물을 키우는 가구가 늘면서 관련 펫푸드 시장과 반려동물 헬스케어 시장이 함께 비례적으로 확대되고, 이에 따라 펫푸드 관련 영양성분에 대한 관심이 커지고 있음. ")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT2")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 수업 시간에 공부한 딥러닝을 이용하여 이미지 인식, 문자 인식 기술을 기반으로, 반려동물이 섭취해도 되는 식품과 섭취하면 안 되는 식품을 구별하는 반려동물의 헬스케어를 위한 프로그램을 제작하기로 함 ")])])],1)],1)],1)],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("시스템 구성도")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s("img",{staticClass:"image",attrs:{src:"image/project/petfood/system.png"}})]),s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:""}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("Database")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("li",[t._v("사용자 인증 및 정보 관리")]),s("li",[t._v("사진 분석 결과 정보 관리")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("API")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("li",[t._v("사진 업로드")]),s("li",[t._v(" OpenCV와 EasyOCR로 업로드된 식품의 성분표 사진을 분석하여 섭취해도 되는 성분과 섭취하면 안 되는 성분을 구분 ")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"900"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("WEB")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("li",[t._v("시스템 기능 및 동작")])])],1)],1)],1)],1)],1)},ot=[];tt.Z.use([st.Z,at.Z,it.Z]);var dt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){Y().init()}},pt=dt,ut=(0,f.Z)(pt,nt,ot,!1,null,"4ea4c511",null),gt=ut.exports,ft=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/safecheckfull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("SafeCheck")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 방문자 발열체크 및 안심번호 팔찌 인식을 ")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" 통한 개인정보 관리 시스템 ")])])])],1)],1),s(n.Z,{attrs:{"align-center":"","justify-end":""}},[s(C.Z,{staticClass:"card"},[s("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:3500,disableOnInteraction:!1},options:t.swiperOption}},[s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app1.png)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app2.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app3.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app4.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app5.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app6.png)"}})],1)],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("개발 목적")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT1")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 코로나19의 감염을 사전에 방지하고자 실시하는 발열 체크와 전자출입명부 작성을 기존에 각각 실시하던 것과 달리, 발열 체크와 출입자 개인의 QR코드 인증 및 재발급의 번거로움을 줄임. ")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT2")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 동시에 개인 정보 유출 우려를 방지하고 안전한 데이터를 활용하여 편리함을 증가시키기 위함. ")])])],1)],1)],1)],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("시스템 구성도")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s("img",{staticClass:"image",attrs:{src:"image/project/safecheck/system.png"}})])],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("시스템 시연")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s("img",{staticClass:"img",attrs:{src:"image/project/safecheck/test.png"}})])],1)],1)},vt=[];tt.Z.use([st.Z,at.Z,it.Z]);var mt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){Y().init()}},Ct=mt,Zt=(0,f.Z)(Ct,ft,vt,!1,null,"11ad9da1",null),yt=Zt.exports,ht=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/localfoodfull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("동네푸드")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 사용자 배달음식 및 식자재 거래와 ")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" 동네 주민간 소통을 위한 앱 ")])])])],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("개발 목적")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT1")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 단절된 이웃관계로 인해 최근 여러 사회적인 문제점을 낳고 있는데, 이러한 문제는 소통 및 교류 활성화를 통해 극복해야 한다. 하지만 코로나로 인해 사회적 거리두기가 심화되면서 소통 및 교류가 더욱 불가능해졌다. ")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT2")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 배달 수수료 증가와 최소 주문 금액이 생기면서 1인분 주문이 거의 불가능해졌다. 또한 점주들은 배달앱 수수료 부담으로 음식 가격은 인상하고 음식 양은 줄이는 방식으로 수수료 부담을 경감하고 있어 소비자 및 점주들에게 서로 부담이 되고있다. ")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"900"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT3")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 음식 재료를 살 때 내가 필요한 양보다 많이 사게 되는 경우나 1인가구가 먹기엔 배달음식의 양이 많은 경우 재료 및 음식이 남아 음식물 쓰레기가 증가하게 된다. ")])])],1)],1)],1)],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("앱구성도")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s("img",{staticClass:"image",attrs:{src:"image/project/localfood/appstructure.png"}})])],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("앱 시연 영상")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s("video",{staticClass:"video",attrs:{controls:""}},[s("source",{attrs:{src:"video/local1.mp4",type:"video/mp4"}})]),s("video",{staticClass:"video",attrs:{controls:""}},[s("source",{attrs:{src:"video/local2.mp4",type:"video/mp4"}})]),s("video",{staticClass:"video",attrs:{controls:""}},[s("source",{attrs:{src:"video/local3.mp4",type:"video/mp4"}})])])],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("적용기술")]),s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down"}},[s(C.Z,{staticClass:"card3",attrs:{outlined:""}},[s(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s(D.Z,[s("li",[t._v("형상관리: Git")]),s("li",[t._v("IDE: 안드로이드 스튜디오")]),s("li",[t._v("언어: Java")]),s("li",[t._v("데이터베이스: Firebase Database")]),s("li",[t._v(" 로그인: Firebase authentication "),s("ul",[t._v(" -> 이메일/구글 계정 로그인 ")])]),s("li",[t._v("이미지 : Storage")])])],1)],1)],1)],1)],1)])},_t=[];tt.Z.use([st.Z,at.Z,it.Z]);var bt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){Y().init()}},jt=bt,wt=(0,f.Z)(jt,ht,_t,!1,null,"e3879c86",null),kt=wt.exports,St=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/nomosquitofull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("휴대용 회전형 모기퇴치기")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 이산화티타늄 볼을 이용한 특허출원 제품 ")])])])],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("개발 목적")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s(b.Z,{attrs:{justify:"center"}},[s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT1")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 매년 모기로 인한 사망자 수는 70만명 이상이고, 그 중 5세 미만의 영유아 비율이 무려 86%에 달한다. 그리고 국내 연간 모기로 인한 병원 방문자 수는 2천명 이상이고, 매년 모기로 인한 전염병 보균자 비율은 55%이다. 이렇게 모기로 인한 심각성은 크다. ")])])],1)],1),s(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[s(C.Z,{staticClass:"card2",attrs:{outlined:""}},[s("div",{attrs:{align:"center"}},[s("div",{staticClass:"title"},[t._v("OBJECT2")])]),s(y.Z,{staticClass:"mb-3"}),s(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[s("div",[t._v(" 어지러움, 두통 유발하고 시체처리의 번거로움, 전기로 인한 위험 증가 등 기존 제품의 문제점들을 해결하고자 개발함. ")])])],1)],1)],1)],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("제품 도면")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s("img",{staticClass:"image",attrs:{src:"image/project/patent/drawing.png"}}),s("img",{staticClass:"image",attrs:{src:"image/project/patent/detail.png"}})])],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("여성발명왕EXPO 참가")]),s(n.Z,{attrs:{"justify-center":"","align-center":""}},[s(b.Z,{attrs:{align:"center"}},[s("img",{staticClass:"img1",attrs:{src:"image/project/patent/poster1.jpg"}}),s("img",{staticClass:"img2",attrs:{src:"image/project/patent/poster2.jpg"}})])],1)],1)])},xt=[],Ot=a(8887),Tt=a.n(Ot),Pt=Tt(),Et=(0,f.Z)(Pt,St,xt,!1,null,"15ec2124",null),It=Et.exports,Bt=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/interiorfull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("작은공간")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 인테리어에 관심이 있는 사용자를 위한 웹사이트 ")])])])],1)],1),s("div",{staticClass:"section"},[s("div",{staticClass:"header"},[t._v("웹사이트 디자인")]),s(n.Z,{attrs:{"align-center":"","justify-center":""}},[s(C.Z,{staticClass:"card"},[s("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:3500,disableOnInteraction:!1},options:t.swiperOption}},[s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/HOME.png)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/IDEA.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/INFO.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/GUIDE.png)"}}),s("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/F.A.Q.png)"}})],1)],1)],1)],1)])},At=[];tt.Z.use([st.Z,at.Z,it.Z]);var Jt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){Y().init()}},Mt=Jt,Ft=(0,f.Z)(Mt,Bt,At,!1,null,"ad396914",null),Lt=Ft.exports,$t=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/emotionsongfull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("EmojiSong")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 이모티콘 별 노래 추천 앱(ios) ")])])])],1)],1)])},Dt=[],Ht=a(3868),Nt=a.n(Ht),Gt=Nt(),Rt=(0,f.Z)(Gt,$t,Dt,!1,null,"0fe7ce92",null),Ut=Rt.exports,Vt=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/deliveryfull.png)"}},[s(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[s(D.Z,{attrs:{align:"start"}},[s("div",{staticClass:"intro"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("배달중개")])]),s("div",{staticClass:"sub"},[s("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 1인가구를 위한 배달비 중개 웹앱 ")])])])],1)],1)])},qt=[],Kt=a(134),Qt=a.n(Kt),zt=Qt(),Wt=(0,f.Z)(zt,Vt,qt,!1,null,"067777e0",null),Xt=Wt.exports;i["default"].use($.ZP);const Yt=[{path:"/",name:"home",component:ct},{path:"/petfood",name:"petfood",component:gt},{path:"/safecheck",name:"safecheck",component:yt},{path:"/localfood",name:"localfood",component:kt},{path:"/patent",name:"patent",component:It},{path:"/interior",name:"interior",component:Lt},{path:"/emotion",name:"emotion",component:Ut},{path:"/delivery",name:"delivery",component:Xt}],ts=new $.ZP({mode:"history",base:"/portfolio/",routes:Yt});var ss=ts,as=a(8864);i["default"].use(as.Z);var is=new as.Z({}),es=a(3354),rs=a.n(es),ls=a(3081);i["default"].use(ls),i["default"].use(ls,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),i["default"].use(rs()),i["default"].config.productionTip=!1,new i["default"]({router:ss,vuetify:is,render:t=>t(L)}).$mount("#app")}},s={};function a(i){var e=s[i];if(void 0!==e)return e.exports;var r=s[i]={exports:{}};return t[i].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(s,i,e,r){if(!i){var l=1/0;for(d=0;d<t.length;d++){i=t[d][0],e=t[d][1],r=t[d][2];for(var c=!0,n=0;n<i.length;n++)(!1&r||l>=r)&&Object.keys(a.O).every((function(t){return a.O[t](i[n])}))?i.splice(n--,1):(c=!1,r<l&&(l=r));if(c){t.splice(d--,1);var o=e();void 0!==o&&(s=o)}}return s}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[i,e,r]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var i in s)a.o(s,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,i){var e,r,l=i[0],c=i[1],n=i[2],o=0;if(l.some((function(s){return 0!==t[s]}))){for(e in c)a.o(c,e)&&(a.m[e]=c[e]);if(n)var d=n(a)}for(s&&s(i);o<l.length;o++)r=l[o],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(7849)}));i=a.O(i)})();
//# sourceMappingURL=app.a9c22ce1.js.map