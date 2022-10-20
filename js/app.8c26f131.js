(function(){var t={134:function(){},3868:function(){},8887:function(){},8222:function(t,a,s){"use strict";var i=s(144),e=s(998),r=function(){var t=this,a=t._self._c;return a(e.Z,[a("app-header"),a("router-view"),a("scrollup-btn"),a("app-footer")],1)},l=[],c=s(7893),n=s(3201),o=s(3687),d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"header"},[a(n.Z,[a("div",{staticClass:"logo",attrs:{id:"logo"},on:{click:t.moveHome}},[t._v("Sukyung's Portfolio")]),a(o.Z),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"link",attrs:{href:"#"}},[a(c.Z,{attrs:{text:""},on:{click:t.moveMain}},[t._v("ABOUT ME")])],1),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project",expression:"'#project'"}],staticClass:"link",attrs:{href:"#"}},[a(c.Z,{attrs:{text:""},on:{click:t.moveMain}},[t._v("PROJECT")])],1),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"link",attrs:{href:"#"}},[a(c.Z,{attrs:{text:""},on:{click:t.moveMain}},[t._v("SKILLS")])],1)],1)],1)},p=[],u=(s(7658),{methods:{moveHome(){this.$router.push("/"),window.scrollTo({top:0,left:0,behavior:"smooth"})},moveMain(){this.$router.push("/")}}}),g=u,f=s(1001),v=(0,f.Z)(g,d,p,!1,null,"5ef3b75c",null),m=v.exports,C=s(1998),Z=s(4886),y=s(9223),h=s(9819),_=s(4324),b=s(1713),j=function(){var t=this,a=t._self._c;return a("div",[a(h.Z,{attrs:{height:"auto",dark:"",padless:""}},[a(C.Z,{staticClass:"card",attrs:{flat:"",tile:""}},[a(n.Z,{attrs:{"align-center":"","justify-start":""}},[a("div",{staticClass:"pt-5 pl-5"},[a(b.Z,[a(c.Z,{attrs:{icon:"","x-large":""}},[a(_.Z,[t._v("mdi-email")])],1),a("div",{staticClass:"mt-3"},[t._v("xlvl369@gmail.com")])],1),a(b.Z,[a(c.Z,{attrs:{icon:"","x-large":""}},[a(_.Z,[t._v("mdi-cellphone")])],1),a("div",{staticClass:"mt-3"},[t._v("010-9061-8957")])],1),a(b.Z,{staticClass:"mb-5"},[a(c.Z,{attrs:{icon:"","x-large":""},on:{click:t.moveGit}},[a(_.Z,[t._v("mdi-github")])],1),a("div",{staticClass:"mt-3"},[t._v("source code")])],1)],1)]),a("div",{staticClass:"close"},[t._v("Thank you for visiting!")]),a(y.Z),a(Z.ZB,{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Sukyung's PORTFOLIO")])])],1)],1)],1)},w=[],k={methods:{moveGit(){window.open("https://github.com/Lee-suk?tab=repositories","_blank")}}},S=k,x=(0,f.Z)(S,j,w,!1,null,"65818c52",null),O=x.exports,T=function(){var t=this,a=t._self._c;return a("div",[t.visible?a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#logo",expression:"'#logo'"}],staticClass:"link",attrs:{href:"#"}},[a(c.Z,{attrs:{fixed:"",bottom:"",right:"",fab:""}},[a(_.Z,[t._v("mdi-arrow-up")])],1)],1):t._e()])},P=[],E={name:"Btn",data(){return{visible:!1}},mounted(){document.addEventListener("scroll",(t=>{console.log(t);const a=document.documentElement.scrollTop;console.log(a),this.visible=a>500}))}},I=E,B=(0,f.Z)(I,T,P,!1,null,"071a35cf",null),A=B.exports,J={name:"App",components:{AppHeader:m,AppFooter:O,ScrollupBtn:A},data:()=>({})},M=J,F=(0,f.Z)(M,r,l,!1,null,null,null),L=F.exports,$=s(8345),D=s(266),H=s(1267),N=s(9422),G=function(){var t=this,a=t._self._c;return a("div",[a("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:2500,disableOnInteraction:!1},options:t.swiperOption}},[a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/firstTop.jpg)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}},[a(n.Z,{attrs:{"data-aos":"fade-up","data-aos-duration":"1000","fill-height":"","align-center":"","justify-center":""}},[a("div",{staticClass:"slog"},[t._v("올바른 방향과 가치를 추구")])])],1),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/secondTop.jpg)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a("div",{staticClass:"slog"},[t._v("변화하는 시대에 적응")])])],1),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/thirdTop.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a("div",{staticClass:"slog"},[t._v("끊임없는 피드백으로 성장")])])],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header",attrs:{id:"about"}},[t._v("ABOUT ME")]),a(C.Z,[a(N.Z,{attrs:{"aspect-ratio":16/9}},[a("div",{staticClass:"bg",staticStyle:{"background-image":"url(image/introduce.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"center"}},[a("div",{staticClass:"intro"},[t._v("안녕하세요")]),a("span",{staticStyle:{"background-color":"#aed6f1"}},[a("vue-typer",{staticClass:"display-3",attrs:{text:["성장하는","도전하는","소통하는","책임감있는","변화하는"],repeat:1/0,"initial-action":"typing","pre-type-delay":100,"type-delay":200,"pre-erase-delay":1500,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"smooth"}})],1),a("div",{staticClass:"intro"},[t._v("개발자 이수경입니다.")])])],1)],1)])],1)],1),a(n.Z,{staticClass:"mx-20",attrs:{"justify-center":"","align-center":""}},[a("text-animate",{attrs:{autoplay:t.autoplay}})],1),a("div",{staticClass:"section",attrs:{id:"project"}},[a("div",{staticClass:"header"},[t._v("PROJECT")]),a(n.Z,{attrs:{wrap:""}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"slide-right"}},[a(N.Z,{attrs:{"aspect-ratio":1}},[a("img",{staticClass:"image",attrs:{src:"image/project/petfood.png"},on:{click:t.moveProject1}})])],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-down","data-aos-delay":"100"}},[a(N.Z,{attrs:{"aspect-ratio":1}},[a("img",{staticClass:"image",attrs:{src:"image/project/safecheck.png"},on:{click:t.moveProject2}})])],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-left","data-aos-delay":"200"}},[a(N.Z,{attrs:{"aspect-ratio":1}},[a("img",{staticClass:"image",attrs:{src:"image/project/localfood.png"},on:{click:t.moveProject3}})])],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-right"}},[a(N.Z,{attrs:{"aspect-ratio":1}},[a("img",{staticClass:"image",attrs:{src:"image/project/nomosquito.png"},on:{click:t.moveProject4}})])],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-up","data-aos-delay":"100"},on:{click:t.moveProject5}},[a(N.Z,{attrs:{"aspect-ratio":1}},[a("img",{staticClass:"image",attrs:{src:"image/project/interior.png"}})])],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"fade-left","data-aos-delay":"200"},on:{click:t.moveProject6}},[a(N.Z,{attrs:{"aspect-ratio":1}},[a("img",{staticClass:"image",attrs:{src:"image/project/delivery.png"}})])],1)],1)],1),a("div",{staticClass:"section",attrs:{id:"skills"}},[a("div",{staticClass:"header"},[t._v("SKILLS")]),a(N.Z,{attrs:{"aspect-ratio":16/9}},[a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[a(C.Z,{staticClass:"card",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("LANGUAGE")])]),a(y.Z),a(b.Z,{attrs:{justify:"center",wrap:""}},[a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/python.png"}}),a("div",{staticClass:"sub"},[t._v("Python")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/C.png"}}),a("div",{staticClass:"sub"},[t._v("C")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/java.png"}}),a("div",{staticClass:"sub"},[t._v("java")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/javascript.png"}}),a("div",{staticClass:"sub"},[t._v("javascript")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/HTML5.png"}}),a("div",{staticClass:"sub"},[t._v("HTML5")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/CSS.png"}}),a("div",{staticClass:"sub"},[t._v("CSS")])])],1)],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[a(C.Z,{staticClass:"card",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("DEVELOP")])]),a(y.Z),a(b.Z,{attrs:{justify:"center",wrap:""}},[a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/flask.png"}}),a("div",{staticClass:"sub"},[t._v("Flask")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/nodejs.png"}}),a("div",{staticClass:"sub"},[t._v("Node.js")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/vuejs.png"}}),a("div",{staticClass:"sub"},[t._v("Vue.js")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/swift.png"}}),a("div",{staticClass:"sub"},[t._v("Swift")])]),a(D.Z,{attrs:{align:"center"}},[a("img",{staticClass:"img",attrs:{src:"image/skills/arduino.png"}}),a("div",{staticClass:"sub"},[t._v("Arduino")])])],1)],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"900"}},[a(C.Z,{staticClass:"card",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("CERTIFICATE")])]),a(y.Z),a(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[a(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),a("h4",{staticClass:"pt-2 pl-3"},[t._v("정보처리산업기사")])],1),a(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[a(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),a("h4",{staticClass:"pt-2 pl-3"},[t._v("리눅스마스터 2급")])],1),a(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[a(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),a("h4",{staticClass:"pt-2 pl-3"},[t._v("네트워크관리사")])],1),a(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[a(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),a("h4",{staticClass:"pt-2 pl-3"},[t._v("파이썬프로그래밍활용능력 2급")])],1),a(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[a(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),a("h4",{staticClass:"pt-2 pl-3"},[t._v("빅데이터분석실무 2급")])],1),a(b.Z,{staticClass:"certif",attrs:{justify:"start"}},[a(_.Z,{attrs:{"x-large":""}},[t._v("mdi-file-certificate")]),a("h4",{staticClass:"pt-2 pl-3"},[t._v("인공지능전문가")])],1)],1)],1)],1)],1)],1)],1)},R=[],U=function(){var t=this,a=t._self._c;return a("div",{staticClass:"TextAnime1"},[a("transition-group",{staticClass:"title",attrs:{tag:"div"}},t._l(t.text,(function(s){return a("span",{key:s.id,staticClass:"item",domProps:{textContent:t._s(s.text)}})})),0)],1)},V=[],q={props:{autoplay:Boolean},data(){return{timer:null,index:0,original:["차분하지만 빠른 열정으로 오류를 잡아내고 끝까지 해결합니다.","변화에 빠르게 적응하고 다양한 생각을 공유할 수 있는 선도적이고 창의적이며 유연한 사람입니다.","자신감 있는 분야에서 최선을 다할 뿐만 아니라 AI와 보안 분야에서 학습에 대한 열정으로 지평을 넓히고 있습니다."],messages:[],text:""}},computed:{editor:{get(){return this.text.map((t=>t.text)).join("")},set(t){this.text=this.convText(t)}}},watch:{autoplay(t){clearTimeout(this.timer),t&&this.ticker()}},methods:{ticker(){this.timer=setTimeout((()=>{this.autoplay&&(this.index=this.index<this.messages.length-1?this.index+1:0,this.text=this.messages[this.index],this.ticker())}),5e3)},convText(t){const a={},s=t.split("").map((t=>(a[t]=a[t]?++a[t]:1,{id:`${t}_${a[t]}`,text:t})));return Object.freeze(s)}},created(){this.messages=this.original.map((t=>this.convText(t))),this.text=this.messages[0],this.ticker()}},K=q,Q=(0,f.Z)(K,U,V,!1,null,"43344a4b",null),z=Q.exports,W=s(697),Y=(s(2633),s(2711)),X=s.n(Y),tt=s(172),at=s(7649),st=s(2997),it=s(5186);tt.Z.use([at.Z,st.Z,it.Z]);var et={name:"Home",data(){return{autoplay:!0,swiperOption:{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}}}},methods:{moveProject1(){this.$router.push("/petfood")},moveProject2(){this.$router.push("/safecheck")},moveProject3(){this.$router.push("/localfood")},moveProject4(){this.$router.push("/patent")},moveProject5(){this.$router.push("/interior")},moveProject6(){this.$router.push("/delivery")}},mounted(){X().init()},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide,TextAnimate:z}},rt=et,lt=(0,f.Z)(rt,G,R,!1,null,"6a590361",null),ct=lt.exports,nt=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/petfoodfull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("PetFoodChecking")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 반려동물 음식 성분 분석 웹사이트 ")])])])],1)],1),a(n.Z,{attrs:{"align-center":"","justify-end":""}},[a(C.Z,{staticClass:"card"},[a("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:3500,disableOnInteraction:!1},options:t.swiperOption}},[a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/select.png)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/simple.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/simpleresult.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/image.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/imageresult.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/userDB.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/petfood/managerDB.png)"}})],1)],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("개발 목적")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT1")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 최근 핵가족화 및 1인 가구 증가로 반려동물을 키우는 가구가 늘면서 관련 펫푸드 시장과 반려동물 헬스케어 시장이 함께 비례적으로 확대되고, 이에 따라 펫푸드 관련 영양성분에 대한 관심이 커지고 있음. ")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT2")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 수업 시간에 공부한 딥러닝을 이용하여 이미지 인식, 문자 인식 기술을 기반으로, 반려동물이 섭취해도 되는 식품과 섭취하면 안 되는 식품을 구별하는 반려동물의 헬스케어를 위한 프로그램을 제작하기로 함 ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("시스템 구성도")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a("img",{staticClass:"image",attrs:{src:"image/project/petfood/system.png"}})]),a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:""}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("Database")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("li",[t._v("사용자 인증 및 정보 관리")]),a("li",[t._v("사진 분석 결과 정보 관리")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("API")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("li",[t._v("사진 업로드")]),a("li",[t._v(" OpenCV와 EasyOCR로 업로드된 식품의 성분표 사진을 분석하여 섭취해도 되는 성분과 섭취하면 안 되는 성분을 구분 ")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"900"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("WEB")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("li",[t._v("시스템 기능 및 동작")])])],1)],1)],1)],1)],1)},ot=[];tt.Z.use([at.Z,st.Z,it.Z]);var dt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){X().init()}},pt=dt,ut=(0,f.Z)(pt,nt,ot,!1,null,"4ea4c511",null),gt=ut.exports,ft=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/safecheckfull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("SafeCheck")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 방문자 발열체크 및 안심번호 팔찌 인식을 ")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" 통한 개인정보 관리 시스템 ")])])])],1)],1),a(n.Z,{attrs:{"align-center":"","justify-end":""}},[a(C.Z,{staticClass:"card"},[a("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:3500,disableOnInteraction:!1},options:t.swiperOption}},[a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app1.png)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app2.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app3.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app4.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app5.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/safecheck/app6.png)"}})],1)],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("개발 목적")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT1")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 코로나19의 감염을 사전에 방지하고자 실시하는 발열 체크와 전자출입명부 작성을 기존에 각각 실시하던 것과 달리, 발열 체크와 출입자 개인의 QR코드 인증 및 재발급의 번거로움을 줄임. ")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT2")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 동시에 개인 정보 유출 우려를 방지하고 안전한 데이터를 활용하여 편리함을 증가시키기 위함. ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("시스템 구성도")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a("img",{staticClass:"image",attrs:{src:"image/project/safecheck/system.png"}})])],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("시스템 시연")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a("img",{staticClass:"img",attrs:{src:"image/project/safecheck/test.png"}})])],1)],1)},vt=[];tt.Z.use([at.Z,st.Z,it.Z]);var mt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){X().init()}},Ct=mt,Zt=(0,f.Z)(Ct,ft,vt,!1,null,"11ad9da1",null),yt=Zt.exports,ht=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/localfoodfull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("동네푸드")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 사용자 배달음식 및 식자재 거래와 ")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" 동네 주민간 소통을 위한 앱 ")])])])],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("개발 목적")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT1")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 단절된 이웃관계로 인해 최근 여러 사회적인 문제점을 낳고 있는데, 이러한 문제는 소통 및 교류 활성화를 통해 극복해야 한다. 하지만 코로나로 인해 사회적 거리두기가 심화되면서 소통 및 교류가 더욱 불가능해졌다. ")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT2")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 배달 수수료 증가와 최소 주문 금액이 생기면서 1인분 주문이 거의 불가능해졌다. 또한 점주들은 배달앱 수수료 부담으로 음식 가격은 인상하고 음식 양은 줄이는 방식으로 수수료 부담을 경감하고 있어 소비자 및 점주들에게 서로 부담이 되고있다. ")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"900"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT3")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 음식 재료를 살 때 내가 필요한 양보다 많이 사게 되는 경우나 1인가구가 먹기엔 배달음식의 양이 많은 경우 재료 및 음식이 남아 음식물 쓰레기가 증가하게 된다. ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("앱구성도")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a("img",{staticClass:"image",attrs:{src:"image/project/localfood/appstructure.png"}})])],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("앱 시연 영상")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a("video",{staticClass:"video",attrs:{controls:""}},[a("source",{attrs:{src:"video/local1.mp4",type:"video/mp4"}})]),a("video",{staticClass:"video",attrs:{controls:""}},[a("source",{attrs:{src:"video/local2.mp4",type:"video/mp4"}})]),a("video",{staticClass:"video",attrs:{controls:""}},[a("source",{attrs:{src:"video/local3.mp4",type:"video/mp4"}})])])],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("적용기술")]),a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down"}},[a(C.Z,{staticClass:"card3",attrs:{outlined:""}},[a(n.Z,{staticClass:"ml-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a(D.Z,[a("li",[t._v("형상관리: Git")]),a("li",[t._v("IDE: 안드로이드 스튜디오")]),a("li",[t._v("언어: Java")]),a("li",[t._v("데이터베이스: Firebase Database")]),a("li",[t._v(" 로그인: Firebase authentication "),a("ul",[t._v(" -> 이메일/구글 계정 로그인 ")])]),a("li",[t._v("이미지 : Storage")])])],1)],1)],1)],1)],1)])},_t=[];tt.Z.use([at.Z,st.Z,it.Z]);var bt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){X().init()}},jt=bt,wt=(0,f.Z)(jt,ht,_t,!1,null,"e3879c86",null),kt=wt.exports,St=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/nomosquitofull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("휴대용 회전형 모기퇴치기")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 이산화티타늄 볼을 이용한 특허출원 제품 ")])])])],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("개발 목적")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a(b.Z,{attrs:{justify:"center"}},[a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"300"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT1")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 매년 모기로 인한 사망자 수는 70만명 이상이고, 그 중 5세 미만의 영유아 비율이 무려 86%에 달한다. 그리고 국내 연간 모기로 인한 병원 방문자 수는 2천명 이상이고, 매년 모기로 인한 전염병 보균자 비율은 55%이다. 이렇게 모기로 인한 심각성은 크다. ")])])],1)],1),a(H.Z,{staticClass:"pa-2",attrs:{xs4:"","data-aos":"flip-down","data-aos-delay":"600"}},[a(C.Z,{staticClass:"card2",attrs:{outlined:""}},[a("div",{attrs:{align:"center"}},[a("div",{staticClass:"title"},[t._v("OBJECT2")])]),a(y.Z,{staticClass:"mb-3"}),a(n.Z,{staticClass:"ml-5 mr-5",attrs:{wrap:"","justify-start":"","align-center":""}},[a("div",[t._v(" 어지러움, 두통 유발하고 시체처리의 번거로움, 전기로 인한 위험 증가 등 기존 제품의 문제점들을 해결하고자 개발함. ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("제품 도면")]),a(n.Z,{attrs:{"justify-center":"","align-center":""}},[a("img",{staticClass:"image",attrs:{src:"image/project/patent/drawing.png"}}),a("img",{staticClass:"image",attrs:{src:"image/project/patent/detail.png"}})])],1)])},xt=[],Ot=s(8887),Tt=s.n(Ot),Pt=Tt(),Et=(0,f.Z)(Pt,St,xt,!1,null,"fcee9314",null),It=Et.exports,Bt=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/interiorfull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("작은공간")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 인테리어에 관심이 있는 사용자를 위한 웹사이트 ")])])])],1)],1),a("div",{staticClass:"section"},[a("div",{staticClass:"header"},[t._v("웹사이트 디자인")]),a(n.Z,{attrs:{"align-center":"","justify-center":""}},[a(C.Z,{staticClass:"card"},[a("swiper",{staticClass:"swiper",attrs:{autoplay:{delay:3500,disableOnInteraction:!1},options:t.swiperOption}},[a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/HOME.png)"},attrs:{"data-aos":"fade-in","data-aos-duration":"1000"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/IDEA.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/INFO.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/GUIDE.png)"}}),a("swiper-slide",{staticClass:"slide",staticStyle:{"background-image":"url(image/project/interior/F.A.Q.png)"}})],1)],1)],1)],1)])},At=[];tt.Z.use([at.Z,st.Z,it.Z]);var Jt={data(){return{swiperOption:{loop:!0,autoplay:{delay:3500,disableOnInteraction:!1}}}},components:{Swiper:W.Swiper,SwiperSlide:W.SwiperSlide},mounted(){X().init()}},Mt=Jt,Ft=(0,f.Z)(Mt,Bt,At,!1,null,"ad396914",null),Lt=Ft.exports,$t=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/emotionsongfull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("EmojiSong")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 이모티콘 별 노래 추천 앱(ios) ")])])])],1)],1)])},Dt=[],Ht=s(3868),Nt=s.n(Ht),Gt=Nt(),Rt=(0,f.Z)(Gt,$t,Dt,!1,null,"0fe7ce92",null),Ut=Rt.exports,Vt=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("div",{staticClass:"top",staticStyle:{"background-image":"url(image/project/deliveryfull.png)"}},[a(n.Z,{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a(D.Z,{attrs:{align:"start"}},[a("div",{staticClass:"intro"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v("배달중개")])]),a("div",{staticClass:"sub"},[a("span",{staticStyle:{"background-color":"#ffffff"}},[t._v(" - 1인가구를 위한 배달비 중개 웹앱 ")])])])],1)],1)])},qt=[],Kt=s(134),Qt=s.n(Kt),zt=Qt(),Wt=(0,f.Z)(zt,Vt,qt,!1,null,"067777e0",null),Yt=Wt.exports;i["default"].use($.ZP);const Xt=[{path:"/",name:"home",component:ct},{path:"/petfood",name:"petfood",component:gt},{path:"/safecheck",name:"safecheck",component:yt},{path:"/localfood",name:"localfood",component:kt},{path:"/patent",name:"patent",component:It},{path:"/interior",name:"interior",component:Lt},{path:"/emotion",name:"emotion",component:Ut},{path:"/delivery",name:"delivery",component:Yt}],ta=new $.ZP({mode:"history",base:"/portfolio/",routes:Xt});var aa=ta,sa=s(8864);i["default"].use(sa.Z);var ia=new sa.Z({}),ea=s(3354),ra=s.n(ea),la=s(3081);i["default"].use(la),i["default"].use(la,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),i["default"].use(ra()),i["default"].config.productionTip=!1,new i["default"]({router:aa,vuetify:ia,render:t=>t(L)}).$mount("#app")}},a={};function s(i){var e=a[i];if(void 0!==e)return e.exports;var r=a[i]={exports:{}};return t[i].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(a,i,e,r){if(!i){var l=1/0;for(d=0;d<t.length;d++){i=t[d][0],e=t[d][1],r=t[d][2];for(var c=!0,n=0;n<i.length;n++)(!1&r||l>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[n])}))?i.splice(n--,1):(c=!1,r<l&&(l=r));if(c){t.splice(d--,1);var o=e();void 0!==o&&(a=o)}}return a}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[i,e,r]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var i in a)s.o(a,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(a){return 0===t[a]};var a=function(a,i){var e,r,l=i[0],c=i[1],n=i[2],o=0;if(l.some((function(a){return 0!==t[a]}))){for(e in c)s.o(c,e)&&(s.m[e]=c[e]);if(n)var d=n(s)}for(a&&a(i);o<l.length;o++)r=l[o],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(d)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(8222)}));i=s.O(i)})();
//# sourceMappingURL=app.8c26f131.js.map