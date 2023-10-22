import {AuthProvider} from "./auth/context";
import {AppRouter} from "./router/AppRouter";
import "./styles.css";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
