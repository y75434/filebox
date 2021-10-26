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
          <div class="modal-header bg-blue p-3">
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



            <div class="d-flex justify-content-between ">
              <div class="d-flex flex-column justify-content-center my-4">
                <div
                  class="d-flex justify-content-between mb-5"
                >
                  <span class="text-dark">
                    Password
                  </span>
                  <p class="mx-5 m-0 text-gray">
                    ********
                  </p>
                </div>
                <div
                  class="d-flex justify-content-between mb-5"
                >
                  <span class="text-dark">
                    Confirm Password
                  </span>
                  <p class="mx-5 m-0 text-gray">
                    ********
                  </p>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between">
                <a
                  href="#"
                  class="text-decoration-none ml-auto text-primary"
                >Change Password</a>
                <div class="d-flex ">
                  <button
                    type="button"
                    class="cancel-btn btn sm-btn me-2"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    class="modal-btn btn sm-btn"
                  >
                    Ok
                  </button>
                </div>
              </div>
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
            class="modal-body bg-gray p-5 justify-content-center d-flex flex-column"
          >
            <img
              class="mx-auto  m-0"
              style="width:73px; height:73px;"
              src="@/assets/alarm@2x.png"
            >
            <h5 class="text-center m-0">
              Are you sure you want to delete this folder?
            </h5>
           
            
            <h5 class="text-center m-0 font-weight-bold">
              “Folder One (2)”
            </h5>

          




            <div class="w-100 d-flex justify-content-center mt-5">
              <button
                type="button"
                class="sm-btn cancel-btn mx-3 px-5 btn justify-content-center d-flex"
              >
                No
              </button>

              <button
                type="button"
                class="sm-btn px-5 btn btn-danger justify-content-center d-flex "
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
              <p
                class="m-5"
                style="color:#999;"
              >
                Drag and drop files and folders here.
              </p>
            </div>
            <div
              class="w-100 d-flex mt-5"
            >
              <button
                type="button"
                class="cancel-btn btn me-2"
              >
                Add files
              </button>
              <button
                type="button"
                class="cancel-btn btn me-2 "
              >
                Add folder
              </button>
              <button
                type="button"
                class="cancel-btn btn me-2"
              >
                Remove
              </button>

              <button
                type="button"
                class="cancel-btn btn me-2"
              >
                Clear
              </button>
              <button
                type="button"
                class="modal-btn btn me-2"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit User Properties-->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#EditUserProperties"
    >
      Edit User Properties
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="EditUserProperties"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-blue p-3">
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
            class="modal-body bg-gray"
          >
            <div class="w-100 d-flex justify-content-between align-items-center">
              <form class="">
                <div class="mb-3 row g-3 justify-content-between align-items-center">
                  <label
                    for="Username"
                    class="form-label"
                  >User name</label>
                  <input
                    type="Username"
                    class="form-control"
                    id="Username"
                  >
                </div>
                <div class="mb-3 row g-3 align-items-center">
                  <label
                    for="Fullname"
                    class="form-label"
                  >Full name</label>
                  <input
                    type="Fullname"
                    class="form-control"
                    id="Fullname"
                  >
                </div>
                <div class="w-100 d-flex align-items-center">
                  <label
                    for="Email"
                    class="col-form-label"
                  >Email</label>
                  
                  <input
                    type="Email"
                    id="Email"
                    class="form-control "
                  >
                </div>
                <div class="w-100 d-flex align-items-center">
                  <label
                    for="Description"
                    class="col-form-label"
                  >Description</label>
                  
                  <input
                    type="Description"
                    id="Description"
                    class="form-control "
                  >
                </div>
              </form>
            </div>
            
            <hr class="">


            <div class="d-flex flex-column justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Changeuserpassword"
                >
                <label
                  class="form-check-label"
                  for="Changeuserpassword"
                >
                  Change user password
                </label>
                <div class="d-flex  mb-2">
                  <span class="text-dark">
                    Password
                  </span>
                  <p class="mx-5 m-0 text-gray">
                    ********
                  </p>
                </div>
                <div class="d-flex mb-2">
                  <span class="text-dark">
                    Confirm Password
                  </span>
                  <p class=" m-0 text-gray">
                    ********
                  </p>
                </div>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Usermustchangepasswordatnexttime"
                >
                <label
                  class="form-check-label"
                  for="Usermustchangepasswordatnexttime"
                >
                  User must change password at next time
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Usercannotchangepassword"
                >
                <label
                  class="form-check-label"
                  for="Usercannotchangepassword"
                >
                  User cannot change password
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Password never expires
                </label>
              </div>

              <hr class="">



              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Account is disabled

                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Account is locked out
                </label>
              </div>

              <div class="modal-footer bg-white">
                <div class="d-flex bg-white">
                  <button
                    type="button"
                    class="cancel-btn btn sm-btn me-2"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    class="modal-btn btn sm-btn"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- Edit Group Properties-->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#EditGroupProperties"
    >
      Edit Group Properties
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="EditGroupProperties"
      tabindex="-1"
      aria-labelledby="EditGroupProperties"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-blue p-3">
            <h5
              class="modal-title"
              id="EditGroupProperties"
            >
              Edit Group Properties
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray"
          >
            <hr class="">


            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              >
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>


            <div class="w-100">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      >
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Fulll name
                    </th>
                    <th scope="col">
                      Email
                    </th>
                    <th scope="col">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      >
                    </th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Rachellee@doqubiz.com</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      >
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Davidkang@doqubiz.com</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      >
                    </th>
                    <td colspan="2">
                      Peter
                    </td>
                    <td>Peterlin@doqubiz.com</td>
                  </tr>
                </tbody>
              </table>
            </div>



            <hr class="">

            <div class="d-flex flex-column justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Usermustchangepasswordatnexttime"
                >
                <label
                  class="form-check-label"
                  for="Usermustchangepasswordatnexttime"
                >
                  User must change password at next time
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Usercannotchangepassword"
                >
                <label
                  class="form-check-label"
                  for="Usercannotchangepassword"
                >
                  User cannot change password
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Password never expires
                </label>
              </div>

              <hr class="">



              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Account is disabled

                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Account is locked out
                </label>
              </div>

              <div class="modal-footer bg-white">
                <div class="d-flex bg-white">
                  <button
                    type="button"
                    class="cancel-btn btn sm-btn me-2"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    class="modal-btn btn sm-btn"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
