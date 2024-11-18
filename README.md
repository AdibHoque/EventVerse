# EventVerse 🎉

[Live Website](https://eventversely.vercel.app/)

EventVerse is a state-of-the-art event management platform, leveraging the **latest innovations in web development** to provide a seamless experience for hosting, discovering, and enrolling in events. Built with **Next.js 15** and **TypeScript**, EventVerse ensures a type-safe, scalable, and maintainable codebase, making it future-proof for modern web applications.

The platform features advanced tools like **Clerk** for authentication, **UploadThing** for media management, and **Stripe** for secure payment processing. It also supports light/dark mode with **next-themes** and offers a stunning user interface powered by **ShadCN UI**.

---

## 🚀 Features

### 🌟 Homepage (`/`)

- **Hero Section**: A visually appealing introduction to the platform.
- **Events Section**:
  - Advanced filtering by categories.
  - Search functionality to quickly find events by name.
  - Pagination for seamless navigation through events.

### 📄 Event Details (`/events/:id`)

- Comprehensive details about individual events.
- Secure ticket purchasing or enrollment powered by **Stripe**.
- **Related Events** section to discover similar events.

### ➕ Create Event (`/events/create`)

- Create new events using **react-hook-form** for form state management and **Zod** for validation.

### ✏️ Update Event (`/events/:id/update`)

- Update event details if you’re the organizer, ensuring full control over your events.

### 👤 User Profile (`/profile`)

- View tickets you've purchased and events you've organized.

### 🔍 Other User Profiles (`/profile/:username`)

- Explore other users’ profiles, including their tickets and organized events.

---

## 🛠️ Cutting-Edge Tech Stack

### **Frontend**

- **Next.js 15**: The latest in server-side rendering and app directory architecture.
- **React 19**: Experimental features with enhanced concurrency for a smoother UI experience.
- **TypeScript**: Enforced type safety for scalable and maintainable code.
- **ShadCN UI**: A modern and accessible component library for beautiful design.
- **TailwindCSS** with **tailwindcss-animate**: Provides utility-first styling with smooth animations.

### **Backend**

- **MongoDB**: A robust NoSQL database for scalable data management.
- **Mongoose**: Schema-based modeling to ensure consistent data structure.
- **UploadThing**: Simple and efficient image and file storage solution.
- **Stripe**: Industry-standard payment gateway for secure transactions.

### **Authentication**

- **Clerk**: Cutting-edge authentication platform providing seamless and secure user management.

### **Forms**

- **react-hook-form**: High-performance forms with minimal re-renders.
- **Zod**: Type-safe schema validation for robust input handling.

---
