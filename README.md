# Post Manager

A modern React TypeScript application for managing posts with full CRUD functionality. Built with Redux Toolkit Query for state management, styled with Tailwind CSS, and featuring a responsive design.

![Post Manager Demo](https://via.placeholder.com/800x400?text=Post+Manager+Application)

## 🚀 Features

- ✅ **Full CRUD Operations**: Create, Read, Update, Delete posts
- 🔍 **Search Functionality**: Filter posts by title
- 📱 **Responsive Design**: Works seamlessly on all device sizes
- ⚡ **Real-time Updates**: Immediate UI feedback with optimistic updates
- 🎯 **TypeScript**: Fully typed for better development experience
- 🎨 **Modern UI**: Clean, intuitive interface with Tailwind CSS
- 📊 **Pagination**: Load more posts functionality
- 🔔 **Toast Notifications**: Success/error feedback
- 🚀 **Redux Toolkit Query**: Efficient API state management

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **State Management**: Redux Toolkit, RTK Query
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: JSONPlaceholder (fake REST API for testing)
- **Build Tool**: Create React App

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 8.0 or higher) or **yarn**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/post-manager.git
cd post-manager
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Install Required Packages

````bash
# Core dependencies
npm install @reduxjs/toolkit react-redux lucide-react


### 5. Start the Development Server

```bash
npm start
````

The application will open in your browser at `http://localhost:3000`.

## 📁 Project Structure

```
post-manager/
├── public/
│   └──
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── PostCard.tsx     # Individual post display
│   │   ├── PostForm.tsx     # Create/edit form
│   │   ├── SearchBar.tsx    # Search functionality
│   │   ├── Toast.tsx        # Notification component
│   │   └── LoadingSpinner.tsx
│   ├── store/               # Redux store configuration
│   │   ├── index.ts         # Store setup
│   │   └── postsApi.ts      # RTK Query API slice
│   ├── types/               # TypeScript type definitions
│   │   └── Post.ts          # Post interfaces
│   ├── pages/               # Page components
│   │   └── Posts.tsx        # Main posts page
│   ├── App.tsx              # Root component
│   ├── index.tsx            # Entry point
│   └── index.css            # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🔧 Configuration

### Tailwind CSS Configuration

Update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS Configuration

Create `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 🌐 API Integration

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API:

- **Base URL**: `https://jsonplaceholder.typicode.com/`
- **Endpoints Used**:
  - `GET /posts?_limit=10` - Fetch posts
  - `POST /posts` - Create post
  - `PUT /posts/:id` - Update post
  - `DELETE /posts/:id` - Delete post

> **Note**: JSONPlaceholder is a fake REST API, so actual data modifications are simulated. The application uses optimistic updates to provide immediate UI feedback.

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🧪 Testing

To run tests (when implemented):

```bash
npm test
```

## 📦 Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder. The build is minified and ready for deployment.

## 🚀 Deployment

The application can be deployed to various platforms:

### Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/post-manager",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## 🎨 Customization

### Styling

- Modify Tailwind classes in components for design changes
- Extend the Tailwind config for custom colors/spacing
- Add custom CSS in `src/index.css`

### API Integration

- Replace JSONPlaceholder with your actual API in `src/store/postsApi.ts`
- Update type definitions in `src/types/Post.ts`
- Modify endpoints and request/response handling as needed

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**:

   ```bash
   npm install
   ```

2. **Tailwind styles not loading**:

   - Ensure Tailwind directives are in `src/index.css`
   - Check `tailwind.config.js` content paths

3. **TypeScript errors**:

   - Ensure all dependencies have type definitions
   - Check `tsconfig.json` configuration

4. **API issues**:
   - Check network connectivity
   - Verify JSONPlaceholder API is accessible
   - Check browser developer tools for network errors

## 👏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the fake REST API
- [Redux Toolkit](https://redux-toolkit.js.org/) for excellent state management
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons

## 📧 Contact

For questions or feedback, please reach out:

- GitHub: [@yourusername](https://github.com/ereibor)
- Email: etunere@gmail.com

---

Made with ❤️ using React, TypeScript, and Redux Toolkit
