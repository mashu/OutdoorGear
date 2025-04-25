# European & Polish Outdoor Gear Brands Website

A static website showcasing European and Polish outdoor gear brands, built with Next.js and hosted on GitHub Pages.

## Features

- Browse brands by category (Shelter, Backpacks, Sleep, Stoves, Clothes)
- Filter by subcategories
- Search functionality for finding specific brands
- Responsive design for all devices
- Easy to add new brands and categories

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/outdoor-brands-website.git
cd outdoor-brands-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
outdoor-brands-website/
├── .github/workflows/ - GitHub Actions for auto-deployment
├── public/            - Static assets like images
├── src/
│   ├── components/    - React components
│   ├── data/          - Data files for brands and categories
│   ├── pages/         - Next.js pages
│   ├── styles/        - CSS styles
│   └── utils/         - Utility functions
├── next.config.js     - Next.js configuration
└── package.json       - Project dependencies and scripts
```

## Adding New Brands

To add a new brand, edit the `src/data/brands.js` file and add a new object to the `brands` array:

```javascript
{
  id: 'yourbrand',
  name: 'Your Brand',
  country: 'Country',
  website: 'https://yourbrand.com',
  logo: '/images/brands/yourbrand.png',
  description: 'Description of your brand.',
  categories: ['category1', 'category2'],
  subcategories: ['subcategory1', 'subcategory2'],
  featured: false
}
```

Make sure to add the brand's logo to the `public/images/brands/` directory.

## Adding New Categories

To add a new category, edit the `src/data/categories.js` file and add a new object to the `categories` array:

```javascript
{
  id: 'newcategory',
  name: 'New Category',
  subcategories: [
    { id: 'subcategory1', name: 'Subcategory 1' },
    { id: 'subcategory2', name: 'Subcategory 2' }
  ],
  icon: 'FaIcon'
}
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. When you push changes to the `main` branch, the website will be built and deployed automatically.

### Manual Deployment

You can also deploy manually:

1. Build and export the website:

```bash
npm run export
# or
yarn export
```

2. Deploy the `out` directory to GitHub Pages or any static hosting service.

## Customization

### Changing Colors

To change the color scheme, modify the Tailwind CSS configuration in `tailwind.config.js`.

### Adding Pages

To add new pages, create new files in the `src/pages` directory. Next.js uses file-based routing, so files in this directory automatically become routes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
