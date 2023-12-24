import icondel from '../../images/icon-delete.svg';
import imageProd1 from '../../images/image-product-1-thumbnail.jpg';

class CartView {
  _nav = document.querySelector('.nav');
  _parentEl = document.querySelector('.cart--details');
  _valueBtn = document.querySelector('.cart_inc_dec');
  _cartQuantity = 0;
  _markup;

  handleEventCart(handler) {
    this._nav.addEventListener('click', function (e) {
      const cart = e.target.closest('.cart_img');
      if (!cart) return;
      handler();
    });
  }

  getCartData() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  loadLocalData(handler) {
    // Add an event listener to the window.load event
    window.addEventListener('load', () => {
      // Retrieve cart data from localStorage
      const cartData = this.getCartData() || this.renderEmptyCartMsg();
      if (!cartData);
      // Render the cart with the retrieved cart data
      handler(cartData);
      // this.renderCart(cartData);
    });
  }

  handleIncValue(handler) {
    let valueCount = 0;
    const minValue = 0;
    this._valueBtn.addEventListener('click', e => {
      const btn = e.target.closest('.btn_inc_dec');
      const value = document.querySelector('.value');

      if (!btn) return;

      if (btn.classList.contains('inc')) {
        valueCount++;
        value.innerHTML = valueCount;
        this._cartQuantity = valueCount;

        // Update cartData with the new quantity
        this.updateCartData();

        // Notify the handler about the change in quantity
        // handler(this._cartQuantity);
      }

      if (btn.classList.contains('dec')) {
        if (valueCount === minValue) return;

        valueCount--;
        value.innerHTML = valueCount;
        this._cartQuantity = valueCount;

        // Update cartData with the new quantity
        this.updateCartData();

        // Notify the handler about the change in quantity
        handler(this._cartQuantity);
      }
    });
  }

  updateCartData() {
    const productTitle = 'Fall Limited Edition Sneakers';

    // Retrieve cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product in cartData (assuming a unique identifier, e.g., title)
    const productInCartIndex = cartData.findIndex(
      item => item.title === productTitle
    );

    // Update the quantity in cartData or add a new product if not found
    if (productInCartIndex !== -1) {
      cartData[productInCartIndex].quantity = this._cartQuantity;
    } else {
      const product = {
        title: productTitle,
        price: 125.0,
        image: imageProd1,
        quantity: this._cartQuantity,
      };
      cartData.push(product);
    }

    // if (productInCartIndex === 0) return;

    // Save the updated cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  renderCart(cartData) {
    const prodValue = 125.0;

    // Use the passed cartData or retrieve it from localStorage
    cartData = cartData || JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate total quantity and total price from cart data
    const totalQuantity = cartData.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // If the total quantity is 0, do not render the cart
    if (totalQuantity === 0) {
      // this._parentEl.innerHTML = "";
      return;
    }

    // Calculate total price from cart data
    const totalPrice = cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    this._parentEl.innerHTML = `
      <div class="cart_det">
        <img src="${imageProd1}" alt="" class="sample-img" />
        <span class="item_selected">
          <span class="its"> Fall Limited Edition Sneakers </span>
          <span class="pricing">
            <p class="priced">$${prodValue}.00 x <span class="qtty">${totalQuantity}</span></p>
            <p class="total">$${totalPrice}.00</p>
          </span>
        </span>
        <img src="${icondel}" alt="" class="delete" />
      </div>
      <button class="btn_checkout">Checkout</button>
    `;
  }

  addToCart(handler) {
    document.querySelector('.cart_btn').addEventListener('click', () => {
      // document.querySelector(".value").innerHTML = 0;
      handler();
    });
  }

  deleteCart(handler) {
    this._parentEl.addEventListener('click', e => {
      const delBtn = e.target.closest('.delete');
      if (!delBtn) return;
      e.preventDefault(); // Prevent default behavior

      // Retrieve the product title or unique identifier from the HTML structure
      const productTitle = 'Fall Limited Edition Sneakers';

      // Retrieve cart data from localStorage
      let cartData = JSON.parse(localStorage.getItem('cart')) || [];

      // Find the index of the product in cartData
      const productIndex = cartData.findIndex(
        item => item.title === productTitle
      );

      // Remove the product from cartData if found
      if (productIndex !== -1) {
        cartData.splice(productIndex, 1);

        // Update localStorage with the modified cartData
        localStorage.setItem('cart', JSON.stringify(cartData));

        // Render the cart with the updated data
        document.querySelector('.cart--details').innerHTML = '';
        this.renderCart(cartData);
        // console.log(cartData);
      }
      handler();
    });
  }

  toggleCart() {
    document.querySelector('.cart').classList.toggle('hidden');
  }

  renderEmptyCartMsg() {
    this._markup = `
      <div class="cart--details">
       <p class="empty_cart">Your cart is empty</p>
      </div>
    `;

    this._parentEl.insertAdjacentHTML('beforeend', this._markup);
  }
}

export default new CartView();
