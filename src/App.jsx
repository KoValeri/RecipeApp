import { ReduxProvider } from "@/providers/ReduxProvider";
import AppRouter from "@/router/AppRouter";
import './App.css';

function App() {
  return (
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>
  )
}

export default App;
