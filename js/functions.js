function get_accomodations(){
  $.getJSON("data/alojamientos.json", function(data) {
    $('#get').html('').hide();
    accomodations = data.serviceList.service
//    $('#list').after('<h1>' + accomodations.length + '</h1>');
    var list = '<p>Alojamientos encontrados: ' + accomodations.length
     + ' (haz click sobre uno para ver sus detalles y su localizacion en el mapa)</p>'
    list = list + '<ul>'
    for (var i = 0; i < accomodations.length; i++) {
      list = list + '<li no=' + i + '>' + accomodations[i].basicData.title + '</li>';
    }
    list = list + '</ul>';
    $('#list').html(list);
    $('#list').show();
//    $('li').click(show_accomodation);
  });
};

$(document).ready(function(){
	$('#pestanas').tabs({
		active: '$("li:first")',
/**		ajaxOptions: {
			error(xhr, index, status, anchor){
				$(anchor.hash).text("Could not load page");
			}
		},
**/
//		event: 'mouseover',
//		collapsible: true,
/**		cookie: {
			expires:2,
		}
**/
	});
	initMap();
	$('#get').click(get_accomodations);

});