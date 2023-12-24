// import imageProd1 from "../../images/image-product-1-thumbnail.jpg";
// import imageProd2 from "../../images/image-product-2-thumbnail.jpg";
// import imageProd3 from "../../images/image-product-3-thumbnail.jpg";
// import imageProd4 from "../../images/image-product-4-thumbnail.jpg";

import cancelIcon from '../../images/icon-close.svg';
import cancelIcon2 from '../../images/icon-close-copy.svg';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';
import prev2 from '../../images/icon-previous-copy.svg';
import next2 from '../../images/icon-next-copy.svg';
import image_1 from '../../images/image-product-1.jpg';
import image_2 from '../../images/image-product-2.jpg';
import image_3 from '../../images/image-product-3.jpg';
import image_4 from '../../images/image-product-4.jpg';

class SampleView {
  images = [image_1, image_2, image_3, image_4];

  myData;
  overlay = document.querySelector('.overlay');
  _parentEl = document.querySelector('.img__sample_view');
  _eventSample = document.querySelector('.sample-imgs');
  products = document.querySelector('.show_products');
  _markup;

  getClosestDet() {}
  handleSampleView(handler) {
    this._eventSample.addEventListener('click', e => {
      const imgBtn = e.target.closest('.sample');

      if (!imgBtn) return;
      const allImg = document.querySelectorAll('.sample');

      allImg.forEach(img => img.classList.remove('sample_active'));
      imgBtn.classList.toggle('sample_active');
      const imgData = +imgBtn.dataset.sample;
      // console.log(imgBtn, imgData, );
      handler(imgData);
    });
  }

  handleSmpleLightBox(handler) {
    document.querySelector('.hero-left').addEventListener('click', e => {
      const imgBtn = e.target.closest('.sample_img');

      if (!imgBtn) return;
      const imgData = +imgBtn.dataset.sampleimg;

      this.overlay.classList.remove('hidden');
      this.products.classList.remove('hide_product');

      handler(imgData);
    });
  }
  renderSampleImg(data) {
    const imageUrl = this.images[data - 1]; // Adjusted to zero-based index

    this._markup = `
    <img
    src="${imageUrl}"
    alt=""
    data-sampleimg ="${data}"
    class="sample_img"
  />
    `;

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', this._markup);
    // console.log(data);
  }

  renderSampleLightBox(data) {
    const imageUrl = this.images[data - 1]; // Adjusted to zero-based index

    this.myData = data;
    this._markup = `
      <span class="del_btn">
        <img src="${cancelIcon}" alt="" class="close__btn active" />
        <img src="${cancelIcon2}" alt="" class="close__btn hover hidden" />
      </span>

      <span class="imgs_sample">
        <span class="prev cng_cont">
          <img
            src="${prev}"
            alt=""
            class="prev_btn prev-1 chng_btn"
          />
          <img
            src="${prev2}"
            alt=""
            class="prev_btn prev-2 chng_btn hidden"
          />
        </span>

        <img
          class="sample_imgss"
          src="${imageUrl}"
          alt=""
          data-sampleImgs="1"

        />

        <span class="nex cng_cont">
          <img
            src="${next}"
            alt=""
            class="nex_btn nex-1 chng_btn"
          />
          <img
            src="${next2}"
            alt=""
            class="nex_btn nex-2 chng_btn hidden"
          />
        </span>
      </span>
    `;

    const parentEl = document.querySelector('.show_products');
    parentEl.innerHTML = '';
    parentEl.innerHTML = this._markup;
  }

  handleRemoveLightBox() {
    document.querySelector('.section').addEventListener('click', e => {
      const btn = e.target.closest('.del_btn');

      if (!btn) return;
      const parentEl = document.querySelector('.show_products');
      parentEl.innerHTML = '';
      this.overlay.classList.add('hidden');
      this.products.classList.add('hide_product');
    });
  }

  renderNextSampleImg(data) {
    const imageUrl = this.images[this.myData - 1]; // Adjusted to zero-based index

    this._markup = `
        <span class="del_btn">
          <img src="${cancelIcon}" alt="" class="close__btn" />
        </span>
  
        <span class="imgs_sample">
          <span class="prev cng_cont">
            <img
              src="${prev}"
              alt=""
              class="prev_btn chng_btn"
            />
          </span>
  
          <img
            class="sample_imgss"
            src="${imageUrl}"
            alt=""
            data-sampleImgs="1"
          />
  
          <span class="nex cng_cont">
            <img
              src="${next}"
              alt=""
              class="nex_btn chng_btn"
            />
          </span>
        </span>
      `;

    const parentEl = document.querySelector('.show_products');
    parentEl.innerHTML = '';
    parentEl.innerHTML = this._markup;
  }

  handleImg(handler) {
    document.querySelector('.section').addEventListener('click', e => {
      const btn = e.target.closest('.cng_cont');
      // const btn = e.target.closest(".sample_imgss");
      const maxLength = 4;
      const minLength = 1;

      if (!btn) return;

      if (btn.classList.contains('nex')) {
        if (this.myData < maxLength) {
          this.myData++;
          // this.renderSampleLightBox(this.myData, btn);
          handler(this.myData);
        } else return;
      }

      if (btn.classList.contains('prev')) {
        if (this.myData > minLength) {
          this.myData--;
          // this.renderSampleLightBox(this.myData, btn);
          handler(this.myData);
        } else return;
      }
      // console.log(this.myData);

      // console.log(btn);
    });
  }
}

export default new SampleView();
