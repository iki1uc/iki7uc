function tam(item) {
  // 1) 3×‑NEU Format
  const ort_new = item?.legacy?.ort;
  const mol_new = item?.competence?.core?.[0];

  // 2) ALT Format
  const ort_alt = item?.ort;
  const mol_alt = item?.molekuel;

  // 3) REPAIR Format
  const ort_rep = item?.ort;
  const mol_rep = item?.typ;

  // FINAL: Priorität
  const ort = ort_new || ort_alt || ort_rep;
  const mol = mol_new || mol_alt || mol_rep || "?";

  if (!ort || !grid[ort]) return;
  grid[ort].textContent = mol;
}
