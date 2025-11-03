import Dashboard from '../pages/Dashboard.vue'
import Webcam from '../pages/Webcam.vue'
import Farm from '../pages/Farm.vue'
import Console from '../pages/Console.vue'
import Files from '../pages/Files.vue'
import History from '../pages/History.vue'
import Timelapse from '../pages/Timelapse.vue'
import Machine from '../pages/Machine.vue'
import { AsyncComponent, Component } from 'vue'

// Create placeholder components for new routes
const Device = () => import('../pages/Device.vue')
const Method = () => import('../pages/Method.vue')
const Sequence = () => import('../pages/Sequence.vue')

import {
    mdiViewDashboard,
    mdiWebcam,
    mdiConsoleLine,
    mdiGrid,
    mdiFileDocumentMultipleOutline,
    mdiVideo3d,
    mdiHistory,
    mdiTimelapse,
    mdiCogOutline,
    mdiMemory,
    mdiFlaskEmptyPlusOutline,
    mdiPlaylistPlay,
} from '@mdi/js'

const routes: AppRoute[] = [
    {
        name: 'dashboard',
        title: 'Dashboard',
        path: '/',
        icon: mdiViewDashboard,
        component: Dashboard,
        alwaysShow: true,
        showInNavi: true,
        position: 10,
    },
    {
        name: 'device',
        title: 'Device',
        path: '/device',
        icon: mdiMemory,
        component: Device,
        alwaysShow: true,
        showInNavi: true,
        position: 15,
    },
    {
        name: 'method',
        title: 'Method',
        path: '/method',
        icon: mdiFlaskEmptyPlusOutline,
        component: Method,
        alwaysShow: true,
        showInNavi: true,
        position: 18,
    },
    {
        name: 'sequence',
        title: 'Sequence',
        path: '/sequence',
        icon: mdiPlaylistPlay,
        component: Sequence,
        alwaysShow: true,
        showInNavi: true,
        position: 22,
    },
    {
        name: 'farm',
        title: 'Printers',
        path: '/allPrinters',
        component: Farm,
        alwaysShow: false,
        showInNavi: false,
    },
    {
        name: 'webcam',
        title: 'Webcam',
        path: '/cam',
        icon: mdiWebcam,
        component: Webcam,
        alwaysShow: true,
        showInNavi: true,
        position: 20,
        fullscreen: true,
    },
    {
        name: 'console',
        title: 'Console',
        path: '/console',
        icon: mdiConsoleLine,
        component: Console,
        alwaysShow: false,
        showInNavi: false,
        klipperIsConnected: true,
        position: 30,
    },
    {
        name: 'heightmap',
        title: 'Heightmap',
        path: '/heightmap',
        icon: mdiGrid,
        component: () => import('../pages/Heightmap.vue'),
        alwaysShow: false,
        showInNavi: false,
        klipperComponent: 'bed_mesh',
        position: 40,
    },
    {
        name: 'gcodefiles',
        title: 'G-Code Files',
        path: '/files',
        icon: mdiFileDocumentMultipleOutline,
        component: Files,
        alwaysShow: false,
        showInNavi: false,
        registeredDirectory: 'gcodes',
        position: 50,
        fullscreen: true,
    },
    {
        name: 'gcodeviewer',
        title: 'G-Code Viewer',
        path: '/viewer',
        icon: mdiVideo3d,
        component: () => import('../pages/Viewer.vue'),
        alwaysShow: false,
        showInNavi: false,
        position: 60,
        fullscreen: true,
    },
    {
        name: 'history',
        title: 'History',
        path: '/history',
        icon: mdiHistory,
        component: History,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'history',
        position: 70,
    },
    {
        name: 'timelapse',
        title: 'Timelapse',
        path: '/timelapse',
        icon: mdiTimelapse,
        component: Timelapse,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'timelapse',
        position: 80,
    },
    {
        name: 'config',
        title: 'Config',
        path: '/config',
        icon: mdiCogOutline,
        component: Machine,
        alwaysShow: true,
        showInNavi: true,
        position: 90,
    },
    {
        title: null,
        component: null,
        alwaysShow: false,
        showInNavi: false,
        path: '/settings/machine',
        redirect: '/config',
    },
]

export default routes

export interface AppRoute {
    name?: string
    title: string | null
    path: string
    redirect?: string
    icon?: string
    component: Component | AsyncComponent | null
    alwaysShow: boolean
    showInNavi: boolean
    registeredDirectory?: string
    moonrakerComponent?: string
    klipperComponent?: string
    klipperIsConnected?: boolean
    children?: AppRoute[]
    position?: number
    fullscreen?: boolean
}
