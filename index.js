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

// === State- data we need to keep track of.
// we want of freelancers with names, occupations and rate.
// average rate of all freelancers

/**@return {Freelancer} a name that randomly matches with an occupation and their price range*/
function makeName() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price_range = PRICE_RANGE(
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min)),
  );
  return { name, occupation, price_range };
}
const names = Array.from({ length: NUM_FREELANCERS }, makeName);

//=== Componets
// this is for the html elements
// AverageRate(rate)
// <p> the average is ${rate} </p>
// Freelancer- will come a s a list
//       <li>
//<span> {name} </span>
//<span> {occupation} </span>
//<span> {rate} </span>

// === render
// on the page we want it to show FreeLancers forum at the top
// then the average rate
// then the feelancers in a table that have the occupation and their rate.

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1
  <AverageRate></AverageRate>
        <table>
       <thead>
          <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Rate>/th>
         </tr>
        </thead>
  
   <tbody id="FreelancerRows"></tbody>
   </table>
 `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}
render();
