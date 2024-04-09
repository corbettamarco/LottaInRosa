import { Form2 } from "../FormPages/Form2";

export const solutions = [
  '1','3','2','3','3','1','4','2'
]

export const getForms = (
  formData: any,
  setFormData: any,
  formTextValue: any,
  setFormTextValue: any
) => {
  return [
    {
      key: 1,
      component: (
        <Form2
          formNumber={"form1"}
          subtitle="Il carcinoma della mammella rappresenta il ____ di tutti I tumori che colpiscono le donne."
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={1}
          answers={["25%", "50%", "10%", "18%"]}
        />
      ),
    },
    {
      key: 2,
      component: (
        <Form2
          formNumber={"form2"}
          subtitle="Nel corso degli ultimi 3 decenni l'incidenza è: "
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={2}
          answers={[
            "Diminuita del 10% l'anno",
            "Nè diminuita nè aumentata",
            "Aumentata del 3% l'anno",
            "Diminuita del 2% l'anno",
          ]}
          
        />
      ),
    },
    {
      key: 3,
      component: (
        <Form2
          formNumber={"form3"}
          subtitle="Ogni ___ una donna nel mondo riceve una diagnosi di tumore al seno"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={3}
          answers={["3 minuti", "19 secondi", "60 minuti", "20 minuti"]}
          
        />
      ),
    },
    {
      key: 4,
      component: (
        <Form2
          formNumber={"form4"}
          subtitle="Il tasso di guarigione quando il tumore è scoperto in fase iniziale è del: "
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={4}
          answers={["100%", "90%", "98%", "79%"]}
          
        />
      ),
    },
    {
      key: 5,
      component: (
        <Form2
          formNumber={"form5"}
          subtitle="Tra I fattori di protezione vi è: "
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={5}
          answers={[
            "Le radiazioni ionizzanti",
            "La terapia ormonale sostitutiva",
            "Una prima gravidanza precoce",
            "Un precedente carcinoma della mammella",
          ]}
          
        />
      ),
    },
    {
      key: 6,
      component: (
        <Form2
          formNumber={"form6"}
          subtitle="Consumare 3 bicchieri alcolici al giorno aumenta del ___ il rischio di cancro al seno"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={6}
          answers={["50%", "25%", "10%", "70%"]}
          
        />
      ),
    },
    {
      key: 7,
      component: (
        <Form2
          formNumber={"form7"}
          subtitle="Ogni anno in Italia sono diagnosticati circa ___ nuovi casi"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={7}
          answers={["22.000", "33.000", "44.000", "55.000"]}
          
        />
      ),
    },
    {
      key: 8,
      component: (
        <Form2
          formNumber={"form8"}
          subtitle="Lo stile di vita condotta concorre del ___ al rischio di cancro al seno"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={8}
          answers={["20%", "30%", "50%", "15%"]}
          
        />
      ),
    },
    // {
    //   key: 7,
    //   component: (
    //     <Form3
    //       formNumber={"form7"}
    //       title="CONSIGLIERESTI UN PRODOTTO TOD'S AD UN AMICO?"
    //       formData={formData}
    //       setFormData={setFormData}
    //       key={7}
    //     />
    //   ),
    // },
    // {
    //   key: 8,
    //   component: (
    //     <Privacy
    //       formNumber={"form8"}
    //       formData={formData}
    //       setFormData={setFormData}
    //       key={8}
    //     />
    //   ),
    // },
  ];
};
