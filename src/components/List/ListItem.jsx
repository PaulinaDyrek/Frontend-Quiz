export function ListItem({ refProp, onClick, option }) {
  return (
    <li
      className="flex items-center h-[45px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer m-2"
      ref={refProp}
      onClick={onClick}
    >
      {option}
    </li>
  );
}
