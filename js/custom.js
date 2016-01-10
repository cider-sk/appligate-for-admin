$(function(){
    //TOPのボタン
    $(".move-top").click(function(){
        $("html,body").animate({scrollTop:0},"fast");
    });
    
    //日付のセレクトボックス（不要になるかも）
    for(var i=0; i<11; i++){
        $(".year").append($("<option>").val(i+2015).text(i+2015+"年"));
    }
    for(var j=1; j<13; j++){
        $(".month").append($("<option>").val(j).text(j+"月"));
    }
    for(var k=1; k<32; k++){
        $(".day").append($("<option>").val(k).text(k+"日"));
    }
    
    //メールフォームなどの日付部分のラジオボタンの制御
    $('[name=emailStart]').click(function(){
        if ($('input[name=emailStart]:checked').val() == 'immediately') {
            $('input[name=sendDate]').attr('disabled','disabled');
        } else if ($('input[name=emailStart]:checked').val() == 'selectDate') {
            $('input[name=sendDate]').removeAttr('disabled')
        }
    });
    
    //ポップアップ
    $(function(){
        $('a.user_stop').click(function(){
            if (confirm('このアカウントを停止しますか？')) {
                return true;
            } else {
                return false;
            }
        });
    });
});

