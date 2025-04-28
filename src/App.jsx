import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Contact, { contactData } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import GetData from './api/GetData';
import getData from './api/GetData';
import MovieDetails from './components/UI/MovieDetails';
import getMovieDetails from './api/getMoviesDetails';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage /> ,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: getData,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: '/contact',
          element: <Contact />,
          action: contactData,
        }
      ]
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;