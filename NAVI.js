/* IQ_2.css */
/* Maxi‑Cube: große Darstellung */
/* Kombiniert beide Varianten harmonisch */

.IQ_2 {
    width: 120px;
    height: 120px;

    /* Grundfarbe (Variante A) */
    background: #2a2a2a;

    /* Schimmer (Variante B) */
    background: linear-gradient(135deg, #1e1e1e, #2f2f2f);

    border-radius: 12px;

    /* Kombinierter Schatten */
    box-shadow:
        0 0 12px rgba(0,0,0,0.25),
        0 0 14px rgba(0,0,0,0.35);

    transition: 0.3s ease;
}

.IQ_2:hover {
    transform: scale(1.06);

    /* Verstärkter Schatten im Hover */
    box-shadow:
        0 0 14px rgba(0,0,0,0.35),
        0 0 18px rgba(0,0,0,0.45);
}
