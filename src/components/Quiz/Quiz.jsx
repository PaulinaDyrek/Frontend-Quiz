export function Quiz() {
  return (
    <div className="w-[640px] m-auto mt-[150px] flex flex-col bg-brown text-grey gap-5 rounded-[10px] py-10 px-[50px]">
      <h1 className="text-[27px] font-bold m-auto ">Frontend Developer Quiz</h1>
      <hr className="h-0.5 bg-grey" />
      <h2 className="text-[20px] font-medium">
        Which of the following is not an HTML tag?
      </h2>
      <ul>
        <li className="flex items-center h-[60px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer m-2">
          doctype
        </li>
        <li className="flex items-center h-[60px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer  m-2">
          table
        </li>
        <li className="flex items-center h-[60px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer  m-2">
          p
        </li>
        <li className="flex items-center h-[60px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer  m-2">
          style
        </li>
      </ul>
      <button className="m-auto w-[200px] h-[50px] bg-lavenda  text-grey text-[20px] font-medium rounded-[8px] cursor-pointer">
        Next
      </button>
      <div className="text-[14px] m-auto">1 of 5 questions</div>
    </div>
  );
}
