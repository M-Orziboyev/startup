import {TextFieldProps} from "./text-filed.props";
import {ErrorMessage, FieldHookConfig, useField} from "formik";
import {FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const TextFiled = ({label, placeholder, type, children, disabled, ...props}: TextFieldProps & FieldHookConfig<string>) => {
    const [field, meta] = useField(props);
    return (
        <FormControl isRequired isInvalid={!!meta.touched && !!meta.error}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input focusBorderColor='facebook.500' placeholder={placeholder} h={14} type={type} disabled={disabled} {...field}/>
                {children}
            </InputGroup>
            <FormErrorMessage>
                <ErrorMessage name={field.name} />
            </FormErrorMessage>
        </FormControl>
    )
}

export default TextFiled