(function($){


   $(".panel-title a").on("click", function(){

   	   $(this).parent().toggleClass("active");
   });



	/*---------------------
	 Category menu
	--------------------- */
	$('#cate-toggle li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
    
    $('#cate-toggle>ul>li.has-sub>a').append('<span class="holder"></span>');

}(jQuery));