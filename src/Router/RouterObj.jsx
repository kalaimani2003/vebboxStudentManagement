import { ForgetPage } from "../components/ForgetPage/ForgetPage";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { Dashboard } from "../screens/Dashboard/Dashboard";
import { Batchregister } from "../screens/Master/BatchRegister/Batchregister";
import { MentorRegister } from "../screens/Master/MentorRegister/MentorRegister";
import { StudentRegister } from "../screens/Master/StudentRegister/StudentRegister";
import { MakePayment } from "../screens/PaymentDetails/MakePayment/MakePayment";
import { PaymentHistory } from "../screens/PaymentDetails/PaymentHistory/PaymentHistory";
import { Alert } from "../screens/Report/Alert/Alert";
import { CurrenMonthLedger } from "../screens/Report/CurrentMonthLedger/CurrenMonthLedger";
import { ExtendBatch } from "../screens/Report/ExtendedBatch/ExtendBatch";
import { PendingFees } from "../screens/Report/PendingFees/PendingFees";
import { PreAlert } from "../screens/Report/PreAlert/PreAlert";
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
        path: Path.dashboard,
        component: <Dashboard />
    },
    {
        path: Path.batchRegister,
        component: <Batchregister />
    },
    {
        path: Path.mentorRegister,
        component: <MentorRegister />

    },
    {
        path: Path.studentRegister,
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