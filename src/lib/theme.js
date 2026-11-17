export const THEME_STORAGE_KEY = 'faemkung-theme';

// Tiny render-blocking inline script:
// 1) add .js to <html> (enables reveal animations)
// 2) saved theme, otherwise system preference
// 3) follow system changes while the user has no explicit choice
export const themeInitScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var k='${THEME_STORAGE_KEY}';var m=window.matchMedia('(prefers-color-scheme: dark)');var a=function(t){d.setAttribute('data-theme',t);d.style.colorScheme=t;};var s=localStorage.getItem(k);a(s==='light'||s==='dark'?s:(m.matches?'dark':'light'));var h=function(e){var c=null;try{c=localStorage.getItem(k);}catch(_){}if(c!=='light'&&c!=='dark'){a(e.matches?'dark':'light');}};if(m.addEventListener){m.addEventListener('change',h);}else if(m.addListener){m.addListener(h);}}catch(e){d.setAttribute('data-theme','light');}})();`;