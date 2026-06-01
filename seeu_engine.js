<script type="module">
    import { registerItem } from "../../core/register.js";
    import { GLOBAL_ALL4ALL } from "../../global/all4all.js";
    import { createAnker } from "../../global/anker.js";

    // 128 Anker erzeugen
    const alleAnker = [];
    for(let i=1; i<=128; i++){
        alleAnker.push(createAnker("anker_" + i));
    }

    GLOBAL_ALL4ALL.init(alleAnker);

    const item = {
        id: "modus_global",

        start(){
            GLOBAL_ALL4ALL.on();
        },

        end(){
            GLOBAL_ALL4ALL.off();
        }
    };

    registerItem(item);
</script>

