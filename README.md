# EventVerse 🎉

[Live Website](https://eventversely.vercel.app/)

EventVerse is a state-of-the-art event management platform, leveraging the **latest innovations in web development** to provide a seamless experience for hosting, discovering, and enrolling in events. Built with **Next.js 15** and **TypeScript**, EventVerse ensures a type-safe, scalable, and maintainable codebase, making it future-proof for modern web applications.

The platform features advanced tools like **Clerk** for authentication, **UploadThing** for media management, and **Stripe** for secure payment processing. It also supports light/dark mode with **next-themes** and offers a stunning user interface powered by **ShadCN UI**.

---

## 🚀 Features

1. **Dynamic Homepage**

   - A captivating hero section introducing the platform.
   - Discover events with advanced filters for categories, pagination, and a robust search functionality.

2. **Detailed Event Pages**

   - View comprehensive details of individual events, including descriptions and organizer information.
   - Securely purchase tickets or enroll in events using **Stripe**.
   - Explore related events in the "Related Events" section.

3. **Event Creation**

   - Effortlessly create new events using **react-hook-form** and **Zod** for validation.
   - Add media with ease through **UploadThing** for a polished event listing.

4. **Event Management**

   - Update event details, ensuring organizers have complete control over their listings.
   - Keep events up-to-date with user-friendly editing tools.

5. **User Profiles**

   - **Your Profile**: Access and manage your purchased tickets and organized events.
   - **Other Profiles**: View other users’ public profiles, including their hosted events and tickets.

6. **Secure and Seamless Authentication**

   - Powered by **Clerk**, ensuring a smooth and safe login and sign-up experience.
   - Personalize your experience with protected routes and account-specific features.

7. **Media and Payment Integration**

   - Store and manage event media efficiently using **UploadThing**.
   - Enjoy a seamless and secure payment experience with **Stripe** for ticket purchases.

8. **Accessible and Modern Design**

   - A stunning interface built with **ShadCN UI**, ensuring accessibility and responsiveness.
   - Supports light/dark mode with **next-themes** for a personalized viewing experience.

9. **Real-Time Updates**

   - Experience dynamic updates across the platform, ensuring the latest events and details are always available.

10. **Scalable Tech Foundation**
    - Built with **Next.js 15** and **TypeScript** for a future-proof, scalable platform.
    - Enhanced styling and animations with **TailwindCSS** and **tailwindcss-animate**.

---

## 🚀 Routes

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
