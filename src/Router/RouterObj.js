import { LoginPage } from "../components/LoginPage/LoginPage";
import { Path } from "./Path";



export const publicPath = [
    {
        path: Path.loginPage,
        component: <LoginPage />
    },
    {
        path: Path.forgetPage,
        component: <ForgetPage />
    }
   
]

export const privatePath =[
    {
        path: path.master.Batchregister,
        component: <Batchregister />
    },
    {
        path: path.master.MentorRegister,
        component: <MentorRegister />

    },
    {
        path: path.master.studentRegister,
        component: <StudentRegister />
    },
    {
        path: path.makePayment,
        component: <MakePayment />
    },
    {
        path: path.paymentHistry,
        component: <PaymentHistory />
    },
    {
        path: path.preAlert,
        component: <PreAlert />
    },
    {
        path: path.alert,
        component: <Alert />
    },
    {
        path: path.extendedBatch,
        component: <ExtendBatch />
    },
    {
        path: path.pendingFees,
        component: <PendingFees />
    },
    {
        path: path.currentMonthLedger,
        component: <CurrenMonthLedger />
    }


]