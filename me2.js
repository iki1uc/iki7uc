export const IQ_1_Item = {
    id: "IQ_1",
    anchor: "PI",

    init() {
        console.log("IQ_1 → aktiviert");
        this.bind();
    },

    bind() {
        document.addEventListener("click", () => {
            if (typeof STATION_PRUEFUNG !== "function") return;

            const info = STATION_PRUEFUNG("IQ_1", this.anchor);
            this.anchor = info.next;

            console.log("IQ_1 →", info);
        });
    }
};
