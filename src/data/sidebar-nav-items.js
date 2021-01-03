export default function () {
  return [
    {
      title: "Dashboards",
      items: [
        {
          title: "Analytics",
          to: "/analytics",
          htmlBefore: '<i class="material-icons">&#xE917;</i>',
          htmlAfter: ""
        }
        // {
        //   title: 'Online Store',
        //   to: '/ecommerce',
        //   htmlBefore: '<i class="material-icons">&#xE8D1;</i>',
        //   htmlAfter: '',
        // }, {
        //   title: 'Personal Blog',
        //   to: '/blog-overview',
        //   htmlBefore: '<i class="material-icons">edit</i>',
        //   htmlAfter: '',
        // }
      ]
    },
    {
      //title: "User and Customer",
      items: [
        {
          title: "User & Customer",
          htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
          open: false,
          items: [
            {
              title: "User",
              to: "/userlist"
            },
            {
              title: "Customer",
              to: "/customerlist"
            }
          ]
        }
      ]
    },
    {
      //title: "Catelog",
      items: [
        {
          title: "Catelog",
          htmlBefore: '<i class="material-icons">assessment</i>',
          open: false,
          items: [
            {
              title: "Category",
              to: "/categorylist"
            },
            {
              title: "Product",
              to: "/productlist"
            },
            ,
            {
              title: "Shipping Charge",
              to: "/shippinglist"
            },
            {
              title: "Product Attribute",
              to: "/attributeList"
            },
            {
              title: "Tax",
              to: "/taxlist"
            },
            {
              title: "Discount Code",
              to: "/discodelist"
            }
          ]
        }
      ]
    },
    {
      //title: "Sales",
      items: [
        {
          title: "Sales",
          htmlBefore: '<i class="material-icons">add_shopping_cart</i>',
          open: false,
          items: [
            {
              title: "Customer Order",
              to: "/customerorder"
            }
          ]
        }
      ]
    },
    {
      //title: "Content Management",
      items: [
        {
          title: "Content Management",
          htmlBefore: '<i class="material-icons">content_copy</i>',
          open: false,
          items: [
            {
              title: "CMS",
              to: "/cmslist"
            },
            {
              title: "Banner",
              to: "/bannerlist"
            }
          ]
        }
      ]
    },

    {
      //title: "Settings",
      items: [
        {
          title: "Settings",
          htmlBefore: '<i class="material-icons">settings</i>',
          open: false,
          items: [
            {
              title: "Dynamic Message",
              to: "/dyanmicmessagelist"
            },
            {
              title: "Site Configuration",
              to: "/SiteConfiguration"
            },

          ]
        }
      ]
    }
  ];
}
