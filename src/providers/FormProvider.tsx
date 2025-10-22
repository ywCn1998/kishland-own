"use client"
import type { CSSProperties, ReactNode } from "react";
// form
import { FormProvider as Form, useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: () => void;
  style?: CSSProperties;
  id?: string;
  className?: string
};

// const dummyChildren: ReactNode = <div>Test content</div>;

// const dummyMethods: UseFormReturn<any> = useForm(); // create dummy RHF methods

// const testProps: Props = {
//   children: dummyChildren,
//   methods: dummyMethods,
//   onSubmit: () => console.log("Form submitted"),
//   style: { padding: "1rem", backgroundColor: "#f0f0f0" },
//   id: "test-form",
//   className: "test-class",
// };

const FormProvider = ({ children, className, onSubmit, methods, style, id }: Props) => (
  <Form {...methods}>
    <form {...{ className }} {...{ id }} {...{ style }} onSubmit={onSubmit}>
      {children}
    </form>
  </Form>
);

export default FormProvider;
