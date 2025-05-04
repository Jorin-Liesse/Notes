document.querySelectorAll('span').forEach(span => {
    span.addEventListener('click', () => {
      alert(`You clicked: ${span.className}`);
      // Or run your custom logic here
    });
  });