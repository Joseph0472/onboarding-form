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

export default function EmploymentForm() {
    const [status, setStatus] = React.useState('Employment type');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Employment Information
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="employeeId"
            name="employeeId"
            label="Employee ID"
            fullWidth
            autoComplete="employeeId"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="jobTitle"
            name="jobTitle"
            label="Job title"
            fullWidth
            autoComplete="jobTitle"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="department"
            name="department"
            label="department"
            fullWidth
            autoComplete="Department"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Select 
                labelId="label" 
                id="select" 
                value={status}
                fullWidth
                onChange={handleChange}
            >
                <MenuItem value="Employment type">Employment type</MenuItem>
                <MenuItem value="Fix-term">Fix-term</MenuItem>
                <MenuItem value="Permanent">Permanent</MenuItem>
            </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Employment start date"/>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}