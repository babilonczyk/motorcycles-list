import ReactOnRails from 'react-on-rails';

import App from '../bundles/Motorcycles/containers/App';
import MotorcyclesNavbar from "../bundles/Motorcycles/components/MotorcyclesNavbar";
import Form from "../bundles/Motorcycles/containers/Form";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
    App,
    MotorcyclesNavbar,
    Form
});
