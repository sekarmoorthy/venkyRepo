var a1 = document.getElementById('a');
var s1 = document.getElementById('s');
var d1 = document.getElementById('d');
var f1 = document.getElementById('f');
var g1 = document.getElementById('g');
var h1 = document.getElementById('h');
var j1 = document.getElementById('j');
var k1 = document.getElementById('k');
var l1 = document.getElementById('l');
var press = document.getElementById('display');

document.body.addEventListener('keydown',function(e){
    var x = e.keyCode;
    if(x === 65){
        document.getElementById('a_audio').play();
        a1.style.border = "3px solid gold";
        a1.style.boxShadow = "0 0 10px gold";
        a1.style.fontSize = 5 + "vh";
        press.innerHTML = 'clap';
    }else if(x === 83){
        console.log('s is pressed');
        document.getElementById('s_audio').play();
        s1.style.border = "3px solid gold";
        s1.style.boxShadow = "0 0 10px gold";
        s1.style.fontSize = 5 + "vh";
        press.innerHTML = 'hihat';
    }
    else if(x === 68){
        console.log('d is pressed');
        document.getElementById('d_audio').play();
        d1.style.border = "3px solid gold";
        d1.style.boxShadow = "0 0 10px gold";
        d1.style.fontSize = 5 + "vh";
        press.innerHTML = 'kick'
    }
    else if(x === 70){
        console.log('f is pressed');
        document.getElementById('f_audio').play();
        f1.style.border = "3px solid gold";
        f1.style.boxShadow = "0 0 10px gold";
        f1.style.fontSize = 5 + "vh";
        press.innerHTML = 'openhat';
    }
    else if(x === 71){
        console.log('g is pressed');
        document.getElementById('g_audio').play();
        g1.style.border = "3px solid gold";
        g1.style.boxShadow = "0 0 10px gold";
        g1.style.fontSize = 5 + "vh";
        press.innerHTML = 'boom';
    }
    else if(x === 72){
        console.log('h is pressed');
        document.getElementById('h_audio').play();
        h1.style.border = "3px solid gold";
        h1.style.boxShadow = "0 0 10px gold";
        h1.style.fontSize = 5 + "vh";
        press.innerHTML = 'ride';
    }
    else if(x === 74){
        console.log('j is pressed');
        document.getElementById('j_audio').play();
        j1.style.border = "3px solid gold";
        j1.style.boxShadow = "0 0 10px gold";
        j1.style.fontSize = 5 + "vh";
        press.innerHTML = 'snare';
    }
    else if(x === 75){
        console.log('k is pressed');
        document.getElementById('k_audio').play();
        k1.style.border = "3px solid gold";
        k1.style.boxShadow = "0 0 10px gold";
        k1.style.fontSize = 5 + "vh";
        press.innerHTML = 'tom';
    }
    else if(x === 76){
        console.log('l is pressed');
        document.getElementById('l_audio').play();
        l1.style.border = "3px solid gold";
        l1.style.boxShadow = "0 0 10px gold";
        l1.style.fontSize = 5 + "vh";
        press.innerHTML = 'tink';
    }
    else{
        press.style.fontSize = '40px';
        press.innerHTML = 'Press Proper Key'
    }
});

document.body.addEventListener('keyup', function(e){
    var keycode = e.keyCode;
    if(keycode === 65){
        console.log('a is released');
        a1.style.border = "2px solid black";
        a1.style.boxShadow = "0 0";
        a1.style.fontSize = 4 + "vh";
    }else if(keycode === 83){
        console.log('s is released');
        s1.style.border = "2px solid black";
        s1.style.boxShadow = "0 0";
        s1.style.fontSize = 4 + "vh";
    }else if(keycode === 68){
        console.log('d is released');
        d1.style.border = "2px solid black";
        d1.style.boxShadow = "0 0";
        d1.style.fontSize = 4 + "vh";
    }
    else if(keycode === 70){
        console.log('f is released');
        f1.style.border = "2px solid black";
        f1.style.boxShadow = "0 0";
        f1.style.fontSize = 4 + "vh";
    }
    else if(keycode === 71){
        console.log('g is released');
        g1.style.border = "2px solid black";
        g1.style.boxShadow = "0 0";
        g1.style.fontSize = 4 + "vh";
    }
    else if(keycode === 72){
        console.log('h is released');
        h1.style.border = "2px solid black";
        h1.style.boxShadow = "0 0";
        h1.style.fontSize = 4 + "vh";
    }
    else if(keycode === 74){
        console.log('j is released');
        j1.style.border = "2px solid black";
        j1.style.boxShadow = "0 0";
        j1.style.fontSize = 4 + "vh";
    }
    else if(keycode === 75){
        console.log('k is released');
        k1.style.border = "2px solid black";
        k1.style.boxShadow = "0 0";
        k1.style.fontSize = 4 + "vh";
    }
    else if(keycode === 76){
        console.log('l is released');
        l1.style.border = "2px solid black";
        l1.style.boxShadow = "0 0";
        l1.style.fontSize = 4 + "vh";
    }
});