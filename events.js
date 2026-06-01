export function createAnker(id){
    return {
        id,
        leuchtet: false,

        leuchten(state){
            this.leuchtet = state;
            console.log("ANKER", this.id, "→", state ? "ON" : "OFF");
        }
    };
}

