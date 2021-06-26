import "./style.css";
import Login from "./../../organisms/form/login";
export default function () {
  return (
    <div className="sign-layout">
      <div className="form-container is-centered">
        <div className="half-circle top-circle"></div>

        <div className="column pl-8">
          <h1 className="title has-text-primary">
            Login
            <h2 className="title is-6 has-text-grey">
              Enter your details in below to coninue
            </h2>
          </h1>
        </div>
        <div className="pr-8 pl-8 pt-6 mt-6 ">
          <Login />
        </div>
        <div className="half-circle bottom-circle"></div>
      </div>
    </div>
  );
}
