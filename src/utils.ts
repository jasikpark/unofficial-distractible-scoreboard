/**
 * Formats a score number with commas or just returns the string
 * @param score string | number
 * @returns string
 */
export const formatScore = (score) =>
  typeof score === "string" ? score : new Intl.NumberFormat().format(score);

/**
 * Sorts a score either in placement order, descendingly if it's a number, or randomly if it's a string
 * @param a string | number
 * @param b string | number
 * @returns number
 */
export const sortScores = (a, b) => {
  if ("placement" in a && "placement" in b) {
    return a.placement - b.placement;
  }
  if (typeof a.score === "string" || typeof b.score === "string") {
    return Math.random() - 0.5;
  }
  if ("score" in a && "score" in b) {
    return b.score - a.score;
  }
  return b - a;
};
