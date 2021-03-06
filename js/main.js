$( document ).ready( function(){
	var url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144',
        mainEl = $('#main');

    $.getJSON(url).done(function( data ) {    
        
        data.results.forEach(function (data) {
            var html = 
                '<div class="wrap">'+ 
                    '<img src="'+data.media[0]["media-metadata"][0].url+'"/>'+
                    '<span class="title">'+data.title+'</span>'+
                    '<div class="art-info">'+
                        '<button class="back">Back</button>'+   
                        '<div class="content">'+data.abstract+
                            '<span class="type">'+data.type+'</span>'+
                            '<a href='+data.url+'>link</a>'
                        '</div>'
                    '</div>'
                '</div>';

            mainEl.append(html);
        });

        $(".wrap").click(function(e) {
            if(this.className == 'wrap'){
                mainEl.children().hide();
                $(this).show().addClass('show');
            }
            if(e.target.type == 'submit'){
                $(this).removeClass('show');
                mainEl.children().show();
            }
        });

    }).fail(function(){
        mainEl.append('<div>Some Error in loading data</div>')
    });
});