// SEEU_AUTO_CONTROLLER.js – 360° all4all identity

window.SEEU = window.SEEU || {};
window.SEEU_ITEMS = window.SEEU_ITEMS || new Map();
window.SEEU_LOG = window.SEEU_LOG || [];

// 1) Item registrieren
window.SEEU_REGISTER_ITEM = function(item){
  if(!item?.id) return;
  window.SEEU_ITEMS.set(item.id, item);
  logChange('register', item.id, snapshot(item));
};

// 2) Änderung melden (von jedem Item aufrufbar)
window.SEEU_ITEM_CHANGED = function(id){
  const item = window.SEEU_ITEMS.get(id);
  if(!item) return;
  logChange('update', id, snapshot(item));
};

// 3) Molekül‑Snapshot (all4all)
window.SEEU_SNAPSHOT_ALL = function(){
  return [...window.SEEU_ITEMS.values()].map(snapshot);
};

// 4) Identity‑Check – harte Konstanz
window.SEEU_IDENTITY_CHECK = function(id, fn){
  const item = window.SEEU_ITEMS.get(id);
  if(!item) return false;
  return fn(snapshot(item));
};

// intern: Snapshot + Log
function snapshot(item){
  if(typeof item.snapshot === 'function') return item.snapshot();
  // Fallback – flacher Clone
  return JSON.parse(JSON.stringify(item));
}

function logChange(type, id, data){
  window.SEEU_LOG.push({
    type,
    id,
    data,
    ts: Date.now()
  });
}
