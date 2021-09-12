import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const addBtn = document.querySelector('.add-button');
const ctnBtn = document.querySelector('.continue-btn');
const installBackdrop = document.querySelector('.install-backdrop');
const installModal = document.querySelector('.install-modal');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {

  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  installModal.style.display = 'block';
  installBackdrop.style.display = 'block';

  ctnBtn.addEventListener('click', () => {
    installModal.style.display = 'none';
    installBackdrop.style.display = 'none';
  });

  addBtn.addEventListener('click', () => {

    // hide our user interface that shows our A2HS button
    installModal.style.display = 'none';
    installBackdrop.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
