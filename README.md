# Windows 95 Shadcn UI

A collection of Windows 95 styled components built with Radix UI and Tailwind CSS. This project brings the nostalgic Windows 95 aesthetic to modern React applications.

![Windows 95 Shadcn UI](https://img.shields.io/badge/Windows%2095-Shadcn%20UI-blue)
![Status](https://img.shields.io/badge/status-work%20in%20progress-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎨 Overview

Windows 95 Shadcn UI is a component library that recreates the classic Windows 95 user interface design using modern web technologies. Each component is carefully styled to match the pixel-perfect borders, colors, and interactions of the original Windows 95 operating system.

## ⚠️ Status

**This project is currently under active development and is NOT recommended for production use.**

Components are being refined and new features are being added regularly. We welcome contributions from the community!

## ✨ Features

- **Authentic Windows 95 Styling** - Pixel-perfect borders, colors, and 3D effects
- **Built on Radix UI** - Accessible components with proper ARIA attributes
- **Fully Customizable** - Powered by Tailwind CSS for easy theming
- **TypeScript Support** - Full type safety out of the box
- **Component Documentation** - Comprehensive examples and usage guides
- **Shadcn Compatible** - Works seamlessly with shadcn/ui CLI

## 🚀 Getting Started

### Installation

This project uses Next.js and can be run locally:

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run the development server
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component showcase.

### Using Components

Components are located in `components/windows95-ui/` and can be imported directly:

```tsx
import { Button } from "@/components/windows95-ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/windows95-ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello Windows 95!</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

## 📦 Available Components

- **Alert Dialog** - Modal dialogs with drag functionality
- **Badge** - Status indicators and labels
- **Bar Chart** - Data visualization with Windows 95 styling
- **Button** - Interactive buttons with various variants
- **Card** - Container components with title bars
- **Checkbox** - Form checkboxes
- **Combobox** - Autocomplete input fields
- **Dropdown Menu** - Context menus with submenus
- **Input** - Text input fields
- **Input Group** - Input fields with addons
- **Label** - Form labels
- **Page Background** - Page wrapper component
- **Page Header** - Page title and description component
- **Radio Group** - Radio button groups
- **Select** - Dropdown select menus
- **Separator** - Visual dividers
- **Start Menu** - Windows 95 styled navigation menu
- **Table** - Data tables
- **Tabs** - Tabbed interfaces
- **Textarea** - Multi-line text inputs

View all components and examples at `/components` in the running application.

## 🛠️ Tech Stack

- **Next.js** - React framework
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Recharts** - Chart library (for bar charts)

## 📚 Documentation

Component documentation and examples are available in the application:

1. Visit the homepage at `/`
2. Browse all components at `/components`
3. View individual component demos at `/components/[component-name]`

Each component page includes:
- Live preview
- Usage examples
- Code snippets
- Copy-to-clipboard functionality

## 🤝 Contributing

We're looking for developers who are passionate about retro UI design! Contributions are welcome:

- 🐛 Bug fixes
- ✨ New components
- 📝 Documentation improvements
- 🎨 Design refinements
- 🧪 Testing

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Visit our [GitHub repository](https://github.com/charanjit-singh/windows95-shadcn) to get started!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the classic Windows 95 operating system
- Built with [shadcn/ui](https://ui.shadcn.com) principles
- Uses [Radix UI](https://www.radix-ui.com) for accessibility

## 🔗 Links

- [GitHub Repository](https://github.com/charanjit-singh/windows95-shadcn)
- [Component Showcase](/components)
- [Issues](https://github.com/charanjit-singh/windows95-shadcn/issues)

---

Made with ❤️ and nostalgia for Windows 95
