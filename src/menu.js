function menu() {
    const element = document.createElement("div");
  
    element.innerHTML = `<div class="menu-items">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
     </div> `;
  
    return element;
  }
  
  export { menu };