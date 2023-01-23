import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div class="container-fluid">
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <span class="nav-link" ><Link to="/">Home</Link></span>
            </li>
            <li class="nav-item">
              <span class="nav-link" ><Link to="/artworks">Artworks</Link></span>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
    </div>
  )
};

export default Layout;