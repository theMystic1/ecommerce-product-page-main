class HoverView {
  _parentEl = document.querySelector(".show_products");
  _img = document.querySelectorAll(".chng_btn");
  _canclelImg1 = this._parentEl.querySelector(".active");
  _canclelImg2 = this._parentEl.querySelector(".hover");
  handleHover() {
    this._parentEl.addEventListener("mouseover", (e) => {
      const btn = e.target.closest(".cng_cont");
      if (!btn) return;

      if (btn.querySelector(".chng_btn").classList.contains("prev_btn")) {
        btn.querySelector(".prev-1").classList.toggle("hidden");
        btn.querySelector(".prev-2").classList.toggle("hidden");
      } else if (btn.querySelector(".chng_btn").classList.contains("nex_btn")) {
        btn.querySelector(".nex-1").classList.toggle("hidden");
        btn.querySelector(".nex-2").classList.toggle("hidden");
      }

      // this._img.style.fill = "#ff7e1b";
    });
  }

  handleMouseOut() {
    this._parentEl.addEventListener("mouseout", (e) => {
      const btn = e.target.closest(".cng_cont");
      if (!btn) return;

      if (btn.querySelector(".chng_btn").classList.contains("prev_btn")) {
        btn.querySelector(".prev-1").classList.toggle("hidden");
        btn.querySelector(".prev-2").classList.toggle("hidden");
      } else if (btn.querySelector(".chng_btn").classList.contains("nex_btn")) {
        btn.querySelector(".nex-1").classList.toggle("hidden");
        btn.querySelector(".nex-2").classList.toggle("hidden");
      }

      btn.style.fill = "#ffff";
    });
  }
  handleHoverCancBtn() {
    this._parentEl.addEventListener("mouseover", (e) => {
      const btn = e.target.closest(".close__btn");
      if (!btn) return;
      this._parentEl.querySelector(".hover").classList.toggle("hidden");
      this._parentEl.querySelector(".active").classList.toggle("hidden");

      btn.style.transition = "all 600ms";
      // console.log(btn);
    });
  }

  handleMouseOutlose() {
    this._parentEl.addEventListener("mouseout", (e) => {
      const btn = e.target.closest(".close__btn");
      if (!btn) return;

      this._parentEl.querySelector(".hover").classList.toggle("hidden");
      this._parentEl.querySelector(".active").classList.toggle("hidden");
      btn.style.transition = "all 600ms";
    });
  }
}

export default new HoverView();
