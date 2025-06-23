import Link from "next/link";

// Components
import { If } from "@/components/if/If";

// Icons
import { IoPersonOutline, IoTicketOutline } from "react-icons/io5";

interface Props {
  rolUser: "user" | "admin";
  closeSideMenu: () => void;
};

const ViewRolUser = ({ rolUser, closeSideMenu }: Props) => {
  return (
    <If condition={rolUser === "user" || rolUser === "admin"}>
      <Link
        href="/profile"
        onClick={() => closeSideMenu()}
        className="flex items-center mt-10 p-2 hover:bg-gray100 rounded transition-all"
      >
        <IoPersonOutline size={30} />
        <span className="ml-3 text-xl">Perfil</span>
      </Link>

      <Link
        href="/orders"
        onClick={() => closeSideMenu()}
        className="flex items-center mt-10 p-2 hover:bg-gray100 rounded transition-all"
      >
        <IoTicketOutline size={30} />
        <span className="ml-3 text-xl">Ordenes</span>
      </Link>
    </If>
  );
};

export default ViewRolUser;