import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import {
  DefaultLayout,
  HeaderNavigation,
  IconSidebar,
  BlankLayouta
} from "./layouts";

// Route Views
import Analytics from "./views/Analytics";
import OnlineStore from "./views/OnlineStore";
import BlogOverview from "./views/BlogOverview";
import UserProfile from "./views/UserProfile";
import UserProfileLite from "./views/UserProfileLite";
import EditUserProfile from "./views/EditUserProfile";
import Login from "./views/Login";
import Role from "./views/Role";
import UserList from "./views/AdminAccount";
import SiteConfiguration from "./views/SiteConfiguration";
import CreateAccount from "./components/admin-account/CreateAccount";
import CMS from "./components/static-pages/staticpages";
import CMSList from "./components/static-pages/staticpagelist";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";
import ChangePassword from "./views/ChangePassword";
import FileManagerList from "./views/FileManagerList";
import FileManagerCards from "./views/FileManagerCards";
import TransactionHistory from "./views/TransactionHistory";
import Calendar from "./views/Calendar";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import HeaderNav from "./views/HeaderNavigation";
import IconSidebarView from "./views/IconSidebar";
import DyanmicMessage from "./components/dynamic-message/DyanmicMessage";
import DyanmicMessageList from "./components/dynamic-message/DyanmicMessageList";
import Banner from "./components/banner/banner";
// import Banner from "./views/Banner";
import Taxes from "./views/Taxes";
import ShippingView from "./views/ShippingView";
import CreateTaxes from "./components/Taxes/createTaxes";

import BannerList from "./components/banner/bannerList";
import ShipingChargesList from "./components/shipping/ShipingChargesList";
import CreateShipingCharges from "./components/shipping/CreateShipingCharges";
import CreateDiscountCode from "./components/discount-code/CreateDiscountCode";
import DiscountCodeList from "./components/discount-code/DiscountCodeList";
import Category from "./components/category/category";
import Categorylist from "./components/category/categorylist";
import Product from "./components/product/product";
import productlist from "./components/product/productlist";
import taxList from "./components/Taxes/taxList";

import Attribute from "./components/attribute/Attribute";
import AttributeList from "./components/attribute/AttributeList";
import CustomerList from "./views/CustomerAccount";
import CustomerOrder from "./views/CustomerOrder";
import CustomerDetail from "./components/customer-account/CustomerView";
import OrderView from "./components/customer-order/OrderView";


const BlankIconSidebarLayout = ({ children }) => (
  <IconSidebar noNavbar noFooter>
    {children}
  </IconSidebar>
);
const BlankLayout = ({ children }) => <BlankLayouta>{children}</BlankLayouta>;

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/analytics" />
  },
  {
    path: "/analytics",
    layout: DefaultLayout,
    component: Analytics
  },
  {
    path: "/ecommerce",
    layout: DefaultLayout,
    component: OnlineStore
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/edit-user-profile",
    layout: DefaultLayout,
    component: EditUserProfile
  },
  {
    path: "/login",
    layout: BlankLayout,
    component: Login
  },
  {
    path: "/role",
    layout: DefaultLayout,
    component: Role
  },
  {
    path: "/SiteConfiguration",
    layout: DefaultLayout,
    component: SiteConfiguration
  },
  {
    path: "/userlist",
    layout: DefaultLayout,
    component: UserList
  },
  {
    path: "/createuser",
    layout: DefaultLayout,
    component: CreateAccount
  },
  {
    path: "/edituser/:id",
    layout: DefaultLayout,
    component: CreateAccount
  },
  {
    path: "/bannerlist",
    layout: DefaultLayout,
    component: BannerList
  },
  {
    path: "/banner",
    layout: DefaultLayout,
    component: Banner
  },
  {
    path: "/taxeslist",
    layout: DefaultLayout,
    component: Taxes
  },
  {
    path: "/createshipp",
    layout: DefaultLayout,
    component: CreateShipingCharges
  },
  {
    path: "/shippinglist",
    layout: DefaultLayout,
    component: ShipingChargesList
  },
  {
    path: "/forgot-password",
    layout: BlankIconSidebarLayout,
    component: ForgotPassword
  },
  {
    path: "/change-password",
    layout: BlankIconSidebarLayout,
    component: ChangePassword
  },
  {
    path: "/file-manager-list",
    layout: DefaultLayout,
    component: FileManagerList
  },
  {
    path: "/file-manager-cards",
    layout: DefaultLayout,
    component: FileManagerCards
  },
  {
    path: "/transaction-history",
    layout: DefaultLayout,
    component: TransactionHistory
  },
  {
    path: "/calendar",
    layout: DefaultLayout,
    component: Calendar
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: BlankIconSidebarLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/header-navigation",
    layout: HeaderNavigation,
    component: HeaderNav
  },
  {
    path: "/icon-sidebar-nav",
    layout: IconSidebar,
    component: IconSidebarView
  },
  {
    path: "/categorylist",
    layout: DefaultLayout,
    component: Categorylist
  },
  {
    path: "/category",
    layout: DefaultLayout,
    component: Category
  },
  {
    path: "/editcategory/:id",
    layout: DefaultLayout,
    component: Category
  },
  {
    path: "/dyanmicmessagelist",
    layout: DefaultLayout,
    component: DyanmicMessageList
  },
  {
    path: "/dyanmicmessage",
    layout: DefaultLayout,
    component: DyanmicMessage
  },
  {
    path: "/editdyanmicmessage/:id",
    layout: DefaultLayout,
    component: DyanmicMessage
  },
  {
    path: "/productlist",
    layout: DefaultLayout,
    component: productlist
  },
  {
    path: "/product",
    layout: DefaultLayout,
    component: Product
  },
  {
    path: "/editproduct/:id",
    layout: DefaultLayout,
    component: Product
  },
  {
    path: "/cmslist",
    layout: DefaultLayout,
    component: CMSList
  },
  {
    path: "/CMS",
    layout: DefaultLayout,
    component: CMS
  },
  {
    path: "/editcms/:id",
    layout: DefaultLayout,
    component: CMS
  },
  {
    path: "/taxlist",
    layout: DefaultLayout,
    component: taxList
  },
  {
    path: "/createtaxes",
    layout: DefaultLayout,
    component: CreateTaxes
  },
  {
    path: "/edittaxes/:id",
    layout: DefaultLayout,
    component: CreateTaxes
  },
  {
    path: "/creatediscode",
    layout: DefaultLayout,
    component: CreateDiscountCode
  },
  {
    path: "/editdiscode/:id",
    layout: DefaultLayout,
    component: CreateDiscountCode
  },
  {
    path: "/discodelist",
    layout: DefaultLayout,
    component: DiscountCodeList
  },
  {
    path: "/createattribute",
    layout: DefaultLayout,
    component: Attribute
  },
  {
    path: "/editattribute/:id",
    layout: DefaultLayout,
    component: Attribute
  },
  {
    path: "/attributeList",
    layout: DefaultLayout,
    component: AttributeList
  },
  {
    path: "/customerorder",
    layout: DefaultLayout,
    component: CustomerOrder
  },
  {
    path: "/customerlist",
    layout: DefaultLayout,
    component: CustomerList
  },
  {
    path: "/customerdetail/:id",
    layout: DefaultLayout,
    component: CustomerDetail
  },
  {
    path: "/orderview/:id",
    layout: DefaultLayout,
    component: OrderView
  }
];
