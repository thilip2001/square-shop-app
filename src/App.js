import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import { useEffect, useState } from "react";
import ShippingScreen from "./screens/ShippingScreen";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  useEffect(() => {}, [token]);
  return (
    <Router>
      <Header setToken={setToken} />

      <main className="py-3">
        <Container>
          {token ? (
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/products/:id" component={ProductScreen} />
              <Route path="/cart" component={CartScreen} />
              <Route path="/shipping" component={ShippingScreen} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/">
                <LoginScreen setToken={setToken} />
              </Route>
            </Switch>
          )}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
