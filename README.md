# CODEBYTE - Digital Innovation Agency

A modern, high-performance website for CODEBYTE, a full-service technology powerhouse specializing in digital transformation, AI solutions, and innovative software development.

![CODEBYTE](./public/logo.jpg)

## 🌟 Features

- **Modern UI/UX**: Built with a sleek, professional design featuring glass morphism effects and smooth animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **SEO Friendly**: Built with best SEO practices for better search engine visibility
- **Interactive Animations**: Smooth scroll animations powered by Framer Motion
- **Contact Form Integration**: Integrated with Formspree for seamless lead generation
- **Dark Mode Support**: Modern dark theme with careful attention to contrast and readability

## 🚀 Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first styling

### UI Components
- **shadcn/ui** - Beautifully designed components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### State Management & Forms
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Testing
- **Vitest** - Unit testing framework
- **Playwright** - E2E testing
- **Testing Library** - React testing utilities

## 📂 Project Structure

```
CODEBYTE/
├── public/                 # Static assets
│   ├── harit.jpeg         # Team member images
│   ├── harshit.jpg
│   ├── mukesh img01.jpeg
│   ├── logo.jpg
│   └── ...
├── src/
│   ├── components/
│   │   ├── home/          # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ContactFormSection.tsx
│   │   │   └── ...
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Layout.tsx
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Client.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── lib/               # Utilities
│   │   └── utils.ts
│   ├── hooks/             # Custom hooks
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Pages & Routes

- **Home (`/`)** - Hero section, services overview, testimonials, process, and contact form
- **About (`/about`)** - Company story, values, and leadership team with LinkedIn profiles
- **Services (`/services`)** - Detailed service offerings (Web Dev, Mobile Apps, AI, Cloud, etc.)
- **Portfolio (`/portfolio`)** - Showcase of completed projects
- **Clients (`/clients`)** - Client testimonials and success stories
- **Contact (`/contact`)** - Contact form and FAQ section

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Codebyte
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:8080`

### Build

```bash
npm run build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch
```

### Linting

```bash
npm run lint
```

## 🚀 Deployment

### Deploy to Azure (Recommended)

#### Quick Deploy with Script

**Windows:**
```bash
deploy-azure.bat
```

**Linux/Mac:**
```bash
chmod +x deploy-azure.sh
./deploy-azure.sh
```

#### Manual Deploy to Azure Static Web Apps

1. **Install Azure CLI and login:**
```bash
az login
```

2. **Create Static Web App:**
```bash
az staticwebapp create \
  --name codebyte-website \
  --resource-group codebyte-rg \
  --source . \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

3. **Configuration files are already set up:**
   - `staticwebapp.config.json` - Routing, headers, caching
   - `web.config` - IIS configuration for Windows hosting
   - `azure-app.yaml` - App Service configuration

#### Other Azure Options

- **Azure App Service**: Full control, custom domains, scaling
- **Azure Storage**: Simple static website hosting
- See `AZURE_DEPLOYMENT_GUIDE.md` for detailed instructions

### Deploy to Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Manual Deployment
```bash
npm run build
# Deploy the contents of the 'dist' folder to your hosting provider
```

## 🎨 Design System

### Colors
The application uses a custom color palette defined in Tailwind configuration:
- Primary, Secondary, Accent colors
- Dark/Light mode support
- Gradient effects for headings

### Typography
- **Headings**: Space Grotesk font family
- **Body**: Inter font family

### Components
Reusable components built with Radix UI primitives and styled with Tailwind CSS:
- Buttons, Cards, Forms
- Dialogs, Modals, Sheets
- Navigation menus
- Toast notifications

## 📱 Key Features

### Leadership Team Section
- Displays team members with professional photos
- LinkedIn profile links for networking
- Hover effects and smooth animations

### Contact Integration
- Formspree integration for form submissions
- Real-time validation with Zod schemas
- Toast notifications for user feedback
- Multiple contact methods (email, phone, location)

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scroll navigation
- Active route highlighting

## 🔧 Configuration

### Vite Configuration
- Port: 8080
- Hot Module Replacement (HMR) enabled
- Path aliases configured (`@/` → `./src/`)

### Tailwind Configuration
- Custom container sizes
- Extended color palette
- Custom animations and keyframes
- Dark mode support

## 📊 Performance Metrics

- **Fast Loading**: Optimized bundle size with code splitting
- **Smooth Animations**: 60fps animations with Framer Motion
- **Accessible**: ARIA labels and keyboard navigation support
- **SEO Ready**: Semantic HTML and meta tags

## 👥 Team

- **Harit Garg** - Co-founder ([LinkedIn](https://www.linkedin.com/in/harit-garg1707/))
- **Mukesh Pal** - Co-founder & CTO ([LinkedIn](https://www.linkedin.com/in/mukprabhakar/))
- **Harshit** - Co-founder & CMO ([LinkedIn](https://www.linkedin.com/in/harshit-prajapati-9723b6311/))

## 📞 Contact Information

- **Email**: Codebytdigital@gmail.com
- **Phone**: +91 97184 17771 | +91 99250 97911
- **Location**: India

## 📄 License

This project is proprietary and confidential. All rights reserved © 2026 CODEBYTE.

---

**Made with ❤️ by Mukesh Pal**
