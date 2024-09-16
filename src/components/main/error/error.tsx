import { Link } from 'react-router-dom';
import css from './style.module.css';
import { useChangeTitle } from '../../../hooks/title';
import { TitlePageName } from '../../../const/app-const';

function Error(): JSX.Element {
  useChangeTitle(TitlePageName.NotFound);

  return (
    <div className={css.root}>
      <div className={css.smile}>☹</div>
      <div className={css.message}>404 Not Found</div>
      <Link className={css.home} to="/">
        Home Page
      </Link>
    </div>
  );
}

export { Error };
