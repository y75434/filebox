<template>
  <div class="about">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
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
            class="modal-body bg-gray
"
          >
            <p class="text-center">
              If you have account and password issues, please contact your system
              administrator.
            </p>
           
            <button
              type="button"
              class="modal-btn py-3 btn btn-primary justify-content-center d-flex"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
