
$(function tomiddle(){
	var myobj=document.getElementById('arrow_box_out');
	var bodyhh=document.body.clientHeight;
	var bodyww=document.body.clientWidth;	
	var objhh=myobj.clientHeight;
	var objww=myobj.clientWidth;
	$('#arrow_box_out').css('top', function(){
		return (bodyhh-objhh)/2;
	});
	$('#arrow_box_out').css('left', function(){
		return (bodyww-objww)/2;
	});
});

function initialize(){
    var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(25.03, 121.5),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
};

google.maps.event.addDomListener(window, 'load', initialize);
