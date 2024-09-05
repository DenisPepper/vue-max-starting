<template>
  <form class="add-form" @submit.prevent="handleSubmit" ref="form">
    <fieldset>
      <label>
        First name
        <input type="text" name="firstName" v-model="firstName" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" v-model="phone" />
      </label>
      <label>
        Email
        <input type="email" name="email" v-model="email" />
      </label>
    </fieldset>
    <button class="add-form__btn-reset" type="reset">Clear</button>
    <button class="add-form__btn-submit" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      firstName: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    handleSubmit() {
      /*
      const data = new FormData(this.$refs.form);
      const newFriend = {
        firstName: data.get('firstName'),
        phone: data.get('phone'),
        email: data.get('email'),
      };
      */
      const data = {
        firstName: this.firstName,
        phone: this.phone,
        email: this.email,
      };
      this.$emit('add-friend', data);
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
.add-form {
  display: grid;
  gap: 20px;
  justify-content: center;
}

.add-form fieldset {
  display: grid;
}

.add-form__btn-reset,
.add-form__btn-submit {
  max-width: 40%;
  justify-self: end;
}
</style>
