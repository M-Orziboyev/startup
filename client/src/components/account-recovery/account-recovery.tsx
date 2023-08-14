import {
    Button, Center,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    PinInput,
    PinInputField,
    Progress,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {useShowPassword} from 'src/hooks/useShowPassword';
import {AccountRecoveryProps} from './account-recovery.props';
import {Form, Formik} from "formik";
import {AuthValidation} from "../../validations/auth.validation";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ErrorAlert} from "../index";
import TextFiled from "../text-field/text-filed";

const AccountRecovery = ({onNavigateStateComponent}: AccountRecoveryProps) => {
    const [progress, setProgress] = useState<33.33 | 66.66 | 100>(33.33);
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [email, setEmail] = useState<string>('');

    const {show, toggleShow, showConfirm, toggleShowConfirm} = useShowPassword();
    const toast = useToast();
    const {t} = useTranslation();
    const {sendVerificationCode, verifyVerificationCode, editProfilePassword} = useActions();
    const {error, isLoading} = useTypedSelector(state => state.user)

    const onForm1Submit = (formData: { email: string }) => {
        sendVerificationCode({
            email: formData.email, isUser: true, callback: () => {
                setEmail(formData.email)
                setStep(2);
                setProgress(66.66);
            }
        })
    };

    const form1 = (
        <>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}
            >
                {t('account_recovery_title_form1', {ns: 'global'})}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text>{t('account_recovery_description_form1', {ns: 'global'})}</Text>
            <>{error && (
                <ErrorAlert title={error as string}/>
            )}</>
            <Formik initialValues={{email: ''}} onSubmit={onForm1Submit} validationSchema={AuthValidation.onlyEmail}>
                <Form>
                    <TextFiled name={'email'} label={t('login_input_email_label', {ns: 'global'})} type={'text'}
                               placeholder={'info@lyceum.ac'}/>
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
                        {t('account_recovery_btn_form1', {ns: 'global'})}
                    </Button>
                </Form>
            </Formik>
        </>
    );

    const onForm2Submit = (formData: { otp: string }) => {
        verifyVerificationCode({
            email: email, otpVerification: formData.otp, callback: () => {
                setStep(3);
                setProgress(100);
            }
        })
    };

    const form2 = (
        <>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}
            >
                {t('account_recovery_title_form2', {ns: 'global'})}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text>{t('account_recovery_description_form2', {ns: 'global'})}</Text>
            <>{error && (
                <ErrorAlert title={error as string}/>
            )}</>
            <Formik initialValues={{otp: ''}} onSubmit={onForm2Submit} validationSchema={AuthValidation.otp}>
                {formik => (
                    <Form>
                        <Center>
                            <PinInput onChange={val => formik.setFieldValue('otp', val)} otp size={'lg'}
                                      colorScheme={'facebook'} focusBorderColor={'facebook.500'}
                            >
                                {new Array(6).fill(1).map((_, idx) => (
                                    <PinInputField key={idx} borderColor={
                                        formik.errors.otp && formik.touched.otp
                                            ? 'red.500' : 'facebook.500'
                                    }
                                    />
                                ))}
                            </PinInput>
                        </Center>
                        <Button
                            w={'full'}
                            bgGradient='linear(to-r, facebook.400,gray.400)'
                            color={'white'}
                            _hover={{bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl'}}
                            h={14}
                            mt={4}
                            type={'submit'}
                            isLoading={isLoading}
                            loadingText={'Loading...'}
                        >
                            {t('account_recovery_btn_form2', {ns: 'global'})}
                        </Button>
                        {formik.errors.otp && formik.touched.otp && (
                            <Text textAlign={'center'} mt={2} fontSize='14px' color={'red.500'}>
                                {formik.errors.otp as string}
                            </Text>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    );

    const onForm3Submit = (formData: { password: string }) => {
        editProfilePassword({
            email, password: formData.password, callback: () => {
                onNavigateStateComponent('login');
                toast({
                    title: 'Successfully edited',
                    description: 'You can login to account with new passowrd',
                    status: 'success',
                    position: 'top-right',
                    isClosable: true,
                });
            }
        })
    };

    const form3 = (
        <>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}
            >
                {t('account_recovery_title_form3', {ns: 'global'})}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text>{t('account_recovery_description_form3', {ns: 'global'})}</Text>
            <>{error && (
                <ErrorAlert title={error as string}/>
            )}</>
            <Formik initialValues={{password: '', confirmPassword: ''}} onSubmit={onForm3Submit}
                    validationSchema={AuthValidation.editPassword}>
                <Form>
                    <TextFiled name='password' label={t('account_recovery_title_form3', {ns: 'global'})}
                               type={!showConfirm ? 'password' : 'text'}
                               placeholder={'****'}>
                        <InputRightElement pt={4}>
                            <Icon as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'}
                                  onClick={toggleShow}/>
                        </InputRightElement>
                    </TextFiled>
                    <TextFiled name='confirmPassword'
                               label={t('register_input_confirm_password_label', {ns: 'global'})}
                               type={!showConfirm ? 'password' : 'text'} placeholder={'****'}>
                        <InputRightElement pt={4}>
                            <Icon as={!showConfirm ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'}
                                  onClick={toggleShowConfirm}/>
                        </InputRightElement>
                    </TextFiled>
                    <Button
                        w={'full'}
                        bgGradient='linear(to-r, facebook.400,gray.400)'
                        color={'white'}
                        _hover={{bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl'}}
                        h={14}
                        mt={4}
                        type={'submit'}
                        isLoading={isLoading}
                        loadingText={'Loading...'}
                    >
                        {t('account_recovery_btn_form3', {ns: 'global'})}
                    </Button>
                </Form>
            </Formik>

        </>
    );

    return (
        <>
            <Progress value={progress} colorScheme={'facebook'} hasStripe isAnimated/>

            <Stack spacing={4}>
                {step == 1 && form1}
                {step == 2 && form2}
                {step == 3 && form3}
            </Stack>
        </>
    );
};

export default AccountRecovery;