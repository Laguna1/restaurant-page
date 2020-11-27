function header() {
  const element = document.createElement('header');

  element.innerHTML = `<a href="">Home</a>
                       <a href="">Menu</a>
                       <a href="">Contact</a>`;

  return element;
}

export { header };
