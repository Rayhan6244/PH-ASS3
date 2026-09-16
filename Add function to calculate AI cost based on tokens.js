function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== 'number' || tokensUsed < 0) return "Invalid";
  if (tokensUsed <= 500) return 0;
  return Math.floor((tokensUsed - 500) / 100) * 5;
}
console.log(calculateAiCost(300));
