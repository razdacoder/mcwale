export default function ProductColor() {
  return (
    <div className="flex gap-x-3">
      <div className="flex flex-col gap-y-3 items-center">
        <input id="blue" name="color" type="radio" className="peer hidden" />
        <label
          htmlFor="blue"
          className="w-8 h-8 bg-blue-500 rounded-full mt-1 border peer-checked:border-2 cursor-pointer peer-checked:border-black"
        ></label>
        <span className="text-xs">Sky Blue</span>
      </div>
      <div className="flex flex-col gap-y-3 items-center">
        <input id="white" name="color" type="radio" className="peer hidden" />
        <label
          htmlFor="white"
          className="w-8 h-8 bg-white rounded-full mt-1 border peer-checked:border-2 cursor-pointer peer-checked:border-black "
        ></label>
        <span className="text-xs">White</span>
      </div>
      <div className="flex flex-col gap-y-3 items-center">
        <input id="red" name="color" type="radio" className="peer hidden" />
        <label
          htmlFor="red"
          className="w-8 h-8 bg-red-500 rounded-full border mt-1 peer-checked:border-2 cursor-pointer peer-checked:border-black"
        ></label>
        <span className="text-xs">Red</span>
      </div>
    </div>
  );
}
