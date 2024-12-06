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
    const btnClicked = () => {
        let color = getNewColor();
        let myQuote = getNewQuote(quotesData);
        // console.log(myQuote)
        // $(".quote-text").fadeOut(500, function () {
        //     $(this).text(myQuote.quote).fadeIn(500);
        // })
        $(".quote-text").animate({
            opacity: 0
        }, 500, function () {
            $("#text").text(myQuote.quote);
            $(this).animate({
                opacity: 1
            })
        })
        // $(".quote-author").fadeOut(500, function () {
        //     $(this).text(`- ${myQuote.author}`).fadeIn(500);
        // })
        $(".quote-author").animate({
            opacity: 0
        }, function () {
            $("#author").text(myQuote.author);
            $(this).animate({
                opacity: 1
            })
        })
        $("body, .button").animate({
            backgroundColor: color
        });
        $("body").animate({
            color: color
        })
    }
    $("button").on("click", btnClicked);
    
    btnClicked();
});
getQuotes().then(() => {
    console.log(quotesData);
})
