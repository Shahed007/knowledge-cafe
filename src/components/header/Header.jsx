import profile from "../../assets/images/profile.png";


const Header = () => {
  return (
    <div className="flex justify-between h-20 items-center container mx-auto px-3 pb-3 border-b-2">
      <h1 className='text-4xl  font-bold'>Knowledge Cafe</h1>
      <img className="w-14 h-14" src={profile} alt="" />
    </div>
  );
};

export default Header;