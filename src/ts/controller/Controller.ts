import { Model } from '../model/Model';
import { domElements } from '../domElements/domElements';
import '../style/style.css';

console.log('work');
const model = new Model();
document.addEventListener('DOMContentLoaded', model.getApiData);
domElements.selectorIdSelectData.addEventListener('click', model.selectDataByFilters);

