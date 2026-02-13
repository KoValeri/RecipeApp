import AuthForm from "@/components/Auth/AuthForm.jsx";
import styles from './RegisterPage.module.css'

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <AuthForm type="register" />
    </main>
  );
}
