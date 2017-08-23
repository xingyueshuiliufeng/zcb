var _mm = require('util/mm.js');

var _user = {
	//登录
	'login':function(user){
		_mm.request({
			url:_mm.getServerUrl("user/login.php"),
			data:user
		});
	}
};

module.exports = _user;