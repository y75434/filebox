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
                  class="m-5 hr-gray"
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
      
    <h2>user 3個</h2>
    <div class="d-flex">
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
                    class="form-control inline-block width-320"
                    id="Username"
                  >
                </div>

                
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Fullname"
                    class="form-label"
                  >Full name</label>
                  <input
                    type="Fullname"
                    class="form-control width-320"
                    id="Fullname"
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
                    class="form-control width-320"
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
                    class="form-control width-320"
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
                  <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                    <label
                      for="Password"
                      class="form-label"
                    >Password</label>
                    <input
                      type="Password"
                      class="form-control width-220"
                      id="Password"
                      placeholder="******"
                    >
                  </div>
                  <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                    <label
                      for="ConfirmPassword"
                      class="form-label"
                    >Confirm Password</label>
                    <input
                      type="Password"
                      class="form-control width-220"
                      id="ConfirmPassword"
                      placeholder="******"
                    >
                  </div>



                  <!-- <div class="d-flex  mb-2">
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
                  </div> -->
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
            class="modal-content "
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
              <div class="w-50 d-flex align-items-center justify-content-center mb-2">
                <label
                  for="Connectto"
                  class="m-2"
                >Connect to</label>
                <input
                  type="Connect to"
                  class="form-control inline-block disable width-320"
                  id="Connectto"
                >
              </div>


              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <div class="w-50 d-flex align-items-center justify-content-center">
                  <label
                    for="Connectas"
                    class="m-2"
                  >Connect as</label>
                  <input
                    type="Connectas"
                    class="form-control inline-block width-320"
                    id="Connectas"
                    placeholder=""
                  >
                </div>
                
                <div
                  class="w-50 d-flex align-items-center justify-content-center"
                >
                  <label
                    for="Password"
                    class="m-2"
                  >Password</label><input
                    type="Password"
                    id="Password"
                    placeholder="********"
                    class="form-control inline-block width-320"
                  >
                </div>
              </div>
            


              <div class="">
                <div
                  class="input-group mb-2 mt-4 border-0"
                >
                  <div class="d-flex flex-column">
                    <label
                      for="Name"
                      class="m-2"
                    >Name</label>

                    <input
                      type="text"
                      placeholder="Please fill out this field"
                      class="form-control "
                    >
                  </div>
                  <div class="d-flex flex-column">
                    <label
                      for="Full name"
                      class="m-2"
                    >Full name</label>

                    <input
                      type="text"
                      placeholder="Please fill out this field"
                      class="form-control h-100"
                    >
                  </div>
                  <div class="d-flex flex-column">
                    <label
                      for="Email"
                      class="m-2"
                    >Email</label>


                    <input
                      type="text"
                      placeholder="Please fill out this field"
                      class="form-control h-100"
                    >
                  </div>
              
                  <div class="d-flex flex-column">
                    <div class="h-50" />
                    <button
                      type="button"
                      id="button-addon2"
                      class="btn btn-blue"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
              


            


              <div class="w-100 mt-4">
                <table class="table">
                  <thead>
                    <tr class="modal-tr">
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
    </div>


    <h2>group 2個</h2>

    <div class=" d-flex flex-wrap">
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
              class="modal-body bg-gray p-3"
            >
              <div
                class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
              >
                <label for="Username">User name</label><input
                  type="Username"
                  id="Username"
                  class="form-control inline-block width-320"
                >
              </div>
              <div
                class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
              >
                <label for="Username">User name</label><input
                  type="Username"
                  id="Username"
                  class="form-control inline-block width-320"
                >
              </div>


              <hr class="">


              

              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span>Select group member</span>
                  <img
                    src="@/assets/images/cmd/Group.png"
                    class="ms-2 icon20px"
                  >
                </div>
                <div class="border-0">
                  <div class="d-flex ">
                    <input
                      type="text"
                      placeholder="Please fill out this field"
                      class="form-control h-100"
                    >
                  
                    <button
                      type="button"
                      id="button-addon2"
                      class="btn btn-blue"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-8 p-3">
                  <table class="table border">
                    <thead>
                      <tr>
                        <th scope="col">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            >
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <img
                                src="@/assets/images/icon/Union.png"
                                class="icon-16px"
                              >
                            </label>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            >
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <img
                                src="@/assets/images/icon/admin-solid.png"
                                class="icon-16px"
                              >
                            </label>
                          </div>
                        </th>
                        <th scope="col">
                          Name
                        </th>
                        <th scope="col">
                          Fulll name
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
                        <td>
                          <input
                            type="checkbox" 
                            class="form-check-input"
                          >
                        </td>
                        <td>Otto</td>
                        <td>Rachel Lee</td>
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
                        <td>
                          <input
                            type="checkbox" 
                            class="form-check-input"
                          >
                        </td>

                        <td>Thornton</td>
                        <td>Rachel Lee</td>
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
                        <td>
                          <input
                            type="checkbox" 
                            class="form-check-input"
                          >
                        </td>
                        <td>Rachel Lee</td>
                        <td>Rachel Lee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul class="list-group border-0 col-4 p-3  border">
                  <li class="list-group-item  bg-white d-flex align-items-center border-0" />
                  <li class="list-group-item bg-white  border-0">
                    <button
                      type="button"
                      class="table-btn btn  d-flex align-items-center"
                    >
                      <img
                        src="@/assets/images/icon/admin-solid.png"
                        class="icon-16px"
                      >
                      David
                      <img
                        src="@/assets/images/cmd/del.png"
                        class="icon-20px"
                      >
                    </button>
                  </li>
                </ul>
              </div>


           

              <div class="d-flex justify-content-end p-3">
                <p>
                  <span>Total
                  </span>
                  <span class=" fw-bold">500</span>
                </p>
                <p class="ms-3">
                  <span class="dark-blue fw-bold">4
                  </span>
                  <span>Selected</span>
                </p>
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

    <h2>folder public</h2>

    <div class="d-flex">
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
                    class="form-control inline-block width-320"
                    id="Name"
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
                    class="form-control inline-block width-320"
                    id="Description"
                    placeholder=""
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
                    class="d-flex flex-column height-70px"
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
                              class="form-control m-0"
                              value=""
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
                              class="d-flex width-350"
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
                    for="Name in link"
                    class=""
                  >Name in link</label>
                  <input
                    type="Name in link"
                    class="form-control inline-block width-320"
                    id="Name in link"
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
                    id="Usermustchangepasswordatnexttime"
                  >
                  <label
                    class="form-check-label"
                    for="Usermustchangepasswordatnexttime"
                  >
                    Open linked file in the brower
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
                    class="form-check-label align-items-center d-flex"
                    for=""
                  >
                    Link expires <input
                      type="text"
                      class=" form-control w-25"
                    >in days

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
                    class="form-check-label align-items-center d-flex"
                    for=""
                  >
                    Link can be opened only <input
                      type="text"
                      class=" form-control w-25"
                    >times

                  </label>
                </div>


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
                    Protect link with password
                  </label>
                  <div
                    class="w-100 d-flex align-items-center justify-content-between mb-2"
                  >
                    <label
                      for="Password"
                      class="form-label"
                    >Password</label><input
                      type="Password"
                      id="Password"
                      placeholder="******"
                      class="form-control width-220"
                    >
                  </div>
                  <div
                    class="w-100 d-flex align-items-center justify-content-between mb-2"
                  >
                    <label
                      for="Confirmpassword"
                      class="form-label"
                    >Confirm password</label><input
                      type="Confirmpassword"
                      id="Confirmpassword"
                      placeholder="******"
                      class="form-control width-220"
                    >
                  </div>
                </div>
                

                <hr class="">

                <div class="mb-3">
                  <label
                    for="Public link"
                    class="form-label"
                  >Public link</label>
                  <input
                    type="password"
                    class="form-control"
                    id="Public link"
                  >
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



    <h1>app setting 1個</h1>
    <!-- Edit Public Link-->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#ApplicationSettings"
    >
      Application Settings
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="ApplicationSettings"
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
              Application Settings
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-3"
          >
            <ul
              class="nav nav-tabs"
              id="myTab"
              role="tablist"
            >
              <li
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#General"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  General
                </button>
              </li>
              <li
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Logging
                </button>
              </li>
              <li
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Email
                </button>
              </li>
            </ul>
            <div
              class="tab-content "
              style="height:400px"
              id="myTabContent"
            >
              <div
                class="tab-pane fade show active"
                id="General"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="col-12 py-3">
                  <div class="form-check align-items-center">
                    <label
                      class="form-check-label align-items-center d-flex"
                      for=""
                    >
                      Passwords will expire after  <input
                        type="text"
                        class=" form-control w-25 mx-2"
                      >days

                    </label>
                  </div>
                  <div class="form-check">
                    <label
                      class="form-check-label align-items-center d-flex"
                      for=""
                    >
                      Users will be locked out after 
                      <input
                        type="text"
                        class=" form-control w-25 mx-2"
                      >invalid login attempts


                    </label>
                  </div>
                  <div class="form-check">
                    <label
                      class="form-check-label align-items-center d-flex"
                      for=""
                    >
                      Maximum public link age 
                      <input
                        type="text"
                        class=" form-control w-25 mx-2"
                      >days
                    </label>
                  </div>
                  <div
                    class="form-check align-items-center
"
                  >
                    <label
                      class="form-check-label align-items-center d-flex"
                      for=""
                    >
                      Maximum public link hits
                      <input
                        type="text"
                        class=" form-control w-25 mx-2"
                      >
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="">
                  <p>Log Events</p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="All"
                    >
                    <label
                      class="form-check-label"
                      for="All"
                    >
                      All
                    </label>
                  </div>

                  <hr class="mt-1">
                  <div class="d-flex flex-column align-items-center">
                    <div class="col-10 d-flex justify-content-between">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="Login"
                          value="Login"
                        >
                        <label
                          class="form-check-label"
                          for="Login"
                        >Login</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="Extract"
                          value="Extract"
                        >
                        <label
                          class="form-check-label"
                          for="Extract"
                        >Extract</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="Delete"
                          value="Delete"
                        >
                        <label
                          class="form-check-label"
                          for="Delete"
                        >Delete</label>
                      </div>
                    </div>
                    <div class="col-10 d-flex justify-content-between">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="Failure"
                          value="Failure"
                        >
                        <label
                          class="form-check-label"
                          for="Failure"
                        >Failure</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="Download"
                          value="Download"
                        >
                        <label
                          class="form-check-label"
                          for="Download"
                        >Download</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="Copy"
                          value="Copy"
                        >
                        <label
                          class="form-check-label"
                          for="Copy"
                        >Copy</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="">
                  <p class="fw-bold">
                    Log Size
                  </p>
                  <div class="col-12">
                    <div class="d-flex align-items-center">
                      <label
                        class="form-check-label align-items-center d-flex"
                        for=""
                      >
                        Maximum log size  <input
                          type="text"
                          class=" form-control mx-3 w-25"
                        >events

                      </label>
                    </div>
                    <p class="py-2">
                      When maximum log size is reached
                    </p>
                    <div class="d-flex align-items-center">
                      <label
                        class="form-check-label align-items-center d-flex"
                        for=""
                      >
                        Delete events older than <input
                          type="text"
                          class=" form-control mx-3 w-25"
                        > days


                      </label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button
                      type="button"
                      class="cancel-btn btn  me-2"
                    >
                      Clear Log
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div class="form-check py-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Sendemailnotifications"
                  >
                  <label
                    class="form-check-label"
                    for="Sendemailnotifications"
                  >
                    Send email notifications
                  </label>
                </div>

                <hr class="">


                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Fromemailaddress"
                    class=""
                  >From email address</label>
                  <input
                    type="email"
                    class="form-control inline-block width-270"
                    id="Fromemailaddress"
                  >
                </div>


                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Email"
                    class="col-form-label"
                  >SMTP host</label>
                  
                  
                  <select
                    class="form-select width-270"
                    aria-label="Default select example"
                  >
                    <option selected>
                      Anonymous
                    </option>
                  </select>
                </div>


                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="SMTPport"
                    class=""
                  >SMTP port</label>
                  <input
                    type="email"
                    class="form-control inline-block width-150"
                    id="SMTPport"
                  >
                </div>


                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="SMTPauthentication"
                    class="col-form-label"
                  >SMTP authentication</label>
                  
                  
                  <select
                    class="form-select  width-270
"
                    aria-label="Default select example"
                  >
                    <option selected>
                      Anonymous
                    </option>
                  </select>
                </div>



                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Username"
                    class="form-label"
                  >User name</label>
                  <input
                    type="Password"
                    class="form-control width-270"
                    id="Username"
                    disabled
                  >
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Password"
                    class="form-label"
                  >Password</label>
                  <input
                    type="Password"
                    class="form-control width-270"
                    id="Password"
                    disabled
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="UseSSL"
                  >
                  <label
                    class="form-check-label"
                    for="UseSSL"
                  >
                    Use SSL

                  </label>
                </div>
                <div class="d-flex justify-content-end">
                  <button
                    type="button"
                    class="cancel-btn btn  me-2"
                  >
                    Test email
                  </button>
                </div>
              </div>
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
</template>
