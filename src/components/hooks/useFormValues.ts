import { useState } from "react";
import { FormTextValueType } from "../../types/FormTypes";

export const useFormValues = ()=>{

    const [formData, setFormData] = useState<any>({
        form1: "",
        form2: "",
        form3: "",
        form4: "",
        form5: "",
        form6: "",
        form7: "",
        form8: false,
      });
    
      const [formTextValue, setFormTextValue] = useState<FormTextValueType>({
        form2: "",
        form3: "",
        form4: "",
        form5: "",
        form6: "",
      });

      

      return {formData, setFormData , formTextValue, setFormTextValue}
    
}