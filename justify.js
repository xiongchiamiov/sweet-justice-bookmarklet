javascript:(
function() {
_jquery_script=document.createElement('SCRIPT');
_jquery_script.type='text/javascript';
_jquery_script.src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(_jquery_script);
_justify_script=document.createElement('SCRIPT');
_justify_script.type='text/javascript';
_justify_script.src='http://gist.github.com/raw/384848/faf92ca7c4885045983c8e7f4e69460da0468ceb/sweet-justice.js';
document.getElementsByTagName('head')[0].appendChild(_justify_script);
_launcher_script=document.createElement('SCRIPT');
_launcher_script.type='text/javascript';
_launcher_script.innerHTML='sweet_justice_jq();';
document.getElementsByTagName('head')[0].appendChild(_launcher_script);
}
)();
