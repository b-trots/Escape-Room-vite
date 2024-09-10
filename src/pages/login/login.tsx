import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { FirstComponent } from '../../components/main/first-component/first-component';
import { LoginForm } from './login-form';

function Login(): JSX.Element {
  return (
    <div>
      <FirstComponent />
      <div className="wrapper">
        <Header />
        <main className="decorated-page login">
          <BackgroundDecoration />
          <div className="container container--size-l">
            <div className="login__form">
              <LoginForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { Login };
