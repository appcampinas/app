$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {

        var target = $(this).attr("href");

        var top = $(target).offset().top-50;

        if(target.indexOf('#') >= 0){
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': top
            }, 1000, 'swing', function () {
                window.location.hash = target;
            });
            $('#navbar').removeClass('in');
        }else{
            window.location.href = target;
        }
    });
});

function openModal(title,body){
	$("#myModal .modal-title").html(title);
	$("#myModal .modal-body").html(body);
	$("#btnModal").click();
}
