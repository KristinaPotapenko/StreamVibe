import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppRoutes } from "./Routes/AppRoutes";
import { Footer } from "./react/components/layouts/Footer/Footer";
import { Header } from "./react/components/layouts/Header/Header";
import { ModalWelcome } from "./react/components/ui/ModalWelcome/ModalWelcome";

function App() {
  const accountType = useSelector(
    ({ userAuthentication }) => userAuthentication.accountType
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (accountType === null) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [accountType]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="wrapper">
      {showModal && <ModalWelcome onClose={handleCloseModal} />}
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
