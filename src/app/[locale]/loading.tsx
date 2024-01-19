import { IconLoader3 } from "@tabler/icons-react";

const Loding = () => {
  return (
    <div className="w-full min-h-screen h-full flex flex-1 justify-center items-center bg-white">
      <IconLoader3 className="animate-spin text-indigo-600" size={46} />
    </div>
  );
};
export default Loding;
