// SUB → RESPO automatische Übergabe

export function SUB_to_RESPO() {

  // Vorläufige SUB-Daten (später: echtes File-Parsing)
  const params = {
    id: "SUB_CORE",
    state: "ACTIVE",
    mode: "NORMAL",
    pipeline: "3|6"
  };

  const alias = {
    original: "respo_core",
    alias: "RC"
  };

  const vector = {
    speed: 5,
    vector: [5, 0, 0],
    type: "linear"
  };

  const wake = {
    job: "REC_core",
    reason: "PX/PQ",
    vector: [5, 0, 0],
    pipeline: "3|6",
    tmp: "TMP_core_SUB",
    alias: "respo_core"
  };

  // AUTOMATISCHE ÜBERGABE → RESPO-Objekt
  return {
    id: params.id,
    name: alias.original,
    alias: alias.alias,
    state: params.state,
    pipeline: params.pipeline,

    vector: vector.vector,
    speed: vector.speed,

    wake: wake,

    tmp_id: wake.tmp,

    kompetenzen: [
      "struktur",
      "vektor",
      "alias",
      "wake",
      "pipeline",
      "tmp"
    ],

    techniken: [
      "core",
      "dir",
      "argumenteria"
    ]
  };
}
