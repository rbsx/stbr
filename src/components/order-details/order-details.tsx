import styles from "./order-details.module.css";
import doneImg from "../../images/done.svg";

type TOrderDetailsProps = {
  orderNumber: number;
};

const OrderDetails: React.FC<TOrderDetailsProps> = ({ orderNumber }) => {
  return (
    <>
      <h2
        className={`${styles.title} text text_type_digits-large mt-2 mb-4`}
        data-cy="order-number"
      >
        {orderNumber}
      </h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img
        className={styles.img}
        src={doneImg}
        alt="изображение статуса заказа."
      />
      <p className="text text_type_main-default mb-1">
        Ваш заказ начали готовить
      </p>
      <p className={`${styles.text} text text_type_main-default`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
