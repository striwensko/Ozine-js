
Ozine.addEventSimple = function(obj, evt, fn)
{
    if (obj.addEventListener)
    {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent)
    {
        obj.attachEvent('on' + evt, fn);
    }
}

Ozine.removeEventSimple = function(obj, evt, fn)
{
    if (obj.removeEventListener)
    {
        obj.removeEventListener(evt, fn, false);
    }
    else if (obj.detachEvent)
    {
        obj.detachEvent('on' + evt, fn);
    }
}

Ozine.JSON = function (){
	this.request;
	this.url;
	this.isReady = false;
}
Ozine.JSON.prototype.abort = function (){
	if (this.request){
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
Ozine.UI = {};
Ozine.UI.collapse = function (button, panel, isExpanded, classes) {
  var height = 0;
  button.collapse = {};
  var timeLine = new Ozine.TimeLine(300, 33);
  timeLine.position = isExpanded ? 300 : 0;
  timeLine.direction = isExpanded ? 1 : -1;
  timeLine.onChange = function () {
      panel.style.height = (height * this.getTime(0, 300)) + 'px';
      panel.style.display = (this.position == 0 ? 'none' : '');
      panel.style.overflow = (this.position == this.duration ? '' : 'hidden');

  }
  button.collapse.toggle = function (event) {
      timeLine.direction = ((timeLine.direction == 1) ? -1 : 1);
      var overflow = panel.style.overflow;
      var display = panel.style.display;

      panel.style.height = '';
      panel.style.display = 'block';
      panel.style.overflow = 'visible';

      height = panel.offsetHeight;

      panel.style.display = display;
      panel.style.overflow = overflow;

      timeLine.play();
      console.log(classes)
      if (classes){
        button.classList[timeLine.direction == 1 ? 'add' : 'remove'](classes.open);
        button.classList[timeLine.direction == -1 ? 'add' : 'remove'](classes.close);
      }
  }
  button.onclick = button.collapse.toggle;
}

Ozine.UI.popupize = function (button, popup, open_classname) {
  button.popup = {};
  button.popup.mouseDownFN = function (event) {
      var target = event.target;
      while (target) {
          if (target == button || target == popup) {
              return true;
          }
          target = target.parentNode;
      }
      popup.style.display = 'none';
      button.classList.remove(open_classname);
      Ozine.removeEventSimple(document, 'mousedown', button.popup.mouseDownFN);
      button.popup.onClose && button.popup.onClose(event);
  }
  button.popup.close = function () {
      popup.style.display = 'none';
      button.classList.remove(open_classname);
      Ozine.removeEventSimple(document, 'mousedown', button.popup.mouseDownFN);
      button.popup.onClose && button.popup.onClose(event);
  }
  button.popup.open = function () {
      popup.style.display = '';
      button.classList.add(open_classname);
      button.popup.onOpen && button.popup.onOpen(event);
      Ozine.addEventSimple(document, 'mousedown', button.popup.mouseDownFN);
  }
  button.popup.toggle = function (event) {
      var target = event.target;
      while (target) {
          if (target == popup) {
              return true;
          }
          target = target.parentNode;
      }
      popup.style.display = ((popup.style.display == 'none') ? '' : 'none');
      if (popup.style.display == '') {
          if (!button.classList.contains(open_classname)) {
              button.classList.add(open_classname);
          }
          Ozine.addEventSimple(document, 'mousedown', button.popup.mouseDownFN);
          button.popup.onOpen && button.popup.onOpen(event);
      }
      else {
          button.classList.remove(open_classname)
          Ozine.removeEventSimple(document, 'mousedown', button.popup.mouseDownFN);
          button.popup.onClose && button.popup.onClose(event);

      }
  }
  button.onclick = button.popup.toggle;
}








DragTouch = function()
{
	this.startX = 0;
	this.endY = 0;

	var self = this;
	this.__moveFN = function(event){self.moveFN(event);event.preventDefault();};
	this.__endFN = function(event){self.end(event);event.preventDefault();};
}
DragTouch.START = 'start';
DragTouch.MOVE = 'move';
DragTouch.STOP = 'stop';
DragTouch.ZOOM = 'zoom';
DragTouch.prototype.start = function (event)
{
	this.startX = (event.touches) ? event.touches[0].clientX : event.clientX;
	this.startY = (event.touches) ? event.touches[0].clientY : event.clientY;
	this.moveX = 0;
	this.moveY = 0;
	this.endX = this.startX;
	this.endY = this.startY;
	this.zoom = null;
	//console.log(this.startX, this.startY, event.touches, this.endX, this.endY);
	this.onStart && this.onStart();

	this.HTML_DIV = null;
	event.preventDefault();

	if (event.type == "touchstart")
	{
		Ozine.addEventSimple(document, "touchmove", this.__moveFN);
		Ozine.addEventSimple(document, "touchend", this.__endFN);
	}
	else if (event.type == "mousedown")
	{
		Ozine.addEventSimple(document, "mousemove", this.__moveFN);
		Ozine.addEventSimple(document, "mouseup", this.__endFN);
	}


	return false;
}
DragTouch.prototype.startDrag = function (event, htmlID, limits)
{
	// AVOID FIRING AGAIN ON ZOOM
	if (this.isActive)
	{
		return false;
	}
	this.isActive = true;


	this.hasMove = false;
	this.start(event)
	limits = limits || {};

	if (htmlID)
	{
		this.HTML_DIV = (htmlID);

		this.divX_Start = this.HTML_DIV.offsetLeft;
		this.divY_Start = this.HTML_DIV.offsetTop;

		this.position = {x:this.divX_Start, y:this.divY_Start};
	}
	else
	{
		var x = (event.touches) ? event.touches[0].clientX : event.clientX;
		var y = (event.touches) ? event.touches[0].clientY : event.clientY;
		this.position = {x:x, y:y};
	}

	this.leftLimit = (limits.left != limits.undefined) ? limits.left : null;
	this.topLimit = (limits.top != limits.undefined) ? limits.top : null;
	this.rightLimit = (limits.right != limits.undefined) ? limits.right : null;;
	this.bottomLimit = (limits.bottom != limits.undefined) ? limits.bottom : null;;

	this.moveFree = (this.leftLimit == null) && (this.topLimit == null) && (this.rightLimit == null) && (this.bottomLimit == null);
	this.move = {x:0, y:0};

	return true;
}

DragTouch.prototype.moveFN = function (event)
{
	// DETECT A MINIMUM MOVE BEOFRE FIRING THE MOVE EVENT
	if (!this.hasMove) {
		var x = (event.touches) ? event.touches[0].clientX : event.clientX;
		var y = (event.touches) ? event.touches[0].clientY : event.clientY;

		if (event.touches) {
			if ((x - this.startX) * (x - this.startX) + (y - this.startY) * (y - this.startY) > 100) {
				this.startX = x;
				this.startY = y;
				this.moveX = 0;
				this.moveY = 0;
				this.endX = this.startX;
				this.endY = this.startY;
				this.hasMove = true;
			}
		} else if ((x != this.startX) || (y != this.startY)) {
			this.hasMove = true;
		}
	}
	if (!this.hasMove) {
		return false;
	}

	this.endX = (event.touches) ? event.touches[0].clientX : event.clientX;
	this.endY = (event.touches) ? event.touches[0].clientY : event.clientY;
	this.moveX = this.endX - this.startX;
	this.moveY = this.endY - this.startY;

	if (this.HTML_DIV) {
		var tmpX = (this.divX_Start + this.moveX);
		var tmpY = (this.divY_Start + this.moveY);

		if (this.moveFree != true) {
			if ((this.rightLimit != null) && (this.leftLimit != null)) {
				tmpX = Math.min(tmpX, this.rightLimit);
				tmpX = Math.max(tmpX, this.leftLimit);

				this.HTML_DIV.style.left = tmpX + 'px';
			}
			if ((this.bottomLimit != null) && (this.topLimit != null)) {
				tmpY = Math.min(tmpY, this.bottomLimit);
				tmpY = Math.max(tmpY, this.topLimit);

				this.HTML_DIV.style.top = tmpY + 'px';
			}
		} else {
			this.HTML_DIV.style.left = tmpX + 'px';
			this.HTML_DIV.style.top = tmpY + 'px';
		}
		this.position = {x:tmpX, y:tmpY};
		this.move = {x:tmpX - this.divX_Start, y:tmpY - this.divY_Start};
	} else {
		this.move = {x:this.moveX, y:this.moveY};
		if ((this.rightLimit != null) && (this.leftLimit != null)) {
			this.move.x = Math.min(this.move.x, this.rightLimit);
			this.move.x = Math.max(this.move.x, this.leftLimit);
		}
		if ((this.bottomLimit != null) && (this.topLimit != null)) {
			this.move.y = Math.min(this.move.y, this.bottomLimit);
			this.move.y = Math.max(this.move.y, this.topLimit);
		}
		this.position = this.move;
	}
	this.onChange && this.onChange({clientX:this.endX, clientY:this.endY, move:this.move, position:this.position});
}

DragTouch.prototype.end = function (event)
{
	this.isActive = false;

	if (event.type == "touchend")
	{
		Ozine.removeEventSimple(document, "touchmove", this.__moveFN);
		Ozine.removeEventSimple(document, "touchend", this.__endFN);
	}
	else if (event.type == "mouseup")
	{
		Ozine.removeEventSimple(document, "mousemove", this.__moveFN);
		Ozine.removeEventSimple(document, "mouseup", this.__endFN);
	}

	var clientX = (event.touches) ? ((event.touches.length > 0) ? event.touches[0].clientX : this.endX) : event.clientX;
	var clientY = (event.touches) ? ((event.touches.length > 0) ? event.touches[0].clientY : this.endY) : event.clientY;
	event = {clientX:clientX, clientY:clientY, move:this.move, position:this.positionY};
	this.onComplete && this.onComplete(event);

	document.getElementsByTagName("body")[0].style.userSelect = "";
	document.getElementsByTagName("body")[0].style.webkitUserSelect = "";
	document.getElementsByTagName("body")[0].style.MozUserSelect = "";
	document.getElementsByTagName("body")[0].setAttribute("unselectable", "off");
}





ImageUploader = function(settings)
{
    this.fileInput = document.createElement("input");
    this.fileInput.setAttribute("type", "file");
	this.fileInput.setAttribute("accept", "image/*");
    this.fileInput.setAttribute("onchange", "this.dragUploader.processFiles(this.files)");
    this.fileInput.dragUploader = this;
    //this.fileInput.style.display = 'none';

    document.body.appendChild(this.fileInput);
    this.fileInput.style.position = 'fixed';
    this.fileInput.style.top = '-300px';

    this.upload = settings && settings.upload;
}
/**
*	Call this to open dialog for selecting a file from the computer or the phone
*	@param {event} event This event must be a dom click event to work on all browsers and devices
*/
ImageUploader.prototype.browse = function(event)
{
    console.log(event);
    this.fileInput.setAttribute("multiple", "multiple");
    this.fileInput.click(event);
}

ImageUploader.prototype.imageReady = function(fileData, fileName)
{
    this.data = fileData;
    console.log("fileName", fileName);
    this.onChange && this.onChange(Event.COMPLETE,
    {
        fileName: fileName
    });

    this.fileInput.setAttribute("onchange", "");
    this.fileInput.dragUploader = null;
    document.body.removeChild(this.fileInput);

    this.fileInput = document.createElement("input");
    this.fileInput.setAttribute("type", "file");
    this.fileInput.setAttribute("onchange", "this.dragUploader.processFiles(this.files)");
    this.fileInput.dragUploader = this;

    document.body.appendChild(this.fileInput);
    this.fileInput.style.position = 'fixed';
    this.fileInput.style.top = '-300px';
}
ImageUploader.prototype._onProgress = function(event)
{
    this.progress = event.loaded / event.total;
    self.onProgress && self.onProgress(Event.PROGRESS)
}
ImageUploader.prototype.startUpload = function(f)
{
    if (this.upload)
    {
        var self = this;
        var data = new FormData();
        data.append('file', f);
        var request = new XMLHttpRequest();
        request.onreadystatechange = function()
        {
            if (request.readyState == 4)
            {
                if (request.status == 200)
                {
                    try
                    {
                        var json = JSON.parse(this.responseText);
                        self.onUpload && self.onUpload(Event.UPLOAD, json);
                    }
                    catch (e)
                    {
                        self.onUpload && self.onUpload(Event.UPLOAD);
                    }
                }

            }
        };
        request.upload.addEventListener('progress', function(event)
        {
            self._onProgress(event);
        }, false);
        request.open('POST', this.upload);
        request.send(data);
    }
}
ImageUploader.prototype.processFiles = function (files, index)
{
    //console.log('file:', this.fileInput);
    // files is a FileList of File objects. List some properties.
    index = (index ? index : 0);
    var f = files[index];
    console.log(files);
    if (f)
    {

        //console.log(f);
        var fileName = f.name;
        var ext = fileName.split(/\./).pop().toLowerCase();

        var self = this;
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = function(e)
        {
			console.log("processFile")
            self.startUpload(f);
            self.imageReady(e.target.result, fileName);
            index++;
            if (index < files.length) {
                self.processFiles(files, index);
            }
        };

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
    //document.getElementById('msg').innerHTML = ;
}
