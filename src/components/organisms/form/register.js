import Input from "./../../atoms/input/input";
import Submit from "./../../atoms/button/button";

export default function () {
  return (
    <div className="container">
      <Input icon="email.svg" placeholder="Email" />
      <Input icon="password.svg" placeholder="Password" />
      <Input icon="password.svg" placeholder="Repeat Password" />
      <Submit icon="login.svg" title="Login" />
    </div>
  );
}
