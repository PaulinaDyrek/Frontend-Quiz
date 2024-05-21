export function List({ ref, onClick, children }) {
  return (
    <li
      className="flex items-center h-[45px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer m-2"
      ref={ref}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
