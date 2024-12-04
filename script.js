const targetUrl = "./quotes.json";
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const theemColor = document.documentElement
const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
let quotesData;


const getQuotes = async () => {
    try {
        const res = await fetch(targetUrl);
         ({quotes: quotesData} =  await res.json());
        console.log(quotesData)
        // console.log(quotes);
        // console.log(quotes[3])
        return quotesData;
    } catch(error) {
        console.log(error);
    }
}

const updateQuote = () => {
    quoteText.textContent = quotesData.quote;
    quoteAuthor.textContent = quoteAuthor.author;
}

const getNewColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const getNewQuote = (quotesData) => {
    return quotesData[Math.floor(Math.random() * quotesData.length)]
}

$(document).ready(function() {
    $("button").on("click", function() {
        let color = getNewColor();
        let myQuote = getNewQuote(quotesData);
        // console.log(myQuote)
        $(".quote-text").fadeOut(500, function () {
            $(this).text(myQuote.quote).fadeIn(500);
        })
        $(".quote-author").fadeOut(500, function () {
            $(this).text(`- ${myQuote.author}`).fadeIn(500);
        })
        $("body, .button").animate({
            backgroundColor: color
        });
        $("body").animate({
            color: color
        })
    });
});
getQuotes().then(() => {
    console.log(quotesData);
})
