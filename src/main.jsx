import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { router } from "./router/index.jsx"

import "./styles/global.css";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)
