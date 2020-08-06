const randomQuotes = () => {
    const quoteArray = [
        'have a good day',
        'software development is cool',
        'i kinda want ice cream'
    ]
    const quoteIndex = Math.floor(Math.random() * quoteArray.length)
    return quoteArray[quoteIndex];
}

module.exports = {
    randomQuotes
}