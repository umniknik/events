//import Hammer from "./hammer";

export default class Strike {
  constructor() {}

  static click() {
    const field = document.querySelectorAll(".cellField");
    //let points = 0;
    //const Sstrike = document.querySelector(".strike");
    field.forEach((element) => {
      element.addEventListener("click", function (e) {
        if (e.target.alt === "Гоблин") {
          //Прибавляем количество попаданий
          let strikeElement = document.querySelector(".strike_span");
          let points = +strikeElement.textContent;
          points += 1;
          strikeElement.textContent = points;

          //Уменьшаем количество появлений гоблина
          const noStrike = document.querySelector(".no_strike_span");
          let noStrikeCount = +noStrike.textContent;
          noStrikeCount -= 1;
          noStrike.textContent = noStrikeCount;

          e.target.classList.add("hide");

          //Удаляем гоблина из ячейки
        }
      });
      element.addEventListener("mouseenter", function () {
        if (element.childElementCount) {
          element.classList.add("cursorhammer");
        }
      });
      element.addEventListener("mouseleave", function () {
        element.classList.remove("cursorhammer");
      });
    });
  }
}
