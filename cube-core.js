// ⭐ STATION_PRUEFUNG – zentral
window.STATION_PRUEFUNG = function STATION_PRUEFUNG(cloneId, anchor) {
  const info = {
    clone: cloneId,
    anchor,
    time: Date.now()
  };

  console.log("STATION_PRUEFUNG:", info);

  const mi = document.getElementById("maskInstanz");
  const me = document.getElementById("maskEbene");
  const mp = document.getElementById("maskEpoche");

  if (mi) mi.textContent = cloneId;
  if (me) me.textContent = anchor || "PI";
  if (mp) mp.textContent = "jetzt";

  return info;
};

