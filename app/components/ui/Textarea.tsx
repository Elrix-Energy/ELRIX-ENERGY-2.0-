import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
}

export default function Textarea({ label, hint, id, className = "", ...props }: TextareaProps) {
  const textareaId = id ?? props.name;
  const hintId = hint && textareaId ? `${textareaId}-hint` : undefined;

  return (
    <div className="ui-field">
      <label className="ui-field__label" htmlFor={textareaId}>
        {label}
      </label>
      <textarea
        id={textareaId}
        className={`ui-field__control ui-field__control--textarea ${className}`.trim()}
        aria-describedby={hintId}
        {...props}
      />
      {hint && (
        <p className="ui-field__hint" id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
}
