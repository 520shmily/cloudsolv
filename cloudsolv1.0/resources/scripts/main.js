var leftx = 0;
var temp = screen.width;
var left = './resources/images/control-left.png';
var right = './resources/images/control-right.png';
var leftoff = './resources/images/control-left-off.png';
var rightoff = './resources/images/control-right-off.png';
var selected = $('.selected');

$('.choose').on('click',function(){
    let index = $(this).attr('src') == right ? -1 : 1;
    if($(this).attr('src') == right) {
        leftx += index * temp;
        $('.home-container').animate({left: leftx});
        $('.btn-left').attr('src',left);
        selected.next().addClass('selected');
        selected.removeClass('selected');
        selected = selected.next();
    }else if($(this).attr('src') == left){
        leftx += index * temp;
        $('.home-container').animate({left: leftx});
        $('.btn-right').attr('src',right);
        selected.prev().addClass('selected');
        selected.removeClass('selected');
        selected = selected.prev();
    }else if($(this).attr('src') == leftoff){
        leftx = 0;
	}
    if(leftx == 0) {
        $('.btn-left').attr('src',leftoff);
    }else if(leftx == -(temp * 3)) {
        $('.btn-right').attr('src',rightoff);
        leftx = -(temp * 3);
    }
});

$('#nav-bar li').on('mouseover',function(){
    $('.home').removeClass('hover-on')
    $(this).addClass('hover-on home');
    $('#vendor').addClass('no-show');
    $('#category').addClass('no-show');
    $('.show-photos').removeClass('change')

    if($(this).hasClass('vendor')) {
        $('#vendor').removeClass('no-show');
        $('.show-photos').addClass('change')
    }else if($(this).hasClass('category')) {
        $('#category').removeClass('no-show');
        $('.show-photos').addClass('change')
    }
});

$('#nav-bar li').on('mouseout',function(){
    $('#first').addClass('hover-on');
    $(this).removeClass('hover-on');
    
    if($(this).hasClass('vendor') || $(this).hasClass('category')) {
        $('#first').removeClass('hover-on');
        $(this).addClass('hover-on');

        $('.container').on('mouseleave',function() {
            $('#vendor').addClass('no-show');
            $('#category').addClass('no-show');
            $('#first').addClass('hover-on');
            $('.vendor').removeClass('hover-on');
            $('.category').removeClass('hover-on');
            $('.show-photos').removeClass('change')
        });
    }
});

$('#search-ven').bind('input input',function(){
    var searchvalue = $(this).val().toLowerCase();
    $('#vendor .item').each(function(){
        var textimg = $(this).find("img").attr('imgtext');
        if(textimg.indexOf(searchvalue) < 0) {
            $(this).addClass('changebk');
        }else {
            $(this).removeClass('changebk');
        }
    });
    $('#vendor li').each(function(){
        var textli = $(this).html().toLowerCase();
        if(textli.indexOf(searchvalue) >= 0) {
            $(this).addClass('change-weight');
            $(this).parent().addClass('find-ul');
        }else {
            $(this).removeClass('change-weight');
        }
    });

    $('.find-ul .change-weight').parent().parent().removeClass('changebk');
});

$('#search-cate').bind('input input',function(){
    var searchvalue = $(this).val().toLowerCase();
    $('#category .item').each(function(){
        var texttitle = $(this).find('h6').html().toLowerCase();
        if(texttitle.indexOf(searchvalue) >= 0) {
            $(this).parent().removeClass('no-show');
        }else {
            $(this).addClass('no-show');
        }
    });
    $('#category li').each(function(){
        var textli = $(this).html().toLowerCase();
        if(textli.indexOf(searchvalue) >= 0) {
            $(this).addClass('change-weight');
            $(this).parent().addClass('find-ul');
        }else {
            $(this).removeClass('change-weight');
        }
    });

    $('.find-ul .change-weight').parent().parent().removeClass('no-show');
});
