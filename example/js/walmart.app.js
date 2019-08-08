var SVG = {};
SVG.plusIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>';
SVG.minusIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>';
SVG.loader = '<svg width="28px"  height="28px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="27" stroke-width="7" stroke="#017ADB" stroke-dasharray="42.411500823462205 42.411500823462205" transform="rotate(60 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>';
SVG.search = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>';
SVG.plusCircle = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>';
SVG.shoppingCart = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>';
SVG.angleLeft = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>';
SVG.angleRight = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>';
Walmart = function(node, data){
  this.UI = {};
  var self = this;
  if (node){
    this.holder = node;
    Ozine.DOM(this.holder, this.UI);
  }
  this.UI.header.search.onkeydown = function(event) {
    if (event.keyCode === 13) {
      self.UI.header.buttons.search.onclick();
    }
  }
  this.UI.header.buttons.search.onclick = function()  {
    Ozine.Data.setState('catalog', {query: self.UI.header.search.value, page: 0, mode: 'search'});
    Ozine.Data.setState('app', {mode: 'catalog'});
    Ozine.Router.navigate('search/' + self.UI.header.search.value);
  }
  this.UI.header.buttons.shoppingCart.onclick = function(){
    Ozine.Data.setState('app', {mode: 'cart'});
    Ozine.Router.navigate('cart');
  }
  this.UI.header.logo.onclick = function(){
    Ozine.Data.setState('app', {mode: 'catalog'});
    Ozine.Data.setState('catalog', { trending: true, mode: 'trending' });
    Ozine.Router.navigate('');
  }

  Ozine.Router.addRoute('search/:query', function(query){
    Ozine.Data.setState('catalog', {query: query, page: 0, mode: 'search'});
    Ozine.Data.setState('app', {mode: 'catalog'});
  });
  Ozine.Router.addRoute('cart', function(query){
    Ozine.Data.setState('app', {mode: 'cart'});
  });
  Ozine.Router.addRoute('product/:itemId', function(itemId){
    Ozine.Data.setState('Product', {itemId: itemId});
    Ozine.Data.setState('app', {mode: 'product'});
  });
  Ozine.Router.addRoute('', function(query){
    Ozine.Data.setState('app', {mode: 'catalog'});
    Ozine.Data.setState('catalog', { trending: true, mode: 'trending' });
  });


  Ozine.addState(this);
  this.UI.content.appendChild(new Walmart.Catalog(this.UI.catalog, HYDRATION_DATA).holder);
  this.UI.content.appendChild(new Walmart.Product(this.UI.product, HYDRATION_DATA).holder);
  this.UI.content.appendChild(new Walmart.ShoppingCart(this.UI['shopping-cart'], HYDRATION_DATA).holder);
  Ozine.Data.setState('app', {mode: HYDRATION_DATA.mode});
  Ozine.Data.subscribe('cart', function(state){
    if (state.hasOwnProperty('totalItems')){
      self.UI.header.shopping.qty.innerHTML = (state.totalItems ? state.totalItems : '');
    }
  });

  Ozine.Router.start();
}
Walmart.PAGE_SIZE = 20;
Walmart.decodeHTML = function(text){
  if (!Walmart.decodeHTML.input){
    Walmart.decodeHTML.input = document.createElement('textarea');
  }
  Walmart.decodeHTML.input.innerHTML = text;
  return Walmart.decodeHTML.input.value;
}
Walmart.Catalog = function(node, hydration){
  this.UI = {};
  var self = this;
  if (node){
    this.holder = node;
    this.state = { items: hydration.items };
    Ozine.DOM(this.holder, this.UI);
    for (var iItem = 0; iItem < this.UI.items.length; iItem++){
      this.UI.items[iItem]._title.onclick = function(){
        Ozine.Data.setState('Product', {itemId: this.itemId});
        Ozine.Data.setState('app', {mode: 'product'});
        Ozine.Router.navigate('product/' + this.itemId);
      }
      this.UI.items[iItem]._title.itemId = hydration.items[iItem].itemId;
      this.UI.items[iItem].buttons.addToCart.onclick = function(){
        Ozine.Data.setState('cart', {update: {data:this.data, qtyChange: 1}});
      }
      this.UI.items[iItem].buttons.addToCart.data = hydration.items[iItem];
    }
  } else {
    var html = '';
    html += '<div ref="catalog" ozine-module="catalog" class="catalog">';
    html += '  <div ref="list" class="list"></div>';
    html += '  <b class="more-button" ref="buttons.more">More</b>';
    html += '  <b ref="loader" class="loader">' + SVG.loader + '</b>';
    html += '</div>';
    this.holder = Ozine.DOM(html, this.UI);
    this.UI.buttons.more.style.display = 'none';
  }
  this.UI.buttons.more.onclick = function(){
    self.setState({page: self.state.page + 1});
  }
  Ozine.addState(this);
  Ozine.Data.subscribe('catalog', function(state){
    Object.keys(state).length > 0 && self.setState(state);
  });
  Ozine.Data.subscribe('app', function(state){
    state.mode && self.setState({ appMode: state.mode});
  });
  this.state = {
    loading: false,
    page: (node ? 1 : 0),
    items: node ? hydration.items : [],
  }
  if (node){
    this.state.mode = hydration.catalog;
    this.state.query = hydration.catalog_query;
    this.state.page = hydration.catalog_page;
    this.state.totalResults = hydration.catalog_totalResults;
  }
  this.json = new Ozine.JSON();
  this.json.onData = function(){
    var data = this.data;
    var totalResults = data.totalResults ? data.totalResults : data.items.length;
    self.setState({loading: false, items: data.items, totalResults:totalResults});
  }
}
Walmart.Catalog.prototype.loadTrending = function(){
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  //proxy = 'https://cors.io/?';
  var url = proxy + 'http://api.walmartlabs.com/v1/trends?format=json&apiKey=gg92a94g25xvwgpk6n9rbjma';
  this.json.load(url);
  this.setState({ loading: true, search: 'trending' })
}
Walmart.Catalog.prototype.load = function(){
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  //proxy = 'https://cors.io/?';
  var url = proxy + 'http://api.walmartlabs.com/v1/search?apiKey=gg92a94g25xvwgpk6n9rbjma&numItems=' + Walmart.PAGE_SIZE + '&query=' + this.state.query;
  if (this.state.page){
    url += '&start=' + (this.state.page * Walmart.PAGE_SIZE);
  }
  this.json.load(url);
  this.setState({loading: true, mode: 'search'});
}
Walmart.Catalog.prototype.onState = function(state){
  this.UI.loader.style.display = (this.state.loading ? '' : 'none');
  this.UI.buttons.more.style.display = (!this.state.loading && this.state.mode !== 'trending' && this.state.items.length > 0 && (this.state.page  + 1) < Math.ceil(this.state.totalResults / Walmart.PAGE_SIZE) ? '' : 'none');
  if (state.items) {
    for (var iItem = 0; iItem < state.items.length; iItem++) {
      this.UI.list.appendChild(this.createItem(state.items[iItem]));
    }
  }
  if (state.appMode){
    this.holder.style.display = (state.appMode === 'catalog' ? '' : 'none');
  }
  console.log(state);
  if (state.trending) {
    this.loadTrending();
    this.UI.list.innerHTML = '';
  } else if (state.query) {
    this.load();
    this.UI.list.innerHTML = '';
  } else if (state.page) {
    this.load();
  }
}
Walmart.Catalog.prototype.createItem = function(data){

  var UI = {};
  var html = '';
  html += '<div class="catalog-item">';
  html += '  <div ref="_title" class="title"></div>';
  html += '  <img ref="img"/>';
  html += '  <u ref="msrp" class="msrp"></u>';
  html += '  <i ref="price" class="price"></i>';
  html += '  <b ref="buttons.addToCart">' + SVG.plusCircle + '</b>';
  html += '</div>';

  var node = Ozine.DOM(html, UI);
  if (data.msrp){
    UI.msrp.innerHTML = '$' + data.msrp.toFixed(2);
  } else {
    UI.msrp.style.display = 'none';
  }
  UI.price.innerHTML = '$' + data.salePrice.toFixed(2);
  UI._title.innerHTML = data.name;
  UI._title.onclick = function(){
    Ozine.Data.setState('Product', {itemId: data.itemId});
    Ozine.Data.setState('app', {mode: 'product'});
    Ozine.Router.navigate('product/' + data.itemId);
  }
  UI.img.src = data.thumbnailImage;
  UI.buttons.addToCart.onclick = function(){
    var parseData = {name:data.name, description:data.longDescription, image: data.largeImage, price:data.salePrice, itemId:data.itemId}
    Ozine.Data.setState('cart', {update: {data:parseData, qtyChange: 1}});
  }
  return node;
}
Walmart.Product = function(node, hydration){
  var self = this;
  this.UI = {};
  if (node){
    this.holder = node;
    Ozine.DOM(this.holder, this.UI);
  } else {
    var html = '';
    html += '<div ref="product" class="product">';
    html += '  <b ref="loader" class="loader">' + SVG.loader + '</b>';
    html += '  <div class="content" ref="content">';
    html += '    <h1 ref="_title"></h1>';
    html += '    <div class="details">';
    html += '      <div class="left">';
    html += '        <img ref="image"/>';
    html += '      </div>';
    html += '      <div class="right">';
    html += '        <p ref="description"></p>';
    html += '        <i ref="price" class="price"></i>'
    html += '        <span class="counter">'
    html += '          <u ref="buttons.minus">' + SVG.minusIcon +'</u>';
    html += '          <b ref="qty">0</b>';
    html += '          <u ref="buttons.plus">' + SVG.plusIcon + '</u>';
    html += '        </span>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    this.holder = Ozine.DOM(html, this.UI);
    this.holder.style.display = 'none';
  }
  Ozine.addState(this);

  this.json = new Ozine.JSON();
  this.json.onData = function(){ self.onLoad(this.data) };

  this.cart = {};
  Ozine.Data.subscribe('Product', function(state){
    if (state.itemId){
      self.setState({ itemId: state.itemId});
      self.load(state.itemId);
    }
  });
  Ozine.Data.subscribe('cart', function(state){
    if (state.items){
      self.cart = state.items;
      self.setState({ qty: self.cart[self.state.itemId] });
    }
  })
  Ozine.Data.subscribe('app', function(state){
    state.mode && self.setState({ appMode: state.mode});
  });
}
Walmart.Product.prototype.onLoad = function(data){
  if (data.longDescription === '&lt;br&gt;'){
    data.longDescription = data.shortDescription;
  }
  var parseData = {name:data.name, description:data.longDescription, image: data.largeImage, price:data.salePrice, itemId:data.itemId}
  this.UI.buttons.minus.onclick = function(){
    Ozine.Data.setState('cart', {update: {data:parseData, qtyChange: -1}});
  }
  this.UI.buttons.plus.onclick = function(){
    Ozine.Data.setState('cart', {update: {data:parseData, qtyChange: +1}});
  }

  this.setState({
    itemId: data.itemId,
    title: data.name,
    description: Walmart.decodeHTML(data.longDescription || data.shortDescription),
    images: data.imageEntities,
    product: data,
    loading: false,
    qty: this.cart[data.itemId] || 0,
  });
}
Walmart.Product.prototype.onState = function(state){
  this.UI.loader.style.display = (this.state.loading ? '' : 'none');
  this.UI.content.style.display = (this.state.loading ? 'none' : '');
  if (state.product){
    this.UI._title.innerHTML = state.title;
    this.UI.price.innerHTML = '$' + state.product.salePrice.toFixed(2);
  }
  if (state.description){
    this.UI.description.innerHTML = state.description;
  }
  if (state.images){
    this.UI.image.src = state.images[state.images.length - 1].largeImage;
  }
  if (state.hasOwnProperty('qty')){
    this.UI.qty.innerHTML = state.qty;
  }
  if (state.appMode){
    this.holder.style.display = (state.appMode === 'product' ? '' : 'none');
  }
}
Walmart.Product.prototype.load = function(productId){
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  //proxy = 'https://cors.io/?';
  var url = proxy + 'http://api.walmartlabs.com/v1/items/' + productId + '?format=json&apiKey=gg92a94g25xvwgpk6n9rbjma';
  this.json.load(url);
  this.setState({loading: true, product: null});
  this.onState({});
}
Walmart.ShoppingCart = function(node, hydration){
  var self = this;
  this.UI = {};
  if (node){
    this.holder = node;
    Ozine.DOM(this.holder, this.UI);
  } else {
    var html = '';
    html += '<div ref="shopping-cart" class="shopping-cart">';
    html += '  <h1>The shopping list</h1>';
    html += '  <div class="list"><div ref="list"></div></div>'
    html += '  <div class="bottom"><b ref="buttons.buy">Buy <span ref="price.total"></span></b></div>'
    html += '</div>';
    this.holder = Ozine.DOM(html, this.UI);
    this.holder.style.display = 'none';
  }
  Ozine.addState(this);
  this.state.items = {};


  this.state.dictionary = {};
  this.UI.dictionary = {};
  Ozine.Data.subscribe('cart', function(state){
    if (state.update){
      var items = self.state.items;
      items[state.update.data.itemId] = Math.max((items[state.update.data.itemId] || 0) + state.update.qtyChange, 0);
      self.setState({items: items});
      self.setState({update: state.update});
    }
  })
  Ozine.Data.subscribe('app', function(state){
    state.mode && self.setState({ appMode: state.mode});
  });

  if (hydration.shoppingCart){
    var items = hydration.shoppingCart.items;
    this.state.dictionary = hydration.shoppingCart.dictionary;
    if (!node){
      this.UI.items = {};
      for (var property in items){
        var item = new Walmart.ShoppingCart.Item(null, this.state.dictionary[property]);
        this.UI.items[property] = item;
        this.UI.list.appendChild(item.holder);
      }
    } else {
      var items = {};
      for (var iItem = 0; iItem < this.UI.items.length; iItem++){
        var itemId = this.UI.items[iItem].getAttribute('itemId');
        var item = new Walmart.ShoppingCart.Item(this.UI.items[iItem], this.state.dictionary[itemId]);
        items[itemId] = item;
      }
      this.UI.items = items;
    }
    this.setState({items: hydration.shoppingCart.items})
  } else {
    this.UI.items = {};
  }
}
Walmart.ShoppingCart.prototype.onState = function(state) {
  if (state.appMode) {
    this.holder.style.display = (state.appMode === 'cart' ? '' : 'none');
  }
  if (state.update){
    if (!this.UI.items[state.update.data.itemId]){
      var item = new Walmart.ShoppingCart.Item(null, state.update.data);
      this.UI.items[state.update.data.itemId] = item;
      this.UI.list.appendChild(item.holder);
      this.state.dictionary[state.update.data.itemId] = state.update.data;
    }
  }
  if (state.items){
    var total = 0;
    var totalItems = 0;
    for (var property in state.items){
      this.UI.items[property].setState({qty: state.items[property]})
      total += state.items[property] * this.state.dictionary[property].price;
      totalItems += state.items[property];
    }
    this.UI.price.total.innerHTML = (total ? '$' + total.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '');
    Ozine.Data.setState('cart', { totalItems: totalItems, items: state.items });
  }
  console.log({item:this.state.items, dictionary:this.state.dictionary})
}
Walmart.ShoppingCart.Item = function(node, data){
  var self = this;
  this.UI = {};
  if (node){
    this.holder = node;
    Ozine.DOM(this.holder, this.UI);
  } else {
    var html = '';
    html += '<div class="shopping-item">';
    html += '  <img ref="img"/>'
    html += '  <div ref="_title"></div>'
    html += '  <i ref="price"></i>';
    html += '  <span>'
    html += '    <u ref="buttons.minus">' + SVG.minusIcon +'</u>';
    html += '    <b ref="qty">&nbsp;</b>';
    html += '    <u ref="buttons.plus">' + SVG.plusIcon + '</u>';
    html += '  </span>'
    html += '</div>';
    this.holder = Ozine.DOM(html, this.UI);
  }
  Ozine.addState(this);

  this.data = data;
  this.UI.img.src = data.image;
  this.UI._title.innerHTML = data.name;
  this.UI.price.innerHTML = '$' + data.price.toLocaleString(undefined, { minimumFractionDigits: 2 })
  this.UI._title.onclick = function(){
    Ozine.Data.setState('Product', {itemId: data.itemId});
    Ozine.Data.setState('app', {mode: 'product'});
    Ozine.Router.navigate('product/' + data.itemId);
  }
  this.UI.buttons.minus.onclick = function(){
    Ozine.Data.setState('cart', {update: {data:data, qtyChange: -1}});
  }
  this.UI.buttons.plus.onclick = function(){
    Ozine.Data.setState('cart', {update: {data:data, qtyChange: +1}});
  }
  this.holder.qty = data.qty;
}
Walmart.ShoppingCart.Item.prototype.onState = function(state){
  if (state.hasOwnProperty('qty')){
    this.UI.qty.innerHTML = this.state.qty;
  }
}
