import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useState } from "react";
import ModalDelete from "../Modal/ModalDelete";

const Contact = ({ contacts: { name, number, id } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatNumber = (inputNumber) => {
    const pattern = /(\d{3})(\d{2})(\d{2})/;
    const formatedNumber = inputNumber.replace(pattern, "$1-$2-$3");
    return formatedNumber;
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.item}>
      <div className={css.paragraph}>
        <p className={css.paragraphName}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.user} />
          {formatNumber(number)}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleOpen}>
        Delete
      </button>
      <ModalDelete isOpen={isOpen} onClose={handleClose} contactId={id} />
    </div>
  );
};

export default Contact;