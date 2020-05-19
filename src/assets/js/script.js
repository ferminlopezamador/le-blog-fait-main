//toggle menu
$( ".toggle-burger" ).click(function() {
    $( "#nav-principale" ).toggleClass( 'hide' );
  });
$(".list-group-item").click(function() {
  $( "#nav-principale" ).toggleClass( 'hide' );
});
//"url"iser une phrase :)
function carSpec(a) {
    if(typeof a === 'string'){
      var str = a ;
      var tab_accent_brut = "ÀÁÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
      var tab_sansAccent_brut = "aaaaaaaaaaaaooooooooooooeeeeeeeecciiiiiiiiuuuuuuuuynn";
      var tab_accent = tab_accent_brut.split('');
      var tab_sansAccent = tab_sansAccent_brut.split('');
      tabCorrAcc = new Array();
      var i = -1;
      while (tab_accent[++i]) {
      tabCorrAcc[tab_accent[i]] = tab_sansAccent[i]
      }
      tabCorrAcc['Œ'] = 'OE';
      tabCorrAcc['œ'] = 'oe';
      str = str.replace(/./g, function($0) {
      return (tabCorrAcc[$0]) ? tabCorrAcc[$0] : $0
      })
      str = str.replace(/&amp;/g, '_');
      str = str.replace(/_amp;/g, '');
      str = str.replace(/&lt;/g, '_');
      str = str.replace(/_lt;/g, '_');
      str = str.replace(/&gt;/g, '_');
      str = str.replace(/_gt;/g, '_');
      str = str.replace(/(-| |#|"|@|:|\.|,|;|'|%|!|²|=|÷|\+|\?|\/|\[|\]|\{|\}|\*|\^|\$|\\|`|"|'|¨|€|£|¤|µ|§|~|ƒ|„|©|°)/g, '')
      return str;     
}}    

function makeUrl(elem){
  elem = carSpec(elem);
  elem = elem.toLowerCase();
  return elem;
}

// Element de limites de texte pour les résumés
let compteurText = document.querySelector('#compteur');
let resumeText = document.querySelector('#resume');
let compteurLimit = document.querySelector('#compteurLimit');
// function updateCompteur(){
// compteurText.innerText = resumeText.value.length.toString();
// if (resumeText.value.length > 175) {
//   compteurLimit.className = 'text-success';
//   };
// };
// setInterval(updateCompteur, 100);
let cardTitle = document.getElementsByClassName('card-title');
for (let i = 0; i < cardTitle.length ; i++) {
  cardTitle[i].innerText = cardTitle[i].innerText.substring(-100, 23);
  if (cardTitle[i].innerText.length > 22) {
    let commas = '...';
    cardTitle[i].innerText = cardTitle[i].innerText + commas;
  }
}
let cardText = document.getElementsByClassName('card-text');
for (let i = 0; i < cardText.length ; i++) {
  cardText[i].innerText = cardText[i].innerText.substring(-200, 147);
  if (cardText[i].innerText.length > 146) {
    let commas = '...';
    cardText[i].innerText = cardText[i].innerText + commas;
  }
}
let listgroup=document.getElementsByClassName('list-group-item');
for (let i = 0; i < cardText.length ; i++) {
  listgroup[i].innerText = listgroup[i].innerText.substring(-200, 20);
  if (listgroup[i].innerText.length > 19) {
    let commas = '...';
    listgroup[i].innerText = listgroup[i].innerText + commas;
  }
}

function makeTags(elem){
  elem = elem.toString();
  elem = elem.replace(/ /g, '","');
  return elem;
}

// créer une date
let today = () => {
  let now = Date;
  now = now().substring(-200, 15);
  return now;
}


// Editeur de texte
// var quill = new Quill('#editor', {
//   theme: 'snow'
// });




//Anciens scripts
// // Animer les barres de compétences
// $('.progress-bar').each(function() {
//     $(this).animate({
//         width: $( this ).attr( "aria-valuenow" ) + "%"
//     }, 3000);
// });

// // Animer l'apparition du bouton pour revenir en haut de page
// $( window ).scroll(function() {
//     $( "#totop" ).animate({
//         bottom:0
//     },500)
//   });

// // Animer l'opacité du header
// // $( window ).scroll(function() {
// //     $( "header" ).animate({
// //         opacity:0.8
// //     },500)
// // });

  // animer l'apparition des pastilles 'parcours professionnel' 
// $('p.lightgold').attr('style','opacity:0;').animate({
//     opacity:1
// },2000);

// $('img.bigger').click(function(){
//   $(this).toggleClass('col-md-6');
// });