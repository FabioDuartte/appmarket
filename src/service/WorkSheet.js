const XLSX = require ("xlsx");

// const Product = {
//     Nome: "",
//     //preco: 0,
//     // CategorieId: 0,
//     Categorie: 0,
//     // marketId: 0
//     Preco: 0
// }

export default async (xlsxPath) => {  
    const data = await xlsxPath.arrayBuffer();
    const workbook = XLSX.read(data)       
    return XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    
}
