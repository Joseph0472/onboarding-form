import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BankingForm() {
    const [tax, setTax] = React.useState('');
    const [superannuation, setSuperannuation] = React.useState('');

    const handleChange = (event) => {
        const annualSalary = parseInt(event.target.value);
        annualSalary > 0 ? setSuperannuation((annualSalary * 0.11).toFixed(2))
                            : setSuperannuation('Invalid Input');
        switch (true) {
            case 0 < annualSalary && annualSalary <= 18200:
                setTax(0)
                break;
            case 18200 < annualSalary && annualSalary <= 37000:
                setTax(((annualSalary - 18200) * 0.19).toFixed(2))
                break;
            case 37000 < annualSalary && annualSalary <= 90000:
                setTax((3572 + (annualSalary - 37000) * 0.325).toFixed(2))
                break;
            case 90000 < annualSalary && annualSalary <= 180000:
                setTax((20797 + (annualSalary - 90000) * 0.37).toFixed(2))
                break;
            case 180000 < annualSalary:
                setTax((54097 + (annualSalary - 180000) * 0.45).toFixed(2))
                break;
            default:
                setTax('Invalid Input')
                break;
        }
    };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Banking Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="salary"
            name="salary"
            type="number"
            label="Base annual salary before tax (AUD)"
            fullWidth
            autoComplete="salary"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled="true"
            id="tax"
            name="tax"
            label="Your tax (AUD)"
            value={tax}
            fullWidth
            autoComplete="department"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled="true"
            id="super"
            name="super"
            label="Your superannuation (AUD)"
            value={superannuation}
            fullWidth
            autoComplete="superannuation"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="account"
            name="account"
            type="number"
            label="Banking account number"
            fullWidth
            autoComplete="account"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}