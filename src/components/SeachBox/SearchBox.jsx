import { Input, InputWrapper } from './SearchBox.styled';

export default function SeacrhBox({ value, onChange }) {
  return (
    <InputWrapper>
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </InputWrapper>
  );
}
