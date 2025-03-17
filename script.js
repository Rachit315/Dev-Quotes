// Local quotes API
const localQuotes = [
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        quote: "Programming isn't about what you know; it's about what you can figure out.",
        author: "Chris Pine"
    },
    {
        quote: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        quote: "Before software can be reusable it first has to be usable.",
        author: "Ralph Johnson"
    },
    {
        quote: "The function of good software is to make the complex appear to be simple.",
        author: "Grady Booch"
    },
    {
        quote: "Good programmers use their brains, but good guidelines save us having to think out every case.",
        author: "Francis Glassborow"
    },
    {
        quote: "You can't trust code that you did not totally create yourself.",
        author: "Ken Thompson"
    },
    {
        quote: "The only way to go fast, is to go well.",
        author: "Robert C. Martin (Uncle Bob)"
    },
    {
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John Woods"
    },
    {
        quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
        author: "Alan Perlis"
    },
    {
        quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        author: "Edsger W. Dijkstra"
    },
    {
        quote: "In theory, there is no difference between theory and practice. But, in practice, there is.",
        author: "Jan L. A. van de Snepscheut"
    },
    {
        quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
        author: "Muhammad Waseem"
    },
    {
        quote: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
        author: "Seymour Cray"
    },
    {
        quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        author: "Bill Gates"
    }
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    return localQuotes[randomIndex];
}

function displayQuote(quoteData) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    quoteElement.textContent = `"${quoteData.quote}"`;
    authorElement.textContent = `- ${quoteData.author}`;
}

// Only display quote when page loads
window.addEventListener('load', () => {
    const quote = getRandomQuote();
    displayQuote(quote);
});
