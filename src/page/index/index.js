//var $ = require('jquery');
//$('body').html("this is jquery2~~");
// require('../common.js');
require("./index.css");

var _user = require('service/user-service.js');
_user.login({
		'username':'zs',
		'password':'111111'
	}
	);

