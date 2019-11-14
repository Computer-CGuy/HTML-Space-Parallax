var height = innerHeight;
function parser(px){
    return parseInt($('text.onon').css('height').replace('px',''));
}
$(document).ready(function(){
    for(i=0;i<1000;i++){
        x = Math.floor(Math.random() * innerHeight*3) + 1;
        y=Math.floor(Math.random() * innerWidth) + 1;
        z=Math.floor(Math.random() * 6) + 1;
        s=(Math.floor(Math.random() * 30) + 10)/10;
        r =Math.floor(Math.random() * 200) + 30;
        g =Math.floor(Math.random() * 200) + 30;
        b =Math.floor(Math.random() * 200) + 30;
        $('.layer'+z).append('<div class="dot" style="background-color:rgb('+r+','+g+','+b+ ');padding:'+s+';top: '+x+';left: '+y+';"></div>');
    }
    s=0;
    $('h1.title').each(function(index,k){
        $(this).attr('id','p'+index)
        s+=1;
    });
});
$(window).scroll(function(){
    wScroll = $(this).scrollTop();
    for(i=1;i<s;i++){
    $('#p'+i).css('transform','translateY('+(((wScroll-($('#p'+i).offset().top))/1))+'px)')
    }
    $('#p0').css('transform','translateY('+((wScroll/1.1))+'px)')
    for(i=1;i<s;i++){
    $('.layer'+i).css('transform','translateY('+(wScroll/(1+(i/10)*3))*-1+'px)')
    }
    /*for(i=0;i<2000;i++){
        if(index==0){
            $(k).css('transform','translateY('+((wScroll/1))+'px)')
            return;
        }
     
    });*/
    
}); 