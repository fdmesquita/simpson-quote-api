import axios from 'axios';
import React, { useEffect, useState } from "react";
import QuoteCard from './components/QuoteCard';

function App() {
  const [quote, setQuote] = useState(null);

  const getQuote = () => {
    // Send the request
    // Extract the DATA from the received response
    // Use this data to update the state
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes') //appelle une url
    .then((response) => response.data) //recupere la reponse et la traite au format qu'on veut
    .then((data) => {
        setQuote(data[0]); // recucpere le contenu de la reponse
    });
  }

  return (
    <>
    <div>
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
    {quote && <QuoteCard quote={quote.quote} character={quote.character} image={quote.image}/>}
    </>
  )
}

export default App;
