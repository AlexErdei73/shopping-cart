export const physicBooks = [
  {
    id: 0,
    author: "Mary L. Boas",
    title: "Mathematical methodes for the physical sciences",
    image: "./images/boas.jpeg",
    unitPrice: 65.0,
    numberPurchased: 0,
  },
  {
    id: 1,
    author: "Richard Feynman",
    title: "The Feynman lectures on physics",
    image: "./images/feynman.jpeg",
    unitPrice: 111.99,
    numberPurchased: 0,
  },
  {
    id: 2,
    author: "John R. Taylor",
    title: "Classical Mechanics",
    image: "./images/taylor.jpeg",
    unitPrice: 61.99,
    numberPurchased: 0,
  },
  {
    id: 3,
    author: "David J. Griffiths",
    title: "Introduction to electrodynamics",
    image: "./images/griffithsed.jpeg",
    unitPrice: 48.92,
    numberPurchased: 0,
  },
  {
    id: 4,
    author: "David J. Griffiths",
    title: "Introduction to quantum mechanics",
    image: "./images/griffithsqm.jpeg",
    unitPrice: 48.92,
    numberPurchased: 0,
  },
  {
    id: 0,
    author: "David J. Griffiths",
    title: "Introduction to elementary particles",
    image: "./images/griffithsiep.jpeg",
    unitPrice: 55.01,
    numberPurchased: 0,
  },
  {
    id: 0,
    author: "Frederich Reif",
    title: "Fundamentals of statistical and thermal physics",
    image: "./images/reif.jpeg",
    unitPrice: 57.89,
    numberPurchased: 0,
  },
  {
    id: 0,
    author: "Robert J. A. Lambourne",
    title: "Relativity, Gravitation and Cosmology",
    image: "./images/lambourne.jpeg",
    unitPrice: 47.31,
    numberPurchased: 0,
  },
  {
    id: 0,
    author: "Robert D. Klauber",
    title: "Student friendly quantum field theory",
    image: "./images/klauber.jpeg",
    unitPrice: 62.97,
    numberPurchased: 0,
  },
];

export function itemsInCart(state) {
  let counter = 0;
  state.forEach((item) => {
    if (item.numberPurchased > 0) {
      counter += item.numberPurchased;
    }
  });
  return counter;
}

export function buttonText(id, state) {
  if (state[id].numberPurchased > 0) {
    return "Remove";
  } else {
    return "Buy Me!";
  }
}

export function tableLine(book) {
  const { author, title, unitPrice, numberPurchased } = book;
  return (
    <tr>
      <th>{author}</th>
      <th>{title}</th>
      <th>{unitPrice}</th>
      <th>{numberPurchased}</th>
      <th>{totalPrice(book)}</th>
    </tr>
  );
}

function totalPrice(item) {
  return roundToPennies(item.unitPrice * item.numberPurchased);
}

export function payable(items) {
  let payable = 0;
  items.forEach((item) => {
    payable += totalPrice(item);
  });
  return roundToPennies(payable);
}

function roundToPennies(value) {
  return Math.round(100 * value) / 100;
}
