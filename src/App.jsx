import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppRoutes } from "./Routes/AppRoutes";
import { Footer } from "./react/components/layouts/Footer/Footer";
import { Header } from "./react/components/layouts/Header/Header";
import { ModalWelcome } from "./react/components/ui/ModalWelcome/ModalWelcome";
import { Loader } from "./react/popups/Loader/Loader";

function App() {
  const accountType = useSelector(
    ({ userAuthentication }) => userAuthentication.accountType
  );
  const [showModal, setShowModal] = useState(false);

  const isLoading = useSelector(({ appStatus }) => appStatus.isLoading);

  useEffect(() => {
    if (accountType === null) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [accountType]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="wrapper">
        {showModal && (
          <ModalWelcome showModal={showModal} setShowModal={setShowModal} />
        )}
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
