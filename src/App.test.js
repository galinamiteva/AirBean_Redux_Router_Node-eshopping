import React from "react";
import { withRouter } from "react-router";
import { Link, Route, Router, Switch, useParams } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";


const Home = () => <h1>Home page</h1>;
const About = () => <h1>About page</h1>;
const Status = () => <h1>Status page</h1>;
const NoMatch = () => <h1>404 Error</h1>;

const Header = withRouter(({ location }) => (
  <div data-testid="components/Header">{location.pathname}</div>
));


const App = () => (
  <>
    <nav data-testid="navbar">
      <Link data-testid="home-link" to="/">
        Home
      </Link>
      <Link data-testid="about-link" to="/about">
        About
      </Link>
      <Link data-testid="status-link" to="/status">
        Status
      </Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/status" component={Status} />
      <Route component={NoMatch} />
    </Switch>
    <Header />
  </>
);

//Det var universal funk sa Kavalchuk på ryska tutorial  - https://www.youtube.com/watch?v=TMRgI4_djCY  och Kentc Dods på https://www.youtube.com/watch?v=XDkSaCgR8g4&t=539s
const renderWithRouter = (
  component,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe("React Router", () => {
  it("should render the home page", () => {
    // const history = createMemoryHistory();
    // const { container, getByTestId } = render(
    //   <Router history={history}>
    //     <App />
    //   </Router>
    // );
    const { container, getByTestId } = renderWithRouter(<App />);
    const navbar = getByTestId("navbar");
    const link = getByTestId("home-link");
    expect(container.innerHTML).toMatch("Home page"); //Kollar om kontainaren App innehåler texten 'Home page'
    expect(navbar).toContainElement(link); //Kollar om comtainaren App innehåller länken 'home-link'
  });



  it("should render the about page", () => {
    const { container, getByTestId } = renderWithRouter(<App />, {
      route: "/about",
    });
    const navbar = getByTestId("navbar");
    const link = getByTestId("about-link");
    expect(container.innerHTML).toMatch("About page");
    expect(navbar).toContainElement(link);
  });


  it("should render the status page", () => {
    const { container, getByTestId } = renderWithRouter(<App />, {
      route: "/status",
    });
    const navbar = getByTestId("navbar");
    const link = getByTestId("status-link");
    expect(container.innerHTML).toMatch("Status page");
    expect(navbar).toContainElement(link);
  });

  it("should navigate to error page if route is wrong", () => {
    const { container } = renderWithRouter(<App />, {
      route: "/wrong-route",
    });
    expect(container.innerHTML).toMatch("404 Error");
  });



  it("rendering a component that uses withRouter", () => {
    const route = "/some-route";
    const { getByTestId } = renderWithRouter(<Header />, { route });
    expect(getByTestId("components/Header")).toHaveTextContent(route);
  });
});