import { create } from "zustand";
import {persist} from 'zustand/middleware'


export const useListStore = create(persist((set) => ({
    all: [],
    list: [],
    update: [],
    deleteUpdate: () => set(() => ({update: []})),
    addList: () => set((state) => ({list: state.all})),
    addItem: (item) => set((state) => ({ all: [item, ...state.all] })),
    searchByName: (item) => set((state) => {
        let all2 = state.all;
        let test = []
        for (let i = 0; i < all2.length; i++) {
            if (all2[i].name.includes(item)) {
                test = [...test, all2[i]]
            }
        }
        return ({list: test})
      }),

      searchByNumber: (item) => set((state) => {
        let all2 = state.all;
        let test = []
        for (let i = 0; i < all2.length; i++) {
            if (all2[i].number == item ) {
                test = [...test, all2[i]]
            }
        }
        return ({list: test})
      }),

      searchByDate: (item) => set((state) => {
        let all2 = state.all;
        let test = []
        for (let i = 0; i < all2.length; i++) {
            if (all2[i].date == item ) {
                test = [...test, all2[i]]
            }
        }
        return ({list: test})
      }),

      setUpdate: (item) => set((state) => ({update: state.all[item]})),
      deleteItem: (item) => set((state) => {
        let all2 = state.all.filter((ele) => ele.id != item);
        console.log(all2)
        
        return ({all: all2})
      }),

      addDone: (item) => set((state) => {
        let all2 = state.all;
        for (let i = 0; i < all2.length; i++) {
            if (all2[i].id == item) {
                all2[i].done = !all2[i].done;
                i = 100;
            }
        }
        return ({all: all2})
      }),

      deletePermanently: (item) => set((state) => {
        let all2 = state.all;
        let test = [];
        for (let i = 0; i < all2.length; i++) {
            if (all2[i].id !== item) {
                test = [...test, all2[i]]
            }
        }
        return ({all: test})
      }),
   
  }), {
      name: "Estabrk"
  }))