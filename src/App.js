import "./App.css";
import headerImg from "./img/filler_img.jpg";

function App() {
  const renderOpeningTimesTable = () => {
    const currentDayOfWeek = new Date().getDate();
    const weekDays = [
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lørdag",
      "Søndag",
    ];
    //TODO:
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Åpner</th>
              <th scope="col">Stenger</th>
            </tr>
          </thead>
          <tbody>
              {weekDays.map((day, index) => (
                <th scope="row"
                  key={index}
                  className={currentDayOfWeek === index ? "highlighted" : ""}
                >
                  {day}
                </th>
              ))}
              <td>10:00</td>
              <td>17:00</td>
                {/* Add table data rows, TODO: need to do for each row, this one shits all out at once */}
            {/* Add more table data rows if needed */}
          </tbody>
        </table>
      </div>
    );
  };

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
        <div className="container-fluid p-5 text-white" id="ferieStengtHeader">
          <h1 className="d-flex justify-content-center">Feriestengt</h1>
          <div id="feriestengt">
            <h3>Stengt fra</h3>
            <h3>3. juli til 5. august - endre teksten her</h3>
          </div>
        </div>
        <div className="container p-4">
          <section id="img-section">
            <img
              id="header-img"
              className="img-fluid"
              src={headerImg}
              alt="Bilde"
            />
          </section>
          <br />
          <hr className="solid" />
          <br /> {/** Temporary breaks, fix with css styling */}
          <section id="price-list">
            <h1>Prisliste</h1>
            <table className="table table-hover my-4">
              <thead className="thead-dark">
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
                  <th scope="row">Hårklipp 2</th>
                  <td>kr 399</td>
                </tr>
                <tr>
                  <th scope="row">Hårklipp 3</th>
                  <td>kr 499</td>
                </tr>
              </tbody>
            </table>
          </section>
          <br />
          <hr className="solid" />
          <br />
          <section id="opening-times">
            <div className="shadow">
              {renderOpeningTimesTable()}
            </div>
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
