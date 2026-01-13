import RecipeList from "@/components/Recipe/RecipeList";
import { Link } from "react-router-dom";
import { ROUTES } from "@/configs/routesConfig";

export default function PublickPage() {
  return (
    <main>
        <h1>Hello! This is a website about recipes.</h1>
        <p>Please log in to watch it.</p>
        <Link to={ROUTES.LOGIN}>Go to Login</Link>
    </main>
  );
}