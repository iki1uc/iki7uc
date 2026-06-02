/* ENGINE_CONNECT – verbindet HTML mit Engine, ohne HTML zu verändern */

(function(){

    // Warten bis HTML geladen ist
    document.addEventListener("DOMContentLoaded", () => {

        // 1) HTML-Elemente abgreifen
        const meta  = document.getElementById("meta");
        const box   = document.getElementById("storyBox");
        const btn   = document.getElementById("nextBtn");

        // 2) Original render() sichern
        const oldRender = window.render;

        // 3) render() erweitern (nicht ersetzen)
        window.render = function(){
            oldRender();

            // Mini-Maske (falls geladen)
            if(window.updateMask) updateMask(window.index);

            // Effekte (falls geladen)
            if(window.applyEffects) applyEffects(box);

            // Timer (falls geladen)
            if(window.applyTimer) applyTimer(meta, window.index);
        };

        // 4) Button erweitern (nicht ersetzen)
        const oldClick = btn.onclick;
        btn.onclick = function(){
            // Moves (falls geladen)
            if(window.MOVES){
                if(window.index % 3 === 0) MOVES.rewME();
                if(window.index % 3 === 1) MOVES.ME();
                if(window.index % 3 === 2) MOVES.forME();
            }

            oldClick();
        };

    });

})();

