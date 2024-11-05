import UserMenu from "@/app/layout/user-menu";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isLogin: boolean;
}

const Navbar = ({ isLogin }: NavbarProps) => {
  return (
    <div className="flex max-w-7xl mx-aout p-5 items-center">
      <div className="flex-1 logo">
        <h1>S.A.Z</h1>
      </div>

      <div className="nav-links">
        {isLogin ? < UserMenu/> : <Button>login</Button>}
      </div>
    </div>
  );
};

export default Navbar;
