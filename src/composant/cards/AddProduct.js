import React, {useState} from "react";
import {Button, Form, FormLabel} from "react-bootstrap";
import axios from "axios";


function AddProduct() {

    const initialproductState={
        id:null,
        nom:'',
        prix:0,
        categorie:'',
        instock:0,
        image:null
    };

    const [product,setProduct]=useState(initialproductState)

function handleProductchange(e){
        const {name,value}=e.target
        setProduct({...product,[name]:value})
}

function handleImage(e){

        setProduct({...product,image: e.target.files[0]})
}

function submitProduct(){
        let form_data=new FormData();
        form_data.append('nom',product.nom);
        form_data.append('prix',product.prix);
        form_data.append('categorie',product.categorie);
        form_data.append('instock',product.instock);
        form_data.append('image',product.image,product.image.nom);




}

    return(
        <Form>
            <Form.Group controlId='name'>
              <FormLabel>
                  nom produit
              </FormLabel>
                <Form.Control type='name' name='name' placeholder='entrez le nom' onChange={handleProductchange}></Form.Control>
            </Form.Group>
            <Form.Group controlId='prix'>
              <FormLabel>
                  prix
              </FormLabel>
                <Form.Control type='number' name='price' placeholder='entrez le prix' onChange={handleProductchange}></Form.Control>
            </Form.Group>
             <Form.Group controlId='categorie'>
              <FormLabel>
                  categorie
              </FormLabel>
                <Form.Control type='name' name='category' placeholder='entrez la categorie' onChange={handleProductchange}></Form.Control>
            </Form.Group>
             <Form.Group controlId='stock'>
              <FormLabel>
                  instock
              </FormLabel>
                <Form.Control type='number' name='stock' placeholder='entrez le nombre disponible' onChange={handleProductchange}></Form.Control>
            </Form.Group>
             <Form.Group controlId='image'>
              <FormLabel>
                  image
              </FormLabel>
                <Form.File id='image-file' name='image' label='choisir un fichier' custom onChange={handleImage}/>
            </Form.Group>

<Button type='submit' variant='primary'>
ajouter
</Button>


        </Form>


    )

}