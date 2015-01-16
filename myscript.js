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

  $('.rate .score').each(function(index, element) {
    var score = parseFloat($(element).text());
    if (isNaN(score)) return;

    var honest = honestify(score);
    $(element).html(honest.toFixed(1) + ' <span class="tabelog-score">(' + score.toFixed(2) + ")</span>");
    $(element).parent().find("img")
     .attr("src", "http://image1-3.tabelog.k-img.com/images/restaurant/star/star_ll" + (honest * 10) + ".gif");
  });

  $(".info .score-overall").each(function(index, element) {
    var score = parseFloat($(element).find(".score").text());
    if (isNaN(score)) return;

    var honest = honestify(score);
    $(element).find(".score").html(honest.toFixed(1) + ' <span class="tabelog-score">(' + score.toFixed(2) + ")</span>");
    $(element).find(".star").removeClass().addClass("star star" + honest * 10);
  });
}

var style = document.createElement('style');
style.appendChild(document.createTextNode('.tabelog-score { font-weight: normal; font-size: 60%; color: #bbb }'));
document.body.appendChild(style);

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
