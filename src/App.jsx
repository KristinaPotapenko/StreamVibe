import { Header } from "./react/components/layouts/Header/Header";
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
