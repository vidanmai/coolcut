import "./App.css";
import headerImg from "./img/filler_img.jpg";
import { openingTimes } from "./openingTimes";

function App() {
  const renderOpeningTimesTable = () => {
    const currentDayOfWeek = new Date().getDay();
    return (
        <div className="responsive-table-sm">
          <table className="table table-dark" id="opening-times">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Åpner</th>
              <th scope="col">Stenger</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(openingTimes).map(([day, times], index) => (
              <tr key={index}>
                <th
                  scope="row"
                  className={currentDayOfWeek === index+1 ? "highlighted" : ""}
                >
                  {day}
                </th>
                <td className={currentDayOfWeek === index+1 ? "highlighted" : ""}>{times.opening}</td>
                <td className={currentDayOfWeek === index+1 ? "highlighted" : ""}>{times.closing}</td>
              </tr>
            ))}
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
          <div className="splitGrid">
            <section id="img-section" className="my-auto">
              <img
                id="header-img"
                className="img-fluid"
                src={headerImg}
                alt="Bilde"
              />
            </section>
            <section id="openingTimesSection" className="m-auto w-100">
              <div>{renderOpeningTimesTable()}</div>
            </section>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
