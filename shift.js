export const ALL4ALL = {
    name: "ALL4ALL",
    active: false,

    on(){
        this.active = true;
        console.log("MODUS: ALL4ALL aktiviert");
    },

    off(){
        this.active = false;
        console.log("MODUS: ALL4ALL deaktiviert");
    }
};

