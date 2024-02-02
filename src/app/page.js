import Category from "@/Components/SharedComponents/Category/Category";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
const Home = async({ searchParams })=> {
  const category = searchParams?.category
  console.log(category)
  return (
    <div style={{scrollbarWidth: 'none'}} className="w-[88%] h-screen overflow-auto">
      <div className="flex justify-between items-center">
      <p className="text-[#393939] text-3xl font-semibold">Duas Page</p>
        <span className="flex justify-between items-center gap-20">
          <form className="flex items-center justify-center gap-1 bg-white p-1 pl-4 rounded-md">
            <input className="outline-none" type="text" placeholder="Search by Dua Name" />
            <button className="p-2 bg-[#F3F4F6] rounded-md" type="submit">
              <IoSearchOutline />
            </button>
          </form>
          <span className="flex justify-center items-center gap-6">
            <button>
              <Image src='https://i.ibb.co/NT7zNqv/Vector-9.png' height={50} width={50} />
            </button>
            <button className="text-2xl text-green-600 hidden">
              <IoSettingsSharp />
            </button>
          </span>
        </span>
      </div>
      <div>
        <Category category={category} />
      </div>
    </div>
  );
}
export default Home