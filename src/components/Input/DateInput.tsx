import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function DateInput({ name = '', onChange = () => { }, defaultValue = null}: any) {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    React.useEffect(() => {
        if(defaultValue) setValue(dayjs(defaultValue))
    }, [defaultValue])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                inputFormat='DD-MM-YYYY'
                label="Data Nascimento"
                value={value}
                onChange={(newValue) => {
                    onChange(newValue?.format());
                }}
                renderInput={(params) => <TextField name={name} {...params} />}
                className={`outline-none`}
            />
        </LocalizationProvider>
    );
}