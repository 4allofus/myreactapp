import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import SearchMovies from "./SearchMovies"
import * as serviceWorker from './serviceWorker'


class MainWindow extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search - powered by <a href="https://www.themoviedb.org">themoviedb.org</a></h1>
        <SearchMovies />
      </div>
    );
  }
}

ReactDOM.render(<MainWindow />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
