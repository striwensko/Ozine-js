Ozine.TimeLine = function(duration)
{
	this.duration = duration;
	this.direction = 1;
	this._position = 0;
	this.status = "STOP";
	this.startTime = 0;
	this.interval = 33;

	this.intervalObj;

	this.data = {};
	this.events = {}

	var self = this;
	var iFrame = 0;
	this.REQ_ANIMATION = function(timeStamp){self.update();/*console.log(timeStamp, iFrame);iFrame++;*/}
}

/**
* Makes the timeline start running
*
*/
Ozine.TimeLine.prototype.play = function ()
{
	if (((this.direction == 1) && (this._position == this.duration)) || ((this.direction == -1) && (this._position == 0)))
	{
	}
	else
	{
		this.startTime = new Date().getTime() - this._position;
		if (this.status != 'PLAY')
		{
			var self = this;
			var doAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

			if (doAnimation)
			{
				doAnimation(this.REQ_ANIMATION);
			}
			else
			{
				var self = this;
				this.intervalObj = setInterval(function(){self.update()}, this.interval);
			}
		}
		this.status = 'PLAY';
	}
}
/**
* Makes the timeline pause running
*
*/
Ozine.TimeLine.prototype.pause = function ()
{
	this.status = 'PAUSE';
	clearInterval(this.intervalObj);
}
/**
* Makes the timeline stop running
*
*/
Ozine.TimeLine.prototype.stop = function ()
{
	this.status = 'STOP';
	clearInterval(this.intervalObj);
}

Object.defineProperty(Ozine.TimeLine.prototype, 'position', {
		get:function(){
			return this._position
		},
		set:function(value){
			this._position = value;
			this.startTime = new Date().getTime() - this._position;
		},
	configurable:true});



Ozine.TimeLine.prototype.update = function ()
{
	if (!Date.now)
	{
		Date.now = function()
		{
			return new Date().getTime();
		};
	}
	if (this.status != 'PLAY')
	{
		return false;
	}
	var TIME = Date.now();
	if (this.direction == 1)
	{
		this._position =  TIME - this.startTime;
		this._position = Math.min(this.duration, this._position);
		if (this._position == this.duration)
		{
			this.status = 'STOP';
			clearInterval(this.intervalObj);
			this.onComplete && this.onComplete(Event.COMPLETE);

			if (this.onComplete)
			{
				this.onComplete();
			}
		}
		else if (this.status == 'PLAY')
		{
			var doAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

			if (doAnimation)
			{
				doAnimation(this.REQ_ANIMATION);
			}
		}
	}
	else
	{
		this._position = Math.max((2 * this._position) - (TIME - this.startTime), 0);
		this.startTime = TIME - this._position;
		if (this._position == 0)
		{
			this.status = 'STOP';
			clearInterval(this.intervalObj);
			this.onComplete && this.onComplete(Event.COMPLETE);

			if (this.onComplete)
			{
				this.onComplete();
			}
		}
		else if (this.status == 'PLAY')
		{
			var doAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

			if (doAnimation)
			{
        doAnimation(this.REQ_ANIMATION);
			}
		}
	}

	this.onChange && this.onChange(Event.CHANGE);
}

Ozine.TimeLine.prototype.getTime = function(timeOffset, duration, easeFunction)
{
	var time = Math.min(Math.max(this._position - timeOffset, 0), duration);
	if (easeFunction != null)
	{
		return easeFunction(time, 0, 1, duration);
	}
	return this.easeInOut(time, 0, 1, duration);
}
Ozine.TimeLine.prototype.easeInOut = function (t, b, c, d)
{
	return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}


Ozine.TimeLine.prototype.easeInOutPos = function (pos, b, c, d)
{
	return  Math.acos(-(pos - b) * (2 / c)  + 1) * d / Math.PI;
}

Ozine.TimeLine.easeInSine = function (t, b, c, d) {
	return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
}
Ozine.TimeLine.easeOutSine = function (t, b, c, d) {
	return c * Math.sin(t/d * (Math.PI/2)) + b;
}
Ozine.TimeLine.easeInOutSine = function (t, b, c, d) {
	return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}
Ozine.TimeLine.easeInElastic = function (t, b, c, d)
{
	var s=1.70158;var p=0;var a=c;
	if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
	if (a < Math.abs(c)) { a=c; s=p/4; }
	else s = p/(2*Math.PI) * Math.asin (c/a);
	return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
}
Ozine.TimeLine.easeOutElastic = function (t, b, c, d) {
	var s=1.70158;var p=0;var a=c;
	if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
	if (a < Math.abs(c)) { a=c; s=p/4; }
	else s = p/(2*Math.PI) * Math.asin (c/a);
	return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}
Ozine.TimeLine.easeInOutElastic = function (t, b, c, d) {
	var s=1.70158;var p=0;var a=c;
	if (t===0) return b;  if ((t/=d/2)===2) return b+c;  if (!p) p=d*(.3*1.5);
	if (a < Math.abs(c)) { a=c; s=p/4; }
	else s = p/(2*Math.PI) * Math.asin (c/a);
	if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
}
Ozine.TimeLine.easeInBack = function (t, b, c, d, s) {
	if (s === undefined) s = 1.70158;
	return c*(t/=d)*t*((s+1)*t - s) + b;
}
Ozine.TimeLine.easeOutBack = function (t, b, c, d, s) {
	if (s === undefined) s = 1.70158;
	return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}
Ozine.TimeLine.easeInOutBack = function (t, b, c, d, s) {
	if (s === undefined) s = 1.70158;
	if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
}
Ozine.TimeLine.easeOutBounce = function (t, b, c, d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}
}

Ozine.TimeLine.applyMatrix = function(elements, matrix)
{
	elements = (elements.constructor == Array) ? elements : [elements];
	if (!matrix)
	{
		for (var iElem = 0; iElem < elements.length; iElem++)
		{
			var element = elements[iElem];
			element.style.transform = "";
			element.style.MozTransform = "";
			element.style.WebkitTransform = "";
			element.style.msTransform = "";
			element.style.OTransform = "";
		}
		return false;
	}

	var properties = ['scale', 'scaleX', 'scaleY', 'rotation', 'x', 'y', 'radius', 'angle', 'opacity'];
	var scale = (matrix.hasOwnProperty('scale') ? matrix.scale : 1);
	var scaleX = (matrix.hasOwnProperty('scaleX') ? matrix.scaleX * scale : scale);
	var scaleY = (matrix.hasOwnProperty('scaleY') ? matrix.scaleY * scale : scale);
	var rotation = (matrix.hasOwnProperty('rotation') ? matrix.rotation : 0) * (Math.PI / 180);
	var x = (matrix.hasOwnProperty('x') ? matrix.x : 0);
	var y = (matrix.hasOwnProperty('y') ? matrix.y : 0);
	var opacity = (matrix.hasOwnProperty('opacity') ? matrix.opacity : 1);

	if (matrix.hasOwnProperty('radius') && matrix.hasOwnProperty('angle'))
	{
		var radius = matrix.radius;
		var angle = matrix.angle;

		x = Math.round(radius * Math.cos(angle * Math.PI / 180) * 100) / 100 + x;
		y = Math.round(radius * Math.sin(angle * Math.PI / 180) * 100) / 100 + y;

	}


	var data = [scaleX * Math.cos(rotation), -scaleY * Math.sin(rotation)       ,
			    scaleY * Math.sin(rotation)        , scaleX * Math.cos(rotation), x, y];


	var transform = 'matrix(' + data.join(',') + ')';

	for (var iElem = 0; iElem < elements.length; iElem++)
	{
		var element = elements[iElem];
		if (matrix.hasOwnProperty('opacity'))
		{
			element.style.opacity = opacity;
		}

		element.style.transform = transform;
		element.style.MozTransform = transform;
		element.style.WebkitTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;

		for (var property in matrix)
		{
			var propertyMatch = false;
			for (var iProp = 0; iProp < properties.length; iProp++)
			{
				if (properties[iProp] === property)
				{
					propertyMatch = true;
				}
			}
			if (!propertyMatch)
			{
				element.style[property] = matrix[property];
			}
		}
	}


	return false;
	for (var iElem = 0; iElem < elements.length; iElem++)
	{
		var enableTransform = false;
		var element = elements[iElem];
		if (!element.animation)
		{
			element.animation = {};
		}
		if (element.animation.x != x)
		{
			element.animation.x = x;
			enableTransform = true;
		}
		if (element.animation.y != y)
		{
			element.animation.y = y;
			enableTransform = true;
		}
		if (element.animation.scaleX != scaleX)
		{
			element.animation.scaleX = scaleX;
			enableTransform = true;
		}
		if (element.animation.scaleY != scaleY)
		{
			element.animation.scaleY = scaleY;
			enableTransform = true;
		}
		if (element.animation.rotation != matrix.rotation)
		{
			element.animation.rotation = matrix.rotation;
			enableTransform = true;
		}
		if (matrix.hasOwnProperty('opacity'))
		{
			if (element.animation.opacity != opacity)
			{
				element.style.opacity = opacity;
				element.animation.opacity = opacity;
			}
		}
		if (enableTransform)
		{
			element.style.transform = transform;
			element.style.MozTransform = transform;
			element.style.WebkitTransform = transform;
			element.style.msTransform = transform;
			element.style.OTransform = transform;
		}

	}
}
