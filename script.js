const portfolioContainer = document.querySelector('.portfolio-container');

// Replace this with actual data fetching (e.g., from API or database)
const portfolioItems = [
  {
    category: 'Short-form Videos',
    image: 'images/short-form-video.jpg',
    title: 'Engaging Instagram Reel'
  },
  {
    category: 'Long-form Videos',
    image: 'images/long-form-video.jpg',
    title: 'Explainer Video for a Startup'
  },
  {
    category: 'Gaming Videos',
    image: 'images/gaming-video.jpg',
    title: 'High-Energy Montage'
  },
  // Add more portfolio items here
];

function createPortfolioItem(item) {
  const portfolioItem = document.createElement('div');
  portfolioItem.classList.add('portfolio-item');

  const img = document.createElement('img');
  img.src = item.image;
  portfolioItem.appendChild(img);

  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  portfolioItem.appendChild(h3);

  // Add functionality for displaying category on hover or click (optional)

  portfolioContainer.appendChild(portfolioItem);
}

portfolioItems.forEach(createPortfolioItem);