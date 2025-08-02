# Image Gallery

A modern, responsive image gallery built with Next.js that fetches high-quality photos from the Pexels API.

## ✨ Features

- 🔍 Search for images by keyword
- 📱 Responsive design (mobile-friendly)
- 🌟 Curated image browsing
- 📄 Pagination support
- ⚡ Fast loading with optimized images
- 🎨 Blur placeholders while images load

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image API:** Pexels API
- **Validation:** Zod
- **Image Processing:** Plaiceholder (for blur effects)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- A Pexels API key (free at [pexels.com/api](https://www.pexels.com/api/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd img-gallery-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   PEXELS_API_KEY=your_pexels_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

- **Home Page:** Browse curated images
- **Search:** Use the search bar to find specific images
- **Navigation:** Click the arrows to navigate between pages
- **View Original:** Click any image to view it on Pexels

## 📁 Project Structure

```
src/
├── app/
│   ├── components/     # Reusable components
│   ├── results/        # Dynamic search results pages
│   └── globals.css     # Global styles
├── lib/                # Utility functions
└── models/             # TypeScript types and Zod schemas
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add your `PEXELS_API_KEY` environment variable
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Images provided by [Pexels](https://www.pexels.com/)
- Built with [Next.js](https://nextjs.org/)