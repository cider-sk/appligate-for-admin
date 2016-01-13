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
    
    //ステータスの変更
    $('a.status-text').click(function(){
        if (confirm('ステータスを変更しますか？')) {
            return true;
        } else {
            return false;
        }
    });
    $('a.status-text').click(function(){
        var status = $(this).parent();
        if ($(status).hasClass('public')) {
            $(status).removeClass('public');
            $(status).addClass('private');
            $(this).html('未公開');
        } else if($(status).hasClass('private')) {
            $(status).removeClass('private');
            $(status).addClass('public');
            $(this).html('公開中');
        }
    });
});
