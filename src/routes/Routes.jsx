import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Collages from '../pages/Collages/Collages'
import CollageDetails from '../pages/CollageDetails/CollageDetails'
import { getCollage } from '../api/collages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/collages",
        element: <Collages></Collages>
      },
      {
        path: "collages/:id",
        element: <CollageDetails></CollageDetails>,
        loader: ({ params }) => getCollage(params.id)
      }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },


])
