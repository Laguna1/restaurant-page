function footer() {
  const element = document.createElement("footer");

  element.innerHTML = `<a href="">Home</a>
                       <a href="">Copyright</a>
                       <a href="">About</a>`;

  return element;
}

export { footer };
