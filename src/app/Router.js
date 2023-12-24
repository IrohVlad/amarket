import {createRouter, createWebHashHistory} from 'vue-router'
import railwayPage from '../pages/railwayPage/railwayPage.vue'
import autoPage from '../pages/autoPage/autoPage.vue'
import seaPage from '../pages/seaPage/seaPage.vue'
import servicesPage from '../pages/servicesPage/servicesPage.vue'
import storagePage from '../pages/storagePage/storagePage.vue'
import customsPage from '../pages/customsPage/customsPage.vue'
import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'
import AuthMain from '../pages/auth/AuthMain.vue'
import AuthComplete from '../pages/auth/AuthComplete.vue'
import RegMain from '../pages/auth/RegMain.vue'
import RegInfo from '../pages/auth/RegInfo.vue'
import RegComplete from '../pages/auth/RegComplete.vue'
import contacts from '../pages/contacts/contacts.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: home},
        {path: '/about', component: about},
        {path: '/services', component: servicesPage},
        {path: '/services/auto', component: autoPage},
        {path: '/services/railway', component: railwayPage},
        {path: '/services/sea', component: seaPage},
        {path: '/services/storage', component: storagePage},
        {path: '/services/customs', component: customsPage},
        {path: '/auth', component: AuthMain},
        {path: '/auth/complete', component: AuthComplete},
        {path: '/reg', component: RegMain},
        {path: '/reginfo', component: RegInfo},
        {path: '/regcomplete', component: RegComplete},
        {path: '/contacts', component: contacts},
    ]
})