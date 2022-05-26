import GET from '../../http/get';
import cmqRequest from '../../http/cmqRequest'

export default {
  initRootTree({
             state,
             commit
           }, {rootFolders}) {

    console.log('init root tree:', rootFolders)
    if (state.rootFolders) commit('cleanRootTree');
    commit('addRootFolders', {
      parentId: 'root',
      rootFolders: rootFolders,
    });
    // commit('setSelectedRootTree',rootFolders[0])
  },
  /**
   * 主页初始化目录树
   * @param state
   * @param commit
   * @param disk
   * @returns {Promise}
   */
  initTree({
             state,
             commit
           }, rootFolder) {
    // 初始化目录树

    console.log('init tree:', rootFolder)
    if (state.directories) commit('cleanTree');
    commit('addDirectories', {
      parentId: 'root',
      directories: rootFolder,
    });
  },

  /**
   * 给目录树添加新文件夹
   * @param state
   * @param commit
   * @param getters
   * @param parentPath
   * @param newDirectory
   */
  addToTree({
              state,
              commit,
              getters
            }, {
              parentPath,
              newDirectory
            }) {
    //如果不是根目录
    if (parentPath) {
      // 找到父目录的下标
      const parentDirectoryIndex = getters.findDirectoryIndex(parentPath);

      if (parentDirectoryIndex !== -1) {
        console.log("newDirectory:", newDirectory);
        // 添加新目录
        commit('addDirectories', {
          directories: newDirectory,
          parentId: state.directories[parentDirectoryIndex].id,
        });

        // 更新父目录属性
        commit('updateDirectoryProps', {
          index: parentDirectoryIndex,
          props: {
            hasSubdirectories: true,
            showSubdirectories: true,
            subdirectoriesLoaded: true,
          },
        });
      } else {
        commit('fm/messages/setError', {
          message: '文件夹未找到!'
        }, {
          root: true
        });
      }
    } else {
      // 添加磁盘根目录
      commit('addDirectories', {
        directories: newDirectory,
        parentId: 0,
      });
    }
  },

  /**
   * 删除目录和子目录
   * @param state
   * @param commit
   * @param getters
   * @param dispatch
   * @param directories
   */
  deleteFromTree({
                   state,
                   commit,
                   getters,
                   dispatch,
                 }, directories) {
    directories.forEach((item) => {
      // 查找目录
      const directoryIndex = getters.findDirectoryIndex(item.folderId);

      if (directoryIndex !== -1) {
        // 根据下标删除对应目录
        commit('addToTempArray', directoryIndex);

        // 如果有子目录
        if (state.directories[directoryIndex].props.hasSubdirectories) {
          // 查找子目录
          dispatch('subDirsFinder', state.directories[directoryIndex].id);
        }
      }
    });

    // 过滤目录
    const temp = state.directories.filter((item, index) => {
      if (state.tempIndexArray.indexOf(index) === -1) {
        return item;
      }
      return false;
    });

    // 替换
    commit('replaceDirectories', temp);

    // 清除临时数组
    commit('clearTempArray');
  },

  /**
   * 查找子目录
   * @param state
   * @param commit
   * @param dispatch
   * @param parentId
   */
  subDirsFinder({
                  state,
                  commit,
                  dispatch
                }, parentId) {
    state.directories.forEach((item, index) => {
      if (item.parentId === parentId) {
        // 添加目录下标
        commit('addToTempArray', index);

        // 如果有子目录
        if (item.props.hasSubdirectories) {
          // 查找子目录
          dispatch('subDirsFinder', item.id);
        }
      }
    });
  },

  /**
   * 显示子目录
   * @param state
   * @param commit
   * @param getters
   * @param dispatch
   * @param path
   * @returns {*}
   */
  showSubdirectories({
                       state,
                       commit,
                       getters,
                       dispatch,
                     }, {path, currentFolder, subFolderTree}) {
    const promise = Promise.resolve();
    // 查找父目录下标
    console.log(state.directories, path)
    const parentDirectoryIndex = getters.findDirectoryIndex(currentFolder.folderId);
    console.log('parentDirectoryIndex:', parentDirectoryIndex)
    console.log('folderTree:', subFolderTree)
    //以下为真实环境
    // commit('cleanTree')
    if (parentDirectoryIndex !== -1) {
      if (state.directories[parentDirectoryIndex].subdirectoriesLoaded) {
        //加载子目录
        commit('addDirectories', {
          parentId: state.directories[parentDirectoryIndex].folderId,
          directories: subFolderTree.subFolders,
        });
        commit('updateDirectoryProps', {
          index: parentDirectoryIndex,
          props: {
            showSubdirectories: true,
            subdirectoriesLoaded: true
          }
        });
      } else {
        //加载子目录
        commit('addDirectories', {
          parentId: state.directories[parentDirectoryIndex].folderId,
          directories: subFolderTree.subFolders,
        });
        //设置子目录加载标示
        commit('updateDirectoryProps', {
          index: parentDirectoryIndex,
          props: {
            showSubdirectories: true,
            subdirectoriesLoaded: true
          }
        });
      }
    } else {
      commit('fm/messages/setError', {
        message: '目录未找到!'
      }, {
        root: true
      });
    }
    return promise;
  },
  /**
   * 隐藏RootTree子目录
   * @param commit
   * @param getters
   * @param path
   */
  hideRootTreeSubFolder({
                       commit,
                       getters
                     }, path) {
    // 查找父目录下标
    const parentDirectoryIndex = getters.findRootTreeIndex(path);

    if (parentDirectoryIndex !== -1) {
      // 隐藏子目录
      commit('updateRootTreeProps', {
        index: parentDirectoryIndex,
        props: {
          showSubdirectories: false,
        },
      });
    } else {
      commit('fm/messages/setError', {
        message: '目录未找到!'
      }, {
        root: true
      });
    }
  },
  /**
   * 显示RootTree子目录
   * @param commit
   * @param getters
   * @param path
   */
  showRootTreeSubFolder({
                       state,
                       commit,
                       getters,
                       dispatch,
                     }, { currentFolder, subFolderTree}) {
    const promise = Promise.resolve();
    // 查找父目录下标
    const parentDirectoryIndex = getters.findRootTreeIndex(currentFolder.folderId);
    console.log('parentDirectoryIndex:', parentDirectoryIndex)
    console.log('folderTree:', subFolderTree)
    //以下为真实环境
    if (parentDirectoryIndex !== -1) {
      if (state.rootFolders[parentDirectoryIndex].subdirectoriesLoaded) {
        commit('updateRootTreeProps', {
          index: parentDirectoryIndex,
          props: {
            showSubdirectories: true,
            subdirectoriesLoaded: true
          }
        });
      } else {
        //加载子目录
        commit('addRootFolders', {
          parentId: state.rootFolders[parentDirectoryIndex].folderId,
          rootFolders: subFolderTree.subFolders,
        });
        //设置子目录加载标示
        commit('updateRootTreeProps', {
          index: parentDirectoryIndex,
          props: {
            showSubdirectories: true,
            subdirectoriesLoaded: true
          }
        });
      }
    } else {
      commit('fm/messages/setError', {
        message: '目录未找到!'
      }, {
        root: true
      });
    }
    return promise;
  },
  selectRootTree({state,commit}, {folder}) {
    commit('setSelectedRootTree', folder); //设置选中的rootTree
    return Promise.resolve()
  },
  /**
   * 从服务器得到所选目录的子目录
   * @param commit
   * @param rootGetters
   * @param path
   * @param parentId
   * @param parentIndex
   * @returns {Promise}
   */
  getSubdirectories({
                      commit,
                      rootGetters
                    }, {
                      path,
                      parentId,
                      parentIndex
                    }) {

    // 添加目录 demo
    let directories = []
    commit('addDirectories', {
      parentId,
      directories: directories,
    });
    //以下为真实环境
    /*
    return GET.tree(rootGetters['fm/selectedDisk'], path).then((response) => {
        // 成功
        if (response.data.result.status === 'success') {
            // 添加目录
            commit('addDirectories', {
                parentId,
                directories: response.data.directories,
            });

            // 更新父目录属性
            commit('updateDirectoryProps', {
                index: parentIndex,
                props: {
                    subdirectoriesLoaded: true,
                },
            });
        }
    });
    */
  },


  /**
   * 隐藏子目录
   * @param commit
   * @param getters
   * @param path
   */
  hideSubdirectories({
                       commit,
                       getters
                     }, path) {
    // 查找父目录下标
    const parentDirectoryIndex = getters.findDirectoryIndex(path);

    if (parentDirectoryIndex !== -1) {
      // 隐藏子目录
      commit('updateDirectoryProps', {
        index: parentDirectoryIndex,
        props: {
          showSubdirectories: false,
        },
      });
    } else {
      commit('fm/messages/setError', {
        message: '目录未找到!'
      }, {
        root: true
      });
    }
  },

  /**
   * 重新打开选择的路径
   * @param dispatch
   * @param path
   * @returns {Promise<void>}
   */
  reopenPath({
               dispatch
             }, path) {
    let promises = Promise.resolve();

    if (path) {
      const splitPath = path.split('/');

      for (let i = 0; splitPath.length > i; i += 1) {
        promises = promises.then(() => dispatch(
          'showSubdirectories',
          splitPath.slice(0, i + 1).join('/'),
        ));
      }

      return promises;
    }

    return promises;
  },
};
