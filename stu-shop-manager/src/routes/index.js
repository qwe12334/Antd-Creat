import Login from '../pages/Login'
import Index from '../pages/admin/dashboard/Index'
import List from '../pages/admin/products/List'
import Edit from '../pages/admin/products/Edit'

export const mainRoutes = [{
    path: '/login',
    component: Login
}];

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: "看板",
    icon:"AlipaySquareFilled"
}, {
    path: '/admin/products',
    component: List,
    isShow: true,
    exact: true,
    title: "商品管理",
    icon:"WechatOutlined"
}, {
    path: '/admin/products/edit/:id',
    component: Edit,
    isShow: false
}];