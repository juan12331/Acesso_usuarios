import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/users";
import Create from "./pages/create_users/create";
import Update from "./pages/update_users/update";
import Login from "./pages/login_adm/login"



function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/criar_usuario" element={<Create/>} />
      <Route path="/atualizar_usuario" element={<Update/>}/>      
    </Routes>
  );
}

export default MainRoutes;