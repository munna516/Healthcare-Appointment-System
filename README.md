# 🏥 Health Point — Healthcare Appointment System

**Health Point** is a modern healthcare platform that allows patients to connect with doctors, analyze symptoms using AI, book appointments, and receive consultations — all online. It includes role-based dashboards for admins, patients, and doctors, and integrates with Stripe and SSLCommerz for payments.

---

## 🌐 Live Demo

🔗 [https://healthpoint-center.vercel.app/](https://healthpoint-center.vercel.app/)

## 📁 GitHub Repository

🔗 [https://github.com/munna516/Healthcare-Appointment-System](https://github.com/munna516/Healthcare-Appointment-System)

---

## 📸 Screenshots

### 🏠 Landing Page

![Landing Page](https://i.ibb.co.com/8gqf3JLd/Health-Point-Landing-Page.png)

### 👨‍⚕️ Doctor Dashboard

![Doctor Page](https://i.ibb.co.com/QqMJj9m/Health-Point-Doctor-Page.png)

### 🔐 Login Page

![Login Page](https://i.ibb.co.com/F480SVpM/Health-Point-Login-Page.png)

### 📝 Register Page

![Register Page](https://i.ibb.co.com/5hKrFn26/Health-Point-Register-Page.png)

### ➕ Become a Doctor Page

![Become Doctor Page](https://i.ibb.co.com/V6z6QFb/Health-Point-Become-Doctor-Page.png)

### 📰 Blog Page

![Blog Page](https://i.ibb.co.com/rfH0zxDP/Health-Point-Blog-Page.png)

### 📞 Contact Page

![Contact Page](https://i.ibb.co.com/MDX2TjtZ/Health-Point-Contact-Page.png)

---

## ✨ Features

### 👨‍💼 Admin Dashboard

- Doctor Onboarding/Removal
- Appointment Management
- Admin Profile
- Blog Writing Interface

### 🧑 Patient Dashboard

- Book Appointments
- Make Payments (Stripe & SSLCommerz)
- View Appointment & Payment History
- Patient Profile
- Leave Reviews _(Upcoming)_

### 👨‍⚕️ Doctor Dashboard

- Manage Schedules
- View Patient Appointments
- Digital Prescription _(Upcoming)_
- Doctor Profile

### 🤖 AI Features

- Smart Doctor Matching
- AI Symptom Checker _(Upcoming)_

### 🔒 Other Highlights

- Role-Based Access
- Authentication with NextAuth
- Appointment Notifications _(Upcoming)_

---

## 🚀 Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB
- **Auth**: NextAuth.js
- **Payments**: Stripe, SSLCommerz
- **UI Components**: Radix UI, Shadcn/UI
- **Forms & Validation**: React Hook Form, Zod
- **Charts**: Recharts
- **Animations**: Lottie

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/munna516/Healthcare-Appointment-System.git
cd Healthcare-Appointment-System

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env.local
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

4. **Google OAuth**:

   - Use [Google Cloud Console](https://console.cloud.google.com/)
   - Add the following redirect URI:  
     `http://localhost:3000/api/auth/callback/google`

5. **Stripe Payments**:
   - Sign up at [Stripe](https://dashboard.stripe.com/)
   - Use test keys from _Developers > API keys_

### 🛡️ Security Best Practices

- Never commit `.env.local` to version control — add it to `.gitignore`.
- Use environment variable settings on your host (e.g., Vercel, Netlify) for production.
- Always use test credentials in development and rotate secrets regularly.

---

## 📬 Contact

For questions or suggestions, feel free to open an issue or contact us via the live demo.

---

## 📄 License

Licensed under the MIT License.
