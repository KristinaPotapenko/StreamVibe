import { useState } from "react";
import { Modal } from "../../../popups/Modal/Modal";
import { SectionTitle } from "../../../components/Section/SectionTitle/SectionTitle";
import { Field } from "../../../components/forms/Field/Field";
import { Button } from "../../../components/ui/Button/Button";
import styles from "./SupportForm.module.scss";

export const SupportForm = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    acceptTerms: false,
  });

  const handleOnChange = ({ target }) => {
    const { name, type, value, checked } = target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.entries(formData).every(([key, value]) => {
      if (key === "message") return true;
      if (typeof value === "string") return value.trim() !== "";
      return Boolean(value);
    });

    if (!isFormValid) return;

    setFormStatus("submitting");
    // Logic for send formData to server
    setFormStatus("submit");
    setShowModal(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      acceptTerms: false,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          {formStatus === "submit" ? (
            <SectionTitle title="Your message has been sent!" />
          ) : (
            <h2 className={styles.message + " " + styles.error}>
              Oops! Something went wrong while sending your message. Please try
              again later.
            </h2>
          )}
        </Modal>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field
          id="firstName"
          label="First Name"
          placeholder="Enter First Name"
          name="firstName"
          value={formData.firstName}
          type="text"
          onChange={handleOnChange}
          required
        />
        <Field
          id="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
          name="lastName"
          value={formData.lastName}
          type="text"
          onChange={handleOnChange}
          required
        />
        <Field
          id="email"
          label="Email"
          placeholder="Enter your Email"
          name="email"
          value={formData.email}
          type="email"
          onChange={handleOnChange}
          required
        />
        <Field
          id="phoneNumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          type="tel"
          onChange={handleOnChange}
          setFormData={setFormData}
          required
        />
        <Field
          id="message"
          label="Message"
          placeholder="Enter your Message"
          name="message"
          value={formData.message}
          type="textarea"
          onChange={handleOnChange}
        />
        <Field
          id="acceptTerms"
          label="I agree with Terms of Use and Privacy Policy"
          name="acceptTerms"
          checked={formData.acceptTerms}
          type="checkbox"
          setFormData={setFormData}
          required
        />
        <Button type="submit" disabled={formStatus === "submitting"}>
          {formStatus === "submitting" ? "Submitting..." : "Send Message"}
        </Button>
      </form>
    </>
  );
};
