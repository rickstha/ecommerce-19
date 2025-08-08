type CheckboxType = {
  label: string;
  name: string;
  //optional code
  number?: number;
  id?: number;
  type?: string;
  mainChar: string;
  mainData?: any;
  checkData?: boolean;
  removeData?: any;
  getData?: any;
  changeData?: any;

  onChange?: () => void;
};

const Checkbox = ({ type = "", label, name, onChange }: CheckboxType) => (
  <label
    htmlFor={`${label}-${name}`}
    className={`checkbox ${type ? `checkbox--${type}` : ""}`}
  >
    <input
      name={name}
      onChange={onChange}
      type="checkbox"
      id={`${label}-${name}`}
    />
    <span className="checkbox__check" />
    <p>{label}</p>
  </label>
);

export default Checkbox;
