import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    // Temporary hardcoded item array to model cart data structure
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[
                {
                    id: 'c1',
                    name: 'The Great Gatsby',
                    amount: 2,
                    price: 14.99,
                },
            ].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$29.98</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;