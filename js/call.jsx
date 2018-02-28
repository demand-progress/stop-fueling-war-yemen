// Modules
const React = require('react');
const ReactDOM = require('react-dom');
import App from './containers/App.jsx'
// Checking for outdated browsers
(() => {
    const isIE = navigator.userAgent.match(/MSIE (\d+)\./);
    if (isIE) {
        const version = +isIE[1];
        if (version < 10) {
            alert('Unfortunately your browser, Internet Explorer ' + version + ', is not supported.\nPlease visit the site with a modern browser like Firefox or Chrome.\nThanks!');
        }
    }

    if (/Android 2\.3/.test(navigator.userAgent)) {
        alert('Unfortunately your browser, Android 2.3, is not supported.\nPlease visit the site with a modern browser like Firefox or Chrome.\nThanks!');
    }
})()
//need to change back to no include Route 
//only need to send up both components to app 
ReactDOM.render((
     <div>
       <App/>
     </div>
     ),
     document.getElementById('root')
);