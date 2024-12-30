import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className={style.loader}></div>
    </div>
  );
};

export default Loader;
