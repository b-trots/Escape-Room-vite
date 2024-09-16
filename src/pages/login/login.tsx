import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { BackgroundDecoration } from '../../components/main/background-decoration/background-decoration';
import { BackgroundVector } from '../../components/main/background-vector/background-vector';
import { TitlePageName } from '../../const/app-const';
import { useChangeTitle } from '../../hooks/title';
import { LoginForm } from './login-form';

function Login(): JSX.Element {
  useChangeTitle(TitlePageName.Login);
  return (
    <div>
      <BackgroundVector />
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
