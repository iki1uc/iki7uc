export const EVENTS = {
    listeners: {},

    on(name, fn){
        if(!this.listeners[name]) this.listeners[name] = [];
        this.listeners[name].push(fn);
    },

    trigger(name, data={}){
        const list = this.listeners[name];
        if(list){
            for(const fn of list){
                fn(data);
            }
        }

        // wildcard listener
        const all = this.listeners["*"];
        if(all){
            for(const fn of all){
                fn({ name, data });
            }
        }
    }
};

