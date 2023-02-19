export function GettingStartCards(props) {
  var _props$contents = props.contents,
      title = _props$contents.title,
      detail = _props$contents.detail,
      num = _props$contents.num;

  var dangerousHTML = { __html: detail };
  return React.createElement(
    "li",
    null,
    React.createElement(
      "article",
      { className: "startWay" },
      React.createElement(
        "div",
        { className: "starWay-textWrapper" },
        React.createElement(
          "h4",
          { className: "startWayTitle" },
          title
        ),
        React.createElement("div", { className: "startWayBrief", dangerouslySetInnerHTML: dangerousHTML })
      ),
      React.createElement("img", { src: "./../img/started" + num + ".jpg", alt: num, className: "startWayImg" })
    )
  );
}

export function BenfitCards(props) {
  var _props$contents2 = props.contents,
      title = _props$contents2.title,
      detail = _props$contents2.detail,
      imgName = _props$contents2.imgName;

  var dangerousHTML = { __html: detail };
  return React.createElement(
    "li",
    null,
    React.createElement(
      "article",
      { className: "benefitItem" },
      React.createElement(
        "h4",
        { className: "benefitItemTitle" },
        title
      ),
      React.createElement(
        "p",
        { className: "benefitItemBrief" },
        detail
      ),
      React.createElement(
        "a",
        { href: "", className: "learnMore" },
        "Learn more"
      ),
      React.createElement("img", { src: "../../img/" + imgName, alt: "" + imgName, className: "benefitImg" })
    )
  );
}

export function ThreeContentSection(props) {
  var sectionName = props.sectionName,
      lists = props.lists,
      _props$mainSub = props.mainSub,
      main = _props$mainSub.main,
      sub = _props$mainSub.sub;


  return React.createElement(
    "section",
    { className: sectionName },
    React.createElement(
      "h3",
      { className: sectionName + "__main-title" },
      main
    ),
    React.createElement(
      "p",
      { className: sectionName + "__sub" },
      sub
    ),
    React.createElement(
      "ol",
      { className: sectionName + "__contents-list" },
      lists[0],
      lists[1],
      lists[2]
    )
  );
}

export default ThreeContentSection;