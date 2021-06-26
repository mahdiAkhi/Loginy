import Input from './../../atoms/input/input'
import Submit from './../../atoms/button/button'


export default function () {
    return (
      <form action="#">
        <Input icon="email.svg" placeholder="Email" />
        <Input icon="password.svg" placeholder="Password" />
        <p>Forgot Password? ></p>
        <br />
        <br />
        <Submit title="Login" />
        <br />
        <br />
        <p style={{ zIndex: 2 }}>
          Don't have an account? <a>Sign up here</a>
        </p>
      </form>
    );
 }