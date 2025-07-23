// Listen for messages from the main thread
self.onmessage = function(event) {
  const n = event.data;
  const result = fibonacci(n);
  // Send result back to main thread
  self.postMessage(result);
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
