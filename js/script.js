let brojJedan = Number(prompt("UNESITE PRVI BROJ: "));
let operacija = prompt("Unesite aritmetičku operaciju: (+, -, *, /)");
let brojDva = Number(prompt("UNESITE DRUGI BROJ: "));

switch (operacija) {
  case "+":
    document.write(
      `<h1>Brojevi koji su unešeni su ${brojJedan} & ${brojDva}. <br> Aritmetička operacija koja je korištena: <span style=color:red;> + SABIRANJE </span>  <br> ${brojJedan} + ${brojDva} = `,
      brojJedan + brojDva,
      `</h1>`
    );
    break;

  case "-":
    document.write(
      `<h1>Brojevi koji su unešeni su ${brojJedan} & ${brojDva}. <br> Aritmetička operacija koja je korištena: <span style=color:red;> - ODUZIMANJE </span>  <br> ${brojJedan} - ${brojDva} = `,
      brojJedan - brojDva,
      `</h1>`
    );
    break;

  case "*":
    document.write(
      `<h1>Brojevi koji su unešeni su ${brojJedan} & ${brojDva}. <br> Aritmetička operacija koja je korištena: <span style=color:red;> * MNOŽENJE </span>  <br> ${brojJedan} * ${brojDva} = `,
      brojJedan * brojDva,
      `</h1>`
    );
    break;

  case "/":
    document.write(
      `<h1>Brojevi koji su unešeni su ${brojJedan} & ${brojDva}. <br> Aritmetička  operacija koja je korištena: <span style=color:red;> / DIJELJENJE </span>  <br> ${brojJedan} / ${brojDva} = `,
      brojJedan / brojDva,
      `</h1>`
    );
    break;

  default:
    document.write(`<h1>Unijeli ste pogrešanu aritmetičku operaciju, pokušajte ponovo! Ponuđene opcije su (+ SABIRANJE, - ODUZIMANJE, * MNOŽENJE, / DIJELJENJE) </h1>`);
}
