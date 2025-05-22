import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar.jsx'
import { privatePath, publicPath } from './RouterObj.jsx'

export const Router = () => {
    return (
        <Routes>
            {
                publicPath.map((val, i) =>
                    (<Route key={i} path={val.path} element={val.component} />)
                )
            }

            <Route element={<Navbar />}>
                {
                    privatePath.map((val, i) => (<Route key={i} path={val.path} element={val.component} />))
                }
            </Route>
        </Routes>
    )
}
