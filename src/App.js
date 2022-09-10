import { Route } from "react-router-dom";
import Home from "./views/home";
import Gallery from "./views/Gallery";
import Roadmap from "./views/roadmap";
import MainLayout from "./layouts/main";
import Blockchain from "./views/Gallery/Category-B";

function App() {
  return (
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/Gallery" exact component={Gallery} /> 
      <Route path="/gallery/blockchain" exact component={Blockchain} />
     <Route path="/Roadmap" exact component={Roadmap} />
    </MainLayout>
  );
}

export default App;