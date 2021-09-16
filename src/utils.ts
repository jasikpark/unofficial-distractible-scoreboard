export const formatScore = (score) =>
  typeof score === "string" ? score : new Intl.NumberFormat().format(score);
