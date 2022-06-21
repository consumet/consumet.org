import { RedocStandalone } from 'redoc';

function App() {
  return (
    <RedocStandalone specUrl="http://petstore.swagger.io/v2/swagger.json" />
  );
}

export default App;
