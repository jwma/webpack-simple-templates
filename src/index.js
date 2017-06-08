function getDemoList() {
    var demos = [
        { name: '澳门日报 - 今日新闻列表', url: 'macau-daily.html' },
    ]

    var demoListHtml = ''

    for (var i = 0; i < demos.length; i++) {
        var demo = demos[i]
        demoListHtml += '<li><a target="_blank" href="' + demo.url + '">' + demo.name + '</a>'
    }

    var demoList = document.createElement('ul')
    demoList.innerHTML = demoListHtml

    return demoList
}

document.body.appendChild(getDemoList())