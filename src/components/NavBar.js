const NavBar = () => {
  return (
    <div className='flex justify-between px-20 md:px-40 lg:px-80 py-8'>
      <div className='font-bold text-xl'>LIVE WELL</div>
      <ul className='flex space-x-6 text-lg'>
        <li className='cursor-pointer hover:text-fioralda-yellow'>INFO</li>
        <li className='cursor-pointer hover:text-fioralda-yellow'>INFO</li>
        <li className='cursor-pointer hover:text-fioralda-yellow'>INFO</li>
        <li className='cursor-pointer hover:text-fioralda-yellow'>INFO</li>
      </ul>
    </div>
  );
};

export default NavBar;
