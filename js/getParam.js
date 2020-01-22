/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	/**
	 * @name getParam
	 * @param {string} url
	 * @param {string} name
	 * @return {string || undefined}
	 * @since 2018-07-13
	 */
	window.getParam = function(url, name) {
		var result;
		
		//문자일 때
		if(typeof url === 'string') {
			var query = url.split('?')[1];

			//값이 있을 때
			if(query) {
				query = query.split('#')[0].split('&');

				for(var i = 0, queryLength = query.length; i < queryLength; i++) {
					var param = query[i].split('=');
					
					//이름이 같을 때
					if(name === param[0]) {
						result = param[1] || '';

						break;
					}
				}
			}
		}

		return result;
	};
})();