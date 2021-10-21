<template>
  <div class="about">
    <!-- 忘記密碼 -->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Forgot Password
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-blue">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Forgot Password
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-5
"
          >
            <p class="text-center">
              If you have account and password issues, please contact your system
              administrator.
            </p>
            <div class="w-100 d-flex justify-content-center">
              <button
                type="button"
                class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 用戶設定-->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#UserSetting"
    >
      User Setting
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="UserSetting"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-blue">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              User Setting
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray
"
          >
            <div class="d-flex justify-content-between align-items-center">
              <p class="text-center m-0">
                Display language
              </p>
              <select
                class="form-select form-select-sm" 
                aria-label="Default select example"
              >
                <option selected>
                  English
                </option>
              </select>
            </div>
            
            <hr class="">
            <div class="d-flex justify-content-between my-2">
              <span class="text-dark">
                Password
              </span>
              <span class="">********</span>

              <a
                href="#"
                class="text-decoration-none float-end text-primary"
              >Change Password</a>
            </div>

            <div class="d-flex justify-content-start my-2">
              <span class="text-dark">
                Confirm Password
              </span>
              <span class="pl-5">********</span>
            </div>




            <div class="w-100 d-flex justify-content-end">
              <button
                type="button"
                class="cancel-btn px-5 btn justify-content-center d-flex btn-lg"
              >
                Cancel
              </button>

              <button
                type="button"
                class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 新增資料夾 -->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#CreateFolder"
    >
      Create Folder
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="CreateFolder"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content rounded">
          <div class="modal-header bg-blue">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Create Folder
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-5 
"
          >
            <p class=" m-0">
              Enter a name for the new folder
            </p>
            <input
              type="email"
              class="form-control"
              placeholder="Please fill out this field"
            >
            
            

          




            <div class="w-100 d-flex justify-content-end mt-5">
              <button
                type="button"
                class="cancel-btn mx-3 px-5 btn justify-content-center d-flex btn-lg"
              >
                Cancel
              </button>

              <button
                type="button"
                class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Rename Item -->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#RenameItem"
    >
      Rename Item
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="RenameItem"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content rounded">
          <div class="modal-header bg-blue">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Rename Item
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-5 
"
          >
            <p class=" m-0">
              Enter a name for the new item
            </p>
            <input
              type="email"
              class="form-control"
              placeholder="Please fill out this field"
            >
            
            

          




            <div class="w-100 d-flex justify-content-end mt-5">
              <button
                type="button"
                class="cancel-btn mx-3 px-5 btn justify-content-center d-flex btn-lg"
              >
                Cancel
              </button>

              <button
                type="button"
                class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- DeleteFolder -->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#DeleteFolder"
    >
      Delete Folder
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="DeleteFolder"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content rounded">
          <div class="modal-header bg-blue">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Delete Folder
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-5 "
          >
            <img
              class=" justify-content-center d-flex m-0"
              src="@/assets/alarm@2x.png"
            >
            <p class="text-center m-0">
              Are you sure you want to delete this folder?
            </p>
           
            
            <p class="text-center m-0 font-weight-bold">
              “Folder One (2)”
            </p>

          




            <div class="w-100 d-flex justify-content-center mt-5">
              <button
                type="button"
                class="cancel-btn mx-3 px-5 btn justify-content-center d-flex btn-lg"
              >
                No
              </button>

              <button
                type="button"
                class=" px-5 btn btn-danger justify-content-center d-flex btn-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload Files  -->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#UploadFiles"
    >
      Upload Files
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="UploadFiles"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-blue">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Upload Files - Root Folder
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray 
"
          >
            <p class="m-0">
              <img src="@/assets/upload@2x.png">
              Select files to be uploaded
            </p>

            <div class="bg-white p-5 text-center">
              <p class="m-5" style="color:#999;">
                Drag and drop files and folders here.
              </p>
            </div>
            <div
              class="w-100 d-flex mt-5"
            >
              <button
                type="button"
                class="cancel-btn btn mr-2"
              >
                Add files
              </button>
              <button
                type="button"
                class="cancel-btn btn  "
              >
                Add folder
              </button>
              <button
                type="button"
                class="cancel-btn  btn  "
              >
                Remove
              </button>

              <button
                type="button"
                class="cancel-btn  btn  mr-5"
              >
                Clear
              </button>
              <button
                type="button"
                class="modal-btn  btn  "
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
