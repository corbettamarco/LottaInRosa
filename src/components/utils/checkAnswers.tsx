import { solutions } from "./getForms";

export function checkAnswers(formResult: { [key: string]: { textValue: string, points: string } }) {
    let correctAnswers = 0;

    for (const [formName, formData] of Object.entries(formResult)) {
        const index = parseInt(formName.slice(-1)) - 1;
        if (formData.points === solutions[index]) {
            correctAnswers++;
        }
    }

    return correctAnswers;
}
