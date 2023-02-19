import { ThreeContentSection, GettingStartCards, BenfitCards } from "./threeContentSection.js";
import { UseStar } from "./UseStar.js";

var gettingStartContents = [{
  num: 1,
  title: "Create an account",
  detail: "To get started, <a href=\"#\">join now.</a> You can also <a href=\"#\">join in the app</a> to get access to the full range of Starbucks Rewards benefits."
}, {
  num: 2,
  title: "Order and pay how you’d like",
  detail: "Use cash, credit/debit card or save some time and pay right through the app. You\u2019ll collect Stars all ways.\n    <a href=\"#\">Learn how</a>"
}, {
  num: 3,
  title: "Earn Stars, get Rewards",
  detail: "As you earn Stars, you can redeem them for Rewards\u2014like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
}];

var benfitContents = [{
  imgName: "benefit-fun.jpg",
  title: "Fun freebies",
  detail: "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
}, {
  imgName: "benefit-ahead.jpg",
  title: "Order & pay ahead",
  detail: "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
}, {
  imgName: "benefit-faster.jpg",
  title: "Get to free faster",
  detail: "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
}];

var gettingStartLists = [React.createElement(GettingStartCards, { contents: gettingStartContents[0] }), React.createElement(GettingStartCards, { contents: gettingStartContents[1] }), React.createElement(GettingStartCards, { contents: gettingStartContents[2] })];

var benfitLists = [React.createElement(BenfitCards, { contents: benfitContents[0] }), React.createElement(BenfitCards, { contents: benfitContents[1] }), React.createElement(BenfitCards, { contents: benfitContents[2] })];

var domContainer = document.getElementById("mainContentsWrapper");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(ThreeContentSection, {
    mainSub: {
      main: "Getting started is easy",
      sub: "Earn Stars and get rewarded in a few easy steps."
    },
    sectionName: "start",
    lists: gettingStartLists
  }),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement(UseStar, null),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement("br", null),
  React.createElement(ThreeContentSection, {
    mainSub: {
      main: "Endless Extras",
      sub: "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee."
    },
    sectionName: "benefit",
    lists: benfitLists
  })
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