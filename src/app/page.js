import Button from "@/Components/Button/Button";
import Duas from "@/Components/DuaPage/Duas";
import Category from "@/Components/SharedComponents/Category/Category";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
const Home = async ({ searchParams }) => {
  let { category, subcat_id } = searchParams
  if (!category) {
    category = 1
  }
  const res = await fetch(`https://dua-server-eight.vercel.app/dua?category=${category}`, {
    headers: {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      next: { revalidate: 1 }
    }
  })
  const duaData = await res.json()
  // console.log(category)https://dua-server-eight.vercel.app
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
            <Button />
          </span>
        </span>
      </div>
      <div className="flex justify-start items-start gap-4">
        <Category subcat_id={subcat_id} category={category} />
        <Duas duaData={duaData} />
        <div id="setting" className="w-[320px] bg-white p-3 pt-1 rounded-2xl mt-9 h-screen overflow-auto absolute right-[-999999px] transition-all">
          <p className="text-center text-xl font-bold pt-7">Settings</p>
          <ul className="flex justify-center items-start gap-3 flex-col">
            <li className="flex justify-start items-center gap-4 text-[#868686] p-3 w-full bg-[#F7F8FA]">
              <Image src='https://i.ibb.co/gZkB1V7/Frame-3.png' height={20} width={20} alt="image" />
              Language Settings
              </li>
            <li className="flex justify-start items-center gap-4 text-[#868686] p-3 w-full bg-[#F7F8FA]">
            <Image src='https://i.ibb.co/jT6Sy02/Frame-1.png' height={20} width={20} alt="image" />
            General Settings
              </li>
      
            <li className="flex justify-start items-center gap-4 text-[#868686] p-3 w-full bg-[#F7F8FA]">
            <Image src='https://i.ibb.co/mytqws6/54-menu-2-1.png' height={20} width={20} alt="image" />
            Font Settings
              </li>
            <li className="flex justify-start items-center gap-4 text-[#868686] p-3 w-full bg-[#F7F8FA]">
            <Image src='https://i.ibb.co/SrncPr6/54-menu-2-2.png' height={20} width={20} alt="image" />
            Appearance Settings
              </li>
          </ul>
          <p className="flex justify-between items-center py-4">Night Mode <span className="themeChanger"></span></p>
        </div>
      </div>
    </div>
  );
}
export default Home