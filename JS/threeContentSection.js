function ThreeContentSection(props) {
  var sectionName = props.sectionName;


  return React.createElement(
    "section",
    { className: sectionName },
    React.createElement("h3", { className: sectionName + "__main-title" }),
    React.createElement(
      "p",
      { className: sectionName + "__sub" },
      "Earn Stars and get rewarded in a few easy steps."
    ),
    React.createElement("ol", { className: sectionName + "__contents-list" })
  );
}

export default ThreeContentSection;