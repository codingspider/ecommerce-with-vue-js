import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/Register';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/login',
        component: Login
    },
     {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
]