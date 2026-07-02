ktor‑Map

Lokale wake.map

Lokale TMP‑Spur

SUB liefert alle Daten, die ein RESPO benötigt, um korrekt zu arbeiten.

Beziehung: aWAKE ↔ SUB ↔ RESPO
aWAKE
Globaler Wecker

Globaler Vektor‑Adapter

Globaler Alias‑Anker

Globaler PX/PQ‑Layer

Globaler TMP‑Starter

SUB
Lokale Datenquelle

Lokale Weck‑Information

Lokale Vektor‑Map

Lokale Alias‑Liste

Lokale TMP‑Spur

RESPO
Zielmodul

Wird durch aWAKE geweckt

Nutzt SUB‑Daten

Arbeitet nach wake.map

Struktur von SUB
Code
SUB/
   params.txt
   alias.txt
   vector.map
   wake.map
   TMP/
      trace.log
      fail.status
      names.map.txt
wake.map — Lokale Weck‑Information
Diese Datei erklärt dem RESPO beim Aufwachen:

Code
wake.job = REC_<name>
wake.reason = PX/PQ
wake.vector = [x, y, z]
wake.pipeline = 3|6
wake.tmp = TMP_<name>_SUB
wake.alias = originalName
Vektor‑Adapter (1D → 3D)
SUB wandelt lokale 1D‑Parameter in 3D‑Vektoren um:

Code
speed = 5
→ vector = [5, 0, 0]
Damit sind alle RESPO‑Module kompatibel.

Warum SUB notwendig ist
liefert lokale Parameter

liefert lokale Alias‑Namen

liefert lokale Vektoren

liefert lokale wake.map

liefert lokale TMP‑Spuren

macht jeden RESPO arbeitsfähig

Fazit
SUB ist die lokale Daten‑ und Weckschicht für jeden RESPO.
Es stellt sicher, dass jeder RESPO korrekt startet, seine Aufgabe kennt und vollständig mit PX/PQ, TMP und allen Modulen kompatibel ist.
