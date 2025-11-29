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
    maxLevel: 28,
    name: "Владимир",
    surname: "Суета",
    full_name: "Владимир Суета",
    avatar: "https://picsum.photos/200/300",
    balance: {
      cash: 2540,
      card: 8423,
    },
    uc: 25000,
    status: {
      name: "Золотой статус",
      color: "linear-gradient(270deg, #f8b830 0%, #ff7400 100%)",
      icon: "crown",
      end_date: "до 15.12",
    },
    last_activity: "29 октября",
    last_session: "2 ч. 53 мин.",
    bonus_time: "1 ч. 20 мин.",
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
