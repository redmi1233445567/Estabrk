"use client"
import { useEffect } from "react";
import { useListStore } from "../store/data";


export default function Card() {

    const list = useListStore(state => state.list.filter((ele) => !ele.done));
    const all = useListStore(state => state.all);
    const addList = useListStore(state => state.addList);
    const setUpdate = useListStore(state => state.setUpdate);
    const deleteItem= useListStore(state => state.deleteItem);
    const addDone = useListStore(state => state.addDone)

    useEffect(() => {
        addList()
    }, [all.length])

  return (
    <div className="my-6">
      {list.map((item, index) => {
        return (
            <div key={item.id} className="flex p-3 rounded-md bg-black text-white items-center font-bold gap-4 flex-wrap justify-between mb-4 cursor-pointer hover:rounded-none transition-all">
                <p className="w-32">{item.name}</p>
                <p className="w-32">{item.type}</p>
                <p className="w-32">{item.number}</p>
                <p className="w-32">{item.date}</p>
                <p className="w-32">لم يتم التسليم</p>
                <p className="flex-1 w-full">{item.data}</p>
                <p>{item.price}</p>
                <div onClick={()=> {setUpdate(index); deleteItem(item.id)}} className="px-3  bg-teal-400 rounded-md cursor-pointer transition-all font-bold text-white text-center hover:bg-teal-900 ">تعديل</div>
                <div onClick={() => addDone(item.id)} className="px-3 bg-green-600 rounded-md cursor-pointer transition-all font-bold text-white text-center hover:bg-green-800 ">تم</div>
            </div>
        )
      })}
    </div>
  )
}
