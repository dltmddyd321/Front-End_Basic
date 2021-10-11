const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
//const 상수로서 선언하는 JS의 변수형
//querySelector : css 파일을 호출하는 메서드

//Main 세션이 서서히 사라지고 QnA 세션이 서서히 나타나는 함수
function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";

  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";

    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    },450)
    
  },450);

  //qna.style.display = "block";
}
