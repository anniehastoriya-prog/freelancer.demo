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

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
const averageRate = getAverageRate();

/**@return {Freelancer} a name that randomly matches with an occupation and their price range*/
function makeFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return { name, occupation, rate };
}

/** @returns {number}  this is the average rate of all 'freelancer*/
function getAverageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0,
  );
  return total / freelancers.length;
}

/** @returns  represents a single element randomly from the given array */

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}
//=== Componets
// this is for the html elements
// AverageRate(rate)
// <p> the average is ${rate} </p>
// Freelancer- will come a s a list
//       <li>
//<span> {name} </span>
//<span> {occupation} </span>
//<span> {rate} </span>

function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${rate}</td>
    `;
  return $tr;
}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}
// the reason why we have the 2 is for the number to round to two decimal places- in Lesters Notes
//
function AverageRate() {
  const $p = document.createElement("p");
  $p.textContent = `The average rate is $${averageRate.toFixed(2)}.`;
  return $p;
}
// === render
// on the page we want it to show FreeLancers forum at the top
// then the average rate
// then the feelancers in a table that have the occupation and their rate.

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();
