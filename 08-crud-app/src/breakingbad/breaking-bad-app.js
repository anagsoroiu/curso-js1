/**
 * @returns {Promise<Object>} quote information
 */
const fecthQuote = async() =>{
    // Se utiliza un link diferente al 
    // curso ya que el del curso ya no es funcional
    // aunque si se hacen muchas peticiones se bloquea
    const res = await fetch('https://api.breakingbadapi.com/api/quote/random');
    const [quoteObj] = await res.json();
    
    console.log(quoteObj);
    return quoteObj;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...'
    // await fecthQuote();
    
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    nextQuoteButton.addEventListener('click', async() =>{
        element.innerHTML = 'Loading...'

        const quote = await fecthQuote();
        renderQuote(quote);
    });

    const renderQuote = (data) =>{
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    fecthQuote()
        .then(renderQuote);
}