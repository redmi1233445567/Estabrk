"use client"
import { useRef } from "react";
import { useListStore } from "../store/data";


export default function Search() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const searchByName = useListStore(state => state.searchByName);
    const searchByNumber = useListStore(state => state.searchByNumber);
    const searchByDate = useListStore(state => state.searchByDate)
    const esc = useListStore(state => state.addList);

    const name = () => {
        if(ref1.current.value != "") {
            searchByName(ref1.current.value)
        }else {
            console.log("look")
        }
    }

    const number = () => {
        if(ref2.current.value != "") {
            searchByNumber(ref2.current.value)
        }else {
            console.log("look")
        }
    };

    const date = () => {
        if(ref3.current.value != "") {
            searchByDate(ref3.current.value)
        }else {
            console.log("look")
        }
    }
    
  return (
    <div className="w-full border-b-2 border-black pb-4">
      <h1 className="font-bold w-full text-center text-3xl mt-8 mb-4">البحث</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <input ref={ref1} type="text" placeholder="ابحث بالاسم..." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref2} type="number" placeholder="ابحث بالرقم..." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref3} type="date" placeholder="ابحث بالتاريخ..." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <div onClick={name} className="px-3 py-1 bg-black rounded-md text-2xl cursor-pointer transition-all font-bold text-white w-40 text-center hover:bg-zinc-800 ">بحث بالاسم</div>
        <div onClick={number} className="px-3 py-1 bg-black rounded-md text-2xl cursor-pointer transition-all font-bold text-white w-40 text-center hover:bg-zinc-800 ">بحث بالرقم</div>
        <div onClick={date} className="px-3 py-1 bg-black rounded-md text-2xl cursor-pointer transition-all font-bold text-white w-40 text-center hover:bg-zinc-800 ">بحث بالتاريخ</div>
        <div onClick={esc} className="px-3 py-1 bg-black rounded-md text-2xl cursor-pointer transition-all font-bold text-white text-center hover:bg-zinc-800 ">X</div>
      </div>
    </div>
  )
}
