import boasPic from "./images/boas.jpeg";
import feynmanPic from "./images/feynman.jpeg";
import taylorPic from "./images/taylor.jpeg";
import griffithsEdPic from "./images/griffithsed.jpeg";
import griffithsQmPic from "./images/griffithsqm.jpeg";
import griffithsIepPic from "./images/griffithsiep.jpeg";
import reifPic from "./images/reif.jpeg";
import klauberPic from "./images/klauber.jpeg";
import lambournePic from "./images/lambourne.jpeg";

export const physicBooks = [
  {
    id: 0,
    author: "Mary L. Boas",
    title: "Mathematical methodes for the physical sciences",
    image: boasPic,
    unitPrice: 65.0,
    numberPurchased: 0,
  },
  {
    id: 1,
    author: "Richard Feynman",
    title: "The Feynman lectures on physics",
    image: feynmanPic,
    unitPrice: 111.99,
    numberPurchased: 0,
  },
  {
    id: 2,
    author: "John R. Taylor",
    title: "Classical Mechanics",
    image: taylorPic,
    unitPrice: 61.99,
    numberPurchased: 0,
  },
  {
    id: 3,
    author: "David J. Griffiths",
    title: "Introduction to electrodynamics",
    image: griffithsEdPic,
    unitPrice: 48.92,
    numberPurchased: 0,
  },
  {
    id: 4,
    author: "David J. Griffiths",
    title: "Introduction to quantum mechanics",
    image: griffithsQmPic,
    unitPrice: 48.92,
    numberPurchased: 0,
  },
  {
    id: 5,
    author: "David J. Griffiths",
    title: "Introduction to elementary particles",
    image: griffithsIepPic,
    unitPrice: 55.01,
    numberPurchased: 0,
  },
  {
    id: 6,
    author: "Robert D. Klauber",
    title: "Student friendly quantum field theory",
    image: klauberPic,
    unitPrice: 62.97,
    numberPurchased: 0,
  },
  {
    id: 7,
    author: "Frederich Reif",
    title: "Fundamentals of statistical and thermal physics",
    image: reifPic,
    unitPrice: 57.89,
    numberPurchased: 0,
  },
  {
    id: 8,
    author: "Robert J. A. Lambourne",
    title: "Relativity, Gravitation and Cosmology",
    image: lambournePic,
    unitPrice: 47.31,
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

export function tableLine(book, id) {
  const { author, title, unitPrice, numberPurchased } = book;
  return (
    <tr key={id}>
      <th>{author}</th>
      <th>{title}</th>
      <th>{unitPrice}</th>
      <th>{numberPurchased}</th>
      <th>{roundToPennies(totalPrice(book))}</th>
    </tr>
  );
}

function totalPrice(item) {
  return item.unitPrice * item.numberPurchased;
}

export function payable(items) {
  let payable = 0;
  items.forEach((item) => {
    payable += totalPrice(item);
  });
  return roundToPennies(payable);
}

function roundToPennies(value) {
  return (Math.round(100 * value) / 100).toFixed(2);
}
