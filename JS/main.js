import ThreeContentSection from "./threeContentSection.js";

var body = document.querySelector("body");

var MIN_DURATION = 5;

function makeSnowflake() {
  var snowflake = document.createElement("div");
  var delay = Math.random() * 100;
  var initialOpacity = Math.random() + 0.3;
  // 애니메이션의 지속시간 == 속도
  var duration = Math.random() * 20 + MIN_DURATION;
  var flakeWidth = snowflake.style.width;

  snowflake.classList.add("snowflake");
  // snowflake.style.left = `${Math.random()*window.screen.width}px`;
  snowflake.style.left = Math.random() * 99 + "vw";
  // snowflake.style.left = `${calc(Math.random()*99vw - flakeWidthpx)}`;
  snowflake.style.animationDelay = delay + "s";
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = "snowFall " + duration + "s linear";

  body.appendChild(snowflake);

  setTimeout(function () {
    body.removeChild(snowflake);
    // makeSnowflake(); // 눈송이 무한생성
  }, (duration + delay) * 1000);
}

function makeSnowflakes(n) {
  for (var index = 0; index < n; index++) {
    // makeSnowflake();
    setTimeout(makeSnowflake, Math.random() * 20000);
  }
}

// window.onload = function () {
//   var mainBrandIcon = document.getElementById('rounded-brand-icon');
//   mainBrandIcon.addEventListener('click', function () {
//     makeSnowflakes(300+Math.random()*200);

//   })
//   // makeSnowflakes(300);
// }

var domContainer = document.getElementById("mainContentsWrapper");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(ThreeContentSection, { sectionName: "start" })
));

/* -------------------------------------------------------------------------- */
/*                 잘 적용되었는지 확인 할 수 있는 예제 코드                     */
/* -------------------------------------------------------------------------- */

// const domContainer = document.querySelector("#like_button_container")
// const root = ReactDOM.createRoot(domContainer)
// root.render(e(LikeButton))

// function name(params) {
//   return <button onClick={() => this.setState({ liked: true })}>Like</button>
// }