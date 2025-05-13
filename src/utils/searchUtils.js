/**
 * Calculate the Levenshtein distance between two strings
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {number} - Distance value (lower means more similar)
 */
export function levenshteinDistance(a, b) {
  // Create a matrix of size (a.length + 1) x (b.length + 1)
  const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
  
  // Fill the first row and column
  for (let i = 0; i <= a.length; i++) {
    matrix[i][0] = i;
  }
  
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }
  
  // Fill the rest of the matrix
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  
  // Return the bottom-right value
  return matrix[a.length][b.length];
}

/**
 * Calculate similarity score between 0 and 1 (1 being exact match)
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {number} - Similarity score between 0 and 1
 */
export function calculateSimilarity(a, b) {
  if (!a || !b) return 0;
  
  // Convert both strings to lowercase for case-insensitive comparison
  const str1 = a.toLowerCase();
  const str2 = b.toLowerCase();
  
  // Perfect match
  if (str1 === str2) return 1;
  
  // Substring match gets high score
  if (str1.includes(str2) || str2.includes(str1)) {
    return 0.9;
  }
  
  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  
  // Convert distance to similarity score (0 to 1)
  // Higher score means more similar
  return maxLength === 0 ? 1 : 1 - distance / maxLength;
}

/**
 * Get search suggestions based on input
 * @param {Array} items - Array of items to search
 * @param {string} query - Search query
 * @param {function} getField - Function to extract the field to match against
 * @param {number} limit - Maximum number of suggestions to return
 * @param {number} threshold - Minimum similarity score to include in results
 * @returns {Array} - Array of suggestions
 */
export function getSuggestions(items, query, getField, limit = 5, threshold = 0.3) {
  if (!query || query.length < 2) return [];
  
  const results = items.map(item => {
    const field = getField(item);
    const similarity = calculateSimilarity(field, query);
    return { item, similarity };
  })
  .filter(result => result.similarity > threshold)
  .sort((a, b) => b.similarity - a.similarity)
  .slice(0, limit)
  .map(result => result.item);
  
  return results;
}
