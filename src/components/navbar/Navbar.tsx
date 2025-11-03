function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    
    handleLogout();
    ToastAlerta("O usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div
        className="w-full flex justify-center py-4
            bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            SoftFarma
          </Link>

          <div className="flex gap-4">
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;