const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BASE_API_URL
    : process.env.REACT_APP_PROD_BASE_API_URL;
const Menus = {
  Company: {
    icon: "panorama_fish_eye",
    link: "/company",
  },
};

const Apis = {
  // User
  GetAllUser: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  Createuser: 'http://localhost:8000/Users',
  EditUser: 'http://localhost:8000/Users',
  UpdateUser: 'http://localhost:8000/Users',
  RemoveUser: 'http://localhost:8000/Users',
  UserActiveDeactive: 'http://localhost:8000/Users',

  // Banner
  GetAllBanner: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  CreateBanner: 'http://localhost:8000/Users',
  EditBanner: 'http://localhost:8000/Users',
  UpdateBanner: 'http://localhost:8000/Users',
  RemoveBanner: 'http://localhost:8000/Users',
  BannnerActiveDeactive: 'http://localhost:8000/Users',

  // CMS
  GetAllCMS: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  CreateCMS: 'http://localhost:8000/Users',
  EditCMS: 'http://localhost:8000/Users',
  UpdateCMS: 'http://localhost:8000/Users',
  RemoveCMS: 'http://localhost:8000/Users',
  CMSActiveDeactive: 'http://localhost:8000/Users',

  // tax
  GetAllTaxs: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  Createuser: 'http://localhost:8000/Users',
  EditUser: 'http://localhost:8000/Users',
  UpdateUser: 'http://localhost:8000/Users',
  RemoveUser: 'http://localhost:8000/Users',
  TaxActiveDeactive: 'http://localhost:8000/Users',

  // Category
  GetAllCategoies: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  CreateCategory: 'http://localhost:8000/Users',
  EditCategory: 'http://localhost:8000/Users',
  UpdateCategory: 'http://localhost:8000/Users',
  RemoveCategory: 'http://localhost:8000/Users',
  CategoryActiveDeactive: 'http://localhost:8000/Users',

  // Product
  GetAllProduct: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  CreateProduct: 'http://localhost:8000/Users',
  EditProduct: 'http://localhost:8000/Users',
  UpdateProduct: 'http://localhost:8000/Users',
  RemoveProduct: 'http://localhost:8000/Users',
  ProductActiveDeactive: 'http://localhost:8000/Users',

  // Dynamic Message
  GetAllDM: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  CreateDM: 'http://localhost:8000/Users',
  EditDM: 'http://localhost:8000/Users',
  UpdateDM: 'http://localhost:8000/Users',
  RemoveDM: 'http://localhost:8000/Users',
  DMActiveDeactive: 'http://localhost:8000/Users',

  // General Setting
  GetAllGS: 'http://localhost:8000/Users',// `${API_URL}/api/auth/register`,
  CreateGS: 'http://localhost:8000/Users',
  EditGS: 'http://localhost:8000/Users',
  UpdateGS: 'http://localhost:8000/Users',
  RemoveGS: 'http://localhost:8000/Users',
  GSActiveDeactive: 'http://localhost:8000/Users',

};
export { API_URL, Apis, Menus };

