function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
            setRandomQuote(quotes[randIndex])
    }   

    return (
<div className="text-center" >
        <div className="jumbotron">
            <div className="card">
                <div className="card-header">Inspirational Quotes</div>
                <div classname="card-body">
                    {randomQuote ? (
                        <>
                        <h5 className="card-title">- {randomQuote.author || "No author"}</h5>
                        <p className="card-text">&quot;{randomQuote.text}</p>
                        </>
                    ) : (
                        <h2>Loading</h2>
                    )}

                    <div className="row"></div>
                        <button onClick={getNewQuote} className="btn-primary ml-3">New Quote</button>
                </div>
            </div>
        </div>


</div>
    );
}


ReactDOM.render(<App/>, document.getElementById('app'))