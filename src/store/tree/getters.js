export default {
  /**
   * 在主页目录树中查找目录索引
   * @param state
   * @returns {Number}
   */
  findDirectoryIndex: (state) => (path) => state.directories.findIndex((el) => el.folderId === path),

  /**
   * 在RootTree中查找目录索引
   * @param state
   * @returns {Number}
   */
  findRootTreeIndex: (state) => (path) => state.rootFolders.findIndex((el) => el.folderId === path),

  /**
   * 筛选目录列表
   * @param state
   * @param getters
   * @param rootState
   * @returns {*}
   */
  directories(state, getters, rootState) {
    if (rootState.fm.settings.hiddenFiles) {
      return state.directories;
    }
    return state.directories.filter((item) => item.name.match(new RegExp('^([^.]).*', 'i')));
  },
  rootFolders(state) {
    return state.rootFolders
  },
  selectedRootFolder(state){
    return state.selectedRootTree
  }
};
