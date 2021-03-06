import {
  GET_ALL_ORDERS_FROM_API,
  GET_ONE_ORDER_FROM_API,
  GET_ALL_USER_ORDERS,
  GET_ORDER_STATUS_FROM_API,
  MODIFY_ONE_ORDER,
  getOneOrder,
  saveOrderStatus,
  saveAdminOrders,
  adminOrdersLoading,
  saveOneOrder,
  saveAllUserOrders,
  setOrderLoading,
} from 'src/actions';
import axios from 'axios';

const getOrders = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_FROM_API: {
      store.dispatch(adminOrdersLoading(true));
      const { token } = store.getState().auth; // admin token needed
      axios.get('https://switchecommerce.herokuapp.com/v1/orders', { headers: { Authorization: `Bearer ${token}` } })
        .then(
          (response) => {
            const orders = response.data;
            store.dispatch(saveAdminOrders(orders));
            store.dispatch(adminOrdersLoading(false));
          },
        ).catch((err) => console.log(err))
        .finally();
    }
      break;
    case GET_ONE_ORDER_FROM_API:
      store.dispatch(setOrderLoading(true));
      axios.get(`https://switchecommerce.herokuapp.com/v1/order/${action.id}`)
        .then(
          (response) => {
            // formating the answer the way i prefer in my store
            const order = {
              ...response.data[0],
              address: { ...response.data[0].address[0] },
            };
            store.dispatch(saveOneOrder(order));
            store.dispatch(setOrderLoading(false));
          },
        ).catch((err) => {
          console.log(err);
          action.history.push('/error');
          store.dispatch(setOrderLoading(false));
        });
      break;
    case GET_ALL_USER_ORDERS: {
      const { id } = store.getState().auth.user;

      // id in the token is checked in back to get the order only if user is the owner.
      const { token } = store.getState().auth;
      axios.get(`https://switchecommerce.herokuapp.com/v1/user-orders/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(
          (response) => {
            const orders = response.data;
            store.dispatch(saveAllUserOrders(orders));
          },
        ).catch((err) => {
          console.log(err);
        }); }
      break;

    case MODIFY_ONE_ORDER: {
      store.dispatch(setOrderLoading(true));
      const { order } = store.getState().order;
      const { token } = store.getState().auth; // admin token needed
      axios.put(`https://switchecommerce.herokuapp.com/v1/order/${order.id}`, {
        status_name: action.status,
        tracking_number: action.tracking,
      }, { headers: { Authorization: `Bearer ${token}` } }).then(
        (response) => {
          /* after modifing the order ,
          i dispatch action to get this order from api,
          then the useEffect will run and render the page with the modified order ,
           from the api (to be sure the modifying has been done ) */
          store.dispatch(getOneOrder(order.id));
          store.dispatch(setOrderLoading(false));
        },
      )
        .catch((err) => console.log(err));
    }
      break;

    case GET_ORDER_STATUS_FROM_API:
      // then we can put only existing status to the order we want to modify
      axios.get('https://switchecommerce.herokuapp.com/v1/status')
        .then((response) => {
          const status = response.data;
          store.dispatch(saveOrderStatus(status));
        });
      break;
    default:
      next(action);
  }
};

export default getOrders;
