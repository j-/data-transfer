import { render } from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
