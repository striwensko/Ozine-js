Ozine.JSON = function (){
	this.request;
	this.url;
	this.isReady = false;
}
Ozine.JSON.prototype.abort = function () {
	if (this.request) {
		this.request.abort();
	}
}
Ozine.JSON.prototype.send = function(data)
{
	this.load(data.url, data.data, data.contentType || null, data.requestMethod || null, data.headers || null);
}
Ozine.JSON.prototype.load = function (url, parameters, contentType, requestMethod, headers)
{
  var self = this;
  this.url = url;
  this.data = null;
  this.isReady = false;
  if (this.request) {
    this.request.abort();
  }
  if (window.XMLHttpRequest){ // Mozilla, Safari, ...
    this.request = new XMLHttpRequest();
    if (this.request.overrideMimeType) {
        this.request.overrideMimeType('text/xml');
    }
  } else if (window.ActiveXObject) { // IE
    try {
        this.request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            this.request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) { }
    }
  }
  if (parameters && parameters.constructor == Object) {
    var string = '';
    var formData = new FormData();
    for (var parameter in parameters) {
      string += (string == '' ? '' : '&') + parameter + '=' + parameters[parameter];
      formData.append(parameter, parameters[parameter]);
    }
    parameters = string;
  }
  this.request.onreadystatechange = function(event) {
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
    if (readyState == 4) {
      if ((request.status != 200)) {
        try {
          var string = unescape(escape(this.responseText).replace(/%0A/gim, '').replace(/%0D/gim, ''));
          self.data = JSON.parse(string);
        } catch(e) {
          self.data = this.responseText;
        }
        self.onError && self.onError();
      } else if ((request.status == 200) || ((window.location.protocol === "file:") && (request.status == 0))) {
        try {
          var string = unescape(escape(this.responseText).replace(/%0A/gim, '').replace(/%0D/gim, ''));
          self.data = JSON.parse(string);
        } catch(e) {
          self.data = this.responseText;
        }
        self.isReady = true;
        self.onData && self.onData();
      }
    }
  };
  if (parameters) {
    this.request.open(requestMethod || "POST", this.url, true)
    if (contentType) {
      this.request.setRequestHeader("Content-Type", contentType);
    } else {
      this.request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    }
    if (headers) {
      for (var iHeader = 0; iHeader < headers.length; iHeader++) {
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
      for (var iHeader = 0; iHeader < headers.length; iHeader++){
        this.request.setRequestHeader(headers[iHeader].name, headers[iHeader].value);
      }
    }
    this.request.send(null);
  }
}
