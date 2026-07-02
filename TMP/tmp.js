export function TMP_from_SUB(sub) {
  return {
    id: sub.id,
    alias: sub.alias,
    vector: sub.vector,
    wake: sub.wake,
    pipeline: sub.pipeline,
    tmp: "TMP_" + sub.id
  };
}

