import { Link } from "react-router-dom";

function notFoundPage() {
  return (
    <div className="not-found">
      <h1 className="secondary-color">404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default notFoundPage;
