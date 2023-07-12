<template>
  <div class="header-section">
    <header class="header">
      <img src="../assets/logoIcon.svg" class="logo" />
      <div class="header__lang-section">
        <language-choice />
        {{ t('fields.greeting') }}
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import LanguageChoice from './LanguageChoice.vue'

const { t } = useI18n({ useScope: 'global' })
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 16px;
  background-color: $white;

  &-section {
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgb(0 0 0 / 8%);
  }

  &__lang-section {
    display: flex;
    align-items: center;
  }
}

.logo {
  width: 120px;
  height: 120px;
}
</style>
