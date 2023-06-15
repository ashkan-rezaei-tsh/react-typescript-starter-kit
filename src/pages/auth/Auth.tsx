import { QueryClient, useMutation } from "@tanstack/react-query";
import Button from "../../components/auth/Button";
import Input from "../../components/auth/Input";
import AuthLayout from "./layout/AuthLayout";
import api from "@/gate/index";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, InferType } from "yup";
import { Helmet } from "react-helmet-async";
import { MOBILE_VALIDATION } from "@/lib/validations";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/loader/Spinner";

const mobileSchema = object({
    mobile: string()
        .matches(MOBILE_VALIDATION, "شماره همراه نامعتبر است")
        .required(),
}).required();

type MobileValidationSchema = InferType<typeof mobileSchema>;

const queryClient = new QueryClient();

const Auth = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MobileValidationSchema>({
        resolver: yupResolver(mobileSchema),
    });

    const { mutate, isLoading, data, status } = useMutation<any, Error, any>({
        mutationFn: api.register,
        onError: function (error) {
            console.log(error);
        },
        onSuccess(data, variables, context) {
            queryClient.setQueryData(["mobile"], variables.mobile);

            if (!data?.data?.has_account) {
                navigate(`/auth/sendCode?mobile=${variables.mobile}`);
            }

            if (data.data.has_password) {
                navigate("/auth/login-with-password");
            }
        },
    });

    const submitHandler: SubmitHandler<MobileValidationSchema> = (data) => {
        mutate({
            mobile: data.mobile,
        });
    };

    return (
        <AuthLayout>
            <Helmet>
                <title>ورود به حساب کاربری</title>
            </Helmet>
            <form onSubmit={handleSubmit(submitHandler)}>
                <h2 className="mb-8 text-white">ورود یا ثبت نام</h2>
                <div className="mx-auto my-4 flex w-10/12 flex-col gap-4">
                    {errors.mobile && (
                        <span className="mr-0 block pt-1 text-right text-xs text-red-500">
                            {errors.mobile?.message}
                        </span>
                    )}
                    <Input
                        dir="ltr"
                        placeholder="شماره همراه"
                        type="tel"
                        required
                        className={`${errors.mobile && "border-red-500"}`}
                        {...register("mobile")}
                    />
                </div>
                <Button
                    disabled={isLoading}
                    className="mx-auto mt-4 w-10/12 rounded-3xl"
                >
                    {isLoading ? (
                        <Spinner color="fill-purple-600 text-gray-200 dark:text-gray-600" />
                    ) : (
                        "ورود"
                    )}
                </Button>
            </form>
        </AuthLayout>
    );
};

export default Auth;
