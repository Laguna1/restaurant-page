function menu() {
    const element = document.createElement("div");
  
    element.innerHTML = `<div class="wrapper-menu">
      <p class="main-text">Today</p><br> <span>restaurant</span>
      <button>Show</button>
      </div> `;
  
    return element;
  }
  
  export { menu };