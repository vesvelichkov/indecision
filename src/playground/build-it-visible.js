const appRoot = document.getElementById('app');

let showDetails = false;

const toggleDetails = () => {
  showDetails = !showDetails;
  render();
};

const render = () => {
  const jsxTemplate = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{showDetails ? 'Hide details' : 'Show details'}</button>
      {showDetails && (<p>Hey, hey, hey! No f****** way!</p>)}
    </div>
  );
  ReactDOM.render(jsxTemplate, appRoot);
};

render();
