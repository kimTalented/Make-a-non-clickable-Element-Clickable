/* Make an item clickable */

link = "http://kimberleygriffith.com/portfolio";

$("#element").each(function(index) {
	link = $( this ).find( "a" ).attr('href');
	$(this).attr("onclick", "window.open('"+link+"','_blank')");
});
