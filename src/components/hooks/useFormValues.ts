import { useState } from "react";
import { FormTextValueType, FormValueType } from "../../types/FormTypes";

export const useFormValues = ()=>{

    const [formData, setFormData] = useState<FormValueType>({
        form1: "",
        form2: "",
        form3: "",
        form4: "",
        form5: "",
        form6: "",
        form7: "",
        form8: "",
        form9: "",
        form10: "",
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