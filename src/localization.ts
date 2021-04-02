const studyingFormTranslation = {
    "fullTime": "Full time",
    "extramural": "Extramural "
}

export function humanizeStudyingForm(value) {
    return studyingFormTranslation[value]
}

export function getStudyingFormTranslation() {
    return Object.keys(studyingFormTranslation).map(k => ({ key: k, value: studyingFormTranslation[k] }))
}

const studentTypeTranslation = {
    "budget": "Budget",
    "commercial": "Commercial",
    "targeted": "Targeted"
}

export function humanizeStudentType(value) {
    return studentTypeTranslation[value]
}
export function getStudentTypeTranslation() {
    return Object.keys(studentTypeTranslation).map(k => ({ key: k, value: studentTypeTranslation[k] }))
}