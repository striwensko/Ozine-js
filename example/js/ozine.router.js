Ozine.Router = {
	routes: []
}
Ozine.Router.start = function(reload) {
  window.onpopstate = function(event) {
    Ozine.Router.onRoute(null, event);
  }
  reload && this.onRoute();
}
Ozine.Router.Server = 'http://striwensko.github.io/wallmart/';
Ozine.Router.addRoute = function(route, callback) {
  /*
  "help":                 "help",    // #help
  "search/:{query}":        "search",  // #search/kiwis
  "search/:{query}(/p:page)": "search"   // #search/kiwis/p7
  */
  this.routes.push({
    route: route,
    callback: callback
  })
}
Ozine.Router.supportSlashHistory = function() {
	return !!(window.history && (typeof window.history.pushState != "undefined"));
}
Ozine.Router.navigate = function(pathName, makeHistory){
  if (this.supportSlashHistory()){
    if (Ozine.Router.Server){
      var location = Ozine.Router.Server + pathName;
    } else {
      var location = window.location.toString().split('#')[0];
      location = location.split('?')[0];
      location = location + '#' + pathName;
    }

    this.HISTORY_URL = location;
		if (makeHistory == false) {
			window.history.replaceState(null, null, location);
		} else {
      window.history.pushState(null, null, location);
		}
  }
}
Ozine.Router.onRoute = function(force, event) {
	var location = document.location.toString();
	if (this.HISTORY_URL != location || force === true) {
    this.HISTORY_URL = location;
    if (!Ozine.Router.Server){
      var fragment = location.split('#');
      fragment = (fragment.length > 1) ? fragment.pop() : '';
    } else {
      var fragment = location.replace(Ozine.Router.Server, '');
    }
    console.log(fragment);
		if (true || (route != "")) {
      for (var iRoute = 0; iRoute < this.routes.length; iRoute++){
        var route = this.routes[iRoute];
        if (fragment.match(this.routeToRegExp(route.route))){
          var params = this.routeToRegExp(route.route).exec(fragment).slice(1, -1);
          route.callback.apply(window, params)
        }
      }
    }
  }
}
Ozine.Router.optionalParam = /\((.*?)\)/g;
Ozine.Router.namedParam    = /(\(\?)?:\w+/g;
Ozine.Router.splatParam    = /\*\w+/g;
Ozine.Router.escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;
Ozine.Router.routeToRegExp = function(route) {
  route = route.replace(Ozine.Router.escapeRegExp, '\\$&')
    .replace(Ozine.Router.optionalParam, '(?:$1)?')
    .replace(Ozine.Router.namedParam, function(match, optional) {
      return optional ? match : '([^/?]+)';
    })
    .replace(Ozine.Router.splatParam, '([^?]*?)');
  return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
}




var SELLUTION = {}
SELLUTION.Router = function(){

};
SELLUTION.Router.prototype.addPage = function(page)
{
    var routes = page.routes;
    if (routes) {
        for (var iRoute = 0; iRoute < routes.length; iRoute++)
        {
            this.replaceRoute(routes[iRoute].url, routes[iRoute].data, page);
        }
    }
}
SELLUTION.Router.prototype.setData = function(pages)
{
	for (var property in pages)
	{
		var page = pages[property];
		var routes = page.routes;
		if (routes)
		{
			for (var iRoute = 0; iRoute < routes.length; iRoute++)
			{
				this.addRoute(routes[iRoute].url, routes[iRoute].data, page);
			}
		}
		else if (page.constructor == Object)
		{
			this.setData(page);
		}
	}
}
SELLUTION.Router.prototype.replace_state = function (path, data)
{
    if (this.supportSlashHistory()) {
        var location = window.location.toString().split('#')[0];

        location = location + '#' + path;


        if ((this.url != location)) {
            this.url = location;

            window.history.replaceState(data, '', location);
        }
    }
}
SELLUTION.Router.prototype.loadRoute = function (path, data) {
    if (this.supportSlashHistory()) {
        var location = window.location.toString().split('#')[0];

        location = location + '#' + path;


        if ((this.url != location)) {
            this.url = location;

            window.history.pushState(data, '', location);
            this.onRoute(true);
        }
    }
}
SELLUTION.Router.prototype.navigate = function(page, params, makeHistory)
{
	if (this.supportSlashHistory() && page.routes)
	{
		var location = window.location.toString().split('#')[0];
		var routes = page.routes;

		for (var iRoute = 0; iRoute < routes.length; iRoute++)
		{
			var fragment = routes[iRoute].url;
			var fragmentParams = fragment.match(/{.*?}/gim) || [];
			var doesMatch = true;
			//console.log(fragment)
			for (var iParam = 0; iParam < fragmentParams.length; iParam++)
			{
				var property = fragmentParams[iParam].replace('{', '').replace('}', '');
				var namespace = property.split('.');

				property = ((namespace.length > 1) ? namespace[1] : property);
                namespace = ((namespace.length > 1) ? namespace[0] : null);
                console.log(routes[iRoute].url, property, namespace)
				if (namespace && params[namespace] && params[namespace][property])
				{
					fragment = fragment.replace("{" + namespace + '.' + property + "}", params[namespace][property]);
				}
				else if (!namespace && params[property])
				{
					fragment = fragment.replace("{" + property + "}", params[property]);
				}
				else
				{
					doesMatch = false;
				}
				//console.log(fragment, doesMatch)
			}
			//console.log('doesMatch:', doesMatch, routes[iRoute].url);

			if (doesMatch)
            {
                console.log(routes[iRoute].url, property, namespace)
				break;
			}
		}

        location = location.split('?')[0];
		location = location + '#' + fragment;

		if ((this.HISTORY_URL != location))
		{
			this.HISTORY_URL = location;
			if (this.supportSlashHistory())
			{
                if (makeHistory == false)
				{
					window.history.replaceState(params, page.id, location);
				}
				else
				{
                    window.history.pushState(params, page.id, location);
				}
			}

			//alert("save navigation:" + location);
		}
	}
}

SELLUTION.Router.prototype.supportSlashHistory = function()
{
	return !!(window.history && (typeof window.history.pushState != "undefined"));
}

SELLUTION.Router.prototype.replaceRoute = function (_route, params, page) {
    _route = _route.replace(/\{(.*?)\.(.*?)\}/gim, '{$1:$2}');

    var route = _route;
    route = route.replace(/\:/gim, '___');
    route = route.replace(/\{/gim, ':').replace(/\}/gim, ';');

    for (var iRoute = 0; iRoute < this.routes.length; iRoute++)
    {
        if (this.routes[iRoute].route == route)
        {
            //console.log("replaced route", route);
            this.routes[iRoute] = this.buildRoute(_route, params, page);
            return true;
        }
    }

    this.addRoute(_route, params, page);
    return false;
}

SELLUTION.Router.prototype.addRoute = function(route, params, page)
{
    route = route.replace(/\{(.*?)\.(.*?)\}/gim, '{$1:$2}');
    if (route.split('{').length > 1)
	{
		this.routes.push(this.buildRoute(route, params, page));
	}
	else
	{
		this.routes.unshift(this.buildRoute(route, params, page));
	}
}
var optionalParam = /\((.*?)\)/gim;
var namedParam    = /(\(\?)?:\w+;/gim;
var splatParam    = /\*\w+/gim;
var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/gim;

SELLUTION.Router.prototype.buildRoute = function(route, data, page)
{
	route = route.replace(/\:/gim, '___');
	route = route.replace(/\{/gim, ':').replace(/\}/gim, ';');
	var paramNames = route.match(namedParam);
	if (paramNames)
	{
		for (var iParam = 0; iParam < paramNames.length; iParam++)
		{
			paramNames[iParam] = paramNames[iParam].replace(':', '').replace(';', '');
			paramNames[iParam] = paramNames[iParam].replace('___', ':');
		}
	}
	return {regExp:this.routeToRegExp(route), route:route, paramNames:paramNames, data:data, page:page}
}

SELLUTION.Router.prototype.routeToRegExp = function(route)
{
	route = route.replace(escapeRegExp, '\\$&');
	route = route.replace(optionalParam, '(?:$1)?');
	route = route.replace(namedParam, function(match, optional) {return optional ? match : '([^\/]+)';});
	route = route.replace(splatParam, '(.*?)');
	return new RegExp('^' + route + '$');
}

SELLUTION.Router.prototype.onRoute = function(force, event)
{
	var location = document.location.toString();


	if (this.HISTORY_URL != location || force === true)
	{
		this.HISTORY_URL = location;

		var route = location.split('#');
		route = (route.length > 1) ? route.pop() : '';
		//console.log("route", route);
		if (true || (route != ""))
		{
			for (var iRoute = 0; iRoute < this.routes.length; iRoute++)
			{
			    var doMatch = route.match(this.routes[iRoute].regExp);

				if (doMatch)
				{

					var values = this.routes[iRoute].regExp.exec(route).slice(1);
					var params = this.routes[iRoute].paramNames;
					var data = this.routes[iRoute].data || {};

					//console.log(data, values, params)
					if (params)
					{
						for (var iParam = 0; iParam < params.length; iParam++)
                        {
                            if (params[iParam].search(':') > 0)
                            {
                                var split = params[iParam].split(':');
                                data[split[0]] = data[split[0]] || {};
                                data[split[0]][split[1]] = values[iParam];
                            }
                            else
                            {
                                data[params[iParam]] = values[iParam];
                            }

						}
					}

				    //console.log(this.routes[iRoute]);
                    //console.log(event)
					if (event)
					{
					    Object.extend(data, event.state)
					}
					//console.log(data)
					//console.log(this.routes[iRoute]);
					SELLUTION.PAGE.Loader(this.routes[iRoute].page, data);
					//SMART_DESK.exec(SMART_DESK.LOAD_PAGE, data);

					break;
				}
			}
		}
	}
}
