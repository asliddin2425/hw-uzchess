import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { RootPage } from './src/features/common/pages/RootPages'
import { NewsPage } from './src/features/news/pages/NewsPage'
import { MainPage } from './src/features/main/pages/MainPage'
import { CoursesPage } from './src/features/courses/pages/CoursesPage'
import { LibraryPage } from './src/features/library/pages/LibraryPage'
import { CartPage } from './src/features/cart/pages/CartPage'
import { RatingPAge } from './src/features/rating/page/RatingPage'
import { ProfilePage } from './src/features/profile/pages/ProfilePage'
import { OrdersPage } from './src/features/profile/components/OrdersPage'

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootPage />, 
        children: [
            { path: '', element: <MainPage/> },
            { path: 'news', element: <NewsPage /> },
            { path: 'courses', element: <CoursesPage /> },
            { path: 'library', element: <LibraryPage /> },
            { path: 'cart', element: <CartPage /> },
            { path: 'reyting', element: <RatingPAge/>},
            {
                path: 'profile', 
                element: <ProfilePage />, 
                children: [
                    { path: 'orders', element: <OrdersPage /> }
                ],
            }
        ]
    }
])
export function App() { 
    return (
        <RouterProvider router={router } />
    )
}