window.NAVI = {
    onEvent(e){
        console.log("NAVI → Ereignis:", e);

        // 1) Epoche bestimmen
        const epoch = this.getEpoch(e);

        // 2) Gefahr/Wohlbefinden bestimmen
        const danger = this.getDanger(e);

        // 3) Ausgabe aktualisieren
        this.updateHUD(epoch, danger);
    },

    getEpoch(e){
        if(e.anchor === "PI") return "jetzt";
        if(e.anchor === "Q2") return "future";
        if(e.anchor === "Q0") return "vergangen";
        return "unbekannt";
    },

    getDanger(e){
        if(e.type === "cube_interaction") return 2;
        if(e.type === "war") return 9;
        if(e.type === "heart") return 0;
        return 1;
    },

    updateHUD(epoch, danger){
        document.getElementById("naviEpoch").textContent = "Epoche: " + epoch;
        document.getElementById("naviDanger").textContent = "Gefahr: " + danger;
        document.getElementById("naviStatus").textContent =
            danger >= 7 ? "⚠ Gefahr" :
            danger <= 1 ? "🌿 Wohlbefinden" :
            "… neutral";
    }
};
