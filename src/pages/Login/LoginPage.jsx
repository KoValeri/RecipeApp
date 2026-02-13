import AuthForm from "@/components/Auth/AuthForm.jsx";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <AuthForm type="login" />
    </main>
  );
}
