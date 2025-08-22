import React from 'react';
import { StickyNavbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { RouterProvider, createBrowserRouter } from "react-router";
import { AboutPage } from './pages/AboutPage';
import { SerivcePage } from './pages/SerivcePage';
import { ProductPage } from './pages/ProductPage';
import { ProjectPage } from './pages/ProjectPage';
import { NewPage } from './pages/NewPage';
import { ContactPage } from './pages/ContactPage';
import { ProductsDetail } from './pages/ProductsDetail';
import { ChooseUsDetailPage } from './pages/ChooseUsDetailPage';
import { CatePage } from './pages/CatePage';


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,

      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: 'about-us',
      element: <AboutPage />,
    },
    {
      path: 'service',
      element: <SerivcePage />,
    },
    {
      path: 'products',
      element: <ProductPage />,
    },
    {
      path: 'products/:id',   // <-- added dynamic product detail route
      element: <ProductsDetail />,
    },
    {
      path: 'projects',
      element: <ProjectPage />,
    },
    {
      path: 'new',
      element: <NewPage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
    {
      path: 'choose-us-details',
      element: <ChooseUsDetailPage />,
    },
    {
      path: 'category/:id',
      element: <CatePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}