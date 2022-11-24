import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useState } from "react";
import ShippingScreen from "./screens/ShippingScreen";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <Router>
      <Header token={token} setToken={setToken} />
      
      <main className="py-3">
        <Container>
          <Switch>
            {token ? (
              <>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/products/:id" component={ProductScreen} />
                <Route path="/cart" component={CartScreen} />
                <Route path="/shipping" component={ShippingScreen} />
                
              </>
            ) : (
              <>
                <Route path="/">
                  <LoginScreen token={token} setToken={setToken} />
                </Route>
                <Route path="/register" component={RegisterScreen} />
              </>
            )}
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
