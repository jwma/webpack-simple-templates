import $ from 'jquery'

function wrapRequest(options) {
    if (ENV === 'dev') {
        var requestData = options.data || {}
        requestData.dev = 1 // 开发时加入dev，接口会使用默认的测试账户，并当作已授权
        options.data = requestData
    }

    $.ajax(options)
}

$(function () {
    $('#checkAuthBtn').on('click', function () {
        var fromUrl = window.location.href

        wrapRequest({
            url: '/wechat-oa2/activity/oauth2/check',
            type: 'POST',
            dataType: 'json',
            data: {
                forward: 'AppBundle:Demo:savePlayer',
                fromUrl: fromUrl,
                eventKey: 'demo',
                eventId: 1
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

    $('#getUserInfoBtn').on('click', function () {
        wrapRequest({
            url: '/wechat-oa2/activity/demo/get-user-info',
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.code == 200) {
                    alert(response.userInfo.nickname)
                }
            }
        })
    })
})