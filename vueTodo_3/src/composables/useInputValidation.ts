import { ref, computed } from 'vue'

export function useInputValidation(initialValue = '') {
  const value = ref(initialValue)
  const touched = ref(false)

  const validation = computed(() => {
    const trimmed = value.value.trim()
    return {
      isEmpty: !trimmed,
      isTooShort: trimmed.length > 0 && trimmed.length < 3,
      isTooLong: trimmed.length > 100,
      isValid: trimmed.length >= 3 && trimmed.length <= 100
    }
  })

  const errorMessage = computed(() => {
    if (!touched.value) return ''
    if (validation.value.isEmpty) return 'Please enter a task'
    if (validation.value.isTooShort) return 'Minimum 3 characters'
    if (validation.value.isTooLong) return 'Maximum 100 characters'
    return ''
  })

  const markAsTouched = () => touched.value = true

  return { value, errorMessage, validation, markAsTouched }
}