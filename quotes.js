
const quotes = [
    "«Сначала подумай, потом скажи, потом сделай.» — Конфуций",
    "«Познай самого себя.» — Сократ",
    "«Поэзия — это дыхание души.»",
    "«История — учительница жизни.» — Цицерон",
    "«Слова могут лечить или разрушать.»",
    "«Каждый день — это новая строка в книге твоей жизни.»",
    "«Мудрость приходит с опытом, а не с возрастом.»",
    "«Чтение — это беседа с великими умами прошлого.»"
];

document.addEventListener("DOMContentLoaded", () => {
    const quoteBlock = document.getElementById("quote-of-the-day");
    const today = new Date().getDate(); // можно менять логику
    const quote = quotes[today % quotes.length];
    quoteBlock.textContent = quote;
});
