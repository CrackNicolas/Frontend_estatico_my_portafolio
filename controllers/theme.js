let style = document.documentElement.style;

const change_theme_claro_login = () => {
    if(style.getPropertyValue("--color-fondo-login") !== "#00ffff"){
        style.setProperty("--color-fondo-login","#00ffff");
        style.setProperty("--color-text-login","#000000");   
        style.setProperty("--color-theme-claro-active",'#000000');
        style.setProperty("--color-theme-intermedio-active",'#00ffff');
        style.setProperty("--color-theme-oscuro-active",'#00ffff');
        style.setProperty("--color-theme-claro-hover-active",'#000000');
        style.setProperty("--color-theme-intermedio-hover-active",'#000000');
        style.setProperty("--color-theme-oscuro-hover-active",'#000000');
    }
}
const change_theme_intermedio_login = () => {
    if(style.getPropertyValue("--color-text-login") !== "#00ffff" || style.getPropertyValue("--color-text-login") !== "#000000"){
        style.setProperty("--color-fondo-login","#000000");
        style.setProperty("--color-text-login","#2df9bf");   
        style.setProperty("--color-theme-claro-active",'#000000');
        style.setProperty("--color-theme-intermedio-active",'#2df9bf');
        style.setProperty("--color-theme-oscuro-active",'#000000');
        style.setProperty("--color-theme-claro-hover-active",'#2df9bf');
        style.setProperty("--color-theme-intermedio-hover-active",'#2df9bf');
        style.setProperty("--color-theme-oscuro-hover-active",'#2df9bf');
    }
}
const change_theme_oscuro_login = () => {
    if(style.getPropertyValue("--color-text-login") !== "#00ffff"){
        style.setProperty("--color-fondo-login","#000000");
        style.setProperty("--color-text-login","#00ffff");   
        style.setProperty("--color-theme-claro-active",'#000000');
        style.setProperty("--color-theme-intermedio-active",'#000000');
        style.setProperty("--color-theme-oscuro-active",'#00ffff');
        style.setProperty("--color-theme-claro-hover-active",'#00ffff');
        style.setProperty("--color-theme-intermedio-hover-active",'#00ffff');
        style.setProperty("--color-theme-oscuro-hover-active",'#00ffff');
    }
}
const change_theme_claro = () => {
    if(style.getPropertyValue("--color-font-primary") !== "#ffffffb1"){
        style.setProperty("--color-font-primary","#ffffffb1");
        style.setProperty("--color-text-primary","#00b900");
        style.setProperty("--color-text-secondary",'#000000');
        style.setProperty("--color-text-tertiary",'#000000');
        style.setProperty("--color-text-quaternary",'#000000');
        style.setProperty("--color-text-quintenary",'#000000');
        style.setProperty("--color-theme-claro-active",'#00b900');
        style.setProperty("--color-theme-intermedio-active",'white');
        style.setProperty("--color-theme-oscuro-active",'white');

        Version_logos_habilidad("1");
    }
}
const change_theme_intermedio = () => {
    if(style.getPropertyValue("--color-font-primary") !== "#000000"){
        style.setProperty("--color-font-primary","#000000");
        style.setProperty("--color-text-primary","#00ffff");
        style.setProperty("--color-text-secondary",'#ffffffde');
        style.setProperty("--color-text-tertiary",'#ffffffb1');
        style.setProperty("--color-text-quaternary",'#ffffff80');
        style.setProperty("--color-text-quintenary",'#ffffff4d');
        style.setProperty("--color-theme-claro-active",'#000000');
        style.setProperty("--color-theme-intermedio-active",'#00ffff');
        style.setProperty("--color-theme-oscuro-active",'#000000');

        Version_logos_habilidad("2");
    }
}
const change_theme_oscuro = () => {
    if(style.getPropertyValue("--color-font-primary") !== "#02172d"){
        style.setProperty("--color-font-primary","#02172d");
        style.setProperty("--color-text-primary","#2df9bf");
        style.setProperty("--color-text-secondary",'#ffffffde');
        style.setProperty("--color-text-tertiary",'#ffffffb1');
        style.setProperty("--color-text-quaternary",'#ffffff80');
        style.setProperty("--color-text-quintenary",'#ffffff4d');

        style.setProperty("--color-theme-claro-active",'#000000');
        style.setProperty("--color-theme-intermedio-active",'#000000');
        style.setProperty("--color-theme-oscuro-active",'#2df9bf');

        Version_logos_habilidad("3");
    }
}
function Version_logos_habilidad(number_version){
    let raiz = Obtener_raiz();    

    (document.getElementById("mysql"))? document.getElementById("mysql").src = Get_src(raiz,"mysql",number_version) : undefined;
    (document.getElementById("next"))? document.getElementById("next").src = Get_src(raiz,"next",number_version) : undefined;
}
function Obtener_raiz(){
    let pagina_peticion = Get_length_url()[Get_length_url().length-1];
    return Get_direccion(pagina_peticion)+"/public/icons/";
}
function Get_length_url(){
    return (document.getElementById("logo-header"))? document.getElementById("logo-header").href.split("/") : [];
}
function Get_direccion(page){
    return (page == "index.html")? ".." : (page == "login.html")? "." : "";
}
function Get_src(url,name_icon,number_version){
    return url + name_icon +"_"+ number_version +".png";
}