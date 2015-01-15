function patch(){
  $('[rel="v:rating"]').each(function(index, element) {
    var el = $(element);
    var score = parseFloat(el.text());
    if (isNaN(score)) return;

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

    console.log("Original score: " + score + ", Honest score: " + honest);

    var image = "http://image1-3.tabelog.k-img.com/images/restaurant/star/star_ll" + (honest * 10) + ".gif";
    el.text(honest.toFixed(1));
    el.parent().find("img").attr("src", image);
  });
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
