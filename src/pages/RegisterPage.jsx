import AuthForm from "@/components/Auth/AuthForm.jsx";
import '@/components/Auth/AuthForm.css'

export default function RegisterPage() {
  return (
    <main className="auth-page__container">
      <AuthForm type="register" />
    </main>
  );
}
