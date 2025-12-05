/**
 * Converts an object to FormData, removing null, undefined, and empty string values
 * Supports both regular values and File objects
 * @param data - The object to convert (can contain File objects)
 * @returns FormData object
 */
export const convertToFormData = (data: Record<string, any>): FormData => {
   const formData = new FormData()

   Object.entries(data).forEach(([key, value]) => {
      // Skip null, undefined, and empty strings
      if (value !== null && value !== undefined && value !== '') {
         // Handle arrays (like File arrays)
         if (Array.isArray(value)) {
            value.forEach((item, index) => {
               if (item instanceof File) {
                  // برای فایل‌ها، نام فیلد را بدون index استفاده می‌کنیم
                  formData.append(key, item)
               } else if (item !== null && item !== undefined && item !== '') {
                  formData.append(`${key}[${index}]`, item)
               }
            })
         }
         // Handle File objects
         else if (value instanceof File) {
            formData.append(key, value)
         }
         // Handle regular values
         else {
            formData.append(key, value)
         }
      }
   })

   return formData
}

/**
 * Debug function to log FormData contents
 * @param formData - The FormData object to debug
 */
export const debugFormData = (formData: FormData): void => {
   console.log('=== FormData Debug ===')
   for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
         console.log(
            `${key}: File - ${value.name} (${value.size} bytes, ${value.type})`
         )
      } else {
         console.log(`${key}:`, value)
      }
   }
   console.log('=== End FormData Debug ===')
}

/**
 * تبدیل داده‌های فرم به FormData با در نظر گرفتن فیلدهای تغییر کرده
 */
export const createFormDataWithDirtyFields = <T extends Record<string, any>>(
   data: T,
   dirtyFields: Record<string, boolean | boolean[]>,
   options?: {
      u_id?: string
      existingImages?: Array<{ u_id: string; image: string }>
      isEditMode?: boolean
   }
): FormData => {
   const formData = new FormData()
   const { u_id, existingImages = [], isEditMode = false } = options || {}

   // اضافه کردن u_id در حالت ادیت
   if (u_id) {
      formData.append('u_id', u_id)
   }

   // ارسال فقط فیلدهای تغییر کرده
   Object.keys(data).forEach((key) => {
      const value = data[key as keyof T]
      const isFieldDirty = dirtyFields[key]

      // اگر فیلد تغییر کرده یا در حالت ایجاد هستیم
      if (
         (isFieldDirty &&
            (Array.isArray(isFieldDirty)
               ? isFieldDirty.some(Boolean)
               : isFieldDirty)) ||
         !isEditMode
      ) {
         if (key === 'worksample_image') {
            // برای تصاویر: ارسال فایل‌های جدید + تصاویر باقی‌مانده
            const newFiles = value as File[]

            // ارسال فایل‌های جدید
            newFiles.forEach((file) => {
               if (file instanceof File) {
                  formData.append(key, file)
               }
            })

            // ارسال تصاویر باقی‌مانده
            existingImages.forEach((image) => {
               formData.append(key, image.u_id)
            })
         } else if (value !== null && value !== undefined && value !== '') {
            formData.append(key, value as string)
         }
      }
   })

   return formData
}
