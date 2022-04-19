<script setup>
import { useConfirmDialog } from "@vueuse/core";
import { ElMessage } from 'element-plus'

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
  // onReveal, 
  // onConfirm, 
  // onCancel 
} = useConfirmDialog();

const openDialog = async () => {
  const { data, isCanceled } = await reveal()
  if (!isCanceled) {
    ElMessage(data)
  }
}

</script>

<template>
  <el-button @click="openDialog">Reveal Modal</el-button>

  <el-button @click="reveal">Reveal Modal 2</el-button>

  <el-dialog v-model="isRevealed" title="Tips" width="30%" :before-close="cancel">
    <span>内容放这里</span>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">关闭(ESC)</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>