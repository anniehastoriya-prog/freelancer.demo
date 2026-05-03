/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
//State
/**@return {Freelancer} a name that randomly matches with an occupation and their price range*/
function makeName() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price_range =
    PRICE_RANGE[Math.floor(Math.random() * PRICE_RANGE.length)];
  return { name, occupation, price_range };
}
const names = Array.from({ length: NUM_FREELANCERS }, makeName);

//

//render
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Inspirational Quotes</h1>
    <QuoteCards></QuoteCards>
  `;
  $app.querySelector("QuoteCards").replaceWith(QuoteCards(quotes));
}
render();
