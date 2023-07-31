import logo from './logo.svg';
import './App.css';
import YouTubeForm from './Components/YouTubeForm';
// import SimpleFormikForm from './Components/SimpleFormikForm';
import FormikForm2 from './Components/FormikForm2';
import FormikContainer from './Components/Formik-control/FormicContainer';
import { theme, ThemeProvider } from '@chakra-ui/react'
import ChakraInput from './Components/Formik-control/ChakraInput';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <YouTubeForm/> */}
      {/* <SimpleFormikForm/> */}
      {/* <FormikForm2/> */}
      <ChakraInput/>
      
      {/* <FormikContainer/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
