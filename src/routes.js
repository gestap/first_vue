import Home from './components/pages/Home.vue'
import Category from './components/pages/Category.vue'
import Services from './components/pages/Services.vue'
import ContactUs from './components/pages/ContactUs.vue'


export default [{
    path: '/',
    component: Home
  },
  {
    path: '/category/:categoryName',
    component: Category
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/contact_us',
    component: ContactUs
  }
]