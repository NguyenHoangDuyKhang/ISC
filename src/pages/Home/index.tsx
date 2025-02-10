import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Home() {
  const [cookies, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("user", { path: "/" });
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h2>Welcome to Home Page</h2>
        <p>Chào mừng bạn đã đăng nhập thành công!</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Home;
