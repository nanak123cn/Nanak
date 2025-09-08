Here’s the full **markdown format code** for your Nanak Duct Cleaning website documentation:

````markdown
# Nanak Duct Cleaning Website

A professional, single-page website for **Nanak Duct Cleaning**, a service-based business in the Greater Toronto Area.  
The site is designed to be clean, responsive, and provide a clear call to action for visitors.

---

## Features

- **Responsive Design**: The website is fully responsive and optimized for a seamless viewing experience on all devices, from mobile phones to desktops.  
- **Service Sections**: Detailed sections for Residential, Commercial, and Dryer Vent cleaning services.  
- **Interactive FAQ**: An accordion-style "Frequently Asked Questions" section to provide quick answers to common inquiries.  
- **Customer Testimonials**: A dedicated section to showcase positive feedback and build trust with new clients.  
- **Functional Contact Form**: A working contact form that sends submissions directly to your email via the EmailJS service, without needing a custom backend.  
- **Smooth Animations**: Utilizes the AOS (Animate On Scroll) library to add subtle, professional animations as the user scrolls.  
- **Scroll-to-Top Button**: A circular button that appears on scroll, allowing users to quickly return to the top of the page.  
- **SEO-Friendly Metadata**: Configured with metadata for improved search engine optimization on platforms like Google.  

---

## Technologies

- **Next.js**: A powerful React framework for building fast, SEO-friendly web applications.  
- **React**: The core UI library used to build the components.  
- **EmailJS**: A third-party service for handling form submissions directly from the client, eliminating the need for a server-side API.  
- **AOS (Animate On Scroll)**: A JavaScript library for creating scroll animations.  
- **CSS Modules/Global CSS**: For managing the website's styling.  

---

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone [repository-url]
cd nanak-duct-cleaning-website
````

### 2. Install Dependencies

Install the required packages using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure EmailJS

This project uses [EmailJS](https://www.emailjs.com/) for form submissions. You will need to set up your account and get your credentials:

1. Sign up for a free EmailJS account.
2. Add a new Email Service (e.g., Gmail).
3. Create a new Email Template to define the content of the emails you will receive.
4. Copy your **Service ID**, **Template ID**, and **Public Key**.

### 4. Run the Development Server

Once the dependencies and EmailJS are configured, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
The page will auto-update as you edit the files.

---

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
The project is already pre-configured for Vercel, so deployment is as simple as linking your Git repository.

```

Do you also want me to create a **README.md file** with this content so you can directly use it in your project repository?
```
