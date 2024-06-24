import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/users";
import Create from "./pages/create_users/create";
import Update from "./pages/update_users/update";



function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/criar_usuario" element={<Create/>} />
      <Route path="/atualizar_usuario" element={<Update/>}/>      
    </Routes>
  );
}

export default MainRoutes;