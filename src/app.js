console.log('App.js is runing!');

const app = {
  title: 'Indecision App',
  subtitle: 'Hey, this is my first app ;)',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    appRender();
  }
};

const onRemoveAll = () => {
  app.options = [];
  appRender();
};

const appRoot = document.getElementById('app');

const appRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>      
      <ol>
        <li>One</li>
        <li>Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

appRender();
