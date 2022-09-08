import { Route } from "react-router-dom";
import Home from "./views/home";
import Gallery from "./views/Gallery";
import roadmap from "./views/roadmap";
import MainLayout from "./layouts/main";

function App() {
  return (
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/roadmap" exact component={roadmap} />
    </MainLayout>
  );
}

export default App;