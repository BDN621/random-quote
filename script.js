function App() {

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "text-center" }, /*#__PURE__*/
    React.createElement("div", { className: "jumbotron" }, /*#__PURE__*/
    React.createElement("div", { className: "card" }, /*#__PURE__*/
    React.createElement("div", { className: "card-header" }, "Inspiratonal Quotes"), /*#__PURE__*/
    React.createElement("div", { className: "card-body" },
    randomQuote ? /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h5", { className: "card-title" }, "- ", randomQuote.author || "No author"), /*#__PURE__*/
    React.createElement("p", { className: "card-text" }, "\"", randomQuote.text)) : /*#__PURE__*/


    React.createElement("h2", null, "Loading"), /*#__PURE__*/


    React.createElement("div", { className: "row" }), /*#__PURE__*/
    React.createElement("button", { onClick: getNewQuote, className: "btn btn-primary ml-3" }, "New Quote"))))));







}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));