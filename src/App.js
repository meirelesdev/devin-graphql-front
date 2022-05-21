import "./App.css";
import AppRoutes from "./routes";
import Provider from './api/Provider'

const App = () => {
  return (
    <Provider>
      <AppRoutes/>
    </Provider>
  )
}

export default App;
