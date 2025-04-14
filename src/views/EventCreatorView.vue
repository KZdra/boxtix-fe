<script setup lang="ts">
import { ref, reactive } from "vue";
import Swal from "sweetalert2";
import MainLayout from "@/components/layouts/MainLayout.vue";
import { ElDialog } from "element-plus";
import { apiService } from "@/utils/apiService";
const dialogFormVisible = ref(false);
const formLabelWidth = "200px";

interface EODATA {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  picture_profile: File | null;
}
const eoData = reactive<EODATA>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  picture_profile: null,
});
const generateFormData = (data: EODATA) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("password_confirmation", data.password_confirmation);

  if (data.picture_profile) {
    formData.append("picture_profile", data.picture_profile);
  }

  return formData;
};

const reset = (val: boolean) => {
  eoData.name = "";
  eoData.email = "";
  eoData.password = "";
  eoData.password_confirmation = "";
  eoData.picture_profile = null;
  dialogFormVisible.value = val;
};
const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file && file.type.startsWith("image/")) {
    eoData.picture_profile = file;
  } else {
    Swal.fire("Oops!", "File harus berupa gambar!", "warning");
  }
};
const handleRegistration = async () => {
  dialogFormVisible.value = false;
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Register!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const formData = generateFormData(eoData);
        const res = await apiService.apiPost("/api/auth/register", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if ((res.status = 201)) {
          reset(false);
          Swal.fire({
            title: "Berhasil!",
            text: "Registrasi Berhasil! , Anda Akan Diarahkan Ke Panel :D",
            icon: "success",
            showConfirmButton:false,
            timer:1500
          });
          setTimeout(() => {
            window.location.href = "https://admin-boxtix.smkicb-teknika.sch.id/login";
          }, 2000);
        }
      } catch (error) {
        Swal.fire({
          title: "error!",
          text: "Gagal.",
          icon: "error",
        });
        reset(false);
        console.log(error);
      } finally {
        reset(false);
      }
    }
  });
};

const stats = [
  {
    title: "Cities",
    value: "80++",
    image: "/asset/bgcities.webp",
  },
  {
    title: "Ticket Handling",
    value: "2.047.987++",
    image: "/asset/bgtickets.webp",
  },
  {
    title: "Events",
    value: "750++",
    image: "/asset/bgevents.webp",
  },
];
</script>

<template>
  <MainLayout>
    <section
      class="w-full min-h-screen bg-gradient-to-bl from-gsatu via-gdua to-gtiga flex flex-col items-center justify-center text-white p-6"
    >
      <h2
        class="text-2xl md:text-3xl font-bold mb-8 text-center"
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :enter="{ opacity: 1, y: 0 }"
        transition="{ type: 'spring', stiffness: 100 }"
      >
        Mulai Jadi Event Creator di Box-Tix Sekarang!
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div
          v-for="(stat, index) in stats"
          v-motion
          :key="index"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          transition="{ delay: index * 20, type: 'spring', stiffness: 120 }"
        >
          <div
            class="relative rounded-2xl overflow-hidden h-80 flex items-center justify-center"
          >
            <img
              :src="stat.image"
              alt="Background"
              class="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div class="relative text-center">
              <p class="text-3xl font-bold">{{ stat.value }}</p>
              <p class="text-lg mt-2">{{ stat.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="px-5 py-3 text-lg font-medium text-black bg-boxyellow rounded-3xl cursor-pointer mt-10"
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :enter="{ opacity: 1, y: 0 }"
        trasition="{ type: 'spring', stiffness: 100 }"
        @click="reset(true)"
      >
        Daftar Sekarang!
      </button>

      <el-dialog
        v-model="dialogFormVisible"
        title="Registrasi Event Creator"
        width="550"
      >
        <el-form :model="eoData">
          <el-form-item label="Nama:" :label-width="formLabelWidth">
            <el-input v-model="eoData.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Email :" :label-width="formLabelWidth">
            <el-input v-model="eoData.email" autocomplete="off" type="email" />
          </el-form-item>
          <el-form-item label="Password :" :label-width="formLabelWidth">
            <el-input
              type="password"
              v-model="eoData.password"
              autocomplete="off"
              show-password
            />
          </el-form-item>
          <el-form-item
            label="Konfirmasi Password :"
            :label-width="formLabelWidth"
          >
            <el-input
              type="password"
              v-model="eoData.password_confirmation"
              autocomplete="off"
              show-password
            />
          </el-form-item>
          <el-form-item
            label="Photo Profile EO :"
            :label-width="formLabelWidth"
          >
            <input type="file" @change="handleFileUpload" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="reset(false)">Cancel</el-button>
            <el-button type="primary" @click="handleRegistration">
              Registrasi!
            </el-button>
          </div>
        </template>
      </el-dialog>
    </section>
  </MainLayout>
</template>
