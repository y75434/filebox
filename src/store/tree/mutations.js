/* eslint-disable no-param-reassign,no-restricted-syntax */
export default {
  /**
   * 清理左侧的目录树
   * @param state
   */
  cleanTree(state) {
    state.directories = [];
    state.counter = 1;
  },
  /**
   * 清理左侧的目录树
   * @param state
   */
  cleanSubTree(state, folderId) {
    let tempIndex = state.directories.findIndex(item=>{
      return item.folderId === folderId
    })
    console.log('cleanSubTree:',tempIndex)
    if(tempIndex === -1){
      return
    }else {
      state.directories.splice(tempIndex,1)
    }

  },

  cleanSubRootTree(state) {
    console.log('aaa:', JSON.parse(JSON.stringify(state.directories)))
    state.directories = state.directories.filter(item => {
      return item.parentId === 'root'
    })
    console.log('bbb:', JSON.parse(JSON.stringify(state.directories)))
    state.counter = 1;
  },
  /**
   * 管理界面的目录树
   * @param state
   */
  cleanRootTree(state) {
    state.rootFolders = [];
  },

  /**
   * 向左侧的目录树中添加目录
   * @param state
   * @param directories
   * @param parentId
   */
  addDirectories(state, {
    parentId,
    directories
  }) {
    directories.forEach((directory) => {
      // 向目录添加属性
      // directory.id = state.counter;
      directory.parentId = parentId;
      directory.subdirectoriesLoaded = false;
      directory.showSubdirectories = false;
      state.counter += 1;
      console.log( 'find index:',state.directories.findIndex(item=>{
        return item.folderId === directory.folderId
      }))
      let tempIndex = state.directories.findIndex(item=>{
        return item.folderId === directory.folderId
      })
      if(tempIndex === -1){
        state.directories.push(directory);
      }else {
        state.directories.splice(tempIndex,1,directory)
      }
    });
  },

  addRootFolders(state, {
    parentId,
    rootFolders
  }) {
    rootFolders.forEach((directory) => {
      // 向目录添加属性
      // directory.id = state.counter;
      directory.parentId = parentId;
      directory.subdirectoriesLoaded = false;
      directory.showSubdirectories = false;
      state.rootFolders.push(directory);
    });
  },
  setSelectedRootTree(state, folder) {
    state.selectedRootTree = folder
    console.log('setSelectedRootTree:', state.selectedRootTree)
  },
  /**
   * 替换目录
   * @param state
   * @param directories
   */
  replaceDirectories(state, directories) {
    state.directories = directories;
  },

  /**
   * 更新目录属性
   * @param state
   * @param index
   * @param props
   */
  updateDirectoryProps(state, {
    index,
    props
  }) {
    for (const property in props) {
      if (Object.prototype.hasOwnProperty.call(props, property)) {
        state.directories[index][property] = props[property];
      }
    }
  },
  /**
   * 更新Root目录树属性
   * @param state
   * @param index
   * @param props
   */
  updateRootTreeProps(state, {
    index,
    props
  }) {
    for (const property in props) {
      if (Object.prototype.hasOwnProperty.call(props, property)) {
        state.rootFolders[index][property] = props[property];
      }
    }
  },
  /**
   * 添加到临时索引数组
   * @param state
   * @param index
   */
  addToTempArray(state, index) {
    state.tempIndexArray.push(index);
  },

  /**
   * 清除临时索引数组
   * @param state
   */
  clearTempArray(state) {
    state.tempIndexArray = [];
  },
};
