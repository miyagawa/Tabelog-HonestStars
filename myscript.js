function patch(){
  var honestify = function(score) {
    var honest;
    if (score >= 4.0) {
      honest = 5.0;
    } else if (score >= 3.5) {
      honest = 4.5;
    } else if (score >= 3.4) {
      honest = 4.0;
    } else if (score >= 3.3) {
      honest = 3.5;
    } else if (score >= 3.1) {
      honest = 3.0;
    } else if (score >= 3.0) {
      honest = 2.0;
    } else {
      honest = 1.0;
    }

    console.log("Original score: " + score.toFixed(2) + ", Honest score: " + honest);
    return honest;
  };

  $(".rdheader-data").each(function() {
    var parent = this;
    $('[rel="v:rating"] span', parent).each(function(index, element) {
      var score = parseFloat($(element).text());
      if (isNaN(score)) return;

      var honest = honestify(score);
      $(element).html(honest.toFixed(1) + ' <span class="tabelog-score">(' + score.toFixed(2) + ")</span>");
      var rate = $(".tb-rating", parent)[0];
      rate.className = rate.className.replace(/tb-rating--val\d\d/, "tb-rating--val" + honest * 10);
    });
  });

  $(".list-rst").each(function() {
    var parent = this;
    $(".tb-rating__val", parent).each(function(index, element) {
      var score = parseFloat($(element).text());
      if (isNaN(score)) return;

      var honest = honestify(score);
      $(element).html(honest.toFixed(1) + ' <span class="tabelog-score">(' + score.toFixed(2) + ")</span>");
      var rate = $(".tb-rating", parent)[0];
      rate.className = rate.className.replace(/tb-rating--val\d\d/, "tb-rating--val" + honest * 10);
    });
  });
}

var style = document.createElement('style');
style.appendChild(document.createTextNode('.tabelog-score { font-weight: normal; font-size: 60%; color: #bbb }'));
document.body.appendChild(style);

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
