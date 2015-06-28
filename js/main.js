//$('.gallery-cell').flickity({
//  autoPlay   : 3000,
//  cellAlign  : 'left',
//  contain    : true,
//  freeScroll : true,
//  lazyLoad   : true,
//  pageDots   : true,
//  percentPosition : false,
//  prevNextButtons : false,
//  wrapAround : true
//});

var elem;

elem = document.querySelector('.gallery');

var flkty = new Flickity( elem, {

  /* Setup option */
  accessibility  : true,
  initialIndex   : 0,
  resize         : true,
  setGallerySize : false,

  /* Cell position options */
  cellAlign      : 'center',
  //contain         : true,
    // contain and wrapAround cancel themselves out.
  imagesLoaded    : true,
  percentPosition : true,
  //rightToLeft     : false,

  /* Behavior options */
  //asNavFor
  autoPlay           : 1000,
  draggable          : true,
  freeScroll         : true,
  freeScrollFriction : 0.03,
  //lazyLoad           : 2,
  //selectedAttraction
  //watchCSS
  wrapAround : true,

  /* UI options */
  //arrowShape
  pageDots        : true,
  prevNextButtons : false
});