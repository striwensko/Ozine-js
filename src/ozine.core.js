var Ozine = {};
Object.extend = function(destination, source){
  for (var property in source) {
    destination[property] = source[property];
  }
  return destination;
};
Ozine.DOM = function (html, scope, cleanHTML) {
  var node = html;
  if (html.constructor === String) {
    node = document.createElement('div');
    cleanHTML && (html = html.replace(/>\s*?</gim, '><'));
    node.innerHTML = html;
  }
  (function toScope(node, scope) {
    for (var iChild = 0; iChild < node.children.length; iChild++) {
      var child = node.children[iChild];
      var name = child.getAttribute('var') || child.getAttribute('ref');
      var names = (name ? name.split('.') : []);
      var obj = scope;
      while (names.length > 1) {
        var _property = names.shift();
        if (!obj.hasOwnProperty(_property)) {
          obj[_property] = {};
        }
        obj = obj[_property];
      }
      if (names[0] && names[0].search(/\[\]$/) > 0){
        var arrayName = names[0].replace(/\[\]$/, '');
        obj[arrayName] = obj[arrayName] ? obj[arrayName]: [];
        obj[arrayName].push(child);
        toScope(child, child);
      } else{
        (names.length == 1) && (obj[names[0].replace(/\*/, '')] = child);
        toScope(child, (names[0] || '').match(/\*/) ? child : scope);
      }
    }
  })(node, scope || {});
  if (html.constructor == String && node.childNodes.length > 1) {
    var fg = document.createDocumentFragment();
    while (node.childNodes.length > 0) {
      fg[(fg.append ? 'append' : 'appendChild')](node.childNodes[0]);
    }
    return fg;
  }
  return (html.constructor == String ? node.childNodes[0]: node);
}
Ozine.addState = function(el){
  el.state = el.state || {};
  var _state = {pending: [], onState: function(){
    var data  = {};
    var dataExtend = {};
    while (_state.pending.length > 0) {
      var shiftState = _state.pending.shift().data;
      for (var property in shiftState) {
        if (property.match(/\[\]$/)) {
          property = property.replace(/\[\]$/, '');
          data[property] = (data[property] ? data[property] : []);
          data[property].push(shiftState[property + '[]']);
          delete shiftState[property + '[]'];
        }
        if (property.match(/\*$/)) {
          property = property.replace(/\*$/, '');
          dataExtend[property] = (dataExtend[property] ? dataExtend[property] : {});
          dataExtend[property] = Object.extend(dataExtend[property], shiftState[property + '*']);
          delete shiftState[property + '*'];
        }
      }
      data = Object.extend(data, shiftState);
    }
    el.state = Object.extend(Object.extend({}, el.state), data);
    for (var property in dataExtend){
      el.state[property] = Object.extend(el.state[property] || {}, dataExtend[property]);
    }
    _state.requestUpdate = false;
    el.onState && el.onState(Object.extend(data, dataExtend));
  }}
  el.setState = function(data) {
    if (!_state.requestUpdate) {
      _state.requestUpdate = true;
      window.requestAnimationFrame(_state.update);
    }
    _state.pending.push({data:data});
  }
  _state.update = function(){_state.onState();};
}
Ozine.Data = { stores:{} };
Ozine.Data.createSingleStore = function (id) {
  if (!this.stores[id]) {
    this.stores[id] = { subscribers: [] };
    this.stores[id].onState = function (new_state) {
      for (var iSub = 0; iSub < this.subscribers.length; iSub++) {
        this.subscribers[iSub](new_state);
      }
    };
    Ozine.addState(this.stores[id]);
  }
  return this.stores[id];
};
Ozine.Data.getState = function (id) {
  return (this.stores[id]) ? this.stores[id].state : {};
};
Ozine.Data.setState = function (id, data, forceUpdate) {
  var store = this.createSingleStore(id);
  if (forceUpdate) {
    store.state = Object.extend(store.state, data);
    store.onState(data);
  } else {
    store.setState(data);
  }
};
Ozine.Data.unsubscribe = function (id, callback) {
  var callbacks = this.stores[id].subscribers;
  for (var iCall = callbacks.length - 1; iCall >= 0; iCall--) {
    (callbacks === callback) && callbacks.splice(iCall, 1);
  }
};
Ozine.Data.subscribe = function (id, callback) {
  this.createSingleStore(id);
  var callbacks = this.stores[id].subscribers;
  for (var iCall = callbacks.length - 1; iCall >= 0; iCall--) {
    if (callbacks === callback) {
      return false;
    }
  }
  this.stores[id].subscribers.push(callback);
  var state = this.stores[id].state;
  Object.keys(state || {}).length > 0 && callback(state || {});
};
Ozine.Data.clear = function (id) {
  for (var property in this.stores) {
    if (property.match(`^${id}.`)) {
      delete this.stores[property];
    }
  }
  delete this.stores[id];
};
