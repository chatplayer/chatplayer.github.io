$("#share").jsSocials({
    showLabel: false,
    showCount: false,
    shareIn: "popup",
    shares: ["facebook", "googleplus", "twitter", "linkedin", "pinterest", "stumbleupon", "whatsapp", "email"]
});

var options = [
  // {selector: '#staggered-test', offset: 50, callback: function(el) {
  //   Materialize.toast("This is our ScrollFire Demo!", 1500 );
  // } },
  // {selector: '#staggered-test', offset: 205, callback: function(el) {
  //   Materialize.toast("Please continue scrolling!", 1500 );
  // } },
  {selector: '#feature-1', offset: 200, callback: function(el) {
    $(el).addClass('animated bounce')
  } },
  {selector: '#feature-2', offset: 380, callback: function(el) {
    $(el).addClass('animated bounce')
  } },
  {selector: '#feature-3', offset: 500, callback: function(el) {
    $(el).addClass('animated bounce')
  } },
  {selector: '#feature-4', offset: 600, callback: function(el) {
    $(el).addClass('animated bounce')
  } }
  // {selector: '#image-test', offset: 500, callback: function(el) {
  //   Materialize.fadeInImage($(el));
  // } }
  ];
Materialize.scrollFire(options);
