
//인트로 부분 제이쿼리
$(function(){
	var welcomSection = $('.welcome-section'),
    enterButton = welcomSection.find('.enter-button');
    
    setTimeout(function(){
      welcomSection.removeClass('content-hidden');
    },800);
    
    enterButton.on('click',function(e){
      e.preventDefault();
      welcomSection.addClass('content-hidden').fadeOut();
    })
})


const square = document.querySelectorAll('.square');
const mozzie = document.querySelectorAll('.mozzie');//모기
const timeLeft = document.querySelector('#time-left');
const moz = (target) => {
  target.classList.add(".mozzie");
}


let score = document.querySelector('#score');
let textMoz = [
	'아야!', 
	'살려주세요!',
  '도망가야지!',
  '메롱!'
];


// 모기대사 랜덤 추출
function randomT() {
  let randomText  = Math.floor(Math.random() * 4);
  document.getElementById('text').innerText= textMoz[randomText];
}


let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;


function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mozzie');
  })

  //0~15까지 25개의 정수를 만들어 square에 저장
  let randomPosition = square[Math.floor(Math.random() * 25)];

  randomPosition.classList.add('mozzie');
  hitPosition = randomPosition.id;
}

// 클릭
square.forEach(id => {
  id.addEventListener('mouseup',  () =>{
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
      id.classList.remove('mozzie');
      randomT();
    }
  })

})

let timerId = null;
function mozzieMove() {
  
  //1000(1초) 마다 randomSquare(), countDown()실행.
  timerId = setInterval(function() {
    randomSquare();
    countDown();
  }, 1500);
document.getElementById('text').innerText="날아다니는 모기를 클릭해보세요!";
  setTimeout(function(){
    document.getElementById('text').innerText="START 버튼을 누르면 게임이 시작됩니다.";
}, 15000)

  //카운트다운 해주는 함수
  function countDown() { 
    currentTime--;
    timeLeft.textContent = currentTime;
  
    if(currentTime === 0){
      clearInterval(timerId);
      //전체 얻은 점수를 alert에 띄운다
      alert(`당신이 하늘나라로 보낸 모기는? ${result} 마리!` );
      result = 0;
      score.textContent = result;
      currentTime = 10;
      timeLeft= 10;
    }
  }
}



//고난이도(하드모드)
{

  let timerId = null;
  function mozzieMove_2() {
  
    timerId = setInterval(function() {
      randomSquare();
      countDown();
    }, 700);
  document.getElementById('text').innerText="날아다니는 모기를 클릭해보세요!";
  setTimeout(function(){
    document.getElementById('text').innerText="START 버튼을 누르면 게임이 시작됩니다.";
}, 7000)
  
  }
  
  //카운트다운 해주는 함수
  function countDown() { 
    currentTime--;
    timeLeft.textContent = currentTime;
  
    if(currentTime === 0){
      clearInterval(timerId);
      //전체 얻은 점수를 alert에 띄운다
      alert(`당신이 하늘나라로 보낸 모기는? ${result} 마리!` );
      result = 0;
      score.textContent = result;
      currentTime = 10;
      timeLeft= 10;
    }
  
  }
}