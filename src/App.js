import "./App.css";
import headerImg from "./img/filler_img.jpg";

function App() {
  return (
    <div className="Cool Cut">
      <header>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <h2>Cool Cut Frisørsalong</h2>
          </a>
        </nav>
      </header>
      <div id="body">
        <div className="container-fluid bg-info p-5 text-white">
            <h1 className="d-flex justify-content-center">Feriestengt</h1>
          <div id="feriestengt">
            <h3>Stengt fra</h3>
            <h3>3. juli til 5. august - endre teksten her</h3>
          </div>
        </div>
        <div className="container-fluid p-4">
          <img id="header-img" className="img-fluid" src={headerImg} alt="Bilde" />
          <br />
          <br /> {/** Temporary breaks, fix with css styling */}
          <h1>Prisliste</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Behandling</th>
                <th scope="col">Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Enkel hårklipp</th>
                <td>kr 149</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <h2>Åpingstider</h2>
          <ul id="opening-times" className="list-group list-group-flush my-4">
            <li className="list-group-item">Mandag - 10:00-17:00</li>
            <li className="list-group-item">Tirsdag - 10:00-17:00</li>
            <li className="list-group-item">Onsdag - Stengt</li>
            <li className="list-group-item">Torsdag - 10:00-17:00</li>
            <li className="list-group-item">Fredag - 10:00-17:00</li>
            <li className="list-group-item">Lørdag - 10:00-15:00</li>
            <li className="list-group-item">Søndag - Stengt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
