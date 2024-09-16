import { useEffect } from 'react';
import { TitlePageName } from '../const/app-const';

const restoreTitle = () => {
  const initialTitle = document.title;
  return () => {
    document.title = initialTitle;
  };
};

function useChangeTitle(title: string) {
  useEffect(restoreTitle, []);

  useEffect(() => {
    document.title = `${TitlePageName.Title} | ${title}`;
  }, [title]);
}

export { useChangeTitle };
