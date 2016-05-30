$(document).ready(function() {
	$('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  dots: true,
	  //uncomment later
	  //autoplay: true,
	  //autoplaySpeed: 2000,
	  responsive: [
	  {
	    breakpoint: 768,
	    settings: {
	      arrows: false,
	      centerMode: true,
	      centerPadding: '40px',
	      slidesToShow: 3
	    }
	  },
	  {
	    breakpoint: 480,
	    settings: {
	      arrows: false,
	      centerMode: true,
	      centerPadding: '40px',
	      slidesToShow: 1
	    }
	  }
	  ]
	});

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
	var modal = {
		init: function() {

			// Setup the template
			this.source = $("#modal-template").html();

			// Setup outercontainer
			this.outercontainer = $('#content');

			// Get the stuff
			this.clickToOpenModal();

			// Close the stuff
			this.closeModal();

		},
		clickToOpenModal: function(context, thisLink) {

			$('a[data-behaviour="modal"]').on('click', function(e) {
				var thisLink = $(this);

				var context = {
					title: thisLink.data('title'),
					content: thisLink.data('content')
				};

				e.preventDefault();

			 // Do nothing if open
			 if ( modal.outercontainer.children('div#modal').length ) return;

				 // Attach the content to the the modal
				modal.attachTemplate(context, thisLink);

				// Trigger the open event
				thisLink.trigger('open');
			});

		},
		attachTemplate: function(context, thisLink) {
			 var source = Handlebars.compile(this.source);

				this.outercontainer
					.append(source(context))
					.promise()
					.done(function() {

					this
						.children('div#modal')
						.addClass('modal-visible');

					 // Close the stuff
					 thisLink.one('open', function() {
						 modal.closeModal();
					 });

			 });
		},
		closeModal: function() {
			var container = $("div#modal");

			// Remove modal on click background
			container.on('click', function() {
				container.remove();

			});
			// Remove modal on keypress ESC
			$(document).on( 'keydown', function (e) {
					if ( e.keyCode === 27 ) {
						 container.remove();
					}
			});
			// You can click on modal body
			container.find('div.modal-body').on('click', function(e) {
				e.stopPropagation();
			});
		}
	};

	modal.init();
})