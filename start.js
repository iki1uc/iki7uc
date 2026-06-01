export const META = {
    name: "META",
    active: false,

    on(){
        this.active = true;
        console.log("MODUS: META aktiviert");
    },

    off(){
        this.active = false;
        console.log("MODUS: META deaktiviert");
    }
};

