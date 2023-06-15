// import { Login } from "components";
// import { SendCode, ChangePassword, VerifyTokenT } from "./../interfaces/login";
import { Register } from "@/interfaces/auth";
import api from "./api";

// const uploadFile = {
//     uploadFile: (data: FormData, onUploadProgress: ((progressEvent: any) => void) | undefined) =>
//         api.file("/file-upload", data, onUploadProgress),
// };

// const home = {
//     home: () => api.get("/home"),
//     getProductDetails: ({ id }: { id: number | string }) => api.get(`Product/api/Product/GetProductById/${id}`),
// };
const auth = {
    register: (data: Register) => api.post("/user/authenticate", data),
    // sendCode: (data: any) => api.post("/", data),
    // changePass: (data: any) => api.post("/", data),
    // login: (data: Register) => api.post("/", data),
    // captcha: () => api.get("Idp/Account/GenerateCaptcha"),
    // sendCaptcha: (data: any) => api.get("Idp/Account/SendVerifyCode", data),
    // verifyToken: (data: VerifyTokenT) => api.post("/Idp/Account/SendVerfyToken", data),
};
// const invoice = {
//     factor: (orderId: number | string) => api.get(`Invoice/api/Invoice/GetInvoiceById?invoiceId=${orderId}`),
// };

export default {
    ...auth,
    // ...uploadFile,
    // ...home,
    // ...invoice,
};
