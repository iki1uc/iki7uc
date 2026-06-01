console.log("MAXI v2 geladen");
halt("maxi_loaded");

// Beispiel: MAXI Story Generator
export function maxiStory(input="root"){
  halt("maxi_start");

  const out = {
    info: "MAXI v2 aktiv",
    source: input,
    time: Date.now()
  };

  halt("maxi_done");
  return out;
}

// Optional: Automatisch beim Laden einmal feuern
setTimeout(()=>{
  halt("maxi_ping");
}, 200);

