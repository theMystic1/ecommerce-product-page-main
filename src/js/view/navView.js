class NavView {
  _nav = document.querySelector(".ul");
  _overLay = document.querySelector(".overlay");
  _menuBtn = document.querySelector(".menu--icon");
  _menuOpn = document.querySelector(".menu");
  _menuClose = document.querySelector(".close");

  openNav() {
    this._nav.classList.toggle("open-nav");
    this._overLay.classList.toggle("hidden");
    this._menuClose.classList.toggle("hidden");
    this._menuOpn.classList.toggle("hidden");
  }

  handlerOpenNav(handler) {
    this._menuBtn.addEventListener("click", handler);
  }
}

export default new NavView();
