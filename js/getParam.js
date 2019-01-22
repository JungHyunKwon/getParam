/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
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
				var param = value.split('?')[1];

				//문자이면서 파라미터가 있을 때
				if(typeof name === 'string' && param) {
					param = param.split('&');

					for(var i = 0, paramLength = param.length; i < paramLength; i++) {
						var paramI = param[i].split('=');
						
						//찾는 값이 있을 때
						if(name === paramI[0]) {
							var valueI = paramI[1];
							
							//값이 있을 때
							if(valueI) {
								do {
									valueI = _decodeURIComponent(valueI);
									result = _decodeURIComponent(valueI);
								}
								
								//i번째 값과 결과가 다를 때
								while(valueI !== result);
							}

							break;
						}
					}
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}