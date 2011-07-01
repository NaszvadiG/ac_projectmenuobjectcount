//alert('projectmenuobjectcount.js loaded'); //tested. Works
$(document).ready(function(){  /*run after jQuery loads*/
	//alert('jquery Ready'); //tested. Works
	//javascript: 
	if($('#logged_user span.inner').text().search('Welcome back Vid') !== -1 ) {
		//$('#tabs div.container ul li a span').not('.count').addClass('count').append(' (#)');
		$('#tabs div.container ul li a span').not(' .count').append(' <i class="count" style="display:none; font-style:normal;">()</i>');
		var userAPI = "23-NpUO6eVFmKrfLv1FDIeoglDc4hmqKu51dIUhspu4";
		var currentProjectID = "29";
		//$('#tabs div.container ul li').each(
		$('#tabs li').each(
			function(){ 
				tabName = '';
				tabName = $(this).attr('id').replace('page_tab_','');
				//alert(tabName);				
				var objectJsonData = $.getJSON("http://vpfa-dev.uoregon.edu/activeCollab/public/api.php?path_info=/projects/"+currentProjectID+"/"+tabName+"&token="+userAPI+"&format=json", 
					function(json) {
						if (json == null){ 
							jsonDataLength = "0"; 
						} else {
							jsonDataLength = json.length;
						} //end if
						return jsonDataLength;
					} //end function
				); //end getJSON
				if (objectJsonData !== null) {
					objectJsonDataLength = objectJsonData.json.length;
					$(this).find('.count').text('('+objectJsonDataLength+')').show();
					//alert(tabName+ "JSON length: " + objectJsonDataLength);
					//alert("This ("+$(this).attr('id')+") .count text: "+$(this).find('.count').text());
				} //end if objectJsonData
			} //end function
		); //end each
	} //end if Vid
	//void(0);
});  /*end ready*/