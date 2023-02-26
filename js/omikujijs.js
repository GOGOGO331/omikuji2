window.onload=function()
{
    document.getElementById("omikuji-btn").onclick=function()
    {
        console.log("ボタンを押した");
        document.getElementById("omikuji-img").setAttribute("src","images/jyoban.jpeg");
        var random=Math.random()*6
        console.log(random);
        if(random<1)
        {
            document.getElementById("omikuji-img").setAttribute("src","images/E001TRAIN SUITEsikisima.jpeg");
        }
        else if(random<2)
        {
            document.getElementById("omikuji-img").setAttribute("src","images/safi-ruodorikojpeg");
        }
        else if(random<3)
        {
            document.getElementById("omikuji-img").setAttribute("src","images/azisa.jpeg");
        }
        else if(random<4)
        {
            document.getElementById("omikuji-img").setAttribute("src","images/hatati&tokiwaribaibaru.jpeg");
        }
        else if(random<5)
        {
            document.getElementById("omikuji-img").setAttribute("src","images/yamanote.jpeg");
        }
        else if(random<6)
        {
            document.getElementById("omikuji-img").setAttribute("src","images/ymanote205.jpeg");
        }
    };
};

// window.onload = function(){
//     document.getElementById("omikuji-btn").onclick = function(){
//         console.log("ボタンが押された");
//     };
// };