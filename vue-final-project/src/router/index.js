import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Customer from '../components/Customer.vue';
import MenuItem from '../components/MenuItem.vue';
import Order from '../components/Order.vue';
import OrderDetail from '../components/OrderDetail.vue';
import PaymentTransaction from '../components/PaymentTransaction.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuItem,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Order,
    },
    {
      path: '/order_details',
      name: 'order_details',
      component: OrderDetail,
    },
    {
      path: '/payment_transactions',
      name: 'payment_transactions',
      component: PaymentTransaction,
    }
  ]
})

export default router
