export default class Hammer {
  constructor() {}

  //Изменение курсора на молоток при наведении на гоблина
  static showHammer(element) {
    console.log("lklk");
    element.addEventListener("mouseenter", function () {
      element.classList.add("cursorhammer");
    });
    element.addEventListener("mouseleave", function () {
      element.classList.remove("cursorhammer");
    });
  }
}
