import { useState } from 'react'
import { JwtPayload, jwtDecode } from 'jwt-decode';

import { FormProvider } from './context/FormContext'
import FirstStepForm from './views/FirstStepForm/FirstStepForm'
import SecondStepForm from './views/SecondStepForm/SecondStepForm'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Thanks } from './views/Thanks/Thanks';
import LoginForm from './views/LoginForm/LoginForm';
import { Header } from './components/Header/Header';
import { isAuthenticated, getToken } from './services/auth';
import { OrderSubscription } from './views/Subscription/Order';
import { PlanListPage } from './views/Subscription/ListPlans';
import { ListRecommendationView } from './views/Recommendation/ListRecommendationView';
import { ShareCodeRecommendationView } from './views/Recommendation/ShareCodeRecommendationView';
import { ToastProvider } from './context/ToastContext';
import { IsLoggedProvider } from './context/IsLoggedContext';
import { MySubscriptionView } from './views/Subscription/MySubscription';
import { HeaderMenuAuth } from './components/Header/HeaderMenuAuth';
import { ClientListView } from './views/ClientsList/ClientListView';
import { ClientEditView } from './views/ClientsList/ClientEditView';
import { CompanyListView } from './views/Company/CompanyListView';
import { CompanyFormView } from './views/Company/CompanyFormView';
import { BankDataView } from './views/BanckData/BankDataView';
import { ProfileView } from './views/Profile/ProfileView';
import { CompanyPartnerListView } from './views/Company/CompanyPartnerListView';
import { ClientProfileView } from './views/ClientsList/ClientProfileView';
import { ModalProvider } from './context/ModalContext';
import { CompanyClientFormView } from './views/Company/CompanyClientFormView';
import { CouponListView } from './views/Coupon/CouponListView';
import { CouponProvider } from './context/Coupon/CouponContext';
import { ForgotPasswordForm } from './views/RecoverPassword/ForgotPasswordForm';
import { RecoverPasswordView } from './views/RecoverPassword/RecoverPasswordView';
import { EmployeeListView } from './views/Company/EmployeeListView';
import { RecommendationOfUsersView } from './views/Recommendation/ListRecommendationOfUsersView';
import { Home } from './views/Home/Home';
import { ExtractView } from './views/Extracts/ExtractView';
import { FooterLife } from './components/Footer/Footer.V2';
import { PlanView } from './views/Plans/PlansView';
import { ReportMenuView } from './views/Reports/ReportMenuView';
import { PontualListView } from './views/Reports/components/PontualList';
import { PreUserFormView } from './views/PreUser/PreUserFormVIew';
import { DocumenView } from './views/Documents/DocumentView';
import { ChangePasswordView } from './views/RecoverPassword/ChangePasswordView';
import { CompanyClientFormEditView } from './views/Company/CompanyClientFormEditView';
import { SubscriptionView } from './views/Subscription/SubscriptionsView';
import { EmployeeListAdminView } from './views/Company/EmployeeListAdminView';
import { CheckoutView } from './views/Checkout/Checkout.View';
import FirstStepFormCheckout from './views/FirstStepForm/FirstStepFormCheckout';
import SecondStepFormCheckout from './views/SecondStepForm/SecondStepFormCheckout';

interface IJwtPayload extends JwtPayload {
  access: [
    { authority: string }
  ]
}

const roles = [
  'ROLE_USER_SUBSCRIPTION',
  'ROLE_ADMIN'
]

const ProtectedRoute = ({ children }: any) => {
  if (!isAuthenticated()) return <Navigate to="/login" replace />

  const token = getToken();

  const decoded = jwtDecode<IJwtPayload>(token!);

  if (!decoded?.access?.filter(item => roles.includes(item.authority)).length)
    return (
      <main className=" App bg-[#F5F5F5] min-h-screen">
        <MySubscriptionView />
      </main>
    )

  return children
}

function App() {
  const [isFirstStepForm, setIsFirstStepForm] = useState(true)

  return (
    <FormProvider>
      <IsLoggedProvider>
        <ModalProvider>
          <Header />
          <HeaderMenuAuth />

          <ToastProvider>
            <Routes>
              <Route path='/login' element={
                <LoginForm />
              } />

              <Route path='/client/plans/:id' element={
                <main className="App min-h-screen flex justify-center flex-col items-center bg-[#F5F5F5]">
                  {isFirstStepForm ? <FirstStepForm nextStepForm={() => setIsFirstStepForm(false)} /> : <SecondStepForm />}
                </main>
              } />

              <Route path='/checkout/plan/subcritions/:tag_plan' element={
                <main className="App min-h-screen flex justify-center flex-col items-center bg-[#F5F5F5]">
                  {isFirstStepForm ? <FirstStepFormCheckout nextStepForm={() => setIsFirstStepForm(false)} /> : <SecondStepFormCheckout />}
                </main>
              } />

              <Route path="/obrigado" element={<Thanks />} />


              <Route path='/plans/:id/pay'
                element={
                  // <ProtectedRoute>
                    <main className="App min-h-screen bg-[#F5F5F5] mt-5">
                      <SecondStepForm />
                      {/* <Pagination /> */}
                    </main>
                  // </ProtectedRoute>
                }
              />

              <Route path='/'
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route path='/my-subscription/orders'
                element={
                  <ProtectedRoute>
                    {/* <main className="App min-h-screen bg-[#F5F5F5]"> */}
                    <OrderSubscription />
                    {/* <Pagination /> */}
                    {/* </main> */}
                  </ProtectedRoute>
                }
              />

              <Route path='/recommendations'
                element={
                  <ProtectedRoute>
                    <ListRecommendationView />
                  </ProtectedRoute>
                }
              />


              <Route path='/admin/recommendations'
                element={
                  <ProtectedRoute>
                    <RecommendationOfUsersView />
                  </ProtectedRoute>
                }
              />

              <Route path='/subscription/me'
                element={
                  <ProtectedRoute>
                    <main className=" App bg-[#F5F5F5] min-h-screen">
                      <MySubscriptionView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/share-indication-code'
                element={
                  <ProtectedRoute>
                    {/* <div className="App mt-0 flex justify-center flex-col items-center bg-[#F5F5F5]"> */}
                    <ShareCodeRecommendationView />
                    {/* </div> */}
                  </ProtectedRoute>
                }
              />

              <Route path='/documents'
                element={
                  <ProtectedRoute>
                    <main className=" App bg-[#F5F5F5] min-h-screen">
                      <DocumenView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CompanyListView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin/:company_id/employees'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <EmployeeListAdminView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin/social/add'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CompanyFormView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin/partners/add'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CompanyFormView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin/clients/add'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CompanyClientFormView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin/clients/:company_id/edit'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CompanyClientFormEditView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies-admin/clients/:company_id/employees'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CompanyClientFormEditView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/clients'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <ClientListView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route
                path='/clients/users/pre-register'
                element={
                  <PreUserFormView />
                }
              />

              <Route path='/clients/users/:user_id'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <ClientProfileView />
                    </main>
                  </ProtectedRoute>
                }
              />


              <Route path='/admin/plans'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <PlanView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/admin/subscriptions'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <SubscriptionView />
                    </main>
                  </ProtectedRoute>
                }
              />


              <Route path='/clients/new'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <ClientEditView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/user/me'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <ProfileView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/user/bank-data/me'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <BankDataView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies/partners'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CouponProvider>
                        <CompanyPartnerListView />
                      </CouponProvider>
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/companies/employees'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <EmployeeListView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/my-coupons'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <CouponProvider>
                        <CouponListView />
                      </CouponProvider>
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/financial-transactions'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <ReportMenuView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/financial-transactions/pontual'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <PontualListView />
                    </main>
                  </ProtectedRoute>
                }
              />

              <Route path='/extracts'
                element={
                  <ProtectedRoute>
                    <main className="App bg-[#F5F5F5] min-h-screen">
                      <ExtractView />
                    </main>
                  </ProtectedRoute>
                }
              />



              <Route
                path='/plans'
                element={
                  <main className="App min-h-screen flex flex-col items-center bg-[#F5F5F5]">
                    <PlanListPage />
                  </main>
                }
              />

              <Route
                path='/recover-password'
                element={
                  <ForgotPasswordForm />
                }
              />

              <Route
                path='/recover-password/:hash'
                element={
                  <RecoverPasswordView />
                }
              />

              <Route
                path='/change-password'
                element={
                  <ChangePasswordView />
                }
              />

              <Route path='/checkout' element={<CheckoutView />} />

            </Routes>
          </ToastProvider>
          <FooterLife />
        </ModalProvider>
      </IsLoggedProvider>
    </FormProvider>
  )
}

export default App
