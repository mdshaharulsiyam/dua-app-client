import Duas from "@/Components/DuaPage/Duas";
import Category from "@/Components/SharedComponents/Category/Category";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
const Home = async ({ searchParams }) => {
  let { category, cat_id } = searchParams
  if (!category) {
    category = 1
  }
  const res = await fetch(`http://localhost:5000/dua?category=${category}`, {
    headers: {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      next: { revalidate: 1 }
    }
  })
  const duaData = await res.json()
  // console.log(duaData[0])
  return (
    <div style={{ scrollbarWidth: 'none' }} className="w-[91%] ">
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
              <Image src='https://i.ibb.co/NT7zNqv/Vector-9.png' height={50} width={50} alt="image" />
            </button>
            <button className="text-2xl text-green-600 hidden">
              <IoSettingsSharp />
            </button>
          </span>
        </span>
      </div>
      <div className="flex justify-start items-start gap-4">
        <Category cat_id={cat_id} category={category} />
        <Duas duaData={duaData} />
      </div>

    </div>
  );
}
export default Home