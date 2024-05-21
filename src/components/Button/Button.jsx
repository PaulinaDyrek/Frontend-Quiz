export function Button({ onClick, children }) {
  return (
    <>
      <button
        onClick={onClick}
        className="m-auto w-[200px] h-[45px] bg-lavenda  text-grey text-[20px] font-medium rounded-[8px] cursor-pointer"
      >
        {children}
      </button>
    </>
  );
}
