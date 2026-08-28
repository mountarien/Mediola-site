export function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-900">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
      />
    </label>
  );
}

export function TextAreaField({
  label,
  ...props
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-900">{label}</span>
      <textarea
        {...props}
        className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
      />
    </label>
  );
}

export function SelectField({
  label,
  children,
  ...props
}: {
  label: string;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-900">{label}</span>
      <select
        {...props}
        className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
      >
        {children}
      </select>
    </label>
  );
}
