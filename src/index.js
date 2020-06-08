import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import './index.css';
//import './debug.css';
import './helper.css';
import * as serviceWorker from './serviceWorker';
import SearchMovies from './SearchMovies'


class MainWindow extends React.Component {
  render() {
    return (
        <div>
            <section className="hero is-fullheight">
          <div className="hero-head">
            <div className="columns is-mobile is-marginless">
              <div className="column">
                <App />
              </div>
              <div className="column">

              </div>
              <div className="column center has-text-white">
                <p>Dibuat dengan <strong className="has-text-white">REACT</strong> dan <strong className="has-text-white">Bulma</strong></p>
              </div>
            </div>

            <header className="hero-body">
              <div className="container is-overlay has-text-centered single-spaced" >
                <h1 className="subtitle is-2 has-text-white">React Movie Search</h1>
                <h2 className="title is-3 has-text-white">Powered by <a className="adjust_text_yellow" href="https://themoviedb.org">themoviedb.org</a></h2>
              </div>
            </header>

            <section className="section">
              <div className="container" id="root">
                <SearchMovies />

              </div>
            </section>

</div>
</section>
        </div>
    );
  }
}

/*
ReactDOM.render(
    <App />
,
  document.getElementById('logo')
);
*/

ReactDOM.render(<MainWindow />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
