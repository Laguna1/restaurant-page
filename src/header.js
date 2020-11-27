function header() {
  const element = document.createElement('header');

  element.innerHTML = `<a href="#" id="home">Home</a>
                       <a href="#" id="menu">Menu</a>
                       <a href="#" id="contact">Contact</a>`;

  return element;
}

export { header };
