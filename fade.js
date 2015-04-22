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


function showImage(){
  document.getElementById('quat').style.visibility = 'hidden';
  if(count!=2){

    document.getElementById('uno').style.visibility = 'visible';

    var Timer = setInterval("um()",1000);
    count++;
  }
  else{
    return;
  }
}
function um(){
  document.getElementById('uno').style.visibility = 'hidden';
      document.getElementById('dos').style.visibility = 'visible';

      var Timer = setInterval("dois()",1000);
    

    

}

function dois(){
  document.getElementById('dos').style.visibility = 'hidden'
      document.getElementById('tres').style.visibility = 'visible';

      var Timer = setInterval("tres()",1000);
}

function tres(){
  document.getElementById('tres').style.visibility = 'hidden';
  document.getElementById('quat').style.visibility = 'visible';

  var Timer = setInterval("showImage()",1000);
}