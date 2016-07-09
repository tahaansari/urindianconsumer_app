$('.like').click(function(){
	
    var text = $('.like span').text();
    if( text == "Like" ){
       $('.like span').text('Unlike');
       $('.like').addClass('liked');
    }else{
        $('.like span').text('Like');
        $('.like').removeClass('liked');
    }
});