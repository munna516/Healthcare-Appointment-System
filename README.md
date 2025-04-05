# 🏥 Health Point — Healthcare Appointment System

**Health Point** is a modern healthcare platform that allows patients to connect with doctors, analyze symptoms using AI, book appointments and receive consultations — all online. It includes role-based dashboards for admins, patients, and doctors, and integrates with Stripe for payments.





## ✨ Features

### 👨‍💼 Admin Dashboard

- Doctor Onboarding & Removal
- Appointment Management
- Admin Profile
- Blog Writing Interface

### 🧑 Patient Dashboard

- Book Appointments
- Make Payments (Stripe)
- View Appointment & Payment History
- Patient Profile
- Leave Reviews _(*Upcoming*)_

### 👨‍⚕️ Doctor Dashboard

- Doctor Profile
- Manage Schedules
- View Patient Appointments
- Digital Prescription _(*Upcoming*)_

### 🤖 AI Features

- AI Symptom Checker 
- Smart Doctor Matching _(Upcoming)_


### 🔒 Other Highlights

- Role-Based Access
- Authentication with NextAuth
- Appointment Notifications _(Upcoming)_

---

## 🚀 Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB
- **Auth**: NextAuth.js
- **Payments**: Stripe
- **UI Components**: Radix UI, Shadcn/UI
- **Forms & Validation**: React Hook Form, Zod
- **Charts**: Recharts
- **Animations**: Lottie

---
### Dependencies:
- @google/generative-ai: ^0.24.0
- @hookform/resolvers: ^4.1.3
- @radix-ui/react-accordion: ^1.2.3
- @radix-ui/react-avatar: ^1.1.3
- @radix-ui/react-checkbox: ^1.1.4
- @radix-ui/react-dialog: ^1.1.6
- @radix-ui/react-dropdown-menu: ^2.1.6
- @radix-ui/react-label: ^2.1.2
- @radix-ui/react-popover: ^1.1.6
- @radix-ui/react-scroll-area: ^1.2.3
- @radix-ui/react-select: ^2.1.6
- @radix-ui/react-separator: ^1.1.2
- @radix-ui/react-slot: ^1.1.2
- @radix-ui/react-tooltip: ^1.1.8
- @shadcn/ui: ^0.0.4
- @stripe/react-stripe-js: ^3.6.0
- @stripe/stripe-js: ^7.0.0
- bcryptjs: ^3.0.2
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- date-fns: ^4.1.0
- lottie-react: ^2.4.1
- lucide-react: ^0.484.0
- mongoose: ^8.13.0
- next: 14.2.25
- next-auth: ^4.24.11
- react: ^18
- react-big-calendar: ^1.18.0
- react-countup: ^6.5.3
- react-dom: ^18
- react-hook-form: ^7.54.2
- react-hot-toast: ^2.5.2
- react-icon: ^1.0.0
- react-icons: ^5.5.0
- recharts: ^2.15.1
- stripe: ^18.0.0
- sweetalert2: ^11.17.2
- swiper: ^11.2.6
- tailwind-merge: ^3.0.2
- tailwindcss-animate: ^1.0.7
- zod: ^3.24.2

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/munna516/Healthcare-Appointment-System.git
cd Healthcare-Appointment-System

# Install dependencies
npm install 

# Copy and configure environment variables
cp  .env.local

# Run on localhost 
npm run dev

```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret_here
NEXT_PUBLIC_IMAGEBB_API_KEY=your_imgbb_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_GEMINI_API_KEY==your_GEMINI_secret_key
```

### 🔑 How to Set Them Up

1. **MongoDB**:

   - Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and database
   - Go to _Connect > Drivers_, copy the URI, and replace `<password>` with your DB password.

2. **NextAuth**:

   - `NEXTAUTH_SECRET`: Generate with `openssl rand -hex 32`
   - `NEXT_PUBLIC_NEXTAUTH_URL`: Usually `http://localhost:3000` during development

3. **Image Upload (ImageBB)**:

   - Sign up at [ImageBB](https://imgbb.com/)
   - Get API key from your account settings


4. **Stripe Payments**:
   - Sign up at [Stripe](https://dashboard.stripe.com/)
   - Use test keys from _Developers > API keys_

### 🛡️ Security Best Practices

- Never commit `.env.local` to version control — add it to `.gitignore`.
- Use environment variable settings on your host (e.g., Vercel, Netlify) for production.
- Always use test credentials in development and rotate secrets regularly.

---

## 📬 Contact

For questions or suggestions, feel free to open an issue or contact us.


---
## Contributors

* Mehedi Hasan Munna - [mehedihasanmunna516@gmail.com](mailto:mehedihasanmunna516@gmail.com)
* Rahul Dey - [rrishiddh@gmail.com](mailto:rrishiddh@gmail.com)
* Md. Sakib Hasan - [sakibhasan16h@gmail.com](mailto:sakibhasan16h@gmail.com)
* Ahad Miah - [ahadahmedcc@gmail.com](mailto:ahadahmedcc@gmail.com)
* Md Nayeem Uddin - [unayeem33@gmail.com](mailto:unayeem33@gmail.com)


---

## 🌐 Live Demo

🔗 [https://healthpoint-center.vercel.app/](https://healthpoint-center.vercel.app/)

## 📁 GitHub Repository

🔗 [https://github.com/munna516/Healthcare-Appointment-System](https://github.com/munna516/Healthcare-Appointment-System)

---

## 📸 Screenshots

### 🏠 Landing Page

 <img width="100%" src="https://i.ibb.co.com/8gqf3JLd/Health-Point-Landing-Page.png"  />
  
### 👨‍⚕️ Doctor Page


<img width="100%" src="https://i.ibb.co.com/QqMJj9m/Health-Point-Doctor-Page.png"  />

### 👨‍⚕️ AI Assistant Page


<img width="100%" src="https://i.ibb.co.com/8qLcF9Q/ai-assistant-page.png"  />




### ➕ Become a Doctor Page

<img width="100%" src="https://i.ibb.co.com/V6z6QFb/Health-Point-Become-Doctor-Page.png"  />


### 📰 Blog Page

<img width="100%" src="https://i.ibb.co.com/rfH0zxDP/Health-Point-Blog-Page.png"  />


### 📞 Contact Page

<img width="100%" src="https://i.ibb.co.com/DPj3BbW6/contact-page.png"  />



### 🔐 Login Page

<img width="100%" src="https://i.ibb.co.com/F480SVpM/Health-Point-Login-Page.png"  />


### 📝 Register Page

<img width="100%" src="https://i.ibb.co.com/5hKrFn26/Health-Point-Register-Page.png"  />
