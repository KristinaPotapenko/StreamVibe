import { useState } from "react";
import { Field } from "../../../components/forms/Field/Field";
import { Button } from "../../../components/ui/Button/Button";
import styles from "./SupportForm.module.scss";

export const SupportForm = () => {
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

  return (
    <form className={styles.form}>
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
      <Button type="submit">Send Message</Button>
    </form>
  );
};
