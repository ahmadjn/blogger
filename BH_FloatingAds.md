## SIMPAN KODE BERIKUT DI BAGIAN HEAD (sebelum `</head>`)

```
<style id="css">
    #madContainer {
      transition: 0.3s ease-in-out;
      bottom: -500px;
      font-family: sans-serif;
      left: 0;
      margin-bottom: 2em;
      pointer-events: none;
      position: fixed;
      text-align: center;
      width: 100%;
      z-index: 99;
    }

    #madContainer.up {
      bottom: 0;
    }

    #madContainer::before {
      background: #474e68;
      color: #fff;
      content: "ADVERTISEMENT";
      font-size: 11px;
      letter-spacing: 4px;
      line-height: 24px;
      position: absolute;
      text-shadow: 0 0 5px #000;
      width: 728px;
      z-index: 999;
    }

    #madAds {
      background: #fff;
      box-shadow: 0 0 0 5px #fff, 0 0 0 7px #000;
      cursor: pointer;
      display: inline-block;
      min-width: 728px;
      padding-top: 25px;
      pointer-events: auto;
      position: relative;
      height: 116px;
    }

    #madAds::before {
      background: #474e6820;
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      min-height: 90px;
    }

    #madButton {
      background: linear-gradient(90deg, #461111 32%, #da0037 32%, #da0037 100%);
      border: 2px solid #f1efdc;
      font-size: 12px;
      left: 70%;
      outline: #474e68 solid 2px;
      padding: 2px 4px;
      pointer-events: none;
      position: absolute;
      top: -35%;
      z-index: 9;
      transition: 0.5s ease-in-out;
    }

    #madButton.down {
      top: 48%;
    }

    #madButton::before {
      background: #f1f6f9;
      color: #474e68;
      content: "X";
      font-weight: 700;
      padding: 0.25px 3px 0 2.5px;
    }

    #madButton::after {
      color: #f1efdc;
      content: "TUTUP IKLAN";
      margin-left: 9px;
    }

    @media (max-width: 500px) {
      #madContainer {
        margin-bottom: 5px;
      }

      #madContainer::before,
      #madAds {
        min-width: 100%;
        width: 100%;
      }

      #madButton {
        left: 70%;
      }

      .mobile-ads {
        display: block;
      }

      .desk-ads {
        display: none;
      }
    }

    #madBackground {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #000;
      opacity: 90%;
    }

    #madNote {
      width: 99%;
      text-align: center;
      padding: 2px;
      font-size: small;
      background: #e15c0c;
      color: #fff;
    }

  </style>
```

---

## SIMPAN KODE BERIKUT DI BAGIAN AKHIR BODY (sebelum `</body>`)

### Ganti `<!--KODE-IKLAN-RESPONSIVE-->` dengan script iklan responsive adsense

```
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
    integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <div id="madBackground" style="visibility: hidden;"></div>
  <div id="madContainer" style="display: block;">
    <div id="madAds">
      <div id="madButton"></div>
      <center>
      <!--KODE-IKLAN-RESPONSIVE-->
      </center>
      <div id="madNote">
        TUTUP IKLAN UNTUK LANJUT BACA
      </div>
    </div>
  </div>
  <script>
    var madcookies = localStorage.getItem('madjejak');
    if (!madcookies) {
      setTimeout(function () {
        !function (o) { var n = o("body").find("#madContainer"); n.bind("contextmenu", function (o) { return !1 }), o(document).mouseleave(function () { n.css("opacity", 0) }), o(document).mouseenter(function () { n.css("opacity", 1) }), o("html, body").css({ overflow: "hidden", height: "100%" }), setTimeout(function () { n.addClass("up") }, 1e3); var t = ""; n.hover(function () { t = o("#css").html().replace("padding:2px 4px;position:absolute;top:-26%;", "padding:2px 4px;position:absolute;top:-26%;pointer-events:none;"), o("#css").html(t) }, function () { t = o("#css").html().replace("padding:2px 4px;position:absolute;top:-26%;pointer-events:none;", "padding:2px 4px;position:absolute;top:-26%;"), o("#css").html(t) }), setTimeout(function () { o("html, body").css({ overflow: "auto", height: "auto" }) }, 2e3), setTimeout(function () { o("body").find("#madButton").addClass("down") }, 2e3) }(window.jQuery);
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
          };
        document.getElementById("madBackground").style.visibility = "visible";
        localStorage.setItem('madjejak', 'true');
      }, 3000);
    } else {
      document.getElementById("madContainer").style.display = "none";
    }
  </script>
```
