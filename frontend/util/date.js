export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let word = (new Date(Date.now()) + 1).slice(0, 3);
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let date = "";
  switch (month) {
    case 1:
      date = `${word}, January ${day} ${year}`;
      break;
    case 2:
      date += `${word}, February ${day} ${year}`;
      break;
    case 3:
      date += `${word}, March ${day} ${year}`;
      break;
    case 4:
      date += `${word}, April ${day} ${year}`;
      break;
    case 5:
      date += `${word}, May ${day} ${year}`;
      break;
    case 6:
      date += `${word}, June ${day} ${year}`;
      break;
    case 7:
      date += `${word}, July ${day} ${year}`;
      break;
    case 8:
      date += `${word}, August ${day} ${year}`;
      break;
    case 9:
      date += `${word}, September ${day} ${year}`;
      break;
    case 10:
      date += `${word}, October ${day} ${year}`;
      break;
    case 11:
      date += `${word}, November ${day} ${year}`;
      break;
    case 12:
      date += `${word}, December ${day} ${year}`;
      break;

    default:
      break;
  }

  return date;
}
