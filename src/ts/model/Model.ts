import axios from 'axios';
import { IResults, IObjArray } from '../interfaces/interface';
//import { View } from '../View/View';


require("babel-core/register");
require("babel-polyfill");

const salarySet = new Set<number>();
const arrayObj: IObjArray = {
    jobsTitleArray: [],
}

//const view = new View;

export class Model {
    putDataToLocalStorage = (index: string, value: string | number): void => {

        localStorage.setItem(index.toString(), JSON.stringify(value));
    }

    getAllResults = (results: IResults): void => {
        Object.values(results).map((element, index) => {
            this.putDataToLocalStorage(`title-${index}`, element.title);
            this.putDataToLocalStorage(`salary_max-${index}`, element.salary_max);
            arrayObj.jobsTitleArray.push(element.title);
            salarySet.add(element.salary_min);
            salarySet.add(element.salary_max);
        });
        //  view.renderItems(arrayObj.jobsTitleArray, Array.from(salarySet));
    }

    getApiData = async (): Promise<void> => {
        try {
            const { data: { results } } = await axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=ccc38448&app_key=6e970519eb8e74ec75c0376db45da6ae`);
            console.log(results);
            this.getAllResults(results);
        } catch (err) {
            console.error('apiData', err);
        }

    }
    selectDataByFilters = (e: Event): void => {
        if ((<HTMLSelectElement>e.target).options.selectedIndex === 0) {
            const title: Array<string | null> = [];
            [0, 1, 2, 3, 4, 5, 6].forEach(e => {
                return title.push(localStorage.getItem(`title-${e}`));
            });

            console.log(title);
            //  myChart.destroy();
            //  renderItems(title, null);
        }

    }
}