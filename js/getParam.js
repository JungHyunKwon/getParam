/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

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
						
						//찾는 값이 있을때
						if(name === paramI[0]) {
							var valueI = paramI[1] || '';
							
							result = decodeURIComponent(valueI);

							//인코딩된 값일 때
							if(valueI !== result) {
								result = decodeURIComponent(valueI.replace(/\+/g, '%20'));
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