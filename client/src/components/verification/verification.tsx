import {Button, Heading, HStack, PinInput, PinInputField, Stack, Text, useColorModeValue} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {Form, Formik} from "formik";
import {AuthValidation} from "../../validations/auth.validation";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ErrorAlert} from "../index";

const Verification = () => {
    const {t} = useTranslation();
    const {verifyVerificationCode, register} = useActions();
    const {error, isLoading, user} = useTypedSelector(state => state.user)
    const onSubmit = (formData: { otp: string }) => {
        const data = {email: user?.email as string, otpVerification: formData.otp}
        verifyVerificationCode(data)
        console.log(formData.otp)
    }
    return (
        <Stack spacing={4}>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}
            >
                {t('verification_title', {ns: 'global'})}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{base: 'sm', sm: 'md'}}>
                {t('verification_description', {ns: 'global'})}
            </Text>
            <>{error && (
                <ErrorAlert title={error as string}/>
            )}</>
            <Formik onSubmit={onSubmit} initialValues={{otp: ''}} validationSchema={AuthValidation.otp}>
                {formik => (
                    <Form>

                        <HStack justify={'center'}>
                            <PinInput onChange={val => formik.setFieldValue('otp', val)} otp size={'lg'}
                                      colorScheme={'facebook'} focusBorderColor={'facebook.500'}>
                                {new Array(6).fill(1).map((_, idx) => (
                                    <PinInputField key={idx}/>
                                ))}
                            </PinInput>
                        </HStack>
                        <Button
                            mt={4}
                            w={'full'}
                            bgGradient='linear(to-r, facebook.400,gray.400)'
                            color={'white'}
                            _hover={{bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl'}}
                            h={14}
                            type={'submit'}
                            isLoading={isLoading}
                            loadingText={'Loading...'}
                        >
                            {t('verification_btn', {ns: 'global'})}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
};

export default Verification;