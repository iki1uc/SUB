// Liest SUB-Konfiguration und baut ein TMP-Objekt

export async function TMP_from_SUB() {
  // hier später: echtes File-Parsing
  // vorläufig: feste Werte, nur Struktur

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

  return {
    sub: {
      id: params.id,
      state: params.state,
      mode: params.mode,
      pipeline: params.pipeline
    },
    alias,
    vector,
    wake,
    tmp_id: wake.tmp
  };
}

