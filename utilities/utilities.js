/**
 * Returns an array of `n` random words, according to the current settings.
 */
export default function getWords(settings, w, n) {
    const words = w[settings.language.value.code];
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push({
            word: words[Math.floor(Math.random() * words.length)],
            state: 'default'
        });
    }
    return result;
}