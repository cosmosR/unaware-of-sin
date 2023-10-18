let target = document.querySelector("#dynamic");
let stringArr = [
    "초대장을 받았더니 여기까지 오게 됐다",
  "여기가 그 삶은 개구리 뭐시긴가...?",
  "환영합니다! 잘 찾아오셨네요",
  "허가된 이용자만 접근하실 수 있습니다.",
  "(#)드디어 왔네 준비하자. 그냥아.ㄴㅇㄹㅇ2312230101010",
  "Boil@ed@31 Fro^&g S34yndrome Cl!010ub!@입니다$@#?"
];

let currentIndex = 0;  // Track the current index of the string to display

function getNextString() {
  // Get the next string in the array
  const nextString = stringArr[currentIndex];
  
  // Increment the index for the next call
  currentIndex = (currentIndex + 1) % stringArr.length;

  return nextString;
}

// Reset
function resetTyping() {
  target.textContent = "";
  dynamic(getNextString().split(""));
}

// Display one character at a time
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function() {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 1000);
  }
}

dynamic(getNextString().split());




// 커서 깜빡임
function blink(){
        target.classList.toggle("active");

    }
    // toggle 토글 설정

setInterval(blink, 500);
// 0.5초 간격으로 깜빡




// 지문누르면 화면 전환

function toggleScreen() {
    var First = document.querySelector('.first');
    var Second = document.querySelector('.second');
    // var bG = document.querySelector('body')
    
    First.classList.toggle('onblock');
    
   if (Second.style.display === 'block') {
    Second.style.display = 'none';
} else {
    Second.style.display = 'block';
};

showDoor();
}

// 3번째 화면 
function toggleScreen2() {
    var Second = document.querySelector('.second');
    var Third = document.querySelector('.third');
    // var bG = document.querySelector('body')
    
    
   if (Second.style.display === 'block') {
    Second.style.display = 'none';
} else {
    Second.style.display = 'block';
};

if (Third.style.display === 'block') {
    Third.style.display = 'none';
} else {
    Third.style.display = 'block';
};

var audio = new Audio('fiveman.mp3');
audio.volume = 0.2;
        audio.play();



}





// ****  https://codepen.io/rudtjd2548/pens/public?cursor=ZD0xJm89MCZwPTEmdj02Mjg2NjQzNA== 에서 따온 텍스트박스 코드

function addTypingEffect({ 
    element, texts = [], speed = 10, padding = '15px',
    onCompletion = () => {}  // Callback function for animation completion
  }) {
    let maxWidth = 0
    let minHeight = 9999
    texts.forEach(text => {
      element.style.opacity = 0
      element.innerText = text
      maxWidth = Math.max(element.clientWidth, maxWidth)
      minHeight = Math.min(element.clientHeight, minHeight)
    })
  
    let order = 0
    let text = texts[order]
    element.innerText = ''
    element.style.width = 1000 + 'px'
    element.style.minHeight = 0 + 'px'
    element.style.opacity = 1
    element.style.padding = padding
    element.style.position = 'relative'
    element.style.cursor = 'pointer'
    element.style.whiteSpace = 'pre-line'
  
    const arrowButton = document.createElement('div')
    arrowButton.innerHTML = '▾'
    arrowButton.style.position = 'absolute'
    arrowButton.style.right = '0'
    arrowButton.style.bottom = '0'
  
    let isFinished = false
    let timer
  
    const animate = () => {
      let index = 0
      let count = 0
      timer = setInterval(() => {
        count++
        if (count % (speed / 10) === 0) {
          element.innerText += text[index] === ' ' ? `\u00a0` : text[index]
          if (index === text.length - 1) {
            isFinished = true
            clearInterval(timer)
            if (texts.length !== order + 1) {
              element.append(arrowButton)
            }
          } else index++
        }
      }, 10)
    }

    animate()

    element.addEventListener('click', () => {
        if (isFinished) {
          if (texts.length > 1 && texts.length !== order + 1) {
            order++
            text = texts[order]
            element.innerText = '';
            isFinished = false;
            animate();
          }
        } else {
            clearInterval(timer);
            element.innerText = text;
            isFinished = true;
            if (texts.length !== order + 1) {
              element.append(arrowButton);
          }
        }
      })
    }


    const atext = document.querySelector('.atext');
    addTypingEffect({
    element: atext,
    texts: [
        `안녕하세요. 당신을 기다리고 있었습니다.`,
        `(직원으로 보이는 사람이 나를 반긴다)`,
        `네? 저를 왜 기다려요 첨 뵙는데요 저는...`,
        `아니 그리고 왜 제 지문이 등록돼있죠?? 여긴 뭐하는 곳이죠?`,
        `(대답이 없다)`,
        `여기서 나가야겠어... 불길해. 문이 저기있다. 나가자`,
        `어라?`
    ],
    speed: 50,
    });


    const btext = document.querySelector('.btext');
    addTypingEffect({
    element: btext,
    texts: [
        `뭐야 왜이러세요? 왜 나를 가두는거죠??!!`,
        `너는 가시돋친 말로 사람들을 아프게했지.`,
        `다시는 피해자가 나오지 않도록 너를 여기에 가둬둘거야.`
        `뭐라고?? 내가 뭘했다고 그래!!!! 꺼내줘!!!`,
        `...`,
        `...어디 거기서 그 잘난 입을 가지고 살아남아보라고`,
        `-다음시간에 계속-`
    ],
    speed: 50,
    });

    const Chan = document.getElementById('Chan');
    const door = document.getElementById('door');

    // 문 생김
    function showDoor() {
        setTimeout(function() {
            var img = document.getElementById('door');
            if (img) {
              img.style.display = 'block';
            }
          }, 10000);

          
      }

      
      var audio = new Audio('MetalSound.wav');

    // 창살 떨어짐
    function ChanFall(){
        audio.volume = 0.2;
        audio.play();
        
        var Chan = document.getElementById('Chan');  // Replace 'Chan' with the actual ID of your element
        if (Chan) {
            Chan.style.animation = 'falling 1s forwards cubic-bezier(0,.65,.13,.85) 0.2s';}
        
        ;
        showMall();
    }

    door.addEventListener('click',ChanFall);



    function showMall() {
        setTimeout(function() {
            var mall = document.getElementById('mall');
            if (mall) {
              mall.style.display = 'block';
            }
          }, 3000);

          
      }


        


