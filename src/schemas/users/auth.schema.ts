import { z } from "zod";
import {
  emailSchema,
  passwordSchema,
  phoneNumberSchema,
  requiredStringSchema,
  createEnumSchema,
  optionalEmailSchema,
  nameSchema,
  usernameSchema,
} from "../base.schema";

// ========================================
// Login Schemas
// ========================================

export const loginSchema = z.object({
  phone_number: phoneNumberSchema,
  password: passwordSchema,
});

// ========================================
// Register Schemas
// ========================================

/**
 * Register schema with Farsi error messages
 *
 * Error messages are defined in the schema itself:
 * - phoneNumberSchema: "شماره موبایل نمی‌تواند خالی باشد." / "لطفا یک شماره موبایل صحیح وارد نمایید"
 * - passwordSchema: "رمز عبور باید حداقل 5 کاراکتر باشد."
 * - requiredStringSchema: "{fieldName} نمی‌تواند خالی باشد."
 * - emailSchema: "ایمیل معتبر نیست"
 *
 * To customize error messages for specific fields, you can:
 * 1. Use requiredStringSchema with custom field name
 * 2. Create custom schemas with specific error messages
 * 3. Use .refine() for complex validation with custom messages
 * 4. Use createEnumSchema for enum fields with Farsi error messages
 *
 * Examples for other enum fields:
 * - engineering_type: createEnumSchema(Object.values(EngineeringType), 'نوع مهندسی')
 * - company_type: createEnumSchema(Object.values(CompanyType), 'نوع شرکت')
 */
export const registerSchema = z
  .object({
    username: usernameSchema,
    phone_number: phoneNumberSchema,
    password: passwordSchema,
    confirm_password: passwordSchema,
    name: nameSchema,
    //  email: optionalEmailSchema,
    expiry_days: z.number().min(1, "مدت زمان صحیح نیست"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "رمز عبور و تکرار آن باید یکسان باشند.",
    path: ["confirm_password"],
  });

export const registerConfirmationSchema = z.object({
  phone_number: phoneNumberSchema,
  token: requiredStringSchema("کد تایید"),
});

// ========================================
// Password Reset Schemas
// ========================================

export const resetPasswordSchema = z.object({
  phone_number: phoneNumberSchema,
});

export const resetPasswordConfirmationSchema = z
  .object({
    phone_number: phoneNumberSchema,
    token: requiredStringSchema("کد تایید"),
    new_password: passwordSchema,
    confirm_new_password: passwordSchema,
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "رمز عبور جدید و تکرار آن باید یکسان باشند.",
    path: ["confirm_new_password"],
  });

// ========================================
// Change Password Schemas
// ========================================

export const changePasswordSchema = z
  .object({
    old_password: passwordSchema,
    new_password: passwordSchema,
    confirm_new_password: passwordSchema,
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "رمز عبور جدید و تکرار آن باید یکسان باشند.",
    path: ["confirm_new_password"],
  })
  .refine((data) => data.old_password !== data.new_password, {
    message: "رمز عبور جدید باید با رمز عبور فعلی متفاوت باشد.",
    path: ["new_password"],
  });
