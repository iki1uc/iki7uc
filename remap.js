<script type="module">
    import { registerItem } from "../../core/register.js";

    registerItem({
        id: "cube_06",
        molekuel: "form",
        snapshot(){ 
            return { id: this.id, molekuel: this.molekuel };
        }
    });
</script>

