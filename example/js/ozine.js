var Ozine = {};
Object.extend = function(destination, source){
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};
Ozine.addState = function(element){
    element.state = element.state || {};
    element.__stateManager = {pending: [], onState: function(){
        var pipe = element.__stateManager.pending;
        var new_data  = {};
        while (pipe.length > 0) {
            new_data = Object.extend(new_data, pipe.shift().data);
        }
        element.state = Object.extend(Object.extend({}, element.state), new_data);
        element.__stateManager.requestUpdate = false;
        element.onState && element.onState(new_data);
    }}
    element.setState = function(data) {
        if (!this.__stateManager.requestUpdate) {
            this.__stateManager.requestUpdate = true;
            window.requestAnimationFrame(this.__stateManager.update);
        }
        this.__stateManager.pending.push({data:data});
    }
    element.__stateManager.update = function(){element.__stateManager.onState();};
}

var app= {}
Ozine.addState(app);
app.onState = function(state){console.log(state)};
app.setState({a:1});
app.setState({b:2});

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
                obj[arrayName].push(children[iChild]);
                toScope(children[iChild], children[iChild]);
            } else{
                (names.length == 1) && (obj[names[0].replace(/\*/, '')] = children[iChild]);
                toScope(children[iChild], (names[0] || '').match(/\*/) ? children[iChild] : scope);
            }
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
    var self = this;
    if (!this.stores[id]) {
        this.stores[id] = {subscribers:[], listeners:[]};
        this.stores[id].onState = function(new_state){
            for (var iSub = 0; iSub < this.subscribers.length; iSub ++){
                this.subscribers[iSub](new_state);
            }
        }
        Ozine.addState(this.stores[id]);
        self.onState && self.onState();
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
Ozine.DataStore.prototype.hydrate = function(data){
    for (var property in data){
        this.stores[property] && (this.stores[property].state = data[property]);
    }
}
Ozine.DataStore.prototype.toJSON = function(){
    var json = {};
    for (var property in this.stores){
        json[property] = this.stores[property].state;
    }
    return json;
}
Ozine.DataStore.prototype.clear = function(id) {
  for (var property in this.stores) {
      if (property.match('^' + id + '.')) {
          delete this.stores[property];
      }
  }
  delete this.stores[id];
}



Event = {};

/**
*	@event Event#ERROR
*	@type {object}
*	@property {string} type The value of the type is Event.ERROR
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.ERROR = 'error';
/**
*	@event Event#CANCEL
*	@type {object}
*	@property {string} type The value of the type is Event.CANCEL
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.CANCEL = "cancel";
/**
*	@event Event#OPEN
*	@type {object}
*	@property {string} type The value of the type is Event.OPEN
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.OPEN = "open";
/**
*	@event Event#CLOSE
*	@type {object}
*	@property {string} type The value of the type is Event.CLOSE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.CLOSE = 'close';
/**
*	@event Event#COMPLETE
*	@type {object}
*	@property {string} type The value of the type is Event.COMPLETE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.COMPLETE = "onComplete";
/**
*	@event Event#CHANGE
*	@type {object}
*	@property {string} type The value of the type is Event.CHANGE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.CHANGE = "onChange";
/**
*	@event Event#MOVE
*	@type {object}
*	@property {string} type The value of the type is Event.MOVE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.MOVE = "MOVE";
/**
*	@event Event#START
*	@type {object}
*	@property {string} type The value of the type is Event.START
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.START = "START";
/**
*	@event Event#STOP
*	@type {object}
*	@property {string} type The value of the type is Event.STOP
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.STOP = "STOP";
/**
*	@event Event#RESIZE
*	@type {object}
*	@property {string} type The value of the type is Event.RESIZE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.RESIZE = "resize";
/**
*	@event Event#SELECT
*	@type {object}
*	@property {string} type The value of the type is Event.SELECT
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.SELECT = "select";
/**
*	@event Event#RENDER
*	@type {object}
*	@property {string} type The value of the type is Event.RENDER
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.RENDER = "render";
/**
*	@event Event#REFRESH
*	@type {object}
*	@property {string} type The value of the type is Event.REFRESH
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.REFRESH = "refresh";
/**
*	@event Event#STATE_CHANGE
*	@type {object}
*	@property {string} type The value of the type is Event.STATE_CHANGE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.STATE_CHANGE = "stateChange";
/**
*	@event Event#SOUND_COMPLETE
*	@type {object}
*	@property {string} type The value of the type is Event.SOUND_COMPLETE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.SOUND_COMPLETE = "soundComplete";
/**
*	@event Event#FOCUS_OUT
*	@type {object}
*	@property {string} type The value of the type is Event.FOCUS_OUT
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.FOCUS_OUT = "focusOut";
/**
*	@event Event#FOCUS_IN
*	@type {object}
*	@property {string} type The value of the type is Event.FOCUS_IN
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.FOCUS_IN = "focusIn";
/**
*	@event Event#ADD
*	@type {object}
*	@property {string} type The value of the type is Event.REMOVE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.ADD = 'add';
/**
*	@event Event#REMOVE
*	@type {object}
*	@property {string} type The value of the type is Event.REMOVE
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.REMOVE = 'remove';
/**
*	@event Event#PROGRESS
*	@type {object}
*	@property {string} type The value of the type is Event.PROGRESS
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.PROGRESS = 'progress';
/**
*	@event Event#UPLOAD
*	@type {object}
*	@property {string} type The value of the type is Event.UPLOAD
*	@property {object} currentTarget The object which the listener was added to.
*	@property {object} data On some cases the object that emits the event might add some data to the event
*/
Event.UPLOAD = 'upload';
Event.REMOVE = 'remove';
Event.DELETE = 'delete';
Event.LOADING = 'loading';
Event.FILTER = 'filter';


var Event_Dispatcher = {}
function ADD_EVENT_DISPATCHER(element)
{
    Object.extend(element, Event_Dispatcher);
}
Event_Dispatcher.addEventListener = function(type, listener, scope)
{
    if (!this.events)
    {
        this.events = {};
    }
    if (!this.events[type])
    {
        this.events[type] = new Array();
    }
	//scope = (scope ? scope : this);
    this.events[type].push(
    {
        listener: listener,
        scope: scope
    });
}
Event_Dispatcher.dispatchEvent = function(type, data)
{
    if (!this.events)
    {
        this.events = {};
    }
    if (this.events[type])
    {
        var events = this.events[type];
        for (var iEvent = 0; iEvent < events.length; iEvent++)
        {
            var listener = events[iEvent].listener;
            var scope = events[iEvent].scope;

            if ((typeof listener).toString() == "function")
            {
                if (scope)
                {
                    scope.eventRecieverFunction = listener;
                    scope.eventRecieverFunction(
                    {
                        currentTarget: this,
                        type: type,
                        data: data
                    });
                }
                else
                {
                    listener(
                    {
                        currentTarget: this,
                        type: type,
                        data: data
                    });
                }
            }
            else
            {
                scope[listener](
                {
                    currentTarget: this,
                    type: type,
                    data: data
                });
            }
        }
    }
}
Event_Dispatcher.removeEventListener = function(type, listener, scope)
{
    if (!this.events)
    {
        return false;
    }
    if (!this.events[type])
    {
        return false;
    }
    var events = this.events[type];
    for (var iEvent = 0; iEvent < events.length; iEvent++)
    {
        if ((listener == events[iEvent].listener) && (scope == events[iEvent].scope))
        {
            events.splice(iEvent, 1);
        }
    }
}


function JSON_Loader(){
	this.request;
	this.url;
	this.isReady = false;
	ADD_EVENT_DISPATCHER(this);
}
JSON_Loader.prototype.abort = function (){
	if (this.request){
		this.request.abort();
	}
}
JSON_Loader.prototype.send = function(data)
{
	this.load(data.url, data.data, data.contentType || null, data.requestMethod || null, data.headers || null);
}
JSON_Loader.prototype.load = function (url, parameters, contentType, requestMethod, headers)
{
		this.url = url;
		this.data = null;
		this.isReady = false;

		var self = this;

		if (this.request)
		{
			this.request.abort();
		}
        if (window.XMLHttpRequest)
		{ // Mozilla, Safari, ...
            this.request = new XMLHttpRequest();
            if (this.request.overrideMimeType)
			{
                this.request.overrideMimeType('text/xml');
                // See note below about this line
            }
        }
		else if (window.ActiveXObject)
		{ // IE
            try
			{
                this.request = new ActiveXObject("Msxml2.XMLHTTP");
            }
			catch (e)
			{
                try
				{
                    this.request = new ActiveXObject("Microsoft.XMLHTTP");
                }
				catch (e)
				{
				}
            }
        }



        if (!this.request)
		{
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
		}

		if (parameters && parameters.constructor == Object)
		{
			var string = '';
			var formData = new FormData();
			for (var parameter in parameters) {
				string += (string == '' ? '' : '&') + parameter + '=' + parameters[parameter];
				formData.append(parameter, parameters[parameter]);
			}
			parameters = string;
		}

		this.request.onreadystatechange = function(event)
		{
			var error = false;
			var request = event.target;
			var readyState = request.readyState;
			var isComplete = false;
			var headers = this.getAllResponseHeaders().split(unescape('%0D%0A'));
			self.headers = {};
			for (var iHeader = 0; iHeader < headers.length; iHeader++) {
				if (headers[iHeader] != '')
				{
					var name = headers[iHeader].split(':')[0];
					self.headers[name] = (headers[iHeader].split(/^[^:]*?:/).pop());
				}

			}
			//console.log(readyState, request.status)
			if (readyState == 4)
			{
				if ((request.status != 200))
				{
					//console.log(this);
					try
					{
						var string = unescape(escape(this.responseText).replace(/%0A/gim, '').replace(/%0D/gim, ''));
						//console.log(string)
						self.data = JSON.parse(string);
						self.dispatchEvent(Event.ERROR);
					}
					catch(e)
					{
						self.data = this.responseText;
					}
					self.dispatchEvent(Event.ERROR);
				}
				else if ((request.status == 200) || ((window.location.protocol === "file:") && (request.status == 0)))
				{
					try
					{
						var string = unescape(escape(this.responseText).replace(/%0A/gim, '').replace(/%0D/gim, ''));
						self.data = JSON.parse(string);
					}
					catch(e)
					{
						self.data = this.responseText;
					}
					self.isReady = true;
					self.dispatchEvent(Event.COMPLETE);
				}
			}

		};
        if (parameters) {
			console.log(requestMethod || "POST", this.url, true)
			this.request.open(requestMethod || "POST", this.url, true)
			if (contentType) {
				this.request.setRequestHeader("Content-Type", contentType);
			} else {
				this.request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
			}

			if (headers) {
				for (var iHeader = 0; iHeader < headers.length; iHeader++) {
					console.log(headers[iHeader].name, headers[iHeader].value)
					this.request.setRequestHeader(headers[iHeader].name, headers[iHeader].value);
				}
			}

			this.request.send(parameters)
		} else {
			this.request.open(requestMethod || 'GET', this.url, true);
			if (contentType) {
				this.request.setRequestHeader("Content-Type", contentType);
			}
			if (headers) {
				for (var iHeader = 0; iHeader < headers.length; iHeader++)
				{
					this.request.setRequestHeader(headers[iHeader].name, headers[iHeader].value);
				}
			}
	        this.request.send(null);
		}
}
