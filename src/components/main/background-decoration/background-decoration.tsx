import { BackgroundSetting } from '../../../const/const';

type BackgroundDecorationProps = {
  isBlur?: boolean;
};

function BackgroundDecoration({
  isBlur,
}: BackgroundDecorationProps): JSX.Element {
  const blurImg = isBlur ? '-bg-' : '-';
  const blurImgSize = isBlur
    ? BackgroundSetting.Blur
    : BackgroundSetting.Original;

  return (
    <div className="decorated-page__decor" aria-hidden="true">
      <picture>
        <source
          type="image/webp"
          srcSet={`img/content/maniac/maniac${blurImg}size-m.webp, img/content/maniac/maniac${blurImg}size-m@2x.webp 2x`}
        />
        <img
          src={`img/content/maniac/maniac${blurImg}size-m.jpg`}
          srcSet={`img/content/maniac/maniac${blurImg}size-m@2x.jpg 2x`}
          width={1366}
          height={blurImgSize}
          alt=""
        />
      </picture>
    </div>
  );
}

export { BackgroundDecoration };
<div className="decorated-page__decor" aria-hidden="true">
  <picture>
    <source
      type="image/webp"
      srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
    />
    <img
      src="img/content/maniac/maniac-size-m.jpg"
      srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
      width={1366}
      height={768}
      alt=""
    />
  </picture>
</div>;
