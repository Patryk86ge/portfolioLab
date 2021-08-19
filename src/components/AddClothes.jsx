import React, {useState} from 'react';
import AddClothesHeader from '../components/AddClothesHeader'
import Contact from "./Contact";
import Footer from "./Footer";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFor from "./FormStepFor";

const AddClothes = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const formNest = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const formPrev = () => {
    setCurrentStep((prev) => prev - 1)
  }

  return (
    <>
      <AddClothesHeader/>
      {
        currentStep === 1 && (
          <FormStepOne
            next={formNest}
          />
        )
      }
      {
        currentStep === 2 && (
          <FormStepTwo
            next={formNest}
            prev={formPrev}
          />
        )
      }
      {
        currentStep === 3 && (
          <FormStepThree
            next={formNest}
            prev={formPrev}
          />
        )
      }
      {
        currentStep === 4 && (
          <FormStepFor
            next={formNest}
            prev={formPrev}
          />
        )
      }
      <Contact/>
      <Footer/>
    </>
  )
};

export default AddClothes;
