interface IIndicationInfoProps {
    titles: Array<string>;
    top: object;
    center: object;
    bottom: object;
}

export const IndicationInfo = ({ top, center, bottom, titles = [] }: IIndicationInfoProps) => {

    const info = (payload: any, positionTitle: number) => {
        const infos = Object.keys(payload);
        if (!infos.length) return
        return (
            <div className="p-2">
                {infos.length && <label className="text-gray-600 font-bold">{titles[positionTitle]}</label>}
                <hr />
                {
                    infos.map(title => (
                    <div className="flex p-2 flex-row justify-left justify-between space-x-5">
                        <label>{title}:</label>
                        <label>{payload[title]}</label>
                    </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            {info(top, 0)}
            {info(center, 1)}
            {info(bottom, 2)}
        </div>
    )
}