import Productmodel from "./Productmodel.controller.js";



export default class Productcontroller{
    getallproducts(req,res)
    {
     const alldata =Productmodel.getalldata();
     res.status(200).send(alldata);
    }

    addproduct(req,res)
    {
         const {name,price,sizes} = req.body;
         const newproduct ={
            name,
         
            price:parseFloat(price),
            // sizes:sizes.split(''),
            imgurl:req.file.filename,
         }

       const km =   Productmodel.adddata(newproduct);

         res.status(201).send(km)
         
    }

     rateproduct(req,res){

    }



    filterproduct(req,res)
    {
      const max = req.query.max;
      const min = req.query.min;
      const category =req.query.category;

      console.log("hey your filter data",max,min,category);
      
     const result= Productmodel.profilter(min,max,category);
     res.status(200).send(result);
         
      
    }


    getoneproduct(req,res){
          const id = req.params.id;
          const singledata= Productmodel.getsingledata(id);
        
          
           if(!singledata)
            return res.status(404).send("product not found");
          else{
                res.status(200).send(singledata);
          }
    }
}