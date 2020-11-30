function menu() {
    const element = document.createElement("div");

    element.innerHTML = `
    <div class="menu-items main-wrap">
    <div class="item item1"><button class="show-more">Show more</button></div>
    <div class="item item2"><button class="show-more">Show menu</button></div>
    <div class="item item3"><button class="show-more">Show menu</button></div>
    <div class="item item4"><button class="show-more">Show menu</button></div>
    <div class="item item5"><button class="show-more">Show menu</button></div>
    <div class="item item6"><button class="show-more">Show menu</button></div>
     </div> `;

    return element;
}

export {
    menu
};
