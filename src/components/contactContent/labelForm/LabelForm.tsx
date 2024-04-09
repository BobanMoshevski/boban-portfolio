import { LabelFormPropsType } from '../contactContentTypes';

function LabelForm({ labelFor, onChange }: LabelFormPropsType) {
  const capitalizeLabelFor: string =
    labelFor.charAt(0).toUpperCase() + labelFor.slice(1);

  return labelFor !== 'message' ? (
    <label htmlFor={labelFor} className="form-control w-full">
      <div className="label">
        <span className="label-text">{capitalizeLabelFor}:</span>
      </div>
      <input
        id={labelFor}
        name={labelFor}
        type={labelFor === 'email' ? 'email' : 'text'}
        placeholder={`${capitalizeLabelFor} is requre!`}
        className="input input-bordered w-full"
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </label>
  ) : (
    <label htmlFor={labelFor} className="form-control">
      <div className="label">
        <span className="label-text">{capitalizeLabelFor}:</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-24"
        name={labelFor}
        placeholder={`${capitalizeLabelFor} is requre!`}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </label>
  );
}

export default LabelForm;
