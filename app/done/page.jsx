"use client"
import { useListStore } from "../store/data";


export default function page() {

    const list = useListStore(state => state.list.filter((ele) => ele.done));
    const deletePermanently = useListStore(state => state.deletePermanently);
    const addList = useListStore(state => state.addList);

  return (
    <div className="my-6 p-10">
      {list.map((item, index) => {
        return (
            <div key={item.id} className="flex p-3 rounded-md bg-black text-white font-bold gap-4 flex-wrap justify-between mb-4 cursor-pointer hover:rounded-none transition-all">
                <p className="min-w-">{item.name}</p>
                <p>{item.type}</p>
                <p>{item.number}</p>
                <p>{item.date}</p>
                <p>تم التسليم</p>
                <p>{item.data}</p>
                <p>{item.price}</p>
                <div onClick={() => {deletePermanently(item.id); addList()}} className="px-3 bg-red-700 rounded-md cursor-pointer transition-all font-bold text-white text-center hover:bg-red-900 ">حذف</div>
            </div>
        )
      })}
    </div>
  )
}
