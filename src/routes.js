import CustomHeader from './components/CustomHeader.vue'
import CustomMain from './components/CustomMain.vue'
import CustomFooter from './components/CustomFooter.vue'


export default [{
    path: '/',
    component: CustomHeader
  },
  {
    path: '/main',
    component: CustomMain
  },
  {
    path: '/footer',
    component: CustomFooter
  }
]