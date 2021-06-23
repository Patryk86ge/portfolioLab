import React from 'react';
import AddClothesHeader from '../components/AddClothesHeader'
import Contact from "./Contact";
import Footer from "./Footer";
import FormStepOne from "./FormStepOne";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FormStepTwo from "./FormStepTwo";
import PrivateRoute from "./PrivateRoute";
import FormStepThree from "./FormStepThree";
import FormStepFor from "./FormStepFor";
import FormSumAdd from "./FormSumAdd";




const AddClothes = () => {
    return (
        <>
            <AddClothesHeader/>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path='/' component={FormStepOne}/>
                    <PrivateRoute path='/formStepOne' component={FormStepTwo}/>
                    <PrivateRoute path='/formStepThree' component={FormStepThree}/>
                    <PrivateRoute path='/formStepFor' component={FormStepFor}/>
                    <PrivateRoute path='/formSumAdd' component={FormSumAdd}/>
                </Switch>
            </BrowserRouter>
            <Contact/>
            <Footer/>
        </>
    );
}

export default AddClothes