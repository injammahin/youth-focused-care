export default function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      {children}
      {hint ? <span className="mt-2 block text-xs font-semibold leading-5 text-slate-500">{hint}</span> : null}
    </label>
  );
}
