import Gap from "@/components/Gap";
import { ProgressBarLink } from "@/context/ProgressBar";

const Header: React.FC = () => {
  return <Gap className="flex justify-between items-center bg-white h-[50px]">
    <div className="font-bold italic">Logo</div>
    <div className="flex gap-10 items-center">
      <ProgressBarLink className="font-semibold" href={'/'}>Home</ProgressBarLink>
      <ProgressBarLink className="font-semibold" href={'/about'}>About</ProgressBarLink>
    </div>
  </Gap>;
};

export default Header;
