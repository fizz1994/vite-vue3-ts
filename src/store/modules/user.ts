interface UserStore {
  token?: string; // token
  useInfo?: Recordable; // 用户信息
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => {
    return {
      token: undefined,
      useInfo: undefined
    };
  },
  persist: true,
  getters: {
    userName(state) {
      return state.useInfo ? state.useInfo.realname || state.useInfo.username : '管理员';
    }
  },
  actions: {}
});
