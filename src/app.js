// console.log(`app.js is now runing`);

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the truth!</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>Option</li>
          <li>Another option</li>
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="option" placeholder="Your option" />
        <button>Add Option</button>
      </form>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);
