<template>
  <div class="tw-grid tw-grid-cols-2 tw-h-screen">
    <div
      class="tw-bg-slate-900 tw-flex tw-justify-start tw-items-center tw-p-20"
    >
      <h1 class="tw-text-5xl tw-text-white tw-font-poppins-regular">
        {{ $t('login.title') }}
      </h1>
    </div>
    <div class="tw-bg-login-background tw-bg-no-repeat tw-bg-cover"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'login',
}
</script>
