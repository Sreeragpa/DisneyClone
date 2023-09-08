var icon = document.getElementById('icon');
var disneyicon = document.getElementById('disneyicon');
var disney_logo_footer_1 = document.getElementById('disney_logo_footer_1');
var disney_logo_footer_2 = document.getElementById('disney_logo_footer_2');
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/dark theme icon/sun.png";
        disneyicon.src = "assets/disney_icon_white.png";
        disney_logo_footer_1.src = "assets/disney_icon_white.png"
        disney_logo_footer_2.src = "assets/disney_icon_white.png"
    }
    else{
        icon.src = "assets/dark theme icon/moon.png";
        disneyicon.src = "assets/disney_icon_black.png";
        disney_logo_footer_1.src = "assets/disney_icon_black.png";
        disney_logo_footer_2.src = "assets/disney_icon_black.png";
    }
}
