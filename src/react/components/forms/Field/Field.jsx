import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "../../inputs/Input/Input";
import { Label } from "../Label/Label";
import { Textarea } from "../Textarea/Textarea";
import styles from "./Field.module.scss";
import stylesInput from "../../inputs/Input/Input.module.scss";

export const Field = ({
  id,
  label,
  type,
  onChange,
  setFormData,
  ...inputAttributes
}) => {
  if (type === "checkbox")
    return (
      <div className={`${styles.wrapper} ${styles.checkbox}`}>
        <Input type={type} id={id} {...inputAttributes} readOnly />
        <span
          onClick={() => {
            setFormData((prev) => {
              return {
                ...prev,
                acceptTerms: !prev.acceptTerms,
              };
            });
          }}
          className={stylesInput.checkboxEmulator}
        ></span>
        <Label isGray={true} id={id}>
          {label}
        </Label>
      </div>
    );

  if (type === "textarea")
    return (
      <div className={`${styles.wrapper} ${styles.big}`}>
        <Label id={id}>{label}</Label>
        <Textarea id={id} onChange={onChange} {...inputAttributes} />
      </div>
    );

  if (type === "tel")
    return (
      <div className={styles.wrapper}>
        <Label id={id}>{label}</Label>
        <PhoneInput
          country={"ua"}
          {...inputAttributes}
          inputProps={{
            name: "phoneNumber",
            required: true,
            autoFocus: true,
          }}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              phoneNumber: value,
            }))
          }
          inputClass={stylesInput.customInput}
          buttonClass="custom-flag"
          containerClass="custom-container"
        />
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Label id={id}>{label}</Label>
      <Input type={type} id={id} {...inputAttributes} onChange={onChange} />
    </div>
  );
};
