import $ from 'jquery'

$(function () {
    $('#checkAuthBtn').on('click', function () {
        var fromUrl = window.location.href
        $.ajax({
            url: '/wechat-oa2/activity/app.php/oauth2/check',
            type: 'POST',
            dataType: 'json',
            data: {
                forward: 'AppBundle:Demo:savePlayer',
                fromUrl: fromUrl,
                eventKey: 'demo',
                eventId: 1,
                dev: 1 //  开发时加入dev，接口会使用默认的测试账户，并当作已授权
            },
            success: function (response) {
                console.log(response)
                if (response.code == 200) {
                    alert('已授权')
                }
                if (response.code == 401) {
                    console.log(response)
                }
            }
        })
    })
})