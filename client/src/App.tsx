import { Switch, Route } from "wouter";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Changelog from "./pages/Changelog";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/changelog" component={Changelog} />
          <Route path="/terms" component={Terms} />
          <Route path="/disclaimer" component={Disclaimer} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
