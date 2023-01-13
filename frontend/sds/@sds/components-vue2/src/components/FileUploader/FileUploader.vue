<!--
TEC - Automated Mismatch Detection Tool
Copyright 2023 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
DM23-003
-->
 
 
<template>
  <div
    data-id="sds-file-uploader"
    class="border border-dashed border-2 dark:border-gray-700 rounded p-4 space-y-2 relative"
  >
    <input
      :id="fileUploaderId"
      ref="fileInput"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :required="required"
      class="absolute inset-0 opacity-0 cursor-pointer"
      :name="name"
      @change="processFiles"
    >
    <div class="space-y-2">
      <div class="flex gap-2">
        <label
          :for="fileUploaderId"
          class="btn btn-default cursor-pointer z-10"
        >Browse</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="my-auto h-4 w-4 text-tertiary"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24s24 10.8 24 24s-10.8 24-24 24z"
          />
        </svg>
        <span class="my-auto">{{ multiple ? 'Drag and drop your files here' : 'Drag and drop a file here' }}</span>
      </div>
      <p class="text-gray-500 text-sm">
        {{
          helperText ? helperText : multiple ? `Use files under ${filesize} MB.` : `Use a file under ${filesize} MB.`
        }}
      </p>
      <!-- @slot File list content. @binding files, invalidFiles -->
      <slot
        :files="fileList"
        :invalid-files="invalidFileList"
      >
        <ul v-if="fileList.length > 0 || invalidFileList.length > 0">
          <li
            v-for="file in fileList"
            :key="file.name + file.size + file.type + file.lastModified"
            class="py-2 border-b only:border-0 last:pb-0 last:border-0"
          >
            <div class="flex">
              <div class="my-auto flex gap-1 flex-grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-4 h-4 my-auto text-success"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2 44.2l108.2-108.2c10.9-10.9 28.7-10.9 39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
                  />
                </svg>
                <span class="my-auto">{{ file.name }}</span>
                <span class="my-auto text-tertiary text-sm uppercase">({{ byteToSize(file.size) }})</span>
              </div>
              <button
                class="my-auto z-10 link hover:text-danger dark:hover:text-red-400"
                @click="removeFile(file)"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 x"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Remove file</span>
              </button>
            </div>
          </li>
          <li
            v-for="file in invalidFileList"
            :key="file.name + file.size + file.type + file.lastModified"
            class="py-2 border-b only:border-0 last:pb-0 last:border-0"
          >
            <div class="flex">
              <div class="my-auto flex gap-1 flex-grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-4 h-4 my-auto text-danger"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M175 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L303 175c9.4-9.3 24.6-9.3 33.1 0c10.2 9.4 10.2 24.6 0 33.1l-46.2 47l46.2 47.9c10.2 9.4 10.2 24.6 0 33.1c-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2l-47 46.2c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9l-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zm337 81c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
                  />
                </svg>
                <span class="my-auto">{{ file.name }}</span>
                <span class="my-auto text-tertiary text-sm uppercase">({{ byteToSize(file.size) }})</span>
              </div>
              <button
                class="my-auto z-10 link hover:text-danger dark:hover:text-red-400"
                @click="removeInvalidFile(file)"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 x"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Remove file</span>
              </button>
            </div>
            <p
              v-if="file.invalidType"
              class="text-danger text-xs ml-5 mt-1"
            >
              Invalid file type
            </p>
            <p
              v-if="file.invalidSize"
              class="text-danger text-xs ml-5 mt-1"
            >
              File size is over {{ filesize }} MB.
            </p>
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
import uuid from '../../helpers/uuid';

export default {
  name: 'SdsFileUploader',
  props: {
    /**
     * An array of files. This prop is optional.
     * 
     * This syncs with the internal fileList and invalidFileList
     * to give developers more control over files.
     * 
     * Each file has `name`, `type`, `size`, `lastModified` properties.
     * 
     * You can check a file's validity using its `invalidType`
     * and `invalidSize` boolean properties. They are only
     * present if the file is invalid
     */
    value: { type: Array, default: () => [] },
    /**
     * Determines the form name to use for the upload input field.
     */
    name: { type: String, default: 'sdsFileUploader' },
    /**
     * Determines whether the user can upload more than one file.
     */
    multiple: { type: Boolean, default: false },
    /**
     * Determines if the file upload field is required.
     */
    required: { type: Boolean, default: false },
    /**
     * Determines the accepted file formats used on the upload input field.
     */
    accept: { type: String, default: undefined },
    /**
     * Determines the file types used for validation.
     */
    allowedFiletypes: { type: Array, default: () => [] },
    /**
     * Determines the maximum allowed filesize in megabytes for each uploaded file.
     */
    filesize: { type: Number, default: 10 },
    /**
     * Determines the helper text used to describe the upload field.
     */
    helperText: { type: String, default: undefined }
  },
  data() {
    return {
      fileList: [],
      invalidFileList: []
    }
  },
  computed: {
    fileUploaderId() {
      return `sds-file-uploader-${uuid()}`;
    },
  },
  watch: {
    value: {
      handler (value) {
        if (!this.$refs.fileInput) return
        const dt = new DataTransfer()
        value.forEach(file => dt.items.add(file))
        this.$refs.fileInput.files = dt.files
        this.fileList = []
        this.invalidFileList = []
        Array.from(dt.files).forEach(file => {
          this.processSingleFile(file)
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    removeFile(file) {
      if (!this.$refs.fileInput) return

      const dt = new DataTransfer()
      this.fileList = this.fileList.filter((i) => !(
        i.name === file.name &&
        i.lastModified === file.lastModified &&
        i.size === file.size &&
        i.type === file.type
      ))
      this.fileList.forEach((i) => {
        dt.items.add(i)
      })
      this.$refs.fileInput.files = dt.files

      /**
       * Emitted when a valid file is removed.
       */
      this.$emit('remove', { files: this.fileList, invalidFiles: this.invalidFileList })
      this.$emit('input', [...this.fileList, ...this.invalidFileList])
    },

    removeInvalidFile(file) {
      this.invalidFileList = this.invalidFileList.filter((i) => !(
        i.name === file.name &&
        i.lastModified === file.lastModified &&
        i.size === file.size &&
        i.type === file.type
      ))

      /**
       * Emitted when an invalid file is removed.
       */
      this.$emit('remove-invalid', { files: this.fileList, invalidFiles: this.invalidFileList })
      this.$emit('input', [...this.fileList, ...this.invalidFileList])
    },

    findFile(file) {
      return this.fileList.find((i) => (
        i.name === file.name &&
        i.lastModified === file.lastModified &&
        i.size === file.size &&
        i.type === file.type
      ))
    },

    processFiles(event) {
      if (!event.target) return
      const files = event.target.files
      Array.from(files).forEach((file) => {
        const existingFile = this.findFile(file)
        if (!existingFile) {
          this.processSingleFile(file)
        }
      })

      /**
       * Emitted when a file or files have been added.
       */
      this.$emit('add', { files: this.fileList, invalidFiles: this.invalidFileList })
      this.$emit('input', [...this.fileList, ...this.invalidFileList])
    },

    processSingleFile(file) {
      if (!this.$refs.fileInput) return

      const dt = new DataTransfer()
      const filesize = parseFloat(((file.size / 1024) / 1024).toFixed(4)) // MB
      const filetype = file.type
      const filetypeCheckSuccessful = (this.allowedFiletypes.length > 0 && this.allowedFiletypes.includes(filetype)) || this.allowedFiletypes.length < 1

      if (this.multiple) {
        this.fileList.forEach((i) => {
          dt.items.add(i)
        })
      }

      if (filesize <= this.filesize && filetypeCheckSuccessful) {
        dt.items.add(file)
        this.$refs.fileInput.files = dt.files
        this.fileList = Array.from(this.$refs.fileInput.files) || []
        if (!this.multiple) {
          this.invalidFileList = []
        }
      } else if (filesize > this.filesize) {
        if (this.multiple) {
          file.invalidSize = true
          this.invalidFileList.push(file)
          this.invalidFileList = this.invalidFileList.filter((file, index, self) =>
            index === self.findIndex((i) => (
              i.name === file.name &&
              i.lastModified === file.lastModified &&
              i.size === file.size &&
              i.type === file.type
            ))
          )
        } else {
          this.fileList = []
          this.$refs.fileInput.files = dt.files;
          file.invalidSize = true
          this.invalidFileList = [file]
        }
      } else if (!filetypeCheckSuccessful) {
        if (this.multiple) {
          file.invalidType = true
          this.invalidFileList.push(file)
          this.invalidFileList = this.invalidFileList.filter((file, index, self) =>
            index === self.findIndex((i) => (
              i.name === file.name &&
              i.lastModified === file.lastModified &&
              i.size === file.size &&
              i.type === file.type
            ))
          )
        } else {
          this.fileList = []
          this.$refs.fileInput.files = dt.files;
          file.invalidType = true
          this.invalidFileList = [file]
        }
      }
    },

    byteToSize(bytes) {
      const sizes = ['b', 'kb', 'mb', 'gb', 'tb']
      if (bytes <= 0 || bytes > 999999999999999) { return 'n/a' }
      const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`, 10)
      if (i === 0) { return `${bytes}${sizes[i]}` }
      return `${Math.ceil(bytes / 1024 ** i)} ${sizes[i]}`
    }
  }
}
</script>