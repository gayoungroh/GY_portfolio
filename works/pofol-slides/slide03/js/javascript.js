
const $indicators = document.querySelectorAll('.slides>.slides-pagination>li>a');
const $container = document.querySelector('.slides>.slides-container');

// 이전,다음
const $btnPrev = document.querySelector('.slides>.slides-navigation.prev');
const $btnNext = document.querySelector('.slides>.slides-navigation.next');

//재성,정지버튼
const $btnPlay = document.querySelector('.slides>.slides-auto.play');
const $btnStop = document.querySelector('.slides>.slides-auto.stop');


let = nowIdx = 0;
let = intervalKey = null;


$indicators.forEach(function($indicator, idx){
  $indicator.addEventListener('click',function(evt){
    evt.preventDefault();

    nowIdx = idx;

    //컨테이너 이동
    $container.style.left = -1000*nowIdx + 'px';

    //활성화표시
    $indicators.forEach(function(anchor, actIdx){
      anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
    });

   });
});


//이전버튼에 대한 클릭이벤트 구문
$btnPrev.addEventListener('click',function(evt){
  evt.preventDefault();

  if(nowIdx>0){
    nowIdx--;
  }else{
    nowIdx=5;
  }

  //컨테이너 이동
	$container.style.left = -1000*nowIdx + 'px';

  //활성화표시
  $indicators.forEach(function(anchor, actIdx){
    anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
  });


});


//다음버튼에 대한 클릭이벤트 구문
$btnNext.addEventListener('click',function(evt){
  evt.preventDefault();

  if(nowIdx<5){
    nowIdx++;
  }else{
    nowIdx=0;
  }

  //컨테이너 이동
  $container.style.left = -1000*nowIdx + 'px';

  //활성화표시
  $indicators.forEach(function(anchor, actIdx){
    anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
  });
});

//자동재생 함수
const autoPlay = function(){
  clearInterval(intervalKey);

  intervalKey = setInterval(function(){
    $btnNext.click();
  },2500);
};

autoPlay(); // 맨처음에 무조건 한번 실행


//자동재생 버튼에 클릭 대한 click 이벤트
$btnPlay.addEventListener('click',function(evt){
  evt.preventDefault();

  clearInterval(intervalKey);

  intervalKey = setInterval(function(){
    if(nowIdx<5){
      nowIdx++;
    }else{
      nowIdx=0;
    }

    autoPlay(); // 맨처음에 무조건 한번 실행

    $container.style.left = -1000*nowIdx + 'px';

    $indicators.forEach(function(anchor, actIdx){
      anchor.parentElement.classList.toggle('on', actIdx===nowIdx);
    });

  },1500);

});

//정지버튼 대한 click 이벤트
$btnStop.addEventListener('click',function(evt){
  evt.preventDefault();
  clearInterval(intervalKey);
});