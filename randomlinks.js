var myArray = ['https://resep-bali.firebaseapp.com/', 'https://resep-banjar.web.app/', 'https://resep-banjar.firebaseapp.com/', 'https://resepmasakanjawa.web.app/', 'https://resepmasakanjawa.firebaseapp.com/', 'https://resepberkuah.web.app/', 'https://resepberkuah.firebaseapp.com/', 'https://resepmakassar.web.app/', 'https://resepmakassar.firebaseapp.com/', 'https://resep-manado.web.app/', 'https://resep-manado.firebaseapp.com/', 'https://resepmedan.web.app/', 'https://resepmedan.firebaseapp.com/', 'https://reseppadang.web.app/', 'https://reseppadang.firebaseapp.com/', 'https://reseppalembang.web.app/', 'https://reseppalembang.firebaseapp.com/', 'https://resep-sunda.web.app/', 'https://resep-sunda.firebaseapp.com/', 'https://resepminuman.web.app/', 'https://resepminuman.firebaseapp.com/', 'https://resep-es.web.app/', 'https://resep-es.firebaseapp.com/', 'https://anekaresepnasi.web.app/', 'https://anekaresepnasi.firebaseapp.com/', 'https://bikinroti.web.app/', 'https://bikinroti.firebaseapp.com/', 'https://resepsayur.web.app/', 'https://resepsayur.firebaseapp.com/', 'https://reseptahu.web.app/', 'https://reseptahu.firebaseapp.com/', 'https://reseptempe.web.app/', 'https://reseptempe.firebaseapp.com/', 'https://anekaresep-udang.web.app/', 'https://anekaresep-udang.firebaseapp.com/', 'https://resepdagingayam.netlify.app/', 'https://resepcemilan.netlify.app/', 'https://resepcumi.netlify.app/', 'https://resep-dagingsapi.netlify.app/', 'https://anekaresepikan.netlify.app/', 'https://resepjus.netlify.app/', 'https://resep-dagingkambing.netlify.app/'];
var rand = Math.floor(Math.random() * myArray.length);

function showquote(){
    document.getElementById('quote').innerHTML = myArray[rand];
}
showquote();
