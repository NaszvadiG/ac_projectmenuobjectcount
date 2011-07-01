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
		window.my_objTabData = {currentTab : ""};
		$('#tabs li').each(
			function(){ 
				tabName = '';
				tabName = $(this).attr('id').replace('page_tab_','');
				window.my_objTabData.currentTab = "";
				window.my_objTabData.currentTab = $(this).attr('id');
				//alert(tabName);				
				$.getJSON("http://vpfa-dev.uoregon.edu/activeCollab/public/api.php?path_info=/projects/"+currentProjectID+"/"+tabName+"&token="+userAPI+"&format=json", 
					function(json) {
						if (json == null){ 
							jsonDataLength = "0"; 
						} else {
							jsonDataLength = json.length;
						} //end if
						$('#'+window.my_objTabData.currentTab).find('.count').text('('+jsonDataLength+')').show();
						//alert(window.my_objTabData.currentTab+": JSON length: " + jsonDataLength);
						alert("This ("+$('#'+window.my_objTabData.currentTab).attr('id')+") .count text: "+$('#'+window.my_objTabData.currentTab).find('.count').text());
					} //end function
				); //end getJSON
			} //end function
		); //end each
	} //end if Vid
	//void(0);
});  /*end ready*/