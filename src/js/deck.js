import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';

let deck = new Reveal({
    hash: true,
    plugins: [Markdown],
});

deck.initialize({
    width: 1080,
    height: 720,
    plugins: [
        Markdown,
        RevealHighlight
    ]
});
