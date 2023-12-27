import CreateBlog from "../router/admin/create-blog/CreateBlog";
import CreateProduct from "../router/admin/createProduct/CreateProduct";
import ManageBlog from "../router/admin/manage-blog/ManageBlog";
import ManageProduct from "../router/admin/manageProduct/ManageProduct";

export const ADMIN__ROUTES =[
    {
        title: "Create-product",
        link:"create-product",
        element: <CreateProduct/>
    },
    {
        title: "Manage-product",
        link:"manage-product",
        element: <ManageProduct/>
    },
    {
        title: "Create-blog",
        link:"create-blog",
        element: <CreateBlog/>
    },
    {
        title: "Manage-blog",
        link:"manage-blog",
        element: <ManageBlog/>
    },
]