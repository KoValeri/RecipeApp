import AuthForm from "@/components/Auth/AuthForm.jsx";
import '@/components/Auth/AuthForm.css'

export default function LoginPage() {
  return (
    <main className="auth-page__container">
      <AuthForm type="login" />
    </main>
  );
}
