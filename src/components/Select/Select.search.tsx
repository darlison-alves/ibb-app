import Select from 'react-select';

export const SelectSearch = ({ options = [], onChange, objectValue, keyCompare = "codigo", keyName="nome" }: any) => {
    console.log("objectValue", objectValue)
    return (
        <Select
            onChange={(newValue) => {
                onChange(newValue)
            }}
            isOptionSelected={(opt: any) => {
                if(!objectValue) return false;
                return (opt[keyCompare] == objectValue[keyCompare])
            }}
            value={objectValue}
            getOptionValue={(option: any) => option.id}
            getOptionLabel={(option: any) => {
                return option[keyName]
            }}
            // defaultValue={}
            options={options}
            styles={{
                control: (props): any => ({
                    ...props,
                    paddingTop: '0.40rem',
                    paddingBottom: '0.40rem'
                }),
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 4,
                colors: {
                    ...theme.colors,
                    primary25: '#f46102',
                    // primary: 'black',
                },
            })}
        />
    )
}