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

elem = document.querySelector('.gallery-cell');

var flkty = new Flickity( elem, {
  // options
  accessibility: true,
  autoPlay   : true,
  cellAlign  : 'center',
  contain    : true,
  draggable: true,
  freeScroll : true,
  freeScrollFriction: 0.03,
  imagesLoaded: true,
  initialIndex: 3,
  lazyLoad   : 2,
  pageDots   : true,
  percentPosition : true,
  prevNextButtons : false,
  resize: true,
  rightToLeft: false,
  setGallerySize : true,
  wrapAround : true
});

