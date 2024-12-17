function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle 0 correctly for specific functions
  }
  return a + b; // Might have other errors, depends on function
}