
let a = document.getElementById ("aside_icon-1").onclick = function () {
  document.getElementById ("aside-sites").style.display = 'none';
  document.getElementById ("aside_icon-1").style.display = "none";
  document.getElementById ('click-img-1').style.display = 'none';
  document.getElementById ("aside_icon-2").style.display = "block";
  document.getElementById ('click-img-2').style.display = 'block';
  document.getElementById ("aside").style.transition = "0.3s";
  document.getElementById ("aside-background").style.backgroundSize = "0";
  document.getElementById ("aside").style.width = "0";
}

let b = document.getElementById ("aside_icon-2").onclick = function () {
  document.getElementById ("aside_icon-2").style.display = "none";
  document.getElementById ('click-img-2').style.display = 'none';
  document.getElementById ("aside_icon-1").style.display = "block";
  document.getElementById ("aside-sites").style.display = 'block';
  document.getElementById ('click-img-1').style.display = 'block';
  document.getElementById ("aside-background").style.backgroundSize = "100%";
  document.getElementById ("aside").style.transition = "0.3s";
  document.getElementById ("aside").style.width = "15%";
 }


// 75rem




/* var c = window.matchMedia("(max-width: 75rem)");
if(matchMedia){
  var screen = window.matchMedia("(max-width: 75rem)");
  screen.addListener(changes);
  changes (screen);
}

function changes(screen) {
  if (screen.matches) {
      document.getElementById ("aside_icon-1").onclick = function () {
      document.getElementById ("aside-sites").style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "none";
      document.getElementById ('click-img-1').style.display = 'none';
      document.getElementById ("aside_icon-2").style.display = "block";
      document.getElementById ('click-img-2').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "0";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "0";
      console.log("=<75rem");
    }    
  }
  else {
      document.getElementById ("aside_icon-1").onclick = function () {
      document.getElementById ("aside-sites").style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "none";
      document.getElementById ('click-img-1').style.display = 'none';
      document.getElementById ("aside_icon-2").style.display = "block";
      document.getElementById ('click-img-2').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "100%";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "168px";
      console.log("=>75rem");
}
}
}

function changes(screen) {
  if (screen.matches) {
        document.getElementById ("aside_icon-2").onclick = function () {
        document.getElementById ("aside_icon-2").style.display = "none";
        document.getElementById ('click-img-2').style.display = 'none';
        document.getElementById ("aside_icon-1").style.display = "block";
        document.getElementById ("aside-sites").style.display = 'block';
        document.getElementById ('click-img-1').style.display = 'block';
        document.getElementById ("aside-background").style.transition = "0.3s";
        document.getElementById ("aside-background").style.backgroundSize = "100%";
        document.getElementById ("aside").style.transition = "0.3s";
        document.getElementById ("aside").style.width = "168px";
        console.log("=<75rem");
};
  }

  else {
    document.getElementById ("aside_icon-2").onclick = function () {
      document.getElementById ("aside_icon-2").style.display = "none";
      document.getElementById ('click-img-2').style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "block";
      document.getElementById ("aside-sites").style.display = 'block';
      document.getElementById ('click-img-1').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "100%";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "168px";
      console.log("=>75rem");
    }
  }
}





// 48rem


var c = window.matchMedia("(max-width: 48rem)");
if(matchMedia){
  var screen = window.matchMedia("(max-width: 48rem)");
  screen.addListener(changes);
  changes (screen);
}


function changes(screen) {
  if (screen.matches) {
      document.getElementById ("aside_icon-1").onclick = function () {
      document.getElementById ("aside-sites").style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "none";
      document.getElementById ('click-img-1').style.display = 'none';
      document.getElementById ("aside_icon-2").style.display = "block";
      document.getElementById ('click-img-2').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "0";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "0";
      console.log("=<48rem");
    }    
  }
  else {
    document.getElementById ("aside_icon-1").onclick = function () {
      document.getElementById ("aside-sites").style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "none";
      document.getElementById ('click-img-1').style.display = 'none';
      document.getElementById ("aside_icon-2").style.display = "block";
      document.getElementById ('click-img-2').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "100%";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "123px";
      console.log("=>48rem");
}
}
}

function changes(screen) {
  if (screen.matches) {
        document.getElementById ("aside_icon-2").onclick = function () {
        document.getElementById ("aside_icon-2").style.display = "none";
        document.getElementById ('click-img-2').style.display = 'none';
        document.getElementById ("aside_icon-1").style.display = "block";
        document.getElementById ("aside-sites").style.display = 'block';
        document.getElementById ('click-img-1').style.display = 'block';
        document.getElementById ("aside-background").style.transition = "0.3s";
        document.getElementById ("aside-background").style.backgroundSize = "100%";
        document.getElementById ("aside").style.transition = "0.3s";
        document.getElementById ("aside").style.width = "123px";
        console.log("=<48rem");
};
  }

  else {
    document.getElementById ("aside_icon-2").onclick = function () {
      document.getElementById ("aside_icon-2").style.display = "none";
      document.getElementById ('click-img-2').style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "block";
      document.getElementById ("aside-sites").style.display = 'block';
      document.getElementById ('click-img-1').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "100%";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "123px";
      console.log("=>48rem");
   }
  }
} */


// 39rem


/* var c = window.matchMedia("(max-width: 39rem)");
if(matchMedia){
  var screen = window.matchMedia("(max-width: 39rem)");
  screen.addListener(changes);
  changes (screen);



function changes(screen) {
  if (screen.matches) {
      document.getElementById ("aside_icon-1").onclick = function () {
      document.getElementById ("aside-sites").style.display = 'none';
      document.getElementById ("aside-sites").style.transition = "0.3s";
      document.getElementById ("aside_icon-1").style.display = "none";
      document.getElementById ('click-img-1').style.display = 'none';
      document.getElementById ("aside_icon-2").style.display = "block";
      document.getElementById ('click-img-2').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "0";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "0";
      console.log("=<39rem");
    }    
  }
  else {
    document.getElementById ("aside_icon-1").onclick = function () {
      document.getElementById ("aside-sites").style.display = 'none';
      document.getElementById ("aside-sites").style.transition = "0.3s";
      document.getElementById ("aside_icon-1").style.display = "none";
      document.getElementById ('click-img-1').style.display = 'none';
      document.getElementById ("aside_icon-2").style.display = "block";
      document.getElementById ('click-img-2').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "100%";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "123px";
      console.log("=>39rem");

}
}
}

function changes(screen) {
  if (screen.matches) {
        document.getElementById ("aside_icon-2").onclick = function () {
        document.getElementById ("aside_icon-2").style.display = "none";
        document.getElementById ('click-img-2').style.display = 'none';
        document.getElementById ("aside_icon-1").style.display = "block";
        document.getElementById ("aside-sites").style.display = 'block';
        document.getElementById ("aside-sites").style.transition = "0.3s";
        document.getElementById ('click-img-1').style.display = 'block';
        document.getElementById ("aside-background").style.transition = "0.3s";
        document.getElementById ("aside-background").style.backgroundSize = "100%";
        document.getElementById ("aside").style.transition = "0.3s";
        document.getElementById ("aside").style.width = "123px";
        console.log("=<39rem");
        
};
  }

  else {
    document.getElementById ("aside_icon-2").onclick = function () {
      document.getElementById ("aside_icon-2").style.display = "none";
      document.getElementById ('click-img-2').style.display = 'none';
      document.getElementById ("aside_icon-1").style.display = "block";
      document.getElementById ("aside-sites").style.display = 'block';
      document.getElementById ("aside-sites").style.transition = "0.3s";
      document.getElementById ('click-img-1').style.display = 'block';
      document.getElementById ("aside-background").style.transition = "0.3s";
      document.getElementById ("aside-background").style.backgroundSize = "100%";
      document.getElementById ("aside").style.transition = "0.3s";
      document.getElementById ("aside").style.width = "123px";
      console.log("=>39rem");

     }
   }
  }
} */








