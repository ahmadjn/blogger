var msRelatedPosts,msRandomIndex;!function(){"use strict";var v={postUrl:"https://linkmagz.sugeng.id",homePageUrl:"https://linkmagz.sugeng.id",relatedTitleOuterOpen:'<div class="related-title"><p class="ms-title ">',relatedTitleOuterClose:"</p></div>",relatedTitleText:"Artikel Terkait",thumbWidth:192,thumbHeight:108,imgBlank:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAYSURBVCiRY0xISOBgoAAwUaJ51IBhYwAAuQABOsYCprwAAAAASUVORK5CYII=",relatedOuter:"ms-related-post"};for(var e in relatedConfig)"undefined"!=relatedConfig[e]&&(v[e]=relatedConfig[e]);var B={relatedPosts:!0,jumlahRelatedPosts:4,relatedPostsThumb:!0,judulRelatedPosts:v.relatedTitleText,relatedPostsNoThumbImg:"https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w192-h108-n-k-no-nu/nomage%2B%25281%2529.png"};if("undefined"!=typeof linkMagzSetting)for(var t in linkMagzSetting)"undefined"!=linkMagzSetting[t]&&(B[t]=linkMagzSetting[t]);function r(e){var t=document.createElement("script");t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}function P(e){var t,l,a=e.length;if(0===a)return!1;for(;--a;)t=Math.floor(Math.random()*(a+1)),l=e[a],e[a]=e[t],e[t]=l;return e}if("object"==typeof postLabels&&0<postLabels.length)var n="/-/"+P(postLabels)[0];else n="";msRelatedPosts=function(e){var t,l,a,s,r,n,d,i,o,m=v.relatedTitleOuterOpen+B.judulRelatedPosts+v.relatedTitleOuterClose,u=document.getElementById(v.relatedOuter),A=P(e.feed.entry);1==B.relatedPostsThumb?m+='<ul class="ms-related-hasthumb">':m+='<ul class="ms-related-nothumb">';for(var h=0;h<A.length;h++)for(var g=0,c=A[h].link.length;g<c;g++)A[h].link[g].href==v.postUrl&&A.splice(h,1);if(0<A.length){for(var f=0;f<B.jumlahRelatedPosts&&f<A.length;f++){l=A[f].title.$t,void 0!==A[f].content&&(r=(s=A[f].content.$t).indexOf("<img",0));var p=function(e){a=e.replace(/.*?:\/\//g,"//").replace(/(\/s[0-9]+(\-c)?|\/w[0-9]+(\-h)[0-9]+()?|\/d)+(\/)/,"/w"+v.thumbWidth+"-h"+v.thumbHeight+"-c/")};"media$thumbnail"in A[f]?p(A[f].media$thumbnail.url):void 0!==r&&-1!==r?(n=s.indexOf("/>",r),i=(d=s.slice(r,n)).indexOf("src=",0)+5,o=d.indexOf('"',i),p(d.slice(i,o))):a=B.relatedPostsNoThumbImg;var b=0;for(c=A[f].link.length;b<c;b++)t="alternate"==A[f].link[b].rel?A[f].link[b].href:"#";m+='<li><a title="'+l+'" href="'+t+'">'+(1==B.relatedPostsThumb?'<div class="related-thumb-outer"><img alt="'+l+'" class="lazyload related-thumb" src="'+v.imgBlank+'" data-src="'+a+'" width="'+v.thumbWidth+'" height="'+v.thumbHeight+'"></div>':"")+('<div class="related-title-outer">'+l+"</div>")+"</a></li>"}1==B.relatedPosts&&(u.innerHTML=m+="</ul>")}},msRandomIndex=function(e){var t,l=B.jumlahRelatedPosts+1,a=e.feed.openSearch$totalResults.$t-l,s=(t=0<a?a:1,Math.floor(Math.random()*(t-1+1))+1);r(v.homePageUrl.replace(/\/$/,"")+"/feeds/posts/default"+n+"?alt=json-in-script&orderby=updated&start-index="+s+"&max-results="+l+"&callback=msRelatedPosts")},r(v.homePageUrl.replace(/\/$/,"")+"/feeds/posts/summary"+n+"?alt=json-in-script&orderby=updated&max-results=0&callback=msRandomIndex")}();
"use strict";function fullwidthImg(){var t=document.querySelector(".post-body"),i=t.querySelector("img"),e=t.querySelector(".tr-caption-container");i&&i.classList.add("fullwidth"),e&&e.classList.add("fullwidth")}!function(){var t={fullwidthImage:!0};if("undefined"!=typeof linkMagzSetting)for(var i in linkMagzSetting)"undefined"!=linkMagzSetting[i]&&(t[i]=linkMagzSetting[i]);1==t.fullwidthImage&&fullwidthImg()}();
