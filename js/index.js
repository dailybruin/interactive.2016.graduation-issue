$(document).ready(function() {
	$(".element-item").on('mouseover', function() {
		this.style.cursor = "pointer";
		$('.element-overlay').css('opacity', 1);
	})
	$(".element-item").on('mouseout', function() {
		this.style.cursor = "pointer";
		$('.element-overlay').css('opacity', 0);
	})
})