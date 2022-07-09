import { ReactComponent as DayoLogo } from 'assets/icons/dayo-logo.svg';

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className=" flex flex-col items-center animate-in-out">
      <div className="w-16 h-16 mb-4">
        <DayoLogo />
      </div>
      <div className="page-loader__text">
        <div className="fw-600">Loading</div>
        <div className="flex gap-1 ml-2">
          <div className="page-loader__dot" />
          <div className="page-loader__dot" />
          <div className="page-loader__dot" />
        </div>
      </div>
    </div>
  </div>
);

export default PageLoader;
