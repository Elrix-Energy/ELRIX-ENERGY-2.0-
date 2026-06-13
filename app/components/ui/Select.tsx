import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  hint?: string;
}

export default function Select({ label, options, hint, id, className = "", ...props }: SelectProps) {
  const selectId = id ?? props.name;
  const hintId = hint && selectId ? `${selectId}-hint` : undefined;

  return (
    <div className="ui-field">
      <label className="ui-field__label" htmlFor={selectId}>
        {label}
      </label>
      <select
        id={selectId}
        className={`ui-field__control ${className}`.trim()}
        aria-describedby={hintId}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && (
        <p className="ui-field__hint" id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
}
