import dynamic from 'next/dynamic';
import Link from 'next/link';
import LoginForm from './components/LoginForm';

// Dynamically import components that need browser APIs
const GoogleLogin = dynamic(
  () => import('@components/GoogleLogin/GoogleLogin'),
  { ssr: false }
);

const LottieLogin = dynamic(
  () => import('./components/LottieLogin'),
  { ssr: false }
);

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] mt-36 mb-14">
        <div className="md:flex w-full mx-auto overflow-hidden border-2 rounded-lg shadow-lg lg:max-w-4xl">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-xl text-center font-bold text-gray-600">
              Welcome back!
            </p>
            
            <GoogleLogin />

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>
              <div className="text-xs text-center text-gray-500 uppercase">
                or login with email
              </div>
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <LoginForm />

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">Don&apos;t have account? </p>
              <Link href="register">
                <p className="font-bold text-blue-500 hover:underline uppercase">
                  Register
                </p>
              </Link>
            </div>
          </div>
          
          <LottieLogin />
        </div>
      </div>
    </>
  );
}