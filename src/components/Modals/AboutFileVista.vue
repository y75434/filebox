<template>
  <div class="">
    <!-- About FileVista-->
    <!-- <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#c"
    >
      About FileVista
    </button> -->

    <!-- Modal -->
    <div
      data-bs-toggle="c"

      class="modal fade "
      id="c"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div
          class="modal-content bg-transparent"
        >
          <div class="modal-header bg-blue p-3">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              {{ $t('MODAL.ABOUTFILEVISTA') }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-0 radius"
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
              class="modal-footer  d-flex justify-content-center"
            >
              <button
                type="button"
                class="modal-btn btn sm-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {{ $t("GENERAL.OK") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'AboutFileVista',
 data() {
     return {
      showModal: false
     }
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     }
   }
}
</script>

