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

export const privatePath = [
    {
        path: Path.master.Batchregister,
        component: <Batchregister />
    },
    {
        path: Path.master.MentorRegister,
        component: <MentorRegister />

    },
    {
        path: Path.master.studentRegister,
        component: <StudentRegister />
    },
    {
        path: Path.makePayment,
        component: <MakePayment />
    },
    {
        path: Path.paymentHistry,
        component: <PaymentHistory />
    },
    {
        path: Path.preAlert,
        component: <PreAlert />
    },
    {
        path: Path.alert,
        component: <Alert />
    },
    {
        path: Path.extendedBatch,
        component: <ExtendBatch />
    },
    {
        path: Path.pendingFees,
        component: <PendingFees />
    },
    {
        path: Path.currentMonthLedger,
        component: <CurrenMonthLedger />
    }


]