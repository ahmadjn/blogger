var myArray = ['https://suratku.net/', 'https://how-to.buzz', 'https://dlfreeimage.co/'];
var rand = Math.floor(Math.random() * myArray.length);

function showquote(){
    document.getElementById('link').innerHTML="
    <a href='"+myArray[rand]+"' target='_blank' title='Download Gratis MP3'>
    <img src='https://1.bp.blogspot.com/-aliILkEQaj0/X7AOhfI0o5I/AAAAAAAACOg/MoKhZUyejFg-GH2k19dYxgJ51MnukSZIQCLcBGAsYHQ/s336-rw/download-mp3-gratis.jpg' style='width:100%;' alt='MP3 Gratis' title='Download MP3 Gratis'>
    <h3 style='margin:0px; text-align: center;'>Download MP3 Gratis</h3>
    </a>
    ";}
showquote();
