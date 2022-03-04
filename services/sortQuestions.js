import data from "../database/data.json"

export default function sortQuestions(semestre, disciplina, index){
    
    return index + 1 >= data.Questions[semestre][disciplina].length ? 0 : index + 1;

}