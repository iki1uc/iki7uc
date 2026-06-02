/* CV ENGINE – PURE VERSION
   Kein localStorage, kein DOM, keine UI.
   Nur Zustand + Impulse + Routing + Dispatch.
*/

const CV = {

    stateObj: { value: 10, mult: 1 },

    state(){
        return { ...CV.stateObj };
    },

    setState(s){
        CV.stateObj = { ...s };
    },

    impulse: {
        forward(s){
            return { axis:"3x2", direction:"forward", value:s.value, mult:s.mult };
        },
        backward(s){
            return { axis:"3x1", direction:"backward", value:s.value, mult:s.mult };
        },
        neutral(s){
            return { axis:"3x0", direction:"neutral", value:s.value, mult:s.mult };
        }
    },

    router(event){
        const s = event.state ?? CV.state();

        if(event.direction === "forward")  return CV.impulse.forward(s);
        if(event.direction === "backward") return CV.impulse.backward(s);
        return CV.impulse.neutral(s);
    },

    dispatch(event){
        const s = event.state ?? CV.state();
        const out = CV.router(event);

        return {
            input: s,
            mode: out.direction,
            output: out
        };
    }
};

