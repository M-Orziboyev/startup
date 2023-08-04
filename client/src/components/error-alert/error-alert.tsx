import {Alert, AlertDescription, AlertIcon, AlertTitle} from "@chakra-ui/alert";
import {ErrorAlertProps} from "./error-alert.props";

const ErrorAlert = ({title}: ErrorAlertProps) => {
    return (
        <Alert status='error'>
            <AlertIcon/>
            <AlertDescription>{title}</AlertDescription>
        </Alert>
    );
};
export default ErrorAlert