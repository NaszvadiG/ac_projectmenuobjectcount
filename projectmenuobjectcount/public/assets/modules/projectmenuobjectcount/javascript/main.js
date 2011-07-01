//alert('projectmenuobjectcount.js loaded'); //tested. Works
$(document).ready(function(){  /*run after jQuery loads*/
	//alert('jquery Ready'); //tested. Works
	//javascript: 
	if($('#logged_user span.inner').text().search('Welcome back Vid') !== -1 ) {
		//$('#tabs div.container ul li a span').not('.count').addClass('count').append(' (#)');
		$('#tabs div.container ul li a span').not(' .count').append(' <span class="count" style="display:none;">()</span>');
		var userAPI = "23-NpUO6eVFmKrfLv1FDIeoglDc4hmqKu51dIUhspu4";
		var currentProjectID = "29";
		//$('#tabs li').each(
		$('#tabs div.container ul li').each(
			function(){ 
				//alert( $(this).attr('id').replace('page_tab_',''));
				tabName = '';
				tabName = $(this).attr('id').replace('page_tab_','');
				$.getJSON("http://vpfa-dev.uoregon.edu/activeCollab/public/api.php?path_info=/projects/"+currentProjectID+"/"+tabName+"&token="+userAPI+"&format=json", 
					function(json) {
						if (json == null){ 
							jsonDataLength = "0"; 
						} else {
							jsonDataLength = json.length;
						} 
						//$(this, '.count').text('('+jsonDataLength+')').show();
						alert("JSON Data: " + jsonDataLength);
					} //end function
				); //end getJSON
			} //end function
		); //end each
	
	} //end if Vid
	//void(0);
});  /*end ready*/