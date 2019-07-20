/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	/**
	 * @name URI 구성 요소 디코딩
	 * @param {string} value
	 * @return {string}
	 * @since 2018-07-13
	 */
	function _decodeURIComponent(value) {
		return (typeof value === 'string') ? decodeURIComponent(value.replace(/\+/g, '%20')) : '';
	}

	/**
	 * @name getParam
	 * @param {string} value
	 * @param {string} name
	 * @return {number}
	 * @since 2018-07-13
	 */
	window.getParam = function(value, name) {
		var result = '';
		
		//문자일 때
		if(typeof value === 'string') {
			var search = value.split('?')[1];

			//문자이면서 파라미터가 있을 때
			if(typeof name === 'string' && search) {
				search = search.split('&');

				for(var i = 0, searchLength = search.length; i < searchLength; i++) {
					var params = search[i].split('=');
					
					//값이 같을 때
					if(name === params[0]) {
						var param = params[1];
						
						//값이 있을 때
						if(param) {
							do {
								param = _decodeURIComponent(param);
								result = _decodeURIComponent(param);
							}
							
							//값이 다를 때
							while(param !== result);
						}

						break;
					}
				}
			}
		}

		return result;
	};
})();