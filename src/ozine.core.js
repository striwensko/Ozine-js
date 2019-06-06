var Ozine = {};
Ozine.DOM = function (html, scope, cleanHTML) {
    var node = html;
    if (html.constructor === String) {
        node = document.createElement('div');
        cleanHTML && (html = html.replace(/>\s*?</gim, '><'));
        node.innerHTML = html;
    }
    (function toScope(node, scope) {
        var children = node.children || [];
        for (var iChild = 0; iChild < children.length; iChild++) {
            var name = children[iChild].getAttribute('var') || children[iChild].getAttribute('ref');
            if (children[iChild].getAttribute('className')){
                children[iChild].setAttribute('class', children[iChild].getAttribute('className'))
            }
            var names = (name || '').split('.');
            var obj = scope;
            while (names.length > 1) {
                var _property = names.shift();
                if (!obj.hasOwnProperty(_property)) {
                    obj[_property] = {};
                }
                obj = obj[_property];
            }
            (names.length == 1) && (obj[names[0]] = children[iChild]);
            toScope(children[iChild], scope);
        }
    })(node, scope || {});
    if (html.constructor == String && node.childNodes.length > 1) {
        var fragment = document.createDocumentFragment();
        while (node.childNodes.length > 0) {
            if (fragment.append) {
                fragment.append(node.childNodes[0]);
            } else {
                fragment.appendChild(node.childNodes[0]);
            }
        }
        return fragment;
    }
    return (html.constructor == String ? node.childNodes[0]: node);
}
Object.extend = function(destination, source){
  for (var property in source) {
      destination[property] = source[property];
  }
  return destination;
};











Ozine.StateManager = {};
Ozine.StateManager.init = function(){
    var self = this;
    if (!this.__stateManager) {
        this.__stateManager = {pending: [], pendingPipe:[], onState: function(){
            var pipe = self.__stateManager.pending;
            var pendingPipe = self.__stateManager.pendingPipe;
            var new_data  = {};
            while (pipe.length > 0) {
                new_data = Object.extend(new_data, pipe.shift().data);
            }
            while (pendingPipe.length > 0) {
                var pipe = pendingPipe.shift().data;
                for (var property in pipe){
                    if (!new_data[property]){
                        new_data[property] = [pipe[property]];
                    } else if (new_data[property].constructor === Array){
                        new_data[property].push(pipe[property])
                    } else {
                        new_data[property] = [pipe[property]];
                    }
                }
            }
            self.state = Object.extend(Object.extend({}, self.state), new_data);
            self.__stateManager.requestUpdate = false;
            self.onPreState && self.onPreState(new_data);
            self.onState && self.onState(new_data);
        }}
    }
    if (!this.__stateManager.requestUpdate) {
        this.__stateManager.requestUpdate = true;
        window.requestAnimationFrame(this.requestStateUpdate);
    }
}
Ozine.StateManager.setStatePipe = function(data){
    this.state = this.state || {};
    this.init();
    this.__stateManager.pendingPipe.push({data:data});
}
Ozine.StateManager.setState = function(data) {
  this.state = this.state || {};
  this.init();
  this.__stateManager.pending.push({data:data});
}
Ozine.addState = function(element){
  Object.extend(element, Ozine.StateManager);
  element.state = element.state || {};
  element.requestStateUpdate = function(){element.__stateManager.onState()};
}
Ozine.DataStore = function(){
  this.stores = {};
}
Ozine.DataStore.prototype.createSingleStore = function(id){
  if (!this.stores[id]) {
      this.stores[id] = {subscribers:[], listeners:[]};
      this.stores[id].onState = function(new_state){
          for (var iSub = 0; iSub < this.subscribers.length; iSub ++){
              this.subscribers[iSub](new_state);
          }
      }
      Ozine.addState(this.stores[id]);
  }
  return this.stores[id];
}
Ozine.DataStore.prototype.getData = function(id){
  return (this.stores[id]) ? this.stores[id].state : null;
}
Ozine.DataStore.prototype.getStore = function(id){
return this.createSingleStore(id);
}
Ozine.DataStore.prototype.setState = function(id, data){
  this.getStore(id).setState(data);
}
Ozine.DataStore.prototype.setStatePipe = function(id, data){
    this.getStore(id).setStatePipe(data);
}
Ozine.DataStore.prototype.unsubscribe = function(id, callback){
  var callbacks = this.stores[id].subscribers
  for (var iCall = callbacks.length - 1 ; iCall >= 0; iCall--){
      if (callbacks === callback){
          callbacks.splice(iCall, 1)
      }
  }
}
Ozine.DataStore.prototype.subscribe = function(id, callback){
  this.createSingleStore(id);
  this.stores[id].subscribers.push(callback);
}
Ozine.DataStore.prototype.clear = function(id) {
  for (var property in this.stores) {
      if (property.match('^' + id + '.')) {
          delete this.stores[property];
      }
  }
  delete this.stores[id];
}
