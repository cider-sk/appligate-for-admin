$(function(){
    //TOPのボタン
    $(".move-top").click(function(){
        $("html,body").animate({scrollTop:0},"fast");
    });
    
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
    $('.submit_button').click(function(){
        if (confirm('登録しますか？')) {
            return true;
        } else {
            return false;
        }
    });
});

