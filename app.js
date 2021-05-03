// 테스트
// alert('테스트');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var h1 = document.querySelector('h1');


// 랜덤 숫자 2개를 만든다
var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

console.log('넘1은:', num1);
console.log('넘2은:', num2);

// 주사위 이미지 표시하기
img1.setAttribute('src', 'images/dice'+num1+'.png');
img2.setAttribute('src', 'images/dice'+num2+'.png');


if(num1 > num2) {
    h1.textContent = "🚩play 1 win!"
}
else if(num1 < num2) {
    h1.textContent = "play 2 win!🚩"
}
else {
    h1.textContent = "draw!"
}