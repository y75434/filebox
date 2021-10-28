<template>
  <div class="">
    <h1 class="text-dark">
      login 4個
    </h1>

    <div class="login"> 
      <!-- Forgot Password-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#ForgotPassword"
      >
        Forgot Password
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="ForgotPassword"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded">
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
              <h3 class="text-center dark-blue">
                Forgot Password
              </h3>
              <h5 class="text-center fw-bold ">
                Enter your email address below, and we’ll send you an email allowing you to
                reset password.
              </h5>
              
            
            
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                >Email</label>
                <input
                  type="email"
                  class="form-control"
                >
              </div>
          




              <div class="w-100 d-flex justify-content-center mt-5">
                <button
                  type="button"
                  class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
                >
                  Request Email Sent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
      <!-- Request Email Sent-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#RequestEmailSent"
      >
        Request Email Sent
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="RequestEmailSent"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded">
            <div class="modal-header bg-blue">
              <h5
                class="modal-title"
                id="exampleModalLabel"
              >
                Request Email Sent
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
              <h3 class="text-center dark-blue">
                Request Email Sent.
              </h3>
              <h5 class="text-center fw-bold ">
                Please check your email to reset password.
              </h5>
            </div>
          </div>
        </div>
      </div>
    
    
      <!-- Reset New Password-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#ResetNewPassword"
      >
        Reset New Password
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="ResetNewPassword"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded">
            <div class="modal-header bg-blue">
              <h5
                class="modal-title"
                id="exampleModalLabel"
              >
                Reset New Password
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
              <h3 class="text-center dark-blue">
                Reset New Password
              </h3>
              
              
            
            
              <div class="mb-3">
                <label
                  for="Newpassword"
                  class="form-label"
                >New password</label>
                <input
                  type="Newpassword"
                  class="form-control"
                >
              </div>
          
              <div class="mb-3">
                <label
                  for="Newpassword"
                  class="form-label"
                >Confirm password</label>
                <input
                  type="Newpassword"
                  class="form-control"
                >
              </div>




              <div class="w-100 d-flex justify-content-center mt-5">
                <button
                  type="button"
                  class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
                >
                  Update password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!-- Reset Success-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#ResetSuccess"
      >
        Reset Success
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="ResetSuccess"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded">
            <div class="modal-header bg-blue">
              <h5
                class="modal-title"
                id="exampleModalLabel"
              >
                Reset Success
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray p-5  text-center"
            >
              <h3 class=" dark-blue">
                Reset Success
              </h3>
              <h5 class=" fw-bold ">
                Your password has been reset.Please click below to sign in with your new
                password.
              </h5>

              <a
                href="#"
                class="mx-auto"
              >https://www.filevista.com/login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    


    <h1 class="text-dark">
      home 6個
    </h1>

    <div class="home d-flex">
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
                src="@/assets/images/cmd/alarm@2x.png"
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
                <img src="@/assets/images/cmd/upload@2x.png">
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
    </div>



    <h1 class="text-dark">
      admin 9個
    </h1>

    <div class="admin d-flex flex-wrap">
      <!-- Add New User-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#AddNewUser"
      >
        Add New User + Edit User Properties
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="AddNewUser"
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
                Add New User
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray p-0"
            >
              <!-- <div class="w-100 d-flex justify-content-between align-items-center"> -->
              <form class=" p-3">
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Username"
                    class=""
                  >User name</label>
                  <input
                    type="Username"
                    class="form-control inline-block"
                    id="Username"
                    style="width:320px;"
                  >
                </div>

                
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Fullname"
                    class="form-label"
                  >Full name</label>
                  <input
                    type="Fullname"
                    class="form-control"
                    id="Fullname"
                    style="width:320px;"
                  >
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Email"
                    class="col-form-label"
                  >Email</label>
                  
                  <input
                    type="Email"
                    id="Email"
                    class="form-control "
                    style="width:320px;"
                  >
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Description"
                    class="col-form-label"
                  >Description</label>
                  
                  <input
                    type="Description"
                    id="Description"
                    class="form-control "
                    style="width:320px;"
                  >
                </div>
              </form>
              <!-- </div> -->
            
              <hr class="">


              <div class="d-flex flex-column justify-content-between p-3">
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



      <!-- New Group Properties-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#NewGroupProperties"
      >
        New Group Properties + Edit Group Properties
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="NewGroupProperties"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-blue p-3">
              <h5
                class="modal-title"
                id="EditGroupProperties"
              >
                New Group Properties
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray p-0"
            >
              <hr class="">


              <div class="input-group border-0 align-items-center p-3">
                <label
                  for="Member users"
                  class="form-label m-0"
                >Member users</label>

                <input
                  type="text"
                  class="form-control h-100"
                  placeholder="Name, full name, email"
                >
                <button
                  class="btn bg-blue"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>

              <div class="d-flex justify-content-end">
                <span>Selected<span class="dark-blue">4</span></span>
                <span>Total<span class="">500</span></span>
              </div>


              <div class="w-100 p-3">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col ">
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
                  <tbody class="bg-white">
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
                      <td />
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
                      <td />
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
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>




           

              <div class="d-flex justify-content-between p-3">
                <hr class="">

                <span>Permissions</span>

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
                    As Group Members

                  </label>
                  <img
                    src=""
                    class="nav-icon"
                  >
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
                    As Group Manager
                  </label>
                </div>
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


      <!-- Import User-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#ImportUser"
      >
        Import User
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="ImportUser"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style="width:1000px"
          >
            <div class="modal-header bg-blue p-3">
              <h5
                class="modal-title"
                id="EditGroupProperties"
              >
                Import User
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray p-5"
            >
              <div class="w-50 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Connectto"
                  class=""
                >Connect to</label>
                <input
                  type="Connect to"
                  class="form-control inline-block disable"
                  id="Connectto"
                  style="width:320px;"
                >
              </div>


              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <div class="w-50 d-flex align-items-center justify-content-between">
                  <label
                    for="Username"
                    class=""
                  >Connect as</label>
                  <input
                    type="Username"
                    class="form-control inline-block"
                    id="Username"
                    style="width:320px;"
                    placeholder="admin"
                  >
                </div>
                <div class="w-50 d-flex align-items-center justify-content-between">
                  <label
                    for="Username"
                    class=""
                  >Password</label>
                  <input
                    type="Username"
                    class="form-control inline-block"
                    id="Username"
                    placeholder="********"
                    style="width:320px;"
                  >
                </div>
              </div>
            



              <div
                class="input-group mb-2 mt-4 border-0"
              >
                <button
                  type="button"
                  id="button-addon1"
                  class="btn btn-gray m-0"
                  style=""
                >
                  Search
                </button>
                <div class="">
                  <!-- <label
                  for="Name"
                  class="form-label"
                >Name</label> -->
                
                  <input
                    type="text"
                    placeholder="Please fill out this field"
                    class="form-control "
                  >
                </div>
                <div class="">
                  <input
                    type="text"
                    placeholder="Please fill out this field"
                    class="form-control h-100"
                  >
                </div>
                <div class="">
                  <input
                    type="text"
                    placeholder="Please fill out this field"
                    class="form-control h-100"
                  >
                </div>
              
              
              
                <button
                  type="button"
                  id="button-addon2"
                  class="btn btn-blue"
                >
                  Button
                </button>
              </div>


            


              <div class="w-100 p-3">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col ">
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
                        Description
                      </th>
                      <th scope="col">
                        Import result
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
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
                      <td />
                      <td />
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
                      <td />
                      <td />
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
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="modal-footer bg-white">
              <div class="d-flex bg-white">
                <button
                  type="button"
                  class="modal-btn btn "
                >
                  Import selected users
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




      <!-- New Root Folder Properties-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#a"
      >
        New Root Folder Properties + Edit Root Folder Properties
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="a"
        tabindex="-1"
      >
        <div class="modal-dialog ">
          <div
            class="modal-content"
            style="width:1000px"
          >
            <div class="modal-header bg-blue p-3">
              <h5
                class="modal-title"
                id="a"
              >
                New Root Folder Properties
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray "
            >
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <div class="w-50 d-flex align-items-center justify-content-center">
                  <label
                    for="Name"
                    class="m-2"
                  >Name</label>
                  <input
                    type="Name"
                    class="form-control inline-block"
                    id="Name"
                    style="width:320px;"
                    placeholder="Design Team"
                  >
                </div>
                <div class="w-50 d-flex align-items-center justify-content-center">
                  <label
                    for="Description"
                    class="m-2"
                  >Description</label>
                  <input
                    type="Description"
                    class="form-control inline-block"
                    id="Description"
                    placeholder=""
                    style="width:320px;"
                  >
                </div>
              </div>
            


              <div class="row p-5 modal-sidebar">
                <div class="col-4 h-100 ">
                  <div class="bg-white h-100 border">
                    <ul class="list-group border-0">
                      <li class="list-group-item d-flex align-items-center border-0">
                        <img
                          src="@/assets/images/file/single folder@2x.png"
                          class="icon32px"
                        >
                        <p class="text-dark m-0">
                          3. Another Root Folder
                        </p>
                      </li>

                      <li class="list-group-item d-flex align-items-center border-0">
                        <img
                          src="@/assets/images/file/folder@2x.png"
                          class="icon32px px-3"
                        >
                        <p class="text-dark m-0">
                          Subfolder
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-8 ">
                  <div
                    class="d-flex flex-column"
                    style="height:70px;"
                  >
                    <h5 class="m-0 fw-bold">
                      Access Control for
                    </h5>

                    <div class="d-flex justify-content-start align-items-center">
                      <img
                        src="@/assets/images/file/single folder@2x.png"
                        class="icon32px"
                      >
                      <p class="fw-bold m-0">
                        3. Another Root Folder
                      </p>
                      <div class=" form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        >
                        <label
                          class="form-check-label"
                          for="exampleCheck1"
                        >Inherit from parent</label>
                      </div>
                    </div>
                  </div>

                  <div class="row modal-selectuser">
                    <ul class="list-group bg-white col-3 p-0 h-100 border">
                      <li class="form-check list-group-item border-0 p-0">
                        <input
                          type="text"
                          placeholder="Selected Groups/users"
                          class="form-control"
                          id=""
                        >
                      </li>
                      
                      <li class="list-group-item border-0 p-0">
                        <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          >
                          <img
                            src="@/assets/images/icon/user@2x.png"
                            class="icon24px"
                          >
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            <!-- <p class="text-dark m-0"> -->
                            Design group

                            <!-- </p> -->
                          </label>
                        </div>
                      </li>
                    </ul>
                    <ul class="list-group bg-white col-3 p-0 h-100 border">
                      <li class="form-check list-group-item border-0 p-0">
                        <p
                          type="text"
                          class="form-control fw-bold"
                          id=""
                        >
                          Selected Groups/users
                        </p>
                      </li>
                      
                      <li class="list-group-item border-0 p-0">
                        <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          >
                          <img
                            src="@/assets/images/icon/user@2x.png"
                            class="icon24px"
                          >
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            <!-- <p class="text-dark m-0"> -->
                            Design group

                            <!-- </p> -->
                          </label>
                        </div>
                      </li>
                    </ul>

                    <div class="bg-white border col-6 p-0 h-100">
                      <div
                        class="nav nav-tabs"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          class="nav-link w-50 active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Permissions
                        </button>
                        <button
                          class="nav-link w-50"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Files Setting
                        </button>
                      </div>
                      <div
                        class="tab-content"
                        id="nav-tabContent"
                      >
                        <div
                          class="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <li class="list-group-item border-0 p-0 justify-content-between d-flex">
                            <div class="justify-content-center align-items-center p-0  d-flex">
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                <!-- <p class="text-dark m-0"> -->
                                Full

                                <!-- </p> -->
                              </label>
                            </div>
                            <div class="">
                              <input
                                class="form-check-input m-0"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              >
                            </div>
                          </li>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <p class="fw-bold">
                            Quata
                          </p>
                          <div
                            class="form-check"
                          >
                            <input
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              class="form-check-input"
                            >
                            <label
                              for="flexCheckDefault"
                              class="form-check-label"
                            > Limit disk space to</label>
                            <input
                              placeholder="enter code"
                              type="text"
                              id="promoCode"
                              class="form-control"
                              value=""
                              style="margin: 0px; background-color: white; font-size: 12px; border-width: 1px; border-color: rgb(238, 238, 238);"
                            >
                            <p class="fw-bold">
                              File Type
                            </p>
                            <div
                              class="form-check"
                            >
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                class="form-check-input"
                              >
                              <label
                                for="flexCheckDefault"
                                class="form-check-label"
                              > Restrict file types
                              </label>
                            </div>
                            <div
                              class="d-flex"
                              style="width:350px;"
                            >
                              <div class="form-check">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  class="form-check-input"
                                >
                                <label
                                  for="flexCheckDefault"
                                  class="form-check-label"
                                > docx
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  class="form-check-input"
                                >
                                <label
                                  for="flexCheckDefault"
                                  class="form-check-label"
                                > pdf
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  class="form-check-input"
                                >
                                <label
                                  for="flexCheckDefault"
                                  class="form-check-label"
                                > pdf
                                </label>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="form-check">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  class="form-check-input"
                                >
                                <label
                                  for="flexCheckDefault"
                                  class="form-check-label"
                                > docx
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  class="form-check-input"
                                >
                                <label
                                  for="flexCheckDefault"
                                  class="form-check-label"
                                > pdf
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  class="form-check-input"
                                >
                                <label
                                  for="flexCheckDefault"
                                  class="form-check-label"
                                > pdf
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer bg-white">
              <div
                class="d-flex"
              >
                <button
                  type="button"
                  class="cancel-btn btn sm-btn me-2"
                >
                  Cancel
                </button><button
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


      <!-- Edit Public Link-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#b"
      >
        Edit Public Link
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="b"
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
                Edit Public Link
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray p-0"
            >
              <!-- <div class="w-100 d-flex justify-content-between align-items-center"> -->
              <form class=" p-3">
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Username"
                    class=""
                  >User name</label>
                  <input
                    type="Username"
                    class="form-control inline-block"
                    id="Username"
                    style="width:320px;"
                  >
                </div>

                
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Fullname"
                    class="form-label"
                  >Full name</label>
                  <input
                    type="Fullname"
                    class="form-control"
                    id="Fullname"
                    style="width:320px;"
                  >
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Email"
                    class="col-form-label"
                  >Email</label>
                  
                  <input
                    type="Email"
                    id="Email"
                    class="form-control "
                    style="width:320px;"
                  >
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Description"
                    class="col-form-label"
                  >Description</label>
                  
                  <input
                    type="Description"
                    id="Description"
                    class="form-control "
                    style="width:320px;"
                  >
                </div>
              </form>
              <!-- </div> -->
            
              <hr class="">


              <div class="d-flex flex-column justify-content-between p-3">
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




      <!-- About FileVista-->
      <button
        type="button"
        class="btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#c"
      >
        About FileVista
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="c"
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
                About FileVista
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              class="modal-body bg-gray p-0"
            >
              <div class="w-100 d-flex p-3  align-items-center">
                <div class="col-6" />
                <div class="col-6">
                  <h4 class="text-dark fw-bold m-0">
                    FileVista
                  </h4>
                  <p class="text-gray m-0">
                    https:// www.doqubiz.com
                  </p>
                  <p class="text-gray m-0">
                    Copyright 2006-2021 DoQubiz Technology Co.,<br> Ltd All rights reserved.
                  </p>
                  <p class="text-gray m-0">
                    https:// www.doqubiz.com
                  </p>
                </div>
              </div>
            
              <hr class="hr-gray">


              <div class="d-flex justify-content-center  p-3">
                <div class="col-4">
                  <p class="text-dark m-0">
                    Build date
                  </p>
                  <p class="text-dark m-0">
                    Database version
                  </p>
                  <p class="text-dark m-0">
                    License version
                  </p>
                  <p class="text-dark m-0">
                    Machine name
                  </p>
                  <p class="text-dark m-0">
                    Operating system
                  </p>
                  <p class="text-dark m-0">
                    Process memory
                  </p><p class="text-dark m-0">
                    Framework
                  </p>
                  <p class="text-dark m-0">
                    Web framework
                  </p>
                  <p class="text-dark m-0">
                    Currect identity
                  </p>
                </div>
                <div class="col-7">
                  <p class="text-gray m-0">
                    Wed, 25 Oct 2021 15:17:30 GMT
                  </p>
                  <p class="text-gray m-0">
                    2.2.0
                  </p>
                  <p class="text-gray m-0">
                    4.03.01
                  </p><p class="text-gray m-0">
                    DQBserver
                  </p><p class="text-gray m-0">
                    Microsoft Windows 10.0.17764 (64-bit)
                  </p><p class="text-gray m-0">
                    800 MB (64-bit)
                  </p><p class="text-gray m-0">
                    .Net framework 4.81.522.5
                  </p><p class="text-gray m-0">
                    ASP.NET 4.81.3770.0
                  </p><p class="text-gray m-0">
                    IIS Apppool\demos.dqb.com
                  </p>
                </div>
              </div>
              <div
                class="modal-footer d-flex justify-content-center
"
              >
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
</template>
