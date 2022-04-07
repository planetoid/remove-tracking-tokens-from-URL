javascript:(function(){
	function removeParameters(parms) {
		for (let i = 0; i < parms.length; i++) {
			var my_parameter = parms[i];
			const pattern = new RegExp(`[\?&]${my_parameter}=[^&]+`, 'gi');


		  	history.replaceState && history.replaceState(
			  null, '', location.pathname + location.search.replace(pattern, '').replace(/^&/, '?')
			);
		}
	  
	}

	var parms = ['fbclid', 'gclid', 'utm_source', 'utm_medium', 'utm_campaign'];
	removeParameters(parms);
	

})();
