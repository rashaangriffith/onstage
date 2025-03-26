import { Control, Controller } from "react-hook-form";
import { TextInput } from "react-native";

export default function FormTextInput({
  name,
  placeholderLabel,
  control,
}: {
  name: string;
  placeholderLabel?: string;
  control: Control;
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholderLabel || name}
        />
      )}
    />
  );
}
