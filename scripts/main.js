// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000,
  //disable: 'mobile'
});

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  horizontalOrder: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  


// Add your javascript here
