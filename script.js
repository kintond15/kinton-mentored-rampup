function redirectToTop10() {
  // Redirect to the Top 10 section
  window.location.href = '#top10';

  // Remove the original section from the DOM
  document.querySelector('.original-section').remove();
}