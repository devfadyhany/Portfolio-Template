// // for (var i = 1; i <= 9; i++){
// //     if(i == 3){
// //         console.log("fady");
// //         document.writeln("fady");    
// //     }else {
// //     console.log(i);
// //     document.writeln(i);
// //     }
// // }

// var y = 2;

// for (var i = 1; i <= 12; i++){
//     console.log(i + ' * ' + y + ' = ' + i * y);
// }

window.onscroll = function(){
    if(window.scrollY > 5){
        document.getElementById('nav').classList.add('navbaron');
        document.getElementById('nav').classList.remove('navbar');
    }else {
        document.getElementById('nav').classList.add('navbar');
        document.getElementById('nav').classList.remove('navbaron');
    }
}