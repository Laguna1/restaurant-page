function home() {
  const element = document.createElement("div");

  element.innerHTML = `<div class="wrapper">
    <p class="main-text">Wellcome to the</p><br> <span>restaurant</span>
    <button>Show menu</button>
    </div> `;

  return element;
}

export { home };
