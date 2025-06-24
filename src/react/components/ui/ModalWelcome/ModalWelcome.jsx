import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticationGuestSession } from "../../../../features/authentication/guestAuthenticationSlice";
import {
  getRequestToken,
  setAccountType,
} from "../../../../features/authentication/userAuthenticationSlice";
import { Modal } from "../../../popups/Modal/Modal";
import { SectionTitle } from "../../Section/SectionTitle/SectionTitle";
import { Button } from "../Button/Button";
import styles from "./ModalWelcome.module.scss";

export const ModalWelcome = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const requestToken = useSelector(
    ({ userAuthentication }) => userAuthentication.requestToken
  );

  const origin = window.location.origin;

  const onGuestClick = () => {
    dispatch(getAuthenticationGuestSession());
    dispatch(setAccountType("guest"));
    localStorage.setItem("accountType", "guest");
    setShowModal(false);
  };

  const onLoginClick = () => {
    dispatch(getRequestToken());
  };

  useEffect(() => {
    if (requestToken) {
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${origin}/authentication`;
      setShowModal(false);
    }
  }, [requestToken]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal onClose={handleCloseModal}>
      <SectionTitle className={styles.title} title="Welcome!" />
      <p className={styles.description}>
        Please choose how you'd like to continue:
      </p>
      <div className={styles.buttons}>
        <Button isDark={true} onClick={onGuestClick}>
          Start as Guest
        </Button>
        <Button onClick={onLoginClick}>Log in</Button>
      </div>
    </Modal>
  );
};
