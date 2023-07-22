import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Collages from '../pages/Collages/Collages'
import CollageDetails from '../pages/CollageDetails/CollageDetails'
import { getCollage } from '../api/collages'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import PrivateRoute from './PrivateRoute'
import AdmissionPage from '../pages/AdmissionPage/AdmissionPage'
import AdmissionForm from '../pages/AdmissionPage/AdmissionForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>,
        loader: ({ params }) => getCollage(params.id)
      },
      {
        path: "/admission",
        element: <AdmissionPage></AdmissionPage>
      },
      {
        path: "admission/:id",
        element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>,
        loader: ({ params }) => getCollage(params.id)
      }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },


])
