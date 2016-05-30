$(document).ready(function() {
	/*isotope*/
	$(".element-item").on('mouseover', function() {
		this.style.cursor = "pointer";
		$('.element-overlay').css('opacity', 1);
	})
	$(".element-item").on('mouseout', function() {
		this.style.cursor = "pointer";
		$('.element-overlay').css('opacity', 0);
	})

	/* for the -30- column, using handlebars */
	// Grab the template script
	var theTemplateScript = $("#data-template").html();

	// Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	// Add the compiled html to the page
	$('.the-30-Columns').html(theTemplate);
})