import Vue from "vue";
import Vuex from "vuex";

import winterBg from "@/assets/img/backgrounds/winter.png";

Vue.use(Vuex);

const state = {
  background: winterBg,
  // items: [] as ToDoItem[],
  // nextId: 1,
};

export type IndexState = typeof state;

export default new Vuex.Store<IndexState>({
  state,
  getters: {
    // [GetterTypes.GET_ITEMS](state: IndexState) {
    //   return state.items;
    // },
    // [GetterTypes.ITEM_COUNT](state: IndexState) {
    //   return state.items.length;
    // },
    // [GetterTypes.COMPLETED_ITEM_COUNT](state: IndexState) {
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
