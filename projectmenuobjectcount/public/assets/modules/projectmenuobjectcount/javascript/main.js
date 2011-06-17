//alert('projectmenuobjectcount.js loaded'); //tested. Works
$(document).ready(function(){  /*run after jQuery loads*/
	//alert('jquery Ready'); //tested. Works
	//javascript: 
	if($('#logged_user span.inner').text().search('Welcome back Vid') !== -1 ) {
		$('#tabs div.container ul li a span').not('.count').addClass('count').append(' (#)');
	}
	//void(0);
});  /*end ready*/