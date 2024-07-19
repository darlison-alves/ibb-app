import { PreUserForm } from "../../components/Forms/PreUser.Form"

export const PreUserFormView = () => {
    return (
        <div className="min-h-screen justify-center">
            <PreUserForm
                onAfterSuccessSubmit={(data:any) => {
                    console.log('data', data)
                }}
            />
        </div>
    )
}