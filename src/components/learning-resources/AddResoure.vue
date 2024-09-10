<template>
  <BaseModal v-if="showAlert" title="Invalid Input" @closeModal="closeModal">
    <template #default>
      <p>Please, check entered data!</p>
      <p>The input fields must be filled in!</p>
    </template>
    <template #actions>
      <BaseButton @click="closeModal">✔️</BaseButton>
    </template>
  </BaseModal>
  <BaseCard>
    <form @submit.prevent="submit" ref="formRef">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleRef" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descRef">
        </textarea>
      </div>
      <div class="form-control">
        <label for="link">URL:</label>
        <input type="url" id="link" name="link" ref="linkRef" />
      </div>
      <BaseButton type="submit">Save</BaseButton>
    </form>
  </BaseCard>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  inject: ['addResource'],
  data() {
    return {
      showAlert: false,
    };
  },
  methods: {
    submit() {
      const title = this.$refs.titleRef.value.trim();
      const description = this.$refs.descRef.value.trim();
      const link = this.$refs.linkRef.value.trim();

      if (!title || !description || !link) {
        this.showAlert = true;
        return;
      }

      this.$refs.formRef.reset();
      this.addResource(title, description, link);
    },
    closeModal() {
      this.showAlert = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
