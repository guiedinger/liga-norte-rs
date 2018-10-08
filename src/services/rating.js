import csvToJson from 'convert-csv-to-json';

//csvToJson.generateJsonFileFromCsv('rating.csv', 'rating.json');

export default  csvToJson.formatValueByType().getJsonFromCsv('rating.csv');


