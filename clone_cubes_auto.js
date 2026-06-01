## Formale Zustände und Rolle von `iki1uc`

### 1. Zustandsmenge

Wir betrachten eine einfache Zustandsmenge



\[
S = \{0, 1, \text{iki1uc}\}
\]



- **0**: Abwesenheit eines gültigen Zuges / keiner Prozessentscheidung  
- **1**: eindeutige, binäre Entscheidung / abgeschlossener Zug  
- **iki1uc**: eigener Zustand, weder 0 noch 1, aber in derselben Zustandsmenge

Formal gilt:



\[
\text{iki1uc} \neq 0,\quad \text{iki1uc} \neq 1
\]



### 2. NoN144 als reservierter Nicht‑Wert

NoN144 ist ein spezielles, technisches Element:



\[
\text{NoN144} \in S,\quad \text{NoN144} \notin \mathbb{R}
\]



- kein numerischer Wert  
- kein semantischer Träger  
- markierter Nicht‑Zustand: „hier liegt kein gültiger Wert vor“

### 3. Würfel‑Prozess als Spielraum

Jeder Mini‑Würfel \(W_i\) beschreibt einen Prozess:



\[
W_i = (D_i, T_i, Q_i, O_i)
\]



- \(D_i\): Dual (zwei Pole)  
- \(T_i\): Trio (drei Kernpunkte)  
- \(Q_i\): Quart (vier Flächen, optional)  
- \(O_i\): Optik/Kontext (optional)

Die Menge aller möglichen Prozess‑Würfel:



\[
\mathcal{W} = \{W_1, W_2, \dots\}
\]



### 4. Abbildung statt Einzelzustand

`iki1uc` ist weder 0 noch 1 und auch nicht NoN144, sondern:

- ein eigener Zustand in \(S\)  
- plus eine Abbildung auf den Spielraum der Würfelprozesse



\[
\text{iki1uc} \in S,\quad
\text{iki1uc} \neq 0,\quad
\text{iki1uc} \neq 1,\quad
\text{iki1uc} \neq \text{NoN144}
\]



und eine Abbildung



\[
f_{\text{iki1uc}} : \mathcal{W} \to \mathcal{W}
\]



die Zustände liest, Muster erkennt und jeweils einen gültigen Folgezustand im Würfel‑Prozessraum \(\mathcal{W}\) erzeugt.

## SEEU_CREATE_CUBE – formale Einordnung

Die Funktion `SEEU_CREATE_CUBE` ist die Materialisierung eines Prozesswürfels `W_i`.

Mathematisch beschreibt sie eine Abbildung



\[
g : P \to I
\]



von Projektparametern `P` zu einer konkreten Cube‑Instanz `I`.

Ein erzeugter Cube entspricht exakt der Struktur



\[
W_i = (D_i, T_i, Q_i, O_i)
\]



- **Dual (D_i)**: Zustände wie `state-online`, `state-busy`, `state-offline`  
- **Trio (T_i)**: Rotation und Impuls (`rotX`, `rotY`, `applyImpulse`)  
- **Quart (Q_i)**: die sechs Flächen des Würfels  
- **Optik (O_i)**: Projekt‑ und Containerkontext

Damit ist jeder erzeugte Cube ein gültiger Punkt im Prozessraum



\[
\mathcal{W}_{81}
\]



und kann in Molekül‑Strukturen weiterverarbeitet werden.

↔ iki ↔ 1 ↔ uc ↔  
360° = 42

