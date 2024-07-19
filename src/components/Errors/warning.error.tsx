interface IWarningErrorProps {
    title: string;
    description?: string | any;
}

export const WarningError = ({ title, description }: IWarningErrorProps) => {

    if(!description) return <></>;

    return (
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">{title}</p>
            <p>{description}</p>
        </div>
    )
}