import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { IResults, IObjArray } from './interfaces/interface';
import { domElements } from './domElements/domElements';
import './style/style.css';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("babel-core/register");
require("babel-polyfill");
Chart.register(...registerables);

const arrayObj: IObjArray = {
    jobsTitleArray: [],
}
const salarySet = new Set<number>();

document.addEventListener('DOMContentLoaded', getApiData);
domElements.selectorIdSelectData.addEventListener('click', selectDataByFilters);


export async function getApiData(): Promise<void> {
    try {
        const { data: { results } } = await axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=ccc38448&app_key=6e970519eb8e74ec75c0376db45da6ae`);
        getAllResults(results);
    } catch (err) {
        console.error('apiData', err);
    }
}

function putDataToLocalStorage(index: string, value: string | number): void {

    localStorage.setItem(index.toString(), JSON.stringify(value));
}

function getAllResults(results: IResults): void {

    Object.values(results).map((element, index) => {
        putDataToLocalStorage(`title-${index}`, element.title);
        putDataToLocalStorage(`salary_max-${index}`, element.salary_max);
        arrayObj.jobsTitleArray.push(element.title);
        salarySet.add(element.salary_min);
        salarySet.add(element.salary_max);
    });
    renderItems(arrayObj.jobsTitleArray, Array.from(salarySet));
}
async function selectDataByFilters(e: Event) {
    if ((<HTMLSelectElement>e.target).options.selectedIndex === 0) {
        const title: Array<string | null> = [];
        [0, 1, 2, 3, 4, 5, 6].forEach(e => {
            return title.push(localStorage.getItem(`title-${e}`));
        });
    }
}

function renderItems(jobsTitleArray: Array<string | number>, salarySet: Array<number>) {

    return new Chart((<HTMLCanvasElement><unknown>domElements.ctx), {
        type: 'bar',
        data: {
            labels: jobsTitleArray,
            datasets: [{
                label: 'Salaries by specialties',
                data: salarySet,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}





