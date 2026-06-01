// item.js – neues Item mit Anker-Engine v4+

export function ITEM(anchorName){

  const info = ANKER_CHECK(anchorName);
  const gegen = ANKER_GEGENHALT(anchorName);

  return {
    anchor: info.name,
    modell: info.modell,
    modus: info.modus,
    ueber: info.ueber,
    next: info.next,
    gewicht: info.gewicht,

    gegenhalt: gegen.gegen,
    spiegel_ueber: gegen.ueber_spiegel,
    spiegel_gewicht: gegen.gewicht_spiegel
  };
}
