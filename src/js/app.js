import cartView from './view/cartView.js';
import sampleView from './view/sampleView.js';
import navView from './view/navView.js';
import loadview from './view/loadview.js';
const controleCartView = function () {
  cartView.toggleCart();
};

const controlLocalData = function (data) {
  cartView.renderCart(data);
  if (data.length === 0) cartView.renderEmptyCartMsg();
  // console.log(data);
};

const controlSampleView = function (data) {
  sampleView.renderSampleImg(data);
  // console.log(data);
};
const controlSampleViewLightBox = function (data) {
  sampleView.renderSampleLightBox(data);
};

const controlLightImgView = function (data) {
  // console.log(data);
  sampleView.renderSampleLightBox(data);
  // console.log(data);
};

const controlAddToCart = function () {
  cartView.updateCartData();
  cartView.renderCart();
};

const controlDeleteCart = function () {
  cartView.renderEmptyCartMsg();
};

const controlNav = function () {
  navView.openNav();
};

const init = function () {
  cartView.handleEventCart(controleCartView);
  cartView.loadLocalData(controlLocalData);
  cartView.handleIncValue();
  cartView.addToCart(controlAddToCart);
  cartView.deleteCart(controlDeleteCart);
  sampleView.handleSampleView(controlSampleView);
  sampleView.handleImg(controlLightImgView);
  sampleView.handleSmpleLightBox(controlSampleViewLightBox);
  sampleView.handleRemoveLightBox();
  navView.handlerOpenNav(controlNav);
  // hovers
  loadview.handleHover();
  loadview.handleMouseOut();
  loadview.handleHoverCancBtn();
  loadview.handleMouseOutlose();
  // active

  loadview.activeEvent();
};

init();
