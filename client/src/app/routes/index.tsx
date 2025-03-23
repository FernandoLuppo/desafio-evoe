import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { SaveUser, List } from "../pages"
import { User } from "../pages/user"

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/save-user" element={<SaveUser />} />
        <Route path="/save-user/:id" element={<SaveUser />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/" element={<List />} />

        <Route path="/*" element={<Navigate to="/list" />} />
      </Routes>
    </BrowserRouter>
  )
}
