// 로딩중
$(function() {
	const $loading = $('.loading');
	$loading.children('p').fadeOut();
	$loading.delay(500).fadeOut(2000,function(){
		$(this).remove();
	});
	
	
	$(window).on("load", function(){
		new WOW().init();//WOW 플러그인 연동
	});		
});


  const $header = document.querySelector('header');
  const $profile = document.getElementById('profile');
  const $aside = document.querySelector('aside');
  const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a');
  const $top = document.querySelector('aside>.top');

  const arrTopVal = [];
  let nowIdx = 0;
  let oldIdx = nowIdx;

document.querySelectorAll('section').forEach(function($section, idx){
	arrTopVal[idx] = $section.offsetTop;
});


$mnus.forEach(function($mnu, idx){
  $mnu.addEventListener('click', function(evt){
    evt.preventDefault();

    window.scrollTo({top:arrTopVal[idx]-66, behavior:'smooth'});

  });
});

window.addEventListener('scroll',function(){
  
  const scrollTop = Math.ceil(window.scrollY);

  console.log(`scrollTop = ${scrollTop}`);

  if(scrollTop>800){
    $header.classList.add('h-fixed');
    $profile.style.marginTop = '66px';
    // 높이 확인하기 
  }else{
    $header.classList.remove('h-fixed');
    $profile.style.marginTop = '0';
  }


  for(let i =0;i<$mnus.length;i++){
    if(scrollTop >= arrTopVal[i]-120){
      oldIdx = nowIdx;
      nowIdx = i;

      $mnus[oldIdx].parentElement.classList.remove('on');
      $mnus[nowIdx].parentElement.classList.add('on');

    }else if(scrollTop < arrTopVal[0]-120){
      $mnus[nowIdx].parentElement.classList.remove('on');
    }
  }

  const footDist = document.querySelector('footer').offsetTop;
  const view = (scrollTop+window.innerHeight) - footDist; 
  
  if(view>0){
    console.log(`view = ${view}`);
    $aside.style.marginBottom = view +'px';
  
  }else{
    $aside.style.marginBottom = 0;
  }

});


$top.addEventListener('click',function(evt){
  evt.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
});


//portfolio
$(function(){

  //페이드 슬라이드
  const $slides = $('#portfolio .slides-container>figure');
  const $indicator = $('#portfolio .slides-pagination>li>a');
  const $btnNext = $('#portfolio .next');
  const $btnPrev = $('#portfolio .prev');

  let nowIdx = 0;
  let oldIdx = nowIdx;


  function fadeFn(){
    $slides.eq(oldIdx).stop().fadeOut(200);//이전 슬라이드 사라짐 처리
    $slides.eq(nowIdx).stop().fadeIn(200).css({display:'flex'});//이번에 나타날 슬라이드 처리
    
    //활성화표시
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  }

  $indicator.on('click', function(evt){

    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = $indicator.index(this);

    fadeFn();
  });

$btnNext.on('click', function(evt){
  evt.preventDefault();

    oldIdx = nowIdx;
  
  if(nowIdx<$indicator.length-1){
    nowIdx++
  }else{
    nowIdx=0;
  }

  fadeFn();
});

$btnPrev.on('click', function(evt){
  evt.preventDefault();

    oldIdx = nowIdx;

  if(nowIdx<1){
    nowIdx=$indicator.length-1
  }else{
    nowIdx--;
  }

  fadeFn();
});


  //작업과정
  const $btnProc = $("#portfolio>.slides .proc");
  const $shadow = $("#portfolio>.slides .shadow");
  const $lightbox = $('#portfolio>.slides .lightbox');
  const $btnClse = $("#portfolio>.slides .clse");

  $btnProc.on('click', function(evt){
    evt.preventDefault();

    $shadow.hide().eq(nowIdx).show();//그림자 노출
  })

  //닫기
  $btnClse.on('click', function(){
    $shadow.hide();
  });


  //그림자영역을 클릭하면 닫힘
  $shadow.on('click', function(){
    $shadow.hide();
  });


  //이벤트전파 안되게 설정
  $lightbox.on('click', function(evt){
    evt.stopPropagation();
  });


  //ESC키를 이용한 닫기설정
  $(document).on('keyup', function(evt){
    console.log('현재 눌린 키의 번호는 '+ evt.which);
    if(evt.which=='27'){
      $shadow.hide();
    }
  });

  const spreadFn = function (el) {
    for (let i = 0; i < 6; i++) {
      $(el).eq(i).delay((i * 100) + 100).fadeIn(600);
    }

    for (let k = 0; k < 6; k++) {
      $(el).eq(k).delay((k + 6) * 100).fadeOut(600);
    }
};

spreadFn(".ring");

setInterval(function(){
  spreadFn("h4 .ring");
  spreadFn("h4+div .ring");
}, 3000);

});


// 새로고침 클릭시 맨 위로
window.onload = function() {
  setTimeout(function(){
    scrollTo(0,0);
  },500);
}