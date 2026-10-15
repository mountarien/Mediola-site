const control =
  "mt-2 w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-[15px] text-navy-900 placeholder:text-navy-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent";

function Label({ label, optional }: { label: string; optional?: boolean }) {
  return (
    <span className="text-sm font-semibold text-navy-900">
      {label}
      {optional && <span className="ml-1.5 font-normal text-navy-400">(optional)</span>}
    </span>
  );
}

export function Field({
  label,
  optional,
  ...props
}: { label: string; optional?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <Label label={label} optional={optional} />
      <input {...props} className={control} />
    </label>
  );
}

export function TextAreaField({
  label,
  optional,
  ...props
}: { label: string; optional?: boolean } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <Label label={label} optional={optional} />
      <textarea {...props} className={control} />
    </label>
  );
}

export function SelectField({
  label,
  optional,
  children,
  ...props
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <Label label={label} optional={optional} />
      <select {...props} className={control}>
        {children}
      </select>
    </label>
  );
}

// A row of pill-shaped radio buttons or checkboxes.
export function ChoiceGroup({
  legend,
  name,
  options,
  type = "radio",
  defaultValue,
  required,
}: {
  legend: string;
  name: string;
  options: string[];
  type?: "radio" | "checkbox";
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-navy-900">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type={type}
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
              required={type === "radio" ? required : undefined}
              className="peer sr-only"
            />
            <span className="inline-block rounded-full border border-sand-300 bg-white px-4 py-2 text-sm text-navy-700 transition-colors peer-checked:border-navy-900 peer-checked:bg-navy-900 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-amber-500">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
