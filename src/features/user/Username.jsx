import { useSelector } from "react-redux";

const Username = () => {
  const name = useSelector((state) => state.user.name);

  if (!name) return null

  return <p className="text-sm text-gray-400">Hey, {name}!</p>;
};

export default Username;
