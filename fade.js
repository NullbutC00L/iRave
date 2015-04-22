count=0;

function initImage() {
  imageId = 'thephoto';
  image = document.getElementById(imageId);
  setOpacity(image, 0);
  image.style.visibility = 'visible';
  fadeIn(imageId,0);
}

function setOpacity(obj, opacity) {
  opacity = (opacity == 100)?99.999:opacity;
  
  // IE/Win
  obj.style.filter = "alpha(opacity:"+opacity+")";
  
  // Safari<1.2, Konqueror
  obj.style.KHTMLOpacity = opacity/100;
  
  // Older Mozilla and Firefox
  obj.style.MozOpacity = opacity/100;
  
  // Safari 1.2, newer Firefox and Mozilla, CSS3
  obj.style.opacity = opacity/100;
}

function fadeIn(objId,opacity) {
  if (document.getElementById) {
    obj = document.getElementById(objId);
    if (opacity <= 100) {
      setOpacity(obj, opacity);
      opacity += 10;
      window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 100);
    }
  }
}

