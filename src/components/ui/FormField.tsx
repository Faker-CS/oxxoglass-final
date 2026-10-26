import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { CheckIcon } from "@/components/icons/check";
import { cn } from "@/lib/cn";

const fieldClasses =
  "w-full rounded-field bg-white/12 px-6 font-inter text-base text-white placeholder:text-white transition-colors duration-200 hover:bg-white/15 focus:bg-white/18 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand";

type TextFieldProps = Omit<ComponentPropsWithoutRef<"input">, "className" | "placeholder"> & {
  label: string;
  className?: string;
};

/** Dark translucent input. The visible text is the placeholder (as in Figma); the label stays for screen readers. */
export function TextField({ label, id, className, ...props }: TextFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input id={id} placeholder={label} className={cn(fieldClasses, "h-14")} {...props} />
    </div>
  );
}

type TextAreaProps = Omit<ComponentPropsWithoutRef<"textarea">, "className" | "placeholder"> & {
  label: string;
  className?: string;
};

export function TextArea({ label, id, className, ...props }: TextAreaProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea id={id} placeholder={label} rows={4} className={cn(fieldClasses, "h-35.5 resize-none py-5")} {...props} />
    </div>
  );
}

type CheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "className"> & {
  children: ReactNode;
  className?: string;
};

export function Checkbox({ id, children, className, ...props }: CheckboxProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      <span className="relative flex size-10 shrink-0 items-center justify-center">
        <input
          id={id}
          type="checkbox"
          className="peer size-6 cursor-pointer appearance-none rounded-sm border border-brand transition-colors checked:bg-brand"
          {...props}
        />
        <CheckIcon className="pointer-events-none absolute size-3 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
      <label htmlFor={id} className="cursor-pointer py-2 text-xs font-medium text-paper">
        {children}
      </label>
    </div>
  );
}
