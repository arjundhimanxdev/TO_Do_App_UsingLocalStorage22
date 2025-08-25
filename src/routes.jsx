import { Suspense } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages"
import { HomeLayoutPage } from "./layout"


const AppRoutes = () => {
  return (
    <Suspense
         fallback={<div className="text-red">Loading</div>}>
            <Routes>

                <Route element={<HomeLayoutPage/>}>
                   <Route path="/" element={<HomePage/>}/>
                </Route>

                <Route path="*" element={<Navigate to="/" replace/>}/>

            </Routes>
         </Suspense>
  )
}

export default AppRoutes