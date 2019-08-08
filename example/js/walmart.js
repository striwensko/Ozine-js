var SVG = {};
SVG.plusIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>';
SVG.minusIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>';
SVG.loader = '<svg width="28px"  height="28px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="27" stroke-width="7" stroke="#017ADB" stroke-dasharray="42.411500823462205 42.411500823462205" transform="rotate(60 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>';
SVG.search = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>';
SVG.plusCircle = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>';
SVG.shoppingCart = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>';
SVG.angleLeft = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>';
SVG.angleRight = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>';
Walmart = function(node){
  this.UI = {};
  var self = this;
  if (node){
    this.holder = node;
    this.state = JSON.stringify(node.getAttribute('ozine-data'));
    Ozine.DOM(this.holder, this.UI);
  } else {
    var html = '';
    html += '<div ref="walmart" class="walmart">';
    html += '  <div class="header">';
    html += '    <img ref="logo" src="images/walmart.png"/>';
    html += '    <input ref="search" type="text"/>';
    html += '    <b ref="buttons.search">' + SVG.search + '</b>';
    html += '    <i ref="buttons.shoppingCart">' + SVG.shoppingCart + '<b ref="shopping.qty"></b></i>';
    html += '  </div>';
    html += '  <div class="content" ref="content">';
    html += '  </div>';
    html += '</div>';
    this.holder = Ozine.DOM(html, this.UI);
  }

  this.UI.search.onkeydown = function(event) {
    if (event.keyCode === 13) {
      self.UI.buttons.search.onclick();
    }
  }
  this.UI.buttons.search.onclick = function()  {
    self.setState({query:self.UI.search.value, page: 0});
  }
  this.UI.buttons.shoppingCart.onclick = function(){
    Walmart.Data.setState('ShoppingCart', {show: true});
  }
  this.UI.logo.onclick = function(){
    Walmart.Data.setState('mode', {mode: 'catalog'});
  }
  this.json = new JSON_Loader();
  this.json.addEventListener(Event.COMPLETE, 'onData', this);
  this.UI.content.appendChild(new Walmart.Catalog().holder);
  this.UI.content.appendChild(new Walmart.Product().holder);
  this.UI.content.appendChild(new Walmart.ShoppingCart().holder);
  Ozine.addState(this);
  Walmart.Data.subscribe('search', function(state){
    if (state.next){
      self.setState({page: self.state.page + 1});
    }
  });
  Walmart.Data.subscribe('ShoppingCart', function(state){
    if (state.hasOwnProperty('qty')){
      self.UI.shopping.qty.innerHTML = (state.qty ? state.qty : '');
    }
  })

  if (!node){
    this.setState({ trending:true })
  }
}
Walmart.prototype.onData = function(event){
  console.log(event.currentTarget.data);
  var data = event.currentTarget.data;
  var totalResults = data.totalResults ? data.totalResults : data.items.length;
  Walmart.Data.setState('catalog', {loading: false, items: data.items, totalResults:totalResults});
}
Walmart.prototype.loadTrending = function(){
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  proxy = 'https://cors.io/?';
  var url = proxy + 'http://api.walmartlabs.com/v1/trends?format=json&apiKey=gg92a94g25xvwgpk6n9rbjma';
  this.json.load(url);
  Walmart.Data.setState('catalog', {loading: true});
  Walmart.Data.setState('mode', {mode: 'catalog'});
}
Walmart.prototype.load = function(){
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  proxy = 'https://cors.io/?';
  var url = proxy + 'http://api.walmartlabs.com/v1/search?apiKey=gg92a94g25xvwgpk6n9rbjma&numItems=' + Walmart.PAGE_SIZE + '&query=' + this.state.query;
  if (this.state.page){
    url += '&start=' + (this.state.page * Walmart.PAGE_SIZE);
  }
  this.json.load(url);
  Walmart.Data.setState('catalog', {loading: true});
  Walmart.Data.setState('mode', {mode: 'catalog'});
}
Walmart.prototype.onState = function(state){
  if (state.trending){
    this.loadTrending();
  } else if (state.query){
    this.load();
    Walmart.Data.setState('catalog', {reset: true});
  } else if (state.page){
    this.load();
  }
  this.holder.setAttribute('ozine-data', JSON.stringify(this.state));
}
Walmart.Data = new Ozine.DataStore();
Walmart.PAGE_SIZE = 20;
Walmart.Data.setState('ShoppingCart', {items: []});
Walmart.Data.getStore('ShoppingCart').getItem = function(itemId){
  for (var iItem = 0; iItem < this.state.items.length; iItem++){
    if (this.state.items[iItem].itemId === itemId){
      return this.state.items[iItem];
    }
  }
  return null;
}
Walmart.Data.getStore('ShoppingCart').onPreState = function(state){
  if (state.updatePipe){
    for (var iUpdate = 0; iUpdate < state.updatePipe.length; iUpdate++){
      var added = false;
      state.itemsUpdated = [];
      var update = state.updatePipe[iUpdate];
      for (var iItem = 0; iItem < this.state.items.length; iItem++){
        if (this.state.items[iItem].itemId === update.data.itemId){
          this.state.items[iItem].qty = Math.max(0, this.state.items[iItem].qty + update.qtyChange);
          added = true;
          state.itemsUpdated.push(this.state.items[iItem])
        }
      }
      if (!added){
        var data = {
          qty: 1,
          itemId: update.data.itemId,
          thumbnailImage: update.data.thumbnailImage,
          name: update.data.name,
          salePrice: update.data.salePrice,
          msrp: update.data.msrp,
        };
        this.state.items.push(data);
        state.itemsUpdated.push(data)
      }
      state.items = this.state.items;
    }
  }
  if (state.items){
    state.qty = 0;
    state.total = 0;
    for (var iItem = 0; iItem < this.state.items.length; iItem++){
      state.qty += this.state.items[iItem].qty;
      state.total += this.state.items[iItem].salePrice * this.state.items[iItem].qty;
    }
  }
}
Walmart.Catalog = function(node){
  this.UI = {};
  var self = this;
  if (node){
    this.holder = node;
    this.state = JSON.parse(escape(node.getAttribute('ozine-data')));
    Ozine.DOM(this.holder, this.UI);
  } else {
    var html = '';
    html += '<div ref="catalog" ozine-module="catalog" class="catalog">';
    html += '  <div ref="list" class="list"></div>';
    html += '  <b class="more-button" ref="buttons.more">More</b>';
    html += '  <b ref="loader" class="loader">' + SVG.loader + '</b>';
    html += '</div>';

    this.holder = Ozine.DOM(html, this.UI);
  }

  this.UI.buttons.more.style.display = 'none';
  this.UI.buttons.more.onclick = function(){
    Walmart.Data.setState('search', {next: true});
  }
  Ozine.addState(this);

  Walmart.Data.subscribe('catalog', function(state){
    self.setState(state);
    if (state.reset){
      self.UI.list.innerHTML = '';
    }
  });
  Walmart.Data.subscribe('mode', function(state){
    self.holder.style.display = (state.mode === 'catalog' ? '' : 'none');
  });

  this.setState({
    loading: false,
    page: 0,
    totalResults: 0,
    items: [],
  })
}
Walmart.Catalog.prototype.onState = function(state){
  this.UI.loader.style.display = (this.state.loading ? '' : 'none');
  this.UI.buttons.more.style.display = (!this.state.loading && this.state.items.length > 0 && (this.state.page  + 1) < Math.ceil(this.state.totalResults / Walmart.PAGE_SIZE) ? '' : 'none');
  if (state.items){
    for (var iItem = 0; iItem < state.items.length; iItem++){
      this.UI.list.appendChild(this.createItem(state.items[iItem]));
    }
  }
  this.holder.setAttribute('ozine-data', escape(JSON.stringify(this.state)));
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
    Walmart.Data.setState('Product', {itemId: data.itemId});
    Walmart.Data.setState('mode', {mode: 'product'});
  }
  UI.img.src = data.thumbnailImage;
  UI.buttons.addToCart.onclick = function(){
    Walmart.Data.setStatePipe('ShoppingCart', {updatePipe: {data:data, qtyChange: 1}});
  }
  return node;
}
Walmart.decodeHTML = function(text){
  if (!Walmart.decodeHTML.input){
    Walmart.decodeHTML.input = document.createElement('textarea');
  }
  Walmart.decodeHTML.input.innerHTML = text;
  return Walmart.decodeHTML.input.value;
}
Walmart.Product = function(node){
  var self = this;
  this.UI = {};
  if (node){
    this.holder = node;
    this.state = JSON.parse(escape(node.getAttribute('ozine-data')));
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

  this.json = new JSON_Loader();
  this.json.addEventListener(Event.COMPLETE, 'onLoad', this);

  this.UI.buttons.minus.onclick = function(){
    Walmart.Data.setStatePipe('ShoppingCart', {updatePipe: {data:self.state.product, qtyChange: -1}});
  }
  this.UI.buttons.plus.onclick = function(){
    Walmart.Data.setStatePipe('ShoppingCart', {updatePipe: {data:self.state.product, qtyChange: 1}});
  }

  Walmart.Data.subscribe('ShoppingCart', function(state){
    if (state.itemsUpdated){
      for (var iItem = 0; iItem < state.itemsUpdated.length; iItem++){
        if (self.state.product && state.itemsUpdated[iItem].itemId === self.state.product.itemId){
          self.setState({ qty: state.itemsUpdated[iItem].qty })
        }
      }
    }
  });
  Walmart.Data.subscribe('Product', function(state){
    if (state.itemId){
      self.setState({ itemId: state.itemId});
      self.load(state.itemId)
    }
  })
  Walmart.Data.subscribe('mode', function(state){
    self.setState({ mode: state.mode })
  });
}
Walmart.Product.prototype.onLoad = function(event){
  var data = event.currentTarget.data;
  if (data.longDescription === '&lt;br&gt;'){
    data.longDescription = data.shortDescription;
  }
  var itemData = Walmart.Data.getStore('ShoppingCart').getItem(this.state.itemId);
  if (itemData){
    this.setState({qty: itemData.qty, item: itemData})
  } else {
    this.setState({qty: 0, item:null});
  }
  this.setState({
    title: data.name,
    description: Walmart.decodeHTML(data.longDescription || data.shortDescription),
    images: data.imageEntities,
    product: data,
    loading: false,
  });
}
Walmart.Product.prototype.onState = function(state){
  this.UI.loader.style.display = (this.state.loading ? '' : 'none');
  this.UI.content.style.display = (this.state.loading ? 'none' : '');
  this.holder.style.display = (this.state.mode === 'product' ? '' : 'none');
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
  this.holder.setAttribute('ozine-data', escape(JSON.stringify(this.state)));
}
Walmart.Product.prototype.load = function(productId){
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  proxy = 'https://cors.io/?';
  var url = proxy + 'http://api.walmartlabs.com/v1/items/' + productId + '?format=json&apiKey=gg92a94g25xvwgpk6n9rbjma';
  this.json.load(url);
  this.setState({loading: true, product: null});
  this.onState({});
}
Walmart.ShoppingCart = function(node){
  var self = this;
  this.UI = {};
  if (node){
    this.holder = node;
    this.state = JSON.parse(escape(node.getAttribute('ozine-data')));
    Ozine.DOM(this.holder, this.UI);
  } else {
    var html = '';
    html += '<div ref="shopping-cart" class="shopping-cart">';
    html += '  <h1>';
    html += '    <b ref="buttons.close">' + SVG.angleLeft + '</b>';
    html += '    The shopping list<i ref="shopping.qty"></i>';
    html += '  </h1>';
    html += '  <div class="list"><div ref="list"></div></div>'
    html += '  <div class="bottom"><b ref="buttons.buy">Buy <span ref="price.total"></span></b></div>'
    html += '</div>';

    this.holder = Ozine.DOM(html, this.UI);
    this.holder.style.display = 'none';
  }
  Ozine.addState(this);

  this.UI.buttons.close.onclick = function(){
    Walmart.Data.setState('ShoppingCart', {show: false});
  }
  this.UI.dictionary = {};
  Walmart.Data.subscribe('ShoppingCart', function(state){
    if (state.hasOwnProperty('show')){
      self.holder.style.display = state.show === true ? '' : 'none';
    }
    if (state.itemsUpdated){
      for (var iItem = 0; iItem < state.itemsUpdated.length; iItem++){
        var itemData = state.itemsUpdated[iItem];
        if (self.UI.dictionary[itemData.itemId]){
          self.UI.dictionary[itemData.itemId].refresh();
        } else {
          var item = new Walmart.ShoppingCart.Item(itemData);
          self.UI.list.appendChild(item.holder);
          self.UI.dictionary[itemData.itemId] = item;
        }
      }
    }
    if (state.hasOwnProperty('qty')){
      self.UI.shopping.qty.innerHTML = (state.qty ? state.qty : '');
    }
    if (state.hasOwnProperty('total')){
      self.UI.price.total.innerHTML = (state.total ? '$' + state.total.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '');
    }
  })
  Walmart.Data.subscribe('mode', function(state){
    Walmart.Data.setState('ShoppingCart', {show: false});
  });
}
Walmart.ShoppingCart.Item = function(data){
  var self = this;
  this.UI = {};
  var html = '';
  html += '<div class="shopping-item">';
  html += '  <img ref="img"/>'
  html += '  <div ref="_title"></div>'
  html += '  <i ref="price"></i>';
  html += '  <span>'
  html += '    <u ref="buttons.minus">' + SVG.minusIcon +'</u>';
  html += '    <b ref="qty"></b>';
  html += '    <u ref="buttons.plus">' + SVG.plusIcon + '</u>';
  html += '  </span>'
  html += '</div>';

  this.holder = Ozine.DOM(html, this.UI);
  Ozine.addState(this);

  this.data = data;
  this.UI.img.src = data.thumbnailImage;
  this.UI._title.innerHTML = data.name;
  this.UI.price.innerHTML = '$' + data.salePrice.toLocaleString(undefined, { minimumFractionDigits: 2 })
  this.UI._title.onclick = function(){
    Walmart.Data.setState('Product', {itemId: data.itemId});
    Walmart.Data.setState('mode', {mode: 'product'});
  }
  this.UI.buttons.minus.onclick = function(){
    Walmart.Data.setStatePipe('ShoppingCart', {updatePipe: {data:data, qtyChange: -1}});
  }
  this.UI.buttons.plus.onclick = function(){
    Walmart.Data.setStatePipe('ShoppingCart', {updatePipe: {data:data, qtyChange: +1}});
  }
  this.holder.qty = data.qty;
  this.setState({
    qty: data.qty,
  })
}
Walmart.ShoppingCart.Item.prototype.refresh = function(){
  this.setState({qty: this.data.qty});
}
Walmart.ShoppingCart.Item.prototype.onState = function(state){
  if (state.hasOwnProperty('qty')){
    this.UI.qty.innerHTML = this.state.qty;
  }
  this.holder.setAttribute('ozine-data', JSON.stringify(this.state));
}
