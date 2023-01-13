import Products from "./models/ProductsModel.js"
import data from './data/Shoes.js'

const importData=async()=>{
     
    try{

         await Products.destroy({
            where: {},
            truncate: true
          })  

          await Products.bulkCreate([...data])
          console.log('Data Imported')
    }
    catch(error){
        
        console.log(error)
        
    }


}

importData()