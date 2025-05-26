import { Footer } from "./react/components/layouts/Footer/Footer";
import { Header } from "./react/components/layouts/Header/Header";
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
