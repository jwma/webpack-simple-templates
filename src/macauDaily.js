import $ from 'jquery'

$(function () {

  fetchNews(function (news) {
    var newsListEl = $('.news-list')
    newsListEl.append('<li><h1>澳门日报</h1></li>')

    setTimeout(function () {
      for (var i = 0; i < news.length; i++) {
        var one = news[i]
        newsListEl.append('<li>' + one.title + '<li>')
      }
      
      $('#loading').fadeOut(100, function () {
        newsListEl.fadeIn()
      })
    }, 500)
  })

  function fetchNews(successCallback) {
    $.ajax({
      url: '/macau-daily-api/api/getLayouts?sid=aomen&cid=10038',
      method: 'GET',
      dataType: 'json',
      success: function (response) {

        var layouts = response.layouts
        var news = []

        for (var i = 0; i < layouts.length; i++) {

          var layout = layouts[i]

          if (layout.list && layout.list.length > 0) {

            for (var j = 0; j < layout.list.length; j++) {
              news.push(layout.list[j])
            }

          }

        }

        typeof successCallback === 'function' && successCallback(news)
      }
    })
  }
})