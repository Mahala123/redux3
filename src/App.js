//import logo from './logo.svg';
//import './App.css';
//import Header from './components/LayOut/Header';
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import LayOut from "./components/LayOut/LayOut";
import Products from "./components/Product/Products";
import { UiActions } from "./components/Store/UI-slice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.carIsVisible);
  const cart = useSelector((state) => state.cart);
  const notify = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        UiActions.showNotification({
          status: "pending",
          title: "sending....",
          message: "sending cart data",
        })
      );
      const responce = await fetch(
        `https://test-43ef4-default-rtdb.firebaseio.com/test.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!responce.ok) {
        throw new Error("sending cart data failed..");
      }
      dispatch(
        UiActions.showNotification({
          status: "success",
          title: "Success",
          message: "sending cart data succesfully",
        })
      );
    };
    sendCartData().catch((err) => {
      dispatch(
        UiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notify && (
        <Notification
          status={notify.status}
          title={notify.title}
          message={notify.message}
        />
      )}
      <LayOut>
        {isVisible && <Cart />}
        <Products />
      </LayOut>
    </Fragment>
  );
}

export default App;
