
// 비디오 태그는 getElementById 사용해야 해서 id 값 주고 난 뒤에 하기 
const $myvideo = document.getElementById('myvideo');

const $btnPlay = $('.play');
const $btnPause = $('.pause');
const $btnResume = $('.resume');

$btnPlay.on('click',function(){
	$myvideo.load(); //처음으로 다시 돌아 갈때
	$myvideo.play(); //시작
});

$btnPause.on('click',function(){
	$myvideo.pause();//일시정지 이후 시작
});

$btnResume.on('click',function(){
	$myvideo.play(); // 정지후 그 상태에서 시작
});