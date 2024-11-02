<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quote Generator</title>
</head>
<body>
    <div id="quote"></div>
    <button onclick="newQuote()">New Quote</button>

    <script>
        const quotes = [
            "Life is what happens when you're busy making other plans.",
            "The purpose of our lives is to be happy.",
            "Get busy living or get busy dying.",
            "You have within you right now, everything you need to deal with whatever the world can throw at you."
        ];

        function newQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById('quote').innerText = quotes[randomIndex];
        }
    </script>
</body>
</html>
