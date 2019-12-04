import ky from "ky";

export const apiUrl = "http://localhost:8080"

export async function getAllGroups() {
    return await ky.get(apiUrl + "/groups").json();
}

export async function getAllStudents() {
    return await ky.get(apiUrl + "/students").json();
}