var myArray = ['https://gratismp3z.club/', 'https://hargahpku.com/', 'https://dlfreeimage.co/', 'https://how-to.buzz/', 'https://kajian.co/'];
var rand = Math.floor(Math.random() * myArray.length);

function showquote(){
    document.getElementById('link').innerHTML="
    <a href='"+myArray[rand]+"' target='_blank' title='Download Lagu Mp3 Terbaru'>
        <img src='https://1.bp.blogspot.com/-aliILkEQaj0/X7AOhfI0o5I/AAAAAAAACOg/MoKhZUyejFg-GH2k19dYxgJ51MnukSZIQCLcBGAsYHQ/s336-rw/download-mp3-gratis.jpg' style='width:100%;' alt='Gudang Lagu Terbaik Gratis' title='Situs Download Lagu Gratis'>
    </a>
    <a href='"+myArray[rand]+"' target='_blank' title='Gudang Lagu Mp3 Indonesia'>
        <h3 style='margin:0px; padding: 10px; text-align: center; background-color:Tomato; color:White;'>Download MP3 Gratis</h3>
    </a>
    ";}
showquote();
