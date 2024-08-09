"use client"
import { useListStore } from "../store/data";
import { useRef, useEffect } from "react";


export default function Add() {
    const addItem = useListStore(state => state.addItem);
    const setUpdate = useListStore(state => state.setUpdate);
    const update = useListStore(state => state.update);
    const deleteUpdate = useListStore(state => state.deleteUpdate);
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const updateInput = () => {
        if (update.name != undefined) {
            ref1.current.value = update.name;
            ref2.current.value = update.type;
            ref3.current.value = update.date;
            ref4.current.value = update.number;
            ref5.current.value = update.price;
            ref6.current.value = update.data;
        }
    }

    useEffect(() => {
        updateInput()
    }, [update])

    const save = () => {
        let val1 = ref1.current.value
        let val2 = ref2.current.value
        let val3 = ref3.current.value
        let val4 = ref4.current.value
        let val5 = ref5.current.value
        let val6 = ref6.current.value
        
        if(val1 != "" && val2 != "" && val3 != "" && val4 != "" ) {
            ref1.current.classList.remove("false");
            ref2.current.classList.remove("false");
            ref3.current.classList.remove("false");
            ref4.current.classList.remove("false");
            addItem({id: Math.random(), name: val1, type: val2, date: val3, number: val4, price: val5, data: val6, done:false, edit: false});
            deleteUpdate()
            ref1.current.value = "";
            ref2.current.value = "";
            ref3.current.value = "";
            ref4.current.value = "";
            ref5.current.value = "";
            ref6.current.value = "";
        }else {
            if(val1 == "") {
                ref1.current.classList.add("false")
            }else {
                ref1.current.classList.remove("false");
            }
            if(val2 == "") {
                ref2.current.classList.add("false")
            }else {
                ref2.current.classList.remove("false");
            }
            if(val3 == "") {
                ref3.current.classList.add("false")
            }else {
                ref3.current.classList.remove("false");
            }
            if(val4 == "") {
                ref4.current.classList.add("false")
            }else {
                ref4.current.classList.remove("false");
            }
        }
        
    }

  return (
    <div className="w-full border-b-2 border-black pb-4">
      <h1 className="font-bold w-full text-center text-3xl mt-8 mb-4">اضف استلام</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <input ref={ref1} type="text" placeholder="الاسم...." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref2} type="text" placeholder="النوع...." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref3} type="date" placeholder="موعد التسليم...." className="cursor-pointer rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref4} type="number" placeholder="رقم الهاتف...." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref5} type="number" placeholder="السعر ...." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <input ref={ref6} type="text" placeholder="بيانات...." className="rounded-md w-80 appearance-none p-3 text-2xl"/>
        <div onClick={save} className="p-3 bg-black rounded-md text-2xl cursor-pointer transition-all font-bold text-white w-20 text-center hover:bg-zinc-800 ">حفظ</div>
      </div>
    </div>
  )
}
