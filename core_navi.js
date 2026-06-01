function halt(eventName="core_event"){
  const e = {
    event:eventName,
    time:Date.now()
  };

  // Puls
  const p = document.getElementById("corePulse");
  if(p){
    p.style.transform = "scale(1.15)";
    setTimeout(()=> p.style.transform = "scale(1)", 120);

    p.textContent =
      eventName.includes("future") ? "|" :
      eventName.includes("past")   ? "." :
      eventName.includes("war")    ? "*" :
      "";
  }

  // NAVI
  if(window.NAVI && typeof NAVI.onEvent==="function"){
    NAVI.onEvent(e);
  }

  return e;
}
