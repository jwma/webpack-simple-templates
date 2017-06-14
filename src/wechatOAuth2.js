import $ from 'jquery'

$(function () {
    $('#checkAuthBtn').on('click', function () {
        console.log('in')
        var fromUrl = window.location.href
        $.ajax({
            url: '/wechat-oa2/activity/app.php/api/check',
            type: 'POST',
            dataType: 'json',
            data: {
                forward: 'AppBundle:Demo:savePlayer',
                fromUrl: fromUrl,
                eventKey: 'demo',
                eventId: 1,
                dev: 1
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