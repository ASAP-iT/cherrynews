import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from "../views/Post.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreatePost from "../views/CreatePost.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/post',
    name: 'Redirecting...',
    redirect: { name: "Home" },
    component: Post,
    children: [{
        name: "Post",
        path: ":id",
        component: Post,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/create-post',
    name: 'Create Post',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
