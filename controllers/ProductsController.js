import Products from "../models/ProductsModel.js"
import { Sequelize } from "sequelize"

// export const getProducts=async(req,res)=>{

//     try{
//         const response=await Products.findAll()
//         res.status(200).json(response)
//     }
//     catch(error){
//         res.status(400)
//         console.log(error.message)
//     } 

// }

export const getProductById=async(req,res)=>{
    
    try{
        const response=await Products.findOne({
            where:{
                id:(req.params.id)
            }
        })

        res.status(200).json(response)
    }
    catch(error)
    {
        res.send(400)
        console.log(error.message)
    }


}


export const getProducts=async(req,res)=>{

    const {redColor,blueColor,whiteColor,greenColor,blackColor,priceAbove1500,priceAbove4000,priceAbove7000}=req.query
    
    console.log(req.query)
    
    try{
        
        let options={where :{}},priceFrom=100000,priceTo=0,colorFilter=[]

        
        if (redColor==0 && blueColor==0 && greenColor==0 && whiteColor==0 && blackColor==0)
        {
            colorFilter=['red','blue','green','white','black']
        }
        if (redColor==1)
        {
            colorFilter.push('red')
        }
        if (blueColor==1)
        {
            colorFilter.push('blue')
        }
        if (greenColor==1)
        {
            colorFilter.push('green')
        }
        if (whiteColor==1)
        {
            colorFilter.push('white')
        }
        if (blackColor==1)
        {
            colorFilter.push('black')
        }
        
        console.log(priceFrom+"  "+priceTo)
        console.log(colorFilter)

        if (priceAbove1500==0 && priceAbove4000==0 && priceAbove7000==0)
        {
            priceFrom=1500
            priceTo=100000

             
            const response=await Products.findAll({
                where: {
                    price: {
                    [Sequelize.Op.between]: [priceFrom, priceTo],
                    },
                    color: {
                    [Sequelize.Op.in]: colorFilter,
                    },
                },
            })
            res.status(200).json(response)
        }
        else 
        {
           
            console.log("Yes")
            var result=[]

            if (priceAbove1500==1)
            {
              let temp=await Products.findAll({
                where: {
                    price: {
                    [Sequelize.Op.between]: [1500,3999],
                    },
                    color: {
                    [Sequelize.Op.in]: colorFilter,
                    },
                },
              })
              
            //   console.log(temp)
            //   console.log("*******************")
              result=result.concat(temp)
            }

            if (priceAbove4000==1)
            {
              let temp=await Products.findAll({
                where: {
                    price: {
                    [Sequelize.Op.between]: [4000,6999],
                    },
                    color: {
                    [Sequelize.Op.in]: colorFilter,
                    },
                },
              })
              
            //   console.log(temp)
            //   console.log("*******************")
              result=result.concat(temp)
            }

            if (priceAbove7000==1)
            {
              let temp=await Products.findAll({
                where: {
                    price: {
                    [Sequelize.Op.between]: [7000,100000],
                    },
                    color: {
                    [Sequelize.Op.in]: colorFilter,
                    },
                },
              })
            //   console.log(temp)
              result=result.concat(temp)
            }

            console.log(result)
            res.status(200).json(result)
        } 
        
        
       
        
    }
    catch(error)
    {
        res.status(400).json(error)
    }

}



