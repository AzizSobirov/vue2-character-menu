import Vue from "vue";
import Vuex from "vuex";

import winterBg from "@/assets/img/backgrounds/winter.png";
import type { RootState } from "@/types/store";

Vue.use(Vuex);

const state: RootState = {
  background: winterBg,
  profile: {
    id: 5272,
    level: 13,
    name: "Владимир Суета",
    avatar: "https://i.pravatar.cc/150?img=12",
    balance: {
      cash: 2540,
      card: 8423,
    },
  },
  // items: [] as ToDoItem[],
  // nextId: 1,
};

export default new Vuex.Store<RootState>({
  state,
  getters: {
    // [GetterTypes.GET_ITEMS](state: RootState) {
    //   return state.items;
    // },
    // [GetterTypes.ITEM_COUNT](state: RootState) {
    //   return state.items.length;
    // },
    // [GetterTypes.COMPLETED_ITEM_COUNT](state: RootState) {
    //   return state.items.reduce(
    //     (accumulator, currentValue) =>
    //       accumulator + (currentValue.isCompleted ? 1 : 0),
    //     0
    //   );
    // },
  },
  mutations: {
    // [MutationTypes.ADD_ITEM](state: ToDoAppState, text: string) {
    //   state.items.push({
    //     id: state.nextId,
    //     text: text,
    //     isCompleted: false,
    //     createDateTime: new Date(),
    //   });
    //   state.nextId++;
    // },
  },
  actions: {},
  modules: {},
});
