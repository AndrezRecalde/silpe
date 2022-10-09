import { useEffect, useRef, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useTramiteStore } from '../../../hooks/useTramiteStore';
import { TramiteModal } from './TramiteModal';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";


import 'sweetalert2/dist/sweetalert2.min.css';
import '../../../styles/index.css';


const initialForm = {
    cnsctvo_rta: ""
}

export const TramitePage = () => {

    const { startSearch, errorMessage } = useTramiteStore();

    const { values, handleInputChange, reset } = useForm(initialForm);

    const { cnsctvo_rta } = values;

    const [year, setYear] = useState(0);

    const [captchaValido, setCaptchaValido] = useState(null);

    const [validateYear, setValidateYear] = useState(false);

    const date = new Date();

    const yearCurrent = date.getFullYear();

    const captcha = useRef(null);



    const handleChangeYear = ({ target }) => {
        setYear(target.value);
    }

    const onChangeCaptcha = () => {
        if (captcha.current.getValue()) {
            setCaptchaValido(true);
            console.log('El usuario no es un robot');
        }
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (captcha.current.getValue() && year != 0) {
            setCaptchaValido(true);
            setValidateYear(false);

            if (yearCurrent == year) {
                startSearch(cnsctvo_rta);
            } else if (cnsctvo_rta.length == 1) {
                startSearch(`${year}00000${cnsctvo_rta}`);

            } else if (cnsctvo_rta.length == 2) {
                startSearch(`${year}0000${cnsctvo_rta}`);

            } else if (cnsctvo_rta.length == 3) {
                startSearch(`${year}000${cnsctvo_rta}`);

            } else {
                startSearch(`${year}00${cnsctvo_rta}`);

            }
            reset();

        } else {
            console.log('Por favor acepta el captcha');
            setCaptchaValido(false);
            setValidateYear(true);

        }

    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error', (errorMessage), 'error');
        }
    }, [errorMessage])

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-sm-12">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h3>Consulta de Trámite</h3>
                            </div>
                            <div className="card-body">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={handleOnSubmit}
                                >
                                    <FormControl sx={{ m: 1, minWidth: 120 }} error={validateYear}>
                                        <InputLabel id="demo-simple-select-helper-label">Año</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={year}
                                            label="Año"
                                            onChange={handleChangeYear}
                                        >
                                            <MenuItem value={0}>
                                                <em>Seleccione el año de su documento</em>
                                            </MenuItem>
                                            <MenuItem value={2022}>2022</MenuItem>
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2020}>2020</MenuItem>
                                            <MenuItem value={2019}>2019</MenuItem>
                                            <MenuItem value={2018}>2018</MenuItem>
                                            <MenuItem value={2017}>2017</MenuItem>
                                            <MenuItem value={2016}>2016</MenuItem>
                                            <MenuItem value={2015}>2015</MenuItem>
                                            <MenuItem value={2014}>2014</MenuItem>
                                            <MenuItem value={2013}>2013</MenuItem>
                                            <MenuItem value={2012}>2012</MenuItem>
                                        </Select>
                                        {year === 0 &&
                                            <FormHelperText>Seleccione el año de su documento</FormHelperText>
                                        }
                                    </FormControl>

                                    <TextField
                                        id="outlined-basic"
                                        label="Número de Trámite"
                                        variant="outlined"
                                        name="cnsctvo_rta"
                                        value={cnsctvo_rta}
                                        onChange={handleInputChange}
                                    />
                                    <figcaption className="blockquote-footer mb-3">
                                        Por favor <cite title="tramite">Digite su número de trámite</cite>
                                    </figcaption>
                                    <hr />

                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <div className="d-flex justify-content-center">
                                            <ReCAPTCHA
                                                ref={captcha}
                                                sitekey="6Lcy_D8iAAAAAHPkjm1QES0NWnBKY6VPPd1-fT18"
                                                onChange={onChangeCaptcha}
                                            />
                                        </div>
                                        {captchaValido === false &&
                                            <div className="d-flex justify-content-center">
                                                <Typography className="mt-3" sx={{ color: "red" }}>
                                                    Por favor verifique que NO sea un robot
                                                </Typography >
                                            </div>

                                        }
                                    </FormControl>


                                    <Button type="submit" variant="contained" disableElevation size="large">
                                        Buscar Trámite
                                    </Button>
                                </Box>
                            </div>
                            <div className="card-footer">
                                <div className="d-grid gap-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TramiteModal />
        </>
    )
}
