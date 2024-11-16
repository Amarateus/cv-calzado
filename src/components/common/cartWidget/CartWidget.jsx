import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./cartWidget.module.css";

const CartWidget = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contador}>3</div>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default CartWidget;
