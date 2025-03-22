import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { SaveUser, List } from "../pages"

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/save-user" element={<SaveUser />} />
        <Route path="/" element={<List />} />

        <Route path="/*" element={<Navigate to="/list" />} />
      </Routes>
    </BrowserRouter>
  )
}
