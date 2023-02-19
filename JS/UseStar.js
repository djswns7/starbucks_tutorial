export function UseStar(props) {
  return React.createElement(
    "section",
    { className: "useStar" },
    React.createElement(
      "h3",
      { className: "useStarTitle" },
      "Get your favorites for free"
    ),
    React.createElement(
      "div",
      { className: "useStarHow" },
      React.createElement(
        "div",
        { className: "tabList" },
        React.createElement(
          "button",
          { className: "tab" },
          "25"
        ),
        React.createElement(
          "button",
          { className: "tab" },
          "50"
        ),
        React.createElement(
          "button",
          { className: "tab" },
          "150"
        ),
        React.createElement(
          "button",
          { className: "tab" },
          "200"
        ),
        React.createElement(
          "button",
          { className: "tab" },
          "400"
        )
      ),
      React.createElement(UseStarTabPannel, { contentsList: UseStarTabPannelContentsList[0], isVisible: true }),
      React.createElement(UseStarTabPannel, { contentsList: UseStarTabPannelContentsList[1], isVisible: false }),
      React.createElement(UseStarTabPannel, { contentsList: UseStarTabPannelContentsList[2], isVisible: false }),
      React.createElement(UseStarTabPannel, { contentsList: UseStarTabPannelContentsList[3], isVisible: false }),
      React.createElement(UseStarTabPannel, { contentsList: UseStarTabPannelContentsList[4], isVisible: false })
    )
  );
}

var UseStarTabPannelContentsList = [{ title: "Customize your drink", breif: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.", imgName: "tab-025.png", imgAlt: "25 star image" }, { title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more", breif: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.", imgName: "tab-025.png", imgAlt: "25 star image" }, {
  title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
  breif: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  imgName: "tab-025.png",
  imgAlt: "25 star image"
}, { title: "Sandwich, protein box or at-home coffee", breif: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.", imgName: "tab-025.png", imgAlt: "25 star image" }, { title: "Select Starbucks® merchandise", breif: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.", imgName: "tab-025.png", imgAlt: "25 star image" }];
function UseStarTabPannel(props) {
  var _props$contentsList = props.contentsList,
      title = _props$contentsList.title,
      breif = _props$contentsList.breif,
      imgName = _props$contentsList.imgName,
      imgAlt = _props$contentsList.imgAlt;

  var isVisible = props.isVisible;
  return React.createElement(
    "div",
    { className: "tabPannel " + (isVisible ? "" : "a11y-hidden") },
    React.createElement(
      "h4",
      { className: "tabPannelTitle" },
      title
    ),
    React.createElement(
      "p",
      { className: "tabPannelBreif" },
      breif
    ),
    React.createElement("img", { src: "../../img/" + imgName, alt: imgAlt })
  );
}