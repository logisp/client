<template>
  <div :class="['modal', show && 'is-active']">
    <div class="modal-background" @click="handleClose"/>
    <div class="modal-card" :style="cardStyle">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{title}}
          <slot name="title"/>
        </p>
        <slot name="head" />
        <button
          class="delete"
          v-if="hasClose"
          @click="handleClose"
        />
      </header>
      <section class="modal-card-body">
        {{content}}
        <slot></slot>
        <slot name="body"/>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer" />
        <button
          class="button is-success"
          :class="isLoading && 'is-loading'"
          v-if="hasConfirm"
          v-text="confirm || $t('confirm')"
          @click="handleClick"
        />
        <button
          class="button"
          v-if="hasCancel"
          v-text="cancel || $t('cancel')"
          v-t="'cancel'"
          @click="handleClose"
        />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCard',
  model: {
    prop: 'show',
    event: 'close'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    cardStyle: {
      type: String
    },
    handler: {
      type: Function
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    cancel: {
      type: String
    },
    confirm: {
      type: String
    },
    hasClose: {
      type: Boolean,
      default: true
    },
    hasCancel: {
      type: Boolean,
      default: true
    },
    hasConfirm: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {

  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleEscape () {
      console.log(1000)
    },
    async handleClick () {
      if (this.handler) {
        try {
          this.isLoading = true
          const result = await this.handler()
          if (result !== false) {
            this.handleClose()
          }
        } finally {
          this.isLoading = false
        }
      } else {
        this.$emit('confirm')
      }
    }
  }
}
</script>

<i18n>
zh:
  cancel: 取消
  confirm: 确认
en:
  cancel: Cancel
  confirm: Confirm
</i18n>
